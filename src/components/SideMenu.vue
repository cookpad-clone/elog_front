<template>
  <aside class="aside-menu">
    <section class="noti-list">
      <h4>공지사항</h4>
      <ul>
        <li>
          <h5>
            <nuxt-link to="/">
              수식 입력 및 외부 서비스 개체 삽입 기능 업데이트
            </nuxt-link>
          </h5>
          <div class="date">
            2020년 3월 31일
          </div>
        </li>
      </ul>
    </section>
    <section class="tag-list">
      <h4>인기 태그</h4>
      <ul>
        <li>
          <nuxt-link to="/tags/a">
            # TLI
          </nuxt-link>
        </li>
      </ul>
    </section>
    <footer class="footer-desc">
      <div class="links">

      </div>
      <div class="copyright">
        © 2020 · elog
      </div>
    </footer>
  </aside>
</template>
<script>
export default {

}
</script>
<style>
.aside-menu {
  margin-left: 6rem;
  width: 16rem;
}
@media (max-width: 1440px) {
  .aside-menu {
    width: 12rem;
  }
}
.aside-menu .noti-list h4 {
  line-height: 1.5;
  font-size: 0.875rem;
  padding-bottom: 0.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
  font-weight: bold;
  border-bottom: 1px solid rgb(233, 236, 239);
}
.aside-menu .noti-list ul {
  list-style: none;
  padding: 0;
}
.aside-menu .noti-list ul li h5 {
  font-size: 1.125rem;
  line-height: 1.5;
  color: rgb(52, 58, 64);
  margin: 0;
}
.aside-menu .noti-list ul li h5 a {
  color: inherit;
  text-decoration: none;
}
.aside-menu .noti-list ul li .date {
  color: rgb(134, 142, 150);
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
.aside-menu .tag-list {
  margin-top: 4rem;
}
.tag-list h4 {
  line-height: 1.5;
  font-size: 0.875rem;
  padding-bottom: 0.5rem;
  margin-top: 0px;
  margin-bottom: 1rem;
  font-weight: bold;
  border-bottom: 1px solid rgb(233, 236, 239);
}
.tag-list ul {
  padding-left: 0px;
  list-style: none;
}
.tag-list ul li {
  color: rgb(73, 80, 87);
  line-height: 1.5;
  font-size: 1rem;
}
.tag-list ul a {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}
.tag-list ul a:hover {
  border-bottom: 1px solid rgb(73, 80, 87);
}
.footer-desc {
  margin-top: 6.25rem;
  line-height: 1.5;
  font-size: 0.875rem;
}
.footer-desc .copyright {
  color: rgb(173, 181, 189);
}
</style>
