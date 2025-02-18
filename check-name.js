const fs = require("fs");
const path = require("path");

const packageJsonPath = path.join(__dirname, "package.json");
const scriptPath = path.join(__dirname, "check-name.js");

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

if (packageJson.name === "nextjs-setup") {
  console.error(`
❌ Project name is still "nextjs-setup". 
Please change the "name" field in package.json before running the project.
`);

  process.exit(1);
} else {
  // Remove predev script from package.json
  if (packageJson.scripts && packageJson.scripts.predev) {
    delete packageJson.scripts.predev;

    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2) + "\n" // Pretty format with newline
    );

    console.log('🗑️ Removed "predev" script from package.json.');
  } else {
    console.log('ℹ️ "predev" script not found, nothing to remove.');
  }

  console.log(
    `✅ Project name detected as "${packageJson.name}". Removing setup check script...`
  );

  fs.unlinkSync(scriptPath);

  console.log(`🗑️ Deleted ${scriptPath}`);

  console.log(
    `🚨 Please rename the project folder from "nextjs-setup" to your desired project name.`
  );
}
