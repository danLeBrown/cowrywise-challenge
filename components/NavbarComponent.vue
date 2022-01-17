<template>
  <div>
    <nav>
      <v-container class="search-div">
        <form v-if="$route.name === 'index'" action="" @submit.prevent="search">
          <span class="icon"><i class="bi bi-search"></i></span>
          <input
            v-model="query"
            type="text"
            placeholder="Search for photo"
            @change="search"
          />
        </form>
        <div v-else class="nav-meta">
          <h1>
            Searching for
            <span class="highlight-text">"{{ $route.query.query }}" </span>
          </h1>
        </div>
      </v-container>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      query: '',
    }
  },
  methods: {
    search() {
      this.$router.push({
        path: '/search',
        query: {
          query: this.query,
        },
      })
    },
  },
}
</script>

<style scoped>
nav {
  display: fixed;
  background: var(--border);
  width: 100vw;
  height: 250px;
  padding: 0;
  margin: 0;
}

.search-div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: inherit;
  padding: 0 1rem;
}

form {
  margin-top: -1rem;
  width: inherit;
  padding: 0.5rem 1.5rem;
  background: var(--white);
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
}

input {
  flex: 10;
  padding: 0.5rem;
  outline: none;
}

.icon {
  margin-right: 1rem;
}

.hihglight-text {
  color: var(--primary-color);
}

.nav-meta {
  width: 100%;
  text-align: left;
}

h1 {
  font-size: 36px;
  color: var(--brand-color);
}

h1 span {
  color: #7e8a9e;
}
</style>
