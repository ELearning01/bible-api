const fs = require("fs");

const assetsPath = __dirname + "/../../assets";
const bibleJson = require(assetsPath + "/bible.json");
const config = {
    chunk: 1000
}
let tmpChunk = [];
function addChunk(acc, tmpChunk) {
    acc.push([...tmpChunk]);
}
const newBible = bibleJson.reduce((acc, curr) => {
    const { name, text } = curr;
    const doupleQuote = text.replaceAll("�", "\"");
    tmpChunk.push({ name, text: doupleQuote });
    if(tmpChunk.length > config.chunk) {
        addChunk(acc, tmpChunk);
        tmpChunk = [];
    }
    return acc;
  }, []);

if(tmpChunk.length > 0) {
    addChunk(newBible, tmpChunk);
    tmpChunk = [];
}

newBible.forEach((bibleChunk, index) => {
    fs.writeFileSync(assetsPath + `/chunking/bible-${index}.json`, JSON.stringify(bibleChunk), "utf8");
});


