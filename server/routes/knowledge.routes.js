const express = require("express");
const Knowledge = require("../models/Knowledge");
const generateEmbedding = require("../services/embedding.service");
const searchKnowledge = require("../services/vector-search.service");
const generateRAGAnswer = require("../services/rag.service");
const detectCategory = require("../utils/detectCategory");

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

    const category = detectCategory(query);

    const result = await generateRAGAnswer(query, category, conversationHistory);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("AI answer generation failed:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;