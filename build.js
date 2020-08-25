const { generateFromFolder, generateIndex } = require("svg-to-svelte");
const pkg = require("./package.json");

(async () => {
  const name = "super-tiny-icons";
  const source = `node_modules/${name}/images/svg/`;

  const { moduleNames } = await generateFromFolder(source, "lib");

  await generateIndex({
    moduleNames,
    pkgName: pkg.name,
    pkgVersion: pkg.devDependencies[name],
    outputFile: "ICON_INDEX.md",
  });
})();
