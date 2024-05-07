/* empty css                          */
import { _ as __astro_tag_component__, n as Fragment, o as createVNode } from '../astro_6yWlFlVf.mjs';
import { $ as $$Image } from './about_CK4oXOsd.mjs';
import { $ as $$BlogTitle, c as $$LinkBlog, b as $$Important } from './beneficios-ciudadania_BskCdwW-.mjs';

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
  "postUrl": "/blog/paso-a-paso",
  "slug": "paso-a-paso",
  "layout": "../../layouts/PostLayout.astro",
  "postTitle": "Paso a paso para tu ciudadan\xEDa",
  "author": "Loli \u2764\uFE0F",
  "description": "Descubre todos los pasos para realizar el tramite de la ciudadan\xEDa en Italia.",
  "image": {
    "url": "/pasaporte.webp",
    "alt": "Pasaporte italiano"
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
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$BlogTitle, {
      text: "\xBFQu\xE9 documentos necesito?"
    }), "\n", createVNode(_components.p, {
      children: ["Debemos presentar todas las partidas de nacimiento, matrimonio y defunci\xF3n desde nuestro antepasado nacido en Italia (AVO) hasta nosotros.\r\nEs importante tener en cuenta que muchas comunas pueden no requerir la partida de defunci\xF3n, ya que no aparece como requisito en la ", createVNode($$LinkBlog, {
        href: "https://www.dropbox.com/scl/fi/bpcqd0xoumd5hjwjoru05/Circolare-k28.pdf?rlkey=2hhtpz0ushzsi83a1qmfi5hmh&dl=0",
        text: "Circolare K28"
      }), ". Sin embargo, cada comuna tiene su propio procedimiento y podr\xEDa solicitarla, por lo que es recomendable tenerla disponible."]
    }), "\n", createVNode($$Important, {
      bg: "bg-gray-200",
      text: "Imprescindible:  \r\nDebe acompa\xF1arse con los documentos el Certificado de no Naturalizaci\xF3n de nuestro antepasado (AVO). Este certificado indica si el antepasado fue registrado como ciudadano en el pa\xEDs al que emigr\xF3. Si emigr\xF3 a varios pa\xEDses, se debe presentar un certificado por cada uno.\r\n"
    }), "\n", createVNode($$BlogTitle, {
      text: "Importancia de la fecha de naturalizaci\xF3n"
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: ["~ Si el hijo de nuestro antepasado (AVO) naci\xF3 ", createVNode(_components.strong, {
          children: "despu\xE9s"
        }), " de que nuestro AVO renunciara a su\r\nciudadan\xEDa italiana, no se puede solicitar directamente, salvo casos particulares ocurridos en el\r\nenrolamiento de los a\xF1os 1927 y 1928."]
      })
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: ["~ Si el hijo de nuestro AVO naci\xF3 ", createVNode(_components.strong, {
          children: "antes"
        }), " de que \xE9l renunciara a su ciudadan\xEDa italiana, ", createVNode(_components.strong, {
          children: "no\r\nhay inconveniente"
        }), " y se puede solicitar el reconocimiento sin problema."]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Las actas de nacimiento, matrimonio y defunci\xF3n, junto con el certificado de no naturalizaci\xF3n, deben estar ", createVNode(_components.strong, {
        children: "apostillados"
      }), ", ", createVNode(_components.strong, {
        children: "traducidos"
      }), " y, posteriormente, se debe realizar la ", createVNode(_components.strong, {
        children: "verificaci\xF3n de la traducci\xF3n"
      }), " en el consulado italiano correspondiente por jurisdicci\xF3n. La verificaci\xF3n puede realizarse de diferentes maneras, ya sea en el consulado en nuestro pa\xEDs o en tribunales en Italia. Tambi\xE9n es posible realizar una doble apostilla."]
    }), "\n", createVNode($$BlogTitle, {
      text: "Sellado de pasaporte al ingreso de la UE"
    }), "\n", createVNode(_components.p, {
      children: "Al ingresar a la Uni\xF3n Europea, el pasaporte ser\xE1 sellado con la fecha y el lugar de entrada si se vuela directamente a Italia, independientemente de la ciudad. Si la entrada es por otro pa\xEDs del espacio Schengen, el sellado se realizar\xE1 en ese pa\xEDs."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\xA1DATO!"
      }), " No pasa en todas las comunas, pero en algunas, por m\xE1s de que tengan el sello de que ingresaron a trav\xE9s de Italia, les hacen hacer la declaraci\xF3n de presencia de todas formas."]
    }), "\n", createVNode($$BlogTitle, {
      text: "Declaraci\xF3n de presencia"
    }), "\n", createVNode(_components.p, {
      children: "Debe realizarse dentro de los 8 d\xEDas de haber llegado a Italia. La misma debe hacerse en la questura (Comisar\xEDa)."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "\xBFC\xD3MO HACERLA?"
      })
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: ["~ Habr\xE1 que completar el formulario\r\n", createVNode($$LinkBlog, {
          href: "https://www.dropbox.com/scl/fi/g8vevrd0pe384t5wh68x2/dichiarazione-di-presenza.pdf?rlkey=v5c2czgplduly4runlcptooxa&dl=0",
          text: "Descargar aqui"
        }), " y una fotocopia de la primera hoja de nuestro pasaporte donde est\xE1n nuestros datos personales y\r\ntambi\xE9n de la hoja donde est\xE9 el detalle del sello al momento de la entrada al pa\xEDs por el que hayamos\r\ningresado."]
      })
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: ["~ Tener en cuenta que al ir a la comisar\xEDa (Questura) deber\xE1n hacerlo a la que corresponda seg\xFAn\r\nel lugar donde est\xE9n viviendo y el que van a poner en el formulario tambi\xE9n.", " "]
      })
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "~ Una recomendaci\xF3n, al momento de ir, lleven el formulario impreso con ustedes. En algunas\r\nquesturas no saben cu\xE1l es el formulario. Tambi\xE9n podr\xEDan decirles que no es necesario que lo\r\nhagan. Pero deben aclararle que lo precisan para efectuar una gesti\xF3n en la comuna y que se las\r\nsolicitan tener. Es un derecho, por lo cual, se los tienen que hacer."
      })
    }), "\n", createVNode($$BlogTitle, {
      text: "Presentar la carpeta con la documentaci\xF3n"
    }), "\n", createVNode(_components.p, {
      children: "Como ya hemos mencionado en otras oportunidades, no todas las comunas siguen una manera igual de hacer\r\nel procedimiento. Por lo que, puede que en alg\xFAn pidan un cierto orden para hacerlo y en otra se manejen\r\ncompletamente al rev\xE9s."
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFCu\xE1les son las cosas que pueden llegar a pasar?"
    }), "\n", createVNode(_components.p, {
      children: ["~ Al momento de presentarse con la carpeta les revisan los documentos.", createVNode(_components.br, {}), "\n~ Que les informen que deben tener turno (chequeen antes de elegir comuna como se manejan con tema turnos).", createVNode(_components.br, {}), "\n~ Que les digan que antes de hacer cualquier cosa deben tener cerrada la residencia y una vez que eso pase pueden volver.", createVNode(_components.br, {}), "\n~ Que verifiquen que entraron por Italia, y, aun as\xED, les soliciten presentar la declaraci\xF3n de presencia. En ese caso deberemos ir a realizar para poder avanzar.", createVNode(_components.br, {}), "\n~ \xA1Recomendaci\xF3n! Si no saben a\xFAn la comuna y puede que den vueltas hasta dar con la que m\xE1s les convenga, hagan la declaraci\xF3n de todas formas por las dudas."]
    }), "\n", createVNode($$BlogTitle, {
      text: "Podr\xEDa ocurrir alguna de estas cosas una vez que finalizan el control de la carpeta:"
    }), "\n", createVNode(_components.p, {
      children: ["~ Puede que les den nuevamente los originales y les soliciten que lleven un juego de fotocopias de la carpeta original.", createVNode(_components.br, {}), "\n~ Puede pasar que se queden con los originales directamente hasta que est\xE9 la residencia y empiecen con la pr\xE1ctica.", createVNode(_components.br, {}), "\n~ Que les den los originales y les pidan que los lleven nuevamente cuando la residencia est\xE9 completa."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "\xA1DATO!"
      }), " Todo depender\xE1 de c\xF3mo trabaje la comuna en s\xED. Pero, en l\xEDnea general, hasta que no aparece como cerrada la residencia en el sistema, ellos no comienzan ninguna gesti\xF3n. Puede pasar que alguno si comience o que hagan consultas a los consulados que correspondan, pero como mencion\xE9 anteriormente. No suelen avanzar hasta no tener esa acci\xF3n resuelta."]
    }), "\n", createVNode($$BlogTitle, {
      text: "Codice Fiscale"
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "Para realizar el codice fiscale debemos dirigirnos a la Agenzia delle Entrante. Con nosotros\r\ndebemos llevar fotocopia de nuestro pasaporte. Te dar\xE1n un formulario para que sea completado con\r\nnuestros datos y un n\xFAmero de espera para ser llamado."
      })
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "Una vez que nos llamen, cargar\xE1n los datos en el sistema y nos dar\xE1n un comprobante con el codice.\r\nEl mismo es un formato Alfanum\xE9rico. En \xE9l, habr\xE1 letras de nuestro apellido, nombre, fecha y\r\nlugar de nacimiento."
      })
    }), "\n", createVNode(_components.p, {
      children: "Deber\xEDa llegar a nuestro domicilio en pocos d\xEDas."
    }), "\n", createVNode(_components.p, {
      children: "En muchas ocasiones y m\xE1s si hacemos contrato de alquiler, nos lo solicitar\xE1n para completar el formulario para la residencia."
    }), "\n", createVNode(_components.p, {
      children: "El codice fiscale es un identificador fiscal. Lo solicitan cuando se debe completar alg\xFAn formulario para un trabajo, cuando se alquila alg\xFAn sitio, en compras grandes que se quieran hacer y en muchas otras cosas m\xE1s."
    }), "\n", createVNode($$BlogTitle, {
      text: "Residencia"
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "No ser\xE1 posible solicitar el reconocimiento de la ciudadan\xEDa italiana en Italia si no contamos con\r\nuna residencia."
      })
    }), "\n", createVNode(_components.p, {
      children: "Veamos los siguientes casos."
    }), "\n", createVNode(_components.p, {
      children: ["~ Podemos ser hospedados por un familiar, conocido o amigo.", createVNode(_components.br, {}), "\n~ Alquilar una habitaci\xF3n, casa, o departamento."]
    }), "\n", createVNode("span", {
      class: "p-2",
      children: [createVNode(_components.p, {
        children: "Ya sea que alquilemos como que alguien nos hospede, habr\xE1 que completar un formulario."
      }), createVNode(_components.p, {
        children: "Si estamos alquilando llevaremos una copia del contrato de alquiler, la copia de nuestro pasaporte. Puede pasar tambi\xE9n que pidan fotocopia del documento del due\xF1o."
      })]
    }), "\n", createVNode("span", {
      class: "p-2",
      children: [createVNode(_components.p, {
        children: "Si nos hospeda alguien en su casa, tendremos que llevar la carta de hospitalidad, formulario o nota por parte del propietario con todos sus datos y la fotocopia de su documento donde indique que se encuentra en conocimiento de que estar\xE1n en su casa."
      }), createVNode(_components.p, {
        children: "Por lo general no hace falta que saquemos turno para poder realizar la residencia. Sobretodo en comunas chicas. Pero algunas grandes podr\xEDan solicitarles que saquen turno para hacerlo."
      })]
    }), "\n", createVNode($$BlogTitle, {
      text: "\xBFQu\xE9 debemos hacer luego?"
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "Conforme hayamos presentado todo lo requerido, debemos aguardar a que pasen a controlar por este domicilio\r\nque realmente estamos viviendo ah\xED."
      })
    }), "\n", createVNode(_components.p, {
      children: "Esto lo hace el Vigile y puede ser desde que fijamos la residencia hasta 45 d\xEDas."
    }), "\n", createVNode("span", {
      class: "p-2",
      children: [createVNode(_components.p, {
        children: "Aqu\xED habr\xE1 que tener paciencia. Puede suceder que pase en 2 d\xEDas, como en 20. O que nunca pase. La ley dice que se cerrar\xE1 autom\xE1ticamente la residencia parados los 45 d\xEDas."
      }), createVNode(_components.p, {
        children: "Dependiendo del comune una vez que esa residencia est\xE9 cerrada debemos esperar a que carguen esos datos en el sistema. Algo que podr\xEDa tardar un par de d\xEDas m\xE1s. Eso depender\xE1 de como se maneje cada comune."
      })]
    }), "\n", createVNode($$BlogTitle, {
      text: "Solicitud de la Ciudadania (Richiesta di cittadinanza)"
    }), "\n", createVNode(_components.p, {
      children: "Volveremos al comune una vez que nuestra residencia se encuentre cerrada para que puedan comenzar ellos\r\nlos controles pertinentes con los consulados que nos correspondan en nuestro pa\xEDs."
    }), "\n", createVNode(_components.p, {
      children: "En cualquier quiosco (tabacchi) podremos comprar y llevar con nosotros una marca de bolo de 16 euros que necesitaremos para el inicio de la pr\xE1ctica."
    }), "\n", createVNode(_components.p, {
      children: "Es primordial que, luego de esto, solicitemos el comprobante de la solicitud. El mismo nos lo solicitar\xE1n en caso de que debamos pedir el Permesso di soggiorno (permiso de residencia)."
    }), "\n", createVNode($$BlogTitle, {
      text: "Dulce espera\u2026"
    }), "\n", createVNode(_components.p, {
      children: "A esta altura, habiendo desarrollado casi una paciencia de acero, vamos a esperar un poquito m\xE1s por la tan ansiada respuesta."
    }), "\n", createVNode("span", {
      class: "p-2",
      children: createVNode(_components.p, {
        children: "Este tiempo puede variar much\xEDsimo en cada caso y dependiendo de muchos factores como los tiempos\r\nde respuesta de los consulados que tengamos. Si env\xEDan la solicitud correctamente desde el inicio.\r\nSi el responsable se toma vacaciones o se enferma. O si solo destinan poco tiempo a este tr\xE1mite y\r\nno lo hacen con celeridad. Puede haber muchos factores que influyan. No los podemos manejar, ni\r\ncontrolar. S\xED estar atentos y consultar, pero luego, deberemos aguardar."
      })
    }), "\n", createVNode(_components.p, {
      children: "Una vez que la ciudadan\xEDa est\xE9 OK, se pondr\xE1n en contacto con nosotros (en la mayor\xEDa de los casos),\r\nv\xEDa mail o telef\xF3nicamente para solicitarte que se acerquen a las oficinas. Si pueden ir chequeando de\r\nvez en cuando yendo ser\xEDa tambi\xE9n una buena opci\xF3n para que no dejen estar el tr\xE1mite."
    }), "\n", createVNode(_components.p, {
      children: "Depende de la comuna van a transcribir nuestra acta de nacimiento. Algunos han hecho juramento."
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
const url = "/blog/paso-a-paso";
const file = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/paso-a-paso.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/paso-a-paso.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
