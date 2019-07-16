<template>
     <div id="single-blog">
         <h1>{{blog.title}}</h1>
         <h2>{{blog.body}}</h2>
        <button @click="deleteBlog()">删除</button>
        <router-link :to="'/edit/'+id">编辑</router-link>
     </div>  
</template>

<script>
export default {
    name:"single-blog",
    data(){
        return {
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
       this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id).then(function(data){
           //console.log(data);
           this.blog=data.body;
       })
    },
    methods:{
        deleteBlog(){
            // this.$$http.delete('http://jsonplaceholder.typicode.com/posts/'+this.id).then(response=>{

            // })
        }
    }
}
</script>

<style>
#single-blog{
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
}
</style>


