<template>
  <div class="app">
    <header class="main-header">
      <div>
        <img src="@/assets/logo.png" alt="Alef logo">
      </div>
      <div class="main-header-links">
        <router-link :to="routerNames.form" class="main-header-link">
          Форма
        </router-link>
        <router-link :to="routerNames.preview" class="main-header-link">
          Превью
        </router-link>
      </div>
    </header>

    <main class="main-page-content">
      <router-view />
    </main>

    <footer class="main-footer">
      <div>
        all rights reserved
      </div>
    </footer>
  </div>
</template>

<script>
import { routerNames } from "@/router/routers";

export default {
  name: 'App',
  data() {
    return {
      routerNames,
    }
  }
}
</script>

<style>
@import "reset.css";

#app {
  height: 100%;
}
.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 30px;
  height: 100%;
  font-family: Montserrat,serif;
}
.main-header {
  display: flex;
  gap: 20px;
  border-bottom: 1px solid #1111111a;
  padding: 30px 90px;
  width: 100%;
}
.main-header-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  width: 100%;
}
.main-header-link {
  color: #1111117a;
}
.main-header-link:hover {
  color: #0273a8;
}
.main-page-content {
  height: 100%;
  width: 100%;
  padding: 0 300px;
}
.main-footer {
  background-color: #1111111a;
  padding: 30px 90px;
  width: 100%;
  text-align: center;
}

@media screen and (max-width: 900px){
  .main-page-content {
    padding: 0 100px;
  }
}

@media screen and (max-width: 600px){
  .main-page-content {
    padding: 0 60px;
  }
  .main-header {
    padding: 30px 80px;
  }
}
@media screen and (max-width: 450px){
  .main-page-content {
    padding: 0 20px;
  }
  .main-header {
    padding: 30px 40px;
  }
}
</style>
