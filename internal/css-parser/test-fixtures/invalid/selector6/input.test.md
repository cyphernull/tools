# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/css-parser/index.test.ts --update-snapshots` to update.

## `invalid > selector6`

```javascript
CSSRoot {
	comments: Array []
	corrupt: false
	filename: "invalid/selector6/input.css"
	integrity: undefined
	loc: Object {
		filename: "invalid/selector6/input.css"
		end: Object {
			column: 1
			line: 3
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
				categoryValue: "css"
				message: RAW_MARKUP {value: "Expected to close attribute selector with a right square bracket <emphasis>]</emphasis>."}
			}
			location: Object {
				filename: "invalid/selector6/input.css"
				integrity: undefined
				language: "css"
				sourceText: undefined
				end: Object {
					column: 7
					line: 1
				}
				start: Object {
					column: 7
					line: 1
				}
			}
		}
	]
	body: Array [
		CSSRule {
			loc: Object {
				filename: "invalid/selector6/input.css"
				end: Object {
					column: 1
					line: 3
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			block: CSSBlock {
				value: Array [
					CSSDeclaration {
						name: "color"
						value: Array [
							CSSIdentifier {
								value: "purple"
								loc: Object {
									filename: "invalid/selector6/input.css"
									end: Object {
										column: 15
										line: 2
									}
									start: Object {
										column: 9
										line: 2
									}
								}
							}
						]
						important: false
						loc: Object {
							filename: "invalid/selector6/input.css"
							end: Object {
								column: 15
								line: 2
							}
							start: Object {
								column: 2
								line: 2
							}
						}
					}
				]
				startingTokenValue: "{"
				loc: Object {
					filename: "invalid/selector6/input.css"
					end: Object {
						column: 1
						line: 3
					}
					start: Object {
						column: 18
						line: 1
					}
				}
			}
			prelude: Array [
				CSSSelector {
					loc: Object {
						filename: "invalid/selector6/input.css"
						end: Object {
							column: 8
							line: 1
						}
						start: Object {
							column: 0
							line: 1
						}
					}
					patterns: Array [
						CSSTypeSelector {
							value: "a"
							loc: Object {
								filename: "invalid/selector6/input.css"
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
					]
				}
				CSSSelector {
					patterns: Array []
					loc: Object {
						filename: "invalid/selector6/input.css"
						end: Object {
							column: 9
							line: 1
						}
						start: Object {
							column: 8
							line: 1
						}
					}
				}
				CSSSelector {
					patterns: Array []
					loc: Object {
						filename: "invalid/selector6/input.css"
						end: Object {
							column: 16
							line: 1
						}
						start: Object {
							column: 9
							line: 1
						}
					}
				}
				CSSSelector {
					patterns: Array []
					loc: Object {
						filename: "invalid/selector6/input.css"
						end: Object {
							column: 17
							line: 1
						}
						start: Object {
							column: 16
							line: 1
						}
					}
				}
				CSSSelector {
					patterns: Array []
					loc: Object {
						filename: "invalid/selector6/input.css"
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
			]
		}
	]
}
```
