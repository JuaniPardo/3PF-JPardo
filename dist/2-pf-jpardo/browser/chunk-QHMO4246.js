import{$ as Q,$c as lt,Aa as k,Ac as ct,Ba as _,C as F,Ca as X,Cd as pt,Dd as ut,G as L,Ga as Y,Gd as ft,H as z,I as y,Ia as G,J as d,Ja as J,K as N,Ka as tt,Kb as it,La as S,N as A,O as V,P as b,Sa as B,T as q,Ta as w,U as H,Ua as C,Ub as at,Vb as st,Ya as M,Z as u,_a as D,a as h,aa as U,ad as I,bb as R,da as f,dc as rt,dd as g,ea as o,ed as T,f as l,fa as Z,gd as O,jb as et,jc as E,ka as $,ma as x,md as j,nd as dt,od as mt,pb as nt,pd as P,qa as W,qd as ht,wa as K,yc as ot}from"./chunk-L26DPIYF.js";function gt(i,m){if(i&1){let t=Y();k(0,"div",1)(1,"button",2),J("click",function(){q(t);let n=S();return H(n.action())}),M(2),_()()}if(i&2){let t=S();f(2),D(" ",t.data.action," ")}}var yt=["label"];function At(i,m){}var xt=Math.pow(2,31)-1,v=class{constructor(m,t){this._overlayRef=t,this._afterDismissed=new l,this._afterOpened=new l,this._onAction=new l,this._dismissedByAction=!1,this.containerInstance=m,m._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(m){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(m,xt))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},_t=new y("MatSnackBarData"),p=class{constructor(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"}},St=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275dir=b({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"],standalone:!0})}}return i})(),Bt=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275dir=b({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"],standalone:!0})}}return i})(),wt=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275dir=b({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"],standalone:!0})}}return i})(),vt=(()=>{class i{constructor(t,e){this.snackBarRef=t,this.data=e}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static{this.\u0275fac=function(e){return new(e||i)(o(v),o(_t))}}static{this.\u0275cmp=A({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],standalone:!0,features:[R],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["mat-button","","matSnackBarAction","",3,"click"]],template:function(e,n){e&1&&(k(0,"div",0),M(1),_(),x(2,gt,3,1,"div",1)),e&2&&(f(),D(" ",n.data.message,`
`),f(),K(n.hasAction?2:-1))},dependencies:[ot,St,Bt,wt],styles:[".mat-mdc-simple-snack-bar{display:flex}"],encapsulation:2,changeDetection:0})}}return i})(),Ct={snackBarState:lt("state",[T("void, hidden",g({transform:"scale(0.8)",opacity:0})),T("visible",g({transform:"scale(1)",opacity:1})),O("* => visible",I("150ms cubic-bezier(0, 0, 0.2, 1)")),O("* => void, * => hidden",I("75ms cubic-bezier(0.4, 0.0, 1, 1)",g({opacity:0})))])},Mt=0,Dt=(()=>{class i extends mt{constructor(t,e,n,a,s){super(),this._ngZone=t,this._elementRef=e,this._changeDetectorRef=n,this._platform=a,this.snackBarConfig=s,this._document=N(nt),this._trackedModals=new Set,this._announceDelay=150,this._destroyed=!1,this._onAnnounce=new l,this._onExit=new l,this._onEnter=new l,this._animationState="void",this._liveElementId=`mat-snack-bar-container-live-${Mt++}`,this.attachDomPortal=r=>{this._assertNotAttached();let c=this._portalOutlet.attachDomPortal(r);return this._afterPortalAttached(),c},s.politeness==="assertive"&&!s.announcementMessage?this._live="assertive":s.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}onAnimationEnd(t){let{fromState:e,toState:n}=t;if((n==="void"&&e!=="void"||n==="hidden")&&this._completeExit(),n==="visible"){let a=this._onEnter;this._ngZone.run(()=>{a.next(),a.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(s=>t.classList.add(s)):t.classList.add(e)),this._exposeToModals();let n=this._label.nativeElement,a="mdc-snackbar__label";n.classList.toggle(a,!n.querySelector(`.${a}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<e.length;n++){let a=e[n],s=a.getAttribute("aria-owns");this._trackedModals.add(a),s?s.indexOf(t)===-1&&a.setAttribute("aria-owns",s+" "+t):a.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let n=e.replace(this._liveElementId,"").trim();n.length>0?t.setAttribute("aria-owns",n):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector("[aria-hidden]"),e=this._elementRef.nativeElement.querySelector("[aria-live]");if(t&&e){let n=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(n=document.activeElement),t.removeAttribute("aria-hidden"),e.appendChild(t),n?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static{this.\u0275fac=function(e){return new(e||i)(o(Q),o(U),o(et),o(it),o(p))}}static{this.\u0275cmp=A({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,n){if(e&1&&(B(P,7),B(yt,7)),e&2){let a;w(a=C())&&(n._portalOutlet=a.first),w(a=C())&&(n._label=a.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:1,hostBindings:function(e,n){e&1&&tt("@state.done",function(s){return n.onAnimationEnd(s)}),e&2&&G("@state",n._animationState)},standalone:!0,features:[$,R],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,n){e&1&&(k(0,"div",1)(1,"div",2,0)(3,"div",3),x(4,At,0,0,"ng-template",4),_(),X(5,"div"),_()()),e&2&&(f(5),W("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[P],styles:[".mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}.cdk-high-contrast-active .mat-mdc-snackbar-surface{outline:solid 1px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mdc-snackbar-supporting-text-color, var(--mat-app-inverse-on-surface));border-radius:var(--mdc-snackbar-container-shape, var(--mat-app-corner-extra-small));background-color:var(--mdc-snackbar-container-color, var(--mat-app-inverse-surface))}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mdc-snackbar-supporting-text-font, var(--mat-app-body-medium-font));font-size:var(--mdc-snackbar-supporting-text-size, var(--mat-app-body-medium-size));font-weight:var(--mdc-snackbar-supporting-text-weight, var(--mat-app-body-medium-weight));line-height:var(--mdc-snackbar-supporting-text-line-height, var(--mat-app-body-medium-line-height))}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){color:var(--mat-snack-bar-button-color, var(--mat-app-inverse-primary));--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}"],encapsulation:2,data:{animation:[Ct.snackBarState]}})}}return i})();function Rt(){return new p}var Et=new y("mat-snack-bar-default-options",{providedIn:"root",factory:Rt}),It=(()=>{class i{get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(t,e,n,a,s,r){this._overlay=t,this._live=e,this._injector=n,this._breakpointObserver=a,this._parentSnackBar=s,this._defaultConfig=r,this._snackBarRefAtThisLevel=null,this.simpleSnackBarComponent=vt,this.snackBarContainerComponent=Dt,this.handsetCssClass="mat-mdc-snack-bar-handset"}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",n){let a=h(h({},this._defaultConfig),n);return a.data={message:t,action:e},a.announcementMessage===t&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector,a=u.create({parent:n||this._injector,providers:[{provide:p,useValue:e}]}),s=new j(this.snackBarContainerComponent,e.viewContainerRef,a),r=t.attach(s);return r.instance.snackBarConfig=e,r.instance}_attach(t,e){let n=h(h(h({},new p),this._defaultConfig),e),a=this._createOverlay(n),s=this._attachSnackBarContainer(a,n),r=new v(s,a);if(t instanceof Z){let c=new dt(t,null,{$implicit:n.data,snackBarRef:r});r.instance=s.attachTemplatePortal(c)}else{let c=this._createInjector(n,r),bt=new j(t,void 0,c),kt=s.attachComponentPortal(bt);r.instance=kt.instance}return this._breakpointObserver.observe(st.HandsetPortrait).pipe(F(a.detachments())).subscribe(c=>{a.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),n.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(r,n),this._openedSnackBarRef=r,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter(),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration))}_createOverlay(t){let e=new pt;e.direction=t.direction;let n=this._overlay.position().global(),a=t.direction==="rtl",s=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!a||t.horizontalPosition==="end"&&a,r=!s&&t.horizontalPosition!=="center";return s?n.left("0"):r?n.right("0"):n.centerHorizontally(),t.verticalPosition==="top"?n.top("0"):n.bottom("0"),e.positionStrategy=n,this._overlay.create(e)}_createInjector(t,e){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector;return u.create({parent:n||this._injector,providers:[{provide:v,useValue:e},{provide:_t,useValue:t.data}]})}static{this.\u0275fac=function(e){return new(e||i)(d(ut),d(rt),d(u),d(at),d(i,12),d(Et))}}static{this.\u0275prov=L({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var ae=(()=>{class i{static{this.\u0275fac=function(e){return new(e||i)}}static{this.\u0275mod=V({type:i})}static{this.\u0275inj=z({providers:[It],imports:[ft,ht,ct,E,vt,E]})}}return i})();export{It as a,ae as b};
