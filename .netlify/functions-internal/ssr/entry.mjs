import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Dv95sYDN.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_Bm-ASWc0.mjs');
const _page1 = () => import('./chunks/404_DTZ4ZJJ8.mjs');
const _page2 = () => import('./chunks/about_DhbFJ_OY.mjs');
const _page3 = () => import('./chunks/sendEmail_DnybwBnq.mjs');
const _page4 = () => import('./chunks/beneficios-ciudadania_DgX5Hl4X.mjs');
const _page5 = () => import('./chunks/carta-identidad_5nKyAP1i.mjs');
const _page6 = () => import('./chunks/certificado-no-naturalizacion_D8bQkl7k.mjs');
const _page7 = () => import('./chunks/codice-fiscale_D9DRkfa8.mjs');
const _page8 = () => import('./chunks/declaracion-de-presencia_t5v79z0n.mjs');
const _page9 = () => import('./chunks/fijar-residencia_DSyYUn_B.mjs');
const _page10 = () => import('./chunks/inscripcion-aire_DvoQyxy7.mjs');
const _page11 = () => import('./chunks/obtener-pasaporte-italiano_C5IkIaVg.mjs');
const _page12 = () => import('./chunks/paso-a-paso_CWVMSeWd.mjs');
const _page13 = () => import('./chunks/rectificaciones_yxp1bxsp.mjs');
const _page14 = () => import('./chunks/tessera-sanitaria_BvIrtc68.mjs');
const _page15 = () => import('./chunks/via-judicial_BGMr1qcD.mjs');
const _page16 = () => import('./chunks/index_BT3IJ8Nw.mjs');
const _page17 = () => import('./chunks/cookies_2V88kofw.mjs');
const _page18 = () => import('./chunks/services_CZ72II13.mjs');
const _page19 = () => import('./chunks/index_Bpw7t3SG.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.5.14/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/sendEmail.json.ts", _page3],
    ["src/pages/blog/beneficios-ciudadania.mdx", _page4],
    ["src/pages/blog/carta-identidad.mdx", _page5],
    ["src/pages/blog/certificado-no-naturalizacion.mdx", _page6],
    ["src/pages/blog/codice-fiscale.mdx", _page7],
    ["src/pages/blog/declaracion-de-presencia.mdx", _page8],
    ["src/pages/blog/fijar-residencia.mdx", _page9],
    ["src/pages/blog/inscripcion-aire.mdx", _page10],
    ["src/pages/blog/obtener-pasaporte-italiano.mdx", _page11],
    ["src/pages/blog/paso-a-paso.mdx", _page12],
    ["src/pages/blog/rectificaciones.mdx", _page13],
    ["src/pages/blog/tessera-sanitaria.mdx", _page14],
    ["src/pages/blog/via-judicial.mdx", _page15],
    ["src/pages/blog/index.astro", _page16],
    ["src/pages/cookies.astro", _page17],
    ["src/pages/services.astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "dfc4ac4d-2b48-41b3-882d-73f522e1022d"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
