# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2018 > object-rest-spread > 17`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: true
	directives: Array []
	filename: "es2018/object-rest-spread/17/input.js"
	hasHoistedVars: true
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2018/object-rest-spread/17/input.js"
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
				filename: "es2018/object-rest-spread/17/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
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
	]
	body: Array [
		JSVariableDeclarationStatement {
			loc: Object {
				filename: "es2018/object-rest-spread/17/input.js"
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
					filename: "es2018/object-rest-spread/17/input.js"
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
						id: JSBindingObjectPattern {
							loc: Object {
								filename: "es2018/object-rest-spread/17/input.js"
								end: Object {
									column: 18
									line: 1
								}
								start: Object {
									column: 4
									line: 1
								}
							}
							rest: JSBindingIdentifier {
								name: ""
								loc: Object {
									filename: "es2018/object-rest-spread/17/input.js"
									identifierName: ""
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
							properties: Array [
								JSBindingObjectPatternProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "x"
											loc: Object {
												filename: "es2018/object-rest-spread/17/input.js"
												identifierName: "x"
												end: Object {
													column: 12
													line: 1
												}
												start: Object {
													column: 11
													line: 1
												}
											}
										}
										loc: Object {
											filename: "es2018/object-rest-spread/17/input.js"
											end: Object {
												column: 12
												line: 1
											}
											start: Object {
												column: 11
												line: 1
											}
										}
									}
									value: JSBindingAssignmentPattern {
										loc: Object {
											filename: "es2018/object-rest-spread/17/input.js"
											end: Object {
												column: 16
												line: 1
											}
											start: Object {
												column: 11
												line: 1
											}
										}
										left: JSBindingIdentifier {
											name: "x"
											loc: Object {
												filename: "es2018/object-rest-spread/17/input.js"
												identifierName: "x"
												end: Object {
													column: 12
													line: 1
												}
												start: Object {
													column: 11
													line: 1
												}
											}
										}
										right: JSNumericLiteral {
											value: 5
											format: undefined
											raw: "5"
											loc: Object {
												filename: "es2018/object-rest-spread/17/input.js"
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
									}
									loc: Object {
										filename: "es2018/object-rest-spread/17/input.js"
										end: Object {
											column: 16
											line: 1
										}
										start: Object {
											column: 11
											line: 1
										}
									}
								}
							]
						}
						init: undefined
						loc: Object {
							filename: "es2018/object-rest-spread/17/input.js"
							end: Object {
								column: 18
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
		JSExpressionStatement {
			loc: Object {
				filename: "es2018/object-rest-spread/17/input.js"
				end: Object {
					column: 31
					line: 1
				}
				start: Object {
					column: 19
					line: 1
				}
			}
			expression: JSAssignmentExpression {
				operator: "="
				loc: Object {
					filename: "es2018/object-rest-spread/17/input.js"
					end: Object {
						column: 30
						line: 1
					}
					start: Object {
						column: 19
						line: 1
					}
				}
				left: JSAssignmentIdentifier {
					name: "INVALID_PLACEHOLDER"
					loc: Object {
						filename: "es2018/object-rest-spread/17/input.js"
						end: Object {
							column: 20
							line: 1
						}
						start: Object {
							column: 19
							line: 1
						}
					}
				}
				right: JSObjectExpression {
					loc: Object {
						filename: "es2018/object-rest-spread/17/input.js"
						end: Object {
							column: 30
							line: 1
						}
						start: Object {
							column: 23
							line: 1
						}
					}
					properties: Array [
						JSObjectProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "x"
									loc: Object {
										filename: "es2018/object-rest-spread/17/input.js"
										identifierName: "x"
										end: Object {
											column: 25
											line: 1
										}
										start: Object {
											column: 24
											line: 1
										}
									}
								}
								loc: Object {
									filename: "es2018/object-rest-spread/17/input.js"
									end: Object {
										column: 25
										line: 1
									}
									start: Object {
										column: 24
										line: 1
									}
								}
							}
							value: JSNumericLiteral {
								value: 1
								format: undefined
								raw: "1"
								loc: Object {
									filename: "es2018/object-rest-spread/17/input.js"
									end: Object {
										column: 29
										line: 1
									}
									start: Object {
										column: 28
										line: 1
									}
								}
							}
							loc: Object {
								filename: "es2018/object-rest-spread/17/input.js"
								end: Object {
									column: 29
									line: 1
								}
								start: Object {
									column: 24
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

 es2018/object-rest-spread/17/input.js:1:9 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected an identifier

    var { ...{ x = 5 } } = {x : 1};
             ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
