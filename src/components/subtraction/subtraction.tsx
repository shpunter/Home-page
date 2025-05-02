import CodeBlock from "/src/UI/codeBlock/codeBlock.tsx";

const Subtraction = () => {
  return (
    <>
      <h2>
        <code>sub</code> Function
      </h2>
      <p>
        The <code>sub</code> function is a core component of the{" "}
        <code>@numio/bigmath</code>{" "}
        library, designed to perform subtraction operations on numbers with
        arbitrary precision. This allows it to accurately subtract numbers of
        virtually any size and decimal precision, overcoming the limitations of
        JavaScript's built-in <code>Number</code>{" "}
        type, which can suffer from precision loss when dealing with very large
        or very small numbers, or those with many significant digits.
      </p>
      <p>
        The <code>sub</code>{" "}
        function supports subtracting an array of numbers, and it also supports
        mixed-base arithmetic, including decimal, hexadecimal, octal, and binary
        numbers. Note that subtraction is not commutative; the order of the
        numbers in the <code>numbers</code>{" "}
        array matters. The function performs chained subtraction from left to
        right.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock>
        {`function sub(numbers: string[]): string`}
      </CodeBlock>
      <h3>Parameters</h3>
      <ul>
        <li>
          <code>numbers</code>: An array of strings, where each string
          represents a number to be subtracted. The numbers can be integers,
          decimals, and can be in decimal, hexadecimal (prefixed with{" "}
          <code>"0x"</code> or <code>"-0x"</code>), octal (prefixed with{" "}
          <code>"0o"</code> or <code>"-0o"</code>), or binary (prefixed with
          {" "}
          <code>"0b"</code> or{" "}
          <code>"-0b"</code>) format. It is important to pass numbers as strings
          to preserve precision. The subtraction is performed in the order the
          numbers appear in the array.
        </li>
      </ul>
      <h3>Return Value</h3>
      <p>
        The function returns a string representing the result of the subtraction
        of the numbers in the input array. The result is always a decimal
        representation.
      </p>
      <h3>Behavior</h3>
      <ul>
        <li>
          <strong>Arbitrary Precision</strong>: The function accurately
          subtracts numbers of any size, without loss of precision.
        </li>
        <li>
          <strong>Decimal Handling</strong>: Correctly handles decimal numbers,
          ensuring accurate results even when subtracting numbers with varying
          decimal places.
        </li>
        <li>
          <strong>Mixed-Base Arithmetic</strong>: The function can subtract
          numbers in different bases (decimal, hexadecimal, octal, and binary).
          The numbers are converted to decimal before subtraction, and the final
          result is returned as a decimal string.
        </li>
        <li>
          <strong>Negative Numbers</strong>: The function correctly handles
          negative numbers.
        </li>
        <li>
          <strong>Chained Subtraction</strong>: The function performs
          subtraction from left to right. For example,{" "}
          <code>sub(["a", "b", "c"])</code> calculates <code>a - b - c</code>.
        </li>
        <li>
          <strong>Input Validation</strong>: While the function itself may not
          explicitly throw errors for invalid input formats, it relies on the
          internal number conversion mechanisms of the library. It's crucial to
          provide valid number string representations to avoid unexpected
          results. Use the <code>isHex</code>, <code>isBinary</code>,{" "}
          <code>isDecimal</code>, and <code>isOctal</code>{" "}
          functions to validate input strings before passing them to{" "}
          <code>sub</code>.
        </li>
      </ul>
      <h3>Examples</h3>
      <h3>1. Subtracting Integers</h3>
      <CodeBlock>
        {`import { sub } from '@numio/bigmath';
  
  const difference = sub(["10", "5", "3"]);  // 10 - 5 - 3
  console.log(difference); // Output: "2"`}
      </CodeBlock>
      <h3>2. Subtracting Decimal Numbers</h3>
      <CodeBlock>
        {`import { sub } from '@numio/bigmath';
  
  const decimalDifference = sub(["5.5", "2.75", "1.25"]); // 5.5 - 2.75 - 1.25
  console.log(decimalDifference); // Output: "1.5"`}
      </CodeBlock>
      <h3>3. Subtracting Negative Numbers</h3>
      <CodeBlock>
        {`import { sub } from '@numio/bigmath';
  
  const negativeDifference = sub(["10", "-5", "-2.5"]); // 10 - (-5) - (-2.5)  = 10 + 5 + 2.5
  console.log(negativeDifference); // Output: "17.5"`}
      </CodeBlock>
      <h3>4. Subtracting Mixed Integer and Decimal Numbers</h3>
      <CodeBlock>
        {`import { sub } from '@numio/bigmath';
  
  const mixedDifference = sub(["20", "10.5", "2"]); // 20 - 10.5 - 2
  console.log(mixedDifference); // Output: "7.5"`}
      </CodeBlock>
      <h3>5. Subtracting Numbers with Large Values</h3>
      <CodeBlock>
        {`import { sub } from '@numio/bigmath';
  
  const largeDifference = sub(["98765432109876543210", "12345678901234567890"]);
  console.log(largeDifference); // Output: "86419753208641975320"`}
      </CodeBlock>
      <h3>6. Subtracting Numbers with Many Decimal Places</h3>
      <CodeBlock>
        {`import { sub } from '@numio/bigmath';
  
  const preciseDifference = sub(["1.123456789", "0.987654321"]);
  console.log(preciseDifference); // Output: "0.135802468"`}
      </CodeBlock>
      <h3>7. Subtracting Hexadecimal Numbers</h3>
      <CodeBlock>
        {`import { sub } from '@numio/bigmath';
  
  const hexDifference = sub(["0x30", "0x20", "0x10"]); // 48 - 32 - 16
  console.log(hexDifference); // Output: "0"`}
      </CodeBlock>
      <h3>8. Subtracting Octal Numbers</h3>
      <CodeBlock>
        {`import { sub } from '@numio/bigmath';
  
  const octalDifference = sub(["0o30", "0o20", "0o10"]); // 24 - 16 - 8
  console.log(octalDifference); // Output: "0"`}
      </CodeBlock>
      <h3>9. Subtracting Binary Numbers</h3>
      <CodeBlock>
        {`import { sub } from '@numio/bigmath';
  
  const binaryDifference = sub(["0b110", "0b100", "0b10"]); // 6 - 4 - 2
  console.log(binaryDifference); // Output: "0"`}
      </CodeBlock>
      <h3>10. Subtracting Mixed-Base Numbers</h3>
      <CodeBlock>
        {`import { sub } from '@numio/bigmath';
  const mixedBaseDifference = sub(["0x20", "0o20", "0b10", "10"]);  // 32 - 16 - 2 - 10
  console.log(mixedBaseDifference); // Output: "4"`}
      </CodeBlock>
      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as Strings</strong>: Always provide numbers as strings
          to the <code>sub</code>{" "}
          function. This is crucial for preserving the full precision of the
          numbers, especially when dealing with large integers or decimals.
        </li>
        <li>
          <strong>Order of Subtraction</strong>: The subtraction is performed
          from left to right. Ensure that the numbers in the input array are in
          the correct order for the desired calculation.
        </li>
        <li>
          <strong>Valid Number Formats</strong>: Ensure that the input strings
          represent valid numbers in the specified base (decimal, hexadecimal,
          octal, or binary). Invalid formats may lead to unexpected results. Use
          the <code>isHex()</code>, <code>isBinary()</code>,{" "}
          <code>isDecimal()</code>, and <code>isOctal()</code>{" "}
          functions to validate the strings before passing them to the{" "}
          <code>sub()</code> function.
        </li>
      </ul>
    </>
  );
};

export default Subtraction;
