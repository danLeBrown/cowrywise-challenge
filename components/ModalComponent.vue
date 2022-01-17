<template>
  <div
    v-if="showModal"
    class="modal-wrapper"
    @click="checkToCloseModal($event)"
  >
    <div class="modal-container">
      <button class="close-modal"><i class="bi bi-x-lg"></i></button>
      <img :src="picture.urls.regular" :alt="picture.alt_description" lazy="load"/>
      <div class="modal-meta">
        <h2>{{ `${picture.user.first_name} ${picture.user.last_name}` }}</h2>
        <p>{{ picture.user.location }}</p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-undef */
export default {
  name: 'ModalComponent',
  data() {
    return {
      picture: {},
      showModal: false,
    }
  },
  mounted() {
    this.$root.$on('showModal', (data) => {
      this.picture = data
      this.displayModal()
    })
  },
  methods: {
    displayModal() {
      return (this.showModal = true)
    },

    checkToCloseModal(e) {
      if (
        $(e.target).closest('.modal-container').length === 0 ||
        $(e.target).closest('.close-modal').length === 1
      ) {
        window.navigator.vibrate(30)
        this.$root.$emit('closeModal')
        return (this.showModal = false)
      }
    },
  },
}
</script>

<style scoped>
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: var(--dark-bg);
  z-index: 2;
  overflow-y: scroll;
}

.modal-container {
  width: 90%;
  max-width: 768px;
  border-radius: 1rem;
  display: grid;
  position: relative;
  margin: 100px auto;
}

.modal-meta {
  background: var(--white);
  margin: 0;
  padding: 2rem;
  border-radius: 0 0 1rem 1rem;
  font-size: 0.75rem;
  width: 100%;
}

img {
  width: 100%;
  height: auto;
  border-radius: 1rem 1rem 0 0;
}

.close-modal {
  position: absolute;
  top: 0;
  right: -5rem;
  z-index: 2;
  color: var(--white);
  font-size: 1.5rem;
}
</style>
