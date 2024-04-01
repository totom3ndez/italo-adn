import { useState } from 'react'
import { useStore } from '@nanostores/react'
import { addService, serviceStore } from '../api/selectStore'
import ServiceForm from '../components/ServiceForm'

export default function SelectInput() {
	const [service, setService] = useState('')
	const $selectedService = useStore(serviceStore)
	return (
		<>
			<div className="flex items-center justify-center gap-4">
				<h2 className="text-center text-lg md:text-2xl">Servicios</h2>
				<select
					onChange={(e) => setService(e.target.value)}
					className="rounded-lg border border-lightRed px-4"
					id="mySelect"
					name="servicesSelect"
				>
					<option value="partidas">Pedido de partidas</option>
					<option value="asesoria">Asesorias</option>
					<option value="españolas">Pedido de actas españolas</option>
					<option value="investigacion">Investigación genealogica</option>
					<option value="control">Control de carpeta</option>
				</select>
				<button onClick={() => addService(service)}>Mostrar servicio</button>
			</div>
			<div id="service-container">
				{$selectedService === 'partidas' ? (
					<ServiceForm />
				) : <p>Seleccionar servicio</p> && $selectedService === 'asesoria' ? (
					<p>Asesoria</p>
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
