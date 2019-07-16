<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form action v-if="submit">
      <label>博客標題</label>
      <input type="text" v-model="blog.title" required />
      <label>博客內容</label>
      <textarea v-model="blog.content"></textarea>

      <div id="checkboxs">
        <label>vue.js</label>
        <input type="checkbox" value="vue.js" v-model="blog.categories"/>
        <label>node.js</label>
        <input type="checkbox" value="node.js" v-model="blog.categories"/>
        <label>rect.js</label>
        <input type="checkbox" value="rect.js" v-model="blog.categories"/>
        <label>lay.js</label>
        <input type="checkbox" value="lay.js" v-model="blog.categories"/>
      </div>
      <label >作者</label>
      <select v-model="blog.author">
          <option v-for="author in authors" :key="author">
              {{author}}
          </option>
      </select>
      <button v-on:click.prevent="post">添加博客</button>
    </form>
    <div v-if="!submit">
        <p>你的博客添加成功</p>
    </div>
    <hr />
    <div id="preview">
      <h3>博客總覽</h3>
      <p>博客標題：{{blog.title}}</p>
      <p>博客內容</p>
      <p>{{blog.content}}</p>
      <p>博客分類</p>
      <ul>
          <li v-for="category in blog.categories">
              {{category}}
          </li>
      </ul>
      <p>作者:{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-blog",
  data() {
    return {
      msg: "you can addblog",
      blog: {
        title: "",
        content: "",
        categories:[],
        author:""
      },
      authors:["bob","wsw","weq"],
      submit:true
    }
  },
  methods:{
      post:function(){
          this.$http.post("http://jsonplaceholder.typicode.com/posts",
          {
              title:this.blog.title,
              body:this.blog.body,
              userId:1
          })
            .then(function(data){
                console.log(data);
                this.submit=false;
            });

            
      }
  }
};
</script>

<!-- scope表示当前样式只应用与当前界面 -->
<style scoped>
#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 800px;
  padding: 20px; 
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type='text'], textarea,select{
  display: block;
  width: 100%;
  padding: 5px;
}

#checkboxs label{
  display: inline-block;
  margin-top: 0px;
}

#ccheckboxs input{
  display: inline-block;
  margin-right: 20px;
}

button{
  display: block;
  margin: 10px 0;
  padding: 15px;
  background: crimson;
  tab-size: 18px;
  color: #fff;
  border: 0px;
  border-radius: 5px;
}

#preview{
  padding: 10px 20px;
  margin: 30px 0;
  border: 1px dotted #ccc;
}

h3{
  margin-top: 10px;
}

textarea{
  height: 200px;
}
</style>
