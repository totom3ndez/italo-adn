import '@/styles/services.css'
import { useState } from 'react'
const API = '/api/sendEmail.json'

export default function ServiceForm() {
	const [sentMessage, setSentMessage] = useState(false)
	const [content, setContent] = useState(null)
	const [filename, setFilename] = useState('')

	const onAddFileAction = (e) => {
		const reader = new FileReader()
		const files = e.target.files

		reader.onload = (r) => {
			setContent(r.target.result.toString())
			setFilename(files[0].name)
		}

		reader.readAsDataURL(files[0])
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const form = e.target
		const formData = new FormData(e.currentTarget)
		const base64Content = content.split(',')[1]
		const {
			firstName,
			lastName,
			email,
			dob,
			nameAvo,
			lastAvo,
			dobAvo,
			placeAvo,
			parentsAvo,
			infoAvo,
			comune,
			dateMarriage,
			couple,
			attachments
		} = Object.fromEntries(formData)

		try {
			const res = await fetch(API, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					from: 'info@italoadn.com',
					to: 'info@italoadn.com',
					subject: `Nuevo pedido de actas para ${firstName}`,
					html: `
						<h1>Formulario para pedido de actas</h1>
						
						<p>Nombre: ${firstName}</p>
						<p>Apellido: ${lastName}</p>
						<p>Email: ${email}</p>
						<p>Fecha de nacimiento: ${dob}</p>

						<h2><b>Datos del AVO:</b></h2>
						<p>Nombres AVO: ${nameAvo}</p>
						<p>Apellidos AVO: ${lastAvo}</p>
						<p>Fecha de nacimiento AVO: ${dobAvo}</p>
						<p>Lugar de nacimiento AVO: ${placeAvo}</p>
						<p>Nombre de los padres: ${parentsAvo}</p>
						<p>Info Extra: ${infoAvo}</p>
						<h2><b>Matrimonio:</b></h2><br/>
						<p>Comuna de matrimonio: ${comune}</p>
						<p>Fecha de matrimonio: ${dateMarriage}</p>
						<p>Esposa/o: ${couple}</p>

					`,
					content: base64Content,
					filename
				})
			})

			console.log(attachments)
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

	const buttonStyle =
		'my-2 w-full rounded-full bg-gray-700 px-5 py-2.5 text-center font-medium text-white hover:bg-yellow hover:text-black focus:ring-gray-700'

	const inputStyle =
		'resize-none rounded-lg w-full placeholder:italic placeholder:opacity-50 rounded-md border border-lightGreen bg-slate-100 py-2 my-2 px-4 text-base font-medium text-black outline-none focus:border-lightRed focus:shadow-md'

	const fieldSet = 'border-2 border-black p-4'

	return (
		<>
			<div className="mx-auto flex max-w-7xl flex-col justify-around gap-4 md:flex-row md:px-20">
				<div className="info px-6 md:max-w-[50%] md:px-0">
					<h2 className="titulo">Pedido de actas</h2>
					<p>
						El primer paso para obtener tu ciudadanía es ubicar los registros de tu antepasado, ¡y
						nosotros nos encargamos de eso por vos!
					</p>
					<p>
						Para iniciar la búsqueda, necesitamos información precisa sobre:
						<br />
						<br />◉ NOMBRE Y APELLIDO
						<br />◉ FECHA DE NACIMIENTO
						<br />◉ LUGAR DE ORIGEN
					</p>
					<p>
						Todo dato adicional, como los nombres de sus progenitores o algún documento, suma para
						hacer el proceso de búsqueda más rápido.
					</p>
					<p>
						Podemos solicitarla en el comune, si ya estaba establecido el registro civil, o bien
						podemos gestionarlo a través de la Diócesis o el Archivo Histórico si aún se realizaban
						registros en las Iglesias. <b>¡LO RELEVANTE!</b> es que se deben contar con todos los
						datos.
					</p>
					<p>
						Los comunes tienen plazos para responder que pueden variar de semanas a meses,
						dependiendo del comune/iglesia (de la cantidad de personal que tengan, de los pedidos
						previos y si van en orden de llegada, etc.).No es algo que dependa de quien lo solicita.
					</p>
					<h3 className="titulo">SOLICITUD DEL ACTA</h3>
					<p>
						Para iniciar, debes rellenar el formulario que aparece a continuación con toda la
						información requerida, tanto la tuya como la de tu AVO, la cual es necesaria para las
						solicitudes de actas en los comunes o iglesias.{' '}
					</p>
					<p>
						El precio varía según el número de actas que necesites solicitar y si son para el mismo
						comune o para distintas, o si provienen de parroquias/iglesias, en cuyo caso es
						necesario comunicarse con la Diócesis.
					</p>
					<p>
						<b>El acta está en un Comune (desde 1866-1871 en adelante).</b>
						<br />
						Para pedirla, por favor completa tus datos y los de tu AVO. <br />
						Si necesitas tanto el acta de nacimiento como la de matrimonio, y ambas deben ser
						emitidas por el mismo Comune, puedes incluir toda la información.
						<p>
							Si las actas corresponden al mismo Comune, pero una debe ser emitida por el Comune y
							la otra por la iglesia, debes hacer dos solicitudes diferentes. El costo del acta
							incluye el envío a través de correo ordinario.
						</p>
						Si prefieres recibirlo por <b>DHL</b>, tendrás que consultar por el servicio de acuerdo
						a donde te encuentres para enviarlo.
						<p>
							<b>IMPORTANTE:</b> Para comenzar la gestión, necesitamos un pago de 30€ como seña, que
							se descontará del precio final. Por favor, envía el recibo de pago junto con tu
							solicitud o a <i>info@italoadn.com</i>. Te enviaremos confirmación de tu solicitud.
							<br />
							Valor: <b>€90</b>
						</p>
					</p>
					<p>
						<b>El acta está en una iglesia (anterior a 1866-1871).</b>
						<br />
						Para solicitarla, por favor completa tus datos y los de tu AVO. Recibirás un correo
						electrónico con la confirmación de tu pedido. El costo del acta incluye el envío a
						través de correo ordinario . Si prefieres recibirlo por DHL, tendrás que consultar por
						el servicio de acuerdo a donde te encuentres para enviarlo.
						<p>
							<b>IMPORTANTE:</b> Para comenzar la gestión, necesitamos un pago de 30€ como seña, que
							se descontará del precio final. Por favor, envía el recibo de pago junto con tu
							solicitud o a <i>info@italoadn.com</i>. Te enviaremos confirmación de tu solicitud.
							<br />
							Valor: <b>€130</b>
						</p>
					</p>
				</div>
				<div>
					<h2 className="text-center font-bold">Formulario para el pedido de Actas</h2>
					<form
						onSubmit={handleSubmit}
						className="mx-auto mb-4 flex w-full max-w-lg flex-wrap rounded px-8 pb-8 pt-6 shadow-md"
					>
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
							<label htmlFor="couple">Nombre del cónyuge</label>
							<input
								className={inputStyle}
								type="text"
								name="couple"
								id="couple"
								placeholder="Maria"
							/>
						</fieldset>
						<fieldset className="max-w- border-2 border-black">
							<legend>Cargar documentos:</legend>
							<p className="p-2">
								Para cargar documentos, comprimir todos en un archivo <b>.zip o .rar</b>, cambiar el
								nombre del archivo a su nombre y cargarlo aquí.
							</p>
							<label className="label" htmlFor="attachments">
								<input
									onChange={onAddFileAction}
									type="file"
									name="attachments"
									id="attachments"
									multiple="multiple"
									accept=".rar, .zip"
								/>
								<span>Select a file</span>
							</label>
						</fieldset>
						<div className="mx-auto flex flex-col">
							<button className={buttonStyle} type="submit">
								CONSULTAR
							</button>
							{sentMessage && (
								<div className="text-center font-bold text-green-600">
									¡Formulario enviado! Pronto nos pondremos en contacto.
								</div>
							)}
						</div>
					</form>
				</div>
			</div>
		</>
	)
}
