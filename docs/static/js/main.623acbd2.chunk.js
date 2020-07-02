(this["webpackJsonpmy-locations"]=this["webpackJsonpmy-locations"]||[]).push([[0],{21:function(e,t,a){e.exports=a(37)},26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),i=a.n(r),o=a(6),l=a(9),u=a(1),s=a(13),m=a(3),d="".concat(window.location.host,"-").concat(window.location.origin,"-state"),E=localStorage.getItem(d),g=E&&JSON.parse(E)||{categories:[],activeCategory:null,newCategoryName:""},p={state:g,dispatch:null},f=Object(n.createContext)(p),b=function(){return Object(n.useContext)(f)},y=function(e,t){var a=function(e,t){switch(t.type){case"CREATE_CATEGORY":return Object(m.a)(Object(m.a)({},e),{},{newCategoryName:"",categories:[].concat(Object(s.a)(e.categories),[t.payload])});case"ENTER_CATEGORY_NAME":return Object(m.a)(Object(m.a)({},e),{},{newCategoryName:t.payload});case"SET_ACTIVE_CATEGORY":return Object(m.a)(Object(m.a)({},e),{},{activeCategory:t.payload});case"DELETE_CATEGORY":return Object(m.a)(Object(m.a)({},e),{},{categories:e.categories.filter((function(t){return t.id!==e.activeCategory.id})),activeCategory:null});case"UPDATE_ACTIVE_CATEGORY":var a=Object(m.a)(Object(m.a)({},e.activeCategory),{},{name:t.payload}),n=e.categories.findIndex((function(e){return e.id===a.id}));return Object(m.a)(Object(m.a)({},e),{},{activeCategory:a,categories:[].concat(Object(s.a)(e.categories.slice(0,n)),[a],Object(s.a)(e.categories.slice(n+1)))});default:return Object(m.a)({},e)}}(e,t);return localStorage.setItem(d,JSON.stringify(a)),a},v=function(e,t){return t({type:"ENTER_CATEGORY_NAME",payload:e})},N=function(e,t){return t({type:"SET_ACTIVE_CATEGORY",payload:e})},C=function(e){var t=e.name,a=e.setEditing,r=Object(n.useRef)(null),i=function(e){var t=e.name,a=e.setEditing,c=e.inputRef,r=b().dispatch,i=Object(n.useState)(t),o=Object(l.a)(i,2),u=o[0],s=o[1];return Object(n.useEffect)((function(){return c.current.focus(),function(){return a(!1)}}),[a,c]),{editInputHandler:function(e){return s(e.target.value)},editedName:u,submitEditHandler:function(e){e.preventDefault(),a(!1),function(e,t){t({type:"UPDATE_ACTIVE_CATEGORY",payload:e})}(u,r)},cancelHandler:function(){a(!1)}}}({name:t,setEditing:a,inputRef:r}),o=i.editInputHandler,u=i.editedName,s=i.submitEditHandler,m=i.cancelHandler;return c.a.createElement("form",{className:"input-group category-name-edit",onSubmit:s},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement("span",{className:"input-group-text"},"Edit Category Name")),c.a.createElement("input",{type:"text",className:"form-control","aria-label":"Category name input",value:u,onChange:o,ref:r}),c.a.createElement("div",{className:"input-group-append"},c.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Confirm"),c.a.createElement("button",{className:"btn btn-outline-danger",type:"submit",onClick:m},"Cancel")))},O=window.location.pathname.match(/\/\w/)?window.location.pathname:"",h="".concat(O),j="".concat(O,"active-category"),T="".concat(O,"new-category"),w=(a(26),function(e){var t=e.editBtnHandler,a=e.deleteBtnHandler,n=Object(u.h)().pathname;return c.a.createElement("div",{className:"d-flex"},n!==j&&c.a.createElement(o.b,{to:j},c.a.createElement("button",{type:"button",className:"btn btn-success item-action-btn details-action"},"Details")),c.a.createElement("button",{type:"button",className:"btn btn-warning item-action-btn edit-action",onClick:t},"Edit"),c.a.createElement("button",{type:"button",className:"btn btn-danger item-action-btn delete-action",onClick:a},"Delete"))}),A=(a(32),function(e){var t=e.activeItem,a=e.deleteBtnHandler,r=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1];return{isEditing:a,setEditing:c,editBtnHandler:function(){return c(!0)}}}(),i=r.editBtnHandler,s=r.isEditing,m=r.setEditing,d=function(e){return Object(u.h)().pathname===T?{caption:"New Category"}:e?{caption:e.name}:{caption:"Categories"}}(t).caption;return c.a.createElement("div",{className:"btn-group alert alert-primary toolbar d-flex justify-content-between",role:"group","aria-label":"Category actions"},c.a.createElement("div",{className:"input-group-prepend toolbar-caption"},c.a.createElement("span",{className:"input-group-text"},d)),s&&t&&c.a.createElement(C,{name:t.name,setEditing:m}),t?c.a.createElement(w,{deleteBtnHandler:a,editBtnHandler:i}):c.a.createElement(o.b,{to:T},c.a.createElement("button",{type:"button",className:"btn btn-success item-action-btn add-action"},"Add New Category")))}),H=(a(33),function(e){var t=e.name,a=e.clickHandler,n=e.isActive;return c.a.createElement("li",{className:"list-group-item categories-item ".concat(n?"active":""),onClick:a},t)}),x=function(e){return"A"===e.tagName||"BUTTON"===e.tagName||"INPUT"===e.tagName||"LABEL"===e.tagName},R=function(e){var t=e.children,a=e.dispatch,r=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=function(e){!r.current||r.current.contains(e.target)||e.composedPath().some(x)||N(null,a)};return document.addEventListener("click",e),function(){return document.removeEventListener("click",e)}}),[a,r]),c.a.createElement("div",{ref:r},t)},_=function(){var e=function(){var e=b(),t=e.state,a=e.dispatch;return{categories:t.categories,itemClickHandler:function(e){return function(){return t.activeCategory&&e===t.activeCategory.id?N(null,a):N(t.categories.find((function(t){return t.id===e})),a)}},dispatch:a,activeCategory:t.activeCategory}}(),t=e.activeCategory,a=e.categories,n=e.dispatch,r=e.itemClickHandler;return c.a.createElement("div",{className:"categories-list d-flex flex-column flex-grow-1"},c.a.createElement(R,{dispatch:n},c.a.createElement("ul",{className:"list-group"},a.map((function(e){return c.a.createElement(H,{name:e.name,key:e.id,isActive:t&&e.id===t.id,clickHandler:r(e.id)})})))))},I=function(e){var t=b(),a=t.state,c=t.dispatch,r=Object(u.g)();return Object(n.useEffect)((function(){return e.current.focus(),function(){return v("",c)}}),[c,e]),{nameInputHandler:function(e){return v(e.target.value,c)},submitNameHandler:function(e){e.preventDefault(),function(e,t){t({type:"CREATE_CATEGORY",payload:{name:e,id:(new Date).getTime()}})}(a.newCategoryName,c),r.push(h)},name:a.newCategoryName}},k=(a(34),function(){var e=Object(n.useRef)(null),t=I(e),a=t.nameInputHandler,r=t.submitNameHandler,i=t.name;return c.a.createElement("form",{className:"new-category-form",onSubmit:r},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"new-category-name"},"Category Name"),c.a.createElement("input",{id:"new-category-name",type:"text",className:"form-control",onChange:a,value:i,ref:e}),c.a.createElement("small",{className:"form-text text-muted"},"Enter the name for a new location category.")),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))}),B=(a(35),function(e){var t=e.activeCategory;return c.a.createElement("section",{className:"category-details d-flex flex-column"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},"Category Name:"),c.a.createElement("div",{className:"list-group-item"},t.name)),c.a.createElement(o.b,{to:h,className:"align-self-center mt-2"},c.a.createElement("button",{type:"button",className:"btn btn-primary"},"Back to list")))}),S=(a(36),function(){var e=Object(n.useReducer)(y,g),t=Object(l.a)(e,2),a=t[0],r=t[1],i=function(e){return{deleteBtnHandler:function(){return function(e){return e({type:"DELETE_CATEGORY"})}(e)}}}(r).deleteBtnHandler;return c.a.createElement(f.Provider,{value:{state:a,dispatch:r}},c.a.createElement("header",null,c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4 page-heading"},c.a.createElement(o.b,{to:h},"myLocations")),c.a.createElement(A,{activeItem:a.activeCategory,deleteBtnHandler:i}))),c.a.createElement("main",{className:"container main-container d-flex justify-content-center"},c.a.createElement(u.d,null,c.a.createElement(u.b,{path:h,exact:!0},a.categories.length?c.a.createElement(_,null):c.a.createElement("h2",{className:"display-4 text-center categories-heading align-self-center"},"There is no categories yet")),c.a.createElement(u.b,{path:T},c.a.createElement(k,null)),c.a.createElement(u.b,{path:j},a.activeCategory?c.a.createElement(B,{activeCategory:a.activeCategory}):c.a.createElement(u.a,{to:h})))))});i.a.render(c.a.createElement(n.StrictMode,null,c.a.createElement(o.a,null,c.a.createElement(S,null))),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.623acbd2.chunk.js.map