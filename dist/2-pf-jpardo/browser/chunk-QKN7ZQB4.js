import{a as _t,b as Ct,c as ht,d as Mt,e as gt,f as Ut,g as vt,h as St,i as wt,j as xt,k as bt,l as yt,m as Et,o as Lt,p as b,q as It,r as y,s as Dt,t as Tt,v as Rt,y as At}from"./chunk-6FPKCUIG.js";import{a as lt,f as x,h as mt,i as ct,l as E}from"./chunk-LEYBBSTR.js";import{a as S}from"./chunk-H2PZZXPW.js";import{f as Ot}from"./chunk-2QT6SZK3.js";import{a as w}from"./chunk-LZDUOOG4.js";import{Aa as o,Ac as ot,B as z,Ba as r,Ca as u,Da as p,Ea as d,G as Q,Ga as O,Gb as it,H as M,Id as pt,J as q,Ja as N,Jb as $,Jc as nt,Jd as dt,K as g,La as h,N as G,O as U,Sa as P,Sd as ut,T as R,Ta as k,U as A,Ua as B,Xa as K,Ya as n,Yc as at,Zc as st,Zd as ft,_a as c,a as j,b as H,cb as W,da as a,ea as v,eb as X,fb as Y,l as f,ma as l,n as V,ra as C,t as _,vb as Z,wa as J,wb as tt,yb as et,zc as rt}from"./chunk-RFUKYTJG.js";var L=class t{constructor(e){this.httpClient=e}usersUrl=st.USERS_URL;getUsers(){return this.httpClient.get(this.usersUrl)}getUserById(e){let i=`${this.usersUrl}/${e}`;return this.httpClient.get(i).pipe(_(()=>f(()=>new Error("No se pudo obtener el usuario"))))}updateUser(e,i){let s=H(j({},i),{updatedAt:new Date});return this.httpClient.patch(`${this.usersUrl}/${e}`,s).pipe(_(()=>f(()=>new Error("No se pudo actualizar el usuario"))))}toggleAdmin(e){return this.isAdmin(e).pipe(z(i=>i?this.httpClient.patch(`${this.usersUrl}/${e}`,{role:"USER"}):this.httpClient.patch(`${this.usersUrl}/${e}`,{role:"ADMIN"})),_(()=>f(()=>new Error("No se pudo cambiar el rol del usuario"))))}isAdmin(e){return this.getUserById(e).pipe(_(()=>f(()=>new Error("No se pudo obtener el usuario"))),V(i=>i.role==="ADMIN"))}static \u0275fac=function(i){return new(i||t)(q(et))};static \u0275prov=Q({token:t,factory:t.\u0275fac,providedIn:"root"})};var Bt=()=>[10,25,100];function $t(t,e){t&1&&u(0,"mat-spinner",1)}function Ft(t,e){t&1&&(o(0,"th",19),n(1," Apellido"),r())}function jt(t,e){if(t&1&&(o(0,"td",20),n(1),r()),t&2){let i=e.$implicit;a(),c(" ",i.lastName,"")}}function Ht(t,e){t&1&&(o(0,"th",19),n(1," Nombre"),r())}function Vt(t,e){if(t&1&&(o(0,"td",20),n(1),r()),t&2){let i=e.$implicit;a(),c(" ",i.firstName,"")}}function zt(t,e){t&1&&(o(0,"th",19),n(1," Email"),r())}function Qt(t,e){if(t&1&&(o(0,"td",20),n(1),r()),t&2){let i=e.$implicit;a(),c(" ",i.email,"")}}function qt(t,e){t&1&&(o(0,"th",19),n(1,"Actualizado"),r())}function Gt(t,e){if(t&1&&(o(0,"td",20),n(1),X(2,"date"),r()),t&2){let i=e.$implicit;a(),c(" ",Y(2,1,i.updatedAt)," ")}}function Jt(t,e){t&1&&(o(0,"th",19),n(1," Rol"),r())}function Kt(t,e){if(t&1&&(o(0,"td",20),n(1),r()),t&2){let i=e.$implicit;a(),c(" ",i.role," ")}}function Wt(t,e){t&1&&(o(0,"th",21),n(1," Acciones"),r())}function Xt(t,e){if(t&1){let i=O();o(0,"td",20)(1,"div",22)(2,"button",23),N("click",function(){let m=R(i).$implicit,T=h(2);return A(T.toggleRole(m))}),o(3,"mat-icon"),n(4),r()()()()}if(t&2){let i=e.$implicit;a(4),c(" ",i.role==="ADMIN"?"lock":"lock_open"," ")}}function Yt(t,e){t&1&&u(0,"tr",24)}function Zt(t,e){t&1&&u(0,"tr",25)}function te(t,e){if(t&1&&(o(0,"tr",26)(1,"td",27),n(2),r()()),t&2){h();let i=K(5);a(2),c('No hay datos que coincidan con el filtro "',i.value,'"')}}function ee(t,e){if(t&1){let i=O();u(0,"div",2),o(1,"mat-form-field")(2,"mat-label"),n(3,"Buscar"),r(),o(4,"input",3,0),N("keyup",function(m){R(i);let T=h();return A(T.applyFilter(m))}),r()(),o(6,"div",4)(7,"table",5),p(8,6),l(9,Ft,2,0,"th",7)(10,jt,2,1,"td",8),d(),p(11,9),l(12,Ht,2,0,"th",7)(13,Vt,2,1,"td",8),d(),p(14,10),l(15,zt,2,0,"th",7)(16,Qt,2,1,"td",8),d(),p(17,11),l(18,qt,2,0,"th",7)(19,Gt,3,3,"td",8),d(),p(20,12),l(21,Jt,2,0,"th",7)(22,Kt,2,1,"td",8),d(),p(23,13),l(24,Wt,2,0,"th",14)(25,Xt,5,1,"td",8),d(),l(26,Yt,1,0,"tr",15)(27,Zt,1,0,"tr",16)(28,te,3,1,"tr",17),r(),u(29,"mat-paginator",18),r()}if(t&2){let i=h();a(7),C("dataSource",i.dataSource),a(19),C("matHeaderRowDef",i.displayedColumns),a(),C("matRowDefColumns",i.displayedColumns),a(2),C("pageSizeOptions",W(4,Bt))}}var I=class t{constructor(e,i,s){this.userService=e;this.authService=i;this.snackBar=s}displayedColumns=["apellido","nombre","email","updatedAt","role","actions"];isLoading=!1;users=[];dataSource=new Et;paginator;sort;currentUserId=null;ngOnInit(){let e=this.authService.getCurrentUser();this.currentUserId=e?.id||null,this.loadUsers()}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}loadUsers(){this.isLoading=!0,this.userService.getUsers().subscribe({next:e=>{this.dataSource.data=e,this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort,this.isLoading=!1},error:e=>{this.snackBar.open("Error al cargar los usuarios","Cerrar",{duration:3e3}),console.error("Error al cargar los usuarios:",e),this.isLoading=!1}})}applyFilter(e){let i=e.target.value;this.dataSource.filter=i.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()}toggleRole(e){if(this.currentUserId===e.id){this.snackBar.open("No se puede cambiar el rol de su propio usuario","Cerrar",{duration:3e3});return}this.isLoading=!0,this.userService.toggleAdmin(e.id).subscribe({next:i=>{this.snackBar.open(`Rol de ${i.firstName} ${i.lastName} cambiado a ${i.role}`,"Cerrar",{duration:3e3}),this.loadUsers()},error:i=>{this.snackBar.open("Error al cambiar el rol del usuario","Cerrar",{duration:3e3}),this.isLoading=!1}})}static \u0275fac=function(i){return new(i||t)(v(L),v(S),v(w))};static \u0275cmp=G({type:t,selectors:[["app-user-list"]],viewQuery:function(i,s){if(i&1&&(P(b,5),P(y,5)),i&2){let m;k(m=B())&&(s.paginator=m.first),k(m=B())&&(s.sort=m.first)}},decls:5,vars:1,consts:[["input",""],[1,"spinner"],[1,"controls"],["matInput","","placeholder","",3,"keyup"],[1,"mat-elevation-z8"],["mat-table","","matSort","",3,"dataSource"],["matColumnDef","apellido"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","email"],["matColumnDef","updatedAt"],["matColumnDef","role"],["matColumnDef","actions"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["showFirstLastButtons","","aria-label","Select page of users",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],[1,"actions"],["mat-icon-button","","aria-label","Edit button",1,"edit-icon",3,"click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","3",1,"mat-cell"]],template:function(i,s){i&1&&(o(0,"section")(1,"h1"),n(2,"Lista de Usuarios"),r(),l(3,$t,1,0,"mat-spinner",1)(4,ee,30,5),r()),i&2&&(a(3),J(s.isLoading?3:4))},dependencies:[E,x,rt,_t,ht,vt,Mt,Ct,St,gt,Ut,wt,xt,bt,pt,b,y,Dt,mt,lt,Z],styles:[".mat-mdc-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}.actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.delete-icon[_ngcontent-%COMP%]{color:#c12}.edit-icon[_ngcontent-%COMP%]{color:#fc0}.view-icon[_ngcontent-%COMP%]{color:#09f}.restore-icon[_ngcontent-%COMP%]{color:#25c717}.spinner[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}.controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem}@media screen and (max-width: 500px){.controls[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}}section[_ngcontent-%COMP%]{margin:1rem;padding:1rem}.mat-mdc-form-field[_ngcontent-%COMP%]{overflow:hidden}"]})};var Nt=()=>{let t=g(S),e=g(it),i=g(w),s=t.getCurrentUser();return s&&s.role==="ADMIN"?!0:(i.open("No tiene permisos para acceder a esta p\xE1gina","Cerrar",{duration:3e3}),e.createUrlTree(["/dashboard"]))};var ie=[{path:"",component:I,canActivate:[Nt]}],D=class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=M({imports:[$.forChild(ie),$]})};var Pt=class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=U({type:t});static \u0275inj=M({imports:[tt,D,Ot,E,x,ot,Rt,at,yt,dt,It,Tt,ft,nt,ct,Lt,At,ut]})};export{Pt as UsersModule};
