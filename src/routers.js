import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
//  定义路由
// 每个路由应该映射一个组件。
export default [
  {path:"/",component:ShowBlogs},//当调用 / 时 访问ShowBlogs
  {path:"/add",component:AddBlog},//当调用 / add时 访问AddBlog
  {path:"/blog/:id",component:SingleBlog}
]
