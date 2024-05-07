/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, _ as __astro_tag_component__, n as Fragment, o as createVNode } from '../astro_6yWlFlVf.mjs';
import { $ as $$Image } from './about_CK4oXOsd.mjs';
import { $ as $$BlogTitle, b as $$Important, c as $$LinkBlog, a as $$Dot } from './beneficios-ciudadania_BskCdwW-.mjs';

const $$Astro = createAstro();
const $$Clock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Clock;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-question" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M20.975 11.33a9 9 0 1 0 -5.717 9.06"></path> <path d="M12 7v5l2 2"></path> <path d="M19 22v.01"></path> <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"></path> </svg>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/components/icons/clock.astro", void 0);

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
  "postUrl": "/blog/codice-fiscale",
  "slug": "codice-fiscale",
  "layout": "../../layouts/PostLayout.astro",
  "postTitle": "Codice Fiscale",
  "author": "Loli \u2764\uFE0F",
  "description": "Para que nos sirve el codice fiscale",
  "image": {
    "url": "/codice-fiscale.webp",
    "alt": "Codice fiscale"
  },
  "pubDate": "17-05-2022"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$BlogTitle, {
      text: "\xBFQu\xE9 es el Codice Fiscale?"
    }), "\n", createVNode(_components.p, {
      children: ["Es un c\xF3digo alfanum\xE9rico de 19 d\xEDgitos que es \xFAnico. Se usa para poder identificar a los sujetos jur\xEDdicos\r\ny personas f\xEDsicas. Podr\xEDamos decir que es algo parecido a lo que es el CUIL en Argentina, NIE en Espa\xF1a\r\no CPR en Dinamarca, entre otros.", " "]
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFPara qu\xE9 sirve?"
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "Para cualquier tr\xE1mite que hagamos en Italia es necesario y sirve tener el Codice Fiscale. Poder\r\nfijar residencia, abrir una cuenta de banco o iniciar el proceso para el reconocimiento de la\r\nciudadan\xEDa. Cuando seamos ciudadanos tener un contrato de trabajo. El Codice puede sacarse tambi\xE9n\r\nestando en Argentina y sirve de igual manera en Italia."
      })
    }), "\n", createVNode(_components.p, {
      children: "Este tr\xE1mite se har\xE1 una sola vez y sirve para siempre. Sacar el c\xF3digo no es algo de car\xE1cter\r\nobligatorio. Lo necesitar\xE1s si tu idea es sacar residencia en Italia, tramitar la ciudadan\xEDa all\xED o\r\nabrir una cuenta de banco."
    }), "\n", createVNode($$BlogTitle, {
      text: "Su tramitaci\xF3n \xBFTiene costo?"
    }), "\n", createVNode(_components.p, {
      children: "No tiene costo alguno tramitar el Codice Fiscale. Lo puedo hacer tanto en el consulado italiano en Argentina como as\xED tambi\xE9n en Italia en la Agenzia delle Entrate."
    }), "\n", createVNode($$Important, {
      text: "\xA1Aclaraci\xF3n! Si ya sos ciudadano italiano que recibi\xF3 el reconocimiento en alg\xFAn consulado en Argentina, es primordial que verifiquemos que no nos hayan generado ya el c\xF3digo all\xED. Para poder corroborar esto tendr\xE1s que ingresar a trav\xE9s del AIRE y revisar donde dice \u201CVisualizare la propia Scheda Anagrafica\u201D. Si aparece el c\xF3digo ah\xED, no tendr\xE1s que hacer otra cosa, el mismo ya se encuentra generado.",
      bg: "bg-green-50"
    }), "\n", createVNode("span", {
      class: "p-2",
      children: [createVNode(_components.p, {
        children: ["Para gestionarlo en Argentina, podemos hacerlo v\xEDa mail. Habr\xE1 que adjuntar el formulario que podr\xE1s descargar ", createVNode($$LinkBlog, {
          text: "aqu\xED",
          href: "https://www.dropbox.com/scl/fi/7nzckxquxxlrbybj083ux/codice-fiscale.pdf?rlkey=2kjjvup909lvwokh01p652517&dl=0"
        }), ". Se deber\xE1 adjuntar tambi\xE9n nuestro DNI de ambas caras.", createVNode(_components.br, {}), "\nTodos los consulados tendr\xE1n diferentes casillas de correo."]
      }), createVNode(_components.p, {
        children: "Aqu\xED detallaremos solo algunos de ellos:"
      })]
    }), "\n", createVNode($$Dot, {
      textStyle: "underline font-bold",
      text: "CONSULADO DE BUENOS AIRES:"
    }), "\n", createVNode("span", {
      class: "flex gap-2",
      children: createVNode(_components.p, {
        children: ["El correo es: ", createVNode("p", {
          class: "text-blue-400",
          children: createVNode(_components.a, {
            href: "mailto:pensioni.buenosaires@esteri.it",
            children: "pensioni.buenosaires@esteri.it"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Adjuntaremos el formulario ya mencionado con nuestra firma y la fecha. Tendremos que completar los\r\napartados B Y D en manuscrito. Adjuntar foto del DNI de ambas caras."
    }), "\n", createVNode($$Dot, {
      textStyle: "underline font-bold",
      text: "CONSULADO DE LA PLATA:"
    }), "\n", createVNode("span", {
      class: "flex gap-2",
      children: createVNode(_components.p, {
        children: ["El correo es: ", createVNode("p", {
          class: "text-blue-400",
          children: createVNode(_components.a, {
            href: "mailto:legale.laplata@esteri.it",
            children: "legale.laplata@esteri.it"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Adjuntaremos el formulario sin firma. Adjuntar DNI de ambas caras."
    }), "\n", createVNode($$Dot, {
      textStyle: "underline font-bold",
      text: "CONSULADO DE BAH\xCDA BLANCA:"
    }), "\n", createVNode("span", {
      class: "flex gap-2",
      children: createVNode(_components.p, {
        children: ["El correo es: ", createVNode("p", {
          class: "text-blue-400",
          children: createVNode(_components.a, {
            href: "mailto:notariale.bahiablanca@esteri.it",
            children: "notariale.bahiablanca@esteri.it"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Adjuntaremos el formulario con nuestra firma y la fecha. Tendremos que completar los apartados B Y D\r\nen manuscrito. Adjuntar foto del DNI de ambas caras. Tambi\xE9n se debe completar el formulario de ", createVNode($$LinkBlog, {
        text: "Polisportello",
        href: "https://www.dropbox.com/scl/fi/chpy1hee0haah0zgx06i2/modulo_richiesta_polisportello.pdf?rlkey=j1v2iuzvheabw2m0skowursex&dl=0"
      }), "\r\n."]
    }), "\n", createVNode($$Dot, {
      textStyle: "underline font-bold",
      text: "CONSULADO DE MAR DEL PLATA:"
    }), "\n", createVNode("span", {
      class: "flex gap-2",
      children: createVNode(_components.p, {
        children: ["El correo es: ", createVNode("p", {
          class: "text-blue-400",
          children: createVNode(_components.a, {
            href: "mailto:pensioni.mardelplata@esteri.it",
            children: "pensioni.mardelplata@esteri.it"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Debemos adjuntar el formulario, nuestra partida de nacimiento y DNI de ambas caras."
    }), "\n", createVNode($$Dot, {
      textStyle: "underline font-bold",
      text: "CONSULADO DE MENDOZA:"
    }), "\n", createVNode("span", {
      class: "flex gap-2",
      children: createVNode(_components.p, {
        children: ["El correo es: ", createVNode("p", {
          class: "text-blue-400",
          children: createVNode(_components.a, {
            href: "mailto:consolato.mendoza@esteri.it",
            children: "consolato.mendoza@esteri.it"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Adjuntaremos el formulario con nuestra firma y la fecha. (Tendremos que completar los apartados B Y\r\nD en manuscrito). Adjuntar foto del DNI de ambas caras."
    }), "\n", createVNode($$Dot, {
      textStyle: "underline font-bold",
      text: "CONSULADO DE ROSARIO:"
    }), "\n", createVNode("span", {
      class: "flex gap-2",
      children: createVNode(_components.p, {
        children: ["El correo es: ", createVNode("p", {
          class: "text-blue-400",
          children: createVNode(_components.a, {
            href: "mailto:legale.rosario@esteri.it",
            children: "legale.rosario@esteri.it"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Adjuntaremos el formulario con nuestra firma y la fecha. (Tendremos que completar los apartados B Y D\r\nen manuscrito). Adjuntar foto del DNI de ambas caras. Tambi\xE9n solicitan comprobante del ticket de avi\xF3n."
    }), "\n", createVNode($$Dot, {
      textStyle: "underline font-bold",
      text: "CONSULADO DE C\xD3RDOBA:"
    }), "\n", createVNode("span", {
      class: "flex gap-2",
      children: createVNode(_components.p, {
        children: ["El correo es: ", createVNode("p", {
          class: "text-blue-400",
          children: createVNode(_components.a, {
            href: "mailto:notariale.cordoba@esteri.it",
            children: "notariale.cordoba@esteri.it"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Adjuntaremos el formulario con nuestra firma y la fecha. (Tendremos que completar los apartados B Y\r\nD en manuscrito). Adjuntar foto del DNI de ambas caras y partida de nacimiento.", " "]
    }), "\n", createVNode("div", {
      class: "flex items-center",
      children: [createVNode($$Clock, {}), createVNode($$Important, {
        text: "\xA1DATO! No hay plazos de respuestas. Algunos pueden enviarlos a partir de las 24 horas. Otros pueden tardar hasta algunas semanas.",
        bg: "bg-orange-100"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Ingresa aqu\xED para ver todos los ", createVNode($$LinkBlog, {
        text: "consulados italianos y delegaciones en Argentina",
        href: "#"
      }), "."]
    }), "\n", createVNode($$BlogTitle, {
      text: "Si lo hacemos en Italia ser\xE1 en la AGENZIA DELLE ENTRATE"
    }), "\n", createVNode(_components.p, {
      children: ["Si no llegaste a tramitar el codice fiscale antes de irte a Italia lo puedes hacer personalmente en cualquier ", createVNode(_components.strong, {
        children: "Agenzia delle Entrate"
      }), " en Italia."]
    }), "\n", createVNode(_components.p, {
      children: "No es indispensable que se gestione donde vayas a hacer la ciudadan\xEDa. Podr\xE1s hacerlo en cualquier comune."
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFC\xF3mo se tramita?"
    }), "\n", createVNode(_components.p, {
      children: "Suele ser sin turno. Con nosotros debemos llevar:"
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: ["~ Pasaporte y copia del mismo. Deber\xE1 ser de la hoja que tiene nuestros datos personales y la foto y la hoja en donde se encuentra el sello al momento de la entrada a Italia. Si no entramos por Italia debemos llevar la ", createVNode($$LinkBlog, {
          text: "declaraci\xF3n de presencia",
          href: "/blog/declaracion-de-presencia"
        }), "."]
      })
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: ["~ ", createVNode($$LinkBlog, {
          text: "Formulario",
          href: "https://www.dropbox.com/scl/fi/7nzckxquxxlrbybj083ux/codice-fiscale.pdf?rlkey=2kjjvup909lvwokh01p652517&dl=0"
        }), " para solicitarlo."]
      })
    }), "\n", createVNode(_components.p, {
      children: "Una vez que lo gestionen nos dar\xE1n un comprobante y la tarjeta suele llegarnos a nuestro domicilio en algunos d\xEDas o semanas."
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
const url = "/blog/codice-fiscale";
const file = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/codice-fiscale.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/codice-fiscale.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
