<template>
  <form
      class="main-form"
      @submit.prevent="onSubmit"
  >
      <div class="main-form-block-wrapper">
        <h2 class="form-headers"> Персональные данные </h2>

        <div class="default-inputs-wrapper">
          <InputComponent
              v-for="value in mainInputsValue"
              :key="value.id"
              :id="value.id"
              :type="value.type"
              :label="value.label"
              :key-name="value.key"
              :value="value.value"
              :placeholder="value.placeholder"
              @input-change="onMainInputsChange"
          />
        </div>
      </div>

      <div class="main-form-block-wrapper">
        <div class="header-wrapper">
          <h2 class="form-headers"> Дети (макс. 5) </h2>
          <ButtonComponent
              v-show="isAddBtnVisible"
              text="Добавить ребенка"
              style-type="secondary"
              @click="addKidInput"
          >
            <template #image>
              <img src="@/assets/union.svg" alt="union">
            </template>
          </ButtonComponent>
        </div>
        <div class="kid-inputs-wrapper">
          <template v-for="key in kidsKeys" :key="key" >
            <InputComponent
                v-for="value in kidsValue[key]"
                :key="value.id"
                :id="key"
                :type="value.type"
                :label="value.label"
                :key-name="value.key"
                :value="value.value"
                :placeholder="value.placeholder"
                @input-change="onKidsInputChange"
            />
            <ButtonComponent
                text="Удалить"
                style-type="pseudo"
                @click="deleteKid(key)"
            />
          </template>
        </div>
      </div>

    <ButtonComponent
        text="Сохранить"
        type="submit"
        style-type="primary"
    />
  </form>
</template>

<script>
import { v4 } from "uuid";
import { cloneDeep } from "lodash";
import { defaultInputs } from "@/data/defaultInputs";
import InputComponent from "@/components/InputComponent.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  name: "FormPage",
  components: {
    ButtonComponent,
    InputComponent,
  },
  data() {
    return {
      mainInputsValue: cloneDeep(defaultInputs),
      kidsValue: {},
    }
  },
  methods: {
    addKidInput() {
      this.$data.kidsValue[v4()] = cloneDeep(defaultInputs);
    },
    onMainInputsChange(data) {
      this.$data.mainInputsValue = this.$data.mainInputsValue.map(d => {
        return {
          ...d,
          value: d.key === data.key ? data.value : d.value,
        }
      })
    },
    onSubmit() {
      const { mainInputsValue, kidsValue } = this.$data;
      const mainPerson = {}
      mainInputsValue.forEach(v => mainPerson[v.key] = v.value);

      const kids = [];
      this.kidsKeys.forEach(key => {
        const res = {
          id: key,
        }
        kidsValue[key].forEach(v => res[v.key] = v.value);
        kids.push(res);
      })

      const data = {
        mainPerson: mainPerson,
        kids: kids
      }
      localStorage.setItem("someCoolDataForPreview", JSON.stringify(data));

      this.$data.mainInputsValue = cloneDeep(defaultInputs);
      this.$data.kidsValue = {};
    },
    onKidsInputChange(data) {
      this.$data.kidsValue[data.id] = this.$data.kidsValue[data.id].map(k => {
        return {
          ...k,
          value: k.key === data.key ? data.value : k.value,
        }
      })
    },
    deleteKid(id) {
      delete this.$data.kidsValue[id];
    }
  },
  computed: {
    isAddBtnVisible() {
      return this.kidsKeys.length < 5;
    },
    kidsKeys() {
      return Object.keys(this.$data.kidsValue);
    },
  }
}
</script>

<style scoped>
.main-form {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.kid-inputs-wrapper {
  display: grid;
  grid-template-columns: 3fr 3fr 1fr;
  gap: 20px;
}
.main-form-block-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.default-inputs-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.kid-inputs-wrapper {
  display: grid;
  grid-template-columns: 3fr 3fr 1fr;
  gap: 20px;
}
.form-headers {
  font-size: 16px;
  line-height: 123%;
  font-weight: normal;
}
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

</style>