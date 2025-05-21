import CodeBlock from "/src/UI/codeBlock/codeBlock.tsx";

const FDRDoc = () => {
  return (
    <>
      <h2>
        <code>FDR (Freedman-Diaconis Rule)</code> Function
      </h2>
      <p>
        The <code>FDR</code> function from the <code>@numio/bigmath</code>{" "}
        library implements the <strong>Freedman-Diaconis Rule</strong> to calculate the
        optimal bin width and number of bins for a histogram. This rule is a
        robust method for determining bin sizes, especially effective for large
        datasets and those with outliers, as it uses the Interquartile Range
        (IQR) or Median Absolute Deviation (MAD) rather than standard deviation,
        making it less sensitive to extreme values.
      </p>

      <h3>Function Signature</h3>
      <CodeBlock language="javascript">
        {`function FDR(array: string[], options?: { useMadAbove?: number; maxBinNumber?: number; madFrom?: "median" | "mean" }): { binWidth: string; binNum: string; }`}
      </CodeBlock>

      <h3>Parameters</h3>
      <ul>
        <li>
          <strong><code>array</code></strong>: An array of strings, where each string represents a
          number in your dataset. It's crucial to provide numbers as strings to
          maintain arbitrary precision throughout calculations.
        </li>
        <li>
          <strong><code>options</code></strong> (optional): An object that allows you to customize the
          bin calculation behavior.
          <ul>
            <li>
              <strong><code>useMadAbove</code></strong>: A <code>number</code> threshold. When the total number of data points
              in the input <code>array</code> is less than or equal to this threshold, the
              function will use the <strong>Median Absolute Deviation (MAD)</strong> instead of
              the Interquartile Range (IQR) in its internal calculations. This is
              particularly useful for smaller datasets where MAD might provide a
              more representative measure of spread compared to IQR, leading to
              potentially different and more appropriate binning. Set to <code>0</code> to always use IQR.
            </li>
            <li>
              <strong><code>maxBinNumber</code></strong>: A <code>number</code> that specifies the maximum allowable
              number of bins. The Freedman-Diaconis Rule can sometimes suggest a
              very large number of bins, especially for datasets with many unique
              values or high precision. This option allows you to cap the number of
              bins, which can be useful for design consistency in visualizations,
              to prevent excessively narrow bins, or to fit the histogram within
              specific display constraints. If the calculated number of bins exceeds{" "}
              <code>maxBinNumber</code>, the <code>binWidth</code> will be adjusted to ensure the number
              of bins does not exceed this limit.
            </li>
            <li>
              <strong><code>madFrom</code></strong>: A string, either <strong>"median"</strong> (default) or <strong>"mean"</strong>.
              This option is only relevant when <code>useMadAbove</code> causes MAD to be used
              internally (i.e., when <code>array.length &lt;= useMadAbove</code>). It determines
              whether the Median Absolute Deviation is calculated from the
              median or the mean of the data. By default, MAD is calculated from the median.
            </li>
          </ul>
        </li>
      </ul>

      <h3>Return Value</h3>
      <p>
        The function returns an object containing two string properties:
      </p>
      <ul>
        <li>
          <strong><code>binNum</code></strong>: A string representing the calculated optimal number of
          bins for the histogram.
        </li>
        <li>
          <strong><code>binWidth</code></strong>: A string representing the calculated optimal width for
          each bin.
        </li>
      </ul>

      <h3>Behavior</h3>
      <ul>
        <li>
          The <code>FDR</code> function determines the optimal bin width (h) and number of bins (k)
          using the following formulas:
          <p>
            Bin Width (h) = 2 &times; IQR &times; n<sup>-1/3</sup>
          </p>
          <p>
            Number of Bins (k) = Ceiling ( (Maximum Data Value - Minimum Data Value) / h )
          </p>
          Where:
          <ul>
            <li><code>IQR</code> is the Interquartile Range (or MAD if <code>useMadAbove</code> is active).</li>
            <li><code>n</code> is the total number of data points in the array.</li>
            <li><code>Maximum Data Value</code> is the maximum value in the dataset.</li>
            <li><code>Minimum Data Value</code> is the minimum value in the dataset.</li>
          </ul>
        </li>
        <li>
          If the <code>useMadAbove</code> option is provided and the array length meets the
          condition, MAD is used instead of IQR in the calculation of <code>h</code>.
        </li>
        <li>
          If <code>maxBinNumber</code> is provided and the calculated <code>binNum</code> exceeds this
          limit, <code>binWidth</code> is re-calculated to ensure <code>binNum</code> is equal to
          <code>maxBinNumber</code>, maintaining consistency.
        </li>
        <li>
          All calculations are performed with arbitrary precision due to the
          string input and the underlying <code>bigmath</code> library.
        </li>
      </ul>

      <h3>Examples</h3>

      <CodeBlock language="javascript">
        {`import { FDR } from "@numio/bigmath";

// Example 1: Basic usage with a typical dataset (default options)
const result = FDR(["6", "7", "15", "36", "39", "40", "41", "42", "43", "47", "49"]);
console.log(result);
// Output: { binNum: "2", binWidth: "25.18008152926611351152" }
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { FDR } from "@numio/bigmath";

// Example 2: Using 'useMadAbove' for a smaller array (e.g., when array length <= 30)
const data = ["20", "20", "22", "24", "28", "28", "32", "32", "32", "35", "35", "40", "46", "79"];
const result = FDR(data, { useMadAbove: 30 });
console.log(result);
// Output: { binNum: "12", binWidth: "4.97895920019746064602" }
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { FDR } from "@numio/bigmath";

// Example 3: Using 'useMadAbove: 0' to effectively always use IQR regardless of array size
const data = ["20", "20", "22", "24", "28", "28", "32", "32", "32", "35", "35", "40", "46", "79"];
const result = FDR(data, { useMadAbove: 0 });
console.log(result);
// Output: { binNum: "7", binWidth: "9.12809186702867785104" }
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { FDR } from "@numio/bigmath";

// Example 4: Set max number of bins
const data = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "100"];
const result = FDR(data, { maxBinNumber: 50 });
console.log(result);
// Output: { binNum: "50", binWidth: "1.9915836800789842584" }
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { FDR } from "@numio/bigmath";

// Example 5: Combining 'useMadAbove' and 'madFrom: "mean"'
const data = ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "4", "6", "7", "7", "10"];
const result = FDR(data, { useMadAbove: 30, madFrom: "mean" });
console.log(result);
// Output: { binNum: "9", binWidth: "1.03499590229883494421" }
                `}
      </CodeBlock>

      <CodeBlock language="javascript">
        {`import { FDR } from "@numio/bigmath";

// Example 6: Large dataset with decimal values and outliers, using madFrom: "mean"
const largeData = [
  "2.5", "2.5", "2.5", "2.534818", "2.534818", "2.534818", "2.545189", "2.545189", "2.545189",
  "2.554899", "2.554899", "2.554899", "2.643373", "2.643373", "2.643373", "2.674461",
  "2.674461", "2.674461", "2.710059", "2.734935", "2.746267", "2.746267", "2.825329",
  "2.825329", "2.825329", "2.85453", "2.865519", "2.896907", "2.896907", "2.916548",
  "2.916548", "2.916548", "2.983244", "2.983244", "2.983244", "3", "3", "3.003679",
  "3.003679", "3.003679", "3.126411", "3.126411", "3.126411", "3.128704", "3.128704",
  "3.128704", "3.221071", "3.221071", "3.221071", "3.227929", "3.257559", "3.257559",
  "3.305785", "3.347293", "3.383828", "3.383828", "3.383828", "3.412485", "3.412485",
  "3.412485", "3.495014", "3.520265", "3.520265", "3.520265", "3.526133", "3.526133",
  "3.526133", "3.671633", "3.671633", "3.671633", "4", "4", "4.664473", "4.664473",
  "4.664473", "5", "5.59159", "5.59159", "5.59159", "5.626491", "5.626491", "5.626491",
  "5.725668", "5.725668", "5.725668", "6.499715", "6.499715", "6.499715", "7.242344",
  "7.242344", "7.242344", "7.433625", "7.433625", "7.433625", "7.6", "7.961677", "7.961677",
  "7.961677", "9.009372", "9.009372", "9.009372", "11.618911", "11.666667", "11.857689",
  "12.382999", "12.382999", "12.574021", "13.054826", "13.054826", "13.054826",
  "13.719091", "13.719091", "13.719091", "14.9631", "15.241082", "17.106404", "17.279565",
  "17.279565", "17.279565", "18.208266", "18.208266", "20", "22.108785", "22.108785",
  "22.108785", "22.721067", "22.721067", "22.721067", "22.948", "22.948", "22.948",
  "23.513966", "25.664634", "25.664634", "33.116279", "34.27907", "34.744186",
  "36.860214", "36.860214", "36.860214", "394.639817", "1000.911392",
];
const result = FDR(largeData, { madFrom: "mean" });
console.log(result);
// Output: { binNum: "90", binWidth: "11.1330731055609738054380991870634861093713" }
                `}
      </CodeBlock>

      <h3>Important Considerations</h3>
      <ul>
        <li>
          <strong>Input as Strings</strong>: Always provide the input <code>array</code> elements as strings.
          This is crucial for preserving numerical precision, especially with
          floating-point numbers.
        </li>
        <li>
          <strong>Array Length</strong>: The function is designed for arrays with a <strong>minimum length of three</strong> elements.
          For smaller arrays, statistical measures like MAD may not be meaningful or the function's behavior might be
          undefined.
        </li>
        <li>
          <strong>Numeric Input</strong>: Each string in the input array must represent a valid
          numerical value. The function relies on the underlying <code>bigmath</code>{" "}
          parsing capabilities and does not perform explicit validation of the
          input strings for non-numeric content.
        </li>
        <li>
          <strong>Non-Decimal Numbers</strong>: When using non-decimal formats like hexadecimal (<code>0x</code>),
          binary (<code>0b</code>), or octal (<code>0o</code>), ensure that these represent <strong>integer values only</strong>.
          The <code>bigmath</code> library processes these as integers when performing calculations.
        </li>
        <li>
          <strong>Precision</strong>: Both <code>binWidth</code> and <code>binNum</code> are returned as strings
          to preserve the full precision of the calculations, especially for{" "}
          <code>binWidth</code> which can be a complex decimal.
        </li>
        <li>
          <strong>Interpretation</strong>: The calculated <code>binWidth</code> provides the suggested
          width for each bin, and <code>binNum</code> indicates how many such bins would
          optimally cover the data range.
        </li>
      </ul>
    </>
  );
};

export default FDRDoc;