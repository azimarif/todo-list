(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(t,e,a){t.exports=a(37)},28:function(t,e,a){},37:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),u=a(19),i=a.n(u),c=a(22),o=a(5),r=a(6),l=a(8),d=a(7),m=a(9),p=(a(28),a(11)),h=a(10),f=s.a.createContext({state:{todos:[{id:1,desc:"This is task 1",status:!1},{id:2,desc:"This is task 2",status:!1},{id:3,desc:"This is task 3",status:!1},{id:4,desc:"This is task 4",status:!1},{id:5,desc:"This is task 5",status:!1}]},toggleTodo:function(t){}}),E=function(){return s.a.createElement("header",{className:"navigation-bar"},s.a.createElement("nav",{className:"nav-bar"},s.a.createElement("ul",{className:"nav-list"},s.a.createElement("li",{className:"nav-list-item"},s.a.createElement(p.b,{to:"/"},"All Tasks")),s.a.createElement("li",{className:"nav-list-item"},s.a.createElement(p.b,{to:"/pending"},"Pending Tasks")),s.a.createElement("li",{className:"nav-list-item"},s.a.createElement(p.b,{to:"/completed"},"Completed Tasks")))))};var b=function(t){return s.a.createElement("div",{className:"task-count-detail"},"Total ",t.name," Tasks: ",t.count)},k=function(t){return s.a.createElement("header",{className:"navigation-bar"},s.a.createElement("input",{className:"user-todo",value:t.inputValue,onChange:t.updateInputValue}),s.a.createElement("button",{onClick:t.addTodo},"Add Todo"))},v=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;return s.a.createElement(f.Consumer,null,function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(E,null),s.a.createElement(k,{addTodo:e.addTodo,updateInputValue:e.updateInputValue}),s.a.createElement(b,{count:e.todos.length}),e.todos.map(function(a){var n="pending";return a.status&&(n="completed"),s.a.createElement("div",{className:"task "+n,onClick:e.toggleTodo.bind(t,a.id),key:a.id},a.desc)}))})}}]),e}(s.a.Component),g=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement(f.Consumer,null,function(t){return s.a.createElement(s.a.Fragment,null,s.a.createElement(E,null),s.a.createElement(b,{name:"Pending",count:t.todos.filter(function(t){return!t.status}).length}),t.todos.filter(function(t){return!t.status}).map(function(t){return s.a.createElement("div",{className:"task",key:t.id},t.desc)}))})}}]),e}(s.a.Component),T=function(t){function e(){return Object(o.a)(this,e),Object(l.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){return s.a.createElement(f.Consumer,null,function(t){return s.a.createElement(s.a.Fragment,null,s.a.createElement(E,null),s.a.createElement(b,{count:t.todos.filter(function(t){return t.status}).length,name:"Completed"}),t.todos.filter(function(t){return t.status}).map(function(t){return s.a.createElement("div",{className:"task",key:t.id},t.desc)}))})}}]),e}(s.a.Component),j=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(l.a)(this,Object(d.a)(e).call(this,t))).updateInputValue=function(t){return a.setState({inputValue:t.target.value})},a.state={todos:[{id:1,desc:"This is task 1",status:!1},{id:2,desc:"This is task 2",status:!1},{id:3,desc:"This is task 3",status:!1},{id:4,desc:"This is task 4",status:!1},{id:5,desc:"This is task 5",status:!1}],inputValue:""},a}return Object(m.a)(e,t),Object(r.a)(e,[{key:"toggleTodo",value:function(t){var e=this.state.todos,a=e.findIndex(function(e){return e.id===t}),n=Object(c.a)({},e[a]);n.status=!n.status,e[a]=n,this.setState({todos:e})}},{key:"addTodo",value:function(){var t=this.state.todos,e={id:t[t.length-1].id+1,desc:this.state.inputValue,status:!1};t.push(e),this.setState({todos:t})}},{key:"render",value:function(){return s.a.createElement(f.Provider,{value:{todos:this.state.todos,toggleTodo:this.toggleTodo.bind(this),addTodo:this.addTodo.bind(this),inputValue:this.state.inputValue,updateInputValue:this.updateInputValue.bind(this)}},s.a.createElement(p.a,{basename:"/"},s.a.createElement(h.c,null,s.a.createElement(h.a,{path:"/",component:v,exact:!0}),s.a.createElement(h.a,{path:"/pending",component:g,exact:!0}),s.a.createElement(h.a,{path:"/completed",component:T,exact:!0}))))}}]),e}(s.a.Component);i.a.render(s.a.createElement(j,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.833b5ac5.chunk.js.map