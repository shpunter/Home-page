const Home = () => {
  return (
    <>
      <h1>@numio/bigmath: Precise Arithmetic Beyond JavaScript's Limits</h1>
      <p>
        Do you struggle with inaccurate calculations involving very large or
        very small numbers, or decimal numbers with high precision in
        JavaScript?{" "}
        <strong>@numio/bigmath</strong>{" "}
        is your solution! This library provides a robust set of functions for
        performing{" "}
        <strong>arbitrary-precision arithmetic</strong>, effectively overcoming
        the limitations of JavaScript's built-in
        <code>Number</code>{" "}
        type. Say goodbye to unexpected rounding errors and precision loss when
        dealing with numbers that exceed 15 significant digits or involve
        complex decimal operations.
      </p>

      <h2>Why Choose @numio/bigmath?</h2>

      <h3>Solve Precision Problems:</h3>
      <ul>
        <li>
          <strong>Handle Numbers of Any Size:</strong>{" "}
          Perform calculations on integers and decimals of virtually unlimited
          length, without the risk of JavaScript's
          <code>Number</code> limitations.
        </li>
        <li>
          <strong>Eliminate Precision Loss:</strong>{" "}
          Achieve accurate results even with numeric literals exceeding 15
          significant digits, ensuring the integrity of your calculations.
        </li>
        <li>
          <strong>Precise Decimal Operations:</strong>{" "}
          Execute addition, subtraction, multiplication, and division on decimal
          numbers with guaranteed accuracy, including scenarios with negative
          values.
        </li>
        <li>
          <strong>NEW! Multi-Base Number Support:</strong>{" "}
          Seamlessly perform arithmetic operations involving{" "}
          <strong>hexadecimal (HEX)</strong>,
          <strong>octal</strong>, <strong>binary</strong>, and
          <strong>decimal</strong>{" "}
          numbers, offering unparalleled flexibility in handling various number
          formats.
        </li>
        <li>
          <strong>NEW! Number Format Validation:</strong>{" "}
          Easily validate if a string represents a valid{" "}
          <strong>hexadecimal (isHex)</strong>,
          <strong>binary (isBinary)</strong>,{" "}
          <strong>decimal (isDecimal)</strong>,
          <strong>octal (isOctal)</strong>, or any valid
          <strong>number (isNumber)</strong> format supported by the library.
        </li>
      </ul>

      <h3>Unlock Advanced Numerical Operations:</h3>
      <ul>
        <li>
          <strong>Control Division Precision:</strong>{" "}
          Specify the exact number of digits after the decimal point for
          division results, with a default precision of 20 digits for high
          accuracy.
        </li>
        <li>
          <strong>Flexible Rounding:</strong>{" "}
          Round numbers to the nearest integer or a specific number of decimal
          places with various rounding modes (up, down, half-up, half-down,
          half-even, half-odd) to meet your exact requirements.
        </li>
        <li>
          <strong>Round Based on Significant Figures:</strong>{" "}
          Control rounding based on the number of significant figures, crucial
          for scientific and engineering applications.
        </li>
      </ul>

      <h3>Calculate Roots:</h3>
      <ul>
        <li>
          <strong>Calculate Square Root (sqrt):</strong>{" "}
          Compute the square root of a number with arbitrary precision. You can
          also specify the desired precision of the result.
        </li>
        <li>
          <strong>NEW! Calculate Cube Root (cbrt):</strong>{" "}
          Determine the cube root of a number with arbitrary precision, allowing
          you to specify the desired accuracy.
        </li>
        <li>
          <strong>Chain Operations with Pipe:</strong>{" "}
          Simplify complex calculations by chaining arithmetic operations in a
          readable and intuitive manner.
        </li>
      </ul>

      <h3>Analyze Data Distribution:</h3>
      <ul>
        <li>
          <strong>Calculate Quartiles (Q1, Q2, Q3):</strong>{" "}
          Understand the spread and central tendency of your numerical data,
          helping identify outliers and the shape of the distribution.
        </li>
        <li>
          <strong>Calculate Median Absolute Deviation (MAD):</strong>{" "}
          Measure the dispersion of a dataset, providing a robust alternative to
          standard deviation that is less sensitive to outliers.
        </li>
        <li>
          <strong>Calculate Interquartile Range (IQR):</strong>{" "}
          Determine the spread of the middle 50% of your data, useful for
          identifying the central bulk and potential outliers.
        </li>
      </ul>

      <h3>Compare Numbers:</h3>
      <ul>
        <li>
          <strong>Check for Equality (isEqual):</strong>{" "}
          Accurately determine if two arbitrary-precision numbers are equal.
        </li>
        <li>
          <strong>Check if Left is Greater (isLeftGreater):</strong>{" "}
          Precisely compare two arbitrary-precision numbers to see if the left
          operand is greater than the right.
        </li>
        <li>
          <strong>
            NEW! Check if Left is Greater or Equal (isLeftGreaterOrEqual):
          </strong>
          Precisely compare two arbitrary-precision numbers to determine if the
          left operand is greater than or equal to the right.
        </li>
        <li>
          <strong>Sort Numbers Accurately:</strong>{" "}
          Sort arrays of numbers, including negative and decimal values, in
          ascending or descending order, correctly handling string
          representations of numbers that JavaScript's native sort might
          misinterpret.
        </li>
      </ul>

      <h3>Calculate Central Tendency & Extremes:</h3>
      <ul>
        <li>
          <strong>Calculate Central Tendency:</strong>{" "}
          Easily compute the mean (average) of a set of numbers.
        </li>
        <li>
          <strong>Identify Extremes:</strong>{" "}
          Find the maximum and minimum values within an array of numbers.
        </li>
        <li>
          <strong>NEW! Calculate Absolute Value (abs):</strong>{" "}
          Determine the non-negative value of a number, regardless of its sign.
        </li>
        <li>
          <strong>NEW! Convert Number to Another Base (toBase):</strong>{" "}
          Seamlessly convert numbers between decimal, hexadecimal (HEX), binary,
          and octal representations.
        </li>
      </ul>

      <h2>When is @numio/bigmath essential?</h2>
      <p>
        This library is particularly invaluable in applications where numerical
        accuracy and the ability to handle large numbers are paramount:
      </p>
      <ul>
        <li>
          <strong>Financial Applications:</strong>{" "}
          Accurate calculations for large sums of money, precise interest rates,
          and complex financial modeling.
        </li>
        <li>
          <strong>Scientific Computing:</strong>{" "}
          Working with extremely large or small numbers in simulations, data
          analysis, and research.
        </li>
        <li>
          <strong>Cryptography:</strong>{" "}
          Implementing cryptographic algorithms that rely on high-precision
          arithmetic.
        </li>
        <li>
          <strong>E-commerce and Payments:</strong>{" "}
          Handling precise amounts and avoiding rounding errors in transactions.
        </li>
        <li>
          <strong>Data Analysis and Statistics:</strong>{" "}
          Performing accurate statistical calculations on datasets with varying
          scales.
        </li>
        <li>
          <strong>Low-Level Operations:</strong>{" "}
          Working with different number representations commonly found in
          computer systems.
        </li>
        <li>
          <strong>Any Scenario Exceeding JavaScript's Number Limits:</strong>
          {" "}
          Ensuring the reliability of your calculations when dealing with
          numbers beyond the safe integer limit or requiring more than 15
          significant digits.
        </li>
      </ul>
      <p>
        With{" "}
        <strong>@numio/bigmath</strong>, you can confidently perform complex
        arithmetic operations with the assurance of accuracy, regardless of the
        size or precision of the numbers involved.
      </p>

      <h2>Latest Update</h2>
      <p>New Functions added:</p>
      <ul>
        <li>
          <code>isHex</code>{" "}
          - Checks if a string is a valid hexadecimal number (prefixed with{" "}
          <code>0x</code> or <code>-0x</code>).
        </li>
        <li>
          <code>isBinary</code>{" "}
          - Checks if a string is a valid binary number (prefixed with{" "}
          <code>0b</code> or <code>-0b</code>).
        </li>
        <li>
          <code>isDecimal</code> - Checks if a string is a valid decimal number.
        </li>
        <li>
          <code>isOctal</code>{" "}
          - Checks if a string is a valid octal number (prefixed with{" "}
          <code>0o</code> or <code>-0o</code>).
        </li>
        <li>
          <code>isNumber</code>{" "}
          - Checks if a string is a valid number in any of the formats supported
          by the library (decimal, hexadecimal, binary, octal).
        </li>
      </ul>
    </>
  );
};

export default Home;
