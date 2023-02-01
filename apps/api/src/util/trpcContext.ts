import { inferAsyncReturnType } from "@trpc/server";
import * as trpcFastify from "@trpc/server/adapters/fastify";
import { Logger } from "pino";

export const createContext =
  ({ logger }: { logger: Logger }) =>
  async ({ req, res }: trpcFastify.CreateFastifyContextOptions) => {
    return {
      req,
      res,
    };
  };

export type TRPCContext = inferAsyncReturnType<typeof createContext>;
