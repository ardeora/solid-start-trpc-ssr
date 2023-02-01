import fastify from "fastify";
import { createLogger, LogLevel } from "./logger";
import { cors } from "./plugins/corsPlugin";
import { trpcPlugin } from "./plugins/trpcPlugin";

async function main() {
  const logger = createLogger(true, LogLevel.DEBUG);
  const server = fastify({ logger, maxParamLength: 5000 });

  server.register(cors, {
    origins: ["http://localhost:5173"],
  });

  server.register(trpcPlugin, { prefix: "/api/trpc", logger });

  try {
    await server.listen({ port: 4000, host: "0.0.0.0" });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

main();
