import { MAD } from "@numio/bigmath";
import CodeBlock from "/src/UI/codeBlock/codeBlock.tsx";

const MADDoc = () => {
  return (
    <>
      <h2>
        <code>MAD</code> Function
      </h2>
      <p>
        The <code>MAD</code> function from the <code>@numio/bigmath</code>{" "}
        library calculates the <strong>Median Absolute Deviation (MAD)</strong>
        {" "}
        of a set of numbers represented as strings. The Median Absolute
        Deviation is a measure of the variability of a univariate dataset. It's
        a robust statistic, meaning it's not heavily influenced by outliers when
        calculated from the <em>median</em>. You can also calculate it from the
        {" "}
        <em>mean</em>{" "}
        for comparison, though this makes it sensitive to outliers.
      </p>

      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function MAD(numbers: string[], options?: { from?: "median" | "mean" }): string`}
      </CodeBlock>

      <h3>Parameters</h3>
      <ul>
        <li>
          <strong>
            <code>numbers</code>
          </strong>: An array of strings, where each string represents a number.
          These should be strings to maintain arbitrary precision.
        </li>
        <li>
          <strong>
            <code>options</code>
          </strong>{" "}
          (optional): An object that lets you specify the point of reference for
          deviation calculation.
          <ul>
            <li>
              <strong>
                <code>from</code>
              </strong>: A string indicating whether the deviations should be
              calculated from the <strong>"median"</strong>{" "}
              (which is the default behavior) or the <strong>"mean"</strong>
              {" "}
              of the dataset.
            </li>
          </ul>
        </li>
      </ul>

      <h3>Return Value</h3>
      <p>
        The function returns a string representing the Median Absolute Deviation
        (MAD) of the input numbers.
      </p>

      <h3>Behavior</h3>
      <ul>
        <li>
          The <code>MAD</code>{" "}
          function calculates the Median Absolute Deviation of the numbers
          provided in the input array.
        </li>
        <li>
          Input numbers should always be strings to ensure arbitrary precision
          is maintained by the <code>bigmath</code> library.
        </li>
        <li>
          <strong>
            When <code>from</code> is "median" (default)
          </strong>: The function first determines the median of the input
          numbers. Then, it calculates the absolute deviation of each number
          from this median. Finally, it computes the median of these absolute
          deviations.
        </li>
        <li>
          <strong>
            When <code>from</code> is "mean"
          </strong>: The function first calculates the mean of the input
          numbers. It then finds the absolute deviation of each number from this
          mean. Lastly, it computes the median of these absolute deviations.
        </li>
        <li>The final result is always returned as a string.</li>
      </ul>

      <h3>Examples</h3>
      <CodeBlock language="javascript">
        {`import { MAD } from "@numio/bigmath";

// Example: Basic usage (MAD from median, default behavior)
const resultMedianBasic = MAD(["11", "12", "12", "14", "15", "16"]);
console.log(resultMedianBasic); // Output: "1.5"


const resultMedianAnotherBasic = MAD(["7", "15", "36", "39", "40", "41"]);
console.log(resultMedianAnotherBasic); // Output: "3"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { MAD } from "@numio/bigmath";

// Example: MAD from median with decimals
const resultMedianDecimals = MAD(["1.5", "2", "2.5", "3", "3.5"]);
console.log(resultMedianDecimals); // Output: "0.5"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { MAD } from "@numio/bigmath";
              
// Example: MAD from median with negative numbers
const resultMedianNegative = MAD(["-1", "0", "1", "2", "3"]);
console.log(resultMedianNegative); // Output: "1"

const resultMedianNegativeSet2 = MAD(["-11", "-12", "-12", "-14", "-15", "-16"]);
console.log(resultMedianNegativeSet2); // Output: "1.5"
              `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { MAD } from "@numio/bigmath";
              
// Example: MAD from median where result is 0 due to data distribution
const resultMedianZeroOutlier = MAD(["1", "1", "1", "1", "1", "1", "100"]);
console.log(resultMedianZeroOutlier); // Output: "0"

const resultMedianZeroOutlierDecimal = MAD(["0.1", "0.1", "0.1", "0.1", "0.1", "0.1", "100"]);
console.log(resultMedianZeroOutlierDecimal); // Output: "0"
              `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { MAD } from "@numio/bigmath";
              
// Example: MAD from mean for a dataset with an outlier (result is non-zero)
const resultMeanOutlier = MAD(["1", "1", "1", "1", "1", "1", "100"], { from: "mean" });
console.log(resultMeanOutlier); // Output: "14.14285714285714285714"
              `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { MAD } from "@numio/bigmath";
              
// Example: MAD from mean with a decimal outlier
const resultMeanDecimalOutlier = MAD(["0.1", "0.1", "0.1", "0.1", "0.1", "0.1", "100"], { from: "mean" });
console.log(resultMeanDecimalOutlier); // Output: "14.27142857142857142857"
              `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { MAD } from "@numio/bigmath";
              
// Example: Usage with hexadecimal (0x), binary (0b), and octal (0o) integers
const result = MAD(["0xA", "0xF", "0b1010", "0o12", "10", "15", "20", "50"]); // 0xA=10, 0xF=15, 0b1010=10, 0o12=10
console.log(result); // Output: "2.5"
              `}
      </CodeBlock>

      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as Strings</strong>: The <code>MAD</code>{" "}
          function expects an array of strings. This is crucial for preserving
          numerical precision, especially with floating-point numbers.
        </li>
        <li>
          <strong>Numeric Input</strong>: The strings within the input array
          must represent valid numbers. The function does not explicitly
          validate these input strings.
        </li>
        <li>
          <strong>Non-Decimal Numbers</strong>: When using non-decimal formats
          like hexadecimal (`0x`), binary (`0b`), or octal (`0o`), ensure that
          these represent{" "}
          <strong>integer values only</strong>. The `bigmath` library processes
          these as integers when performing calculations.
        </li>
        <li>
          <strong>Array Length</strong>: The function is designed for arrays
          with a <strong>minimum length of three</strong>{" "}
          elements. For smaller arrays, statistical measures like MAD may not be
          meaningful or the function's behavior might be undefined.
        </li>
        <li>
          <strong>Precision</strong>: The <code>MAD</code>{" "}
          function leverages the arbitrary precision arithmetic capabilities of
          the <code>@numio/bigmath</code>{" "}
          library, ensuring accurate results even with complex decimal numbers
          or very large/small values.
        </li>
        <li>
          <strong>Robustness</strong>: When calculated from the median (the
          default), MAD is highly robust to outliers, making it a reliable
          measure of spread for skewed or heavy-tailed distributions. When
          calculated from the mean, it loses this robustness and becomes
          sensitive to extreme values.
        </li>
      </ul>
    </>
  );
};

export default MADDoc;
