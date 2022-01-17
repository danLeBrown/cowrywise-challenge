<template>
  <div>
    <NavbarComponent />
    <PicturesComponent />
  </div>
</template>

<script>
import NavbarComponent from '~/components/NavbarComponent.vue'
import PicturesComponent from '~/components/PicturesComponent.vue'
export default {
  name: 'IndexPage',
  components: {
    NavbarComponent,
    PicturesComponent,
  },
  mounted() {
    return this.$store.dispatch('pictures/getPictures')
  },
}
</script>
