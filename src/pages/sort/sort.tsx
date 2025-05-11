import CodeBlock from "/src/UI/codeBlock/codeBlock.tsx";

const Sort = () => {
  return (
    <>
      <h2>
        <code>sort</code> Function
      </h2>
      <p>
        The <code>sort</code> function from the <code>@numio/bigmath</code>{" "}
        library sorts an array of numbers represented as strings, providing
        accurate sorting for numbers of arbitrary size and precision. It
        addresses the limitations of JavaScript's default{" "}
        <code>Array.prototype.sort()</code>{" "}
        method, which may produce incorrect results when sorting non-numeric
        strings or large numbers.
      </p>
      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function sort(numbers: string[], order?: 'asc' | 'desc'): string[]`}
      </CodeBlock>
      <h3>Parameters</h3>
      <ul>
        <li>
          <code>numbers</code>: An array of strings, where each string
          represents a number to be sorted.
        </li>
        <li>
          <code>order</code>{" "}
          (optional): A string indicating the sorting order. It can be either
          {" "}
          <code>'asc'</code> (ascending) or <code>'desc'</code>{" "}
          (descending). The default is <code>'asc'</code>.
        </li>
      </ul>
      <h3>Return Value</h3>
      <p>
        The function returns a new array of strings, containing the sorted
        numbers.
      </p>
      <h3>Behavior</h3>
      <ul>
        <li>
          The <code>sort</code>{" "}
          function sorts an array of numbers represented as strings.
        </li>
        <li>
          It handles numbers of arbitrary size and precision, ensuring accurate
          sorting.
        </li>
        <li>
          The sorting order can be specified as either ascending (<code>
            'asc'
          </code>) or descending (<code>'desc'</code>).
        </li>
        <li>
          If the <code>order</code>{" "}
          parameter is not provided, the array is sorted in ascending order by
          default.
        </li>
        <li>
          The function returns a new sorted array; it does not modify the
          original array.
        </li>
      </ul>
      <h3>Examples</h3>
      <CodeBlock language="javascript">
        {`import { sort } from "@numio/bigmath";

// Example 1: Default sorting (ascending)
const numbers1 = ["1", "10", "11", "101", "11", "10", "1"];
const sorted1 = sort(numbers1);
console.log(sorted1); // Output: ["1", "1", "10", "10", "11", "11", "101"]
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { sort } from "@numio/bigmath";

// Example 2: Ascending sort
const numbers2 = ["-0.1", "0.1", "-1"];
const sorted2 = sort(numbers2, "asc");
console.log(sorted2); // Output: ["-1", "-0.1", "0.1"]
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { sort } from "@numio/bigmath";

// Example 3: Descending sort
const numbers3 = ["-0.1", "0.1", "-1"];
const sorted3 = sort(numbers3, "desc");
console.log(sorted3); // Output: ["0.1", "-0.1", "-1"]
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { sort } from "@numio/bigmath";

// Example 4: Already sorted array
const numbers4 = ["1", "2", "3", "4", "5"];
const sorted4 = sort(numbers4);
console.log(sorted4); // Output: ["1", "2", "3", "4", "5"]
                `}
      </CodeBlock>
      <CodeBlock language="javascript">
        {`import { sort } from "@numio/bigmath";
                
// Example 5:  Array with duplicate values
const numbers5 = ["5", "2", "5", "1", "2"];
const sorted5 = sort(numbers5);
console.log(sorted5); // Output:  ["1", "2", "2", "5", "5"]
                `}
      </CodeBlock>
      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as Strings:</strong> The <code>sort</code>{" "}
          function expects an array of strings, where each string represents a
          number. This is crucial for maintaining precision when sorting large
          numbers or numbers with many decimal places.
        </li>
        <li>
          <strong>Sorting Order:</strong> The optional <code>order</code>{" "}
          parameter allows you to specify the sorting order. If omitted, the
          array is sorted in ascending order.
        </li>
        <li>
          <strong>Immutability:</strong> The <code>sort</code>{" "}
          function returns a <em>new</em>{" "}
          sorted array. It does not modify the original array.
        </li>
        <li>
          <strong>Numeric Comparison:</strong>{" "}
          The function performs a numeric comparison, not a string comparison.
          This ensures that numbers are sorted correctly, regardless of their
          string representation (e.g., "10" is sorted after "2", not before).
        </li>
      </ul>
    </>
  );
};

export default Sort;
