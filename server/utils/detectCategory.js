const detectCategory = (query) => {
  const text = query.toLowerCase();

  const categories = [];

  if (
    text.includes("project") ||
    text.includes("built") ||
    text.includes("developed") ||
    text.includes("portfolio")
  ) {
    categories.push("projects");
  }

  if (
    text.includes("skill") ||
    text.includes("technology") ||
    text.includes("technologies") ||
    text.includes("tech stack") ||
    text.includes("know")
  ) {
    categories.push("skills");
  }

  if (
    text.includes("experience") ||
    text.includes("worked") ||
    text.includes("career")
  ) {
    categories.push("experience");
  }

  if (
    text.includes("service") ||
    text.includes("services") ||
    text.includes("offer") ||
    text.includes("freelance")
  ) {
    categories.push("services");
  }

  if (
    text.includes("education") ||
    text.includes("degree") ||
    text.includes("qualification") ||
    text.includes("study")
  ) {
    categories.push("education");
  }

  if (
    text.includes("contact") ||
    text.includes("email") ||
    text.includes("reach")
  ) {
    categories.push("contact");
  }

  return categories;
};

module.exports = detectCategory;