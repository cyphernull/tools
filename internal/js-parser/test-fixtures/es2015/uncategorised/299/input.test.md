# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 299`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "es2015/uncategorised/299/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2015/uncategorised/299/input.js"
		end: Object {
			column: 32
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
				filename: "es2015/uncategorised/299/input.js"
				end: Object {
					column: 32
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			expression: JSCallExpression {
				loc: Object {
					filename: "es2015/uncategorised/299/input.js"
					end: Object {
						column: 32
						line: 1
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				callee: JSReferenceIdentifier {
					name: "doSmth"
					loc: Object {
						filename: "es2015/uncategorised/299/input.js"
						identifierName: "doSmth"
						end: Object {
							column: 6
							line: 1
						}
						start: Object {
							column: 0
							line: 1
						}
					}
				}
				arguments: Array [
					JSTemplateLiteral {
						loc: Object {
							filename: "es2015/uncategorised/299/input.js"
							end: Object {
								column: 31
								line: 1
							}
							start: Object {
								column: 7
								line: 1
							}
						}
						quasis: Array [
							JSTemplateElement {
								cooked: ""
								raw: ""
								tail: false
								loc: Object {
									filename: "es2015/uncategorised/299/input.js"
									end: Object {
										column: 8
										line: 1
									}
									start: Object {
										column: 8
										line: 1
									}
								}
							}
							JSTemplateElement {
								cooked: " + "
								raw: " + "
								tail: false
								loc: Object {
									filename: "es2015/uncategorised/299/input.js"
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
							JSTemplateElement {
								cooked: " = "
								raw: " = "
								tail: false
								loc: Object {
									filename: "es2015/uncategorised/299/input.js"
									end: Object {
										column: 22
										line: 1
									}
									start: Object {
										column: 19
										line: 1
									}
								}
							}
							JSTemplateElement {
								cooked: ""
								raw: ""
								tail: true
								loc: Object {
									filename: "es2015/uncategorised/299/input.js"
									end: Object {
										column: 30
										line: 1
									}
									start: Object {
										column: 30
										line: 1
									}
								}
							}
						]
						expressions: Array [
							JSReferenceIdentifier {
								name: "x"
								loc: Object {
									filename: "es2015/uncategorised/299/input.js"
									identifierName: "x"
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
							JSReferenceIdentifier {
								name: "y"
								loc: Object {
									filename: "es2015/uncategorised/299/input.js"
									identifierName: "y"
									end: Object {
										column: 18
										line: 1
									}
									start: Object {
										column: 17
										line: 1
									}
								}
							}
							JSBinaryExpression {
								operator: "+"
								loc: Object {
									filename: "es2015/uncategorised/299/input.js"
									end: Object {
										column: 29
										line: 1
									}
									start: Object {
										column: 24
										line: 1
									}
								}
								left: JSReferenceIdentifier {
									name: "x"
									loc: Object {
										filename: "es2015/uncategorised/299/input.js"
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
								right: JSReferenceIdentifier {
									name: "y"
									loc: Object {
										filename: "es2015/uncategorised/299/input.js"
										identifierName: "y"
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
✔ No known problems!

```
