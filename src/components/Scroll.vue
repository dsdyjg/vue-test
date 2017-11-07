<template>
  <div class="wrapper" ref="wrapper">
      <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  props:{
     probeType:{
	   type:Number,
	   default:1
	 },
	 click:{
	   type:Boolean,
	   default:true
	 },
	 data:{
	   type: Array,
	   default:null
	 },
	 listenScroll: {
        type: Boolean,
        default: false
      },
      listenBeforeScroll: {
        type: Boolean,
        default: false
      },
      scrollbar: {
        type: null,
        default: false
      },
      pullDownRefresh: {
        type: null,
        default: false
      },
      pullUpLoad: {
        type: null,
        default: false
      },
      startY: {
        type: Number,
        default: 0
      },
      refreshDelay: {
        type: Number,
        default: 20
      },
      freeScroll: {
        type: Boolean,
        default: false
      }
    },
	mounted(){
	  setTimeout(()=>{
	     this.initScroll();
	  },20)
	},
	methods:{
	  initScroll(){
	     if(!this.$refs.wrapper){
		    return;
		 }
	     this.scroll=new BScroll(this.$refs.wrapper,{
		    probeType: this.probeType,
            click: this.click
		    }
		 )
		// 是否派发滚动事件 
		if (this.listenScroll) {
			let me = this;
			this.scroll.on('scroll', (pos) => {
		      me.$emit('scroll', pos) }) 
		    }
	    
		// 是否派发滚动到底部事件，用于上拉加载 
		
		if (this.pullUpLoad) {
		    let me = this;
			this.scroll.on('scrollEnd', () => {
			// 滚动到底部 
			if (this.scroll.y <= (this.scroll.maxScrollY + 50)) { 
			     me.$emit('scrollToEnd') 
				 } 
			}) 
		}
		 // 是否派发顶部下拉事件，用于下拉刷新		 
		if (this.pullDownRefresh) {
		    let me = this;
     		this.scroll.on('touchEnd', (pos) => { 
			  // 下拉动作 
			  if (pos.y > 50) {
			  me.$emit('pulldown') 
			  } 
			}) 
		}
	}, 
	  disable() {
        this.scroll && this.scroll.disable()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      },
      clickItem(e, item) {
        console.log(e)
        this.$emit('click', item)
      },
      destroy() {
        this.scroll.destroy()
      }
	},
	watch: {
      data() {
        setTimeout(() => {
          this.refresh();
        }, this.refreshDelay)
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .wrapper{
    height:500px;
	position:relative;
	z-index:1;
  }
</style>
