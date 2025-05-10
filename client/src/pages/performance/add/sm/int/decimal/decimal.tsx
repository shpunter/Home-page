import CodeBlock from "/client/src/UI/codeBlock/codeBlock.tsx";
import css from "../perfAddSmallInt.module.css";

const Decimal = () => {
  return (
    <div className="performance-comparison">
      <h1>Performance: Small Integer Decimal Addition</h1>
      <p>
        Exploring the performance of adding numbers (small integer{" "}
        <code>{999}</code>) using <code>@numio/bigmath</code> vs{" "}
        <code>BigNumber.js</code>.
      </p>
      <code>
        CPU | AMD Ryzen 7 8845HS w/ Radeon 780M Graphics
      </code>
      <br />
      <code>
        Runtime | Deno 2.3.1 (x86_64-unknown-linux-gnu)
      </code>

      <h3 className={css["mark-down"]}>Set up: 10 items</h3>
      <CodeBlock language="javascript">
        {`// Set up
const int = "999";
const array10 = Array(10).fill(int);

Deno.bench("@numio/bigmath, array10", () => {
  add(array10);
});

Deno.bench("BigNumber,      array10", () => {
  let sum = BigNumber(array10[0]);

  for (let i = 1; i < array10.length; i++) {
    sum = sum.plus(array10[i]);
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
        <div>@numio/bigmath</div>
        <div>176.5 ns</div>
        <div>5 667 000</div>
        <div>(178.8 ns ... 294.4 ns)</div>
        <div>174.6 ns</div>
        <div>271.2 ns</div>
        <div>275.4 ns</div>
        <div>BigNumber.js</div>
        <div>851.1 ns</div>
        <div>1 175 000</div>
        <div>(829.7 ns ... 1.3 µs)</div>
        <div>841.4 ns</div>
        <div>1.3 µs</div>
        <div>1.3 µs</div>
      </div>
      <h3 className={css["mark-down"]}>Set up: 1000 items</h3>
      <CodeBlock language="javascript">
        {`// Set up
const int = "999";
const array1000 = Array(1000).fill(int);

Deno.bench("@numio/bigmath, array1000", () => {
  add(array1000);
});

Deno.bench("BigNumber,      array1000", () => {
  let sum = BigNumber(array1000[0]);

  for (let i = 1; i < array1000.length; i++) {
    sum = sum.plus(array1000[i]);
  }
});
`}
      </CodeBlock>
      <h2>Benchmark Results</h2>
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
        <div>@numio/bigmath</div>
        <div>8.5 µs</div>
        <div>118 200</div>
        <div>(8.3 µs ... 9.4 µs)</div>
        <div>8.4 µs</div>
        <div>9.4 µs</div>
        <div>9.4 µs</div>
        <div>BigNumber.js</div>
        <div>90.1 µs</div>
        <div>11 100</div>
        <div>(85.0 µs ... 812.5 µs)</div>
        <div>88.9 µs</div>
        <div>154.3 µs</div>
        <div>162.0 µs</div>
      </div>
      <h3 className={css["mark-down"]}>Set up: 1_000_000 items</h3>
      <CodeBlock language="javascript">
        {`// Set up
const int = "999";
const array1_000_000 = Array(1_000_000).fill(int);

Deno.bench("@numio/bigmath, array1_000_000", () => {
  add(array1_000_000);
});

Deno.bench("BigNumber,      array1_000_000", () => {
  let sum = BigNumber(array1_000_000[0]);

  for (let i = 1; i < array1_000_000.length; i++) {
    sum = sum.plus(array1_000_000[i]);
  }
});
`}
      </CodeBlock>
      <h2>Benchmark Results</h2>
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
        <div>@numio/bigmath</div>
        <div>10.9 ms</div>
        <div>91.4</div>
        <div>(10.2 ms ... 16.2 ms)</div>
        <div>11.1 ms</div>
        <div>16.2 ms</div>
        <div>16.2 ms</div>
        <div>BigNumber.js</div>
        <div>95.8 ms</div>
        <div>10.4</div>
        <div>(95.3 ms ... 97.1 ms)</div>
        <div>95.8 ms</div>
        <div>97.1 ms</div>
        <div>97.1 ms</div>
      </div>
      <h3 className={css["mark-down"]}>Set up: 10_000_000 items</h3>
      <CodeBlock language="javascript">
        {`// Set up
const int = "999";
const array10_000_000 = Array(array10_000_000).fill(int);

Deno.bench("@numio/bigmath, array10_000_000", () => {
  add(array10_000_000);
});

Deno.bench("BigNumber,      array10_000_000", () => {
  let sum = BigNumber(array10_000_000[0]);

  for (let i = 1; i < array10_000_000.length; i++) {
    sum = sum.plus(array10_000_000[i]);
  }
});
`}
      </CodeBlock>
      <h2>Benchmark Results</h2>
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
        <div>@numio/bigmath</div>
        <div>140.3 ms</div>
        <div>7.1</div>
        <div>(130.0 ms ... 205.1 ms)</div>
        <div>134.1 ms</div>
        <div>205.1 ms</div>
        <div>205.1 ms</div>
        <div>BigNumber.js</div>
        <div>986.1 ms</div>
        <div>1.0</div>
        <div>(983.1 ms ... 992.1 ms)</div>
        <div>986.7 ms</div>
        <div>992.1 ms</div>
        <div>992.1 ms</div>
      </div>
      <h2>Key Takeaways</h2>
      <p>
        Even when dealing with a small integer like{" "}
        <code>{999}</code>, the performance differences between{" "}
        <code>@numio/bigmath</code> and <code>BigNumber.js</code>{" "}
        are noticeable. The benchmarks consistently show that{" "}
        <code>@numio/bigmath</code>{" "}
        exhibits faster addition operations across varying array sizes. This
        suggests that <code>@numio/bigmath</code>{" "}
        might have optimizations that benefit even relatively simple arithmetic
        tasks.
      </p>
      <p>
        For applications that perform a large number of addition operations,
        even on smaller integer values represented as big numbers, choosing a
        more performant library like <code>@numio/bigmath</code>{" "}
        could lead to significant improvements in overall execution time and
        efficiency.
      </p>
    </div>
  );
};

export default Decimal;
