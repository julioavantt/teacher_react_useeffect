import { useState, useEffect } from "react"

import "./App.css"

function App() {
	const [uno, setUno] = useState(false)
	const [dos, setDos] = useState(false)
	const [id, setId] = useState(1)

	useEffect(() => {
		//! Se ejecuta despues de montarse el componente y en cada cambio de estado
		console.log("%cSIN DEPENDENCIAS", "background-color: yellow")
	})

	useEffect(() => {
		//! Se ejecuta despues de montarse el componente y en cada cambio de estado de dependencias
		console.log(
			"%c[] SE EJECUTA SOLO 1 VEZ DESPUÉS DE MONTAR",
			"background-color: red; color: white"
		)
	}, [])

	useEffect(() => {
		console.log(
			"%cSE EJECUTA SOLO CUANDO HAY CAMBIOS EN ID",
			"background-color: lightblue"
		)
		fetch("https://pokeapi.co/api/v2/pokemon/" + id).then(response => response.json())
	}, [id])

	//! Descomentar para probar useEffect con función de limpieza.
	/* useEffect(() => {
		const alertar = () => alert("HELP")

		document.addEventListener("click", alertar)

		//! Función de limpieza
		return () => document.removeEventListener("click", alertar)
	}) */

	return (
		<>
			<div className="box-1">
				<div
					className="btn btn-one"
					onClick={() => {
						setUno(prev => !prev)
					}}
				>
					<span>UNO</span>
				</div>
			</div>
			<div className="box-2">
				<div className="btn btn-one" onClick={() => setDos(prev => !prev)}>
					<span>DOS</span>
				</div>
			</div>
			<div className="box-3">
				<div className="btn btn-one" onClick={() => setId(prev => prev + 1)}>
					<span>TRES</span>
				</div>
			</div>
		</>
	)
}

export default App
