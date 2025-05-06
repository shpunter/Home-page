import CodeBlock from "/client/src/UI/codeBlock/codeBlock.tsx";

const IsEqual = () => {
  return (
    <>
      <h2>
        <code>isEqual</code> Function
      </h2>
      <p>
        The <code>isEqual</code> function from the <code>@numio/bigmath</code>
        {" "}
        library checks if two numbers, represented as strings, are equal. This
        function is designed to handle numbers with arbitrary precision,
        avoiding the potential precision issues that can occur when using
        JavaScript's built-in equality operators with large numbers or numbers
        with many decimal places.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function isEqual(numbers: { left: string; right: string }): boolean`}
      </CodeBlock>
      <h3>Parameters</h3>
      <ul>
        <li>
          <code>numbers</code>: An object with two properties:
          <ul>
            <li>
              <code>left</code>: A string representing the first number.
            </li>
            <li>
              <code>right</code>: A string representing the second number.
            </li>
          </ul>
        </li>
      </ul>
      <h3>Return Value</h3>
      <p>
        The function returns a boolean value: <code>true</code>{" "}
        if the two numbers are equal, and <code>false</code> otherwise.
      </p>
      <h3>Behavior</h3>
      <ul>
        <li>
          The <code>isEqual</code>{" "}
          function compares two numbers, provided as strings, for equality.
        </li>
        <li>
          The function handles numbers of arbitrary size and precision.
        </li>
        <li>
          The function returns <code>true</code>{" "}
          if the two numbers are equal, and <code>false</code> if they are not.
        </li>
      </ul>
      <h3>Examples</h3>
      <CodeBlock language="javascript">
        {`import { isEqual } from "@numio/bigmath";

// Example 1: Equal decimal numbers
const result1 = isEqual({ left: "0.1", right: "0.1" });
console.log(result1); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isEqual } from "@numio/bigmath";

// Example 2: Unequal integer and decimal numbers
const result2 = isEqual({ left: "2", right: "0.1" });
console.log(result2); // Output: false
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isEqual } from "@numio/bigmath";

// Example 3: Equal large integers
const result3 = isEqual({ left: "1234567890123456789", right: "1234567890123456789" });
console.log(result3); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isEqual } from "@numio/bigmath";

// Example 4: Unequal negative numbers
const result4 = isEqual({ left: "-5", right: "-6" });
console.log(result4); // Output: false
                `}
      </CodeBlock>
      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as Strings:</strong> The <code>isEqual</code>{" "}
          function expects the numbers to be compared as strings. This is
          important for preserving precision.
        </li>
        <li>
          <strong>Valid Number Strings:</strong>{" "}
          The input strings should represent valid numbers. The function does
          not perform explicit validation of the input strings.
        </li>
        <li>
          <strong>Object Parameter:</strong> The function expects an object with
          {" "}
          <code>left</code> and <code>right</code>{" "}
          properties, each holding one of the numbers as a string.
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

export default IsEqual;
