export type OnChange = (
  key: "repeat" | "base" | "size",
) => (arg: { value: string }) => void;
