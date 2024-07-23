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
  BonusPercentPipe,
  Breadcrumb,
  ButtonDirective,
  Checkbox,
  CommonModule,
  Game,
  IconClassPipe,
  IconSmClassPipe,
  ItemId,
  KeyValuePipe,
  NgControlStatus,
  NgModel,
  Ripple,
  RoundPipe,
  RouterLink,
  TranslatePipe,
  UsagePipe,
  coalesce,
  computed,
  items_exports,
  machines_exports,
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-YUG2ZZAM.js";

// src/app/routes/main/routes/data/routes/item/item.component.ts
var _forTrack0 = ($index, $item) => $item.key;
function ItemComponent_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "a", 5);
    \u0275\u0275element(6, "button", 6);
    \u0275\u0275pipe(7, "iconSmClass");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const obj_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "data.category"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/data/categories/" + obj_r1.category);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx.name)("icon", \u0275\u0275pipeBind2(7, 6, obj_r1.category, "category"));
  }
}
function ItemComponent_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const obj_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.stackSize"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", obj_r1.stack, " ");
  }
}
function ItemComponent_Conditional_1_Conditional_11_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const beacon_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.range"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(beacon_r2.range);
  }
}
function ItemComponent_Conditional_1_Conditional_11_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const beacon_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.energySource"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(beacon_r2.type);
  }
}
function ItemComponent_Conditional_1_Conditional_11_Conditional_19_Template(rf, ctx) {
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
    const beacon_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.energyConsumption"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, beacon_r2.usage));
  }
}
function ItemComponent_Conditional_1_Conditional_11_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const beacon_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.disallowedEffects"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(beacon_r2.disallowedEffects.join(", "));
  }
}
function ItemComponent_Conditional_1_Conditional_11_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const beacon_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "data.dimensions"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", beacon_r2.size[0], "\xD7", beacon_r2.size[1], "");
  }
}
function ItemComponent_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 3)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "tr")(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "tr")(12, "th");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, ItemComponent_Conditional_1_Conditional_11_Conditional_17_Template, 6, 4, "tr")(18, ItemComponent_Conditional_1_Conditional_11_Conditional_18_Template, 6, 4, "tr")(19, ItemComponent_Conditional_1_Conditional_11_Conditional_19_Template, 7, 6, "tr")(20, ItemComponent_Conditional_1_Conditional_11_Conditional_20_Template, 6, 4, "tr")(21, ItemComponent_Conditional_1_Conditional_11_Conditional_21_Template, 6, 5, "tr");
  }
  if (rf & 2) {
    const beacon_r2 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 10, "data.beacon"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 12, "data.efficiency"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(beacon_r2.effectivity);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 14, "data.moduleSlots"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(beacon_r2.modules);
    \u0275\u0275advance();
    \u0275\u0275conditional(beacon_r2.range ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(beacon_r2.type ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(beacon_r2.usage ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(beacon_r2.disallowedEffects ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(beacon_r2.size ? 21 : -1);
  }
}
function ItemComponent_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 3)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "tr")(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "data.belt"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "data.beltSpeed"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.speed);
  }
}
function ItemComponent_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 3)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "tr")(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "data.cargoWagon"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "data.storageSize"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.size);
  }
}
function ItemComponent_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 3)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "tr")(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "data.fluidWagon"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "data.fluidCapacity"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.capacity);
  }
}
function ItemComponent_Conditional_1_Conditional_15_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "a", 5);
    \u0275\u0275element(6, "button", 6);
    \u0275\u0275pipe(7, "iconSmClass");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const fuel_r3 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "data.burntResult"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/data/items/" + fuel_r3.result);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r3.data().itemEntities[fuel_r3.result].name)("icon", \u0275\u0275pipeBind2(7, 6, fuel_r3.result, "item"));
  }
}
function ItemComponent_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 3)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "tr")(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "tr")(12, "th");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "round");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ItemComponent_Conditional_1_Conditional_15_Conditional_18_Template, 8, 9, "tr");
  }
  if (rf & 2) {
    const fuel_r3 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "data.fuel"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 8, "data.fuelCategory"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(fuel_r3.category);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 10, "data.fuelValue"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(17, 12, fuel_r3.value), " MJ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(fuel_r3.result ? 18 : -1);
  }
}
function ItemComponent_Conditional_1_Conditional_16_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const machine_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.moduleSlots"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(machine_r5.modules);
  }
}
function ItemComponent_Conditional_1_Conditional_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const machine_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.disallowedEffects"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(machine_r5.disallowedEffects.join(", "));
  }
}
function ItemComponent_Conditional_1_Conditional_16_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const machine_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.energySource"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(machine_r5.type);
  }
}
function ItemComponent_Conditional_1_Conditional_16_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const machine_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.fuelCategories"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(machine_r5.fuelCategories.join(", "));
  }
}
function ItemComponent_Conditional_1_Conditional_16_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const machine_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.fuel"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(machine_r5.fuel);
  }
}
function ItemComponent_Conditional_1_Conditional_16_Conditional_16_Template(rf, ctx) {
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
    const machine_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.energyConsumption"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, machine_r5.usage));
  }
}
function ItemComponent_Conditional_1_Conditional_16_Conditional_17_Template(rf, ctx) {
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
    const machine_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.energyDrain"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, machine_r5.drain));
  }
}
function ItemComponent_Conditional_1_Conditional_16_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const machine_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.pollution"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", machine_r5.pollution, "/m");
  }
}
function ItemComponent_Conditional_1_Conditional_16_Conditional_19_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i");
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "round");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const kv_r6 = ctx.$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind2(1, 3, kv_r6.key, "item"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, kv_r6.value));
  }
}
function ItemComponent_Conditional_1_Conditional_16_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "div", 7);
    \u0275\u0275repeaterCreate(6, ItemComponent_Conditional_1_Conditional_16_Conditional_19_For_7_Template, 5, 8, "i", 8, _forTrack0);
    \u0275\u0275pipe(8, "keyvalue");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const machine_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "data.consumption"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(8, 3, machine_r5.consumption));
  }
}
function ItemComponent_Conditional_1_Conditional_16_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const machine_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "data.dimensions"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", machine_r5.size[0], "\xD7", machine_r5.size[1], "");
  }
}
function ItemComponent_Conditional_1_Conditional_16_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 3)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "tr")(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "tr")(12, "th");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "round");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const silo_r7 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "data.rocketSilo"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "data.rocketPartsRequired"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(silo_r7.parts);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 9, "data.rocketLaunchTime"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 11, silo_r7.launch));
  }
}
function ItemComponent_Conditional_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 3)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "tr")(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, ItemComponent_Conditional_1_Conditional_16_Conditional_11_Template, 6, 4, "tr")(12, ItemComponent_Conditional_1_Conditional_16_Conditional_12_Template, 6, 4, "tr")(13, ItemComponent_Conditional_1_Conditional_16_Conditional_13_Template, 6, 4, "tr")(14, ItemComponent_Conditional_1_Conditional_16_Conditional_14_Template, 6, 4, "tr")(15, ItemComponent_Conditional_1_Conditional_16_Conditional_15_Template, 6, 4, "tr")(16, ItemComponent_Conditional_1_Conditional_16_Conditional_16_Template, 7, 6, "tr")(17, ItemComponent_Conditional_1_Conditional_16_Conditional_17_Template, 7, 6, "tr")(18, ItemComponent_Conditional_1_Conditional_16_Conditional_18_Template, 6, 4, "tr")(19, ItemComponent_Conditional_1_Conditional_16_Conditional_19_Template, 9, 5, "tr")(20, ItemComponent_Conditional_1_Conditional_16_Conditional_20_Template, 6, 5, "tr")(21, ItemComponent_Conditional_1_Conditional_16_Conditional_21_Template, 18, 13);
  }
  if (rf & 2) {
    let tmp_17_0;
    const machine_r5 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 14, "data.machine"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 16, "data.craftingSpeed"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(machine_r5.speed);
    \u0275\u0275advance();
    \u0275\u0275conditional(machine_r5.modules ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(machine_r5.disallowedEffects ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(machine_r5.type ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(machine_r5.fuelCategories ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(machine_r5.fuel ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(machine_r5.usage ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(machine_r5.drain ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(machine_r5.pollution ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(machine_r5.consumption ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(machine_r5.size ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_17_0 = machine_r5.silo) ? 21 : -1, tmp_17_0);
  }
}
function ItemComponent_Conditional_1_Conditional_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "bonusPercent");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const module_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.energyConsumption"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, module_r8.consumption));
  }
}
function ItemComponent_Conditional_1_Conditional_17_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "bonusPercent");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const module_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.pollution"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, module_r8.pollution));
  }
}
function ItemComponent_Conditional_1_Conditional_17_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "bonusPercent");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const module_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.productivity"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, module_r8.productivity));
  }
}
function ItemComponent_Conditional_1_Conditional_17_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "bonusPercent");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const module_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.speed"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, module_r8.speed));
  }
}
function ItemComponent_Conditional_1_Conditional_17_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "round");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const module_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.sprays"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, module_r8.sprays));
  }
}
function ItemComponent_Conditional_1_Conditional_17_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td")(5, "a", 5);
    \u0275\u0275element(6, "button", 6);
    \u0275\u0275pipe(7, "iconSmClass");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const module_r8 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "data.proliferator"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/data/items/" + module_r8.proliferator);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r3.data().itemEntities[module_r8.proliferator].name)("icon", \u0275\u0275pipeBind2(7, 6, module_r8.proliferator, "item"));
  }
}
function ItemComponent_Conditional_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 3)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(5, ItemComponent_Conditional_1_Conditional_17_Conditional_5_Template, 7, 6, "tr")(6, ItemComponent_Conditional_1_Conditional_17_Conditional_6_Template, 7, 6, "tr")(7, ItemComponent_Conditional_1_Conditional_17_Conditional_7_Template, 7, 6, "tr")(8, ItemComponent_Conditional_1_Conditional_17_Conditional_8_Template, 7, 6, "tr")(9, ItemComponent_Conditional_1_Conditional_17_Conditional_9_Template, 7, 6, "tr")(10, ItemComponent_Conditional_1_Conditional_17_Conditional_10_Template, 8, 9, "tr");
  }
  if (rf & 2) {
    const module_r8 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, "data.module"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(module_r8.consumption ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(module_r8.pollution ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(module_r8.productivity ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(module_r8.speed ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(module_r8.sprays ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(module_r8.proliferator ? 10 : -1);
  }
}
function ItemComponent_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 3)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "tr")(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "data.pipe"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "data.flowRate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.speed);
  }
}
function ItemComponent_Conditional_1_Conditional_19_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "none"));
  }
}
function ItemComponent_Conditional_1_Conditional_19_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "a", 5);
    \u0275\u0275element(2, "button", 6);
    \u0275\u0275pipe(3, "iconSmClass");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/data/technologies/" + i_r9);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r3.data().itemEntities[i_r9].name)("icon", \u0275\u0275pipeBind2(3, 3, i_r9, "recipe"));
  }
}
function ItemComponent_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 3)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "tr")(6, "th");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, ItemComponent_Conditional_1_Conditional_19_Conditional_10_Template, 3, 3, "div");
    \u0275\u0275repeaterCreate(11, ItemComponent_Conditional_1_Conditional_19_For_12_Template, 4, 6, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const technology_r10 = ctx;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "data.technology"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "data.prerequisites"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!(technology_r10.prerequisites == null ? null : technology_r10.prerequisites.length) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(technology_r10.prerequisites);
  }
}
function ItemComponent_Conditional_1_Conditional_20_Conditional_20_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "a", 5);
    \u0275\u0275element(2, "button", 6);
    \u0275\u0275pipe(3, "iconSmClass");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const beltId_r12 = ctx;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/data/" + (ctx_r3.data().beltIds.indexOf(beltId_r12) !== -1 ? "belts" : ctx_r3.data().pipeIds.indexOf(beltId_r12) !== -1 ? "pipes" : "items") + "/" + beltId_r12);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r3.data().itemEntities[beltId_r12].name)("icon", \u0275\u0275pipeBind2(3, 3, beltId_r12, "item"));
  }
}
function ItemComponent_Conditional_1_Conditional_20_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ItemComponent_Conditional_1_Conditional_20_Conditional_20_Conditional_4_Template, 4, 6, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const itemSettings_r13 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.belt"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_6_0 = itemSettings_r13.beltId) ? 4 : -1, tmp_6_0);
  }
}
function ItemComponent_Conditional_1_Conditional_20_Conditional_21_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "a", 5);
    \u0275\u0275element(5, "button", 6);
    \u0275\u0275pipe(6, "iconSmClass");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const wagonId_r14 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "data.cargoWagon"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/data/cargo-wagons/" + wagonId_r14);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r3.data().itemEntities[wagonId_r14].name)("icon", \u0275\u0275pipeBind2(6, 6, wagonId_r14, "item"));
  }
}
function ItemComponent_Conditional_1_Conditional_20_Conditional_21_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "a", 5);
    \u0275\u0275element(5, "button", 6);
    \u0275\u0275pipe(6, "iconSmClass");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const wagonId_r14 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 4, "data.fluidWagon"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/data/fluid-wagons/" + wagonId_r14);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r3.data().itemEntities[wagonId_r14].name)("icon", \u0275\u0275pipeBind2(6, 6, wagonId_r14, "item"));
  }
}
function ItemComponent_Conditional_1_Conditional_20_Conditional_21_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, ItemComponent_Conditional_1_Conditional_20_Conditional_21_Conditional_0_Conditional_1_Template, 7, 9)(2, ItemComponent_Conditional_1_Conditional_20_Conditional_21_Conditional_0_Conditional_2_Template, 7, 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const obj_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(obj_r1.stack ? 1 : 2);
  }
}
function ItemComponent_Conditional_1_Conditional_20_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ItemComponent_Conditional_1_Conditional_20_Conditional_21_Conditional_0_Template, 3, 1, "tr");
  }
  if (rf & 2) {
    let tmp_5_0;
    const itemSettings_r13 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_5_0 = itemSettings_r13.wagonId) ? 0 : -1, tmp_5_0);
  }
}
function ItemComponent_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th", 9)(2, "div", 10);
    \u0275\u0275element(3, "button", 11);
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 12);
    \u0275\u0275listener("click", function ItemComponent_Conditional_1_Conditional_20_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.resetItem(ctx_r3.id()));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "tr")(9, "th");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "p-checkbox", 13);
    \u0275\u0275listener("onChange", function ItemComponent_Conditional_1_Conditional_20_Template_p_checkbox_onChange_13_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setItemExcluded(ctx_r3.id(), $event.checked));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tr")(15, "th");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td")(19, "p-checkbox", 13);
    \u0275\u0275listener("onChange", function ItemComponent_Conditional_1_Conditional_20_Template_p_checkbox_onChange_19_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setItemChecked(ctx_r3.id(), $event.checked));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, ItemComponent_Conditional_1_Conditional_20_Conditional_20_Template, 5, 4, "tr")(21, ItemComponent_Conditional_1_Conditional_20_Conditional_21_Template, 1, 1);
  }
  if (rf & 2) {
    const itemSettings_r13 = ctx;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 11, "data.itemSettings"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("invisible", !ctx_r3.itemsStateRaw()[ctx_r3.id()]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 13, "data.excluded"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", itemSettings_r13.excluded)("binary", true);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 15, "data.checked"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", itemSettings_r13.checked)("binary", true);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.data().game !== ctx_r3.Game.DysonSphereProgram || itemSettings_r13.beltId !== ctx_r3.ItemId.Pipe ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.data().game === ctx_r3.Game.Factorio || ctx_r3.data().game === ctx_r3.Game.Satisfactory ? 21 : -1);
  }
}
function ItemComponent_Conditional_1_Conditional_21_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "none"));
  }
}
function ItemComponent_Conditional_1_Conditional_21_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "a", 5);
    \u0275\u0275element(2, "button", 6);
    \u0275\u0275pipe(3, "iconSmClass");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const moduleId_r16 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", moduleId_r16 === "module" ? null : "/data/modules/" + moduleId_r16);
    \u0275\u0275advance();
    \u0275\u0275property("label", (tmp_15_0 = (tmp_15_0 = ctx_r3.data().itemEntities[moduleId_r16]) == null ? null : tmp_15_0.name) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : "")("icon", \u0275\u0275pipeBind2(3, 3, moduleId_r16, "item"));
  }
}
function ItemComponent_Conditional_1_Conditional_21_Conditional_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275element(1, "button", 6);
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const beaconId_r17 = ctx;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275property("routerLink", "/data/beacons/" + beaconId_r17);
    \u0275\u0275advance();
    \u0275\u0275property("label", ctx_r3.data().itemEntities[beaconId_r17].name)("icon", \u0275\u0275pipeBind2(2, 3, beaconId_r17, "item"));
  }
}
function ItemComponent_Conditional_1_Conditional_21_Conditional_16_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "none"), " ");
  }
}
function ItemComponent_Conditional_1_Conditional_21_Conditional_16_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "none"));
  }
}
function ItemComponent_Conditional_1_Conditional_21_Conditional_16_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "a", 5);
    \u0275\u0275element(2, "button", 6);
    \u0275\u0275pipe(3, "iconSmClass");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const moduleId_r18 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", moduleId_r18 === "module" ? null : "/data/modules/" + moduleId_r18);
    \u0275\u0275advance();
    \u0275\u0275property("label", (tmp_16_0 = (tmp_16_0 = ctx_r3.data().itemEntities[moduleId_r18]) == null ? null : tmp_16_0.name) !== null && tmp_16_0 !== void 0 ? tmp_16_0 : "")("icon", \u0275\u0275pipeBind2(3, 3, moduleId_r18, "item"));
  }
}
function ItemComponent_Conditional_1_Conditional_21_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "tr")(8, "th");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275template(12, ItemComponent_Conditional_1_Conditional_21_Conditional_16_Conditional_12_Template, 3, 6, "a", 5)(13, ItemComponent_Conditional_1_Conditional_21_Conditional_16_Conditional_13_Template, 2, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tr")(15, "th");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275template(19, ItemComponent_Conditional_1_Conditional_21_Conditional_16_Conditional_19_Template, 3, 3, "div");
    \u0275\u0275repeaterCreate(20, ItemComponent_Conditional_1_Conditional_21_Conditional_16_For_21_Template, 4, 6, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    let tmp_8_0;
    const machineSettings_r19 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "data.beacons"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (tmp_6_0 = machineSettings_r19.beaconCount) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : \u0275\u0275pipeBind1(6, 8, "none"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, "data.beacon"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_8_0 = machineSettings_r19.beaconId) ? 12 : 13, tmp_8_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 12, "data.beaconModuleRank"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!(machineSettings_r19.beaconModuleRankIds == null ? null : machineSettings_r19.beaconModuleRankIds.length) ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(machineSettings_r19.beaconModuleRankIds);
  }
}
function ItemComponent_Conditional_1_Conditional_21_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const machineSettings_r19 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "data.overclock"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", machineSettings_r19.overclock, "%");
  }
}
function ItemComponent_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th", 9)(2, "div", 10);
    \u0275\u0275element(3, "button", 11);
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 14);
    \u0275\u0275listener("click", function ItemComponent_Conditional_1_Conditional_21_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.resetMachine(ctx_r3.id()));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "tr")(9, "th");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275template(13, ItemComponent_Conditional_1_Conditional_21_Conditional_13_Template, 3, 3, "div");
    \u0275\u0275repeaterCreate(14, ItemComponent_Conditional_1_Conditional_21_For_15_Template, 4, 6, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, ItemComponent_Conditional_1_Conditional_21_Conditional_16_Template, 22, 14)(17, ItemComponent_Conditional_1_Conditional_21_Conditional_17_Template, 6, 4, "tr");
  }
  if (rf & 2) {
    const machineSettings_r19 = ctx;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "data.machineSettings"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("invisible", !ctx_r3.machinesStateRaw().entities[ctx_r3.id()]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "data.moduleRank"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!(machineSettings_r19.moduleRankIds == null ? null : machineSettings_r19.moduleRankIds.length) ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(machineSettings_r19.moduleRankIds);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.data().game === ctx_r3.Game.Factorio ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.data().game === ctx_r3.Game.Satisfactory ? 17 : -1);
  }
}
function ItemComponent_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "lab-collection-table", 15);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "data.producedByRecipes"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ids", ctx_r3.recipes().producedBy);
  }
}
function ItemComponent_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "lab-collection-table", 15);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "data.consumedByRecipes"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ids", ctx_r3.recipes().consumedBy);
  }
}
function ItemComponent_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "lab-collection-table", 15);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "data.producibleRecipes"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ids", ctx_r3.recipes().producible);
  }
}
function ItemComponent_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "lab-collection-table", 15);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "data.unlockedRecipes"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ids", ctx_r3.recipes().unlocked);
  }
}
function ItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 2)(1, "tr")(2, "th", 3)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "tr")(6, "td", 3);
    \u0275\u0275element(7, "i", 4);
    \u0275\u0275pipe(8, "iconClass");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ItemComponent_Conditional_1_Conditional_9_Template, 8, 9, "tr")(10, ItemComponent_Conditional_1_Conditional_10_Template, 6, 4, "tr")(11, ItemComponent_Conditional_1_Conditional_11_Template, 22, 16)(12, ItemComponent_Conditional_1_Conditional_12_Template, 11, 7)(13, ItemComponent_Conditional_1_Conditional_13_Template, 11, 7)(14, ItemComponent_Conditional_1_Conditional_14_Template, 11, 7)(15, ItemComponent_Conditional_1_Conditional_15_Template, 19, 14)(16, ItemComponent_Conditional_1_Conditional_16_Template, 22, 18)(17, ItemComponent_Conditional_1_Conditional_17_Template, 11, 9)(18, ItemComponent_Conditional_1_Conditional_18_Template, 11, 7)(19, ItemComponent_Conditional_1_Conditional_19_Template, 13, 7)(20, ItemComponent_Conditional_1_Conditional_20_Template, 22, 17)(21, ItemComponent_Conditional_1_Conditional_21_Template, 18, 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ItemComponent_Conditional_1_Conditional_22_Template, 4, 4)(23, ItemComponent_Conditional_1_Conditional_23_Template, 4, 4)(24, ItemComponent_Conditional_1_Conditional_24_Template, 4, 4)(25, ItemComponent_Conditional_1_Conditional_25_Template, 4, 4);
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    let tmp_16_0;
    const obj_r1 = ctx;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(obj_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275pipeBind2(8, 20, ctx_r3.id(), "item"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_4_0 = ctx_r3.category()) ? 9 : -1, tmp_4_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(obj_r1.stack ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_6_0 = obj_r1.beacon) ? 11 : -1, tmp_6_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = obj_r1.belt) ? 12 : -1, tmp_7_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_8_0 = obj_r1.cargoWagon) ? 13 : -1, tmp_8_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_9_0 = obj_r1.fluidWagon) ? 14 : -1, tmp_9_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = obj_r1.fuel) ? 15 : -1, tmp_10_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_11_0 = obj_r1.machine) ? 16 : -1, tmp_11_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_12_0 = obj_r1.module) ? 17 : -1, tmp_12_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_13_0 = obj_r1.pipe) ? 18 : -1, tmp_13_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_14_0 = obj_r1.technology) ? 19 : -1, tmp_14_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_15_0 = ctx_r3.category() && ctx_r3.itemSettings()) ? 20 : -1, tmp_15_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = obj_r1.machine && ctx_r3.machineSettings()) ? 21 : -1, tmp_16_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.recipes().producedBy.length ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.recipes().consumedBy.length ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.recipes().producible.length ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.recipes().unlocked.length ? 25 : -1);
  }
}
function ItemComponent_Conditional_2_Template(rf, ctx) {
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
var _ItemComponent = class _ItemComponent extends DetailComponent {
  constructor() {
    super(...arguments);
    this.itemsStateRaw = this.store.selectSignal(items_exports.itemsState);
    this.itemsState = this.store.selectSignal(items_exports.getItemsState);
    this.machinesStateRaw = this.store.selectSignal(machines_exports.machinesState);
    this.machinesState = this.store.selectSignal(machines_exports.getMachinesState);
    this.obj = computed(() => this.data().itemEntities[this.id()]);
    this.breadcrumb = computed(() => [
      this.parent(),
      { label: this.obj()?.name }
    ]);
    this.category = computed(() => {
      const id = this.id();
      const data = this.data();
      return data.categoryEntities[coalesce(data.itemEntities[id]?.category, "")];
    });
    this.recipes = computed(() => {
      const id = this.id();
      const data = this.data();
      const producedBy = [];
      const consumedBy = [];
      const producible = [];
      const unlocked = [];
      for (const r of data.recipeIds) {
        const recipe = data.recipeEntities[r];
        if (recipe.out[id])
          producedBy.push(r);
        if (recipe.in[id])
          consumedBy.push(r);
        if (recipe.producers.includes(id))
          producible.push(r);
        if (recipe.unlockedBy === id)
          unlocked.push(r);
      }
      return { producedBy, consumedBy, producible, unlocked };
    });
    this.itemSettings = computed(() => this.itemsState()[this.id()]);
    this.machineSettings = computed(() => this.machinesState().entities[this.id()]);
    this.Game = Game;
    this.ItemId = ItemId;
  }
  /** Action dispatch methods */
  setItemExcluded(id, value) {
    this.store.dispatch(new items_exports.SetExcludedAction({ id, value }));
  }
  setItemChecked(id, value) {
    this.store.dispatch(new items_exports.SetCheckedAction({ id, value }));
  }
  resetItem(value) {
    this.store.dispatch(new items_exports.ResetItemAction(value));
  }
  resetMachine(value) {
    this.store.dispatch(new machines_exports.ResetMachineAction(value));
  }
};
_ItemComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ItemComponent_BaseFactory;
  return function ItemComponent_Factory(t) {
    return (\u0275ItemComponent_BaseFactory || (\u0275ItemComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ItemComponent)))(t || _ItemComponent);
  };
})();
_ItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ItemComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature], decls: 3, vars: 3, consts: [[3, "home", "model"], [1, "my-5", "p-error"], [1, "properties", "mb-4"], ["colspan", "2", 1, "text-center"], [1, "lg"], ["queryParamsHandling", "preserve", 3, "routerLink"], ["pButton", "", "pRipple", "", "type", "button", 1, "p-button-text", 3, "label", "icon"], [1, "d-flex", "align-items-center", "justify-content-center", "flex-wrap"], [3, "class"], ["colspan", "2"], [1, "d-flex", "align-items-center", "justify-content-between"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-rotate-right", 1, "invisible", "p-button-rounded"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-rotate-left", 1, "ms-2", "p-button-rounded", 3, "click"], [3, "onChange", "ngModel", "binary"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-rotate-left", 1, "p-button-rounded", "justify-self-end", 3, "click"], ["type", "recipe", 3, "ids"]], template: function ItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-breadcrumb", 0);
    \u0275\u0275template(1, ItemComponent_Conditional_1_Template, 26, 23)(2, ItemComponent_Conditional_2_Template, 3, 3, "div", 1);
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275property("home", ctx.home())("model", ctx.breadcrumb());
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx.obj()) ? 1 : 2, tmp_2_0);
  }
}, dependencies: [CommonModule, KeyValuePipe, AppSharedModule, NgControlStatus, NgModel, Breadcrumb, RouterLink, ButtonDirective, Checkbox, Ripple, TranslatePipe, BonusPercentPipe, IconClassPipe, IconSmClassPipe, RoundPipe, UsagePipe, DataSharedModule, CollectionTableComponent], changeDetection: 0 });
var ItemComponent = _ItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ItemComponent, { className: "ItemComponent", filePath: "src\\app\\routes\\main\\routes\\data\\routes\\item\\item.component.ts", lineNumber: 26 });
})();
export {
  ItemComponent
};
//# sourceMappingURL=item.component-RMENFVO6.js.map
