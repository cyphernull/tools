# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-array-pattern > empty-pattern-fn`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "esprima/es2015-array-pattern/empty-pattern-fn/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/es2015-array-pattern/empty-pattern-fn/input.js"
		end: Object {
			column: 0
			line: 2
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
					filename: "esprima/es2015-array-pattern/empty-pattern-fn/input.js"
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
				filename: "esprima/es2015-array-pattern/empty-pattern-fn/input.js"
				end: Object {
					column: 17
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
					filename: "esprima/es2015-array-pattern/empty-pattern-fn/input.js"
					end: Object {
						column: 17
						line: 1
					}
					start: Object {
						column: 15
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
					filename: "esprima/es2015-array-pattern/empty-pattern-fn/input.js"
					end: Object {
						column: 14
						line: 1
					}
					start: Object {
						column: 10
						line: 1
					}
				}
				params: Array [
					JSBindingArrayPattern {
						elements: Array []
						rest: undefined
						loc: Object {
							filename: "esprima/es2015-array-pattern/empty-pattern-fn/input.js"
							end: Object {
								column: 13
								line: 1
							}
							start: Object {
								column: 11
								line: 1
							}
						}
						meta: JSPatternMeta {
							optional: undefined
							typeAnnotation: undefined
							loc: Object {
								filename: "esprima/es2015-array-pattern/empty-pattern-fn/input.js"
								end: Object {
									column: 13
									line: 1
								}
								start: Object {
									column: 11
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
✔ No known problems!

```
