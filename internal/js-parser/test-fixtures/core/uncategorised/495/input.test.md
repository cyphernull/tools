# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 495`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "core/uncategorised/495/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "core/uncategorised/495/input.js"
		end: Object {
			column: 36
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
				message: Array [
					"eval"
					RAW_MARKUP {value: " is a reserved word"}
				]
			}
			location: Object {
				filename: "core/uncategorised/495/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Object {
					column: 19
					line: 1
				}
				start: Object {
					column: 15
					line: 1
				}
			}
		}
	]
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "hello"
				loc: Object {
					filename: "core/uncategorised/495/input.js"
					identifierName: "hello"
					end: Object {
						column: 14
						line: 1
					}
					start: Object {
						column: 9
						line: 1
					}
				}
			}
			loc: Object {
				filename: "core/uncategorised/495/input.js"
				end: Object {
					column: 36
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			body: JSBlockStatement {
				body: Array []
				loc: Object {
					filename: "core/uncategorised/495/input.js"
					end: Object {
						column: 36
						line: 1
					}
					start: Object {
						column: 21
						line: 1
					}
				}
				directives: Array [
					JSDirective {
						value: "use strict"
						loc: Object {
							filename: "core/uncategorised/495/input.js"
							end: Object {
								column: 35
								line: 1
							}
							start: Object {
								column: 22
								line: 1
							}
						}
					}
				]
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				rest: undefined
				returnType: undefined
				thisType: undefined
				typeParameters: undefined
				loc: Object {
					filename: "core/uncategorised/495/input.js"
					end: Object {
						column: 20
						line: 1
					}
					start: Object {
						column: 14
						line: 1
					}
				}
				params: Array [
					JSBindingIdentifier {
						name: "eval"
						loc: Object {
							filename: "core/uncategorised/495/input.js"
							identifierName: "eval"
							end: Object {
								column: 19
								line: 1
							}
							start: Object {
								column: 15
								line: 1
							}
						}
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: Object {
								filename: "core/uncategorised/495/input.js"
								end: Object {
									column: 19
									line: 1
								}
								start: Object {
									column: 15
									line: 1
								}
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

 core/uncategorised/495/input.js:1:15 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ eval is a reserved word

    function hello(eval) {'use strict';}
                   ^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
