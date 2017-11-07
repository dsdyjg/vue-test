<template lang="html">
  <div class="header">

    <div class="title">
      <i @click="showmenu" class="icon-menu"></i>
      <h1>CNode社区</h1>
      <i  class="icon-msg"></i>
      <span  class="msg-count"></span>
    </div>

  </div>
</template>
<script>
//import {getGetters,getActions} from 'vuex';
import {mapActions } from 'vuex';
export default{
    name:'App',
	data(){
	   return {
	   }
	},
	mounted(){
	   
	},
	methods:{
	  ...mapActions([
	     'showmenu'
	   ])
	}
	
}
</script>
<style lang="scss" scoped>
  .header {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1.4rem;
    background-color: #2196F3;
    color: white;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 10px rgba(0, 0, 0, .2);
	z-index:3;
    i {
      position: absolute;
      z-index: 1;
      display: inline-block;
      flex: 1;
      width: 0.5rem;
      height: 0.5rem;
    }
    i.icon-menu {
      left: 0.4rem;
      top: 0.4rem;
	  background:url(../assets/images/search_list.png) no-repeat left top;
	  background-size:100%;
    }
    i.icon-msg {
      right: 0.6rem;
      top: 0.4rem;
	  background:url(../assets/images/xiaoxi.png) no-repeat left top;
	  background-size:100%;
    }
    span.msg-count {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;
      width: 0.3rem;
      height: 0.3rem;
      right: 0.2rem;
      top: 0.3rem;
      text-align: center;
      background-color: #ff4081;
      border-radius: 10px;
      font-size:0.3rem;
    }
    h1 {
      flex: 5;
      letter-spacing: 2px;
      transition: .3s ease-in-out;
	  font-size:0.4rem;
    }
    h1:hover {
      transform: rotate(8deg);
      transition: .3s ease-in-out;
    }
  }
</style>