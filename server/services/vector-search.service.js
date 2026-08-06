const Knowledge = require("../models/Knowledge");
const generateEmbedding = require("./embedding.service");

const searchKnowledge = async (query, limit = 5, categories = null) => {
  const queryEmbedding = await generateEmbedding(query);

  const vectorSearch = {
    index: "knowledge_vector_index",
    path: "embedding",
    queryVector: queryEmbedding,
    numCandidates: 50,
    limit,
  };

  if (categories) {
    const categoryList = Array.isArray(categories)
      ? categories
      : [categories];

    if (categoryList.length > 0) {
      vectorSearch.filter = {
        category: {
          $in: categoryList,
        },
      };
    }
  }

  const results = await Knowledge.aggregate([
    {
      $vectorSearch: vectorSearch,
    },
    {
      $project: {
        _id: 1,
        title: 1,
        category: 1,
        content: 1,
        source: 1,
        score: {
          $meta: "vectorSearchScore",
        },
      },
    },
  ]);

  return results;
};

module.exports = searchKnowledge;