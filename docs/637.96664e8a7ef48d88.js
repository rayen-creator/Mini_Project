"use strict";(self.webpackChunkmini_project=self.webpackChunkmini_project||[]).push([[637],{6637:(I,g,c)=>{c.r(g),c.d(g,{ConventionsModule:()=>O});var d=c(9808),l=c(5425);class u{}var b=c(2340),n=c(1223),Z=c(520);let v=(()=>{class t{constructor(e){this.http=e,this.url=b.N.defaultUrl+"/Conventions"}getAllConventions(){return this.http.get(this.url+"/all")}addConventions(e){return this.http.post(this.url+"/addConventions",e)}updateConventions(e,o){return this.http.put(this.url+"/updateConventions/"+o,e)}getConventionsById(e){return this.http.get(this.url+"/Conventions/"+e)}deleteConventions(e){return this.http.delete(this.url+"/delete/"+e)}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(Z.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=c(1208),s=c(2382);function C(t,i){if(1&t&&(n.TgZ(0,"option",13),n._uU(1),n.qZA()),2&t){const e=i.$implicit;n.Q6J("ngValue",e),n.xp6(1),n.hij("",e.nomUniv," ")}}function A(t,i){1&t&&(n.TgZ(0,"div",14),n._uU(1," this field is required "),n.qZA())}const T=function(){return{standalone:!0}};let q=(()=>{class t{constructor(e,o,a,r){this.currentRoute=e,this.router=o,this.cnvServ=a,this.unvServ=r}ngOnInit(){this.unvServ.getAlluniversities().subscribe(o=>{this.listuniv=o},()=>{},()=>{}),this.conventions=new u;let e=this.currentRoute.snapshot.params.id;null!=e&&this.cnvServ.getConventionsById(e).subscribe(o=>this.conventions=o)}add(){this.unvServ.affect(this.universite,this.conventions.idc).subscribe(()=>{this.router.navigate(["backoffice/conventions"])})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(l.gz),n.Y36(l.F0),n.Y36(v),n.Y36(m.Y))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-affectconventions"]],decls:18,vars:5,consts:[[1,"row"],[1,"col-md-10",2,"margin","50px"],[1,"card"],[1,"card-body"],["f","ngForm"],[1,"form-group","mb-3"],["for","inputState",1,"form-label"],["placeholder","Enter Departemet","name","Departemet","required","",1,"form-select",3,"ngModel","ngModelOptions","ngModelChange"],["x","ngModel"],["selected",""],[3,"ngValue",4,"ngFor","ngForOf"],["class","alert alert-danger",4,"ngIf"],["type","submit",1,"btn","btn-success",3,"click"],[3,"ngValue"],[1,"alert","alert-danger"]],template:function(e,o){if(1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"form",null,4)(6,"div",5)(7,"label",6),n._uU(8,"University"),n.qZA(),n.TgZ(9,"select",7,8),n.NdJ("ngModelChange",function(r){return o.universite=r}),n.TgZ(11,"option",9),n._uU(12," select University"),n.qZA(),n.YNc(13,C,2,2,"option",10),n.qZA(),n.YNc(14,A,2,0,"div",11),n.qZA()(),n.TgZ(15,"button",12),n.NdJ("click",function(){return o.add()}),n._uU(16,"Assign"),n.qZA(),n._uU(17," \xa0 "),n.qZA()()()()),2&e){const a=n.MAs(10);n.xp6(9),n.Q6J("ngModel",o.universite)("ngModelOptions",n.DdM(4,T)),n.xp6(4),n.Q6J("ngForOf",o.listuniv),n.xp6(1),n.Q6J("ngIf",a.invalid&&a.touched)}},directives:[s._Y,s.JL,s.F,s.EJ,s.Q7,s.JJ,s.On,s.YN,s.Kr,d.sg,d.O5],styles:[""]}),t})();function U(t,i){1&t&&(n.TgZ(0,"div"),n._uU(1," this field is required "),n.qZA())}function x(t,i){1&t&&(n.TgZ(0,"div"),n._uU(1," minlength = 3 ! "),n.qZA())}function y(t,i){if(1&t&&(n.TgZ(0,"div",38),n.YNc(1,U,2,0,"div",39),n.YNc(2,x,2,0,"div",39),n.qZA()),2&t){n.oxw();const e=n.MAs(19);n.xp6(1),n.Q6J("ngIf",e.hasError("required")),n.xp6(1),n.Q6J("ngIf",e.hasError("minlength"))}}function M(t,i){1&t&&(n.TgZ(0,"div",38),n._uU(1," this field is required "),n.qZA())}function J(t,i){1&t&&(n.TgZ(0,"div"),n._uU(1,"this field is required !"),n.qZA())}function F(t,i){if(1&t&&(n.TgZ(0,"div",38),n.YNc(1,J,2,0,"div",39),n.qZA()),2&t){n.oxw();const e=n.MAs(37);n.xp6(1),n.Q6J("ngIf",e.hasError("required"))}}function k(t,i){1&t&&(n.TgZ(0,"div"),n._uU(1," this field is required "),n.qZA())}function N(t,i){1&t&&(n.TgZ(0,"div"),n._uU(1," minlength = 3 ! "),n.qZA())}function Y(t,i){if(1&t&&(n.TgZ(0,"div",38),n.YNc(1,k,2,0,"div",39),n.YNc(2,N,2,0,"div",39),n.qZA()),2&t){n.oxw();const e=n.MAs(19);n.xp6(1),n.Q6J("ngIf",e.hasError("required")),n.xp6(1),n.Q6J("ngIf",e.hasError("minnumber"))}}let f=(()=>{class t{constructor(e,o,a,r){this.router=e,this.cnvServ=o,this.currentRoute=a,this.unvServ=r}ngOnInit(){this.unvServ.getAlluniversities().subscribe(e=>{this.listuniv=e},()=>{},()=>{this.length=this.listuniv.length}),this.conventions=new u,this.id=this.currentRoute.snapshot.params.id,console.log(this.id),null!=this.id?(this.action="update",this.cnvServ.getConventionsById(this.id).subscribe(e=>this.conventions=e)):(this.action="Add",this.conventions=new u)}Back(){this.router.navigate(["backoffice/universite"])}add(){this.unvServ.affect(this.universite,this.conventions.idc).subscribe(()=>{})}save(){"Add"==this.action?this.cnvServ.addConventions(this.conventions).subscribe(()=>{this.router.navigate(["backoffice/conventions"])}):this.cnvServ.updateConventions(this.conventions,this.id).subscribe(()=>{this.router.navigate(["backoffice/conventions"])})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(l.F0),n.Y36(v),n.Y36(l.gz),n.Y36(m.Y))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-formconventions"]],decls:61,vars:11,consts:[[1,"p-3","text-center","text-white"],[1,"container"],[1,"container-xxl","flex-grow-1","container-p-y"],[1,"row"],[1,"col-xl"],[1,"card","mb-4"],[1,"card-header","d-flex","justify-content-between","align-items-center"],[1,"mb-0"],[1,"card-body"],["f","ngForm"],[1,"form-group","mb-3"],["for"," nomUniv",1,"form-label"],[1,"input-group","input-group-merge"],["id","basic-icon-default-company2",1,"input-group-text"],[1,"bx","bx-buildings"],["name","nomUniv","type","text","required","","minlength","3","id","nomUniv","placeholder","Enter University name","aria-describedby","basic-icon-default-company2",1,"form-control",3,"ngModel","ngModelChange"],["n","ngModel"],["class","alert alert-danger",4,"ngIf"],["for","inputState",1,"form-label"],["required","","name","option","id","exampleFormControlSelect1","aria-label","Default select example",1,"form-select",3,"ngModel","ngModelChange"],["p","ngModel"],["selected",""],["value","tunisia"],["value","france"],[1,"form-group"],[1,"form-label"],["type","text","name","image","required","","placeholder","Image Url",1,"form-control",3,"ngModel","ngModelChange"],["i","ngModel"],["name","nomUniv","type","number","required","","minlength","3","id","nomUniv","placeholder","Example : 3 years","aria-describedby","basic-icon-default-company2",1,"form-control",3,"ngModel","ngModelChange"],[1,"mb-3"],["for","basic-icon-default-message",1,"form-label"],["id","basic-icon-default-message2",1,"input-group-text"],[1,"bx","bx-comment"],["type","text","name","description","required","",1,"form-control",3,"ngModel","ngModelChange"],["c","ngModel"],["id","basic-icon-default-message","placeholder","Details","aria-describedby","basic-icon-default-message2",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled","click"],[1,"btn","btn-danger",3,"click"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(e,o){if(1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h5",7),n._uU(8,"Form"),n.qZA()(),n.TgZ(9,"div",8)(10,"form",null,9)(12,"div",10)(13,"label",11),n._uU(14,"Company Name"),n.qZA(),n.TgZ(15,"div",12)(16,"span",13),n._UZ(17,"i",14),n.qZA(),n.TgZ(18,"input",15,16),n.NdJ("ngModelChange",function(r){return o.conventions.name=r}),n.qZA(),n.YNc(20,y,3,2,"div",17),n.qZA()(),n.TgZ(21,"div",10)(22,"label",18),n._uU(23,"country"),n.qZA(),n.TgZ(24,"select",19,20),n.NdJ("ngModelChange",function(r){return o.conventions.country=r}),n.TgZ(26,"option",21),n._uU(27,"Open to select option"),n.qZA(),n.TgZ(28,"option",22),n._uU(29,"tunisia"),n.qZA(),n.TgZ(30,"option",23),n._uU(31,"france"),n.qZA()(),n.YNc(32,M,2,0,"div",17),n.qZA(),n.TgZ(33,"div",24)(34,"label",25),n._uU(35,"Logo"),n.qZA(),n.TgZ(36,"input",26,27),n.NdJ("ngModelChange",function(r){return o.conventions.logo=r}),n.qZA()(),n.YNc(38,F,2,1,"div",17),n.TgZ(39,"div",10)(40,"label",11),n._uU(41,"Duration"),n.qZA(),n.TgZ(42,"div",12),n._UZ(43,"span",13),n.TgZ(44,"input",28,16),n.NdJ("ngModelChange",function(r){return o.conventions.duration_agreement=r}),n.qZA(),n.YNc(46,Y,3,2,"div",17),n.qZA()(),n.TgZ(47,"div",29)(48,"label",30),n._uU(49,"Details"),n.qZA(),n.TgZ(50,"div",12)(51,"span",31),n._UZ(52,"i",32),n.qZA(),n.TgZ(53,"input",33,34),n.NdJ("ngModelChange",function(r){return o.conventions.details_agreement=r}),n.qZA(),n._UZ(55,"textarea",35),n.qZA()(),n.TgZ(56,"button",36),n.NdJ("click",function(){return o.save()}),n._uU(57),n.qZA(),n._uU(58," \xa0 "),n.TgZ(59,"button",37),n.NdJ("click",function(){return o.Back()}),n._uU(60,"cancel"),n.qZA()()()()()()()()()),2&e){const a=n.MAs(11),r=n.MAs(19),p=n.MAs(25),_=n.MAs(37);n.xp6(18),n.Q6J("ngModel",o.conventions.name),n.xp6(2),n.Q6J("ngIf",r.invalid&&r.touched),n.xp6(4),n.Q6J("ngModel",o.conventions.country),n.xp6(8),n.Q6J("ngIf",p.invalid&&p.touched),n.xp6(4),n.Q6J("ngModel",o.conventions.logo),n.xp6(2),n.Q6J("ngIf",_.invalid&&_.touched),n.xp6(6),n.Q6J("ngModel",o.conventions.duration_agreement),n.xp6(2),n.Q6J("ngIf",r.invalid&&r.touched),n.xp6(7),n.Q6J("ngModel",o.conventions.details_agreement),n.xp6(3),n.Q6J("disabled",a.invalid),n.xp6(1),n.Oqu(o.action)}},directives:[s._Y,s.JL,s.F,s.Fj,s.Q7,s.wO,s.JJ,s.On,d.O5,s.EJ,s.YN,s.Kr,s.wV],styles:[""]}),t})();var h=c(3189);const S=function(t,i){return{"badge bg-label-primary":t,"badge bg-label-success":i}};function L(t,i){if(1&t){const e=n.EpF();n.TgZ(0,"tr",26)(1,"td"),n._UZ(2,"i",27),n.TgZ(3,"strong"),n._uU(4),n.qZA()(),n.TgZ(5,"td")(6,"span",28),n._uU(7),n.qZA()(),n.TgZ(8,"td")(9,"ul",29)(10,"li",30),n._UZ(11,"img",31),n.qZA()()(),n.TgZ(12,"td"),n._uU(13),n.qZA(),n.TgZ(14,"td")(15,"span",32),n._uU(16),n.qZA()(),n.TgZ(17,"td")(18,"button",33),n._uU(19,"Assign"),n.qZA(),n._uU(20," \xa0 "),n.TgZ(21,"button",33),n._uU(22,"Edit"),n.qZA(),n._uU(23," \xa0 "),n.TgZ(24,"button",34),n.NdJ("click",function(){const r=n.CHM(e).$implicit;return n.oxw().deleteConventions(r)}),n._uU(25,"Delete"),n.qZA()()()}if(2&t){const e=i.$implicit;n.xp6(4),n.Oqu(e.name),n.xp6(2),n.Q6J("ngClass",n.WLB(9,S,"france"===e.country,"tunisia"===e.country)),n.xp6(1),n.Oqu(e.country),n.xp6(3),n.s9C("title",e.nom),n.xp6(1),n.s9C("src",e.logo,n.LSH),n.xp6(2),n.Oqu(e.details_agreement),n.xp6(3),n.Oqu(e.duration_agreement),n.xp6(2),n.MGl("routerLink","affect/",e.idc,""),n.xp6(3),n.MGl("routerLink","update/",e.idc,"")}}const Q=[{path:"",component:(()=>{class t{constructor(e,o){this.cnvServ=e,this.router=o,this.page=1,this.pagesize=15}ngOnInit(){this.cnvServ.getAllConventions().subscribe(e=>{this.listCnv=e},()=>{},()=>{this.length=this.listCnv.length,console.log(this.listCnv)})}Back(){this.router.navigate(["backoffice/universite"])}deleteConventions(e){confirm("Are you sure to delete"+e.name)&&(this.cnvServ.deleteConventions(e.idc).subscribe(),location.reload())}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(v),n.Y36(l.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-listconventions"]],decls:47,vars:12,consts:[[1,"p-3","text-center","text-white"],[1,"container"],[1,"row"],[1,"navbar","navbar-example","navbar-expand-lg","blue"],[1,"container-fluid"],["id","navbar-ex-4",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto"],["routerLink","form","href","javascript:void(0)",1,"nav-item","nav-link"],[1,"d-flex"],[1,"input-group"],[1,"input-group-text"],[1,"tf-icons","bx","bx-search"],["type","text","name","search","autocomplete","off","placeholder","Search by name",1,"form-control",3,"ngModel","ngModelChange"],[1,"container-xxl","flex-grow-1","container-p-y"],[1,"fw-bold","py-3","mb-4"],[1,"text-muted","fw-light"],[1,"card"],[1,"table-responsive","text-nowrap"],[1,"table","table-dark"],[1,"table-border-bottom-0"],["class","table-dark",4,"ngFor","ngForOf"],[1,"justify-content-center","d-flex"],[1,"row","g-0","align-items-center","pb-4"],[1,"col-sm"],["type","button",3,"click"],[1,"mb-sm"],[1,"table-dark"],[1,"fab","fa-sketch","fa-lg","text-warning","me-3"],[1,"badge","bg-label-primary","me-2",3,"ngClass"],[1,"list-unstyled","users-list","m-0","avatar-group","d-flex","align-items-center"],["data-bs-toggle","tooltip","data-popup","tooltip-custom","data-bs-placement","top",1,"avatar","avatar-m","pull-up",3,"title"],["alt","Avatar",1,"rounded-circle",3,"src"],[1,"badge","bg-label-primary","me-1"],["type","button",1,"btn","btn-outline-success",3,"routerLink"],["type","button",1,"btn","btn-outline-danger",3,"click"]],template:function(e,o){1&e&&(n._UZ(0,"br"),n.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"nav",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"a",7),n._uU(9,"Add Agreement"),n.qZA()(),n.TgZ(10,"form",8)(11,"div",9)(12,"span",10),n._UZ(13,"i",11),n.qZA(),n.TgZ(14,"input",12),n.NdJ("ngModelChange",function(r){return o.searchText=r}),n.qZA()()()()()(),n.TgZ(15,"div",13)(16,"h4",14),n._UZ(17,"span",15),n._uU(18," List of Agreements"),n.qZA(),n.TgZ(19,"div",16)(20,"div",17)(21,"table",18)(22,"thead")(23,"tr")(24,"th"),n._uU(25,"Company or University Name"),n.qZA(),n.TgZ(26,"th"),n._uU(27,"Country"),n.qZA(),n.TgZ(28,"th"),n._uU(29,"Logo "),n.qZA(),n.TgZ(30,"th"),n._uU(31,"duration_agreement"),n.qZA(),n.TgZ(32,"th"),n._uU(33,"details_agreement"),n.qZA(),n._UZ(34,"th"),n.qZA()(),n.TgZ(35,"tbody",19),n.YNc(36,L,26,12,"tr",20),n.ALo(37,"filter"),n.ALo(38,"slice"),n.qZA()()()()(),n.TgZ(39,"div",21)(40,"div",22)(41,"div",23)(42,"div")(43,"button",24),n.NdJ("click",function(){return o.Back()}),n._uU(44,"Back"),n.qZA(),n.TgZ(45,"p",25),n._uU(46),n.qZA()()()()()()()()),2&e&&(n.xp6(14),n.Q6J("ngModel",o.searchText),n.xp6(22),n.Q6J("ngForOf",n.xi3(37,5,n.Dn7(38,8,o.listCnv,(o.page-1)*o.pagesize,o.page*o.pagesize),o.searchText)),n.xp6(10),n.lnq("Showing ",o.page*o.pagesize-(o.pagesize-1)," to ",o.page*o.pagesize," of ",o.length,""))},directives:[l.yS,s._Y,s.JL,s.F,s.Fj,s.JJ,s.On,d.sg,d.mk,l.rH],pipes:[h.Z,d.OU],styles:[""]}),t})()},{path:"form",component:f},{path:"affect/:id",component:q},{path:"update/:id",component:f}];let w=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[l.Bz.forChild(Q)],l.Bz]}),t})(),O=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[d.ez,w,s.UX,s.u5,h.h]]}),t})()}}]);