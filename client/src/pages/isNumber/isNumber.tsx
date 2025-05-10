import CodeBlock from "/client/src/UI/codeBlock/codeBlock.tsx";

const IsNumberDoc = () => {
  return (
    <>
      <h2>
        <code>isNumber</code> Function
      </h2>
      <p>
        The <code>isNumber</code> function from the <code>@numio/bigmath</code>
        {" "}
        library validates whether a given string represents a valid number in
        any of the supported formats: binary, hexadecimal, octal, or decimal.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function isNumber(value: string): boolean`}
      </CodeBlock>
      <h3>Parameters</h3>
      <ul>
        <li>
          <code>value</code>: A string representing the value to be checked.
        </li>
      </ul>
      <h3>Return Value</h3>
      <p>
        The function returns a boolean value:
      </p>
      <ul>
        <li>
          <code>true</code>{" "}
          if the input string is a valid number in any of the supported formats
          (binary, hexadecimal, octal, or decimal).
        </li>
        <li>
          <code>false</code> otherwise.
        </li>
      </ul>
      <h3>Behavior</h3>
      <ul>
        <li>
          The <code>isNumber</code> function checks if the provided string{" "}
          <code>value</code>{" "}
          conforms to any of the number formats supported by the{" "}
          <code>@numio/bigmath</code> library.
        </li>
        <li>
          A string is considered a valid number if it meets the criteria for any
          of the following:
          <ul>
            <li>
              Binary: Starts with "0b" (case-insensitive) followed by one or
              more binary digits (0-1).
            </li>
            <li>
              Hexadecimal: Starts with "0x" (case-insensitive) followed by one
              or more hexadecimal digits (0-9, a-f).
            </li>
            <li>
              Octal: Starts with "0o" (case-insensitive) followed by one or more
              octal digits (0-7).
            </li>
            <li>
              Decimal: An optional negative sign followed by one or more digits,
              optionally including a decimal point and more digits.
            </li>
          </ul>
        </li>
        <li>
          The function returns <code>true</code>{" "}
          if the string matches any of these formats, and <code>false</code>
          {" "}
          otherwise.
        </li>
      </ul>
      <h3>Examples</h3>
      <CodeBlock language="javascript">
        {`import { isNumber } from "@numio/bigmath";

// Example 1: Valid decimal number
const result1 = isNumber("123.45");
console.log(result1); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isNumber } from "@numio/bigmath";

// Example 2: Valid hexadecimal number
const result2 = isNumber("0xA5");
console.log(result2); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isNumber } from "@numio/bigmath";

// Example 3: Valid binary number
const result3 = isNumber("0b101101");
console.log(result3); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isNumber } from "@numio/bigmath";

// Example 4: Valid octal number
const result4 = isNumber("0o123");
console.log(result4); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isNumber } from "@numio/bigmath";

// Example 5: Negative decimal integer
const result5 = isNumber("-123");
console.log(result5); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isNumber } from "@numio/bigmath";

// Example 6: Negative hexadecimal
const result6 = isNumber("-0xFF");
console.log(result6); // Output: true
                `}
      </CodeBlock>
      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Format Flexibility:</strong> The <code>isNumber</code>{" "}
          function accepts numbers in decimal, hexadecimal, binary, or octal
          formats.
        </li>
        <li>
          <strong>Case-Insensitive Prefixes:</strong>{" "}
          The prefixes "0x", "0b", and "0o" are case-insensitive.
        </li>
        <li>
          <strong>Optional Negative Sign:</strong>{" "}
          Numbers can be optionally preceded by a negative sign "-".
        </li>
        <li>
          <strong>Decimal Precision:</strong>{" "}
          Decimal numbers can include a decimal point and fractional digits.
        </li>
        <li>
          <strong>Minimum Digits:</strong>{" "}
          A valid number must contain at least one digit.
        </li>
      </ul>
    </>
  );
};

export default IsNumberDoc;
