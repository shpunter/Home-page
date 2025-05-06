import { mean } from "@numio/bigmath";
import CodeBlock from "/client/src/UI/codeBlock/codeBlock.tsx";

const Mean = () => {
  return (
    <>
      <h2>
        <code>mean</code> Function
      </h2>
      <p>
        The <code>mean</code> function from the <code>@numio/bigmath</code>{" "}
        library calculates the arithmetic mean (average) of a set of numbers
        represented as strings. This function is designed to handle numbers with
        arbitrary precision, avoiding the potential precision issues that can
        arise when using JavaScript's built-in <code>Number</code>{" "}
        type with large numbers or numbers with many decimal places.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function mean(numbers: string[]): string`}
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
        The function returns a string representing the arithmetic mean of the
        input numbers.
      </p>
      <h3>Behavior</h3>
      <ul>
        <li>
          The <code>mean</code>{" "}
          function calculates the arithmetic mean of the numbers provided in the
          input array.
        </li>
        <li>
          The numbers in the input array should be provided as strings to ensure
          that arbitrary precision is maintained.
        </li>
        <li>
          The function sums all the numbers in the array and divides the sum by
          the number of elements in the array.
        </li>
        <li>
          The result is returned as a string.
        </li>
      </ul>
      <h3>Examples</h3>
      <CodeBlock language="javascript">
        {`import { mean } from "@numio/bigmath";

// Example 1: Integer values
const result1 = mean(["5", "4", "3", "2", "1", "0"]);
console.log(result1); // Output: "2.5"
`}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { mean } from "@numio/bigmath";

// Example 2: Decimal values
const result2 = mean(["0.5", "0.4", "0.3", "0.2", "0.1", "0"]);
console.log(result2); // Output: "0.25"
`}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { mean } from "@numio/bigmath";

// Example 3: Single value
const result3 = mean(["10"]);
console.log(result3); // Output: "10"
`}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { mean } from "@numio/bigmath";
              
// Example 4: Negative values
const result4 = mean(["-10", "-20", "-30"]);
console.log(result4); // Output: "-20"

`}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { mean } from "@numio/bigmath";
              
// Example 5: Mixed positive and negative values
const result5 = mean(["-10", "-20", "10", "30"]);
console.log(result5); // Output: "2.5"
              `}
      </CodeBlock>
      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as Strings:</strong> The <code>mean</code>{" "}
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
          If the input array is empty, the behavior of the function is
          undefined. It's the developer's responsibility to ensure the array has
          at least one element.
        </li>
        <li>
          <strong>Precision:</strong> The <code>mean</code>{" "}
          function is designed to work with the arbitrary precision arithmetic
          capabilities of the <code>@numio/bigmath</code> library.
        </li>
      </ul>
    </>
  );
};

export default Mean;
