<template>
  <div class="preview-page-wrapper">
    <div class="block-wrapper">
      <h2 class="preview-headers"> Персональные данные </h2>
      <span class="main-person-text"> {{ personData }} </span>
    </div>

    <div class="block-wrapper">
      <h2 class="preview-headers"> Дети </h2>
      <div class="kids-block">
        <span v-if="!kids.length" class="main-person-text"> Данные отсутствуют </span>
        <template v-else>
          <template
              v-for="kid in kids"
              :key="kid.id"
          >
            <div class="kid-text-block">
              {{ getData(kid.name, kid.age) }}
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import {getCorrectWord} from "@/helpers/getCorrectWord";

export default {
  name: "PreviewPage",
  data() {
    return {
      mainPerson: undefined,
      kids: [],
    }
  },
  beforeMount() {
    const data =  JSON.parse(localStorage.getItem("someCoolDataForPreview"));
    if( data ) {
      this.$data.mainPerson = data.mainPerson || undefined;
      this.$data.kids = data.kids || [];
    }
  },
  computed: {
    personData() {
      if(this.$data.mainPerson) {
        const { name, age } = this.$data.mainPerson;
        return this.getData(name, age);
      }
      return "Данные отсутствуют";
    }

  },
  methods: {
    getData(name, age) {
      if(name && age) {
        return name + ", " + age + " " + getCorrectWord(+age);
      }
    }
  }
}
</script>

<style scoped>
.preview-page-wrapper {
  display: flex;
  flex-direction: column;
  gap: 60px;
}
.block-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.preview-headers {
  font-size: 16px;
  line-height: 123%;
  font-style: normal;
  font-weight: 500
}
.main-person-text {
  font-size: 16px;
  font-weight: bold;
  line-height: 123%;
}
.kids-block {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.kid-text-block {
  background-color: #F1F1F1;
  border-radius: 4px;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  line-height: 123%;
  max-width: max-content;
}
</style>