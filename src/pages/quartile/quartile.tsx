import CodeBlock from "/src/UI/codeBlock/codeBlock.tsx";

const Quartile = () => {
  return (
    <>
      <h2>
        <code>quartile</code> Function
      </h2>
      <p>
        The <code>quartile</code>{" "}
        function calculates the first, second, and third quartiles of a given
        array of numbers. Quartiles divide a dataset into four equal parts.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function quartile(numbers: string[]): { Q1: string; Q2: string; Q3: string }`}
      </CodeBlock>
      <h3>Parameters</h3>
      <ul>
        <li>
          <code>numbers</code>: An array of strings, where each string
          represents a number. The function will calculate the quartiles of the
          dataset represented by these numbers.
        </li>
      </ul>
      <h3>Return Value</h3>
      <p>
        The function returns an object with the following properties:
      </p>
      <ul>
        <li>
          <code>Q1</code>: A string representing the first quartile (25th
          percentile).
        </li>
        <li>
          <code>Q2</code>: A string representing the second quartile (50th
          percentile), which is also the median.
        </li>
        <li>
          <code>Q3</code>: A string representing the third quartile (75th
          percentile).
        </li>
      </ul>
      <h3>Behavior</h3>
      <ul>
        <li>
          The <code>quartile</code>{" "}
          function takes an array of numbers (as strings) and returns the first,
          second, and third quartiles.
        </li>
        <li>
          The input numbers should be provided as strings to maintain precision.
        </li>
        <li>
          The function determines the quartiles by sorting the input data and
          then calculating the values that divide the data into four equal
          parts.
        </li>
        <li>
          The returned quartiles (<code>Q1</code>, <code>Q2</code>, and{" "}
          <code>Q3</code>) are also represented as strings.
        </li>
      </ul>
      <h3>Examples</h3>
      <CodeBlock language="javascript">
        {`import { quartile } from "@numio/bigmath";

// Example 1: Basic Usage
const result1 = quartile(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
console.log(result1); // Output: { Q1: "2.5", Q2: "5", Q3: "7.5" }
        `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { quartile } from "@numio/bigmath";

// Example 2: Decimal Values
const decimalData = ["0.001", "0.3", "0.4", "1"];
const result2 = quartile(decimalData);
console.log(result2); // Output: { Q1: "0.1505", Q2: "0.35", Q3: "0.7" }
`}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { quartile } from "@numio/bigmath";

// Example 3: Repeated Values
const repeatedData = ["1","1","2","2","2","3","4","5"];
const result = quartile(repeatedData);
console.log(result);
//Output: { Q1: '1.5', Q2: '2', Q3: '3.5' }
`}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { quartile } from "@numio/bigmath";

// Example 4: Negative Values
const negativeData = ["-5","-4","-3","-2","-1","0","1","2","3"];
const result = quartile(negativeData);
console.log(result);
//Output: { Q1: '-3.5', Q2: '-1', Q3: '1.5' }
        `}
      </CodeBlock>

      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as Strings:</strong>{" "}
          Always provide the input numbers as strings to ensure accurate
          calculations, especially when dealing with decimal values or large
          numbers.
        </li>
        <li>
          <strong>Data Distribution:</strong>{" "}
          Quartiles are sensitive to the distribution of the data. Ensure your
          input data is representative of the population you are analyzing.
        </li>
        <li>
          <strong>Number of Elements:</strong>{" "}
          The quartile function should work for any number of elements in the
          array, but arrays with fewer than 4 elements may not provide
          meaningful quartile values.
        </li>
      </ul>
    </>
  );
};

export default Quartile;
