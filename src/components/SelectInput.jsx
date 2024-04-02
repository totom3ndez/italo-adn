import { useState } from 'react'
import { useStore } from '@nanostores/react'
import { addService, serviceStore } from '../api/selectStore'
import PedidoPartidas from './pedidoPartidas'
import Asesoria from './Asesoria'

export default function SelectInput() {
	const [service, setService] = useState('')
	const $selectedService = useStore(serviceStore)
	return (
		<>
			<div className="flex flex-col items-center justify-center gap-4">
				<h2 className="text-center text-2xl md:text-4xl">Servicios</h2>
				<select
					onChange={(e) => {
						setService(e.target.value)
					}}
					className="rounded-lg border border-lightRed p-2 text-center"
					id="mySelect"
					name="servicesSelect"
				>
					<option value="partidas">Pedido de partidas</option>
					<option value="asesoria">Asesorias</option>
					<option value="españolas">Pedido de actas españolas</option>
					<option value="investigacion">Investigación genealogica</option>
					<option value="control">Control de carpeta</option>
				</select>
				<button
					className="w-fit rounded-lg bg-yellow p-2 hover:bg-darkRed hover:text-white"
					onClick={() => addService(service)}
				>
					Mostrar servicio
				</button>
			</div>
			<div id="service-container" className="pt-20">
				{$selectedService === 'partidas' ? (
					<PedidoPartidas client:load />
				) : <p>Seleccionar servicio</p> && $selectedService === 'asesoria' ? (
					<Asesoria />
				) : <p>Seleccionar servicio</p> && $selectedService === 'españolas' ? (
					<p>españolas</p>
				) : <p>Seleccionar servicio</p> && $selectedService === 'investigacion' ? (
					<p>investigacion</p>
				) : <p>Seleccionar servicio</p> && $selectedService === 'control' ? (
					<p>control</p>
				) : (
					<p>Seleccionar servicio</p>
				)}
			</div>
		</>
	)
}
