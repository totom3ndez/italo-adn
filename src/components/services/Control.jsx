import '../../styles/services.css'
import React, { useState } from 'react'

const API = '/api/sendEmail.json'
export default function Control() {
	const inputStyle =
		'resize-none rounded-lg w-full placeholder:italic placeholder:opacity-50 rounded-md border border-lightGreen bg-slate-100 py-2 my-2 px-4 text-base font-medium text-black outline-none focus:border-lightRed focus:shadow-md'

	const fieldSet = 'border-2 border-black p-4 font-bold'

	const buttonStyle =
		'my-2 w-full rounded-full bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow hover:text-black focus:ring-gray-700'

	const [sentMessage, setSentMessage] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		const form = e.target
		const formData = new FormData(e.currentTarget)
		const { name, email, message } = Object.fromEntries(formData)
		try {
			const res = await fetch(API, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					to: 'info@italoadn.com',
					from: 'info@italoadn.com',
					subject: `Nuevo control de carpeta para ${name}`,
					html: `
						<h1>Formulario de Asesoría</h1>
						
						<p>Nombre: ${name}</p>
						<p>Apellido: ${email}</p>
						<p>Mensaje: ${message}</p>
					`
				})
			})

			// Notify form sent

			setSentMessage(true)
			setTimeout(() => {
				setSentMessage(false)
			}, 7000)

			// Clear form
			form.reset()
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<>
			<div className="mx-5 flex flex-col justify-around gap-4 md:mx-auto md:max-w-4xl md:px-20">
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
			<div className="w-2xl mx-auto py-8">
				<form onSubmit={handleSubmit} className="mx-5 md:mx-auto md:w-1/2">
					<p>Completa este formulario para solicitar tu control de carpeta.</p>
					<fieldset className={fieldSet}>
						<legend>Quiero controlar mi carpeta</legend>
						<input
							className={inputStyle}
							placeholder="Nombre completo"
							type="text"
							name="name"
							id="name"
							required
						/>
						<input
							className={inputStyle}
							placeholder="email"
							type="email"
							name="email"
							id="email"
							required
						/>
						<textarea
							placeholder="Quiero controlar mi carpeta porque..."
							className={inputStyle}
							name="message"
							id="message"
							required
						/>
					</fieldset>
					<input type="submit" value="Enviar" className={buttonStyle} />
					{sentMessage && (
						<div className="text-center font-bold text-green-600">
							¡Formulario enviado! Pronto nos pondremos en contacto.
						</div>
					)}
				</form>
			</div>
		</>
	)
}
