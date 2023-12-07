import { useState } from "react";
import { calcularTotal } from "./funcion";
import { useApp } from "../Context/ContextApp";

const Formulario = () => {
	const {
		precio,
		setPrecio,
		rango,
		setRango,
		tarifa,
		setTarifa,
		setTotal,
		data,
		datados,
		fecha,
	} = useApp();
	const [error, setError] = useState(false);

	const calcularCotizacion = (e) => {
		e.preventDefault();
		if (precio === 0 || tarifa === 0) {
			setError(true);
			return;
		}
		setError(false);

		const total = calcularTotal(
			precio.tarifaplan,
			rango,
			tarifa.tarifa,
			fecha
		);

		setTotal(total);
		e.target.reset();
	};

	return (
		<>
			<form onSubmit={calcularCotizacion}>
				<label htmlFor="tipo">Tipo de vehiculo</label>

				<select
					name="tipo"
					id="tipo"
					defaultValue={0}
					onChange={(e) => setTarifa(JSON.parse(e.target.value))}
				>
					<option value={0} disabled>
						Tipo de Vehiculo...
					</option>
					{data.map((info, id) => (
						<option key={id} value={JSON.stringify(info)}>
							{info.vehiculo}
						</option>
					))}
				</select>
				<label htmlFor="año">Año patentamiento</label>
				<input
					type="range"
					name="año"
					id="año"
					defaultValue={2000}
					min="2000"
					max="2024"
					onChange={(e) => setRango(e.target.value)}
				/>
				<span>{rango}</span>
				<label htmlFor="opciones">Tipo de seguro</label>
				<select
					name="opciones"
					id="opciones"
					defaultValue={0}
					onChange={(e) => setPrecio(JSON.parse(e.target.value))}
				>
					<option value={0} disabled>
						Selecciona un Plan
					</option>
					{datados.map((info, id) => (
						<option key={id} value={JSON.stringify(info)}>
							{info.plan}
						</option>
					))}
				</select>
				<button type="submit">Calcular</button>
			</form>
			{error ? (
				<span className="error">
					Todos los campos son obligatorios..{" "}
				</span>
			) : (
				""
			)}
		</>
	);
};

export default Formulario;
