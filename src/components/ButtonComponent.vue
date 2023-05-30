<template>
  <button :class="btnStyle" :type="type">
    <slot name="image"/>
    <span> {{ text}} </span>
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "button",
      required: false
    },
    styleType: {
      type: String,
      default: "primary",
      validator(style) {
        return ["primary", "secondary", "pseudo"].includes(style);
      },
    }
  },
  computed: {
    btnStyle() {
      const { styleType } = this.$props;
      if(styleType === "primary"){
        return "default-btn primary-btn";
      }
      if(styleType === "secondary"){
        return "default-btn secondary-btn";
      }
      if(styleType === "pseudo"){
        return  "default-btn pseudo-btn";
      }
      return  "default-btn";
    }
  }
}
</script>

<style scoped>
.default-btn {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 16px;
  line-height: 141%;
  padding: 10px 20px;
  cursor: pointer;
}
.primary-btn {
  max-width: max-content;
  color: #FFFFFF;
  background-color: #01A7FD;
  border-radius: 100px;
  border: none;
}
.primary-btn:hover {
  background-color: #0273a8;
}
.secondary-btn {
  max-width: max-content;
  color: #01A7FD;
  background-color: #FFFFFF;
  border-radius: 100px;
  border: 2px solid #01A7FD;
  cursor: pointer;
}
.secondary-btn:hover {
  border: 2px solid #0273a8;
  color: #0273a8;
}
.pseudo-btn {
  color: #01A7FD;
  border: none;
  background-color: transparent;
}
.pseudo-btn:hover {
  color: #0273a8;;
}
</style>