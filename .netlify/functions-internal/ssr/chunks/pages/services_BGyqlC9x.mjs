/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_6yWlFlVf.mjs';
import { $ as $$Layout } from './404_CLVNCFom.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
/* empty css                             */

const serviceStore = atom('partidas');

function addService(service) {
	serviceStore.set(service);
}

const API$2 = "/api/sendEmail.json.ts";
function ServiceForm() {
  const [sentMessage, setSentMessage] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(e.currentTarget);
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
      couple
    } = Object.fromEntries(formData);
    try {
      const res = await fetch(API$2, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "info@italoadn.com",
          to: "info@italoadn.com",
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

					`
        })
      });
      setSentMessage(true);
      setTimeout(() => {
        setSentMessage(false);
      }, 7e3);
      form.reset();
    } catch (e2) {
      console.log(e2);
    }
  };
  const buttonStyle = "my-2 w-full rounded-full bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow hover:text-black focus:ring-gray-700";
  const inputStyle = "resize-none rounded-lg w-full placeholder:italic placeholder:opacity-50 rounded-md border border-lightGreen bg-white py-2 my-2 px-4 text-base font-medium text-black outline-none focus:border-lightRed focus:shadow-md";
  const fieldSet = "border-2 border-black p-4";
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex max-w-7xl flex-col justify-around gap-4 md:flex-row md:px-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "info px-6 md:max-w-[50%] md:px-0", children: [
      /* @__PURE__ */ jsx("h2", { className: "titulo", children: "Pedido de actas" }),
      /* @__PURE__ */ jsx("p", { children: "El primer paso para obtener tu ciudadanía es ubicar los registros de tu antepasado, ¡y nosotros nos encargamos de eso por vos!" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Para iniciar la búsqueda, necesitamos información precisa sobre:",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        "◉ NOMBRE Y APELLIDO",
        /* @__PURE__ */ jsx("br", {}),
        "◉ FECHA DE NACIMIENTO",
        /* @__PURE__ */ jsx("br", {}),
        "◉ LUGAR DE ORIGEN"
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Todo dato adicional, como los nombres de sus progenitores o algún documento, suma para hacer el proceso de búsqueda más rápido." }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Podemos solicitarla en el comune, si ya estaba establecido el registro civil, o bien podemos gestionarlo a través de la Diócesis o el Archivo Histórico si aún se realizaban registros en las Iglesias. ",
        /* @__PURE__ */ jsx("b", { children: "¡LO RELEVANTE!" }),
        " es que se deben contar con todos los datos."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Los comunes tienen plazos para responder que pueden variar de semanas a meses, dependiendo del comune/iglesia (de la cantidad de personal que tengan, de los pedidos previos y si van en orden de llegada, etc.).No es algo que dependa de quien lo solicita." }),
      /* @__PURE__ */ jsx("h3", { className: "titulo", children: "SOLICITUD DEL ACTA" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Para iniciar, debes rellenar el formulario que aparece a continuación con toda la información requerida, tanto la tuya como la de tu AVO, la cual es necesaria para las solicitudes de actas en los comunes o iglesias.",
        " "
      ] }),
      /* @__PURE__ */ jsx("p", { children: "El precio varía según el número de actas que necesites solicitar y si son para el mismo comune o para distintas, o si provienen de parroquias/iglesias, en cuyo caso es necesario comunicarse con la Diócesis." }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("b", { children: "ENVÍO:" }),
        " También ofrecemos el servicio de enviarte los documentos a Argentina o a donde estés residiendo."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-center text-lg font-bold", children: "Formulario para el pedido de Actas" }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "mx-auto mb-4 flex w-full max-w-lg flex-wrap rounded px-8 pb-8 pt-6 shadow-md",
          children: [
            /* @__PURE__ */ jsxs("fieldset", { className: fieldSet, children: [
              /* @__PURE__ */ jsx("legend", { children: "Tus datos:" }),
              /* @__PURE__ */ jsx("label", { htmlFor: "firstName", children: "Nombre" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: inputStyle,
                  type: "text",
                  name: "firstName",
                  id: "firstName",
                  placeholder: "Jose",
                  required: true,
                  "aria-label": "Campo de formulario para Nombre"
                }
              ),
              /* @__PURE__ */ jsx("label", { htmlFor: "lastName", children: "Apellido" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: inputStyle,
                  type: "text",
                  name: "lastName",
                  id: "lastName",
                  placeholder: "Ancellotti",
                  required: true,
                  "aria-label": "Campo de formulario para Apellido"
                }
              ),
              /* @__PURE__ */ jsx("label", { htmlFor: "email", children: "Email" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: inputStyle,
                  type: "email",
                  name: "email",
                  id: "email",
                  "aria-label": "Campo de formulario para Email",
                  placeholder: "ejemplo@gmail.com",
                  required: true
                }
              ),
              /* @__PURE__ */ jsx("label", { htmlFor: "dob", children: "Tu fecha de nacimiento" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: inputStyle,
                  type: "date",
                  name: "dob",
                  id: "dob",
                  "aria-label": "Campo de formulario para Fecha de nacimiento"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("fieldset", { className: fieldSet, children: [
              /* @__PURE__ */ jsx("legend", { children: "Datos de la partida:" }),
              /* @__PURE__ */ jsx("label", { htmlFor: "nameAvo", children: "Nombres del AVO" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: inputStyle,
                  type: "text",
                  name: "nameAvo",
                  id: "nameAvo",
                  placeholder: "Giuseppe",
                  required: true
                }
              ),
              /* @__PURE__ */ jsx("label", { htmlFor: "lastAvo", children: "Apellidos del AVO" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: inputStyle,
                  type: "text",
                  name: "lastAvo",
                  id: "lastAvo",
                  placeholder: "Ancellotti",
                  required: true
                }
              ),
              /* @__PURE__ */ jsx("label", { htmlFor: "dobAvo", children: "Fecha de nacimiento del AVO" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: inputStyle,
                  type: "date",
                  name: "dobAvo",
                  id: "dobAvo",
                  "aria-label": "Campo de formulario para Fecha de nacimiento del AVO",
                  required: true
                }
              ),
              /* @__PURE__ */ jsx("label", { htmlFor: "placeAvo", children: "Lugar de nacimiento del AVO" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: inputStyle,
                  type: "text",
                  name: "placeAvo",
                  id: "placeAvo",
                  placeholder: "Siracusa, Italia",
                  required: true
                }
              ),
              /* @__PURE__ */ jsx("label", { htmlFor: "parentsAvo", children: "Nombres de los padres" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: inputStyle,
                  type: "text",
                  name: "parentsAvo",
                  id: "parentsAvo",
                  placeholder: "Giuseppe Ancellotti y Maria Catanzaro"
                }
              ),
              /* @__PURE__ */ jsx("label", { htmlFor: "infoAvo", children: "Información extra del AVO" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  className: inputStyle,
                  name: "infoAvo",
                  id: "infoAvo",
                  placeholder: "Hermanos, hijos, familiares cercanos, lugares de eventos.."
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("fieldset", { className: fieldSet, children: [
              /* @__PURE__ */ jsx("legend", { children: "Matrimonio del AVO" }),
              /* @__PURE__ */ jsx("input", { className: "mr-2", type: "checkbox", name: "needMarriage", id: "needMarriage" }),
              /* @__PURE__ */ jsx("label", { htmlFor: "needMarriage", children: "Necesito el acta de matrimonio." }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsxs("small", { className: "text-orange-500", children: [
                "Si no lo necesitas, ",
                /* @__PURE__ */ jsx("b", { children: "no" }),
                " completar los datos."
              ] }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("label", { htmlFor: "comune", children: "Comuna del matrimonio" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: inputStyle,
                  type: "text",
                  name: "comune",
                  id: "comune",
                  placeholder: "comuna de Siracusa"
                }
              ),
              /* @__PURE__ */ jsx("label", { htmlFor: "dateMarriage", children: "Fecha de matrimonio" }),
              /* @__PURE__ */ jsx("input", { className: inputStyle, type: "date", name: "dateMarriage", id: "dateMarriage" }),
              /* @__PURE__ */ jsx("label", { htmlFor: "couple", children: "Nombre del conyuge" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  className: inputStyle,
                  type: "text",
                  name: "couple",
                  id: "couple",
                  placeholder: "Maria"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mx-auto flex flex-col", children: [
              /* @__PURE__ */ jsx("button", { className: buttonStyle, type: "submit", children: "CONSULTAR" }),
              sentMessage && /* @__PURE__ */ jsx("div", { className: "text-center font-bold text-green-600", children: "¡Formulario enviado! Pronto nos pondremos en contacto." })
            ] })
          ]
        }
      )
    ] })
  ] }) });
}

const API$1 = "/api/sendEmail.json";
function Asesoria() {
  const inputStyle = "resize-none rounded-lg w-full placeholder:italic placeholder:opacity-50 rounded-md border border-lightGreen bg-white py-2 my-2 px-4 text-base font-medium text-black outline-none focus:border-lightRed focus:shadow-md";
  const fieldSet = "border-2 border-black p-4 font-bold";
  const buttonStyle = "my-2 w-full rounded-full bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow hover:text-black focus:ring-gray-700";
  const [sentMessage, setSentMessage] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(e.currentTarget);
    const { name, email, message } = Object.fromEntries(formData);
    try {
      const res = await fetch(API$1, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          to: "info@italoadn.com",
          from: "info@italoadn.com",
          subject: `Nueva asesoría para ${name}`,
          html: `
						<h1>Formulario de Asesoría</h1>
						
						<p>Nombre: ${name}</p>
						<p>Apellido: ${email}</p>
						<p>Mensaje: ${message}</p>
					`
        })
      });
      setSentMessage(true);
      setTimeout(() => {
        setSentMessage(false);
      }, 7e3);
      form.reset();
    } catch (e2) {
      console.log(e2);
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex flex-col justify-around gap-4 md:max-w-4xl md:px-20", children: [
    /* @__PURE__ */ jsx("h2", { className: "titulo", children: "ASESORÍA CIUDADANÍA ITALIANA" }),
    /* @__PURE__ */ jsx("p", { children: "Sé que seguramente estás haciendo todo lo posible para tramitar tu ciudadanía italiana y así poder emigrar." }),
    /* @__PURE__ */ jsx("p", { children: "Durante todo este proceso, es posible que surjan miedos, inquietudes y dudas que hacen que no estés iniciando tu trámite o que te trabes a la mitad." }),
    /* @__PURE__ */ jsx("p", { children: "Te guío en el proceso, y ayudo a responder tus dudas. Podemos ajustarlo al horario que más te convenga, ya que es Online." }),
    /* @__PURE__ */ jsx("h3", { className: "titulo", children: "¿Cuánto tiempo dura la asesoría?" }),
    /* @__PURE__ */ jsx("p", { children: "Esto depende del tipo de asesoría que necesites. Hay dos tipos:" }),
    /* @__PURE__ */ jsxs("p", { className: "ml-6", children: [
      /* @__PURE__ */ jsx("b", { children: "○ ASESORÍA LUXE:" }),
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Para conversar con el consultor y plantear tu caso. ",
      /* @__PURE__ */ jsx("b", { children: "Duración: 60 minutos" })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "ml-6", children: [
      /* @__PURE__ */ jsx("b", { children: "○ ASESORÍA CLEVER: " }),
      " ",
      /* @__PURE__ */ jsx("br", {}),
      "Para aclarar tus dudas con el consultor. ",
      /* @__PURE__ */ jsx("b", { children: "Duración: 30 minutos" })
    ] }),
    /* @__PURE__ */ jsx("h3", { className: "titulo", children: "¿Necesito una asesoría LUXE o CLEVER?" }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Esto variará dependiendo de tu caso particular. Por ejemplo, si aún no has comenzado tu trámite porque no sabes cómo hacerlo o dónde hacerlo, o si no estás seguro si es por vía judicial o administrativa, lo recomendable sería agendar una asesoría ",
      /* @__PURE__ */ jsx("b", { children: "Luxe" }),
      ", ya que son casos que requieren más tiempo para poder guiarte."
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Ahora, si ya comenzaste y tienes dudas puntuales que te frenaron o surgieron mientras realizabas tu trámite, lo mejor sería una asesoría ",
      /* @__PURE__ */ jsx("b", { children: "Clever" }),
      ", ya que en 30 minutos podría ayudarte a encontrar una solución o despejar dudas."
    ] }),
    /* @__PURE__ */ jsx("h3", { className: "titulo", children: "COSTO DE LAS ASESORÍAS" }),
    /* @__PURE__ */ jsxs("p", { children: [
      "LUXE ",
      /* @__PURE__ */ jsx("b", { children: "45€" }),
      " / CLEVER ",
      /* @__PURE__ */ jsx("b", { children: "25€" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-2xl mx-auto py-8", children: [
      /* @__PURE__ */ jsx("p", { children: "Completa este formulario para solicitar tu asesoría." }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "mx-auto w-1/2", children: [
        /* @__PURE__ */ jsxs("fieldset", { className: fieldSet, children: [
          /* @__PURE__ */ jsx("legend", { children: "Quiero mi asesoría" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: inputStyle,
              placeholder: "Nombre completo",
              type: "text",
              name: "name",
              id: "name",
              required: true
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: inputStyle,
              placeholder: "email",
              type: "email",
              name: "email",
              id: "email",
              required: true
            }
          ),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              placeholder: "Quiero mi asesoría porque...",
              className: inputStyle,
              name: "message",
              id: "message",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsx("input", { type: "submit", value: "Enviar", className: buttonStyle }),
        sentMessage && /* @__PURE__ */ jsx("div", { className: "text-center font-bold text-green-600", children: "¡Formulario enviado! Pronto nos pondremos en contacto." })
      ] })
    ] })
  ] }) });
}

function ActasEspañolas() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex flex-col justify-around gap-4 md:max-w-4xl md:px-20", children: [
    /* @__PURE__ */ jsx("h2", { className: "titulo", children: "ACTAS ESPAÑOLAS" }),
    /* @__PURE__ */ jsx("p", { children: "Te ofrecemos gestionar una llamada al Registro Civil o al ayuntamiento español para conocer los detalles del procedimiento de solicitud y el método de envío." }),
    /* @__PURE__ */ jsx("p", { children: "Cada municipio tiene sus propias políticas, aunque generalmente el envío por correo es gratuito, incluso al extranjero." }),
    /* @__PURE__ */ jsx("p", { children: "Después de la llamada, te guiaremos sobre cómo realizar la solicitud según el procedimiento que detallen." }),
    /* @__PURE__ */ jsx("p", { children: "Proporcionaremos la información de contacto (correo electrónico) para que el interesado solicite el certificado. Luego, la comunicación será directa entre el interesado y el ayuntamiento." }),
    /* @__PURE__ */ jsxs("p", { children: [
      "El servicio de gestión tiene un costo de ",
      /* @__PURE__ */ jsx("b", { children: "30€" })
    ] })
  ] }) });
}

function Investigacion() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex flex-col justify-around gap-4 md:max-w-4xl md:px-20", children: [
    /* @__PURE__ */ jsx("h2", { className: "titulo", children: "Servicio de Investigación Genealógica" }),
    /* @__PURE__ */ jsx("p", { className: "px-15 italic opacity-75", children: "Antes que nada, cabe destacar que este tipo de investigación no solo la realizamos con documentos Italianos, sino también con partidas españolas y francesas." }),
    /* @__PURE__ */ jsx("p", { children: "Este tipo de exploración se solicita cuando necesitamos obtener el registro de nuestro AVO, pero nos falta algún detalle, por ejemplo:" }),
    /* @__PURE__ */ jsxs("div", { className: "ml-5 flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { children: "●" }),
      /* @__PURE__ */ jsx("p", { children: "Conocemos la fecha precisa, la provincia, pero desconocemos el Comune." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "ml-5 flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { children: "●" }),
      /* @__PURE__ */ jsx("p", { children: "Tenemos una fecha aproximada y la región." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "ml-5 flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { children: "●" }),
      /* @__PURE__ */ jsx("p", { children: "Tenemos una fecha aproximada, pero puede haber uno o varios lugares." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "ml-5 flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { children: "●" }),
      /* @__PURE__ */ jsx("p", { children: "Tenemos una fecha aproximada y una ubicación aproximada." })
    ] }),
    /* @__PURE__ */ jsx("p", { children: 'Cuanta más información podamos proporcionar sobre la persona que estamos intentando localizar, mayores serán las posibilidades de éxito en la búsqueda. Es crucial que indiquemos la provincia, la región o el Comune, ya que si solo especificamos "Italia", y si tienes algún acta o documento que mencione a estas personas mucho mejor, sino, las probabilidades de concluir la investigación con éxito disminuyen considerablemente.' }),
    /* @__PURE__ */ jsx("p", { children: "Hacemos una revisión con la información que tengas, gratis, para ver si podemos buscar algo, en 24/48 hs. Después de eso, te decimos sinceramente si vale la pena hacer una búsqueda oficial pagando o no." }),
    /* @__PURE__ */ jsx("p", { children: "Si no lo veo o entiendo que es posible, te lo informaré y ahí terminará la investigación. Si es viable, comenzamos de inmediato con la siguiente etapa del trabajo y con su correspondiente costo formal." }),
    /* @__PURE__ */ jsx("p", { children: "Actualmente, el precio de una búsqueda oficial (después de la evaluación inicial) es de 230€, que se divide en dos pagos: 115€ para comenzar y otros 115€ al finalizar, una vez obtenido el resultado final y el o los documentos necesarios, dependiendo del objetivo que hayamos establecido." }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("b", { className: "p-2", children: "¡IMPORTANTE!" }),
      " Es importante destacar que al aceptar el análisis gratuito, se requiere un compromiso sincero de tu parte, ya que implica horas de trabajo activo. Por lo tanto, si resulta viable y decides no seguir adelante de manera formal, significará una pérdida total de horas de trabajo. Es por eso que se te informa desde el principio sobre los costos involucrados. Por ejemplo, si solicitas el análisis, resulta viable y luego decides no continuar, todas las horas dedicadas se perderán."
    ] }),
    /* @__PURE__ */ jsx("p", { children: "Este servicio no implica la solicitud del acta al Comune o la iglesia. Si alguien lo desea, puede solicitarnos el servicio de pedido de acta." })
  ] }) });
}

function Control() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex flex-col justify-around gap-4 md:max-w-4xl md:px-20", children: [
    /* @__PURE__ */ jsx("h2", { className: "titulo", children: "SERVICIO DE CONTROL DE CARPETA" }),
    /* @__PURE__ */ jsx("p", { children: "A la hora de presentar tu carpeta, ya sea en el consulado que te corresponde o en Italia, la documentación no debe tener inconsistencias en cuanto a nombres, edades, lugares, familiares, etc." }),
    /* @__PURE__ */ jsx("p", { children: "Nos encargamos del control exhaustivo de las actas para determinar si es necesario realizar rectificaciones, o si ya estás en condiciones de continuar con la siguiente etapa de proceso." }),
    /* @__PURE__ */ jsx("h2", { className: "titulo", children: "¿CÓMO PUEDO ADQUIRIR EL SERVICIO?" }),
    /* @__PURE__ */ jsx("p", { children: "Para solicitar el servicio, te solicitamos que tengas disponible la siguiente información:" }),
    /* @__PURE__ */ jsxs("div", { className: "ml-5 flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { children: "●" }),
      /* @__PURE__ */ jsx("p", { children: "Escaneo de tus certificados o certificados digitalizados (que no sean imágenes, para una mejor claridad)." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "ml-5 flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { children: "●" }),
      /* @__PURE__ */ jsx("p", { children: "Es importante que los certificados sean legibles; si no lo son, necesitaremos alguna explicación por tu parte sobre su contenido." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "ml-5 flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { children: "●" }),
      /* @__PURE__ */ jsx("p", { children: "Árbol genealógico para comprender la línea de descendencia." })
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("b", { children: "OBLIGATORIO:" }),
      " Para llevar a cabo el análisis, la carpeta debe estar completa; por lo tanto, recomendamos que al contratar el servicio incluyas todos los certificados que forman parte de la línea. No realizamos análisis parciales de la carpeta."
    ] }),
    /* @__PURE__ */ jsx("p", { children: "El valor por cada control de acta es de €10." })
  ] }) });
}

const API = "/api/sendEmail.json.ts";
const Traducciones = () => {
  const inputStyle = "resize-none rounded-lg w-full placeholder:italic placeholder:opacity-50 rounded-md border border-lightGreen bg-white py-2 my-2 px-4 text-base font-medium text-black outline-none focus:border-lightRed focus:shadow-md";
  const fieldSet = "border-2 border-black p-4 font-bold";
  const buttonStyle = "my-2 w-full rounded-full bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow hover:text-black focus:ring-gray-700";
  const [sentMessage, setSentMessage] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(e.currentTarget);
    const { name, email, number } = Object.fromEntries(formData);
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "info@italoadn.com",
          to: "info@italoadn.com",
          subject: `Pedido de traducciones para ${name}`,
          html: `
						<h1>Formulario de traducciones</h1>
						
						<p>Nombre: ${name}</p>
						<p>Apellido: ${email}</p>
						<p>Numero de actas: ${number}</p>
					`
        })
      });
      setSentMessage(true);
      setTimeout(() => {
        setSentMessage(false);
      }, 7e3);
      form.reset();
    } catch (e2) {
      console.log(e2);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto flex flex-col justify-around gap-4 md:max-w-4xl md:px-20", children: [
    /* @__PURE__ */ jsx("h2", { className: "titulo", children: "Traducciones" }),
    /* @__PURE__ */ jsx("p", { children: "Para iniciar el proceso de solicitud de Ciudadanía Italiana en Italia, es imprescindible realizar la traducción de los registros que conforman tu carpeta y que no sean de origen italiano." }),
    /* @__PURE__ */ jsx("p", { children: "En consecuencia, los papeles que requieren traducción son aquellos redactados en idiomas distintos al italiano:" }),
    /* @__PURE__ */ jsxs("ul", { className: "ml-10 list-disc", children: [
      /* @__PURE__ */ jsx("li", { children: "Actas de nacimiento" }),
      /* @__PURE__ */ jsx("li", { children: "Actas de matrimonio" }),
      /* @__PURE__ */ jsx("li", { children: "Certificado de defunción" }),
      /* @__PURE__ */ jsx("li", { children: " Certificado de no naturalización" }),
      /* @__PURE__ */ jsx("li", { children: "Certificados de soltería" }),
      /* @__PURE__ */ jsx("li", { children: "Autorizaciones" }),
      /* @__PURE__ */ jsx("li", { children: "Certificados de adopción, etc." })
    ] }),
    /* @__PURE__ */ jsx("p", { children: "Luego de que hayas traducido los documentos deberás darles una validez legal a los mismos. Estos pueden ser mediante:" }),
    /* @__PURE__ */ jsxs("ul", { className: "ml-10 flex list-disc flex-col gap-2", children: [
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("b", { children: "Visto Consular:" }),
        " La validación de las traducciones se lleva a cabo en el consulado italiano ubicado en tu país, donde el traductor responsable de realizarlas está registrado. Para este procedimiento, es necesario que te asesores sobre los requisitos del consulado correspondiente a tu país y/o provincia ."
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("b", { children: "Doble apostilla:" }),
        " La doble apostilla se refiere al procedimiento de legalización de documentos para que sean reconocidos internacionalmente en países que son parte del Convenio de La Haya sobre Apostilla. Consiste en la certificación de un documento por parte de la autoridad competente en el país de origen y luego por el Ministerio de Relaciones Exteriores del mismo país. Este proceso asegura la autenticidad del documento y su validez en el extranjero sin necesidad de más trámites de legalización. En resumen, la doble apostilla en Argentina implica obtener dos apostillas en el país de origen del documento para que sea reconocido en países que forman parte del Convenio de La Haya."
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("b", { children: "Aseveración en Italia:" }),
        " La legalización de las traducciones se realiza en los tribunales de justicia italianos. Puede llevarse a cabo en cualquier municipio de Italia y es válida en todo el territorio nacional."
      ] })
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "titulo", children: "¿CÓMO CONTRATAR EL SERVICIO DE TRADUCCIÓN?" }),
    /* @__PURE__ */ jsx("p", { children: "Cabe destacar que la traducción la realiza un traductor matriculado en Italia." }),
    /* @__PURE__ */ jsx("p", { children: "Para proceder con la traducción de tus actas, es fundamental que estas estén en su totalidad. Por ejemplo: un acta de nacimiento completa, legalizada y apostillada equivale a una: 1 sola acta." }),
    /* @__PURE__ */ jsx("h2", { className: "titulo", children: "¿CÓMO CALCULAR EL VALOR??" }),
    /* @__PURE__ */ jsx("p", { children: "Para realizar este cálculo, debes considerar las actas completas. Por ejemplo:" }),
    /* @__PURE__ */ jsxs("ul", { className: "ml-10 list-disc", children: [
      /* @__PURE__ */ jsx("li", { children: "Certificado de No Naturalización + Apostilla = 1 Acta" }),
      /* @__PURE__ */ jsx("li", { children: " Acta de Nacimiento + Legalización + Apostilla = 1 Acta." }),
      /* @__PURE__ */ jsx("li", { children: "Acta de Matrimonio + Legalización + Apostilla = 1 Acta." }),
      /* @__PURE__ */ jsx("li", { children: "Acta de Defunción + Legalización + Apostilla = 1 Acta." }),
      /* @__PURE__ */ jsx("li", { children: " Información Sumaria + Legalización + Apostilla = 1 Acta" }),
      /* @__PURE__ */ jsx("li", { children: " Sentencia de Divorcio + Legalización + Apostilla = 1 Acta" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "italic text-gray-600 underline", children: "Hacemos apostillas que sean únicamente digitales por el momento." }),
    /* @__PURE__ */ jsxs("p", { children: [
      "El valor de traducción por acta es de ",
      /* @__PURE__ */ jsx("b", { children: "€22" })
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "titulo", children: "¿CUÁNTO TARDA EL SERVICIO?" }),
    /* @__PURE__ */ jsx("p", { children: "Dependerá de algunos factores, pero en principio de 10 A 15 días hábiles desde que recibimos las actas completas." }),
    /* @__PURE__ */ jsx("h3", { className: "text-center text-lg font-bold", children: "Pedir traducciones rellenando este formulario:" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "mx-auto w-1/2", children: [
      /* @__PURE__ */ jsxs("fieldset", { className: fieldSet, children: [
        /* @__PURE__ */ jsx("legend", { children: "Quiero traducir mis actas" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: inputStyle,
            placeholder: "Nombre completo",
            type: "text",
            name: "name",
            id: "name",
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: inputStyle,
            placeholder: "email",
            type: "email",
            name: "email",
            id: "email",
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          "input",
          {
            className: inputStyle,
            type: "number",
            name: "number",
            id: "number",
            required: true,
            min: 1,
            max: 30,
            placeholder: "1"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("input", { type: "submit", value: "Enviar", className: buttonStyle }),
      sentMessage && /* @__PURE__ */ jsx("div", { className: "text-center font-bold text-green-600", children: "¡Formulario enviado! Pronto nos pondremos en contacto." })
    ] })
  ] });
};

function SelectInput() {
  const [service, setService] = useState("");
  const $selectedService = useStore(serviceStore);
  const Servicios = [
    {
      name: "Búsqueda de actas Italianas",
      value: "partidas"
    },
    {
      name: "Asesoría personalizada",
      value: "asesoria"
    },
    {
      name: "Actas españolas",
      value: "españolas"
    },
    {
      name: "Investigación genealogica",
      value: "investigacion"
    },
    {
      name: "Control de carpeta",
      value: "control"
    },
    {
      name: "Traducciones",
      value: "traduccion"
    }
  ];
  const buttonStyle = "my-2 w-fit rounded-full bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow hover:text-black focus:ring-gray-700";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-center text-2xl md:text-4xl", children: "Servicios" }),
      /* @__PURE__ */ jsx(
        "select",
        {
          onChange: (e) => {
            setService(e.target.value);
          },
          className: "rounded-lg border border-lightRed p-2 text-center",
          id: "mySelect",
          name: "servicesSelect",
          children: Servicios.map((service2) => {
            return /* @__PURE__ */ jsx("option", { value: service2.value, children: service2.name }, service2.name);
          })
        }
      ),
      /* @__PURE__ */ jsx("button", { className: buttonStyle, onClick: () => addService(service), children: "Mostrar servicio" })
    ] }),
    /* @__PURE__ */ jsx("div", { id: "service-container", className: "pt-20", children: $selectedService === "partidas" && /* @__PURE__ */ jsx(ServiceForm, { "client:load": true }) || $selectedService === "asesoria" && /* @__PURE__ */ jsx(Asesoria, { "client:load": true }) || $selectedService === "españolas" && /* @__PURE__ */ jsx(ActasEspañolas, { "client:load": true }) || $selectedService === "investigacion" && /* @__PURE__ */ jsx(Investigacion, { "client:load": true }) || $selectedService === "control" && /* @__PURE__ */ jsx(Control, { "client:load": true }) || $selectedService === "traduccion" && /* @__PURE__ */ jsx(Traducciones, { "client:load": true }) || /* @__PURE__ */ jsx("p", { children: "Seleccionar servicio" }) })
  ] });
}

const $$Astro = createAstro("https://totom3ndez.github.io");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Servicios - Italo ADN", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto min-h-screen max-w-[1200px] bg-white py-40" data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "SelectInput", SelectInput, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/components/SelectInput.jsx", "client:component-export": "default", "data-astro-cid-ucd2ps2b": true })} </section> ` })} `;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/services.astro", void 0);

const $$file = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/services.astro";
const $$url = "/services";

export { $$Services as default, $$file as file, $$url as url };
