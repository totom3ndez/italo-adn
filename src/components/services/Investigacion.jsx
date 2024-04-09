import '../../styles/services.css'

export default function Investigacion() {
	return (
		<>
			<div className="mx-auto flex flex-col justify-around gap-4 md:max-w-4xl md:px-20">
				<h2 className="titulo">Servicio de Investigación Genealógica</h2>
				<p className="px-15 italic opacity-75">
					Antes que nada, cabe destacar que este tipo de investigación no solo la realizamos con
					documentos Italianos, sino también con partidas españolas y francesas.
				</p>
				<p>
					Este tipo de exploración se solicita cuando necesitamos obtener el registro de nuestro
					AVO, pero nos falta algún detalle, por ejemplo:
				</p>
				<div className="ml-5 flex items-center gap-2">
					<span>●</span>
					<p>Conocemos la fecha precisa, la provincia, pero desconocemos el Comune.</p>
				</div>
				<div className="ml-5 flex items-center gap-2">
					<span>●</span>
					<p>Tenemos una fecha aproximada y la región.</p>
				</div>
				<div className="ml-5 flex items-center gap-2">
					<span>●</span>
					<p>Tenemos una fecha aproximada, pero puede haber uno o varios lugares.</p>
				</div>
				<div className="ml-5 flex items-center gap-2">
					<span>●</span>
					<p>Tenemos una fecha aproximada y una ubicación aproximada.</p>
				</div>
				<p>
					Cuanta más información podamos proporcionar sobre la persona que estamos intentando
					localizar, mayores serán las posibilidades de éxito en la búsqueda. Es crucial que
					indiquemos la provincia, la región o el Comune, ya que si solo especificamos "Italia", y
					si tienes algún acta o documento que mencione a estas personas mucho mejor, sino, las
					probabilidades de concluir la investigación con éxito disminuyen considerablemente.
				</p>
				<p>
					Hacemos una revisión con la información que tengas, gratis, para ver si podemos buscar
					algo, en 24/48 hs. Después de eso, te decimos sinceramente si vale la pena hacer una
					búsqueda oficial pagando o no.
				</p>
				<p>
					Si no lo veo o entiendo que es posible, te lo informaré y ahí terminará la investigación.
					Si es viable, comenzamos de inmediato con la siguiente etapa del trabajo y con su
					correspondiente costo formal.
				</p>
				<p>
					Actualmente, el precio de una búsqueda oficial (después de la evaluación inicial) es de
					230€, que se divide en dos pagos: 115€ para comenzar y otros 115€ al finalizar, una vez
					obtenido el resultado final y el o los documentos necesarios, dependiendo del objetivo que
					hayamos establecido.
				</p>
				<p>
					<b className="p-2">¡IMPORTANTE!</b> Es importante destacar que al aceptar el análisis
					gratuito, se requiere un compromiso sincero de tu parte, ya que implica horas de trabajo
					activo. Por lo tanto, si resulta viable y decides no seguir adelante de manera formal,
					significará una pérdida total de horas de trabajo. Es por eso que se te informa desde el
					principio sobre los costos involucrados. Por ejemplo, si solicitas el análisis, resulta
					viable y luego decides no continuar, todas las horas dedicadas se perderán.
				</p>
				<p>
					Este servicio no implica la solicitud del acta al Comune o la iglesia. Si alguien lo
					desea, puede solicitarnos el servicio de pedido de acta.
				</p>
			</div>
		</>
	)
}
