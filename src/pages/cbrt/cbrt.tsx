import CodeBlock from "/src/UI/codeBlock/codeBlock.tsx";

const CbrtDoc = () => {
  return (
    <>
      <h2>
        <code>cbrt</code> Function
      </h2>
      <p>
        The <code>cbrt</code> function from the <code>@numio/bigmath</code>{" "}
        library calculates the cube root of a number represented as a string.
        This function is designed to handle numbers with arbitrary precision,
        avoiding the potential precision issues that can occur when using
        JavaScript's built-in <code>Math.cbrt</code>{" "}
        with large numbers or numbers with many decimal places.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function cbrt(number: string, precision?: string): string`}
      </CodeBlock>
      <h3>Parameters</h3>
      <ul>
        <li>
          <code>number</code>: A string representing the number for which to
          calculate the cube root.
        </li>
        <li>
          <code>precision</code>{" "}
          (optional): A string representing the desired precision of the result.
          If provided, the result will be rounded to this precision.
        </li>
      </ul>
      <h3>Return Value</h3>
      <p>
        The function returns a string representing the cube root of the input
        number.
      </p>
      <h3>Behavior</h3>
      <ul>
        <li>
          The <code>cbrt</code>{" "}
          function calculates the cube root of the input number.
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
          parameter is not provided, the function returns the cube root with a
          default precision of "0.0000000000001".
        </li>
      </ul>
      <h3>Examples</h3>
      <CodeBlock language="javascript">
        {`import { cbrt } from "@numio/bigmath";

// Example 1: Basic usage
const result1 = cbrt("27");
console.log(result1); // Output: "3"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { cbrt } from "@numio/bigmath";

// Example 2: Cube root of 1000
const result2 = cbrt("1000");
console.log(result2); // Output: "10"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { cbrt } from "@numio/bigmath";

// Example 3: Cube root of 15
const result3 = cbrt("15");
console.log(result3); // Output: "2.4662120743305"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { cbrt } from "@numio/bigmath";

// Example 4: Specifying precision
const result4 = cbrt("15", "0.001");
console.log(result4); // Output: "2.466"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { cbrt } from "@numio/bigmath";
              // Example 5: Cube root of a large number
              const result5 = cbrt("12345678901234567890");
              console.log(result5); // Output: "2311204.2409018362511"
              `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { cbrt } from "@numio/bigmath";
              // Example 6: Cube root of a decimal
              const result6 = cbrt("0.125");
              console.log(result6); // 0.5
              `}
      </CodeBlock>
      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as String:</strong> The <code>cbrt</code>{" "}
          function expects the input number as a string. This is crucial for
          preserving precision.
        </li>
        <li>
          <strong>Valid Number String:</strong>{" "}
          The input string should represent a valid number. The function does
          not perform explicit validation of the input string.
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
          <strong>Arbitrary Precision:</strong> The <code>cbrt</code>{" "}
          function leverages the arbitrary precision arithmetic capabilities of
          the <code>@numio/bigmath</code> library.
        </li>
      </ul>
    </>
  );
};

export default CbrtDoc;
