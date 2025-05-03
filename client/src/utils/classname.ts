export const classname: Classname = (obj, array = []) => {
  const valid = array.filter((el) => el);
  const dynamic = Object.entries(obj ?? {});

  for (let i = 0; i < dynamic.length; i++) {
    dynamic[i][1] && valid.push(dynamic[i][0]);
  }

  return valid.join(" ");
};

type Classname = (obj: Record<string, boolean>, array?: string[]) => string;
