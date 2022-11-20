"use strict";(self.webpackChunkbooking_bus=self.webpackChunkbooking_bus||[]).push([[638],{8638:(U,l,r)=>{r.r(l),r.d(l,{AuthModule:()=>T});var h=r(129),A=r(6895),Z=r(9824),t=r(4650);let v=(()=>{class u{constructor(){}ngOnInit(){}}return u.\u0275fac=function(e){return new(e||u)},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-forgot-password"]],decls:2,vars:0,template:function(e,i){1&e&&(t.TgZ(0,"p"),t._uU(1,"forgot-password works!"),t.qZA())}}),u})();var o=r(4006),p=r(8896),b=r(7009),n=r(9549),d=r(4859),g=r(284),c=r(3546),f=r(7392);let C=(()=>{class u{constructor(e,i,s){this.fb=e,this.auth=i,this.snackbar=s,this.register=this.fb.group({firstName:["",o.kI.required],lastName:["",o.kI.required],email:["",o.kI.required,o.kI.email],password:["",o.kI.required]})}submit(){this.auth.register({firstName:this.register.value.firstName,lastName:this.register.value.lastName,email:this.register.value.email,password:this.register.value.password}).subscribe(e=>{this.snackbar.open("\u062a\u0645 \u0627\u0644\u062a\u0633\u062c\u064a\u0644 \u0628\u0646\u062c\u0627\u062d","\u0627\u063a\u0644\u0627\u0642")})}}return u.\u0275fac=function(e){return new(e||u)(t.Y36(o.qu),t.Y36(p.e),t.Y36(b.ux))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-register"]],decls:32,vars:1,consts:[[1,"mx-auto","bg-light","mt-5",2,"width","500px"],[1,"row",3,"formGroup","ngSubmit"],[1,"col-12"],[1,"text-center"],[1,"col-6"],["appearance","outline",1,"w-100"],["formControlName","firstName","title","First Name","type","text","matInput",""],["formControlName","lastName","title","Last Name","type","text","matInput",""],["formControlName","email","title","Email","type","email","matInput",""],["formControlName","password","title","Password","type","password","matInput",""],["matSuffix",""],["type","submit","color","primary","mat-raised-button","",1,"w-100"]],template:function(e,i){1&e&&(t.TgZ(0,"mat-card",0)(1,"form",1),t.NdJ("ngSubmit",function(){return i.submit()}),t.TgZ(2,"div",2)(3,"h1",3),t._uU(4,"\u062a\u0633\u062c\u064a\u0644 \u0645\u0633\u062a\u062e\u062f\u0645 \u062c\u062f\u064a\u062f"),t.qZA()(),t.TgZ(5,"span"),t._UZ(6,"hr"),t.qZA(),t.TgZ(7,"div",4)(8,"mat-form-field",5)(9,"mat-label"),t._uU(10,"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0627\u0648\u0644"),t.qZA(),t._UZ(11,"input",6),t.qZA()(),t.TgZ(12,"div",4)(13,"mat-form-field",5)(14,"mat-label"),t._uU(15,"\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u062b\u0627\u0646\u064a"),t.qZA(),t._UZ(16,"input",7),t.qZA()(),t.TgZ(17,"div",2)(18,"mat-form-field",5)(19,"mat-label"),t._uU(20,"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a"),t.qZA(),t._UZ(21,"input",8),t.qZA()(),t.TgZ(22,"div",2)(23,"mat-form-field",5)(24,"mat-label"),t._uU(25,"\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631"),t.qZA(),t._UZ(26,"input",9),t.TgZ(27,"mat-icon",10),t._uU(28,"visibility"),t.qZA()()(),t.TgZ(29,"div",2)(30,"button",11),t._uU(31," \u062a\u0633\u062c\u064a\u0644 "),t.qZA()()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",i.register))},dependencies:[n.KE,n.hX,n.R9,d.lW,o._Y,o.Fj,o.JJ,o.JL,g.Nt,c.a8,f.Hw,o.sg,o.u]}),u})();var m=r(9299);const w=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(()=>{class u{constructor(e,i,s){this.auth=e,this.fb=i,this.router=s,this.user=this.fb.group({email:["",o.kI.required],password:["",o.kI.required]})}onsubmit(){this.auth.login({email:this.user.value.email,password:this.user.value.password}).subscribe(e=>{localStorage.setItem("token",e.access_token),localStorage.setItem("user",JSON.stringify(e)),this.router.navigate(["/home"])})}}return u.\u0275fac=function(e){return new(e||u)(t.Y36(p.e),t.Y36(o.qu),t.Y36(m.F0))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-login"]],decls:27,vars:1,consts:[[1,"row","align-items-center","vh-75","mt-5"],[1,"w-25","mx-auto","bg-light","mt-5"],[1,"row"],[1,"col-12"],[1,"text-center"],[3,"formGroup","ngSubmit"],["appearance","outline",1,"w-100"],["title","email","type","email","matInput","","formControlName","email"],["title","password","type","password","matInput","","formControlName","password"],["matSuffix",""],["color","primary","type","submit","mat-raised-button","",1,"w-100"],[1,"col-12","text-center","mt-3"],[1,"nav-link","link-primary"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"div",2)(3,"div",3)(4,"h1",4),t._uU(5,"\u0627\u0647\u0644\u0627 \u0628\u0639\u0648\u062f\u062a\u0643"),t.qZA()(),t.TgZ(6,"span"),t._UZ(7,"hr"),t.qZA(),t.TgZ(8,"form",5),t.NdJ("ngSubmit",function(){return i.onsubmit()}),t.TgZ(9,"div",3)(10,"mat-form-field",6)(11,"mat-label"),t._uU(12,"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a"),t.qZA(),t._UZ(13,"input",7),t.qZA()(),t.TgZ(14,"div",3)(15,"mat-form-field",6)(16,"mat-label"),t._uU(17,"\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631"),t.qZA(),t._UZ(18,"input",8),t.TgZ(19,"mat-icon",9),t._uU(20,"visibility"),t.qZA()()(),t.TgZ(21,"div",3)(22,"button",10),t._uU(23," \u062f\u062e\u0648\u0644 "),t.qZA()()(),t.TgZ(24,"div",11)(25,"a",12),t._uU(26,"\u0647\u0644 \u0646\u064a\u0633\u062a \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631 \u061f"),t.qZA()()()()()),2&e&&(t.xp6(8),t.Q6J("formGroup",i.user))},dependencies:[n.KE,n.hX,n.R9,d.lW,o._Y,o.Fj,o.JJ,o.JL,g.Nt,c.a8,f.Hw,o.sg,o.u]}),u})()},{path:"register",component:C,canActivate:[Z.P]},{path:"forgot-password",component:v}];let y=(()=>{class u{}return u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[m.Bz.forChild(w),m.Bz]}),u})(),T=(()=>{class u{}return u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[A.ez,y,h.M]}),u})()}}]);