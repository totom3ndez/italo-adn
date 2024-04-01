export default function ServiceForm() {
	const inputStyle =
		'resize-none rounded-lg w-full placeholder:italic placeholder:opacity-50 rounded-md border border-lightGreen bg-white py-2 my-2 px-4 text-base font-medium text-black outline-none focus:border-lightRed focus:shadow-md'

	const fieldSet = 'border-2 border-black p-4'

	return (
		<>
			<div className="container mx-auto mt-20">
				<h2 className="text-center text-lg font-bold">Formulario para el pedido de Actas</h2>
				<form className="mx-auto mb-4 flex w-full max-w-lg flex-wrap rounded px-8 pb-8 pt-6 shadow-md">
					<fieldset className={fieldSet}>
						<legend>Tus datos:</legend>
						<label htmlFor="firstName">Nombre</label>
						<input
							className={inputStyle}
							type="text"
							name="firstName"
							id="firstName"
							placeholder="Jose"
							required
							aria-label="Campo de formulario para Nombre"
						/>
						<label htmlFor="lastName">Apellido</label>
						<input
							className={inputStyle}
							type="text"
							name="lastName"
							id="lastName"
							placeholder="Ancellotti"
							required
							aria-label="Campo de formulario para Apellido"
						/>
						<label htmlFor="email">Email</label>
						<input
							className={inputStyle}
							type="email"
							name="email"
							id="email"
							aria-label="Campo de formulario para Email"
							placeholder="ejemplo@gmail.com"
							required
						/>
						<label htmlFor="dob">Tu fecha de nacimiento</label>
						<input
							className={inputStyle}
							type="date"
							name="dob"
							id="dob"
							aria-label="Campo de formulario para Fecha de nacimiento"
							required
						/>
					</fieldset>
					<fieldset className={fieldSet}>
						<legend>Datos de la partida:</legend>
						<label htmlFor="nameAvo">Nombres del AVO</label>
						<input
							className={inputStyle}
							type="text"
							name="nameAvo"
							id="nameAvo"
							placeholder="Giuseppe"
							required
						/>
						<label htmlFor="lastAvo">Apellidos del AVO</label>
						<input
							className={inputStyle}
							type="text"
							name="lastAvo"
							id="lastAvo"
							placeholder="Ancellotti"
							required
						/>
						<label htmlFor="dobAvo">Fecha de nacimiento del AVO</label>
						<input
							className={inputStyle}
							type="date"
							name="dobAvo"
							id="dobAvo"
							aria-label="Campo de formulario para Fecha de nacimiento del AVO"
							required
						/>
						<label htmlFor="placeAvo">Lugar de nacimiento del AVO</label>
						<input
							className={inputStyle}
							type="text"
							name="placeAvo"
							id="placeAvo"
							placeholder="Siracusa, Italia"
							required
						/>
						<label htmlFor="parentsAvo">Nombres de los padres</label>
						<input
							className={inputStyle}
							type="text"
							name="parentsAvo"
							id="parentsAvo"
							placeholder="Giuseppe Ancellotti y Maria Catanzaro"
							required
						/>
						<label htmlFor="infoAvo">Información extra del AVO</label>
						<textarea
							className={inputStyle}
							name="infoAvo"
							id="infoAvo"
							placeholder="Hermanos, hijos, familiares cercanos, lugares de eventos.."
						></textarea>
					</fieldset>
					<fieldset className={fieldSet}>
						<legend>Matrimonio del AVO</legend>
						<input className="mr-2" type="checkbox" name="needMarriage" id="needMarriage" />
						<label htmlFor="needMarriage">Necesito el acta de matrimonio.</label>
						<br />
						<small className="text-orange-500">
							Si no lo necesitas, <b>no</b> completar los datos.
						</small>
						<br />
						<label htmlFor="comune">Comuna del matrimonio</label>
						<input
							className={inputStyle}
							type="text"
							name="comune"
							id="comune"
							placeholder="comuna de Siracusa"
						/>
						<label htmlFor="dateMarriage">Fecha de matrimonio</label>
						<input className={inputStyle} type="date" name="dateMarriage" id="dateMarriage" />
						<label htmlFor="couple">Nombre del conyuge</label>
						<input
							className={inputStyle}
							type="text"
							name="couple"
							id="couple"
							placeholder="Maria"
						/>
					</fieldset>
					<button
						className="mt-10 w-full rounded-lg bg-lightGreen p-4 hover:bg-darkGreen hover:text-white"
						type="submit"
					>
						CONSULTAR
					</button>
				</form>
			</div>
		</>
	)
}
