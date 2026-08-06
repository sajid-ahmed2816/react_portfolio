const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const embeddingModel = genAI.getGenerativeModel({
  model: "gemini-embedding-001",
});

const generateEmbedding = async (text) => {
  try {
    const result = await embeddingModel.embedContent(text);

    return result.embedding.values;
  } catch (error) {
    console.error("Embedding generation failed:", error.message);
    throw error;
  }
};

module.exports = generateEmbedding;