<template>
  <div class='ui basic content center aligned segment'>
    On average, your procs give you <br />
    {{calcBoost().toFixed(3)}} <br />
    extra AP!
  </div>
</template>

<script>
export default {
  props: ['skills', 'mainslot'],
  methods: {
    calcBoost() {
      var fooo = this.skills.concat([this.mainslot]);
      fooo = fooo.filter(skill => skill.enabled)
      //console.log(fooo)
      var baar = this.combinations(fooo)
      var realtotal = 0;
      for (let i = 0; i < baar.length; i += 1) {
        realtotal += this.calcset(baar[i], fooo);
      }
      return realtotal
    },
    combinations(arr) {
      var fn = function(active, rest, a) {
        if (active.length == 0 && rest.length == 0)
          return;
        if (rest.length == 0) {
          a.push(active);
        } else {
          fn(active.concat([rest[0]]), rest.slice(1), a);
          fn(active, rest.slice(1), a);
        }
        return a;
      }
      let foo = [];
      for (let i = 0; i < arr.length; i += 1) {
        foo.push(i);
      }
      return fn(new Array(), foo, []);
    },
    calcset(arr, fullarr) {
      let total = 0;
      let mainf = false;
      let mainv = 0;
      let avg = 0;
      for (let i = 0; i < arr.length; i += 1) {
        if (fullarr[arr[i]].main) {
          mainf = true;
          mainv = fullarr[arr[i]].ap;
        }
        total += fullarr[arr[i]].ap;
      }
      if (arr.length < 3) {
        avg = total;
      } else if (mainf) {
        avg = mainv + (total - mainv) / (arr.length - 1);
      } else {
        avg = total / arr.length * 2;
      }
      let prob = 1;
      for (let i = 0; i < fullarr.length; i += 1) {
        if (arr.includes(i)) {
          prob = prob * fullarr[i].rate;
        } else {
          prob = prob * (1 - fullarr[i].rate);
        }
      }
      return avg * prob;
    },
  },
};
</script>
