import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/TheHome'
import ViewPosts from '@/components/ViewPosts'
import EditPost from '@/components/EditPost'
import CreatePost from '@/components/CreatePost'
import DetailedPost from '@/components/ViewDetailedPost'
import RegistrationPage from '@/components/TheRegistrationPage'
import LoginPage from '@/components/TheLogin'
import FAQPage from '@/components/TheFAQPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQPage
    },
    {
      path: '/viewPosts',
      name: 'ViewPosts',
      component: ViewPosts
    },
    {
      path: '/editPost/',
      name: 'EditPost',
      component: EditPost
    },
    {
      path: '/createPost',
      name: 'CreatePosts',
      component: CreatePost
    },
    {
      path: '/viewDetailedPost',
      name: 'ViewDetailedPost',
      component: DetailedPost
    },
    {
      path: '/registration',
      name: 'Registration',
      component: RegistrationPage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    }

  ]
})
