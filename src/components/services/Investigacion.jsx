import '@/styles/services.css'
import React, { useState } from 'react'

const API = '/api/sendEmail.json'

export default function Investigacion() {
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
					subject: `Nueva investigación de carpeta para ${name}`,
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
				<h2 className="titulo">Servicio de Investigación Genealógica</h2>
				<p className="px-15 italic opacity-75">
					Antes que nada, cabe destacar que este tipo de investigación no solo la realizamos con
					documentos Italianos, sino también con partidas españolas y francesas.
				</p>
				<p>
					Este tipo de exploración se solicita cuando necesitamos obtener el registro de nuestro
					AVO, pero nos falta algún detalle, por ejemplo:
				</p>
				<div className="ml-5 flex items-center gap-2">
					<span>●</span>
					<p>Conocemos la fecha precisa, la provincia, pero desconocemos el Comune.</p>
				</div>
				<div className="ml-5 flex items-center gap-2">
					<span>●</span>
					<p>Tenemos una fecha aproximada y la región.</p>
				</div>
				<div className="ml-5 flex items-center gap-2">
					<span>●</span>
					<p>Tenemos una fecha aproximada, pero puede haber uno o varios lugares.</p>
				</div>
				<div className="ml-5 flex items-center gap-2">
					<span>●</span>
					<p>Tenemos una fecha aproximada y una ubicación aproximada.</p>
				</div>
				<p>
					Cuanta más información podamos proporcionar sobre la persona que estamos intentando
					localizar, mayores serán las posibilidades de éxito en la búsqueda. Es crucial que
					indiquemos la provincia, la región o el Comune, ya que si solo especificamos "Italia", y
					si tienes algún acta o documento que mencione a estas personas mucho mejor, sino, las
					probabilidades de concluir la investigación con éxito disminuyen considerablemente.
				</p>
				<p>
					Hacemos una revisión con la información que tengas, gratis, para ver si podemos buscar
					algo, en 24/48 hs. Después de eso, te decimos sinceramente si vale la pena hacer una
					búsqueda oficial pagando o no.
				</p>
				<p>
					Si no lo veo o entiendo que es posible, te lo informaré y ahí terminará la investigación.
					Si es viable, comenzamos de inmediato con la siguiente etapa del trabajo y con su
					correspondiente costo formal.
				</p>
				<p>
					Actualmente, el precio de una búsqueda oficial (después de la evaluación inicial) es de
					230€, que se divide en dos pagos: 115€ para comenzar y otros 115€ al finalizar, una vez
					obtenido el resultado final y el o los documentos necesarios, dependiendo del objetivo que
					hayamos establecido.
				</p>
				<p>
					<b className="p-2">¡IMPORTANTE!</b> Es importante destacar que al aceptar el análisis
					gratuito, se requiere un compromiso sincero de tu parte, ya que implica horas de trabajo
					activo. Por lo tanto, si resulta viable y decides no seguir adelante de manera formal,
					significará una pérdida total de horas de trabajo. Es por eso que se te informa desde el
					principio sobre los costos involucrados. Por ejemplo, si solicitas el análisis, resulta
					viable y luego decides no continuar, todas las horas dedicadas se perderán.
				</p>
				<p>
					Este servicio no implica la solicitud del acta al Comune o la iglesia. Si alguien lo
					desea, puede solicitarnos el servicio de pedido de acta.
				</p>
			</div>
			<div className="w-2xl mx-auto py-8">
				<form onSubmit={handleSubmit} className="mx-5 md:mx-auto md:w-1/2">
					<p>Completa este formulario para solicitar investigación.</p>
					<fieldset className={fieldSet}>
						<legend>Quiero iniciar una investigación carpeta</legend>
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
