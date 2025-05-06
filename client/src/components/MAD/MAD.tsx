import CodeBlock from "/client/src/UI/codeBlock/codeBlock.tsx";

const MADDoc = () => {
  return (
    <>
      <h2>
        <code>MAD</code> Function
      </h2>
      <p>
        The <code>MAD</code> function from the <code>@numio/bigmath</code>{" "}
        library calculates the Median Absolute Deviation (MAD) of a set of
        numbers represented as strings. The Median Absolute Deviation is a
        measure of the variability of a univariate dataset. It is a robust
        statistic, meaning that it is not heavily influenced by outliers.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function MAD(numbers: string[]): string`}
      </CodeBlock>
      <h3>Parameters</h3>
      <ul>
        <li>
          <code>numbers</code>: An array of strings, where each string
          represents a number.
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
          The numbers in the input array should be provided as strings to ensure
          that arbitrary precision is maintained.
        </li>
        <li>
          The function first calculates the median of the input numbers.
        </li>
        <li>
          Then, it calculates the absolute deviations of each number from the
          median.
        </li>
        <li>
          Finally, it calculates the median of these absolute deviations.
        </li>
        <li>
          The result is returned as a string.
        </li>
      </ul>
      <h3>Examples</h3>
      <CodeBlock language="javascript">
        {`import { MAD } from "@numio/bigmath";

// Example 1: Basic usage
const result1 = MAD(["7", "15", "36", "39", "40", "41"]);
console.log(result1); // Output: "3"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { MAD } from "@numio/bigmath";

// Example 2:  With decimals
const result2 = MAD(["1.5", "2", "2.5", "3", "3.5"]);
console.log(result2); // "0.5"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { MAD } from "@numio/bigmath";
              
// Example 3: With negative numbers
const result3 = MAD(["-1", "0", "1", "2", "3"]);
console.log(result3); // "1"
              `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { MAD } from "@numio/bigmath";
              
// Example 4:  Data with repeated values
const result4 = MAD(["1", "1", "2", "2", "3", "4"]);
console.log(result4); // "1"
              `}
      </CodeBlock>
      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as Strings:</strong> The <code>MAD</code>{" "}
          function expects an array of strings. This is essential for preserving
          precision.
        </li>
        <li>
          <strong>Numeric Input:</strong>{" "}
          The strings in the input array should represent valid numbers. The
          function does not perform explicit validation of the input strings.
        </li>
        <li>
          <strong>Array Length:</strong>{" "}
          The function should work for arrays of length greater than or equal to
          3.
        </li>
        <li>
          <strong>Precision:</strong> The <code>MAD</code>{" "}
          function is designed to work with the arbitrary precision arithmetic
          capabilities of the <code>@numio/bigmath</code> library.
        </li>
        <li>
          <strong>Robustness:</strong> MAD is robust to outliers in the data.
        </li>
      </ul>
    </>
  );
};

export default MADDoc;
