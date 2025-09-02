import {
	Attribute,
	builtinAttribute,
	defaultActions,
	DocumentInput,
	JSONDive,
	NodeBuilder,
	type DivePlugin,
} from "@jsondive/viewer"

import "@jsondive/viewer/dist/root.css"
import { useMemo } from "react"
import { isDefined, Badge } from "@jsondive/library"

const myCustomAttribute = new Attribute<string>("custom.myAttribute")

function App() {
	const input = useMemo((): DocumentInput => {
		const rootBuilder = NodeBuilder.start()
		const objectBuilder = rootBuilder.createChild("object")
		objectBuilder.setAttribute(builtinAttribute.containerType, "object")
		const keyBuilder = objectBuilder.createChild("key")
		keyBuilder.setAttribute(builtinAttribute.primitiveValue, {
			type: "string",
			value: "value",
		})
		keyBuilder.setAttribute(myCustomAttribute, "lala blah blah")
		return DocumentInput.fromNode(rootBuilder.build())
	}, [])

	const plugins = useMemo((): DivePlugin[] => {
		return [
			{
				getDecorationsForNode(node) {
					const customValue = node.getAttribute(myCustomAttribute)
					if (isDefined(customValue)) {
						return [
							{
								type: "inline",
								render() {
									return (
										<Badge tooltip="Value of custom attribute">
											{customValue}
										</Badge>
									)
								},
							},
						]
					}

					return []
				},
			},
			// Adds expand/collapse all, etc, to context menu.
			defaultActions(),
		]
	}, [])

	return (
		<div style={{ width: 400, height: 400 }}>
			<JSONDive input={input} plugins={plugins} />
		</div>
	)
}

export default App
