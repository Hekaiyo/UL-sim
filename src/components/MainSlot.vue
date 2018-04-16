<template>
  <div class='ui centered card'>
    <div class='content'>
        <form class = 'left floated ui form'>
          <div class='two fields'>
            <div class='field'>
              <label>{{switchCrit()}}</label>
              <div v-if="mainslot.crit">
                <input type="text" number v-model.number="critdmg[0]" placeholder="Integer">
              </div>
              <div v-else>
                <input type="text" number v-model.number="mainslot.ap" placeholder="Integer">
              </div>
            </div>
            <div class='field'>
              <label>Proc Rate</label>
              <input type="text" v-model.number="mainslot.rate" placeholder="Decimal">
            </div>
          </div>
        </form>
        <div class='ui checkbox'>
          <input type="checkbox" v-model="mainslot.crit" tabindex="0">
          <label>Fatal?</label>
        </div>
    </div>
</div>
</template>

<script type="text/javascript">
export default {
  props: ['mainslot', 'critdmg'],
  methods: {
    switchCrit() {
      if (this.mainslot.crit)
        return "CritDmg Buff"
      else
        return "AP Boost"
    },
  },
};
</script>
