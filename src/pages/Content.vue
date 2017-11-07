<template>
    <scroll 
	 :data="list" 
	 :pullDownRefresh="pullDownRefresh" 
	 :listenScroll="listenScroll" 
	 :pullUpLoad="pullUpLoad" 
	 @scrollToEnd="fetchData" 
	 @pulldown="loadData">
	 <div class="list"><list :data="list" @select="changeTo"></list></div>   
	 <div class="load_wrap"><loading v-show="isloding"></loading></div>	
	</scroll>
	
</template>
<script>
import BScroll from 'better-scroll'
import Scroll from '../components/Scroll'
import Loading from '../components/Loading'
import List from './List'
import {mapGetters}  from 'vuex'
export default {
  name: 'content',
  data(){
    return {
	  pullDownRefresh:true,
	  listenScroll:true,
	  pullUpLoad:true,
	  isloding:true,
	  page:1,
	  list:[]
	}
  },
  created(){
  
    setTimeout(()=>{
	   this.fetchData();
	},1000);
    
  },
  methods:{
     fetchData(){
	   // var url = 'https://cnodejs.org/api/v1/topics';
		//var parm = '?page=' + this.page + '&tab=all';
		// url = url + parm;
		  this.isloding=true;
		  
	    this.$http.get(`https://cnodejs.org/api/v1/topics?page=${this.page}&tab=all`).then(res=>{
			this.page++;
			this.list = this.list.concat(res.data.data);
			this.isloding=false;

		})
	 },
	 scroll(){
	    console.log(34);
	 },
	 loadData(){
	   console.log(1111);
	 },
	 changeTo(item){
	   this.$router.push({
	      name:'article',
		  params:{id:item.id}
	   })
	 }
  },
  components:{
     Scroll,
	 Loading,
	 List
  }
}
</script>
<style lang="scss" scoped>
  .list{
    z-index:-1;
	position:relative;
  }
  
</style>