import '../../styles/services.css'
import { useState } from 'react'

const { API_RESEND } = import.meta.env

export const Traducciones = () => {
	const inputStyle =
		'resize-none rounded-lg w-full placeholder:italic placeholder:opacity-50 rounded-md border border-lightGreen bg-white py-2 my-2 px-4 text-base font-medium text-black outline-none focus:border-lightRed focus:shadow-md'

	const fieldSet = 'border-2 border-black p-4 font-bold'

	const buttonStyle =
		'my-2 w-full rounded-full bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow hover:text-black focus:ring-gray-700'

	const [sentMessage, setSentMessage] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		const form = e.target
		const formData = new FormData(e.currentTarget)
		const { name, email, number } = Object.fromEntries(formData)
		try {
			const res = await fetch(API_RESEND, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					from: 'info@italoadn.com',
					to: 'info@italoadn.com',
					subject: `Pedido de traducciones para ${name}`,
					html: `
						<h1>Formulario de traducciones</h1>
						
						<p>Nombre: ${name}</p>
						<p>Apellido: ${email}</p>
						<p>Numero de actas: ${number}</p>
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
		<div className="mx-auto flex flex-col justify-around gap-4 md:max-w-4xl md:px-20">
			<h2 className="titulo">Traducciones</h2>
			<p>
				Para iniciar el proceso de solicitud de Ciudadanía Italiana en Italia, es imprescindible
				realizar la traducción de los registros que conforman tu carpeta y que no sean de origen
				italiano.
			</p>
			<p>
				En consecuencia, los papeles que requieren traducción son aquellos redactados en idiomas
				distintos al italiano:
			</p>
			<ul className="ml-10 list-disc">
				<li>Actas de nacimiento</li>
				<li>Actas de matrimonio</li>
				<li>Certificado de defunción</li>
				<li> Certificado de no naturalización</li>
				<li>Certificados de soltería</li>
				<li>Autorizaciones</li>
				<li>Certificados de adopción, etc.</li>
			</ul>
			<p>
				Luego de que hayas traducido los documentos deberás darles una validez legal a los mismos.
				Estos pueden ser mediante:
			</p>
			<ul className="ml-10 flex list-disc flex-col gap-2">
				<li>
					<b>Visto Consular:</b> La validación de las traducciones se lleva a cabo en el consulado
					italiano ubicado en tu país, donde el traductor responsable de realizarlas está
					registrado. Para este procedimiento, es necesario que te asesores sobre los requisitos del
					consulado correspondiente a tu país y/o provincia .
				</li>
				<li>
					<b>Doble apostilla:</b> La doble apostilla se refiere al procedimiento de legalización de
					documentos para que sean reconocidos internacionalmente en países que son parte del
					Convenio de La Haya sobre Apostilla. Consiste en la certificación de un documento por
					parte de la autoridad competente en el país de origen y luego por el Ministerio de
					Relaciones Exteriores del mismo país. Este proceso asegura la autenticidad del documento y
					su validez en el extranjero sin necesidad de más trámites de legalización. En resumen, la
					doble apostilla en Argentina implica obtener dos apostillas en el país de origen del
					documento para que sea reconocido en países que forman parte del Convenio de La Haya.
				</li>
				<li>
					<b>Aseveración en Italia:</b> La legalización de las traducciones se realiza en los
					tribunales de justicia italianos. Puede llevarse a cabo en cualquier municipio de Italia y
					es válida en todo el territorio nacional.
				</li>
			</ul>
			<h2 className="titulo">¿CÓMO CONTRATAR EL SERVICIO DE TRADUCCIÓN?</h2>
			<p>Cabe destacar que la traducción la realiza un traductor matriculado en Italia.</p>
			<p>
				Para proceder con la traducción de tus actas, es fundamental que estas estén en su
				totalidad. Por ejemplo: un acta de nacimiento completa, legalizada y apostillada equivale a
				una: 1 sola acta.
			</p>
			<h2 className="titulo">¿CÓMO CALCULAR EL VALOR??</h2>
			<p>Para realizar este cálculo, debes considerar las actas completas. Por ejemplo:</p>
			<ul className="ml-10 list-disc">
				<li>Certificado de No Naturalización + Apostilla = 1 Acta</li>
				<li> Acta de Nacimiento + Legalización + Apostilla = 1 Acta.</li>
				<li>Acta de Matrimonio + Legalización + Apostilla = 1 Acta.</li>
				<li>Acta de Defunción + Legalización + Apostilla = 1 Acta.</li>
				<li> Información Sumaria + Legalización + Apostilla = 1 Acta</li>
				<li> Sentencia de Divorcio + Legalización + Apostilla = 1 Acta</li>
			</ul>
			<p className="italic text-gray-600 underline">
				Hacemos apostillas que sean únicamente digitales por el momento.
			</p>
			<p>
				El valor de traducción por acta es de <b>€22</b>
			</p>
			<h2 className="titulo">¿CUÁNTO TARDA EL SERVICIO?</h2>
			<p>
				Dependerá de algunos factores, pero en principio de 10 A 15 días hábiles desde que recibimos
				las actas completas.
			</p>
			<h3 className="text-center text-lg font-bold">
				Pedir traducciones rellenando este formulario:
			</h3>
			<form onSubmit={handleSubmit} className="mx-auto w-1/2">
				<fieldset className={fieldSet}>
					<legend>Quiero traducir mis actas</legend>
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
					<input
						className={inputStyle}
						type="number"
						name="number"
						id="number"
						required
						min={1}
						max={30}
						placeholder="1"
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
	)
}
