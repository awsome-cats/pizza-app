import Home from './components/Home'
import Menu from './components/Menu'
// const Menu = () => import('./components/Menu')
import Admin from './components/Admin'
import About from './components/About'
// const About = () => import(/* webpackChunkName: "menuGroup" */ './components/About')
import Contact from './components/Contact'
// const Contact = () => import(/* webpackChunkName: "menuGroup" */ './components/Contact')
import History from './components/History'
import Delivery from './components/Delivery'
import OrderingGuide from './components/OrderingGuide'

export const routes = [
  
  {
    path: '/',
    name: 'homeLink',
    // 名前付きrouter-view
    components: {
      default: Home,
      'ordering-guide': OrderingGuide,
      'delivery': Delivery,
      'history': History
    }
  },
  {
    path: '/menu',
    name: 'menuLink',
    component: Menu
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    beforeEnter(to, from, next) {
      alert('ログインが必要です')
      next()
    }
  },
  {
    path: '/about',
    name: 'aboutLink',
    component: About,
    children: [
      { 
        path: '/history',
        name: 'historyLink',
        component: History
      },
      { 
        path: '/delivery',
        name: 'deliveryLink',
        component: Delivery
      },
      { 
        path: '/ordering-Guide',
        name: 'orderingGuideLink',
        component: OrderingGuide
      }
    ]
  },
  {
    path: '/contact',
    name: 'contactLink',
    component: Contact
  }
]