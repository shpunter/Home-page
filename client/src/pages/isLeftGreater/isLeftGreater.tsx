import CodeBlock from "/client/src/UI/codeBlock/codeBlock.tsx";

const IsLeftGreater = () => {
  return (
    <>
      <h2>
        <code>isLeftGreater</code> Function
      </h2>
      <p>
        The <code>isLeftGreater</code> function from the{" "}
        <code>@numio/bigmath</code>{" "}
        library checks if one number (represented as a string) is greater than
        another. This function is designed to handle numbers with arbitrary
        precision, avoiding the potential precision issues that can occur when
        using JavaScript's built-in comparison operators with large numbers or
        numbers with many decimal places.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function isLeftGreater(numbers: { left: string, right: string }): boolean`}
      </CodeBlock>
      <h3>Parameters</h3>
      <ul>
        <li>
          <code>numbers</code>: An object with two properties:
          <ul>
            <li>
              <code>left</code>: A string representing the first number (the
              number on the left-hand side of the comparison).
            </li>
            <li>
              <code>right</code>: A string representing the second number (the
              number on the right-hand side of the comparison).
            </li>
          </ul>
        </li>
      </ul>
      <h3>Return Value</h3>
      <p>
        The function returns a boolean value: <code>true</code>{" "}
        if the left number is greater than the right number, and{" "}
        <code>false</code> otherwise.
      </p>
      <h3>Behavior</h3>
      <ul>
        <li>
          The <code>isLeftGreater</code>{" "}
          function compares two numbers, provided as strings, to determine if
          the left number is strictly greater than the right number.
        </li>
        <li>
          The function handles numbers of arbitrary size and precision.
        </li>
        <li>
          The function returns <code>true</code>{" "}
          if the left number is greater than the right number, and{" "}
          <code>false</code> in all other cases (including when they are equal).
        </li>
      </ul>
      <h3>Examples</h3>
      <CodeBlock language="javascript">
        {`import { isLeftGreater } from "@numio/bigmath";

// Example 1: left < right
const result1 = isLeftGreater({ left: "0.1", right: "2" });
console.log(result1); // Output: false
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isLeftGreater } from "@numio/bigmath";

// Example 2: left > right
const result2 = isLeftGreater({ left: "2", right: "0.1" });
console.log(result2); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isLeftGreater } from "@numio/bigmath";

// Example 3: left == right
const result3 = isLeftGreater({ left: "0.1", right: "0.1" });
console.log(result3); // Output: false
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isLeftGreater } from "@numio/bigmath";

// Example 4: left > right, negative right
const result4 = isLeftGreater({ left: "0.1", right: "-0.1" });
console.log(result4); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isLeftGreater } from "@numio/bigmath";

// Example 5: left < right, both negative
const result5 = isLeftGreater({left: "-2", right: "-1"});
console.log(result5); // Output: false
              `}
      </CodeBlock>
      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as Strings:</strong> The <code>isLeftGreater</code>{" "}
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
          <strong>Strict Comparison:</strong>{" "}
          The function performs a strict greater-than comparison (<code>
            &gt;
          </code>). It returns <code>false</code> if the numbers are equal.
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

export default IsLeftGreater;
