export const ContactForm = () => {
	const handleSubmit = async (e) => {
		e.preventDefault()
		const formData = new FormData(e.currentTarget)
		const { name, lastname } = Object.fromEntries(formData)

		try {
			const res = await fetch('/api/sendEmail.json', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					from: 'info@italoadn.com',
					to: 'info@italoadn.com',
					subject: `Email ${name}`,
					html: `<p>${lastname}</p>`,
					text: 'Hi'
				})
			})
		} catch (e) {
			console.error(e)
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" name="name" id="name" required placeholder="Nombre" />
				<input type="text" name="lastname" id="lastname" required placeholder="Apellido.." />
				<input type="submit" value="Enviar" />
			</form>
		</>
	)
}
