# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `jsx > basic > 16`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "jsx/basic/16/input.jsx"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array ["jsx"]
	loc: Object {
		filename: "jsx/basic/16/input.jsx"
		end: Object {
			column: 14
			line: 1
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "jsx/basic/16/input.jsx"
				end: Object {
					column: 14
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			expression: JSBinaryExpression {
				operator: "<"
				loc: Object {
					filename: "jsx/basic/16/input.jsx"
					end: Object {
						column: 13
						line: 1
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				right: JSReferenceIdentifier {
					name: "x"
					loc: Object {
						filename: "jsx/basic/16/input.jsx"
						identifierName: "x"
						end: Object {
							column: 13
							line: 1
						}
						start: Object {
							column: 12
							line: 1
						}
					}
				}
				left: JSXElement {
					name: JSXIdentifier {
						name: "div"
						loc: Object {
							filename: "jsx/basic/16/input.jsx"
							end: Object {
								column: 5
								line: 1
							}
							start: Object {
								column: 2
								line: 1
							}
						}
					}
					attributes: Array []
					children: Array []
					selfClosing: true
					typeArguments: undefined
					loc: Object {
						filename: "jsx/basic/16/input.jsx"
						end: Object {
							column: 8
							line: 1
						}
						start: Object {
							column: 1
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
