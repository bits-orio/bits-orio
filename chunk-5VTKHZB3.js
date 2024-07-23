import {
  Accordion,
  AccordionTab,
  ActivatedRoute,
  AppSharedModule,
  AutoFocus,
  BehaviorSubject,
  BrowserUtility,
  ButtonDirective,
  Card,
  ChangeDetectorRef,
  Checkbox,
  CommonModule,
  ContentService,
  DOCUMENT,
  DefaultValueAccessor,
  Dialog,
  Dropdown,
  DropdownTranslateDirective,
  EnergyType,
  EventEmitter,
  ExportService,
  FilterService,
  FlowDiagram,
  FormsModule,
  FuelType,
  Game,
  IconClassPipe,
  IconSmClassPipe,
  InputNumber,
  InputNumberComponent,
  InputText,
  InputTextarea,
  InserterData,
  ItemId,
  KeyValuePipe,
  MaximizeType,
  Menu,
  Messages,
  MultiSelect,
  NgControlStatus,
  NgModel,
  NgTemplateOutlet,
  ObjectiveType,
  ObjectiveUnit,
  OrderList,
  PickerComponent,
  PowerUnit,
  PrimeTemplate,
  RateUtility,
  Rational,
  RecipeField,
  RecipeUtility,
  RequiredValidator,
  Ripple,
  Router,
  RouterLink,
  RouterService,
  RowToggler,
  ScrollPanel,
  SimplexResultType,
  SortIcon,
  SortableColumn,
  StepDetailTab,
  Store,
  TabMenu,
  Table,
  ToggleButton,
  Tooltip,
  TooltipComponent,
  TrackService,
  TranslatePipe,
  TranslateService,
  __spreadValues,
  app_actions_exports,
  coalesce,
  combineLatest,
  computed,
  datasets_exports,
  displayRateOptions,
  effect,
  filter,
  first,
  flowDiagramOptions,
  gameInfo,
  gameOptions,
  inject,
  input,
  inserterCapacityOptions,
  inserterTargetOptions,
  items_exports,
  languageOptions,
  machines_exports,
  maximizeTypeOptions,
  objectiveTypeOptions,
  objectives_exports,
  pairwise,
  powerUnitOptions,
  preferences_exports,
  rational,
  recipes_exports,
  researchBonusOptions,
  sankeyAlignOptions,
  settings_exports,
  signal,
  stepDetailIcon,
  takeUntilDestroyed,
  themeOptions,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunctionV,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-YUG2ZZAM.js";

// src/app/routes/main/pipes/step-id.pipe.ts
var _StepIdPipe = class _StepIdPipe {
  static transform(value) {
    return value.itemId ?? value.recipeObjectiveId ?? value.recipeId ?? value.id;
  }
  transform(value) {
    return _StepIdPipe.transform(value);
  }
};
_StepIdPipe.\u0275fac = function StepIdPipe_Factory(t) {
  return new (t || _StepIdPipe)();
};
_StepIdPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "stepId", type: _StepIdPipe, pure: true });
var StepIdPipe = _StepIdPipe;

// src/app/routes/main/directives/dropdown-base.directive.ts
var _DropdownBaseDirective = class _DropdownBaseDirective {
  constructor() {
    this.contentSvc = inject(ContentService);
    this.pDropdown = inject(Dropdown, { self: true });
    this.labDropdownBase = input();
    this.setAutoFocusFilter = effect(() => {
      const isMobile = this.contentSvc.isMobile();
      this.pDropdown.autofocusFilter = !isMobile;
    });
    this.setStyleClass = effect(() => {
      this.pDropdown.styleClass = this.labDropdownBase();
    });
  }
  ngOnInit() {
    this.pDropdown.appendTo = "body";
    this.pDropdown.filter = true;
    this.pDropdown.scrollHeight = "40vh";
    this.pDropdown.panelStyleClass = "tooltip";
  }
};
_DropdownBaseDirective.\u0275fac = function DropdownBaseDirective_Factory(t) {
  return new (t || _DropdownBaseDirective)();
};
_DropdownBaseDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _DropdownBaseDirective, selectors: [["", "labDropdownBase", ""]], inputs: { labDropdownBase: [1, "labDropdownBase"] } });
var DropdownBaseDirective = _DropdownBaseDirective;

// src/app/routes/main/pipes/as-step.pipe.ts
var _AsStepPipe = class _AsStepPipe {
  transform(value) {
    return value;
  }
};
_AsStepPipe.\u0275fac = function AsStepPipe_Factory(t) {
  return new (t || _AsStepPipe)();
};
_AsStepPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "asStep", type: _AsStepPipe, pure: true });
var AsStepPipe = _AsStepPipe;

// src/app/routes/main/pipes/inserter-speed.pipe.ts
var _InserterSpeedPipe = class _InserterSpeedPipe {
  transform(value, settings) {
    if (value != null) {
      const inserter = InserterData[settings.inserterTarget][settings.inserterCapacity]?.find((d) => d.value.gt(value) || d.id === ItemId.StackInserter);
      if (inserter == null) {
        return null;
      }
      return {
        id: inserter.id,
        value: value.div(inserter.value)
      };
    }
    return null;
  }
};
_InserterSpeedPipe.\u0275fac = function InserterSpeedPipe_Factory(t) {
  return new (t || _InserterSpeedPipe)();
};
_InserterSpeedPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "inserterSpeed", type: _InserterSpeedPipe, pure: true });
var InserterSpeedPipe = _InserterSpeedPipe;

// src/app/routes/main/pipes/left-pad.pipe.ts
var _LeftPadPipe = class _LeftPadPipe {
  transform(value) {
    if (value == null)
      return "";
    return " ".repeat(4 - value.length) + value;
  }
};
_LeftPadPipe.\u0275fac = function LeftPadPipe_Factory(t) {
  return new (t || _LeftPadPipe)();
};
_LeftPadPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "leftPad", type: _LeftPadPipe, pure: true });
var LeftPadPipe = _LeftPadPipe;

// src/app/routes/main/pipes/rate.pipe.ts
var _RatePipe = class _RatePipe {
  static transform(value, precision) {
    if (precision == null)
      return value.toFraction();
    if (precision === -2) {
      const num2 = Math.round(value.mul(rational(100n)).toNumber());
      return num2.toString();
    }
    const num = value.toPrecision(precision);
    let result = num.toString();
    if (precision > 0) {
      const compare = rational(1, Math.pow(10, precision));
      if (value.gt(rational(0n)) && value.lt(compare))
        result = `<${result}`;
      const split = result.split(".");
      if (split.length > 1) {
        if (split[1].length < precision) {
          const spaces = precision - split[1].length;
          return result + "0".repeat(spaces);
        }
      } else if (value.isInteger()) {
        return result + " ".repeat(precision + 1);
      } else {
        return result + "." + "0".repeat(precision);
      }
    }
    return result;
  }
  transform(value, precision) {
    return _RatePipe.transform(value, precision);
  }
};
_RatePipe.\u0275fac = function RatePipe_Factory(t) {
  return new (t || _RatePipe)();
};
_RatePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "rate", type: _RatePipe, pure: true });
var RatePipe = _RatePipe;

// src/app/routes/main/pipes/machine-rate.pipe.ts
var _MachineRatePipe = class _MachineRatePipe {
  transform(value, precision, machineId) {
    if (machineId === ItemId.Pumpjack) {
      return `${RatePipe.transform(value.mul(rational(100n)), precision != null ? Math.max(precision - 2, 0) : precision)}%`;
    } else {
      return RatePipe.transform(value, precision);
    }
  }
};
_MachineRatePipe.\u0275fac = function MachineRatePipe_Factory(t) {
  return new (t || _MachineRatePipe)();
};
_MachineRatePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "machineRate", type: _MachineRatePipe, pure: true });
var MachineRatePipe = _MachineRatePipe;

// src/app/routes/main/pipes/machine-show-rate.pipe.ts
var _MachineShowRatePipe = class _MachineShowRatePipe {
  transform(machineId, game) {
    return game !== Game.CaptainOfIndustry || machineId !== ItemId.MineControlTower;
  }
};
_MachineShowRatePipe.\u0275fac = function MachineShowRatePipe_Factory(t) {
  return new (t || _MachineShowRatePipe)();
};
_MachineShowRatePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "machineShowRate", type: _MachineShowRatePipe, pure: true });
var MachineShowRatePipe = _MachineShowRatePipe;

// src/app/routes/main/pipes/machine-show.pipe.ts
var _MachineShowPipe = class _MachineShowPipe {
  transform(machineId, game) {
    if (machineId == null)
      return false;
    return game !== Game.DysonSphereProgram || machineId !== ItemId.MiningMachine;
  }
};
_MachineShowPipe.\u0275fac = function MachineShowPipe_Factory(t) {
  return new (t || _MachineShowPipe)();
};
_MachineShowPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "machineShow", type: _MachineShowPipe, pure: true });
var MachineShowPipe = _MachineShowPipe;

// src/app/routes/main/pipes/options.pipe.ts
var _OptionsPipe = class _OptionsPipe {
  transform(value, entities, includeEmptyModule = false) {
    if (value == null) {
      return [];
    }
    const list = value.map((i) => ({ label: entities[i].name, value: i }));
    if (includeEmptyModule) {
      list.unshift({ label: "None", value: ItemId.Module });
    }
    return list;
  }
};
_OptionsPipe.\u0275fac = function OptionsPipe_Factory(t) {
  return new (t || _OptionsPipe)();
};
_OptionsPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "options", type: _OptionsPipe, pure: true });
var OptionsPipe = _OptionsPipe;

// src/app/routes/main/pipes/power.pipe.ts
var _PowerPipe = class _PowerPipe {
  transform(value, precision, unit) {
    switch (unit) {
      case PowerUnit.GW:
        return `${RatePipe.transform(value.div(rational(1000000n)), precision)} GW`;
      case PowerUnit.MW:
        return `${RatePipe.transform(value.div(rational(1000n)), precision)} MW`;
      default:
        return `${RatePipe.transform(value, precision)} kW`;
    }
  }
};
_PowerPipe.\u0275fac = function PowerPipe_Factory(t) {
  return new (t || _PowerPipe)();
};
_PowerPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "power", type: _PowerPipe, pure: true });
var PowerPipe = _PowerPipe;

// src/app/routes/main/pipes/step-href.pipe.ts
var _StepHrefPipe = class _StepHrefPipe {
  constructor() {
    this.routerSvc = inject(RouterService);
  }
  transform(value, zipPartial, data) {
    let step = value;
    if (step.recipeId) {
      const recipe = data.adjustedRecipe[step.recipeId];
      if (recipe.isTechnology && recipe.productivity && value.items) {
        step = __spreadValues(__spreadValues({}, value), { items: value.items.div(recipe.productivity) });
      }
    }
    return this.routerSvc.stepHref(step, zipPartial, data.hash);
  }
};
_StepHrefPipe.\u0275fac = function StepHrefPipe_Factory(t) {
  return new (t || _StepHrefPipe)();
};
_StepHrefPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "stepHref", type: _StepHrefPipe, pure: true });
var StepHrefPipe = _StepHrefPipe;

