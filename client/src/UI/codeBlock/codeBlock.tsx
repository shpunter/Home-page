import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Props } from "./codeBlock.types.ts";

const CodeBlock = ({ children, language = "javascript" }: Props) => {
  return (
    <SyntaxHighlighter language={language}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
