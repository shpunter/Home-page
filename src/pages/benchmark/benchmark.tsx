import { useSearch } from "@tanstack/react-router";
import { useGetTypes } from "/src/pages/benchmark/hook/fetch.tsx";
import CodeBlock from "/src/UI/codeBlock/codeBlock.tsx";
import css from "/src/pages/benchmark/benchmark.module.css";
import { toBase } from "@numio/bigmath";

const Benchmark = () => {
  const { base, fn, type, repeat } = useSearch({ from: "/benchmark" });
  const { data } = useGetTypes({ base, fn, type, repeat });

  const baseMap = {
    hex: 16,
    octal: 8,
    decimal: 10,
    binary: 2,
  } as const;

  const element = toBase({ value: data.value, toBase: baseMap[base] });

  return (
    <div className="performance-comparison">
      {/* <select>
        <option value="10">10</option>
        <option value="1000">1000</option>
        <option value="1000000">1 000 000</option>
        <option value="10000000">10 000 000</option>
      </select> */}

      <h1 className={css.capitalize}>Performance: Small Integer {base} Addition</h1>
      <p>
        Exploring the performance of adding numbers (small integer{" "}
        <code>{element}</code>) using <code>@numio/bigmath</code> vs{" "}
        <code>BigNumber.js</code>.
      </p>
      <code>
        CPU | AMD Ryzen 7 8845HS w/ Radeon 780M Graphics
      </code>
      <br />
      <code>
        Runtime | Deno 2.3.1 (x86_64-unknown-linux-gnu)
      </code>

      <h3 className={css["mark-down"]}>Set up: {repeat} items</h3>
      <CodeBlock language="javascript">
        {`// Set up
const binary = "${element}";
const array${repeat} = Array(${repeat}).fill(binary);

Deno.bench("@numio/bigmath, array${repeat}", () => {
  add(array${repeat});
});

Deno.bench("BigNumber, array${repeat}", () => {
  let sum = BigNumber(array${repeat}[0]);

  for (let i = 1; i < array${repeat}.length; i++) {
    sum = sum.plus(array${repeat}[i]);
  }
});
`}
      </CodeBlock>
      <h3>Benchmark Results</h3>

      <div className={css["benchmark-result"]}>
        <div>benchmark</div>
        <div>time/iter (avg)</div>
        <div>iter/s</div>
        <div>(min ... max)</div>
        <div>p75</div>
        <div>p99</div>
        <div>p995</div>
        <div>-----------------------------</div>
        <div>------------------------</div>
        <div>------------------------</div>
        <div>------------------------------------</div>
        <div>-------------------</div>
        <div>-------------------</div>
        <div>-------------------</div>
        {data.result.map((row, i) => {
          return row.map((el: string, j) => {
            return (
              <div key={`${base}${fn}${type}${repeat}${el}${i}${j}`}>{el}</div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default Benchmark;
