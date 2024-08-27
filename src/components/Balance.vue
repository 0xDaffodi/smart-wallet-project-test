<script setup lang="ts">
import { useBalance, useAccount } from '@wagmi/vue';

const { address } = useAccount()
const { data } = useBalance({ address: address})
</script>

<template>
  <h2>Balance(ETH)</h2>

  <div>
    balance: {{ data?.decimals }} {{ data?.symbol }} {{ data?.value }}
  </div>

  
</template>
