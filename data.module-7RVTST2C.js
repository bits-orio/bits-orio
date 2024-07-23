import {
  AppSharedModule,
  Breadcrumb,
  ButtonDirective,
  CommonModule,
  KeyValuePipe,
  PrimeTemplate,
  Ripple,
  RouterLink,
  RouterModule,
  Store,
  Table,
  TranslatePipe,
  inject,
  settings_exports,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YUG2ZZAM.js";

// src/app/routes/main/routes/data/data.component.ts
function DataComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.collection"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "data.count"));
  }
}
function DataComponent_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "a", 5);
    \u0275\u0275element(3, "button", 6);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const collection_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", collection_r1.routerLink);
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(4, 3, collection_r1.label));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx);
  }
}
function DataComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DataComponent_ng_template_3_Conditional_0_Template, 7, 5, "tr");
  }
  if (rf & 2) {
    let tmp_2_0;
    const collection_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.data()[collection_r1.id].length) ? 0 : -1, tmp_2_0);
  }
}
function DataComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "data.versions"));
  }
}
function DataComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const version_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(version_r3.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(version_r3.value);
  }
}
var _DataComponent = class _DataComponent {
  constructor() {
    this.store = inject(Store);
    this.home = this.store.selectSignal(settings_exports.getModMenuItem);
    this.data = this.store.selectSignal(settings_exports.getDataset);
    this.collections = [
      {
        label: "data.categories",
        routerLink: "categories",
        id: "categoryIds"
      },
      {
        label: "data.items",
        routerLink: "items",
        id: "itemIds"
      },
      {
        label: "data.beacons",
        routerLink: "beacons",
        id: "beaconIds"
      },
      {
        label: "data.belts",
        routerLink: "belts",
        id: "beltIds"
      },
      {
        label: "data.cargoWagons",
        routerLink: "cargo-wagons",
        id: "cargoWagonIds"
      },
      {
        label: "data.fluidWagons",
        routerLink: "fluid-wagons",
        id: "fluidWagonIds"
      },
      {
        label: "data.fuels",
        routerLink: "fuels",
        id: "fuelIds"
      },
      {
        label: "data.machines",
        routerLink: "machines",
        id: "machineIds"
      },
      {
        label: "data.modules",
        routerLink: "modules",
        id: "moduleIds"
      },
      {
        label: "data.pipes",
        routerLink: "pipes",
        id: "pipeIds"
      },
      {
        label: "data.technologies",
        routerLink: "technologies",
        id: "technologyIds"
      },
      {
        label: "data.recipes",
        routerLink: "recipes",
        id: "recipeIds"
      }
    ];
  }
};
_DataComponent.\u0275fac = function DataComponent_Factory(t) {
  return new (t || _DataComponent)();
};
_DataComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DataComponent, selectors: [["ng-component"]], decls: 8, vars: 5, consts: [[3, "home"], [3, "value"], ["pTemplate", "header"], ["pTemplate", "body"], ["styleClass", "mt-5", 3, "value"], ["queryParamsHandling", "preserve", 3, "routerLink"], ["pButton", "", "pRipple", "", "type", "button", 1, "p-button-link", 3, "label"], ["colspan", "2"]], template: function DataComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-breadcrumb", 0);
    \u0275\u0275elementStart(1, "p-table", 1);
    \u0275\u0275template(2, DataComponent_ng_template_2_Template, 7, 6, "ng-template", 2)(3, DataComponent_ng_template_3_Template, 1, 1, "ng-template", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-table", 4);
    \u0275\u0275pipe(5, "keyvalue");
    \u0275\u0275template(6, DataComponent_ng_template_6_Template, 4, 3, "ng-template", 2)(7, DataComponent_ng_template_7_Template, 5, 2, "ng-template", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("home", ctx.home());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx.collections);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(5, 3, ctx.data().version));
  }
}, dependencies: [PrimeTemplate, Breadcrumb, RouterLink, ButtonDirective, Ripple, Table, KeyValuePipe, TranslatePipe], styles: ['\n\nli[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nli[_ngcontent-%COMP%]::before {\n  content: "";\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  background: var(--text-color);\n  margin-right: 0.5rem;\n}\nli[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data.component.css.map */'], changeDetection: 0 });
var DataComponent = _DataComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DataComponent, { className: "DataComponent", filePath: "src\\app\\routes\\main\\routes\\data\\data.component.ts", lineNumber: 12 });
})();

