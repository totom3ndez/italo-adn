/* empty css                          */
import { _ as __astro_tag_component__, n as Fragment, o as createVNode } from '../astro_6yWlFlVf.mjs';
import { $ as $$Image } from './about_BY7AcyKf.mjs';
import { $ as $$BlogTitle, b as $$Important, c as $$LinkBlog } from './beneficios-ciudadania_CnkPf6UK.mjs';

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
  "postUrl": "/blog/certificado-no-naturalizacion",
  "slug": "cnn",
  "layout": "../../layouts/PostLayout.astro",
  "postTitle": "Certificado de no naturalizaci\xF3n",
  "author": "Loli \u2764\uFE0F",
  "description": "Que es y como se solicita el CNN.",
  "image": {
    "url": "/cne.webp",
    "alt": "Camara nacional electoral"
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
      text: "\xBFQu\xE9 es el certificado de no naturalizaci\xF3n?"
    }), "\n", createVNode(_components.p, {
      children: "El certificado de no naturalizaci\xF3n es un documento oficial y el m\xE1s importante que debemos tener en nuestra carpeta de ciudadan\xEDa. Indica si nuestro AVO italiano se naturaliz\xF3 o no en nuestro pa\xEDs u otro. Si nunca se naturaliz\xF3, podemos seguir tramitando, ya que ha mantenido la ciudadan\xEDa y, por ende, la transmisi\xF3n de esa ciudadan\xEDa italiana. Si se naturaliz\xF3 en nuestro pa\xEDs u otro, perdi\xF3 la ciudadan\xEDa e interrumpi\xF3 esa cadena de transmisi\xF3n, salvo algunos atenuantes que pueden hacer que se pueda seguir adelante."
    }), "\n", createVNode($$Important, {
      bg: "bg-red-100",
      text: "\xA1ATENTI! Lo m\xE1s importante es saber en qu\xE9 fecha ocurri\xF3 esa naturalizaci\xF3n."
    }), "\n", createVNode(_components.p, {
      children: "Por ejemplo, si el AVO se naturaliz\xF3 en 1940 y el hijo de ese AVO naci\xF3 antes, mantuvo el derecho a ser reconocido como italiano porque naci\xF3 cuando su padre a\xFAn era italiano y hered\xF3 ese derecho al reconocimiento."
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "En el momento en que se naturaliza en el pa\xEDs, ese hijo pierde la posibilidad de reconocimiento de\r\nla ciudadan\xEDa italiana, ya que se considera que el mismo naci\xF3 de un padre que \u201Cno es italiano\u201D y\r\ntransmite la nacionalidad del pa\xEDs en el que se naturaliz\xF3. Salvo en condiciones donde se pueda\r\naplicar la LEY N\xB0 20.588 acerca del convenio de doble ciudadan\xEDa o casos de enrolamiento de los\r\na\xF1os 1927/1928."
      })
    }), "\n", createVNode(_components.p, {
      children: "Estos ser\xEDan casos particulares, donde hay que hacer un an\xE1lisis de su viabilidad."
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFD\xF3nde hay que solicitar este certificado?"
    }), "\n", createVNode(_components.p, {
      children: ["Actualizaci\xF3n 2022: Previo a la pandemia, el certificado se pod\xEDa solicitar de forma presencial en la C\xE1mara Nacional Electoral. Actualmente, el procedimiento se digitaliz\xF3 y tanto el formulario como la documentaci\xF3n deben completarse a trav\xE9s de este ", createVNode($$LinkBlog, {
        href: "https://formularios.electoral.gob.ar/f03/",
        text: "enlace"
      }), "."]
    }), "\n", createVNode($$LinkBlog, {
      href: "https://www.youtube.com/watch?v=z_gYKgGvzNE",
      text: "Aqu\xED podr\xE1n ver un tutorial, paso a paso, para realizar la solicitud."
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFQu\xE9 documentos necesito para solicitar el certificado de no naturalizaci\xF3n?"
    }), "\n", createVNode(_components.p, {
      children: "\u2013 Original del acta de nacimiento del AVO."
    }), "\n", createVNode(_components.p, {
      children: "\u2013 Acta de defunci\xF3n."
    }), "\n", createVNode("span", {
      class: "p-2",
      children: [createVNode(_components.p, {
        children: "Tambi\xE9n se deben presentar los documentos que avalen el v\xEDnculo con esa persona, pueden ser familiares (ascendientes, descendientes, hermanos/as, c\xF3nyuges y convivientes), abogados o apoderados (adjuntando fotocopia autenticada del poder ante escribano/a p\xFAblico/a)."
      }), createVNode(_components.p, {
        children: ["Una vez solicitado el certificado, ", createVNode($$LinkBlog, {
          href: "https://formularios.electoral.gob.ar/busqueda-de-certificados-digitales-emitidos/",
          text: "aqu\xED"
        }), " puedes ver el estado del mismo, ingresando tu n\xFAmero de formulario."]
      })]
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
const url = "/blog/certificado-no-naturalizacion";
const file = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/certificado-no-naturalizacion.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/certificado-no-naturalizacion.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
