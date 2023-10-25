import { useState } from "react"

export const AddCounter = () => {
	const [value, setValue] = useState(0)

	return (
		<>
			<span onClick={() => setValue(prev => prev - 1)}>-</span>
			{value}
			<span onClick={() => setValue(prev => prev + 1)}>+</span>
			<button>Add</button>
		</>
	)
}
