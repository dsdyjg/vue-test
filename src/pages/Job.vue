<template>
    <scroll 
	 :data="list" 
	 :pullDownRefresh="pullDownRefresh" 
	 :listenScroll="listenScroll" 
	 :pullUpLoad="pullUpLoad" 
	 @scrollToEnd="fetchData" 
	 @pulldown="loadData">
	    <div class="content">
	        <!--<div class="top_tip"><span>下拉刷新</span></div>-->
			<div v-for="(item, index) in list"  class="item">
				<div class="avatar">
					  <img :src="item.author.avatar_url" alt="">
			    </div>
				<div class="title">
				  <p>
					<span class="flag" :class="{special: item.top || item.good}">{{(item.top ? '置顶' : '') || (item.good ? '精华': '')}}</span>
					<router-link :to="{name:'article',params: {id: item.id}}">{{item.title}}</router-link>
				  </p>
				  <p class="view">
					<span class="viewed">{{item.reply_count}}</span>/{{item.visit_count}}
					<span class="date"> {{changeTime(item.last_reply_at)}}</span>
				  </p>
				</div>
			</div>
			<div class="load_wrap"><loading v-show="isloding"></loading></div>
		</div>
		
	</scroll>
	
</template>
<script>
import BScroll from 'better-scroll'
import Scroll from '../components/Scroll'
import Loading from '../components/Loading'
export default {
  name: 'content',
  data(){
    return {
	  list:[],
	  pullDownRefresh:true,
	  listenScroll:true,
	  pullUpLoad:true,
	  isloding:true,
	  page:1
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
		  
	    this.$http.get(`https://cnodejs.org/api/v1/topics?page=${this.page}&tab=job`).then(res=>{
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
	 }
  },
  components:{
     Scroll,
	 Loading
  }
}
</script>
<style lang="scss" scoped>
  
  .content{
     position:relative;
	 height:auto;
	 width:97%;
	 margin:0 auto;
	 z-index:-1;
	 .item {
      width: 100%;
      height: 1.4rem;
      padding-right: 5px;
      border-bottom: 1px solid rgba(0, 0, 0, .1);
	  font-size:0.6rem;
	  color:#999;
      .avatar {
        float:left;
        img {
          width: 1rem;
          height: 1rem;
          border-radius: 5px;
        }
      }

      .title {
        width: 83%;
        background-color: white;
        padding-top: 15px;
        padding-left: 5px;
        font-size: 0.3rem;
        overflow: hidden;
		text-align: left;
        p {
          width: 98%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
		  margin-left:2%;
        }
        .flag {
          background-color: #e5e5e5;
          padding: 2px 5px;
          font-size: 80%;
          color: #9c9c9c;
          border-radius: 5px;
          margin-right: 3px;
        }
        .special {
          background-color: #80bd01;
          color: white;
        }
        .view {
          position: relative;

          font-size: 70%;
          color: gray;
          padding-top: 10px;
          padding-left: 45px;
          span.viewed {
            color: #9e83cc;
          }
          span.date {
            position: absolute;
            right: 10px;
          }
        }

      }

      .title:hover {
        background-color: #F5F5F5;
      }
    }
	.load_wrap{
	   width:100%;
	   top:50%;
	   transform:translateY(50%);
	}
  }
  /*.top {
      position: fixed;
      z-index: 1;
      bottom: 10px;
      right: 15px;
      width: 45px;
      height: 45px;
      .icon-top {
        display: inline-block;
        width: 100%;
        height: 100%;
        background: url('../assets/images/backtop.png') no-repeat;
        background-size: contain;
      }
    }*/

</style>