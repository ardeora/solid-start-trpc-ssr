import { initTRPC } from "@trpc/server";
import { TRPCContext } from "../util/trpcContext";

export const t = initTRPC.context<TRPCContext>().create();

export const router = t.router;
export const baseProcedure = t.procedure;
export const middleware = t.middleware;

export const publicProcedure = baseProcedure;
