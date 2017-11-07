<template>
<div class="slider">
    <div class="menu">
    <div class="slider_top">
	   <img :src="userInfo.avatar_url || 'http://omratag7g.bkt.clouddn.com/icon-unlogin.svg'" @click="showlogin"/>
       <p>{{userInfo.success ? userInfo.loginname :'点击头像进行登录'}}</p>
	</div>
   <ul>
      <li><router-link to="/Message">我的消息</router-link></li>
	  <li><router-link to="/">发布话题</router-link></li>
	  <li><a @click="changeUser">个人中心</a></li>
	  <li><router-link to="/about">关于</router-link></li>
   </ul>
   </div>
   <div class="mask" @click="hidemenu"></div>
</div>

</template>
<script>
import {mapActions,mapGetters} from 'vuex';
export default{
   name:'Nav',
   computed:{
     ...mapGetters([
	    'userInfo'
	 ])
   },
   methods:{
     ...mapActions([
	   'hidemenu',
	   'showlogin',
	   'showinfo'
	 ]),
	 changeUser(){
	    this.$router.push({
		  name:'user',
		  params:{name:this.userInfo.loginname}
		});
		this.showinfo();
		this.hidemenu();
	 }
   }
}
</script>
<style lang="scss" scoped>
.slider{
    height: 100%;
    position: absolute;
    width: 100%;
    top: 0px;
    left: 0px;
	z-index:5;
   .menu{
       width:5rem;
	   height:100%;
	   position:absolute;
	   left:0px;
	   top:0px;
	   z-index:2;
	   box-shadow:2px 3px 5px #ddd;
	   .slider_top{
	     width:100%;
		 background:#2196F3;
		 padding:0.6rem 0.4rem;
		 img{
		    display:block;
			width:1.4rem;
			height:1.4rem;
			border-radius:50%;
			margin-bottom:0.2rem;
			margin-left:auto;
			margin-right:auto;
		 }
		 p{
		   font-size:0.4rem;
		   color:#fff;
		   text-align:center;
		 }
	   }
       ul{overflow:hidden;background:#fff;height:100%;}
	   ul li{list-style:none;width:100%;border-bottom:1px solid #ddd;line-height:0.8rem;height:0.8rem;}
	   ul li a{font-size:0.3rem;display:block;}
   }
   
}
.active{color:#FFF;border-bottom:1px solid #ff8800;}
.mask{
	position:absolute;
	top:0px;
	left:0px;
	right:0px;
	bottom:0px;
	width:100%;
	height:100%;
	background:rgba(255,255,255,0.15);
	z-index:1
}

</style>