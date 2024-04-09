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
]

// SERVICES

export const services = [
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
	},
	{
		name: 'Control de carpetas',
		description:
			'Nos encargamos del control exhaustivo de las actas para determinar si es necesario realizar rectificaciones, o si ya estás en condiciones de continuar con la siguiente etapa de proceso.',
		button: 'Ver más',
		hrefButton: '/services'
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
