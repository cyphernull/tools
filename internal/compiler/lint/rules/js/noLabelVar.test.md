# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `js/noLabelVar`

### `0`

```

 lint/js/noLabelVar/reject/1/file.ts:2 lint/js/noLabelVar ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Do not use the x variable name as a label.

    1 │ const x = 'test';
  > 2 │ x: expr;
      │ ^^^^^^^^

  ℹ Creating a label with the same name as an in-scope variable leads to confusion.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```ts
const x = "test";
x: expr;

```

### `1`

```
✔ No known problems!

```

### `1: formatted`

```ts
const x = "test";
z: expr;

```
