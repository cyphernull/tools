# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0070`

### `ast`

```javascript
JSRoot {
	corrupt: true
	directives: Array []
	filename: "esprima/invalid-syntax/migrated_0070/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/invalid-syntax/migrated_0070/input.js"
		end: Object {
			column: 0
			line: 4
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	comments: Array [
		CommentBlock {
			id: "0"
			value: " Some multiline\ncomment "
			loc: Object {
				filename: "esprima/invalid-syntax/migrated_0070/input.js"
				end: Object {
					column: 10
					line: 2
				}
				start: Object {
					column: 0
					line: 1
				}
			}
		}
	]
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: Array [
					RAW_MARKUP {value: "Unknown start to an "}
					"statement expression"
				]
			}
			location: Object {
				filename: "esprima/invalid-syntax/migrated_0070/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Object {
					column: 0
					line: 1
				}
				start: Object {
					column: 0
					line: 3
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			leadingComments: Array ["0"]
			loc: Object {
				filename: "esprima/invalid-syntax/migrated_0070/input.js"
				end: Object {
					column: 1
					line: 3
				}
				start: Object {
					column: 0
					line: 3
				}
			}
			expression: JSReferenceIdentifier {
				name: "INVALID_PLACEHOLDER"
				leadingComments: undefined
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0070/input.js"
					end: Object {
						column: 1
						line: 3
					}
					start: Object {
						column: 0
						line: 3
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0070/input.js:3 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown start to an statement expression

    1 │ /* Some multiline
    2 │ comment */
    3 │ )

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
