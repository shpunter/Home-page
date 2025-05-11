import CodeBlock from "/src/UI/codeBlock/codeBlock.tsx";
import { div } from "@numio/bigmath";

const Division = () => {
  return (
    <>
      <h2>
        <code>div</code> Function
      </h2>
      <p>
        The <code>div</code> function is a core component of the{" "}
        <code>@numio/bigmath</code>{" "}
        library, designed to perform division operations on numbers with
        arbitrary precision. This allows it to accurately divide numbers of
        virtually any size and decimal precision, overcoming the limitations of
        JavaScript's built-in <code>Number</code>{" "}
        type, which can suffer from precision loss when dealing with very large
        or very small numbers, or those with many significant digits, especially
        in fractional parts.
      </p>
      <p>
        The <code>div</code>{" "}
        function supports dividing an array of numbers, and it also supports
        mixed-base arithmetic, including decimal, hexadecimal, octal, and binary
        numbers. Note that division is not commutative, the order of the numbers
        in the <code>numbers</code>{" "}
        array matters. The function performs chained division from left to
        right.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function div(numbers: string[], precision?: number): string`}
      </CodeBlock>
      <h3>Parameters</h3>
      <ul>
        <li>
          <code>numbers</code>: An array of strings, where each string
          represents a number to be divided. The numbers can be integers,
          decimals, and can be in decimal, hexadecimal (prefixed with{" "}
          <code>"0x"</code> or <code>"-0x"</code>), octal (prefixed with{" "}
          <code>"0o"</code> or <code>"-0o"</code>), or binary (prefixed with
          {" "}
          <code>"0b"</code> or{" "}
          <code>"-0b"</code>) format. It is important to pass numbers as strings
          to preserve precision. The division is performed in the order the
          numbers appear in the array.
        </li>
        <li>
          <code>precision</code>{" "}
          (optional): An integer specifying the number of digits after the
          decimal point in the result. If not provided, the default precision is
          {" "}
          <code>20</code>.
        </li>
      </ul>
      <h3>Return Value</h3>
      <p>
        The function returns a string representing the result of the division of
        the numbers in the input array. The result is always a decimal
        representation.
      </p>
      <h3>Behavior</h3>
      <ul>
        <li>
          <strong>Arbitrary Precision</strong>: The function accurately divides
          numbers of any size, without loss of precision.
        </li>
        <li>
          <strong>Decimal Handling</strong>: Correctly handles decimal numbers,
          ensuring accurate results even when dividing numbers with varying
          decimal places.
        </li>
        <li>
          <strong>Mixed-Base Arithmetic</strong>: The function can divide
          numbers in different bases (decimal, hexadecimal, octal, and binary).
          The numbers are converted to decimal before division, and the final
          result is returned as a decimal string.
        </li>
        <li>
          <strong>Negative Numbers</strong>: The function correctly handles
          negative numbers.
        </li>
        <li>
          <strong>Chained Division</strong>: The function performs division from
          left to right. For example, <code>div(["a", "b", "c"])</code>{" "}
          calculates <code>(a / b) / c</code>
          .
        </li>
        <li>
          <strong>Division by Zero</strong>: The function will throw an error
          when dividing by zero.
        </li>
        <li>
          <strong>Precision Control</strong>: The optional{" "}
          <code>precision</code>{" "}
          parameter allows you to control the number of decimal places in the
          result. This is useful for rounding the result to a specific number of
          decimal places. If the precision is not provided, the default value of
          {" "}
          <code>20</code> is used.
        </li>
        <li>
          <strong>Input Validation</strong>: While the function itself may not
          explicitly throw errors for invalid input formats, it relies on the
          internal number conversion mechanisms of the library. It's crucial to
          provide valid number string representations to avoid unexpected
          results. Use the <code>isHex</code>, <code>isBinary</code>,{" "}
          <code>isDecimal</code>, and <code>isOctal</code>{" "}
          functions to validate input strings before passing them to{" "}
          <code>div</code>.
        </li>
      </ul>
      <h3>Examples</h3>
      <h3>1. Dividing Integers</h3>
      <CodeBlock>
        {`import { div } from '@numio/bigmath';

const result = div(["10", "2", "5"]);  // (10 / 2) / 5
console.log(result); // Output: "${div(["10", "2", "5"])}"`}
      </CodeBlock>
      <h3>2. Dividing Decimal Numbers</h3>
      <CodeBlock>
        {`import { div } from '@numio/bigmath';

const decimalResult = div(["5.5", "2", "2.5"]); // (5.5 / 2) / 2.5
console.log(decimalResult); // Output: "${div(["5.5", "2", "2.5"])}"`}
      </CodeBlock>
      <h3>3. Dividing Negative Numbers</h3>
      <CodeBlock>
        {`import { div } from '@numio/bigmath';

const negativeResult = div(["10", "-2", "-2.5"]); // (10 / -2) / -2.5
console.log(negativeResult); // Output: "${div(["10", "-2", "-2.5"])}"`}
      </CodeBlock>
      <h3>4. Dividing Mixed Integer and Decimal Numbers</h3>
      <CodeBlock>
        {`import { div } from '@numio/bigmath';

const mixedResult = div(["20", "2.5", "2"]); // (20 / 2.5) / 2
console.log(mixedResult); // Output: "${div(["20", "2.5", "2"])}"`}
      </CodeBlock>
      <h3>5. Dividing Numbers with Large Values</h3>
      <CodeBlock>
        {`import { div } from '@numio/bigmath';

const largeResult = div(["98765432109876543210", "12345678901234567890"]);
console.log(largeResult); // Output: "${
          div(["98765432109876543210", "12345678901234567890"])
        }"`}
      </CodeBlock>
      <h3>6. Dividing Numbers with Many Decimal Places</h3>
      <CodeBlock>
        {`import { div } from '@numio/bigmath';

const preciseResult = div(["1.123456789", "0.987654321"]);
console.log(preciseResult); // Output: "${
          div(["1.123456789", "0.987654321"])
        }"`}
      </CodeBlock>
      <h3>7. Dividing Hexadecimal Numbers</h3>
      <CodeBlock>
        {`import { div } from '@numio/bigmath';

const hexResult = div(["0x30", "0x10", "0x2"]); // (48 / 16) / 2
console.log(hexResult); // Output: "${div(["0x30", "0x10", "0x2"])}"`}
      </CodeBlock>
      <h3>8. Dividing Octal Numbers</h3>
      <CodeBlock>
        {`import { div } from '@numio/bigmath';

const octalResult = div(["0o30", "0o4", "0o2"]); // (24 / 4) / 2
console.log(octalResult); // Output: "${div(["0o30", "0o4", "0o2"])}"`}
      </CodeBlock>
      <h3>9. Dividing Binary Numbers</h3>
      <CodeBlock>
        {`import { div } from '@numio/bigmath';

const binaryResult = div(["0b110", "0b10", "0b11"]); // (6 / 2) / 3
console.log(binaryResult); // Output: "${div(["0b110", "0b10", "0b11"])}"`}
      </CodeBlock>
      <h3>10. Dividing by Zero</h3>
      <CodeBlock>
        {`import { div } from '@numio/bigmath';

try {
  const zeroResult = div(["10", "0"]);
  console.log(zeroResult);
} catch (error) {
  console.error(error); // Output: Error: Division by zero
}`}
      </CodeBlock>
      <h3>11. Dividing Mixed-Base Numbers</h3>
      <CodeBlock>
        {`import { div } from '@numio/bigmath';

const mixedBaseResult = div(["0x20", "0o10", "0b10", "2"]); // ((32 / 8) / 2) / 2
console.log(mixedBaseResult); // Output: "${
          div(["0x20", "0o10", "0b10", "2"])
        }"`}
      </CodeBlock>
      <h3>12. Dividing with Custom Precision</h3>
      <CodeBlock>
        {`import { div } from '@numio/bigmath';

const resultPrecision4 = div(["10", "3"], 4);
console.log(resultPrecision4); // Output: "${div(["10", "3"], 4)}"

const resultPrecision0 = div(["10", "3"], 0);
console.log(resultPrecision0); // Output: "${div(["10", "3"], 0)}"`}
      </CodeBlock>
      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as Strings</strong>: Always provide numbers as strings
          to the <code>div</code>{" "}
          function. This is crucial for preserving the full precision of the
          numbers, especially when dealing with large integers or decimals.
        </li>
        <li>
          <strong>Order of Division</strong>: The division is performed from
          left to right. Ensure that the numbers in the input array are in the
          correct order for the desired calculation.
        </li>
        <li>
          <strong>Valid Number Formats</strong>: Ensure that the input strings
          represent valid numbers in the specified base (decimal, hexadecimal,
          octal, or binary). Invalid formats may lead to unexpected results. Use
          the <code>isHex()</code>, <code>isBinary()</code>,{" "}
          <code>isDecimal()</code>, and <code>isOctal()</code>{" "}
          functions to validate the strings before passing them to the{" "}
          <code>div()</code> function.
        </li>
        <li>
          <strong>Division by Zero</strong>: The function will throw an error
          when dividing by zero.
        </li>
        <li>
          <strong>Precision</strong>: The optional <code>precision</code>{" "}
          parameter allows you to control the number of decimal places in the
          result. If not provided, the default precision of <code>20</code>{" "}
          is used.
        </li>
      </ul>
    </>
  );
};

export default Division;
