import CodeBlock from "/src/UI/codeBlock/codeBlock.tsx";

const AbsDoc = () => {
  return (
    <>
      <h2>
        <code>abs</code> Function
      </h2>
      <p>
        The <code>abs</code> function from the <code>@numio/bigmath</code>{" "}
        library calculates the absolute value of a number represented as a
        string. This function is designed to handle numbers with arbitrary
        precision, avoiding the potential precision issues that can occur when
        using JavaScript's built-in <code>Math.abs</code>{" "}
        with large numbers or numbers with many decimal places.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function abs(number: string): string`}
      </CodeBlock>
      <h3>Parameters</h3>
      <ul>
        <li>
          <code>number</code>: A string representing the number for which to
          calculate the absolute value.
        </li>
      </ul>
      <h3>Return Value</h3>
      <p>
        The function returns a string representing the absolute value of the
        input number.
      </p>
      <h3>Behavior</h3>
      <ul>
        <li>
          The <code>abs</code>{" "}
          function calculates the absolute value of the input number.
        </li>
        <li>
          The input number should be provided as a string to ensure that
          arbitrary precision is maintained.
        </li>
        <li>
          The function returns the non-negative value of the number, effectively
          removing any negative sign.
        </li>
      </ul>
      <h3>Examples</h3>
      <CodeBlock language="javascript">
        {`import { abs } from "@numio/bigmath";

// Example 1: Absolute value of a negative number
const result1 = abs("-1");
console.log(result1); // Output: "1"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { abs } from "@numio/bigmath";

// Example 2: Absolute value of a positive number
const result2 = abs("1");
console.log(result2); // Output: "1"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { abs } from "@numio/bigmath";
// Example 4: Absolute value of a large negative number
const result4 = abs("-12345678901234567890");
console.log(result4);
              `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { abs } from "@numio/bigmath";
// Example 5: Absolute value of a decimal number
const result5 = abs("-3.14159");
console.log(result5);
              `}
      </CodeBlock>
      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as String:</strong> The <code>abs</code>{" "}
          function expects the input number as a string. This is crucial for
          preserving precision.
        </li>
        <li>
          <strong>Valid Number String:</strong>{" "}
          The input string should represent a valid number. The function does
          not perform explicit validation of the input string.
        </li>
        <li>
          <strong>Non-negative Output:</strong>{" "}
          The function always returns a non-negative value.
        </li>
        <li>
          <strong>Arbitrary Precision:</strong> The <code>abs</code>{" "}
          function leverages the arbitrary precision arithmetic capabilities of
          the <code>@numio/bigmath</code> library.
        </li>
      </ul>
    </>
  );
};

export default AbsDoc;
