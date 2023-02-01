import { type VoidComponent } from "solid-js";
import { Head, Title, Meta, Link, A } from "solid-start";
import { trpc } from "~/utils/trpc";

import { createQuery } from "@adeora/solid-query";

const Root: VoidComponent = () => {
  const query = createQuery(() => ({
    queryKey: ["hello"],
    queryFn: () => {
      return fetch(
        "http://localhost:4000/api/trpc/fetchData?batch=1&input=%7B%7D"
      ).then((res) => res.json());
    },
  }));

  return (
    <>
      <Head>
        <Title>Test</Title>
        <Meta name="description" content="Test" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <pre>{JSON.stringify(query, null, 2)}</pre>
    </>
  );
};

export default Root;
