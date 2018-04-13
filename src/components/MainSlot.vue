<template>
  <div class='ui centered card'>
    <div class='content'>
        <form class = 'left floated ui form'>
          <div class='two fields'>
            <div class='field'>
              <label>AP Boost</label>
              <input type="text" v-model.number="mainslot.ap" placeholder="Integer">
            </div>
            <div class='field'>
              <label>Proc Rate</label>
              <input type="text" v-model.number="mainslot.rate" placeholder="Decimal">
            </div>
          </div>
        </form>
    </div>
</div>
</template>

<script type="text/javascript">
export default {
  props: ['mainslot'],
};
</script>
