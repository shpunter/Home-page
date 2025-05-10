import CodeBlock from "/client/src/UI/codeBlock/codeBlock.tsx";
import css from "../perfAddSmallInt.module.css";

const Hex = () => {
  return (
    <div className="performance-comparison">
      <h1>Performance: Small Integer HEX Addition</h1>
      <p>
        Exploring the performance of adding numbers (small integer{" "}
        <code>0x3E7</code>) using <code>@numio/bigmath</code> vs{" "}
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
const int = "0x3E7";
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
        <div>349.7 ns</div>
        <div>2 859 000</div>
        <div>(339.4 ns ... 568.8 ns)</div>
        <div>344.1 ns</div>
        <div>470.5 ns</div>
        <div>568.8 ns</div>
        <div>BigNumber.js</div>
        <div>8.9 µs</div>
        <div>112 400</div>
        <div>(7.7 µs ... 266.4 µs)</div>
        <div>8.2 µs</div>
        <div>25.0 µs</div>
        <div>26.9 µs</div>
      </div>
      <h3 className={css["mark-down"]}>Set up: 1000 items</h3>
      <CodeBlock language="javascript">
        {`// Set up
const int = "0x3E7";
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
        <div>25.9 µs</div>
        <div>38 620</div>
        <div>(24.4 µs ... 1.8 ms)</div>
        <div>25.7 µs</div>
        <div>41.2 µs</div>
        <div>42.8 µs</div>
        <div>BigNumber.js</div>
        <div>890.1 µs</div>
        <div>1 123</div>
        <div>(797.8 µs ... 2.8 ms)</div>
        <div>836.7 µs</div>
        <div>2.1 ms</div>
        <div>2.2 ms</div>
      </div>
      <h3 className={css["mark-down"]}>Set up: 1_000_000 items</h3>
      <CodeBlock language="javascript">
        {`// Set up
const int = "0x3E7";
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
        <div>27.6 ms</div>
        <div>36.2</div>
        <div>(26.9 ms ... 29.0 ms)</div>
        <div>27.9 ms</div>
        <div>29.0 ms</div>
        <div>29.0 ms</div>
        <div>BigNumber.js</div>
        <div>836.9 ms</div>
        <div>1.2</div>
        <div>(822.0 ms ... 854.0 ms)</div>
        <div>847.0 ms</div>
        <div>854.0 ms</div>
        <div>854.0 ms</div>
      </div>
      <h3 className={css["mark-down"]}>Set up: 10_000_000 items</h3>
      <CodeBlock language="javascript">
        {`// Set up
const int = "0x3E7";
const array10_000_000 = Array(10_000_000).fill(int);

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
        <div>306.4 ms</div>
        <div>3.3</div>
        <div>(297.9 ms ... 337.4 ms)</div>
        <div>307.6 ms</div>
        <div>337.4 ms</div>
        <div>337.4 ms</div>
        <div>BigNumber.js</div>
        <div>8.9 s</div>
        <div>0.1</div>
        <div>(8.4 s ... 9.7 s)</div>
        <div>9.3 s</div>
        <div>9.7 s</div>
        <div>9.7 s</div>
      </div>
      <h2>Key Takeaways</h2>
      <p>
        Even when dealing with a small integer like{" "}
        <code>0x3E7</code>, the performance differences between{" "}
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

export default Hex;
