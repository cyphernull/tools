# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 375`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2015/uncategorised/375/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "es2015/uncategorised/375/input.js"
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
				message: Array [
					"enum"
					RAW_MARKUP {value: " is a reserved word"}
				]
			}
			location: Object {
				filename: "es2015/uncategorised/375/input.js"
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
				name: "foo"
				loc: Object {
					filename: "es2015/uncategorised/375/input.js"
					identifierName: "foo"
					end: Object {
						column: 12
						line: 1
					}
					start: Object {
						column: 9
						line: 1
					}
				}
			}
			loc: Object {
				filename: "es2015/uncategorised/375/input.js"
				end: Object {
					column: 25
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
					filename: "es2015/uncategorised/375/input.js"
					end: Object {
						column: 25
						line: 1
					}
					start: Object {
						column: 23
						line: 1
					}
				}
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
					filename: "es2015/uncategorised/375/input.js"
					end: Object {
						column: 22
						line: 1
					}
					start: Object {
						column: 12
						line: 1
					}
				}
				params: Array [
					JSBindingObjectPattern {
						rest: undefined
						loc: Object {
							filename: "es2015/uncategorised/375/input.js"
							end: Object {
								column: 21
								line: 1
							}
							start: Object {
								column: 13
								line: 1
							}
						}
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: Object {
								filename: "es2015/uncategorised/375/input.js"
								end: Object {
									column: 21
									line: 1
								}
								start: Object {
									column: 13
									line: 1
								}
							}
						}
						properties: Array [
							JSBindingObjectPatternProperty {
								key: JSStaticPropertyKey {
									value: JSIdentifier {
										name: "enum"
										loc: Object {
											filename: "es2015/uncategorised/375/input.js"
											identifierName: "enum"
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
									loc: Object {
										filename: "es2015/uncategorised/375/input.js"
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
								value: JSBindingIdentifier {
									name: "enum"
									loc: Object {
										filename: "es2015/uncategorised/375/input.js"
										identifierName: "enum"
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
								loc: Object {
									filename: "es2015/uncategorised/375/input.js"
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
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 es2015/uncategorised/375/input.js:1:15 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ enum is a reserved word

    function foo({ enum }) {}
                   ^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
