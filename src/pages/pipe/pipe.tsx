import CodeBlock from "/src/UI/codeBlock/codeBlock.tsx";

const Pipe = () => {
  return (
    <>
      <h2>
        <code>Pipe</code> Function
      </h2>
      <p>
        The <code>Pipe</code> function is a core component of the{" "}
        <code>@numio/bigmath</code>{" "}
        library, designed to chain multiple arithmetic operations in a
        sequential manner with arbitrary precision. This approach enhances code
        readability and simplifies complex calculations by allowing you to
        perform a series of operations (addition, subtraction, division,
        multiplication, absolute value, and base conversion) in a single, fluent
        expression.
      </p>

      <h3>Class Constructor</h3>
      <CodeBlock language="javascript">
        {`constructor Pipe(initialValue?: string)`}
      </CodeBlock>
      <p>
        The constructor can optionally take an initial value as a string, which
        will be used as the starting value for the chain of operations.
      </p>

      <h3>Methods</h3>
      <ul>
        <li>
          <code>add(numbers: string[]): Pipe</code>
          <p>
            Adds the numbers in the provided array to the current result.
          </p>
          <p>
            Parameters:
          </p>
          <ul>
            <li>
              <code>numbers</code>: An array of strings representing the numbers
              to add.
            </li>
          </ul>
          <p>
            Returns: <code>Pipe</code> (for chaining)
          </p>
        </li>

        <li>
          <code>sub(numbers: string[]): Pipe</code>
          <p>
            Subtracts the numbers in the provided array from the current result.
          </p>
          <p>Parameters:</p>
          <ul>
            <li>
              <code>numbers</code>: An array of strings representing the numbers
              to subtract.
            </li>
          </ul>
          <p>
            Returns: <code>Pipe</code> (for chaining)
          </p>
        </li>

        <li>
          <code>div(numbers: string[]): Pipe</code>
          <p>
            Divides the current result by the numbers in the provided array.
          </p>
          <p>Parameters:</p>
          <ul>
            <li>
              <code>numbers</code>: An array of strings representing the
              divisors.
            </li>
          </ul>
          <p>
            Returns: <code>Pipe</code> (for chaining)
          </p>
        </li>

        <li>
          <code>mul(numbers: string[]): Pipe</code>
          <p>
            Multiplies the current result by the numbers in the provided array.
          </p>
          <p>Parameters:</p>
          <ul>
            <li>
              <code>numbers</code>: An array of strings representing the
              multipliers.
            </li>
          </ul>
          <p>
            Returns: <code>Pipe</code> (for chaining)
          </p>
        </li>

        <li>
          <code>abs(): Pipe</code>
          <p>Calculates the absolute value of the current result.</p>
          <p>
            Returns: <code>Pipe</code> (for chaining)
          </p>
        </li>
        <li>
          <code>resultToBase(base: number): string</code>
          <p>
            Converts the current result to the specified base (2 to 36).
          </p>
          <p>Parameters:</p>
          <ul>
            <li>
              <code>base</code>: An integer representing the target base (2-36).
            </li>
          </ul>
          <p>
            Returns: A string representing the result in the specified base.
          </p>
        </li>
        <li>
          <code>calc(): string</code>
          <p>
            Executes all the chained operations and returns the final result as
            a string.
          </p>
          <p>Returns: A string representing the final calculated value.</p>
        </li>
      </ul>

      <h3>Behavior</h3>
      <ul>
        <li>
          <strong>Chained Operations</strong>: The <code>Pipe</code>{" "}
          class enables method chaining to perform a sequence of arithmetic
          operations.
        </li>
        <li>
          <strong>Arbitrary Precision</strong>: All operations within the{" "}
          <code>Pipe</code>{" "}
          are performed using the arbitrary precision arithmetic functions of
          {" "}
          <code>@numio/bigmath</code>.
        </li>
        <li>
          <strong>Intermediate Results</strong>: The <code>Pipe</code>{" "}
          class internally stores and updates the intermediate result after each
          operation.
        </li>
        <li>
          <strong>Fluent Interface</strong>: The method chaining provides a
          fluent and readable way to express complex calculations.
        </li>
        <li>
          <strong>Base Conversion</strong>: Supports converting the final result
          to different number bases (2 to 36). The <code>resultToBase</code>
          {" "}
          method returns the result as a string.
        </li>
        <li>
          <strong>Initial Value</strong>: You can initialize a <code>Pipe</code>
          {" "}
          with a starting value, or start with an empty <code>Pipe</code>{" "}
          and add values.
        </li>
      </ul>

      <h3>Examples</h3>
      <CodeBlock language="javascript">
        {`import { Pipe } from "@numio/bigmath";

const addNums = ["1", "2", "3"];
const subNums = ["0.2", "0.3"];
const divNums = ["4"];
const mulNums = ["2", "5", "0.2"];

// Example 1: Chaining add, div, sub, mul
const result1 = new Pipe()
  .add(addNums) // 1 + 2 + 3 = 6
  .div(divNums) // 6 / 4 = 1.5
  .sub(subNums) // 1.5 - 0.2 - 0.3 = 1
  .mul(mulNums) // 1 * 2 * 5 * 0.2 = 2
  .calc();   // "2"
console.log(result1);

// Example 2: Chaining sub and abs
const result2 = new Pipe()
  .sub(["1", "5"]) // 1 - 5 = -4
  .abs()       // |-4| = 4
  .calc();   // "4"
console.log(result2);

// Example 3: Chaining add and resultToBase
const result3 = new Pipe()
  .add(["10", "5"]) // 10 + 5 = 15
  .resultToBase(16);  // 15 (decimal) = "f" (hexadecimal)
console.log(result3); // "f"

// Example 4: Base conversion
const result4 = new Pipe("3").resultToBase(2); // "11"
console.log(result4);

// Example 5: Hexadecimal addition and base conversion
const result5 = new Pipe("0xf").add(["1", "0xf"]).resultToBase(10); // 15 + 1 + 15 = 31
console.log(result5); // "31"

// Example 6: Hexadecimal addition and base conversion to hex
const result6 = new Pipe("0xf").add(["1", "0xf"]).resultToBase(16); // 15 + 1 + 15 = 31 (decimal) = 1f (hex)
console.log(result6); // "1f"

// Example 7: Negative number and base conversion
const result7 = new Pipe("-13").resultToBase(16);  // "-d"
console.log(result7);

// Example 8: Multiple additions
const result8 = new Pipe().add(["1", "2", "3", "4", "5"]).calc(); // 1 + 2 + 3 + 4 + 5
console.log(result8); // "15"

// Example 9: Decimal addition
const result9 = new Pipe().add(["0.9", "0.99"]).calc();  // 0.9 + 0.99
console.log(result9); // "1.89"

// Example 10: Chained additions
const result10 = new Pipe()
  .add(["1", "2", "3", "4", "5"])
  .add(["0.9", "0.99", "0.999", "1.099", "1.009"])
  .calc();  // (1+2+3+4+5) + (0.9 + 0.99 + 0.999 + 1.099 + 1.009)
console.log(result10); // "19.997"

// Example 11: Add, Add, Sub
const result11 = new Pipe()
  .add(["1", "2", "3", "4", "5"])
  .add(["0.9", "0.99", "0.999", "1.099", "1.009"])
  .sub(["1.009", "1.099", "0.999", "0.99"])
  .calc(); // (1+2+3+4+5) + (0.9+0.99+0.999+1.099+1.009) - (1.009+1.099+0.999+0.99)
console.log(result11); // "15.9"

// Example 12: Add, Sub, Add
const result12 = new Pipe()
  .add(["1", "2", "3", "4", "5"])
  .sub(["1.009", "1.099", "0.999", "0.99"])
  .add(["0.9", "0.99", "0.999", "1.099", "1.009"])
  .calc(); // (1+2+3+4+5) - (1.009+1.099+0.999+0.99) + (0.9+0.99+0.999+1.099+1.009)
console.log(result12); // "15.9"

// Example 13: Add, Sub, Add (reversed order of operands)
const result13 = new Pipe()
  .add(["0.9", "0.99", "0.999", "1.099", "1.009"])
  .sub(["1.009", "1.099", "0.999", "0.99"])
  .add(["1", "2", "3", "4", "5"])
  .calc(); // (0.9+0.99+0.999+1.099+1.009) - (1.009+1.099+0.999+0.99) + (1+2+3+4+5)
console.log(result13); // "15.9"

// Example 14: Complex chain of operations
const result14 = new Pipe()
  .add(["0.9", "0.99", "0.999", "1.099", "1.009"])
  .sub(["1.009", "1.099", "0.999", "0.99"])
  .add(["1", "2", "3", "4", "5"])
  .sub(["1", "0.9"])
  .mul(["2", "3"])
  .div(["5"])
  .add(["1", "2", "0.2"])
  .calc(); // (((((((0.9+0.99+0.999+1.099+1.009) - (1.009+1.099+0.999+0.99) + (1+2+3+4+5)) - 1) - 0.9) * 2) * 3) / 5) + 1 + 2 + 0.2
console.log(result14); // "20"

// Example 15: chaining add, div, sub, mul
const result15 = new Pipe().add(addNums)
  .div(divNums)
  .sub(subNums)
  .mul(mulNums)
  .calc();
console.log(result15); //  (1 + 2 + 3) / 4 - (0.2 + 0.3) * 2 * 5 * 0.2 = 2

// Example 16: add same numbers twice
const result16 = new Pipe().add(["9.999", "999.9", "9.999", "999.9"]).calc();
console.log(result16); // 9.999 + 999.9 + 9.999 + 999.9

// Example 17: division
const result17 = new Pipe().div(["8", "4"]).calc(); // 8 / 4
console.log(result17);

// Example 18: add and division
const result18 = new Pipe().add(["1", "7"]).div(["4"]).calc(); // (1 + 7) / 4
console.log(result18);

// Example 19: Absolute value with negative multiplication
const result19 = new Pipe().mul(["10", "-2"]).abs().calc();
console.log(result19); // 5

// Example 20: Absolute value with negative multiplication
const result20 = new Pipe().mul(["-10", "2"]).abs().calc();
console.log(result20); // 5

// Example 21: Absolute value with negative multiplication
const result21 = new Pipe().mul(["-10", "-2"]).abs().calc();
console.log(result21); // 5

// Example 22: Absolute value of a negative number
const result22 = new Pipe("-20").abs().calc();
console.log(result22); // 20
        `}
      </CodeBlock>
    </>
  );
};

export default Pipe;
