# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2020 > import-meta > error-in-script`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2020/import-meta/error-in-script/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2020/import-meta/error-in-script/input.js"
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
				message: RAW_MARKUP {value: "import.meta may only appear in a module"}
			}
			location: Object {
				filename: "es2020/import-meta/error-in-script/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Object {
					column: 21
					line: 1
				}
				start: Object {
					column: 10
					line: 1
				}
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "es2020/import-meta/error-in-script/input.js"
				end: Object {
					column: 22
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			declaration: JSVariableDeclaration {
				kind: "const"
				loc: Object {
					filename: "es2020/import-meta/error-in-script/input.js"
					end: Object {
						column: 22
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
								filename: "es2020/import-meta/error-in-script/input.js"
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
							filename: "es2020/import-meta/error-in-script/input.js"
							end: Object {
								column: 21
								line: 1
							}
							start: Object {
								column: 6
								line: 1
							}
						}
						init: JSMetaProperty {
							loc: Object {
								filename: "es2020/import-meta/error-in-script/input.js"
								end: Object {
									column: 21
									line: 1
								}
								start: Object {
									column: 10
									line: 1
								}
							}
							meta: JSIdentifier {
								name: "import"
								loc: Object {
									filename: "es2020/import-meta/error-in-script/input.js"
									identifierName: "import"
									end: Object {
										column: 16
										line: 1
									}
									start: Object {
										column: 10
										line: 1
									}
								}
							}
							property: JSIdentifier {
								name: "meta"
								loc: Object {
									filename: "es2020/import-meta/error-in-script/input.js"
									identifierName: "meta"
									end: Object {
										column: 21
										line: 1
									}
									start: Object {
										column: 17
										line: 1
									}
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

 es2020/import-meta/error-in-script/input.js:1:10 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ import.meta may only appear in a module

    const x = import.meta;
              ^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
