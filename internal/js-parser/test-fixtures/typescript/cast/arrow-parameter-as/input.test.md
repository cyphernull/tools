# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > cast > arrow-parameter-as`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "typescript/cast/arrow-parameter-as/input.ts"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "typescript/cast/arrow-parameter-as/input.ts"
		end: Object {
			column: 15
			line: 1
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse"}]
			description: Object {
				advice: Array []
				category: "parse"
				categoryValue: "js"
				message: RAW_MARKUP {value: "Unexpected type cast in parameter position"}
			}
			location: Object {
				filename: "typescript/cast/arrow-parameter-as/input.ts"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Object {
					column: 7
					line: 1
				}
				start: Object {
					column: 1
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "typescript/cast/arrow-parameter-as/input.ts"
				end: Object {
					column: 15
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			expression: JSArrowFunctionExpression {
				loc: Object {
					filename: "typescript/cast/arrow-parameter-as/input.ts"
					end: Object {
						column: 14
						line: 1
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				body: JSBlockStatement {
					body: Array []
					directives: Array []
					loc: Object {
						filename: "typescript/cast/arrow-parameter-as/input.ts"
						end: Object {
							column: 14
							line: 1
						}
						start: Object {
							column: 12
							line: 1
						}
					}
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					rest: undefined
					returnType: undefined
					thisType: undefined
					loc: Object {
						filename: "typescript/cast/arrow-parameter-as/input.ts"
						end: Object {
							column: 11
							line: 1
						}
						start: Object {
							column: 0
							line: 1
						}
					}
					params: Array [
						JSBindingIdentifier {
							name: "INVALID_PLACEHOLDER"
							loc: Object {
								filename: "typescript/cast/arrow-parameter-as/input.ts"
								end: Object {
									column: 11
									line: 1
								}
								start: Object {
									column: 12
									line: 1
								}
							}
						}
					]
				}
			}
		}
	]
}
```

### `diagnostics`

```

 typescript/cast/arrow-parameter-as/input.ts:1:1 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unexpected type cast in parameter position

    (a as T) => {};
     ^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
