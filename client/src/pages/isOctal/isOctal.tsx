import CodeBlock from "/client/src/UI/codeBlock/codeBlock.tsx";

const IsOctalDoc = () => {
  return (
    <>
      <h2>
        <code>isOctal</code> Function
      </h2>
      <p>
        The <code>isOctal</code> function from the <code>@numio/bigmath</code>
        {" "}
        library validates whether a given string represents an octal number. A
        valid octal number, according to this function, is a string that starts
        with the prefix "0o" (case-insensitive) and is followed by one or more
        octal digits (0-7). The string can optionally start with a negative sign
        before the "0o" prefix.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function isOctal(value: string): boolean`}
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
            if the input string is a valid octal number according to the defined
            format.
          </li>
          <li>
            <code>false</code> otherwise.
          </li>
        </ul>
      </p>
      <h3>Behavior</h3>
      <ul>
        <li>
          The <code>isOctal</code> function checks if the provided string{" "}
          <code>value</code> conforms to the octal number format.
        </li>
        <li>
          A string is considered a valid octal number if it meets the following
          criteria:
          <ul>
            <li>
              It may optionally start with a hyphen (<code>-</code>).
            </li>
            <li>
              It must be followed by the prefix <code>0o</code> or{" "}
              <code>0O</code>.
            </li>
            <li>
              After the prefix, it must contain one or more octal digits, which
              are <code>0-7</code>.
            </li>
          </ul>
        </li>
        <li>
          The function returns <code>true</code>{" "}
          if the string matches this octal format, and <code>false</code>{" "}
          otherwise.
        </li>
      </ul>
      <h3>Examples</h3>
      <CodeBlock language="javascript">
        {`import { isOctal } from "@numio/bigmath";

// Example 1: Positive octal number
const result1 = isOctal("0o123");
console.log(result1); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isOctal } from "@numio/bigmath";

// Example 2: Negative octal number
const result2 = isOctal("-0o456");
console.log(result2); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isOctal } from "@numio/bigmath";

// Example 3: Octal number with leading zeros
const result3 = isOctal("0o007");
console.log(result3); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isOctal } from "@numio/bigmath";

// Example 4: Octal number with all digits
const result4 = isOctal("-0o76543210");
console.log(result4); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isOctal } from "@numio/bigmath";

// Example 5: Smallest octal number
const result5 = isOctal("0o0");
console.log(result5); // Output: true
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { isOctal } from "@numio/bigmath";

// Example 6: Octal number with different digits
const result6 = isOctal("0O1234567");
console.log(result6); // Output: true
                `}
      </CodeBlock>

      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Case-Insensitive Prefix:</strong>{" "}
          The "0o" prefix is case-insensitive; "0O" is also considered valid.
        </li>
        <li>
          <strong>Valid Characters:</strong>{" "}
          The string must contain only the digits '0' through '7' after the "0o"
          prefix.
        </li>
        <li>
          <strong>One or More Octal Digits Required:</strong>{" "}
          The string must contain at least one octal digit after the "0o" prefix
          to be considered valid.
        </li>
        <li>
          <strong>Optional Negative Sign:</strong>{" "}
          A leading hyphen ("-") is allowed and indicates a negative octal
          number. It must precede the "0o" prefix.
        </li>
        <li>
          <strong>No Other Characters:</strong>{" "}
          The function does not allow any other characters (e.g., spaces,
          decimal points) within the octal string.
        </li>
      </ul>
    </>
  );
};

export default IsOctalDoc;
