<template>
  <div class="tab">
    <div class="tab_item">
      <nuxt-link to="/" class="link" exact-active-class="tab_item_click">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
          ></path>
        </svg>
        트렌딩
      </nuxt-link>
      <nuxt-link to="/recent" class="link" exact-active-class="tab_item_click">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
          ></path>
        </svg>
        최신
      </nuxt-link>
<!--      <div class="tab_line" :style="`left: ${line}`"/>-->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      line: 0
    }
  }
}
</script>
<style>
.tab {
  display: flex;
  margin-top: 1.5rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.tab_item {
  display: flex;
  position: relative;
  width: 14rem;
}

.link {
  width: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  text-decoration: none;
  color: rgb(134, 142, 150);
  cursor: pointer;
  height: 3rem;
}

.link:active {
  color: rgb(52, 58, 64);
  font-weight: bold;
}

.tab_item_click {
  color: rgb(52, 58, 64);
  font-weight: bold;
}

.tab_item a svg {
  font-size: 1.5rem;
  margin-right: 0.5rem;
}
.tab_line {
  width: 50%;
  height: 2px;
  position: absolute;
  bottom: 0;
  background: rgb(52, 58, 64);
}

@media (max-width: 944px) {
  .tab_item a {
    font-size: 1rem;
    width: 5rem;
  }

  .tab_line {
    font-size: 1rem;
    width: 5rem;
  }
}
</style>
