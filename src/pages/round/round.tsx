import { round } from "@numio/bigmath";
import CodeBlock from "/src/UI/codeBlock/codeBlock.tsx";

const Round = () => {
  return (
    <>
      <h2>
        <code>round</code> Function
      </h2>
      <p>
        The <code>round</code> function is a core component of the{" "}
        <code>@numio/bigmath</code>{" "}
        library, providing flexible rounding capabilities to handle numbers with
        arbitrary precision. It offers control over decimal places and rounding
        modes.
      </p>

      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function round(number: string, options?: { decimals?: number, roundMode?: "up" | "down" | "ceil" | "floor" | "half-up" | "half-down" | "half-even" | "half-odd", sigFig?: boolean }): string`}
      </CodeBlock>

      <h3>Parameters</h3>
      <ul>
        <li>
          <code>number</code>: A string representing the number to be rounded.
        </li>
        <li>
          <code>options</code>: An optional object that can contain the
          following properties:
          <ul>
            <li>
              <code>decimals</code>: (Optional) An integer specifying the number
              of decimal places to round to. Defaults to 0 (nearest integer).
            </li>
            <li>
              <code>roundMode</code>: (Optional) A string specifying the
              rounding behavior. Defaults to{" "}
              <code>"half-up"</code>. Valid values are:
              <ul>
                <li>
                  <code>"up"</code>: Rounds away from zero. (e.g., 1.1 -&gt;
                  {" "}
                  {round("1.1", { roundMode: "up" })}, -1.1 -&gt;{" "}
                  {round("-1.1", { roundMode: "up" })})
                </li>
                <li>
                  <code>"down"</code>: Rounds towards zero. (e.g., 1.9 -&gt;
                  {" "}
                  {round("1.9", { roundMode: "down" })}, -1.9 -&gt;{" "}
                  {round("-1.9", { roundMode: "down" })})
                </li>
                {
                  /* <li>
                  <code>"ceil"</code>: Rounds towards positive infinity. (e.g.,
                  1.1 -&gt; 2, -1.1 -&gt; -1)
                </li>
                <li>
                  <code>"floor"</code>: Rounds towards negative infinity. (e.g.,
                  1.9 -&gt; 1, -1.9 -&gt; -2)
                </li> */
                }
                <li>
                  <code>"half-up"</code>: Rounds to the nearest number. If
                  equidistant, rounds up (away from zero). (e.g., 1.5 -&gt;{" "}
                  {round("1.5", { roundMode: "half-up" })}, -1.5 -&gt;{" "}
                  {round("-1.5", { roundMode: "half-up" })})
                </li>
                <li>
                  <code>"half-down"</code>: Rounds to the nearest number. If
                  equidistant, rounds down (towards zero). (e.g., 1.5 -&gt;{" "}
                  {round("1.5", { roundMode: "half-down" })}, -1.5 -&gt;{" "}
                  {round("-1.5", { roundMode: "half-down" })})
                </li>
                <li>
                  <code>"half-even"</code>: Rounds to the nearest even number.
                  If equidistant, rounds to the nearest even number. (e.g., 1.5
                  -&gt; {round("1.5", { roundMode: "half-even" })}, 2.5 -&gt;
                  {" "}
                  {round("2.5", { roundMode: "half-even" })}) Also known as
                  "Banker's rounding."
                </li>
                <li>
                  <code>"half-odd"</code>: Rounds to the nearest odd number. If
                  equidistant, rounds to the nearest odd number. (e.g., 1.5
                  -&gt; {round("1.5", { roundMode: "half-odd" })}, 2.5 -&gt;
                  {" "}
                  {round("2.5", { roundMode: "half-odd" })})
                </li>
              </ul>
            </li>
            <li>
              <code>sigFig</code>: (Optional) A boolean indicating whether to
              round to significant figures. If true, the <code>decimals</code>
              {" "}
              parameter specifies the number of significant digits. Defaults to
              {" "}
              <code>false</code>.
            </li>
          </ul>
        </li>
      </ul>

      <h3>Return Value</h3>
      <p>A string representing the rounded number.</p>

      <h3>Behavior</h3>
      <ul>
        <li>
          <strong>Arbitrary Precision</strong>: Handles numbers of any size and
          decimal precision.
        </li>
        <li>
          <strong>Flexible Precision</strong>: Rounds to the specified number of
          decimal places.
        </li>
        <li>
          <strong>Multiple Rounding Modes</strong>: Supports various rounding
          modes to accommodate different requirements.
        </li>
        <li>
          <strong>Significant Figures</strong>: Optionally rounds to a specified
          number of significant figures.
        </li>
        <li>
          <strong>Input as String</strong>: Takes the number as a string to
          ensure precision.
        </li>
      </ul>

      <h3>Examples</h3>
      <h4>Rounding to a specific number of decimal places</h4>
      <CodeBlock language="javascript">
        {`import { round } from "@numio/bigmath";

console.log(round("1.12345", { decimals: 1 })); // "${round("1.12345", { decimals: 1 })}"
console.log(round("1.12345", { decimals: 2 })); // "${round("1.12345", { decimals: 2 })}"
console.log(round("1.12234", { decimals: 0 })); // "${round("1.12345", { decimals: 0 })}"
console.log(round("9.999", { decimals: 2 })); // "${round("9.999", { decimals: 2 })}". Result "10.00" converted to "10"`}
      </CodeBlock>

      <h4>Rounding with different modes</h4>
      <CodeBlock language="javascript">
        {`import { round } from "@numio/bigmath";

console.log(round("1.11", { decimals: 1, roundMode: "up" })); // "${round("1.11", { decimals: 1, roundMode: "up" })}"
console.log(round("1.19", { decimals: 1, roundMode: "up" })); // "${round("1.19", { decimals: 1, roundMode: "up" })}"
console.log(round("1.11", { decimals: 1, roundMode: "down" })); // "${round("1.11", { decimals: 1, roundMode: "down" })}"
console.log(round("1.19", { decimals: 1, roundMode: "down" })); // "${round("1.19", { decimals: 1, roundMode: "down" })}"
console.log(round("1.15", { decimals: 1, roundMode: "half-up" })); // "${round("1.15", { decimals: 1, roundMode: "half-up" })}"
console.log(round("1.15", { decimals: 1, roundMode: "half-down" })); // "${round("1.15", { decimals: 1, roundMode: "half-down" })}"
console.log(round("1.15", { decimals: 1, roundMode: "half-even" })); // "${round("1.15", { decimals: 1, roundMode: "half-even" })}"
console.log(round("1.25", { decimals: 1, roundMode: "half-even" })); // "${round("1.25", { decimals: 1, roundMode: "half-even" })}"
console.log(round("1.35", { decimals: 1, roundMode: "half-even" })); // "${round("1.35", { decimals: 1, roundMode: "half-even" })}"
console.log(round("1.45", { decimals: 1, roundMode: "half-even" })); // "${round("1.45", { decimals: 1, roundMode: "half-even" })}"
console.log(round("1.55", { decimals: 1, roundMode: "half-even" })); // "${round("1.55", { decimals: 1, roundMode: "half-even" })}"
console.log(round("1.15", { decimals: 1, roundMode: "half-odd" })); // "${round("1.15", { decimals: 1, roundMode: "half-odd" })}"
console.log(round("1.25", { decimals: 1, roundMode: "half-odd" })); // "${round("1.25", { decimals: 1, roundMode: "half-odd" })}"
console.log(round("1.35", { decimals: 1, roundMode: "half-odd" })); // "${round("1.35", { decimals: 1, roundMode: "half-odd" })}"
console.log(round("1.45", { decimals: 1, roundMode: "half-odd" })); // "${round("1.45", { decimals: 1, roundMode: "half-odd" })}"
console.log(round("1.55", { decimals: 1, roundMode: "half-odd" })); // "${round("1.55", { decimals: 1, roundMode: "half-odd" })}"
        `}
      </CodeBlock>

      <h4>Rounding with significant figures</h4>
      <CodeBlock language="javascript">
        {`import { round } from "@numio/bigmath";

console.log(round("0.000119", { decimals: 2, sigFig: false })); // "${round("0.000119", { decimals: 2, sigFig: false })}"
console.log(round("0.000119", { decimals: 2, sigFig: true })); // "${round("0.000119", { decimals: 2, sigFig: true })}"
console.log(round("0.0019", { decimals: 1, sigFig: true, roundMode: "down" })); // "${round("0.0019", { decimals: 1, sigFig: true, roundMode: "down" })}"
console.log(round("0.0011", { decimals: 1, sigFig: true, roundMode: "up" })); // "${round("0.0011", { decimals: 1, sigFig: true, roundMode: "up" })}"
console.log(round("1.000119", { decimals: 2, sigFig: false })); // "${round("1.000119", { decimals: 2, sigFig: false })}"
console.log(round("1.000119", { decimals: 2, sigFig: true })); // "${round("1.000119", { decimals: 2, sigFig: true })}"
        `}
      </CodeBlock>

      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as Strings</strong>: Always provide numbers as strings
          to this function to maintain precision.
        </li>
        <li>
          <strong>Valid Number Formats</strong>: Ensure that the input strings
          represent valid numbers.
        </li>
        <li>
          <strong>Rounding Mode</strong>: Choose the appropriate string to
          specify the desired rounding behavior.
        </li>
        <li>
          <strong>Significant Digits</strong>: Use the <code>sigFig</code>{" "}
          option when you need to preserve a specific number of significant
          digits.
        </li>
      </ul>
    </>
  );
};

export default Round;
