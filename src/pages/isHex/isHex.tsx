import CodeBlock from "/src/UI/codeBlock/codeBlock.tsx";

const IsHexDoc = () => {
  return (
    <>
      <h2>
        <code>isHex</code> Function
      </h2>
      <p>
        The <code>isHex</code> function from the <code>@numio/bigmath</code>
        {" "}
        library validates whether a given string represents a hexadecimal
        number. A valid hexadecimal number, according to this function, is a
        string that starts with the prefix "0x" (case-insensitive) and is
        followed by one or more hexadecimal digits (0-9 and a-f,
        case-insensitive). The string can optionally start with a negative sign
        before the "0x" prefix.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function isHex(value: string): boolean`}
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
          if the input string is a valid hexadecimal number according to the
          defined format.
        </li>
        <li>
          <code>false</code> otherwise.
        </li>
      </ul>
      <h3>Behavior</h3>
      <ul>
        <li>
          The <code>isHex</code> function checks if the provided string{" "}
          <code>value</code> conforms to the hexadecimal number format.
        </li>
        <li>
          A string is considered a valid hexadecimal number if it meets the
          following criteria:
          <ul>
            <li>
              It may optionally start with a hyphen (<code>-</code>).
            </li>
            <li>
              It must be followed by the prefix <code>0x</code> or{" "}
              <code>0X</code>.
            </li>
            <li>
              After the prefix, it must contain one or more hexadecimal digits,
              which are <code>0-9</code> and <code>a-f</code> (or{" "}
              <code>A-F</code>).
            </li>
          </ul>
        </li>
        <li>
          The function returns <code>true</code>{" "}
          if the string matches this hexadecimal format, and <code>false</code>
          {" "}
          otherwise.
        </li>
      </ul>
      <h3>Examples</h3>
      <CodeBlock language="javascript">
        {`import { isHex } from "@numio/bigmath";

// Example 1: Positive hexadecimal number
const result1 = isHex("0xA5");
console.log(result1); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isHex } from "@numio/bigmath";

// Example 2: Negative hexadecimal number
const result2 = isHex("-0x3F");
console.log(result2); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isHex } from "@numio/bigmath";

// Example 3: Hexadecimal number with lowercase letters
const result3 = isHex("0xabcdef0");
console.log(result3); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isHex } from "@numio/bigmath";

// Example 4: Hexadecimal number with mixed case letters
const result4 = isHex("-0x1C9bF2a");
console.log(result4); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isHex } from "@numio/bigmath";

// Example 5: Hexadecimal number with only digits
const result5 = isHex("0x007");
console.log(result5); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isHex } from "@numio/bigmath";

// Example 6: Negative hexadecimal number with leading zeros
const result6 = isHex("-0x00FF");
console.log(result6); // Output: true
                `}
      </CodeBlock>
      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Case-Insensitive Prefix:</strong>{" "}
          The "0x" prefix is case-insensitive; "0X" is also considered valid.
        </li>
        <li>
          <strong>Case-Insensitive Hex Digits:</strong>{" "}
          The hexadecimal digits (a-f) are case-insensitive (A-F are also
          valid).
        </li>
        <li>
          <strong>One or More Hex Digits Required:</strong>{" "}
          The string must contain at least one hexadecimal digit after the "0x"
          prefix to be considered valid.
        </li>
        <li>
          <strong>Optional Negative Sign:</strong>{" "}
          A leading hyphen ("-") is allowed and indicates a negative hexadecimal
          number. It must precede the "0x" prefix.
        </li>
        <li>
          <strong>No Other Characters:</strong>{" "}
          The function does not allow any other characters (e.g., spaces,
          decimal points) within the hexadecimal string.
        </li>
      </ul>
    </>
  );
};

export default IsHexDoc;
