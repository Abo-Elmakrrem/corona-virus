<template>
  <section>
    <prev1 />
    <prev2 />
  </section>
</template>
<script>
import prev1 from '@/components/preventions/HowToProtect.vue'
import prev2 from '@/components/preventions/StepsToProtect.vue'
export default {
  name: 'prevetions',
  components: {
    prev1,
    prev2
  }
}
</script>
