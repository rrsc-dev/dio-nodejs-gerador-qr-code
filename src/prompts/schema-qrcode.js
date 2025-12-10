import chalk from "chalk";

const promptQRCode = [
  {
    name: "link",
    description: chalk.yellow("Link do QR Code"),
  },
  {
    name: "type",
    description: chalk.yellow("Escolha: \n1- Normal\n2- Terminal"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("1 ou 2, entendeu?"),
  },
];

export default promptQRCode;
