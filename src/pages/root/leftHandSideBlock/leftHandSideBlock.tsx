import Menu from "/src/UI/menu/menu.tsx";
import { Link } from "@tanstack/react-router";
import css from "./leftHandSideBlock.module.css";

const LeftHandSideBlock = ({ className }: Props) => {
  return (
    <Menu className={className}>
      <Link
        to="/"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/"
      >
        Home
      </Link>
      <Link
        to="/install"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/install"
      >
        Install
      </Link>
      <Link
        to="/add"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/add"
      >
        add
      </Link>
      <Link
        to="/sub"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/sub"
      >
        sub
      </Link>
      <Link
        to="/div"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/div"
      >
        div
      </Link>
      <Link
        to="/mul"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/mul"
      >
        mul
      </Link>
      <Link
        to="/round"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/round"
      >
        round
      </Link>
      <Link
        to="/pipe"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/pipe"
      >
        pipe
      </Link>
      <Link
        to="/sort"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/sort"
      >
        sort
      </Link>
      <Link
        to="/quartile"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/quartile"
      >
        quartile
      </Link>
      <Link
        to="/mean"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/mean"
      >
        mean
      </Link>
      <Link
        to="/max"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/max"
      >
        max
      </Link>
      <Link
        to="/min"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/min"
      >
        min
      </Link>
      <Link
        to="/isEqual"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/isEqual"
      >
        isEqual
      </Link>
      <Link
        to="/isLeftGreater"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/isLeftGreater"
      >
        isLeftGreater
      </Link>
      <Link
        to="/isLeftGreaterOrEqual"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/isLeftGreaterOrEqual"
      >
        isLeftGreaterOrEqual
      </Link>
      <Link
        to="/mad"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/mad"
      >
        MAD
      </Link>
      <Link
        to="/iqr"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/iqr"
      >
        IQR
      </Link>
      <Link
        to="/sqrt"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/sqrt"
      >
        sqrt
      </Link>
      <Link
        to="/cbrt"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/cbrt"
      >
        cbrt
      </Link>
      <Link
        to="/abs"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/abs"
      >
        abs
      </Link>
      <Link
        to="/toBase"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/toBase"
      >
        toBase
      </Link>
      <Link
        to="/isHex"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/isHex"
      >
        isHex
      </Link>
      <Link
        to="/isBinary"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/isBinary"
      >
        isBinary
      </Link>
      <Link
        to="/isDecimal"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/isDecimal"
      >
        isDecimal
      </Link>
      <Link
        to="/isOctal"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/isOctal"
      >
        isOctal
      </Link>
      <Link
        to="/isNumber"
        activeProps={{ className: css.active }}
        className={css.link}
        key="/isNumber"
      >
        isNumber
      </Link>

      <Link
        to="/performance"
        search={{ base: "decimal", fn: "add", type: "int", repeat: 1000 }}
        activeProps={{ className: css.active }}
        className={css.link}
      >
        perf int decimal
      </Link>
      <Link
        to="/performance"
        search={{ base: "hex", fn: "add", type: "int", repeat: 1000 }}
        activeProps={{ className: css.active }}
        className={css.link}
      >
        perf int hex
      </Link>
      <Link
        to="/performance"
        search={{ base: "octal", fn: "add", type: "int", repeat: 1000 }}
        activeProps={{ className: css.active }}
        className={css.link}
      >
        perf int octal
      </Link>
      <Link
        to="/performance"
        search={{ base: "binary", fn: "add", type: "int", repeat: 1000 }}
        activeProps={{ className: css.active }}
        className={css.link}
      >
        perf int binary
      </Link>
      <Link
        to="/performance"
        search={{ base: "decimal", fn: "add", type: "float", repeat: 1000 }}
        activeProps={{ className: css.active }}
        className={css.link}
      >
        perf float
      </Link>
    </Menu>
  );
};

export default LeftHandSideBlock;
type Props = {
  className: string;
};
