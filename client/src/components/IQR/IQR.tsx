import CodeBlock from "/client/src/UI/codeBlock/codeBlock.tsx";
import {IQR} from "@numio/bigmath";

const IQRDoc = () => {
  return (
    <>
      <h2>
        <code>IQR</code> Function
      </h2>
      <p>
        The <code>IQR</code> function from the <code>@numio/bigmath</code>{" "}
        library calculates the Interquartile Range (IQR) of a set of numbers
        represented as strings. The Interquartile Range is a measure of
        statistical dispersion, representing the difference between the third
        quartile (75th percentile) and the first quartile (25th percentile). It
        is a robust measure of spread that is less sensitive to outliers than
        the range.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function IQR(numbers: string[]): string`}
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
        The function returns a string representing the Interquartile Range (IQR)
        of the input numbers.
      </p>
      <h3>Behavior</h3>
      <ul>
        <li>
          The <code>IQR</code>{" "}
          function calculates the Interquartile Range of the numbers provided in
          the input array.
        </li>
        <li>
          The numbers in the input array should be provided as strings to ensure
          that arbitrary precision is maintained.
        </li>
        <li>
          The function first calculates the first quartile (Q1) and the third
          quartile (Q3) of the input numbers.
        </li>
        <li>
          The IQR is then calculated as the difference between Q3 and Q1: IQR =
          Q3 - Q1.
        </li>
        <li>
          The result is returned as a string.
        </li>
      </ul>
      <h3>Examples</h3>
      <CodeBlock language="javascript">
        {`import { IQR } from "@numio/bigmath";

// Example 1: Basic usage
const result1 = IQR(["7", "15", "36", "39", "40", "41"]);
console.log(result1); // Output: "25"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { IQR } from "@numio/bigmath";

// Example 2: Decimal values
const result2 = IQR(["1.1", "2.2", "3.3", "4.4", "5.5", "6.6", "7.7"]);
console.log(result2); // Output: "4.4"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { IQR } from "@numio/bigmath";

// Example 3: Negative values
const result3 = IQR(["-10", "-5", "0", "5", "10", "15", "20"]);
console.log(result3); // Output: "20"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { IQR } from "@numio/bigmath";
// Example 4:  Repeated values
const result4 = IQR(["1", "2", "2", "3", "4", "4", "5"]);
console.log(result4); // "2"
              `}
      </CodeBlock>
      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as Strings:</strong> The <code>IQR</code>{" "}
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
          The function should work for arrays of any length. For arrays with
          fewer than 4 elements, the IQR may not be very meaningful, but it will
          still be calculated according to the standard definition.
        </li>
        <li>
          <strong>Precision:</strong> The <code>IQR</code>{" "}
          function is designed to work with the arbitrary precision arithmetic
          capabilities of the <code>@numio/bigmath</code> library.
        </li>
        <li>
          <strong>Robustness:</strong> IQR is robust to outliers.
        </li>
      </ul>
    </>
  );
};

export default IQRDoc;
