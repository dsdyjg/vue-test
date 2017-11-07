import * as type from './mutations-type.js'
export default{
	showmenu({commit},flag){
		
		commit(type.SHOWMENU,true);
		//console.log(state.showMenu);
	},
	hidemenu({commit},flag){
		commit(type.SHOWMENU,false);
	},
	showlogin({commit},flag){
		commit(type.SHOWLOGIN,true);
		//console.log(state.showLogin);
	},
	hidelogin({commit},flag){
		commit(type.SHOWLOGIN,false);
	},
	hideinfo({commit},flag){
		commit(type.HIDEINFO,false);
	},
	showinfo({commit},flag){
		commit(type.HIDEINFO,true);
	}
	
	//updateak({commit},ak){
	//	commit(type.UPDATEAK,ak);
	//},
	//updateuserinfo({commit},userInfo){
	//	commit(type.UPDATEUSERINFO,userInfo);
	//}
	
}