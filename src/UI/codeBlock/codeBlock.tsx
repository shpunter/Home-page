import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const CodeBlock = ({ children, language = "javascript" }: Props) => {
  return (
    <SyntaxHighlighter language={language}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;

export type Props = {
  children: string;
  language?: "javascript" | "bash";
};
