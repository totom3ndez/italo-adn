/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as createTransitionScope, g as renderComponent, h as renderHead, i as renderSlot } from '../astro_6yWlFlVf.mjs';
/* empty css                          */
/* empty css                          */

const $$Astro$8 = createAstro("https://totom3ndez.github.io");
const $$Opener = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Opener;
  return renderTemplate`${maybeRenderHead()}<svg class="text-[#fff] md:hidden" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/components/icons/opener.astro", void 0);

const $$Astro$7 = createAstro("https://totom3ndez.github.io");
const $$Closer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Closer;
  return renderTemplate`${maybeRenderHead()}<svg class="closer h-auto w-[50px] rounded-lg p-2 hover:cursor-pointer hover:bg-lightGreen md:hidden" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/components/icons/closer.astro", void 0);

const $$Astro$6 = createAstro("https://totom3ndez.github.io");
const $$Tree = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Tree;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-binary-tree" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M6 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path> <path d="M16 4a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path> <path d="M16 20a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path> <path d="M11 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path> <path d="M21 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z"></path> <path d="M5.058 18.306l2.88 -4.606"></path> <path d="M10.061 10.303l2.877 -4.604"></path> <path d="M10.065 13.705l2.876 4.6"></path> <path d="M15.063 5.7l2.881 4.61"></path> </svg>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/components/icons/tree.astro", void 0);

// MENU LINKS

const navLinks = [
	{
		name: 'Inicio',
		href: '/'
	},
	{
		name: 'Blog',
		href: '/blog'
	},
	{
		name: 'Servicios',
		href: '/services'
	},
	{
		name: 'Nosotros',
		href: '/about'
	},
	{
		name: 'Contacto',
		href: '/#contact'
	}
];

// SERVICES

const services = [
	{
		name: 'Asesorías',
		description:
			'Te guío en el proceso, y ayudo a responder tus dudas. Podemos ajustarlo al horario que más te convenga, ya que es Online.',
		button: 'Ver más',
		hrefButton: '/services'
	},
	{
		name: 'Traducciones',
		description:
			'Para iniciar el proceso de solicitud de Ciudadanía Italiana en Italia, es imprescindible realizar la traducción de los registros que conforman tu carpeta y que no sean de origen italiano.',
		button: 'Ver más',
		hrefButton: '/services'
	},
	{
		name: 'Solicitud de actas',
		description:
			'El primer paso para obtener tu ciudadanía es ubicar los registros de tu antepasado, ¡y	nosotros nos encargamos de eso por vos!',
		button: 'Ver más',
		hrefButton: '/services'
	}
];

const $$Astro$5 = createAstro("https://totom3ndez.github.io");
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<nav class="fixed left-0 right-0 top-0 z-50 flex items-center justify-between gap-12 bg-darkGreen p-4 px-10 ease-in-out md:justify-center" data-astro-cid-5blmo7yk${addAttribute(createTransitionScope($$result, "qgckj2sd"), "data-astro-transition-persist")}> <a href="/" data-astro-cid-5blmo7yk> <img class="h-16 w-16" src="/logo-brand-150x150.png" alt="Logo de Italo ADN" data-astro-cid-5blmo7yk> </a> <button class="opener rounded-lg p-2 hover:bg-lightGreen md:hidden" aria-label="Menu Opener" data-astro-cid-5blmo7yk> ${renderComponent($$result, "Opener", $$Opener, { "data-astro-cid-5blmo7yk": true })} </button> <ul aria-label="Menu navegador"${addAttribute([
    "nav-links align-center absolute right-0 top-6 z-20 flex hidden w-1/2 flex-col justify-center bg-darkGreen text-[#fff] transition ease-in-out",
    "md:static md:flex md:w-auto md:flex-row md:gap-12 md:opacity-100"
  ], "class:list")} data-astro-cid-5blmo7yk> <button class="grid place-content-end hover:cursor-default" aria-label="Menu closer" data-astro-cid-5blmo7yk> ${renderComponent($$result, "Closer", $$Closer, { "data-astro-cid-5blmo7yk": true })} </button> ${navLinks.map((link) => renderTemplate`<li class="border border-white p-4 text-center transition-all hover:text-yellow md:rounded-lg md:border-none md:p-2" data-astro-cid-5blmo7yk> <a${addAttribute(link.name, "aria-label")}${addAttribute(link.href, "href")} class="" data-astro-cid-5blmo7yk> ${link.name} </a> </li>`)} </ul> </nav>  `;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/components/Navbar.astro", "self");

const $$Astro$4 = createAstro("https://totom3ndez.github.io");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/node_modules/.pnpm/astro@4.5.14/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$3 = createAstro("https://totom3ndez.github.io");
const $$Copyright = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Copyright;
  return renderTemplate`${maybeRenderHead()}<section class="flex w-full flex-col place-content-end gap-3 bg-darkGreen text-center text-white"> <p class="text-md">Hecho con ♡</p> <p class="mb-4 text-sm opacity-75">Copyright © Italo ADN 2022</p> </section>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/sections/Copyright.astro", void 0);

