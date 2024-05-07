import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent, h as renderHead, i as renderSlot } from './astro_6yWlFlVf.mjs';
import { $ as $$Image } from './pages/about_CK4oXOsd.mjs';
import { a as $$ViewTransitions, b as $$Navbar, c as $$Copyright } from './pages/404_C30zw6VA.mjs';
/* empty css                         */
/* empty css                                         */

const $$Astro$1 = createAstro();
const $$Cafecito = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Cafecito;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto my-20 flex max-w-xl flex-col items-center justify-center gap-4 rounded-lg bg-blue-100 p-4 text-center"> <p class="max-w-lg">
¿Te gustó esta guía de contenido? Si querés y podés hacerlo, invítanos un cafecito para
		colaborar con este proyecto que es 100% independiente.
</p> <a href="https://cafecito.app/italoadn" rel="noopener" target="_blank"><img srcset="https://cdn.cafecito.app/imgs/buttons/button_4.png 1x, https://cdn.cafecito.app/imgs/buttons/button_4_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_4_3.75x.png 3.75x" src="https://cdn.cafecito.app/imgs/buttons/button_4.png" alt="Invitame un café en cafecito.app"></a> </div>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/components/Cafecito.astro", void 0);

const $$Astro = createAstro();
const $$PostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostLayout;
  Astro2.props;
  const { postTitle, image, author, pubDate } = Astro2.props.frontmatter || Astro2.props;
  return renderTemplate`<html lang="es" class="scroll-smooth" data-astro-cid-gjtny2mx> <head><meta charset="UTF-8"><meta name="theme-color" media="(prefers-color-scheme: light)" content="white"><meta name="theme-color" media="(prefers-color-scheme: dark)" content="black"><meta name="theme-color" content="#5c6e6c"><meta name="description" content="Blog de ciudadanía Italiana"><meta name="viewport" content="width=device-width"><link rel="manifest" href="/manifest.json"><link rel="icon" type="image/svg+xml" href="/logo-white.webp"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${postTitle}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-gjtny2mx": true })}${renderHead()}</head> <body class="bg-white" data-astro-cid-gjtny2mx> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-gjtny2mx": true })} <div class="mx-auto mb-10 w-3/4 pt-40 md:max-w-4xl" data-astro-cid-gjtny2mx> <div class="mx-auto mb-5 flex w-fit flex-col items-center gap-3" data-astro-cid-gjtny2mx> <h1 class="text-center text-4xl font-bold" data-astro-cid-gjtny2mx> ${postTitle} <span class="text-lg" data-astro-cid-gjtny2mx>por ${author}</span> </h1> </div> ${renderComponent($$result, "Image", $$Image, { "class": "mx-auto mb-2", "width": 500, "height": 200, "src": image.url, "alt": image.alt, "data-astro-cid-gjtny2mx": true })} <p class="mb-10 w-fit rounded-3xl bg-slate-100 p-2 text-sm md:mx-auto" data-astro-cid-gjtny2mx>
Escrito el: ${pubDate} </p> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Cafecito", $$Cafecito, { "data-astro-cid-gjtny2mx": true })} </div> ${renderComponent($$result, "Copyright", $$Copyright, { "data-astro-cid-gjtny2mx": true })}  </body> </html>`;
}, "C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/layouts/PostLayout.astro", void 0);

export { $$PostLayout as default };
