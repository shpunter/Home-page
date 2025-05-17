import { SyntheticEvent } from "react";

import css from "/src/UI/select/select.module.css";

const Select = ({ options, selected, onChange, label }: Props) => {
  const onChangeInner = (event: SyntheticEvent) => {
    onChange?.({
      event,
      value: (event.target as HTMLOptionElement).value,
    });
  };

  return (
    <label>
      {label}
      <select
        className={css.select}
        onChange={onChangeInner}
        name={label}
        defaultValue={selected}
      >
        {options.map(({ label, value }) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default Select;

type Props = {
  options: Option[];
  label: string;
  selected?: Option["value"];
  onChange?: (
    { value, event }: { value: string; event: SyntheticEvent },
  ) => void;
};

type Option = { label: string; value: string | number };
