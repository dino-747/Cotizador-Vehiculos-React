import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Resumen from "./components/Resumen";
import Header from "./components/Header";
import { AppContext } from "./Context/ContextApp";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Historial from "./components/Historial";

const App = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("/data/tarifas.json")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			});
	}, []);

	const [datados, setDatados] = useState([]);
	useEffect(() => {
		fetch("/data/planes.json")
			.then((res) => res.json())
			.then((datados) => {
				setDatados(datados);
			});
	}, []);

	const [historial, setHistorial] = useState(() => {
		let storage = localStorage.getItem("historial");
		if (storage) return JSON.parse(storage);
		localStorage.setItem("historial", JSON.stringify([]));
		return [];
	});
	useEffect(
		() => localStorage.setItem("historial", JSON.stringify(historial)),
		[historial]
	);

	const [rango, setRango] = useState(2000);
	const [precio, setPrecio] = useState(0);
	const [tarifa, setTarifa] = useState(0);
	const [total, setTotal] = useState(0);
	const fecha = new Date().toLocaleDateString("es-mx");
	const [activ, setActive] = useState("true");

	let componente;
	if (total === 0) {
		componente = <Resumen />;
	} else {
		componente = <Resultado />;
	}
	return (
		<AppContext.Provider
			value={{
				precio,
				setPrecio,
				rango,
				setRango,
				tarifa,
				setTarifa,
				setTotal,
				data,
				datados,
				total,
				historial,
				setHistorial,
				fecha,
				activ,
				setActive,
			}}
		>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Header />
								<Outlet></Outlet>
							</>
						}
					>
						<Route
							index
							element={
								<>
									<Formulario />
									<span>{componente}</span>
								</>
							}
						></Route>
						<Route
							path="/Historial"
							element={<Historial />}
						></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</AppContext.Provider>
	);
};

export default App;
