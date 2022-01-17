<template>
  <v-container class="grid-container">
    <div v-if="pictures.length > 0" class="pictures-grid">
      <PictureItemComponent
        v-for="picture in pictures"
        :key="picture.id"
        :picture="picture"
      />
    </div>
    <div v-else id="loader-grid" class="no-pictures-found pictures-grid">
      <v-skeleton-loader
        class="loader-container skeleton-loader ld-1"
        min-width="120"
        type="image, paragraph"
        min-height="162"
      ></v-skeleton-loader>
      <v-skeleton-loader
        class="loader-container skeleton-loader ld-2"
        min-width="120"
        type="image, paragraph"
        min-height="162"
      ></v-skeleton-loader>
      <v-skeleton-loader
        class="loader-container skeleton-loader ld-3"
        min-width="120"
        type="image, paragraph"
        min-height="162"
      ></v-skeleton-loader>
      <v-skeleton-loader
        class="loader-container skeleton-loader ld-4"
        min-width="120"
        type="image, paragraph"
        min-height="180"
      ></v-skeleton-loader>
      <v-skeleton-loader
        class="loader-container skeleton-loader ld-5"
        min-width="120"
        type="image, paragraph"
        min-height="180"
      ></v-skeleton-loader>
      <v-skeleton-loader
        class="loader-container skeleton-loader ld-6"
        min-width="120"
        type="image, paragraph"
        min-height="180"
      ></v-skeleton-loader>
      <v-skeleton-loader
        class="loader-container skeleton-loader ld-7"
        min-width="120"
        type="image, paragraph"
        min-height="180"
      ></v-skeleton-loader>
      <v-skeleton-loader
        class="loader-container skeleton-loader ld-8"
        min-width="120"
        type="image, paragraph"
        min-height="180"
      ></v-skeleton-loader>
    </div>

    <ModalComponent />
  </v-container>
</template>

<script>
import PictureItemComponent from '~/components/PictureItemComponent.vue'
import ModalComponent from '~/components/ModalComponent.vue'
export default {
  name: 'PicturesComponent',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    PictureItemComponent,
    ModalComponent,
  },
  computed: {
    pictures() {
      return this.$store.state.pictures.pictures
    },
  },
}
</script>

<style scoped>
.grid-container {
  margin-top: -100px;
}

.pictures-grid {
  margin: 1.5rem 0;
  column-gap: 1rem;
  -moz-column-count: 1;
  -webkit-column-count: 1;
  column-count: 1;
}

@media only screen and (min-width: 400px) {
  .pictures-grid {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }
}

@media only screen and (min-width: 700px) {
  .pictures-grid {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }
}

.loader-container {
  display: inline-block;
  padding: 0;
  margin: 0 0 1rem;
  width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  position: relative;
  text-align: center;
  border-radius: 0.25rem;
  color: var(--dark-color);
  text-decoration: none;
  transition: all ease-in-out 500ms;
}
</style>
