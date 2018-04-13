<template>
  <div class="ui container segment">
    <h3 class='ui top attached header'>
      Unison League Weapon Skill Calculator
    </h3>
    <p>&nbsp;</p>
    <div class="ui grid">
      <div class = "eight wide column">
        <!--todo-list v-bind:todos="todos"></todo-list-->
        <skill-list v-bind:skills="skills" v-bind:mainslot="mainslot"></skill-list>
      </div>
      <div class = "eight wide column">
        <display v-bind:skills="skills" v-bind:mainslot="mainslot"></display>
      </div>
    </div>
  </div>
</template>

<script>
import SkillList from './components/SkillList';
import Display from './components/Display';

export default {
  name: 'app',
  components: {
    SkillList,
    Display,
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
  },
  // data function avails data to the template
  data() {
    return {
      mainslot: {
        ap: 40,
        rate: 0.2,
        enabled: true,
        main: true,
      },
      skills: [{
        ap: 40,
        rate: 0.1,
        enabled: true,
        main: false,
      }],
    };
  },
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
