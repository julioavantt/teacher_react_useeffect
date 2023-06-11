import { useState, useEffect } from "react"

import "./App.css"

function App() {
	const [uno, setUno] = useState(false)
	const [dos, setDos] = useState(false)

	useEffect(() => {
		//! Se ejecuta despues de montarse el componente y en cada cambio de estado
		console.log("%cSIN DEPENDENCIAS", "background-color: yellow")
	})

	useEffect(() => {
		//! Se ejecuta sólo despues de montarse el componente
		console.log("%c[]", "background-color: orange")
	}, [])

	useEffect(() => {
		//! Se ejecuta despues de montarse el componente y en cada cambio de estado de dependencias
		console.log(
			"%cSE EJECUTA SOLO CUANDO HAY CAMBIOS EN uno",
			"background-color: lightblue"
		)
	}, [uno])

	useEffect(() => {
		const alertar = () => alert("HELP")

		const tres = document.querySelector(".box-3")

		tres.addEventListener("click", alertar)

		//! Función de limpieza
		return () => tres.removeEventListener("click", alertar)
	})

	return (
		<>
			<div className="box-1">
				<div className="btn btn-one" onClick={() => setUno(prev => !prev)}>
					<span>UNO</span>
				</div>
			</div>
			<div className="box-2">
				<div className="btn btn-one" onClick={() => setDos(prev => !prev)}>
					<span>DOS</span>
				</div>
			</div>
			<div className="box-3">
				<div className="btn btn-one">
					<span>TRES</span>
				</div>
			</div>
		</>
	)
}

export default App