const $$Astro$2 = createAstro("https://totom3ndez.github.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const linkStyle = "md:hover:text-lightRed text-white uppercase text-xs md:text-md";
  const colStyle = "blog-links flex flex-col gap-4";
  return renderTemplate`${maybeRenderHead()}<div class="items-top flex max-w-7xl justify-center gap-4 py-20 text-sm md:mx-auto md:flex-row md:justify-around"> <div${addAttribute(colStyle, "class")}> <a${addAttribute(linkStyle, "class")} href="/blog/paso-a-paso">Ciudadanía italiana</a> <a${addAttribute(linkStyle, "class")} href="/blog/fijar-residencia">Residencia en Italia</a> <a${addAttribute(linkStyle, "class")} href="/blog/codice-fiscale">Codice fiscale</a> <a${addAttribute(linkStyle, "class")} href="/blog/declaracion-de-presencia">Declaración de presencia</a> <a${addAttribute(linkStyle, "class")} href="/blog/carta-identidad">Carta de identidad</a> <a${addAttribute(linkStyle, "class")} href="/blog/obtener-pasaporte-italiano">Pasaporte</a> </div> <div${addAttribute(colStyle, "class")}> <a${addAttribute(linkStyle, "class")} href="/about">Quienes somos</a> <a${addAttribute(linkStyle, "class")} href="/services">Servicios</a> <a${addAttribute(linkStyle, "class")} href="/#contact">Contacto</a> </div> </div>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/sections/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://totom3ndez.github.io");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, action } = Astro2.props;
  return renderTemplate`<html lang="es" class="scroll-smooth" data-rh="true"> <head><meta name="robots"${addAttribute(action, "content")}><meta charset="UTF-8"><meta name="theme-color" media="(prefers-color-scheme: light)" content="white"><meta name="theme-color" media="(prefers-color-scheme: dark)" content="black"><meta name="theme-color" content="#5c6e6c"><link rel="apple-touch-icon" href="/logo-brand-150x150.png"><meta name="creator" content="Tomas Mendez"><meta name="copyright" content="Tomas Mendez"><meta name="keywords" content="ciudadanía,ciudadania,italiana,Italiana,ciudadania en italia,ciudadania italiana,tramite,residencia legal,espacio schenguen, ciudadania italiana en italia, paso a paso ciudadania italiana"><meta data-rh="”true”" id="”meta-description”" name="description" content="En Italo ADN te ayudamos a que cumplas tus objetivo de obtener la ciudadanía Italiana, brindándote información en blogs 100% gratuita, servicios económicos y herramientas."><meta name="viewport" content="width=device-width" initial-scale="1.0"><meta name="”author”" content="Amalia Fernandez y Tomas Mendez"><link rel="manifest" href="/manifest.json"><link fetchpriority="high" rel="preload" href="https://cdn.jsdelivr.net/fontsource/fonts/playpen-sans:vf@latest/latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin><link rel="icon" type="image/svg+xml" href="/logo-white.webp"><link fetchpriority="high" rel="preload" as="image" href="/beneficios-ciudadania.webp"><link fetchpriority="high" rel="preload" as="image" href="/background-1.webp"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-darkGreen"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "Copyright", $$Copyright, {})}  </body> </html>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://totom3ndez.github.io");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-secondary mx-auto flex h-screen flex-col gap-4 text-center"> <img class="mx-auto mt-20 max-h-[500px] max-w-[500px]" src="/booo.gif" alt="Gif of italians talking"> <p class="text-white">Página no encontrada</p> <a class="mx-auto w-fit" href="/">Volver al inicio</a> </div> ` })}`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/404.astro", void 0);

const $$file = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _404 as _, $$ViewTransitions as a, $$Navbar as b, $$Copyright as c, services as s };
