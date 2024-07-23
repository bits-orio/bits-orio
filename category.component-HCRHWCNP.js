import {
  DetailComponent
} from "./chunk-DZXG7M7Q.js";
import {
  CollectionTableComponent,
  DataSharedModule
} from "./chunk-5VPP5ID3.js";
import "./chunk-5VTKHZB3.js";
import {
  AppSharedModule,
  Breadcrumb,
  CommonModule,
  IconClassPipe,
  TranslatePipe,
  computed,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YUG2ZZAM.js";

// src/app/routes/main/routes/data/routes/category/category.component.ts
function CategoryComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "i", 2);
    \u0275\u0275pipe(3, "iconClass");
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "lab-collection-table", 3);
    \u0275\u0275elementStart(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "lab-collection-table", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.name);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind2(3, 7, ctx_r0.id(), "category"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 10, "data.items"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ids", ctx_r0.itemIds());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 12, "data.recipes"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ids", ctx_r0.recipeIds());
  }
}
function CategoryComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "data.notFound"));
  }
}
var _CategoryComponent = class _CategoryComponent extends DetailComponent {
  constructor() {
    super(...arguments);
    this.obj = computed(() => this.data().categoryEntities[this.id()]);
    this.breadcrumb = computed(() => [
      this.parent(),
      { label: this.obj()?.name }
    ]);
    this.itemIds = computed(() => {
      const data = this.data();
      const id = this.id();
      return data.itemIds.filter((i) => data.itemEntities[i].category === id);
    });
    this.recipeIds = computed(() => {
      const data = this.data();
      const id = this.id();
      return data.recipeIds.filter((r) => data.recipeEntities[r].category === id);
    });
  }
};
_CategoryComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CategoryComponent_BaseFactory;
  return function CategoryComponent_Factory(t) {
    return (\u0275CategoryComponent_BaseFactory || (\u0275CategoryComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CategoryComponent)))(t || _CategoryComponent);
  };
})();
_CategoryComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [[3, "home", "model"], [1, "p-error"], [1, "lg"], ["type", "item", 3, "ids"], ["type", "recipe", 3, "ids"]], template: function CategoryComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-breadcrumb", 0);
    \u0275\u0275template(1, CategoryComponent_Conditional_1_Template, 12, 14)(2, CategoryComponent_Conditional_2_Template, 3, 3, "div", 1);
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275property("home", ctx.home())("model", ctx.breadcrumb());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx.obj()) ? 1 : 2, tmp_2_0);
  }
}, dependencies: [CommonModule, AppSharedModule, Breadcrumb, TranslatePipe, IconClassPipe, DataSharedModule, CollectionTableComponent], changeDetection: 0 });
var CategoryComponent = _CategoryComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryComponent, { className: "CategoryComponent", filePath: "src\\app\\routes\\main\\routes\\data\\routes\\category\\category.component.ts", lineNumber: 17 });
})();
export {
  CategoryComponent
};
//# sourceMappingURL=category.component-HCRHWCNP.js.map
