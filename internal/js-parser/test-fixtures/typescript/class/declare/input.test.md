# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > class > declare`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "typescript/class/declare/input.ts"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "typescript/class/declare/input.ts"
		end: Object {
			column: 0
			line: 8
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "C"
				loc: Object {
					filename: "typescript/class/declare/input.ts"
					identifierName: "C"
					end: Object {
						column: 15
						line: 1
					}
					start: Object {
						column: 14
						line: 1
					}
				}
			}
			declare: true
			loc: Object {
				filename: "typescript/class/declare/input.ts"
				end: Object {
					column: 1
					line: 7
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
					filename: "typescript/class/declare/input.ts"
					end: Object {
						column: 1
						line: 7
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				body: Array [
					TSIndexSignature {
						key: JSBindingIdentifier {
							name: "x"
							loc: Object {
								filename: "typescript/class/declare/input.ts"
								end: Object {
									column: 14
									line: 2
								}
								start: Object {
									column: 5
									line: 2
								}
							}
							meta: JSPatternMeta {
								loc: Object {
									filename: "typescript/class/declare/input.ts"
									end: Object {
										column: 14
										line: 2
									}
									start: Object {
										column: 5
										line: 2
									}
								}
								typeAnnotation: TSStringKeywordTypeAnnotation {
									loc: Object {
										filename: "typescript/class/declare/input.ts"
										end: Object {
											column: 14
											line: 2
										}
										start: Object {
											column: 8
											line: 2
										}
									}
								}
							}
						}
						readonly: false
						loc: Object {
							filename: "typescript/class/declare/input.ts"
							end: Object {
								column: 21
								line: 2
							}
							start: Object {
								column: 4
								line: 2
							}
						}
						typeAnnotation: TSAnyKeywordTypeAnnotation {
							loc: Object {
								filename: "typescript/class/declare/input.ts"
								end: Object {
									column: 20
									line: 2
								}
								start: Object {
									column: 17
									line: 2
								}
							}
						}
					}
					JSClassProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "x"
								loc: Object {
									filename: "typescript/class/declare/input.ts"
									identifierName: "x"
									end: Object {
										column: 5
										line: 3
									}
									start: Object {
										column: 4
										line: 3
									}
								}
							}
							loc: Object {
								filename: "typescript/class/declare/input.ts"
								end: Object {
									column: 5
									line: 3
								}
								start: Object {
									column: 4
									line: 3
								}
							}
						}
						value: undefined
						definite: undefined
						typeAnnotation: undefined
						loc: Object {
							filename: "typescript/class/declare/input.ts"
							end: Object {
								column: 6
								line: 3
							}
							start: Object {
								column: 4
								line: 3
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
								column: 4
								line: 3
							}
							loc: Object {
								filename: "typescript/class/declare/input.ts"
								end: Object {
									column: 5
									line: 3
								}
								start: Object {
									column: 4
									line: 3
								}
							}
						}
					}
					JSClassProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "x"
								loc: Object {
									filename: "typescript/class/declare/input.ts"
									identifierName: "x"
									end: Object {
										column: 5
										line: 4
									}
									start: Object {
										column: 4
										line: 4
									}
								}
							}
							loc: Object {
								filename: "typescript/class/declare/input.ts"
								end: Object {
									column: 5
									line: 4
								}
								start: Object {
									column: 4
									line: 4
								}
							}
						}
						value: undefined
						definite: undefined
						loc: Object {
							filename: "typescript/class/declare/input.ts"
							end: Object {
								column: 14
								line: 4
							}
							start: Object {
								column: 4
								line: 4
							}
						}
						typeAnnotation: TSNumberKeywordTypeAnnotation {
							loc: Object {
								filename: "typescript/class/declare/input.ts"
								end: Object {
									column: 13
									line: 4
								}
								start: Object {
									column: 7
									line: 4
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
								column: 4
								line: 4
							}
							loc: Object {
								filename: "typescript/class/declare/input.ts"
								end: Object {
									column: 5
									line: 4
								}
								start: Object {
									column: 4
									line: 4
								}
							}
						}
					}
					TSDeclareMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "f"
								loc: Object {
									filename: "typescript/class/declare/input.ts"
									identifierName: "f"
									end: Object {
										column: 5
										line: 5
									}
									start: Object {
										column: 4
										line: 5
									}
								}
							}
							loc: Object {
								filename: "typescript/class/declare/input.ts"
								end: Object {
									column: 5
									line: 5
								}
								start: Object {
									column: 4
									line: 5
								}
							}
						}
						body: undefined
						loc: Object {
							filename: "typescript/class/declare/input.ts"
							end: Object {
								column: 8
								line: 5
							}
							start: Object {
								column: 4
								line: 5
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
								filename: "typescript/class/declare/input.ts"
								end: Object {
									column: 7
									line: 5
								}
								start: Object {
									column: 5
									line: 5
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
								column: 4
								line: 5
							}
							loc: Object {
								filename: "typescript/class/declare/input.ts"
								end: Object {
									column: 5
									line: 5
								}
								start: Object {
									column: 4
									line: 5
								}
							}
						}
					}
					TSDeclareMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "f"
								loc: Object {
									filename: "typescript/class/declare/input.ts"
									identifierName: "f"
									end: Object {
										column: 5
										line: 6
									}
									start: Object {
										column: 4
										line: 6
									}
								}
							}
							loc: Object {
								filename: "typescript/class/declare/input.ts"
								end: Object {
									column: 5
									line: 6
								}
								start: Object {
									column: 4
									line: 6
								}
							}
						}
						body: undefined
						loc: Object {
							filename: "typescript/class/declare/input.ts"
							end: Object {
								column: 14
								line: 6
							}
							start: Object {
								column: 4
								line: 6
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
								column: 4
								line: 6
							}
							loc: Object {
								filename: "typescript/class/declare/input.ts"
								end: Object {
									column: 5
									line: 6
								}
								start: Object {
									column: 4
									line: 6
								}
							}
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: Array []
							rest: undefined
							thisType: undefined
							typeParameters: undefined
							loc: Object {
								filename: "typescript/class/declare/input.ts"
								end: Object {
									column: 13
									line: 6
								}
								start: Object {
									column: 5
									line: 6
								}
							}
							returnType: TSVoidKeywordTypeAnnotation {
								loc: Object {
									filename: "typescript/class/declare/input.ts"
									end: Object {
										column: 13
										line: 6
									}
									start: Object {
										column: 9
										line: 6
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
```

### `diagnostics`

```
✔ No known problems!

```
