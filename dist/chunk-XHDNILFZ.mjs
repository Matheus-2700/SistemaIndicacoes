// src/env.ts
var env = {
  PORT: Number(process.env.PORT) || 3333,
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  POSTGRES_URL: process.env.POSTGRES_URL,
  // biome-ignore lint/style/noNonNullAssertion: <explanation>
  REDIS_URL: process.env.REDIS_URL,
  WEB_URL: process.env.WEB_URL || "http://localhost:3000"
  // Fallback padrão
};

export {
  env
};
