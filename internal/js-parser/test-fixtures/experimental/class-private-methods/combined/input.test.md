# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > class-private-methods > combined`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "experimental/class-private-methods/combined/input.js"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "experimental/class-private-methods/combined/input.js"
		end: Object {
			column: 0
			line: 17
		}
		start: Object {
			column: 0
			line: 1
		}
	}
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "Foo"
				loc: Object {
					filename: "experimental/class-private-methods/combined/input.js"
					identifierName: "Foo"
					end: Object {
						column: 9
						line: 1
					}
					start: Object {
						column: 6
						line: 1
					}
				}
			}
			loc: Object {
				filename: "experimental/class-private-methods/combined/input.js"
				end: Object {
					column: 1
					line: 16
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
					filename: "experimental/class-private-methods/combined/input.js"
					end: Object {
						column: 1
						line: 16
					}
					start: Object {
						column: 0
						line: 1
					}
				}
				body: Array [
					JSClassProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "a"
								loc: Object {
									filename: "experimental/class-private-methods/combined/input.js"
									identifierName: "a"
									end: Object {
										column: 3
										line: 2
									}
									start: Object {
										column: 2
										line: 2
									}
								}
							}
							loc: Object {
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 3
									line: 2
								}
								start: Object {
									column: 2
									line: 2
								}
							}
						}
						value: JSNumericLiteral {
							value: 1
							format: undefined
							raw: "1"
							loc: Object {
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 7
									line: 2
								}
								start: Object {
									column: 6
									line: 2
								}
							}
						}
						definite: undefined
						typeAnnotation: undefined
						loc: Object {
							filename: "experimental/class-private-methods/combined/input.js"
							end: Object {
								column: 8
								line: 2
							}
							start: Object {
								column: 2
								line: 2
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
								column: 2
								line: 2
							}
							loc: Object {
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 3
									line: 2
								}
								start: Object {
									column: 2
									line: 2
								}
							}
						}
					}
					JSClassPrivateMethod {
						kind: "method"
						key: JSPrivateName {
							id: JSIdentifier {
								name: "a"
								loc: Object {
									filename: "experimental/class-private-methods/combined/input.js"
									identifierName: "a"
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
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 5
									line: 4
								}
								start: Object {
									column: 3
									line: 4
								}
							}
						}
						loc: Object {
							filename: "experimental/class-private-methods/combined/input.js"
							end: Object {
								column: 3
								line: 6
							}
							start: Object {
								column: 2
								line: 4
							}
						}
						head: JSFunctionHead {
							async: false
							generator: true
							hasHoistedVars: false
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: Object {
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 7
									line: 4
								}
								start: Object {
									column: 5
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
								column: 2
								line: 4
							}
							loc: Object {
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 5
									line: 4
								}
								start: Object {
									column: 2
									line: 4
								}
							}
						}
						body: JSBlockStatement {
							directives: Array []
							loc: Object {
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 3
									line: 6
								}
								start: Object {
									column: 8
									line: 4
								}
							}
							body: Array [
								JSExpressionStatement {
									loc: Object {
										filename: "experimental/class-private-methods/combined/input.js"
										end: Object {
											column: 16
											line: 5
										}
										start: Object {
											column: 4
											line: 5
										}
									}
									expression: JSYieldExpression {
										delegate: false
										loc: Object {
											filename: "experimental/class-private-methods/combined/input.js"
											end: Object {
												column: 15
												line: 5
											}
											start: Object {
												column: 4
												line: 5
											}
										}
										argument: JSCallExpression {
											arguments: Array []
											loc: Object {
												filename: "experimental/class-private-methods/combined/input.js"
												end: Object {
													column: 15
													line: 5
												}
												start: Object {
													column: 10
													line: 5
												}
											}
											callee: JSReferenceIdentifier {
												name: "bar"
												loc: Object {
													filename: "experimental/class-private-methods/combined/input.js"
													identifierName: "bar"
													end: Object {
														column: 13
														line: 5
													}
													start: Object {
														column: 10
														line: 5
													}
												}
											}
										}
									}
								}
							]
						}
					}
					JSClassPrivateProperty {
						key: JSPrivateName {
							id: JSIdentifier {
								name: "b"
								loc: Object {
									filename: "experimental/class-private-methods/combined/input.js"
									identifierName: "b"
									end: Object {
										column: 4
										line: 8
									}
									start: Object {
										column: 3
										line: 8
									}
								}
							}
							loc: Object {
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 4
									line: 8
								}
								start: Object {
									column: 2
									line: 8
								}
							}
						}
						value: JSNumericLiteral {
							value: 2
							format: undefined
							raw: "2"
							loc: Object {
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 8
									line: 8
								}
								start: Object {
									column: 7
									line: 8
								}
							}
						}
						typeAnnotation: undefined
						loc: Object {
							filename: "experimental/class-private-methods/combined/input.js"
							end: Object {
								column: 9
								line: 8
							}
							start: Object {
								column: 2
								line: 8
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
								column: 2
								line: 8
							}
							loc: Object {
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 4
									line: 8
								}
								start: Object {
									column: 2
									line: 8
								}
							}
						}
					}
					JSClassMethod {
						kind: "get"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "b"
								loc: Object {
									filename: "experimental/class-private-methods/combined/input.js"
									identifierName: "b"
									end: Object {
										column: 7
										line: 10
									}
									start: Object {
										column: 6
										line: 10
									}
								}
							}
							loc: Object {
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 7
									line: 10
								}
								start: Object {
									column: 6
									line: 10
								}
							}
						}
						loc: Object {
							filename: "experimental/class-private-methods/combined/input.js"
							end: Object {
								column: 26
								line: 10
							}
							start: Object {
								column: 2
								line: 10
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
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 9
									line: 10
								}
								start: Object {
									column: 7
									line: 10
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
								column: 2
								line: 10
							}
							loc: Object {
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 7
									line: 10
								}
								start: Object {
									column: 2
									line: 10
								}
							}
						}
						body: JSBlockStatement {
							directives: Array []
							loc: Object {
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 26
									line: 10
								}
								start: Object {
									column: 10
									line: 10
								}
							}
							body: Array [
								JSReturnStatement {
									loc: Object {
										filename: "experimental/class-private-methods/combined/input.js"
										end: Object {
											column: 24
											line: 10
										}
										start: Object {
											column: 12
											line: 10
										}
									}
									argument: JSNumericLiteral {
										value: 9_999
										format: undefined
										raw: "9999"
										loc: Object {
											filename: "experimental/class-private-methods/combined/input.js"
											end: Object {
												column: 23
												line: 10
											}
											start: Object {
												column: 19
												line: 10
											}
										}
									}
								}
							]
						}
					}
					JSClassPrivateMethod {
						kind: "set"
						key: JSPrivateName {
							id: JSIdentifier {
								name: "c"
								loc: Object {
									filename: "experimental/class-private-methods/combined/input.js"
									identifierName: "c"
									end: Object {
										column: 8
										line: 11
									}
									start: Object {
										column: 7
										line: 11
									}
								}
							}
							loc: Object {
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 8
									line: 11
								}
								start: Object {
									column: 6
									line: 11
								}
							}
						}
						loc: Object {
							filename: "experimental/class-private-methods/combined/input.js"
							end: Object {
								column: 25
								line: 11
							}
							start: Object {
								column: 2
								line: 11
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
								column: 2
								line: 11
							}
							loc: Object {
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 8
									line: 11
								}
								start: Object {
									column: 2
									line: 11
								}
							}
						}
						body: JSBlockStatement {
							directives: Array []
							loc: Object {
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 25
									line: 11
								}
								start: Object {
									column: 12
									line: 11
								}
							}
							body: Array [
								JSReturnStatement {
									loc: Object {
										filename: "experimental/class-private-methods/combined/input.js"
										end: Object {
											column: 23
											line: 11
										}
										start: Object {
											column: 14
											line: 11
										}
									}
									argument: JSReferenceIdentifier {
										name: "x"
										loc: Object {
											filename: "experimental/class-private-methods/combined/input.js"
											identifierName: "x"
											end: Object {
												column: 22
												line: 11
											}
											start: Object {
												column: 21
												line: 11
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
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 11
									line: 11
								}
								start: Object {
									column: 8
									line: 11
								}
							}
							params: Array [
								JSBindingIdentifier {
									name: "x"
									loc: Object {
										filename: "experimental/class-private-methods/combined/input.js"
										identifierName: "x"
										end: Object {
											column: 10
											line: 11
										}
										start: Object {
											column: 9
											line: 11
										}
									}
									meta: JSPatternMeta {
										optional: undefined
										typeAnnotation: undefined
										loc: Object {
											filename: "experimental/class-private-methods/combined/input.js"
											end: Object {
												column: 10
												line: 11
											}
											start: Object {
												column: 9
												line: 11
											}
										}
									}
								}
							]
						}
					}
					JSClassPrivateMethod {
						kind: "method"
						key: JSPrivateName {
							id: JSIdentifier {
								name: "d"
								loc: Object {
									filename: "experimental/class-private-methods/combined/input.js"
									identifierName: "d"
									end: Object {
										column: 4
										line: 13
									}
									start: Object {
										column: 3
										line: 13
									}
								}
							}
							loc: Object {
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 4
									line: 13
								}
								start: Object {
									column: 2
									line: 13
								}
							}
						}
						loc: Object {
							filename: "experimental/class-private-methods/combined/input.js"
							end: Object {
								column: 3
								line: 15
							}
							start: Object {
								column: 2
								line: 13
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
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 6
									line: 13
								}
								start: Object {
									column: 4
									line: 13
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
								column: 2
								line: 13
							}
							loc: Object {
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 4
									line: 13
								}
								start: Object {
									column: 2
									line: 13
								}
							}
						}
						body: JSBlockStatement {
							directives: Array []
							loc: Object {
								filename: "experimental/class-private-methods/combined/input.js"
								end: Object {
									column: 3
									line: 15
								}
								start: Object {
									column: 7
									line: 13
								}
							}
							body: Array [
								JSReturnStatement {
									loc: Object {
										filename: "experimental/class-private-methods/combined/input.js"
										end: Object {
											column: 25
											line: 14
										}
										start: Object {
											column: 4
											line: 14
										}
									}
									argument: JSCallExpression {
										arguments: Array []
										loc: Object {
											filename: "experimental/class-private-methods/combined/input.js"
											end: Object {
												column: 24
												line: 14
											}
											start: Object {
												column: 11
												line: 14
											}
										}
										callee: JSMemberExpression {
											loc: Object {
												filename: "experimental/class-private-methods/combined/input.js"
												end: Object {
													column: 22
													line: 14
												}
												start: Object {
													column: 11
													line: 14
												}
											}
											object: JSReferenceIdentifier {
												name: "Math"
												loc: Object {
													filename: "experimental/class-private-methods/combined/input.js"
													identifierName: "Math"
													end: Object {
														column: 15
														line: 14
													}
													start: Object {
														column: 11
														line: 14
													}
												}
											}
											property: JSStaticMemberProperty {
												value: JSIdentifier {
													name: "random"
													loc: Object {
														filename: "experimental/class-private-methods/combined/input.js"
														identifierName: "random"
														end: Object {
															column: 22
															line: 14
														}
														start: Object {
															column: 16
															line: 14
														}
													}
												}
												loc: Object {
													filename: "experimental/class-private-methods/combined/input.js"
													identifierName: "random"
													end: Object {
														column: 22
														line: 14
													}
													start: Object {
														column: 16
														line: 14
													}
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
