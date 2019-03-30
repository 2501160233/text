<template>
<div id="singleblog">
   <h1>{{blog.title }}</h1>
  <article>{{blog.body}}</article>
</div>
</template>

<script>
  export default{
    name:"single-blog",
    data(){
      return {
        id:this.$route.params.id,//拿到输入的id
        blog:{}
      }
    },
    created(){
      this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id)
        .then(function (data) {
          // console.log(data);
          this.blog=data.body;
        })
    }
  }
</script>
<style>
  #singleblog{
    max-width:960px;
    margin: 0 auto;
    padding: 20px;
    background-color: #eeeeee;
    border: 1px solid #cccccc;
  }
</style>
