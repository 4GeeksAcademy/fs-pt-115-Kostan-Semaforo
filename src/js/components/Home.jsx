import React, { useState } from "react";

const Home = () => {
	const [colorActual, setColorActual] = useState("");
	const [mostrarExtra, setMostrarExtra] = useState(false);

	const alternarColor = () => {
		if (colorActual === "") setColorActual("rojo");
		else if (colorActual === "rojo") setColorActual("amarillo");
		else if (colorActual === "amarillo") setColorActual("verde");
		else if (colorActual === "verde") {
			if (mostrarExtra) setColorActual("morado");
			else setColorActual("rojo");
		} else if (colorActual === "morado") setColorActual("rojo");
	};

	const alternarExtra = () => {
		setMostrarExtra(!mostrarExtra);
	};

	return (
		<div className="d-flex flex-column align-items-center">
			<div
				onClick={() => setColorActual("rojo")}
				style={{
					height: "200px",
					width: "200px",
					backgroundColor: "red",
					borderRadius: "50%",
					marginBottom: "20px",
					opacity: colorActual === "rojo" ? 1 : 0.3,
					transition: "opacity 0.3s",
				}}
			></div>
			<div
				onClick={() => setColorActual("amarillo")}
				style={{
					height: "200px",
					width: "200px",
					backgroundColor: "yellow",
					borderRadius: "50%",
					marginBottom: "20px",
					opacity: colorActual === "amarillo" ? 1 : 0.3,
					transition: "opacity 0.3s",
				}}
			></div>
			<div
				onClick={() => setColorActual("verde")}
				style={{
					height: "200px",
					width: "200px",
					backgroundColor: "green",
					borderRadius: "50%",
					marginBottom: "20px",
					opacity: colorActual === "verde" ? 1 : 0.3,
					transition: "opacity 0.3s",
				}}
			></div>
			{mostrarExtra && (
				<div
					onClick={() => setColorActual("morado")}
					style={{
						height: "200px",
						width: "200px",
						backgroundColor: "violet",
						borderRadius: "50%",
						marginBottom: "20px",
						opacity: colorActual === "morado" ? 1 : 0.3,
						transition: "opacity 0.3s",
					}}
				></div>
			)}
			<button className="button" onClick={alternarColor}>
				<div className="button-outer">
					<div className="button-inner">
						<span>Cambiar color</span>
					</div>
				</div>
			</button>
			<button className="button mt-3" onClick={alternarExtra}>
				<div className="button-outer">
					<div className="button-inner">
						<span>Color extra</span>
					</div>
				</div>
			</button>
		</div>
	);
};

export default Home;
