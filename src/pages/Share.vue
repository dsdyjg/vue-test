<template>
    <div class="content">
        <div v-for="(item, index) in articleList" :key="item.last_reply_at+index" class="item">
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
    </div>
</template>
<script>
import moment from 'moment';
  export default{
      name:'content',
	  data(){
	     return {
		   articleList:[] 
		 }
	  },
	  computed:{},
	  created(){
	     this.Tab();
	  },
	  methods:{
	     Tab(page){
		   this.$http.get(`https://cnodejs.org/api/v1/topics?page=1&tab=share`)
           .then(response=>{
		       this.articleList=response.data.data;
			   //console.log(this.articleList);
		   })		   
		 }
	  }
  }
</script>
<style lang="scss" scoped>
  .content{
     position:relative;
	 overflow:scroll;
	 height:auto;
	 .item {
      width: 100%;
      height: 1.4rem;
      padding-right: 5px;
      border-bottom: 1px solid rgba(0, 0, 0, .1);
	  font-size:0.6rem;
	  color:#999;
      .avatar {
        width: 52px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 45px;
          height: 45px;
          border-radius: 5px;
        }
      }

      .title {
        width: 100%;

        flex: 4;
        background-color: white;
        padding-top: 15px;
        padding-left: 5px;
        font-size: 0.4rem;
        overflow: hidden;
        p {
          width: 98%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
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