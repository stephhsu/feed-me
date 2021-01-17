// largely based off VueMastery Example: from Vue 3 Forms Course
<template class="grid">
  <span class="label">
    <label v-if="label">{{ label }}</label>
  </span>
  <span class="dropdown">
    <select
      class="field"
      :value="modelValue"
      v-bind="{
        ...$attrs,
        onChange: ($event) => {
          $emit('update:modelValue', $event.target.value);
        },
      }"
    >
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === modelValue"
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
    modelValue: {
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
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
.grid {
  display: grid;
  grid-template-columns: 30% 70%;
  height: stretch;
}

.label {
  font-family: 'Roboto Slab', serif;
  font-size: 18px;
  padding-left: 3px;
}
</style>
