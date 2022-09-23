<template>
  <div>
    <div class="photo">
      <img :src="img.urls.small_s3" @click="showImage" />
      <div class="footer" data-anima="bottom">
        <div class="user" @click="openProfile(img.user.links.html)">
          <img
            :src="img.user.profile_image.medium"
            :alt="img.user.name"
            loading="lazy"
          />
          <div class="data">
            <h3>{{ img.user.name }}</h3>
            <a :href="img.user.links.html">Contrate</a>
          </div>
        </div>
        <!-- target="_blank" -->
        <a
          :href="img.links.download"
          download
          target="_blank"
          title="Download photo"
          class="download"
          >Download</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseImage",
  props: {
    img: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    showImage() {
      window.open(this.img.urls.full);
    },
    openProfile(url) {
      window.open(url);
    },
  },
};
</script>

<style scoped>
.photo {
  /* position: relative; */
  overflow: hidden;
  border-radius: 5px;
  background: #f7f7f7;
  cursor: zoom-in;
}

img {
  margin-bottom: -55px;
  border-radius: 5px;
}
.footer {
  position: relative;
  z-index: 9999;
  bottom: 15px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(3px);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  opacity: 0 !important;
  transition: 0.3s;
}

.photo:hover .footer {
  opacity: 1 !important;
  bottom: 20px;
}
@media screen and (max-width: 768px) {
  .photo:hover .footer {
    opacity: 0 !important;
  }
}
.user {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
}
.user img {
  width: 30px;
  border-radius: 50%;
  margin: 0;
}
.user h3,
.download {
  font-size: 13px;
  color: #fff;
}
.user a {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
}
</style>