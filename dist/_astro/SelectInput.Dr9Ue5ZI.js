import{r as p}from"./index.NEDEFKed.js";/* empty css                          */var f={exports:{}},j={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=p,L=Symbol.for("react.element"),T=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,F=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function g(o,l,n){var s,a={},i=null,r=null;n!==void 0&&(i=""+n),l.key!==void 0&&(i=""+l.key),l.ref!==void 0&&(r=l.ref);for(s in l)R.call(l,s)&&!P.hasOwnProperty(s)&&(a[s]=l[s]);if(o&&o.defaultProps)for(s in l=o.defaultProps,l)a[s]===void 0&&(a[s]=l[s]);return{$$typeof:L,type:o,key:i,ref:r,props:a,_owner:F.current}}j.Fragment=T;j.jsx=g;j.jsxs=g;f.exports=j;var e=f.exports;let c=[],z=(o,l)=>{let n=[],s={get(){return s.lc||s.listen(()=>{})(),s.value},l:l||0,lc:0,listen(a,i){return s.lc=n.push(a,i||s.l)/2,()=>{let r=n.indexOf(a);~r&&(n.splice(r,2),--s.lc||s.off())}},notify(a,i){let r=!c.length;for(let t=0;t<n.length;t+=2)c.push(n[t],n[t+1],s.value,a,i);if(r){for(let t=0;t<c.length;t+=5){let m;for(let d=t+1;!m&&(d+=5)<c.length;)c[d]<c[t+1]&&(m=c.push(c[t],c[t+1],c[t+2],c[t+3],c[t+4]));m||c[t](c[t+2],c[t+3],c[t+4])}c.length=0}},off(){},set(a){let i=s.value;i!==a&&(s.value=a,s.notify(i))},subscribe(a,i){let r=s.listen(a,i);return a(s.value),r},value:o};return s};function D(o,l,n){let s=new Set([...l,void 0]);return o.listen((a,i,r)=>{s.has(r)&&n(a,i,r)})}function $(o,l={}){let n=p.useCallback(a=>l.keys?D(o,l.keys,a):o.listen(a),[l.keys,o]),s=o.get.bind(o);return p.useSyncExternalStore(n,s,s)}const v=z("partidas");function M(o){v.set(o)}const V="/api/sendEmail.json.ts";function k(){const[o,l]=p.useState(!1),n=async r=>{r.preventDefault();const t=r.target,m=new FormData(r.currentTarget),{firstName:d,lastName:x,email:h,dob:u,nameAvo:y,lastAvo:N,dobAvo:A,placeAvo:q,parentsAvo:E,infoAvo:S,comune:O,dateMarriage:C,couple:I}=Object.fromEntries(m);try{const b=await fetch(V,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from:"info@italoadn.com",to:"info@italoadn.com",subject:`Nuevo pedido de actas para ${d}`,html:`
						<h1>Formulario para pedido de actas</h1>
						
						<p>Nombre: ${d}</p>
						<p>Apellido: ${x}</p>
						<p>Email: ${h}</p>
						<p>Fecha de nacimiento: ${u}</p>

						<h2><b>Datos del AVO:</b></h2>
						<p>Nombres AVO: ${y}</p>
						<p>Apellidos AVO: ${N}</p>
						<p>Fecha de nacimiento AVO: ${A}</p>
						<p>Lugar de nacimiento AVO: ${q}</p>
						<p>Nombre de los padres: ${E}</p>
						<p>Info Extra: ${S}</p>
						<h2><b>Matrimonio:</b></h2><br/>
						<p>Comuna de matrimonio: ${O}</p>
						<p>Fecha de matrimonio: ${C}</p>
						<p>Esposa/o: ${I}</p>

					`})});l(!0),setTimeout(()=>{l(!1)},7e3),t.reset()}catch(b){console.log(b)}},s="my-2 w-full rounded-full bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow hover:text-black focus:ring-gray-700",a="resize-none rounded-lg w-full placeholder:italic placeholder:opacity-50 rounded-md border border-lightGreen bg-white py-2 my-2 px-4 text-base font-medium text-black outline-none focus:border-lightRed focus:shadow-md",i="border-2 border-black p-4";return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex max-w-7xl flex-col justify-around gap-4 md:flex-row md:px-20",children:[e.jsxs("div",{className:"info px-6 md:max-w-[50%] md:px-0",children:[e.jsx("h2",{className:"titulo",children:"Pedido de actas"}),e.jsx("p",{children:"El primer paso para obtener tu ciudadanía es ubicar los registros de tu antepasado, ¡y nosotros nos encargamos de eso por vos!"}),e.jsxs("p",{children:["Para iniciar la búsqueda, necesitamos información precisa sobre:",e.jsx("br",{}),e.jsx("br",{}),"◉ NOMBRE Y APELLIDO",e.jsx("br",{}),"◉ FECHA DE NACIMIENTO",e.jsx("br",{}),"◉ LUGAR DE ORIGEN"]}),e.jsx("p",{children:"Todo dato adicional, como los nombres de sus progenitores o algún documento, suma para hacer el proceso de búsqueda más rápido."}),e.jsxs("p",{children:["Podemos solicitarla en el comune, si ya estaba establecido el registro civil, o bien podemos gestionarlo a través de la Diócesis o el Archivo Histórico si aún se realizaban registros en las Iglesias. ",e.jsx("b",{children:"¡LO RELEVANTE!"})," es que se deben contar con todos los datos."]}),e.jsx("p",{children:"Los comunes tienen plazos para responder que pueden variar de semanas a meses, dependiendo del comune/iglesia (de la cantidad de personal que tengan, de los pedidos previos y si van en orden de llegada, etc.).No es algo que dependa de quien lo solicita."}),e.jsx("h3",{className:"titulo",children:"SOLICITUD DEL ACTA"}),e.jsxs("p",{children:["Para iniciar, debes rellenar el formulario que aparece a continuación con toda la información requerida, tanto la tuya como la de tu AVO, la cual es necesaria para las solicitudes de actas en los comunes o iglesias."," "]}),e.jsx("p",{children:"El precio varía según el número de actas que necesites solicitar y si son para el mismo comune o para distintas, o si provienen de parroquias/iglesias, en cuyo caso es necesario comunicarse con la Diócesis."}),e.jsxs("p",{children:[e.jsx("b",{children:"ENVÍO:"})," También ofrecemos el servicio de enviarte los documentos a Argentina o a donde estés residiendo."]})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-center text-lg font-bold",children:"Formulario para el pedido de Actas"}),e.jsxs("form",{onSubmit:n,className:"mx-auto mb-4 flex w-full max-w-lg flex-wrap rounded px-8 pb-8 pt-6 shadow-md",children:[e.jsxs("fieldset",{className:i,children:[e.jsx("legend",{children:"Tus datos:"}),e.jsx("label",{htmlFor:"firstName",children:"Nombre"}),e.jsx("input",{className:a,type:"text",name:"firstName",id:"firstName",placeholder:"Jose",required:!0,"aria-label":"Campo de formulario para Nombre"}),e.jsx("label",{htmlFor:"lastName",children:"Apellido"}),e.jsx("input",{className:a,type:"text",name:"lastName",id:"lastName",placeholder:"Ancellotti",required:!0,"aria-label":"Campo de formulario para Apellido"}),e.jsx("label",{htmlFor:"email",children:"Email"}),e.jsx("input",{className:a,type:"email",name:"email",id:"email","aria-label":"Campo de formulario para Email",placeholder:"ejemplo@gmail.com",required:!0}),e.jsx("label",{htmlFor:"dob",children:"Tu fecha de nacimiento"}),e.jsx("input",{className:a,type:"date",name:"dob",id:"dob","aria-label":"Campo de formulario para Fecha de nacimiento"})]}),e.jsxs("fieldset",{className:i,children:[e.jsx("legend",{children:"Datos de la partida:"}),e.jsx("label",{htmlFor:"nameAvo",children:"Nombres del AVO"}),e.jsx("input",{className:a,type:"text",name:"nameAvo",id:"nameAvo",placeholder:"Giuseppe",required:!0}),e.jsx("label",{htmlFor:"lastAvo",children:"Apellidos del AVO"}),e.jsx("input",{className:a,type:"text",name:"lastAvo",id:"lastAvo",placeholder:"Ancellotti",required:!0}),e.jsx("label",{htmlFor:"dobAvo",children:"Fecha de nacimiento del AVO"}),e.jsx("input",{className:a,type:"date",name:"dobAvo",id:"dobAvo","aria-label":"Campo de formulario para Fecha de nacimiento del AVO",required:!0}),e.jsx("label",{htmlFor:"placeAvo",children:"Lugar de nacimiento del AVO"}),e.jsx("input",{className:a,type:"text",name:"placeAvo",id:"placeAvo",placeholder:"Siracusa, Italia",required:!0}),e.jsx("label",{htmlFor:"parentsAvo",children:"Nombres de los padres"}),e.jsx("input",{className:a,type:"text",name:"parentsAvo",id:"parentsAvo",placeholder:"Giuseppe Ancellotti y Maria Catanzaro"}),e.jsx("label",{htmlFor:"infoAvo",children:"Información extra del AVO"}),e.jsx("textarea",{className:a,name:"infoAvo",id:"infoAvo",placeholder:"Hermanos, hijos, familiares cercanos, lugares de eventos.."})]}),e.jsxs("fieldset",{className:i,children:[e.jsx("legend",{children:"Matrimonio del AVO"}),e.jsx("input",{className:"mr-2",type:"checkbox",name:"needMarriage",id:"needMarriage"}),e.jsx("label",{htmlFor:"needMarriage",children:"Necesito el acta de matrimonio."}),e.jsx("br",{}),e.jsxs("small",{className:"text-orange-500",children:["Si no lo necesitas, ",e.jsx("b",{children:"no"})," completar los datos."]}),e.jsx("br",{}),e.jsx("label",{htmlFor:"comune",children:"Comuna del matrimonio"}),e.jsx("input",{className:a,type:"text",name:"comune",id:"comune",placeholder:"comuna de Siracusa"}),e.jsx("label",{htmlFor:"dateMarriage",children:"Fecha de matrimonio"}),e.jsx("input",{className:a,type:"date",name:"dateMarriage",id:"dateMarriage"}),e.jsx("label",{htmlFor:"couple",children:"Nombre del conyuge"}),e.jsx("input",{className:a,type:"text",name:"couple",id:"couple",placeholder:"Maria"})]}),e.jsxs("div",{className:"mx-auto flex flex-col",children:[e.jsx("button",{className:s,type:"submit",children:"CONSULTAR"}),o&&e.jsx("div",{className:"text-center font-bold text-green-600",children:"¡Formulario enviado! Pronto nos pondremos en contacto."})]})]})]})]})})}const _="/api/sendEmail.json";function U(){const o="resize-none rounded-lg w-full placeholder:italic placeholder:opacity-50 rounded-md border border-lightGreen bg-white py-2 my-2 px-4 text-base font-medium text-black outline-none focus:border-lightRed focus:shadow-md",l="border-2 border-black p-4 font-bold",n="my-2 w-full rounded-full bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow hover:text-black focus:ring-gray-700",[s,a]=p.useState(!1),i=async r=>{r.preventDefault();const t=r.target,m=new FormData(r.currentTarget),{name:d,email:x,message:h}=Object.fromEntries(m);try{const u=await fetch(_,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({to:"info@italoadn.com",from:"info@italoadn.com",subject:`Nueva asesoría para ${d}`,html:`
						<h1>Formulario de Asesoría</h1>
						
						<p>Nombre: ${d}</p>
						<p>Apellido: ${x}</p>
						<p>Mensaje: ${h}</p>
					`})});a(!0),setTimeout(()=>{a(!1)},7e3),t.reset()}catch(u){console.log(u)}};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mx-auto flex flex-col justify-around gap-4 md:max-w-4xl md:px-20",children:[e.jsx("h2",{className:"titulo",children:"ASESORÍA CIUDADANÍA ITALIANA"}),e.jsx("p",{children:"Sé que seguramente estás haciendo todo lo posible para tramitar tu ciudadanía italiana y así poder emigrar."}),e.jsx("p",{children:"Durante todo este proceso, es posible que surjan miedos, inquietudes y dudas que hacen que no estés iniciando tu trámite o que te trabes a la mitad."}),e.jsx("p",{children:"Te guío en el proceso, y ayudo a responder tus dudas. Podemos ajustarlo al horario que más te convenga, ya que es Online."}),e.jsx("h3",{className:"titulo",children:"¿Cuánto tiempo dura la asesoría?"}),e.jsx("p",{children:"Esto depende del tipo de asesoría que necesites. Hay dos tipos:"}),e.jsxs("p",{className:"ml-6",children:[e.jsx("b",{children:"○ ASESORÍA LUXE:"})," ",e.jsx("br",{}),"Para conversar con el consultor y plantear tu caso. ",e.jsx("b",{children:"Duración: 60 minutos"})]}),e.jsxs("p",{className:"ml-6",children:[e.jsx("b",{children:"○ ASESORÍA CLEVER: "})," ",e.jsx("br",{}),"Para aclarar tus dudas con el consultor. ",e.jsx("b",{children:"Duración: 30 minutos"})]}),e.jsx("h3",{className:"titulo",children:"¿Necesito una asesoría LUXE o CLEVER?"}),e.jsxs("p",{children:["Esto variará dependiendo de tu caso particular. Por ejemplo, si aún no has comenzado tu trámite porque no sabes cómo hacerlo o dónde hacerlo, o si no estás seguro si es por vía judicial o administrativa, lo recomendable sería agendar una asesoría ",e.jsx("b",{children:"Luxe"}),", ya que son casos que requieren más tiempo para poder guiarte."]}),e.jsxs("p",{children:["Ahora, si ya comenzaste y tienes dudas puntuales que te frenaron o surgieron mientras realizabas tu trámite, lo mejor sería una asesoría ",e.jsx("b",{children:"Clever"}),", ya que en 30 minutos podría ayudarte a encontrar una solución o despejar dudas."]}),e.jsx("h3",{className:"titulo",children:"COSTO DE LAS ASESORÍAS"}),e.jsxs("p",{children:["LUXE ",e.jsx("b",{children:"45€"})," / CLEVER ",e.jsx("b",{children:"25€"})]}),e.jsxs("div",{className:"w-2xl mx-auto py-8",children:[e.jsx("p",{children:"Completa este formulario para solicitar tu asesoría."}),e.jsxs("form",{onSubmit:i,className:"mx-auto w-1/2",children:[e.jsxs("fieldset",{className:l,children:[e.jsx("legend",{children:"Quiero mi asesoría"}),e.jsx("input",{className:o,placeholder:"Nombre completo",type:"text",name:"name",id:"name",required:!0}),e.jsx("input",{className:o,placeholder:"email",type:"email",name:"email",id:"email",required:!0}),e.jsx("textarea",{placeholder:"Quiero mi asesoría porque...",className:o,name:"message",id:"message",required:!0})]}),e.jsx("input",{type:"submit",value:"Enviar",className:n}),s&&e.jsx("div",{className:"text-center font-bold text-green-600",children:"¡Formulario enviado! Pronto nos pondremos en contacto."})]})]})]})})}function G(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mx-auto flex flex-col justify-around gap-4 md:max-w-4xl md:px-20",children:[e.jsx("h2",{className:"titulo",children:"ACTAS ESPAÑOLAS"}),e.jsx("p",{children:"Te ofrecemos gestionar una llamada al Registro Civil o al ayuntamiento español para conocer los detalles del procedimiento de solicitud y el método de envío."}),e.jsx("p",{children:"Cada municipio tiene sus propias políticas, aunque generalmente el envío por correo es gratuito, incluso al extranjero."}),e.jsx("p",{children:"Después de la llamada, te guiaremos sobre cómo realizar la solicitud según el procedimiento que detallen."}),e.jsx("p",{children:"Proporcionaremos la información de contacto (correo electrónico) para que el interesado solicite el certificado. Luego, la comunicación será directa entre el interesado y el ayuntamiento."}),e.jsxs("p",{children:["El servicio de gestión tiene un costo de ",e.jsx("b",{children:"30€"})]})]})})}function H(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mx-auto flex flex-col justify-around gap-4 md:max-w-4xl md:px-20",children:[e.jsx("h2",{className:"titulo",children:"Servicio de Investigación Genealógica"}),e.jsx("p",{className:"px-15 italic opacity-75",children:"Antes que nada, cabe destacar que este tipo de investigación no solo la realizamos con documentos Italianos, sino también con partidas españolas y francesas."}),e.jsx("p",{children:"Este tipo de exploración se solicita cuando necesitamos obtener el registro de nuestro AVO, pero nos falta algún detalle, por ejemplo:"}),e.jsxs("div",{className:"ml-5 flex items-center gap-2",children:[e.jsx("span",{children:"●"}),e.jsx("p",{children:"Conocemos la fecha precisa, la provincia, pero desconocemos el Comune."})]}),e.jsxs("div",{className:"ml-5 flex items-center gap-2",children:[e.jsx("span",{children:"●"}),e.jsx("p",{children:"Tenemos una fecha aproximada y la región."})]}),e.jsxs("div",{className:"ml-5 flex items-center gap-2",children:[e.jsx("span",{children:"●"}),e.jsx("p",{children:"Tenemos una fecha aproximada, pero puede haber uno o varios lugares."})]}),e.jsxs("div",{className:"ml-5 flex items-center gap-2",children:[e.jsx("span",{children:"●"}),e.jsx("p",{children:"Tenemos una fecha aproximada y una ubicación aproximada."})]}),e.jsx("p",{children:'Cuanta más información podamos proporcionar sobre la persona que estamos intentando localizar, mayores serán las posibilidades de éxito en la búsqueda. Es crucial que indiquemos la provincia, la región o el Comune, ya que si solo especificamos "Italia", y si tienes algún acta o documento que mencione a estas personas mucho mejor, sino, las probabilidades de concluir la investigación con éxito disminuyen considerablemente.'}),e.jsx("p",{children:"Hacemos una revisión con la información que tengas, gratis, para ver si podemos buscar algo, en 24/48 hs. Después de eso, te decimos sinceramente si vale la pena hacer una búsqueda oficial pagando o no."}),e.jsx("p",{children:"Si no lo veo o entiendo que es posible, te lo informaré y ahí terminará la investigación. Si es viable, comenzamos de inmediato con la siguiente etapa del trabajo y con su correspondiente costo formal."}),e.jsx("p",{children:"Actualmente, el precio de una búsqueda oficial (después de la evaluación inicial) es de 230€, que se divide en dos pagos: 115€ para comenzar y otros 115€ al finalizar, una vez obtenido el resultado final y el o los documentos necesarios, dependiendo del objetivo que hayamos establecido."}),e.jsxs("p",{children:[e.jsx("b",{className:"p-2",children:"¡IMPORTANTE!"})," Es importante destacar que al aceptar el análisis gratuito, se requiere un compromiso sincero de tu parte, ya que implica horas de trabajo activo. Por lo tanto, si resulta viable y decides no seguir adelante de manera formal, significará una pérdida total de horas de trabajo. Es por eso que se te informa desde el principio sobre los costos involucrados. Por ejemplo, si solicitas el análisis, resulta viable y luego decides no continuar, todas las horas dedicadas se perderán."]}),e.jsx("p",{children:"Este servicio no implica la solicitud del acta al Comune o la iglesia. Si alguien lo desea, puede solicitarnos el servicio de pedido de acta."})]})})}function Q(){return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"mx-auto flex flex-col justify-around gap-4 md:max-w-4xl md:px-20",children:[e.jsx("h2",{className:"titulo",children:"SERVICIO DE CONTROL DE CARPETA"}),e.jsx("p",{children:"A la hora de presentar tu carpeta, ya sea en el consulado que te corresponde o en Italia, la documentación no debe tener inconsistencias en cuanto a nombres, edades, lugares, familiares, etc."}),e.jsx("p",{children:"Nos encargamos del control exhaustivo de las actas para determinar si es necesario realizar rectificaciones, o si ya estás en condiciones de continuar con la siguiente etapa de proceso."}),e.jsx("h2",{className:"titulo",children:"¿CÓMO PUEDO ADQUIRIR EL SERVICIO?"}),e.jsx("p",{children:"Para solicitar el servicio, te solicitamos que tengas disponible la siguiente información:"}),e.jsxs("div",{className:"ml-5 flex items-center gap-2",children:[e.jsx("span",{children:"●"}),e.jsx("p",{children:"Escaneo de tus certificados o certificados digitalizados (que no sean imágenes, para una mejor claridad)."})]}),e.jsxs("div",{className:"ml-5 flex items-center gap-2",children:[e.jsx("span",{children:"●"}),e.jsx("p",{children:"Es importante que los certificados sean legibles; si no lo son, necesitaremos alguna explicación por tu parte sobre su contenido."})]}),e.jsxs("div",{className:"ml-5 flex items-center gap-2",children:[e.jsx("span",{children:"●"}),e.jsx("p",{children:"Árbol genealógico para comprender la línea de descendencia."})]}),e.jsxs("p",{children:[e.jsx("b",{children:"OBLIGATORIO:"})," Para llevar a cabo el análisis, la carpeta debe estar completa; por lo tanto, recomendamos que al contratar el servicio incluyas todos los certificados que forman parte de la línea. No realizamos análisis parciales de la carpeta."]}),e.jsx("p",{children:"El valor por cada control de acta es de €10."})]})})}const J="/api/sendEmail.json.ts",B=()=>{const o="resize-none rounded-lg w-full placeholder:italic placeholder:opacity-50 rounded-md border border-lightGreen bg-white py-2 my-2 px-4 text-base font-medium text-black outline-none focus:border-lightRed focus:shadow-md",l="border-2 border-black p-4 font-bold",n="my-2 w-full rounded-full bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow hover:text-black focus:ring-gray-700",[s,a]=p.useState(!1),i=async r=>{r.preventDefault();const t=r.target,m=new FormData(r.currentTarget),{name:d,email:x,number:h}=Object.fromEntries(m);try{const u=await fetch(J,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from:"info@italoadn.com",to:"info@italoadn.com",subject:`Pedido de traducciones para ${d}`,html:`
						<h1>Formulario de traducciones</h1>
						
						<p>Nombre: ${d}</p>
						<p>Apellido: ${x}</p>
						<p>Numero de actas: ${h}</p>
					`})});a(!0),setTimeout(()=>{a(!1)},7e3),t.reset()}catch(u){console.log(u)}};return e.jsxs("div",{className:"mx-auto flex flex-col justify-around gap-4 md:max-w-4xl md:px-20",children:[e.jsx("h2",{className:"titulo",children:"Traducciones"}),e.jsx("p",{children:"Para iniciar el proceso de solicitud de Ciudadanía Italiana en Italia, es imprescindible realizar la traducción de los registros que conforman tu carpeta y que no sean de origen italiano."}),e.jsx("p",{children:"En consecuencia, los papeles que requieren traducción son aquellos redactados en idiomas distintos al italiano:"}),e.jsxs("ul",{className:"ml-10 list-disc",children:[e.jsx("li",{children:"Actas de nacimiento"}),e.jsx("li",{children:"Actas de matrimonio"}),e.jsx("li",{children:"Certificado de defunción"}),e.jsx("li",{children:" Certificado de no naturalización"}),e.jsx("li",{children:"Certificados de soltería"}),e.jsx("li",{children:"Autorizaciones"}),e.jsx("li",{children:"Certificados de adopción, etc."})]}),e.jsx("p",{children:"Luego de que hayas traducido los documentos deberás darles una validez legal a los mismos. Estos pueden ser mediante:"}),e.jsxs("ul",{className:"ml-10 flex list-disc flex-col gap-2",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Visto Consular:"})," La validación de las traducciones se lleva a cabo en el consulado italiano ubicado en tu país, donde el traductor responsable de realizarlas está registrado. Para este procedimiento, es necesario que te asesores sobre los requisitos del consulado correspondiente a tu país y/o provincia ."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Doble apostilla:"})," La doble apostilla se refiere al procedimiento de legalización de documentos para que sean reconocidos internacionalmente en países que son parte del Convenio de La Haya sobre Apostilla. Consiste en la certificación de un documento por parte de la autoridad competente en el país de origen y luego por el Ministerio de Relaciones Exteriores del mismo país. Este proceso asegura la autenticidad del documento y su validez en el extranjero sin necesidad de más trámites de legalización. En resumen, la doble apostilla en Argentina implica obtener dos apostillas en el país de origen del documento para que sea reconocido en países que forman parte del Convenio de La Haya."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Aseveración en Italia:"})," La legalización de las traducciones se realiza en los tribunales de justicia italianos. Puede llevarse a cabo en cualquier municipio de Italia y es válida en todo el territorio nacional."]})]}),e.jsx("h2",{className:"titulo",children:"¿CÓMO CONTRATAR EL SERVICIO DE TRADUCCIÓN?"}),e.jsx("p",{children:"Cabe destacar que la traducción la realiza un traductor matriculado en Italia."}),e.jsx("p",{children:"Para proceder con la traducción de tus actas, es fundamental que estas estén en su totalidad. Por ejemplo: un acta de nacimiento completa, legalizada y apostillada equivale a una: 1 sola acta."}),e.jsx("h2",{className:"titulo",children:"¿CÓMO CALCULAR EL VALOR??"}),e.jsx("p",{children:"Para realizar este cálculo, debes considerar las actas completas. Por ejemplo:"}),e.jsxs("ul",{className:"ml-10 list-disc",children:[e.jsx("li",{children:"Certificado de No Naturalización + Apostilla = 1 Acta"}),e.jsx("li",{children:" Acta de Nacimiento + Legalización + Apostilla = 1 Acta."}),e.jsx("li",{children:"Acta de Matrimonio + Legalización + Apostilla = 1 Acta."}),e.jsx("li",{children:"Acta de Defunción + Legalización + Apostilla = 1 Acta."}),e.jsx("li",{children:" Información Sumaria + Legalización + Apostilla = 1 Acta"}),e.jsx("li",{children:" Sentencia de Divorcio + Legalización + Apostilla = 1 Acta"})]}),e.jsx("p",{className:"italic text-gray-600 underline",children:"Hacemos apostillas que sean únicamente digitales por el momento."}),e.jsxs("p",{children:["El valor de traducción por acta es de ",e.jsx("b",{children:"€22"})]}),e.jsx("h2",{className:"titulo",children:"¿CUÁNTO TARDA EL SERVICIO?"}),e.jsx("p",{children:"Dependerá de algunos factores, pero en principio de 10 A 15 días hábiles desde que recibimos las actas completas."}),e.jsx("h3",{className:"text-center text-lg font-bold",children:"Pedir traducciones rellenando este formulario:"}),e.jsxs("form",{onSubmit:i,className:"mx-auto w-1/2",children:[e.jsxs("fieldset",{className:l,children:[e.jsx("legend",{children:"Quiero traducir mis actas"}),e.jsx("input",{className:o,placeholder:"Nombre completo",type:"text",name:"name",id:"name",required:!0}),e.jsx("input",{className:o,placeholder:"email",type:"email",name:"email",id:"email",required:!0}),e.jsx("input",{className:o,type:"number",name:"number",id:"number",required:!0,min:1,max:30,placeholder:"1"})]}),e.jsx("input",{type:"submit",value:"Enviar",className:n}),s&&e.jsx("div",{className:"text-center font-bold text-green-600",children:"¡Formulario enviado! Pronto nos pondremos en contacto."})]})]})};function K(){const[o,l]=p.useState(""),n=$(v),s=[{name:"Búsqueda de actas Italianas",value:"partidas"},{name:"Asesoría personalizada",value:"asesoria"},{name:"Actas españolas",value:"españolas"},{name:"Investigación genealogica",value:"investigacion"},{name:"Control de carpeta",value:"control"},{name:"Traducciones",value:"traduccion"}];return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4",children:[e.jsx("h2",{className:"text-center text-2xl md:text-4xl",children:"Servicios"}),e.jsx("select",{onChange:i=>{l(i.target.value)},className:"rounded-lg border border-lightRed p-2 text-center",id:"mySelect",name:"servicesSelect",children:s.map(i=>e.jsx("option",{value:i.value,children:i.name},i.name))}),e.jsx("button",{className:"my-2 w-fit rounded-full bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow hover:text-black focus:ring-gray-700",onClick:()=>M(o),children:"Mostrar servicio"})]}),e.jsx("div",{id:"service-container",className:"pt-20",children:n==="partidas"&&e.jsx(k,{"client:load":!0})||n==="asesoria"&&e.jsx(U,{"client:load":!0})||n==="españolas"&&e.jsx(G,{"client:load":!0})||n==="investigacion"&&e.jsx(H,{"client:load":!0})||n==="control"&&e.jsx(Q,{"client:load":!0})||n==="traduccion"&&e.jsx(B,{"client:load":!0})||e.jsx("p",{children:"Seleccionar servicio"})})]})}export{K as default};
