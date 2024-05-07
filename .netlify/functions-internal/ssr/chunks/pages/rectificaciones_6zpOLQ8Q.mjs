/* empty css                          */
import { _ as __astro_tag_component__, n as Fragment, o as createVNode } from '../astro_6yWlFlVf.mjs';
import { $ as $$Image } from './about_BY7AcyKf.mjs';
import { $ as $$BlogTitle, b as $$Important } from './beneficios-ciudadania_CnkPf6UK.mjs';

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
  "postUrl": "/blog/rectificaciones",
  "slug": "rectificationes",
  "layout": "../../layouts/PostLayout.astro",
  "postTitle": "Rectificaciones",
  "author": "Loli \u2764\uFE0F",
  "description": "Que son y para que sirven las rectificaciones.",
  "image": {
    "url": "/old-files-articulo-scaled.webp",
    "alt": "Archivos antiguos"
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
      text: "\xBFQu\xE9 son las rectificaciones?"
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "Cada vez que no haya coherencia en un acta con relaci\xF3n a las otras actas de esa misma persona, se\r\ndebe llevar a cabo una correcci\xF3n de actas. La rectificaci\xF3n es la oportunidad que tienen las\r\npersonas para aclarar o enmendar una informaci\xF3n incorrecta o falsa y, por otra parte, la\r\nresponsabilidad del ente emisor de aclarar, actualizar o subsanar la informaci\xF3n emitida."
      })
    }), "\n", createVNode(_components.p, {
      children: "Tenemos que tener presente que se debe presentar la l\xEDnea de descendencia y si hay errores\r\nimportantes, estos pueden llevar a que se dude de la identidad de la persona y, obviamente, se\r\nrechace el tr\xE1mite."
    }), "\n", createVNode($$BlogTitle, {
      text: "Cu\xE1ndo rectificar:"
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: ["~ ", createVNode(_components.strong, {
          children: "NOMBRES"
        }), ": Las diferencias por traducci\xF3n no se consideran errores pero deben consignarse en el certificado de la c\xE1mara electoral. En caso de que se haya omitido un nombre o est\xE9n ubicados de forma diferente s\xED se debe rectificar."]
      })
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: ["~ ", createVNode(_components.strong, {
          children: "APELLIDOS"
        }), ": Los errores en los apellidos son errores a corregir. Por ejemplo: ", createVNode(_components.strong, {
          children: "Gianelli / Gianeli"
        }), "."]
      })
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: ["~ ", createVNode(_components.strong, {
          children: "FECHAS"
        }), ": si hay errores en las fechas o errores en las edades se debe rectificar."]
      })
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: ["~ ", createVNode(_components.strong, {
          children: "NOMBRE DE LOS PADRES"
        }), ": Tambi\xE9n se debe rectificar errores en el nombre de los padres."]
      })
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: ["~ ", createVNode(_components.strong, {
          children: "ERRORES GEOGR\xC1FICOS"
        }), ": En las actas en general, y sobre todo, el lugar de nacimiento del italiano debe estar completo en las actas argentinas detallando tanto ciudad, provincia y pa\xEDs."]
      })
    }), "\n", createVNode(_components.p, {
      children: "Estos son los errores m\xE1s comunes que se encuentran, pero recuerden que siempre que se sepa que hay un error por m\xE1s min\xFAsculo que sea y por m\xE1s que piensen que por eso no les van a decir nada, RECTIFIQUEN SIEMPRE, es muy importante tener la carpeta de principio a fin bien hecha."
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFQu\xE9 tipo de rectificaciones existen?"
    }), "\n", createVNode(_components.p, {
      children: "Existen dos tipos de rectificaciones que son, las judiciales y las administrativas. Tambi\xE9n existe otra forma de corregir, que es la informaci\xF3n sumaria."
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Judicial"
        }), ": Se realiza a trav\xE9s de un proceso judicial por medio del cual se obtiene una\r\nsentencia que ordena al registro que se rectifique el acta en cuesti\xF3n. En el proceso judicial de\r\nrectificaci\xF3n de partidas se incorporan todas las partidas a rectificar. Tenemos que tener en\r\ncuenta que este proceso es mucho m\xE1s costoso que hacerlo de forma administrativa."]
      })
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Administrativa"
        }), ": Se realiza directamente ante el registro donde est\xE9 registrada el acta, se\r\ndicta una resoluci\xF3n administrativa, donde se solicita la rectificaci\xF3n del acta."]
      })
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: [createVNode(_components.strong, {
          children: "Informaci\xF3n sumaria"
        }), ": La informaci\xF3n sumaria judicial es un tr\xE1mite que se realiza ante un juez\r\ncivil para acreditar alg\xFAn hecho o circunstancia que sea necesario para obtener la ciudadan\xEDa\r\nitaliana por descendencia. Por ejemplo, si hay errores en los nombres, fechas o lugares de\r\nnacimiento de los antepasados italianos en los documentos emitidos en el pa\xEDs de residencia, se\r\npuede solicitar una informaci\xF3n sumaria judicial para corregirlos y as\xED evitar que el consulado\r\nitaliano rechace el tr\xE1mite."]
      })
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "La informaci\xF3n sumaria judicial tambi\xE9n puede servir para probar la continuidad del v\xEDnculo\r\nsangu\xEDneo con el antepasado italiano, si no se cuenta con alguna partida de nacimiento o\r\nmatrimonio. Para iniciar una informaci\xF3n sumaria judicial, se debe presentar toda la documentaci\xF3n\r\nprobatoria que se tenga, como partidas de nacimiento, matrimonio y defunci\xF3n, certificados de\r\nnacionalidad, pasaportes, etc."
      })
    }), "\n", createVNode(_components.p, {
      children: "Tambi\xE9n se debe proponer al menos dos testigos que puedan declarar sobre el hecho o circunstancia\r\nque se quiere acreditar. El juez citar\xE1 a los testigos. Luego, el juez dictar\xE1 una sentencia que\r\ntendr\xE1 valor de prueba para el tr\xE1mite de ciudadan\xEDa italiana. El tiempo que demora una informaci\xF3n\r\nsumaria judicial depende de varios factores, como el pa\xEDs, la provincia, el juzgado y la complejidad\r\ndel caso. En general, se estima que puede demorar entre 6 y 12 meses."
    }), "\n", createVNode($$Important, {
      bg: "bg-gray-100",
      text: "\xA1IMPORTANTE! La Informaci\xF3n sumaria no es lo mismo que la rectificaci\xF3n de partida, por lo que en la mayor\xEDa de los casos no se acepta informaci\xF3n sumaria. La sentencia de la informaci\xF3n sumaria tendr\xE1 valor como medio de prueba mientras que en la rectificaci\xF3n de partida el juez ordenar\xE1 la rectificaci\xF3n del error al registro de la partida\r "
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFQui\xE9n puede solicitar la rectificaci\xF3n de actas?"
    }), "\n", createVNode(_components.p, {
      children: "En lo que respecta a las rectificaciones administrativas, hay que tener en cuenta las relaciones familiares. Es decir que, es importante saber que quien debe solicitar la rectificaci\xF3n es la primera persona viva que sigue en la l\xEDnea de descendencia. Por otro lado, se puede otorgar un poder por abogado para que realice el tr\xE1mite."
    }), "\n", createVNode(_components.p, {
      children: "En cuanto a las rectificaciones judiciales, podremos ponernos en contacto con alg\xFAn estudio de abogados que podr\xE1 encargarse del caso para llevar adelante las rectificaciones y solicitarles los documentos pertinentes."
    }), "\n", createVNode($$BlogTitle, {
      text: "Aspectos esenciales"
    }), "\n", createVNode(_components.p, {
      children: "Algo fundamental, es llevar a cabo las rectificaciones correspondientes antes de solicitar el CNN (Poner link que lo lleve a que es el CNN). Porque, de lo contrario, tendr\xE1s que hacer trabajo doble y recibir\xE1s un certificado con errores que luego no servir\xEDa para nuestra carpeta. Para corregir los datos de tu antepasado italiano, muchas veces te exigir\xE1n, en el registro, el acta italiana en original, legalizada y traducida. Ellos deben corroborar el original para saber si pueden aplicar la correcci\xF3n en los dem\xE1s documentos."
    }), "\n", createVNode(_components.p, {
      children: "El documento italiano no tiene validez fuera de Italia a menos que est\xE9 legalizado."
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
const url = "/blog/rectificaciones";
const file = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/rectificaciones.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/rectificaciones.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
