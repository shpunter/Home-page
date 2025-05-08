import CodeBlock from "/client/src/UI/codeBlock/codeBlock.tsx";

const IsBinaryDoc = () => {
  return (
    <>
      <h2>
        <code>isBinary</code> Function
      </h2>
      <p>
        The <code>isBinary</code> function from the <code>@numio/bigmath</code>
        {" "}
        library validates whether a given string represents a binary number. A
        valid binary number, according to this function, is a string that starts
        with the prefix "0b" (case-insensitive) and is followed by one or more
        binary digits (0 or 1). The string can optionally start with a negative
        sign before the "0b" prefix.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function isBinary(value: string): boolean`}
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
        <ul>
          <li>
            <code>true</code>{" "}
            if the input string is a valid binary number according to the
            defined format.
          </li>
          <li>
            <code>false</code> otherwise.
          </li>
        </ul>
      </p>
      <h3>Behavior</h3>
      <ul>
        <li>
          The <code>isBinary</code> function checks if the provided string{" "}
          <code>value</code> conforms to the binary number format.
        </li>
        <li>
          A string is considered a valid binary number if it meets the following
          criteria:
          <ul>
            <li>
              It may optionally start with a hyphen (<code>-</code>).
            </li>
            <li>
              It must be followed by the prefix <code>0b</code> or{" "}
              <code>0B</code>.
            </li>
            <li>
              After the prefix, it must contain one or more binary digits, which
              are <code>0</code> or <code>1</code>.
            </li>
          </ul>
        </li>
        <li>
          The function returns <code>true</code>{" "}
          if the string matches this binary format, and <code>false</code>{" "}
          otherwise.
        </li>
      </ul>
      <h3>Examples</h3>
      <CodeBlock language="javascript">
        {`import { isBinary } from "@numio/bigmath";

// Example 1: Positive binary number
const result1 = isBinary("0b101101");
console.log(result1); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isBinary } from "@numio/bigmath";

// Example 2: Negative binary number
const result2 = isBinary("-0b110010");
console.log(result2); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isBinary } from "@numio/bigmath";

// Example 3: Binary number with leading zeros
const result3 = isBinary("0b000111");
console.log(result3); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isBinary } from "@numio/bigmath";

// Example 4: Binary number with mixed 0 and 1
const result4 = isBinary("-0b10101010");
console.log(result4); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isBinary } from "@numio/bigmath";

// Example 5: Minimal binary number
const result5 = isBinary("0b0");
console.log(result5); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isBinary } from "@numio/bigmath";

// Example 6: Another valid binary
const result6 = isBinary("0B11110000");
console.log(result6); // Output: true
                `}
      </CodeBlock>
      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Case-Insensitive Prefix:</strong>{" "}
          The "0b" prefix is case-insensitive; "0B" is also considered valid.
        </li>
        <li>
          <strong>Valid Characters:</strong>{" "}
          The string must contain only the characters '0' and '1' after the "0b"
          prefix.
        </li>
        <li>
          <strong>One or More Binary Digits Required:</strong>{" "}
          The string must contain at least one binary digit after the "0b"
          prefix to be considered valid.
        </li>
        <li>
          <strong>Optional Negative Sign:</strong>{" "}
          A leading hyphen ("-") is allowed and indicates a negative binary
          number. It must precede the "0b" prefix.
        </li>
        <li>
          <strong>No Other Characters:</strong>{" "}
          The function does not allow any other characters (e.g., spaces,
          decimal points) within the binary string.
        </li>
      </ul>
    </>
  );
};

export default IsBinaryDoc;
