import { useSearch } from "@tanstack/react-router";
// import { useGetTypes } from "/src/pages/performance/hook/fetch.tsx";

const Performance = () => {
  // const { data } = useGetTypes();
  
  // console.log(data);

  const { base, fn, type } = useSearch({ from: "/performance" });
  return <span>perf base: {base}, fn: {fn}, type: {type}</span>;
};

export default Performance;
