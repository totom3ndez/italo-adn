/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, _ as __astro_tag_component__, n as Fragment, o as createVNode } from '../astro_6yWlFlVf.mjs';
import { $ as $$Image } from './about_BY7AcyKf.mjs';

const $$Astro$3 = createAstro("https://totom3ndez.github.io");
const $$BlogTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BlogTitle;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="my-6 border-b-4 border-b-darkRed px-4 py-2 text-lg font-bold uppercase md:text-xl"> ${text} </h2>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/components/BlogTitle.astro", void 0);

const $$Astro$2 = createAstro("https://totom3ndez.github.io");
const $$Important = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Important;
  const { text, bg } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(`mx-auto my-12 w-4/5 rounded-lg ${bg} p-2 italic text-center`, "class")}> ${text} </p>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/components/Important.astro", void 0);

const $$Astro$1 = createAstro("https://totom3ndez.github.io");
const $$LinkBlog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LinkBlog;
  const { href, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="text-darkRed underline" target="_blank"${addAttribute(href, "href")}>${text}</a>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/components/LinkBlog.astro", void 0);

const $$Astro = createAstro("https://totom3ndez.github.io");
const $$Dot = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dot;
  const { text, textStyle = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="m-2 flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-point-filled pr-3" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z" stroke-width="0" fill="currentColor"></path> </svg> <p${addAttribute(textStyle, "class")}>${text}</p> </div>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/components/icons/dot.astro", void 0);

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
  "postUrl": "/blog/beneficios-ciudadania",
  "slug": "beneficios-de-la-ciudadania",
  "layout": "../../layouts/PostLayout.astro",
  "postTitle": "Beneficios de la Ciudadan\xEDa Italiana",
  "author": "Loli \u2764\uFE0F",
  "description": "Que beneficios me da la ciudadan\xEDa italiana. \xBFSiempre se pudo obtener?",
  "image": {
    "url": "/beneficios-ciudadania.webp",
    "alt": "Beneficios de la ciudadania"
  },
  "pubDate": "17-05-2022"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$BlogTitle, {
      text: "\xBFSiempre se pudo tener doble ciudadan\xEDa?"
    }), "\n", createVNode(_components.p, {
      children: "La respuesta es no. Antes de 1992, deb\xEDas renunciar a la ciudadan\xEDa italiana si quer\xEDas obtener otra ciudadan\xEDa extranjera. Solo si hab\xEDas nacido en otro pa\xEDs y ten\xEDas a tu padre italiano pod\xEDas tener doble ciudadan\xEDa."
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "Una vez que entr\xF3 en vigencia la ley 91/92, se permiti\xF3 a los ciudadanos italianos tener dos\r\nciudadan\xEDas al mismo tiempo, sin tener que renunciar a la italiana, siempre y cuando el otro pa\xEDs\r\ntambi\xE9n lo permitiera."
      })
    }), "\n", createVNode(_components.p, {
      children: "En la actualidad, es posible tener al menos 3 o m\xE1s ciudadan\xEDas, si los pa\xEDses implicados est\xE1n de acuerdo."
    }), "\n", createVNode($$BlogTitle, {
      text: "Beneficios sin tener residencia legal"
    }), "\n", createVNode(_components.p, {
      children: "Primeramente, haremos una breve explicaci\xF3n de qu\xE9 es la Zona Schengen."
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "La zona Schengen es un tratado internacional entre la mayor\xEDa de los pa\xEDses de la Comunidad\r\nEuropea que nos permite viajar sin tener que mostrar nuestro pasaporte. Por ejemplo, siendo\r\nturista se exigen fondos econ\xF3micos, tener seguro m\xE9dico, pasaje de vuelta al pa\xEDs o salida, carta\r\nde invitaci\xF3n o reserva de hospedaje. Al ciudadano comunitario, reci\xE9n luego de 180 d\xEDas se le\r\npedir\xEDa un control de actividad."
      })
    }), "\n", createVNode("div", {
      class: "my-2 flex items-center",
      children: createVNode(_components.p, {
        children: [createVNode($$Dot, {}), " Una de las ventajas que tenemos al tener la ciudadan\xEDa italiana es la posibilidad de la\r\nlibre circulaci\xF3n en los pa\xEDses que conforman la Uni\xF3n Europea."]
      })
    }), "\n", createVNode("div", {
      class: "my-2 flex items-center",
      children: createVNode(_components.p, {
        children: [createVNode($$Dot, {}), " Tenemos ingreso libre a otros pa\xEDses que son extraeuropeos. De los 198 pa\xEDses que se\r\nencuentran enlistados en las Naciones Unidas, Italia no necesita solicitar visa en 188 de ellos.\r\nPodemos ingresar tan solo mostrando nuestra identificaci\xF3n en migraciones. Esto hace que los\r\nviajes sean m\xE1s baratos y r\xE1pidos, ya que no debemos recurrir a embajadas o consulados para\r\nsolicitar y abonar visas para el ingreso."]
      })
    }), "\n", createVNode("div", {
      class: "my-2 flex items-center",
      children: createVNode(_components.p, {
        children: [createVNode($$Dot, {}), " Por ejemplo, en EE.UU., no necesitamos visa, pero s\xED solicitan una autorizaci\xF3n\r\nelectr\xF3nica de viaje llamada Visa ESTA y a partir de las 24 horas estar\xEDamos recibiendo ese\r\npermiso."]
      })
    }), "\n", createVNode("div", {
      class: "my-2 flex items-center",
      children: createVNode(_components.p, {
        children: [createVNode($$Dot, {}), " Tenemos el derecho a vivir con la familia en estos pa\xEDses de la Uni\xF3n Europea, aunque\r\nnuestra familia no tenga ciudadan\xEDa europea."]
      })
    }), "\n", createVNode("div", {
      class: "my-2 flex items-center",
      children: [createVNode($$Dot, {}), createVNode(_components.p, {
        children: "Podemos solicitar residencia y trabajar en cualquiera de esos pa\xEDses si as\xED lo deseamos."
      })]
    }), "\n", createVNode("div", {
      class: "my-2 flex items-center",
      children: createVNode(_components.p, {
        children: [createVNode($$Dot, {}), " Muchas personas que tienen la ciudadan\xEDa residen en Italia propiamente y uno de los\r\nbeneficios que esto conlleva es poder tener seguridad social."]
      })
    }), "\n", createVNode("div", {
      class: "my-2 flex items-center",
      children: createVNode(_components.p, {
        children: [createVNode($$Dot, {}), " Tenemos acceso a becas estudiantiles que son exclusivas para ciudadanos de la Uni\xF3n\r\nEuropea.", " "]
      })
    }), "\n", createVNode("div", {
      class: "my-2 flex items-center",
      children: createVNode(_components.p, {
        children: [createVNode($$Dot, {}), " Frente a conflictos pol\xEDticos o sociales, el gobierno italiano protege a los ciudadanos y\r\nles da la posibilidad de radicarse en cualquier pa\xEDs de la Uni\xF3n Europea."]
      })
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFQu\xE9 otros beneficios tengo si adem\xE1s resido en Italia?"
    }), "\n", createVNode("div", {
      class: "my-2 flex items-center",
      children: createVNode(_components.p, {
        children: [createVNode($$Dot, {}), " Tenemos el derecho a votar. Incluso estando fuera del pa\xEDs, podemos hacerlo a trav\xE9s de la\r\nembajada del pa\xEDs en donde estemos."]
      })
    }), "\n", createVNode("div", {
      class: "my-2 flex items-center",
      children: createVNode(_components.p, {
        children: [createVNode($$Dot, {}), " Tenemos acceso a servicios m\xE9dicos y educaci\xF3n gratuita. No solo para nosotros, sino\r\ntambi\xE9n para los miembros de nuestra familia que residan en el pa\xEDs."]
      })
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFHay excepciones con la doble nacionalidad?"
    }), "\n", createVNode(_components.p, {
      children: "No todos los pa\xEDses autorizan a sus ciudadanos a tener una doble nacionalidad. Italia y Argentina poseen convenios que admiten que el egreso, ingreso y todo lo relacionado con regularizaci\xF3n migratoria se efect\xFAe eficazmente. Por estos motivos, es importante investigar antes de empezar a realizar cualquier tr\xE1mite de ciudadan\xEDa."
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
const url = "/blog/beneficios-ciudadania";
const file = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/beneficios-ciudadania.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/beneficios-ciudadania.mdx";

const beneficiosCiudadania = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	__usesAstroImage,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogTitle as $, $$Dot as a, $$Important as b, $$LinkBlog as c, beneficiosCiudadania as d };
