(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),i=a.n(r),c=(a(12),a(1)),s=a(2),l=a(4),d=a(3),m=(a(13),a(14),function(e){return o.a.createElement("div",{className:"todo-item",itemID:e.todoObject.id},o.a.createElement("span",{className:"name",itemID:e.todoObject.id},e.todoObject.name),o.a.createElement("span",{className:"editIcon",itemID:e.todoObject.id},o.a.createElement("i",{className:"fa fa-pencil"})),o.a.createElement("span",{className:"deleteIcon",itemID:e.todoObject.id,onClick:e.deleteToDo},o.a.createElement("i",{className:"fa fa-trash"})))}),u=(a(15),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={todoList:[{id:"1",name:"Go to UOH"},{id:"2",name:"Roam around with my friends"}],currentItemName:""},e.handleChange=function(t){e.setState({currentItemName:t.target.value})},e.validateName=function(e){return!(""===e||null===e||void 0===e)},e.displayTodos=function(){return e.state.todoList.map((function(t){return o.a.createElement(m,{todoObject:t,key:t.id,deleteToDo:e.deleteToDo})}))},e.deleteToDo=function(t){var a=t.target.getAttribute("itemid"),n=e.state.todoList.filter((function(e){return e.id!==a}));e.setState({todoList:n})},e.addNewTodo=function(t){t.preventDefault();var a={};a.name=e.state.currentItemName,a.id=f();var n=e.state.todoList;n.push(a),e.setState({todoList:n}),e.setState({currentItemName:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"todo-form-and-container"},o.a.createElement("form",{onSubmit:this.addNewTodo},o.a.createElement("input",{onChange:this.handleChange,value:this.state.currentItemName,className:"new-todo-name"}),o.a.createElement("button",null,"Add Todo")),o.a.createElement("div",{className:"todo-container"},this.displayTodos()))}}]),a}(n.Component));function f(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var a=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?a:3&a|8).toString(16)}))}a(16);var x=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement("h3",null,"To Do List"),o.a.createElement(u,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.36657c99.chunk.js.map