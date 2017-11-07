import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

const state={
	msgCount:false,
	showMenu:false,
	showLogin:false,
	ak:localStorage.ak || '',
	userInfo: localStorage.userInfo && JSON.parse(localStorage.userInfo) || {avatar_url: '', id: '', loginname: '', success: false},
	list:[],
	isInfo:true
}
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})

