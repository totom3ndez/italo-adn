import '../../styles/services.css'

export default function Control() {
	return (
		<>
			<div className="mx-auto flex flex-col justify-around gap-4 md:max-w-4xl md:px-20">
				<h2 className="titulo">SERVICIO DE CONTROL DE CARPETA</h2>
				<p>
					A la hora de presentar tu carpeta, ya sea en el consulado que te corresponde o en Italia,
					la documentación no debe tener inconsistencias en cuanto a nombres, edades, lugares,
					familiares, etc.
				</p>
				<p>
					Nos encargamos del control exhaustivo de las actas para determinar si es necesario
					realizar rectificaciones, o si ya estás en condiciones de continuar con la siguiente etapa
					de proceso.
				</p>
				<h2 className="titulo">¿CÓMO PUEDO ADQUIRIR EL SERVICIO?</h2>
				<p>
					Para solicitar el servicio, te solicitamos que tengas disponible la siguiente información:
				</p>
				<div className="ml-5 flex items-center gap-2">
					<span>●</span>
					<p>
						Escaneo de tus certificados o certificados digitalizados (que no sean imágenes, para una
						mejor claridad).
					</p>
				</div>
				<div className="ml-5 flex items-center gap-2">
					<span>●</span>
					<p>
						Es importante que los certificados sean legibles; si no lo son, necesitaremos alguna
						explicación por tu parte sobre su contenido.
					</p>
				</div>
				<div className="ml-5 flex items-center gap-2">
					<span>●</span>
					<p>Árbol genealógico para comprender la línea de descendencia.</p>
				</div>

				<p>
					<b>OBLIGATORIO:</b> Para llevar a cabo el análisis, la carpeta debe estar completa; por lo
					tanto, recomendamos que al contratar el servicio incluyas todos los certificados que
					forman parte de la línea. No realizamos análisis parciales de la carpeta.
				</p>
				<p>El valor por cada control de acta es de €10.</p>
			</div>
		</>
	)
}
