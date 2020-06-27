<template>
  <header class="user-header">
    <div class="in-header">
      <div class="group-logo">
        <!--글 작성자-->
        <nuxt-link to="/">
          <svg width="192" height="192" viewBox="0 0 192 192" fill="none">
            <rect width="192" height="192" fill="currentColor" rx="24"></rect>
            <path
              d="M49 65.48V57.92C53.8 56.36 59.44 54.68 65.92 52.88C72.4 50.96 76.78 50 79.06 50C84.1 50 87.1 52.4 88.06 57.2L99.76 123.62C103.48 118.7 106.54 114.56 108.94 111.2C112.66 105.92 116.08 99.86 119.2 93.02C122.44 86.18 124.06 80.06 124.06 74.66C124.06 71.42 123.16 68.84 121.36 66.92C119.68 64.88 116.5 62.3 111.82 59.18C116.62 53.06 122.62 50 129.82 50C133.66 50 136.84 51.14 139.36 53.42C142 55.7 143.32 59.06 143.32 63.5C143.32 70.94 140.2 80.24 133.96 91.4C127.84 102.44 116.02 119.06 98.5 141.26L80.68 142.52L67 65.48H49Z"
              fill="white"
            ></path>
          </svg>
        </nuxt-link>
        <nuxt-link class="user-logo" :to="user.id">{{ user.name }}</nuxt-link>
      </div>
      <div class="group-profile">
        <!--사용자-->
        <nuxt-link class="user-search" :to="`/search?username=${user.id}`">
          <svg width="17" height="17" viewBox="0 0 17 17">
            <path
              fill-rule="evenodd"
              d="M13.66 7.36a6.3 6.3 0 1 1-12.598 0 6.3 6.3 0 0 1 12.598 0zm-1.73 5.772a7.36 7.36 0 1 1 1.201-1.201l3.636 3.635c.31.31.31.815 0 1.126l-.075.075a.796.796 0 0 1-1.126 0l-3.636-3.635z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </nuxt-link>
        <button class="write-post" color="darkGray" style="margin-right: 1.25rem;">
          새 글 작성
        </button>
        <div>
          <div class="profile">
            <img
              src="https://media.vlpt.us/images/iha/profile/792ff2ed-911f-4771-a132-2530cdce02c9/social.png?w=120"
              alt="thumbnail"
            /><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 10l5 5 5-5z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: '보보보보노노노보노',
        id: '/@bonobono'
      }
    }
  }
}
</script>
<style>
.user-header {
  height: 4rem;
}

.in-header {
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 1728px;
  margin-left: auto;
  margin-right: auto;
}

.group-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: rgb(52, 58, 64);
  font-size: 1.3125rem;
  font-family: "Fira Mono", monospace;
  text-decoration: none;
}

.group-logo a {
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
}
.group-logo a svg {
  margin-right: 1rem;
  width: 1.75rem;
  height: 1.75rem;
  display: block;
}

.group-logo .user-logo {
  display: block;
  max-width: calc(100vw - 200px);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
}

.group-profile {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
}
.user-search {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  margin-right: 0.75rem;
  background: transparent;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  border-radius: 50%;
}
.user-search svg {
  width: 1.125rem;
  height: 1.125rem;
}

.write-post {
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  font-weight: bold;
  word-break: keep-all;
  color: rgb(52, 58, 64);
  cursor: pointer;
  border-radius: 1rem;
  outline: none;
  background: white;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(52, 58, 64);
  border-image: initial;
  transition: all 0.125s ease-in 0s;
}
.profile {
  cursor: pointer;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.profile img {
  display: block;
  height: 2.5rem;
  width: 2.5rem;
  box-shadow: rgba(0, 0, 0, 0.086) 0px 0px 8px;
  object-fit: cover;
  border-radius: 50%;
  transition: all 0.125s ease-in 0s;
}
.profile svg {
  font-size: 1.5rem;
  margin-left: 0.25rem;
  color: rgb(134, 142, 150);
  margin-right: -0.4375rem;
  transition: all 0.125s ease-in 0s;
}

@media (max-width: 1919px) {
  .in-header {
    width: 1376px;
  }
}
@media (max-width: 1440px) {
  .in-header {
    width: 1280px;
  }
}
@media (max-width: 1312px) {
  .in-header {
    width: 912px;
  }
}
@media (max-width: 944px) {
  .in-header {
    width: calc(100% - 2rem);
  }
}
@media (max-width: 767px) {
  .in-header {
    width: calc(100% - 2rem);
  }
}
</style>
