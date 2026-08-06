const mongoose = require("mongoose");

const knowledgeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: [
        "about",
        "skills",
        "experience",
        "projects",
        "education",
        "services",
        "contact",
      ],
    },

    content: {
      type: String,
      required: true,
      trim: true,
    },

    source: {
      type: String,
      default: "portfolio",
    },

    embedding: {
      type: [Number],
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
);

const Knowledge = mongoose.model("Knowledge", knowledgeSchema);

module.exports = Knowledge;