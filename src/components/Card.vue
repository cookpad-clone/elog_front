<template>
  <div class="dashboard-item">
    <nuxt-link to="/" class="dashboard-item-img-link">
      <div class="dashboard-item-img">
        <img src="https://media.vlpt.us/images/mowinckel/post/c767d8ed-7c23-4a17-95d7-ea4c413e06c9/R1280x0.jpeg?w=640"/>
      </div>
    </nuxt-link>
    <div class="dashboard-item-title">
      <nuxt-link to="/" class="dashboard-item-title-link">
        <h4>✏️ 와디즈 SW 인턴후 넋두리++</h4>
        <div class="dashboard-item-title-desc">
          <p>와디즈에서 인턴 했던 시절이 떠올라서 그 때 이후 이 업계에서 느낀바를 두서 없이 써 본다.
          </p>
        </div>
      </nuxt-link>
      <div class="dashboard-item-title-date">
        <span>2020년 5월 10일</span>
        <span class="separator">·</span>
        <span>30개의 댓글</span>
      </div>
    </div>
    <div class="dashboard-item-author">
      <nuxt-link to="/" class="user-info">
        <img src="https://media.vlpt.us/images/mowinckel/profile/0e635852-b742-424e-9a69-604f83f5efb3/-.png?w=120" alt="user thumbnail of mowinckel"/>
        <span>
          by <b>mowinckel</b>
        </span>
      </nuxt-link>
      <div class="likes">
        <svg width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path></svg>
        105
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style>
.dashboard-item {
  width: 20rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 4px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
}
@media (max-width: 944px) {
  .dashboard-item {
    width: calc(50% - 2rem);
  }
}
@media (max-width: 767px) {
  .dashboard-item {
    width: 100%;
    margin: 0;
  }

  .dashboard-item {
    margin-top: 1rem;
  }
}
.dashboard-item-img-link {
  display: block;
  color: inherit;
  text-decoration: none;
}
.dashboard-item-img {
  width: 100%;
  padding-top: 50%;
  position: relative;
}
.dashboard-item-img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
.dashboard-item-title {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  flex: 1 1 0;
}
.dashboard-item-title-link h4 {
  font-size: 1rem;
  line-height: 1.5;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  color: rgb(33, 37, 41);
  margin: 0 0 0.25rem;
}
.dashboard-item-title-link .dashboard-item-title-desc {
  flex: 1 1 0;
}
.dashboard-item-title-link p {
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.5;
  height: 3.9375rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  color: rgb(73, 80, 87);
  margin: 0 0 1.5rem;
  overflow: hidden;
}
.dashboard-item-title-link {
  display: block;
  color: inherit;
  text-decoration: none;
}
.dashboard-item-title-date {
  font-size: 0.75rem;
  line-height: 1.5;
  color: rgb(134, 142, 150);
}
.dashboard-item-title-date .separator {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.dashboard-item-author {
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0.625rem 1rem;
  border-top: 1px solid rgb(248, 249, 250);
}
.dashboard-item-author .user-info {
  color: inherit;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-decoration: none;
}
.dashboard-item-author .user-info img {
  object-fit: cover;
  width: 1.5rem;
  height: 1.5rem;
  display: block;
  margin-right: 0.5rem;
  border-radius: 50%;
}
.dashboard-item-author .user-info span {
  color: rgb(134, 142, 150);
}
.dashboard-item-author .user-info span b {
  color: rgb(52, 58, 64);
}
.dashboard-item-author .likes {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.dashboard-item-author .likes svg {
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.5rem;
}
</style>
