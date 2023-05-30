<template>
  <div class="app">
    <div class="main-header">
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
    </div>

    <div class="main-page-content">
      <router-view />
    </div>

    <div class="main-footer">
      <div>
        all rights reserved
      </div>
    </div>
  </div>
</template>

Должны быть поля ввода ФИО и возраста пользователя.
Ниже должна вводится информация о детях. Изначально пользователь видит только кнопку "+", при нажатии на нее появляется блок
в котором можно ввести информацию о ребенке: Имя и возраст. Таким образом пользователь может добавить вплоть до 5 детей.
Когда пользователь добавил 5 детей — кнопка "+" исчезает и больше недоступна. Так же напротив каждого ребенка есть кнопка "удалить" ,
при нажатии на которую соответствующая запись удаляется.

Реализовать функционал нужно без серверной части. При нажатии на кнопку "Сохранить" введенные данные должны отображаться на странице
"Превью".

Есть вторая страница, на которой отображаются введенные данные, без возможности редактировать.

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
  display: grid;
  grid-template-columns: 2fr 10fr;
  gap: 20px;
  border-bottom: 1px solid #1111111a;
  padding: 30px 90px;
  width: 100%;
}
.main-header-links {
  display: flex;
  align-items: center;
  gap: 24px;
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
}
@media screen and (max-width: 450px){
  .main-page-content {
    padding: 0 20px;
  }
}
</style>
