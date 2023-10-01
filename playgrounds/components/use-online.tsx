import { useOnline } from '@utiliser/react-hooks'
import React from 'react'

export const UseIsOnline = () => {
	const { isOnline } = useOnline()
	return <p>{isOnline ? 'Online' : 'Offline'}</p>
}
