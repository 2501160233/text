<template>
  <div class="AddBolg">
    <h2>添加博客</h2>
    <form  v-if="!submited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required>
      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>
      <div class="checkboxes">
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label>Angular4</label>
        <input type="checkbox" value="Angular4" v-model="blog.categories">
      </div>
      <label>作者</label>
      <select v-model="blog.author">
        <option v-for="author in authors">
          {{author}}
        </option>
      </select>
      <button v-on:click.prevent="post">添加博客
      </button>
    </form>

    <div  id="preview">
      <h3>博客总览</h3>
      <p>博客标题:{{blog.title}}</p>
      <p>博客内容:</p>
      <p>{{blog.content}}</p>
      <p>博客分类:</p>
      <p>作者:</p>
      <ul>
        <li v-for="categorie in blog.categories">
          {{categorie}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddBolg',
    data () {
      return {
       blog:{
         title:"",
         content:"",
          categories:[],
         author:"",

       },
        authors:["huan","nuo","ling"],
        submited:false
      }
    },
    methods:{
      post:function () {
        //要先下载 引入 VueResource
        this.$http.post("http://jsonplaceholder.typicode.com/posts", {
          title:this.blog.title,
          body:this.blog.content,
          userId:1
        })
          .then(function (data) {
            console.log(data);
            this.submited=true;
          })
      }



    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .AddBolg *{
   box-sizing: border-box;
 }
  .AddBolg{
    margin:20px auto;
    max-width:750px;
    padding :20px;
  }
  label{
    display: block;
    margin :20px 0 10px;
  }
  input[type="text"],textarea,select{
    display: block;
    width: 100%;
    padding:8px;
  }
  .checkboxes label{
    display: inline-block;
    margin-top:5px;
  }
  textarea{
    height: 200px;
  }
  .checkboxes input {
    display: inline-block;
    margin-right: 10px;
  }
  button{
    margin-top: 10px;
    display: block;
    background: crimson;
    color: #FFFFFF;
    border: 0;
    padding: 14px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 4px;
  }
  #preview{
    padding: 10px 20px;
    border: 1px dotted #cccccc;
    margin :30px 0;
  }
  h3 {
    margin-top: 10px;
  }

</style>
