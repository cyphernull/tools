# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > let > let-as-identifier-3`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2015/let/let-as-identifier-3/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2015/let/let-as-identifier-3/input.js"
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
				filename: "es2015/let/let-as-identifier-3/input.js"
				end: Object {
					column: 18
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			expression: JSBinaryExpression {
				operator: "instanceof"
				loc: Object {
					filename: "es2015/let/let-as-identifier-3/input.js"
					end: Object {
						column: 18
						line: 1
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				left: JSReferenceIdentifier {
					name: "let"
					loc: Object {
						filename: "es2015/let/let-as-identifier-3/input.js"
						identifierName: "let"
						end: Object {
							column: 3
							line: 1
						}
						start: Object {
							column: 0
							line: 1
						}
					}
				}
				right: JSReferenceIdentifier {
					name: "Foo"
					loc: Object {
						filename: "es2015/let/let-as-identifier-3/input.js"
						identifierName: "Foo"
						end: Object {
							column: 18
							line: 1
						}
						start: Object {
							column: 15
							line: 1
						}
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
