import { QueryClient } from "@adeora/solid-query";
import type { AppRouter } from "@app/api/src/trpc.router";
import { createTRPCSolidStart } from "solid-trpc";
import { httpBatchLink } from "@trpc/client";

const getBaseUrl = () => {
  return `http://localhost:4000`;
};

export const trpc = createTRPCSolidStart<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
});

export const queryClient = new QueryClient();
