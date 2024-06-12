import { useState } from 'react'
import { useStore } from '@nanostores/react'
import { addService, serviceStore } from '../api/selectStore'
import PedidoPartidas from './services/PedidoPartidas'
import Asesoria from './services/Asesoria'
import ActasEspañolas from './services/ActasEspañolas'
import Investigacion from './services/Investigacion'
import Control from './services/Control'
import { Traducciones } from './services/Traducciones'

export default function SelectInput() {
	const [service, setService] = useState('')
	const $selectedService = useStore(serviceStore)

	const Servicios = [
		{
			name: 'Búsqueda de actas Italianas',
			value: 'partidas'
		},
		{
			name: 'Asesoría personalizada',
			value: 'asesoria'
		},
		{
			name: 'Actas españolas',
			value: 'españolas'
		},
		{
			name: 'Investigación genealogica',
			value: 'investigacion'
		},
		{
			name: 'Control de carpeta',
			value: 'control'
		},
		{
			name: 'Traducciones',
			value: 'traduccion'
		}
	]

	const buttonStyle =
		'my-2 w-fit rounded-full bg-gray-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-yellow hover:text-black focus:ring-gray-700'
	return (
		<>
			<div className="flex flex-col items-center justify-center gap-4">
				<h2 className="text-center text-2xl md:text-4xl">Servicios</h2>
				<p className="mx-5 text-center">
					Selecciona el servicio en el desplegable para ver mas información y formularios.
				</p>
				<select
					onChange={(e) => {
						setService(e.target.value)
					}}
					className="rounded-lg border border-lightRed p-2 text-center"
					id="mySelect"
					name="servicesSelect"
				>
					{Servicios.map((service) => {
						return (
							<option key={service.name} value={service.value}>
								{service.name}
							</option>
						)
					})}
				</select>
				<button className={buttonStyle} onClick={() => addService(service)}>
					Mostrar servicio
				</button>
			</div>
			<div id="service-container" className="pt-20">
				{($selectedService === 'partidas' && <PedidoPartidas client:load />) ||
					($selectedService === 'asesoria' && <Asesoria client:load />) ||
					($selectedService === 'españolas' && <ActasEspañolas client:load />) ||
					($selectedService === 'investigacion' && <Investigacion client:load />) ||
					($selectedService === 'control' && <Control client:load />) ||
					($selectedService === 'traduccion' && <Traducciones client:load />) || (
						<p className="text-center text-2xl">🤌🤌🤌</p>
					)}
			</div>
		</>
	)
}
