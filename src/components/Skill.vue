<template>
  <div class='ui centered card'>
    <div class='content' v-show="!isEditing">
        <div class='content'>
          <div class='ui checkbox'>
            <input type="checkbox" v-model="skill.enabled" tabindex="0">
            <label>Enabled</label>
          </div>
          <span class='right floated icon' v-on:click="deleteSkill(skill)">
            <i class="window close icon"></i>
          </span>
        </div>
        <form class = 'left floated ui form'>
          <div class='two fields'>
            <div class='field'>
              <label>AP Boost</label>
              <input type="text" number v-model.number="skill.ap" placeholder="Integer">
            </div>
            <div class='field'>
              <label>Proc Rate</label>
              <input type="text" number v-model.number="skill.rate" placeholder="Decimal">
            </div>
          </div>
        </form>
    </div>
</div>
</template>

<script type="text/javascript">
export default {
  props: ['skill'],
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    deleteSkill(skill) {
      this.$emit('delete-skill', skill);
    },
  },
};
</script>
