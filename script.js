var request = require('superagent');

var vue = new Vue({
  el:'#app',
  data:{
    input: "",
    todos:[],
    a :"",
  },
  methods:{
    addTodo: function(){

    }
  },
  computed:{
    'todos':function(){
      self = this;
      request.get('https://todolist-44.herokuapp.com/test').end(function(err,res){
        console.log(res);
        console.log(res.body[1]);
        for(var i = 0; i < res.body.length;i++)
        {
          self.todos.push(res.body[i]);
        }
      })
      return ;
    }
  }
});
