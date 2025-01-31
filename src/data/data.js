import Tree from '../components/icons/tree.astro'

// MENU LINKS

export const navLinks = [
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
		href: '/servicios'
	},
	{
		name: 'Nosotros',
		href: '/about'
	},
	{
		name: 'Contácto',
		href: '/#contact'
	}
]

// SERVICES

export const services = [
	{
		name: 'Asesorías',
		description:
			'Te guío en el proceso de obtención de la ciudadanía italiana y respondo todas tus dudas. Podemos ajustar las asesorías al horario que más te convenga, ya que todo es online.',
		button: 'Ver más',
		hrefButton: '/servicios/asesoria'
	},
	{
		name: 'Traducciones',
		description:
			'Para iniciar el proceso de solicitud de la Ciudadanía Italiana en Italia, es imprescindible traducir los registros que conforman tu expediente y que no sean de origen italiano. Nos encargamos de realizar traducciones certificadas para tu carpeta.',
		button: 'Ver más',
		hrefButton: '/servicios/traducciones'
	},
	{
		name: 'Solicitud de actas',
		description:
			'El primer paso para obtener tu ciudadanía italiana es ubicar los registros de tu antepasado. ¡Nosotros nos encargamos de buscar y solicitar las actas necesarias por ti!',
		button: 'Ver más',
		hrefButton: '/servicios/actas-italianas'
	}
]

export const tools = [
	{
		name: 'Arbologico',
		description:
			'Esta herramienta creada 100% por nosotros te dara la posibilidad de armar tu árbol genealogico y asi tener en claro tus antepasados.',
		price: 'Ingresar a la APP',
		hrefButton: 'https://totom3ndez.github.io/Arbologico/'
	}
]
