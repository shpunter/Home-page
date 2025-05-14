import { useGetTypes } from "/src/pages/benchmark/hook/fetch.tsx";
import CodeBlock from "/src/UI/codeBlock/codeBlock.tsx";
import Select from "/src/UI/select/select.tsx";
import css from "/src/pages/benchmark/benchmark.module.css";
import { toBase } from "@numio/bigmath";
import { useNavigate, useSearch } from "@tanstack/react-router";

const Benchmark = () => {
  const { base, fn, type, repeat } = useSearch({ from: "/benchmark" });
  const { data } = useGetTypes({ base, fn, type, repeat });
  const navigate = useNavigate({ from: "/benchmark" });

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

  const optRepeat = [
    { label: "10", value: "1D" },
    { label: "1000", value: "1K" },
    { label: "1 000 000", value: "1M" },
    { label: "10 000 000", value: "10M" },
  ];

  const optBase = [
    { label: "hex 0x", value: "hex" },
    { label: "octal 0o", value: "octal" },
    { label: "binary 0b", value: "binary" },
    { label: "decimal", value: "decimal" },
  ];

  const onChange = (key: "repeat" | "base") => ({ value }: { value: string }) => {
    navigate({
      search: (prev) => {
        return { ...prev, [key]: value };
      },
    });
  };

  return (
    <div className="performance-comparison">
      <Select
        label="Repeat:"
        options={optRepeat}
        selected={repeat}
        onChange={onChange("repeat")}
      />

      <Select
        label="Base:"
        options={optBase}
        selected={base}
        onChange={onChange("base")}
      />

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
