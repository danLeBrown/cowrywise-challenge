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
  name: 'SearchPage',
  components: {
    NavbarComponent,
    PicturesComponent,
  },
  computed: {
    query() {
      return this.$route.query.query
    },
  },
  watch: {
    query() {
      return this.searchPictures()
    },
  },
  mounted() {
    this.searchPictures()
  },
  methods: {
    searchPictures() {
      return this.$store.dispatch('pictures/searchPictures', this.$route.query)
    },
  },
}
</script>

<style scoped></style>
