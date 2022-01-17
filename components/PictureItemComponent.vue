<template>
  <div class="img-container" @click="showModal">
    <div v-if="loading" class="loading-animation">
      <v-progress-circular
        indeterminate
        color="white"
        width="3"
        size="20"
      ></v-progress-circular>
    </div>
    <img :src="picture.urls.small" :alt="picture.alt_description" lazy="load" />
    <div class="meta-div">
      <h2>{{ `${picture.user.first_name} ${picture.user.last_name}` }}</h2>
      <p>{{ picture.user.location }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PictureItemComponent',
  props: {
    picture: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    }
  },
  mounted() {
    this.$root.$on('closeModal', () => {
      this.loading = false
    })
  },
  methods: {
    showModal() {
      if (!window || !window.navigator || !window.navigator.vibrate) {
        console.log("Browser doesn't support vibration")
      } else {
        window.navigator.vibrate(30)
      }
      this.loading = true
      return this.$root.$emit('showModal', this.picture)
    },
  },
}
</script>

<style scoped>
.img-container {
  display: inline-block;
  padding: 0;
  margin: 0 0 1rem;
  width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  position: relative;
  border-radius: 0.25rem;
  color: var(--dark-color);
  cursor: pointer;
  transition: all ease-in-out 300ms;
  -webkit-transition: all ease-in-out 300ms;
  -moz-transition: all ease-in-out 3000ms;
  -ms-transition: all ease-in-out 3000ms;
  -o-transition: all ease-in-out 3000ms;
}

.img-container::before {
  display: block;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--dark-bg);
  z-index: 1;
  border-radius: inherit;
  transition: all ease-in-out 300ms;
  -webkit-transition: all ease-in-out 300ms;
  -moz-transition: all ease-in-out 3000ms;
  -ms-transition: all ease-in-out 3000ms;
  -o-transition: all ease-in-out 3000ms;
}
.img-container:hover {
  transform: scale(0.9);
}
.img-container:hover::before {
  background: rgba(0, 0, 0, 0.5);
}

img {
  border-radius: inherit;
  width: 100%;
  height: auto;
  display: flex;
}

.meta-div {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  color: var(--white);
  text-align: left;
  z-index: 2;
  font-size: 0.75rem;
}

.loading-animation {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: var(--dark-bg);
  top: 0;
  left: 0;
  border-radius: inherit;
}
</style>
