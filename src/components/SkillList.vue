<template>
  <div>
    <!--JavaScript expressions in Vue are enclosed in double curly brackets.-->
    <h3 class='ui dividing header'>
      Main Slot
    </h3>
    <main-slot v-bind:mainslot="mainslot" v-bind:critdmg="critdmg"></main-slot>
    <h3 class='ui dividing header'>
      Sub slots
    </h3>
    <skill v-on:delete-skill="deleteSkill" v-for="skill in skills" v-bind:skill="skill" v-bind:critdmg="critdmg"></skill>
    <create-skill v-on:add-skill="addSkill"></create-skill>
  </div>
</template>

<script type = "text/javascript" >

import Skill from './Skill';
import MainSlot from './MainSlot';
import CreateSkill from './CreateSkill';

export default {
  props: ['skills', 'mainslot', 'critdmg'],
  components: {
    Skill,
    MainSlot,
    CreateSkill,
  },
  methods: {
    deleteSkill(skill) {
      const skillIndex = this.skills.indexOf(skill);
      this.skills.splice(skillIndex, 1);
    },
    addSkill(skill) {
      this.skills.push(skill);
    },
  },
};
</script>
<style>
</style>
