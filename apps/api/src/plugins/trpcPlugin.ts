import fp from "fastify-plugin";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { FastifyPluginAsync } from "fastify";
import { createContext } from "../util/trpcContext";
import { appRouter } from "../trpc.router";
import { TRPCError } from "@trpc/server";
import {
  BadRequestException,
  InternalServerError,
  NotFoundException,
  UnauthorizedException,
} from "../exceptions";
import { Logger } from "pino";

const plugin: FastifyPluginAsync<{ prefix: string; logger: Logger }> = async (
  instance,
  { prefix, logger }
) => {
  instance.register(fp(fastifyTRPCPlugin), {
    prefix,
    trpcOptions: {
      createContext: createContext({ logger }),
      router: appRouter,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError(o: any) {
        const cause = o.error?.cause;

        if (cause instanceof NotFoundException) {
          throw new TRPCError({ code: "NOT_FOUND", message: cause.message });
        }

        if (cause instanceof BadRequestException) {
          throw new TRPCError({ code: "BAD_REQUEST", message: cause.message });
        }

        if (cause instanceof UnauthorizedException) {
          throw new TRPCError({ code: "UNAUTHORIZED", message: cause.message });
        }

        if (cause instanceof InternalServerError) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: cause.message,
          });
        }
      },
    },
  });
};

export const trpcPlugin = fp(plugin);
