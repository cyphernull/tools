# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > types > literal-bigint`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "typescript/types/literal-bigint/input.ts"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "typescript/types/literal-bigint/input.ts"
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
				message: RAW_MARKUP {value: "Unknown TS non array type start"}
			}
			location: Object {
				filename: "typescript/types/literal-bigint/input.ts"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Object {
					column: 6
					line: 1
				}
				start: Object {
					column: 7
					line: 1
				}
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "typescript/types/literal-bigint/input.ts"
				end: Object {
					column: 10
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			declaration: JSVariableDeclaration {
				kind: "let"
				loc: Object {
					filename: "typescript/types/literal-bigint/input.ts"
					end: Object {
						column: 10
						line: 1
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "x"
							loc: Object {
								filename: "typescript/types/literal-bigint/input.ts"
								end: Object {
									column: 9
									line: 1
								}
								start: Object {
									column: 4
									line: 1
								}
							}
							meta: JSPatternMeta {
								definite: undefined
								loc: Object {
									filename: "typescript/types/literal-bigint/input.ts"
									end: Object {
										column: 9
										line: 1
									}
									start: Object {
										column: 4
										line: 1
									}
								}
								typeAnnotation: TSTypeReference {
									loc: Object {
										filename: "typescript/types/literal-bigint/input.ts"
										end: Object {
											column: 9
											line: 1
										}
										start: Object {
											column: 9
											line: 1
										}
									}
									typeName: JSReferenceIdentifier {
										name: "INVALID_PLACEHOLDER"
										loc: Object {
											filename: "typescript/types/literal-bigint/input.ts"
											end: Object {
												column: 9
												line: 1
											}
											start: Object {
												column: 9
												line: 1
											}
										}
									}
								}
							}
						}
						init: undefined
						loc: Object {
							filename: "typescript/types/literal-bigint/input.ts"
							end: Object {
								column: 9
								line: 1
							}
							start: Object {
								column: 4
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

 typescript/types/literal-bigint/input.ts:1:7 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unknown TS non array type start

    let x: 0n;
           ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
