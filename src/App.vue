<template>
  <div id="app" ref="app">
    <NHeader></NHeader>
	<NNav></NNav>
	<NSlider v-show="showMenu"></NSlider>
	<keep-alive><router-view></router-view></keep-alive>
	
	<NLogin v-if="showLogin"></NLogin>
  </div>
</template>

<script>
import NHeader from './components/Header'
import NNav from './components/Nav'
import NSlider from './components/Slider'
import NLogin from './pages/Login'
import NContent from './pages/Content'
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  components:{NHeader,NNav,NSlider,NLogin,NContent},
  computed:{
   ...mapGetters([
       'showMenu',
	   'showLogin'
   ])
  },
  mounted(){
  }
}
</script>

<style lang="scss" >
@import '../static/base.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  height:100%;
}
.fade-enter-active,.fade-leave-active{
   transition:all 3s ease;
}
.fade-enter,fade-leave-active{
   opactiy:0;
}
</style>
