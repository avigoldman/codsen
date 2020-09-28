import tap from "tap";
import objectPath from "object-path";
import get from "../dist/ast-get-values-by-key.esm";

tap.test("01 - input is plain object, replacement is string", (t) => {
  t.strictSame(
    get(
      {
        style: "html",
      },
      "style",
      "meta"
    ),
    {
      style: "meta",
    },
    "01"
  );
  t.end();
});

tap.test("02 - paths match object-paht paths", (t) => {
  const source = {
    tags: [
      {
        style: "html",
      },
    ],
  };
  t.strictSame(
    get(source, "style"),
    [
      {
        val: "html",
        path: "tags.0.style",
      },
    ],
    "02.01"
  );

  t.is(objectPath.get(source, "tags.0.style"), "html", "02.02");
  t.end();
});