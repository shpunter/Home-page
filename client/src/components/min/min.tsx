import CodeBlock from "/client/src/UI/codeBlock/codeBlock.tsx";

const Min = () => {
  return (
    <>
      <h2>
        <code>min</code> Function
      </h2>
      <p>
        The <code>min</code> function from the <code>@numio/bigmath</code>{" "}
        library returns the smallest of several numbers represented as strings.
        This function is designed to handle numbers with arbitrary precision,
        avoiding the potential precision issues that can occur when using
        JavaScript's built-in <code>Math.min</code>{" "}
        with large numbers or numbers with many decimal places.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function min(numbers: string[]): string`}
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
        The function returns a string representing the minimum value among the
        input numbers.
      </p>
      <h3>Behavior</h3>
      <ul>
        <li>
          The <code>min</code>{" "}
          function determines the smallest number from the provided array of
          string representations of numbers.
        </li>
        <li>
          The function handles numbers of arbitrary size and precision.
        </li>
        <li>
          If the input array is empty, the behavior is undefined. It's the
          developer's responsibility to ensure the array has at least one
          element.
        </li>
        <li>
          The function returns the minimum value as a string.
        </li>
      </ul>
      <h3>Examples</h3>
      <CodeBlock language="javascript">
        {`import { min } from "@numio/bigmath";

// Example 1: Basic usage
const result1 = min(["2", "-1", "0.1"]);
console.log(result1); // Output: "-1"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { min } from "@numio/bigmath";

// Example 2: Array with larger numbers
const result2 = min(["1000", "500", "2000"]);
console.log(result2); // Output: "500"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { min } from "@numio/bigmath";

// Example 3: Array with decimal numbers
const result3 = min(["3.14", "2.71", "1.62"]);
console.log(result3); // Output: "1.62"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { min } from "@numio/bigmath";

// Example 4: Array with negative numbers
const result4 = min(["-5", "-1", "-10"]);
console.log(result4); // Output: "-10"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { min } from "@numio/bigmath";

// Example 5: Array with mixed positive and negative numbers
const result5 = min(["10", "-20", "30", "-40"]);
console.log(result5); // Output: "-40"
                `}
      </CodeBlock>
      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as Strings:</strong> The <code>min</code>{" "}
          function expects an array of strings, where each string represents a
          number. This is crucial for preserving precision.
        </li>
        <li>
          <strong>Numeric Input:</strong>{" "}
          The strings in the input array should represent valid numbers. The
          function does not perform explicit validation of the input strings.
        </li>
        <li>
          <strong>Non-empty Array:</strong>{" "}
          The behavior of the function is undefined for an empty input array.
          You should ensure that the array contains at least one number.
        </li>
        <li>
          <strong>Precision:</strong>{" "}
          The function leverages the arbitrary precision arithmetic capabilities
          of the <code>@numio/bigmath</code> library.
        </li>
      </ul>
    </>
  );
};

export default Min;
