# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > regression > use-strict-with-pre-semi`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "core/regression/use-strict-with-pre-semi/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "core/regression/use-strict-with-pre-semi/input.js"
		end: Object {
			column: 0
			line: 4
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	body: Array [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "a"
				loc: Object {
					filename: "core/regression/use-strict-with-pre-semi/input.js"
					identifierName: "a"
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
				filename: "core/regression/use-strict-with-pre-semi/input.js"
				end: Object {
					column: 1
					line: 3
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			body: JSBlockStatement {
				directives: Array []
				loc: Object {
					filename: "core/regression/use-strict-with-pre-semi/input.js"
					end: Object {
						column: 1
						line: 3
					}
					start: Object {
						column: 22
						line: 1
					}
				}
				body: Array [
					JSEmptyStatement {
						loc: Object {
							filename: "core/regression/use-strict-with-pre-semi/input.js"
							end: Object {
								column: 2
								line: 2
							}
							start: Object {
								column: 1
								line: 2
							}
						}
					}
					JSExpressionStatement {
						loc: Object {
							filename: "core/regression/use-strict-with-pre-semi/input.js"
							end: Object {
								column: 16
								line: 2
							}
							start: Object {
								column: 3
								line: 2
							}
						}
						expression: JSStringLiteral {
							value: "use strict"
							loc: Object {
								filename: "core/regression/use-strict-with-pre-semi/input.js"
								end: Object {
									column: 15
									line: 2
								}
								start: Object {
									column: 3
									line: 2
								}
							}
						}
					}
					JSWithStatement {
						loc: Object {
							filename: "core/regression/use-strict-with-pre-semi/input.js"
							end: Object {
								column: 29
								line: 2
							}
							start: Object {
								column: 17
								line: 2
							}
						}
						object: JSObjectExpression {
							properties: Array []
							loc: Object {
								filename: "core/regression/use-strict-with-pre-semi/input.js"
								end: Object {
									column: 25
									line: 2
								}
								start: Object {
									column: 23
									line: 2
								}
							}
						}
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: Object {
								filename: "core/regression/use-strict-with-pre-semi/input.js"
								end: Object {
									column: 29
									line: 2
								}
								start: Object {
									column: 27
									line: 2
								}
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
					filename: "core/regression/use-strict-with-pre-semi/input.js"
					end: Object {
						column: 21
						line: 1
					}
					start: Object {
						column: 11
						line: 1
					}
				}
				params: Array [
					JSBindingAssignmentPattern {
						loc: Object {
							filename: "core/regression/use-strict-with-pre-semi/input.js"
							end: Object {
								column: 20
								line: 1
							}
							start: Object {
								column: 12
								line: 1
							}
						}
						right: JSArrayExpression {
							elements: Array []
							loc: Object {
								filename: "core/regression/use-strict-with-pre-semi/input.js"
								end: Object {
									column: 20
									line: 1
								}
								start: Object {
									column: 18
									line: 1
								}
							}
						}
						left: JSBindingArrayPattern {
							rest: undefined
							loc: Object {
								filename: "core/regression/use-strict-with-pre-semi/input.js"
								end: Object {
									column: 15
									line: 1
								}
								start: Object {
									column: 12
									line: 1
								}
							}
							meta: JSPatternMeta {
								optional: undefined
								typeAnnotation: undefined
								loc: Object {
									filename: "core/regression/use-strict-with-pre-semi/input.js"
									end: Object {
										column: 15
										line: 1
									}
									start: Object {
										column: 12
										line: 1
									}
								}
							}
							elements: Array [
								JSBindingIdentifier {
									name: "a"
									loc: Object {
										filename: "core/regression/use-strict-with-pre-semi/input.js"
										identifierName: "a"
										end: Object {
											column: 14
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
											filename: "core/regression/use-strict-with-pre-semi/input.js"
											end: Object {
												column: 14
												line: 1
											}
											start: Object {
												column: 13
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
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
