import {SHOWMENU,SHOWLOGIN,UPDATEAK,UPDATEUSERINFO,HIDEINFO} from './mutations-type.js'
export default{
	[SHOWMENU](state,flag){
	     state.showMenu=flag;
		 //console.log(state); 
	   },
	//[HIDEMENU](state,flag){
	 //    state.showMenu=flag;
		 //console.log(state); 
	  // }
	  [SHOWLOGIN](state,flag){
		  state.showLogin=flag;
	  },
	  [UPDATEAK](state,ak){
		  state.ak=ak;
	  },
	  [UPDATEUSERINFO](state,userInfo){
		  state.userInfo=userInfo;
	  },
	  [HIDEINFO](state,flag){
		  state.isInfo=flag;
	  }
	  
	  
}