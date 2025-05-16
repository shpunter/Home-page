export type OnChange = (
  key: "repeat" | "base",
) => (arg: { value: string }) => void;
