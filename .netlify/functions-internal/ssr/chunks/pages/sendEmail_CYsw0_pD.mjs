import { Resend } from 'resend';

const resend = new Resend("re_Bnettfbr_PfENBzgHa7dq9dJQyw8UHZyk");
const POST = async ({ params, request }) => {
  const body = await request.json();
  const { to, from, html, subject } = body;
  if (!to || !from || !html || !subject) {
    return new Response(null, {
      status: 404,
      statusText: "Did not provided the right data"
    });
  }
  const send = await resend.emails.send({
    from,
    to,
    subject,
    html
  });
  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data
      }),
      {
        status: 200,
        statusText: "OK"
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: send.error
      }),
      {
        status: 500,
        statusText: "Internal server error"
      }
    );
  }
};

export { POST };
