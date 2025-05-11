import CodeBlock from "/client/src/UI/codeBlock/codeBlock.tsx";
import css from "../perfAddSmallInt.module.css"; // Assuming similar styling is desired

const Binary = () => {
  return (
    <div className="performance-comparison">
      <h1>Performance: Small Integer Binary Addition</h1>
      <p>
        Exploring the performance of adding numbers (small integer{" "}
        <code>0b1111100111</code>) using <code>@numio/bigmath</code> vs{" "}
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
const binary = "0b1111100111";
const array10 = Array(10).fill(binary);

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
        <div>393.7 ns</div>
        <div>2 540 000</div>
        <div>(382.6 ns ... 558.7 ns)</div>
        <div>388.4 ns</div>
        <div>513.5 ns</div>
        <div>558.7 ns</div>
        <div>BigNumber.js</div>
        <div>9.2 µs</div>
        <div>108 300</div>
        <div>(8.4 µs ... 251.7 µs)</div>
        <div>9.1 µs</div>
        <div>15.4 µs</div>
        <div>17.7 µs</div>
      </div>
      <h3 className={css["mark-down"]}>Set up: 1000 items</h3>
      <CodeBlock language="javascript">
        {`// Set up
const binary = "0b1111100111";
const array1000 = Array(1000).fill(binary);

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
        <div>30.3 µs</div>
        <div>33 040</div>
        <div>(28.9 µs ... 297.7 µs)</div>
        <div>30.1 µs</div>
        <div>46.6 µs</div>
        <div>47.3 µs</div>
        <div>BigNumber.js</div>
        <div>916.2 µs</div>
        <div>1 091</div>
        <div>(878.5 µs ... 2.8 ms)</div>
        <div>903.3 µs</div>
        <div>1.5 ms</div>
        <div>2.6 ms</div>
      </div>
      <h3 className={css["mark-down"]}>Set up: 1_000_000 items</h3>
      <CodeBlock language="javascript">
        {`// Set up
const binary = "0b1111100111";
const array1_000_000 = Array(1_000_000).fill(binary);

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
        <div>32.4 ms</div>
        <div>30.9</div>
        <div>(31.2 ms ... 34.8 ms)</div>
        <div>32.8 ms</div>
        <div>34.8 ms</div>
        <div>34.8 ms</div>
        <div>BigNumber.js</div>
        <div>896.4 ms</div>
        <div>1.1</div>
        <div>(894.8 ms ... 899.5 ms)</div>
        <div>897.6 ms</div>
        <div>899.5 ms</div>
        <div>899.5 ms</div>
      </div>
      <h3 className={css["mark-down"]}>Set up: 10_000_000 items</h3>
      <CodeBlock language="javascript">
        {`// Set up
const binary = "0b1111100111";
const array10_000_000 = Array(10_000_000).fill(binary);

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
        <div>349.8 ms</div>
        <div>2.9</div>
        <div>(339.3 ms ... 413.5 ms)</div>
        <div>345.4 ms</div>
        <div>413.5 ms</div>
        <div>413.5 ms</div>
        <div>BigNumber.js</div>
        <div>9.4 s</div>
        <div>0.1</div>
        <div>(9.2 s ... 9.6 s)</div>
        <div>9.4 s</div>
        <div>9.6 s</div>
        <div>9.6 s</div>
      </div>
      <h2>Key Takeaways</h2>
      <p>
        Even when dealing with a small integer represented in binary like{" "}
        <code>0b1111100111</code>, the performance differences between{" "}
        <code>@numio/bigmath</code> and <code>BigNumber.js</code> are
        noticeable. The benchmarks consistently show that{" "}
        <code>@numio/bigmath</code> exhibits faster addition operations across
        varying array sizes. This suggests that <code>@numio/bigmath</code> might
        have optimizations that benefit even relatively simple arithmetic tasks
        involving binary representations of numbers.
      </p>
      <p>
        For applications that perform a large number of addition operations,
        even on smaller integer values represented in binary as big numbers,
        choosing a more performant library like <code>@numio/bigmath</code> could
        lead to significant improvements in overall execution time and
        efficiency. The performance gap tends to widen as the number of
        operations increases.
      </p>
    </div>
  );
};

export default Binary;