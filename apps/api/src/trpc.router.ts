import { baseProcedure, router } from "./util/trpcInit";

export const appRouter = router({
  fetchData: baseProcedure.query(async () => {
    return {
      hello: "world",
    };
  }),
});

export type AppRouter = typeof appRouter;
