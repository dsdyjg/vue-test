<template>
  <div id="app">
    <NHeader></NHeader>
	<NNav></NNav>
	<NSlider v-show="showMenu"></NSlider>
	<router-view></router-view>
	<NLogin v-if="showLogin"></NLogin>
  </div>
</template>

<script>
import NHeader from './components/Header'
import NNav from './components/Nav'
import NSlider from './components/Slider'
import NLogin from './pages/Login'
import NArticle from './components/Article'
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  components:{NHeader,NNav,NSlider,NLogin},
  computed:{
   ...mapGetters([
       'showMenu',
	   'showLogin'
   ])
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
  overflow:hidden;
  height:100%;
}
</style>
