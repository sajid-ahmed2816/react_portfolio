const express = require("express");
const Knowledge = require("../models/Knowledge");
const ChatCache = require("../models/ChatCache");
const generateEmbedding = require("../services/embedding.service");
const searchKnowledge = require("../services/vector-search.service");
const generateRAGAnswer = require("../services/rag.service");
const detectCategory = require("../utils/detectCategory");
const normalizeQuery = require("../utils/normalizeQuery");
const searchCachedAnswer = require("../services/cache-search.service");
const resolveCategories = require("../utils/resolveCategory");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const knowledge = await Knowledge.create(req.body);

    res.status(201).json({
      success: true,
      message: "Knowledge created successfully",
      data: knowledge,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.post("/test-embedding", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Text is required",
      });
    }

    const embedding = await generateEmbedding(text);

    res.status(200).json({
      success: true,
      message: "Embedding generated successfully",
      dimensions: embedding.length,
      embedding,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.post("/search", async (req, res) => {
  try {
    const { query } = req.body;

    if (!query || !query.trim()) {
      return res.status(400).json({
        success: false,
        message: "Query is required",
      });
    }

    const category = detectCategory(query);

    const results = await searchKnowledge(query, 5, category);

    res.status(200).json({
      success: true,
      count: results.length,
      data: results,
    });
  } catch (error) {
    console.error("Knowledge search failed:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

router.post("/ask", async (req, res) => {
  try {
    const { query, conversationHistory = [] } = req.body;

    if (!query || !query.trim()) {
      return res.status(400).json({
        success: false,
        message: "Query is required",
      });
    }

    const normalizedQuery = normalizeQuery(query);
    const categories = resolveCategories(query, conversationHistory);

    const cached = await ChatCache.findOne({
      question: normalizedQuery,
    });

    if (cached) {
      console.log("Cache HIT:", normalizedQuery);

      return res.status(200).json({
        success: true,
        data: {
          answer: cached.answer,
          sources: cached.sources,
          cached: true,
          cacheType: "exact",
        },
      });
    };

    const questionEmbedding = await generateEmbedding(query);
    const semanticCached = await searchCachedAnswer(questionEmbedding, categories);

    if (semanticCached) {
      console.log(
        "Semantic Cache HIT:",
        semanticCached.question,
        semanticCached.score
      );

      return res.status(200).json({
        success: true,
        data: {
          answer: semanticCached.answer,
          sources: semanticCached.sources,
          cached: true,
          cacheType: "semantic",
          similarity: semanticCached.score,
        },
      });
    };

    const result = await generateRAGAnswer(query, categories, conversationHistory);

    await ChatCache.create({
      question: normalizedQuery,
      embedding: questionEmbedding,
      category: categories,
      answer: result.answer,
      sources: result.sources,
    });


    res.status(200).json({
      success: true,
      data: {
        ...result,
        cached: false,
      },
    });
  } catch (error) {
    console.error("AI answer generation failed:", error);

    if (error.status === 429) {
      return res.status(429).json({
        success: false,
        message: "AI is temporarily unavailable. Please try again shortly.",
      });
    }

    res.status(500).json({
      success: false,
      message: "Unable to process your request right now. Please try again shortly.",
    });
  }
});

module.exports = router;