import { classname } from "/src/utils/classname.ts";
import { assertEquals } from "jsr:@std/assert";

Deno.test("filter empty values in array", () => {
  const res = classname({}, ["", "str1", "", "str2"]);

  assertEquals(res, "str1 str2");
});

Deno.test("filter true values in obj", () => {
  const res = classname({
    "str1": true,
    "str2": false,
    "str3": true,
  });

  assertEquals(res, "str1 str3");
});
