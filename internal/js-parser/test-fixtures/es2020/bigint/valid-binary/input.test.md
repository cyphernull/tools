# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2020 > bigint > valid-binary`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2020/bigint/valid-binary/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2020/bigint/valid-binary/input.js"
		end: Object {
			column: 0
			line: 2
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "es2020/bigint/valid-binary/input.js"
				end: Object {
					column: 12
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			expression: JSBigIntLiteral {
				value: "0b101011101"
				loc: Object {
					filename: "es2020/bigint/valid-binary/input.js"
					end: Object {
						column: 12
						line: 1
					}
					start: Object {
						column: 0
						line: 1
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
