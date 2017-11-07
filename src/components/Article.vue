<template>
  <transition name="fade-left">
   <div class="article">
      <div class="article-title">
        <h1><span class="flag" v-show="infos.top || infos.good">{{infos.top ? '置顶' : '精华'}}</span>{{infos.title}}</h1>
        <div class="desc">
           <p> 发布于 {{changeTime(infos.create_at)}}  作者 <router-link :to="{name: 'user', params: {name: infos.author && infos.author.loginname}}">{{infos.author && infos.author.loginname}}</router-link>  {{infos.visit_count}} 次浏览  来自xxxxx</p>
        </div>
      </div>
	  <div v-html="infos.content" class="md"></div>
   </div>
   </transition>
</template>
<script>
import moment from 'moment';
export default{
  name:'article',
  data(){
  return {
     infos:{},
	 id:this.$route.params.id
  }
  },
  created(){
    this.fetData();
  },
  methods:{
     fetData(){
	   this.$http.get('https://cnodejs.org/api/v1/topic/' + this.id)
	   .then(response=>{
	    this.infos=response.data.data;
	   })
	 }
     
  }
}
</script>
<style lang="scss" scoped>
  .article{
    font-size:0.4rem;
	color:#999;
	position:relative;
	z-index:2;
	.article-title {
          width: 100%;
          padding-left: 5px;
          padding-top: 3px;
          padding-bottom: 5px;
          border-bottom: 1px solid rgba(0, 0, 0, .1);
          h1 {
            font-size: 0.6rem;
            .flag {
              background-color: #80bd01;
              padding: 2px 5px;
              font-size: 80%;
              color: white;
              border-radius: 5px;
              margin-right: 5px;
            }
          }
          .desc {
            padding-top: 3px;

            p {
              font-size: 80%;
              color: gray;
            }
          }
        }
		.md {
          width: 100%;
          overflow: hidden;
        }
  }
  .fade-left-enter-active,.fade-left-leave-active{
     transition:all 0.3s ease;
  }
  .fade-left-enter,.fade-left-leave-active{
      transform:translateX(100%);
	  opacity:0;
  }
</style>