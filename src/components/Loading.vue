<template>
  <div class="load">
     <img src="../assets/images/loading.gif" class="load_img" />
  </div>
</template>
<script>
export default{
    name:'loading',
	data(){
	   return {
	   }
	}
}
</script>
<style lang="scss" scoped>
    .load{ 
	  width:90%;
	  margin:0 auto;
	  height:100%;
	  overflow:hidden;
	  .load_img{margin:0px auto;padding:0px;overflow:hidden;display:block;width:100%;}
	}
</style>