// src/app/routes/main/components/steps/steps.component.ts
var _c0 = ["stepsTable"];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.key;
var _c1 = () => [25, 50, 100, 1e3];
var _c2 = () => [];
var _c3 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) => ({ items: a0, itemId: a1, belts: a2, beltId: a3, wagons: a4, wagonId: a5, machines: a6, machineId: a7, recipeId: a8, recipeObjectiveId: a9, percent: a10, percentOnDest: true, destId: a11, inputs: a12 });
var _c4 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13) => ({ items: a0, itemId: a1, belts: a2, beltId: a3, wagons: a4, wagonId: a5, machines: a6, machineId: a7, recipeId: a8, recipeObjectiveId: a9, percent: a10, destId: a11, destRecipeObjectiveId: a12, destIsRecipe: true, outputs: a13 });
var _c5 = (a0, a1) => ({ step: a0, percent: a1 });
var _c6 = (a0, a1) => ({ items: a0, itemId: a1 });
var _c7 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) => ({ items: a0, itemId: a1, belts: a2, beltId: a3, wagons: a4, wagonId: a5, machines: a6, machineId: a7, recipeId: a8, recipeObjectiveId: a9, percent: a10, destId: a11, destRecipeObjectiveId: a12, destIsRecipe: true });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => ({ items: a0, itemId: a1, belts: a2, beltId: a3, wagons: a4, wagonId: a5, percent: a6, destId: a7, destRecipeObjectiveId: a8, destIsRecipe: true });
var _c9 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) => ({ items: a0, itemId: a1, belts: a2, beltId: a3, wagons: a4, wagonId: a5, machines: a6, machineId: a7, recipeId: a8, recipeObjectiveId: a9, percent: a10, percentOnDest: true, destId: a11, destRecipeObjectiveId: a12 });
var _c10 = (a0, a1) => ({ value: a0, itemId: a1 });
var _c11 = (a0, a1) => ({ columnSettings: a0, totals: a1, type: "belt" });
var _c12 = (a0, a1) => ({ columnSettings: a0, totals: a1 });
var _c13 = (a0, a1, a2) => ({ columnSettings: a0, totals: a1, modulesTotals: a2, type: "machine" });
var _c14 = (a0, a1, a2) => ({ columnSettings: a0, totals: a1, modulesTotals: a2, type: "beacon" });
function StepsComponent_ng_template_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function StepsComponent_ng_template_2_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.exportSvc.stepsToCsv(ctx_r2.steps()));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "steps.downloadAsCsv"));
  }
}
function StepsComponent_ng_template_2_Conditional_8_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function StepsComponent_ng_template_2_Conditional_8_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.resetChecked());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 1, "steps.checkedUndoTooltip"));
  }
}
function StepsComponent_ng_template_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th")(1, "div", 33);
    \u0275\u0275element(2, "i", 34);
    \u0275\u0275template(3, StepsComponent_ng_template_2_Conditional_8_Conditional_3_Template, 2, 3, "button", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.itemsModified().checked || ctx_r2.recipesModified().checked ? 3 : -1);
  }
}
function StepsComponent_ng_template_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "options.column.tree"));
  }
}
function StepsComponent_ng_template_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-sortIcon", 23);
  }
}
function StepsComponent_ng_template_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function StepsComponent_ng_template_2_Conditional_16_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.resetExcluded();
      return \u0275\u0275resetView($event.stopImmediatePropagation());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 1, "steps.itemsUndoTooltip"));
  }
}
function StepsComponent_ng_template_2_Conditional_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-sortIcon", 36);
  }
}
function StepsComponent_ng_template_2_Conditional_17_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function StepsComponent_ng_template_2_Conditional_17_Conditional_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.resetBelts();
      return \u0275\u0275resetView($event.stopImmediatePropagation());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 1, "steps.beltsUndoTooltip"));
  }
}
function StepsComponent_ng_template_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 25)(1, "div", 22)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_2_Conditional_17_Conditional_5_Template, 1, 0, "p-sortIcon", 36)(6, StepsComponent_ng_template_2_Conditional_17_Conditional_6_Template, 2, 3, "button", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "options.column.belts"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.focus() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.itemsModified().belts ? 6 : -1);
  }
}
function StepsComponent_ng_template_2_Conditional_18_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-sortIcon", 37);
  }
}
function StepsComponent_ng_template_2_Conditional_18_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function StepsComponent_ng_template_2_Conditional_18_Conditional_6_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.resetWagons();
      return \u0275\u0275resetView($event.stopImmediatePropagation());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 1, "steps.wagonsUndoTooltip"));
  }
}
function StepsComponent_ng_template_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 26)(1, "div", 22)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_2_Conditional_18_Conditional_5_Template, 1, 0, "p-sortIcon", 37)(6, StepsComponent_ng_template_2_Conditional_18_Conditional_6_Template, 2, 3, "button", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, ctx_r2.dispRateInfo().wagonsLabel));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.focus() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.itemsModified().wagons ? 6 : -1);
  }
}
function StepsComponent_ng_template_2_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-sortIcon", 28);
  }
}
function StepsComponent_ng_template_2_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function StepsComponent_ng_template_2_Conditional_25_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.resetMachines();
      return \u0275\u0275resetView($event.stopImmediatePropagation());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 1, "steps.machinesUndoTooltip"));
  }
}
function StepsComponent_ng_template_2_Conditional_26_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function StepsComponent_ng_template_2_Conditional_26_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.resetBeacons());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 1, "steps.beaconsUndoTooltip"));
  }
}
function StepsComponent_ng_template_2_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 29)(1, "div", 22)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_2_Conditional_26_Conditional_5_Template, 2, 3, "button", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "options.column.beacons"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.recipesModified().beacons ? 5 : -1);
  }
}
function StepsComponent_ng_template_2_Conditional_27_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-sortIcon", 38);
  }
}
function StepsComponent_ng_template_2_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 30)(1, "div", 22)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_2_Conditional_27_Conditional_5_Template, 1, 0, "p-sortIcon", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "options.column.power"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.focus() ? 5 : -1);
  }
}
function StepsComponent_ng_template_2_Conditional_28_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-sortIcon", 39);
  }
}
function StepsComponent_ng_template_2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 31)(1, "div", 22)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_2_Conditional_28_Conditional_5_Template, 1, 0, "p-sortIcon", 39);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, ctx_r2.dispRateInfo().pollutionLabel));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.focus() ? 5 : -1);
  }
}
function StepsComponent_ng_template_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th");
  }
}
function StepsComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 16)(2, "div", 17)(3, "button", 18);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("click", function StepsComponent_ng_template_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.contentSvc.showColumns$.next());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_2_Conditional_5_Template, 2, 3, "button", 19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "tr", 20);
    \u0275\u0275element(7, "th");
    \u0275\u0275template(8, StepsComponent_ng_template_2_Conditional_8_Template, 4, 1, "th")(9, StepsComponent_ng_template_2_Conditional_9_Template, 3, 3, "th");
    \u0275\u0275elementStart(10, "th", 21)(11, "div", 22)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, StepsComponent_ng_template_2_Conditional_15_Template, 1, 0, "p-sortIcon", 23)(16, StepsComponent_ng_template_2_Conditional_16_Template, 2, 3, "button", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, StepsComponent_ng_template_2_Conditional_17_Template, 7, 5, "th", 25)(18, StepsComponent_ng_template_2_Conditional_18_Template, 7, 5, "th", 26);
    \u0275\u0275elementStart(19, "th", 27)(20, "div", 22)(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, StepsComponent_ng_template_2_Conditional_24_Template, 1, 0, "p-sortIcon", 28)(25, StepsComponent_ng_template_2_Conditional_25_Template, 2, 3, "button", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, StepsComponent_ng_template_2_Conditional_26_Template, 6, 4, "th", 29)(27, StepsComponent_ng_template_2_Conditional_27_Template, 6, 4, "th", 30)(28, StepsComponent_ng_template_2_Conditional_28_Template, 6, 4, "th", 31)(29, StepsComponent_ng_template_2_Conditional_29_Template, 1, 0, "th");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(4, 16, "steps.columnSettings"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.steps().length ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r2.focus() && ctx_r2.columnsState().checkbox.show ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.focus() && ctx_r2.columnsState().tree.show ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 18, ctx_r2.dispRateInfo().itemsLabel));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.focus() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.itemsModified().excluded ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().belts.show ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().wagons.show ? 18 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 20, "options.column.machines"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.focus() ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.recipesModified().machines ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().beacons.show ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().power.show ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().pollution.show ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().link.show ? 29 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 41);
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const step_r12 = \u0275\u0275nextContext();
    \u0275\u0275property("id", "step_" + step_r12.id + "_" + item_r11.label);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "div", 47)(2, "p-checkbox", 48);
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_3_Conditional_0_Conditional_8_Template_p_checkbox_onChange_2_listener($event) {
      \u0275\u0275restoreView(_r13);
      const step_r12 = \u0275\u0275nextContext();
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeStepChecked(step_r12, $event.checked));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("binary", true)("ngModel", step_r12.checked);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 55);
  }
  if (rf & 2) {
    const trail_r14 = ctx.$implicit;
    const \u0275$index_171_r15 = ctx.$index;
    const \u0275$count_171_r16 = ctx.$count;
    \u0275\u0275classProp("trail", trail_r14)("last", \u0275$index_171_r15 === \u0275$count_171_r16 - 1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_2_For_1_Template, 1, 4, "div", 54, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275element(2, "div", 50);
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.stepTree()[step_r12.id]);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 58);
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext(3);
    \u0275\u0275property("id", step_r12.itemId);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275listener("click", function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const step_r12 = \u0275\u0275nextContext(2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setItemExcluded(step_r12.itemId, !ctx_r2.itemsState()[step_r12.itemId].excluded));
    });
    \u0275\u0275element(2, "i", 57);
    \u0275\u0275template(3, StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_4_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r18 = \u0275\u0275reference(4);
    const step_r12 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("hover-active", ctx_r2.itemsState()[step_r12.itemId].excluded);
    \u0275\u0275property("icon", \u0275\u0275pipeBind1(1, 4, step_r12.itemId))("pTooltip", tooltip_r18);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", step_r12.recipeObjectiveId, "");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_5_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 60);
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext(4);
    \u0275\u0275property("id", step_r12.recipeId);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_5_ng_template_3_Conditional_0_Template, 1, 1, "lab-tooltip", 60);
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(step_r12.recipeId ? 0 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 59);
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275template(2, StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_5_Conditional_2_Template, 2, 1, "span")(3, StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_5_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r19 = \u0275\u0275reference(4);
    const step_r12 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(\u0275\u0275pipeBind2(1, 4, step_r12.recipeId, "recipe"));
    \u0275\u0275property("pTooltip", tooltip_r19);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(step_r12.recipeObjectiveId != null ? 2 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44)(1, "div", 49);
    \u0275\u0275template(2, StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_2_Template, 3, 0, "div", 50);
    \u0275\u0275elementStart(3, "div", 51);
    \u0275\u0275template(4, StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_4_Template, 5, 6, "button", 52)(5, StepsComponent_ng_template_3_Conditional_0_Conditional_9_Conditional_5_Template, 5, 7, "i", 53);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    const step_r12 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    const stepsTable_r20 = \u0275\u0275reference(1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!stepsTable_r20.sortField && ((tmp_10_0 = ctx_r2.stepTree()[step_r12.id]) == null ? null : tmp_10_0.length) ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(step_r12.itemId && step_r12.recipeObjectiveId == null ? 4 : 5);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "rate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(+", \u0275\u0275pipeBind2(2, 1, step_r12.surplus, ctx_r2.columnsState().items.precision), ") ");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_10_Conditional_9_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 58);
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext(3);
    \u0275\u0275property("id", step_r12.itemId);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275listener("click", function StepsComponent_ng_template_3_Conditional_0_Conditional_10_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const step_r12 = \u0275\u0275nextContext(2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setItemExcluded(step_r12.itemId, !ctx_r2.itemsState()[step_r12.itemId].excluded));
    });
    \u0275\u0275element(2, "i", 57);
    \u0275\u0275template(3, StepsComponent_ng_template_3_Conditional_0_Conditional_10_Conditional_9_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r22 = \u0275\u0275reference(4);
    const step_r12 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("hover-active", ctx_r2.itemsState()[step_r12.itemId].excluded);
    \u0275\u0275property("icon", \u0275\u0275pipeBind1(1, 4, step_r12.itemId))("pTooltip", tooltip_r22);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 61);
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_10_Conditional_1_Template, 3, 4, "span", 62);
    \u0275\u0275elementStart(2, "span", 62);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 63)(6, "div", 22)(7, "span", 64);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, StepsComponent_ng_template_3_Conditional_0_Conditional_10_Conditional_9_Template, 5, 6, "button", 52);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const step_r12 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r12.surplus && step_r12.surplus.nonzero() ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 4, step_r12.items.sub((tmp_11_0 = step_r12.surplus) !== null && tmp_11_0 !== void 0 ? tmp_11_0 : ctx_r2.rational(0)), ctx_r2.columnsState().items.precision));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.data().itemEntities[step_r12.itemId].name);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.preferences().hideDuplicateIcons || !ctx_r2.columnsState().tree.show ? 9 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 29);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r25.value));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_1_Conditional_0_Template, 3, 4, "div", 42);
  }
  if (rf & 2) {
    const item_r25 = ctx.$implicit;
    \u0275\u0275conditional(item_r25 ? 0 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 71);
  }
  if (rf & 2) {
    const item_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r26.value);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_2_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r26 = ctx.$implicit;
    const tooltip_r27 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r27);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r26.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r26.label, " ");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 71);
  }
  if (rf & 2) {
    const beltId_r28 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", beltId_r28);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 66);
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_Template_p_dropdown_onChange_0_listener($event) {
      const defaultBeltId_r24 = \u0275\u0275restoreView(_r23);
      const step_r12 = \u0275\u0275nextContext(4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setBelt(step_r12.itemId, $event.value, defaultBeltId_r24));
    });
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_1_Template, 1, 1, "ng-template", 67)(2, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_2_Template, 7, 6, "ng-template", 68)(3, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r29 = \u0275\u0275reference(4);
    const beltId_r28 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("pTooltip", tooltip_r29)("ngModel", beltId_r28)("options", ctx_r2.options().belts);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r32 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r32.value));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 72);
  }
  if (rf & 2) {
    const item_r33 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r33.value);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_2_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const tooltip_r34 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r34);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r33.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r33.label, " ");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 72);
  }
  if (rf & 2) {
    const beltId_r28 = \u0275\u0275nextContext(3);
    \u0275\u0275property("id", beltId_r28);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 66);
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_Template_p_dropdown_onChange_0_listener($event) {
      const defaultPipeId_r31 = \u0275\u0275restoreView(_r30);
      const step_r12 = \u0275\u0275nextContext(5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setBelt(step_r12.itemId, $event.value, defaultPipeId_r31));
    });
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_1_Template, 3, 4, "ng-template", 67)(2, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_2_Template, 7, 6, "ng-template", 68)(3, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r35 = \u0275\u0275reference(4);
    const beltId_r28 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("pTooltip", tooltip_r35)("ngModel", beltId_r28)("options", ctx_r2.options().pipes);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 72);
  }
  if (rf & 2) {
    const beltId_r28 = \u0275\u0275nextContext(3);
    \u0275\u0275property("id", beltId_r28);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 59);
    \u0275\u0275pipe(1, "iconClass");
    \u0275\u0275template(2, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_1_ng_template_2_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r36 = \u0275\u0275reference(3);
    const beltId_r28 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, beltId_r28));
    \u0275\u0275property("pTooltip", tooltip_r36);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_0_Template, 5, 3, "p-dropdown", 65)(1, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Conditional_1_Template, 4, 5, "i", 53);
  }
  if (rf & 2) {
    let tmp_14_0;
    const beltId_r28 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional((tmp_14_0 = ctx_r2.data().pipeIds.indexOf(beltId_r28) !== -1 && ctx_r2.settings().pipeId) ? 0 : 1, tmp_14_0);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 61)(1, "span", 62);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 63)(5, "div", 22);
    \u0275\u0275template(6, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_6_Template, 5, 3, "p-dropdown", 65)(7, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Conditional_7_Template, 2, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const step_r12 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, step_r12.belts, ctx_r2.columnsState().belts.precision));
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_14_0 = ctx_r2.data().beltIds.indexOf(ctx) !== -1 && ctx_r2.settings().beltId) ? 6 : 7, tmp_14_0);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Conditional_0_Template, 8, 5);
  }
  if (rf & 2) {
    let tmp_11_0;
    const step_r12 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_11_0 = ctx_r2.itemsState()[step_r12.itemId].beltId) ? 0 : -1, tmp_11_0);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 29);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_0_Template, 1, 1)(1, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Conditional_1_Template, 1, 0, "td", 29);
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext();
    \u0275\u0275conditional(step_r12.itemId && step_r12.belts ? 0 : 1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r39 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r39.value));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_1_Conditional_0_Template, 3, 4, "div", 42);
  }
  if (rf & 2) {
    const item_r39 = ctx.$implicit;
    \u0275\u0275conditional(item_r39 ? 0 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 73);
  }
  if (rf & 2) {
    const item_r40 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r40.value);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_2_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r40 = ctx.$implicit;
    const tooltip_r41 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r41);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r40.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r40.label, " ");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 73);
  }
  if (rf & 2) {
    const wagonId_r42 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", wagonId_r42);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 66);
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_Template_p_dropdown_onChange_0_listener($event) {
      const defaultCargoWagonId_r38 = \u0275\u0275restoreView(_r37);
      const step_r12 = \u0275\u0275nextContext(4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setWagon(step_r12.itemId, $event.value, defaultCargoWagonId_r38));
    });
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_1_Template, 1, 1, "ng-template", 67)(2, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_2_Template, 7, 6, "ng-template", 68)(3, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r43 = \u0275\u0275reference(4);
    const wagonId_r42 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("pTooltip", tooltip_r43)("ngModel", wagonId_r42)("options", ctx_r2.options().cargoWagons);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r46 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r46.value));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_1_Conditional_0_Template, 3, 4, "div", 42);
  }
  if (rf & 2) {
    const item_r46 = ctx.$implicit;
    \u0275\u0275conditional(item_r46 ? 0 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 74);
  }
  if (rf & 2) {
    const item_r47 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r47.value);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_2_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const item_r47 = ctx.$implicit;
    const tooltip_r48 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r48);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r47.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r47.label, " ");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 74);
  }
  if (rf & 2) {
    const wagonId_r42 = \u0275\u0275nextContext(3);
    \u0275\u0275property("id", wagonId_r42);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 66);
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_Template_p_dropdown_onChange_0_listener($event) {
      const defaultFluidWagonId_r45 = \u0275\u0275restoreView(_r44);
      const step_r12 = \u0275\u0275nextContext(5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setWagon(step_r12.itemId, $event.value, defaultFluidWagonId_r45));
    });
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_1_Template, 1, 1, "ng-template", 67)(2, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_2_Template, 7, 6, "ng-template", 68)(3, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r49 = \u0275\u0275reference(4);
    const wagonId_r42 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("pTooltip", tooltip_r49)("ngModel", wagonId_r42)("options", ctx_r2.options().fluidWagons);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Conditional_0_Template, 5, 3, "p-dropdown", 65);
  }
  if (rf & 2) {
    let tmp_14_0;
    const wagonId_r42 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional((tmp_14_0 = ctx_r2.data().fluidWagonIds.indexOf(wagonId_r42) !== -1 && ctx_r2.settings().fluidWagonId) ? 0 : -1, tmp_14_0);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 61)(1, "span", 62);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 63)(5, "div", 22);
    \u0275\u0275template(6, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_6_Template, 5, 3, "p-dropdown", 65)(7, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Conditional_7_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const step_r12 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, step_r12.wagons, ctx_r2.columnsState().wagons.precision));
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_14_0 = ctx_r2.data().cargoWagonIds.indexOf(ctx) !== -1 && ctx_r2.settings().cargoWagonId) ? 6 : 7, tmp_14_0);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Conditional_0_Template, 8, 5);
  }
  if (rf & 2) {
    let tmp_11_0;
    const step_r12 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_11_0 = ctx_r2.itemsState()[step_r12.itemId].wagonId) ? 0 : -1, tmp_11_0);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 29);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_0_Template, 1, 1)(1, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Conditional_1_Template, 1, 0, "td", 29);
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext();
    \u0275\u0275conditional(step_r12.itemId && step_r12.wagons ? 0 : 1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "machineRate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const machineId_r50 = \u0275\u0275nextContext();
    const step_r12 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(2, 1, step_r12.machines, ctx_r2.columnsState().machines.precision, machineId_r50));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", step_r12.recipeObjectiveId, "");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 60);
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext(4);
    \u0275\u0275property("id", step_r12.recipeId);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r51);
      const step_r12 = \u0275\u0275nextContext(3);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addObjective({ targetId: step_r12.recipeId, unit: ctx_r2.ObjectiveUnit.Machines }));
    });
    \u0275\u0275elementStart(1, "span", 80);
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275template(3, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_3_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "i", 81);
    \u0275\u0275template(5, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_3_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r52 = \u0275\u0275reference(6);
    const step_r12 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pTooltip", tooltip_r52);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind2(2, 4, step_r12.recipeId, "recipe"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(step_r12.recipeObjectiveId ? 3 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r54 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r54.value));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_2_Conditional_0_Template, 3, 4, "div", 42);
  }
  if (rf & 2) {
    const item_r54 = ctx.$implicit;
    \u0275\u0275conditional(item_r54 ? 0 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 83);
  }
  if (rf & 2) {
    const item_r55 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r55.value);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_3_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r55 = ctx.$implicit;
    const tooltip_r56 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r56);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r55.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r55.label, " ");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 83);
  }
  if (rf & 2) {
    const machineId_r50 = \u0275\u0275nextContext(3);
    \u0275\u0275property("id", machineId_r50);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 82);
    \u0275\u0275pipe(1, "options");
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_Template_p_dropdown_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r53);
      const step_r12 = \u0275\u0275nextContext(3);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeRecipeField(step_r12, $event.value, ctx_r2.machinesState(), ctx_r2.data(), ctx_r2.RecipeField.Machine));
    });
    \u0275\u0275template(2, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_2_Template, 1, 1, "ng-template", 67)(3, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_3_Template, 7, 6, "ng-template", 68)(4, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_ng_template_4_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r57 = \u0275\u0275reference(5);
    const machineId_r50 = \u0275\u0275nextContext(2);
    const step_r12 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pTooltip", tooltip_r57)("options", \u0275\u0275pipeBind2(1, 3, step_r12.recipe.producers, ctx_r2.data().itemEntities))("ngModel", machineId_r50);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputNumber", 84, 5);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onBlur", function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_6_Template_p_inputNumber_onBlur_0_listener() {
      let tmp_15_0;
      \u0275\u0275restoreView(_r58);
      const overclockInput_r59 = \u0275\u0275reference(1);
      const step_r12 = \u0275\u0275nextContext(3);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeRecipeField(step_r12, (tmp_15_0 = overclockInput_r59.value) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : 100, ctx_r2.machinesState(), ctx_r2.data(), ctx_r2.RecipeField.Overclock));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext(3);
    \u0275\u0275property("min", 1)("max", 250)("step", 10)("maxFractionDigits", 2)("size", 3)("pTooltip", \u0275\u0275pipeBind1(2, 7, "steps.overclockTooltip"))("ngModel", step_r12.recipeSettings.overclock);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputNumber", 85, 6);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onBlur", function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Template_p_inputNumber_onBlur_0_listener() {
      let tmp_15_0;
      \u0275\u0275restoreView(_r60);
      const duplicatorsInput_r61 = \u0275\u0275reference(1);
      const step_r12 = \u0275\u0275nextContext(3);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeRecipeField(step_r12, (tmp_15_0 = duplicatorsInput_r61.value) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : 0, ctx_r2.machinesState(), ctx_r2.data(), ctx_r2.RecipeField.Overclock));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext(3);
    \u0275\u0275property("min", 0)("step", 1)("maxFractionDigits", 0)("showButtons", true)("size", 3)("pTooltip", \u0275\u0275pipeBind1(2, 7, "steps.modifierCountTooltip"))("ngModel", step_r12.recipeSettings.overclock);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 87);
  }
  if (rf & 2) {
    const fuelId_r62 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", fuelId_r62);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "i", 86);
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275template(3, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tooltip_r63 = \u0275\u0275reference(4);
    const fuelId_r62 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, fuelId_r62));
    \u0275\u0275property("pTooltip", tooltip_r63);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r65 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r65.value));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_1_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 87);
  }
  if (rf & 2) {
    const item_r66 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r66.value);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_1_ng_template_2_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r66 = ctx.$implicit;
    const tooltip_r67 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r67);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r66.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r66.label, " ");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 87);
  }
  if (rf & 2) {
    const fuelId_r62 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", fuelId_r62);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 66);
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_1_Template_p_dropdown_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r64);
      const step_r12 = \u0275\u0275nextContext(4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeRecipeField(step_r12, $event.value, ctx_r2.machinesState(), ctx_r2.data(), ctx_r2.RecipeField.Fuel));
    });
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_1_ng_template_1_Template, 3, 4, "ng-template", 67)(2, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_1_ng_template_2_Template, 7, 6, "ng-template", 68)(3, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_1_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_18_0;
    const tooltip_r68 = \u0275\u0275reference(4);
    const fuelId_r62 = \u0275\u0275nextContext();
    const step_r12 = \u0275\u0275nextContext(3);
    \u0275\u0275property("pTooltip", tooltip_r68)("ngModel", fuelId_r62)("options", (tmp_18_0 = step_r12.recipeSettings.fuelOptions) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : \u0275\u0275pureFunction0(3, _c2));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_0_Template, 5, 5, "div", 22)(1, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Conditional_1_Template, 5, 4, "p-dropdown", 65);
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(step_r12.recipe.isBurn ? 0 : 1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_9_For_1_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r71 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r71.value));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_9_For_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_9_For_1_ng_template_1_Conditional_0_Template, 3, 4, "div", 42);
  }
  if (rf & 2) {
    const item_r71 = ctx.$implicit;
    \u0275\u0275conditional(item_r71 ? 0 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_9_For_1_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 90);
  }
  if (rf & 2) {
    const item_r72 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r72.value);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_9_For_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_9_For_1_ng_template_2_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r72 = ctx.$implicit;
    const tooltip_r73 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", item_r72.value !== "module" ? tooltip_r73 : void 0);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r72.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r72.label, " ");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_9_For_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 90);
  }
  if (rf & 2) {
    const moduleId_r74 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", moduleId_r74);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_9_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 89);
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_9_For_1_Template_p_dropdown_onChange_0_listener($event) {
      const \u0275$index_502_r70 = \u0275\u0275restoreView(_r69).$index;
      const step_r12 = \u0275\u0275nextContext(4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeRecipeField(step_r12, $event.value, ctx_r2.machinesState(), ctx_r2.data(), ctx_r2.RecipeField.Modules, \u0275$index_502_r70));
    });
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_9_For_1_ng_template_1_Template, 1, 1, "ng-template", 67)(2, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_9_For_1_ng_template_2_Template, 7, 6, "ng-template", 68)(3, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_9_For_1_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_29_0;
    const moduleId_r74 = ctx.$implicit;
    const \u0275$index_502_r70 = ctx.$index;
    const \u0275$count_502_r75 = ctx.$count;
    const tooltip_r76 = \u0275\u0275reference(4);
    const step_r12 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("last", \u0275$index_502_r70 === \u0275$count_502_r75 - 1);
    \u0275\u0275property("pTooltip", moduleId_r74 !== "module" ? tooltip_r76 : void 0)("options", (tmp_29_0 = step_r12.recipeSettings.moduleOptions) !== null && tmp_29_0 !== void 0 ? tmp_29_0 : \u0275\u0275pureFunction0(5, _c2))("ngModel", moduleId_r74);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_9_For_1_Template, 5, 6, "p-dropdown", 88, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275repeater(ctx);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "span", 64);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_3_Template, 7, 7, "button", 75)(4, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_4_Template, 6, 6, "p-dropdown", 76);
    \u0275\u0275pipe(5, "machineShow");
    \u0275\u0275template(6, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_6_Template, 3, 9, "p-inputNumber", 77)(7, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_7_Template, 3, 9, "p-inputNumber", 78)(8, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_8_Template, 2, 1)(9, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Conditional_9_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_17_0;
    let tmp_18_0;
    const machineId_r50 = \u0275\u0275nextContext();
    const step_r12 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r12.recipe.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.preferences().hideDuplicateIcons || step_r12.itemId != null && step_r12.itemId !== step_r12.recipeId ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind2(5, 7, machineId_r50, ctx_r2.data().game) ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.data().game === ctx_r2.Game.Satisfactory ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.data().game === ctx_r2.Game.FinalFactory ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_17_0 = step_r12.recipeSettings == null ? null : step_r12.recipeSettings.fuelId) ? 8 : -1, tmp_17_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_18_0 = step_r12.recipeSettings == null ? null : step_r12.recipeSettings.moduleIds) ? 9 : -1, tmp_18_0);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 61);
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_1_Template, 3, 5, "span", 62);
    \u0275\u0275pipe(2, "machineShowRate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 63);
    \u0275\u0275template(4, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Conditional_4_Template, 10, 10, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r12.machines && step_r12.machines.nonzero() && \u0275\u0275pipeBind2(2, 2, ctx, ctx_r2.data().game) ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(step_r12.recipeId && step_r12.recipe && step_r12.recipeSettings ? 4 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 29);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 95);
    \u0275\u0275listener("click", function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_2_Conditional_1_Template_button_click_0_listener() {
      let tmp_24_0;
      \u0275\u0275restoreView(_r77);
      const step_r12 = \u0275\u0275nextContext(4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addBeacon((tmp_24_0 = step_r12.recipeObjectiveId) !== null && tmp_24_0 !== void 0 ? tmp_24_0 : step_r12.recipeId, step_r12.recipeObjectiveId != null));
    });
    \u0275\u0275elementEnd();
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 96);
    \u0275\u0275listener("click", function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_2_Conditional_2_Template_button_click_0_listener() {
      let tmp_24_0;
      \u0275\u0275restoreView(_r78);
      const \u0275$index_538_r79 = \u0275\u0275nextContext().$index;
      const step_r12 = \u0275\u0275nextContext(3);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeBeacon((tmp_24_0 = step_r12.recipeObjectiveId) !== null && tmp_24_0 !== void 0 ? tmp_24_0 : step_r12.recipeId, \u0275$index_538_r79, step_r12.recipeObjectiveId != null));
    });
    \u0275\u0275elementEnd();
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "lab-input-number", 97);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("setValue", function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_2_Conditional_3_Template_lab_input_number_setValue_0_listener($event) {
      \u0275\u0275restoreView(_r80);
      const \u0275$index_538_r79 = \u0275\u0275nextContext().$index;
      const step_r12 = \u0275\u0275nextContext(3);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeRecipeField(step_r12, $event, ctx_r2.machinesState(), ctx_r2.data(), ctx_r2.RecipeField.BeaconCount, \u0275$index_538_r79));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const beacon_r81 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 3, "steps.beaconEachTooltip"))("value", beacon_r81.count)("textButtons", true);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_2_Conditional_1_Template, 1, 0, "button", 92)(2, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_2_Conditional_2_Template, 1, 0, "button", 93)(3, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_2_Conditional_3_Template, 2, 5, "lab-input-number", 94);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const beacon_r81 = ctx.$implicit;
    const \u0275$index_538_r79 = ctx.$index;
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_538_r79 === 0 ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(beacon_r81.count ? 3 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_Conditional_1_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r84 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r84.value));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_Conditional_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_Conditional_1_ng_template_1_Conditional_0_Template, 3, 4, "div", 42);
  }
  if (rf & 2) {
    const item_r84 = ctx.$implicit;
    \u0275\u0275conditional(item_r84 ? 0 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_Conditional_1_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 99);
  }
  if (rf & 2) {
    const item_r85 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r85.value);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_Conditional_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_Conditional_1_ng_template_2_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r85 = ctx.$implicit;
    const tooltip_r86 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r86);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r85.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r85.label, " ");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_Conditional_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 99);
  }
  if (rf & 2) {
    const beacon_r87 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("id", beacon_r87.id);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 82);
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_Conditional_1_Template_p_dropdown_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r82);
      const \u0275$index_553_r83 = \u0275\u0275nextContext().$index;
      const step_r12 = \u0275\u0275nextContext(3);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeRecipeField(step_r12, $event.value, ctx_r2.machinesState(), ctx_r2.data(), ctx_r2.RecipeField.Beacon, \u0275$index_553_r83));
    });
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_Conditional_1_ng_template_1_Template, 1, 1, "ng-template", 67)(2, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_Conditional_1_ng_template_2_Template, 7, 6, "ng-template", 68)(3, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_Conditional_1_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r88 = \u0275\u0275reference(4);
    const beacon_r87 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("pTooltip", tooltip_r88)("options", ctx_r2.options().beacons)("ngModel", beacon_r87.id);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_For_3_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r91 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r91.value));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_For_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_For_3_ng_template_1_Conditional_0_Template, 3, 4, "div", 42);
  }
  if (rf & 2) {
    const item_r91 = ctx.$implicit;
    \u0275\u0275conditional(item_r91 ? 0 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_For_3_ng_template_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 90);
  }
  if (rf & 2) {
    const item_r92 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r92.value);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_For_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_For_3_ng_template_2_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r92 = ctx.$implicit;
    const tooltip_r93 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", item_r92.value !== "module" ? tooltip_r93 : void 0);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r92.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r92.label, " ");
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_For_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 90);
  }
  if (rf & 2) {
    const moduleId_r94 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", moduleId_r94);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 89);
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_For_3_Template_p_dropdown_onChange_0_listener($event) {
      const \u0275$index_585_r90 = \u0275\u0275restoreView(_r89).$index;
      const \u0275$index_553_r83 = \u0275\u0275nextContext().$index;
      const step_r12 = \u0275\u0275nextContext(3);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeRecipeField(step_r12, $event.value, ctx_r2.machinesState(), ctx_r2.data(), ctx_r2.RecipeField.BeaconModules, \u0275$index_553_r83, \u0275$index_585_r90));
    });
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_For_3_ng_template_1_Template, 1, 1, "ng-template", 67)(2, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_For_3_ng_template_2_Template, 7, 6, "ng-template", 68)(3, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_For_3_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_37_0;
    const moduleId_r94 = ctx.$implicit;
    const \u0275$index_585_r90 = ctx.$index;
    const \u0275$count_585_r95 = ctx.$count;
    const tooltip_r96 = \u0275\u0275reference(4);
    const beacon_r87 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("last", \u0275$index_585_r90 === \u0275$count_585_r95 - 1);
    \u0275\u0275property("pTooltip", moduleId_r94 !== "module" ? tooltip_r96 : void 0)("options", (tmp_37_0 = beacon_r87.moduleOptions) !== null && tmp_37_0 !== void 0 ? tmp_37_0 : \u0275\u0275pureFunction0(5, _c2))("ngModel", moduleId_r94);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r97 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "lab-input-number", 100);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("setValue", function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_Conditional_4_Template_lab_input_number_setValue_0_listener($event) {
      \u0275\u0275restoreView(_r97);
      const \u0275$index_553_r83 = \u0275\u0275nextContext().$index;
      const step_r12 = \u0275\u0275nextContext(3);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeRecipeField(step_r12, $event, ctx_r2.machinesState(), ctx_r2.data(), ctx_r2.RecipeField.BeaconTotal, \u0275$index_553_r83));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const beacon_r87 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 3, "steps.beaconTotalTooltip"))("value", beacon_r87.total)("textButtons", true);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_Conditional_1_Template, 5, 3, "p-dropdown", 76);
    \u0275\u0275repeaterCreate(2, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_For_3_Template, 5, 6, "p-dropdown", 88, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275template(4, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_Conditional_4_Template, 2, 5, "lab-input-number", 98);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const beacon_r87 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(beacon_r87.id ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(beacon_r87.moduleIds);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(beacon_r87.total ? 4 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 91);
    \u0275\u0275repeaterCreate(1, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_2_Template, 4, 2, "div", 42, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 63);
    \u0275\u0275repeaterCreate(4, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_For_5_Template, 5, 2, "div", 42, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(step_r12.recipeSettings.beacons);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(step_r12.recipeSettings.beacons);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 29);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_0_Template, 6, 0)(1, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Conditional_1_Template, 1, 0, "td", 29);
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext();
    \u0275\u0275conditional(step_r12.recipeId && step_r12.recipeSettings ? 0 : 1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_17_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "power");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(2, 1, step_r12.power, ctx_r2.columnsState().power.precision, ctx_r2.effectivePowerUnit()));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 45);
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_17_Conditional_1_Template, 3, 5, "span", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r12.power && step_r12.power.nonzero() ? 1 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "rate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, step_r12.pollution, ctx_r2.columnsState().pollution.precision));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 45);
    \u0275\u0275template(1, StepsComponent_ng_template_3_Conditional_0_Conditional_18_Conditional_1_Template, 3, 4, "span", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r12.pollution && step_r12.pollution.nonzero() ? 1 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_19_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 104);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function StepsComponent_ng_template_3_Conditional_0_Conditional_19_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r98);
      const step_r12 = \u0275\u0275nextContext(2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.resetStep(step_r12));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 1, "steps.stepUndoTooltip"));
  }
}
function StepsComponent_ng_template_3_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46)(1, "div", 42)(2, "a", 101);
    \u0275\u0275pipe(3, "stepHref");
    \u0275\u0275element(4, "button", 102);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StepsComponent_ng_template_3_Conditional_0_Conditional_19_Conditional_6_Template, 2, 3, "button", 103);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r12 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind3(3, 3, step_r12, ctx_r2.routerSvc.zipConfig(), ctx_r2.data()), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(5, 7, "steps.openNewTabTooltip"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(step_r12.recipeId && ctx_r2.stepsModified().recipes[step_r12.recipeId] || step_r12.itemId && ctx_r2.stepsModified().items[step_r12.itemId] || step_r12.recipeObjectiveId && ctx_r2.stepsModified().objectives[step_r12.recipeObjectiveId] ? 6 : -1);
  }
}
function StepsComponent_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275element(2, "div", 41);
    \u0275\u0275repeaterCreate(3, StepsComponent_ng_template_3_Conditional_0_For_4_Template, 1, 1, "div", 41, _forTrack0);
    \u0275\u0275elementStart(5, "div", 42);
    \u0275\u0275element(6, "button", 43);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, StepsComponent_ng_template_3_Conditional_0_Conditional_8_Template, 3, 2, "td")(9, StepsComponent_ng_template_3_Conditional_0_Conditional_9_Template, 6, 2, "td", 44)(10, StepsComponent_ng_template_3_Conditional_0_Conditional_10_Template, 10, 7)(11, StepsComponent_ng_template_3_Conditional_0_Conditional_11_Template, 1, 0, "td", 29)(12, StepsComponent_ng_template_3_Conditional_0_Conditional_12_Template, 2, 1)(13, StepsComponent_ng_template_3_Conditional_0_Conditional_13_Template, 2, 1)(14, StepsComponent_ng_template_3_Conditional_0_Conditional_14_Template, 5, 5)(15, StepsComponent_ng_template_3_Conditional_0_Conditional_15_Template, 1, 0, "td", 29)(16, StepsComponent_ng_template_3_Conditional_0_Conditional_16_Template, 2, 1)(17, StepsComponent_ng_template_3_Conditional_0_Conditional_17_Template, 2, 1, "td", 45)(18, StepsComponent_ng_template_3_Conditional_0_Conditional_18_Template, 2, 1, "td", 45)(19, StepsComponent_ng_template_3_Conditional_0_Conditional_19_Template, 7, 9, "td", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_19_0;
    const step_r12 = ctx;
    const expanded_r99 = \u0275\u0275nextContext().expanded;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "step_" + step_r12.id);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.stepDetails()[step_r12.id].tabs);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("fa-rotate-90", expanded_r99);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(7, 15, expanded_r99 ? "steps.hideDetails" : "steps.showDetails"))("pRowToggler", step_r12);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.focus() && ctx_r2.columnsState().checkbox.show ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.focus() && ctx_r2.columnsState().tree.show ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r12.itemId && step_r12.items ? 10 : 11);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.columnsState().belts.show ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().wagons.show ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_19_0 = step_r12.recipeSettings == null ? null : step_r12.recipeSettings.machineId) ? 14 : 15, tmp_19_0);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.columnsState().beacons.show ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().power.show ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().pollution.show ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().link.show ? 19 : -1);
  }
}
function StepsComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_3_Conditional_0_Template, 20, 17, "tr");
    \u0275\u0275pipe(1, "asStep");
  }
  if (rf & 2) {
    let tmp_7_0;
    const _step_r100 = ctx.$implicit;
    \u0275\u0275conditional((tmp_7_0 = \u0275\u0275pipeBind1(1, 1, _step_r100)) ? 0 : -1, tmp_7_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 110);
    \u0275\u0275element(1, "span", 111);
    \u0275\u0275elementStart(2, "span", 112);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r103 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.stepDetailIcon[item_r103.label]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 3, "options.stepDetailTab." + item_r103.label));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 105);
    \u0275\u0275template(1, StepsComponent_ng_template_4_Conditional_0_Case_9_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 113);
    \u0275\u0275elementStart(2, "td", 114);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(4);
    const leftPad_r104 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", leftPad_r104);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "steps.sources"), " ");
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_For_2_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_9_For_2_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 115);
  }
  if (rf & 2) {
    const output_r105 = \u0275\u0275nextContext().$implicit;
    const step_r102 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    const detailRow_r106 = \u0275\u0275reference(11);
    \u0275\u0275property("ngTemplateOutlet", detailRow_r106)("ngTemplateOutletContext", \u0275\u0275pureFunctionV(2, _c3, [step_r102.items == null ? null : step_r102.items.mul(output_r105.value), step_r102.itemId, step_r102.belts == null ? null : step_r102.belts.mul(output_r105.value), ctx_r2.itemsState()[step_r102.itemId].beltId, step_r102.wagons == null ? null : step_r102.wagons.mul(output_r105.value), ctx_r2.itemsState()[step_r102.itemId].wagonId, output_r105.step == null ? null : output_r105.step.machines, output_r105.step == null ? null : output_r105.step.recipeSettings == null ? null : output_r105.step.recipeSettings.machineId, output_r105.step == null ? null : output_r105.step.recipeId, output_r105.step == null ? null : output_r105.step.recipeObjectiveId, output_r105.value, step_r102.itemId, output_r105.inputs]));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_9_For_2_Conditional_0_Template, 1, 16, "ng-container");
  }
  if (rf & 2) {
    const step_r102 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(step_r102.itemId ? 0 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 105);
    \u0275\u0275template(1, StepsComponent_ng_template_4_Conditional_0_Case_9_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 113);
    \u0275\u0275elementStart(2, "td", 114);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(4);
    const leftPad_r104 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", leftPad_r104);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "steps.destinations"), " ");
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_For_5_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_9_For_5_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 115);
  }
  if (rf & 2) {
    let tmp_22_0;
    const parent_r107 = \u0275\u0275nextContext().$implicit;
    const step_r102 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    const detailRow_r106 = \u0275\u0275reference(11);
    \u0275\u0275property("ngTemplateOutlet", detailRow_r106)("ngTemplateOutletContext", \u0275\u0275pureFunctionV(2, _c4, [step_r102.items == null ? null : step_r102.items.mul(parent_r107.value), step_r102.itemId, step_r102.belts == null ? null : step_r102.belts.mul(parent_r107.value), ctx_r2.itemsState()[step_r102.itemId].beltId, step_r102.wagons == null ? null : step_r102.wagons.mul(parent_r107.value), ctx_r2.itemsState()[step_r102.itemId].wagonId, ctx_r2.stepDetails()[step_r102.id].outputs.length === 1 ? step_r102.machines == null ? null : step_r102.machines.mul(parent_r107.value) : null, ctx_r2.stepDetails()[step_r102.id].outputs.length === 1 ? step_r102.recipeSettings == null ? null : step_r102.recipeSettings.machineId : null, step_r102.recipeId, step_r102.recipeObjectiveId, parent_r107.value, (tmp_22_0 = ctx_r2.stepById()[parent_r107.key]) == null ? null : tmp_22_0.recipeId, (tmp_22_0 = ctx_r2.stepById()[parent_r107.key]) == null ? null : tmp_22_0.recipeObjectiveId, parent_r107.key === ""]));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_9_For_5_Conditional_0_Template, 1, 17, "ng-container");
  }
  if (rf & 2) {
    const step_r102 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(step_r102.itemId ? 0 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_9_Conditional_0_Template, 5, 4, "tr", 105);
    \u0275\u0275repeaterCreate(1, StepsComponent_ng_template_4_Conditional_0_Case_9_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275template(3, StepsComponent_ng_template_4_Conditional_0_Case_9_Conditional_3_Template, 5, 4, "tr", 105);
    \u0275\u0275repeaterCreate(4, StepsComponent_ng_template_4_Conditional_0_Case_9_For_5_Template, 1, 1, null, null, _forTrack1);
    \u0275\u0275pipe(6, "keyvalue");
  }
  if (rf & 2) {
    const step_r102 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.stepDetails()[step_r102.id].outputs.length ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.stepDetails()[step_r102.id].outputs);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(step_r102.parents ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind2(6, 2, step_r102.parents, ctx_r2.trackSvc.sortByValue));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_For_6_Conditional_0_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_For_6_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_For_6_Conditional_0_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 115);
  }
  if (rf & 2) {
    const row_r108 = \u0275\u0275nextContext();
    const output_r109 = \u0275\u0275nextContext().$implicit;
    const step_r102 = \u0275\u0275nextContext(4);
    \u0275\u0275nextContext(2);
    const detailRow_r106 = \u0275\u0275reference(11);
    \u0275\u0275property("ngTemplateOutlet", detailRow_r106)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c6, row_r108.step.items.mul(row_r108.percent).div(step_r102.recipe.productivity), output_r109.key));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_For_6_Conditional_0_Conditional_0_Template, 1, 5, "ng-container");
  }
  if (rf & 2) {
    const row_r108 = ctx;
    \u0275\u0275conditional(row_r108.step && row_r108.percent && row_r108.step.items ? 0 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_For_6_Conditional_0_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_22_0;
    const output_r109 = ctx.$implicit;
    const step_r102 = \u0275\u0275nextContext(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_22_0 = \u0275\u0275pureFunction2(1, _c5, ctx_r2.stepByItemEntities()[output_r109.key], step_r102.outputs == null ? null : step_r102.outputs[output_r109.key])) ? 0 : -1, tmp_22_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 105);
    \u0275\u0275template(1, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 113);
    \u0275\u0275elementStart(2, "td", 114);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_For_6_Template, 1, 4, null, null, _forTrack1);
    \u0275\u0275pipe(7, "keyvalue");
  }
  if (rf & 2) {
    const step_r102 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    const leftPad_r104 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", leftPad_r104);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "steps.depletion"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(7, 4, step_r102.outputs, ctx_r2.trackSvc.sortByValue));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 115);
  }
  if (rf & 2) {
    const output_r110 = ctx;
    const row_r111 = \u0275\u0275nextContext(2);
    const input_r112 = \u0275\u0275nextContext().$implicit;
    const step_r102 = \u0275\u0275nextContext(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    const detailRow_r106 = \u0275\u0275reference(11);
    \u0275\u0275property("ngTemplateOutlet", detailRow_r106)("ngTemplateOutletContext", \u0275\u0275pureFunctionV(2, _c7, [row_r111.step.items == null ? null : row_r111.step.items.mul(row_r111.percent), input_r112.key, row_r111.step.belts == null ? null : row_r111.step.belts.mul(row_r111.percent), ctx_r2.itemsState()[row_r111.step.itemId].beltId, row_r111.step.wagons == null ? null : row_r111.step.wagons.mul(row_r111.percent), ctx_r2.itemsState()[row_r111.step.itemId].wagonId, output_r110.step == null ? null : output_r110.step.machines, output_r110.step == null ? null : output_r110.step.recipeSettings == null ? null : output_r110.step.recipeSettings.machineId, output_r110.step == null ? null : output_r110.step.recipeId, output_r110.step == null ? null : output_r110.step.recipeObjectiveId, row_r111.percent, step_r102.recipeId, step_r102.recipeObjectiveId]));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 115);
  }
  if (rf & 2) {
    const row_r111 = \u0275\u0275nextContext(2);
    const input_r112 = \u0275\u0275nextContext().$implicit;
    const step_r102 = \u0275\u0275nextContext(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    const detailRow_r106 = \u0275\u0275reference(11);
    \u0275\u0275property("ngTemplateOutlet", detailRow_r106)("ngTemplateOutletContext", \u0275\u0275pureFunctionV(2, _c8, [row_r111.step.items == null ? null : row_r111.step.items.mul(row_r111.percent), input_r112.key, row_r111.step.belts == null ? null : row_r111.step.belts.mul(row_r111.percent), ctx_r2.itemsState()[row_r111.step.itemId].beltId, row_r111.step.wagons == null ? null : row_r111.step.wagons.mul(row_r111.percent), ctx_r2.itemsState()[row_r111.step.itemId].wagonId, row_r111.percent, step_r102.recipeId, step_r102.recipeObjectiveId]));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Conditional_0_Template, 1, 16, "ng-container")(1, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Conditional_1_Template, 1, 12, "ng-container");
  }
  if (rf & 2) {
    let tmp_25_0;
    const row_r111 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(7);
    \u0275\u0275conditional((tmp_25_0 = ctx_r2.stepDetails()[row_r111.step.id].outputs.length === 1 && ctx_r2.stepDetails()[row_r111.step.id].outputs[0]) ? 0 : 1, tmp_25_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Conditional_0_Template, 2, 1);
  }
  if (rf & 2) {
    const row_r111 = ctx;
    \u0275\u0275conditional(row_r111.step.itemId && row_r111.percent ? 0 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Conditional_0_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_22_0;
    const input_r112 = ctx.$implicit;
    const step_r102 = \u0275\u0275nextContext(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_22_0 = \u0275\u0275pureFunction2(1, _c5, ctx_r2.stepByItemEntities()[input_r112.key], (tmp_22_0 = ctx_r2.stepByItemEntities()[input_r112.key].parents) == null ? null : tmp_22_0[step_r102.id])) ? 0 : -1, tmp_22_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 105);
    \u0275\u0275template(1, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 113);
    \u0275\u0275elementStart(2, "td", 114);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_For_6_Template, 1, 4, null, null, _forTrack1);
    \u0275\u0275pipe(7, "keyvalue");
  }
  if (rf & 2) {
    const step_r102 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    const leftPad_r104 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", leftPad_r104);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "steps.inputs"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(7, 4, step_r102.recipe.in, ctx_r2.trackSvc.sortByValue));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_For_24_Conditional_0_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_For_24_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_For_24_Conditional_0_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 115);
  }
  if (rf & 2) {
    const row_r113 = \u0275\u0275nextContext();
    const output_r114 = \u0275\u0275nextContext().$implicit;
    const step_r102 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    const detailRow_r106 = \u0275\u0275reference(11);
    \u0275\u0275property("ngTemplateOutlet", detailRow_r106)("ngTemplateOutletContext", \u0275\u0275pureFunctionV(2, _c9, [row_r113.step.items == null ? null : row_r113.step.items.mul(row_r113.percent), output_r114.key, row_r113.step.belts == null ? null : row_r113.step.belts.mul(row_r113.percent), ctx_r2.itemsState()[row_r113.step.itemId].beltId, row_r113.step.wagons == null ? null : row_r113.step.wagons.mul(row_r113.percent), ctx_r2.itemsState()[row_r113.step.itemId].wagonId, step_r102.machines, step_r102.recipeSettings == null ? null : step_r102.recipeSettings.machineId, step_r102.recipeId, step_r102.recipeObjectiveId, row_r113.percent, output_r114.key, step_r102.recipeObjectiveId]));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_For_24_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_For_24_Conditional_0_Conditional_0_Template, 1, 16, "ng-container");
  }
  if (rf & 2) {
    const row_r113 = ctx;
    \u0275\u0275conditional(row_r113.step.itemId && row_r113.percent ? 0 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_For_24_Conditional_0_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_21_0;
    const output_r114 = ctx.$implicit;
    const step_r102 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_21_0 = \u0275\u0275pureFunction2(1, _c5, ctx_r2.stepByItemEntities()[output_r114.key], step_r102.outputs == null ? null : step_r102.outputs[output_r114.key])) ? 0 : -1, tmp_21_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_0_Template, 8, 7)(1, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Conditional_1_Template, 8, 7);
    \u0275\u0275pipe(2, "keyvalue");
    \u0275\u0275elementStart(3, "tr", 105);
    \u0275\u0275template(4, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_ng_container_4_Template, 1, 0, "ng-container", 113);
    \u0275\u0275elementStart(5, "td", 114);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "tr", 105);
    \u0275\u0275template(9, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_ng_container_9_Template, 1, 0, "ng-container", 113);
    \u0275\u0275elementStart(10, "td", 61)(11, "span", 62);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td", 63)(15, "div", 42);
    \u0275\u0275element(16, "i", 116);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "td", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "tr", 105);
    \u0275\u0275template(19, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_ng_container_19_Template, 1, 0, "ng-container", 113);
    \u0275\u0275elementStart(20, "td", 114);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(23, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_For_24_Template, 1, 4, null, null, _forTrack1);
    \u0275\u0275pipe(25, "keyvalue");
  }
  if (rf & 2) {
    const step_r102 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    const leftPad_r104 = \u0275\u0275reference(9);
    \u0275\u0275conditional(ctx_r2.data().game === ctx_r2.Game.Factorio && step_r102.recipe.isMining ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(2, 8, step_r102.recipe.in).length ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", leftPad_r104);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, "steps.time"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngTemplateOutlet", leftPad_r104);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 12, step_r102.recipe.time, ctx_r2.columnsState().items.precision));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngTemplateOutlet", leftPad_r104);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 15, "steps.outputs"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(25, 17, step_r102.recipe.out, ctx_r2.trackSvc.sortByValue));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_10_Conditional_0_Template, 26, 20);
  }
  if (rf & 2) {
    const step_r102 = \u0275\u0275nextContext();
    \u0275\u0275conditional(step_r102.recipe ? 0 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 115);
    \u0275\u0275pipe(1, "rate");
  }
  if (rf & 2) {
    const row_r115 = \u0275\u0275nextContext(2);
    const input_r116 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext();
    const machineValueCell_r117 = \u0275\u0275reference(27);
    const step_r102 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", machineValueCell_r117)("ngTemplateOutletContext", \u0275\u0275pureFunction2(5, _c10, \u0275\u0275pipeBind2(1, 2, row_r115.step.items.mul(row_r115.percent).div(step_r102.machines), ctx_r2.columnsState().items.precision), input_r116.key));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_3_Conditional_1_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_3_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_3_Conditional_1_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 115);
    \u0275\u0275pipe(1, "rate");
  }
  if (rf & 2) {
    const row_r115 = \u0275\u0275nextContext(4);
    \u0275\u0275nextContext(2);
    const machineValueCell_r117 = \u0275\u0275reference(27);
    const step_r102 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", machineValueCell_r117)("ngTemplateOutletContext", \u0275\u0275pureFunction2(5, _c10, \u0275\u0275pipeBind2(1, 2, row_r115.step.belts.mul(row_r115.percent).div(step_r102.machines), ctx_r2.columnsState().belts.precision), ctx));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_3_Conditional_1_Conditional_0_Template, 2, 8, "ng-container");
  }
  if (rf & 2) {
    let tmp_27_0;
    const input_r116 = \u0275\u0275nextContext(4).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional((tmp_27_0 = ctx_r2.itemsState()[input_r116.key].beltId) ? 0 : -1, tmp_27_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_3_Conditional_1_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r115 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r115.step.belts ? 1 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_4_Conditional_1_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_4_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_4_Conditional_1_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 115);
    \u0275\u0275pipe(1, "rate");
  }
  if (rf & 2) {
    const ins_r118 = ctx;
    \u0275\u0275nextContext(6);
    const machineValueCell_r117 = \u0275\u0275reference(27);
    \u0275\u0275property("ngTemplateOutlet", machineValueCell_r117)("ngTemplateOutletContext", \u0275\u0275pureFunction2(5, _c10, \u0275\u0275pipeBind2(1, 2, ins_r118.value, 1), ins_r118.id));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_4_Conditional_1_Conditional_0_Template, 2, 8, "ng-container");
    \u0275\u0275pipe(1, "inserterSpeed");
  }
  if (rf & 2) {
    let tmp_27_0;
    const row_r115 = \u0275\u0275nextContext(3);
    const step_r102 = \u0275\u0275nextContext(4);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_27_0 = \u0275\u0275pipeBind2(1, 1, row_r115.step.items.mul(row_r115.percent).div(step_r102.machines).div(ctx_r2.dispRateInfo().value), ctx_r2.settings())) ? 0 : -1, tmp_27_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_4_Conditional_1_Template, 2, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r115 = \u0275\u0275nextContext(2);
    const input_r116 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.itemsState()[input_r116.key].beltId !== ctx_r2.ItemId.Pipe && row_r115.step.items ? 1 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275template(2, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_2_Template, 2, 8, "ng-container");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_3_Template, 2, 1, "td")(4, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Conditional_4_Template, 2, 1, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r115 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(row_r115.step.items ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().belts.show ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.data().game === ctx_r2.Game.Factorio ? 4 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Conditional_0_Template, 5, 3, "tr");
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.percent ? 0 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Conditional_0_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_22_0;
    const input_r116 = ctx.$implicit;
    const step_r102 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_22_0 = \u0275\u0275pureFunction2(1, _c5, ctx_r2.stepByItemEntities()[input_r116.key], (tmp_22_0 = ctx_r2.stepByItemEntities()[input_r116.key].parents) == null ? null : tmp_22_0[step_r102.id])) ? 0 : -1, tmp_22_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_Conditional_13_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 60);
  }
  if (rf & 2) {
    const step_r102 = \u0275\u0275nextContext(4);
    \u0275\u0275property("id", step_r102.recipeId);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_Conditional_13_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 83);
  }
  if (rf & 2) {
    const machineId_r119 = \u0275\u0275nextContext();
    \u0275\u0275property("id", machineId_r119);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "i", 59);
    \u0275\u0275pipe(2, "iconClass");
    \u0275\u0275template(3, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_Conditional_13_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "i", 59);
    \u0275\u0275pipe(6, "iconClass");
    \u0275\u0275template(7, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_Conditional_13_ng_template_7_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tooltip_r120 = \u0275\u0275reference(4);
    const step_r102 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind2(2, 6, step_r102.recipeId, "recipe"));
    \u0275\u0275property("pTooltip", tooltip_r120);
    \u0275\u0275advance(4);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(6, 9, ctx));
    \u0275\u0275property("pTooltip", tooltip_r120);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_1_Conditional_1_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_1_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_1_Conditional_1_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 115);
    \u0275\u0275pipe(1, "rate");
  }
  if (rf & 2) {
    const ins_r121 = ctx;
    \u0275\u0275nextContext(5);
    const machineValueCell_r117 = \u0275\u0275reference(27);
    \u0275\u0275property("ngTemplateOutlet", machineValueCell_r117)("ngTemplateOutletContext", \u0275\u0275pureFunction2(5, _c10, \u0275\u0275pipeBind2(1, 2, ins_r121.value, 1), ins_r121.id));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_1_Conditional_1_Conditional_0_Template, 2, 8, "ng-container");
    \u0275\u0275pipe(1, "inserterSpeed");
  }
  if (rf & 2) {
    let tmp_26_0;
    const items_r122 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275conditional((tmp_26_0 = \u0275\u0275pipeBind2(1, 1, items_r122, ctx_r2.settings())) ? 0 : -1, tmp_26_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_1_Conditional_1_Template, 2, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const output_r123 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.itemsState()[output_r123.key].beltId !== ctx_r2.ItemId.Pipe ? 1 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_2_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 115);
    \u0275\u0275pipe(1, "rate");
  }
  if (rf & 2) {
    const beltId_r124 = ctx;
    const items_r122 = \u0275\u0275nextContext(2);
    \u0275\u0275nextContext(2);
    const machineValueCell_r117 = \u0275\u0275reference(27);
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngTemplateOutlet", machineValueCell_r117)("ngTemplateOutletContext", \u0275\u0275pureFunction2(5, _c10, \u0275\u0275pipeBind2(1, 2, items_r122.div(ctx_r2.beltSpeed()[beltId_r124]), ctx_r2.columnsState().belts.precision), beltId_r124));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_2_Conditional_1_Template, 2, 8, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_25_0;
    const output_r123 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_25_0 = ctx_r2.itemsState()[output_r123.key].beltId) ? 1 : -1, tmp_25_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_1_Template, 2, 1, "td")(2, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Conditional_2_Template, 2, 1, "td");
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275template(4, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_ng_container_4_Template, 1, 0, "ng-container", 115);
    \u0275\u0275pipe(5, "rate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const output_r123 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext();
    const machineValueCell_r117 = \u0275\u0275reference(27);
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.data().game === ctx_r2.Game.Factorio ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().belts.show ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", machineValueCell_r117)("ngTemplateOutletContext", \u0275\u0275pureFunction2(7, _c10, \u0275\u0275pipeBind2(5, 4, ctx.mul(ctx_r2.dispRateInfo().value), ctx_r2.columnsState().items.precision), output_r123.key));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Conditional_0_Template, 6, 10, "tr");
  }
  if (rf & 2) {
    let tmp_22_0;
    const output_r123 = ctx.$implicit;
    const step_r102 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional((tmp_22_0 = output_r123.value.div(step_r102.recipe.time)) ? 0 : -1, tmp_22_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_ng_template_26_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 58);
  }
  if (rf & 2) {
    const itemId_r125 = \u0275\u0275nextContext().itemId;
    \u0275\u0275property("id", itemId_r125);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_ng_template_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "span", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "i", 59);
    \u0275\u0275pipe(4, "iconClass");
    \u0275\u0275template(5, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_ng_template_26_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r126 = ctx.value;
    const itemId_r125 = ctx.itemId;
    const tooltip_r127 = \u0275\u0275reference(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r126);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(4, 4, itemId_r125));
    \u0275\u0275property("pTooltip", tooltip_r127);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "table", 118);
    \u0275\u0275repeaterCreate(2, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_3_Template, 1, 4, null, null, _forTrack1);
    \u0275\u0275pipe(4, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "i", 119);
    \u0275\u0275elementStart(6, "table", 118)(7, "tr")(8, "td", 61)(9, "span", 62);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275template(13, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_Conditional_13_Template, 9, 11, "div", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "tr")(15, "td", 61)(16, "span", 62);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275element(20, "i", 116);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(21, "i", 119);
    \u0275\u0275elementStart(22, "table", 118);
    \u0275\u0275repeaterCreate(23, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_For_24_Template, 1, 1, null, null, _forTrack1);
    \u0275\u0275pipe(25, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_ng_template_26_Template, 7, 6, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_14_0;
    const step_r102 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(4, 3, step_r102.recipe.in, ctx_r2.trackSvc.sortByValue));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 6, ctx_r2.rational(1), ctx_r2.columnsState().machines.precision));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_14_0 = step_r102.recipeSettings == null ? null : step_r102.recipeSettings.machineId) ? 13 : -1, tmp_14_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 9, ctx_r2.dispRateInfo().value, ctx_r2.columnsState().machines.precision));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(25, 12, step_r102.recipe.out, ctx_r2.trackSvc.sortByValue));
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "small", 117);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, "steps.inserterCountInfo"), \u0275\u0275sanitizeHtml);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 105);
    \u0275\u0275element(1, "td");
    \u0275\u0275elementStart(2, "td", 16);
    \u0275\u0275template(3, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_3_Template, 28, 15, "div", 22)(4, StepsComponent_ng_template_4_Conditional_0_Case_11_Conditional_4_Template, 2, 3, "small", 117);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r102 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(step_r102.recipeId && step_r102.recipe && step_r102.machines ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.data().game === ctx_r2.Game.Factorio ? 4 : -1);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_12_Conditional_0_For_18_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 60);
  }
  if (rf & 2) {
    const recipeId_r131 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", recipeId_r131);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_12_Conditional_0_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r130 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 126);
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275listener("click", function StepsComponent_ng_template_4_Conditional_0_Case_12_Conditional_0_For_18_Template_button_click_0_listener() {
      const recipeId_r131 = \u0275\u0275restoreView(_r130).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.toggleRecipe(recipeId_r131, ctx_r2.recipesState(), ctx_r2.data()));
    });
    \u0275\u0275element(2, "i", 57);
    \u0275\u0275template(3, StepsComponent_ng_template_4_Conditional_0_Case_12_Conditional_0_For_18_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const recipeId_r131 = ctx.$implicit;
    const tooltip_r132 = \u0275\u0275reference(4);
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("hover-active", ctx_r2.recipesState()[recipeId_r131].excluded);
    \u0275\u0275property("icon", \u0275\u0275pipeBind2(1, 4, recipeId_r131, "recipe"))("pTooltip", tooltip_r132);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 105);
    \u0275\u0275element(1, "td");
    \u0275\u0275elementStart(2, "td", 16)(3, "div")(4, "div", 121);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 122)(8, "small");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "p-checkbox", 123);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("onChange", function StepsComponent_ng_template_4_Conditional_0_Case_12_Conditional_0_Template_p_checkbox_onChange_11_listener() {
      const stepDetails_r129 = \u0275\u0275restoreView(_r128);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.toggleRecipes(stepDetails_r129.recipeIds, stepDetails_r129.allRecipesIncluded, ctx_r2.data()));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "tr", 105);
    \u0275\u0275element(14, "td");
    \u0275\u0275elementStart(15, "td", 16)(16, "div", 124);
    \u0275\u0275repeaterCreate(17, StepsComponent_ng_template_4_Conditional_0_Case_12_Conditional_0_For_18_Template, 5, 7, "button", 125, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stepDetails_r129 = ctx;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 5, "steps.includedRecipes"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 7, "steps.includedRecipesInfo"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", stepDetails_r129.allRecipesIncluded)("binary", true)("label", \u0275\u0275pipeBind1(12, 9, "picker.includeAll"));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(stepDetails_r129.recipeIds);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Case_12_Conditional_0_Template, 19, 11);
  }
  if (rf & 2) {
    let tmp_10_0;
    const step_r102 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional((tmp_10_0 = step_r102.itemId && ctx_r2.stepDetails()[step_r102.id]) ? 0 : -1, tmp_10_0);
  }
}
function StepsComponent_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r101 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 105)(1, "td", 106)(2, "a", 107);
    \u0275\u0275element(3, "button", 108);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 16)(5, "p-tabMenu", 109, 7);
    \u0275\u0275pipe(7, "stepId");
    \u0275\u0275listener("activeItemChange", function StepsComponent_ng_template_4_Conditional_0_Template_p_tabMenu_activeItemChange_5_listener($event) {
      const step_r102 = \u0275\u0275restoreView(_r101);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setActiveItem(step_r102, $event));
    });
    \u0275\u0275template(8, StepsComponent_ng_template_4_Conditional_0_ng_template_8_Template, 5, 5, "ng-template", 68);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, StepsComponent_ng_template_4_Conditional_0_Case_9_Template, 7, 5)(10, StepsComponent_ng_template_4_Conditional_0_Case_10_Template, 1, 1)(11, StepsComponent_ng_template_4_Conditional_0_Case_11_Template, 5, 2, "tr", 105)(12, StepsComponent_ng_template_4_Conditional_0_Case_12_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_13_0;
    const step_r102 = ctx;
    const expandTabMenu_r133 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("relativeTo", ctx_r2.route)("fragment", step_r102.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("model", ctx_r2.stepDetails()[step_r102.id].tabs)("activeItem", ctx_r2.activeItem[\u0275\u0275pipeBind1(7, 5, step_r102)]);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_13_0 = expandTabMenu_r133.activeItem == null ? null : expandTabMenu_r133.activeItem.label) === ctx_r2.StepDetailTab.Item ? 9 : tmp_13_0 === ctx_r2.StepDetailTab.Recipe ? 10 : tmp_13_0 === ctx_r2.StepDetailTab.Machine ? 11 : tmp_13_0 === ctx_r2.StepDetailTab.Recipes ? 12 : -1);
  }
}
function StepsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_4_Conditional_0_Template, 13, 7);
    \u0275\u0275pipe(1, "asStep");
  }
  if (rf & 2) {
    let tmp_6_0;
    const _step_r134 = ctx.$implicit;
    \u0275\u0275conditional((tmp_6_0 = \u0275\u0275pipeBind1(1, 1, _step_r134)) ? 0 : -1, tmp_6_0);
  }
}
function StepsComponent_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 16)(2, "div", 47)(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "steps.emptyMessage"));
  }
}
function StepsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_5_Conditional_0_Template, 6, 3, "tr");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.focus() ? 0 : -1);
  }
}
function StepsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td", 29);
  }
}
function StepsComponent_ng_template_8_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function StepsComponent_ng_template_8_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function StepsComponent_ng_template_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_8_Conditional_1_Conditional_0_Template, 1, 0, "td")(1, StepsComponent_ng_template_8_Conditional_1_Conditional_1_Template, 1, 0, "td");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.columnsState().checkbox.show ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().tree.show ? 1 : -1);
  }
}
function StepsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
    \u0275\u0275template(1, StepsComponent_ng_template_8_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.focus() ? 1 : -1);
  }
}
function StepsComponent_ng_template_10_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_10_Conditional_1_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 58);
  }
  if (rf & 2) {
    const itemId_r135 = \u0275\u0275nextContext(2).itemId;
    \u0275\u0275property("id", itemId_r135);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_11_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 71);
  }
  if (rf & 2) {
    const beltId_r136 = \u0275\u0275nextContext(3).beltId;
    \u0275\u0275property("id", beltId_r136);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 61)(1, "span", 62);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 63)(5, "div", 42)(6, "i", 59);
    \u0275\u0275pipe(7, "iconClass");
    \u0275\u0275template(8, StepsComponent_ng_template_10_Conditional_1_Conditional_11_ng_template_8_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tooltip_r137 = \u0275\u0275reference(9);
    const ctx_r137 = \u0275\u0275nextContext(2);
    const belts_r139 = ctx_r137.belts;
    const beltId_r136 = ctx_r137.beltId;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 4, belts_r139, ctx_r2.columnsState().belts.precision));
    \u0275\u0275advance(4);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(7, 7, beltId_r136));
    \u0275\u0275property("pTooltip", tooltip_r137);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_12_Conditional_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 73);
  }
  if (rf & 2) {
    const wagonId_r140 = \u0275\u0275nextContext(4).wagonId;
    \u0275\u0275property("id", wagonId_r140);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 59);
    \u0275\u0275pipe(1, "iconClass");
    \u0275\u0275template(2, StepsComponent_ng_template_10_Conditional_1_Conditional_12_Conditional_6_ng_template_2_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r141 = \u0275\u0275reference(3);
    const wagonId_r140 = \u0275\u0275nextContext(3).wagonId;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, wagonId_r140));
    \u0275\u0275property("pTooltip", tooltip_r141);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_12_Conditional_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 74);
  }
  if (rf & 2) {
    const wagonId_r140 = \u0275\u0275nextContext(4).wagonId;
    \u0275\u0275property("id", wagonId_r140);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 59);
    \u0275\u0275pipe(1, "iconClass");
    \u0275\u0275template(2, StepsComponent_ng_template_10_Conditional_1_Conditional_12_Conditional_7_ng_template_2_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r142 = \u0275\u0275reference(3);
    const wagonId_r140 = \u0275\u0275nextContext(3).wagonId;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, wagonId_r140));
    \u0275\u0275property("pTooltip", tooltip_r142);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 61)(1, "span", 62);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 63)(5, "div", 42);
    \u0275\u0275template(6, StepsComponent_ng_template_10_Conditional_1_Conditional_12_Conditional_6_Template, 4, 5, "i", 53)(7, StepsComponent_ng_template_10_Conditional_1_Conditional_12_Conditional_7_Template, 4, 5, "i", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r137 = \u0275\u0275nextContext(2);
    const wagons_r143 = ctx_r137.wagons;
    const wagonId_r140 = ctx_r137.wagonId;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, wagons_r143, ctx_r2.columnsState().wagons.precision));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.data().cargoWagonIds.indexOf(wagonId_r140) !== -1 ? 6 : 7);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "machineRate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r137 = \u0275\u0275nextContext(2);
    const machines_r144 = ctx_r137.machines;
    const machineId_r145 = ctx_r137.machineId;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(2, 1, machines_r144, ctx_r2.columnsState().machines.precision, machineId_r145));
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "steps.inputs"), " ");
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const recipeObjectiveId_r146 = \u0275\u0275nextContext(3).recipeObjectiveId;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", recipeObjectiveId_r146, "");
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_19_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 60);
  }
  if (rf & 2) {
    const recipeId_r147 = \u0275\u0275nextContext(3).recipeId;
    \u0275\u0275property("id", recipeId_r147);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_19_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 83);
  }
  if (rf & 2) {
    const machineId_r145 = \u0275\u0275nextContext(3).machineId;
    \u0275\u0275property("id", machineId_r145);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 59);
    \u0275\u0275pipe(1, "iconClass");
    \u0275\u0275template(2, StepsComponent_ng_template_10_Conditional_1_Conditional_19_Conditional_2_Template, 2, 1, "span")(3, StepsComponent_ng_template_10_Conditional_1_Conditional_19_ng_template_3_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "i", 59);
    \u0275\u0275pipe(6, "iconClass");
    \u0275\u0275template(7, StepsComponent_ng_template_10_Conditional_1_Conditional_19_ng_template_7_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r148 = \u0275\u0275reference(4);
    const ctx_r137 = \u0275\u0275nextContext(2);
    const machineId_r145 = ctx_r137.machineId;
    const recipeId_r147 = ctx_r137.recipeId;
    const recipeObjectiveId_r146 = ctx_r137.recipeObjectiveId;
    \u0275\u0275classMap(\u0275\u0275pipeBind2(1, 7, recipeId_r147, "recipe"));
    \u0275\u0275property("pTooltip", tooltip_r148);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(recipeObjectiveId_r146 ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(6, 10, machineId_r145));
    \u0275\u0275property("pTooltip", tooltip_r148);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129);
    \u0275\u0275element(1, "i", 130);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 129);
    \u0275\u0275element(3, "i", 130);
    \u0275\u0275elementEnd();
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 131);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 131);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const destRecipeObjectiveId_r149 = \u0275\u0275nextContext(4).destRecipeObjectiveId;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("#", destRecipeObjectiveId_r149, "");
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 132);
  }
  if (rf & 2) {
    const ctx_r137 = \u0275\u0275nextContext(4);
    const destId_r150 = ctx_r137.destId;
    const destIsRecipe_r151 = ctx_r137.destIsRecipe;
    \u0275\u0275property("id", destId_r150)("type", destIsRecipe_r151 ? "recipe" : "item");
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 59);
    \u0275\u0275pipe(1, "iconClass");
    \u0275\u0275template(2, StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_6_Conditional_2_Template, 2, 1, "span")(3, StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_6_ng_template_3_Template, 1, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r152 = \u0275\u0275reference(4);
    const ctx_r137 = \u0275\u0275nextContext(3);
    const destId_r150 = ctx_r137.destId;
    const destRecipeObjectiveId_r149 = ctx_r137.destRecipeObjectiveId;
    const destIsRecipe_r151 = ctx_r137.destIsRecipe;
    \u0275\u0275classMap(\u0275\u0275pipeBind2(1, 4, destId_r150, destIsRecipe_r151 ? "recipe" : "item"));
    \u0275\u0275property("pTooltip", tooltip_r152);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(destRecipeObjectiveId_r149 ? 2 : -1);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "steps.outputs"), " ");
  }
}
function StepsComponent_ng_template_10_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_0_Template, 1, 0, "i", 131);
    \u0275\u0275elementStart(1, "span", 62);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "rate");
    \u0275\u0275pipe(4, "leftPad");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_5_Template, 1, 0, "i", 131)(6, StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_6_Template, 5, 7, "i", 53)(7, StepsComponent_ng_template_10_Conditional_1_Conditional_22_Conditional_7_Template, 3, 3, "span");
  }
  if (rf & 2) {
    const ctx_r137 = \u0275\u0275nextContext(2);
    const percent_r153 = ctx_r137.percent;
    const percentOnDest_r154 = ctx_r137.percentOnDest;
    const destId_r150 = ctx_r137.destId;
    const outputs_r155 = ctx_r137.outputs;
    \u0275\u0275conditional(percentOnDest_r154 ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 8, \u0275\u0275pipeBind2(3, 5, percent_r153, -2)), "%");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!percentOnDest_r154 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(destId_r150 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(outputs_r155 ? 7 : -1);
  }
}
function StepsComponent_ng_template_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_10_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 113);
    \u0275\u0275elementStart(1, "td", 61)(2, "span", 62);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "rate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "td", 63)(6, "div", 42)(7, "i", 59);
    \u0275\u0275pipe(8, "iconClass");
    \u0275\u0275template(9, StepsComponent_ng_template_10_Conditional_1_ng_template_9_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, StepsComponent_ng_template_10_Conditional_1_Conditional_11_Template, 10, 9)(12, StepsComponent_ng_template_10_Conditional_1_Conditional_12_Template, 8, 5);
    \u0275\u0275elementStart(13, "td", 61);
    \u0275\u0275template(14, StepsComponent_ng_template_10_Conditional_1_Conditional_14_Template, 3, 5, "span", 62);
    \u0275\u0275pipe(15, "machineShowRate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 127)(17, "div", 22);
    \u0275\u0275template(18, StepsComponent_ng_template_10_Conditional_1_Conditional_18_Template, 3, 3, "div", 128)(19, StepsComponent_ng_template_10_Conditional_1_Conditional_19_Template, 9, 12);
    \u0275\u0275pipe(20, "machineShow");
    \u0275\u0275template(21, StepsComponent_ng_template_10_Conditional_1_Conditional_21_Template, 4, 0)(22, StepsComponent_ng_template_10_Conditional_1_Conditional_22_Template, 8, 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tooltip_r156 = \u0275\u0275reference(10);
    const ctx_r137 = \u0275\u0275nextContext();
    const items_r157 = ctx_r137.items;
    const itemId_r135 = ctx_r137.itemId;
    const belts_r139 = ctx_r137.belts;
    const beltId_r136 = ctx_r137.beltId;
    const wagons_r143 = ctx_r137.wagons;
    const wagonId_r140 = ctx_r137.wagonId;
    const machines_r144 = ctx_r137.machines;
    const machineId_r145 = ctx_r137.machineId;
    const percent_r153 = ctx_r137.percent;
    const inputs_r158 = ctx_r137.inputs;
    const ctx_r2 = \u0275\u0275nextContext();
    const leftPad_r104 = \u0275\u0275reference(9);
    \u0275\u0275property("ngTemplateOutlet", leftPad_r104);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(4, 11, items_r157, ctx_r2.columnsState().items.precision));
    \u0275\u0275advance(4);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(8, 14, itemId_r135));
    \u0275\u0275property("pTooltip", tooltip_r156);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.columnsState().belts.show && belts_r139 && beltId_r136 ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().wagons.show && wagons_r143 && wagonId_r140 ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(machines_r144 && machines_r144.nonzero() && \u0275\u0275pipeBind2(15, 16, machineId_r145, ctx_r2.data().game) ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(inputs_r158 ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275\u0275pipeBind2(20, 19, machineId_r145, ctx_r2.data().game) ? 19 : 21);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(percent_r153 ? 22 : -1);
  }
}
function StepsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 105);
    \u0275\u0275template(1, StepsComponent_ng_template_10_Conditional_1_Template, 23, 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const itemId_r135 = ctx.itemId;
    \u0275\u0275advance();
    \u0275\u0275conditional(itemId_r135 ? 1 : -1);
  }
}
function StepsComponent_ng_template_12_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function StepsComponent_ng_template_12_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function StepsComponent_ng_template_12_Conditional_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_12_Conditional_0_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_12_Conditional_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_12_Conditional_0_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function StepsComponent_ng_template_12_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 133)(1, "span", 62);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "power");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(3, 1, ctx_r2.totals().power, ctx_r2.columnsState().power.precision, ctx_r2.effectivePowerUnit()));
  }
}
function StepsComponent_ng_template_12_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 133)(1, "span", 62);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "rate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, ctx_r2.totals().pollution, ctx_r2.columnsState().pollution.precision));
  }
}
function StepsComponent_ng_template_12_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "td");
  }
}
function StepsComponent_ng_template_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275element(1, "td");
    \u0275\u0275template(2, StepsComponent_ng_template_12_Conditional_0_Conditional_2_Template, 1, 0, "td")(3, StepsComponent_ng_template_12_Conditional_0_Conditional_3_Template, 1, 0, "td");
    \u0275\u0275elementStart(4, "td", 29);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, StepsComponent_ng_template_12_Conditional_0_ng_container_7_Template, 1, 0, "ng-container", 115)(8, StepsComponent_ng_template_12_Conditional_0_ng_container_8_Template, 1, 0, "ng-container", 115)(9, StepsComponent_ng_template_12_Conditional_0_ng_container_9_Template, 1, 0, "ng-container", 115)(10, StepsComponent_ng_template_12_Conditional_0_ng_container_10_Template, 1, 0, "ng-container", 115)(11, StepsComponent_ng_template_12_Conditional_0_Conditional_11_Template, 4, 5, "td", 133)(12, StepsComponent_ng_template_12_Conditional_0_Conditional_12_Template, 4, 4, "td", 133)(13, StepsComponent_ng_template_12_Conditional_0_Conditional_13_Template, 1, 0, "td");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const totalCell_r159 = \u0275\u0275reference(2);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.columnsState().checkbox.show ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().tree.show ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 14, "steps.total"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", totalCell_r159)("ngTemplateOutletContext", \u0275\u0275pureFunction2(16, _c11, ctx_r2.columnsState().belts, ctx_r2.totals().belts));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", totalCell_r159)("ngTemplateOutletContext", \u0275\u0275pureFunction2(19, _c12, ctx_r2.columnsState().wagons, ctx_r2.totals().wagons));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", totalCell_r159)("ngTemplateOutletContext", \u0275\u0275pureFunction3(22, _c13, ctx_r2.columnsState().machines, ctx_r2.totals().machines, ctx_r2.totals().modules));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", totalCell_r159)("ngTemplateOutletContext", \u0275\u0275pureFunction3(26, _c14, ctx_r2.columnsState().beacons, ctx_r2.totals().beacons, ctx_r2.totals().beaconModules));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().power.show ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().pollution.show ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.columnsState().link.show ? 13 : -1);
  }
}
function StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135)(1, "span", 62);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "rate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tot_r160 = ctx.$implicit;
    const columnSettings_r161 = \u0275\u0275nextContext(2).columnSettings;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 1, tot_r160.value, columnSettings_r161.precision));
  }
}
function StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 132);
  }
  if (rf & 2) {
    const tot_r162 = \u0275\u0275nextContext(2).$implicit;
    const type_r163 = \u0275\u0275nextContext(2).type;
    \u0275\u0275property("id", tot_r162.key)("type", type_r163);
  }
}
function StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 140);
    \u0275\u0275pipe(1, "iconClass");
    \u0275\u0275template(2, StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Conditional_0_ng_template_2_Template, 1, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r164 = \u0275\u0275reference(3);
    const tot_r162 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, tot_r162.key));
    \u0275\u0275property("pTooltip", tooltip_r164);
  }
}
function StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Conditional_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 60);
  }
  if (rf & 2) {
    const tot_r162 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("id", tot_r162.key);
  }
}
function StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i", 140);
    \u0275\u0275pipe(1, "iconClass");
    \u0275\u0275template(2, StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Conditional_1_ng_template_2_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tooltip_r165 = \u0275\u0275reference(3);
    const tot_r162 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind2(1, 3, tot_r162.key, "recipe"));
    \u0275\u0275property("pTooltip", tooltip_r165);
  }
}
function StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Conditional_0_Template, 4, 5, "i", 139)(1, StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Conditional_1_Template, 4, 6, "i", 139);
  }
  if (rf & 2) {
    const tot_r162 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r2.data().itemEntities[tot_r162.key] ? 0 : 1);
  }
}
function StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_12_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 90);
  }
  if (rf & 2) {
    const tot_r166 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", tot_r166.key);
  }
}
function StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 141)(1, "span", 62);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "i", 140);
    \u0275\u0275pipe(4, "iconClass");
    \u0275\u0275template(5, StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_12_ng_template_5_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tot_r166 = ctx.$implicit;
    const tooltip_r167 = \u0275\u0275reference(6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tot_r166.value);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind2(4, 4, tot_r166.key, "item"));
    \u0275\u0275property("pTooltip", tot_r166.key !== "module" ? tooltip_r167 : void 0);
  }
}
function StepsComponent_ng_template_12_ng_template_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 134);
    \u0275\u0275repeaterCreate(1, StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_2_Template, 4, 4, "div", 135, _forTrack1);
    \u0275\u0275pipe(3, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 136)(5, "div", 42)(6, "div", 137);
    \u0275\u0275repeaterCreate(7, StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_8_Template, 2, 1, null, null, _forTrack1);
    \u0275\u0275pipe(9, "keyvalue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 138);
    \u0275\u0275repeaterCreate(11, StepsComponent_ng_template_12_ng_template_1_Conditional_0_For_12_Template, 7, 7, null, null, _forTrack1);
    \u0275\u0275pipe(13, "keyvalue");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r167 = \u0275\u0275nextContext();
    const totals_r169 = ctx_r167.totals;
    const modulesTotals_r170 = ctx_r167.modulesTotals;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind2(3, 0, totals_r169, ctx_r2.trackSvc.sortByValue));
    \u0275\u0275advance(6);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(9, 3, totals_r169, ctx_r2.trackSvc.sortByValue));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind2(13, 6, modulesTotals_r170, ctx_r2.trackSvc.sortByValue));
  }
}
function StepsComponent_ng_template_12_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_12_ng_template_1_Conditional_0_Template, 14, 9);
  }
  if (rf & 2) {
    const columnSettings_r161 = ctx.columnSettings;
    \u0275\u0275conditional(columnSettings_r161.show ? 0 : -1);
  }
}
function StepsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StepsComponent_ng_template_12_Conditional_0_Template, 14, 30, "tr")(1, StepsComponent_ng_template_12_ng_template_1_Template, 1, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r2.focus() ? 0 : -1);
  }
}
var _StepsComponent = class _StepsComponent {
  constructor() {
    this.document = inject(DOCUMENT);
    this.route = inject(ActivatedRoute);
    this.ref = inject(ChangeDetectorRef);
    this.contentSvc = inject(ContentService);
    this.trackSvc = inject(TrackService);
    this.store = inject(Store);
    this.exportSvc = inject(ExportService);
    this.routerSvc = inject(RouterService);
    this.focus = input(false);
    this.selectedId = input();
    this.steps = computed(() => {
      const steps = [...this.store.selectSignal(objectives_exports.getSteps)()];
      const focus = this.focus();
      if (!focus)
        return steps;
      const selectedId = this.selectedId();
      return steps.filter((s) => s.id === selectedId);
    });
    this.activeItemsEffect = effect(() => {
      const steps = this.steps();
      const stepDetails = this.store.selectSignal(objectives_exports.getStepDetails)();
      this.setActiveItems(steps, stepDetails);
    });
    this.toggleEffect = effect(() => {
      const focus = this.focus();
      const steps = this.steps();
      if (focus)
        this.stepsTable().toggleRow(steps[0]);
    });
    this.machinesState = this.store.selectSignal(machines_exports.getMachinesState);
    this.itemsState = this.store.selectSignal(items_exports.getItemsState);
    this.itemsModified = this.store.selectSignal(items_exports.getItemsModified);
    this.stepsModified = this.store.selectSignal(objectives_exports.getStepsModified);
    this.totals = this.store.selectSignal(objectives_exports.getTotals);
    this.stepDetails = this.store.selectSignal(objectives_exports.getStepDetails);
    this.stepById = this.store.selectSignal(objectives_exports.getStepById);
    this.stepByItemEntities = this.store.selectSignal(objectives_exports.getStepByItemEntities);
    this.stepTree = this.store.selectSignal(objectives_exports.getStepTree);
    this.effectivePowerUnit = this.store.selectSignal(objectives_exports.getEffectivePowerUnit);
    this.recipesState = this.store.selectSignal(recipes_exports.getRecipesState);
    this.recipesModified = this.store.selectSignal(objectives_exports.getRecipesModified);
    this.data = this.store.selectSignal(recipes_exports.getAdjustedDataset);
    this.columnsState = this.store.selectSignal(settings_exports.getColumnsState);
    this.settings = this.store.selectSignal(settings_exports.getSettings);
    this.dispRateInfo = this.store.selectSignal(settings_exports.getDisplayRateInfo);
    this.options = this.store.selectSignal(settings_exports.getOptions);
    this.beltSpeed = this.store.selectSignal(settings_exports.getBeltSpeed);
    this.preferences = this.store.selectSignal(preferences_exports.preferencesState);
    this.sortSteps$ = new BehaviorSubject(null);
    this.stepsTable = viewChild.required("stepsTable");
    this.activeItem = {};
    this.stepDetailIcon = stepDetailIcon;
    this.ItemId = ItemId;
    this.StepDetailTab = StepDetailTab;
    this.Game = Game;
    this.RecipeField = RecipeField;
    this.EnergyType = EnergyType;
    this.ObjectiveUnit = ObjectiveUnit;
    this.rational = rational;
    combineLatest([
      this.sortSteps$.pipe(pairwise()),
      this.store.select(objectives_exports.getSteps)
    ]).pipe(takeUntilDestroyed()).subscribe(([[prev, curr], steps]) => {
      this.sortSteps(prev, curr, steps);
    });
  }
  ngOnInit() {
    this.route.fragment.pipe(first(), filter((f) => f != null)).subscribe((id) => {
      this.fragmentId = id;
    });
  }
  ngAfterViewInit() {
    try {
      if (this.fragmentId) {
        const [_, stepId, tabId] = this.fragmentId.split("_");
        combineLatest([
          this.store.select(objectives_exports.getSteps),
          this.store.select(objectives_exports.getStepDetails)
        ]).pipe(first()).subscribe(([steps, stepDetails]) => {
          const step = steps.find((s) => s.id === stepId);
          if (step) {
            const tabs = stepDetails[step.id].tabs;
            if (tabs.length) {
              if (this.stepsTable) {
                this.stepsTable().toggleRow(step);
                setTimeout(() => {
                  if (tabId) {
                    const tab = this.document.querySelector("#" + this.fragmentId);
                    if (tab) {
                      tab.click();
                    }
                  } else {
                    this.document.querySelector("#" + this.fragmentId)?.scrollIntoView();
                  }
                }, 10);
              }
            }
          }
        });
      }
    } catch {
    }
  }
  sortSteps(prev, curr, steps) {
    if (curr == null || curr.order == null || curr.field == null)
      return;
    const order = curr.order;
    const field = curr.field;
    if (prev != null && prev.field === field && prev.order !== order && order === -1 && this.stepsTable != null) {
      curr.data?.sort((a, b) => {
        const diff = steps.indexOf(a) - steps.indexOf(b);
        return diff;
      });
      this.stepsTable().sortOrder = 0;
      this.stepsTable().sortField = "";
      this.stepsTable().reset();
      return this.sortSteps$.next(null);
    }
    curr.data?.sort((a, b) => {
      const diff = (a[field] ?? rational(0n)).sub(b[field] ?? rational(0n));
      return diff.toNumber() * order;
    });
  }
  setActiveItems(steps, stepDetails) {
    steps.forEach((s) => {
      const id = StepIdPipe.transform(s);
      const old = this.activeItem[id];
      const detail = stepDetails[s.id];
      if (detail == null)
        return;
      if (old == null) {
        this.activeItem[id] = detail.tabs[0];
      } else {
        const match = detail.tabs.find((t) => t.label === old.label);
        if (match == null) {
          this.activeItem[id] = detail.tabs[0];
        } else {
          this.activeItem[id] = match;
        }
      }
    });
  }
  setActiveItem(step, item) {
    const id = StepIdPipe.transform(step);
    this.activeItem[id] = item;
  }
  resetStep(step) {
    if (step.itemId) {
      this.resetItem(step.itemId);
    }
    if (step.recipeObjectiveId) {
      this.resetRecipeObjective(step.recipeObjectiveId);
    } else if (step.recipeId) {
      this.resetRecipe(step.recipeId);
    }
  }
  toggleRecipes(ids, value, data) {
    const payload = ids.map((id) => ({
      id,
      value,
      def: coalesce(data.defaults?.excludedRecipeIds, []).includes(id)
    }));
    this.setRecipeExcludedBatch(payload);
  }
  toggleRecipe(id, recipesState, data) {
    const value = !recipesState[id].excluded;
    const def = coalesce(data.defaults?.excludedRecipeIds, []).some((i) => i === id);
    this.setRecipeExcluded(id, value, def);
  }
  changeRecipeField(step, event, machinesState, data, field, index, subindex) {
    if (step.recipeId == null)
      return;
    const id = step.recipeObjectiveId ?? step.recipeId;
    const isObjective = step.recipeObjectiveId != null;
    const settings = step.recipeSettings;
    if (settings?.machineId) {
      const machineSettings = machinesState.entities[settings.machineId];
      switch (field) {
        case RecipeField.Machine: {
          if (typeof event === "string" && machinesState.ids != null) {
            this.setMachine(step.recipeObjectiveId ?? step.recipeId, event, RecipeUtility.bestMatch(data.recipeEntities[step.recipeId].producers, machinesState.ids), step.recipeObjectiveId != null);
          }
          break;
        }
        case RecipeField.Fuel: {
          if (typeof event === "string") {
            this.setFuel(step.recipeObjectiveId ?? step.recipeId, event, machineSettings.fuelId, step.recipeObjectiveId != null);
          }
          break;
        }
        case RecipeField.Modules: {
          if (machineSettings.moduleRankIds != null && data != null && typeof event === "string" && index != null && settings.moduleIds != null) {
            const machine = data.machineEntities[settings.machineId];
            const count = rational(settings.moduleIds.length);
            const options = RecipeUtility.moduleOptions(machine, step.recipeId, data);
            const def = RecipeUtility.defaultModules(options, machineSettings.moduleRankIds, count);
            const modules = this.generateModules(index, event, settings.moduleIds);
            this.setModules(id, modules, def, isObjective);
          }
          break;
        }
        case RecipeField.BeaconCount: {
          if (event instanceof Rational && index != null) {
            const def = machineSettings.beaconCount;
            this.setBeaconCount(id, index, event, def, isObjective);
          }
          break;
        }
        case RecipeField.Beacon: {
          if (typeof event === "string" && index != null) {
            const def = machineSettings.beaconId;
            this.setBeacon(id, index, event, def, isObjective);
          }
          break;
        }
        case RecipeField.BeaconModules: {
          if (machineSettings.beaconModuleRankIds != null && typeof event === "string" && index != null && subindex != null) {
            const beaconSettings = settings.beacons?.[index];
            if (beaconSettings?.id != null && beaconSettings?.moduleIds != null) {
              const beacon = data.beaconEntities[beaconSettings.id];
              const count = rational(beaconSettings.moduleIds.length);
              const options = RecipeUtility.moduleOptions(beacon, step.recipeId, data);
              const def = RecipeUtility.defaultModules(options, machineSettings.beaconModuleRankIds, count);
              const value = this.generateModules(subindex, event, beaconSettings.moduleIds);
              this.setBeaconModules(id, index, value, def, isObjective);
            }
          }
          break;
        }
        case RecipeField.BeaconTotal: {
          if (event instanceof Rational && index != null) {
            this.setBeaconTotal(id, index, event, isObjective);
          }
          break;
        }
        case RecipeField.Overclock: {
          if (typeof event === "number") {
            const def = machineSettings.overclock;
            this.setOverclock(id, rational(event), def, isObjective);
          }
          break;
        }
      }
    }
  }
  generateModules(index, value, original) {
    const modules = [...original];
    for (let i = index; i < modules.length; i++) {
      modules[i] = value;
    }
    return modules;
  }
  changeStepChecked(step, checked) {
    if (step.itemId != null) {
      this.setItemChecked(step.itemId, checked);
    } else if (step.recipeObjectiveId != null) {
      this.setRecipeChecked(step.recipeObjectiveId, checked, true);
    } else if (step.recipeId != null) {
      this.setRecipeChecked(step.recipeId, checked);
    }
  }
  /** Action Dispatch Methods */
  setRows(value) {
    this.store.dispatch(new preferences_exports.SetRowsAction(value));
  }
  setItemExcluded(id, value) {
    this.store.dispatch(new items_exports.SetExcludedAction({ id, value }));
  }
  setItemChecked(id, value) {
    this.store.dispatch(new items_exports.SetCheckedAction({ id, value }));
  }
  setBelt(id, value, def) {
    this.store.dispatch(new items_exports.SetBeltAction({ id, value, def }));
  }
  setWagon(id, value, def) {
    this.store.dispatch(new items_exports.SetWagonAction({ id, value, def }));
  }
  setRecipeExcluded(id, value, def) {
    this.store.dispatch(new recipes_exports.SetExcludedAction({ id, value, def }));
  }
  setRecipeExcludedBatch(payload) {
    this.store.dispatch(new recipes_exports.SetExcludedBatchAction(payload));
  }
  addObjective(value) {
    this.store.dispatch(new objectives_exports.AddAction(value));
  }
  setMachine(id, value, def, objective = false) {
    const action = objective ? objectives_exports.SetMachineAction : recipes_exports.SetMachineAction;
    this.store.dispatch(new action({ id, value, def }));
  }
  setFuel(id, value, def, objective = false) {
    const action = objective ? objectives_exports.SetFuelAction : recipes_exports.SetFuelAction;
    this.store.dispatch(new action({ id, value, def }));
  }
  setModules(id, value, def, objective = false) {
    const action = objective ? objectives_exports.SetModulesAction : recipes_exports.SetModulesAction;
    this.store.dispatch(new action({ id, value, def }));
  }
  addBeacon(id, objective = false) {
    const action = objective ? objectives_exports.AddBeaconAction : recipes_exports.AddBeaconAction;
    this.store.dispatch(new action(id));
  }
  removeBeacon(id, value, objective = false) {
    const action = objective ? objectives_exports.RemoveBeaconAction : recipes_exports.RemoveBeaconAction;
    this.store.dispatch(new action({ id, value }));
  }
  setBeaconCount(id, index, value, def, objective = false) {
    const action = objective ? objectives_exports.SetBeaconCountAction : recipes_exports.SetBeaconCountAction;
    this.store.dispatch(new action({ id, index, value, def }));
  }
  setBeacon(id, index, value, def, objective = false) {
    const action = objective ? objectives_exports.SetBeaconAction : recipes_exports.SetBeaconAction;
    this.store.dispatch(new action({ id, index, value, def }));
  }
  setBeaconModules(id, index, value, def, objective = false) {
    const action = objective ? objectives_exports.SetBeaconModulesAction : recipes_exports.SetBeaconModulesAction;
    this.store.dispatch(new action({ id, index, value, def }));
  }
  setBeaconTotal(id, index, value, objective = false) {
    const action = objective ? objectives_exports.SetBeaconTotalAction : recipes_exports.SetBeaconTotalAction;
    this.store.dispatch(new action({ id, index, value }));
  }
  setOverclock(id, value, def, objective = false) {
    const action = objective ? objectives_exports.SetOverclockAction : recipes_exports.SetOverclockAction;
    this.store.dispatch(new action({ id, value, def }));
  }
  setRecipeChecked(id, value, objective = false) {
    const action = objective ? objectives_exports.SetCheckedAction : recipes_exports.SetCheckedAction;
    this.store.dispatch(new action({ id, value }));
  }
  resetItem(value) {
    this.store.dispatch(new items_exports.ResetItemAction(value));
  }
  resetRecipe(value) {
    this.store.dispatch(new recipes_exports.ResetRecipeAction(value));
  }
  resetRecipeObjective(value) {
    this.store.dispatch(new objectives_exports.ResetObjectiveAction(value));
  }
  resetChecked() {
    this.store.dispatch(new items_exports.ResetCheckedAction());
  }
  resetExcluded() {
    this.store.dispatch(new items_exports.ResetExcludedAction());
  }
  resetBelts() {
    this.store.dispatch(new items_exports.ResetBeltsAction());
  }
  resetWagons() {
    this.store.dispatch(new items_exports.ResetWagonsAction());
  }
  resetMachines() {
    this.store.dispatch(new recipes_exports.ResetMachinesAction());
  }
  resetBeacons() {
    this.store.dispatch(new recipes_exports.ResetBeaconsAction());
  }
};
_StepsComponent.\u0275fac = function StepsComponent_Factory(t) {
  return new (t || _StepsComponent)();
};
_StepsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StepsComponent, selectors: [["lab-steps"]], viewQuery: function StepsComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.stepsTable, _c0, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, inputs: { focus: [1, "focus"], selectedId: [1, "selectedId"] }, decls: 13, vars: 10, consts: [["stepsTable", ""], ["emptyCol2", ""], ["leftPad", ""], ["detailRow", ""], ["tooltip", ""], ["overclockInput", ""], ["duplicatorsInput", ""], ["expandTabMenu", ""], ["machineValueCell", ""], ["totalCell", ""], ["dataKey", "id", "styleClass", "p-datatable-sm", 3, "rowsChange", "sortFunction", "rowTrackBy", "value", "customSort", "rowExpandMode", "defaultSortOrder", "paginator", "rows", "rowsPerPageOptions", "showCurrentPageReport"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], ["pTemplate", "emptymessage"], ["pTemplate", "footer"], ["colspan", "100"], [1, "d-flex", "gap-2", "py-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-table-columns", 1, "p-button-outlined", 3, "click", "label"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-file-arrow-down", 1, "p-button-outlined", 3, "label"], [1, "column-header-row"], ["colspan", "2", "pSortableColumn", "items"], [1, "d-flex", "align-items-center"], ["field", "items"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-rotate-left", 1, "ms-2", "p-button-text", "p-button-rounded", 3, "pTooltip"], ["colspan", "2", "pSortableColumn", "belts"], ["colspan", "2", "pSortableColumn", "wagons"], ["colspan", "2", "pSortableColumn", "machines"], ["field", "machines"], ["colspan", "2"], ["pSortableColumn", "power"], ["pSortableColumn", "pollution"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-file-arrow-down", 1, "p-button-outlined", 3, "click", "label"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "fa-solid", "fa-square-check"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-rotate-left", 1, "ms-2", "p-button-text", "p-button-rounded", 3, "click", "pTooltip"], ["field", "belts"], ["field", "wagons"], ["field", "power"], ["field", "pollution"], [1, "w-0", "px-1", "position-relative"], [1, "fragment", 3, "id"], [1, "d-flex"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-angle-right", 1, "p-button-text", "p-button-rounded", "transition-ease", 3, "pTooltip", "pRowToggler"], [1, "overflow-hidden", "px-1", "py-0"], [1, "text-end"], [1, "w-0", "px-1"], [1, "d-flex", "justify-content-center"], [3, "onChange", "binary", "ngModel"], [1, "d-flex", "align-items-center", "links"], [1, "indent"], [1, "icon"], ["pButton", "", "pRipple", "", "type", "button", 1, "hover-action", "p-button-text", 3, "hover-active", "icon", "pTooltip"], [3, "class", "pTooltip"], [1, "connect", 3, "trail", "last"], [1, "connect"], ["pButton", "", "pRipple", "", "type", "button", 1, "hover-action", "p-button-text", 3, "click", "icon", "pTooltip"], [1, "hover-icon", "fa-solid", "fa-eye-slash"], [3, "id"], [3, "pTooltip"], ["type", "recipe", 3, "id"], [1, "w-0", "text-end"], [1, "monospace"], [1, "ps-0"], [1, "find-text"], ["labDropdownBase", "icon", 3, "pTooltip", "ngModel", "options"], ["labDropdownBase", "icon", 3, "onChange", "pTooltip", "ngModel", "options"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], [1, "d-flex", "align-items-center", "py-2", "w-100", "h-100", 3, "pTooltip"], [1, "ms-3", "text-truncate"], ["type", "belt", 3, "id"], ["type", "pipe", 3, "id"], ["type", "cargo-wagon", 3, "id"], ["type", "fluid-wagon", 3, "id"], ["pButton", "", "pRipple", "", "type", "button", 1, "hover-action", "p-button-text", 3, "pTooltip"], ["labDropdownBase", "icon", 3, "pTooltip", "options", "ngModel"], ["suffix", "%", "inputStyleClass", "text-end", 3, "min", "max", "step", "maxFractionDigits", "size", "pTooltip", "ngModel"], ["inputStyleClass", "text-end", "incrementButtonClass", "p-button-text", "decrementButtonClass", "p-button-text", 3, "min", "step", "maxFractionDigits", "showButtons", "size", "pTooltip", "ngModel"], ["pButton", "", "pRipple", "", "type", "button", 1, "hover-action", "p-button-text", 3, "click", "pTooltip"], [1, "p-button-icon"], [1, "hover-icon", "fa-solid", "fa-circle-plus"], ["labDropdownBase", "icon", 3, "onChange", "pTooltip", "options", "ngModel"], ["type", "machine", 3, "id"], ["suffix", "%", "inputStyleClass", "text-end", 3, "onBlur", "min", "max", "step", "maxFractionDigits", "size", "pTooltip", "ngModel"], ["inputStyleClass", "text-end", "incrementButtonClass", "p-button-text", "decrementButtonClass", "p-button-text", 3, "onBlur", "min", "step", "maxFractionDigits", "showButtons", "size", "pTooltip", "ngModel"], [1, "padded", 3, "pTooltip"], ["type", "fuel", 3, "id"], ["labDropdownBase", "icon", "tooltipPosition", "top", 1, "module-dropdown", 3, "last", "pTooltip", "options", "ngModel"], ["labDropdownBase", "icon", "tooltipPosition", "top", 1, "module-dropdown", 3, "onChange", "pTooltip", "options", "ngModel"], ["type", "module", 3, "id"], [1, "w-0", "pe-0"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-plus", 1, "p-button-text", "p-button-rounded"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-xmark", 1, "p-button-text", "p-button-rounded"], ["tooltipPosition", "left", "width", "2.5rem", 1, "text-end", 3, "pTooltip", "value", "textButtons"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-plus", 1, "p-button-text", "p-button-rounded", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-xmark", 1, "p-button-text", "p-button-rounded", 3, "click"], ["tooltipPosition", "left", "width", "2.5rem", 1, "text-end", 3, "setValue", "pTooltip", "value", "textButtons"], ["width", "3rem", 1, "text-end", 3, "pTooltip", "value", "textButtons"], ["type", "beacon", 3, "id"], ["width", "3rem", 1, "text-end", 3, "setValue", "pTooltip", "value", "textButtons"], ["target", "_blank", 1, "text-decoration-none", 3, "href"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-arrow-up-right-from-square", "tooltipPosition", "left", 1, "p-button-text", "p-button-rounded", 3, "pTooltip"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-rotate-left", "tooltipPosition", "left", 1, "p-button-text", "p-button-rounded", 3, "pTooltip"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-rotate-left", "tooltipPosition", "left", 1, "p-button-text", "p-button-rounded", 3, "click", "pTooltip"], [1, "detail"], [1, "px-1"], ["routerLink", ".", "queryParamsHandling", "preserve", 1, "text-decoration-none", 3, "relativeTo", "fragment"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-link", 1, "p-button-text", "p-button-rounded"], [3, "activeItemChange", "model", "activeItem"], [1, "p-menuitem-link"], [1, "p-menuitem-icon"], [1, "p-menuitem-text"], [4, "ngTemplateOutlet"], ["colspan", "100", 1, "fw-bold"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "lab-icon", "time"], [3, "innerHTML"], [1, "mw-0"], [1, "fa-solid", "fa-arrow-right", "mx-3"], [1, "d-flex", "align-items-center", "justify-content-end"], [1, "fw-bold"], [1, "mb-2"], [3, "onChange", "ngModel", "binary", "label"], [1, "d-flex", "flex-wrap"], ["pButton", "", "pRipple", "", "type", "button", 1, "p-button-text", "hover-action", "me-2", 3, "hover-active", "icon", "pTooltip"], ["pButton", "", "pRipple", "", "type", "button", 1, "p-button-text", "hover-action", "me-2", 3, "click", "icon", "pTooltip"], ["colspan", "100", 1, "p-0"], [1, "position-absolute"], [1, "d-flex", "invisible"], [1, "lab-icon"], [1, "m-1", "p-2", "fa-solid", "fa-arrow-right"], [3, "id", "type"], [1, "text-end", "inherit"], [1, "w-0", "text-end", "inherit"], [1, "py-2", "icon-height"], [1, "ps-0", "inherit"], [1, "d-flex", "flex-column", "justify-content-center"], [1, "modules-column"], [1, "d-block", 3, "class", "pTooltip"], [1, "d-block", 3, "pTooltip"], [1, "p-2", "icon-height", "text-end"]], template: function StepsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-table", 10, 0);
    \u0275\u0275listener("rowsChange", function StepsComponent_Template_p_table_rowsChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setRows($event));
    })("sortFunction", function StepsComponent_Template_p_table_sortFunction_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.sortSteps$.next($event));
    });
    \u0275\u0275template(2, StepsComponent_ng_template_2_Template, 30, 22, "ng-template", 11)(3, StepsComponent_ng_template_3_Template, 2, 3, "ng-template", 12)(4, StepsComponent_ng_template_4_Template, 2, 3, "ng-template", 13)(5, StepsComponent_ng_template_5_Template, 1, 1, "ng-template", 14)(6, StepsComponent_ng_template_6_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(8, StepsComponent_ng_template_8_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(10, StepsComponent_ng_template_10_Template, 2, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(12, StepsComponent_ng_template_12_Template, 3, 1, "ng-template", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("rowTrackBy", ctx.trackSvc.trackStep)("value", ctx.steps())("customSort", true)("rowExpandMode", ctx.focus() ? "single" : "multiple")("defaultSortOrder", -1)("paginator", !ctx.focus() && !ctx.preferences().disablePaginator)("rows", ctx.preferences().rows)("rowsPerPageOptions", \u0275\u0275pureFunction0(9, _c1))("showCurrentPageReport", true);
  }
}, dependencies: [NgTemplateOutlet, NgControlStatus, NgModel, PrimeTemplate, RouterLink, Tooltip, ButtonDirective, Checkbox, Dropdown, InputNumber, Ripple, Table, SortableColumn, RowToggler, SortIcon, TabMenu, InputNumberComponent, TooltipComponent, DropdownBaseDirective, KeyValuePipe, TranslatePipe, IconClassPipe, IconSmClassPipe, AsStepPipe, InserterSpeedPipe, LeftPadPipe, MachineRatePipe, MachineShowRatePipe, MachineShowPipe, OptionsPipe, PowerPipe, RatePipe, StepHrefPipe, StepIdPipe], styles: ["\n\n.links[_ngcontent-%COMP%] {\n  height: 50px;\n}\n.links[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  margin-left: 16px;\n}\n.links[_ngcontent-%COMP%]   .connect.last[_ngcontent-%COMP%], \n.links[_ngcontent-%COMP%]   .connect.trail[_ngcontent-%COMP%] {\n  border-left: 2px dotted var(--text-color-secondary);\n}\n.links[_ngcontent-%COMP%]   .connect.last[_ngcontent-%COMP%]:not(.trail) {\n  margin-bottom: 50vh;\n  height: 50vh;\n}\n.links[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%]    + .connect[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n@media (max-width: 1199.98px) {\n  .links[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%] {\n    margin-left: 8px;\n  }\n  .links[_ngcontent-%COMP%]   .connect[_ngcontent-%COMP%]    + .connect[_ngcontent-%COMP%] {\n    margin-left: 16px;\n  }\n}\n.links[_ngcontent-%COMP%]   .indent[_ngcontent-%COMP%] {\n  margin-left: 0;\n  border-top: 2px dotted var(--text-color-secondary);\n  width: 8px;\n}\n.links[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n}\n[_nghost-%COMP%]     .p-dropdown:not(:hover):not(:focus):not(.ng-invalid), \n[_nghost-%COMP%]     .p-inputtext:not(:hover):not(:focus):not(.ng-invalid) {\n  border-color: transparent;\n  background-color: transparent;\n}\n[_nghost-%COMP%]     .module-dropdown:not(.last) {\n  margin-right: -0.5rem;\n}\n[_nghost-%COMP%]     .module-dropdown:not(.last) .p-dropdown {\n  border-right-color: transparent;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[_nghost-%COMP%]     .module-dropdown:hover ~ .module-dropdown .lab-icon.sm {\n  opacity: 0.3;\n}\n[_nghost-%COMP%]     .module-dropdown:hover ~ .module-dropdown:not(.last) .p-dropdown {\n  border-top-color: var(--primary-color);\n  border-bottom-color: var(--primary-color);\n}\n[_nghost-%COMP%]     .module-dropdown:hover ~ .module-dropdown.last .p-dropdown {\n  border-color: var(--primary-color);\n  border-left-color: transparent;\n}\ntr.detail[_ngcontent-%COMP%] {\n  background-color: var(--surface-ground);\n}\n[_nghost-%COMP%]     tr.detail .p-tabmenu .p-tabmenu-nav .p-tabmenuitem:not(.p-highlight) .p-menuitem-link {\n  background-color: transparent;\n}\n.icon-height[_ngcontent-%COMP%] {\n  min-height: 32px;\n}\n.modules-column[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin: auto;\n}\n.fragment[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10rem;\n  visibility: hidden;\n}\n.column-header-row[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  height: 48px;\n}\n/*# sourceMappingURL=steps.component.css.map */"], changeDetection: 0 });
var StepsComponent = _StepsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StepsComponent, { className: "StepsComponent", filePath: "src\\app\\routes\\main\\components\\steps\\steps.component.ts", lineNumber: 65 });
})();

