const mainPrompt = [
  {
    name: "select",
    description: "Escolha a ferramenta: 1 = QR-Code ou 2 = Password",
    pattern: /^[1-2]+$/,
    message: "Escolha 1 ou 2",
    required: true,
  },
];
