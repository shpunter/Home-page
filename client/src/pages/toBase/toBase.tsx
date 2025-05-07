import CodeBlock from "/client/src/UI/codeBlock/codeBlock.tsx";

const ToBaseDoc = () => {
  return (
    <>
      <h2>
        <code>toBase</code> Function
      </h2>
      <p>
        The <code>toBase</code> function from the <code>@numio/bigmath</code>
        {" "}
        library converts a number represented as a string from one base to
        another. This function is designed to handle numbers with arbitrary
        precision and supports bases from 2 to 36.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function toBase(input: { value: string; toBase: number }): string`}
      </CodeBlock>
      <h3>Parameters</h3>
      <ul>
        <li>
          <code>input</code>: An object with two properties:
          <ul>
            <li>
              <code>value</code>: A string representing the number to convert.
              The string may optionally include a base prefix (e.g., "0x" for
              hexadecimal, "0b" for binary, "0o" for octal).
            </li>
            <li>
              <code>toBase</code>: A number (integer) representing the base to
              which the number should be converted (2 to 36).
            </li>
          </ul>
        </li>
      </ul>
      <h3>Return Value</h3>
      <p>
        The function returns a string representing the converted number in the
        specified base, including the base prefix ("0x", "0b", or "0o") for
        bases 2, 8, and 16.
      </p>
      <h3>Behavior</h3>
      <ul>
        <li>
          The <code>toBase</code>{" "}
          function converts a number from its original base (which can be
          decimal, binary, octal, or hexadecimal) to a specified base between 2
          and 36.
        </li>
        <li>
          The input number is provided as a string to ensure arbitrary
          precision.
        </li>
        <li>
          The input <code>value</code>{" "}
          string can optionally be prefixed to indicate its base:
          <ul>
            <li>"0x" or "0X" for hexadecimal (base 16)</li>
            <li>"0b" or "0B" for binary (base 2)</li>
            <li>"0o" or "0O" for octal (base 8)</li>
            <li>
              If no prefix is provided, the number is assumed to be in base 10
              (decimal).
            </li>
          </ul>
        </li>
        <li>
          The <code>toBase</code>{" "}
          parameter specifies the target base for the conversion.
        </li>
        <li>
          The function returns the converted number as a string, and adds a
          prefix for binary, octal, and hexadecimal results.
        </li>
      </ul>
      <h3>Examples</h3>
      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";

// Example 1: Decimal to hexadecimal
const result1 = toBase({ value: "11", toBase: 16 });
console.log(result1); // Output: "0xB"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";

// Example 2: Hexadecimal to decimal
const result2 = toBase({ value: "0xb", toBase: 10 });
console.log(result2); // Output: "11"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";

// Example 3: Binary to decimal
const result3 = toBase({ value: "0b101", toBase: 10 });
console.log(result3); // Output: "5"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";

// Example 4: Binary to hexadecimal
const result4 = toBase({ value: "0b1101", toBase: 16 });
console.log(result4); // Output: "0xD"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";

// Example 5: Octal to decimal
const result5 = toBase({ value: "0o11", toBase: 10 });
console.log(result5); // Output: "9"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 6: Decimal to binary
const result6 = toBase({value: "255", toBase: 2});
console.log(result6); // "0b11111111"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 7: Large decimal to hexadecimal
const result7 = toBase({value: "4294967295", toBase: 16});
console.log(result7); // "0xFFFFFFFF"
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 8: 11 to base 16
const result8 = toBase({ value: "11", toBase: 16 });
console.log(result8); // Output: "0xB"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 9: -11 to base 16
const result9 = toBase({ value: "-11", toBase: 16 });
console.log(result9); // Output: "-0xB"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 10: 0xb to base 10
const result10 = toBase({ value: "0xb", toBase: 10 });
console.log(result10); // Output: "11"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 11: 0b101 to base 10
const result11 = toBase({ value: "0b101", toBase: 10 });
console.log(result11); // Output: "5"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 12: 0b1101 to base 16
const result12 = toBase({ value: "0b1101", toBase: 16 });
console.log(result12); // Output: "0xD"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 13: 0o11 to base 10
const result13 = toBase({ value: "0o11", toBase: 10 });
console.log(result13); // Output: "9"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 14: 3 to base 2
const result14 = toBase({ value: "3", toBase: 2 });
console.log(result14); // Output: "0b11"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 15: 0b11 to base 10
const result15 = toBase({ value: "0b11", toBase: 10 });
console.log(result15); // Output: "3"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 16: -3 to base 2
const result16 = toBase({ value: "-3", toBase: 2 });
console.log(result16); // Output: "-0b11"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 17: -0b11 to base 10
const result17 = toBase({ value: "-0b11", toBase: 10 });
console.log(result17); // Output: "-3"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 18: 10 to base 16
const result18 = toBase({ value: "10", toBase: 16 });
console.log(result18); // Output: "0xA"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 19: 0xA to base 10
const result19 = toBase({ value: "0xA", toBase: 10 });
console.log(result19); // Output: "10"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 20: -10 to base 16
const result20 = toBase({ value: "-10", toBase: 16 });
console.log(result20); // Output: "-0xA"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 21: -0xA to base 10
const result21 = toBase({ value: "-0xA", toBase: 10 });
console.log(result21); // Output: "-10"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 22: 10 to base 2
const result22 = toBase({ value: "10", toBase: 2 });
console.log(result22); // Output: "0b1010"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 23: 0b1010 to base 16
const result23 = toBase({ value: "0b1010", toBase: 16 });
console.log(result23); // Output: "0xA"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 24: -0b1010 to base 16
const result24 = toBase({ value: "-0b1010", toBase: 16 });
console.log(result24); // Output: "-0xA"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 25: 0xA to base 2
const result25 = toBase({ value: "0xA", toBase: 2 });
console.log(result25); // Output: "0b1010"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { toBase } from "@numio/bigmath";
// Example 26: -0xA to base 2
const result26 = toBase({ value: "-0xA", toBase: 2 });
console.log(result26); // Output: "-0b1010"
                `}
      </CodeBlock>

      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as String:</strong> The <code>value</code>{" "}
          property of the input object must be a string.
        </li>
        <li>
          <strong>Base Prefixes:</strong> The input <code>value</code>{" "}
          string can optionally include "0x" (hex), "0b" (binary), or "0o"
          (octal) prefixes. If no prefix is provided, the input is assumed to be
          decimal.
        </li>
        <li>
          <strong>Valid Digits:</strong>{" "}
          The input string must contain only digits valid for the specified
          base. For example, a base-2 (binary) number can only contain the
          digits "0" and "1". A base-16 (hexadecimal) number can contain the
          digits "0-9" and "a-f" (or "A-F").
        </li>
        <li>
          <strong>Supported Bases:</strong> The <code>toBase</code>{" "}
          parameter must be an integer 2, 8, 10, 16.
        </li>
        <li>
          <strong>Case-Insensitive Prefixes:</strong>{" "}
          The function correctly interprets both uppercase and lowercase
          prefixes (e.g., "0x" and "0X" are both valid).
        </li>
        <li>
          <strong>Output Prefix:</strong>{" "}
          The function adds a prefix to the returned string to indicate its base
          (e.g., "0x", "0b", "0o") when the output base is 2, 8, or 16.
        </li>
        <li>
          <strong>Arbitrary Precision:</strong>{" "}
          The function leverages the arbitrary precision arithmetic capabilities
          of the <code>@numio/bigmath</code> library.
        </li>
        <li>
          <strong>Negative Numbers:</strong>{" "}
          The function correctly handles negative numbers, preserving the
          negative sign in the converted output.
        </li>
      </ul>
    </>
  );
};

export default ToBaseDoc;
