webpackJsonp([1],{"0LHT":function(t,e){},"8FVa":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=i("7+uW"),s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui centered card"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!isEditing"}],staticClass:"content"},[i("div",{staticClass:"content"},[i("div",{staticClass:"ui checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.skill.enabled,expression:"skill.enabled"}],attrs:{type:"checkbox",tabindex:"0"},domProps:{checked:Array.isArray(t.skill.enabled)?t._i(t.skill.enabled,null)>-1:t.skill.enabled},on:{change:function(e){var i=t.skill.enabled,l=e.target,s=!!l.checked;if(Array.isArray(i)){var n=t._i(i,null);l.checked?n<0&&t.$set(t.skill,"enabled",i.concat([null])):n>-1&&t.$set(t.skill,"enabled",i.slice(0,n).concat(i.slice(n+1)))}else t.$set(t.skill,"enabled",s)}}}),t._v(" "),i("label",[t._v("Enabled")])]),t._v(" "),i("span",{staticClass:"right floated icon",on:{click:function(e){t.deleteSkill(t.skill)}}},[i("i",{staticClass:"window close icon"})])]),t._v(" "),i("form",{staticClass:"left floated ui form"},[i("div",{staticClass:"two fields"},[i("div",{staticClass:"field"},[i("label",[t._v(t._s(t.switchCrit()))]),t._v(" "),t.skill.crit?i("div",[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.critdmg[0],expression:"critdmg[0]",modifiers:{number:!0}}],attrs:{type:"text",number:"",placeholder:"Integer"},domProps:{value:t.critdmg[0]},on:{input:function(e){e.target.composing||t.$set(t.critdmg,0,t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]):i("div",[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.skill.ap,expression:"skill.ap",modifiers:{number:!0}}],attrs:{type:"text",number:"",placeholder:"Integer"},domProps:{value:t.skill.ap},on:{input:function(e){e.target.composing||t.$set(t.skill,"ap",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),i("div",{staticClass:"field"},[i("label",[t._v("Proc Rate")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.skill.rate,expression:"skill.rate",modifiers:{number:!0}}],attrs:{type:"text",number:"",placeholder:"Decimal"},domProps:{value:t.skill.rate},on:{input:function(e){e.target.composing||t.$set(t.skill,"rate",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])])]),t._v(" "),i("div",{staticClass:"ui checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.skill.crit,expression:"skill.crit"}],attrs:{type:"checkbox",tabindex:"0"},domProps:{checked:Array.isArray(t.skill.crit)?t._i(t.skill.crit,null)>-1:t.skill.crit},on:{change:function(e){var i=t.skill.crit,l=e.target,s=!!l.checked;if(Array.isArray(i)){var n=t._i(i,null);l.checked?n<0&&t.$set(t.skill,"crit",i.concat([null])):n>-1&&t.$set(t.skill,"crit",i.slice(0,n).concat(i.slice(n+1)))}else t.$set(t.skill,"crit",s)}}}),t._v(" "),i("label",[t._v("Fatal?")])])])])},staticRenderFns:[]},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui centered card"},[i("div",{staticClass:"content"},[i("form",{staticClass:"left floated ui form"},[i("div",{staticClass:"two fields"},[i("div",{staticClass:"field"},[i("label",[t._v(t._s(t.switchCrit()))]),t._v(" "),t.mainslot.crit?i("div",[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.critdmg[0],expression:"critdmg[0]",modifiers:{number:!0}}],attrs:{type:"text",number:"",placeholder:"Integer"},domProps:{value:t.critdmg[0]},on:{input:function(e){e.target.composing||t.$set(t.critdmg,0,t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]):i("div",[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.mainslot.ap,expression:"mainslot.ap",modifiers:{number:!0}}],attrs:{type:"text",number:"",placeholder:"Integer"},domProps:{value:t.mainslot.ap},on:{input:function(e){e.target.composing||t.$set(t.mainslot,"ap",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),i("div",{staticClass:"field"},[i("label",[t._v("Proc Rate")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.mainslot.rate,expression:"mainslot.rate",modifiers:{number:!0}}],attrs:{type:"text",placeholder:"Decimal"},domProps:{value:t.mainslot.rate},on:{input:function(e){e.target.composing||t.$set(t.mainslot,"rate",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])])]),t._v(" "),i("div",{staticClass:"ui checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.mainslot.crit,expression:"mainslot.crit"}],attrs:{type:"checkbox",tabindex:"0"},domProps:{checked:Array.isArray(t.mainslot.crit)?t._i(t.mainslot.crit,null)>-1:t.mainslot.crit},on:{change:function(e){var i=t.mainslot.crit,l=e.target,s=!!l.checked;if(Array.isArray(i)){var n=t._i(i,null);l.checked?n<0&&t.$set(t.mainslot,"crit",i.concat([null])):n>-1&&t.$set(t.mainslot,"crit",i.slice(0,n).concat(i.slice(n+1)))}else t.$set(t.mainslot,"crit",s)}}}),t._v(" "),i("label",[t._v("Fatal?")])])])])},staticRenderFns:[]},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui basic content center aligned segment"},[e("button",{staticClass:"ui basic button icon",on:{click:this.addSkill}},[e("i",{staticClass:"plus icon"})])])},staticRenderFns:[]},r={props:["skills","mainslot","critdmg"],components:{Skill:i("VU/8")({props:["skill","critdmg"],data:function(){return{isEditing:!1}},methods:{deleteSkill:function(t){this.$emit("delete-skill",t)},switchCrit:function(){return this.skill.crit?"CritDmg Buff":"AP Boost"}}},s,!1,null,null,null).exports,MainSlot:i("VU/8")({props:["mainslot","critdmg"],methods:{switchCrit:function(){return this.mainslot.crit?"CritDmg Buff":"AP Boost"}}},n,!1,null,null,null).exports,CreateSkill:i("VU/8")({methods:{addSkill:function(){this.$emit("add-skill",{ap:40,rate:.1,enabled:!0,main:!1,crit:!1})}}},a,!1,null,null,null).exports},methods:{deleteSkill:function(t){var e=this.skills.indexOf(t);this.skills.splice(e,1)},addSkill:function(t){this.skills.push(t)}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h3",{staticClass:"ui dividing header"},[t._v("\n    Main Slot\n  ")]),t._v(" "),i("main-slot",{attrs:{mainslot:t.mainslot,critdmg:t.critdmg}}),t._v(" "),i("h3",{staticClass:"ui dividing header"},[t._v("\n    Sub slots\n  ")]),t._v(" "),t._l(t.skills,function(e){return i("skill",{attrs:{skill:e,critdmg:t.critdmg},on:{"delete-skill":t.deleteSkill}})}),t._v(" "),i("create-skill",{on:{"add-skill":t.addSkill}})],2)},staticRenderFns:[]};var o=i("VU/8")(r,c,!1,function(t){i("0LHT")},null,null).exports,d=i("QttI"),u=i.n(d),m={props:["skills","mainslot","critdmg"],methods:{calcBoost:function(){var t=this.skills.concat([this.mainslot]);t=t.filter(function(t){return t.enabled});for(var e=this.combinations(t),i=0,l=0;l<e.length;l+=1)i+=this.calcset(e[l],t);return i},combinations:function(t){for(var e=[],i=0;i<t.length;i+=1)e.push(i);return function t(e,i,l){if(0!=e.length||0!=i.length)return 0==i.length?l.push(e):(t(e.concat([i[0]]),i.slice(1),l),t(e,i.slice(1),l)),l}(new Array,e,[])},calcset:function(t,e){for(var i=0,l=!1,s=0,n=0,a=0,r=!1,c=0;c<t.length;c+=1)e[t[c]].main&&(l=!0,e[t[c]].crit?(s=50+Number(this.critdmg[0]),r=!0):s=e[t[c]].ap),e[t[c]].crit?(i+=50+Number(this.critdmg[0]),a+=1):i+=e[t[c]].ap;t.length<3?n=2==a?this.critdmg[0]:i:l?(r&&a>1&&(i-=(a-1)*(50+this.critdmg[0])),n=s+(i-s)/(t.length-1)):(a>1&&(i-=u.a.combinations(a,2)*(50+this.critdmg[0])),n=i/t.length*2);for(var o=1,d=0;d<e.length;d+=1)t.includes(d)?o*=e[d].rate:o*=1-e[d].rate;return n*o}}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ui basic content center aligned segment"},[this._v("\n  On average, your procs give you "),e("br"),this._v("\n  "+this._s(this.calcBoost().toFixed(3))+" "),e("br"),this._v("\n  extra AP!\n")])},staticRenderFns:[]},p={name:"app",components:{SkillList:o,Display:i("VU/8")(m,v,!1,null,null,null).exports},methods:{addTodo:function(t){this.todos.push(t)}},data:function(){return{mainslot:{ap:40,rate:.2,enabled:!0,main:!0,crit:!1},skills:[{ap:40,rate:.1,enabled:!0,main:!1,crit:!1}],critdmg:[0]}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ui container segment"},[i("h3",{staticClass:"ui top attached header"},[t._v("\n    Unison League Weapon Skill Calculator\n  ")]),t._v(" "),i("p",[t._v(" ")]),t._v(" "),i("div",{staticClass:"ui grid"},[i("div",{staticClass:"eight wide column"},[i("skill-list",{attrs:{skills:t.skills,mainslot:t.mainslot,critdmg:t.critdmg}})],1),t._v(" "),i("div",{staticClass:"eight wide column"},[i("display",{attrs:{skills:t.skills,mainslot:t.mainslot,critdmg:t.critdmg}})],1)])])},staticRenderFns:[]};var h=i("VU/8")(p,f,!1,function(t){i("8FVa")},null,null).exports;l.a.config.productionTip=!1,new l.a({el:"#app",components:{App:h},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.167777f9db8673504650.js.map