<template>
  <header class="group-header">
    <div class="logo">
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="57.609375" height="21.65625"><path stroke="#343A40" d="M12.29 10.21L12.29 10.78L3.91 10.78Q3.91 12.86 5.12 14.20Q6.32 15.55 8.06 15.55L8.06 15.55Q9.73 15.55 11.50 14.95L11.50 14.95L11.81 16.42Q10.20 17.14 8.04 17.14L8.04 17.14Q5.32 17.14 3.66 15.40Q1.99 13.65 1.99 10.69L1.99 10.69Q1.99 7.78 3.49 6.05Q4.98 4.32 7.35 4.32L7.35 4.32Q9.46 4.32 10.88 5.93Q12.29 7.54 12.29 10.21L12.29 10.21ZM4.03 9.29L10.30 9.29Q10.30 7.86 9.41 6.88Q8.52 5.91 7.42 5.91L7.42 5.91Q6 5.91 5.07 6.84Q4.14 7.78 4.03 9.29L4.03 9.29ZM25.44 15.25L25.44 16.83L20.45 16.83L20.45 1.88L17.26 1.88L17.26 0.29L22.28 0.29L22.28 15.25L25.44 15.25ZM36 4.32L36 4.32Q38.52 4.32 40.01 6.08Q41.50 7.84 41.50 10.71L41.50 10.71Q41.50 13.61 40.01 15.38Q38.52 17.14 36 17.14L36 17.14Q33.47 17.14 31.99 15.38Q30.50 13.62 30.50 10.71L30.50 10.71Q30.50 7.83 31.99 6.08Q33.48 4.32 36 4.32ZM36 15.55L36 15.55Q37.66 15.55 38.63 14.14Q39.59 12.74 39.59 10.73L39.59 10.73Q39.59 8.63 38.64 7.27Q37.69 5.91 36 5.91L36 5.91Q34.30 5.91 33.36 7.25Q32.43 8.59 32.43 10.73L32.43 10.73Q32.43 12.77 33.38 14.16Q34.32 15.55 36 15.55ZM49.11 12.22L49.11 12.22Q47.40 13.05 47.40 13.69L47.40 13.69Q47.40 14.03 47.79 14.26Q48.19 14.50 48.87 14.50L48.87 14.50L52.98 14.38Q54.45 14.38 55.26 15.09Q56.07 15.81 56.07 17.12L56.07 17.12Q56.07 19.20 54.22 20.43Q52.37 21.66 49.90 21.66L49.90 21.66Q47.87 21.66 46.58 20.81Q45.29 19.96 45.29 18.61L45.29 18.61Q45.29 17.14 47.29 16.14L47.29 16.14Q45.63 15.36 45.63 14.24L45.63 14.24Q45.63 12.95 47.77 11.84L47.77 11.84Q46.78 11.24 46.25 10.29Q45.73 9.34 45.73 8.29L45.73 8.29Q45.73 6.56 46.90 5.46Q48.07 4.35 49.83 4.35L49.83 4.35Q51.09 4.35 52.11 4.88L52.11 4.88L55.73 4.32L55.73 6.11L53.40 6.11Q53.93 7.03 53.93 8.29L53.93 8.29Q53.93 9.95 52.77 11.10Q51.61 12.25 49.83 12.25L49.83 12.25Q49.45 12.25 49.11 12.22ZM49.83 10.83L49.83 10.83Q50.84 10.83 51.47 10.13Q52.11 9.43 52.11 8.31L52.11 8.31Q52.11 7.13 51.49 6.46Q50.87 5.79 49.83 5.79L49.83 5.79Q48.86 5.79 48.19 6.49Q47.53 7.18 47.53 8.31L47.53 8.31Q47.53 9.41 48.19 10.12Q48.86 10.83 49.83 10.83ZM49.90 20.24L49.90 20.24Q51.70 20.24 52.97 19.44Q54.25 18.63 54.25 17.45L54.25 17.45Q54.25 16.23 52.44 16.23L52.44 16.23Q51.84 16.23 50.38 16.30L50.38 16.30Q49.45 16.35 48.93 16.35L48.93 16.35Q48.67 16.35 48.12 16.77Q47.58 17.19 47.29 17.62Q47.00 18.05 47.00 18.50L47.00 18.50Q47.00 19.22 47.80 19.73Q48.60 20.24 49.90 20.24Z"/></svg>
      </a>
    </div>
    <span class="header_right">
      <a class="search">
        <svg width="17" hegith="17" viewBox="0 0 17 17">
          <path
            fill-rule="evenodd"
            d="M13.66 7.36a6.3 6.3 0 1 1-12.598 0 6.3 6.3 0 0 1 12.598 0zm-1.73 5.772a7.36 7.36 0 1 1 1.201-1.201l3.636 3.635c.31.31.31.815 0 1.126l-.075.075a.796.796 0 0 1-1.126 0l-3.636-3.635z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
      <button>로그인</button>
    </span>
  </header>
</template>
<script>
export default {

}
</script>
<style>
.group-header {
  display: flex;
  height: 4rem;
  width: 1728px;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
}

.group-header button {
  height: 2rem;
  color: white;
  background-color: rgb(52, 58, 64);
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 1rem;
  border-style: none;
  border-color: initial;
  transition: all 0.125s ease-in 0s;
  text-align: center;
}

.group-header button:focus {
  outline: none;
}

.group-header button:hover {
  background-color: #868e96;
}

.search {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 0.75rem;
  background: transparent;
  border-radius: 50%;
}

.search:hover {
  background-color: #EEEFF0;
}

.search svg {
  width: 1.125rem;
  height: 1.125rem;
}

.header_right {
  display: flex;
  align-items: center;
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(52, 58, 64);
  font-size: 1.3125rem;
  font-family: "Fira Mono", monospace;
  text-decoration: none;
}
@media (max-width: 1919px) {
  .group-header {
    width: 1376px;
  }
}
@media (max-width: 1440px) {
  .group-header {
    width: 1280px;
  }
}
@media (max-width: 1312px) {
  .group-header {
    width: 912px;
  }
}
@media (max-width: 944px) {
  .group-header {
    width: calc(100% - 2rem);
  }
}
@media (max-width: 767px) {
  .group-header {
    width: calc(100% - 2rem);
  }
}
</style>
