/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, i as renderSlot, g as renderComponent, n as Fragment } from '../astro_6yWlFlVf.mjs';
import { $ as $$Layout, s as services } from './404_CLVNCFom.mjs';
import { $ as $$Image } from './about_BY7AcyKf.mjs';
/* empty css                          */

const $$Astro$9 = createAstro("https://totom3ndez.github.io");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Button;
  const { type = "button", addClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute([
    "text-md mx-auto w-fit rounded-full bg-yellow px-5 py-2.5 text-center font-medium text-black transition-all hover:bg-gray-700 hover:text-white focus:ring-gray-700",
    addClass
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/components/Button.astro", void 0);

const $$Astro$8 = createAstro("https://totom3ndez.github.io");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./beneficios-ciudadania.mdx": () => import('./beneficios-ciudadania_CnkPf6UK.mjs').then(n => n.d),"./carta-identidad.mdx": () => import('./carta-identidad_6v2lFYOv.mjs'),"./certificado-no-naturalizacion.mdx": () => import('./certificado-no-naturalizacion_Wm5TKW7E.mjs'),"./codice-fiscale.mdx": () => import('./codice-fiscale_DbkbZ9oO.mjs'),"./declaracion-de-presencia.mdx": () => import('./declaracion-de-presencia_IwAnD1nj.mjs'),"./fijar-residencia.mdx": () => import('./fijar-residencia_CucwWjot.mjs').then(n => n.f),"./inscripcion-aire.mdx": () => import('./inscripcion-aire_BP9dDSmY.mjs'),"./obtener-pasaporte-italiano.mdx": () => import('./obtener-pasaporte-italiano_C6CpX3Pg.mjs'),"./paso-a-paso.mdx": () => import('./paso-a-paso_BRFIdgcG.mjs'),"./rectificaciones.mdx": () => import('./rectificaciones_6zpOLQ8Q.mjs'),"./tessera-sanitaria.mdx": () => import('./tessera-sanitaria_HIFgvJgr.mjs'),"./via-judicial.mdx": () => import('./via-judicial_Dxg4yPzK.mjs')}), () => "./*.mdx");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog - Italo ADN" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="blog" class="flex min-h-screen w-screen items-center justify-center bg-white px-10 py-40"> <div id="blogs_container" class="grid max-w-6xl grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2 xl:grid-cols-4"> ${posts.map((post) => renderTemplate`<div id="blog_card" class="relative mt-4 flex flex-col items-start gap-4  rounded-lg bg-lightGreen object-cover p-4 transition-all hover:bg-darkGreen hover:text-white hover:shadow-lg hover:shadow-slate-950"> ${renderComponent($$result2, "Image", $$Image, { "width": 1, "height": 1, "src": post.frontmatter.image.url, "alt": post.frontmatter.image.alt, "class": "h-[150px] w-[305px]" })} <h4 class="text-lg font-semibold">${post.frontmatter.postTitle}</h4> <p class="text-sm">${post.frontmatter.description}</p> <div class="text-center"> <a class="text-md absolute -bottom-7 left-5 w-fit"${addAttribute(post.frontmatter.postUrl, "href")}> ${renderComponent($$result2, "Button", $$Button, {}, { "default": ($$result3) => renderTemplate`Visitar post` })} </a> </div> </div>`)} </div> </section> ` })}`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/index.astro", void 0);

const $$file$1 = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/index.astro";
const $$url$1 = "/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro("https://totom3ndez.github.io");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="mx-auto flex h-[1000px] w-full items-center justify-center" data-astro-cid-shwxrd6l> <div class="glass m-auto flex w-[70%] max-w-2xl animate-fade-in-up flex-col justify-center gap-6 p-6 text-white animate-delay-300 md:p-10" data-astro-cid-shwxrd6l> <h1 class="text-center text-2xl md:text-5xl" data-astro-cid-shwxrd6l>Obtene tu Ciudadanía Italiana</h1> <p class="text-center text-sm md:text-xl" data-astro-cid-shwxrd6l>
Todo lo que tienes que saber acerca del trámite para la obtención de la Ciudadanía Italiana.
			Encontrarás la información necesaria para preparar tu carpeta, trámites tanto en Argentina
			como en Italia, tutoriales, artículos y mucho más.
</p> <a class="mx-auto w-fit animate-blurred-fade-in rounded-full bg-yellow px-5 py-2.5 text-center text-sm font-medium text-black animate-delay-500 hover:bg-gray-700 hover:text-white focus:ring-gray-700" href="/blog" data-astro-cid-shwxrd6l>Descubrí nuestro blog</a> </div> </section> `;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/sections/Hero.astro", void 0);

const $$Astro$6 = createAstro("https://totom3ndez.github.io");
const $$ServiceCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { hrefButton, service, details, price = "", button } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="md:animation grid h-[400px] w-96 grid-cols-1 grid-rows-4 rounded-lg bg-lightGreen p-12 leading-6 shadow-lg transition-all duration-500 md:hover:bg-darkGreen md:hover:text-white md:hover:shadow-xl md:hover:shadow-slate-950"> <h1 class="text-xl font-bold">${service}</h1> <p class="row-span-2">${details}</p> <span>${price}</span> <a target="_blank" class="mx-auto w-fit" no-referrer${addAttribute(hrefButton, "href")}> ${renderComponent($$result, "Button", $$Button, {}, { "default": ($$result2) => renderTemplate`${button}` })} </a> </div>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/components/ServiceCard.astro", void 0);

const $$Astro$5 = createAstro("https://totom3ndez.github.io");
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Services;
  return renderTemplate`${maybeRenderHead()}<section id="services" class="flex h-auto w-full flex-col items-center justify-center gap-20 py-40"> ${renderComponent($$result, "Button", $$Button, { "addClass": "text-xl md:text-2xl" }, { "default": ($$result2) => renderTemplate` Conoce todos nuestros servicios aquí. ` })} <div class="max-w-42 mx-auto flex flex-col flex-wrap justify-center gap-4 md:flex-row md:px-4"> ${services.map((service) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "service": service.name, "details": service.description, "button": service.button, "hrefButton": service.hrefButton })} ` })}`)} </div> </section>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/sections/Services.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://totom3ndez.github.io");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Contact;
  const inputStyle = "rounded-lg w-full placeholder:italic placeholder:opacity-50 rounded-md border border-lightGreen bg-white py-2 px-4 text-base font-medium text-black outline-none focus:border-lightRed focus:shadow-md";
  return renderTemplate(_a || (_a = __template(["", '<section id="contact" class="py-10" data-astro-cid-ptl3ltwj> <div class="animation-top z-auto mx-auto flex w-full max-w-lg flex-col gap-3 rounded-lg border-none bg-lightGreen p-10 text-white shadow-2xl" data-astro-cid-ptl3ltwj> <div class="mb-5 rounded-lg p-3 text-black" data-astro-cid-ptl3ltwj> <p class="mb-2 text-center text-xl font-bold uppercase underline underline-offset-4" data-astro-cid-ptl3ltwj>\nContacto\n</p> <p class="text-md text-center md:text-lg" data-astro-cid-ptl3ltwj>\nUtiliz\xE1 este formulario para despejar cualquier duda que tengas. Nos pondremos en contacto a\n				la brevedad.\n</p> </div> <form action="https://api.web3forms.com/submit" method="POST" id="form" class="needs-validation z-10 mx-auto flex w-3/4 flex-col gap-4 md:max-w-lg" data-astro-reload novalidate data-astro-cid-ptl3ltwj> <!-- Add your Web3Forms Access Key --> <input type="hidden" name="access_key" value="639c7b82-a400-4237-8ff4-9ebdc4d2cc05" data-astro-cid-ptl3ltwj> <input type="checkbox" class="hidden" style="display:none" name="botcheck" data-astro-cid-ptl3ltwj> <div class="flex flex-col place-content-center" data-astro-cid-ptl3ltwj> <input autocomplete="given-name" type="text" placeholder="Nombre completo" required', ' name="name" data-astro-cid-ptl3ltwj> <div class="empty-feedback invalid-feedback mt-1 text-sm text-red-400" data-astro-cid-ptl3ltwj>\nPor favor escribe tu nombre completo.\n</div> </div> <div class="flex flex-col place-content-center" data-astro-cid-ptl3ltwj> <label for="email_address" class="sr-only" data-astro-cid-ptl3ltwj>Email</label><input id="email_address" type="email" placeholder="Email" name="email" required', ' data-astro-cid-ptl3ltwj> <div class="empty-feedback mt-1 text-sm text-red-400" data-astro-cid-ptl3ltwj>Por favor escribe tu email.</div> <div class="invalid-feedback mt-1 text-sm text-red-400" data-astro-cid-ptl3ltwj>\nPor favor escribe un email correcto.\n</div> </div> <div class="flex flex-col place-content-center" data-astro-cid-ptl3ltwj> <textarea name="message" required placeholder="Tu mensaje"', ` data-astro-cid-ptl3ltwj></textarea> <div class="empty-feedback invalid-feedback mt-1 text-sm text-red-400" data-astro-cid-ptl3ltwj>
Por favor escribe tu mensaje.
</div> </div> <button type="submit" class="mx-auto w-full rounded-full bg-yellow px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-gray-700 hover:text-white focus:ring-gray-700" data-astro-cid-ptl3ltwj>Enviar</button> <div id="result" class="mt-3 text-center" data-astro-cid-ptl3ltwj></div> </form> <script src="https://web3forms.com/client/script.js" async defer><\/script> </div>  <script>
		// astro:page-load to support view Transitions.
		// use DOMContentLoaded event if you are not using View Transitions

		document.addEventListener(
			'astro:page-load',
			() => {
				const form = document.getElementById('form')
				const result = document.getElementById('result')

				form.addEventListener('submit', function (e) {
					e.preventDefault()
					form.classList.add('was-validated')
					if (!form.checkValidity()) {
						form.querySelectorAll(':invalid')[0].focus()
						return
					}
					const formData = new FormData(form)
					const object = Object.fromEntries(formData)
					const json = JSON.stringify(object)

					result.innerHTML = 'Sending...'

					fetch('https://api.web3forms.com/submit', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							Accept: 'application/json'
						},
						body: json
					})
						.then(async (response) => {
							let json = await response.json()
							if (response.status == 200) {
								result.classList.add('text-green-500', 'bg-white', 'p-3', 'rounded-lg')
								result.innerHTML = 'Mensaje enviado con \xE9xito.'
							} else {
								console.log(response)
								result.classList.add('text-red-500')
								result.innerHTML = json.message
							}
						})
						.catch((error) => {
							console.log(error)
							result.innerHTML = 'Algo va mal!'
						})
						.then(function () {
							form.reset()
							form.classList.remove('was-validated')
							setTimeout(() => {
								result.style.display = 'none'
							}, 5000)
						})
				})
			},
			{ once: true }
		)
	<\/script> </section> `])), maybeRenderHead(), addAttribute(inputStyle, "class"), addAttribute(inputStyle, "class"), addAttribute([inputStyle, "h-[150px] resize-none"], "class:list"));
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/sections/Contact.astro", void 0);

const $$Astro$3 = createAstro("https://totom3ndez.github.io");
const $$Mail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-[25px] fill-[#fff]"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"></path></svg>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/components/icons/mail.astro", void 0);

const $$Astro$2 = createAstro("https://totom3ndez.github.io");
const $$Coffee = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Coffee;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="w-[25px] fill-[#fff]"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path d="M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path></svg>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/components/icons/coffee.astro", void 0);

const $$Astro$1 = createAstro("https://totom3ndez.github.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const header_links = "flex gap-3 hover:text-lightGreen";
  return renderTemplate`${maybeRenderHead()}<header id="header" class="sticky top-0 z-20 flex grid-cols-3 justify-center gap-6 border-b-2 border-b-white bg-darkGreen p-3 text-[#fff]"> <div class="flex gap-2"> <a aria-label="Botón para aportar a nuestra pagina web " href="https://cafecito.app/totomendez" rel="noopener" target="_blank"${addAttribute(header_links, "class")}> ${renderComponent($$result, "Coffee", $$Coffee, {})} <span class="hidden md:block">Invítanos un Cafecito</span> </a> </div> <span aria-hidden="true">|</span> <div class="flex gap-2"> <a aria-label="Botón para enviarnos un email" href="mailto:info@italoadn.com"${addAttribute(header_links, "class")}> ${renderComponent($$result, "Mail", $$Mail, {})} <span class="hidden md:block">info@italoadn.com</span> </a> </div> </header>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://totom3ndez.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Italo Adn" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/index.astro", void 0);

const $$file = "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
