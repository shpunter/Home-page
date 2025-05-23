import CodeBlock from "/src/UI/codeBlock/codeBlock.tsx";

const ModDoc = () => {
  return (
    <>
      <h2>
        <code>mod (Modulus)</code> Function
      </h2>
      <p>
        The <code>mod</code> function from the <code>@numio/bigmath</code>{" "}
        library calculates the remainder of a division operation, commonly known as the <strong>modulus</strong>. This function is designed to handle arbitrary-precision numbers, ensuring accuracy with various numeric inputs, including integers, decimals, and different bases like hexadecimal or binary.
      </p>

      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function mod(dividend: string, divisor: string): string`}
      </CodeBlock>

      <h3>Parameters</h3>
      <ul>
        <li>
          <strong><code>dividend</code></strong>: A string representing the number to be divided. It's essential to provide numbers as strings to maintain arbitrary precision throughout calculations.
        </li>
        <li>
          <strong><code>divisor</code></strong>: A string representing the number by which to divide the dividend. This must also be provided as a string for arbitrary precision.
        </li>
      </ul>

      <h3>Return Value</h3>
      <p>
        The function returns a <strong>string</strong> representing the calculated remainder of the division.
      </p>

      <h3>Behavior</h3>
      <ul>
        <li>
          The <code>mod</code> function calculates the remainder of the <code>dividend</code> divided by the <code>divisor</code>.
        </li>
        <li>
          All calculations are performed with arbitrary precision due to the string input and the underlying <code>bigmath</code> library.
        </li>
        <li>
          The sign of the remainder will generally match the sign of the <strong>divisor</strong>. For example, `mod("-5", "3")` returns `"1"` (since `3` is positive), and `mod("5", "-3")` returns `"-1"` (since `-3` is negative).
        </li>
        <li>
          The <code>precision</code> option allows you to control the number of decimal places in the returned remainder. If the calculated remainder has fewer decimal places than the specified precision, trailing zeros will be appended.
        </li>
      </ul>

      <h3>Examples</h3>

      <CodeBlock language="javascript">
        {`import { mod } from "@numio/bigmath";

// Example 1: Basic modulus with positive numbers
const res = mod("5", "2");
console.log(res);
// Output: "1"

const res = mod("4", "3");
console.log(res);
// Output: "1"

const res = mod("7", "3");
console.log(res);
// Output: "1"

const res = mod("3", "4");
console.log(res);
// Output: "3"

const res = mod("10", "3");
console.log(res);
// Output: "1"

const res = mod("7", "7");
console.log(res);
// Output: "0"

const res = mod("5", "12");
console.log(res);
// Output: "5"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { mod } from "@numio/bigmath";

// Example 2: Modulus with negative dividend
const resNeg = mod("-5", "3");
console.log(resNeg);
// Output: "1" (Remainder sign matches divisor)

const resNeg = mod("-6", "3");
console.log(resNeg);
// Output: "0"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { mod } from "@numio/bigmath";

// Example 3: Modulus with negative divisor
const resNeg = mod("5", "-3");
console.log(resNeg);
// Output: "-1" (Remainder sign matches divisor)

const resNeg = mod("-5", "-3");
console.log(resNeg);
// Output: "-2" (Remainder sign matches divisor)
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { mod } from "@numio/bigmath";

// Example 4: Modulus with zero dividend
const resZero = mod("0", "5");
console.log(resZero);
// Output: "0"

const resZero = mod("0", "-5");
console.log(resZero);
// Output: "0"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { mod } from "@numio/bigmath";

// Example 5: Modulus with large numbers
const resLarge = mod("1234567890123456789", "987654321");
console.log(resLarge);
// Output: "725308641"
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { mod } from "@numio/bigmath";

// Example 6: Modulus with different number bases
const resHex = mod("0xA", "8"); // 0xA is 10 in decimal
console.log(resHex);
// Output: "2"

const resBinary = mod("0b1011", "0b10"); // 0b1011 is 11, 0b10 is 2
console.log(resBinary);
// Output: "1"

const resOctal = mod("0o12", "0o5"); // 0o12 is 10, 0o5 is 5
console.log(resOctal);
// Output: "0"

const resHexFinal = mod("0xFF", "0x10"); // 0xFF is 255, 0x10 is 16
console.log(resHexFinal);
// Output: "15" (Note: Returns decimal string representation, not hex 'F')
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { mod } from "@numio/bigmath";

// Example 7: Modulus with precision option (default precision shown)
const resPrecision = mod("10", "3");
console.log(resPrecision);
// Output: "1"
                `}
      </CodeBlock>

      ---

      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as Strings</strong>: Always provide the <code>dividend</code> and <code>divisor</code> elements as strings. This is crucial for preserving numerical precision, especially with floating-point numbers.
        </li>
        <li>
          <strong>Numeric Input</strong>: Each string input must represent a valid numerical value. The function relies on the underlying <code>bigmath</code> parsing capabilities and does not perform explicit validation of non-numeric content.
        </li>
        <li>
          <strong>Non-Decimal Numbers</strong>: When using non-decimal formats like hexadecimal (<code>0x</code>), binary (<code>0b</code>), or octal (<code>0o</code>), ensure that these represent <strong>integer values only</strong>. The <code>bigmath</code> library processes these as integers when performing calculations.
        </li>
        <li>
          <strong>Zero Divisor</strong>: Providing `"0"` as the <code>divisor</code> will result in an error, as division by zero is mathematically undefined.
        </li>
        <li>
          <strong>Precision</strong>: The returned value is a string to preserve the full precision of the calculation. Use the <code>precision</code> option to control the number of decimal places if a truncated or rounded result is desired.
        </li>
      </ul>
    </>
  );
};

export default ModDoc;