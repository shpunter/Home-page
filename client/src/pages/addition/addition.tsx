import CodeBlock from "/client/src/UI/codeBlock/codeBlock.tsx";

const AdditionDoc = () => {
  return (
    <>
      <h2>
        <code>add</code> Function
      </h2>
      <p>
        The <code>add</code> function is a core component of the{" "}
        <code>@numio/bigmath</code>{" "}
        library, designed to perform addition operations on numbers with
        arbitrary precision. This means it can accurately add numbers of
        virtually any size and decimal precision, overcoming the limitations of
        JavaScript's built-in <code>Number</code>{" "}
        type, which can suffer from precision loss with very large or very small
        numbers, or those with many significant digits.
      </p>
      <p>
        The <code>add</code>{" "}
        function supports adding an array of numbers, and it also supports
        mixed-base arithmetic, including decimal, hexadecimal, octal, and binary
        numbers.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function add(numbers: string[]): string`}
      </CodeBlock>
      <h3>Parameters</h3>
      <ul>
        <li>
          <code>numbers</code>: An array of strings, where each string
          represents a number to be added. The numbers can be integers,
          decimals, and can be in decimal, hexadecimal (prefixed with{" "}
          <code>"0x"</code> or <code>"-0x"</code>), octal (prefixed with{" "}
          <code>"0o"</code> or <code>"-0o"</code>), or binary (prefixed with
          {" "}
          <code>"0b"</code> or{" "}
          <code>"-0b"</code>) format. It is important to pass numbers as strings
          to preserve precision.
        </li>
      </ul>
      <h3>Return Value</h3>
      <p>
        The function returns a string representing the sum of the numbers in the
        input array. The result is always a decimal representation.
      </p>
      <h3>Behavior</h3>
      <ul>
        <li>
          <strong>Arbitrary Precision</strong>: The function accurately adds
          numbers of any size, without loss of precision.
        </li>
        <li>
          <strong>Decimal Handling</strong>: Correctly handles decimal numbers,
          ensuring accurate results even when adding numbers with varying
          decimal places.
        </li>
        <li>
          <strong>Mixed-Base Arithmetic</strong>: The function can add numbers
          in different bases (decimal, hexadecimal, octal, and binary). The
          numbers are converted to decimal before addition, and the final result
          is returned as a decimal string.
        </li>
        <li>
          <strong>Negative Numbers</strong>: The function correctly handles
          negative numbers.
        </li>
        <li>
          <strong>Input Validation</strong>: While the function itself may not
          explicitly throw errors for invalid input formats, it relies on the
          internal number conversion mechanisms of the library. It's crucial to
          provide valid number string representations to avoid unexpected
          results. Use the <code>isHex</code>, <code>isBinary</code>,{" "}
          <code>isDecimal</code>, and <code>isOctal</code>{" "}
          functions to validate input strings before passing them to{" "}
          <code>add</code>.
        </li>
      </ul>
      <h3>Examples</h3>
      <h3>1. Adding Integers</h3>
      <CodeBlock>
        {`import { add } from '@numio/bigmath';

const sum = add(["10", "20", "30"]);
console.log(sum); // Output: "60"`}
      </CodeBlock>
      <h3>2. Adding Decimal Numbers</h3>
      <CodeBlock>
        {`import { add } from '@numio/bigmath';

const decimalSum = add(["1.5", "2.75", "0.25"]);
console.log(decimalSum); // Output: "4.5"`}
      </CodeBlock>
      <h3>3. Adding Negative Numbers</h3>
      <CodeBlock>
        {`import { add } from '@numio/bigmath';

const negativeSum = add(["10", "-5", "-2.5"]);
console.log(negativeSum); // Output: "2.5"`}
      </CodeBlock>
      <h3>4. Adding Mixed Integer and Decimal Numbers</h3>
      <CodeBlock>
        {`import { add } from '@numio/bigmath';

const mixedSum = add(["10", "20.5", "5"]);
console.log(mixedSum); // Output: "35.5"`}
      </CodeBlock>
      <h3>5. Adding Numbers with Large Values</h3>
      <CodeBlock>
        {`import { add } from '@numio/bigmath';

const largeSum = add(["12345678901234567890", "98765432109876543210"]);
console.log(largeSum); // Output: "111111111011111111000"`}
      </CodeBlock>
      <h3>6. Adding Numbers with Many Decimal Places</h3>
      <CodeBlock>
        {`import { add } from '@numio/bigmath';

const preciseSum = add(["0.123456789", "0.987654321"]);
console.log(preciseSum); // Output: "1.11111111"`}
      </CodeBlock>
      <h3>7. Adding Hexadecimal Numbers</h3>
      <CodeBlock>
        {`import { add } from '@numio/bigmath';

const hexSum = add(["0x10", "0x20", "0x30"]); // 16 + 32 + 48
console.log(hexSum); // Output: "96"`}
      </CodeBlock>
      <h3>8. Adding Octal Numbers</h3>
      <CodeBlock>
        {`import { add } from '@numio/bigmath';

const octalSum = add(["0o10", "0o20", "0o30"]); // 8 + 16 + 24
console.log(octalSum); // Output: "48"`}
      </CodeBlock>
      <h3>9. Adding Binary Numbers</h3>
      <CodeBlock>
        {`import { add } from '@numio/bigmath';

const binarySum = add(["0b10", "0b100", "0b110"]); // 2 + 4 + 6
console.log(binarySum); // Output: "12"`}
      </CodeBlock>
      <h3>10. Adding Mixed-Base Numbers</h3>
      <CodeBlock>
        {`import { add } from '@numio/bigmath';

const mixedBaseSum = add(["10", "0x10", "0o10", "0b10"]); // 10 + 16 + 8 + 2
console.log(mixedBaseSum); // Output: "36"`}
      </CodeBlock>
      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as Strings</strong>: Always provide numbers as strings
          to the add function. This is crucial for preserving the full precision
          of the numbers, especially when dealing with large integers or
          decimals.
        </li>
        <li>
          <strong>Valid Number Formats</strong>: Ensure that the input strings
          represent valid numbers in the specified base (decimal, hexadecimal,
          octal, or binary). Invalid formats may lead to unexpected results. Use
          the <code>isHex()</code>, <code>isBinary()</code> ,{" "}
          <code>isDecimal()</code>, and <code>isOctal()</code>{" "}
          functions to validate the strings before passing them to the{" "}
          <code>add()</code> function.
        </li>
      </ul>
    </>
  );
};

export default AdditionDoc;
