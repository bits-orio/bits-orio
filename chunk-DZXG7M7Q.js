import {
  ActivatedRoute,
  Store,
  TranslateService,
  computed,
  inject,
  input,
  recipes_exports,
  settings_exports,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent
} from "./chunk-YUG2ZZAM.js";

// src/app/routes/main/routes/data/models/detail.component.ts
var _DetailComponent = class _DetailComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.translateSvc = inject(TranslateService);
    this.store = inject(Store);
    this.home = this.store.selectSignal(settings_exports.getModMenuItem);
    this.data = this.store.selectSignal(recipes_exports.getAdjustedDataset);
    this.id = input.required();
    this.collectionLabel = input.required();
    this.parent = computed(() => {
      return {
        label: this.translateSvc.instant(this.collectionLabel()),
        routerLink: "..",
        queryParamsHandling: "preserve"
      };
    });
  }
};
_DetailComponent.\u0275fac = function DetailComponent_Factory(t) {
  return new (t || _DetailComponent)();
};
_DetailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetailComponent, selectors: [["lab-detail"]], inputs: { id: [1, "id"], collectionLabel: [1, "collectionLabel"] }, decls: 0, vars: 0, template: function DetailComponent_Template(rf, ctx) {
}, encapsulation: 2 });
var DetailComponent = _DetailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetailComponent, { className: "DetailComponent", filePath: "src\\app\\routes\\main\\routes\\data\\models\\detail.component.ts", lineNumber: 10 });
})();

export {
  DetailComponent
};
//# sourceMappingURL=chunk-DZXG7M7Q.js.map