// src/app/routes/main/routes/data/data.routes.ts
var routes = [
  {
    path: "categories/:id",
    loadComponent: () => import("./category.component-HCRHWCNP.js").then((c) => c.CategoryComponent),
    data: {
      collectionLabel: "data.categories"
    }
  },
  {
    path: "categories",
    loadComponent: () => import("./collection.component-BDNTAGHG.js").then((c) => c.CollectionComponent),
    data: {
      label: "data.categories",
      type: "category",
      key: "categoryIds"
    }
  },
  {
    path: "items/:id",
    loadComponent: () => import("./item.component-RMENFVO6.js").then((c) => c.ItemComponent),
    data: {
      collectionLabel: "data.items"
    }
  },
  {
    path: "items",
    loadComponent: () => import("./collection.component-BDNTAGHG.js").then((c) => c.CollectionComponent),
    data: {
      label: "data.items",
      type: "item",
      key: "itemIds"
    }
  },
  {
    path: "beacons/:id",
    loadComponent: () => import("./item.component-RMENFVO6.js").then((c) => c.ItemComponent),
    data: {
      collectionLabel: "data.beacons"
    }
  },
  {
    path: "beacons",
    loadComponent: () => import("./collection.component-BDNTAGHG.js").then((c) => c.CollectionComponent),
    data: {
      label: "data.beacons",
      type: "item",
      key: "beaconIds"
    }
  },
  {
    path: "belts/:id",
    loadComponent: () => import("./item.component-RMENFVO6.js").then((c) => c.ItemComponent),
    data: {
      collectionLabel: "data.belts"
    }
  },
  {
    path: "belts",
    loadComponent: () => import("./collection.component-BDNTAGHG.js").then((c) => c.CollectionComponent),
    data: {
      label: "data.belts",
      type: "item",
      key: "beltIds"
    }
  },
  {
    path: "cargo-wagons/:id",
    loadComponent: () => import("./item.component-RMENFVO6.js").then((c) => c.ItemComponent),
    data: {
      collectionLabel: "data.cargoWagons"
    }
  },
  {
    path: "cargo-wagons",
    loadComponent: () => import("./collection.component-BDNTAGHG.js").then((c) => c.CollectionComponent),
    data: {
      label: "data.cargoWagons",
      type: "item",
      key: "cargoWagonIds"
    }
  },
  {
    path: "fluid-wagons/:id",
    loadComponent: () => import("./item.component-RMENFVO6.js").then((c) => c.ItemComponent),
    data: {
      collectionLabel: "data.fluidWagons"
    }
  },
  {
    path: "fluid-wagons",
    loadComponent: () => import("./collection.component-BDNTAGHG.js").then((c) => c.CollectionComponent),
    data: {
      label: "data.fluidWagons",
      type: "item",
      key: "fluidWagonIds"
    }
  },
  {
    path: "fuels/:id",
    loadComponent: () => import("./item.component-RMENFVO6.js").then((c) => c.ItemComponent),
    data: {
      collectionLabel: "data.fuels"
    }
  },
  {
    path: "fuels",
    loadComponent: () => import("./collection.component-BDNTAGHG.js").then((c) => c.CollectionComponent),
    data: {
      label: "data.fuels",
      type: "item",
      key: "fuelIds"
    }
  },
  {
    path: "machines/:id",
    loadComponent: () => import("./item.component-RMENFVO6.js").then((c) => c.ItemComponent),
    data: {
      collectionLabel: "data.machines"
    }
  },
  {
    path: "machines",
    loadComponent: () => import("./collection.component-BDNTAGHG.js").then((c) => c.CollectionComponent),
    data: {
      label: "data.machines",
      type: "item",
      key: "machineIds"
    }
  },
  {
    path: "modules/:id",
    loadComponent: () => import("./item.component-RMENFVO6.js").then((c) => c.ItemComponent),
    data: {
      collectionLabel: "data.modules"
    }
  },
  {
    path: "modules",
    loadComponent: () => import("./collection.component-BDNTAGHG.js").then((c) => c.CollectionComponent),
    data: {
      label: "data.modules",
      type: "item",
      key: "moduleIds"
    }
  },
  {
    path: "pipes/:id",
    loadComponent: () => import("./item.component-RMENFVO6.js").then((c) => c.ItemComponent),
    data: {
      collectionLabel: "data.pipes"
    }
  },
  {
    path: "pipes",
    loadComponent: () => import("./collection.component-BDNTAGHG.js").then((c) => c.CollectionComponent),
    data: {
      label: "data.pipes",
      type: "item",
      key: "pipeIds"
    }
  },
  {
    path: "technologies/:id",
    loadComponent: () => import("./item.component-RMENFVO6.js").then((c) => c.ItemComponent),
    data: {
      collectionLabel: "data.technologies"
    }
  },
  {
    path: "technologies",
    loadComponent: () => import("./collection.component-BDNTAGHG.js").then((c) => c.CollectionComponent),
    data: {
      label: "data.technologies",
      type: "item",
      key: "technologyIds"
    }
  },
  {
    path: "recipes/:id",
    loadComponent: () => import("./recipe.component-HR6NYSJD.js").then((c) => c.RecipeComponent),
    data: {
      collectionLabel: "data.recipes"
    }
  },
  {
    path: "recipes",
    loadComponent: () => import("./collection.component-BDNTAGHG.js").then((c) => c.CollectionComponent),
    data: {
      label: "data.recipes",
      type: "recipe",
      key: "recipeIds"
    }
  },
  {
    path: "",
    pathMatch: "full",
    component: DataComponent
  }
];
var DataRoutingModule = RouterModule.forChild(routes);

// src/app/routes/main/routes/data/data.module.ts
var DataRoutingModule2 = RouterModule.forChild(routes);
var _DataModule = class _DataModule {
};
_DataModule.\u0275fac = function DataModule_Factory(t) {
  return new (t || _DataModule)();
};
_DataModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DataModule });
_DataModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, AppSharedModule, DataRoutingModule2] });
var DataModule = _DataModule;
export {
  DataModule,
  DataRoutingModule2 as DataRoutingModule
};
//# sourceMappingURL=data.module-7RVTST2C.js.map
