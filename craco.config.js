const path = require("path");

const alias = (prefix = "src") => ({
  "@components": `${prefix}/components`,
});

const resolvedAliases = Object.fromEntries(
  Object.entries(alias()).map(([alias, location]) => [
    alias,
    path.resolve(__dirname, location),
  ])
);

module.exports = { webpack: { alias: resolvedAliases } };
