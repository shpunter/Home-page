import CodeBlock from "/client/src/UI/codeBlock/codeBlock.tsx";

const IsDecimalDoc = () => {
  return (
    <>
      <h2>
        <code>isDecimal</code> Function
      </h2>
      <p>
        The <code>isDecimal</code> function from the <code>@numio/bigmath</code>
        {" "}
        library validates whether a given string represents a decimal number. A
        valid decimal number, according to this function, is a string that
        represents a numeric value with an optional negative sign and an
        optional decimal point.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function isDecimal(value: string): boolean`}
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
          if the input string is a valid decimal number according to the defined
          format.
        </li>
        <li>
          <code>false</code> otherwise.
        </li>
      </ul>
      <h3>Behavior</h3>
      <ul>
        <li>
          The <code>isDecimal</code> function checks if the provided string{" "}
          <code>value</code> conforms to the decimal number format.
        </li>
        <li>
          A string is considered a valid decimal number if it meets the
          following criteria:
          <ul>
            <li>
              It may optionally start with a hyphen (<code>-</code>).
            </li>
            <li>It must contain at least one digit.</li>
            <li>
              It may optionally contain a decimal point (<code>.</code>)
              followed by one or more digits.
            </li>
            <li>
              It cannot start with a decimal point alone (e.g., ".5" is
              invalid).
            </li>
          </ul>
        </li>
        <li>
          The function returns <code>true</code>{" "}
          if the string matches this decimal format, and <code>false</code>{" "}
          otherwise.
        </li>
      </ul>
      <h3>Examples</h3>
      <CodeBlock language="javascript">
        {`import { isDecimal } from "@numio/bigmath";

// Example 1: Positive decimal number
const result1 = isDecimal("123.45");
console.log(result1); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isDecimal } from "@numio/bigmath";

// Example 2: Negative decimal number
const result2 = isDecimal("-10.5");
console.log(result2); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isDecimal } from "@numio/bigmath";

// Example 3: Integer
const result3 = isDecimal("100");
console.log(result3); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isDecimal } from "@numio/bigmath";

// Example 4: Negative integer
const result4 = isDecimal("-50");
console.log(result4); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isDecimal } from "@numio/bigmath";
                
// Example 5: Decimal number with leading zero
const result5 = isDecimal("0.75");
console.log(result5); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isDecimal } from "@numio/bigmath";
                
// Example 6: Large decimal number
const result6 = isDecimal("1234567890.987654321");
console.log(result6); // Output: true
                `}
      </CodeBlock>
      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Optional Negative Sign:</strong>{" "}
          A leading hyphen ("-") is allowed and indicates a negative decimal
          number.
        </li>
        <li>
          <strong>At Least One Digit:</strong>{" "}
          The string must contain at least one digit to be considered a valid
          decimal number.
        </li>
        <li>
          <strong>Optional Decimal Point:</strong>{" "}
          The string may or may not contain a decimal point ("."). If it does,
          it must be followed by at least one digit.
        </li>
        <li>
          <strong>No Leading Decimal Point:</strong>{" "}
          A string that starts with a decimal point (e.g., ".5") is considered
          invalid.
        </li>
        <li>
          <strong>No Non-Digit Characters:</strong>{" "}
          The string can only contain digits (0-9) and optionally a single
          decimal point.
        </li>
      </ul>
    </>
  );
};

export default IsDecimalDoc;
