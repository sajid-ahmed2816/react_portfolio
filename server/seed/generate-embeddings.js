const dotenv = require("dotenv");

const connectDB = require("../config/db");
const Knowledge = require("../models/Knowledge");
const generateEmbedding = require("../services/embedding.service");

dotenv.config();

const generateEmbeddings = async () => {
  try {
    await connectDB();

    const knowledgeDocuments = await Knowledge.find({
      $or: [
        { embedding: { $exists: false } },
        { embedding: { $size: 0 } },
      ],
    });

    console.log(
      `Found ${knowledgeDocuments.length} documents without embeddings`
    );

    const failedDocuments = [];

    for (const document of knowledgeDocuments) {
      try {
        console.log(`Generating embedding for: ${document.title}`);

        const embedding = await generateEmbedding(document.content);

        document.embedding = embedding;

        await document.save();

        console.log(`✓ Embedding saved: ${document.title}`);
      } catch (error) {
        console.error(`✗ Failed: ${document.title}`);
        console.error(error.message);

        failedDocuments.push(document.title);
      }
    }

    console.log("\nEmbedding generation completed.");

    if (failedDocuments.length > 0) {
      console.log("\nFailed documents:");

      failedDocuments.forEach((title) => {
        console.log(`- ${title}`);
      });
    } else {
      console.log("All embeddings generated successfully!");
    }

    process.exit(0);
  } catch (error) {
    console.error("Embedding process failed:", error.message);
    process.exit(1);
  }
};

generateEmbeddings();