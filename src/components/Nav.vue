<template>
<div class="tab">
   <ul>
      <li><router-link to="/">首页</router-link></li>
	  <li><router-link to="/good">精华</router-link></li>
	  <li><router-link to="/share">分享</router-link></li>
	  <li><router-link to="/ask">问答</router-link></li>
	  <li><router-link to="/job">招聘</router-link></li>
   </ul>
</div>
</template>
<script>
export default{
   name:'Nav'
}
</script>
<style lang="scss" scoped>
.tab{
   background:#2196F3;
   ul{overflow:hidden;}
   ul li{float:left;width:20%;list-style:none;}
   ul li a{font-size:0.5rem;}
}
.active{color:#FFF;border-bottom:1px solid #ff8800;}
</style>