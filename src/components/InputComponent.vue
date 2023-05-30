<template>
  <div :class="inputWrapperStyle">
    <label class="label-text">
      {{ label }}
      <input
          :value="value"
          :type="type"
          placeholder="..."
          class="input-tag"
          @change="onChange"
          @focus="onFocus"
          @blur="onBlur"
      >
    </label>
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  emits: ["inputChange", "errorChange"],
  props: {
    id: {
      type: String,
      required: true,
    },
    keyName: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: false,
      default: "",
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
    isError: {
      type: Boolean,
      required: true
  },
  },
  methods: {
    onChange(e) {
      const data = {
        value: e.target.value,
        id:  this.$props.id,
        key: this.$props.keyName
      };
      this.$emit("inputChange", data);
    },
    onFocus(e) {
      e.target.select();
      const data = {
        id:  this.$props.id,
        key: this.$props.keyName,
        isError: false,
      };
      this.$emit("errorChange", data)
    },
    onBlur(){
      if(!this.$props.value) {
        const data = {
          id:  this.$props.id,
          key: this.$props.keyName,
          isError: true,
        };
        this.$emit("errorChange", data);
      }
    }
  },
  computed: {
    inputWrapperStyle() {
      return this.$props.isError ? "input-wrapper-error" : "input-wrapper"
    }
  }
}
</script>

<style scoped>
.input-wrapper {
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  padding: 8px 16px;
  box-sizing: border-box;
}
.input-wrapper-error {
  border: 1px solid #af1a1a;
  border-radius: 4px;
  padding: 8px 16px;
  box-sizing: border-box;
}
.input-tag {
  border: none;
  background-color: transparent;
  height: 100%;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #111111;
}

.input-tag:focus-visible {
  outline: none;
}
.label-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: #1111117A;
}

</style>