# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0256`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "esprima/invalid-syntax/migrated_0256/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/invalid-syntax/migrated_0256/input.js"
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
			location: Object {
				filename: "esprima/invalid-syntax/migrated_0256/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Object {
					column: 13
					line: 1
				}
				start: Object {
					column: 13
					line: 1
				}
			}
			description: Object {
				category: "parse"
				categoryValue: "js"
				message: Array [
					RAW_MARKUP {value: "Unclosed "}
					"block"
				]
				advice: Array [
					log {
						category: "info"
						text: Array [
							RAW_MARKUP {value: "We expected to find the closing character <emphasis>"}
							"}"
							RAW_MARKUP {value: "</emphasis> here"}
						]
					}
					frame {
						location: Object {
							filename: "esprima/invalid-syntax/migrated_0256/input.js"
							end: Object {
								column: 0
								line: 2
							}
							start: Object {
								column: 0
								line: 2
							}
						}
					}
				]
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "t"
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0256/input.js"
					identifierName: "t"
					end: Object {
						column: 10
						line: 1
					}
					start: Object {
						column: 9
						line: 1
					}
				}
			}
			loc: Object {
				filename: "esprima/invalid-syntax/migrated_0256/input.js"
				end: Object {
					column: 19
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: Array []
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0256/input.js"
					end: Object {
						column: 12
						line: 1
					}
					start: Object {
						column: 10
						line: 1
					}
				}
			}
			body: JSBlockStatement {
				directives: Array []
				loc: Object {
					filename: "esprima/invalid-syntax/migrated_0256/input.js"
					end: Object {
						column: 19
						line: 1
					}
					start: Object {
						column: 13
						line: 1
					}
				}
				body: Array [
					JSEmptyStatement {
						loc: Object {
							filename: "esprima/invalid-syntax/migrated_0256/input.js"
							end: Object {
								column: 16
								line: 1
							}
							start: Object {
								column: 15
								line: 1
							}
						}
					}
					JSEmptyStatement {
						loc: Object {
							filename: "esprima/invalid-syntax/migrated_0256/input.js"
							end: Object {
								column: 19
								line: 1
							}
							start: Object {
								column: 18
								line: 1
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0256/input.js:1:13 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unclosed block

  ℹ We expected to find the closing character } here

    function t() { ;  ;

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
