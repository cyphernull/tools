# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0170`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "esprima/invalid-syntax/migrated_0170/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/invalid-syntax/migrated_0170/input.js"
		end: Object {
			column: 0
			line: 2
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
				message: RAW_MARKUP {value: "Expected an identifier"}
			}
			location: Object {
				filename: "esprima/invalid-syntax/migrated_0170/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Object {
					column: 14
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
		JSTryStatement {
			finalizer: undefined
			loc: Object {
				filename: "esprima/invalid-syntax/migrated_0170/input.js"
				end: Object {
					column: 18
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			block: JSBlockStatement {
				body: Array []
				directives: Array []
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0170/input.js"
					end: Object {
						column: 7
						line: 1
					}
					start: Object {
						column: 4
						line: 1
					}
				}
			}
			handler: JSCatchClause {
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0170/input.js"
					end: Object {
						column: 18
						line: 1
					}
					start: Object {
						column: 8
						line: 1
					}
				}
				body: JSBlockStatement {
					body: Array []
					directives: Array []
					loc: Object {
						filename: "esprima/invalid-syntax/migrated_0170/input.js"
						end: Object {
							column: 18
							line: 1
						}
						start: Object {
							column: 16
							line: 1
						}
					}
				}
				param: JSBindingIdentifier {
					name: ""
					loc: Object {
						filename: "esprima/invalid-syntax/migrated_0170/input.js"
						identifierName: ""
						end: Object {
							column: 15
							line: 1
						}
						start: Object {
							column: 14
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

 esprima/invalid-syntax/migrated_0170/input.js:1:14 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected an identifier

    try { } catch() {}
                  ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
