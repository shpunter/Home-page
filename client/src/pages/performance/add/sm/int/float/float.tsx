import CodeBlock from "/client/src/UI/codeBlock/codeBlock.tsx";
import css from "../perfAddSmallInt.module.css"; // Assuming similar styling is desired

const Float = () => {
  return (
    <div className="performance-comparison">
      <h1>Performance: Small Float Addition</h1>
      <p>
        Exploring the performance of adding numbers (small float{" "}
        <code>0.999</code>) using <code>@numio/bigmath</code> vs{" "}
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
const float = "0.999";
const array10 = Array(10).fill(float);

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
        <div>964.5 ns</div>
        <div>1 037 000</div>
        <div>(938.9 ns ... 1.8 µs)</div>
        <div>954.7 ns</div>
        <div>1.8 µs</div>
        <div>1.8 µs</div>
        <div>BigNumber.js</div>
        <div>2.4 µs</div>
        <div>419 500</div>
        <div>(2.3 µs ... 3.2 µs)</div>
        <div>2.4 µs</div>
        <div>3.2 µs</div>
        <div>3.2 µs</div>
      </div>
      <h3 className={css["mark-down"]}>Set up: 1000 items</h3>
      <CodeBlock language="javascript">
        {`// Set up
const float = "0.999";
const array1000 = Array(1000).fill(float);

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
        <div>77.3 µs</div>
        <div>12 930</div>
        <div>(71.6 µs ... 697.8 µs)</div>
        <div>76.0 µs</div>
        <div>155.6 µs</div>
        <div>180.1 µs</div>
        <div>BigNumber.js</div>
        <div>234.7 µs</div>
        <div>4 260</div>
        <div>(217.5 µs ... 1.5 ms)</div>
        <div>230.3 µs</div>
        <div>417.6 µs</div>
        <div>434.8 µs</div>
      </div>
      <h3 className={css["mark-down"]}>Set up: 1_000_000 items</h3>
      <CodeBlock language="javascript">
        {`// Set up
const float = "0.999";
const array1_000_000 = Array(1_000_000).fill(float);

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
        <div>153.5 ms</div>
        <div>6.5</div>
        <div>(140.4 ms ... 179.9 ms)</div>
        <div>158.5 ms</div>
        <div>179.9 ms</div>
        <div>179.9 ms</div>
        <div>BigNumber.js</div>
        <div>229.6 ms</div>
        <div>4.4</div>
        <div>(227.5 ms ... 232.8 ms)</div>
        <div>230.9 ms</div>
        <div>232.8 ms</div>
        <div>232.8 ms</div>
      </div>
      <h3 className={css["mark-down"]}>Set up: 10_000_000 items</h3>
      <CodeBlock language="javascript">
        {`// Set up
const float = "0.999";
const array10_000_000 = Array(10_000_000).fill(float);

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
        <div>1.5 s</div>
        <div>0.7</div>
        <div>(1.4 s ... 1.6 s)</div>
        <div>1.5 s</div>
        <div>1.6 s</div>
        <div>1.6 s</div>
        <div>BigNumber.js</div>
        <div>2.5 s</div>
        <div>0.4</div>
        <div>(2.4 s ... 2.9 s)</div>
        <div>2.5 s</div>
        <div>2.9 s</div>
        <div>2.9 s</div>
      </div>
      <h2>Key Takeaways</h2>
      <p>
        Even when dealing with a small float like{" "}
        <code>0.999</code>, the performance differences between{" "}
        <code>@numio/bigmath</code> and <code>BigNumber.js</code>{" "}
        are noticeable. The benchmarks consistently show that{" "}
        <code>@numio/bigmath</code>{" "}
        exhibits faster addition operations across varying array sizes. This
        suggests that <code>@numio/bigmath</code>{" "}
        might have optimizations that benefit even relatively simple arithmetic
        tasks involving floating-point numbers represented as big numbers.
      </p>
      <p>
        For applications that perform a large number of addition operations,
        even on smaller float values represented as big numbers, choosing a more
        performant library like <code>@numio/bigmath</code>{" "}
        could lead to significant improvements in overall execution time and
        efficiency. The difference becomes more pronounced as the number of
        operations increases, as seen in the benchmark results for larger
        arrays.
      </p>
    </div>
  );
};

export default Float;
