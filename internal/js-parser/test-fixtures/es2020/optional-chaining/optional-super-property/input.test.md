# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2020 > optional-chaining > optional-super-property`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2020/optional-chaining/optional-super-property/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2020/optional-chaining/optional-super-property/input.js"
		end: Object {
			column: 1
			line: 5
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
				message: RAW_MARKUP {value: "Invalid super suffix operator"}
			}
			location: Object {
				filename: "es2020/optional-chaining/optional-super-property/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Object {
					column: 20
					line: 3
				}
				start: Object {
					column: 20
					line: 3
				}
			}
		}
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "es2020/optional-chaining/optional-super-property/input.js"
				end: Object {
					column: 1
					line: 5
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			declaration: JSVariableDeclaration {
				kind: "const"
				loc: Object {
					filename: "es2020/optional-chaining/optional-super-property/input.js"
					end: Object {
						column: 1
						line: 5
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				declarations: Array [
					JSVariableDeclarator {
						id: JSBindingIdentifier {
							name: "a"
							loc: Object {
								filename: "es2020/optional-chaining/optional-super-property/input.js"
								identifierName: "a"
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
							filename: "es2020/optional-chaining/optional-super-property/input.js"
							end: Object {
								column: 1
								line: 5
							}
							start: Object {
								column: 6
								line: 1
							}
						}
						init: JSObjectExpression {
							loc: Object {
								filename: "es2020/optional-chaining/optional-super-property/input.js"
								end: Object {
									column: 1
									line: 5
								}
								start: Object {
									column: 10
									line: 1
								}
							}
							properties: Array [
								JSObjectMethod {
									kind: "method"
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "b"
											loc: Object {
												filename: "es2020/optional-chaining/optional-super-property/input.js"
												identifierName: "b"
												end: Object {
													column: 5
													line: 2
												}
												start: Object {
													column: 4
													line: 2
												}
											}
										}
										loc: Object {
											filename: "es2020/optional-chaining/optional-super-property/input.js"
											end: Object {
												column: 5
												line: 2
											}
											start: Object {
												column: 4
												line: 2
											}
										}
									}
									loc: Object {
										filename: "es2020/optional-chaining/optional-super-property/input.js"
										end: Object {
											column: 5
											line: 4
										}
										start: Object {
											column: 4
											line: 2
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
											filename: "es2020/optional-chaining/optional-super-property/input.js"
											end: Object {
												column: 7
												line: 2
											}
											start: Object {
												column: 5
												line: 2
											}
										}
									}
									body: JSBlockStatement {
										directives: Array []
										loc: Object {
											filename: "es2020/optional-chaining/optional-super-property/input.js"
											end: Object {
												column: 5
												line: 4
											}
											start: Object {
												column: 7
												line: 2
											}
										}
										body: Array [
											JSReturnStatement {
												loc: Object {
													filename: "es2020/optional-chaining/optional-super-property/input.js"
													end: Object {
														column: 24
														line: 3
													}
													start: Object {
														column: 8
														line: 3
													}
												}
												argument: JSMemberExpression {
													loc: Object {
														filename: "es2020/optional-chaining/optional-super-property/input.js"
														end: Object {
															column: 23
															line: 3
														}
														start: Object {
															column: 15
															line: 3
														}
													}
													object: JSSuper {
														loc: Object {
															filename: "es2020/optional-chaining/optional-super-property/input.js"
															end: Object {
																column: 20
																line: 3
															}
															start: Object {
																column: 15
																line: 3
															}
														}
													}
													property: JSStaticMemberProperty {
														value: JSIdentifier {
															name: "c"
															loc: Object {
																filename: "es2020/optional-chaining/optional-super-property/input.js"
																identifierName: "c"
																end: Object {
																	column: 23
																	line: 3
																}
																start: Object {
																	column: 22
																	line: 3
																}
															}
														}
														optional: true
														loc: Object {
															filename: "es2020/optional-chaining/optional-super-property/input.js"
															identifierName: "c"
															end: Object {
																column: 23
																line: 3
															}
															start: Object {
																column: 22
																line: 3
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
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 es2020/optional-chaining/optional-super-property/input.js:3:20 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Invalid super suffix operator

    1 │ const a = {
    2 │     b(){
  > 3 │         return super?.c;
      │                     ^
    4 │     }
    5 │ }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
