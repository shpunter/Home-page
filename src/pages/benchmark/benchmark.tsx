import { div, isLeftGreater, toBase } from "@numio/bigmath";
import { useSearch } from "@tanstack/react-router";

import { useGetTypes } from "/src/pages/benchmark/hook/fetch.tsx";
import CodeBlock from "/src/UI/codeBlock/codeBlock.tsx";
import css from "/src/pages/benchmark/benchmark.module.css";
import Header from "/src/pages/benchmark/header/header.tsx";

const Benchmark = () => {
  const { base, fn, type, repeat } = useSearch({ from: "/benchmark" });
  const { data } = useGetTypes({ base, fn, type, repeat });

  const baseMap = {
    hex: 16,
    octal: 8,
    decimal: 10,
    binary: 2,
  } as const;

  const repeatMap = {
    "1D": 10,
    "1K": 1000,
    "1M": 1000000,
    "10M": 10000000,
  } as const;

  const repeatAsNum = repeatMap[repeat];
  const element = toBase({ value: "999", toBase: baseMap[base] });
  const num1 = data.result[0][2].replaceAll(",", "").replaceAll(" ", "");
  const num2 = data.result[1][2].replaceAll(",", "").replaceAll(" ", "");

  return (
    <div className="performance-comparison">
      <Header />
      <h1 className={css.capitalize}>
        Performance: Small Integer {base} Addition
      </h1>
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

      <h3 className={css["mark-down"]}>Set up: {repeatAsNum} items</h3>
      <CodeBlock language="javascript">
        {`// Set up
const binary = "${element}";
const array${repeatAsNum} = Array(${repeatAsNum}).fill(binary);

Deno.bench("@numio/bigmath, array${repeatAsNum}", () => {
  add(array${repeatAsNum});
});

Deno.bench("BigNumber, array${repeatAsNum}", () => {
  let sum = BigNumber(array${repeatAsNum}[0]);

  for (let i = 1; i < array${repeatAsNum}.length; i++) {
    sum = sum.plus(array${repeatAsNum}[i]);
  }
});
`}
      </CodeBlock>
      <h3>
        Benchmark Results: {isLeftGreater({ left: num1, right: num2 })
          ? `numio x${div([num1, num2], 1)} faster`
          : `BigNumber.js x${div([num1, num2], 1)} faster`}
      </h3>

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
        <div>{data.result[0][0]}</div>
        <div>{data.result[0][1]}</div>
        <div>{data.result[0][2]}</div>
        <div>{data.result[0][3]}</div>
        <div>{data.result[0][4]}</div>
        <div>{data.result[0][5]}</div>
        <div>{data.result[0][6]}</div>
        <div>{data.result[1][0]}</div>
        <div>{data.result[1][1]}</div>
        <div>{data.result[1][2]}</div>
        <div>{data.result[1][3]}</div>
        <div>{data.result[1][4]}</div>
        <div>{data.result[1][5]}</div>
        <div>{data.result[1][6]}</div>
      </div>
    </div>
  );
};

export default Benchmark;
