(this.webpackJsonpjasonplaceholder=this.webpackJsonpjasonplaceholder||[]).push([[0],{39:function(e,a,t){},44:function(e,a,t){e.exports=t(74)},49:function(e,a,t){},50:function(e,a,t){},73:function(e,a,t){},74:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(22),r=t.n(l),o=(t(49),t(8)),s=t(9),i=t(12),m=t(10),u=t(13),d=(t(50),t(7)),p=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={menuToggle:!1},t.navMenuToggle=function(){t.setState({menuToggle:!t.state.menuToggle})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.brand,t=e.addContact,n=e.contacts,l=e.about;return console.log("here",this.props),c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"navbar-des"},c.a.createElement("div",{className:"navbar-des-one"},c.a.createElement("h2",{className:"brand"},c.a.createElement("span",{style:{color:"gold"}},a," "))),c.a.createElement("div",{className:"navbar-des-two"},c.a.createElement("ul",{className:"navbar-des-ul"},c.a.createElement("li",{className:"navbar-des-li"},c.a.createElement("div",{className:"navbar-des-a"}," ",c.a.createElement(d.b,{to:"/",style:{textDecoration:"none",color:"white"}},n))),c.a.createElement("li",{className:"navbar-des-li"},c.a.createElement("div",{className:"navbar-des-a"}," ",c.a.createElement(d.b,{to:"/addcontact",style:{textDecoration:"none",color:"white"}},t))),c.a.createElement("li",{className:"navbar-des-li"},c.a.createElement("div",{className:"navbar-des-a"}," ",c.a.createElement(d.b,{to:"/about",style:{textDecoration:"none",color:"white"}},l)))))),c.a.createElement("div",{className:"navbar-mob"},c.a.createElement("div",{className:"navbar-mob-one"},c.a.createElement("h2",null,c.a.createElement("span",{style:{color:"gold"}},a," "),c.a.createElement("i",{onClick:this.navMenuToggle,className:"fas fa-bars hamburger"}))),c.a.createElement("div",{className:"navbar-mob-two"},this.state.menuToggle?c.a.createElement("ul",{className:"navbar-mob-ul"},c.a.createElement("li",{className:"navbar-mob-li"},c.a.createElement("div",{className:"navbar-mob-a"},c.a.createElement(d.b,{to:"/",style:{textDecoration:"none",color:"white"}},n))),c.a.createElement("li",{className:"navbar-mob-li"},c.a.createElement("div",{className:"navbar-mob-a"},c.a.createElement(d.b,{to:"/addcontact",style:{textDecoration:"none",color:"white"}},t))),c.a.createElement("li",{className:"navbar-mob-li"},c.a.createElement("div",{className:"navbar-mob-a"},c.a.createElement(d.b,{to:"/about",style:{textDecoration:"none",color:"white"}},l)))):null)))}}]),a}(n.Component),h=t(11),E=t(19),b=t.n(E),v=(t(73),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={toggle:!1},t.onClickToggle=function(){t.setState({toggle:!t.state.toggle})},t.onClickDelete=function(e){t.props.deleteContact(e)},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.contact,a=e.id,t=e.name,n=e.email,l=e.phone,r=e.website,o=e.company,s=e.address;return c.a.createElement("div",null,c.a.createElement("table",null,c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null," ",t," ",c.a.createElement("i",{onClick:this.onClickToggle,className:"fas fa-caret-down contact-down"})),c.a.createElement("td",null,c.a.createElement("i",{className:"fas fa-trash-alt contact-delete",onClick:this.onClickDelete.bind(this,a)}),c.a.createElement(d.b,{to:"/editcontact/".concat(a)},c.a.createElement("i",{className:"fas fa-user-edit contact-edit"})))))),this.state.toggle?c.a.createElement("ul",{className:"container-inner"},c.a.createElement("li",{className:"container-inner-li"},"Email: ",c.a.createElement("span",{className:"container-inner-content"},n)),c.a.createElement("li",{className:"container-inner-li"},"Phone: ",c.a.createElement("span",{className:"container-inner-content"},l)),c.a.createElement("li",{className:"container-inner-li"},"Website:"," ",c.a.createElement("span",{className:"container-inner-content"},r)),c.a.createElement("li",{className:"container-inner-li"},"Company name:"," ",c.a.createElement("span",{className:"container-inner-content"},o.name)),c.a.createElement("li",{className:"container-inner-li"},"Zipcode:"," ",c.a.createElement("span",{className:"container-inner-content"},s.zipcode))):null)}}]),a}(n.Component)),f=Object(h.b)(null,{deleteContact:function(e){return function(a){b.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e)).then((function(t){return a({type:"DELETE_CONTACT",payload:e})}))}}})(v),y=t(28),g=t.n(y),N=t(2),C=t.n(N),O=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={search:""},t.onChange=function(e){t.setState({search:e.target.value})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.getContacts()}},{key:"render",value:function(){var e=this,a=this.props.items.filter((function(a){return-1!==a.name.toLowerCase().indexOf(e.state.search)}));return c.a.createElement("div",{className:"container"},c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Names"),c.a.createElement("th",null,c.a.createElement("div",{className:"search-field"},c.a.createElement("div",{className:"search-field-item"},c.a.createElement("i",{className:"search-field-icon fas fa-search"}))," ",c.a.createElement("div",{className:"search-field-item"},c.a.createElement("input",{className:"input-contacts",type:"text",placeholder:"search",onChange:this.onChange}))))))),a.map((function(e){return c.a.createElement(f,{contact:e,key:e.id})})),c.a.createElement("div",{className:"contact-details"},c.a.createElement("div",null," Built by: Aliakwe"),c.a.createElement("div",null,c.a.createElement("p",null,"Phone: ",c.a.createElement(g.a,{className:"edit-link",tel:"08036329145"}),c.a.createElement("br",null),"Email:"," ",c.a.createElement(g.a,{className:"edit-link",email:"aliakwe10@gmail.com",headers:{cc:"friend@coston.cool"}})))))}}]),a}(n.Component);f.propTypes={items:C.a.array,getContacts:C.a.func};var w=Object(h.b)((function(e){return{items:e.contact.items}}),{getContacts:function(){return function(e){b.a.get("https://jsonplaceholder.typicode.com/users").then((function(a){return e({type:"GET_CONTACTS",payload:a.data})}))}}})(O),j=t(17),T=t(16),A=t(42),k=t(43),D=t(20),S={items:[],item:{}},x=Object(T.c)({contact:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0,t=e.items;switch(a.type){case"GET_CONTACT":return Object(D.a)({},e,{item:a.payload});case"GET_CONTACTS":return Object(D.a)({},e,{items:a.payload});case"DELETE_CONTACT":return Object(D.a)({},e,{items:t.filter((function(e){return e.id!==a.payload}))});case"ADD_CONTACT":return Object(D.a)({},e,{items:[a.payload].concat(Object(k.a)(e.items))});case"UPDATE_CONTACT":return Object(D.a)({},e,{items:e.items.map((function(e){return e.id===a.payload.id?e=a.payload:e}))});default:return e}}}),_=[A.a],L=Object(T.e)(x,{},Object(T.d)(T.a.apply(void 0,_),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),B=t(18),P=(t(39),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(c)))).state={name:"",email:"",phone:"",website:"",company:"",address:""},t.handleSubmit=function(e){e.preventDefault();var a=t.state,n=a.name,c=a.email,l={name:n,phone:a.phone,email:c,website:a.website,company:a.company,address:a.address};t.props.addContact(l),t.setState({name:"",email:"",phone:"",website:"",company:"",address:""}),t.props.history.push("/")},t.handleChange=function(e){t.setState(Object(B.a)({},e.target.name,e.target.value))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.phone,l=e.website,r=e.company,o=e.address;return c.a.createElement("div",{className:"container-form"},c.a.createElement("div",{className:"box"},c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("h1",{className:"add-contact"},"Add Contacts"),c.a.createElement("label",{For:""}),c.a.createElement("input",{type:"text",placeholder:"Enter name",name:"name",value:a,onChange:this.handleChange,className:"input-inner"}),c.a.createElement("input",{type:"email",placeholder:"Enter email",name:"email",value:t,onChange:this.handleChange,className:"input-inner"}),c.a.createElement("input",{type:"phone",placeholder:"Enter phone number",name:"phone",value:n,onChange:this.handleChange,className:"input-inner"}),c.a.createElement("input",{type:"text",placeholder:"Enter your website",name:"website",value:l,onChange:this.handleChange,className:"input-inner"}),c.a.createElement("input",{type:"text",placeholder:"Enter company name",name:"company",value:r.name,onChange:this.handleChange,className:"input-inner"}),c.a.createElement("input",{type:"address",placeholder:"Enter your address",name:"address",value:o.zipcode,onChange:this.handleChange,className:"input-inner"}),c.a.createElement("button",{className:"btn"},"Submit"))))}}]),a}(n.Component)),U=Object(h.b)(null,{addContact:function(e){return function(a){b.a.post("https://jsonplaceholder.typicode.com/users",e).then((function(e){return a({type:"ADD_CONTACT",payload:e.data})}))}}})(P),W=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).handleChange=function(a){e.setState(Object(B.a)({},a.target.name,a.target.value))},e.handleSubmit=function(a){a.preventDefault();var t=e.state,n=t.name,c=t.email,l=t.phone,r=t.website,o=t.company,s=t.address,i={id:e.props.match.params.id,name:n,phone:l,email:c,website:r,company:o,address:s};e.props.updateContact(i),e.setState({name:"",email:"",phone:"",website:"",company:"",address:""}),e.props.history.push("/")},e.state={name:"",email:"",phone:"",website:"",company:"",address:""},console.log("state",e.state),e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var a=e.item,t=a.name,n=a.email,c=a.phone,l=a.website,r=a.company,o=a.address;this.setState({name:t,email:n,phone:c,website:l,company:r,address:o})}},{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getContact(e)}},{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.phone,l=e.website,r=e.company,o=e.address;return c.a.createElement("div",{className:"container-form"},c.a.createElement("div",{className:"box"},c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("h1",{className:"add-contact"},"Edit Contact"),c.a.createElement("label",{For:""}),c.a.createElement("input",{type:"text",placeholder:"entername",name:"name",value:a,onChange:this.handleChange,className:"input-inner"}),c.a.createElement("input",{type:"email",placeholder:"email",name:"email",value:t,onChange:this.handleChange,className:"input-inner"}),c.a.createElement("input",{type:"phone",placeholder:"Enter phone number",name:"phone",value:n,onChange:this.handleChange,className:"input-inner"}),c.a.createElement("input",{type:"text",placeholder:"Enter your website",name:"website",value:l,onChange:this.handleChange,className:"input-inner"}),c.a.createElement("input",{type:"text",placeholder:"Enter company name",name:"company",value:r.name,onChange:this.handleChange,className:"input-inner"}),c.a.createElement("input",{type:"text",placeholder:"address",name:"address",value:o.zipcode,onChange:this.handleChange,className:"input-inner"}),c.a.createElement("button",{className:"btn"},"Submit"))))}}]),a}(n.Component),G=Object(h.b)((function(e){return{item:e.contact.item}}),{getContact:function(e){return function(a){b.a.get("https://jsonplaceholder.typicode.com/users/".concat(e)).then((function(e){return a({type:"GET_CONTACT",payload:e.data})}))}},updateContact:function(e){return function(a){b.a.put("https://jsonplaceholder.typicode.com/users/".concat(e.id),e).then((function(e){return a({type:"UPDATE_CONTACT",payload:e.data})}))}}})(W);var I=function(){return c.a.createElement("div",{style:{margin:"2rem 2rem"}},c.a.createElement("h1",{style:{marginTop:"1rem",marginBottom:"1rem"}},"What is the app about!!!!"),c.a.createElement("p",{style:{marginLeft:"0.5rem",marginBottom:"0.5rem"}},"This app consumes data from jasonplaceholde a fake REST API. Add, Delete and Edit functionality were implemented."),c.a.createElement("p",{style:{marginLeft:"0.5rem",marginBottom:"0.5rem"}},"routing was also implemented using the react-router-dom"),c.a.createElement("p",{style:{marginLeft:"0.5rem",marginBottom:"0.5rem"}},"The navbar was build from scratch"))};var M=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"This page doesnot exist"),c.a.createElement("p",null,"Error!!!!!!"))};var R=function(){return c.a.createElement(h.a,{store:L},c.a.createElement(d.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(p,{brand:"Jason",addContact:"Add Contact",contacts:"Contacts",about:"About"}),c.a.createElement(j.c,null,c.a.createElement(j.a,{exact:!0,path:"/",component:w}),c.a.createElement(j.a,{exact:!0,path:"/addcontact",component:U}),c.a.createElement(j.a,{exact:!0,path:"/editcontact/:id",component:G}),c.a.createElement(j.a,{exact:!0,path:"/about",component:I}),c.a.createElement(j.a,{component:M})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.f3985506.chunk.js.map