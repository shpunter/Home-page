import CodeBlock from "@UI/codeBlock/codeBlock.tsx";
import { mul } from '@numio/bigmath';

const Multiplication = () => {
  return (
    <>
      <h2>
        <code>mul</code> Function
      </h2>
      <p>
        The <code>mul</code> function is a core component of the{" "}
        <code>@numio/bigmath</code> library, designed to perform multiplication
        operations on numbers with arbitrary precision. This means it can
        accurately multiply numbers of virtually any size and decimal precision,
        overcoming the limitations of JavaScript's built-in <code>Number</code>{" "}
        type, which can suffer from precision loss with very large or very small
        numbers, or those with many significant digits.
      </p>
      <p>
        The <code>mul</code> function supports multiplying an array of numbers,
        and it also supports mixed-base arithmetic, including decimal,
        hexadecimal, octal, and binary numbers. The multiplication is performed
        in the order the numbers appear in the array.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function mul(numbers: string[]): string`}
      </CodeBlock>
      <h3>Parameters</h3>
      <ul>
        <li>
          <code>numbers</code>: An array of strings, where each string
          represents a number to be multiplied. The numbers can be integers,
          decimals, and can be in decimal, hexadecimal (prefixed with{" "}
          <code>"0x"</code> or <code>"-0x"</code>), octal (prefixed with{" "}
          <code>"0o"</code> or <code>"-0o"</code>), or binary (prefixed with
          {" "}
          <code>"0b"</code> or <code>"-0b"</code>) format. It is important
          to pass numbers as strings to preserve precision. The multiplication
          is performed in the order the numbers appear in the array.
        </li>
      </ul>
      <h3>Return Value</h3>
      <p>
        The function returns a string representing the product of the numbers in
        the input array. The result is always a decimal representation.
      </p>
      <h3>Behavior</h3>
      <ul>
        <li>
          <strong>Arbitrary Precision</strong>: The function accurately
          multiplies numbers of any size, without loss of precision.
        </li>
        <li>
          <strong>Decimal Handling</strong>: Correctly handles decimal numbers,
          ensuring accurate results even when multiplying numbers with varying
          decimal places.
        </li>
        <li>
          <strong>Mixed-Base Arithmetic</strong>: The function can multiply
          numbers in different bases (decimal, hexadecimal, octal, and binary).
          The numbers are converted to decimal before multiplication, and the
          final result is returned as a decimal string.
        </li>
        <li>
          <strong>Negative Numbers</strong>: The function correctly handles
          negative numbers.
        </li>
        <li>
          <strong>Chained Multiplication</strong>: The function performs
          multiplication from left to right. For example,{" "}
          <code>mul(["a", "b", "c"])</code> calculates <code>(a * b) * c</code>
          .
        </li>
        <li>
          <strong>Input Validation</strong>: While the function itself may not
          explicitly throw errors for invalid input formats, it relies on the
          internal number conversion mechanisms of the library. It's crucial to
          provide valid number string representations to avoid unexpected
          results. Use the <code>isHex</code>, <code>isBinary</code>,{" "}
          <code>isDecimal</code>, and <code>isOctal</code> functions to
          validate input strings before passing them to <code>mul</code>.
        </li>
      </ul>
      <h3>Examples</h3>
      <h3>1. Multiplying Integers</h3>
      <CodeBlock>
        {`import { mul } from '@numio/bigmath';

const product = mul(["10", "2", "5"]);
console.log(product); // Output: "${mul(["10", "2", "5"])}"`}
      </CodeBlock>
      <h3>2. Multiplying Decimal Numbers</h3>
      <CodeBlock>
        {`import { mul } from '@numio/bigmath';

const decimalProduct = mul(["1.5", "2", "0.5"]);
console.log(decimalProduct); // Output: "${mul(["1.5", "2", "0.5"])}"`}
      </CodeBlock>
      <h3>3. Multiplying Negative Numbers</h3>
      <CodeBlock>
        {`import { mul } from '@numio/bigmath';

const negativeProduct = mul(["10", "-2", "-2.5"]);
console.log(negativeProduct); // Output: "${mul(["10", "-2", "-2.5"])}"`}
      </CodeBlock>
      <h3>4. Multiplying Mixed Integer and Decimal Numbers</h3>
      <CodeBlock>
        {`import { mul } from '@numio/bigmath';

const mixedProduct = mul(["20", "2.5", "2"]);
console.log(mixedProduct); // Output: "${mul(["20", "2.5", "2"])}"`}
      </CodeBlock>
      <h3>5. Multiplying Numbers with Large Values</h3>
      <CodeBlock>
        {`import { mul } from '@numio/bigmath';

const largeProduct = mul(["12345678901234567890", "10"]);
console.log(largeProduct); // Output: "${mul(["12345678901234567890", "10"])}"`}
      </CodeBlock>
      <h3>6. Multiplying Numbers with Many Decimal Places</h3>
      <CodeBlock>
        {`import { mul } from '@numio/bigmath';

const preciseProduct = mul(["0.123", "0.456"]);
console.log(preciseProduct); // Output: "${mul(["0.123", "0.456"])}"`}
      </CodeBlock>
      <h3>7. Multiplying Hexadecimal Numbers</h3>
      <CodeBlock>
        {`import { mul } from '@numio/bigmath';

const hexProduct = mul(["0x10", "0x20", "0x2"]); // 16 * 32 * 2
console.log(hexProduct); // Output: "${mul(["0x10", "0x20", "0x2"])}"`}
      </CodeBlock>
      <h3>8. Multiplying Octal Numbers</h3>
      <CodeBlock>
        {`import { mul } from '@numio/bigmath';

const octalProduct = mul(["0o10", "0o20", "0o4"]); // 8 * 16 * 4
console.log(octalProduct); // Output: "${mul(["0o10", "0o20", "0o4"])}"`}
      </CodeBlock>
      <h3>9. Multiplying Binary Numbers</h3>
      <CodeBlock>
        {`import { mul } from '@numio/bigmath';

const binaryProduct = mul(["0b10", "0b11", "0b100"]); // 2 * 3 * 4
console.log(binaryProduct); // Output: "${mul(["0b10", "0b11", "0b100"])}"`}
      </CodeBlock>
      <h3>10. Multiplying Mixed-Base Numbers</h3>
      <CodeBlock>
        {`import { mul } from '@numio/bigmath';

const mixedBaseProduct = mul(["10", "0x2", "0o10", "0b10"]); // 10 * 2 * 8 * 2
console.log(mixedBaseProduct); // Output: "${mul(["10", "0x2", "0o10", "0b10"])}"`}
      </CodeBlock>
      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as Strings</strong>: Always provide numbers as strings
          to the <code>mul</code> function. This is crucial for preserving the
          full precision of the numbers, especially when dealing with large
          integers or decimals.
        </li>
        <li>
          <strong>Order of Multiplication</strong>: The multiplication is
          performed from left to right. Ensure that the numbers in the input
          array are in the correct order for the desired calculation.
        </li>
        <li>
          <strong>Valid Number Formats</strong>: Ensure that the input strings
          represent valid numbers in the specified base (decimal, hexadecimal,
          octal, or binary). Invalid formats may lead to unexpected results. Use
          the <code>isHex()</code>, <code>isBinary()</code>,{" "}
          <code>isDecimal()</code>, and <code>isOctal()</code> functions to
          validate the strings before passing them to the <code>mul()</code>{" "}
          function.
        </li>
      </ul>
    </>
  );
};

export default Multiplication;