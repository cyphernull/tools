# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > 18`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2017/async-functions/18/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2017/async-functions/18/input.js"
		end: Object {
			column: 44
			line: 1
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "es2017/async-functions/18/input.js"
				end: Object {
					column: 44
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			expression: JSCallExpression {
				loc: Object {
					filename: "es2017/async-functions/18/input.js"
					end: Object {
						column: 44
						line: 1
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				callee: JSReferenceIdentifier {
					name: "f"
					loc: Object {
						filename: "es2017/async-functions/18/input.js"
						identifierName: "f"
						end: Object {
							column: 1
							line: 1
						}
						start: Object {
							column: 0
							line: 1
						}
					}
				}
				arguments: Array [
					JSFunctionExpression {
						id: undefined
						loc: Object {
							filename: "es2017/async-functions/18/input.js"
							end: Object {
								column: 43
								line: 1
							}
							start: Object {
								column: 2
								line: 1
							}
						}
						head: JSFunctionHead {
							async: true
							generator: false
							hasHoistedVars: false
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: Object {
								filename: "es2017/async-functions/18/input.js"
								end: Object {
									column: 25
									line: 1
								}
								start: Object {
									column: 16
									line: 1
								}
							}
							params: Array [
								JSBindingIdentifier {
									name: "promise"
									loc: Object {
										filename: "es2017/async-functions/18/input.js"
										identifierName: "promise"
										end: Object {
											column: 24
											line: 1
										}
										start: Object {
											column: 17
											line: 1
										}
									}
									meta: JSPatternMeta {
										optional: undefined
										typeAnnotation: undefined
										loc: Object {
											filename: "es2017/async-functions/18/input.js"
											end: Object {
												column: 24
												line: 1
											}
											start: Object {
												column: 17
												line: 1
											}
										}
									}
								}
							]
						}
						body: JSBlockStatement {
							directives: Array []
							loc: Object {
								filename: "es2017/async-functions/18/input.js"
								end: Object {
									column: 43
									line: 1
								}
								start: Object {
									column: 26
									line: 1
								}
							}
							body: Array [
								JSExpressionStatement {
									loc: Object {
										filename: "es2017/async-functions/18/input.js"
										end: Object {
											column: 41
											line: 1
										}
										start: Object {
											column: 28
											line: 1
										}
									}
									expression: JSAwaitExpression {
										loc: Object {
											filename: "es2017/async-functions/18/input.js"
											end: Object {
												column: 41
												line: 1
											}
											start: Object {
												column: 28
												line: 1
											}
										}
										argument: JSReferenceIdentifier {
											name: "promise"
											loc: Object {
												filename: "es2017/async-functions/18/input.js"
												identifierName: "promise"
												end: Object {
													column: 41
													line: 1
												}
												start: Object {
													column: 34
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
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```
