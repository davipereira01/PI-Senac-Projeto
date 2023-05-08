module.exports = {
    // configuração do ambiente de execução dos testes
    testEnvironment: "node",
    // diretórios onde os testes serão buscados
    roots: ["<rootDir>/src"],
    // tipos de arquivos que serão interpretados como testes
    testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
    // configurações de transformação dos arquivos de código-fonte e testes
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.jsx?$": "babel-jest",
        "^.+\\.mjs$": "babel-jest"
    },
        "transformIgnorePatterns": [
        "/node_modules/(?!(module-to-transpile)/)"
      ]
  };
  