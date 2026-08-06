const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-3.6-flash",
});

const generateAnswer = async (
  question,
  context,
  conversationHistory = []
) => {
  const history = conversationHistory.map((message) =>
    `${message.role === "user" ? "User" : "Assistant"}: ${message.content}`
  ).join("\n");

  const prompt = `
    You are Sajid Ahmed's AI Portfolio Assistant.

    Your job is to answer questions about Sajid Ahmed,
    his skills, experience, projects, services and professional background.

    IMPORTANT RULES:
    - Answer ONLY using the provided context and conversation history.
    - Never invent information about Sajid.
    - Never assume a technology, project, client or experience that is not present in the context.
    - If the answer cannot be found in the context or conversation history, say:
      "I don't have that information about Sajid. You can contact him directly for more details."
    - Keep answers concise, professional and friendly.
    - Do not mention that you are using a vector database, embeddings, RAG or context.
    - Answer the user directly.
    - Use conversation history to understand references such as:
      "he", "that company", "there", "this project", "his role", etc.

    CONVERSATION HISTORY:
    ${history || "No previous conversation."}

    CURRENT CONTEXT:
    ${context}

    CURRENT USER QUESTION:
    ${question}

    ANSWER:
  `;

  const result = await model.generateContent(prompt);

  return result.response.text();
};

module.exports = generateAnswer;