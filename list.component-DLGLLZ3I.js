import {
  MainSharedModule,
  StepsComponent
} from "./chunk-5VTKHZB3.js";
import {
  AppSharedModule,
  CommonModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-YUG2ZZAM.js";

// src/app/routes/main/routes/list/list.component.ts
var _ListComponent = class _ListComponent {
};
_ListComponent.\u0275fac = function ListComponent_Factory(t) {
  return new (t || _ListComponent)();
};
_ListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function ListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-steps");
  }
}, dependencies: [CommonModule, AppSharedModule, MainSharedModule, StepsComponent], changeDetection: 0 });
var ListComponent = _ListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListComponent, { className: "ListComponent", filePath: "src\\app\\routes\\main\\routes\\list\\list.component.ts", lineNumber: 14 });
})();
export {
  ListComponent
};
//# sourceMappingURL=list.component-DLGLLZ3I.js.map
