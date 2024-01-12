import useGraph from "./useGraph";

const Graph = () => {
  useGraph("#graph", "/digital.ttl");

  return (
    <section
      style={{
        height: "100dvh",
      }}
      id="graph"
    >
      kek
    </section>
  );
};

export default Graph;
