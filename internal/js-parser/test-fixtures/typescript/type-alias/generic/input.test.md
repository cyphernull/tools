# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `typescript > type-alias > generic`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "typescript/type-alias/generic/input.ts"
	hasHoistedVars: false
	integrity: undefined
	interpreter: undefined
	sourceType: "module"
	syntax: Array ["ts"]
	loc: Object {
		filename: "typescript/type-alias/generic/input.ts"
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
		TSTypeAlias {
			id: JSBindingIdentifier {
				name: "T"
				loc: Object {
					filename: "typescript/type-alias/generic/input.ts"
					identifierName: "T"
					end: Object {
						column: 6
						line: 1
					}
					start: Object {
						column: 5
						line: 1
					}
				}
			}
			loc: Object {
				filename: "typescript/type-alias/generic/input.ts"
				end: Object {
					column: 14
					line: 1
				}
				start: Object {
					column: 0
					line: 1
				}
			}
			right: TSTypeReference {
				typeParameters: undefined
				loc: Object {
					filename: "typescript/type-alias/generic/input.ts"
					end: Object {
						column: 13
						line: 1
					}
					start: Object {
						column: 12
						line: 1
					}
				}
				typeName: JSReferenceIdentifier {
					name: "U"
					loc: Object {
						filename: "typescript/type-alias/generic/input.ts"
						identifierName: "U"
						end: Object {
							column: 13
							line: 1
						}
						start: Object {
							column: 12
							line: 1
						}
					}
				}
			}
			typeParameters: TSTypeParameterDeclaration {
				loc: Object {
					filename: "typescript/type-alias/generic/input.ts"
					end: Object {
						column: 9
						line: 1
					}
					start: Object {
						column: 6
						line: 1
					}
				}
				params: Array [
					TSTypeParameter {
						name: "U"
						constraint: undefined
						default: undefined
						loc: Object {
							filename: "typescript/type-alias/generic/input.ts"
							end: Object {
								column: 8
								line: 1
							}
							start: Object {
								column: 7
								line: 1
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
