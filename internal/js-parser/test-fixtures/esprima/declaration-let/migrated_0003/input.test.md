# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > declaration-let > migrated_0003`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "esprima/declaration-let/migrated_0003/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/declaration-let/migrated_0003/input.js"
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
		JSBlockStatement {
			directives: Array []
			loc: Object {
				filename: "esprima/declaration-let/migrated_0003/input.js"
				end: Object {
					column: 31
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			body: Array [
				JSVariableDeclarationStatement {
					loc: Object {
						filename: "esprima/declaration-let/migrated_0003/input.js"
						end: Object {
							column: 29
							line: 1
						}
						start: Object {
							column: 2
							line: 1
						}
					}
					declaration: JSVariableDeclaration {
						kind: "let"
						loc: Object {
							filename: "esprima/declaration-let/migrated_0003/input.js"
							end: Object {
								column: 29
								line: 1
							}
							start: Object {
								column: 2
								line: 1
							}
						}
						declarations: Array [
							JSVariableDeclarator {
								id: JSBindingIdentifier {
									name: "x"
									loc: Object {
										filename: "esprima/declaration-let/migrated_0003/input.js"
										identifierName: "x"
										end: Object {
											column: 7
											line: 1
										}
										start: Object {
											column: 6
											line: 1
										}
									}
								}
								loc: Object {
									filename: "esprima/declaration-let/migrated_0003/input.js"
									end: Object {
										column: 12
										line: 1
									}
									start: Object {
										column: 6
										line: 1
									}
								}
								init: JSNumericLiteral {
									value: 14
									format: undefined
									raw: "14"
									loc: Object {
										filename: "esprima/declaration-let/migrated_0003/input.js"
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
							}
							JSVariableDeclarator {
								id: JSBindingIdentifier {
									name: "y"
									loc: Object {
										filename: "esprima/declaration-let/migrated_0003/input.js"
										identifierName: "y"
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
								loc: Object {
									filename: "esprima/declaration-let/migrated_0003/input.js"
									end: Object {
										column: 19
										line: 1
									}
									start: Object {
										column: 14
										line: 1
									}
								}
								init: JSNumericLiteral {
									value: 3
									format: undefined
									raw: "3"
									loc: Object {
										filename: "esprima/declaration-let/migrated_0003/input.js"
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
							}
							JSVariableDeclarator {
								id: JSBindingIdentifier {
									name: "z"
									loc: Object {
										filename: "esprima/declaration-let/migrated_0003/input.js"
										identifierName: "z"
										end: Object {
											column: 22
											line: 1
										}
										start: Object {
											column: 21
											line: 1
										}
									}
								}
								loc: Object {
									filename: "esprima/declaration-let/migrated_0003/input.js"
									end: Object {
										column: 29
										line: 1
									}
									start: Object {
										column: 21
										line: 1
									}
								}
								init: JSNumericLiteral {
									value: 1_977
									format: undefined
									raw: "1977"
									loc: Object {
										filename: "esprima/declaration-let/migrated_0003/input.js"
										end: Object {
											column: 29
											line: 1
										}
										start: Object {
											column: 25
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
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
