# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 366`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "core/uncategorised/366/input.js"
	hasHoistedVars: true
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "core/uncategorised/366/input.js"
		end: Object {
			column: 18
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
				message: RAW_MARKUP {value: "Bad character escape sequence"}
			}
			location: Object {
				filename: "core/uncategorised/366/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Object {
					column: 17
					line: 1
				}
				start: Object {
					column: 17
					line: 1
				}
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "core/uncategorised/366/input.js"
				end: Object {
					column: 18
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			declaration: JSVariableDeclaration {
				kind: "var"
				loc: Object {
					filename: "core/uncategorised/366/input.js"
					end: Object {
						column: 18
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
								filename: "core/uncategorised/366/input.js"
								identifierName: "x"
								end: Object {
									column: 5
									line: 1
								}
								start: Object {
									column: 4
									line: 1
								}
							}
						}
						loc: Object {
							filename: "core/uncategorised/366/input.js"
							end: Object {
								column: 18
								line: 1
							}
							start: Object {
								column: 4
								line: 1
							}
						}
						init: JSRegExpLiteral {
							global: false
							insensitive: false
							multiline: false
							noDotNewline: false
							sticky: false
							unicode: false
							loc: Object {
								filename: "core/uncategorised/366/input.js"
								end: Object {
									column: 18
									line: 1
								}
								start: Object {
									column: 8
									line: 1
								}
							}
							expression: JSRegExpSubExpression {
								loc: Object {
									filename: "core/uncategorised/366/input.js"
									end: Object {
										column: 13
										line: 1
									}
									start: Object {
										column: 9
										line: 1
									}
								}
								body: Array [
									JSRegExpCharSet {
										invert: false
										loc: Object {
											filename: "core/uncategorised/366/input.js"
											end: Object {
												column: 13
												line: 1
											}
											start: Object {
												column: 9
												line: 1
											}
										}
										body: Array [
											JSRegExpCharSetRange {
												loc: Object {
													filename: "core/uncategorised/366/input.js"
													end: Object {
														column: 13
														line: 1
													}
													start: Object {
														column: 10
														line: 1
													}
												}
												end: JSRegExpCharacter {
													value: "z"
													loc: Object {
														filename: "core/uncategorised/366/input.js"
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
												start: JSRegExpCharacter {
													value: "a"
													loc: Object {
														filename: "core/uncategorised/366/input.js"
														end: Object {
															column: 11
															line: 1
														}
														start: Object {
															column: 10
															line: 1
														}
													}
												}
											}
										]
									}
								]
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

 core/uncategorised/366/input.js:1:17 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Bad character escape sequence

    var x = /[a-z]/\ux
                     ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
