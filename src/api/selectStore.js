import { atom } from 'nanostores'

export const serviceStore = atom('')

export function addService(service) {
	serviceStore.set(service)
	console.log(service)
}
