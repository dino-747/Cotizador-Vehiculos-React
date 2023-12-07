import { useApp } from "../Context/ContextApp";

const Resultado = () => {
	const { precio, rango, tarifa, total, historial, setHistorial, fecha } =
		useApp();

	return (
		<>
			<section className="resultadoContainer">
				<h2>Cotizacion:</h2>
				<ul>
					<li>Cotizamos tu {tarifa.vehiculo}</li>
					<li>Modelo {rango}</li>
					<li>Con el plan {precio.plan} </li>
					<li>Total a Pagar: ${total.toFixed(2)} </li>
				</ul>
				<span
					onClick={() =>
						setHistorial([
							...historial,
							{ precio, rango, tarifa, total, fecha },
						])
					}
				>
					Guardar
				</span>
			</section>
		</>
	);
};

export default Resultado;