// src/app/routes/main/directives/no-drag.directive.ts
var _NoDragDirective = class _NoDragDirective {
  onMousedown(event) {
    event.stopPropagation();
  }
  onTouchStart(event) {
    event.stopPropagation();
  }
};
_NoDragDirective.\u0275fac = function NoDragDirective_Factory(t) {
  return new (t || _NoDragDirective)();
};
_NoDragDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _NoDragDirective, selectors: [["", "labNoDrag", ""]], hostBindings: function NoDragDirective_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("mousedown", function NoDragDirective_mousedown_HostBindingHandler($event) {
      return ctx.onMousedown($event);
    })("touchstart", function NoDragDirective_touchstart_HostBindingHandler($event) {
      return ctx.onTouchStart($event);
    });
  }
} });
var NoDragDirective = _NoDragDirective;

// src/app/routes/main/components/objectives/objectives.component.ts
function ObjectivesComponent_ng_template_4_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const objective_r5 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.data().recipeEntities[objective_r5.targetId].name);
  }
}
function ObjectivesComponent_ng_template_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ObjectivesComponent_ng_template_4_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const editRecipePicker_r4 = \u0275\u0275reference(8);
      const objective_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(editRecipePicker_r4.clickOpen("recipe", ctx_r5.recipeIds(), objective_r5.targetId));
    });
    \u0275\u0275elementStart(2, "i", 26);
    \u0275\u0275pipe(3, "iconSmClass");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ObjectivesComponent_ng_template_4_Conditional_2_Conditional_6_Template, 2, 1, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "lab-picker", 18, 4);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("selectId", function ObjectivesComponent_ng_template_4_Conditional_2_Template_lab_picker_selectId_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const objective_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setTarget(objective_r5.id, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const objective_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 6, "objectives.selectARecipe"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275pipeBind2(3, 8, objective_r5.targetId, "recipe"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", objective_r5.id, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r5.contentSvc.isMobile() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("header", \u0275\u0275pipeBind1(9, 11, "objectives.selectARecipe"));
  }
}
function ObjectivesComponent_ng_template_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ObjectivesComponent_ng_template_4_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const editItemPicker_r8 = \u0275\u0275reference(4);
      const objective_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(editItemPicker_r8.clickOpen("item", ctx_r5.itemIds(), objective_r5.targetId));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "lab-picker", 18, 5);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("selectId", function ObjectivesComponent_ng_template_4_Conditional_3_Template_lab_picker_selectId_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const objective_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setTarget(objective_r5.id, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const objective_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", \u0275\u0275pipeBind1(1, 4, objective_r5.targetId))("label", ctx_r5.contentSvc.isMobile() ? "" : ctx_r5.data().itemEntities[objective_r5.targetId].name)("pTooltip", \u0275\u0275pipeBind1(2, 6, "objectives.selectAnItem"));
    \u0275\u0275advance(3);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(5, 8, "objectives.selectAnItem"));
  }
}
function ObjectivesComponent_ng_template_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onChange", function ObjectivesComponent_ng_template_4_Conditional_8_Template_p_dropdown_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const objective_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      const chooseItemPicker_r10 = \u0275\u0275reference(23);
      const chooseRecipePicker_r11 = \u0275\u0275reference(26);
      return \u0275\u0275resetView(ctx_r5.changeUnit(objective_r5, $event.value, chooseItemPicker_r10, chooseRecipePicker_r11));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const objective_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(1, 3, "objectives.unitTooltip"))("options", ctx_r5.rateUnitOptions())("ngModel", objective_r5.unit);
  }
}
function ObjectivesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "button", 20);
    \u0275\u0275template(2, ObjectivesComponent_ng_template_4_Conditional_2_Template, 10, 13)(3, ObjectivesComponent_ng_template_4_Conditional_3_Template, 6, 10);
    \u0275\u0275elementStart(4, "lab-input-number", 21);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("setValue", function ObjectivesComponent_ng_template_4_Template_lab_input_number_setValue_4_listener($event) {
      const objective_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setValue(objective_r5.id, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ObjectivesComponent_ng_template_4_Conditional_8_Template, 2, 5, "p-dropdown", 22);
    \u0275\u0275elementStart(9, "p-dropdown", 23);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("onChange", function ObjectivesComponent_ng_template_4_Template_p_dropdown_onChange_9_listener($event) {
      const objective_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.setType(objective_r5.id, $event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 24);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function ObjectivesComponent_ng_template_4_Template_button_click_11_listener() {
      const objective_r5 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.removeObjective(objective_r5.id));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const objective_r5 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(objective_r5.unit === ctx_r5.ObjectiveUnit.Machines ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", objective_r5.type === ctx_r5.ObjectiveType.Maximize ? ctx_r5.maximizeType() === ctx_r5.MaximizeType.Weight ? \u0275\u0275pipeBind1(5, 9, "objectives.valueWeightTooltip") : \u0275\u0275pipeBind1(6, 11, "objectives.valueRatioTooltip") : \u0275\u0275pipeBind1(7, 13, "objectives.valueTooltip"))("hideButtons", ctx_r5.contentSvc.isMobile())("value", objective_r5.value);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(objective_r5.type !== ctx_r5.ObjectiveType.Maximize ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(10, 15, "objectives.typeTooltip"))("options", ctx_r5.objectiveTypeOptions)("ngModel", objective_r5.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(12, 17, "objectives.removeTooltip"));
  }
}
function ObjectivesComponent_Conditional_14_ng_template_1_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 35);
  }
  if (rf & 2) {
    const recipeId_r15 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", recipeId_r15);
  }
}
function ObjectivesComponent_Conditional_14_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 30)(2, "span", 31);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "i", 32);
    \u0275\u0275pipe(6, "iconSmClass");
    \u0275\u0275elementStart(7, "span", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ObjectivesComponent_Conditional_14_ng_template_1_ng_template_9_Template, 1, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 34);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function ObjectivesComponent_Conditional_14_ng_template_1_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r14);
      const recipeId_r15 = \u0275\u0275nextContext();
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.addRecipeLimit(recipeId_r15));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tooltip_r16 = \u0275\u0275reference(10);
    const recipeId_r15 = \u0275\u0275nextContext();
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "objectives.errorSimplexUnboundedRecipe"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(\u0275\u0275pipeBind2(6, 8, recipeId_r15, "recipe"));
    \u0275\u0275property("pTooltip", tooltip_r16);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r5.data().recipeEntities[recipeId_r15].name);
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(12, 11, "objectives.errorSimplexUnboundedAddRecipeLimit"));
  }
}
function ObjectivesComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-messages", 16);
    \u0275\u0275template(1, ObjectivesComponent_Conditional_14_ng_template_1_Template, 13, 13, "ng-template", 29);
    \u0275\u0275elementEnd();
  }
}
function ObjectivesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-messages", 17);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r5.messages())("closable", false)("escape", false);
  }
}
var _ObjectivesComponent = class _ObjectivesComponent {
  constructor() {
    this.store = inject(Store);
    this.translateSvc = inject(TranslateService);
    this.contentSvc = inject(ContentService);
    this.trackSvc = inject(TrackService);
    this._objectives = this.store.selectSignal(objectives_exports.getObjectives);
    this.result = this.store.selectSignal(objectives_exports.getMatrixResult);
    this.itemsState = this.store.selectSignal(items_exports.getItemsState);
    this.recipesState = this.store.selectSignal(recipes_exports.getRecipesState);
    this.itemIds = this.store.selectSignal(recipes_exports.getAvailableItems);
    this.data = this.store.selectSignal(recipes_exports.getAdjustedDataset);
    this.maximizeType = this.store.selectSignal(settings_exports.getMaximizeType);
    this.beltSpeed = this.store.selectSignal(settings_exports.getBeltSpeed);
    this.dispRateInfo = this.store.selectSignal(settings_exports.getDisplayRateInfo);
    this.rateUnitOptions = this.store.selectSignal(settings_exports.getObjectiveUnitOptions);
    this.recipeIds = this.store.selectSignal(settings_exports.getAvailableRecipes);
    this.paused = this.store.selectSignal(preferences_exports.getPaused);
    this.objectives = computed(() => [...this._objectives()]);
    this.messages = computed(() => this.getMessages(this._objectives(), this.result(), this.itemsState(), this.recipesState()));
    this.objectiveTypeOptions = objectiveTypeOptions;
    this.displayRateOptions = displayRateOptions;
    this.MaximizeType = MaximizeType;
    this.ObjectiveUnit = ObjectiveUnit;
    this.ObjectiveType = ObjectiveType;
  }
  getMessages(objectives, matrixResult, itemsState, recipesState) {
    if (matrixResult.resultType === SimplexResultType.Paused)
      return [
        {
          severity: "info",
          detail: this.translateSvc.instant("objectives.pausedMessage")
        }
      ];
    if (matrixResult.resultType !== SimplexResultType.Failed)
      return [];
    if (matrixResult.simplexStatus === "unbounded") {
      const maxObjectives = objectives.filter((o) => o.type === ObjectiveType.Maximize);
      if (maxObjectives.length && objectives.every((o) => o.type !== ObjectiveType.Limit)) {
        return this.buildErrorMessages("objectives.errorUnbounded", "objectives.errorNoLimits", matrixResult);
      }
      if (maxObjectives.some((o) => o.unit === ObjectiveUnit.Machines ? recipesState[o.targetId].excluded : itemsState[o.targetId].excluded)) {
        return this.buildErrorMessages("objectives.errorUnbounded", "objectives.errorMaximizeExcluded", matrixResult);
      }
      return this.buildErrorMessages("objectives.errorUnbounded", "objectives.errorUnboundedDetail", matrixResult);
    } else if (matrixResult.simplexStatus === "no_feasible") {
      return this.buildErrorMessages("objectives.errorInfeasible", "objectives.errorInfeasibleDetail", matrixResult);
    } else {
      return this.buildErrorMessages("objectives.error", "objectives.errorDetail", matrixResult);
    }
  }
  buildErrorMessages(summary, detail, matrixResult) {
    return [
      {
        severity: "error",
        summary: this.translateSvc.instant(summary),
        detail: `${this.translateSvc.instant(detail)} ${this.translateSvc.instant("objectives.errorSimplexInfo", {
          returnCode: matrixResult.returnCode ?? "unknown",
          simplexStatus: matrixResult.simplexStatus ?? "unknown"
        })}`
      }
    ];
  }
  setObjectiveOrder(objectives) {
    this.setOrder(objectives.map((o) => o.id));
  }
  changeUnit(objective, unit, chooseItemPicker, chooseRecipePicker) {
    const data = this.data();
    if (unit === ObjectiveUnit.Machines) {
      if (objective.unit !== ObjectiveUnit.Machines) {
        const recipeIds = data.itemRecipeIds[objective.targetId];
        const updateFn = (recipeId) => this.convertItemsToMachines(objective, recipeId, data);
        if (recipeIds.length === 1) {
          updateFn(recipeIds[0]);
        } else {
          chooseRecipePicker.selectId.pipe(first()).subscribe((targetId) => updateFn(targetId));
          chooseRecipePicker.clickOpen("recipe", recipeIds);
        }
      }
    } else {
      if (objective.unit === ObjectiveUnit.Machines) {
        const itemIds = Array.from(data.adjustedRecipe[objective.targetId].produces);
        const updateFn = (itemId) => this.convertMachinesToItems(objective, itemId, unit, data);
        if (itemIds.length === 1) {
          updateFn(itemIds[0]);
        } else {
          chooseItemPicker.selectId.pipe(first()).subscribe((itemId) => updateFn(itemId));
          chooseItemPicker.clickOpen("item", itemIds);
        }
      } else {
        this.convertItemsToItems(objective, objective.targetId, unit, data);
      }
    }
  }
  /**
   * Update unit field (non-machines -> machines), then convert and update
   * objective value so that number of items remains constant
   */
  convertItemsToMachines(objective, recipeId, data) {
    this.setUnit(objective.id, {
      targetId: recipeId,
      unit: ObjectiveUnit.Machines
    });
    if (objective.type === ObjectiveType.Maximize)
      return;
    const itemsState = this.itemsState();
    const beltSpeed = this.beltSpeed();
    const dispRateInfo = this.dispRateInfo();
    const oldValue = RateUtility.objectiveNormalizedRate(objective, itemsState, beltSpeed, dispRateInfo, data);
    const recipe = data.adjustedRecipe[recipeId];
    const newValue = oldValue.div(recipe.output[objective.targetId]);
    this.setValue(objective.id, newValue);
  }
  /**
   * Update unit field (machines -> non-machines), then convert and update
   * objective value so that number of items remains constant
   */
  convertMachinesToItems(objective, itemId, unit, data) {
    this.setUnit(objective.id, {
      targetId: itemId,
      unit
    });
    if (objective.type === ObjectiveType.Maximize || objective.recipe == null)
      return;
    const itemsState = this.itemsState();
    const beltSpeed = this.beltSpeed();
    const dispRateInfo = this.dispRateInfo();
    const factor = RateUtility.objectiveNormalizedRate({
      id: "",
      targetId: itemId,
      value: rational(1n),
      unit,
      type: ObjectiveType.Output
    }, itemsState, beltSpeed, dispRateInfo, data);
    const oldValue = objective.value.mul(objective.recipe.output[itemId]);
    const newValue = oldValue.div(factor);
    this.setValue(objective.id, newValue);
  }
  /**
   * Update unit field (non-machines -> non-machines), then convert and update
   * objective value so that number of items remains constant
   */
  convertItemsToItems(objective, itemId, unit, data) {
    this.setUnit(objective.id, {
      targetId: itemId,
      unit
    });
    if (objective.type === ObjectiveType.Maximize)
      return;
    const itemsState = this.itemsState();
    const beltSpeed = this.beltSpeed();
    const dispRateInfo = this.dispRateInfo();
    const oldValue = RateUtility.objectiveNormalizedRate(objective, itemsState, beltSpeed, dispRateInfo, data);
    const factor = RateUtility.objectiveNormalizedRate({
      id: "",
      targetId: itemId,
      value: rational(1n),
      unit,
      type: ObjectiveType.Output
    }, itemsState, beltSpeed, dispRateInfo, data);
    const newValue = oldValue.div(factor);
    this.setValue(objective.id, newValue);
  }
  addItemObjective(targetId) {
    this.addObjective({ targetId, unit: ObjectiveUnit.Items });
  }
  addRecipeObjective(targetId) {
    this.addObjective({ targetId, unit: ObjectiveUnit.Machines });
  }
  addRecipeLimit(targetId) {
    this.addObjective({
      targetId,
      unit: ObjectiveUnit.Machines,
      type: ObjectiveType.Limit
    });
  }
  /** Action Dispatch Methods */
  removeObjective(id) {
    this.store.dispatch(new objectives_exports.RemoveAction(id));
  }
  setOrder(ids) {
    this.store.dispatch(new objectives_exports.SetOrderAction(ids));
  }
  setTarget(id, value) {
    this.store.dispatch(new objectives_exports.SetTargetAction({ id, value }));
  }
  setValue(id, value) {
    this.store.dispatch(new objectives_exports.SetValueAction({ id, value }));
  }
  setUnit(id, value) {
    this.store.dispatch(new objectives_exports.SetUnitAction({ id, value }));
  }
  setType(id, value) {
    this.store.dispatch(new objectives_exports.SetTypeAction({ id, value }));
  }
  addObjective(value) {
    this.store.dispatch(new objectives_exports.AddAction(value));
  }
  setDisplayRate(value, prev) {
    this.store.dispatch(new settings_exports.SetDisplayRateAction({ value, prev }));
  }
  setPaused(value) {
    this.store.dispatch(new preferences_exports.SetPausedAction(value));
  }
};
_ObjectivesComponent.\u0275fac = function ObjectivesComponent_Factory(t) {
  return new (t || _ObjectivesComponent)();
};
_ObjectivesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ObjectivesComponent, selectors: [["lab-objectives"]], decls: 28, vars: 35, consts: [["addItemPicker", ""], ["addRecipePicker", ""], ["chooseItemPicker", ""], ["chooseRecipePicker", ""], ["editRecipePicker", ""], ["editItemPicker", ""], ["tooltip", ""], [3, "header"], [1, "objectives-content"], [3, "onReorder", "value", "dragdrop", "trackBy"], ["pTemplate", "item"], [1, "objectives-buttons", "d-flex", "flex-wrap", "mt-2"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-box", "tooltipPosition", "top", 1, "flex-grow-1", "p-button-outlined", 3, "click", "label"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-industry", "tooltipPosition", "top", 1, "flex-grow-1", "p-button-outlined", 3, "click", "label"], ["labDropdownTranslate", "", "styleClass", "h-100", 3, "onChange", "tooltip", "ngModel", "options"], ["offIcon", "fa-solid fa-pause", 3, "onChange", "ngModel", "onIcon", "pTooltip"], ["severity", "warn", "styleClass", "mt-2"], ["styleClass", "mt-2", 3, "value", "closable", "escape"], [3, "selectId", "header"], [1, "p-inputgroup"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-grip-lines", 1, "p-button-outlined", "border-end-0", "cursor-grab"], ["labNoDrag", "", "tooltipPosition", "top", 3, "setValue", "pTooltip", "hideButtons", "value"], ["labDropdownTranslate", "", "labNoDrag", "", "tooltipPosition", "top", 3, "tooltip", "options", "ngModel"], ["labDropdownTranslate", "", "labNoDrag", "", "tooltipPosition", "top", 3, "onChange", "tooltip", "options", "ngModel"], ["pButton", "", "pRipple", "", "labNoDrag", "", "type", "button", "icon", "fa-solid fa-xmark", "tooltipPosition", "left", 1, "p-button-outlined", 3, "click", "pTooltip"], ["pButton", "", "pRipple", "", "labNoDrag", "", "type", "button", "tooltipPosition", "top", 1, "p-button-outlined", "lab-button-icon-only", "text-truncate", 3, "click", "pTooltip"], [1, "p-button-icon"], [1, "p-button-label"], ["labNoDrag", "", "pButton", "", "pRipple", "", "type", "button", "tooltipPosition", "top", 1, "p-button-outlined", "text-truncate", 3, "click", "icon", "label", "pTooltip"], ["pTemplate", ""], [1, "d-flex", "align-items-center"], [1, "me-3"], [3, "pTooltip"], [1, "ms-3"], ["type", "button", "pButton", "", "pRipple", "", "icon", "fa-solid fa-plus", 1, "mt-2", "p-button-rounded", 3, "click", "label"], ["type", "recipe", 3, "id"]], template: function ObjectivesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-card", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 8)(3, "p-orderList", 9);
    \u0275\u0275listener("onReorder", function ObjectivesComponent_Template_p_orderList_onReorder_3_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setObjectiveOrder(ctx.objectives()));
    });
    \u0275\u0275template(4, ObjectivesComponent_ng_template_4_Template, 13, 19, "ng-template", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11)(6, "button", 12);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function ObjectivesComponent_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const addItemPicker_r12 = \u0275\u0275reference(17);
      return \u0275\u0275resetView(addItemPicker_r12.clickOpen("item", ctx.itemIds()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 13);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("click", function ObjectivesComponent_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const addRecipePicker_r13 = \u0275\u0275reference(20);
      return \u0275\u0275resetView(addRecipePicker_r13.clickOpen("recipe", ctx.recipeIds()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-dropdown", 14);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("onChange", function ObjectivesComponent_Template_p_dropdown_onChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setDisplayRate($event.value, ctx.dispRateInfo().option));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p-toggleButton", 15);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("onChange", function ObjectivesComponent_Template_p_toggleButton_onChange_12_listener($event) {
      let tmp_5_0;
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setPaused((tmp_5_0 = $event.checked) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : false));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, ObjectivesComponent_Conditional_14_Template, 2, 0, "p-messages", 16)(15, ObjectivesComponent_Conditional_15_Template, 1, 3, "p-messages", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "lab-picker", 18, 0);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("selectId", function ObjectivesComponent_Template_lab_picker_selectId_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addItemObjective($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "lab-picker", 18, 1);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("selectId", function ObjectivesComponent_Template_lab_picker_selectId_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.addRecipeObjective($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "lab-picker", 7, 2);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275element(25, "lab-picker", 7, 3);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_16_0;
    \u0275\u0275property("header", \u0275\u0275pipeBind1(1, 17, "objectives.title"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx.objectives())("dragdrop", true)("trackBy", ctx.trackSvc.trackById);
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(7, 19, "objectives.addItems"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(9, 21, "objectives.addMachines"));
    \u0275\u0275advance(2);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(11, 23, "objectives.selectDisplayRate"))("ngModel", ctx.dispRateInfo().option)("options", ctx.displayRateOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx.paused())("onIcon", "fa-solid fa-play")("pTooltip", \u0275\u0275pipeBind1(13, 25, "objectives.pauseTooltip"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_16_0 = ctx.result().unboundedRecipeId) ? 14 : ctx.messages().length ? 15 : -1, tmp_16_0);
    \u0275\u0275advance(2);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(18, 27, "objectives.selectAnItem"));
    \u0275\u0275advance(3);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(21, 29, "objectives.selectARecipe"));
    \u0275\u0275advance(3);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(24, 31, "objectives.selectAnItem"));
    \u0275\u0275advance(3);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(27, 33, "objectives.selectARecipe"));
  }
}, dependencies: [NgControlStatus, NgModel, PrimeTemplate, Tooltip, ButtonDirective, Card, Dropdown, Messages, OrderList, Ripple, ToggleButton, InputNumberComponent, PickerComponent, TooltipComponent, DropdownTranslateDirective, NoDragDirective, TranslatePipe, IconSmClassPipe], styles: ["\n\n.objectives-content[_ngcontent-%COMP%] {\n  max-width: 1000px;\n}\n.objectives-buttons[_ngcontent-%COMP%] {\n  gap: 0.25rem;\n}\n.p-inputgroup[_ngcontent-%COMP%]   p-dropdown.icon[_ngcontent-%COMP%] {\n  flex: 0 0 36px;\n}\n@media (min-width: 576px) {\n  button.text-truncate[_ngcontent-%COMP%], \n   .p-inputgroup[_ngcontent-%COMP%]   lab-input-number.p-inputwrapper[_ngcontent-%COMP%] {\n    flex: 0 0 25%;\n  }\n}\n@media (max-width: 575.98px) {\n  .p-inputgroup[_ngcontent-%COMP%]   lab-input-number.p-inputwrapper[_ngcontent-%COMP%] {\n    flex: 0 0 15%;\n  }\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%]     button.lab-button-icon-only {\n    justify-content: center;\n    width: 2.571rem;\n    padding: 0.5rem 0;\n  }\n  [_nghost-%COMP%]     button.lab-button-icon-only .p-button-icon {\n    margin: 0;\n  }\n  [_nghost-%COMP%]     button.lab-button-icon-only .p-button-label {\n    flex: 0 0 auto;\n    visibility: hidden;\n    width: 0;\n  }\n}\n/*# sourceMappingURL=objectives.component.css.map */"], changeDetection: 0 });
var ObjectivesComponent = _ObjectivesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ObjectivesComponent, { className: "ObjectivesComponent", filePath: "src\\app\\routes\\main\\components\\objectives\\objectives.component.ts", lineNumber: 45 });
})();

