const searchKnowledge = require("./vector-search.service");
const generateAnswer = require("./ai.service");

const generateRAGAnswer = async (
  question,
  category = null,
  conversationHistory = []
) => {
  // Build contextual query for vector search
  const searchQuery = conversationHistory.length
    ? `${conversationHistory
      .slice(-4)
      .map((message) => message.content)
      .join(" ")} ${question}`
    : question;

  const documents = await searchKnowledge(searchQuery, 5, category);

  if (!documents.length) {
    return {
      answer:
        "I don't have that information about Sajid. You can contact him directly for more details.",
      sources: [],
    };
  }

  const context = documents.map((document) => `
    Title: ${document.title}
    Category: ${document.category}
    Content: ${document.content}
  `).join("\n\n");

  const answer = await generateAnswer(
    question,
    context,
    conversationHistory
  );

  return {
    answer,
    sources: documents.map((document) => ({
      title: document.title,
      category: document.category,
      score: document.score,
    })),
  };
};

module.exports = generateRAGAnswer;