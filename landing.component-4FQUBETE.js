import {
  AppSharedModule,
  BrowserUtility,
  ButtonDirective,
  Card,
  Checkbox,
  CommonModule,
  ContentService,
  Divider,
  Dropdown,
  Game,
  IconSmClassPipe,
  NgControlStatus,
  NgModel,
  ObjectiveUnit,
  PickerComponent,
  PrimeTemplate,
  ProgressSpinner,
  Ripple,
  Router,
  RouterLink,
  RouterService,
  Store,
  TranslatePipe,
  __async,
  gameInfo,
  gameOptions,
  inject,
  objectives_exports,
  preferences_exports,
  recipes_exports,
  settings_exports,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YUG2ZZAM.js";

// src/app/routes/landing/landing.component.ts
function LandingComponent_Conditional_0_ng_template_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i", 20);
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const info_r3 = ctx;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, info_r3.icon));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, info_r3.label));
  }
}
function LandingComponent_Conditional_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LandingComponent_Conditional_0_ng_template_7_Conditional_0_Template, 6, 7, "div", 19);
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.gameInfo[ctx_r1.data().game]) ? 0 : -1, tmp_4_0);
  }
}
function LandingComponent_Conditional_0_ng_template_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const info_r4 = ctx;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, info_r4.icon));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 5, info_r4.label));
  }
}
function LandingComponent_Conditional_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LandingComponent_Conditional_0_ng_template_8_Conditional_0_Template, 6, 7, "div", 19);
  }
  if (rf & 2) {
    let tmp_5_0;
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_5_0 = ctx_r1.gameInfo[item_r5.value]) ? 0 : -1, tmp_5_0);
  }
}
function LandingComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 22);
    \u0275\u0275listener("onChange", function LandingComponent_Conditional_0_Conditional_9_Template_p_dropdown_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setMod($event.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("filter", true)("autofocusFilter", !ctx_r1.contentSvc.isMobile())("ngModel", ctx_r1.settings().modId)("options", ctx_r1.modOptions());
  }
}
function LandingComponent_Conditional_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-divider");
  }
}
function LandingComponent_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 14)(1, "span", 23);
    \u0275\u0275element(2, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-dropdown", 25);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("onChange", function LandingComponent_Conditional_0_Conditional_21_Template_p_dropdown_onChange_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setState(ctx_r1.preferences().states[ctx_r1.data().game][$event.value]));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(4, 2, "landing.loadSavedState"))("options", ctx_r1.savedStates());
  }
}
function LandingComponent_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function LandingComponent_Conditional_0_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.router.navigateByUrl(ctx_r1.BrowserUtility.routerState));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "landing.loadLastState"));
  }
}
function LandingComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-card")(1, "div", 3)(2, "div", 4);
    \u0275\u0275element(3, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 6);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "p-dropdown", 7);
    \u0275\u0275listener("onChange", function LandingComponent_Conditional_0_Template_p_dropdown_onChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setGame($event.value));
    });
    \u0275\u0275template(7, LandingComponent_Conditional_0_ng_template_7_Template, 1, 1, "ng-template", 8)(8, LandingComponent_Conditional_0_ng_template_8_Template, 1, 1, "ng-template", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, LandingComponent_Conditional_0_Conditional_9_Template, 1, 4, "p-dropdown", 10);
    \u0275\u0275elementStart(10, "button", 11);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("click", function LandingComponent_Conditional_0_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const addItemPicker_r7 = \u0275\u0275reference(15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(addItemPicker_r7.clickOpen("item", ctx_r1.itemIds()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("click", function LandingComponent_Conditional_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const addRecipePicker_r8 = \u0275\u0275reference(18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(addRecipePicker_r8.clickOpen("recipe", ctx_r1.recipeIds()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "lab-picker", 13, 0);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("selectId", function LandingComponent_Conditional_0_Template_lab_picker_selectId_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectItem($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "lab-picker", 13, 1);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275listener("selectId", function LandingComponent_Conditional_0_Template_lab_picker_selectId_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectRecipe($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, LandingComponent_Conditional_0_Conditional_20_Template, 1, 0, "p-divider")(21, LandingComponent_Conditional_0_Conditional_21_Template, 5, 4, "span", 14)(22, LandingComponent_Conditional_0_Conditional_22_Template, 2, 3, "button", 15);
    \u0275\u0275element(23, "p-divider")(24, "button", 16);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275element(26, "button", 17);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementStart(28, "p-checkbox", 18);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275listener("onChange", function LandingComponent_Conditional_0_Template_p_checkbox_onChange_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBypassLanding($event.checked));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(5, 16, "landing.welcome"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.data().game)("options", ctx_r1.gameOptions);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.data().game === ctx_r1.Game.Factorio ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(11, 18, "landing.addItems"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(13, 20, "landing.addMachines"));
    \u0275\u0275advance(2);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(16, 22, "landing.selectAnItem"));
    \u0275\u0275advance(3);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(19, 24, "landing.selectARecipe"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.savedStates().length || ctx_r1.BrowserUtility.routerState ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.savedStates().length ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.BrowserUtility.routerState ? 22 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(25, 26, "landing.help"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(27, 28, "landing.skip"));
    \u0275\u0275advance(2);
    \u0275\u0275property("binary", true)("label", \u0275\u0275pipeBind1(29, 30, "landing.bypass"))("ngModel", ctx_r1.preferences().bypassLanding);
  }
}
function LandingComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressSpinner");
  }
}
var _LandingComponent = class _LandingComponent {
  constructor() {
    this.router = inject(Router);
    this.contentSvc = inject(ContentService);
    this.store = inject(Store);
    this.routerSvc = inject(RouterService);
    this.itemIds = this.store.selectSignal(recipes_exports.getAvailableItems);
    this.settings = this.store.selectSignal(settings_exports.getSettings);
    this.modOptions = this.store.selectSignal(settings_exports.getModOptions);
    this.data = this.store.selectSignal(settings_exports.getDataset);
    this.mod = this.store.selectSignal(settings_exports.getMod);
    this.recipeIds = this.store.selectSignal(settings_exports.getAvailableRecipes);
    this.savedStates = this.store.selectSignal(settings_exports.getSavedStates);
    this.preferences = this.store.selectSignal(preferences_exports.preferencesState);
    this.gameInfo = gameInfo;
    this.gameOptions = gameOptions;
    this.Game = Game;
    this.BrowserUtility = BrowserUtility;
  }
  selectItem(value) {
    return __async(this, null, function* () {
      yield this.router.navigate(["list"]);
      this.addItemObjective(value);
    });
  }
  selectRecipe(value) {
    return __async(this, null, function* () {
      yield this.router.navigate(["list"]);
      this.addRecipeObjective(value);
    });
  }
  setState(query) {
    if (query) {
      const queryParams = this.routerSvc.getParams(query);
      this.router.navigate(["list"], { queryParams });
    }
  }
  setGame(game) {
    this.setMod(gameInfo[game].modId);
  }
  addItemObjective(targetId) {
    this.addObjective({ targetId, unit: ObjectiveUnit.Items });
  }
  addRecipeObjective(targetId) {
    this.addObjective({ targetId, unit: ObjectiveUnit.Machines });
  }
  /** Action Dispatch Methods */
  setMod(value) {
    this.store.dispatch(new settings_exports.SetModAction(value));
  }
  addObjective(value) {
    this.store.dispatch(new objectives_exports.AddAction(value));
  }
  setBypassLanding(value) {
    this.store.dispatch(new preferences_exports.SetBypassLandingAction(value));
  }
};
_LandingComponent.\u0275fac = function LandingComponent_Factory(t) {
  return new (t || _LandingComponent)();
};
_LandingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [["addItemPicker", ""], ["addRecipePicker", ""], [1, "position-absolute", "bottom-0", "mb-3"], [1, "d-flex", "flex-column"], [1, "d-flex", "justify-content-center"], ["src", "factoriolab.webp", "alt", "FactorioLab", "height", "128", "width", "128"], [1, "mt-2", 3, "innerHTML"], ["styleClass", "my-2 w-100", 3, "onChange", "ngModel", "options"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], ["styleClass", "mb-2 w-100", 3, "filter", "autofocusFilter", "ngModel", "options"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-box", 3, "click", "label"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-industry", 1, "mt-2", 3, "click", "label"], [3, "selectId", "header"], [1, "p-inputgroup"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-clock-rotate-left", 1, "mt-2", 3, "label"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-question", "routerLink", "wizard", "queryParamsHandling", "preserve", 1, "mt-2", "p-button-help", 3, "label"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-forward", "routerLink", "list", "queryParamsHandling", "preserve", 1, "mt-2", "mb-3", "p-button-outlined", 3, "label"], [3, "onChange", "binary", "label", "ngModel"], [1, "d-flex", "align-items-center"], [1, "mx-1"], [1, "ms-3"], ["styleClass", "mb-2 w-100", 3, "onChange", "filter", "autofocusFilter", "ngModel", "options"], [1, "p-inputgroup-addon"], [1, "fa-solid", "fa-file-import"], ["styleClass", "w-100", 3, "onChange", "placeholder", "options"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-clock-rotate-left", 1, "mt-2", 3, "click", "label"]], template: function LandingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LandingComponent_Conditional_0_Template, 30, 32, "p-card")(1, LandingComponent_Conditional_1_Template, 1, 0, "p-progressSpinner");
    \u0275\u0275elementStart(2, "span", 2);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.mod() != null ? 0 : 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.contentSvc.version);
  }
}, dependencies: [CommonModule, AppSharedModule, NgControlStatus, NgModel, PrimeTemplate, RouterLink, ButtonDirective, Card, Checkbox, Divider, Dropdown, ProgressSpinner, Ripple, PickerComponent, TranslatePipe, IconSmClassPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n/*# sourceMappingURL=landing.component.css.map */"], changeDetection: 0 });
var LandingComponent = _LandingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "src\\app\\routes\\landing\\landing.component.ts", lineNumber: 25 });
})();
export {
  LandingComponent
};
//# sourceMappingURL=landing.component-4FQUBETE.js.map
