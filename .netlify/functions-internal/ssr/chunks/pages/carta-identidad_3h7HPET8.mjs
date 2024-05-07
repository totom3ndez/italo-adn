/* empty css                          */
import { _ as __astro_tag_component__, n as Fragment, o as createVNode } from '../astro_6yWlFlVf.mjs';
import { $ as $$Image } from './about_CK4oXOsd.mjs';
import { $ as $$BlogTitle, a as $$Dot, b as $$Important, c as $$LinkBlog } from './beneficios-ciudadania_BskCdwW-.mjs';

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('../PostLayout_CGh38SgR.mjs')).default;
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
  "postUrl": "/blog/carta-identidad",
  "slug": "carta-identita",
  "layout": "../../layouts/PostLayout.astro",
  "postTitle": "Carta de identidad",
  "author": "Loli \u2764\uFE0F",
  "description": "Que es y como solicitar la carta de identidad.",
  "image": {
    "url": "/carta-di-identita-scaled.webp",
    "alt": "Carta de identidad"
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
      text: "\xBFQu\xE9 es la carta de identidad (Carta di Identit\xE0)?"
    }), "\n", createVNode(_components.p, {
      children: "La carta de identidad o Carta di Identit\xE0 es el documento nacional de identidad italiano para los ciudadanos italianos."
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFCu\xE1ndo debemos tramitar la carta de identidad?"
    }), "\n", createVNode(_components.p, {
      children: "Luego de que seamos reconocidos como ciudadanos italianos y hayan transcripto nuestro acta de nacimiento, podemos comenzar con la gesti\xF3n de la carta de identidad italiana. Como ya hemos mencionado, depender\xE1 de cada comuna el procedimiento. Algunos solicitar\xE1n turno. Ya se lo informar\xE1n al momento de comenzar el tr\xE1mite."
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFD\xF3nde se gestiona la carta de identidad?"
    }), "\n", createVNode("div", {
      class: "my-2 flex items-center",
      children: createVNode(_components.p, {
        children: [createVNode($$Dot, {}), " La misma se realiza en el Ufficio Anagrafe del comune en italiano"]
      })
    }), "\n", createVNode("div", {
      class: "my-2 flex items-center",
      children: [createVNode($$Dot, {}), createVNode(_components.p, {
        children: "Si no estamos en Italia, se puede realizar en algunos consulados de Europa. Para poder hacerlo debemos\r\nestar inscriptos en el AIRE de ese consulado."
      })]
    }), "\n", createVNode($$BlogTitle, {
      text: "REQUISITOS:"
    }), "\n", createVNode("div", {
      class: "my-2 flex items-center",
      children: createVNode(_components.p, {
        children: [createVNode($$Dot, {}), "2 fotos carnet actuales"]
      })
    }), "\n", createVNode("div", {
      class: "my-2 flex items-center",
      children: [createVNode($$Dot, {}), createVNode(_components.p, {
        children: "Abonar la tasa de 25 euros aproximadamente"
      })]
    }), "\n", createVNode($$Important, {
      bg: "bg-green-100",
      text: "Revisen siempre los datos que vayan a colocar. Que todo este bien escrito y sin errores en nombres, apellidos y fechas."
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFCu\xE1nto demora tramitar la carta de identidad?"
    }), "\n", createVNode(_components.p, {
      children: "No suele tardar mas de 15 d\xEDas. Va a depender siempre de cada comuna, pero el tr\xE1mite para realizarla es sencillo."
    }), "\n", createVNode(_components.p, {
      children: ["Una vez que no otorguen el comprobante de la gesti\xF3n podemos gestionar la ", createVNode($$LinkBlog, {
        href: "/blog/tessera-sanitaria",
        text: "Tessera Sanitaria"
      }), " y en algunos casos (no todos) el pasaporte."]
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
const url = "/blog/carta-identidad";
const file = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/carta-identidad.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/carta-identidad.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
