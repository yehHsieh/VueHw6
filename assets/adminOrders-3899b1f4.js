import{m as L,D}from"./DelModal-7e3bfc87.js";import{_ as O,o as s,c as o,d as t,t as l,z as g,F as h,v as y,x as k,H as x,r as _,g as E,e as p,B as V}from"./index-8da2a632.js";import{P as w}from"./Pagination-c841de89.js";const T={props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-paid"],mixins:[L],watch:{order(){this.tempOrder=this.order}}},U={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},A={class:"modal-dialog modal-xl",role:"document"},I={class:"modal-content border-0"},S=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),N={class:"modal-body"},B={class:"row"},R={class:"col-md-4"},j=t("h3",null,"用戶資料",-1),z={class:"table"},H={key:0},q=t("th",{style:{width:"100px"}},"姓名",-1),F=t("th",null,"Email",-1),X=t("th",null,"電話",-1),G=t("th",null,"地址",-1),J={class:"col-md-8"},K=t("h3",null,"訂單細節",-1),Q={class:"table"},W=t("th",{style:{width:"100px"}},"訂單編號",-1),Y=t("tr",null,[t("th",null,"下單時間"),t("td")],-1),Z=t("th",null,"付款時間",-1),tt={key:0},et={key:1},st=t("th",null,"付款狀態",-1),ot={key:0,class:"text-success"},nt={key:1,class:"text-muted"},lt=t("th",null,"總金額",-1),dt=t("h3",null,"選購商品",-1),rt={class:"table"},it=t("thead",null,[t("tr")],-1),at=t("td",{class:"text-end"},null,-1),ct={class:"d-flex justify-content-end"},ut={class:"form-check"},ht={class:"form-check-label",for:"flexCheckDefault"},_t={key:0},pt={key:1},mt={class:"modal-footer"},bt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ft(n,d,c,m,e,u){return s(),o("div",U,[t("div",A,[t("div",I,[S,t("div",N,[t("div",B,[t("div",R,[j,t("table",z,[e.tempOrder.user?(s(),o("tbody",H,[t("tr",null,[q,t("td",null,l(e.tempOrder.user.name),1)]),t("tr",null,[F,t("td",null,l(e.tempOrder.user.email),1)]),t("tr",null,[X,t("td",null,l(e.tempOrder.user.tel),1)]),t("tr",null,[G,t("td",null,l(e.tempOrder.user.address),1)])])):g("",!0)])]),t("div",J,[K,t("table",Q,[t("tbody",null,[t("tr",null,[W,t("td",null,l(e.tempOrder.id),1)]),Y,t("tr",null,[Z,t("td",null,[e.tempOrder.paid_date?(s(),o("span",tt)):(s(),o("span",et,"時間不正確"))])]),t("tr",null,[st,t("td",null,[e.tempOrder.is_paid?(s(),o("strong",ot,"已付款")):(s(),o("span",nt,"尚未付款"))])]),t("tr",null,[lt,t("td",null,l(e.tempOrder.total)+" ",1)])])]),dt,t("table",rt,[it,t("tbody",null,[(s(!0),o(h,null,y(e.tempOrder.products,i=>(s(),o("tr",{key:i.id},[t("th",null,l(i.product.title),1),t("td",null,l(i.qty)+" / "+l(i.product.unit),1),at]))),128))])]),t("div",ct,[t("div",ut,[k(t("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":d[0]||(d[0]=i=>e.tempOrder.is_paid=i)},null,512),[[x,e.tempOrder.is_paid]]),t("label",ht,[e.tempOrder.is_paid?(s(),o("span",_t,"已付款")):(s(),o("span",pt,"未付款"))])])])])])]),t("div",mt,[bt,t("button",{type:"button",class:"btn btn-primary",onClick:d[1]||(d[1]=i=>n.$emit("update-paid",e.tempOrder))}," 修改付款狀態 ")])])])],512)}const gt=O(T,[["render",ft]]),{VITE_APP_URL:b,VITE_APP_PATH:f}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"barproject",VITE_TEXT:"…",BASE_URL:"/VueSideProject/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},yt={data(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{OrderModal:gt,DelModal:D,Pagination:w},methods:{getOrders(n=1){this.currentPage=n;const d=`${b}api/${f}/admin/orders?page=${n}`;this.isLoading=!0,this.$http.get(d,this.tempProduct).then(c=>{this.orders=c.data.orders,this.pagination=c.data.pagination,this.isLoading=!1}).catch(c=>{this.isLoading=!1})},updatePaid(n){const d=`${b}api/${f}/admin/order/${n.id}`,c={is_paid:n.is_paid};this.$http.put(d,{data:c}).then(m=>{this.isLoading=!1,this.$refs.orderModal.hideModal(),this.getOrders(this.currentPage)}).catch(m=>{this.isLoading=!1})},openModal(n){this.tempOrder={...n},this.isNew=!1,this.$refs.orderModal.openModal()},openDelOrderModal(n){this.tempOrder={...n},this.$refs.delModal.openModal()},delOrder(){const n=`${b}api/${f}/admin/order/${this.tempOrder.id}`;this.isLoading=!0,this.$http.delete(n).then(()=>{this.isLoading=!1,this.$refs.delModal.hideModal(),this.getOrders(this.currentPage)}).catch(d=>{this.isLoading=!1})}},mounted(){this.getOrders()}},Ot={class:"table mt-4"},kt=t("thead",null,[t("tr",null,[t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1),xt=t("td",null,null,-1),Pt=["textContent"],Mt={class:"list-unstyled"},vt={class:"text-right"},Ct={class:"form-check form-switch"},$t=["id","onUpdate:modelValue","onChange"],Lt=["for"],Dt={key:0},Et={key:1},Vt={class:"btn-group"},wt=["onClick"],Tt=["onClick"];function Ut(n,d,c,m,e,u){const i=_("Loading"),P=_("Pagination"),M=_("OrderModal"),v=_("DelModal");return s(),o(h,null,[E(" 後臺訂單列表 "),p(i,{active:e.isLoading,"z-index":1060},null,8,["active"]),t("table",Ot,[kt,t("tbody",null,[(s(!0),o(h,null,y(e.orders,(r,C)=>(s(),o(h,{key:C},[e.orders.length?(s(),o("tr",{key:0,class:V({"text-secondary":!r.is_paid})},[xt,t("td",null,[r.user?(s(),o("span",{key:0,textContent:l(r.user.email)},null,8,Pt)):g("",!0)]),t("td",null,[t("ul",Mt,[(s(!0),o(h,null,y(r.products,(a,$)=>(s(),o("li",{key:$},l(a.product.title)+" 數量："+l(a.qty)+" "+l(a.product.unit),1))),128))])]),t("td",vt,l(r.total),1),t("td",null,[t("div",Ct,[k(t("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${r.id}`,"onUpdate:modelValue":a=>r.is_paid=a,onChange:a=>u.updatePaid(r)},null,40,$t),[[x,r.is_paid]]),t("label",{class:"form-check-label",for:`paidSwitch${r.id}`},[r.is_paid?(s(),o("span",Dt,"已付款")):(s(),o("span",Et,"未付款"))],8,Lt)])]),t("td",null,[t("div",Vt,[t("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:a=>u.openModal(r)}," 檢視 ",8,wt),t("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:a=>u.openDelOrderModal(r)}," 刪除 ",8,Tt)])])],2)):g("",!0)],64))),128))])]),p(P,{pages:e.pagination,onEmitPages:u.getOrders},null,8,["pages","onEmitPages"]),p(M,{order:e.tempOrder,ref:"orderModal",onUpdatePaid:u.updatePaid},null,8,["order","onUpdatePaid"]),p(v,{item:e.tempOrder,ref:"delModal",onDelItem:u.delOrder},null,8,["item","onDelItem"])],64)}const Nt=O(yt,[["render",Ut]]);export{Nt as default};
