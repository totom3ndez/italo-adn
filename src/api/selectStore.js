import { atom } from 'nanostores'

export const serviceStore = atom('partidas')

export function addService(service) {
	serviceStore.set(service)
}
