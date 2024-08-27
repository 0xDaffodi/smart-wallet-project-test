import { http, createConfig, createStorage } from '@wagmi/vue'
import { base } from '@wagmi/vue/chains'
import { coinbaseWallet, walletConnect } from '@wagmi/vue/connectors'

export const config = createConfig({
  chains: [base],
  connectors: [
    walletConnect({
      projectId: import.meta.env.VITE_WC_PROJECT_ID,
    }),
    coinbaseWallet({ appName: 'Vite Vue Playground', darkMode: true }),
  ],
  storage: createStorage({ storage: localStorage, key: 'vite-vue' }),
  transports: {
    [base.id]: http(),
  },
})

declare module '@wagmi/vue' {
  interface Register {
    config: typeof config
  }
}
