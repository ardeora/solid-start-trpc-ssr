import { type VoidComponent } from "solid-js";
import { Head, Title, Meta, Link, A } from "solid-start";
import { trpc } from "~/utils/trpc";

const Root: VoidComponent = () => {
  const data = trpc.fetchData.useQuery();
  return (
    <>
      <Head>
        <Title>Test</Title>
        <Meta name="description" content="Test" />
        <Link rel="icon" href="/favicon.ico" />
      </Head>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default Root;
