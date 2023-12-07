import { Link } from "react-router-dom";
import { useApp } from "../Context/ContextApp";

const Header = () => {
	const { activ, setActive } = useApp();
	let btn;
	btn = activ ? "Historial" : "Cotizar";

	return (
		<>
			<header>
				<h1>Cotiza tu Vehiculo</h1>
				<nav>
					<Link
						className="btn-h"
						to={activ ? "/Historial" : "/"}
						onClick={() => setActive(!activ)}
					>
						{btn}
					</Link>
				</nav>
			</header>
		</>
	);
};

export default Header;
