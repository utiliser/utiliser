import { useNetworkConnection } from '@utiliser/react-hooks'
import React from 'react'

export const UseNetworkConnection = () => {
	const { network } = useNetworkConnection()
	return <p>{network ? JSON.stringify(network) : JSON.stringify(network)}</p>
}