// src/app/routes/main/components/tech-picker/tech-picker.component.ts
var _c02 = ["filterInput"];
var _c15 = () => ({ minHeight: "528px", height: "80vh", width: "50vw" });
var _c22 = () => ({ "768px": "80vw", "576px": "100vw" });
var _c32 = () => ({ width: "30vw" });
var _c42 = () => ({ "768px": "50vw", "576px": "90vw" });
var _c52 = () => ({ height: "calc(80vh - 165px)", minHeight: "363px" });
var _c62 = (a0) => ({ title: "techPicker.available", ids: a0, class: "p-button-text" });
var _c72 = (a0) => ({ title: "techPicker.locked", ids: a0, class: "p-button-danger" });
var _c82 = (a0) => ({ title: "techPicker.researched", ids: a0, class: "p-button-success" });
var _c92 = (a0, a1) => ({ id: a0, class: a1 });
function TechPickerComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 7);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 19);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function TechPickerComponent_Conditional_19_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.copyScriptToClipboard());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "a", 20);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "techPicker.exportFromFactorio"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(5, 5, "techPicker.exportCopyScript"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(7, 7, "techPicker.exportUseMod"));
  }
}
function TechPickerComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function TechPickerComponent_ng_template_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.importTechs());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "ok"));
  }
}
function TechPickerComponent_Conditional_26_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TechPickerComponent_Conditional_26_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TechPickerComponent_Conditional_26_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TechPickerComponent_Conditional_26_ng_template_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "none"));
  }
}
function TechPickerComponent_Conditional_26_ng_template_4_For_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function TechPickerComponent_Conditional_26_ng_template_4_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, TechPickerComponent_Conditional_26_ng_template_4_For_6_ng_container_0_Template, 1, 0, "ng-container", 22);
  }
  if (rf & 2) {
    const id_r7 = ctx.$implicit;
    const class_r8 = \u0275\u0275nextContext().class;
    \u0275\u0275nextContext();
    const techButton_r9 = \u0275\u0275reference(7);
    \u0275\u0275property("ngTemplateOutlet", techButton_r9)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c92, id_r7, class_r8));
  }
}
function TechPickerComponent_Conditional_26_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 23);
    \u0275\u0275template(4, TechPickerComponent_Conditional_26_ng_template_4_Conditional_4_Template, 3, 3, "i");
    \u0275\u0275repeaterCreate(5, TechPickerComponent_Conditional_26_ng_template_4_For_6_Template, 1, 5, "ng-container", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const title_r10 = ctx.title;
    const ids_r11 = ctx.ids;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, title_r10));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ids_r11.length === 0 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ids_r11);
  }
}
function TechPickerComponent_Conditional_26_ng_template_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 25);
  }
  if (rf & 2) {
    const id_r13 = \u0275\u0275nextContext().id;
    \u0275\u0275property("id", id_r13);
  }
}
function TechPickerComponent_Conditional_26_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275listener("click", function TechPickerComponent_Conditional_26_ng_template_6_Template_button_click_0_listener() {
      const id_r13 = \u0275\u0275restoreView(_r12).id;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.clickId(id_r13));
    });
    \u0275\u0275template(2, TechPickerComponent_Conditional_26_ng_template_6_ng_template_2_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const id_r13 = ctx.id;
    const class_r14 = ctx.class;
    const tooltip_r15 = \u0275\u0275reference(3);
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(class_r14);
    \u0275\u0275classProp("hover-active", ctx_r4.selection().indexOf(id_r13) === -1);
    \u0275\u0275property("label", ctx_r4.showTechLabels() && ((tmp_11_0 = ctx_r4.data().itemEntities[id_r13]) == null ? null : tmp_11_0.name) || "")("icon", \u0275\u0275pipeBind1(1, 7, id_r13))("pTooltip", tooltip_r15);
  }
}
function TechPickerComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-scrollPanel");
    \u0275\u0275template(1, TechPickerComponent_Conditional_26_ng_container_1_Template, 1, 0, "ng-container", 22)(2, TechPickerComponent_Conditional_26_ng_container_2_Template, 1, 0, "ng-container", 22)(3, TechPickerComponent_Conditional_26_ng_container_3_Template, 1, 0, "ng-container", 22)(4, TechPickerComponent_Conditional_26_ng_template_4_Template, 7, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(6, TechPickerComponent_Conditional_26_ng_template_6_Template, 4, 9, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const techSet_r16 = \u0275\u0275reference(5);
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(8, _c52));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", techSet_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction1(9, _c62, ctx_r4.status().available));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", techSet_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction1(11, _c72, ctx_r4.status().locked));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", techSet_r16)("ngTemplateOutletContext", \u0275\u0275pureFunction1(13, _c82, ctx_r4.status().researched));
  }
}
var _TechPickerComponent = class _TechPickerComponent {
  constructor() {
    this.ref = inject(ChangeDetectorRef);
    this.filterSvc = inject(FilterService);
    this.translateSvc = inject(TranslateService);
    this.store = inject(Store);
    this.contentSvc = inject(ContentService);
    this.filterInput = viewChild.required("filterInput");
    this.selectIds = new EventEmitter();
    this.data = this.store.selectSignal(recipes_exports.getAdjustedDataset);
    this.showTechLabels = this.store.selectSignal(preferences_exports.getShowTechLabels);
    this.filter = signal("");
    this.selection = signal([]);
    this.allSelected = computed(() => this.selection().length === this.data().technologyIds.length);
    this.status = computed(() => {
      const data = this.data();
      const filter2 = this.filter();
      let selection = this.selection();
      const set = new Set(selection);
      const available = [];
      const locked = [];
      let technologyIds = data.technologyIds;
      if (filter2) {
        const technologies = technologyIds.map((i) => data.itemEntities[i]);
        technologyIds = this.filterSvc.filter(technologies, ["name"], filter2, "contains").map((t) => t.id);
        selection = selection.filter((i) => technologyIds.includes(i));
      }
      const researched = selection;
      for (const id of technologyIds) {
        if (!set.has(id)) {
          const tech = data.technologyEntities[id];
          if (tech.prerequisites == null || tech.prerequisites.every((p) => set.has(p))) {
            available.push(id);
          } else {
            locked.push(id);
          }
        }
      }
      return { available, locked, researched };
    });
    this.visible = false;
    this.importVisible = false;
    this.importValue = "";
    this.Game = Game;
  }
  clickOpen(selection) {
    selection = [...selection ?? this.data().technologyIds];
    this.selection.set(selection);
    this.visible = true;
    this.ref.markForCheck();
    if (!this.contentSvc.isMobile()) {
      setTimeout(() => {
        this.filterInput().nativeElement.focus();
      });
    }
  }
  selectAll(value) {
    this.selection.set(value ? [...this.data().technologyIds] : []);
  }
  openImport(input2) {
    this.importVisible = true;
    setTimeout(() => input2.focus());
  }
  copyScriptToClipboard() {
    const script = `/c local list = {}
for _, tech in pairs(game.player.force.technologies) do
    if tech.researched then
        list[#list + 1] = tech.name
    end
end
game.write_file("techs.txt", table.concat(list, ","))
`;
    window.navigator.clipboard.writeText(script);
    this.contentSvc.showToast$.next({
      severity: "success",
      detail: this.translateSvc.instant("techPicker.exportScriptCopied"),
      contentStyleClass: "detail-only"
    });
  }
  importTechs() {
    const selection = this.importValue.split(",").map((v) => v.trim()).map((id) => {
      if (!id)
        return "";
      const alt = `${id}-technology`;
      if (this.data().technologyIds.includes(alt)) {
        return alt;
      } else if (this.data().technologyIds.includes(id)) {
        return id;
      }
      return "";
    }).filter((v) => !!v);
    const set = new Set(selection);
    this.addPrerequisites(set);
    this.selection.set(Array.from(set));
    this.importValue = "";
    this.importVisible = false;
  }
  clickId(id) {
    const set = new Set(this.selection());
    if (set.has(id)) {
      set.delete(id);
      let removeIds;
      do {
        removeIds = /* @__PURE__ */ new Set();
        for (const id2 of set) {
          const tech = this.data().technologyEntities[id2];
          if (tech.prerequisites?.some((p) => !set.has(p)))
            removeIds.add(id2);
        }
        removeIds.forEach((i) => set.delete(i));
      } while (removeIds.size);
    } else {
      set.add(id);
      this.addPrerequisites(set);
    }
    this.selection.set(Array.from(set));
  }
  // Add any technologies whose prerequisites were not previously met
  addPrerequisites(set) {
    let addIds;
    do {
      addIds = /* @__PURE__ */ new Set();
      for (const id of set) {
        const tech = this.data().technologyEntities[id];
        tech.prerequisites?.filter((p) => !set.has(p)).forEach((p) => addIds.add(p));
      }
      addIds.forEach((i) => set.add(i));
    } while (addIds.size);
  }
  onHide() {
    const selection = this.selection();
    const data = this.data();
    if (selection.length === data.technologyIds.length)
      this.selectIds.emit(null);
    const filteredSelection = selection.filter((a) => !selection.some((b) => {
      const techB = data.technologyEntities[b];
      return techB.prerequisites && techB.prerequisites.indexOf(a) !== -1;
    }));
    this.selectIds.emit(filteredSelection);
  }
  /** Action Dispatch Methods */
  setShowTechLabels(value) {
    this.store.dispatch(new preferences_exports.SetShowTechLabelsAction(value));
  }
};
_TechPickerComponent.\u0275fac = function TechPickerComponent_Factory(t) {
  return new (t || _TechPickerComponent)();
};
_TechPickerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TechPickerComponent, selectors: [["lab-tech-picker"]], viewQuery: function TechPickerComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuerySignal(ctx.filterInput, _c02, 5);
  }
  if (rf & 2) {
    \u0275\u0275queryAdvance();
  }
}, outputs: { selectIds: "selectIds" }, decls: 27, vars: 49, consts: [["filterInput", ""], ["importInput", ""], ["techSet", ""], ["techButton", ""], ["tooltip", ""], ["styleClass", "picker-dialog", "appendTo", "body", 3, "visibleChange", "onHide", "visible", "modal", "dismissableMask", "draggable", "resizable", "header", "breakpoints"], [1, "d-flex", "w-100", "my-1", "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "fa-solid", "fa-magnifying-glass"], ["pInputText", "", "type", "text", 1, "w-100", 3, "input", "ngModel"], [1, "p-inputgroup-addon", "flex-shrink-0"], ["labelStyleClass", "text-nowrap", 3, "onChange", "binary", "label", "ngModel"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-file-import", 1, "flex-shrink-0", 3, "click", "label", "pTooltip"], ["appendTo", "body", 3, "visibleChange", "visible", "modal", "dismissableMask", "draggable", "resizable", "breakpoints", "header"], [1, "d-flex", "flex-column"], [1, "p-inputgroup", "mb-3"], ["rows", "10", "pInputTextarea", "", 1, "mt-2", "w-100", 3, "ngModelChange", "keydown.enter", "ngModel"], ["pTemplate", "footer"], [3, "style"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-copy", 1, "p-button-outlined", 3, "click", "label"], ["href", "https://mods.factorio.com/mod/export-researched-technologies", "target", "_blank", "pButton", "", "pRipple", "", "icon", "fa-solid fa-link", 1, "text-decoration-none", "p-inputgroup-addon", "p-button-outlined", 3, "label"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-check", 1, "p-button-text", 3, "click", "label"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "d-flex", "flex-wrap", "invert"], ["pButton", "", "pRipple", "", "type", "button", "tooltipPosition", "bottom", 1, "me-1", "mb-1", 3, "click", "label", "icon", "pTooltip"], ["type", "technology", 3, "id"]], template: function TechPickerComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dialog", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("visibleChange", function TechPickerComponent_Template_p_dialog_visibleChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.visible, $event) || (ctx.visible = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onHide", function TechPickerComponent_Template_p_dialog_onHide_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onHide());
    });
    \u0275\u0275elementStart(2, "div", 6)(3, "span", 7);
    \u0275\u0275element(4, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 9, 0);
    \u0275\u0275listener("input", function TechPickerComponent_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r1);
      const filterInput_r2 = \u0275\u0275reference(6);
      return \u0275\u0275resetView(ctx.filter.set(filterInput_r2.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 10)(8, "p-checkbox", 11);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("onChange", function TechPickerComponent_Template_p_checkbox_onChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.selectAll($event.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 10)(11, "p-checkbox", 11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("onChange", function TechPickerComponent_Template_p_checkbox_onChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setShowTechLabels($event.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 12);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275listener("click", function TechPickerComponent_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const importInput_r3 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(ctx.openImport(importInput_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p-dialog", 13);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275twoWayListener("visibleChange", function TechPickerComponent_Template_p_dialog_visibleChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.importVisible, $event) || (ctx.importVisible = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(18, "div", 14);
    \u0275\u0275template(19, TechPickerComponent_Conditional_19_Template, 8, 9, "div", 15);
    \u0275\u0275elementStart(20, "div");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "textarea", 16, 1);
    \u0275\u0275twoWayListener("ngModelChange", function TechPickerComponent_Template_textarea_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.importValue, $event) || (ctx.importValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function TechPickerComponent_Template_textarea_keydown_enter_23_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.importVisible = false);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, TechPickerComponent_ng_template_25_Template, 2, 3, "ng-template", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(26, TechPickerComponent_Conditional_26_Template, 8, 15, "p-scrollPanel", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(45, _c15));
    \u0275\u0275twoWayProperty("visible", ctx.visible);
    \u0275\u0275property("modal", true)("dismissableMask", true)("draggable", false)("resizable", false)("header", \u0275\u0275pipeBind1(1, 31, "techPicker.header"))("breakpoints", \u0275\u0275pureFunction0(46, _c22));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx.filter());
    \u0275\u0275advance(3);
    \u0275\u0275property("binary", true)("label", \u0275\u0275pipeBind1(9, 33, "techPicker.unlockAll"))("ngModel", ctx.allSelected());
    \u0275\u0275advance(3);
    \u0275\u0275property("binary", true)("label", \u0275\u0275pipeBind1(12, 35, "techPicker.showLabels"))("ngModel", ctx.showTechLabels());
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(14, 37, "techPicker.import"))("pTooltip", \u0275\u0275pipeBind1(15, 39, "techPicker.importTooltip"));
    \u0275\u0275advance(3);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(47, _c32));
    \u0275\u0275twoWayProperty("visible", ctx.importVisible);
    \u0275\u0275property("modal", true)("dismissableMask", true)("draggable", true)("resizable", false)("breakpoints", \u0275\u0275pureFunction0(48, _c42))("header", \u0275\u0275pipeBind1(17, 41, "techPicker.importHeader"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.data().game === ctx.Game.Factorio ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 43, "techPicker.importInstructions"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.importValue);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.visible ? 26 : -1);
  }
}, dependencies: [NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, NgModel, PrimeTemplate, Tooltip, ButtonDirective, Checkbox, Dialog, InputTextarea, InputText, Ripple, ScrollPanel, TooltipComponent, TranslatePipe, IconSmClassPipe], changeDetection: 0 });
var TechPickerComponent = _TechPickerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TechPickerComponent, { className: "TechPickerComponent", filePath: "src\\app\\routes\\main\\components\\tech-picker\\tech-picker.component.ts", lineNumber: 29 });
})();

