# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 494`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "core/uncategorised/494/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "core/uncategorised/494/input.js"
		end: Object {
			column: 64
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
				filename: "core/uncategorised/494/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Object {
					column: 53
					line: 1
				}
				start: Object {
					column: 49
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
					filename: "core/uncategorised/494/input.js"
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
				filename: "core/uncategorised/494/input.js"
				end: Object {
					column: 64
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
					filename: "core/uncategorised/494/input.js"
					end: Object {
						column: 16
						line: 1
					}
					start: Object {
						column: 14
						line: 1
					}
				}
			}
			body: JSBlockStatement {
				loc: Object {
					filename: "core/uncategorised/494/input.js"
					end: Object {
						column: 64
						line: 1
					}
					start: Object {
						column: 17
						line: 1
					}
				}
				directives: Array [
					JSDirective {
						value: "use strict"
						loc: Object {
							filename: "core/uncategorised/494/input.js"
							end: Object {
								column: 31
								line: 1
							}
							start: Object {
								column: 18
								line: 1
							}
						}
					}
				]
				body: Array [
					JSExpressionStatement {
						loc: Object {
							filename: "core/uncategorised/494/input.js"
							end: Object {
								column: 62
								line: 1
							}
							start: Object {
								column: 32
								line: 1
							}
						}
						expression: JSObjectExpression {
							loc: Object {
								filename: "core/uncategorised/494/input.js"
								end: Object {
									column: 60
									line: 1
								}
								start: Object {
									column: 33
									line: 1
								}
							}
							properties: Array [
								JSObjectProperty {
									key: JSStaticPropertyKey {
										value: JSIdentifier {
											name: "s"
											loc: Object {
												filename: "core/uncategorised/494/input.js"
												identifierName: "s"
												end: Object {
													column: 36
													line: 1
												}
												start: Object {
													column: 35
													line: 1
												}
											}
										}
										loc: Object {
											filename: "core/uncategorised/494/input.js"
											end: Object {
												column: 36
												line: 1
											}
											start: Object {
												column: 35
												line: 1
											}
										}
									}
									value: JSFunctionExpression {
										id: JSBindingIdentifier {
											name: "s"
											loc: Object {
												filename: "core/uncategorised/494/input.js"
												identifierName: "s"
												end: Object {
													column: 48
													line: 1
												}
												start: Object {
													column: 47
													line: 1
												}
											}
										}
										loc: Object {
											filename: "core/uncategorised/494/input.js"
											end: Object {
												column: 58
												line: 1
											}
											start: Object {
												column: 38
												line: 1
											}
										}
										body: JSBlockStatement {
											body: Array []
											directives: Array []
											loc: Object {
												filename: "core/uncategorised/494/input.js"
												end: Object {
													column: 58
													line: 1
												}
												start: Object {
													column: 55
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
												filename: "core/uncategorised/494/input.js"
												end: Object {
													column: 54
													line: 1
												}
												start: Object {
													column: 48
													line: 1
												}
											}
											params: Array [
												JSBindingIdentifier {
													name: "eval"
													loc: Object {
														filename: "core/uncategorised/494/input.js"
														identifierName: "eval"
														end: Object {
															column: 53
															line: 1
														}
														start: Object {
															column: 49
															line: 1
														}
													}
													meta: JSPatternMeta {
														optional: undefined
														typeAnnotation: undefined
														loc: Object {
															filename: "core/uncategorised/494/input.js"
															end: Object {
																column: 53
																line: 1
															}
															start: Object {
																column: 49
																line: 1
															}
														}
													}
												}
											]
										}
									}
									loc: Object {
										filename: "core/uncategorised/494/input.js"
										end: Object {
											column: 58
											line: 1
										}
										start: Object {
											column: 35
											line: 1
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
```

### `diagnostics`

```

 core/uncategorised/494/input.js:1:49 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ eval is a reserved word

    function hello() {'use strict'; ({ s: function s(eval) { } }); }
                                                     ^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
