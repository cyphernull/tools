# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > class > invalid-escape-get`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "es2015/class/invalid-escape-get/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "es2015/class/invalid-escape-get/input.js"
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
					"get"
					RAW_MARKUP {value: " can't contain a unicode escape"}
				]
			}
			location: Object {
				filename: "es2015/class/invalid-escape-get/input.js"
				integrity: undefined
				language: "js"
				sourceText: undefined
				end: Object {
					column: 12
					line: 1
				}
				start: Object {
					column: 12
					line: 1
				}
			}
		}
	]
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "X"
				loc: Object {
					filename: "es2015/class/invalid-escape-get/input.js"
					identifierName: "X"
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
				filename: "es2015/class/invalid-escape-get/input.js"
				end: Object {
					column: 27
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "es2015/class/invalid-escape-get/input.js"
					end: Object {
						column: 27
						line: 1
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				body: Array [
					JSClassMethod {
						kind: "get"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "x"
								loc: Object {
									filename: "es2015/class/invalid-escape-get/input.js"
									identifierName: "x"
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
							loc: Object {
								filename: "es2015/class/invalid-escape-get/input.js"
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
						loc: Object {
							filename: "es2015/class/invalid-escape-get/input.js"
							end: Object {
								column: 25
								line: 1
							}
							start: Object {
								column: 10
								line: 1
							}
						}
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: Object {
								filename: "es2015/class/invalid-escape-get/input.js"
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
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: Object {
								filename: "es2015/class/invalid-escape-get/input.js"
								end: Object {
									column: 22
									line: 1
								}
								start: Object {
									column: 20
									line: 1
								}
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 10
								line: 1
							}
							loc: Object {
								filename: "es2015/class/invalid-escape-get/input.js"
								end: Object {
									column: 20
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
		}
	]
}
```

### `diagnostics`

```

 es2015/class/invalid-escape-get/input.js:1:12 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ get can't contain a unicode escape

    class X { ge\u0074 x() {} }
                ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
