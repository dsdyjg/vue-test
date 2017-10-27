<template>
   <div class="login">
      <div class="login_top">
	     <i class="back" @click="hidelogin"></i>登录
	  </div>
	  <div class="form">
	     <div class="login_group">
		   <input type="text" placeholder="请输入token" v-model="inputVal"/>
		 </div>
		 <p>{{errMsg}}</p>
		 <button class="sub" @click="submit(inputVal)">验证</button>
	  </div>
	  <div class="login_btn">
	    <p>为了更好的体验请登录请登录请登录</p>
		<p>为了更好的体验请登录请登录请登录</p>
		<p>为了更好的体验请登录请登录</p>
	  </div>
   </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex';
export default{
   name:'Login',
   data(){
      return {
	     errMsg:'',
		 inputVal:''
	  }
   },
   computed:{
      ...mapGetters([
	    'ak'
	  ])
   },
   mounted() {
    this.inputVal = this.ak;
  },
   methods:{
     ...mapActions([
	   'hidelogin'
	   //'updateak',
	   //'updateuserinfo'
	 ]),
	 submit(ak){
	     if(!ak){
		    this.errMsg='ak不能为空!';
			return ;
		 }
		 this.$http.post('https://cnodejs.org/api/v1/accesstoken', {accesstoken: ak})
         .then(result => {
          if (result.status === 200) {   
            return result.data;
          }
        }).catch(err=>{
		    this.errMsg='验证失败！';
		}).then(userInfo=>{
		      //直接commit 不需要经过actions
		      this.$store.commit('UPDATEUSERINFO',userInfo);
			  this.$store.commit('UPDATEAK',ak);
		     //this.updateak();
			 //this.updateuserinfo();
		     localStorage.userInfo=JSON.stringify(userInfo);
             localStorage.ak=ak;
			 this.hidelogin();
		})
	 }
   }
}
</script>
<style lang="scss" scoped>
  .login{
    width:100%;
	height:100%;
	background:#fff;
	position:absolute;
	top:0px;
	left:0px;
	z-index:3;
	.login_top{
	  width:100%;
	  height:1.2rem;
	  line-height:1.2rem;
	  text-align:center;
	  font-size:0.6rem;
	  position:relative;
	  background:#2196F3;
	  .back{
	    display:block;
		width:0.7rem;
		height:0.7rem;
		position:absolute;
		top:0.25rem;
		left:0.3rem;
		background:url(../assets/images/back.png) no-repeat left top;
		background-size:100%;
	  }
	}
	.form{
	    margin-top:2rem;
		width:90%;
		margin-left:auto;
		margin-right:auto;
		margin-bottom:1rem;
		p{
		  font-size: 0.5rem;
          margin-top: 0.3rem;
		  color:red;
		}
		.login_group{
		   input{
		     width:100%;
			 height:1rem;
			 border:none;
			 border-bottom:1px solid #999;
			 font-size:0.5rem;
		   }
		}
		.sub{
		  display:block;
		  width:1.6rem;
		  height:1rem;
		  margin:1rem auto;
		  background:#2196F3;
		  color:#fff;
		  font-size:0.5rem;
		  border-radius:5px;
		  
		}
	}
	.login_btn{
	  p{
	     margin:0.3rem;
		 color:#999;
		 font-size:0.4rem;
	  }
	}
  }
</style>