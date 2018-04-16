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
              <label>{{switchCrit()}}</label>
              <div v-if="skill.crit">
                <input type="text" number v-model.number="critdmg[0]" placeholder="Integer">
              </div>
              <div v-else>
                <input type="text" number v-model.number="skill.ap" placeholder="Integer">
              </div>
            </div>
            <div class='field'>
              <label>Proc Rate</label>
              <input type="text" number v-model.number="skill.rate" placeholder="Decimal">
            </div>
          </div>
        </form>
        <div class='ui checkbox'>
          <input type="checkbox" v-model="skill.crit" tabindex="0">
          <label>Fatal?</label>
        </div>
    </div>
</div>
</template>

<script type="text/javascript">
export default {
  props: ['skill', 'critdmg'],
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    deleteSkill(skill) {
      this.$emit('delete-skill', skill);
    },
    switchCrit() {
      if (this.skill.crit)
        return "CritDmg Buff"
      else
        return "AP Boost"
    },
  },
};
</script>
