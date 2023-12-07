import { useApp } from "../Context/ContextApp";

const Historial = () => {
	const { historial, setHistorial } = useApp();

	return (
		<>
			{historial.length > 0 ? (
				historial.map((dato, id) => (
					<ul className="historial-container" key={id}>
						<li>
							<h4>Fecha</h4>
							<p>{dato.fecha}</p>
						</li>
						<li>
							<h4>Vehiculo</h4>
							<p>{dato.tarifa.vehiculo}</p>
						</li>
						<li>
							<h4>Modelo</h4>
							<p>{dato.rango}</p>
						</li>
						<li>
							<h4>Plan</h4>
							<p>{dato.precio.plan}</p>
						</li>
						<li>
							<h4>Costo</h4>
							<p>{dato.total}</p>
						</li>
					</ul>
				))
			) : (
				<h3>el historial esta vacio ☹</h3>
			)}
			<span className="btn-delete" onClick={() => setHistorial([])}>
				Borrar Historial
			</span>
		</>
	);
};
export default Historial;
