/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, _ as __astro_tag_component__, n as Fragment, o as createVNode } from '../astro_6yWlFlVf.mjs';
import { $ as $$Image } from './about_BY7AcyKf.mjs';
import { $ as $$BlogTitle, c as $$LinkBlog, a as $$Dot, b as $$Important } from './beneficios-ciudadania_CnkPf6UK.mjs';

const $$Astro = createAstro("https://totom3ndez.github.io");
const $$SubTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SubTitle;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="text-md my-3 px-2 py-2 font-bold md:text-xl"> ${text} </h2>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/components/SubTitle.astro", void 0);

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('../PostLayout_DuQPanH_.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    "server:root": true,
    children
  });
};
const frontmatter = {
  "postUrl": "/blog/fijar-residencia",
  "slug": "fijar-residencia",
  "layout": "../../layouts/PostLayout.astro",
  "postTitle": "Fijar residencia en Italia",
  "author": "Loli \u2764\uFE0F",
  "description": "Paso a paso de como llegar a italia y ser residentes legales.",
  "image": {
    "url": "/residencia.webp",
    "alt": "Imagen de una residencia en italia"
  },
  "pubDate": "17-05-2022"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    br: "br",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$BlogTitle, {
      text: "\xBFD\xD3NDE PUEDO FIJAR RESIDENCIA EN ITALIA PARA HACER LA CIUDADAN\xCDA?"
    }), "\n", " ", "\n", createVNode(_components.p, {
      children: "Podemos fijar residencia en una habitaci\xF3n que est\xE9 habilitada para tal fin, en una casa o en un departamento. Si vamos a solicitar la ciudadan\xEDa en un comune, la residencia debe estar ubicada en el mismo comune. No puedo fijar residencia en un comune y luego intentar solicitar la ciudadan\xEDa en otro. La residencia se fijar\xE1 en el comune donde presentemos nuestra carpeta para la ciudadan\xEDa italiana."
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFQU\xC9 OPCIONES TENEMOS PARA FIJAR RESIDENCIA?"
    }), "\n", createVNode(_components.p, {
      children: "Tenemos dos opciones: una es hacerlo mediante carta de hospitalidad y la otra mediante alquiler. A continuaci\xF3n, te explicamos qu\xE9 necesitas saber en cada caso."
    }), "\n", createVNode($$SubTitle, {
      text: "1.   CARTA DE HOSPITALIDAD"
    }), "\n", createVNode(_components.p, {
      children: ["Si tenemos alg\xFAn familiar o amigo nos puede alojar en su domicilio, podemos fijar residencia mediante ", createVNode($$LinkBlog, {
        text: "carta de hospitalidad",
        href: "/blog/declaracion-de-presencia"
      }), ". Quien nos est\xE9 alojando debe hacer una carta de hospitalidad o Cessione di Fabbricato para nosotros. Descargar ", createVNode($$LinkBlog, {
        text: "aqu\xED",
        href: "https://www.dropbox.com/scl/fi/16g0rt0h21z5aaasrkedi/cessione-di-fabbricato.pdf?rlkey=ybzouldzxb5tjen3vbspjcf8l&dl=0"
      }), " el formulario."]
    }), "\n", createVNode("span", {
      class: "p-2",
      children: [createVNode(_components.p, {
        children: "El formulario puede cambiar de acuerdo al comune donde est\xE9n."
      }), createVNode(_components.p, {
        children: "Ser\xE1 obligaci\xF3n de la persona que nos aloje declarar que X persona estar\xE1 residiendo en esa vivienda desde la fecha X. En muchos casos, se solicitar\xE1 que el propietario de la vivienda realice la declaraci\xF3n de hospitalidad con su documentaci\xF3n y el formulario correspondiente. Aunque tambi\xE9n puede suceder que la comuna acepte que lo hagamos nosotros mismos con toda la documentaci\xF3n completa. Cada comuna tiene un procedimiento diferente para realizar esta gesti\xF3n"
      })]
    }), "\n", createVNode($$SubTitle, {
      text: "2.   ALQUILER DE HABITACI\xD3N, CASA O DEPARTAMENTO"
    }), "\n", createVNode(_components.p, {
      children: ["Lo m\xE1s importante al fijar residencia mediante contrato de alquiler es que la propiedad est\xE9 apta para ello. Puedes alquilarla a un tercero o a una inmobiliaria.", createVNode(_components.br, {}), "\nLos complejos o lugares registrados como alojamientos tur\xEDsticos no son v\xE1lidos para fijar residencia."]
    }), "\n", createVNode("span", {
      class: "p-2",
      children: [createVNode(_components.p, {
        children: "Debemos tener en cuenta la duraci\xF3n del contrato aceptada por algunas comunas. Puede ser de 6, 8 meses o incluso de uno o dos a\xF1os."
      }), createVNode(_components.p, {
        children: "Por eso es importante dejar en claro y que incluyan en el contrato alguna cl\xE1usula por si necesitamos irnos antes de lo pactado"
      })]
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFD\xD3NDE CONSEGUIR ALQUILER?"
    }), "\n", createVNode("div", {
      class: "flex flex-row",
      children: [createVNode($$Dot, {}), createVNode(_components.p, {
        children: "Indagar en inmobiliarias de la zona a donde vayamos."
      })]
    }), "\n", createVNode("div", {
      class: "flex flex-row",
      children: [createVNode($$Dot, {}), createVNode(_components.p, {
        children: "En AIRBNB. Podemos consultar expresamente si el lugar que alquilan est\xE1 habilitado para fijar residencia."
      })]
    }), "\n", createVNode("div", {
      class: "flex flex-row",
      children: [createVNode($$Dot, {}), createVNode(_components.p, {
        children: "Conversar con personas que ya hayan estado en la misma comuna realizando el tr\xE1mite."
      })]
    }), "\n", createVNode("div", {
      class: "flex flex-row",
      children: [createVNode($$Dot, {}), createVNode(_components.p, {
        children: "En Facebook. Suelen haber grupos de Facebook en los comunas. Poniendo el nombre y \u201Caffitto\u201D (alquiler)."
      })]
    }), "\n", createVNode("div", {
      class: "flex flex-row",
      children: [createVNode($$Dot, {}), createVNode(_components.p, {
        children: "P\xE1ginas de internet como Subito e Idealista."
      })]
    }), "\n", createVNode($$BlogTitle, {
      text: "FIJAR RESIDENCIA EN EL ANAGRAFE"
    }), "\n", createVNode($$SubTitle, {
      text: "\xBFQu\xE9 es el Anagrafe?"
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "Es un \xE1rea dentro del comune donde se llevan a cabo tr\xE1mites de residencia y servicios p\xFAblicos\r\ncomo el escolar, militar, electoral, etc. Algunos comunes peque\xF1os no cuentan con separaci\xF3n entre\r\nel Stato Civile y el Anagrafe."
      })
    }), "\n", createVNode(_components.p, {
      children: "Cuando hayas encontrado el inmueble donde vivir\xE1s, ya sea alquilando o aloj\xE1ndote con alguien que te\r\nhaya hecho la carta de hospitalidad, es indispensable que vayas a registrar la residencia en el\r\nAnagrafe. Esto har\xE1 que ellos tengan conocimiento de que vamos a vivir en dicho lugar."
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFCU\xC1NDO DEBEMOS FIJAR RESIDENCIA PARA REALIZAR EL TR\xC1MITE DE LA CIUDADAN\xCDA?"
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "Esto va a depender de c\xF3mo se maneje la comuna. En ciertos comunes, revisan la carpeta primero y\r\nluego nos dan un comprobante para iniciar la gesti\xF3n de fijar residencia. Una vez que est\xE9\r\niniciada, podr\xE1s presentar la carpeta. En otros casos, te exigir\xE1n tener la residencia cerrada\r\nantes de poder presentar la carpeta e iniciar la pr\xE1ctica correspondiente."
      })
    }), "\n", createVNode(_components.p, {
      children: "En mi experiencia personal, me revisaron la carpeta y me dijeron que hasta que la residencia no\r\nestuviera cerrada y cargada en el sistema, no iniciar\xEDan la pr\xE1ctica."
    }), "\n", createVNode($$BlogTitle, {
      text: "REQUISITOS Y DOCUMENTACI\xD3N"
    }), "\n", createVNode("div", {
      class: "flex flex-row",
      children: [createVNode($$Dot, {}), createVNode(_components.p, {
        children: "Pasaporte y copia del mismo."
      })]
    }), "\n", createVNode("div", {
      class: "flex flex-row",
      children: [createVNode($$Dot, {}), createVNode(_components.p, {
        children: ["El ", createVNode($$LinkBlog, {
          text: "codice fiscale",
          href: "/blog/codice-fiscale"
        }), "."]
      })]
    }), "\n", createVNode("div", {
      class: "flex flex-row",
      children: [createVNode($$Dot, {}), createVNode(_components.p, {
        children: "Carta de hospitalidad o contrato (no olviden constatar con ellos la duraci\xF3n que debe tener en caso\r\nde ser un contrato de alquiler)."
      })]
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFQUI\xC9N SE ENCARGA DE VERIFICAR MI RESIDENCIA?"
    }), "\n", createVNode(_components.p, {
      children: "El \u201Cvigile\u201D, empleado municipal, es el encargado de verificar que efectivamente est\xE1s viviendo en la direcci\xF3n que proporcionaste como tu residencia."
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFQU\xC9 PODEMOS PREGUNTAR AL RESPECTO EN EL ANAGRAFE CUANDO FIJEMOS LA RESIDENCIA?"
    }), "\n", createVNode("div", {
      class: "flex flex-row",
      children: [createVNode($$Dot, {}), createVNode(_components.p, {
        children: "\xBFSuele el vigile hacer la verificaci\xF3n los fines de semana tambi\xE9n?"
      })]
    }), "\n", createVNode("div", {
      class: "flex flex-row",
      children: [createVNode($$Dot, {}), createVNode(_components.p, {
        children: "\xBFEn qu\xE9 horario podr\xEDa llegar a presentarse habitualmente?"
      })]
    }), "\n", createVNode("div", {
      class: "flex flex-row",
      children: [createVNode($$Dot, {}), createVNode(_components.p, {
        children: "\xBFCu\xE1ntas veces pasar\xE1 a realizar la verificaci\xF3n?"
      })]
    }), "\n", createVNode("div", {
      class: "flex flex-row",
      children: [createVNode($$Dot, {}), createVNode(_components.p, {
        children: "\xBFVuelve a pasar si no me encuentro en el domicilio? \xBFDejan alguna notificaci\xF3n de que han pasado si\r\nno estoy?"
      })]
    }), "\n", createVNode("div", {
      class: "flex flex-row",
      children: [createVNode($$Dot, {}), createVNode(_components.p, {
        children: "\xBFEn qu\xE9 momento se cierra la residencia?"
      })]
    }), "\n", createVNode($$Important, {
      text: "DATO: En mi experiencia, y tambi\xE9n como recomendaci\xF3n, les sugiero que coloquen su nombre y apellido en un lugar visible afuera del domicilio, para que el vigile pueda identificar f\xE1cilmente el lugar al que debe dirigirse. Adem\xE1s, aseg\xFArense de que el timbre funcione correctamente. Si saben que el timbre no est\xE1 funcionando, informen a las autoridades al fijar la residencia para que lo registren y as\xED puedan llamarlos cuando lleguen. En algunos casos, el vigile puede pasar m\xE1s de una vez, incluso si la residencia ya est\xE1 cerrada",
      bg: "bg-orange-50"
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/blog/fijar-residencia";
const file = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/fijar-residencia.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/fijar-residencia.mdx";

const fijarResidencia = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	__usesAstroImage,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SubTitle as $, fijarResidencia as f };
