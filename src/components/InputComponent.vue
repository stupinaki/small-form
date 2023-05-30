<template>
  <div class="input-wrapper">
    <label :for="id" class="label-text"> {{ label }} </label>
    <input
        :id="id"
        :value="value"
        :type="type"
        :placeholder="placeholder"
        class="input-tag"
        @change="onChange"
        @focus="onFocus"
    >
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  emits: ["inputChange"],
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
    placeholder: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    }
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
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.input-tag {
  border: none;
  background-color: transparent;
  height: 100%;
  width: 100%;
}

.input-tag:focus-visible {
  outline: none;
}
.label-text {
  color: #1111117A;
}

</style>