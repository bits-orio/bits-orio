import {
  CollectionTableComponent,
  DataSharedModule
} from "./chunk-5VPP5ID3.js";
import "./chunk-5VTKHZB3.js";
import {
  ActivatedRoute,
  AppSharedModule,
  Breadcrumb,
  CommonModule,
  Store,
  TranslateService,
  computed,
  inject,
  input,
  recipes_exports,
  settings_exports,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-YUG2ZZAM.js";

// src/app/routes/main/routes/data/routes/collection/collection.component.ts
var _CollectionComponent = class _CollectionComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.translateSvc = inject(TranslateService);
    this.store = inject(Store);
    this.home = this.store.selectSignal(settings_exports.getModMenuItem);
    this.data = this.store.selectSignal(recipes_exports.getAdjustedDataset);
    this.label = input.required();
    this.type = input.required();
    this.key = input.required();
    this.breadcrumb = computed(() => [
      {
        label: this.translateSvc.instant(this.label())
      }
    ]);
    this.ids = computed(() => this.data()[this.key()]);
  }
};
_CollectionComponent.\u0275fac = function CollectionComponent_Factory(t) {
  return new (t || _CollectionComponent)();
};
_CollectionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionComponent, selectors: [["ng-component"]], inputs: { label: [1, "label"], type: [1, "type"], key: [1, "key"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 5, consts: [[3, "home", "model"], [3, "ids", "type", "useRelativePath"]], template: function CollectionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-breadcrumb", 0)(1, "lab-collection-table", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("home", ctx.home())("model", ctx.breadcrumb());
    \u0275\u0275advance();
    \u0275\u0275property("ids", ctx.ids())("type", ctx.type())("useRelativePath", true);
  }
}, dependencies: [CommonModule, AppSharedModule, Breadcrumb, DataSharedModule, CollectionTableComponent], changeDetection: 0 });
var CollectionComponent = _CollectionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionComponent, { className: "CollectionComponent", filePath: "src\\app\\routes\\main\\routes\\data\\routes\\collection\\collection.component.ts", lineNumber: 26 });
})();
export {
  CollectionComponent
};
//# sourceMappingURL=collection.component-BDNTAGHG.js.map
