<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button icon' v-on:click="addSkill">
      <i class='plus icon'></i>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    addSkill() {
      this.$emit('add-skill', {
        ap: 40,
        rate: 0.1,
        enabled: true,
        main: false,
        crit: false,
      });
    },
  },
};
</script>
