<template>
 <transition name="fade-left">
  <div class="user">
    <div class="user_top">
	     <i class="back" @click="hideinfo"></i>个人中心
	  </div>
	    <div class="info">
	      <div class="desc">
		     <img :src="user.avatar_url" class="user_img"/>
			 <p class="title">{{user.loginname}}</p>
			 <p class="title">积分:<span>{{user.score}}</span></p>
			 <p class="title">github:<a :href="'https://github.com/'+user.githubUsername" target="_blank">https://github.com</a></p>
			 <p class="title">注册于:<span>{{changeTime(user.create_at)}}</span></p>
		  </div>
		  <div class="info_list">
		     <h3>收藏的话题</h3>
			 <ul>
			    <li>dgfhgjhkkjl</li>
			 </ul>
		  </div>
		  <div class="info_list">
		     <h3>最近创建的话题</h3>
			 <ul>
			    <li>dgfhgjhkkjl</li>
			 </ul>
		  </div>
	    </div>
  </div>
  </transition>
</template>
<script>
   import {mapActions,mapGetters} from 'vuex'
   export default {
      name:'user',
	  data(){
	    return{
		  user:{}
		}
	  },
	  computed:{
	    ...mapGetters([
		  'ak',
		  'userInfo',
		  'isInfo'
		])
	  },
	  created(){
	     if(!this.ak){
		    this.showlogin();
			return ;
		 }
		 this.$http.get(`http://cnodejs.org/api/v1/user/${this.userInfo.loginname}`)
		 .then(res=>{
		        this.user=res.data.data;
		    })
	  },
	  methods:{
	    ...mapActions([
		   'showlogin'
		]),
		hideinfo(){
		  this.$router.go(-1);
		}
	     
	  }
   }
</script>
<style lang="scss" scoped>
  .user{
    position:absolute;
	font-size:0.3rem;
	color:#333;
	z-index:4;
	top:0px;
	left:0px;
	width:100%;
	height:100%;
	background:#fff;
	.user_top{ 
	  width:100%;
	  height:1.2rem;
	  line-height:1.2rem;
	  text-align:center;
	  font-size:0.4rem;
	  position:relative;
	  background:#2196F3;
	  .back{
	    display:block;
		width:0.5rem;
		height:0.5rem;
		position:absolute;
		top:0.35rem;
		left:0.3rem;
		background:url(../assets/images/back.png) no-repeat left top;
		background-size:100%;
	  }
	}
    .info{
	   width:100%;
	   .desc{
	      width:100%;
		  margin:0.4rem auto;
		  .user_img{
		    display:block;
			margin:0.1rem auto;
			width:1.8rem;
			height:1.8rem;
		  }
		  .title{
		    margin:0.1rem auto;
            height:0.6rem;
			line-height:0.6rem;
			font-size:0.3rem;
		  }
	   }
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