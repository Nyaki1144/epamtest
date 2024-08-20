import { lstat, readdir } from "fs/promises";
import { dirname } from "node:path";
import path from "path";
import { stdout } from "process";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export { __dirname };

async function init(way: string, spase = 0) {
  const files = await readdir(way);
  for (let i = 0; i < files.length; i++) {
    const stat = await lstat(path.join(way, files[i]));
    if (stat.isFile()) {
      console.log(" ".repeat(spase), files[i]);
    } else {
      console.log(" ".repeat(spase), files[i]);
      spase += 2;
      init(path.join(way, files[i]), spase);
    }
  }
}
console.log(__dirname);
init(path.join(__dirname, "../"));
