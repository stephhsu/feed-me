// largely based off VueMastery Example: from Vue 3 Forms Course
<template class="grid">
  <span class="label">
    <label v-if="label">{{ label }}</label>
  </span>
  <span class="dropdown">
    <select
      class="field"
      :value="modelVal"
      v-bind="{
        ...$attrs,
        onChange: ($event) => {
          $emit('update:modelVal', $event.target.value);
        },
      }"
    >
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === modelVal"
        >{{ option }}</option
      >
    </select>
  </span>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    modelVal: {
      type: [String, Number],
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style>
.grid {
  display: grid;
  grid-template-colums: 30% 70%;
  height: stretch;
}

label: {
  align: right;
  text-size: 25pt;
  padding-left: 3px;
}
</style>
