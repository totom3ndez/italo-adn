import type { APIRoute } from 'astro'
import { Resend } from 'resend'

const resend = new Resend(import.meta.env.API_RESEND)

export const POST: APIRoute = async ({ request }) => {
	const body = await request.json()
	const { to, from, html, subject, content, filename } = body

	if (!to || !from || !html || !subject) {
		return new Response(null, {
			status: 404,
			statusText: 'Did not provided the right data'
		})
	}

	try {
		const send = await resend.emails.send({
			from,
			to,
			subject,
			html,
			attachments: [
				{
					content,
					filename
				}
			]
		})

		return new Response(
			JSON.stringify({
				message: send.data
			}),
			{
				status: 200,
				statusText: 'Email sent successfully'
			}
		)
	} catch (err) {
		console.log(err.message)
		return new Response(
			JSON.stringify({
				message: err.message
			}),
			{
				status: 500,
				statusText: 'Internal server error'
			}
		)
	}
}
