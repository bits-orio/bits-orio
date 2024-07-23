import {
  MainSharedModule,
  ObjectivesComponent,
  SettingsComponent
} from "./chunk-5VTKHZB3.js";
import {
  AppSharedModule,
  AsyncPipe,
  ButtonDirective,
  Card,
  ChangeDetectorRef,
  CommonModule,
  ContentService,
  Dialog,
  ErrorService,
  HeaderComponent,
  NgZone,
  PrimeTemplate,
  ProgressSpinner,
  Ripple,
  Router,
  RouterModule,
  RouterOutlet,
  SimplexResultType,
  Store,
  TabMenu,
  TranslatePipe,
  TranslateService,
  app_actions_exports,
  inject,
  map,
  objectives_exports,
  settings_exports,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YUG2ZZAM.js";

// src/app/routes/main/main.component.ts
var _c0 = (a0, a1) => ({ time: a0, cost: a1 });
function MainComponent_Conditional_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "i", 8);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "app.error"));
  }
}
function MainComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dialog", 1);
    \u0275\u0275template(1, MainComponent_Conditional_1_ng_template_1_Template, 5, 3, "ng-template", 2);
    \u0275\u0275elementStart(2, "div", 3)(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5)(9, "button", 6);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function MainComponent_Conditional_1_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("visible", true)("modal", true)("draggable", false)("resizable", false)("closable", false)("closeOnEscape", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 10, "app.errorDetail"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(10, 12, "reset"))("loading", ctx_r1.isResetting);
  }
}
function MainComponent_Conditional_2_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tabMenu", 15);
  }
  if (rf & 2) {
    \u0275\u0275property("model", ctx);
  }
}
function MainComponent_Conditional_2_Conditional_4_ng_template_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "app.simplexSolved", \u0275\u0275pureFunction2(4, _c0, ctx_r1.result().time, (tmp_4_0 = ctx_r1.result().cost) == null ? null : tmp_4_0.toPrecision(2))), " ");
  }
}
function MainComponent_Conditional_2_Conditional_4_ng_template_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "options.simplexResultType." + ctx_r1.result().resultType), " ");
  }
}
function MainComponent_Conditional_2_Conditional_4_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, MainComponent_Conditional_2_Conditional_4_ng_template_6_Conditional_1_Template, 3, 7, "div")(2, MainComponent_Conditional_2_Conditional_4_ng_template_6_Conditional_2_Template, 3, 3, "div");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.result().resultType === ctx_r1.SimplexResultType.Solved ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.contentSvc.version);
  }
}
function MainComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-objectives");
    \u0275\u0275elementStart(1, "p-card", 14);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275template(3, MainComponent_Conditional_2_Conditional_4_Conditional_3_Template, 1, 1, "p-tabMenu", 15);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275element(5, "router-outlet");
    \u0275\u0275template(6, MainComponent_Conditional_2_Conditional_4_ng_template_6_Template, 5, 2, "ng-template", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("header", \u0275\u0275pipeBind1(2, 2, "app.factory"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_3_0 = \u0275\u0275pipeBind1(4, 4, ctx_r1.tabItems$)) ? 3 : -1, tmp_3_0);
  }
}
function MainComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "p-progressSpinner");
    \u0275\u0275elementEnd();
  }
}
function MainComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "lab-settings", 9);
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275listener("click", function MainComponent_Conditional_2_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.contentSvc.toggleSettings());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 11)(3, "main", 12);
    \u0275\u0275template(4, MainComponent_Conditional_2_Conditional_4_Template, 7, 6)(5, MainComponent_Conditional_2_Conditional_5_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("active", ctx_r1.contentSvc.settingsActive())("hidden", ctx_r1.contentSvc.settingsXlHidden());
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.contentSvc.settingsActive());
    \u0275\u0275advance();
    \u0275\u0275classProp("settings-xl-hidden", ctx_r1.contentSvc.settingsXlHidden());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.mod() ? 4 : 5);
  }
}
var _MainComponent = class _MainComponent {
  constructor() {
    this.contentSvc = inject(ContentService);
    this.ngZone = inject(NgZone);
    this.ref = inject(ChangeDetectorRef);
    this.router = inject(Router);
    this.store = inject(Store);
    this.errorSvc = inject(ErrorService);
    this.translateSvc = inject(TranslateService);
    this.gameInfo = this.store.selectSignal(settings_exports.getGameInfo);
    this.mod = this.store.selectSignal(settings_exports.getMod);
    this.result = this.store.selectSignal(objectives_exports.getMatrixResult);
    this.isResetting = false;
    this.tabItems$ = this.contentSvc.lang$.pipe(map(() => [
      {
        label: this.translateSvc.instant("app.list"),
        icon: "fa-solid fa-list",
        routerLink: "list",
        queryParamsHandling: "preserve"
      },
      {
        label: this.translateSvc.instant("app.flow"),
        icon: "fa-solid fa-diagram-project",
        routerLink: "flow",
        queryParamsHandling: "preserve"
      },
      {
        label: this.translateSvc.instant("app.data"),
        icon: "fa-solid fa-database",
        routerLink: "data",
        queryParamsHandling: "preserve"
      }
    ]));
    this.SimplexResultType = SimplexResultType;
  }
  reset() {
    this.isResetting = true;
    setTimeout(() => {
      this.ngZone.run(() => {
        this.errorSvc.message.set(null);
        this.router.navigateByUrl(this.gameInfo().route);
        this.store.dispatch(new app_actions_exports.ResetAction());
        this.isResetting = false;
      });
    }, 10);
  }
};
_MainComponent.\u0275fac = function MainComponent_Factory(t) {
  return new (t || _MainComponent)();
};
_MainComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainComponent, selectors: [["lab-main"]], decls: 3, vars: 3, consts: [[3, "sticky", "settingsXlHidden"], [3, "visible", "modal", "draggable", "resizable", "closable", "closeOnEscape"], ["pTemplate", "header"], [1, "p-error"], [1, "mt-4"], [1, "text-end", "mt-4"], ["pButton", "", "pRipple", "", "type", "button", 3, "click", "label", "loading"], [1, "p-dialog-title", "p-error"], [1, "fa-solid", "fa-circle-exclamation", "me-2"], [3, "active", "hidden"], [1, "layout-mask", 3, "click"], [1, "layout-content"], [1, "px-sm-4", "py-4"], [1, "d-flex", "flex-column", "align-items-center", "mt-5"], ["styleClass", "mt-4", 3, "header"], [3, "model"], ["pTemplate", "footer"], [1, "d-flex", "align-items-center", "justify-content-between"]], template: function MainComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-header", 0);
    \u0275\u0275template(1, MainComponent_Conditional_1_Template, 11, 14, "p-dialog", 1)(2, MainComponent_Conditional_2_Template, 6, 7);
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275property("sticky", ctx.contentSvc.scrollTop() > 16)("settingsXlHidden", ctx.contentSvc.settingsXlHidden());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx.errorSvc.message()) ? 1 : 2, tmp_2_0);
  }
}, dependencies: [PrimeTemplate, RouterOutlet, ButtonDirective, Card, Dialog, ProgressSpinner, Ripple, TabMenu, HeaderComponent, ObjectivesComponent, SettingsComponent, AsyncPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n}\n.layout-content[_ngcontent-%COMP%] {\n  transition: margin 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  margin-left: 320px;\n  padding-top: 4rem;\n}\n@media (max-width: 1199.98px) {\n  .layout-content[_ngcontent-%COMP%] {\n    margin-left: 0;\n    padding-top: 6rem;\n  }\n}\n@media (min-width: 1200px) {\n  .layout-content.settings-xl-hidden[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n@media (max-width: 1199.98px) {\n  .layout-mask.active[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 3;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: var(--maskbg);\n  }\n}\n/*# sourceMappingURL=main.component.css.map */"], changeDetection: 0 });
var MainComponent = _MainComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainComponent, { className: "MainComponent", filePath: "src\\app\\routes\\main\\main.component.ts", lineNumber: 24 });
})();

// src/app/routes/main/main.routes.ts
var routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "list",
        loadComponent: () => import("./list.component-DLGLLZ3I.js").then((c) => c.ListComponent)
      },
      {
        path: "flow",
        loadComponent: () => import("./flow.component-GFVG2BHR.js").then((c) => c.FlowComponent)
      },
      {
        path: "data",
        loadChildren: () => import("./data.module-7RVTST2C.js").then((m) => m.DataModule)
      }
    ]
  }
];
var MainRoutingModule = RouterModule.forChild(routes);

// src/app/routes/main/main.module.ts
var _MainModule = class _MainModule {
};
_MainModule.\u0275fac = function MainModule_Factory(t) {
  return new (t || _MainModule)();
};
_MainModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MainModule });
_MainModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, AppSharedModule, MainSharedModule, MainRoutingModule] });
var MainModule = _MainModule;
export {
  MainModule
};
//# sourceMappingURL=main.module-7IWKF4NY.js.map
