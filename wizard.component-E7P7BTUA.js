import {
  ActivatedRoute,
  AppSharedModule,
  AutoFocus,
  AutoFocusModule,
  ButtonDirective,
  Card,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  Divider,
  DomHandler,
  Dropdown,
  DropdownTranslateDirective,
  EventEmitter,
  IconClassPipe,
  Injectable,
  Injector,
  Input,
  InputNumberComponent,
  NG_VALUE_ACCESSOR,
  NgClass,
  NgControl,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  NgModule,
  NgStyle,
  ObjectiveType,
  ObjectiveUnit,
  Output,
  PickerComponent,
  PrimeNGConfig,
  Ripple,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  Store,
  Tooltip,
  TooltipModule,
  TranslatePipe,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  displayRateOptions,
  forwardRef,
  inject,
  numberAttribute,
  objectives_exports,
  rational,
  recipes_exports,
  setClassMetadata,
  settings_exports,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-YUG2ZZAM.js";

// node_modules/primeng/fesm2022/primeng-radiobutton.mjs
var _c0 = ["input"];
var _c1 = (a0, a1, a2, a3) => ({
  "p-radiobutton p-component": true,
  "p-radiobutton-checked": a0,
  "p-radiobutton-disabled": a1,
  "p-radiobutton-focused": a2,
  "p-variant-filled": a3
});
var _c2 = (a0, a1, a2) => ({
  "p-radiobutton-box": true,
  "p-highlight": a0,
  "p-disabled": a1,
  "p-focus": a2
});
var _c3 = (a0, a1, a2) => ({
  "p-radiobutton-label": true,
  "p-radiobutton-label-active": a0,
  "p-disabled": a1,
  "p-radiobutton-label-focus": a2
});
function RadioButton_label_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 7);
    \u0275\u0275listener("click", function RadioButton_label_6_Template_label_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.select($event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const input_r2 = \u0275\u0275reference(3);
    \u0275\u0275classMap(ctx_r3.labelStyleClass);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(6, _c3, input_r2.checked, ctx_r3.disabled, ctx_r3.focused));
    \u0275\u0275attribute("for", ctx_r3.inputId)("data-pc-section", "label");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.label);
  }
}
var RADIO_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RadioButton),
  multi: true
};
var RadioControlRegistry = class _RadioControlRegistry {
  accessors = [];
  add(control, accessor) {
    this.accessors.push([control, accessor]);
  }
  remove(accessor) {
    this.accessors = this.accessors.filter((c) => {
      return c[1] !== accessor;
    });
  }
  select(accessor) {
    this.accessors.forEach((c) => {
      if (this.isSameGroup(c, accessor) && c[1] !== accessor) {
        c[1].writeValue(accessor.value);
      }
    });
  }
  isSameGroup(controlPair, accessor) {
    if (!controlPair[0].control) {
      return false;
    }
    return controlPair[0].control.root === accessor.control.control.root && controlPair[1].name === accessor.name;
  }
  static \u0275fac = function RadioControlRegistry_Factory(t) {
    return new (t || _RadioControlRegistry)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RadioControlRegistry,
    factory: _RadioControlRegistry.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioControlRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var RadioButton = class _RadioButton {
  cd;
  injector;
  registry;
  config;
  /**
   * Value of the radiobutton.
   * @group Props
   */
  value;
  /**
   * The name of the form control.
   * @group Props
   */
  formControlName;
  /**
   * Name of the radiobutton group.
   * @group Props
   */
  name;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Label of the radiobutton.
   * @group Props
   */
  label;
  /**
   * Specifies the input variant of the component.
   * @group Props
   */
  variant = "outlined";
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the label.
   * @group Props
   */
  labelStyleClass;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke on radio button click.
   * @param {RadioButtonClickEvent} event - Custom click event.
   * @group Emits
   */
  onClick = new EventEmitter();
  /**
   * Callback to invoke when the receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  inputViewChild;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  checked;
  focused;
  control;
  constructor(cd, injector, registry, config) {
    this.cd = cd;
    this.injector = injector;
    this.registry = registry;
    this.config = config;
  }
  ngOnInit() {
    this.control = this.injector.get(NgControl);
    this.checkName();
    this.registry.add(this.control, this);
  }
  handleClick(event, radioButton, focus) {
    event.preventDefault();
    if (this.disabled) {
      return;
    }
    this.select(event);
    if (focus) {
      radioButton.focus();
    }
  }
  select(event) {
    if (!this.disabled) {
      this.inputViewChild.nativeElement.checked = true;
      this.checked = true;
      this.onModelChange(this.value);
      this.registry.select(this);
      this.onClick.emit({
        originalEvent: event,
        value: this.value
      });
    }
  }
  writeValue(value) {
    this.checked = value == this.value;
    if (this.inputViewChild && this.inputViewChild.nativeElement) {
      this.inputViewChild.nativeElement.checked = this.checked;
    }
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  /**
   * Applies focus to input field.
   * @group Method
   */
  focus() {
    this.inputViewChild.nativeElement.focus();
  }
  ngOnDestroy() {
    this.registry.remove(this);
  }
  checkName() {
    if (this.name && this.formControlName && this.name !== this.formControlName) {
      this.throwNameError();
    }
    if (!this.name && this.formControlName) {
      this.name = this.formControlName;
    }
  }
  throwNameError() {
    throw new Error(`
          If you define both a name and a formControlName attribute on your radio button, their values
          must match. Ex: <p-radioButton formControlName="food" name="food"></p-radioButton>
        `);
  }
  static \u0275fac = function RadioButton_Factory(t) {
    return new (t || _RadioButton)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(RadioControlRegistry), \u0275\u0275directiveInject(PrimeNGConfig));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _RadioButton,
    selectors: [["p-radioButton"]],
    viewQuery: function RadioButton_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      value: "value",
      formControlName: "formControlName",
      name: "name",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      label: "label",
      variant: "variant",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      style: "style",
      styleClass: "styleClass",
      labelStyleClass: "labelStyleClass",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onClick: "onClick",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([RADIO_VALUE_ACCESSOR]), \u0275\u0275InputTransformsFeature],
    decls: 7,
    vars: 31,
    consts: [["input", ""], [3, "click", "ngStyle", "ngClass"], [1, "p-hidden-accessible"], ["type", "radio", "pAutoFocus", "", 3, "focus", "blur", "checked", "disabled", "value", "autofocus"], [3, "ngClass"], [1, "p-radiobutton-icon"], [3, "class", "ngClass", "click", 4, "ngIf"], [3, "click", "ngClass"]],
    template: function RadioButton_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275listener("click", function RadioButton_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          const input_r2 = \u0275\u0275reference(3);
          return \u0275\u0275resetView(ctx.handleClick($event, input_r2, true));
        });
        \u0275\u0275elementStart(1, "div", 2)(2, "input", 3, 0);
        \u0275\u0275listener("focus", function RadioButton_Template_input_focus_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputFocus($event));
        })("blur", function RadioButton_Template_input_blur_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInputBlur($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275element(5, "span", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(6, RadioButton_label_6_Template, 2, 10, "label", 6);
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngStyle", ctx.style)("ngClass", \u0275\u0275pureFunction4(22, _c1, ctx.checked, ctx.disabled, ctx.focused, ctx.variant === "filled" || ctx.config.inputStyle() === "filled"));
        \u0275\u0275attribute("data-pc-name", "radiobutton")("data-pc-section", "root");
        \u0275\u0275advance();
        \u0275\u0275attribute("data-pc-section", "hiddenInputWrapper");
        \u0275\u0275advance();
        \u0275\u0275property("checked", ctx.checked)("disabled", ctx.disabled)("value", ctx.value)("autofocus", ctx.autofocus);
        \u0275\u0275attribute("id", ctx.inputId)("name", ctx.name)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("tabindex", ctx.tabindex)("aria-checked", ctx.checked)("data-pc-section", "hiddenInput");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(27, _c2, ctx.checked, ctx.disabled, ctx.focused));
        \u0275\u0275attribute("data-pc-section", "input");
        \u0275\u0275advance();
        \u0275\u0275attribute("data-pc-section", "icon");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.label);
      }
    },
    dependencies: [NgClass, NgIf, NgStyle, AutoFocus],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButton, [{
    type: Component,
    args: [{
      selector: "p-radioButton",
      template: `
        <div
            [ngStyle]="style"
            [ngClass]="{
                'p-radiobutton p-component': true,
                'p-radiobutton-checked': checked,
                'p-radiobutton-disabled': disabled,
                'p-radiobutton-focused': focused,
                'p-variant-filled': variant === 'filled' || config.inputStyle() === 'filled'
            }"
            [class]="styleClass"
            [attr.data-pc-name]="'radiobutton'"
            [attr.data-pc-section]="'root'"
            (click)="handleClick($event, input, true)"
        >
            <div class="p-hidden-accessible" [attr.data-pc-section]="'hiddenInputWrapper'">
                <input
                    #input
                    [attr.id]="inputId"
                    type="radio"
                    [attr.name]="name"
                    [checked]="checked"
                    [disabled]="disabled"
                    [value]="value"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.aria-label]="ariaLabel"
                    [attr.tabindex]="tabindex"
                    [attr.aria-checked]="checked"
                    (focus)="onInputFocus($event)"
                    (blur)="onInputBlur($event)"
                    [attr.data-pc-section]="'hiddenInput'"
                    pAutoFocus
                    [autofocus]="autofocus"
                />
            </div>
            <div [ngClass]="{ 'p-radiobutton-box': true, 'p-highlight': checked, 'p-disabled': disabled, 'p-focus': focused }" [attr.data-pc-section]="'input'">
                <span class="p-radiobutton-icon" [attr.data-pc-section]="'icon'"></span>
            </div>
        </div>
        <label
            (click)="select($event)"
            [class]="labelStyleClass"
            [ngClass]="{ 'p-radiobutton-label': true, 'p-radiobutton-label-active': input.checked, 'p-disabled': disabled, 'p-radiobutton-label-focus': focused }"
            *ngIf="label"
            [attr.for]="inputId"
            [attr.data-pc-section]="'label'"
            >{{ label }}</label
        >
    `,
      providers: [RADIO_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Injector
  }, {
    type: RadioControlRegistry
  }, {
    type: PrimeNGConfig
  }], {
    value: [{
      type: Input
    }],
    formControlName: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    label: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    labelStyleClass: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }]
  });
})();
var RadioButtonModule = class _RadioButtonModule {
  static \u0275fac = function RadioButtonModule_Factory(t) {
    return new (t || _RadioButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RadioButtonModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, AutoFocusModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadioButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, AutoFocusModule],
      exports: [RadioButton],
      declarations: [RadioButton]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-steps.mjs
var _c02 = ["list"];
var _c12 = (a0) => ({
  "p-steps p-component": true,
  "p-readonly": a0
});
var _c22 = (a0, a1) => ({
  "p-highlight p-steps-current": a0,
  "p-disabled": a1
});
var _c32 = () => ({
  exact: false
});
function Steps_li_3_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function Steps_li_3_a_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("innerHTML", item_r3.label, \u0275\u0275sanitizeHtml);
  }
}
function Steps_li_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275listener("click", function Steps_li_3_a_2_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      const item_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onItemClick($event, item_r3, i_r4));
    })("keydown", function Steps_li_3_a_2_Template_a_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      const item_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onItemKeydown($event, item_r3, i_r4));
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, Steps_li_3_a_2_span_3_Template, 2, 1, "span", 11)(4, Steps_li_3_a_2_ng_template_4_Template, 1, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r6 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext();
    const item_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", item_r3.routerLink)("queryParams", item_r3.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r3.routerLinkActiveOptions || \u0275\u0275pureFunction0(18, _c32))("target", item_r3.target)("fragment", item_r3.fragment)("queryParamsHandling", item_r3.queryParamsHandling)("preserveFragment", item_r3.preserveFragment)("skipLocationChange", item_r3.skipLocationChange)("replaceUrl", item_r3.replaceUrl)("state", item_r3.state);
    \u0275\u0275attribute("tabindex", ctx_r4.getItemTabIndex(item_r3, i_r4))("aria-expanded", i_r4 === ctx_r4.activeIndex)("aria-disabled", item_r3.disabled || ctx_r4.readonly && i_r4 !== ctx_r4.activeIndex)("ariaCurrentWhenActive", ctx_r4.exact ? "step" : void 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.escape !== false)("ngIfElse", htmlLabel_r6);
  }
}
function Steps_li_3_ng_template_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r3.label);
  }
}
function Steps_li_3_ng_template_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("innerHTML", item_r3.label, \u0275\u0275sanitizeHtml);
  }
}
function Steps_li_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275listener("click", function Steps_li_3_ng_template_3_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      const item_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onItemClick($event, item_r3, i_r4));
    })("keydown", function Steps_li_3_ng_template_3_Template_a_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      const item_r3 = ctx_r1.$implicit;
      const i_r4 = ctx_r1.index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onItemKeydown($event, item_r3, i_r4));
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, Steps_li_3_ng_template_3_span_3_Template, 2, 1, "span", 11)(4, Steps_li_3_ng_template_3_ng_template_4_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r8 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext();
    const item_r3 = ctx_r1.$implicit;
    const i_r4 = ctx_r1.index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("target", item_r3.target);
    \u0275\u0275attribute("href", item_r3.url, \u0275\u0275sanitizeUrl)("tabindex", ctx_r4.getItemTabIndex(item_r3, i_r4))("aria-expanded", i_r4 === ctx_r4.activeIndex)("aria-disabled", item_r3.disabled || ctx_r4.readonly && i_r4 !== ctx_r4.activeIndex)("ariaCurrentWhenActive", ctx_r4.exact && (!item_r3.disabled || ctx_r4.readonly) ? "step" : void 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r3.escape !== false)("ngIfElse", htmlRouteLabel_r8);
  }
}
function Steps_li_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 7, 1);
    \u0275\u0275template(2, Steps_li_3_a_2_Template, 6, 19, "a", 8)(3, Steps_li_3_ng_template_3_Template, 6, 9, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const elseBlock_r9 = \u0275\u0275reference(4);
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(item_r3.styleClass);
    \u0275\u0275property("ngStyle", item_r3.style)("tooltipOptions", item_r3.tooltipOptions)("ngClass", \u0275\u0275pureFunction2(10, _c22, ctx_r4.isActive(item_r3, i_r4), item_r3.disabled || ctx_r4.readonly && !ctx_r4.isActive(item_r3, i_r4)));
    \u0275\u0275attribute("aria-current", ctx_r4.isActive(item_r3, i_r4) ? "step" : void 0)("id", item_r3.id)("data-pc-section", "menuitem");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r4.isClickableRouterLink(item_r3))("ngIfElse", elseBlock_r9);
  }
}
var Steps = class _Steps {
  router;
  route;
  cd;
  /**
   * Index of the active item.
   * @group Props
   */
  activeIndex = 0;
  /**
   * An array of menu items.
   * @group Props
   */
  model;
  /**
   * Whether the items are clickable or not.
   * @group Props
   */
  readonly = true;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Whether to apply 'router-link-active-exact' class if route exactly matches the item path.
   * @group Props
   */
  exact = true;
  /**
   * Callback to invoke when the new step is selected.
   * @param {number} number - current index.
   * @group Emits
   */
  activeIndexChange = new EventEmitter();
  listViewChild;
  constructor(router, route, cd) {
    this.router = router;
    this.route = route;
    this.cd = cd;
  }
  subscription;
  ngOnInit() {
    this.subscription = this.router.events.subscribe(() => this.cd.markForCheck());
  }
  onItemClick(event, item, i) {
    if (this.readonly || item.disabled) {
      event.preventDefault();
      return;
    }
    this.activeIndexChange.emit(i);
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item,
        index: i
      });
    }
  }
  onItemKeydown(event, item, i) {
    switch (event.code) {
      case "ArrowRight": {
        this.navigateToNextItem(event.target);
        event.preventDefault();
        break;
      }
      case "ArrowLeft": {
        this.navigateToPrevItem(event.target);
        event.preventDefault();
        break;
      }
      case "Home": {
        this.navigateToFirstItem(event.target);
        event.preventDefault();
        break;
      }
      case "End": {
        this.navigateToLastItem(event.target);
        event.preventDefault();
        break;
      }
      case "Tab":
        if (i !== this.activeIndex) {
          const siblings = DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="menuitem"]');
          siblings[i].children[0].tabIndex = "-1";
          siblings[this.activeIndex].children[0].tabIndex = "0";
        }
        break;
      case "Enter":
      case "Space": {
        this.onItemClick(event, item, i);
        event.preventDefault();
        break;
      }
      default:
        break;
    }
  }
  navigateToNextItem(target) {
    const nextItem = this.findNextItem(target);
    nextItem && this.setFocusToMenuitem(target, nextItem);
  }
  navigateToPrevItem(target) {
    const prevItem = this.findPrevItem(target);
    prevItem && this.setFocusToMenuitem(target, prevItem);
  }
  navigateToFirstItem(target) {
    const firstItem = this.findFirstItem();
    firstItem && this.setFocusToMenuitem(target, firstItem);
  }
  navigateToLastItem(target) {
    const lastItem = this.findLastItem();
    lastItem && this.setFocusToMenuitem(target, lastItem);
  }
  findNextItem(item) {
    const nextItem = item.parentElement.nextElementSibling;
    return nextItem ? nextItem.children[0] : null;
  }
  findPrevItem(item) {
    const prevItem = item.parentElement.previousElementSibling;
    return prevItem ? prevItem.children[0] : null;
  }
  findFirstItem() {
    const firstSibling = DomHandler.findSingle(this.listViewChild.nativeElement, '[data-pc-section="menuitem"]');
    return firstSibling ? firstSibling.children[0] : null;
  }
  findLastItem() {
    const siblings = DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="menuitem"]');
    return siblings ? siblings[siblings.length - 1].children[0] : null;
  }
  setFocusToMenuitem(target, focusableItem) {
    target.tabIndex = "-1";
    focusableItem.tabIndex = "0";
    focusableItem.focus();
  }
  isClickableRouterLink(item) {
    return item.routerLink && !this.readonly && !item.disabled;
  }
  isActive(item, index) {
    if (item.routerLink) {
      let routerLink = Array.isArray(item.routerLink) ? item.routerLink : [item.routerLink];
      return this.router.isActive(this.router.createUrlTree(routerLink, {
        relativeTo: this.route
      }).toString(), false);
    }
    return index === this.activeIndex;
  }
  getItemTabIndex(item, index) {
    if (item.disabled) {
      return "-1";
    }
    if (!item.disabled && this.activeIndex === index) {
      return item.tabindex || "0";
    }
    return item.tabindex ?? "-1";
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  static \u0275fac = function Steps_Factory(t) {
    return new (t || _Steps)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Steps,
    selectors: [["p-steps"]],
    viewQuery: function Steps_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      activeIndex: [2, "activeIndex", "activeIndex", numberAttribute],
      model: "model",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      exact: [2, "exact", "exact", booleanAttribute]
    },
    outputs: {
      activeIndexChange: "activeIndexChange"
    },
    features: [\u0275\u0275InputTransformsFeature],
    decls: 4,
    vars: 9,
    consts: [["list", ""], ["menuitem", ""], ["elseBlock", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], [3, "ngClass", "ngStyle"], ["class", "p-steps-item", "pTooltip", "", 3, "ngStyle", "class", "tooltipOptions", "ngClass", 4, "ngFor", "ngForOf"], ["pTooltip", "", 1, "p-steps-item", 3, "ngStyle", "tooltipOptions", "ngClass"], ["role", "link", "class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", "keydown", 4, "ngIf", "ngIfElse"], ["role", "link", 1, "p-menuitem-link", 3, "click", "keydown", "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [1, "p-steps-number"], ["class", "p-steps-title", 4, "ngIf", "ngIfElse"], [1, "p-steps-title"], [1, "p-steps-title", 3, "innerHTML"], ["role", "link", 1, "p-menuitem-link", 3, "click", "keydown", "target"]],
    template: function Steps_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 5)(1, "ul", null, 0);
        \u0275\u0275template(3, Steps_li_3_Template, 5, 13, "li", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c12, ctx.readonly))("ngStyle", ctx.style);
        \u0275\u0275attribute("data-pc-name", "steps");
        \u0275\u0275advance();
        \u0275\u0275attribute("data-pc-section", "menu");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.model);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, NgStyle, RouterLink, RouterLinkActive, Tooltip],
    styles: ["@layer primeng{.p-steps{position:relative}.p-steps ul{padding:0;margin:0;list-style-type:none;display:flex}.p-steps-item{position:relative;display:flex;justify-content:center;flex:1 1 auto}.p-steps-item .p-menuitem-link{display:inline-flex;flex-direction:column;align-items:center;overflow:hidden;text-decoration:none}.p-steps.p-steps-readonly .p-steps-item{cursor:auto}.p-steps-item.p-steps-current .p-menuitem-link{cursor:default}.p-steps-title{white-space:nowrap}.p-steps-number{display:flex;align-items:center;justify-content:center}.p-steps-title{display:block}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Steps, [{
    type: Component,
    args: [{
      selector: "p-steps",
      template: `
        <nav [ngClass]="{ 'p-steps p-component': true, 'p-readonly': readonly }" [ngStyle]="style" [class]="styleClass" [attr.data-pc-name]="'steps'">
            <ul #list [attr.data-pc-section]="'menu'">
                <li
                    *ngFor="let item of model; let i = index"
                    class="p-steps-item"
                    #menuitem
                    [ngStyle]="item.style"
                    [class]="item.styleClass"
                    [attr.aria-current]="isActive(item, i) ? 'step' : undefined"
                    [attr.id]="item.id"
                    pTooltip
                    [tooltipOptions]="item.tooltipOptions"
                    [ngClass]="{ 'p-highlight p-steps-current': isActive(item, i), 'p-disabled': item.disabled || (readonly && !isActive(item, i)) }"
                    [attr.data-pc-section]="'menuitem'"
                >
                    <a
                        role="link"
                        *ngIf="isClickableRouterLink(item); else elseBlock"
                        [routerLink]="item.routerLink"
                        [queryParams]="item.queryParams"
                        [routerLinkActive]="'p-menuitem-link-active'"
                        [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                        class="p-menuitem-link"
                        (click)="onItemClick($event, item, i)"
                        (keydown)="onItemKeydown($event, item, i)"
                        [target]="item.target"
                        [attr.tabindex]="getItemTabIndex(item, i)"
                        [attr.aria-expanded]="i === activeIndex"
                        [attr.aria-disabled]="item.disabled || (readonly && i !== activeIndex)"
                        [fragment]="item.fragment"
                        [queryParamsHandling]="item.queryParamsHandling"
                        [preserveFragment]="item.preserveFragment"
                        [skipLocationChange]="item.skipLocationChange"
                        [replaceUrl]="item.replaceUrl"
                        [state]="item.state"
                        [attr.ariaCurrentWhenActive]="exact ? 'step' : undefined"
                    >
                        <span class="p-steps-number">{{ i + 1 }}</span>
                        <span class="p-steps-title" *ngIf="item.escape !== false; else htmlLabel">{{ item.label }}</span>
                        <ng-template #htmlLabel><span class="p-steps-title" [innerHTML]="item.label"></span></ng-template>
                    </a>
                    <ng-template #elseBlock>
                        <a
                            role="link"
                            [attr.href]="item.url"
                            class="p-menuitem-link"
                            (click)="onItemClick($event, item, i)"
                            (keydown)="onItemKeydown($event, item, i)"
                            [target]="item.target"
                            [attr.tabindex]="getItemTabIndex(item, i)"
                            [attr.aria-expanded]="i === activeIndex"
                            [attr.aria-disabled]="item.disabled || (readonly && i !== activeIndex)"
                            [attr.ariaCurrentWhenActive]="exact && (!item.disabled || readonly) ? 'step' : undefined"
                        >
                            <span class="p-steps-number">{{ i + 1 }}</span>
                            <span class="p-steps-title" *ngIf="item.escape !== false; else htmlRouteLabel">{{ item.label }}</span>
                            <ng-template #htmlRouteLabel><span class="p-steps-title" [innerHTML]="item.label"></span></ng-template>
                        </a>
                    </ng-template>
                </li>
            </ul>
        </nav>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-steps{position:relative}.p-steps ul{padding:0;margin:0;list-style-type:none;display:flex}.p-steps-item{position:relative;display:flex;justify-content:center;flex:1 1 auto}.p-steps-item .p-menuitem-link{display:inline-flex;flex-direction:column;align-items:center;overflow:hidden;text-decoration:none}.p-steps.p-steps-readonly .p-steps-item{cursor:auto}.p-steps-item.p-steps-current .p-menuitem-link{cursor:default}.p-steps-title{white-space:nowrap}.p-steps-number{display:flex;align-items:center;justify-content:center}.p-steps-title{display:block}}\n"]
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: ChangeDetectorRef
  }], {
    activeIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    model: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    exact: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    activeIndexChange: [{
      type: Output
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["list", {
        static: false
      }]
    }]
  });
})();
var StepsModule = class _StepsModule {
  static \u0275fac = function StepsModule_Factory(t) {
    return new (t || _StepsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _StepsModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, RouterModule, TooltipModule, RouterModule, TooltipModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StepsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, TooltipModule],
      exports: [Steps, RouterModule, TooltipModule],
      declarations: [Steps]
    }]
  }], null, null);
})();

// src/app/routes/wizard/wizard.component.ts
function WizardComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-divider");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 4);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("click", function WizardComponent_Case_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const addItemObjectivePicker_r2 = \u0275\u0275reference(10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(addItemObjectivePicker_r2.clickOpen("item", ctx_r2.itemIds()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "lab-picker", 5, 0);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("selectId", function WizardComponent_Case_2_Template_lab_picker_selectId_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectId($event, "item"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "p-divider");
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 6);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("click", function WizardComponent_Case_2_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      const addRecipePicker_r4 = \u0275\u0275reference(19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(addRecipePicker_r4.clickOpen("recipe", ctx_r2.recipeIds()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "lab-picker", 5, 1);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275listener("selectId", function WizardComponent_Case_2_Template_lab_picker_selectId_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectId($event, "recipe"));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "p-divider");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 7, "wizard.objectiveType"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "wizard.produceItems"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(8, 11, "wizard.produceItemsButton"));
    \u0275\u0275advance(2);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(11, 13, "wizard.produceItemsButton"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 15, "wizard.runMachines"));
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(17, 17, "wizard.runMachinesButton"));
    \u0275\u0275advance(2);
    \u0275\u0275property("header", \u0275\u0275pipeBind1(20, 19, "wizard.runMachinesButton"));
  }
}
function WizardComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-divider");
    \u0275\u0275elementStart(4, "div", 7);
    \u0275\u0275element(5, "i");
    \u0275\u0275pipe(6, "iconClass");
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "lab-input-number", 9);
    \u0275\u0275listener("setValue", function WizardComponent_Case_3_Template_lab_input_number_setValue_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.value = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p-dropdown", 10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("onChange", function WizardComponent_Case_3_Template_p_dropdown_onChange_10_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setDisplayRate($event.value, ctx_r2.displayRate()));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 11);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275listener("click", function WizardComponent_Case_3_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createItemObjective(ctx_r2.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "p-divider");
    \u0275\u0275elementStart(15, "button", 12);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275listener("click", function WizardComponent_Case_3_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.state = "type");
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 10, "wizard.itemObjectiveItems"));
    \u0275\u0275advance(4);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(6, 12, ctx_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.data().itemEntities[ctx_r2.id].name);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.value);
    \u0275\u0275advance();
    \u0275\u0275property("tooltip", \u0275\u0275pipeBind1(11, 14, "objectives.selectDisplayRate"))("ngModel", ctx_r2.displayRate())("options", ctx_r2.displayRateOptions);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(13, 16, "ok"));
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(16, 18, "wizard.back"));
  }
}
function WizardComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "p-divider");
    \u0275\u0275elementStart(4, "div", 7);
    \u0275\u0275element(5, "i");
    \u0275\u0275pipe(6, "iconClass");
    \u0275\u0275elementStart(7, "span", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "lab-input-number", 9);
    \u0275\u0275listener("setValue", function WizardComponent_Case_4_Template_lab_input_number_setValue_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.value = $event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 11);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275listener("click", function WizardComponent_Case_4_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createRecipeObjective(ctx_r2.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "p-divider");
    \u0275\u0275elementStart(13, "button", 12);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("click", function WizardComponent_Case_4_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.state = "type");
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 7, "wizard.recipeObjectiveMachines"));
    \u0275\u0275advance(4);
    \u0275\u0275classMap(\u0275\u0275pipeBind1(6, 9, ctx_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.data().recipeEntities[ctx_r2.id].name);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.value);
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(11, 11, "ok"));
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(14, 13, "wizard.back"));
  }
}
var _WizardComponent = class _WizardComponent {
  constructor() {
    this.store = inject(Store);
    this.itemIds = this.store.selectSignal(recipes_exports.getAvailableItems);
    this.data = this.store.selectSignal(settings_exports.getDataset);
    this.recipeIds = this.store.selectSignal(settings_exports.getAvailableRecipes);
    this.displayRate = this.store.selectSignal(settings_exports.getDisplayRate);
    this.id = "";
    this.value = rational(1n);
    this.state = "type";
    this.displayRateOptions = displayRateOptions;
    this.ObjectiveUnit = ObjectiveUnit;
  }
  selectId(value, state) {
    this.id = value;
    this.state = state;
  }
  /** Action Dispatch Methods */
  setDisplayRate(value, prev) {
    this.store.dispatch(new settings_exports.SetDisplayRateAction({ value, prev }));
  }
  createItemObjective(targetId) {
    this.store.dispatch(new objectives_exports.CreateAction({
      id: "0",
      targetId,
      value: this.value,
      unit: ObjectiveUnit.Items,
      type: ObjectiveType.Output
    }));
  }
  createRecipeObjective(targetId) {
    this.store.dispatch(new objectives_exports.CreateAction({
      id: "0",
      targetId,
      value: this.value,
      unit: ObjectiveUnit.Machines,
      type: ObjectiveType.Output
    }));
  }
};
_WizardComponent.\u0275fac = function WizardComponent_Factory(t) {
  return new (t || _WizardComponent)();
};
_WizardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WizardComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 4, consts: [["addItemObjectivePicker", ""], ["addRecipePicker", ""], [1, "d-flex", "flex-column", "p-fluid"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-xmark", "routerLink", "/", "queryParamsHandling", "preserve", 1, "p-button-outlined", 3, "label"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-box", 1, "mt-2", 3, "click", "label"], [3, "selectId", "header"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-industry", 1, "mt-2", 3, "click", "label"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "ms-2"], ["tooltipPosition", "top", 1, "mt-2", "w-100", 3, "setValue", "value"], ["labDropdownTranslate", "", "styleClass", "mt-2 h-100", 3, "onChange", "tooltip", "ngModel", "options"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-check", "routerLink", "/list", 1, "mt-2", 3, "click", "label"], ["pButton", "", "pRipple", "", "type", "button", "icon", "fa-solid fa-arrow-left", 1, "mb-2", "p-button-outlined", 3, "click", "label"]], template: function WizardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-card")(1, "div", 2);
    \u0275\u0275template(2, WizardComponent_Case_2_Template, 22, 21)(3, WizardComponent_Case_3_Template, 17, 20)(4, WizardComponent_Case_4_Template, 15, 15);
    \u0275\u0275element(5, "button", 3);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_0_0 = ctx.state) === "type" ? 2 : tmp_0_0 === "item" ? 3 : tmp_0_0 === "recipe" ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(6, 2, "cancel"));
  }
}, dependencies: [CommonModule, RadioButtonModule, StepsModule, RouterLink, AppSharedModule, NgControlStatus, NgModel, ButtonDirective, Card, Divider, Dropdown, Ripple, InputNumberComponent, PickerComponent, DropdownTranslateDirective, TranslatePipe, IconClassPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n/*# sourceMappingURL=wizard.component.css.map */"], changeDetection: 0 });
var WizardComponent = _WizardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WizardComponent, { className: "WizardComponent", filePath: "src\\app\\routes\\wizard\\wizard.component.ts", lineNumber: 26 });
})();
export {
  WizardComponent
};
//# sourceMappingURL=wizard.component-E7P7BTUA.js.map
