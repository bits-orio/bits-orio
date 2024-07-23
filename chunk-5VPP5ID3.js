import {
  MainSharedModule
} from "./chunk-5VTKHZB3.js";
import {
  AppSharedModule,
  ButtonDirective,
  ColumnFilter,
  CommonModule,
  IconSmClassPipe,
  MultiSelect,
  NgControlStatus,
  NgModel,
  PrimeTemplate,
  Ripple,
  RouterLink,
  SortIcon,
  SortableColumn,
  Store,
  Table,
  TranslatePipe,
  TranslateService,
  computed,
  inject,
  input,
  settings_exports,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YUG2ZZAM.js";

// src/app/routes/main/routes/data/directives/paged-table.directive.ts
var _PagedTableDirective = class _PagedTableDirective {
  constructor() {
    this.translateSvc = inject(TranslateService);
    this.pTable = inject(Table, { self: true });
  }
  ngOnInit() {
    this.pTable.styleClass = "p-datatable-sm";
    this.pTable.rows = 10;
    this.pTable.rowsPerPageOptions = [10, 25, 50, 100, 250];
    this.pTable.showCurrentPageReport = true;
    this.pTable.currentPageReportTemplate = this.translateSvc.instant("data.currentPageReportTemplate");
  }
};
_PagedTableDirective.\u0275fac = function PagedTableDirective_Factory(t) {
  return new (t || _PagedTableDirective)();
};
_PagedTableDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _PagedTableDirective, selectors: [["", "labPagedTable", ""]] });
var PagedTableDirective = _PagedTableDirective;

