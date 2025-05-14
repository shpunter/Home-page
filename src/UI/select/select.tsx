import { SyntheticEvent } from "react";

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
        onChange={onChangeInner}
        name="Number of operations"
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
