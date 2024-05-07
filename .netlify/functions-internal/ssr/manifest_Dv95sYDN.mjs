import './chunks/astro_6yWlFlVf.mjs';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.5.14/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0AIlqPPB.js"}],"styles":[{"type":"external","src":"/_astro/about.P5dcACrb.css"},{"type":"external","src":"/_astro/about.yZg-ta7y.css"},{"type":"inline","content":"body::-webkit-scrollbar{display:none}.animation{animation-timeline:view(block 50% 10%);animation-name:fade;animation-fill-mode:both;animation-timing-function:alternate-reverse}.animation-top{animation-timeline:view(block 50% 10%);animation-name:fade-top;animation-fill-mode:both;animation-timing-function:alternate-reverse}@keyframes fade{0%{opacity:0;transform:translateY(-20%)}to{opacity:100%;transform:translateY(0)}}@keyframes fade-top{0%{opacity:0;transform:translateY(20%)}to{opacity:100%;transform:translateY(0)}}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0AIlqPPB.js"}],"styles":[{"type":"external","src":"/_astro/about.P5dcACrb.css"},{"type":"inline","content":".container[data-astro-cid-kh7btl4r]{background-color:#fff;justify-content:center;padding:10rem 5%;margin:0 auto;gap:3rem}.text-container[data-astro-cid-kh7btl4r],.img-container[data-astro-cid-kh7btl4r]{display:flex;flex-direction:column;gap:1rem}\n"},{"type":"external","src":"/_astro/about.yZg-ta7y.css"},{"type":"inline","content":"body::-webkit-scrollbar{display:none}.animation{animation-timeline:view(block 50% 10%);animation-name:fade;animation-fill-mode:both;animation-timing-function:alternate-reverse}.animation-top{animation-timeline:view(block 50% 10%);animation-name:fade-top;animation-fill-mode:both;animation-timing-function:alternate-reverse}@keyframes fade{0%{opacity:0;transform:translateY(-20%)}to{opacity:100%;transform:translateY(0)}}@keyframes fade-top{0%{opacity:0;transform:translateY(20%)}to{opacity:100%;transform:translateY(0)}}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/sendemail.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/sendEmail\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"sendEmail.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/sendEmail.json.ts","pathname":"/api/sendEmail.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0AIlqPPB.js"}],"styles":[{"type":"external","src":"/_astro/about.P5dcACrb.css"},{"type":"external","src":"/_astro/about.yZg-ta7y.css"},{"type":"inline","content":"body::-webkit-scrollbar{display:none}\n"}],"routeData":{"route":"/blog/beneficios-ciudadania","isIndex":false,"type":"page","pattern":"^\\/blog\\/beneficios-ciudadania\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"beneficios-ciudadania","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/beneficios-ciudadania.mdx","pathname":"/blog/beneficios-ciudadania","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0AIlqPPB.js"}],"styles":[{"type":"external","src":"/_astro/about.P5dcACrb.css"},{"type":"external","src":"/_astro/about.yZg-ta7y.css"},{"type":"inline","content":"body::-webkit-scrollbar{display:none}\n"}],"routeData":{"route":"/blog/carta-identidad","isIndex":false,"type":"page","pattern":"^\\/blog\\/carta-identidad\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"carta-identidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/carta-identidad.mdx","pathname":"/blog/carta-identidad","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0AIlqPPB.js"}],"styles":[{"type":"external","src":"/_astro/about.P5dcACrb.css"},{"type":"external","src":"/_astro/about.yZg-ta7y.css"},{"type":"inline","content":"body::-webkit-scrollbar{display:none}\n"}],"routeData":{"route":"/blog/certificado-no-naturalizacion","isIndex":false,"type":"page","pattern":"^\\/blog\\/certificado-no-naturalizacion\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"certificado-no-naturalizacion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/certificado-no-naturalizacion.mdx","pathname":"/blog/certificado-no-naturalizacion","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0AIlqPPB.js"}],"styles":[{"type":"external","src":"/_astro/about.P5dcACrb.css"},{"type":"external","src":"/_astro/about.yZg-ta7y.css"},{"type":"inline","content":"body::-webkit-scrollbar{display:none}\n"}],"routeData":{"route":"/blog/codice-fiscale","isIndex":false,"type":"page","pattern":"^\\/blog\\/codice-fiscale\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"codice-fiscale","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/codice-fiscale.mdx","pathname":"/blog/codice-fiscale","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0AIlqPPB.js"}],"styles":[{"type":"external","src":"/_astro/about.P5dcACrb.css"},{"type":"external","src":"/_astro/about.yZg-ta7y.css"},{"type":"inline","content":"body::-webkit-scrollbar{display:none}\n"}],"routeData":{"route":"/blog/declaracion-de-presencia","isIndex":false,"type":"page","pattern":"^\\/blog\\/declaracion-de-presencia\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"declaracion-de-presencia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/declaracion-de-presencia.mdx","pathname":"/blog/declaracion-de-presencia","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0AIlqPPB.js"}],"styles":[{"type":"external","src":"/_astro/about.P5dcACrb.css"},{"type":"external","src":"/_astro/about.yZg-ta7y.css"},{"type":"inline","content":"body::-webkit-scrollbar{display:none}\n"}],"routeData":{"route":"/blog/fijar-residencia","isIndex":false,"type":"page","pattern":"^\\/blog\\/fijar-residencia\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"fijar-residencia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/fijar-residencia.mdx","pathname":"/blog/fijar-residencia","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0AIlqPPB.js"}],"styles":[{"type":"external","src":"/_astro/about.P5dcACrb.css"},{"type":"external","src":"/_astro/about.yZg-ta7y.css"},{"type":"inline","content":"body::-webkit-scrollbar{display:none}\n"}],"routeData":{"route":"/blog/inscripcion-aire","isIndex":false,"type":"page","pattern":"^\\/blog\\/inscripcion-aire\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"inscripcion-aire","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/inscripcion-aire.mdx","pathname":"/blog/inscripcion-aire","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0AIlqPPB.js"}],"styles":[{"type":"external","src":"/_astro/about.P5dcACrb.css"},{"type":"external","src":"/_astro/about.yZg-ta7y.css"},{"type":"inline","content":"body::-webkit-scrollbar{display:none}\n"}],"routeData":{"route":"/blog/obtener-pasaporte-italiano","isIndex":false,"type":"page","pattern":"^\\/blog\\/obtener-pasaporte-italiano\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"obtener-pasaporte-italiano","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/obtener-pasaporte-italiano.mdx","pathname":"/blog/obtener-pasaporte-italiano","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0AIlqPPB.js"}],"styles":[{"type":"external","src":"/_astro/about.P5dcACrb.css"},{"type":"external","src":"/_astro/about.yZg-ta7y.css"},{"type":"inline","content":"body::-webkit-scrollbar{display:none}\n"}],"routeData":{"route":"/blog/paso-a-paso","isIndex":false,"type":"page","pattern":"^\\/blog\\/paso-a-paso\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"paso-a-paso","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/paso-a-paso.mdx","pathname":"/blog/paso-a-paso","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0AIlqPPB.js"}],"styles":[{"type":"external","src":"/_astro/about.P5dcACrb.css"},{"type":"external","src":"/_astro/about.yZg-ta7y.css"},{"type":"inline","content":"body::-webkit-scrollbar{display:none}\n"}],"routeData":{"route":"/blog/rectificaciones","isIndex":false,"type":"page","pattern":"^\\/blog\\/rectificaciones\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"rectificaciones","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/rectificaciones.mdx","pathname":"/blog/rectificaciones","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0AIlqPPB.js"}],"styles":[{"type":"external","src":"/_astro/about.P5dcACrb.css"},{"type":"external","src":"/_astro/about.yZg-ta7y.css"},{"type":"inline","content":"body::-webkit-scrollbar{display:none}\n"}],"routeData":{"route":"/blog/tessera-sanitaria","isIndex":false,"type":"page","pattern":"^\\/blog\\/tessera-sanitaria\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"tessera-sanitaria","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/tessera-sanitaria.mdx","pathname":"/blog/tessera-sanitaria","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0AIlqPPB.js"}],"styles":[{"type":"external","src":"/_astro/about.P5dcACrb.css"},{"type":"external","src":"/_astro/about.yZg-ta7y.css"},{"type":"inline","content":"body::-webkit-scrollbar{display:none}\n"}],"routeData":{"route":"/blog/via-judicial","isIndex":false,"type":"page","pattern":"^\\/blog\\/via-judicial\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"via-judicial","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/via-judicial.mdx","pathname":"/blog/via-judicial","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0AIlqPPB.js"}],"styles":[{"type":"external","src":"/_astro/about.P5dcACrb.css"},{"type":"external","src":"/_astro/about.yZg-ta7y.css"},{"type":"inline","content":"body::-webkit-scrollbar{display:none}.animation{animation-timeline:view(block 50% 10%);animation-name:fade;animation-fill-mode:both;animation-timing-function:alternate-reverse}.animation-top{animation-timeline:view(block 50% 10%);animation-name:fade-top;animation-fill-mode:both;animation-timing-function:alternate-reverse}@keyframes fade{0%{opacity:0;transform:translateY(-20%)}to{opacity:100%;transform:translateY(0)}}@keyframes fade-top{0%{opacity:0;transform:translateY(20%)}to{opacity:100%;transform:translateY(0)}}\nbody::-webkit-scrollbar{display:none}\n"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0AIlqPPB.js"}],"styles":[{"type":"external","src":"/_astro/about.P5dcACrb.css"},{"type":"external","src":"/_astro/about.yZg-ta7y.css"},{"type":"inline","content":"body::-webkit-scrollbar{display:none}.animation{animation-timeline:view(block 50% 10%);animation-name:fade;animation-fill-mode:both;animation-timing-function:alternate-reverse}.animation-top{animation-timeline:view(block 50% 10%);animation-name:fade-top;animation-fill-mode:both;animation-timing-function:alternate-reverse}@keyframes fade{0%{opacity:0;transform:translateY(-20%)}to{opacity:100%;transform:translateY(0)}}@keyframes fade-top{0%{opacity:0;transform:translateY(20%)}to{opacity:100%;transform:translateY(0)}}\n"}],"routeData":{"route":"/cookies","isIndex":false,"type":"page","pattern":"^\\/cookies\\/?$","segments":[[{"content":"cookies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cookies.astro","pathname":"/cookies","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0AIlqPPB.js"}],"styles":[{"type":"external","src":"/_astro/about.P5dcACrb.css"},{"type":"inline","content":"p{margin:20px 0}.titulo{font-weight:700;text-decoration:underline;font-size:x-large;text-transform:uppercase;text-align:center}fieldset[data-astro-cid-ucd2ps2b]{border:1px solid black;padding:20px;width:100%}\n"},{"type":"external","src":"/_astro/about.yZg-ta7y.css"},{"type":"inline","content":"body::-webkit-scrollbar{display:none}.animation{animation-timeline:view(block 50% 10%);animation-name:fade;animation-fill-mode:both;animation-timing-function:alternate-reverse}.animation-top{animation-timeline:view(block 50% 10%);animation-name:fade-top;animation-fill-mode:both;animation-timing-function:alternate-reverse}@keyframes fade{0%{opacity:0;transform:translateY(-20%)}to{opacity:100%;transform:translateY(0)}}@keyframes fade-top{0%{opacity:0;transform:translateY(20%)}to{opacity:100%;transform:translateY(0)}}\n"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.0AIlqPPB.js"}],"styles":[{"type":"external","src":"/_astro/about.P5dcACrb.css"},{"type":"inline","content":"section[data-astro-cid-shwxrd6l]{background-image:url(/background-1.webp);background-repeat:no-repeat;background-size:cover}.glass[data-astro-cid-shwxrd6l]{background:#3a3a3a4d;border-radius:16px;box-shadow:0 10px 15px 10px #0000004d;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px)}section[data-astro-cid-ptl3ltwj]{position:relative;background-image:url(/pattern.svg);background-size:200px}section[data-astro-cid-ptl3ltwj]:after{content:\" \";position:absolute;width:100%;height:30px;background-image:linear-gradient(180deg,#5c6e6c80 100%,#5c6e6c 50%);top:0;z-index:5}.invalid-feedback[data-astro-cid-ptl3ltwj],.empty-feedback[data-astro-cid-ptl3ltwj]{display:none}.was-validated[data-astro-cid-ptl3ltwj] :-moz-placeholder-shown:invalid[data-astro-cid-ptl3ltwj]~.empty-feedback[data-astro-cid-ptl3ltwj]{display:block}.was-validated[data-astro-cid-ptl3ltwj] :placeholder-shown:invalid[data-astro-cid-ptl3ltwj]~.empty-feedback[data-astro-cid-ptl3ltwj]{display:block}.was-validated[data-astro-cid-ptl3ltwj] :not(:-moz-placeholder-shown):invalid[data-astro-cid-ptl3ltwj]~.invalid-feedback[data-astro-cid-ptl3ltwj]{display:block}.was-validated[data-astro-cid-ptl3ltwj] :not(:placeholder-shown):invalid[data-astro-cid-ptl3ltwj]~.invalid-feedback[data-astro-cid-ptl3ltwj]{display:block}.is-invalid[data-astro-cid-ptl3ltwj],.was-validated[data-astro-cid-ptl3ltwj] :invalid[data-astro-cid-ptl3ltwj]{border-color:#dc3545}\n"},{"type":"external","src":"/_astro/about.yZg-ta7y.css"},{"type":"inline","content":"body::-webkit-scrollbar{display:none}.animation{animation-timeline:view(block 50% 10%);animation-name:fade;animation-fill-mode:both;animation-timing-function:alternate-reverse}.animation-top{animation-timeline:view(block 50% 10%);animation-name:fade-top;animation-fill-mode:both;animation-timing-function:alternate-reverse}@keyframes fade{0%{opacity:0;transform:translateY(-20%)}to{opacity:100%;transform:translateY(0)}}@keyframes fade-top{0%{opacity:0;transform:translateY(20%)}to{opacity:100%;transform:translateY(0)}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://totom3ndez.github.io","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/components/Navbar.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/cookies.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/cookies@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/services.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/services@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/layouts/PostLayout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/beneficios-ciudadania.mdx",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/beneficios-ciudadania@_@mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/carta-identidad.mdx",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/carta-identidad@_@mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/certificado-no-naturalizacion.mdx",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/certificado-no-naturalizacion@_@mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/codice-fiscale.mdx",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/codice-fiscale@_@mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/declaracion-de-presencia.mdx",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/declaracion-de-presencia@_@mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/fijar-residencia.mdx",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/fijar-residencia@_@mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/inscripcion-aire.mdx",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/inscripcion-aire@_@mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/obtener-pasaporte-italiano.mdx",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/obtener-pasaporte-italiano@_@mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/paso-a-paso.mdx",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/paso-a-paso@_@mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/rectificaciones.mdx",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/rectificaciones@_@mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/tessera-sanitaria.mdx",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/tessera-sanitaria@_@mdx",{"propagation":"in-tree","containsHead":false}],["C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/pages/blog/via-judicial.mdx",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/via-judicial@_@mdx",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/blog/carta-identidad.mdx":"chunks/pages/carta-identidad_6v2lFYOv.mjs","/src/pages/blog/certificado-no-naturalizacion.mdx":"chunks/pages/certificado-no-naturalizacion_Wm5TKW7E.mjs","/src/pages/blog/codice-fiscale.mdx":"chunks/pages/codice-fiscale_DbkbZ9oO.mjs","/src/pages/cookies.astro":"chunks/pages/cookies_Bw4z5UWE.mjs","/src/pages/blog/declaracion-de-presencia.mdx":"chunks/pages/declaracion-de-presencia_IwAnD1nj.mjs","/node_modules/.pnpm/astro@4.5.14/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_CTG90JCP.mjs","/src/pages/blog/inscripcion-aire.mdx":"chunks/pages/inscripcion-aire_BP9dDSmY.mjs","/src/pages/blog/obtener-pasaporte-italiano.mdx":"chunks/pages/obtener-pasaporte-italiano_C6CpX3Pg.mjs","/src/pages/blog/paso-a-paso.mdx":"chunks/pages/paso-a-paso_BRFIdgcG.mjs","/src/pages/blog/rectificaciones.mdx":"chunks/pages/rectificaciones_6zpOLQ8Q.mjs","/src/pages/api/sendEmail.json.ts":"chunks/pages/sendEmail_CYsw0_pD.mjs","/src/pages/services.astro":"chunks/pages/services_BGyqlC9x.mjs","/src/pages/blog/tessera-sanitaria.mdx":"chunks/pages/tessera-sanitaria_HIFgvJgr.mjs","/src/pages/blog/via-judicial.mdx":"chunks/pages/via-judicial_Dxg4yPzK.mjs","\u0000@astrojs-manifest":"manifest_Dv95sYDN.mjs","C:/Users/Toto/Desktop/work/Proyectos/italo-adn/node_modules/.pnpm/@astrojs+react@3.1.1_@types+react-dom@18.2.23_@types+react@18.2.74_react-dom@18.2.0_react@18.2.0_vite@5.2.6/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_C1YIWAGb.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.5.14/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_Bm-ASWc0.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_DTZ4ZJJ8.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_DhbFJ_OY.mjs","\u0000@astro-page:src/pages/api/sendEmail.json@_@ts":"chunks/sendEmail_DnybwBnq.mjs","\u0000@astro-page:src/pages/blog/beneficios-ciudadania@_@mdx":"chunks/beneficios-ciudadania_DgX5Hl4X.mjs","\u0000@astro-page:src/pages/blog/carta-identidad@_@mdx":"chunks/carta-identidad_5nKyAP1i.mjs","\u0000@astro-page:src/pages/blog/certificado-no-naturalizacion@_@mdx":"chunks/certificado-no-naturalizacion_D8bQkl7k.mjs","\u0000@astro-page:src/pages/blog/codice-fiscale@_@mdx":"chunks/codice-fiscale_D9DRkfa8.mjs","\u0000@astro-page:src/pages/blog/declaracion-de-presencia@_@mdx":"chunks/declaracion-de-presencia_t5v79z0n.mjs","\u0000@astro-page:src/pages/blog/fijar-residencia@_@mdx":"chunks/fijar-residencia_DSyYUn_B.mjs","\u0000@astro-page:src/pages/blog/inscripcion-aire@_@mdx":"chunks/inscripcion-aire_DvoQyxy7.mjs","\u0000@astro-page:src/pages/blog/obtener-pasaporte-italiano@_@mdx":"chunks/obtener-pasaporte-italiano_C5IkIaVg.mjs","\u0000@astro-page:src/pages/blog/paso-a-paso@_@mdx":"chunks/paso-a-paso_CWVMSeWd.mjs","\u0000@astro-page:src/pages/blog/rectificaciones@_@mdx":"chunks/rectificaciones_yxp1bxsp.mjs","\u0000@astro-page:src/pages/blog/tessera-sanitaria@_@mdx":"chunks/tessera-sanitaria_BvIrtc68.mjs","\u0000@astro-page:src/pages/blog/via-judicial@_@mdx":"chunks/via-judicial_BGMr1qcD.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_BT3IJ8Nw.mjs","\u0000@astro-page:src/pages/cookies@_@astro":"chunks/cookies_2V88kofw.mjs","\u0000@astro-page:src/pages/services@_@astro":"chunks/services_CZ72II13.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_Bpw7t3SG.mjs","C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/layouts/PostLayout.astro":"chunks/PostLayout_DuQPanH_.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.0AIlqPPB.js","C:/Users/Toto/Desktop/work/Proyectos/italo-adn/src/components/SelectInput.jsx":"_astro/SelectInput.Dr9Ue5ZI.js","@astrojs/react/client.js":"_astro/client.DbokQZWz.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/playpen-sans-emoji-wght-normal.QNf9yBzz.woff2","/_astro/playpen-sans-math-wght-normal.yIE1EZRy.woff2","/_astro/playpen-sans-vietnamese-wght-normal.B6HKC7lL.woff2","/_astro/playpen-sans-latin-ext-wght-normal.B29Iyo_X.woff2","/_astro/playpen-sans-latin-wght-normal.S3FS-Hwk.woff2","/_astro/about.yZg-ta7y.css","/_astro/about.P5dcACrb.css","/aire.webp","/background-1.webp","/beneficios-ciudadania.webp","/booo.gif","/carta-di-identita-scaled.webp","/casamiento-scaled.webp","/casamiento1-scaled.webp","/cne.webp","/codice-fiscale.webp","/declaracion.webp","/desktop-screenshot.png","/juicio.webp","/logo-brand-150x150.png","/logo-brand-300x300.png","/logo-brand-500x500.png","/logo-white.webp","/logo.webp","/manifest.json","/mobile-screenshot.png","/old-files-articulo-scaled.webp","/pasaporte.webp","/passport.webp","/pattern.svg","/residencia.webp","/tessera-sanitaria-scaled.webp","/_astro/client.DbokQZWz.js","/_astro/hoisted.0AIlqPPB.js","/_astro/index.NEDEFKed.js","/_astro/SelectInput.Dr9Ue5ZI.js","/_astro/services.BIwkg_lU.css"],"buildFormat":"directory"});

export { manifest };
