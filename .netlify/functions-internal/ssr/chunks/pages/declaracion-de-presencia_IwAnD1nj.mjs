/* empty css                          */
import { _ as __astro_tag_component__, n as Fragment, o as createVNode } from '../astro_6yWlFlVf.mjs';
import { $ as $$Image } from './about_BY7AcyKf.mjs';
import { $ as $$BlogTitle, c as $$LinkBlog } from './beneficios-ciudadania_CnkPf6UK.mjs';

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
  "postUrl": "/blog/declaracion-de-presencia",
  "slug": "declaracion-de-presencia",
  "layout": "../../layouts/PostLayout.astro",
  "postTitle": "Declaraci\xF3n de Presencia",
  "author": "Loli \u2764\uFE0F",
  "description": "Es necesaria en tu llegada a Italia, el primer paso para el tramite de la ciudadania. Est",
  "image": {
    "url": "/declaracion.webp",
    "alt": "Documento para declarar la entrada"
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
      text: "DECLARACI\xD3N DE PRESENCIA"
    }), "\n", createVNode(_components.p, {
      children: ["Si ingresamos al espacio Schengen por un pa\xEDs que no haya sido Italia, debemos realizar la declaraci\xF3n de presencia. Puedes encontrar la lista de pa\xEDses que conforman el espacio Schengen ", createVNode($$LinkBlog, {
        text: "aqu\xED",
        href: "https://www.hablamosdeeuropa.es/es/Paginas/El-espacio-Schengen.aspx"
      }), ". Al realizarla, se registra la fecha de ingreso al pa\xEDs."]
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "No todas las comunas requieren la declaraci\xF3n de presencia, pero como cada una tiene sus propias\r\nreglas, algunas podr\xEDan solicitarla incluso si has ingresado por Italia."
      })
    }), "\n", createVNode(_components.p, {
      children: "La declaraci\xF3n de presencia debe hacerse dentro de los primeros 8 d\xEDas despu\xE9s de haber llegado a Italia,\r\nsin excepci\xF3n. Para ello, es necesario acercarse a la questura (comisar\xEDa) correspondiente."
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFC\xD3MO SE HACE?"
    }), "\n", createVNode(_components.p, {
      children: ["Deber\xE1s completar el formulario correspondiente, el cual puedes descargar ", createVNode($$LinkBlog, {
        text: "aqu\xED",
        href: "https://www.dropbox.com/scl/fi/g8vevrd0pe384t5wh68x2/dichiarazione-di-presenza.pdf?rlkey=v5c2czgplduly4runlcptooxa&dl=0"
      }), ". Adem\xE1s, necesitar\xE1s una fotocopia de la primera p\xE1gina de tu pasaporte donde figuran tus datos personales, as\xED como tambi\xE9n de la p\xE1gina donde se encuentra el sello de entrada al pa\xEDs por el cual hayas ingresado."]
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "Es importante tener en cuenta que al dirigirte a la comisar\xEDa (Questura), debes acudir a la que\r\ncorresponda seg\xFAn el lugar donde est\xE9s viviendo y el que hayas indicado en el formulario."
      })
    }), "\n", createVNode(_components.p, {
      children: "Al momento de ir, te recomiendo llevar el formulario impreso contigo. En algunas questuras puede que\r\nno est\xE9n al tanto del formulario espec\xEDfico que necesitas completar. Incluso podr\xEDan decirte que no es\r\nnecesario completarlo. Sin embargo, es tu derecho obtener y completar el formulario, ya que se requiere\r\npara realizar una gesti\xF3n en el comune. Por lo tanto, aseg\xFArate de aclarar que necesitas el formulario\r\ny que te lo proporcionen."
    }), "\n", createVNode($$BlogTitle, {
      text: "CARTA DE HOSPITALIDAD"
    }), "\n", createVNode(_components.p, {
      children: "Una vez que estemos en Italia, nos encontraremos alojados en alg\xFAn departamento, habitaci\xF3n o casa. Si estamos alquilando ese lugar, contaremos con un contrato de alquiler que nos permitir\xE1 fijar residencia."
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "En caso de que alguien nos est\xE9 hospedando, esa persona deber\xE1 proporcionarnos una carta de\r\nhospitalidad. Es obligaci\xF3n de la persona que nos aloja declarar que estaremos residiendo en esa\r\nvivienda desde una fecha espec\xEDfica. En muchos casos, se requerir\xE1 que el propietario de la\r\nvivienda asista personalmente a la comuna para realizar la declaraci\xF3n de hospitalidad,\r\npresentando su documentaci\xF3n y el formulario correspondiente. Sin embargo, tambi\xE9n puede suceder\r\nque la comuna acepte que nosotros mismos realicemos la declaraci\xF3n con toda la documentaci\xF3n\r\ncompleta."
      })
    }), "\n", createVNode(_components.p, {
      children: "Es importante tener en cuenta que cada comuna tiene su propio procedimiento para realizar la declaraci\xF3n\r\nde hospitalidad, por lo que es recomendable informarse sobre los requisitos espec\xEDficos de la comuna\r\ndonde estemos viviendo."
    }), "\n", createVNode($$BlogTitle, {
      text: "EN CUANTO A LA RESIDENCIA"
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "De esta manera, ya sea mediante un contrato de alquiler o una carta de hospitalidad, adquiriremos\r\nuna residencia en un inmueble. Es crucial tener en cuenta que, sin este requisito, no podemos\r\nsolicitar el reconocimiento de la ciudadan\xEDa."
      })
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "A diferencia de nuestro pa\xEDs de residencia, donde se nos solicita acudir al consulado\r\ncorrespondiente por jurisdicci\xF3n para tramitar el reconocimiento de la ciudadan\xEDa italiana, en\r\nItalia es necesario fijar la residencia para poder proceder con el tr\xE1mite."
      })
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
const url = "/blog/declaracion-de-presencia";
const file = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/declaracion-de-presencia.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/declaracion-de-presencia.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
