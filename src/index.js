import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";

async function main() {
  //   prompt.get(mainPrompt, function (err, result) {}); // Forma 1 de fazer
  prompt.get(mainPrompt, async (err, choose) => {
    if (choose.select == 1) console.log("escolheu qr code");
    if (choose.select == 2) console.log("escolheu password");
  });
}

main();
