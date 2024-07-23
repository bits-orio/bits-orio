import {
  DetailComponent
} from "./chunk-DZXG7M7Q.js";
import {
  AppSharedModule,
  Breadcrumb,
  ButtonDirective,
  Checkbox,
  CommonModule,
  Game,
  IconClassPipe,
  IconSmClassPipe,
  InputNumberComponent,
  NgControlStatus,
  NgModel,
  Ripple,
  RoundPipe,
  RouterLink,
  TranslatePipe,
  UsagePipe,
  coalesce,
  computed,
  recipes_exports,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YUG2ZZAM.js";

// src/app/routes/main/routes/data/routes/recipe/recipe.component.ts
function RecipeComponent_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "a", 9);
    \u0275\u0275element(6, "button", 10);
    \u0275\u0275pipe(7, "iconSmClass");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const obj_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "data.category"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/data/categories/" + obj_r2.category);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx.name)("icon", \u0275\u0275pipeBind2(7, 6, obj_r2.category, "category"));
  }
}
function RecipeComponent_Conditional_1_Conditional_16_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "a", 9);
    \u0275\u0275element(2, "button", 10);
    \u0275\u0275pipe(3, "iconSmClass");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const obj_r2 = \u0275\u0275nextContext(2);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/data/items/" + i_r3);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r3.data().itemEntities[i_r3].name)("icon", \u0275\u0275pipeBind1(3, 4, i_r3));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(obj_r2.in[i_r3]);
  }
}
function RecipeComponent_Conditional_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275repeaterCreate(5, RecipeComponent_Conditional_1_Conditional_16_For_6_Template, 6, 6, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "data.ingredients"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.info().ingredientIds);
  }
}
function RecipeComponent_Conditional_1_Conditional_17_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "a", 9);
    \u0275\u0275element(2, "button", 10);
    \u0275\u0275pipe(3, "iconSmClass");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r5 = ctx.$implicit;
    const obj_r2 = \u0275\u0275nextContext(2);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/data/items/" + i_r5);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r3.data().itemEntities[i_r5].name)("icon", \u0275\u0275pipeBind1(3, 4, i_r5));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(obj_r2.catalyst == null ? null : obj_r2.catalyst[i_r5]);
  }
}
function RecipeComponent_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275repeaterCreate(5, RecipeComponent_Conditional_1_Conditional_17_For_6_Template, 6, 6, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "data.catalysts"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.info().catalystIds);
  }
}
function RecipeComponent_Conditional_1_Conditional_18_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "a", 9);
    \u0275\u0275element(2, "button", 10);
    \u0275\u0275pipe(3, "iconSmClass");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "round");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r6 = ctx.$implicit;
    const obj_r2 = \u0275\u0275nextContext(2);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/data/items/" + i_r6);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r3.data().itemEntities[i_r6].name)("icon", \u0275\u0275pipeBind1(3, 4, i_r6));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, obj_r2.out[i_r6]));
  }
}
function RecipeComponent_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275repeaterCreate(5, RecipeComponent_Conditional_1_Conditional_18_For_6_Template, 7, 8, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "data.products"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.info().productIds);
  }
}
function RecipeComponent_Conditional_1_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "a", 9);
    \u0275\u0275element(2, "button", 10);
    \u0275\u0275pipe(3, "iconSmClass");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/data/machines/" + i_r7);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r3.data().itemEntities[i_r7].name)("icon", \u0275\u0275pipeBind1(3, 3, i_r7));
  }
}
function RecipeComponent_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "a", 9);
    \u0275\u0275element(6, "button", 10);
    \u0275\u0275pipe(7, "iconSmClass");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const obj_r2 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "data.unlockedBy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/data/technologies/" + obj_r2.unlockedBy);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r3.data().itemEntities[obj_r2.unlockedBy].name)("icon", \u0275\u0275pipeBind2(7, 6, obj_r2.unlockedBy, "recipe"));
  }
}
function RecipeComponent_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275element(5, "p-checkbox", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "data.mining"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", true)("binary", true)("disabled", true);
  }
}
function RecipeComponent_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275element(5, "p-checkbox", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "data.technology"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", true)("binary", true)("disabled", true);
  }
}
function RecipeComponent_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "a", 9);
    \u0275\u0275element(6, "button", 10);
    \u0275\u0275pipe(7, "iconSmClass");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const obj_r2 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "data.rocketPart"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/data/items/" + obj_r2.part);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r3.data().itemEntities[obj_r2.part].name)("icon", \u0275\u0275pipeBind1(7, 6, obj_r2.part));
  }
}
function RecipeComponent_Conditional_1_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "usage");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const obj_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.energyConsumption"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, obj_r2.usage));
  }
}
function RecipeComponent_Conditional_1_Conditional_39_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275element(1, "button", 10);
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const id_r9 = ctx;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("routerLink", "/data/machines/" + id_r9);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r3.data().itemEntities[id_r9].name)("icon", \u0275\u0275pipeBind1(2, 3, id_r9));
  }
}
function RecipeComponent_Conditional_1_Conditional_39_Conditional_18_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
    \u0275\u0275pipe(1, "iconSmClass");
  }
  if (rf & 2) {
    const moduleId_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 2, moduleId_r10));
  }
}
function RecipeComponent_Conditional_1_Conditional_39_Conditional_18_For_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275element(1, "button", 10);
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const moduleId_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275property("routerLink", "/data/modules/" + moduleId_r10);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r3.data().itemEntities[moduleId_r10].name)("icon", \u0275\u0275pipeBind1(2, 3, moduleId_r10));
  }
}
function RecipeComponent_Conditional_1_Conditional_39_Conditional_18_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, RecipeComponent_Conditional_1_Conditional_39_Conditional_18_For_6_Conditional_1_Template, 2, 4, "i", 14)(2, RecipeComponent_Conditional_1_Conditional_39_Conditional_18_For_6_Conditional_2_Template, 3, 5, "a", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const moduleId_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(moduleId_r10 === "module" ? 1 : 2);
  }
}
function RecipeComponent_Conditional_1_Conditional_39_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275repeaterCreate(5, RecipeComponent_Conditional_1_Conditional_39_Conditional_18_For_6_Template, 3, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const recipeSettings_r11 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "data.modules"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(recipeSettings_r11.moduleIds);
  }
}
function RecipeComponent_Conditional_1_Conditional_39_Conditional_19_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275element(1, "button", 10);
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const beacon_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275property("routerLink", "/data/beacons/" + beacon_r12.id);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r3.data().itemEntities[beacon_r12.id].name)("icon", \u0275\u0275pipeBind1(2, 3, beacon_r12.id));
  }
}
function RecipeComponent_Conditional_1_Conditional_39_Conditional_19_For_6_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
    \u0275\u0275pipe(1, "iconSmClass");
  }
  if (rf & 2) {
    const moduleId_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 2, moduleId_r13));
  }
}
function RecipeComponent_Conditional_1_Conditional_39_Conditional_19_For_6_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275element(1, "button", 10);
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const moduleId_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275property("routerLink", "/data/modules/" + moduleId_r13);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r3.data().itemEntities[moduleId_r13].name)("icon", \u0275\u0275pipeBind1(2, 3, moduleId_r13));
  }
}
function RecipeComponent_Conditional_1_Conditional_39_Conditional_19_For_6_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, RecipeComponent_Conditional_1_Conditional_39_Conditional_19_For_6_For_5_Conditional_1_Template, 2, 4, "i", 14)(2, RecipeComponent_Conditional_1_Conditional_39_Conditional_19_For_6_For_5_Conditional_2_Template, 3, 5, "a", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const moduleId_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(moduleId_r13 === "module" ? 1 : 2);
  }
}
function RecipeComponent_Conditional_1_Conditional_39_Conditional_19_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, RecipeComponent_Conditional_1_Conditional_39_Conditional_19_For_6_Conditional_1_Template, 3, 5, "a", 9);
    \u0275\u0275elementStart(2, "span", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(4, RecipeComponent_Conditional_1_Conditional_39_Conditional_19_For_6_For_5_Template, 3, 1, "div", null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const beacon_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(beacon_r12.id ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(beacon_r12.count);
    \u0275\u0275advance();
    \u0275\u0275repeater(beacon_r12.moduleIds);
  }
}
function RecipeComponent_Conditional_1_Conditional_39_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275repeaterCreate(5, RecipeComponent_Conditional_1_Conditional_39_Conditional_19_For_6_Template, 6, 2, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const recipeSettings_r11 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "data.beacons"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(recipeSettings_r11.beacons);
  }
}
function RecipeComponent_Conditional_1_Conditional_39_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const recipeSettings_r11 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.overclock"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", recipeSettings_r11.overclock, "%");
  }
}
function RecipeComponent_Conditional_1_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "p-checkbox", 13);
    \u0275\u0275listener("onChange", function RecipeComponent_Conditional_1_Conditional_39_Template_p_checkbox_onChange_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleRecipe());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "tr")(7, "th");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "p-checkbox", 13);
    \u0275\u0275listener("onChange", function RecipeComponent_Conditional_1_Conditional_39_Template_p_checkbox_onChange_11_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setRecipeChecked(ctx_r3.id(), $event.checked));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tr")(13, "th");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275template(17, RecipeComponent_Conditional_1_Conditional_39_Conditional_17_Template, 3, 5, "a", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, RecipeComponent_Conditional_1_Conditional_39_Conditional_18_Template, 7, 3, "tr")(19, RecipeComponent_Conditional_1_Conditional_39_Conditional_19_Template, 7, 3, "tr")(20, RecipeComponent_Conditional_1_Conditional_39_Conditional_20_Template, 7, 4, "tr");
  }
  if (rf & 2) {
    let tmp_11_0;
    const recipeSettings_r11 = ctx;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 11, "data.excluded"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", recipeSettings_r11.excluded)("binary", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 13, "data.checked"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", recipeSettings_r11.checked)("binary", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 15, "data.machine"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_11_0 = recipeSettings_r11.machineId) ? 17 : -1, tmp_11_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((recipeSettings_r11.moduleIds == null ? null : recipeSettings_r11.moduleIds.length) ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.data().game === ctx_r3.Game.Factorio ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.data().game === ctx_r3.Game.Satisfactory ? 20 : -1);
  }
}
function RecipeComponent_Conditional_1_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "lab-input-number", 15);
    \u0275\u0275listener("setValue", function RecipeComponent_Conditional_1_Conditional_40_Template_lab_input_number_setValue_5_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setRecipeCost(ctx_r3.id(), $event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.cost"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx);
  }
}
function RecipeComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "table", 1)(1, "tr")(2, "th", 3)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "tr")(6, "td", 3);
    \u0275\u0275element(7, "i", 4);
    \u0275\u0275pipe(8, "iconClass");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, RecipeComponent_Conditional_1_Conditional_9_Template, 8, 9, "tr");
    \u0275\u0275elementStart(10, "tr")(11, "th");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, RecipeComponent_Conditional_1_Conditional_16_Template, 7, 3, "tr")(17, RecipeComponent_Conditional_1_Conditional_17_Template, 7, 3, "tr")(18, RecipeComponent_Conditional_1_Conditional_18_Template, 7, 3, "tr");
    \u0275\u0275elementStart(19, "tr")(20, "th");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td");
    \u0275\u0275repeaterCreate(24, RecipeComponent_Conditional_1_For_25_Template, 4, 5, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, RecipeComponent_Conditional_1_Conditional_26_Template, 8, 9, "tr")(27, RecipeComponent_Conditional_1_Conditional_27_Template, 6, 6, "tr")(28, RecipeComponent_Conditional_1_Conditional_28_Template, 6, 6, "tr")(29, RecipeComponent_Conditional_1_Conditional_29_Template, 8, 8, "tr")(30, RecipeComponent_Conditional_1_Conditional_30_Template, 7, 6, "tr");
    \u0275\u0275elementStart(31, "tr")(32, "th", 5)(33, "div", 6);
    \u0275\u0275element(34, "button", 7);
    \u0275\u0275elementStart(35, "h3");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 8);
    \u0275\u0275listener("click", function RecipeComponent_Conditional_1_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.resetRecipe(ctx_r3.id()));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(39, RecipeComponent_Conditional_1_Conditional_39_Template, 21, 17)(40, RecipeComponent_Conditional_1_Conditional_40_Template, 6, 4, "tr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_19_0;
    let tmp_20_0;
    const obj_r2 = ctx;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(obj_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275pipeBind2(8, 20, ctx_r3.id(), "recipe"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_4_0 = ctx_r3.info().category) ? 9 : -1, tmp_4_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 23, "data.time"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(obj_r2.time);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.info().ingredientIds.length ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.info().catalystIds.length ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.info().productIds.length ? 18 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 25, "data.producers"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(obj_r2.producers);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(obj_r2.unlockedBy ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(obj_r2.isMining ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(obj_r2.isTechnology ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(obj_r2.part ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(obj_r2.usage ? 30 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 27, "data.recipeSettings"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("invisible", !ctx_r3.recipesStateRaw()[ctx_r3.id()]);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_19_0 = ctx_r3.recipeSettings()) ? 39 : -1, tmp_19_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_20_0 = (tmp_20_0 = ctx_r3.recipeR()) == null ? null : tmp_20_0.cost) ? 40 : -1, tmp_20_0);
  }
}
function RecipeComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "data.notFound"));
  }
}
var _RecipeComponent = class _RecipeComponent extends DetailComponent {
  constructor() {
    super(...arguments);
    this.recipesStateRaw = this.store.selectSignal(recipes_exports.recipesState);
    this.recipesState = this.store.selectSignal(recipes_exports.getRecipesState);
    this.obj = computed(() => this.data().recipeEntities[this.id()]);
    this.breadcrumb = computed(() => [
      this.parent(),
      { label: this.obj()?.name }
    ]);
    this.info = computed(() => {
      const id = this.id();
      const data = this.data();
      const recipe = data.recipeEntities[id];
      return {
        category: data.categoryEntities[coalesce(recipe?.category, "")],
        ingredientIds: Object.keys(recipe?.in ?? {}),
        catalystIds: Object.keys(recipe?.catalyst ?? {}),
        productIds: Object.keys(recipe?.out ?? {})
      };
    });
    this.recipeSettings = computed(() => this.recipesState()[this.id()]);
    this.recipeR = computed(() => this.data().adjustedRecipe[this.id()]);
    this.Game = Game;
  }
  toggleRecipe() {
    const recipeSettings = this.recipeSettings();
    if (recipeSettings == null)
      return;
    const id = this.id();
    const value = !recipeSettings.excluded;
    const def = coalesce(this.data().defaults?.excludedRecipeIds, []).some((i) => i === id);
    this.setRecipeExcluded(id, value, def);
  }
  /** Action dispatch methods */
  setRecipeExcluded(id, value, def) {
    this.store.dispatch(new recipes_exports.SetExcludedAction({ id, value, def }));
  }
  setRecipeChecked(id, value) {
    this.store.dispatch(new recipes_exports.SetCheckedAction({ id, value }));
  }
  setRecipeCost(id, value) {
    this.store.dispatch(new recipes_exports.SetCostAction({ id, value }));
  }
  resetRecipe(value) {
    this.store.dispatch(new recipes_exports.ResetRecipeAction(value));
  }
};
_RecipeComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275RecipeComponent_BaseFactory;
  return function RecipeComponent_Factory(t) {
    return (\u0275RecipeComponent_BaseFactory || (\u0275RecipeComponent_BaseFactory = \u0275\u0275getInheritedFactory(_RecipeComponent)))(t || _RecipeComponent);
  };
})();
_RecipeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecipeComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [[3, "home", "model"], [1, "properties", "mb-4"], [1, "my-5", "p-error"], ["colspan", "2", 1, "text-center"], [1, "lg"], ["colspan", "2"], [1, "d-flex", "align-items-center", "justify-content-between"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-rotate-right", 1, "invisible", "p-button-rounded"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-rotate-left", 1, "p-button-rounded", 3, "click"], ["queryParamsHandling", "preserve", 3, "routerLink"], ["pButton", "", "pRipple", "", "type", "button", 1, "p-button-text", 3, "label", "icon"], [1, "ms-3"], [3, "ngModel", "binary", "disabled"], [3, "onChange", "ngModel", "binary"], [3, "class"], [3, "setValue", "value"]], template: function RecipeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-breadcrumb", 0);
    \u0275\u0275template(1, RecipeComponent_Conditional_1_Template, 41, 29, "table", 1)(2, RecipeComponent_Conditional_2_Template, 3, 3, "div", 2);
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275property("home", ctx.home())("model", ctx.breadcrumb());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx.obj()) ? 1 : 2, tmp_2_0);
  }
}, dependencies: [CommonModule, AppSharedModule, NgControlStatus, NgModel, Breadcrumb, RouterLink, ButtonDirective, Checkbox, Ripple, InputNumberComponent, TranslatePipe, IconClassPipe, IconSmClassPipe, RoundPipe, UsagePipe], changeDetection: 0 });
var RecipeComponent = _RecipeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecipeComponent, { className: "RecipeComponent", filePath: "src\\app\\routes\\main\\routes\\data\\routes\\recipe\\recipe.component.ts", lineNumber: 18 });
})();
export {
  RecipeComponent
};
//# sourceMappingURL=recipe.component-HR6NYSJD.js.map
