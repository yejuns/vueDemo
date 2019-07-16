<template>
  <div v-theme:column="'wide'" id="show-blogs">
  <h1>显示内容</h1>
  <input type="text" v-model="search" placeholder="搜索">
  <div v-for="blog in filterBlogs" :key="blog" class="single-blog">
      <router-link v-bind:to="'/blog/'+blog.id">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>
          {{blog.body}}
      </article>
  </div>
  </div>
</template>

<script>

export default {
  name: "show-blogs",
  data(){
      return{
          blogs:[],
          search:""
      }
  },
  created(){
      this.$http.get('./../static/test1.json').then(function(data){
        //   console.log(data);
          this.blogs=data.body.slice(0,10);
      })
  },
  computed:{
      filterBlogs:function(){
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search);
          })
      }
  },
  filters:{
      "to-uppercase":function(value){
          return value.toUpperCase();
      }
    //   toUpperCase(value){
    //       return value.toUpperCase();
    //   }
  },

//   directives:{
//       'rainbow':{
//           bind(el,binding,vnode){
//               el.style.color="red"
//           }
//       }
//   }


}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}

.single-blog{
    padding: 20px;
    margin: 10px 0;
    box-sizing: border-box;
    background: #cc9;
    border: 1px dotted #aaa;
}

#show-blogs a{
    color: #323;
    text-decoration: none;
}

input[type='text']{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}
</style>
