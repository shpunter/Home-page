import CodeBlock from "/client/src/UI/codeBlock/codeBlock.tsx";
import css from "../perfAddSmallInt.module.css";

const Octal = () => {
  return (
    <div className="performance-comparison">
      <h1>Performance: Small Integer Octal Addition</h1>
      <p>
        Exploring the performance of adding numbers (small integer{" "}
        <code>0o1747</code>) using <code>@numio/bigmath</code> vs{" "}
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
const oct = "0o1747";
const array10 = Array(10).fill(oct);

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
        <div>347.6 ns</div>
        <div>2 877 000</div>
        <div>(334.8 ns ... 525.2 ns)</div>
        <div>343.5 ns</div>
        <div>444.6 ns</div>
        <div>525.2 ns</div>
        <div>BigNumber.js</div>
        <div>8.5 µs</div>
        <div>118 000</div>
        <div>(7.5 µs ... 276.0 µs)</div>
        <div>8.1 µs</div>
        <div>21.1 µs</div>
        <div>24.5 µs</div>
      </div>
      <h3 className={css["mark-down"]}>Set up: 1000 items</h3>
      <CodeBlock language="javascript">
        {`// Set up
const oct = "0o1747";
const array1000 = Array(1000).fill(oct);

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
        <div>25.3 µs</div>
        <div>39 470</div>
        <div>(24.1 µs ... 460.0 µs)</div>
        <div>25.1 µs</div>
        <div>40.9 µs</div>
        <div>42.1 µs</div>
        <div>BigNumber.js</div>
        <div>814.7 µs</div>
        <div>1 227</div>
        <div>(775.5 µs ... 2.7 ms)</div>
        <div>807.2 µs</div>
        <div>1.3 ms</div>
        <div>1.4 ms</div>
      </div>
      <h3 className={css["mark-down"]}>Set up: 1_000_000 items</h3>
      <CodeBlock language="javascript">
        {`// Set up
const oct = "0o1747";
const array1_000_000 = Array(1_000_000).fill(oct);

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
        <div>27.5 ms</div>
        <div>36.3</div>
        <div>(26.5 ms ... 30.1 ms)</div>
        <div>28.0 ms</div>
        <div>30.1 ms</div>
        <div>30.1 ms</div>
        <div>BigNumber.js</div>
        <div>804.7 ms</div>
        <div>1.2</div>
        <div>(787.6 ms ... 923.8 ms)</div>
        <div>794.7 ms</div>
        <div>923.8 ms</div>
        <div>923.8 ms</div>
      </div>
      <h3 className={css["mark-down"]}>Set up: 10_000_000 items</h3>
      <CodeBlock language="javascript">
        {`// Set up
const oct = "0o1747";
const array10_000_000 = Array(10_000_000).fill(oct);

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
        <div>312.3 ms</div>
        <div>3.2</div>
        <div>(297.9 ms ... 336.8 ms)</div>
        <div>318.9 ms</div>
        <div>336.8 ms</div>
        <div>336.8 ms</div>
        <div>BigNumber.js</div>
        <div>8.2 s</div>
        <div>0.1</div>
        <div>(8.0 s ... 8.5 s)</div>
        <div>8.3 s</div>
        <div>8.5 s</div>
        <div>8.5 s</div>
      </div>
      <h2>Key Takeaways</h2>
      <p>
        Even when dealing with a small integer represented in octal like{" "}
        <code>0o1747</code>, the performance differences between{" "}
        <code>@numio/bigmath</code> and <code>BigNumber.js</code> are
        noticeable. The benchmarks consistently show that{" "}
        <code>@numio/bigmath</code> exhibits faster addition operations across
        varying array sizes. This suggests that <code>@numio/bigmath</code> might
        have optimizations that benefit even relatively simple arithmetic tasks
        involving octal representations of numbers.
      </p>
      <p>
        For applications that perform a large number of addition operations,
        even on smaller integer values represented in octal as big numbers,
        choosing a more performant library like <code>@numio/bigmath</code> could
        lead to significant improvements in overall execution time and
        efficiency. The consistent speed advantage of <code>@numio/bigmath</code>{" "}
        across different scales highlights its potential benefits.
      </p>
    </div>
  );
};

export default Octal;