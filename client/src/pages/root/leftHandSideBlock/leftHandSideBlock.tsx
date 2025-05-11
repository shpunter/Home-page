import Menu from "/client/src/UI/menu/menu.tsx";
import Item from "/client/src/UI/menu/item/item.tsx";

const LeftHandSideBlock = ({ className }: Props) => {
  const links = [
    { path: "/", label: "Home" },
    { path: "/install", label: "Install" },
    { path: "/add", label: "add" },
    { path: "/sub", label: "sub" },
    { path: "/div", label: "div" },
    { path: "/mul", label: "mul" },
    { path: "/round", label: "round" },
    { path: "/pipe", label: "pipe" },
    { path: "/sort", label: "sort" },
    { path: "/quartile", label: "quartile" },
    { path: "/mean", label: "mean" },
    { path: "/max", label: "max" },
    { path: "/min", label: "min" },
    { path: "/isEqual", label: "isEqual" },
    { path: "/isLeftGreater", label: "isLeftGreater" },
    { path: "/isLeftGreaterOrEqual", label: "isLeftGreaterOrEqual" },
    { path: "/mad", label: "MAD" },
    { path: "/iqr", label: "IQR" },
    { path: "/sqrt", label: "sqrt" },
    { path: "/cbrt", label: "cbrt" },
    { path: "/abs", label: "abs" },
    { path: "/toBase", label: "toBase" },
    { path: "/isHex", label: "isHex" },
    { path: "/isBinary", label: "isBinary" },
    { path: "/isDecimal", label: "isDecimal" },
    { path: "/isOctal", label: "isOctal" },
    { path: "/isNumber", label: "isNumber" },
    { path: "/performance/add/sm/int/decimal", label: "Perf small int dec" },
    { path: "/performance/add/sm/float/decimal", label: "Perf small float dec" },
    { path: "/performance/add/sm/int/hex", label: "Perf small int hex" },
    { path: "/performance/add/sm/int/binary", label: "Perf small int binary" },
    { path: "/performance/add/sm/int/octal", label: "Perf small int octal" },
  ];

  return (
    <Menu className={className}>
      {links.map((link) => {
        return (
          <Item key={link.path} path={link.path}>
            <span>{link.label}</span>
          </Item>
        );
      })}
    </Menu>
  );
};

export default LeftHandSideBlock;
type Props = {
  className: string;
};
