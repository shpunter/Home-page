import CodeBlock from "/client/src/UI/codeBlock/codeBlock.tsx";

const SqrtDoc = () => {
  return (
    <>
      <h2>
        <code>sqrt</code> Function
      </h2>
      <p>
        The <code>sqrt</code> function from the <code>@numio/bigmath</code>{" "}
        library calculates the square root of a number represented as a string.
        This function is designed to handle numbers with arbitrary precision,
        avoiding the potential precision issues that can occur when using
        JavaScript's built-in <code>Math.sqrt</code>{" "}
        with large numbers or numbers with many decimal places.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function sqrt(number: string, precision?: string): string`}
      </CodeBlock>
      <h3>Parameters</h3>
      <ul>
        <li>
          <code>number</code>: A string representing the number for which to
          calculate the square root.
        </li>
        <li>
          <code>precision</code>{" "}
          (optional): A string representing the desired precision of the result.
          If provided, the result will be rounded to this precision.
        </li>
      </ul>
      <h3>Return Value</h3>
      <p>
        The function returns a string representing the square root of the input
        number.
      </p>
      <h3>Behavior</h3>
      <ul>
        <li>
          The <code>sqrt</code>{" "}
          function calculates the square root of the input number.
        </li>
        <li>
          The input number should be provided as a string to ensure that
          arbitrary precision is maintained.
        </li>
        <li>
          The optional <code>precision</code>{" "}
          parameter allows you to specify the desired level of precision for the
          result.
        </li>
        <li>
          If the <code>precision</code>{" "}
          parameter is not provided, the function returns the square root with
          the maximum possible precision.
        </li>
        <li>
          If the input number is negative, the function throws an error.
        </li>
      </ul>
      <h3>Examples</h3>
      <CodeBlock language="javascript">
        {`import { sqrt } from "@numio/bigmath";

// Example 1: Basic usage
const result1 = sqrt("81");
console.log(result1); // Output: "9"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { sqrt } from "@numio/bigmath";

// Example 2: Square root of 3
const result2 = sqrt("3");
console.log(result2); // Output: "1.7320508075689"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { sqrt } from "@numio/bigmath";

// Example 3: Specifying precision
const result3 = sqrt("3", "0.01");
console.log(result3); // Output: "1.73"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { sqrt } from "@numio/bigmath";

// Example 4: High precision
const result4 = sqrt("3", "0.000000000000000000001");
console.log(result4); // Output: "1.732050807568877293527"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { sqrt } from "@numio/bigmath";
// Example 5:  Square root of a large number
const result5 = sqrt("12345678901234567890");
console.log(result5); // Output: "3513641828.8201442530937"
              `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { sqrt } from "@numio/bigmath";
              // Example 6: Square root of a decimal
const result6 = sqrt("0.25");
console.log(result6); // 0.5
              `}
      </CodeBlock>
      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as String:</strong> The <code>sqrt</code>{" "}
          function expects the input number as a string. This is crucial for
          preserving precision.
        </li>
        <li>
          <strong>Valid Number String:</strong>{" "}
          The input string should represent a valid, non-negative number. The
          function does not perform explicit validation of the input string.
        </li>
        <li>
          <strong>Optional Precision:</strong> The <code>precision</code>{" "}
          parameter is optional. If provided, it should also be a string
          representing the desired precision (e.g., "0.001" for three decimal
          places).
        </li>
        <li>
          <strong>Precision Handling:</strong>{" "}
          The function uses the provided precision string to determine the
          number of decimal places in the result.
        </li>
        <li>
          <strong>Default Precision:</strong>{" "}
          If no precision is provided, the function defaults to a precision of
          "0.0000000000001".
        </li>
        <li>
          <strong>Arbitrary Precision:</strong> The <code>sqrt</code>{" "}
          function leverages the arbitrary precision arithmetic capabilities of
          the <code>@numio/bigmath</code> library.
        </li>
      </ul>
    </>
  );
};

export default SqrtDoc;
