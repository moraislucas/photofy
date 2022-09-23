<template>
  <div class="container">
    <Loading v-if="loading" />
    <div class="home" v-if="!loading">
      <div v-for="photo in photos" :key="photo.id" data-anima="bottom">
        <BaseImage :img="photo" />
      </div>
    </div>
    <button class="btn" v-if="!loading" @click="getPhotos(query, page++)">
      Carregar mais fotos
    </button>
  </div>
</template>

<script>
import { EventBus } from "@/main.js";
import { api } from "@/services.js";
import { VUE_CLIENT_ID } from "@/helpers.js";
import BaseImage from "@/components/BaseImage.vue";

export default {
  name: "HomeView",
  components: {
    BaseImage,
  },
  data() {
    return {
      loading: false,
      photos: [],
      page: 1,
      query: "",
    };
  },
  methods: {
    getPhotos(query, page) {
      this.query = query || this.query;
      this.loading = true;
      const is_page = this.page || page;
      this.photos = is_page == 1 ? [] : this.photos;
      api
        .get(
          `/?client_id=${VUE_CLIENT_ID}&query=${
            query || ""
          }&per_page=20&page=${is_page}`
        )
        .then((resp) => {
          resp.data.forEach((photo) => {
            this.photos.push(photo);
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getPhotos();
  },
  created() {
    // evento query do usuario
    if (!window.query) {
      window.query = true;
      EventBus.$on("query", (query) => {
        this.getPhotos(query);
      });
    }
  },
};
</script>

<style scoped>
.home {
  column-count: 3;
}
.btn {
  margin: 40px auto;
  width: 300px;
}
@media screen and (max-width: 768px) {
  .home {
    column-count: 2;
  }
  .btn {
    width: auto;
  }
}
</style>