// src/app/routes/main/pipes/filter-options.pipe.ts
var _FilterOptionsPipe = class _FilterOptionsPipe {
  transform(value, exclude, self) {
    if (value == null)
      return [];
    if (!exclude?.length)
      return value;
    const excludeSet = new Set(exclude);
    return value.filter((o) => !excludeSet.has(o.value) || o.value === self);
  }
};
_FilterOptionsPipe.\u0275fac = function FilterOptionsPipe_Factory(t) {
  return new (t || _FilterOptionsPipe)();
};
_FilterOptionsPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "filterOptions", type: _FilterOptionsPipe, pure: true });
var FilterOptionsPipe = _FilterOptionsPipe;

// src/app/routes/main/components/settings/settings.component.ts
var _forTrack02 = ($index, $item) => $item.key;
var _c03 = () => ({ height: "100%" });
var _c16 = (a0) => ({ count: a0 });
var _c23 = () => ({ width: "400px", maxHeight: "500px" });
var _c33 = () => ({ "400px": "100vw" });
var _c43 = (a0, a1) => ({ machineId: "", settings: a0, defaults: a1 });
var _c53 = (a0, a1, a2) => ({ machineId: a0, settings: a1, defaults: a2 });
var _c63 = () => [];
function SettingsComponent_ng_template_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.state);
  }
}
function SettingsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SettingsComponent_ng_template_14_Conditional_4_Template, 2, 1, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "settings.savedStates"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.state ? 4 : -1);
  }
}
function SettingsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "button", 70);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const search_r4 = \u0275\u0275reference(3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSearch(search_r4.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "input", 71, 5);
    \u0275\u0275elementStart(4, "button", 72);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const search_r4 = \u0275\u0275reference(3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copySearchToClipboard(search_r4.value));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.BrowserUtility.search);
  }
}
function SettingsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "input", 73, 6);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_Conditional_16_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.editValue, $event) || (ctx_r1.editValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function SettingsComponent_Conditional_16_Template_input_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickSaveState(ctx_r1.data().game));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 74);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Conditional_16_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickSaveState(ctx_r1.data().game));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 75);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Conditional_16_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editState = null);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const nameCtrl_r6 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("autofocus", true)("placeholder", \u0275\u0275pipeBind1(3, 7, "settings.nameSavedState"))("pTooltip", \u0275\u0275pipeBind1(4, 9, "settings.nameSavedState"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editValue);
    \u0275\u0275advance(4);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(6, 11, "settings.saveState"))("disabled", nameCtrl_r6.invalid);
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(8, 13, "cancel"));
  }
}
function SettingsComponent_Conditional_17_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function SettingsComponent_Conditional_17_Conditional_4_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const stateMenu_r9 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(stateMenu_r9.toggle($event));
    });
    \u0275\u0275element(1, "p-menu", 80, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("popup", true)("model", ctx_r1.editStateMenu);
  }
}
function SettingsComponent_Conditional_17_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 81);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Conditional_17_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCreateState());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 1, "settings.createSavedState"));
  }
}
function SettingsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "p-dropdown", 76);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_17_Template_p_dropdown_onChange_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setState($event.value, ctx_r1.gameStates()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SettingsComponent_Conditional_17_Conditional_4_Template, 3, 2, "button", 77)(5, SettingsComponent_Conditional_17_Conditional_5_Template, 2, 3, "button", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 5, "settings.selectSavedState"))("tooltip", \u0275\u0275pipeBind1(3, 7, "settings.selectSavedState"))("ngModel", ctx_r1.state)("options", ctx_r1.savedStates());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.state ? 4 : 5);
  }
}
function SettingsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 82);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openCreateState());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "settings.createSavedState"));
  }
}
function SettingsComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "settings.game"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r1.modRecord()[ctx_r1.settings().modId]) == null ? null : tmp_7_0.id);
  }
}
function SettingsComponent_Conditional_29_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mod_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", mod_r12.value, " ");
  }
}
function SettingsComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SettingsComponent_Conditional_29_For_1_Template, 2, 1, "small", 57, _forTrack02);
    \u0275\u0275pipe(2, "keyvalue");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(2, 0, ctx_r1.data().version));
  }
}
function SettingsComponent_Conditional_30_ng_template_17_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "settings.mod"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "settings.version"));
  }
}
function SettingsComponent_Conditional_30_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mod_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mod_r14.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mod_r14.value);
  }
}
function SettingsComponent_Conditional_30_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 92);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Conditional_30_ng_template_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.versionsVisible = false);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "ok"));
  }
}
function SettingsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "label", 83);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 84)(5, "a", 85);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 25)(9, "p-dropdown", 86);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_30_Template_p_dropdown_onChange_9_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMod($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 87);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Conditional_30_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.versionsVisible = true);
    });
    \u0275\u0275elementStart(13, "p-dialog", 88);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275twoWayListener("visibleChange", function SettingsComponent_Conditional_30_Template_p_dialog_visibleChange_13_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.versionsVisible, $event) || (ctx_r1.versionsVisible = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(15, "p-table", 89);
    \u0275\u0275pipe(16, "keyvalue");
    \u0275\u0275template(17, SettingsComponent_Conditional_30_ng_template_17_Template, 7, 6, "ng-template", 23)(18, SettingsComponent_Conditional_30_ng_template_18_Template, 5, 2, "ng-template", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, SettingsComponent_Conditional_30_ng_template_19_Template, 2, 3, "ng-template", 91);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 18, "settings.modSet"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 20, "settings.requestMod"));
    \u0275\u0275advance(3);
    \u0275\u0275property("filter", true)("autofocusFilter", !ctx_r1.contentSvc.isMobile())("tooltip", \u0275\u0275pipeBind1(10, 22, "settings.modSetTooltip"))("ngModel", ctx_r1.settings().modId)("options", ctx_r1.modOptions());
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(12, 24, "settings.modVersions"));
    \u0275\u0275advance(2);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(30, _c23));
    \u0275\u0275twoWayProperty("visible", ctx_r1.versionsVisible);
    \u0275\u0275property("modal", true)("dismissableMask", true)("draggable", false)("resizable", false)("breakpoints", \u0275\u0275pureFunction0(31, _c33))("header", \u0275\u0275pipeBind1(14, 26, "settings.modVersions"));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", \u0275\u0275pipeBind1(16, 28, ctx_r1.data().version));
  }
}
function SettingsComponent_ng_template_32_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx));
  }
}
function SettingsComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SettingsComponent_ng_template_32_Conditional_4_Template, 3, 3, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    \u0275\u0275nextContext();
    const presetDropdown_r16 = \u0275\u0275reference(44);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "settings.factory"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_7_0 = presetDropdown_r16.label()) ? 4 : -1, tmp_7_0);
  }
}
function SettingsComponent_Conditional_49_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SettingsComponent_Conditional_49_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SettingsComponent_Conditional_49_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SettingsComponent_Conditional_49_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 93);
  }
  if (rf & 2) {
    const machineId_r19 = ctx.$implicit;
    \u0275\u0275nextContext();
    const machineRow_r20 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", machineRow_r20)("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c53, machineId_r19, ctx_r1.machinesState().entities[machineId_r19], ctx_r1.machinesState().entities[""]));
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "button", 104);
  }
  if (rf & 2) {
    const machineId_r22 = \u0275\u0275nextContext(2).machineId;
    \u0275\u0275classProp("invisible", machineId_r22 === "");
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275element(2, "i", 105);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 1, "settings.machineDefaults"));
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_3_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r24.value));
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_3_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const machineId_r22 = \u0275\u0275nextContext(4).machineId;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(machineId_r22);
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_3_ng_template_3_Conditional_0_Template, 3, 4, "div", 107)(1, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_3_ng_template_3_Conditional_1_Template, 2, 1, "div");
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    \u0275\u0275conditional(item_r24 ? 0 : 1);
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_3_ng_template_4_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 110);
  }
  if (rf & 2) {
    const item_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r25.value);
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_3_ng_template_4_ng_template_5_Template, 1, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const tooltip_r26 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r26);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r25.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r25.label, " ");
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 106);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "filterOptions");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_3_Template_p_dropdown_onChange_0_listener($event) {
      let tmp_14_0;
      \u0275\u0275restoreView(_r23);
      const machineId_r22 = \u0275\u0275nextContext(2).machineId;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setMachine(machineId_r22, $event.value, (tmp_14_0 = ctx_r1.data().defaults) == null ? null : tmp_14_0.machineRankIds));
    });
    \u0275\u0275template(3, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_3_ng_template_3_Template, 2, 1, "ng-template", 40)(4, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_3_ng_template_4_Template, 7, 6, "ng-template", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const machineId_r22 = \u0275\u0275nextContext(2).machineId;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(1, 3, "settings.machineTooltip"))("ngModel", machineId_r22)("options", \u0275\u0275pipeBind3(2, 5, ctx_r1.options().machines, ctx_r1.machineIds(), machineId_r22));
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 112);
    \u0275\u0275element(1, "i", 113);
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_4_ng_template_4_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 110);
  }
  if (rf & 2) {
    const item_r28 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r28.value);
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_4_ng_template_4_ng_template_5_Template, 1, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const tooltip_r29 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r29);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r28.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r28.label, " ");
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 111);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "filterOptions");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_4_Template_p_dropdown_onChange_0_listener($event) {
      let tmp_14_0;
      \u0275\u0275restoreView(_r27);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.addMachine($event.value, (tmp_14_0 = ctx_r1.data().defaults) == null ? null : tmp_14_0.machineRankIds));
    });
    \u0275\u0275template(3, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_4_ng_template_3_Template, 2, 0, "ng-template", 40)(4, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_4_ng_template_4_Template, 7, 6, "ng-template", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngModel", (tmp_13_0 = ctx_r1.options().machines[0]) == null ? null : tmp_13_0.value)("tooltip", \u0275\u0275pipeBind1(1, 3, "settings.addMachineTooltip"))("options", \u0275\u0275pipeBind2(2, 5, ctx_r1.options().machines, ctx_r1.machineIds()));
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r33 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r33.value));
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_5_ng_template_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 114);
  }
  if (rf & 2) {
    const item_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r34.value);
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_5_ng_template_3_ng_template_5_Template, 1, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r34 = ctx.$implicit;
    const tooltip_r35 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r35);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r34.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r34.label, " ");
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-dropdown", 106);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_5_Template_p_dropdown_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r30);
      const ctx_r30 = \u0275\u0275nextContext(2);
      const machineId_r22 = ctx_r30.machineId;
      const machineSettings_r32 = ctx_r30.settings;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeFuel(machineId_r22, $event.value, machineSettings_r32, ctx_r1.settings().fuelRankIds));
    });
    \u0275\u0275template(2, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_5_ng_template_2_Template, 3, 4, "ng-template", 40)(3, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_5_ng_template_3_Template, 7, 6, "ng-template", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const machineSettings_r32 = \u0275\u0275nextContext(2).settings;
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(1, 3, "settings.fuelTooltip"))("ngModel", machineSettings_r32.fuelId)("options", machineSettings_r32.fuelOptions);
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_0_ng_template_2_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r38 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", items_r38.length - 1, "");
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_0_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i");
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275template(2, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_0_ng_template_2_Conditional_1_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r38 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, items_r38[0]));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(items_r38.length > 1 ? 2 : -1);
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_0_ng_template_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
    \u0275\u0275pipe(1, "iconSmClass");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 2, ctx_r1.ItemId.Module));
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275template(1, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_0_ng_template_2_Conditional_1_Template, 3, 5, "i", 118)(2, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_0_ng_template_2_Conditional_2_Template, 2, 4, "i", 118);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r38 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional((items_r38 == null ? null : items_r38.length) ? 1 : 2);
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_0_ng_template_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 119);
  }
  if (rf & 2) {
    const item_r39 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r39.value);
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_0_ng_template_3_ng_template_5_Template, 1, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r39 = ctx.$implicit;
    const tooltip_r40 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", item_r39.value !== "module" ? tooltip_r40 : void 0);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r39.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r39.label, " ");
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-multiSelect", 116);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_0_Template_p_multiSelect_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r36);
      const ctx_r30 = \u0275\u0275nextContext(3);
      const machineId_r22 = ctx_r30.machineId;
      const defaults_r37 = ctx_r30.defaults;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setModuleRank(machineId_r22, $event.value, defaults_r37 == null ? null : defaults_r37.moduleRankIds));
    });
    \u0275\u0275template(2, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_0_ng_template_2_Template, 3, 1, "ng-template", 117)(3, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_0_ng_template_3_Template, 7, 6, "ng-template", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_17_0;
    const machineSettings_r32 = \u0275\u0275nextContext(3).settings;
    \u0275\u0275property("selectionLimit", 2)("tooltip", \u0275\u0275pipeBind1(1, 4, "settings.modifierTooltip"))("ngModel", machineSettings_r32.moduleRankIds)("options", (tmp_17_0 = machineSettings_r32.moduleOptions) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : \u0275\u0275pureFunction0(6, _c63));
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputNumber", 121, 10);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onBlur", function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_1_Conditional_0_Template_p_inputNumber_onBlur_0_listener() {
      let tmp_17_0;
      \u0275\u0275restoreView(_r42);
      const duplicatorsInput_r43 = \u0275\u0275reference(1);
      const machineId_r22 = \u0275\u0275nextContext(4).machineId;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOverclock(machineId_r22, ctx_r1.rational((tmp_17_0 = duplicatorsInput_r43.value) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : 0), machineId_r22 ? ctx_r1.machinesState().entities[""].overclock : ctx_r1.rational(0)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const machineSettings_r32 = \u0275\u0275nextContext(4).settings;
    \u0275\u0275property("min", 0)("step", 1)("maxFractionDigits", 0)("showButtons", true)("pTooltip", \u0275\u0275pipeBind1(2, 6, "settings.modifierCountTooltip"))("ngModel", machineSettings_r32.overclock.toNumber());
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r44 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r44.value));
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_1_ng_template_4_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 119);
  }
  if (rf & 2) {
    const item_r45 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r45.value);
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_1_ng_template_4_ng_template_5_Template, 1, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r45 = ctx.$implicit;
    const tooltip_r46 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", item_r45.value !== "module" ? tooltip_r46 : void 0);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r45.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r45.label, " ");
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_1_Conditional_0_Template, 3, 8, "p-inputNumber", 120);
    \u0275\u0275elementStart(1, "p-dropdown", 106);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_1_Template_p_dropdown_onChange_1_listener($event) {
      let tmp_15_0;
      \u0275\u0275restoreView(_r41);
      const machineId_r22 = \u0275\u0275nextContext(3).machineId;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setModuleRank(machineId_r22, [$event.value], (tmp_15_0 = ctx_r1.data().defaults) == null ? null : tmp_15_0.moduleRankIds));
    });
    \u0275\u0275template(3, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_1_ng_template_3_Template, 3, 4, "ng-template", 40)(4, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_1_ng_template_4_Template, 7, 6, "ng-template", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_17_0;
    const machineSettings_r32 = \u0275\u0275nextContext(3).settings;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.data().game === ctx_r1.Game.FinalFactory ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(2, 4, "settings.modifierTooltip"))("ngModel", machineSettings_r32.moduleRankIds == null ? null : machineSettings_r32.moduleRankIds[0])("options", (tmp_17_0 = machineSettings_r32.moduleOptions) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : \u0275\u0275pureFunction0(6, _c63));
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_0_Template, 4, 7, "p-multiSelect", 115)(1, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Conditional_1_Template, 5, 7, "p-dropdown", 100);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r1.data().game !== ctx_r1.Game.Satisfactory && ctx_r1.data().game !== ctx_r1.Game.FinalFactory ? 0 : 1);
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-inputNumber", 122, 11);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("onBlur", function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_7_Template_p_inputNumber_onBlur_0_listener() {
      let tmp_15_0;
      \u0275\u0275restoreView(_r47);
      const overclockInput_r48 = \u0275\u0275reference(1);
      const machineId_r22 = \u0275\u0275nextContext(2).machineId;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setOverclock(machineId_r22, ctx_r1.rational((tmp_15_0 = overclockInput_r48.value) !== null && tmp_15_0 !== void 0 ? tmp_15_0 : 100), machineId_r22 ? ctx_r1.machinesState().entities[""].overclock : ctx_r1.rational(100)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const machineSettings_r32 = \u0275\u0275nextContext(2).settings;
    \u0275\u0275property("min", 1)("max", 250)("step", 10)("maxFractionDigits", 2)("showButtons", true)("pTooltip", \u0275\u0275pipeBind1(2, 7, "settings.overclockTooltip"))("ngModel", machineSettings_r32.overclock.toNumber());
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_ng_template_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r50 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 2, item_r50.value));
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_ng_template_4_Conditional_0_Template, 3, 4, "div", 107);
  }
  if (rf & 2) {
    const item_r50 = ctx.$implicit;
    \u0275\u0275conditional(item_r50 ? 0 : -1);
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_ng_template_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 125);
  }
  if (rf & 2) {
    const item_r51 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r51.value);
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_ng_template_5_ng_template_5_Template, 1, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r51 = ctx.$implicit;
    const tooltip_r52 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r52);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r51.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r51.label, " ");
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_Conditional_6_ng_template_2_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r54 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", items_r54.length - 1, "");
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_Conditional_6_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "i");
    \u0275\u0275pipe(1, "iconSmClass");
    \u0275\u0275template(2, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_Conditional_6_ng_template_2_Conditional_1_Conditional_2_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r54 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 3, items_r54[0]));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(items_r54.length > 1 ? 2 : -1);
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_Conditional_6_ng_template_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
    \u0275\u0275pipe(1, "iconSmClass");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(7);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 2, ctx_r1.ItemId.Module));
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_Conditional_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275template(1, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_Conditional_6_ng_template_2_Conditional_1_Template, 3, 5, "i", 118)(2, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_Conditional_6_ng_template_2_Conditional_2_Template, 2, 4, "i", 118);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r54 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional((items_r54 == null ? null : items_r54.length) ? 1 : 2);
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_Conditional_6_ng_template_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 119);
  }
  if (rf & 2) {
    const item_r55 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r55.value);
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_Conditional_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_Conditional_6_ng_template_3_ng_template_5_Template, 1, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r55 = ctx.$implicit;
    const tooltip_r56 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", item_r55.value !== "module" ? tooltip_r56 : void 0);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r55.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r55.label, " ");
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-multiSelect", 116);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_Conditional_6_Template_p_multiSelect_onChange_0_listener($event) {
      \u0275\u0275restoreView(_r53);
      const ctx_r30 = \u0275\u0275nextContext(3);
      const machineId_r22 = ctx_r30.machineId;
      const defaults_r37 = ctx_r30.defaults;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.changeBeaconModuleRank(machineId_r22, $event.value, defaults_r37));
    });
    \u0275\u0275template(2, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_Conditional_6_ng_template_2_Template, 3, 1, "ng-template", 117)(3, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_Conditional_6_ng_template_3_Template, 7, 6, "ng-template", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_17_0;
    const machineSettings_r32 = \u0275\u0275nextContext(3).settings;
    \u0275\u0275property("selectionLimit", 2)("tooltip", \u0275\u0275pipeBind1(1, 4, "settings.beaconModuleTooltip"))("ngModel", machineSettings_r32.beaconModuleRankIds)("options", (tmp_17_0 = machineSettings_r32.beaconModuleOptions) !== null && tmp_17_0 !== void 0 ? tmp_17_0 : \u0275\u0275pureFunction0(6, _c63));
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "lab-input-number", 123);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("setValue", function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_Template_lab_input_number_setValue_0_listener($event) {
      \u0275\u0275restoreView(_r49);
      const ctx_r30 = \u0275\u0275nextContext(2);
      const machineId_r22 = ctx_r30.machineId;
      const defaults_r37 = ctx_r30.defaults;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setBeaconCount(machineId_r22, $event, defaults_r37 == null ? null : defaults_r37.beaconCount));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-dropdown", 124);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_Template_p_dropdown_onChange_2_listener($event) {
      \u0275\u0275restoreView(_r49);
      const ctx_r30 = \u0275\u0275nextContext(2);
      const machineId_r22 = ctx_r30.machineId;
      const defaults_r37 = ctx_r30.defaults;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setBeacon(machineId_r22, $event.value, defaults_r37 == null ? null : defaults_r37.beaconId));
    });
    \u0275\u0275template(4, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_ng_template_4_Template, 1, 1, "ng-template", 40)(5, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_ng_template_5_Template, 7, 6, "ng-template", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_Conditional_6_Template, 4, 7, "p-multiSelect", 115);
  }
  if (rf & 2) {
    const machineSettings_r32 = \u0275\u0275nextContext(2).settings;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(1, 6, "settings.beaconCountTooltip"))("value", machineSettings_r32.beaconCount);
    \u0275\u0275advance(2);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(3, 8, "settings.beaconTooltip"))("ngModel", machineSettings_r32.beaconId)("options", ctx_r1.options().beacons);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(machineSettings_r32.beaconModuleRankIds ? 6 : -1);
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275template(1, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_1_Template, 1, 2, "button", 98)(2, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_2_Template, 3, 3, "span", 99)(3, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_3_Template, 5, 9, "p-dropdown", 100)(4, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_4_Template, 5, 8, "p-dropdown", 101)(5, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_5_Template, 4, 5, "p-dropdown", 100)(6, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_6_Template, 2, 1)(7, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_7_Template, 3, 9, "p-inputNumber", 102)(8, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Conditional_8_Template, 7, 10);
    \u0275\u0275elementStart(9, "button", 103);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Template_button_click_9_listener() {
      let tmp_13_0;
      \u0275\u0275restoreView(_r21);
      const machineId_r22 = \u0275\u0275nextContext().machineId;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeMachine(machineId_r22, (tmp_13_0 = ctx_r1.data().defaults) == null ? null : tmp_13_0.machineRankIds));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r30 = \u0275\u0275nextContext();
    const machineId_r22 = ctx_r30.machineId;
    const machineSettings_r32 = ctx_r30.settings;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("mb-1", machineId_r22 === "");
    \u0275\u0275advance();
    \u0275\u0275conditional(machineId_r22 ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(machineId_r22 ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(machineSettings_r32.fuelId ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(machineSettings_r32.moduleRankIds ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.data().game === ctx_r1.Game.Satisfactory ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.data().game === ctx_r1.Game.Factorio && machineSettings_r32.beaconCount != null ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("invisible", machineId_r22 === "");
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(10, 11, "settings.removeMachinePreference"));
  }
}
function SettingsComponent_Conditional_49_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SettingsComponent_Conditional_49_ng_template_3_Conditional_0_Template, 11, 13, "div", 96);
  }
  if (rf & 2) {
    const machineSettings_r32 = ctx.settings;
    \u0275\u0275conditional(machineSettings_r32 ? 0 : -1);
  }
}
function SettingsComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, SettingsComponent_Conditional_49_ng_container_0_Template, 1, 0, "ng-container", 93);
    \u0275\u0275elementStart(1, "p-orderList", 94);
    \u0275\u0275listener("onReorder", function SettingsComponent_Conditional_49_Template_p_orderList_onReorder_1_listener() {
      let tmp_8_0;
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMachineRank(ctx_r1.machineIds(), (tmp_8_0 = ctx_r1.data().defaults) == null ? null : tmp_8_0.machineRankIds));
    });
    \u0275\u0275template(2, SettingsComponent_Conditional_49_ng_template_2_Template, 1, 6, "ng-template", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SettingsComponent_Conditional_49_ng_template_3_Template, 1, 1, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(5, "div", 95);
  }
  if (rf & 2) {
    const machineRow_r20 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", machineRow_r20)("ngTemplateOutletContext", \u0275\u0275pureFunction2(4, _c43, ctx_r1.machinesState().entities[""], ctx_r1.data().defaults));
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.machineIds())("dragdrop", true);
  }
}
function SettingsComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "p-checkbox", 49);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_50_Template_p_checkbox_onChange_1_listener($event) {
      \u0275\u0275restoreView(_r57);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleBeaconReceivers($event.checked));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.settings().beaconReceivers != null)("binary", true)("label", \u0275\u0275pipeBind1(2, 4, "settings.estimateBeaconPowerUsage"))("pTooltip", \u0275\u0275pipeBind1(3, 6, "settings.estimateBeaconPowerUsageTooltip"));
  }
}
function SettingsComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "label", 126);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "lab-input-number", 127);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("setValue", function SettingsComponent_Conditional_51_Template_lab_input_number_setValue_4_listener($event) {
      \u0275\u0275restoreView(_r58);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBeaconReceivers($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "settings.averageBeaconReceivers"));
    \u0275\u0275advance(2);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(5, 5, "settings.averageBeaconReceiversTooltip"))("value", ctx);
  }
}
function SettingsComponent_Conditional_52_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r60 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, item_r60.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r60.label, " ");
  }
}
function SettingsComponent_Conditional_52_ng_template_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 119);
  }
  if (rf & 2) {
    const item_r61 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r61.value);
  }
}
function SettingsComponent_Conditional_52_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_52_ng_template_5_ng_template_5_Template, 1, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r61 = ctx.$implicit;
    const tooltip_r62 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", item_r61.value !== "module" ? tooltip_r62 : void 0);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r61.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r61.label, " ");
  }
}
function SettingsComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 29)(2, "p-dropdown", 128);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_52_Template_p_dropdown_onChange_2_listener($event) {
      \u0275\u0275restoreView(_r59);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setProliferatorSpray($event.value));
    });
    \u0275\u0275template(4, SettingsComponent_Conditional_52_ng_template_4_Template, 5, 5, "ng-template", 40)(5, SettingsComponent_Conditional_52_ng_template_5_Template, 7, 6, "ng-template", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 129);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("autoDisplayFirst", false)("tooltip", \u0275\u0275pipeBind1(3, 5, "settings.proliferatorSelfSprayTooltip"))("ngModel", ctx_r1.settings().proliferatorSprayId)("options", ctx_r1.options().proliferatorModules);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 7, "settings.proliferatorSelfSpray"));
  }
}
function SettingsComponent_ng_template_57_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r63 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, item_r63.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r63.label, " ");
  }
}
function SettingsComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SettingsComponent_ng_template_57_Conditional_0_Template, 5, 5, "div", 130);
  }
  if (rf & 2) {
    const item_r63 = ctx.$implicit;
    \u0275\u0275conditional(item_r63 ? 0 : -1);
  }
}
function SettingsComponent_ng_template_58_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 131);
  }
  if (rf & 2) {
    const item_r64 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r64.value);
  }
}
function SettingsComponent_ng_template_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_ng_template_58_ng_template_5_Template, 1, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r64 = ctx.$implicit;
    const tooltip_r65 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r65);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r64.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r64.label, " ");
  }
}
function SettingsComponent_Conditional_62_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r67 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, item_r67.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r67.label, " ");
  }
}
function SettingsComponent_Conditional_62_ng_template_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 134);
  }
  if (rf & 2) {
    const item_r68 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r68.value);
  }
}
function SettingsComponent_Conditional_62_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_62_ng_template_5_ng_template_5_Template, 1, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r68 = ctx.$implicit;
    const tooltip_r69 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r69);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r68.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r68.label, " ");
  }
}
function SettingsComponent_Conditional_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 29)(2, "p-dropdown", 132);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_62_Template_p_dropdown_onChange_2_listener($event) {
      let tmp_7_0;
      \u0275\u0275restoreView(_r66);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPipe($event.value, (tmp_7_0 = ctx_r1.data().defaults) == null ? null : tmp_7_0.pipeId));
    });
    \u0275\u0275template(4, SettingsComponent_Conditional_62_ng_template_4_Template, 5, 5, "ng-template", 40)(5, SettingsComponent_Conditional_62_ng_template_5_Template, 7, 6, "ng-template", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 133);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(3, 4, "settings.defaultPipeTooltip"))("ngModel", ctx_r1.settings().pipeId)("options", ctx_r1.options().pipes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "settings.defaultPipe"));
  }
}
function SettingsComponent_Conditional_63_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r71 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, item_r71.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r71.label, " ");
  }
}
function SettingsComponent_Conditional_63_ng_template_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 137);
  }
  if (rf & 2) {
    const item_r72 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r72.value);
  }
}
function SettingsComponent_Conditional_63_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_63_ng_template_5_ng_template_5_Template, 1, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r72 = ctx.$implicit;
    const tooltip_r73 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r73);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r72.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r72.label, " ");
  }
}
function SettingsComponent_Conditional_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 29)(2, "p-dropdown", 135);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_63_Template_p_dropdown_onChange_2_listener($event) {
      let tmp_7_0;
      \u0275\u0275restoreView(_r70);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCargoWagon($event.value, (tmp_7_0 = ctx_r1.data().defaults) == null ? null : tmp_7_0.cargoWagonId));
    });
    \u0275\u0275template(4, SettingsComponent_Conditional_63_ng_template_4_Template, 5, 5, "ng-template", 40)(5, SettingsComponent_Conditional_63_ng_template_5_Template, 7, 6, "ng-template", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 136);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(3, 4, "settings.defaultCargoWagonTooltip"))("ngModel", ctx_r1.settings().cargoWagonId)("options", ctx_r1.options().cargoWagons);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "settings.defaultCargoWagon"));
  }
}
function SettingsComponent_Conditional_64_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r75 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 3, item_r75.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r75.label, " ");
  }
}
function SettingsComponent_Conditional_64_ng_template_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 140);
  }
  if (rf & 2) {
    const item_r76 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r76.value);
  }
}
function SettingsComponent_Conditional_64_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_64_ng_template_5_ng_template_5_Template, 1, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r76 = ctx.$implicit;
    const tooltip_r77 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r77);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r76.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r76.label, " ");
  }
}
function SettingsComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 29)(2, "p-dropdown", 138);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_64_Template_p_dropdown_onChange_2_listener($event) {
      let tmp_7_0;
      \u0275\u0275restoreView(_r74);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFluidWagon($event.value, (tmp_7_0 = ctx_r1.data().defaults) == null ? null : tmp_7_0.fluidWagonId));
    });
    \u0275\u0275template(4, SettingsComponent_Conditional_64_ng_template_4_Template, 5, 5, "ng-template", 40)(5, SettingsComponent_Conditional_64_ng_template_5_Template, 7, 6, "ng-template", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 139);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(3, 4, "settings.defaultFluidWagonTooltip"))("ngModel", ctx_r1.settings().fluidWagonId)("options", ctx_r1.options().fluidWagons);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 6, "settings.defaultFluidWagon"));
  }
}
function SettingsComponent_Conditional_65_Conditional_2_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
    \u0275\u0275pipe(1, "iconSmClass");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 2, ctx_r1.ItemId.Module));
  }
}
function SettingsComponent_Conditional_65_Conditional_2_ng_template_2_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 145);
    \u0275\u0275pipe(1, "iconSmClass");
  }
  if (rf & 2) {
    const item_r80 = ctx.$implicit;
    \u0275\u0275classMap(\u0275\u0275pipeBind1(1, 2, item_r80));
  }
}
function SettingsComponent_Conditional_65_Conditional_2_ng_template_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SettingsComponent_Conditional_65_Conditional_2_ng_template_2_Conditional_2_For_1_Template, 2, 4, "i", 144, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const items_r81 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(items_r81);
  }
}
function SettingsComponent_Conditional_65_Conditional_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275template(1, SettingsComponent_Conditional_65_Conditional_2_ng_template_2_Conditional_1_Template, 2, 4, "i", 118)(2, SettingsComponent_Conditional_65_Conditional_2_ng_template_2_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const items_r81 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(!(items_r81 == null ? null : items_r81.length) ? 1 : 2);
  }
}
function SettingsComponent_Conditional_65_Conditional_2_ng_template_3_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lab-tooltip", 114);
  }
  if (rf & 2) {
    const item_r82 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("id", item_r82.value);
  }
}
function SettingsComponent_Conditional_65_Conditional_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275element(1, "i");
    \u0275\u0275pipe(2, "iconSmClass");
    \u0275\u0275elementStart(3, "div", 109);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, SettingsComponent_Conditional_65_Conditional_2_ng_template_3_ng_template_5_Template, 1, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r82 = ctx.$implicit;
    const tooltip_r83 = \u0275\u0275reference(6);
    \u0275\u0275property("pTooltip", tooltip_r83);
    \u0275\u0275advance();
    \u0275\u0275classMap(\u0275\u0275pipeBind1(2, 4, item_r82.value));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r82.label, " ");
  }
}
function SettingsComponent_Conditional_65_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-multiSelect", 143);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_65_Conditional_2_Template_p_multiSelect_onChange_0_listener($event) {
      const data_r79 = \u0275\u0275restoreView(_r78);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setFuels($event.value, data_r79.defaults && data_r79.defaults.fuelId ? [data_r79.defaults.fuelId] : []));
    });
    \u0275\u0275template(2, SettingsComponent_Conditional_65_Conditional_2_ng_template_2_Template, 3, 1, "ng-template", 117)(3, SettingsComponent_Conditional_65_Conditional_2_ng_template_3_Template, 7, 6, "ng-template", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(1, 3, "settings.fuelRankTooltip"))("ngModel", ctx_r1.settings().fuelRankIds)("options", ctx_r1.options().fuels);
  }
}
function SettingsComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 29);
    \u0275\u0275template(2, SettingsComponent_Conditional_65_Conditional_2_Template, 4, 5, "p-multiSelect", 141);
    \u0275\u0275elementStart(3, "label", 142);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_6_0 = ctx_r1.data()) ? 2 : -1, tmp_6_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "settings.fuelRank"));
  }
}
function SettingsComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "div", 29)(2, "p-inputNumber", 146, 12);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("onBlur", function SettingsComponent_Conditional_66_Template_p_inputNumber_onBlur_2_listener() {
      let tmp_8_0;
      \u0275\u0275restoreView(_r84);
      const flowRateInput_r85 = \u0275\u0275reference(3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setFlowRate(ctx_r1.rational((tmp_8_0 = flowRateInput_r85.value) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : 1500)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 147);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small", 57)(10, "a", 148);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(13, "div", 28)(14, "div", 29)(15, "p-dropdown", 149);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_66_Template_p_dropdown_onChange_15_listener($event) {
      \u0275\u0275restoreView(_r84);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setInserterTarget($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "label", 150);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("suffix", " " + \u0275\u0275pipeBind1(4, 12, "settings.flowRateUnit"))("min", 1)("step", 100)("showButtons", true)("pTooltip", \u0275\u0275pipeBind1(5, 14, "settings.pipeFlowRateTooltip"))("ngModel", ctx_r1.settings().flowRate.toNumber());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 16, "settings.pipeFlowRate"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 18, "settings.wiki"));
    \u0275\u0275advance(4);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(16, 20, "settings.inserterTargetTooltip"))("ngModel", ctx_r1.settings().inserterTarget)("options", ctx_r1.inserterTargetOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 22, "settings.inserterTarget"));
  }
}
function SettingsComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "p-inputNumber", 151, 13);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275listener("onBlur", function SettingsComponent_Conditional_67_Template_p_inputNumber_onBlur_2_listener() {
      let tmp_8_0;
      \u0275\u0275restoreView(_r86);
      const miningBonusInput_r87 = \u0275\u0275reference(3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMiningBonus(ctx_r1.rational(((tmp_8_0 = miningBonusInput_r87.value) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : 100) - 100)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 152);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 100)("step", 10)("showButtons", true)("pTooltip", \u0275\u0275pipeBind1(4, 6, "settings.miningSpeedTooltip"))("ngModel", ctx_r1.settings().miningBonus.add(ctx_r1.rational(100)).toNumber());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "settings.miningSpeed"));
  }
}
function SettingsComponent_ng_template_69_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx));
  }
}
function SettingsComponent_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SettingsComponent_ng_template_69_Conditional_4_Template, 3, 3, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_7_0;
    \u0275\u0275nextContext();
    const flowDiagramDropdown_r88 = \u0275\u0275reference(74);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "settings.flow"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_7_0 = flowDiagramDropdown_r88.label()) ? 4 : -1, tmp_7_0);
  }
}
function SettingsComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 29)(2, "p-dropdown", 153);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_79_Template_p_dropdown_onChange_2_listener($event) {
      \u0275\u0275restoreView(_r89);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSankeyAlign($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 154);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(3, 4, "settings.sankeyAlignTooltip"))("ngModel", ctx_r1.preferences().sankeyAlign)("options", ctx_r1.sankeyAlignOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "settings.sankeyAlign"));
  }
}
function SettingsComponent_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-accordionTab", 50);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "div", 27)(3, "div", 36)(4, "div", 29)(5, "p-inputNumber", 155, 14);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("onBlur", function SettingsComponent_Conditional_98_Template_p_inputNumber_onBlur_5_listener() {
      let tmp_8_0;
      \u0275\u0275restoreView(_r90);
      const miningProdInput_r91 = \u0275\u0275reference(6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setMiningBonus(ctx_r1.rational((tmp_8_0 = miningProdInput_r91.value) !== null && tmp_8_0 !== void 0 ? tmp_8_0 : 0)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label", 156);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 36)(12, "div", 29)(13, "p-dropdown", 157);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_98_Template_p_dropdown_onChange_13_listener($event) {
      \u0275\u0275restoreView(_r90);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setResearchSpeed($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 158);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 28)(19, "div", 29)(20, "p-dropdown", 159);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_98_Template_p_dropdown_onChange_20_listener($event) {
      \u0275\u0275restoreView(_r90);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setInserterCapacity($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "label", 160);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("header", \u0275\u0275pipeBind1(1, 15, "settings.bonuses"));
    \u0275\u0275advance(5);
    \u0275\u0275property("min", 0)("step", 10)("showButtons", true)("pTooltip", \u0275\u0275pipeBind1(7, 17, "settings.miningProductivityTooltip"))("ngModel", ctx_r1.settings().miningBonus.toNumber());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 19, "settings.miningProductivity"));
    \u0275\u0275advance(4);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(14, 21, "settings.researchSpeedTooltip"))("ngModel", ctx_r1.settings().researchBonus)("options", ctx_r1.researchSpeedOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 23, "settings.researchSpeed"));
    \u0275\u0275advance(4);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(21, 25, "settings.inserterCapacityTooltip"))("ngModel", ctx_r1.settings().inserterCapacity)("options", ctx_r1.inserterCapacityOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 27, "settings.inserterCapacity"));
  }
}
function SettingsComponent_Conditional_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r92 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 29)(2, "p-dropdown", 161);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Conditional_111_Template_p_dropdown_onChange_2_listener($event) {
      \u0275\u0275restoreView(_r92);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPowerUnit($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 162);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(3, 4, "settings.powerUnitTooltip"))("ngModel", ctx_r1.preferences().powerUnit)("options", ctx_r1.powerUnitOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, "settings.powerUnit"));
  }
}
var _SettingsComponent = class _SettingsComponent {
  constructor() {
    this.contentSvc = inject(ContentService);
    this.router = inject(Router);
    this.store = inject(Store);
    this.translateSvc = inject(TranslateService);
    this.routerSvc = inject(RouterService);
    this.active = false;
    this.hidden = false;
    this.itemsState = this.store.selectSignal(items_exports.getItemsState);
    this.excludedItemIds = this.store.selectSignal(items_exports.getExcludedItemIds);
    this.recipesState = this.store.selectSignal(recipes_exports.getRecipesState);
    this.excludedRecipeIds = this.store.selectSignal(recipes_exports.getExcludedRecipeIds);
    this.itemIds = this.store.selectSignal(recipes_exports.getAvailableItems);
    this.data = this.store.selectSignal(recipes_exports.getAdjustedDataset);
    this.machinesState = this.store.selectSignal(machines_exports.getMachinesState);
    this.settings = this.store.selectSignal(settings_exports.getSettings);
    this.columnsState = this.store.selectSignal(settings_exports.getColumnsState);
    this.options = this.store.selectSignal(settings_exports.getOptions);
    this.modOptions = this.store.selectSignal(settings_exports.getModOptions);
    this.presetOptions = this.store.selectSignal(settings_exports.getPresetOptions);
    this.linkValueOptions = this.store.selectSignal(settings_exports.getLinkValueOptions);
    this.researchedTechnologyIds = this.store.selectSignal(settings_exports.getAllResearchedTechnologyIds);
    this.recipeIds = this.store.selectSignal(settings_exports.getAvailableRecipes);
    this.gameStates = this.store.selectSignal(settings_exports.getGameStates);
    this.savedStates = this.store.selectSignal(settings_exports.getSavedStates);
    this.preferences = this.store.selectSignal(preferences_exports.preferencesState);
    this.modRecord = this.store.selectSignal(datasets_exports.getModRecord);
    this.machineIds = computed(() => [
      ...this.store.selectSignal(machines_exports.getMachinesState)().ids
    ]);
    this.state = "";
    this.editValue = "";
    this.editState = null;
    this.editStateMenu = [
      {
        label: this.translateSvc.instant("settings.createSavedState"),
        icon: "fa-solid fa-plus",
        command: () => this.openCreateState()
      },
      {
        label: this.translateSvc.instant("settings.saveSavedState"),
        icon: "fa-solid fa-floppy-disk",
        command: () => this.overwriteState()
      },
      {
        label: this.translateSvc.instant("settings.editSavedState"),
        icon: "fa-solid fa-pencil",
        command: () => this.openEditState()
      },
      {
        label: this.translateSvc.instant("settings.deleteSavedState"),
        icon: "fa-solid fa-trash",
        command: () => this.clickDeleteState()
      }
    ];
    this.versionsVisible = false;
    this.displayRateOptions = displayRateOptions;
    this.gameOptions = gameOptions;
    this.inserterCapacityOptions = inserterCapacityOptions;
    this.inserterTargetOptions = inserterTargetOptions;
    this.languageOptions = languageOptions;
    this.powerUnitOptions = powerUnitOptions;
    this.researchSpeedOptions = researchBonusOptions;
    this.themeOptions = themeOptions;
    this.flowDiagramOptions = flowDiagramOptions;
    this.sankeyAlignOptions = sankeyAlignOptions;
    this.maximizeTypeOptions = maximizeTypeOptions;
    this.FuelType = FuelType;
    this.Game = Game;
    this.ItemId = ItemId;
    this.FlowDiagram = FlowDiagram;
    this.BrowserUtility = BrowserUtility;
    this.rational = rational;
  }
  ngOnInit() {
    this.store.select(settings_exports.getGameStates).pipe(first()).subscribe((states) => {
      this.state = coalesce(Object.keys(states).find((s) => states[s] === BrowserUtility.search), "");
    });
  }
  clickResetSettings() {
    this.contentSvc.confirm({
      icon: "fa-solid fa-exclamation-triangle",
      header: this.translateSvc.instant("settings.reset"),
      message: this.translateSvc.instant("settings.resetWarning"),
      acceptLabel: this.translateSvc.instant("yes"),
      rejectLabel: this.translateSvc.instant("cancel"),
      accept: () => {
        localStorage.clear();
        this.resetSettings();
      }
    });
  }
  setSearch(search) {
    const tree = this.router.parseUrl(this.router.url);
    const params = new URLSearchParams(search);
    params.forEach((value, key) => tree.queryParams[key] = value);
    this.router.navigateByUrl(tree);
  }
  copySearchToClipboard(search) {
    navigator.clipboard.writeText(search);
  }
  setState(id, states) {
    const query = states[id];
    if (query) {
      const queryParams = this.routerSvc.getParams(query);
      this.state = id;
      this.router.navigate([], { queryParams });
    }
  }
  clickSaveState(game) {
    if (!this.editValue || !this.editState)
      return;
    this.saveState(game, this.editValue, BrowserUtility.search);
    if (this.editState === "edit" && this.state) {
      this.removeState(game, this.state);
    }
    this.editState = null;
    this.state = this.editValue;
  }
  openCreateState() {
    this.editValue = "";
    this.editState = "create";
  }
  overwriteState() {
    this.store.select(settings_exports.getGame).pipe(first()).subscribe((game) => {
      this.saveState(game, this.state, BrowserUtility.search);
    });
  }
  openEditState() {
    this.editValue = this.state;
    this.editState = "edit";
  }
  clickDeleteState() {
    this.store.select(settings_exports.getGame).pipe(first()).subscribe((game) => {
      this.removeState(game, this.state);
      this.state = "";
    });
  }
  setGame(game) {
    this.setMod(gameInfo[game].modId);
  }
  setExcludedRecipes(checked, recipesState, data) {
    const payload = [];
    for (const id of data.recipeIds) {
      const value = checked.some((i) => i === id);
      if (value !== recipesState[id].excluded) {
        const def = coalesce(data.defaults?.excludedRecipeIds, []).some((i) => i === id);
        payload.push({ id, value, def });
      }
    }
    this.setRecipeExcludedBatch(payload);
  }
  setExcludedItems(checked, itemsState, data) {
    const payload = [];
    for (const id of data.itemIds) {
      const value = checked.some((i) => i === id);
      if (value !== itemsState[id].excluded) {
        payload.push({ id, value });
      }
    }
    this.setItemExcludedBatch(payload);
  }
  changeFuel(id, value, settings, fuelRankIds) {
    const def = RecipeUtility.bestMatch(coalesce(settings.fuelOptions?.map((o) => o.value), []), fuelRankIds);
    this.setFuel(id, value, def);
  }
  changeBeaconModuleRank(id, value, def) {
    if (id === "") {
      this.setBeaconModuleRank(id, value, [def.beaconModuleId]);
    } else {
      this.setBeaconModuleRank(id, value, def.beaconModuleRankIds);
    }
  }
  toggleBeaconReceivers(value) {
    this.setBeaconReceivers(value ? rational(1n) : null);
  }
  /** Action Dispatch Methods */
  resetSettings() {
    this.store.dispatch(new app_actions_exports.ResetAction());
  }
  saveState(key, id, value) {
    this.store.dispatch(new preferences_exports.SaveStateAction({ key, id, value }));
  }
  removeState(key, id) {
    this.store.dispatch(new preferences_exports.RemoveStateAction({ key, id }));
  }
  setMod(value) {
    this.store.dispatch(new settings_exports.SetModAction(value));
  }
  setResearchedTechnologies(value) {
    this.store.dispatch(new settings_exports.SetResearchedTechnologiesAction(value));
  }
  setItemExcludedBatch(payload) {
    this.store.dispatch(new items_exports.SetExcludedBatchAction(payload));
  }
  setRecipeExcludedBatch(payload) {
    this.store.dispatch(new recipes_exports.SetExcludedBatchAction(payload));
  }
  setNetProductionOnly(value) {
    this.store.dispatch(new settings_exports.SetNetProductionOnlyAction(value));
  }
  setSurplusMachinesOutput(value) {
    this.store.dispatch(new settings_exports.SetSurplusMachinesOutputAction(value));
  }
  setPreset(value) {
    this.store.dispatch(new settings_exports.SetPresetAction(value));
  }
  addMachine(value, def) {
    this.store.dispatch(new machines_exports.AddAction({ value, def }));
  }
  removeMachine(value, def) {
    this.store.dispatch(new machines_exports.RemoveAction({ value, def }));
  }
  setMachineRank(value, def) {
    this.store.dispatch(new machines_exports.SetRankAction({ value, def }));
  }
  setMachine(id, value, def) {
    this.store.dispatch(new machines_exports.SetMachineAction({ id, value, def }));
  }
  setFuel(id, value, def) {
    this.store.dispatch(new machines_exports.SetFuelAction({ id, value, def }));
  }
  setModuleRank(id, value, def) {
    this.store.dispatch(new machines_exports.SetModuleRankAction({ id, value, def }));
  }
  setOverclock(id, value, def) {
    this.store.dispatch(new machines_exports.SetOverclockAction({ id, value, def }));
  }
  setBeaconCount(id, value, def) {
    this.store.dispatch(new machines_exports.SetBeaconCountAction({ id, value, def }));
  }
  setBeacon(id, value, def) {
    this.store.dispatch(new machines_exports.SetBeaconAction({ id, value, def }));
  }
  setBeaconModuleRank(id, value, def) {
    this.store.dispatch(new machines_exports.SetBeaconModuleRankAction({ id, value, def }));
  }
  setBeaconReceivers(value) {
    this.store.dispatch(new settings_exports.SetBeaconReceiversAction(value));
  }
  setProliferatorSpray(value) {
    this.store.dispatch(new settings_exports.SetProliferatorSprayAction(value));
  }
  setBelt(value, def) {
    this.store.dispatch(new settings_exports.SetBeltAction({ value, def }));
  }
  setPipe(value, def) {
    this.store.dispatch(new settings_exports.SetPipeAction({ value, def }));
  }
  setCargoWagon(value, def) {
    this.store.dispatch(new settings_exports.SetCargoWagonAction({ value, def }));
  }
  setFluidWagon(value, def) {
    this.store.dispatch(new settings_exports.SetFluidWagonAction({ value, def }));
  }
  setFuels(value, def) {
    this.store.dispatch(new settings_exports.SetFuelRankAction({ value, def }));
  }
  setFlowRate(value) {
    this.store.dispatch(new settings_exports.SetFlowRateAction(value));
  }
  setInserterTarget(value) {
    this.store.dispatch(new settings_exports.SetInserterTargetAction(value));
  }
  setMiningBonus(value) {
    this.store.dispatch(new settings_exports.SetMiningBonusAction(value));
  }
  setResearchSpeed(value) {
    this.store.dispatch(new settings_exports.SetResearchBonusAction(value));
  }
  setInserterCapacity(value) {
    this.store.dispatch(new settings_exports.SetInserterCapacityAction(value));
  }
  setDisplayRate(value, prev) {
    this.store.dispatch(new settings_exports.SetDisplayRateAction({ value, prev }));
  }
  setMaximizeType(value) {
    this.store.dispatch(new settings_exports.SetMaximizeTypeAction(value));
  }
  setPowerUnit(value) {
    this.store.dispatch(new preferences_exports.SetPowerUnitAction(value));
  }
  setLanguage(value) {
    this.translateSvc.use(value);
    this.store.dispatch(new preferences_exports.SetLanguageAction(value));
  }
  setTheme(value) {
    this.store.dispatch(new preferences_exports.SetThemeAction(value));
  }
  setBypassLanding(value) {
    this.store.dispatch(new preferences_exports.SetBypassLandingAction(value));
  }
  setHideDuplicateIcons(value) {
    this.store.dispatch(new preferences_exports.SetHideDuplicateIconsAction(value));
  }
  setDisablePaginator(value) {
    this.store.dispatch(new preferences_exports.SetDisablePaginatorAction(value));
  }
  setFlowDiagram(value) {
    this.store.dispatch(new preferences_exports.SetFlowDiagramAction(value));
  }
  setSankeyAlign(value) {
    this.store.dispatch(new preferences_exports.SetSankeyAlignAction(value));
  }
  setLinkSize(value) {
    this.store.dispatch(new preferences_exports.SetLinkSizeAction(value));
  }
  setLinkText(value) {
    this.store.dispatch(new preferences_exports.SetLinkTextAction(value));
  }
  setFlowHideExcluded(value) {
    this.store.dispatch(new preferences_exports.SetFlowHideExcludedAction(value));
  }
};
_SettingsComponent.\u0275fac = function SettingsComponent_Factory(t) {
  return new (t || _SettingsComponent)();
};
_SettingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["lab-settings"]], hostVars: 4, hostBindings: function SettingsComponent_HostBindings(rf, ctx) {
  if (rf & 2) {
    \u0275\u0275classProp("active", ctx.active)("hidden", ctx.hidden);
  }
}, inputs: { active: "active", hidden: "hidden" }, decls: 174, vars: 201, consts: [["techPicker", ""], ["presetDropdown", ""], ["flowDiagramDropdown", ""], ["itemsPicker", ""], ["recipesPicker", ""], ["search", ""], ["nameCtrl", "ngModel"], ["stateMenu", ""], ["machineRow", ""], ["tooltip", ""], ["duplicatorsInput", ""], ["overclockInput", ""], ["flowRateInput", ""], ["miningBonusInput", ""], ["miningProdInput", ""], [1, "p-3"], [1, "d-flex", "align-items-center", "justify-content-between"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-trash", "tooltipPosition", "bottom", 1, "p-button-rounded", "p-button-text", 3, "click", "pTooltip"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-xmark", 1, "p-button-rounded", "p-button-text", "d-inline-flex", "d-none", "d-xl-inline-flex", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-xmark", 1, "p-button-rounded", "p-button-text", "d-inline-flex", "d-sm-none", 3, "click"], [1, "flex-grow-1", "overflow-hidden"], [3, "multiple"], [3, "selected"], ["pTemplate", "header"], [1, "p-inputgroup", "mb-2"], [1, "p-inputgroup"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-plus", 1, "p-button-outlined", "p-button-rounded", "w-100", 3, "label"], [1, "p-fluid"], [1, "mt-3"], [1, "p-float-label"], ["labDropdownTranslate", "", "inputId", "game", 3, "onChange", "tooltip", "ngModel", "options"], ["for", "game"], [1, "position-relative"], [1, "pb-3"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-microchip", 1, "p-button-rounded", "p-button-outlined", 3, "click", "pTooltip", "label"], [3, "selectIds"], [1, "mt-3", "pb-3"], ["labDropdownTranslate", "", "inputId", "preset", 3, "onChange", "tooltip", "ngModel", "options"], ["for", "preset"], ["labDropdownBase", "", "inputId", "default-transport-belt", 3, "onChange", "tooltip", "ngModel", "options"], ["pTemplate", "selectedItem"], ["pTemplate", "item"], ["for", "default-transport-belt"], ["labDropdownTranslate", "", "inputId", "flow-diagram", 3, "onChange", "tooltip", "ngModel", "options"], ["for", "flow-diagram"], ["labDropdownTranslate", "", "inputId", "link-size", 3, "onChange", "tooltip", "ngModel", "options"], ["for", "link-size"], ["labDropdownTranslate", "", "inputId", "link-text", 3, "onChange", "tooltip", "ngModel", "options"], ["for", "link-text"], [3, "onChange", "ngModel", "binary", "label", "pTooltip"], [3, "header"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-table-columns", 1, "p-button-rounded", "p-button-outlined", "mb-2", 3, "click", "label"], ["labDropdownTranslate", "", "inputId", "display-rate", 3, "onChange", "tooltip", "ngModel", "options"], ["for", "display-rate"], [1, "text-end"], ["labDropdownTranslate", "", "inputId", "language", 3, "onChange", "tooltip", "ngModel", "options"], ["for", "language"], [1, "position-absolute", "end-0", "bottom-100", "me-1", "mb-1"], ["href", "https://github.com/factoriolab/factoriolab/wiki/Translating-FactorioLab", "target", "_blank"], ["labDropdownTranslate", "", "inputId", "theme", 3, "onChange", "tooltip", "ngModel", "options"], ["for", "theme"], [3, "onChange", "binary", "label", "ngModel"], [3, "onChange", "ngModel", "binary", "label"], ["labDropdownTranslate", "", "inputId", "maximize-type", 3, "onChange", "tooltip", "ngModel", "options"], ["for", "maximize-type"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-boxes-stacked", 1, "p-button-rounded", "p-button-outlined", 3, "click", "pTooltip", "label"], [3, "selectIds", "header"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-flask-vial", 1, "p-button-rounded", "p-button-outlined", 3, "click", "pTooltip", "label"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-dollar-sign", 1, "p-button-rounded", "p-button-outlined", "mb-4", 3, "click", "label"], [1, "d-flex", "align-items-center", "justify-content-between", "flex-grow-1"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-arrow-up-right-from-square", 1, "p-button-outlined", 3, "click"], ["pInputText", "", "type", "text", 3, "ngModel"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-copy", 1, "p-button-outlined", 3, "click"], ["pInputText", "", "pAutoFocus", "", "type", "text", "tooltipPosition", "top", "required", "", 3, "ngModelChange", "keydown.enter", "autofocus", "placeholder", "pTooltip", "ngModel"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-floppy-disk", "tooltipPosition", "top", 1, "p-button-outlined", 3, "click", "pTooltip", "disabled"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-xmark", 1, "p-button-outlined", 3, "click", "pTooltip"], ["tooltipPosition", "top", 3, "onChange", "placeholder", "tooltip", "ngModel", "options"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-ellipsis-vertical", 1, "p-button-outlined"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-plus", 1, "p-button-outlined", 3, "pTooltip"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-ellipsis-vertical", 1, "p-button-outlined", 3, "click"], ["appendTo", "body", 3, "popup", "model"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-plus", 1, "p-button-outlined", 3, "click", "pTooltip"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-plus", 1, "p-button-outlined", "p-button-rounded", "w-100", 3, "click", "label"], [1, "p-static-label"], [1, "position-absolute", "end-0", "top-0", "me-1", "mb-1"], ["href", "https://github.com/factoriolab/factoriolab/issues/new?assignees=&labels=mod+support&template=mod-request.md&title=", "target", "_blank"], ["inputId", "mod", "styleClass", "w-100", 3, "onChange", "filter", "autofocusFilter", "tooltip", "ngModel", "options"], ["pButton", "", "pRipple", "", "icon", "fa-solid fa-info", 1, "p-button-outlined", 3, "click", "pTooltip"], ["appendTo", "body", 3, "visibleChange", "visible", "modal", "dismissableMask", "draggable", "resizable", "breakpoints", "header"], ["responsiveLayout", "scroll", "styleClass", "p-datatable-sm", 3, "value"], ["pTemplate", "body"], ["pTemplate", "footer"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-check", 1, "p-button-outlined", 3, "click", "label"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "onReorder", "value", "dragdrop"], [1, "pt-3"], [1, "p-inputgroup", "flex-wrap", "machine-preference", 3, "mb-1"], [1, "p-inputgroup", "flex-wrap", "machine-preference"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-grip-lines", 1, "p-button-outlined", "cursor-grab", 3, "invisible"], [1, "p-inputgroup-addon", 3, "pTooltip"], ["labDropdownBase", "icon", "labNoDrag", "", 3, "tooltip", "ngModel", "options"], ["labDropdownBase", "icon", 3, "ngModel", "tooltip", "options"], ["labNoDrag", "", "suffix", "%", "incrementButtonClass", "p-button-outlined", "decrementButtonClass", "p-button-outlined", "inputStyleClass", "text-end", 3, "min", "max", "step", "maxFractionDigits", "showButtons", "pTooltip", "ngModel"], ["pButton", "", "pRipple", "", "labNoDrag", "", "type", "button", "icon", "fa-solid fa-xmark", 1, "p-button-outlined", "ms-auto", 3, "click", "pTooltip"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-grip-lines", 1, "p-button-outlined", "cursor-grab"], [1, "fa-solid", "fa-industry"], ["labDropdownBase", "icon", "labNoDrag", "", 3, "onChange", "tooltip", "ngModel", "options"], [1, "d-flex"], [1, "d-flex", "align-items-center", "py-2", "w-100", "h-100", 3, "pTooltip"], [1, "ms-3", "text-truncate"], ["type", "machine", 3, "id"], ["labDropdownBase", "icon", 3, "onChange", "ngModel", "tooltip", "options"], [1, "d-flex", "align-items-center", "justify-content-center", "h-100"], [1, "fa-solid", "fa-plus"], ["type", "fuel", 3, "id"], ["labNoDrag", "", "appendTo", "body", "scrollHeight", "40vh", "styleClass", "icon", "panelStyleClass", "tooltip", "placeholder", "unused", "tooltipPosition", "top", 3, "selectionLimit", "tooltip", "ngModel", "options"], ["labNoDrag", "", "appendTo", "body", "scrollHeight", "40vh", "styleClass", "icon", "panelStyleClass", "tooltip", "placeholder", "unused", "tooltipPosition", "top", 3, "onChange", "selectionLimit", "tooltip", "ngModel", "options"], ["pTemplate", "selectedItems"], [3, "class"], ["type", "module", 3, "id"], ["labNoDrag", "", "incrementButtonClass", "p-button-outlined", "decrementButtonClass", "p-button-outlined", "inputStyleClass", "text-end", 3, "min", "step", "maxFractionDigits", "showButtons", "pTooltip", "ngModel"], ["labNoDrag", "", "incrementButtonClass", "p-button-outlined", "decrementButtonClass", "p-button-outlined", "inputStyleClass", "text-end", 3, "onBlur", "min", "step", "maxFractionDigits", "showButtons", "pTooltip", "ngModel"], ["labNoDrag", "", "suffix", "%", "incrementButtonClass", "p-button-outlined", "decrementButtonClass", "p-button-outlined", "inputStyleClass", "text-end", 3, "onBlur", "min", "max", "step", "maxFractionDigits", "showButtons", "pTooltip", "ngModel"], ["labNoDrag", "", "tooltipPosition", "top", 3, "setValue", "pTooltip", "value"], ["labDropdownBase", "icon", "labNoDrag", "", "tooltipPosition", "top", 3, "onChange", "tooltip", "ngModel", "options"], ["type", "beacon", 3, "id"], ["for", "beacon-receivers", 1, "p-static-label"], ["inputId", "beacon-receivers", 1, "w-100", 3, "setValue", "pTooltip", "value"], ["labDropdownBase", "", "inputId", "proliferator-self-spray", 3, "onChange", "autoDisplayFirst", "tooltip", "ngModel", "options"], ["for", "proliferator-self-spray"], [1, "d-flex", "align-items-center", "h-100"], ["type", "belt", 3, "id"], ["labDropdownBase", "", "inputId", "default-pipe", 3, "onChange", "tooltip", "ngModel", "options"], ["for", "default-pipe"], ["type", "pipe", 3, "id"], ["labDropdownBase", "", "inputId", "default-cargo-wagon", 3, "onChange", "tooltip", "ngModel", "options"], ["for", "default-cargo-wagon"], ["type", "cargo-wagon", 3, "id"], ["labDropdownBase", "", "inputId", "default-fluid-wagon", 3, "onChange", "tooltip", "ngModel", "options"], ["for", "default-fluid-wagon"], ["type", "fluid-wagon", 3, "id"], ["appendTo", "body", "scrollHeight", "40vh", 3, "tooltip", "ngModel", "options"], ["for", "fuel-rank"], ["appendTo", "body", "scrollHeight", "40vh", 3, "onChange", "tooltip", "ngModel", "options"], [1, "mx-2", 3, "class"], [1, "mx-2"], ["inputId", "pipe-flow-rate", "incrementButtonClass", "p-button-outlined", "decrementButtonClass", "p-button-outlined", 3, "onBlur", "suffix", "min", "step", "showButtons", "pTooltip", "ngModel"], ["for", "pipe-flow-rate"], ["href", "https://wiki.factorio.com/Fluid_system#Pipelines", "target", "_blank"], ["labDropdownTranslate", "", "inputId", "inserter-target", 3, "onChange", "tooltip", "ngModel", "options"], ["for", "inserter-target"], ["inputId", "mining-speed", "suffix", "%", "incrementButtonClass", "p-button-outlined", "decrementButtonClass", "p-button-outlined", 3, "onBlur", "min", "step", "showButtons", "pTooltip", "ngModel"], ["for", "mining-speed"], ["labDropdownTranslate", "", "inputId", "sankey-align", 3, "onChange", "tooltip", "ngModel", "options"], ["for", "sankey-align"], ["inputId", "mining-productivity", "prefix", "+", "suffix", "%", "incrementButtonClass", "p-button-outlined", "decrementButtonClass", "p-button-outlined", 3, "onBlur", "min", "step", "showButtons", "pTooltip", "ngModel"], ["for", "mining-productivity"], ["labDropdownTranslate", "", "inputId", "research-bonus", 3, "onChange", "pTooltip", "ngModel", "options"], ["for", "research-speed"], ["labDropdownTranslate", "", "inputId", "inserter-capacity", 3, "onChange", "tooltip", "ngModel", "options"], ["for", "inserter-capacity"], ["labDropdownTranslate", "", "inputId", "power-unit", 3, "onChange", "tooltip", "ngModel", "options"], ["for", "power-unit"]], template: function SettingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "button", 17);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.clickResetSettings());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 18);
    \u0275\u0275listener("click", function SettingsComponent_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.contentSvc.toggleSettingsXl());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 19);
    \u0275\u0275listener("click", function SettingsComponent_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.contentSvc.toggleSettings());
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "div", 20)(11, "p-scrollPanel")(12, "p-accordion", 21)(13, "p-accordionTab", 22);
    \u0275\u0275template(14, SettingsComponent_ng_template_14_Template, 5, 4, "ng-template", 23)(15, SettingsComponent_Conditional_15_Template, 5, 1, "div", 24)(16, SettingsComponent_Conditional_16_Template, 9, 15, "div", 24)(17, SettingsComponent_Conditional_17_Template, 6, 9, "div", 25)(18, SettingsComponent_Conditional_18_Template, 2, 3, "button", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p-accordionTab", 22);
    \u0275\u0275template(20, SettingsComponent_ng_template_20_Template, 6, 4, "ng-template", 23);
    \u0275\u0275elementStart(21, "div", 27)(22, "div", 28)(23, "span", 29)(24, "p-dropdown", 30);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_dropdown_onChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setGame($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "label", 31);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, SettingsComponent_Conditional_29_Template, 3, 2);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, SettingsComponent_Conditional_30_Template, 20, 32, "div", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "p-accordionTab", 22);
    \u0275\u0275template(32, SettingsComponent_ng_template_32_Template, 5, 4, "ng-template", 23);
    \u0275\u0275elementStart(33, "div", 27)(34, "div", 33)(35, "button", 34);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const techPicker_r17 = \u0275\u0275reference(40);
      return \u0275\u0275resetView(techPicker_r17.clickOpen(ctx.researchedTechnologyIds()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "lab-tech-picker", 35, 0);
    \u0275\u0275listener("selectIds", function SettingsComponent_Template_lab_tech_picker_selectIds_39_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setResearchedTechnologies($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 36)(42, "span", 29)(43, "p-dropdown", 37, 1);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_dropdown_onChange_43_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setPreset($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "label", 38);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(49, SettingsComponent_Conditional_49_Template, 6, 7)(50, SettingsComponent_Conditional_50_Template, 4, 8, "div", 33)(51, SettingsComponent_Conditional_51_Template, 6, 7, "div", 33)(52, SettingsComponent_Conditional_52_Template, 9, 9, "div", 36);
    \u0275\u0275elementStart(53, "div", 36)(54, "div", 29)(55, "p-dropdown", 39);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_dropdown_onChange_55_listener($event) {
      let tmp_6_0;
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setBelt($event.value, (tmp_6_0 = ctx.data().defaults) == null ? null : tmp_6_0.beltId));
    });
    \u0275\u0275template(57, SettingsComponent_ng_template_57_Template, 1, 1, "ng-template", 40)(58, SettingsComponent_ng_template_58_Template, 7, 6, "ng-template", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "label", 42);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(62, SettingsComponent_Conditional_62_Template, 9, 8, "div", 36)(63, SettingsComponent_Conditional_63_Template, 9, 8, "div", 36)(64, SettingsComponent_Conditional_64_Template, 9, 8, "div", 36)(65, SettingsComponent_Conditional_65_Template, 6, 4, "div", 36)(66, SettingsComponent_Conditional_66_Template, 20, 24)(67, SettingsComponent_Conditional_67_Template, 8, 10, "div", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "p-accordionTab");
    \u0275\u0275template(69, SettingsComponent_ng_template_69_Template, 5, 4, "ng-template", 23);
    \u0275\u0275elementStart(70, "div", 27)(71, "div", 36)(72, "span", 29)(73, "p-dropdown", 43, 2);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_dropdown_onChange_73_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setFlowDiagram($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "label", 44);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(79, SettingsComponent_Conditional_79_Template, 7, 8, "div", 36);
    \u0275\u0275elementStart(80, "div", 36)(81, "span", 29)(82, "p-dropdown", 45);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_dropdown_onChange_82_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setLinkSize($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "label", 46);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(87, "div", 36)(88, "span", 29)(89, "p-dropdown", 47);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_dropdown_onChange_89_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setLinkText($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "label", 48);
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(94, "div", 33)(95, "p-checkbox", 49);
    \u0275\u0275pipe(96, "translate");
    \u0275\u0275pipe(97, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_checkbox_onChange_95_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setFlowHideExcluded($event.checked));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(98, SettingsComponent_Conditional_98_Template, 25, 29, "p-accordionTab", 50);
    \u0275\u0275elementStart(99, "p-accordionTab", 50);
    \u0275\u0275pipe(100, "translate");
    \u0275\u0275elementStart(101, "div", 27)(102, "button", 51);
    \u0275\u0275pipe(103, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Template_button_click_102_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.contentSvc.showColumns$.next());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div", 36)(105, "span", 29)(106, "p-dropdown", 52);
    \u0275\u0275pipe(107, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_dropdown_onChange_106_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setDisplayRate($event.value, ctx.settings().displayRate));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "label", 53);
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(111, SettingsComponent_Conditional_111_Template, 7, 8, "div", 36);
    \u0275\u0275elementStart(112, "div", 36);
    \u0275\u0275element(113, "div", 54);
    \u0275\u0275elementStart(114, "div", 29)(115, "p-dropdown", 55);
    \u0275\u0275pipe(116, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_dropdown_onChange_115_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setLanguage($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "label", 56);
    \u0275\u0275text(118);
    \u0275\u0275pipe(119, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "small", 57)(121, "a", 58);
    \u0275\u0275text(122);
    \u0275\u0275pipe(123, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(124, "div", 36)(125, "div", 29)(126, "p-dropdown", 59);
    \u0275\u0275pipe(127, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_dropdown_onChange_126_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setTheme($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "label", 60);
    \u0275\u0275text(129);
    \u0275\u0275pipe(130, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(131, "div", 33)(132, "p-checkbox", 61);
    \u0275\u0275pipe(133, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_checkbox_onChange_132_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setBypassLanding($event.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "div", 33)(135, "p-checkbox", 62);
    \u0275\u0275pipe(136, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_checkbox_onChange_135_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setHideDuplicateIcons($event.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "div")(138, "p-checkbox", 62);
    \u0275\u0275pipe(139, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_checkbox_onChange_138_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setDisablePaginator($event.checked));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(140, "p-accordionTab", 50);
    \u0275\u0275pipe(141, "translate");
    \u0275\u0275elementStart(142, "div", 27)(143, "div", 36)(144, "span", 29)(145, "p-dropdown", 63);
    \u0275\u0275pipe(146, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_dropdown_onChange_145_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setMaximizeType($event.value));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "label", 64);
    \u0275\u0275text(148);
    \u0275\u0275pipe(149, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(150, "div", 33)(151, "p-checkbox", 49);
    \u0275\u0275pipe(152, "translate");
    \u0275\u0275pipe(153, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_checkbox_onChange_151_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setNetProductionOnly($event.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(154, "div", 33)(155, "p-checkbox", 49);
    \u0275\u0275pipe(156, "translate");
    \u0275\u0275pipe(157, "translate");
    \u0275\u0275listener("onChange", function SettingsComponent_Template_p_checkbox_onChange_155_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setSurplusMachinesOutput($event.checked));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(158, "div", 33)(159, "button", 65);
    \u0275\u0275pipe(160, "translate");
    \u0275\u0275pipe(161, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Template_button_click_159_listener() {
      \u0275\u0275restoreView(_r1);
      const itemsPicker_r93 = \u0275\u0275reference(163);
      return \u0275\u0275resetView(itemsPicker_r93.clickOpen("item", ctx.itemIds(), ctx.excludedItemIds()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "lab-picker", 66, 3);
    \u0275\u0275pipe(164, "translate");
    \u0275\u0275listener("selectIds", function SettingsComponent_Template_lab_picker_selectIds_162_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setExcludedItems($event, ctx.itemsState(), ctx.data()));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(165, "div", 33)(166, "button", 67);
    \u0275\u0275pipe(167, "translate");
    \u0275\u0275pipe(168, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Template_button_click_166_listener() {
      \u0275\u0275restoreView(_r1);
      const recipesPicker_r94 = \u0275\u0275reference(170);
      return \u0275\u0275resetView(recipesPicker_r94.clickOpen("recipe", ctx.recipeIds(), ctx.excludedRecipeIds()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "lab-picker", 66, 4);
    \u0275\u0275pipe(171, "translate");
    \u0275\u0275listener("selectIds", function SettingsComponent_Template_lab_picker_selectIds_169_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setExcludedRecipes($event, ctx.recipesState(), ctx.data()));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(172, "button", 68);
    \u0275\u0275pipe(173, "translate");
    \u0275\u0275listener("click", function SettingsComponent_Template_button_click_172_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.contentSvc.showCosts$.next());
    });
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_29_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 101, "settings.header"));
    \u0275\u0275advance(3);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(7, 103, "settings.reset"));
    \u0275\u0275advance(5);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(194, _c03));
    \u0275\u0275advance();
    \u0275\u0275property("multiple", true);
    \u0275\u0275advance();
    \u0275\u0275property("selected", true);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.BrowserUtility.isStandalone ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.editState ? 16 : ctx.savedStates().length ? 17 : 18);
    \u0275\u0275advance(3);
    \u0275\u0275property("selected", true);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("pb-3", ctx.data().game === ctx.Game.Factorio);
    \u0275\u0275advance(2);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(25, 105, "settings.gameTooltip"))("ngModel", ctx.data().game)("options", ctx.gameOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 107, "settings.game"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.data().game !== ctx.Game.Factorio ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data().game === ctx.Game.Factorio ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("selected", true);
    \u0275\u0275advance(4);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(36, 109, "settings.techsTooltip"))("label", ctx.researchedTechnologyIds() ? \u0275\u0275pipeBind2(37, 111, "settings.techsResearched", \u0275\u0275pureFunction1(195, _c16, ctx.researchedTechnologyIds().length)) : \u0275\u0275pipeBind1(38, 114, "settings.allTechsResearched"));
    \u0275\u0275advance(8);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(45, 116, "settings.presetTooltip"))("ngModel", ctx.settings().preset)("options", ctx.presetOptions());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 118, "settings.preset"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.data().game !== ctx.Game.CaptainOfIndustry ? 49 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data().game === ctx.Game.Factorio ? 50 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_29_0 = ctx.settings().beaconReceivers) ? 51 : -1, tmp_29_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data().game === ctx.Game.DysonSphereProgram ? 52 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(56, 120, "settings.defaultTransportBeltTooltip"))("ngModel", ctx.settings().beltId)("options", ctx.options().belts);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 122, "settings.defaultTransportBelt"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.data().pipeIds.length > 1 ? 62 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data().cargoWagonIds.length > 1 ? 63 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data().fluidWagonIds.length > 1 ? 64 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data().fuelIds.length && ctx.data().game !== ctx.Game.Satisfactory ? 65 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data().game === ctx.Game.Factorio ? 66 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data().game === ctx.Game.DysonSphereProgram ? 67 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(75, 124, "settings.flowDiagramTooltip"))("ngModel", ctx.preferences().flowDiagram)("options", ctx.flowDiagramOptions);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 126, "settings.flowDiagram"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.preferences().flowDiagram === ctx.FlowDiagram.Sankey ? 79 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(83, 128, "settings.linkSizeTooltip"))("ngModel", ctx.preferences().linkSize)("options", ctx.linkValueOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(86, 130, "settings.linkSize"));
    \u0275\u0275advance(4);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(90, 132, "settings.linkTextTooltip"))("ngModel", ctx.preferences().linkText)("options", ctx.linkValueOptions());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 134, "settings.linkText"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx.preferences().flowHideExcluded)("binary", true)("label", \u0275\u0275pipeBind1(96, 136, "settings.flowHideExcluded"))("pTooltip", \u0275\u0275pipeBind1(97, 138, "settings.flowHideExcludedTooltip"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.data().game === ctx.Game.Factorio ? 98 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("header", \u0275\u0275pipeBind1(100, 140, "settings.display"));
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(103, 142, "settings.openColumnSettings"));
    \u0275\u0275advance(4);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(107, 144, "settings.displayRateTooltip"))("ngModel", ctx.settings().displayRate)("options", ctx.displayRateOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(110, 146, "settings.displayRate"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.columnsState().power.show ? 111 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(116, 148, "settings.languageTooltip"))("ngModel", ctx.preferences().language)("options", ctx.languageOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(119, 150, "settings.language"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(123, 152, "settings.helpTranslate"));
    \u0275\u0275advance(4);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(127, 154, "settings.themeTooltip"))("ngModel", ctx.preferences().theme)("options", ctx.themeOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(130, 156, "settings.theme"));
    \u0275\u0275advance(3);
    \u0275\u0275property("binary", true)("label", \u0275\u0275pipeBind1(133, 158, "settings.bypassLanding"))("ngModel", ctx.preferences().bypassLanding);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx.preferences().hideDuplicateIcons)("binary", true)("label", \u0275\u0275pipeBind1(136, 160, "settings.hideDuplicateIcons"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx.preferences().disablePaginator)("binary", true)("label", \u0275\u0275pipeBind1(139, 162, "settings.disablePaginator"));
    \u0275\u0275advance(2);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(141, 164, "settings.advanced"));
    \u0275\u0275advance(5);
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(146, 166, "settings.maximizeTypeTooltip"))("ngModel", ctx.settings().maximizeType)("options", ctx.maximizeTypeOptions);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(149, 168, "settings.maximizeType"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx.settings().netProductionOnly)("binary", true)("label", \u0275\u0275pipeBind1(152, 170, "settings.netProductionOnly"))("pTooltip", \u0275\u0275pipeBind1(153, 172, "settings.netProductionOnlyTooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx.settings().surplusMachinesOutput)("binary", true)("label", \u0275\u0275pipeBind1(156, 174, "settings.surplusMachinesOutput"))("pTooltip", \u0275\u0275pipeBind1(157, 176, "settings.surplusMachinesOutputTooltip"));
    \u0275\u0275advance(4);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(160, 178, "settings.itemsTooltip"))("label", \u0275\u0275pipeBind2(161, 180, "settings.itemsExcluded", \u0275\u0275pureFunction1(197, _c16, ctx.excludedItemIds().length)));
    \u0275\u0275advance(3);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(164, 183, "settings.itemsHeader"));
    \u0275\u0275advance(4);
    \u0275\u0275property("pTooltip", \u0275\u0275pipeBind1(167, 185, "settings.recipesTooltip"))("label", \u0275\u0275pipeBind2(168, 187, "settings.recipesExcluded", \u0275\u0275pureFunction1(199, _c16, ctx.excludedRecipeIds().length)));
    \u0275\u0275advance(3);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(171, 190, "settings.recipesHeader"));
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(173, 192, "settings.openCosts"));
  }
}, dependencies: [NgTemplateOutlet, DefaultValueAccessor, NgControlStatus, RequiredValidator, NgModel, Accordion, AccordionTab, PrimeTemplate, AutoFocus, Tooltip, ButtonDirective, Checkbox, Dialog, Dropdown, InputNumber, InputText, Menu, MultiSelect, OrderList, Ripple, ScrollPanel, Table, InputNumberComponent, PickerComponent, TooltipComponent, DropdownTranslateDirective, TechPickerComponent, DropdownBaseDirective, NoDragDirective, KeyValuePipe, TranslatePipe, IconSmClassPipe, FilterOptionsPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  z-index: 4;\n  top: 0;\n  left: 0;\n  transition: transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  width: 322px;\n  height: 100%;\n  background-color: var(--surface-overlay);\n}\n@media (max-width: 1199.98px) {\n  [_nghost-%COMP%] {\n    transform: translate(-100%);\n  }\n  .active[_nghost-%COMP%] {\n    transform: translate(0);\n  }\n}\n@media (min-width: 1200px) {\n  .hidden[_nghost-%COMP%] {\n    transform: translate(-100%);\n  }\n}\n[_nghost-%COMP%]     .p-scrollpanel .p-scrollpanel-content {\n  overflow-y: scroll;\n}\n[_nghost-%COMP%]     .p-scrollpanel .p-scrollpanel-bar-x {\n  visibility: hidden;\n}\n[_nghost-%COMP%]     .p-accordion {\n  width: 323px;\n}\n.p-inputgroup.machine-preference[_ngcontent-%COMP%]   p-dropdown[_ngcontent-%COMP%], \n.p-inputgroup.machine-preference[_ngcontent-%COMP%]   p-multiselect[_ngcontent-%COMP%] {\n  flex-basis: 36px;\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n/*# sourceMappingURL=settings.component.css.map */"], changeDetection: 0 });
var SettingsComponent = _SettingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src\\app\\routes\\main\\components\\settings\\settings.component.ts", lineNumber: 72 });
})();

// src/app/routes/main/main-shared.module.ts
var _MainSharedModule = class _MainSharedModule {
};
_MainSharedModule.\u0275fac = function MainSharedModule_Factory(t) {
  return new (t || _MainSharedModule)();
};
_MainSharedModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MainSharedModule });
_MainSharedModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [CommonModule, FormsModule, AppSharedModule, FormsModule] });
var MainSharedModule = _MainSharedModule;

export {
  ObjectivesComponent,
  SettingsComponent,
  StepsComponent,
  MainSharedModule
};
//# sourceMappingURL=chunk-5VTKHZB3.js.map
