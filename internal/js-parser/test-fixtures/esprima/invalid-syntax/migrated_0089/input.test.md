# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0089`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	filename: "esprima/invalid-syntax/migrated_0089/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/invalid-syntax/migrated_0089/input.js"
		end: Object {
			column: 0
			line: 2
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	directives: Array [
		JSDirective {
			value: "use strict"
			loc: Object {
				filename: "esprima/invalid-syntax/migrated_0089/input.js"
				end: Object {
					column: 13
					line: 1
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
					"arguments"
					RAW_MARKUP {value: " is a reserved word"}
				]
			}
			location: Object {
				filename: "esprima/invalid-syntax/migrated_0089/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Object {
					column: 23
					line: 1
				}
				start: Object {
					column: 14
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "esprima/invalid-syntax/migrated_0089/input.js"
				end: Object {
					column: 29
					line: 1
				}
				start: Object {
					column: 14
					line: 1
				}
			}
			expression: JSArrowFunctionExpression {
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0089/input.js"
					end: Object {
						column: 29
						line: 1
					}
					start: Object {
						column: 14
						line: 1
					}
				}
				body: JSNumericLiteral {
					value: 42
					format: undefined
					raw: "42"
					loc: Object {
						filename: "esprima/invalid-syntax/migrated_0089/input.js"
						end: Object {
							column: 29
							line: 1
						}
						start: Object {
							column: 27
							line: 1
						}
					}
				}
				head: JSFunctionHead {
					async: false
					hasHoistedVars: false
					rest: undefined
					thisType: undefined
					loc: Object {
						filename: "esprima/invalid-syntax/migrated_0089/input.js"
						end: Object {
							column: 26
							line: 1
						}
						start: Object {
							column: 14
							line: 1
						}
					}
					params: Array [
						JSBindingIdentifier {
							name: "arguments"
							loc: Object {
								filename: "esprima/invalid-syntax/migrated_0089/input.js"
								identifierName: "arguments"
								end: Object {
									column: 23
									line: 1
								}
								start: Object {
									column: 14
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

 esprima/invalid-syntax/migrated_0089/input.js:1:14 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ arguments is a reserved word

    "use strict"; arguments => 42
                  ^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
