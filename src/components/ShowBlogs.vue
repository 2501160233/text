<template>
  <div class="showblogs" v-theme:column="'narrow'">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredBlogs" class="single-blog">

      <router-link v-bind:to="'/blog/'+blog.id"><!--跳转到单个博客-->
        <h2 v-rainbow>{{blog.title| to-uppercase }}</h2>
        <article>
          {{blog.body | sneck }}
        </article>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShowBlogs',
    data() {
      return {
        blogs: [],
        search: ""
      }
    },
    created() {//一般可以在created函数中调用ajax获取页面初始化所需的数据。
      this.$http.get("https://jsonplaceholder.typicode.com/todos/1/posts")
        .then(function (data) {
          this.blogs = data.body.slice(0, 10);
          // console.log(this.blogs);
        })
    },
    computed: {

      //搜索功能实现
      filteredBlogs: function () {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search);

          //match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。返回指定的值
        })

      }
    },
    //局部的API
    filters: {
      "to-uppercase": function (value) {
        return value.toUpperCase();
      },
      /*  toUpperCase(value){
           return value.toUpperCase();
        }*/

    },
    directives: {
      "rainbow": {
        bind(el, binding, vnode) {
          el.style.color = "#ee" + Math.random().toString(16).slice(6, 10);
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .showblogs {
    max-width:900px;
    margin: 0 auto;
  }

  article {
    background-color: #cccccc;
    padding: 20px;
    margin: 20px 0;
    border-radius: 5px;
  }
</style>
