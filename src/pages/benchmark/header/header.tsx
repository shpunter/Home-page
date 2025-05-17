import { useSearch } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";

import Select from "/src/UI/select/select.tsx";

import { OnChange } from "./header.type.ts";
import css from "./header.module.css";

const Header = () => {
  const navigate = useNavigate({ from: "/benchmark" });
  const { base, repeat, size } = useSearch({ from: "/benchmark" });

  const optRepeat = [
    { label: "10", value: "1D" },
    { label: "1000", value: "1K" },
    { label: "1 000 000", value: "1M" },
    { label: "10 000 000", value: "10M" },
  ];

  const optBase = [
    { label: "hex 0x", value: "hex" },
    { label: "octal 0o", value: "octal" },
    { label: "binary 0b", value: "binary" },
    { label: "decimal", value: "decimal" },
  ];

  const optSize = [
    {label: "big", value: "lg"},
    {label: "small", value: "sm"},
  ]

  const onChange: OnChange = (key) => ({ value }) => {
    navigate({
      search: (prev) => {
        return { ...prev, [key]: value };
      },
    });
  };

  return (
    <div className={css.header}>
      <Select
        label="Repeat:"
        options={optRepeat}
        selected={repeat}
        onChange={onChange("repeat")}
      />

      <Select
        label="Base:"
        options={optBase}
        selected={base}
        onChange={onChange("base")}
      />

      <Select
        label="Size:"
        options={optSize}
        selected={size}
        onChange={onChange("size")}
      />
    </div>
  );
};

export default Header;
