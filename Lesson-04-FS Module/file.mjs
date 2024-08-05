import fs from "fs";
import path from "path";

fs.writeFile("test.txt", "Text", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(" File created");
  }
});

fs.appendFile("test.txt", "Appended Text", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(" File created");
  }
});

fs.mkdir("logs", { recursive: true }, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Folder created succesfuly");
});

fs.writeFile(path.join("logs", "log.txt"), "Log entry", (err) => {
  if (err) {
    console.error(err);
  } else console.log("File is Created inside folder");
});
