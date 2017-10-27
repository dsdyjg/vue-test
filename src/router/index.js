import Vue from 'vue'
import Router from 'vue-router'
import NHeader from '@/components/Header'
import Good from '@/pages/Good'
import Ask from '@/pages/Ask'
import Share from '@/pages/Share'
import Job from '@/pages/Job'
import NContent from '@/pages/Content'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NContent',
      component: NContent
    },
	{
		path:'/good',
		name:'good',
		component:Good
	},
	{
		path:'/ask',
		name:'ask',
		component:Ask
	},
	{
		path:'/share',
		name:'share',
		component:Share
	},
	{
		path:'/job',
		name:'job',
		component:Job
	},
	{
		path:'/article/:id',
		name:'article',
		component:Article
	}
  ]
})
