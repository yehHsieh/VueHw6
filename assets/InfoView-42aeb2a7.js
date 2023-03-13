import{_,m as f,b,r,o as v,c as h,d as e,e as t,w as m,B as n,x as V,y as g,g as y}from"./index-8da2a632.js";import{c}from"./cart-ca6ddce2.js";const{VITE_APP_URL:k,VITE_APP_PATH:E}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"barproject",VITE_TEXT:"…",BASE_URL:"/VueSideProject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},P={data(){return{user:{name:"",email:"",tel:"",address:""},message:""}},computed:{...f(c,["data"])},methods:{...b(c,["submitInf"]),addToOrder(){const s={user:{name:this.user.name,email:this.user.email,tel:this.user.tel,address:this.user.address},message:this.user.message};this.$http.post(`${k}v2/api/${E}/order`,{data:s}).then(a=>{this.$router.push("/order")})}}},T={style:{"background-image":"url(src/assets/img/inf-pexels-pixabay-37925.jpg)","background-position":"center","background-size":"cover"}},x={class:"container py-5"},$=e("ul",{class:"progresses m-0 d-flex"},[e("li",null,"商品確認"),e("li",{class:"active"},"訂購人資訊"),e("li",null,"訂單完成")],-1),A={class:"row"},I=e("div",{class:"col-6"},null,-1),U={class:"col-6"},w={class:"bg-opacity"},R={class:"my-5 py-5 row justify-content-center",style:{position:"relative","z-index":"2"}},S=e("h2",null,"訂購人資訊",-1),M={class:"mb-3"},B=e("label",{for:"email",class:"form-label"},"Email",-1),L={class:"mb-3"},j=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),q={class:"mb-3"},D=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),z={class:"mb-3"},C=e("label",{for:"address",class:"form-label"},"收件人地址",-1),N={class:"mb-3"},O=e("label",{for:"message",class:"form-label"},"備註:",-1),H={class:"text-end"},X=e("button",{type:"submit",class:"btn btn-danger rounded-pill py-1 px-4 text-center"},"確認",-1);function F(s,a,G,J,K,Q){const d=r("v-field"),i=r("error-message"),u=r("RouterLink"),p=r("v-form");return v(),h("div",T,[e("div",x,[$,e("div",A,[I,e("div",U,[e("div",w,[e("div",R,[t(p,{ref:"form",class:"col-md-6",onSubmit:a[5]||(a[5]=o=>s.submitInf(s.data.user.name))},{default:m(({errors:o})=>[S,e("div",M,[B,t(d,{id:"email",name:"email",type:"email",class:n(["form-control",{"is-invalid":o.email}]),rules:"required|email",placeholder:"請輸入 Email",modelValue:s.data.user.email,"onUpdate:modelValue":a[0]||(a[0]=l=>s.data.user.email=l),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),t(i,{name:"email",class:"invalid-feedback"})]),e("div",L,[j,t(d,{id:"name",name:"姓名",type:"text",class:n(["form-control",{"is-invalid":o.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:s.data.user.name,"onUpdate:modelValue":a[1]||(a[1]=l=>s.data.user.name=l),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),t(i,{name:"姓名",class:"invalid-feedback"})]),e("div",q,[D,t(d,{id:"tel",name:"電話",type:"text",class:n(["form-control",{"is-invalid":o.電話}]),placeholder:"請輸入電話",rules:"required|numeric|min:8|digits:8",modelValue:s.data.user.tel,"onUpdate:modelValue":a[2]||(a[2]=l=>s.data.user.tel=l),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),t(i,{name:"電話",class:"invalid-feedback"})]),e("div",z,[C,t(d,{id:"address",name:"地址",type:"text",class:n(["form-control",{"is-invalid":o.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:s.data.user.address,"onUpdate:modelValue":a[3]||(a[3]=l=>s.data.user.address=l),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),t(i,{name:"地址",class:"invalid-feedback"})]),e("div",N,[O,V(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":a[4]||(a[4]=l=>s.data.message=l)},null,512),[[g,s.data.message,void 0,{trim:!0}]])]),e("div",H,[t(u,{to:"/cart",class:"btn btn-outline-dark me-3 rounded-pill py-1 px-4 text-center"},{default:m(()=>[y("上一步 ")]),_:1}),X])]),_:1},512)])])])])])])}const Z=_(P,[["render",F]]);export{Z as default};