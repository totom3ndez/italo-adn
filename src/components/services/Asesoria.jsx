import '../../styles/services.css'
import { useState } from 'react'

const { API_RESEND } = import.meta.env

export default function Asesoria() {
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
		const { name, email, message } = Object.fromEntries(formData)
		try {
			const res = await fetch(API_RESEND, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					to: 'info@italoadn.com',
					from: 'info@italoadn.com',
					subject: `Nueva asesoría para ${name}`,
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
			<div className="mx-auto flex flex-col justify-around gap-4 md:max-w-4xl md:px-20">
				<h2 className="titulo">ASESORÍA CIUDADANÍA ITALIANA</h2>
				<p>
					Sé que seguramente estás haciendo todo lo posible para tramitar tu ciudadanía italiana y
					así poder emigrar.
				</p>
				<p>
					Durante todo este proceso, es posible que surjan miedos, inquietudes y dudas que hacen que
					no estés iniciando tu trámite o que te trabes a la mitad.
				</p>
				<p>
					Te guío en el proceso, y ayudo a responder tus dudas. Podemos ajustarlo al horario que más
					te convenga, ya que es Online.
				</p>
				<h3 className="titulo">¿Cuánto tiempo dura la asesoría?</h3>
				<p>Esto depende del tipo de asesoría que necesites. Hay dos tipos:</p>
				<p className="ml-6">
					<b>○ ASESORÍA LUXE:</b> <br />
					Para conversar con el consultor y plantear tu caso. <b>Duración: 60 minutos</b>
				</p>
				<p className="ml-6">
					<b>○ ASESORÍA CLEVER: </b> <br />
					Para aclarar tus dudas con el consultor. <b>Duración: 30 minutos</b>
				</p>
				<h3 className="titulo">¿Necesito una asesoría LUXE o CLEVER?</h3>
				<p>
					Esto variará dependiendo de tu caso particular. Por ejemplo, si aún no has comenzado tu
					trámite porque no sabes cómo hacerlo o dónde hacerlo, o si no estás seguro si es por vía
					judicial o administrativa, lo recomendable sería agendar una asesoría <b>Luxe</b>, ya que
					son casos que requieren más tiempo para poder guiarte.
				</p>
				<p>
					Ahora, si ya comenzaste y tienes dudas puntuales que te frenaron o surgieron mientras
					realizabas tu trámite, lo mejor sería una asesoría <b>Clever</b>, ya que en 30 minutos
					podría ayudarte a encontrar una solución o despejar dudas.
				</p>
				<h3 className="titulo">COSTO DE LAS ASESORÍAS</h3>
				<p>
					LUXE <b>45€</b> / CLEVER <b>25€</b>
				</p>
				<div className="w-2xl mx-auto py-8">
					<p>Completa este formulario para solicitar tu asesoría.</p>
					<form onSubmit={handleSubmit} className="mx-auto w-1/2">
						<fieldset className={fieldSet}>
							<legend>Quiero mi asesoría</legend>
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
								placeholder="Quiero mi asesoría porque..."
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
			</div>
		</>
	)
}
