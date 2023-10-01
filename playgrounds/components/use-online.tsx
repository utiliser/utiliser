<<<<<<< HEAD
import { useOnline } from '@virakkhun/react-hooks'
=======
import { useOnline } from '@utiliser/react-hooks'
>>>>>>> develop
import React from 'react'

export const UseIsOnline = () => {
	const { isOnline } = useOnline()
	return <p>{isOnline ? 'Online' : 'Offline'}</p>
}
