/* empty css                          */
import { _ as __astro_tag_component__, n as Fragment, o as createVNode } from '../astro_6yWlFlVf.mjs';
import { $ as $$Image } from './about_BY7AcyKf.mjs';
import { $ as $$BlogTitle, c as $$LinkBlog, b as $$Important } from './beneficios-ciudadania_CnkPf6UK.mjs';

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
  "postUrl": "/blog/tessera-sanitaria",
  "slug": "tessera",
  "layout": "../../layouts/PostLayout.astro",
  "postTitle": "Tessera sanitaria",
  "author": "Loli \u2764\uFE0F",
  "description": "Que es y para que sirve la Tessera sanitaria",
  "image": {
    "url": "/tessera-sanitaria-scaled.webp",
    "alt": "Tessera sanitaria"
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
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$BlogTitle, {
      text: "\xBFQu\xE9 es la Tessera Sanitaria?"
    }), "\n", createVNode("span", {
      class: "p-2",
      children: [createVNode(_components.p, {
        children: ["La ", createVNode(_components.strong, {
          children: "Tessera Sanitaria"
        }), " es una tarjeta de salud que te permite acceder al Sistema de Salud italiano. Aqu\xED no existe el concepto de medicina prepaga."]
      }), createVNode(_components.p, {
        children: "Para aquellos que residan en Italia, esta tarjeta es un requisito obligatorio. Sin embargo, si no vas a residir en Italia, no es necesario obtenerla."
      })]
    }), "\n", createVNode(_components.p, {
      children: "La Tessera Sanitaria te permite acceder a la asistencia en el Centro Nacional de Asistencia M\xE9dica y en las instituciones afiliadas. Tambi\xE9n se utiliza para obtener el recibo parlante en las farmacias, lo cual es importante para obtener una reducci\xF3n del 19% en el costo de los medicamentos."
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFDonde se hace la Tessera Sanitaria?"
    }), "\n", createVNode(_components.p, {
      children: "La Tessera Sanitaria se tramita en Italia, espec\xEDficamente en la Azienda Sanitaria Locale (ASL), que puede entenderse como el Servicio Sanitario Nacional. Puedes realizar este tr\xE1mite en la ASL m\xE1s cercana a tu domicilio de residencia."
    }), "\n", createVNode($$BlogTitle, {
      text: "Cuanto se tarda en recibir la Tessera"
    }), "\n", createVNode(_components.p, {
      children: "Aqu\xED la duraci\xF3n del tr\xE1mite variar\xE1, por supuesto, dependiendo del comune y los tiempos que tome la gesti\xF3n. Por lo general, puede demorar entre 10 a 20 d\xEDas aproximadamente en llegar."
    }), "\n", createVNode($$BlogTitle, {
      text: "Requisitos para gestionar la Tessera Sanitaria"
    }), "\n", createVNode(_components.p, {
      children: "~ Si vamos a gestionarla con el permesso di soggiorno, debemos llevar el permiso y nos entregar\xE1n una tarjeta provisoria."
    }), "\n", createVNode(_components.p, {
      children: ["~ Si ya tenemos la ", createVNode($$LinkBlog, {
        text: "carta de identidad",
        href: "/blog/carta-identidad"
      }), " o el comprobante de que est\xE1 en tr\xE1mite llevamos eso directamente."]
    }), "\n", createVNode(_components.p, {
      children: ["~ Llevar el ", createVNode($$LinkBlog, {
        text: "codice fiscale",
        href: "/blog/codice-fiscale"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "En ocasiones, dependiendo de la comuna, pueden solicitarte que tengas un trabajo. Si no tienes empleo, puedes registrarte en las oficinas de trabajo de la comuna y presentar el comprobante que te den en la Azienda Sanitaria Locale (ASL)."
    }), "\n", createVNode($$Important, {
      text: "\xA1RECOMENDACI\xD3N!: En mi experiencia personal, recomiendo obtener la Tessera Sanitaria incluso si no tienen planeado vivir en Italia a largo plazo. Yo me mud\xE9 a Australia despu\xE9s de obtener la ciudadan\xEDa italiana en Italia. Australia e Italia tienen un acuerdo rec\xEDproco de salud mediante el cual puedes acceder al Sistema de Salud P\xFAblica en Australia.",
      bg: "bg-green-50"
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "Puedes solicitar la llamada MEDICARE. Uno de los requisitos es que seas residente de Italia o que\r\nal menos tengas documentaci\xF3n que demuestre tu residencia all\xED."
      })
    }), "\n", createVNode(_components.p, {
      children: "Si tienes la ciudadan\xEDa italiana, puedes acceder a MEDICARE incluso siendo turista. En mi caso, ten\xEDa mi Tessera Sanitaria, la carta de identidad y el pasaporte. Junto con eso, ten\xEDa mi visa aprobada para ingresar al pa\xEDs. Los formularios necesarios me fueron proporcionados y, una vez completados, recib\xED una tarjeta provisoria para utilizarla cuando lo necesitara. La tarjeta pl\xE1stica lleg\xF3 a mi domicilio en Australia dentro de las 3 semanas siguientes."
    }), "\n", createVNode($$Important, {
      text: "\xA1A tener en cuenta! La cobertura dura 6 meses o hasta que una de estas tarjetas o tu visa expire (lo primero que suceda). ",
      bg: "bg-gray-50"
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
const url = "/blog/tessera-sanitaria";
const file = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/tessera-sanitaria.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/tessera-sanitaria.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