// src/app/routes/main/routes/data/components/collection-table/collection-table.component.ts
var _c0 = () => ["category.id"];
function CollectionTableComponent_ng_template_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 5)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p-sortIcon", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "data.category"));
  }
}
function CollectionTableComponent_ng_template_1_Conditional_7_Conditional_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-multiSelect", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onChange", function CollectionTableComponent_ng_template_1_Conditional_7_Conditional_3_ng_template_2_Template_p_multiSelect_onChange_0_listener($event) {
      const filter_r2 = \u0275\u0275restoreView(_r1).filterCallback;
      return \u0275\u0275resetView(filter_r2($event.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const value_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngModel", value_r3)("options", ctx_r3.options().categories)("maxSelectedLabels", 1)("selectedItemsLabel", \u0275\u0275pipeBind1(1, 5, "data.selectedLabel"))("placeholder", \u0275\u0275pipeBind1(2, 7, "data.any"));
  }
}
function CollectionTableComponent_ng_template_1_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th")(1, "p-columnFilter", 8);
    \u0275\u0275template(2, CollectionTableComponent_ng_template_1_Conditional_7_Conditional_3_ng_template_2_Template, 3, 9, "ng-template", 9);
    \u0275\u0275elementEnd()();
  }
}
function CollectionTableComponent_ng_template_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275element(2, "p-columnFilter", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, CollectionTableComponent_ng_template_1_Conditional_7_Conditional_3_Template, 3, 0, "th");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.type() !== "category" ? 3 : -1);
  }
}
function CollectionTableComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 3)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "p-sortIcon", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, CollectionTableComponent_ng_template_1_Conditional_6_Template, 5, 3, "th", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, CollectionTableComponent_ng_template_1_Conditional_7_Template, 4, 1, "tr");
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "data.name"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.type() !== "category" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.value().length > 10 ? 7 : -1);
  }
}
function CollectionTableComponent_ng_template_2_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275element(1, "button", 12);
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("routerLink", "/data/categories/" + obj_r5.category.id);
    \u0275\u0275advance();
    \u0275\u0275property("label", obj_r5.category.name)("icon", \u0275\u0275pipeBind2(2, 3, obj_r5.category.id, "category"));
  }
}
function CollectionTableComponent_ng_template_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, CollectionTableComponent_ng_template_2_Conditional_5_Conditional_1_Template, 3, 6, "a", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(obj_r5.category ? 1 : -1);
  }
}
function CollectionTableComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 11);
    \u0275\u0275element(3, "button", 12);
    \u0275\u0275pipe(4, "iconSmClass");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, CollectionTableComponent_ng_template_2_Conditional_5_Template, 2, 1, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r5 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", ctx_r3.route() + obj_r5.id);
    \u0275\u0275advance();
    \u0275\u0275property("label", obj_r5.name)("icon", \u0275\u0275pipeBind2(4, 4, obj_r5.id, ctx_r3.type()));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.type() !== "category" ? 5 : -1);
  }
}
var _CollectionTableComponent = class _CollectionTableComponent {
  constructor() {
    this.store = inject(Store);
    this.ids = input.required();
    this.type = input.required();
    this.useRelativePath = input(false);
    this.options = this.store.selectSignal(settings_exports.getOptions);
    this.data = this.store.selectSignal(settings_exports.getDataset);
    this.route = computed(() => {
      const type = this.type();
      const useRelativePath = this.useRelativePath();
      if (useRelativePath)
        return "";
      switch (type) {
        case "category":
          return "/data/categories/";
        case "item":
          return "/data/items/";
        case "recipe":
          return "/data/recipes/";
      }
    });
    this.value = computed(() => {
      const ids = this.ids();
      const type = this.type();
      const data = this.data();
      let entities;
      switch (type) {
        case "category":
          entities = data.categoryEntities;
          break;
        case "item":
          entities = data.itemEntities;
          break;
        case "recipe":
          entities = data.recipeEntities;
      }
      return ids.filter((i) => entities[i]).map((i) => {
        const entity = entities[i];
        const obj = {
          id: entity.id,
          name: entity.name
        };
        if (type !== "category") {
          obj.category = data.categoryEntities[entity.category];
        }
        return obj;
      });
    });
  }
};
_CollectionTableComponent.\u0275fac = function CollectionTableComponent_Factory(t) {
  return new (t || _CollectionTableComponent)();
};
_CollectionTableComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CollectionTableComponent, selectors: [["lab-collection-table"]], inputs: { ids: [1, "ids"], type: [1, "type"], useRelativePath: [1, "useRelativePath"] }, decls: 3, vars: 4, consts: [["labPagedTable", "", 3, "value", "paginator", "globalFilterFields"], ["pTemplate", "header"], ["pTemplate", "body"], ["pSortableColumn", "name"], ["field", "name"], ["pSortableColumn", "category.name"], ["field", "category.name"], ["type", "text", "field", "name", "matchMode", "contains"], ["field", "category.id", "matchMode", "in"], ["pTemplate", "filter"], ["appendTo", "body", 3, "onChange", "ngModel", "options", "maxSelectedLabels", "selectedItemsLabel", "placeholder"], ["queryParamsHandling", "preserve", 3, "routerLink"], ["pButton", "", "pRipple", "", "type", "button", 1, "p-button-link", 3, "label", "icon"]], template: function CollectionTableComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-table", 0);
    \u0275\u0275template(1, CollectionTableComponent_ng_template_1_Template, 8, 5, "ng-template", 1)(2, CollectionTableComponent_ng_template_2_Template, 6, 7, "ng-template", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("value", ctx.value())("paginator", ctx.value().length > 10)("globalFilterFields", \u0275\u0275pureFunction0(3, _c0));
  }
}, dependencies: [NgControlStatus, NgModel, PrimeTemplate, RouterLink, ButtonDirective, MultiSelect, Ripple, Table, SortableColumn, SortIcon, ColumnFilter, PagedTableDirective, TranslatePipe, IconSmClassPipe], styles: ["\n\nth[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=collection-table.component.css.map */"], changeDetection: 0 });
var CollectionTableComponent = _CollectionTableComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CollectionTableComponent, { className: "CollectionTableComponent", filePath: "src\\app\\routes\\main\\routes\\data\\components\\collection-table\\collection-table.component.ts", lineNumber: 22 });
})();

// src/app/routes/main/routes/data/data-shared.module.ts
var _DataSharedModule = class _DataSharedModule {
};
_DataSharedModule.\u0275fac = function DataSharedModule_Factory(t) {
  return new (t || _DataSharedModule)();
};
_DataSharedModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DataSharedModule });
_DataSharedModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, AppSharedModule, MainSharedModule] });
var DataSharedModule = _DataSharedModule;

export {
  CollectionTableComponent,
  DataSharedModule
};
//# sourceMappingURL=chunk-5VPP5ID3.js.map
