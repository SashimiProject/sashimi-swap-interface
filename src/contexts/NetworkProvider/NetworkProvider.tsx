import React, { createContext, useEffect, useState } from 'react'

import { checkNetwork } from '../../utils/wallet'

export interface NetworkContext {
  networkCorrect?: boolean
}

export const Context = createContext<NetworkContext>({
  networkCorrect: undefined
})

// eslint-disable-next-line react/prop-types
const NetworkProvider: React.FC = ({ children }) => {
  const [networkCorrect, setNetworkCorrect] = useState<boolean>()

  useEffect(() => {
    ;(async () => {
      if (networkCorrect) return
      const hasSetup = await checkNetwork()
      setNetworkCorrect(hasSetup)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Context.Provider value={{ networkCorrect }}>{children}</Context.Provider>
}

export default NetworkProvider
