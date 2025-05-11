import CodeBlock from "/src/UI/codeBlock/codeBlock.tsx";

const Install = () => {
  return (
    <>
      <h2>Installation</h2>
      <p>
        To begin using the <code>@numio/bigmath</code> library in your project,
        you can install it using one of the following package managers:
      </p>

      <h3>NPM</h3>
      <CodeBlock language="bash">
        {`npm install @numio/bigmath`}
      </CodeBlock>

      <h3>YARN</h3>
      <CodeBlock language="bash">
        {`yarn add @numio/bigmath`}
      </CodeBlock>

      <h3>BUN</h3>
      <CodeBlock language="bash">
        {`bun add @numio/bigmath`}
      </CodeBlock>

      <h3>PNPM</h3>
      <CodeBlock language="bash">
        {`pnpm add @numio/bigmath`}
      </CodeBlock>

      <h3>DENO</h3>
      <CodeBlock language="bash">
        {`deno add jsr:@numio/bigmath`}
      </CodeBlock>

      <p>
        Choose the command that corresponds to the package manager you are using
        in your project. Once the installation is complete, you can import and
        use the functions provided by <code>@numio/bigmath</code> in your
        JavaScript or TypeScript code.
      </p>
    </>
  );
};

export default Install;