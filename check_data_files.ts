// Actually this is probably a bad idea lol
// Especially since right now, I'm literally only using those data files for this project


// //
// // Store nitroguy.json and song_data.json in NitroGuy10 github repo
// // That repo will be the source of truth for the data files
// //
// // On npm run build and npm run dev,
// // Fetch the files from the repo
// // Load the files from the data folder
// // If the files are different, update the files in the data folder
// // Then proceed with whatever command was run

// import fs from "fs/promises";

// const filenames = [
//   ["@/data/song_data.json", "https://github.com/NitroGuy10/NitroGuy10/raw/main/song_data.json"],
//   ["@/data/nitroguy.json", "https://github.com/NitroGuy10/NitroGuy10/raw/main/nitroguy.json"],
//   ["@/data/types.ts", "https://github.com/NitroGuy10/NitroGuy10/raw/main/types.ts"]
// ];

// async function main () {
//   for (const filename of filenames) {
//     const [path, url] = filename;

//     // Fetch the files from the interwebs
//     let response;
//     let responseFailed = false;
//     try {
//       response = await fetch(url);
//     } catch (e) {
//       console.warn("Failed to fetch " + path + " from the interwebs... skipping");
//       responseFailed = true;
//       continue;
//     }

//     // Load the files from the data folder
//     let data;
//     try {
//       const fileData = await fs.readFile(path, "utf-8");
//     } catch (e) {
//       console.log("Failed to read " + path);
//     }
//   }
// }

// main();
