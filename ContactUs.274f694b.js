
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global = globalThis;
    var parcelRequire = $parcel$global["parcelRequire73b1"];
var parcelRegister = parcelRequire.register;
parcelRegister("2e0jS", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $19ed230c13f7b3a7$export$2e2bcd8739ae039);

var $8CS36 = parcelRequire("8CS36");

var $gMTo7 = parcelRequire("gMTo7");
const $19ed230c13f7b3a7$var$ContactUs = ()=>{
    return /*#__PURE__*/ (0, $8CS36.jsx)("div", {
        children: /*#__PURE__*/ (0, $8CS36.jsx)((0, $gMTo7.default), {})
    });
};
var $19ed230c13f7b3a7$export$2e2bcd8739ae039 = $19ed230c13f7b3a7$var$ContactUs;

});
parcelRegister("gMTo7", function(module, exports) {

$parcel$export(module.exports, "default", () => $c38c17efdb910f6e$export$2e2bcd8739ae039);

var $8CS36 = parcelRequire("8CS36");
parcelRequire("7Pt7X");

var $28obY = parcelRequire("28obY");

var $gUmy6 = parcelRequire("gUmy6");
let $c38c17efdb910f6e$var$renderCount = 0;
const $c38c17efdb910f6e$var$RFH01 = ()=>{
    const form = (0, $28obY.useForm)({
        defaultValues: {
            username: "S Kumar",
            email: "test@test.com",
            channel: "Food Vlog",
            social: {
                github: "gihub.com/mrdroid",
                linkedin: "linkidin.in/sobhit"
            },
            phoneNumbers: []
        }
    });
    const { register: register, control: control, handleSubmit: handleSubmit, formState: formState } = form;
    const { errors: errors } = formState;
    $c38c17efdb910f6e$var$renderCount++;
    const onSubmit = (data)=>{
        console.log(data);
    };
    return /*#__PURE__*/ (0, $8CS36.jsxs)("div", {
        className: "w-[30%] p-10 ",
        children: [
            /*#__PURE__*/ (0, $8CS36.jsx)("p", {
                children: /*#__PURE__*/ (0, $8CS36.jsx)("a", {
                    href: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwjmgBr1327BA5bVXoQH-w5s",
                    target: "/",
                    children: "RHF Tutorial"
                })
            }),
            /*#__PURE__*/ (0, $8CS36.jsx)("p", {
                children: /*#__PURE__*/ (0, $8CS36.jsx)("a", {
                    href: "https://react-hook-form.com/",
                    target: "/",
                    children: "RHF Library"
                })
            }),
            /*#__PURE__*/ (0, $8CS36.jsxs)("h1", {
                children: [
                    " React Hook Form ",
                    $c38c17efdb910f6e$var$renderCount / 2
                ]
            }),
            /*#__PURE__*/ (0, $8CS36.jsxs)("form", {
                className: "m-10 bg-gray-200",
                onSubmit: handleSubmit(onSubmit),
                noValidate: true,
                children: [
                    /*#__PURE__*/ (0, $8CS36.jsxs)("div", {
                        className: "form-control",
                        children: [
                            /*#__PURE__*/ (0, $8CS36.jsx)("label", {
                                htmlFor: "username",
                                children: "Username"
                            }),
                            /*#__PURE__*/ (0, $8CS36.jsx)("input", {
                                className: "bg-white",
                                type: "text",
                                id: "username",
                                ...register("username", {
                                    required: "username required"
                                })
                            }),
                            /*#__PURE__*/ (0, $8CS36.jsx)("p", {
                                className: "error",
                                children: errors.username?.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $8CS36.jsxs)("div", {
                        className: "form-control",
                        children: [
                            /*#__PURE__*/ (0, $8CS36.jsx)("label", {
                                htmlFor: "email",
                                children: "E-mail"
                            }),
                            /*#__PURE__*/ (0, $8CS36.jsx)("input", {
                                type: "email",
                                id: "email",
                                ...register("email", {
                                    pattern: {
                                        value: /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/,
                                        message: "Email is invalid"
                                    },
                                    validate: {
                                        invalidUser: (value)=>value !== "admin@test.com" || "Enter a different Email Id",
                                        invalidDomian: (value)=>!value.endsWith("invalid.com") || "Domain not allowed"
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0, $8CS36.jsx)("p", {
                                className: "error",
                                children: errors.email?.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $8CS36.jsxs)("div", {
                        className: "form-control",
                        children: [
                            /*#__PURE__*/ (0, $8CS36.jsx)("label", {
                                htmlFor: "channel",
                                children: "Channel"
                            }),
                            /*#__PURE__*/ (0, $8CS36.jsx)("input", {
                                type: "text",
                                id: "channel",
                                ...register("channel", {
                                    required: {
                                        value: true,
                                        message: "Channel is required"
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0, $8CS36.jsx)("p", {
                                className: "error",
                                children: errors.channel?.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $8CS36.jsxs)("div", {
                        className: "form-control",
                        children: [
                            /*#__PURE__*/ (0, $8CS36.jsx)("label", {
                                htmlFor: "github",
                                children: "Github"
                            }),
                            /*#__PURE__*/ (0, $8CS36.jsx)("input", {
                                type: "text",
                                id: "github",
                                ...register("social.github")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $8CS36.jsxs)("div", {
                        className: "form-control",
                        children: [
                            /*#__PURE__*/ (0, $8CS36.jsx)("label", {
                                htmlFor: "linkedin",
                                children: "Linkedin"
                            }),
                            /*#__PURE__*/ (0, $8CS36.jsx)("input", {
                                type: "text",
                                id: "linkedin",
                                ...register("social.linkedin")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $8CS36.jsxs)("div", {
                        className: "form-control",
                        children: [
                            /*#__PURE__*/ (0, $8CS36.jsx)("label", {
                                htmlFor: "primary-contact",
                                children: "Primary No"
                            }),
                            /*#__PURE__*/ (0, $8CS36.jsx)("input", {
                                type: "text",
                                id: "primary-contact",
                                ...register("phoneNumber.0")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $8CS36.jsxs)("div", {
                        className: "form-control",
                        children: [
                            /*#__PURE__*/ (0, $8CS36.jsx)("label", {
                                htmlFor: "secondary-number",
                                children: "Secondary No"
                            }),
                            /*#__PURE__*/ (0, $8CS36.jsx)("input", {
                                type: "text",
                                id: "secondary-number",
                                ...register("phoneNumber.1")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $8CS36.jsx)("button", {
                        type: "submit",
                        children: "Submit"
                    })
                ]
            }),
            /*#__PURE__*/ (0, $8CS36.jsx)((0, $gUmy6.DevTool), {
                control: control
            })
        ]
    });
};
var $c38c17efdb910f6e$export$2e2bcd8739ae039 = $c38c17efdb910f6e$var$RFH01;

});
parcelRegister("28obY", function(module, exports) {

$parcel$export(module.exports, "useForm", () => $0ab3112b8267cb1d$export$87c0cf8eb5a167e0);

var $7Pt7X = parcelRequire("7Pt7X");
var $0ab3112b8267cb1d$var$isCheckBoxInput = (element)=>element.type === "checkbox";
var $0ab3112b8267cb1d$var$isDateObject = (value1)=>value1 instanceof Date;
var $0ab3112b8267cb1d$var$isNullOrUndefined = (value1)=>value1 == null;
const $0ab3112b8267cb1d$var$isObjectType = (value1)=>typeof value1 === "object";
var $0ab3112b8267cb1d$var$isObject = (value1)=>!$0ab3112b8267cb1d$var$isNullOrUndefined(value1) && !Array.isArray(value1) && $0ab3112b8267cb1d$var$isObjectType(value1) && !$0ab3112b8267cb1d$var$isDateObject(value1);
var $0ab3112b8267cb1d$var$getEventValue = (event)=>$0ab3112b8267cb1d$var$isObject(event) && event.target ? $0ab3112b8267cb1d$var$isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var $0ab3112b8267cb1d$var$getNodeParentName = (name)=>name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var $0ab3112b8267cb1d$var$isNameInFieldArray = (names, name)=>names.has($0ab3112b8267cb1d$var$getNodeParentName(name));
var $0ab3112b8267cb1d$var$isPlainObject = (tempObject)=>{
    const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
    return $0ab3112b8267cb1d$var$isObject(prototypeCopy) && prototypeCopy.hasOwnProperty("isPrototypeOf");
};
var $0ab3112b8267cb1d$var$isWeb = typeof window !== "undefined" && typeof window.HTMLElement !== "undefined" && typeof document !== "undefined";
function $0ab3112b8267cb1d$var$cloneObject(data) {
    let copy;
    const isArray = Array.isArray(data);
    const isFileListInstance = typeof FileList !== "undefined" ? data instanceof FileList : false;
    if (data instanceof Date) copy = new Date(data);
    else if (data instanceof Set) copy = new Set(data);
    else if (!($0ab3112b8267cb1d$var$isWeb && (data instanceof Blob || isFileListInstance)) && (isArray || $0ab3112b8267cb1d$var$isObject(data))) {
        copy = isArray ? [] : {};
        if (!isArray && !$0ab3112b8267cb1d$var$isPlainObject(data)) copy = data;
        else {
            for(const key in data)if (data.hasOwnProperty(key)) copy[key] = $0ab3112b8267cb1d$var$cloneObject(data[key]);
        }
    } else return data;
    return copy;
}
var $0ab3112b8267cb1d$var$compact = (value1)=>Array.isArray(value1) ? value1.filter(Boolean) : [];
var $0ab3112b8267cb1d$var$isUndefined = (val)=>val === undefined;
var $0ab3112b8267cb1d$export$3988ae62b71be9a3 = (object, path, defaultValue)=>{
    if (!path || !$0ab3112b8267cb1d$var$isObject(object)) return defaultValue;
    const result = $0ab3112b8267cb1d$var$compact(path.split(/[,[\].]+?/)).reduce((result, key)=>$0ab3112b8267cb1d$var$isNullOrUndefined(result) ? result : result[key], object);
    return $0ab3112b8267cb1d$var$isUndefined(result) || result === object ? $0ab3112b8267cb1d$var$isUndefined(object[path]) ? defaultValue : object[path] : result;
};
var $0ab3112b8267cb1d$var$isBoolean = (value1)=>typeof value1 === "boolean";
var $0ab3112b8267cb1d$var$isKey = (value1)=>/^\w*$/.test(value1);
var $0ab3112b8267cb1d$var$stringToPath = (input)=>$0ab3112b8267cb1d$var$compact(input.replace(/["|']|\]/g, "").split(/\.|\[/));
var $0ab3112b8267cb1d$export$adaa4cf7ef1b65be = (object, path, value1)=>{
    let index = -1;
    const tempPath = $0ab3112b8267cb1d$var$isKey(path) ? [
        path
    ] : $0ab3112b8267cb1d$var$stringToPath(path);
    const length = tempPath.length;
    const lastIndex = length - 1;
    while(++index < length){
        const key = tempPath[index];
        let newValue = value1;
        if (index !== lastIndex) {
            const objValue = object[key];
            newValue = $0ab3112b8267cb1d$var$isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
        }
        if (key === "__proto__" || key === "constructor" || key === "prototype") return;
        object[key] = newValue;
        object = object[key];
    }
    return object;
};
const $0ab3112b8267cb1d$var$EVENTS = {
    BLUR: "blur",
    FOCUS_OUT: "focusout",
    CHANGE: "change"
};
const $0ab3112b8267cb1d$var$VALIDATION_MODE = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all"
};
const $0ab3112b8267cb1d$var$INPUT_VALIDATION_RULES = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate"
};
const $0ab3112b8267cb1d$var$HookFormContext = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).createContext(null);
/**
 * This custom hook allows you to access the form context. useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop. To be used with {@link FormProvider}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @returns return all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */ const $0ab3112b8267cb1d$export$4d957a5e1be13b03 = ()=>(0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useContext($0ab3112b8267cb1d$var$HookFormContext);
/**
 * A provider component that propagates the `useForm` methods to all children components via [React Context](https://reactjs.org/docs/context.html) API. To be used with {@link useFormContext}.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformcontext) • [Demo](https://codesandbox.io/s/react-hook-form-v7-form-context-ytudi)
 *
 * @param props - all useForm methods
 *
 * @example
 * ```tsx
 * function App() {
 *   const methods = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   return (
 *     <FormProvider {...methods} >
 *       <form onSubmit={methods.handleSubmit(onSubmit)}>
 *         <NestedInput />
 *         <input type="submit" />
 *       </form>
 *     </FormProvider>
 *   );
 * }
 *
 *  function NestedInput() {
 *   const { register } = useFormContext(); // retrieve all hook methods
 *   return <input {...register("test")} />;
 * }
 * ```
 */ const $0ab3112b8267cb1d$export$8ce1ff4f94d08846 = (props)=>{
    const { children: children, ...data } = props;
    return (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).createElement($0ab3112b8267cb1d$var$HookFormContext.Provider, {
        value: data
    }, children);
};
var $0ab3112b8267cb1d$var$getProxyFormState = (formState, control, localProxyFormState, isRoot = true)=>{
    const result = {
        defaultValues: control._defaultValues
    };
    for(const key in formState)Object.defineProperty(result, key, {
        get: ()=>{
            const _key = key;
            if (control._proxyFormState[_key] !== $0ab3112b8267cb1d$var$VALIDATION_MODE.all) control._proxyFormState[_key] = !isRoot || $0ab3112b8267cb1d$var$VALIDATION_MODE.all;
            localProxyFormState && (localProxyFormState[_key] = true);
            return formState[_key];
        }
    });
    return result;
};
var $0ab3112b8267cb1d$var$isEmptyObject = (value1)=>$0ab3112b8267cb1d$var$isObject(value1) && !Object.keys(value1).length;
var $0ab3112b8267cb1d$var$shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot)=>{
    updateFormState(formStateData);
    const { name: name, ...formState } = formStateData;
    return $0ab3112b8267cb1d$var$isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key)=>_proxyFormState[key] === (!isRoot || $0ab3112b8267cb1d$var$VALIDATION_MODE.all));
};
var $0ab3112b8267cb1d$var$convertToArrayPayload = (value1)=>Array.isArray(value1) ? value1 : [
        value1
    ];
var $0ab3112b8267cb1d$var$shouldSubscribeByName = (name, signalName, exact)=>!name || !signalName || name === signalName || $0ab3112b8267cb1d$var$convertToArrayPayload(name).some((currentName)=>currentName && (exact ? currentName === signalName : currentName.startsWith(signalName) || signalName.startsWith(currentName)));
function $0ab3112b8267cb1d$var$useSubscribe(props) {
    const _props = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useRef(props);
    _props.current = props;
    (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useEffect(()=>{
        const subscription = !props.disabled && _props.current.subject && _props.current.subject.subscribe({
            next: _props.current.next
        });
        return ()=>{
            subscription && subscription.unsubscribe();
        };
    }, [
        props.disabled
    ]);
}
/**
 * This custom hook allows you to subscribe to each form state, and isolate the re-render at the custom hook level. It has its scope in terms of form state subscription, so it would not affect other useFormState and useForm. Using this hook can reduce the re-render impact on large and complex form application.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useformstate) • [Demo](https://codesandbox.io/s/useformstate-75xly)
 *
 * @param props - include options on specify fields to subscribe. {@link UseFormStateReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, control } = useForm({
 *     defaultValues: {
 *     firstName: "firstName"
 *   }});
 *   const { dirtyFields } = useFormState({
 *     control
 *   });
 *   const onSubmit = (data) => console.log(data);
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input {...register("firstName")} placeholder="First Name" />
 *       {dirtyFields.firstName && <p>Field is dirty.</p>}
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */ function $0ab3112b8267cb1d$export$606f11b2eb45ecc6(props) {
    const methods = $0ab3112b8267cb1d$export$4d957a5e1be13b03();
    const { control: control = methods.control, disabled: disabled, name: name, exact: exact } = props || {};
    const [formState, updateFormState] = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useState(control._formState);
    const _mounted = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useRef(true);
    const _localProxyFormState = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useRef({
        isDirty: false,
        isLoading: false,
        dirtyFields: false,
        touchedFields: false,
        validatingFields: false,
        isValidating: false,
        isValid: false,
        errors: false
    });
    const _name = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useRef(name);
    _name.current = name;
    $0ab3112b8267cb1d$var$useSubscribe({
        disabled: disabled,
        next: (value1)=>_mounted.current && $0ab3112b8267cb1d$var$shouldSubscribeByName(_name.current, value1.name, exact) && $0ab3112b8267cb1d$var$shouldRenderFormState(value1, _localProxyFormState.current, control._updateFormState) && updateFormState({
                ...control._formState,
                ...value1
            }),
        subject: control._subjects.state
    });
    (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useEffect(()=>{
        _mounted.current = true;
        _localProxyFormState.current.isValid && control._updateValid(true);
        return ()=>{
            _mounted.current = false;
        };
    }, [
        control
    ]);
    return (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useMemo(()=>$0ab3112b8267cb1d$var$getProxyFormState(formState, control, _localProxyFormState.current, false), [
        formState,
        control
    ]);
}
var $0ab3112b8267cb1d$var$isString = (value1)=>typeof value1 === "string";
var $0ab3112b8267cb1d$var$generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue)=>{
    if ($0ab3112b8267cb1d$var$isString(names)) {
        isGlobal && _names.watch.add(names);
        return $0ab3112b8267cb1d$export$3988ae62b71be9a3(formValues, names, defaultValue);
    }
    if (Array.isArray(names)) return names.map((fieldName)=>(isGlobal && _names.watch.add(fieldName), $0ab3112b8267cb1d$export$3988ae62b71be9a3(formValues, fieldName)));
    isGlobal && (_names.watchAll = true);
    return formValues;
};
/**
 * Custom hook to subscribe to field change and isolate re-rendering at the component level.
 *
 * @remarks
 *
 * [API](https://react-hook-form.com/docs/usewatch) • [Demo](https://codesandbox.io/s/react-hook-form-v7-ts-usewatch-h9i5e)
 *
 * @example
 * ```tsx
 * const { control } = useForm();
 * const values = useWatch({
 *   name: "fieldName"
 *   control,
 * })
 * ```
 */ function $0ab3112b8267cb1d$export$3c773aa2b84f29e0(props) {
    const methods = $0ab3112b8267cb1d$export$4d957a5e1be13b03();
    const { control: control = methods.control, name: name, defaultValue: defaultValue, disabled: disabled, exact: exact } = props || {};
    const _name = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useRef(name);
    _name.current = name;
    $0ab3112b8267cb1d$var$useSubscribe({
        disabled: disabled,
        subject: control._subjects.values,
        next: (formState)=>{
            if ($0ab3112b8267cb1d$var$shouldSubscribeByName(_name.current, formState.name, exact)) updateValue($0ab3112b8267cb1d$var$cloneObject($0ab3112b8267cb1d$var$generateWatchOutput(_name.current, control._names, formState.values || control._formValues, false, defaultValue)));
        }
    });
    const [value1, updateValue] = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useState(control._getWatch(name, defaultValue));
    (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useEffect(()=>control._removeUnmounted());
    return value1;
}
/**
 * Custom hook to work with controlled component, this function provide you with both form and field level state. Re-render is isolated at the hook level.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller) • [Demo](https://codesandbox.io/s/usecontroller-0o8px)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns field properties, field and form state. {@link UseControllerReturn}
 *
 * @example
 * ```tsx
 * function Input(props) {
 *   const { field, fieldState, formState } = useController(props);
 *   return (
 *     <div>
 *       <input {...field} placeholder={props.name} />
 *       <p>{fieldState.isTouched && "Touched"}</p>
 *       <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *     </div>
 *   );
 * }
 * ```
 */ function $0ab3112b8267cb1d$export$e8c786024a2b0a79(props) {
    const methods = $0ab3112b8267cb1d$export$4d957a5e1be13b03();
    const { name: name, disabled: disabled, control: control = methods.control, shouldUnregister: shouldUnregister } = props;
    const isArrayField = $0ab3112b8267cb1d$var$isNameInFieldArray(control._names.array, name);
    const value1 = $0ab3112b8267cb1d$export$3c773aa2b84f29e0({
        control: control,
        name: name,
        defaultValue: $0ab3112b8267cb1d$export$3988ae62b71be9a3(control._formValues, name, $0ab3112b8267cb1d$export$3988ae62b71be9a3(control._defaultValues, name, props.defaultValue)),
        exact: true
    });
    const formState = $0ab3112b8267cb1d$export$606f11b2eb45ecc6({
        control: control,
        name: name,
        exact: true
    });
    const _registerProps = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useRef(control.register(name, {
        ...props.rules,
        value: value1,
        ...$0ab3112b8267cb1d$var$isBoolean(props.disabled) ? {
            disabled: props.disabled
        } : {}
    }));
    const fieldState = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useMemo(()=>Object.defineProperties({}, {
            invalid: {
                enumerable: true,
                get: ()=>!!$0ab3112b8267cb1d$export$3988ae62b71be9a3(formState.errors, name)
            },
            isDirty: {
                enumerable: true,
                get: ()=>!!$0ab3112b8267cb1d$export$3988ae62b71be9a3(formState.dirtyFields, name)
            },
            isTouched: {
                enumerable: true,
                get: ()=>!!$0ab3112b8267cb1d$export$3988ae62b71be9a3(formState.touchedFields, name)
            },
            isValidating: {
                enumerable: true,
                get: ()=>!!$0ab3112b8267cb1d$export$3988ae62b71be9a3(formState.validatingFields, name)
            },
            error: {
                enumerable: true,
                get: ()=>$0ab3112b8267cb1d$export$3988ae62b71be9a3(formState.errors, name)
            }
        }), [
        formState,
        name
    ]);
    const field = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useMemo(()=>({
            name: name,
            value: value1,
            ...$0ab3112b8267cb1d$var$isBoolean(disabled) || formState.disabled ? {
                disabled: formState.disabled || disabled
            } : {},
            onChange: (event)=>_registerProps.current.onChange({
                    target: {
                        value: $0ab3112b8267cb1d$var$getEventValue(event),
                        name: name
                    },
                    type: $0ab3112b8267cb1d$var$EVENTS.CHANGE
                }),
            onBlur: ()=>_registerProps.current.onBlur({
                    target: {
                        value: $0ab3112b8267cb1d$export$3988ae62b71be9a3(control._formValues, name),
                        name: name
                    },
                    type: $0ab3112b8267cb1d$var$EVENTS.BLUR
                }),
            ref: (elm)=>{
                const field = $0ab3112b8267cb1d$export$3988ae62b71be9a3(control._fields, name);
                if (field && elm) field._f.ref = {
                    focus: ()=>elm.focus(),
                    select: ()=>elm.select(),
                    setCustomValidity: (message)=>elm.setCustomValidity(message),
                    reportValidity: ()=>elm.reportValidity()
                };
            }
        }), [
        name,
        control._formValues,
        disabled,
        formState.disabled,
        value1,
        control._fields
    ]);
    (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useEffect(()=>{
        const _shouldUnregisterField = control._options.shouldUnregister || shouldUnregister;
        const updateMounted = (name, value1)=>{
            const field = $0ab3112b8267cb1d$export$3988ae62b71be9a3(control._fields, name);
            if (field && field._f) field._f.mount = value1;
        };
        updateMounted(name, true);
        if (_shouldUnregisterField) {
            const value1 = $0ab3112b8267cb1d$var$cloneObject($0ab3112b8267cb1d$export$3988ae62b71be9a3(control._options.defaultValues, name));
            $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(control._defaultValues, name, value1);
            if ($0ab3112b8267cb1d$var$isUndefined($0ab3112b8267cb1d$export$3988ae62b71be9a3(control._formValues, name))) $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(control._formValues, name, value1);
        }
        !isArrayField && control.register(name);
        return ()=>{
            (isArrayField ? _shouldUnregisterField && !control._state.action : _shouldUnregisterField) ? control.unregister(name) : updateMounted(name, false);
        };
    }, [
        name,
        control,
        isArrayField,
        shouldUnregister
    ]);
    (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useEffect(()=>{
        control._updateDisabledField({
            disabled: disabled,
            fields: control._fields,
            name: name
        });
    }, [
        disabled,
        name,
        control
    ]);
    return (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useMemo(()=>({
            field: field,
            formState: formState,
            fieldState: fieldState
        }), [
        field,
        formState,
        fieldState
    ]);
}
/**
 * Component based on `useController` hook to work with controlled component.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usecontroller/controller) • [Demo](https://codesandbox.io/s/react-hook-form-v6-controller-ts-jwyzw) • [Video](https://www.youtube.com/watch?v=N2UNk_UCVyA)
 *
 * @param props - the path name to the form field value, and validation rules.
 *
 * @returns provide field handler functions, field and form state.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control } = useForm<FormValues>({
 *     defaultValues: {
 *       test: ""
 *     }
 *   });
 *
 *   return (
 *     <form>
 *       <Controller
 *         control={control}
 *         name="test"
 *         render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
 *           <>
 *             <input
 *               onChange={onChange} // send value to hook form
 *               onBlur={onBlur} // notify when input is touched
 *               value={value} // return updated value
 *               ref={ref} // set ref for focus management
 *             />
 *             <p>{formState.isSubmitted ? "submitted" : ""}</p>
 *             <p>{fieldState.isTouched ? "touched" : ""}</p>
 *           </>
 *         )}
 *       />
 *     </form>
 *   );
 * }
 * ```
 */ const $0ab3112b8267cb1d$export$bd0bf19f25da8474 = (props)=>props.render($0ab3112b8267cb1d$export$e8c786024a2b0a79(props));
const $0ab3112b8267cb1d$var$flatten = (obj)=>{
    const output = {};
    for (const key of Object.keys(obj))if ($0ab3112b8267cb1d$var$isObjectType(obj[key]) && obj[key] !== null) {
        const nested = $0ab3112b8267cb1d$var$flatten(obj[key]);
        for (const nestedKey of Object.keys(nested))output[`${key}.${nestedKey}`] = nested[nestedKey];
    } else output[key] = obj[key];
    return output;
};
const $0ab3112b8267cb1d$var$POST_REQUEST = "post";
/**
 * Form component to manage submission.
 *
 * @param props - to setup submission detail. {@link FormProps}
 *
 * @returns form component or headless render prop.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { control, formState: { errors } } = useForm();
 *
 *   return (
 *     <Form action="/api" control={control}>
 *       <input {...register("name")} />
 *       <p>{errors?.root?.server && 'Server error'}</p>
 *       <button>Submit</button>
 *     </Form>
 *   );
 * }
 * ```
 */ function $0ab3112b8267cb1d$export$a7fed597f4b8afd8(props) {
    const methods = $0ab3112b8267cb1d$export$4d957a5e1be13b03();
    const [mounted, setMounted] = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useState(false);
    const { control: control = methods.control, onSubmit: onSubmit, children: children, action: action, method: method = $0ab3112b8267cb1d$var$POST_REQUEST, headers: headers, encType: encType, onError: onError, render: render, onSuccess: onSuccess, validateStatus: validateStatus, ...rest } = props;
    const submit = async (event)=>{
        let hasError = false;
        let type = "";
        await control.handleSubmit(async (data)=>{
            const formData = new FormData();
            let formDataJson = "";
            try {
                formDataJson = JSON.stringify(data);
            } catch (_a) {}
            const flattenFormValues = $0ab3112b8267cb1d$var$flatten(control._formValues);
            for(const key in flattenFormValues)formData.append(key, flattenFormValues[key]);
            if (onSubmit) await onSubmit({
                data: data,
                event: event,
                method: method,
                formData: formData,
                formDataJson: formDataJson
            });
            if (action) try {
                const shouldStringifySubmissionData = [
                    headers && headers["Content-Type"],
                    encType
                ].some((value1)=>value1 && value1.includes("json"));
                const response = await fetch(String(action), {
                    method: method,
                    headers: {
                        ...headers,
                        ...encType ? {
                            "Content-Type": encType
                        } : {}
                    },
                    body: shouldStringifySubmissionData ? formDataJson : formData
                });
                if (response && (validateStatus ? !validateStatus(response.status) : response.status < 200 || response.status >= 300)) {
                    hasError = true;
                    onError && onError({
                        response: response
                    });
                    type = String(response.status);
                } else onSuccess && onSuccess({
                    response: response
                });
            } catch (error) {
                hasError = true;
                onError && onError({
                    error: error
                });
            }
        })(event);
        if (hasError && props.control) {
            props.control._subjects.state.next({
                isSubmitSuccessful: false
            });
            props.control.setError("root.server", {
                type: type
            });
        }
    };
    (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useEffect(()=>{
        setMounted(true);
    }, []);
    return render ? (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).createElement((0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).Fragment, null, render({
        submit: submit
    })) : (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).createElement("form", {
        noValidate: mounted,
        action: action,
        method: method,
        encType: encType,
        onSubmit: submit,
        ...rest
    }, children);
}
var $0ab3112b8267cb1d$export$b196c2a4f765bd30 = (name, validateAllFieldCriteria, errors, type, message)=>validateAllFieldCriteria ? {
        ...errors[name],
        types: {
            ...errors[name] && errors[name].types ? errors[name].types : {},
            [type]: message || true
        }
    } : {};
var $0ab3112b8267cb1d$var$generateId = ()=>{
    const d = typeof performance === "undefined" ? Date.now() : performance.now() * 1000;
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c)=>{
        const r = (Math.random() * 16 + d) % 16 | 0;
        return (c == "x" ? r : r & 0x3 | 0x8).toString(16);
    });
};
var $0ab3112b8267cb1d$var$getFocusFieldName = (name, index, options = {})=>options.shouldFocus || $0ab3112b8267cb1d$var$isUndefined(options.shouldFocus) ? options.focusName || `${name}.${$0ab3112b8267cb1d$var$isUndefined(options.focusIndex) ? index : options.focusIndex}.` : "";
var $0ab3112b8267cb1d$var$getValidationModes = (mode)=>({
        isOnSubmit: !mode || mode === $0ab3112b8267cb1d$var$VALIDATION_MODE.onSubmit,
        isOnBlur: mode === $0ab3112b8267cb1d$var$VALIDATION_MODE.onBlur,
        isOnChange: mode === $0ab3112b8267cb1d$var$VALIDATION_MODE.onChange,
        isOnAll: mode === $0ab3112b8267cb1d$var$VALIDATION_MODE.all,
        isOnTouch: mode === $0ab3112b8267cb1d$var$VALIDATION_MODE.onTouched
    });
var $0ab3112b8267cb1d$var$isWatched = (name, _names, isBlurEvent)=>!isBlurEvent && (_names.watchAll || _names.watch.has(name) || [
        ..._names.watch
    ].some((watchName)=>name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
const $0ab3112b8267cb1d$var$iterateFieldsByAction = (fields, action, fieldsNames, abortEarly)=>{
    for (const key of fieldsNames || Object.keys(fields)){
        const field = $0ab3112b8267cb1d$export$3988ae62b71be9a3(fields, key);
        if (field) {
            const { _f: _f, ...currentField } = field;
            if (_f) {
                if (_f.refs && _f.refs[0] && action(_f.refs[0], key) && !abortEarly) return true;
                else if (_f.ref && action(_f.ref, _f.name) && !abortEarly) return true;
                else {
                    if ($0ab3112b8267cb1d$var$iterateFieldsByAction(currentField, action)) break;
                }
            } else if ($0ab3112b8267cb1d$var$isObject(currentField)) {
                if ($0ab3112b8267cb1d$var$iterateFieldsByAction(currentField, action)) break;
            }
        }
    }
    return;
};
var $0ab3112b8267cb1d$var$updateFieldArrayRootError = (errors, error, name)=>{
    const fieldArrayErrors = $0ab3112b8267cb1d$var$convertToArrayPayload($0ab3112b8267cb1d$export$3988ae62b71be9a3(errors, name));
    $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(fieldArrayErrors, "root", error[name]);
    $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(errors, name, fieldArrayErrors);
    return errors;
};
var $0ab3112b8267cb1d$var$isFileInput = (element)=>element.type === "file";
var $0ab3112b8267cb1d$var$isFunction = (value1)=>typeof value1 === "function";
var $0ab3112b8267cb1d$var$isHTMLElement = (value1)=>{
    if (!$0ab3112b8267cb1d$var$isWeb) return false;
    const owner = value1 ? value1.ownerDocument : 0;
    return value1 instanceof (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement);
};
var $0ab3112b8267cb1d$var$isMessage = (value1)=>$0ab3112b8267cb1d$var$isString(value1);
var $0ab3112b8267cb1d$var$isRadioInput = (element)=>element.type === "radio";
var $0ab3112b8267cb1d$var$isRegex = (value1)=>value1 instanceof RegExp;
const $0ab3112b8267cb1d$var$defaultResult = {
    value: false,
    isValid: false
};
const $0ab3112b8267cb1d$var$validResult = {
    value: true,
    isValid: true
};
var $0ab3112b8267cb1d$var$getCheckboxValue = (options)=>{
    if (Array.isArray(options)) {
        if (options.length > 1) {
            const values = options.filter((option)=>option && option.checked && !option.disabled).map((option)=>option.value);
            return {
                value: values,
                isValid: !!values.length
            };
        }
        return options[0].checked && !options[0].disabled ? options[0].attributes && !$0ab3112b8267cb1d$var$isUndefined(options[0].attributes.value) ? $0ab3112b8267cb1d$var$isUndefined(options[0].value) || options[0].value === "" ? $0ab3112b8267cb1d$var$validResult : {
            value: options[0].value,
            isValid: true
        } : $0ab3112b8267cb1d$var$validResult : $0ab3112b8267cb1d$var$defaultResult;
    }
    return $0ab3112b8267cb1d$var$defaultResult;
};
const $0ab3112b8267cb1d$var$defaultReturn = {
    isValid: false,
    value: null
};
var $0ab3112b8267cb1d$var$getRadioValue = (options)=>Array.isArray(options) ? options.reduce((previous, option)=>option && option.checked && !option.disabled ? {
            isValid: true,
            value: option.value
        } : previous, $0ab3112b8267cb1d$var$defaultReturn) : $0ab3112b8267cb1d$var$defaultReturn;
function $0ab3112b8267cb1d$var$getValidateError(result, ref, type = "validate") {
    if ($0ab3112b8267cb1d$var$isMessage(result) || Array.isArray(result) && result.every($0ab3112b8267cb1d$var$isMessage) || $0ab3112b8267cb1d$var$isBoolean(result) && !result) return {
        type: type,
        message: $0ab3112b8267cb1d$var$isMessage(result) ? result : "",
        ref: ref
    };
}
var $0ab3112b8267cb1d$var$getValueAndMessage = (validationData)=>$0ab3112b8267cb1d$var$isObject(validationData) && !$0ab3112b8267cb1d$var$isRegex(validationData) ? validationData : {
        value: validationData,
        message: ""
    };
var $0ab3112b8267cb1d$var$validateField = async (field, disabledFieldNames, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray)=>{
    const { ref: ref, refs: refs, required: required, maxLength: maxLength, minLength: minLength, min: min, max: max, pattern: pattern, validate: validate, name: name, valueAsNumber: valueAsNumber, mount: mount } = field._f;
    const inputValue = $0ab3112b8267cb1d$export$3988ae62b71be9a3(formValues, name);
    if (!mount || disabledFieldNames.has(name)) return {};
    const inputRef = refs ? refs[0] : ref;
    const setCustomValidity = (message)=>{
        if (shouldUseNativeValidation && inputRef.reportValidity) {
            inputRef.setCustomValidity($0ab3112b8267cb1d$var$isBoolean(message) ? "" : message || "");
            inputRef.reportValidity();
        }
    };
    const error = {};
    const isRadio = $0ab3112b8267cb1d$var$isRadioInput(ref);
    const isCheckBox = $0ab3112b8267cb1d$var$isCheckBoxInput(ref);
    const isRadioOrCheckbox = isRadio || isCheckBox;
    const isEmpty = (valueAsNumber || $0ab3112b8267cb1d$var$isFileInput(ref)) && $0ab3112b8267cb1d$var$isUndefined(ref.value) && $0ab3112b8267cb1d$var$isUndefined(inputValue) || $0ab3112b8267cb1d$var$isHTMLElement(ref) && ref.value === "" || inputValue === "" || Array.isArray(inputValue) && !inputValue.length;
    const appendErrorsCurry = $0ab3112b8267cb1d$export$b196c2a4f765bd30.bind(null, name, validateAllFieldCriteria, error);
    const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = $0ab3112b8267cb1d$var$INPUT_VALIDATION_RULES.maxLength, minType = $0ab3112b8267cb1d$var$INPUT_VALIDATION_RULES.minLength)=>{
        const message = exceedMax ? maxLengthMessage : minLengthMessage;
        error[name] = {
            type: exceedMax ? maxType : minType,
            message: message,
            ref: ref,
            ...appendErrorsCurry(exceedMax ? maxType : minType, message)
        };
    };
    if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox && (isEmpty || $0ab3112b8267cb1d$var$isNullOrUndefined(inputValue)) || $0ab3112b8267cb1d$var$isBoolean(inputValue) && !inputValue || isCheckBox && !$0ab3112b8267cb1d$var$getCheckboxValue(refs).isValid || isRadio && !$0ab3112b8267cb1d$var$getRadioValue(refs).isValid)) {
        const { value: value1, message: message } = $0ab3112b8267cb1d$var$isMessage(required) ? {
            value: !!required,
            message: required
        } : $0ab3112b8267cb1d$var$getValueAndMessage(required);
        if (value1) {
            error[name] = {
                type: $0ab3112b8267cb1d$var$INPUT_VALIDATION_RULES.required,
                message: message,
                ref: inputRef,
                ...appendErrorsCurry($0ab3112b8267cb1d$var$INPUT_VALIDATION_RULES.required, message)
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (!isEmpty && (!$0ab3112b8267cb1d$var$isNullOrUndefined(min) || !$0ab3112b8267cb1d$var$isNullOrUndefined(max))) {
        let exceedMax;
        let exceedMin;
        const maxOutput = $0ab3112b8267cb1d$var$getValueAndMessage(max);
        const minOutput = $0ab3112b8267cb1d$var$getValueAndMessage(min);
        if (!$0ab3112b8267cb1d$var$isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
            const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
            if (!$0ab3112b8267cb1d$var$isNullOrUndefined(maxOutput.value)) exceedMax = valueNumber > maxOutput.value;
            if (!$0ab3112b8267cb1d$var$isNullOrUndefined(minOutput.value)) exceedMin = valueNumber < minOutput.value;
        } else {
            const valueDate = ref.valueAsDate || new Date(inputValue);
            const convertTimeToDate = (time)=>new Date(new Date().toDateString() + " " + time);
            const isTime = ref.type == "time";
            const isWeek = ref.type == "week";
            if ($0ab3112b8267cb1d$var$isString(maxOutput.value) && inputValue) exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
            if ($0ab3112b8267cb1d$var$isString(minOutput.value) && inputValue) exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
        }
        if (exceedMax || exceedMin) {
            getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, $0ab3112b8267cb1d$var$INPUT_VALIDATION_RULES.max, $0ab3112b8267cb1d$var$INPUT_VALIDATION_RULES.min);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if ((maxLength || minLength) && !isEmpty && ($0ab3112b8267cb1d$var$isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
        const maxLengthOutput = $0ab3112b8267cb1d$var$getValueAndMessage(maxLength);
        const minLengthOutput = $0ab3112b8267cb1d$var$getValueAndMessage(minLength);
        const exceedMax = !$0ab3112b8267cb1d$var$isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
        const exceedMin = !$0ab3112b8267cb1d$var$isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
        if (exceedMax || exceedMin) {
            getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
            if (!validateAllFieldCriteria) {
                setCustomValidity(error[name].message);
                return error;
            }
        }
    }
    if (pattern && !isEmpty && $0ab3112b8267cb1d$var$isString(inputValue)) {
        const { value: patternValue, message: message } = $0ab3112b8267cb1d$var$getValueAndMessage(pattern);
        if ($0ab3112b8267cb1d$var$isRegex(patternValue) && !inputValue.match(patternValue)) {
            error[name] = {
                type: $0ab3112b8267cb1d$var$INPUT_VALIDATION_RULES.pattern,
                message: message,
                ref: ref,
                ...appendErrorsCurry($0ab3112b8267cb1d$var$INPUT_VALIDATION_RULES.pattern, message)
            };
            if (!validateAllFieldCriteria) {
                setCustomValidity(message);
                return error;
            }
        }
    }
    if (validate) {
        if ($0ab3112b8267cb1d$var$isFunction(validate)) {
            const result = await validate(inputValue, formValues);
            const validateError = $0ab3112b8267cb1d$var$getValidateError(result, inputRef);
            if (validateError) {
                error[name] = {
                    ...validateError,
                    ...appendErrorsCurry($0ab3112b8267cb1d$var$INPUT_VALIDATION_RULES.validate, validateError.message)
                };
                if (!validateAllFieldCriteria) {
                    setCustomValidity(validateError.message);
                    return error;
                }
            }
        } else if ($0ab3112b8267cb1d$var$isObject(validate)) {
            let validationResult = {};
            for(const key in validate){
                if (!$0ab3112b8267cb1d$var$isEmptyObject(validationResult) && !validateAllFieldCriteria) break;
                const validateError = $0ab3112b8267cb1d$var$getValidateError(await validate[key](inputValue, formValues), inputRef, key);
                if (validateError) {
                    validationResult = {
                        ...validateError,
                        ...appendErrorsCurry(key, validateError.message)
                    };
                    setCustomValidity(validateError.message);
                    if (validateAllFieldCriteria) error[name] = validationResult;
                }
            }
            if (!$0ab3112b8267cb1d$var$isEmptyObject(validationResult)) {
                error[name] = {
                    ref: inputRef,
                    ...validationResult
                };
                if (!validateAllFieldCriteria) return error;
            }
        }
    }
    setCustomValidity(true);
    return error;
};
var $0ab3112b8267cb1d$var$appendAt = (data, value1)=>[
        ...data,
        ...$0ab3112b8267cb1d$var$convertToArrayPayload(value1)
    ];
var $0ab3112b8267cb1d$var$fillEmptyArray = (value1)=>Array.isArray(value1) ? value1.map(()=>undefined) : undefined;
function $0ab3112b8267cb1d$var$insert(data, index, value1) {
    return [
        ...data.slice(0, index),
        ...$0ab3112b8267cb1d$var$convertToArrayPayload(value1),
        ...data.slice(index)
    ];
}
var $0ab3112b8267cb1d$var$moveArrayAt = (data, from, to)=>{
    if (!Array.isArray(data)) return [];
    if ($0ab3112b8267cb1d$var$isUndefined(data[to])) data[to] = undefined;
    data.splice(to, 0, data.splice(from, 1)[0]);
    return data;
};
var $0ab3112b8267cb1d$var$prependAt = (data, value1)=>[
        ...$0ab3112b8267cb1d$var$convertToArrayPayload(value1),
        ...$0ab3112b8267cb1d$var$convertToArrayPayload(data)
    ];
function $0ab3112b8267cb1d$var$removeAtIndexes(data, indexes) {
    let i = 0;
    const temp = [
        ...data
    ];
    for (const index of indexes){
        temp.splice(index - i, 1);
        i++;
    }
    return $0ab3112b8267cb1d$var$compact(temp).length ? temp : [];
}
var $0ab3112b8267cb1d$var$removeArrayAt = (data, index)=>$0ab3112b8267cb1d$var$isUndefined(index) ? [] : $0ab3112b8267cb1d$var$removeAtIndexes(data, $0ab3112b8267cb1d$var$convertToArrayPayload(index).sort((a, b)=>a - b));
var $0ab3112b8267cb1d$var$swapArrayAt = (data, indexA, indexB)=>{
    [data[indexA], data[indexB]] = [
        data[indexB],
        data[indexA]
    ];
};
function $0ab3112b8267cb1d$var$baseGet(object, updatePath) {
    const length = updatePath.slice(0, -1).length;
    let index = 0;
    while(index < length)object = $0ab3112b8267cb1d$var$isUndefined(object) ? index++ : object[updatePath[index++]];
    return object;
}
function $0ab3112b8267cb1d$var$isEmptyArray(obj) {
    for(const key in obj){
        if (obj.hasOwnProperty(key) && !$0ab3112b8267cb1d$var$isUndefined(obj[key])) return false;
    }
    return true;
}
function $0ab3112b8267cb1d$var$unset(object, path) {
    const paths = Array.isArray(path) ? path : $0ab3112b8267cb1d$var$isKey(path) ? [
        path
    ] : $0ab3112b8267cb1d$var$stringToPath(path);
    const childObject = paths.length === 1 ? object : $0ab3112b8267cb1d$var$baseGet(object, paths);
    const index = paths.length - 1;
    const key = paths[index];
    if (childObject) delete childObject[key];
    if (index !== 0 && ($0ab3112b8267cb1d$var$isObject(childObject) && $0ab3112b8267cb1d$var$isEmptyObject(childObject) || Array.isArray(childObject) && $0ab3112b8267cb1d$var$isEmptyArray(childObject))) $0ab3112b8267cb1d$var$unset(object, paths.slice(0, -1));
    return object;
}
var $0ab3112b8267cb1d$var$updateAt = (fieldValues, index, value1)=>{
    fieldValues[index] = value1;
    return fieldValues;
};
/**
 * A custom hook that exposes convenient methods to perform operations with a list of dynamic inputs that need to be appended, updated, removed etc. • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn) • [Video](https://youtu.be/4MrbfGSFY2A)
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/usefieldarray) • [Demo](https://codesandbox.io/s/react-hook-form-usefieldarray-ssugn)
 *
 * @param props - useFieldArray props
 *
 * @returns methods - functions to manipulate with the Field Arrays (dynamic inputs) {@link UseFieldArrayReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, control, handleSubmit, reset, trigger, setError } = useForm({
 *     defaultValues: {
 *       test: []
 *     }
 *   });
 *   const { fields, append } = useFieldArray({
 *     control,
 *     name: "test"
 *   });
 *
 *   return (
 *     <form onSubmit={handleSubmit(data => console.log(data))}>
 *       {fields.map((item, index) => (
 *          <input key={item.id} {...register(`test.${index}.firstName`)}  />
 *       ))}
 *       <button type="button" onClick={() => append({ firstName: "bill" })}>
 *         append
 *       </button>
 *       <input type="submit" />
 *     </form>
 *   );
 * }
 * ```
 */ function $0ab3112b8267cb1d$export$310131896651d559(props) {
    const methods = $0ab3112b8267cb1d$export$4d957a5e1be13b03();
    const { control: control = methods.control, name: name, keyName: keyName = "id", shouldUnregister: shouldUnregister, rules: rules } = props;
    const [fields, setFields] = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useState(control._getFieldArray(name));
    const ids = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useRef(control._getFieldArray(name).map($0ab3112b8267cb1d$var$generateId));
    const _fieldIds = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useRef(fields);
    const _name = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useRef(name);
    const _actioned = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useRef(false);
    _name.current = name;
    _fieldIds.current = fields;
    control._names.array.add(name);
    rules && control.register(name, rules);
    $0ab3112b8267cb1d$var$useSubscribe({
        next: ({ values: values, name: fieldArrayName })=>{
            if (fieldArrayName === _name.current || !fieldArrayName) {
                const fieldValues = $0ab3112b8267cb1d$export$3988ae62b71be9a3(values, _name.current);
                if (Array.isArray(fieldValues)) {
                    setFields(fieldValues);
                    ids.current = fieldValues.map($0ab3112b8267cb1d$var$generateId);
                }
            }
        },
        subject: control._subjects.array
    });
    const updateValues = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useCallback((updatedFieldArrayValues)=>{
        _actioned.current = true;
        control._updateFieldArray(name, updatedFieldArrayValues);
    }, [
        control,
        name
    ]);
    const append = (value1, options)=>{
        const appendValue = $0ab3112b8267cb1d$var$convertToArrayPayload($0ab3112b8267cb1d$var$cloneObject(value1));
        const updatedFieldArrayValues = $0ab3112b8267cb1d$var$appendAt(control._getFieldArray(name), appendValue);
        control._names.focus = $0ab3112b8267cb1d$var$getFocusFieldName(name, updatedFieldArrayValues.length - 1, options);
        ids.current = $0ab3112b8267cb1d$var$appendAt(ids.current, appendValue.map($0ab3112b8267cb1d$var$generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, $0ab3112b8267cb1d$var$appendAt, {
            argA: $0ab3112b8267cb1d$var$fillEmptyArray(value1)
        });
    };
    const prepend = (value1, options)=>{
        const prependValue = $0ab3112b8267cb1d$var$convertToArrayPayload($0ab3112b8267cb1d$var$cloneObject(value1));
        const updatedFieldArrayValues = $0ab3112b8267cb1d$var$prependAt(control._getFieldArray(name), prependValue);
        control._names.focus = $0ab3112b8267cb1d$var$getFocusFieldName(name, 0, options);
        ids.current = $0ab3112b8267cb1d$var$prependAt(ids.current, prependValue.map($0ab3112b8267cb1d$var$generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, $0ab3112b8267cb1d$var$prependAt, {
            argA: $0ab3112b8267cb1d$var$fillEmptyArray(value1)
        });
    };
    const remove = (index)=>{
        const updatedFieldArrayValues = $0ab3112b8267cb1d$var$removeArrayAt(control._getFieldArray(name), index);
        ids.current = $0ab3112b8267cb1d$var$removeArrayAt(ids.current, index);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        !Array.isArray($0ab3112b8267cb1d$export$3988ae62b71be9a3(control._fields, name)) && $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(control._fields, name, undefined);
        control._updateFieldArray(name, updatedFieldArrayValues, $0ab3112b8267cb1d$var$removeArrayAt, {
            argA: index
        });
    };
    const insert$1 = (index, value1, options)=>{
        const insertValue = $0ab3112b8267cb1d$var$convertToArrayPayload($0ab3112b8267cb1d$var$cloneObject(value1));
        const updatedFieldArrayValues = $0ab3112b8267cb1d$var$insert(control._getFieldArray(name), index, insertValue);
        control._names.focus = $0ab3112b8267cb1d$var$getFocusFieldName(name, index, options);
        ids.current = $0ab3112b8267cb1d$var$insert(ids.current, index, insertValue.map($0ab3112b8267cb1d$var$generateId));
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, $0ab3112b8267cb1d$var$insert, {
            argA: index,
            argB: $0ab3112b8267cb1d$var$fillEmptyArray(value1)
        });
    };
    const swap = (indexA, indexB)=>{
        const updatedFieldArrayValues = control._getFieldArray(name);
        $0ab3112b8267cb1d$var$swapArrayAt(updatedFieldArrayValues, indexA, indexB);
        $0ab3112b8267cb1d$var$swapArrayAt(ids.current, indexA, indexB);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, $0ab3112b8267cb1d$var$swapArrayAt, {
            argA: indexA,
            argB: indexB
        }, false);
    };
    const move = (from, to)=>{
        const updatedFieldArrayValues = control._getFieldArray(name);
        $0ab3112b8267cb1d$var$moveArrayAt(updatedFieldArrayValues, from, to);
        $0ab3112b8267cb1d$var$moveArrayAt(ids.current, from, to);
        updateValues(updatedFieldArrayValues);
        setFields(updatedFieldArrayValues);
        control._updateFieldArray(name, updatedFieldArrayValues, $0ab3112b8267cb1d$var$moveArrayAt, {
            argA: from,
            argB: to
        }, false);
    };
    const update = (index, value1)=>{
        const updateValue = $0ab3112b8267cb1d$var$cloneObject(value1);
        const updatedFieldArrayValues = $0ab3112b8267cb1d$var$updateAt(control._getFieldArray(name), index, updateValue);
        ids.current = [
            ...updatedFieldArrayValues
        ].map((item, i)=>!item || i === index ? $0ab3112b8267cb1d$var$generateId() : ids.current[i]);
        updateValues(updatedFieldArrayValues);
        setFields([
            ...updatedFieldArrayValues
        ]);
        control._updateFieldArray(name, updatedFieldArrayValues, $0ab3112b8267cb1d$var$updateAt, {
            argA: index,
            argB: updateValue
        }, true, false);
    };
    const replace = (value1)=>{
        const updatedFieldArrayValues = $0ab3112b8267cb1d$var$convertToArrayPayload($0ab3112b8267cb1d$var$cloneObject(value1));
        ids.current = updatedFieldArrayValues.map($0ab3112b8267cb1d$var$generateId);
        updateValues([
            ...updatedFieldArrayValues
        ]);
        setFields([
            ...updatedFieldArrayValues
        ]);
        control._updateFieldArray(name, [
            ...updatedFieldArrayValues
        ], (data)=>data, {}, true, false);
    };
    (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useEffect(()=>{
        control._state.action = false;
        $0ab3112b8267cb1d$var$isWatched(name, control._names) && control._subjects.state.next({
            ...control._formState
        });
        if (_actioned.current && (!$0ab3112b8267cb1d$var$getValidationModes(control._options.mode).isOnSubmit || control._formState.isSubmitted)) {
            if (control._options.resolver) control._executeSchema([
                name
            ]).then((result)=>{
                const error = $0ab3112b8267cb1d$export$3988ae62b71be9a3(result.errors, name);
                const existingError = $0ab3112b8267cb1d$export$3988ae62b71be9a3(control._formState.errors, name);
                if (existingError ? !error && existingError.type || error && (existingError.type !== error.type || existingError.message !== error.message) : error && error.type) {
                    error ? $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(control._formState.errors, name, error) : $0ab3112b8267cb1d$var$unset(control._formState.errors, name);
                    control._subjects.state.next({
                        errors: control._formState.errors
                    });
                }
            });
            else {
                const field = $0ab3112b8267cb1d$export$3988ae62b71be9a3(control._fields, name);
                if (field && field._f && !($0ab3112b8267cb1d$var$getValidationModes(control._options.reValidateMode).isOnSubmit && $0ab3112b8267cb1d$var$getValidationModes(control._options.mode).isOnSubmit)) $0ab3112b8267cb1d$var$validateField(field, control._names.disabled, control._formValues, control._options.criteriaMode === $0ab3112b8267cb1d$var$VALIDATION_MODE.all, control._options.shouldUseNativeValidation, true).then((error)=>!$0ab3112b8267cb1d$var$isEmptyObject(error) && control._subjects.state.next({
                        errors: $0ab3112b8267cb1d$var$updateFieldArrayRootError(control._formState.errors, error, name)
                    }));
            }
        }
        control._subjects.values.next({
            name: name,
            values: {
                ...control._formValues
            }
        });
        control._names.focus && $0ab3112b8267cb1d$var$iterateFieldsByAction(control._fields, (ref, key)=>{
            if (control._names.focus && key.startsWith(control._names.focus) && ref.focus) {
                ref.focus();
                return 1;
            }
            return;
        });
        control._names.focus = "";
        control._updateValid();
        _actioned.current = false;
    }, [
        fields,
        name,
        control
    ]);
    (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useEffect(()=>{
        !$0ab3112b8267cb1d$export$3988ae62b71be9a3(control._formValues, name) && control._updateFieldArray(name);
        return ()=>{
            (control._options.shouldUnregister || shouldUnregister) && control.unregister(name);
        };
    }, [
        name,
        control,
        keyName,
        shouldUnregister
    ]);
    return {
        swap: (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useCallback(swap, [
            updateValues,
            name,
            control
        ]),
        move: (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useCallback(move, [
            updateValues,
            name,
            control
        ]),
        prepend: (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useCallback(prepend, [
            updateValues,
            name,
            control
        ]),
        append: (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useCallback(append, [
            updateValues,
            name,
            control
        ]),
        remove: (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useCallback(remove, [
            updateValues,
            name,
            control
        ]),
        insert: (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useCallback(insert$1, [
            updateValues,
            name,
            control
        ]),
        update: (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useCallback(update, [
            updateValues,
            name,
            control
        ]),
        replace: (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useCallback(replace, [
            updateValues,
            name,
            control
        ]),
        fields: (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useMemo(()=>fields.map((field, index)=>({
                    ...field,
                    [keyName]: ids.current[index] || $0ab3112b8267cb1d$var$generateId()
                })), [
            fields,
            keyName
        ])
    };
}
var $0ab3112b8267cb1d$var$createSubject = ()=>{
    let _observers = [];
    const next = (value1)=>{
        for (const observer of _observers)observer.next && observer.next(value1);
    };
    const subscribe = (observer)=>{
        _observers.push(observer);
        return {
            unsubscribe: ()=>{
                _observers = _observers.filter((o)=>o !== observer);
            }
        };
    };
    const unsubscribe = ()=>{
        _observers = [];
    };
    return {
        get observers () {
            return _observers;
        },
        next: next,
        subscribe: subscribe,
        unsubscribe: unsubscribe
    };
};
var $0ab3112b8267cb1d$var$isPrimitive = (value1)=>$0ab3112b8267cb1d$var$isNullOrUndefined(value1) || !$0ab3112b8267cb1d$var$isObjectType(value1);
function $0ab3112b8267cb1d$var$deepEqual(object1, object2) {
    if ($0ab3112b8267cb1d$var$isPrimitive(object1) || $0ab3112b8267cb1d$var$isPrimitive(object2)) return object1 === object2;
    if ($0ab3112b8267cb1d$var$isDateObject(object1) && $0ab3112b8267cb1d$var$isDateObject(object2)) return object1.getTime() === object2.getTime();
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) return false;
    for (const key of keys1){
        const val1 = object1[key];
        if (!keys2.includes(key)) return false;
        if (key !== "ref") {
            const val2 = object2[key];
            if ($0ab3112b8267cb1d$var$isDateObject(val1) && $0ab3112b8267cb1d$var$isDateObject(val2) || $0ab3112b8267cb1d$var$isObject(val1) && $0ab3112b8267cb1d$var$isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !$0ab3112b8267cb1d$var$deepEqual(val1, val2) : val1 !== val2) return false;
        }
    }
    return true;
}
var $0ab3112b8267cb1d$var$isMultipleSelect = (element)=>element.type === `select-multiple`;
var $0ab3112b8267cb1d$var$isRadioOrCheckbox = (ref)=>$0ab3112b8267cb1d$var$isRadioInput(ref) || $0ab3112b8267cb1d$var$isCheckBoxInput(ref);
var $0ab3112b8267cb1d$var$live = (ref)=>$0ab3112b8267cb1d$var$isHTMLElement(ref) && ref.isConnected;
var $0ab3112b8267cb1d$var$objectHasFunction = (data)=>{
    for(const key in data){
        if ($0ab3112b8267cb1d$var$isFunction(data[key])) return true;
    }
    return false;
};
function $0ab3112b8267cb1d$var$markFieldsDirty(data, fields = {}) {
    const isParentNodeArray = Array.isArray(data);
    if ($0ab3112b8267cb1d$var$isObject(data) || isParentNodeArray) for(const key in data){
        if (Array.isArray(data[key]) || $0ab3112b8267cb1d$var$isObject(data[key]) && !$0ab3112b8267cb1d$var$objectHasFunction(data[key])) {
            fields[key] = Array.isArray(data[key]) ? [] : {};
            $0ab3112b8267cb1d$var$markFieldsDirty(data[key], fields[key]);
        } else if (!$0ab3112b8267cb1d$var$isNullOrUndefined(data[key])) fields[key] = true;
    }
    return fields;
}
function $0ab3112b8267cb1d$var$getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
    const isParentNodeArray = Array.isArray(data);
    if ($0ab3112b8267cb1d$var$isObject(data) || isParentNodeArray) {
        for(const key in data)if (Array.isArray(data[key]) || $0ab3112b8267cb1d$var$isObject(data[key]) && !$0ab3112b8267cb1d$var$objectHasFunction(data[key])) {
            if ($0ab3112b8267cb1d$var$isUndefined(formValues) || $0ab3112b8267cb1d$var$isPrimitive(dirtyFieldsFromValues[key])) dirtyFieldsFromValues[key] = Array.isArray(data[key]) ? $0ab3112b8267cb1d$var$markFieldsDirty(data[key], []) : {
                ...$0ab3112b8267cb1d$var$markFieldsDirty(data[key])
            };
            else $0ab3112b8267cb1d$var$getDirtyFieldsFromDefaultValues(data[key], $0ab3112b8267cb1d$var$isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
        } else dirtyFieldsFromValues[key] = !$0ab3112b8267cb1d$var$deepEqual(data[key], formValues[key]);
    }
    return dirtyFieldsFromValues;
}
var $0ab3112b8267cb1d$var$getDirtyFields = (defaultValues, formValues)=>$0ab3112b8267cb1d$var$getDirtyFieldsFromDefaultValues(defaultValues, formValues, $0ab3112b8267cb1d$var$markFieldsDirty(formValues));
var $0ab3112b8267cb1d$var$getFieldValueAs = (value1, { valueAsNumber: valueAsNumber, valueAsDate: valueAsDate, setValueAs: setValueAs })=>$0ab3112b8267cb1d$var$isUndefined(value1) ? value1 : valueAsNumber ? value1 === "" ? NaN : value1 ? +value1 : value1 : valueAsDate && $0ab3112b8267cb1d$var$isString(value1) ? new Date(value1) : setValueAs ? setValueAs(value1) : value1;
function $0ab3112b8267cb1d$var$getFieldValue(_f) {
    const ref = _f.ref;
    if ($0ab3112b8267cb1d$var$isFileInput(ref)) return ref.files;
    if ($0ab3112b8267cb1d$var$isRadioInput(ref)) return $0ab3112b8267cb1d$var$getRadioValue(_f.refs).value;
    if ($0ab3112b8267cb1d$var$isMultipleSelect(ref)) return [
        ...ref.selectedOptions
    ].map(({ value: value1 })=>value1);
    if ($0ab3112b8267cb1d$var$isCheckBoxInput(ref)) return $0ab3112b8267cb1d$var$getCheckboxValue(_f.refs).value;
    return $0ab3112b8267cb1d$var$getFieldValueAs($0ab3112b8267cb1d$var$isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var $0ab3112b8267cb1d$var$getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation)=>{
    const fields = {};
    for (const name of fieldsNames){
        const field = $0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, name);
        field && $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(fields, name, field._f);
    }
    return {
        criteriaMode: criteriaMode,
        names: [
            ...fieldsNames
        ],
        fields: fields,
        shouldUseNativeValidation: shouldUseNativeValidation
    };
};
var $0ab3112b8267cb1d$var$getRuleValue = (rule)=>$0ab3112b8267cb1d$var$isUndefined(rule) ? rule : $0ab3112b8267cb1d$var$isRegex(rule) ? rule.source : $0ab3112b8267cb1d$var$isObject(rule) ? $0ab3112b8267cb1d$var$isRegex(rule.value) ? rule.value.source : rule.value : rule;
const $0ab3112b8267cb1d$var$ASYNC_FUNCTION = "AsyncFunction";
var $0ab3112b8267cb1d$var$hasPromiseValidation = (fieldReference)=>!!fieldReference && !!fieldReference.validate && !!($0ab3112b8267cb1d$var$isFunction(fieldReference.validate) && fieldReference.validate.constructor.name === $0ab3112b8267cb1d$var$ASYNC_FUNCTION || $0ab3112b8267cb1d$var$isObject(fieldReference.validate) && Object.values(fieldReference.validate).find((validateFunction)=>validateFunction.constructor.name === $0ab3112b8267cb1d$var$ASYNC_FUNCTION));
var $0ab3112b8267cb1d$var$hasValidation = (options)=>options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
function $0ab3112b8267cb1d$var$schemaErrorLookup(errors, _fields, name) {
    const error = $0ab3112b8267cb1d$export$3988ae62b71be9a3(errors, name);
    if (error || $0ab3112b8267cb1d$var$isKey(name)) return {
        error: error,
        name: name
    };
    const names = name.split(".");
    while(names.length){
        const fieldName = names.join(".");
        const field = $0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, fieldName);
        const foundError = $0ab3112b8267cb1d$export$3988ae62b71be9a3(errors, fieldName);
        if (field && !Array.isArray(field) && name !== fieldName) return {
            name: name
        };
        if (foundError && foundError.type) return {
            name: fieldName,
            error: foundError
        };
        names.pop();
    }
    return {
        name: name
    };
}
var $0ab3112b8267cb1d$var$skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode)=>{
    if (mode.isOnAll) return false;
    else if (!isSubmitted && mode.isOnTouch) return !(isTouched || isBlurEvent);
    else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) return !isBlurEvent;
    else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) return isBlurEvent;
    return true;
};
var $0ab3112b8267cb1d$var$unsetEmptyArray = (ref, name)=>!$0ab3112b8267cb1d$var$compact($0ab3112b8267cb1d$export$3988ae62b71be9a3(ref, name)).length && $0ab3112b8267cb1d$var$unset(ref, name);
const $0ab3112b8267cb1d$var$defaultOptions = {
    mode: $0ab3112b8267cb1d$var$VALIDATION_MODE.onSubmit,
    reValidateMode: $0ab3112b8267cb1d$var$VALIDATION_MODE.onChange,
    shouldFocusError: true
};
function $0ab3112b8267cb1d$var$createFormControl(props = {}) {
    let _options = {
        ...$0ab3112b8267cb1d$var$defaultOptions,
        ...props
    };
    let _formState = {
        submitCount: 0,
        isDirty: false,
        isLoading: $0ab3112b8267cb1d$var$isFunction(_options.defaultValues),
        isValidating: false,
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        touchedFields: {},
        dirtyFields: {},
        validatingFields: {},
        errors: _options.errors || {},
        disabled: _options.disabled || false
    };
    let _fields = {};
    let _defaultValues = $0ab3112b8267cb1d$var$isObject(_options.defaultValues) || $0ab3112b8267cb1d$var$isObject(_options.values) ? $0ab3112b8267cb1d$var$cloneObject(_options.defaultValues || _options.values) || {} : {};
    let _formValues = _options.shouldUnregister ? {} : $0ab3112b8267cb1d$var$cloneObject(_defaultValues);
    let _state = {
        action: false,
        mount: false,
        watch: false
    };
    let _names = {
        mount: new Set(),
        disabled: new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set()
    };
    let delayErrorCallback;
    let timer = 0;
    const _proxyFormState = {
        isDirty: false,
        dirtyFields: false,
        validatingFields: false,
        touchedFields: false,
        isValidating: false,
        isValid: false,
        errors: false
    };
    const _subjects = {
        values: $0ab3112b8267cb1d$var$createSubject(),
        array: $0ab3112b8267cb1d$var$createSubject(),
        state: $0ab3112b8267cb1d$var$createSubject()
    };
    const validationModeBeforeSubmit = $0ab3112b8267cb1d$var$getValidationModes(_options.mode);
    const validationModeAfterSubmit = $0ab3112b8267cb1d$var$getValidationModes(_options.reValidateMode);
    const shouldDisplayAllAssociatedErrors = _options.criteriaMode === $0ab3112b8267cb1d$var$VALIDATION_MODE.all;
    const debounce = (callback)=>(wait)=>{
            clearTimeout(timer);
            timer = setTimeout(callback, wait);
        };
    const _updateValid = async (shouldUpdateValid)=>{
        if (!_options.disabled && (_proxyFormState.isValid || shouldUpdateValid)) {
            const isValid = _options.resolver ? $0ab3112b8267cb1d$var$isEmptyObject((await _executeSchema()).errors) : await executeBuiltInValidation(_fields, true);
            if (isValid !== _formState.isValid) _subjects.state.next({
                isValid: isValid
            });
        }
    };
    const _updateIsValidating = (names, isValidating)=>{
        if (!_options.disabled && (_proxyFormState.isValidating || _proxyFormState.validatingFields)) {
            (names || Array.from(_names.mount)).forEach((name)=>{
                if (name) isValidating ? $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_formState.validatingFields, name, isValidating) : $0ab3112b8267cb1d$var$unset(_formState.validatingFields, name);
            });
            _subjects.state.next({
                validatingFields: _formState.validatingFields,
                isValidating: !$0ab3112b8267cb1d$var$isEmptyObject(_formState.validatingFields)
            });
        }
    };
    const _updateFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true)=>{
        if (args && method && !_options.disabled) {
            _state.action = true;
            if (shouldUpdateFieldsAndState && Array.isArray($0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, name))) {
                const fieldValues = method($0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, name), args.argA, args.argB);
                shouldSetValues && $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_fields, name, fieldValues);
            }
            if (shouldUpdateFieldsAndState && Array.isArray($0ab3112b8267cb1d$export$3988ae62b71be9a3(_formState.errors, name))) {
                const errors = method($0ab3112b8267cb1d$export$3988ae62b71be9a3(_formState.errors, name), args.argA, args.argB);
                shouldSetValues && $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_formState.errors, name, errors);
                $0ab3112b8267cb1d$var$unsetEmptyArray(_formState.errors, name);
            }
            if (_proxyFormState.touchedFields && shouldUpdateFieldsAndState && Array.isArray($0ab3112b8267cb1d$export$3988ae62b71be9a3(_formState.touchedFields, name))) {
                const touchedFields = method($0ab3112b8267cb1d$export$3988ae62b71be9a3(_formState.touchedFields, name), args.argA, args.argB);
                shouldSetValues && $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_formState.touchedFields, name, touchedFields);
            }
            if (_proxyFormState.dirtyFields) _formState.dirtyFields = $0ab3112b8267cb1d$var$getDirtyFields(_defaultValues, _formValues);
            _subjects.state.next({
                name: name,
                isDirty: _getDirty(name, values),
                dirtyFields: _formState.dirtyFields,
                errors: _formState.errors,
                isValid: _formState.isValid
            });
        } else $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_formValues, name, values);
    };
    const updateErrors = (name, error)=>{
        $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_formState.errors, name, error);
        _subjects.state.next({
            errors: _formState.errors
        });
    };
    const _setErrors = (errors)=>{
        _formState.errors = errors;
        _subjects.state.next({
            errors: _formState.errors,
            isValid: false
        });
    };
    const updateValidAndValue = (name, shouldSkipSetValueAs, value1, ref)=>{
        const field = $0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, name);
        if (field) {
            const defaultValue = $0ab3112b8267cb1d$export$3988ae62b71be9a3(_formValues, name, $0ab3112b8267cb1d$var$isUndefined(value1) ? $0ab3112b8267cb1d$export$3988ae62b71be9a3(_defaultValues, name) : value1);
            $0ab3112b8267cb1d$var$isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_formValues, name, shouldSkipSetValueAs ? defaultValue : $0ab3112b8267cb1d$var$getFieldValue(field._f)) : setFieldValue(name, defaultValue);
            _state.mount && _updateValid();
        }
    };
    const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender)=>{
        let shouldUpdateField = false;
        let isPreviousDirty = false;
        const output = {
            name: name
        };
        if (!_options.disabled) {
            const disabledField = !!($0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, name) && $0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, name)._f && $0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, name)._f.disabled);
            if (!isBlurEvent || shouldDirty) {
                if (_proxyFormState.isDirty) {
                    isPreviousDirty = _formState.isDirty;
                    _formState.isDirty = output.isDirty = _getDirty();
                    shouldUpdateField = isPreviousDirty !== output.isDirty;
                }
                const isCurrentFieldPristine = disabledField || $0ab3112b8267cb1d$var$deepEqual($0ab3112b8267cb1d$export$3988ae62b71be9a3(_defaultValues, name), fieldValue);
                isPreviousDirty = !!(!disabledField && $0ab3112b8267cb1d$export$3988ae62b71be9a3(_formState.dirtyFields, name));
                isCurrentFieldPristine || disabledField ? $0ab3112b8267cb1d$var$unset(_formState.dirtyFields, name) : $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_formState.dirtyFields, name, true);
                output.dirtyFields = _formState.dirtyFields;
                shouldUpdateField = shouldUpdateField || _proxyFormState.dirtyFields && isPreviousDirty !== !isCurrentFieldPristine;
            }
            if (isBlurEvent) {
                const isPreviousFieldTouched = $0ab3112b8267cb1d$export$3988ae62b71be9a3(_formState.touchedFields, name);
                if (!isPreviousFieldTouched) {
                    $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_formState.touchedFields, name, isBlurEvent);
                    output.touchedFields = _formState.touchedFields;
                    shouldUpdateField = shouldUpdateField || _proxyFormState.touchedFields && isPreviousFieldTouched !== isBlurEvent;
                }
            }
            shouldUpdateField && shouldRender && _subjects.state.next(output);
        }
        return shouldUpdateField ? output : {};
    };
    const shouldRenderByError = (name, isValid, error, fieldState)=>{
        const previousFieldError = $0ab3112b8267cb1d$export$3988ae62b71be9a3(_formState.errors, name);
        const shouldUpdateValid = _proxyFormState.isValid && $0ab3112b8267cb1d$var$isBoolean(isValid) && _formState.isValid !== isValid;
        if (_options.delayError && error) {
            delayErrorCallback = debounce(()=>updateErrors(name, error));
            delayErrorCallback(_options.delayError);
        } else {
            clearTimeout(timer);
            delayErrorCallback = null;
            error ? $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_formState.errors, name, error) : $0ab3112b8267cb1d$var$unset(_formState.errors, name);
        }
        if ((error ? !$0ab3112b8267cb1d$var$deepEqual(previousFieldError, error) : previousFieldError) || !$0ab3112b8267cb1d$var$isEmptyObject(fieldState) || shouldUpdateValid) {
            const updatedFormState = {
                ...fieldState,
                ...shouldUpdateValid && $0ab3112b8267cb1d$var$isBoolean(isValid) ? {
                    isValid: isValid
                } : {},
                errors: _formState.errors,
                name: name
            };
            _formState = {
                ..._formState,
                ...updatedFormState
            };
            _subjects.state.next(updatedFormState);
        }
    };
    const _executeSchema = async (name)=>{
        _updateIsValidating(name, true);
        const result = await _options.resolver(_formValues, _options.context, $0ab3112b8267cb1d$var$getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
        _updateIsValidating(name);
        return result;
    };
    const executeSchemaAndUpdateState = async (names)=>{
        const { errors: errors } = await _executeSchema(names);
        if (names) for (const name of names){
            const error = $0ab3112b8267cb1d$export$3988ae62b71be9a3(errors, name);
            error ? $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_formState.errors, name, error) : $0ab3112b8267cb1d$var$unset(_formState.errors, name);
        }
        else _formState.errors = errors;
        return errors;
    };
    const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
        valid: true
    })=>{
        for(const name in fields){
            const field = fields[name];
            if (field) {
                const { _f: _f, ...fieldValue } = field;
                if (_f) {
                    const isFieldArrayRoot = _names.array.has(_f.name);
                    const isPromiseFunction = field._f && $0ab3112b8267cb1d$var$hasPromiseValidation(field._f);
                    if (isPromiseFunction && _proxyFormState.validatingFields) _updateIsValidating([
                        name
                    ], true);
                    const fieldError = await $0ab3112b8267cb1d$var$validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
                    if (isPromiseFunction && _proxyFormState.validatingFields) _updateIsValidating([
                        name
                    ]);
                    if (fieldError[_f.name]) {
                        context.valid = false;
                        if (shouldOnlyCheckValid) break;
                    }
                    !shouldOnlyCheckValid && ($0ab3112b8267cb1d$export$3988ae62b71be9a3(fieldError, _f.name) ? isFieldArrayRoot ? $0ab3112b8267cb1d$var$updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_formState.errors, _f.name, fieldError[_f.name]) : $0ab3112b8267cb1d$var$unset(_formState.errors, _f.name));
                }
                !$0ab3112b8267cb1d$var$isEmptyObject(fieldValue) && await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context);
            }
        }
        return context.valid;
    };
    const _removeUnmounted = ()=>{
        for (const name of _names.unMount){
            const field = $0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, name);
            field && (field._f.refs ? field._f.refs.every((ref)=>!$0ab3112b8267cb1d$var$live(ref)) : !$0ab3112b8267cb1d$var$live(field._f.ref)) && unregister(name);
        }
        _names.unMount = new Set();
    };
    const _getDirty = (name, data)=>!_options.disabled && (name && data && $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_formValues, name, data), !$0ab3112b8267cb1d$var$deepEqual(getValues(), _defaultValues));
    const _getWatch = (names, defaultValue, isGlobal)=>$0ab3112b8267cb1d$var$generateWatchOutput(names, _names, {
            ..._state.mount ? _formValues : $0ab3112b8267cb1d$var$isUndefined(defaultValue) ? _defaultValues : $0ab3112b8267cb1d$var$isString(names) ? {
                [names]: defaultValue
            } : defaultValue
        }, isGlobal, defaultValue);
    const _getFieldArray = (name)=>$0ab3112b8267cb1d$var$compact($0ab3112b8267cb1d$export$3988ae62b71be9a3(_state.mount ? _formValues : _defaultValues, name, _options.shouldUnregister ? $0ab3112b8267cb1d$export$3988ae62b71be9a3(_defaultValues, name, []) : []));
    const setFieldValue = (name, value1, options = {})=>{
        const field = $0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, name);
        let fieldValue = value1;
        if (field) {
            const fieldReference = field._f;
            if (fieldReference) {
                !fieldReference.disabled && $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_formValues, name, $0ab3112b8267cb1d$var$getFieldValueAs(value1, fieldReference));
                fieldValue = $0ab3112b8267cb1d$var$isHTMLElement(fieldReference.ref) && $0ab3112b8267cb1d$var$isNullOrUndefined(value1) ? "" : value1;
                if ($0ab3112b8267cb1d$var$isMultipleSelect(fieldReference.ref)) [
                    ...fieldReference.ref.options
                ].forEach((optionRef)=>optionRef.selected = fieldValue.includes(optionRef.value));
                else if (fieldReference.refs) {
                    if ($0ab3112b8267cb1d$var$isCheckBoxInput(fieldReference.ref)) fieldReference.refs.length > 1 ? fieldReference.refs.forEach((checkboxRef)=>(!checkboxRef.defaultChecked || !checkboxRef.disabled) && (checkboxRef.checked = Array.isArray(fieldValue) ? !!fieldValue.find((data)=>data === checkboxRef.value) : fieldValue === checkboxRef.value)) : fieldReference.refs[0] && (fieldReference.refs[0].checked = !!fieldValue);
                    else fieldReference.refs.forEach((radioRef)=>radioRef.checked = radioRef.value === fieldValue);
                } else if ($0ab3112b8267cb1d$var$isFileInput(fieldReference.ref)) fieldReference.ref.value = "";
                else {
                    fieldReference.ref.value = fieldValue;
                    if (!fieldReference.ref.type) _subjects.values.next({
                        name: name,
                        values: {
                            ..._formValues
                        }
                    });
                }
            }
        }
        (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
        options.shouldValidate && trigger(name);
    };
    const setValues = (name, value1, options)=>{
        for(const fieldKey in value1){
            const fieldValue = value1[fieldKey];
            const fieldName = `${name}.${fieldKey}`;
            const field = $0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, fieldName);
            (_names.array.has(name) || $0ab3112b8267cb1d$var$isObject(fieldValue) || field && !field._f) && !$0ab3112b8267cb1d$var$isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
        }
    };
    const setValue = (name, value1, options = {})=>{
        const field = $0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, name);
        const isFieldArray = _names.array.has(name);
        const cloneValue = $0ab3112b8267cb1d$var$cloneObject(value1);
        $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_formValues, name, cloneValue);
        if (isFieldArray) {
            _subjects.array.next({
                name: name,
                values: {
                    ..._formValues
                }
            });
            if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields) && options.shouldDirty) _subjects.state.next({
                name: name,
                dirtyFields: $0ab3112b8267cb1d$var$getDirtyFields(_defaultValues, _formValues),
                isDirty: _getDirty(name, cloneValue)
            });
        } else field && !field._f && !$0ab3112b8267cb1d$var$isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
        $0ab3112b8267cb1d$var$isWatched(name, _names) && _subjects.state.next({
            ..._formState
        });
        _subjects.values.next({
            name: _state.mount ? name : undefined,
            values: {
                ..._formValues
            }
        });
    };
    const onChange = async (event)=>{
        _state.mount = true;
        const target = event.target;
        let name = target.name;
        let isFieldValueUpdated = true;
        const field = $0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, name);
        const getCurrentFieldValue = ()=>target.type ? $0ab3112b8267cb1d$var$getFieldValue(field._f) : $0ab3112b8267cb1d$var$getEventValue(event);
        const _updateIsFieldValueUpdated = (fieldValue)=>{
            isFieldValueUpdated = Number.isNaN(fieldValue) || $0ab3112b8267cb1d$var$isDateObject(fieldValue) && isNaN(fieldValue.getTime()) || $0ab3112b8267cb1d$var$deepEqual(fieldValue, $0ab3112b8267cb1d$export$3988ae62b71be9a3(_formValues, name, fieldValue));
        };
        if (field) {
            let error;
            let isValid;
            const fieldValue = getCurrentFieldValue();
            const isBlurEvent = event.type === $0ab3112b8267cb1d$var$EVENTS.BLUR || event.type === $0ab3112b8267cb1d$var$EVENTS.FOCUS_OUT;
            const shouldSkipValidation = !$0ab3112b8267cb1d$var$hasValidation(field._f) && !_options.resolver && !$0ab3112b8267cb1d$export$3988ae62b71be9a3(_formState.errors, name) && !field._f.deps || $0ab3112b8267cb1d$var$skipValidation(isBlurEvent, $0ab3112b8267cb1d$export$3988ae62b71be9a3(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
            const watched = $0ab3112b8267cb1d$var$isWatched(name, _names, isBlurEvent);
            $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_formValues, name, fieldValue);
            if (isBlurEvent) {
                field._f.onBlur && field._f.onBlur(event);
                delayErrorCallback && delayErrorCallback(0);
            } else if (field._f.onChange) field._f.onChange(event);
            const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent, false);
            const shouldRender = !$0ab3112b8267cb1d$var$isEmptyObject(fieldState) || watched;
            !isBlurEvent && _subjects.values.next({
                name: name,
                type: event.type,
                values: {
                    ..._formValues
                }
            });
            if (shouldSkipValidation) {
                if (_proxyFormState.isValid) {
                    if (_options.mode === "onBlur" && isBlurEvent) _updateValid();
                    else if (!isBlurEvent) _updateValid();
                }
                return shouldRender && _subjects.state.next({
                    name: name,
                    ...watched ? {} : fieldState
                });
            }
            !isBlurEvent && watched && _subjects.state.next({
                ..._formState
            });
            if (_options.resolver) {
                const { errors: errors } = await _executeSchema([
                    name
                ]);
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    const previousErrorLookupResult = $0ab3112b8267cb1d$var$schemaErrorLookup(_formState.errors, _fields, name);
                    const errorLookupResult = $0ab3112b8267cb1d$var$schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
                    error = errorLookupResult.error;
                    name = errorLookupResult.name;
                    isValid = $0ab3112b8267cb1d$var$isEmptyObject(errors);
                }
            } else {
                _updateIsValidating([
                    name
                ], true);
                error = (await $0ab3112b8267cb1d$var$validateField(field, _names.disabled, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
                _updateIsValidating([
                    name
                ]);
                _updateIsFieldValueUpdated(fieldValue);
                if (isFieldValueUpdated) {
                    if (error) isValid = false;
                    else if (_proxyFormState.isValid) isValid = await executeBuiltInValidation(_fields, true);
                }
            }
            if (isFieldValueUpdated) {
                field._f.deps && trigger(field._f.deps);
                shouldRenderByError(name, isValid, error, fieldState);
            }
        }
    };
    const _focusInput = (ref, key)=>{
        if ($0ab3112b8267cb1d$export$3988ae62b71be9a3(_formState.errors, key) && ref.focus) {
            ref.focus();
            return 1;
        }
        return;
    };
    const trigger = async (name, options = {})=>{
        let isValid;
        let validationResult;
        const fieldNames = $0ab3112b8267cb1d$var$convertToArrayPayload(name);
        if (_options.resolver) {
            const errors = await executeSchemaAndUpdateState($0ab3112b8267cb1d$var$isUndefined(name) ? name : fieldNames);
            isValid = $0ab3112b8267cb1d$var$isEmptyObject(errors);
            validationResult = name ? !fieldNames.some((name)=>$0ab3112b8267cb1d$export$3988ae62b71be9a3(errors, name)) : isValid;
        } else if (name) {
            validationResult = (await Promise.all(fieldNames.map(async (fieldName)=>{
                const field = $0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, fieldName);
                return await executeBuiltInValidation(field && field._f ? {
                    [fieldName]: field
                } : field);
            }))).every(Boolean);
            !(!validationResult && !_formState.isValid) && _updateValid();
        } else validationResult = isValid = await executeBuiltInValidation(_fields);
        _subjects.state.next({
            ...!$0ab3112b8267cb1d$var$isString(name) || _proxyFormState.isValid && isValid !== _formState.isValid ? {} : {
                name: name
            },
            ..._options.resolver || !name ? {
                isValid: isValid
            } : {},
            errors: _formState.errors
        });
        options.shouldFocus && !validationResult && $0ab3112b8267cb1d$var$iterateFieldsByAction(_fields, _focusInput, name ? fieldNames : _names.mount);
        return validationResult;
    };
    const getValues = (fieldNames)=>{
        const values = {
            ..._state.mount ? _formValues : _defaultValues
        };
        return $0ab3112b8267cb1d$var$isUndefined(fieldNames) ? values : $0ab3112b8267cb1d$var$isString(fieldNames) ? $0ab3112b8267cb1d$export$3988ae62b71be9a3(values, fieldNames) : fieldNames.map((name)=>$0ab3112b8267cb1d$export$3988ae62b71be9a3(values, name));
    };
    const getFieldState = (name, formState)=>({
            invalid: !!$0ab3112b8267cb1d$export$3988ae62b71be9a3((formState || _formState).errors, name),
            isDirty: !!$0ab3112b8267cb1d$export$3988ae62b71be9a3((formState || _formState).dirtyFields, name),
            error: $0ab3112b8267cb1d$export$3988ae62b71be9a3((formState || _formState).errors, name),
            isValidating: !!$0ab3112b8267cb1d$export$3988ae62b71be9a3(_formState.validatingFields, name),
            isTouched: !!$0ab3112b8267cb1d$export$3988ae62b71be9a3((formState || _formState).touchedFields, name)
        });
    const clearErrors = (name)=>{
        name && $0ab3112b8267cb1d$var$convertToArrayPayload(name).forEach((inputName)=>$0ab3112b8267cb1d$var$unset(_formState.errors, inputName));
        _subjects.state.next({
            errors: name ? _formState.errors : {}
        });
    };
    const setError = (name, error, options)=>{
        const ref = ($0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, name, {
            _f: {}
        })._f || {}).ref;
        const currentError = $0ab3112b8267cb1d$export$3988ae62b71be9a3(_formState.errors, name) || {};
        // Don't override existing error messages elsewhere in the object tree.
        const { ref: currentRef, message: message, type: type, ...restOfErrorTree } = currentError;
        $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_formState.errors, name, {
            ...restOfErrorTree,
            ...error,
            ref: ref
        });
        _subjects.state.next({
            name: name,
            errors: _formState.errors,
            isValid: false
        });
        options && options.shouldFocus && ref && ref.focus && ref.focus();
    };
    const watch = (name, defaultValue)=>$0ab3112b8267cb1d$var$isFunction(name) ? _subjects.values.subscribe({
            next: (payload)=>name(_getWatch(undefined, defaultValue), payload)
        }) : _getWatch(name, defaultValue, true);
    const unregister = (name, options = {})=>{
        for (const fieldName of name ? $0ab3112b8267cb1d$var$convertToArrayPayload(name) : _names.mount){
            _names.mount.delete(fieldName);
            _names.array.delete(fieldName);
            if (!options.keepValue) {
                $0ab3112b8267cb1d$var$unset(_fields, fieldName);
                $0ab3112b8267cb1d$var$unset(_formValues, fieldName);
            }
            !options.keepError && $0ab3112b8267cb1d$var$unset(_formState.errors, fieldName);
            !options.keepDirty && $0ab3112b8267cb1d$var$unset(_formState.dirtyFields, fieldName);
            !options.keepTouched && $0ab3112b8267cb1d$var$unset(_formState.touchedFields, fieldName);
            !options.keepIsValidating && $0ab3112b8267cb1d$var$unset(_formState.validatingFields, fieldName);
            !_options.shouldUnregister && !options.keepDefaultValue && $0ab3112b8267cb1d$var$unset(_defaultValues, fieldName);
        }
        _subjects.values.next({
            values: {
                ..._formValues
            }
        });
        _subjects.state.next({
            ..._formState,
            ...!options.keepDirty ? {} : {
                isDirty: _getDirty()
            }
        });
        !options.keepIsValid && _updateValid();
    };
    const _updateDisabledField = ({ disabled: disabled, name: name, field: field, fields: fields })=>{
        if ($0ab3112b8267cb1d$var$isBoolean(disabled) && _state.mount || !!disabled || _names.disabled.has(name)) {
            disabled ? _names.disabled.add(name) : _names.disabled.delete(name);
            updateTouchAndDirty(name, $0ab3112b8267cb1d$var$getFieldValue(field ? field._f : $0ab3112b8267cb1d$export$3988ae62b71be9a3(fields, name)._f), false, false, true);
        }
    };
    const register = (name, options = {})=>{
        let field = $0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, name);
        const disabledIsDefined = $0ab3112b8267cb1d$var$isBoolean(options.disabled) || $0ab3112b8267cb1d$var$isBoolean(_options.disabled);
        $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_fields, name, {
            ...field || {},
            _f: {
                ...field && field._f ? field._f : {
                    ref: {
                        name: name
                    }
                },
                name: name,
                mount: true,
                ...options
            }
        });
        _names.mount.add(name);
        if (field) _updateDisabledField({
            field: field,
            disabled: $0ab3112b8267cb1d$var$isBoolean(options.disabled) ? options.disabled : _options.disabled,
            name: name
        });
        else updateValidAndValue(name, true, options.value);
        return {
            ...disabledIsDefined ? {
                disabled: options.disabled || _options.disabled
            } : {},
            ..._options.progressive ? {
                required: !!options.required,
                min: $0ab3112b8267cb1d$var$getRuleValue(options.min),
                max: $0ab3112b8267cb1d$var$getRuleValue(options.max),
                minLength: $0ab3112b8267cb1d$var$getRuleValue(options.minLength),
                maxLength: $0ab3112b8267cb1d$var$getRuleValue(options.maxLength),
                pattern: $0ab3112b8267cb1d$var$getRuleValue(options.pattern)
            } : {},
            name: name,
            onChange: onChange,
            onBlur: onChange,
            ref: (ref)=>{
                if (ref) {
                    register(name, options);
                    field = $0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, name);
                    const fieldRef = $0ab3112b8267cb1d$var$isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll("input,select,textarea")[0] || ref : ref : ref;
                    const radioOrCheckbox = $0ab3112b8267cb1d$var$isRadioOrCheckbox(fieldRef);
                    const refs = field._f.refs || [];
                    if (radioOrCheckbox ? refs.find((option)=>option === fieldRef) : fieldRef === field._f.ref) return;
                    $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_fields, name, {
                        _f: {
                            ...field._f,
                            ...radioOrCheckbox ? {
                                refs: [
                                    ...refs.filter($0ab3112b8267cb1d$var$live),
                                    fieldRef,
                                    ...Array.isArray($0ab3112b8267cb1d$export$3988ae62b71be9a3(_defaultValues, name)) ? [
                                        {}
                                    ] : []
                                ],
                                ref: {
                                    type: fieldRef.type,
                                    name: name
                                }
                            } : {
                                ref: fieldRef
                            }
                        }
                    });
                    updateValidAndValue(name, false, undefined, fieldRef);
                } else {
                    field = $0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, name, {});
                    if (field._f) field._f.mount = false;
                    (_options.shouldUnregister || options.shouldUnregister) && !($0ab3112b8267cb1d$var$isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
                }
            }
        };
    };
    const _focusError = ()=>_options.shouldFocusError && $0ab3112b8267cb1d$var$iterateFieldsByAction(_fields, _focusInput, _names.mount);
    const _disableForm = (disabled)=>{
        if ($0ab3112b8267cb1d$var$isBoolean(disabled)) {
            _subjects.state.next({
                disabled: disabled
            });
            $0ab3112b8267cb1d$var$iterateFieldsByAction(_fields, (ref, name)=>{
                const currentField = $0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, name);
                if (currentField) {
                    ref.disabled = currentField._f.disabled || disabled;
                    if (Array.isArray(currentField._f.refs)) currentField._f.refs.forEach((inputRef)=>{
                        inputRef.disabled = currentField._f.disabled || disabled;
                    });
                }
            }, 0, false);
        }
    };
    const handleSubmit = (onValid, onInvalid)=>async (e)=>{
            let onValidError = undefined;
            if (e) {
                e.preventDefault && e.preventDefault();
                e.persist && e.persist();
            }
            let fieldValues = $0ab3112b8267cb1d$var$cloneObject(_formValues);
            if (_names.disabled.size) for (const name of _names.disabled)$0ab3112b8267cb1d$export$adaa4cf7ef1b65be(fieldValues, name, undefined);
            _subjects.state.next({
                isSubmitting: true
            });
            if (_options.resolver) {
                const { errors: errors, values: values } = await _executeSchema();
                _formState.errors = errors;
                fieldValues = values;
            } else await executeBuiltInValidation(_fields);
            $0ab3112b8267cb1d$var$unset(_formState.errors, "root");
            if ($0ab3112b8267cb1d$var$isEmptyObject(_formState.errors)) {
                _subjects.state.next({
                    errors: {}
                });
                try {
                    await onValid(fieldValues, e);
                } catch (error) {
                    onValidError = error;
                }
            } else {
                if (onInvalid) await onInvalid({
                    ..._formState.errors
                }, e);
                _focusError();
                setTimeout(_focusError);
            }
            _subjects.state.next({
                isSubmitted: true,
                isSubmitting: false,
                isSubmitSuccessful: $0ab3112b8267cb1d$var$isEmptyObject(_formState.errors) && !onValidError,
                submitCount: _formState.submitCount + 1,
                errors: _formState.errors
            });
            if (onValidError) throw onValidError;
        };
    const resetField = (name, options = {})=>{
        if ($0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, name)) {
            if ($0ab3112b8267cb1d$var$isUndefined(options.defaultValue)) setValue(name, $0ab3112b8267cb1d$var$cloneObject($0ab3112b8267cb1d$export$3988ae62b71be9a3(_defaultValues, name)));
            else {
                setValue(name, options.defaultValue);
                $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(_defaultValues, name, $0ab3112b8267cb1d$var$cloneObject(options.defaultValue));
            }
            if (!options.keepTouched) $0ab3112b8267cb1d$var$unset(_formState.touchedFields, name);
            if (!options.keepDirty) {
                $0ab3112b8267cb1d$var$unset(_formState.dirtyFields, name);
                _formState.isDirty = options.defaultValue ? _getDirty(name, $0ab3112b8267cb1d$var$cloneObject($0ab3112b8267cb1d$export$3988ae62b71be9a3(_defaultValues, name))) : _getDirty();
            }
            if (!options.keepError) {
                $0ab3112b8267cb1d$var$unset(_formState.errors, name);
                _proxyFormState.isValid && _updateValid();
            }
            _subjects.state.next({
                ..._formState
            });
        }
    };
    const _reset = (formValues, keepStateOptions = {})=>{
        const updatedValues = formValues ? $0ab3112b8267cb1d$var$cloneObject(formValues) : _defaultValues;
        const cloneUpdatedValues = $0ab3112b8267cb1d$var$cloneObject(updatedValues);
        const isEmptyResetValues = $0ab3112b8267cb1d$var$isEmptyObject(formValues);
        const values = isEmptyResetValues ? _defaultValues : cloneUpdatedValues;
        if (!keepStateOptions.keepDefaultValues) _defaultValues = updatedValues;
        if (!keepStateOptions.keepValues) {
            if (keepStateOptions.keepDirtyValues) {
                const fieldsToCheck = new Set([
                    ..._names.mount,
                    ...Object.keys($0ab3112b8267cb1d$var$getDirtyFields(_defaultValues, _formValues))
                ]);
                for (const fieldName of Array.from(fieldsToCheck))$0ab3112b8267cb1d$export$3988ae62b71be9a3(_formState.dirtyFields, fieldName) ? $0ab3112b8267cb1d$export$adaa4cf7ef1b65be(values, fieldName, $0ab3112b8267cb1d$export$3988ae62b71be9a3(_formValues, fieldName)) : setValue(fieldName, $0ab3112b8267cb1d$export$3988ae62b71be9a3(values, fieldName));
            } else {
                if ($0ab3112b8267cb1d$var$isWeb && $0ab3112b8267cb1d$var$isUndefined(formValues)) for (const name of _names.mount){
                    const field = $0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, name);
                    if (field && field._f) {
                        const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
                        if ($0ab3112b8267cb1d$var$isHTMLElement(fieldReference)) {
                            const form = fieldReference.closest("form");
                            if (form) {
                                form.reset();
                                break;
                            }
                        }
                    }
                }
                _fields = {};
            }
            _formValues = _options.shouldUnregister ? keepStateOptions.keepDefaultValues ? $0ab3112b8267cb1d$var$cloneObject(_defaultValues) : {} : $0ab3112b8267cb1d$var$cloneObject(values);
            _subjects.array.next({
                values: {
                    ...values
                }
            });
            _subjects.values.next({
                values: {
                    ...values
                }
            });
        }
        _names = {
            mount: keepStateOptions.keepDirtyValues ? _names.mount : new Set(),
            unMount: new Set(),
            array: new Set(),
            disabled: new Set(),
            watch: new Set(),
            watchAll: false,
            focus: ""
        };
        _state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid || !!keepStateOptions.keepDirtyValues;
        _state.watch = !!_options.shouldUnregister;
        _subjects.state.next({
            submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
            isDirty: isEmptyResetValues ? false : keepStateOptions.keepDirty ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !$0ab3112b8267cb1d$var$deepEqual(formValues, _defaultValues)),
            isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
            dirtyFields: isEmptyResetValues ? {} : keepStateOptions.keepDirtyValues ? keepStateOptions.keepDefaultValues && _formValues ? $0ab3112b8267cb1d$var$getDirtyFields(_defaultValues, _formValues) : _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? $0ab3112b8267cb1d$var$getDirtyFields(_defaultValues, formValues) : keepStateOptions.keepDirty ? _formState.dirtyFields : {},
            touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
            errors: keepStateOptions.keepErrors ? _formState.errors : {},
            isSubmitSuccessful: keepStateOptions.keepIsSubmitSuccessful ? _formState.isSubmitSuccessful : false,
            isSubmitting: false
        });
    };
    const reset = (formValues, keepStateOptions)=>_reset($0ab3112b8267cb1d$var$isFunction(formValues) ? formValues(_formValues) : formValues, keepStateOptions);
    const setFocus = (name, options = {})=>{
        const field = $0ab3112b8267cb1d$export$3988ae62b71be9a3(_fields, name);
        const fieldReference = field && field._f;
        if (fieldReference) {
            const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
            if (fieldRef.focus) {
                fieldRef.focus();
                options.shouldSelect && $0ab3112b8267cb1d$var$isFunction(fieldRef.select) && fieldRef.select();
            }
        }
    };
    const _updateFormState = (updatedFormState)=>{
        _formState = {
            ..._formState,
            ...updatedFormState
        };
    };
    const _resetDefaultValues = ()=>$0ab3112b8267cb1d$var$isFunction(_options.defaultValues) && _options.defaultValues().then((values)=>{
            reset(values, _options.resetOptions);
            _subjects.state.next({
                isLoading: false
            });
        });
    return {
        control: {
            register: register,
            unregister: unregister,
            getFieldState: getFieldState,
            handleSubmit: handleSubmit,
            setError: setError,
            _executeSchema: _executeSchema,
            _getWatch: _getWatch,
            _getDirty: _getDirty,
            _updateValid: _updateValid,
            _removeUnmounted: _removeUnmounted,
            _updateFieldArray: _updateFieldArray,
            _updateDisabledField: _updateDisabledField,
            _getFieldArray: _getFieldArray,
            _reset: _reset,
            _resetDefaultValues: _resetDefaultValues,
            _updateFormState: _updateFormState,
            _disableForm: _disableForm,
            _subjects: _subjects,
            _proxyFormState: _proxyFormState,
            _setErrors: _setErrors,
            get _fields () {
                return _fields;
            },
            get _formValues () {
                return _formValues;
            },
            get _state () {
                return _state;
            },
            set _state (value){
                _state = value;
            },
            get _defaultValues () {
                return _defaultValues;
            },
            get _names () {
                return _names;
            },
            set _names (value){
                _names = value;
            },
            get _formState () {
                return _formState;
            },
            set _formState (value){
                _formState = value;
            },
            get _options () {
                return _options;
            },
            set _options (value){
                _options = {
                    ..._options,
                    ...value
                };
            }
        },
        trigger: trigger,
        register: register,
        handleSubmit: handleSubmit,
        watch: watch,
        setValue: setValue,
        getValues: getValues,
        reset: reset,
        resetField: resetField,
        clearErrors: clearErrors,
        unregister: unregister,
        setError: setError,
        setFocus: setFocus,
        getFieldState: getFieldState
    };
}
/**
 * Custom hook to manage the entire form.
 *
 * @remarks
 * [API](https://react-hook-form.com/docs/useform) • [Demo](https://codesandbox.io/s/react-hook-form-get-started-ts-5ksmm) • [Video](https://www.youtube.com/watch?v=RkXv4AXXC_4)
 *
 * @param props - form configuration and validation parameters.
 *
 * @returns methods - individual functions to manage the form state. {@link UseFormReturn}
 *
 * @example
 * ```tsx
 * function App() {
 *   const { register, handleSubmit, watch, formState: { errors } } = useForm();
 *   const onSubmit = data => console.log(data);
 *
 *   console.log(watch("example"));
 *
 *   return (
 *     <form onSubmit={handleSubmit(onSubmit)}>
 *       <input defaultValue="test" {...register("example")} />
 *       <input {...register("exampleRequired", { required: true })} />
 *       {errors.exampleRequired && <span>This field is required</span>}
 *       <button>Submit</button>
 *     </form>
 *   );
 * }
 * ```
 */ function $0ab3112b8267cb1d$export$87c0cf8eb5a167e0(props = {}) {
    const _formControl = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useRef(undefined);
    const _values = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useRef(undefined);
    const [formState, updateFormState] = (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useState({
        isDirty: false,
        isValidating: false,
        isLoading: $0ab3112b8267cb1d$var$isFunction(props.defaultValues),
        isSubmitted: false,
        isSubmitting: false,
        isSubmitSuccessful: false,
        isValid: false,
        submitCount: 0,
        dirtyFields: {},
        touchedFields: {},
        validatingFields: {},
        errors: props.errors || {},
        disabled: props.disabled || false,
        defaultValues: $0ab3112b8267cb1d$var$isFunction(props.defaultValues) ? undefined : props.defaultValues
    });
    if (!_formControl.current) _formControl.current = {
        ...$0ab3112b8267cb1d$var$createFormControl(props),
        formState: formState
    };
    const control = _formControl.current.control;
    control._options = props;
    $0ab3112b8267cb1d$var$useSubscribe({
        subject: control._subjects.state,
        next: (value1)=>{
            if ($0ab3112b8267cb1d$var$shouldRenderFormState(value1, control._proxyFormState, control._updateFormState, true)) updateFormState({
                ...control._formState
            });
        }
    });
    (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useEffect(()=>control._disableForm(props.disabled), [
        control,
        props.disabled
    ]);
    (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useEffect(()=>{
        if (control._proxyFormState.isDirty) {
            const isDirty = control._getDirty();
            if (isDirty !== formState.isDirty) control._subjects.state.next({
                isDirty: isDirty
            });
        }
    }, [
        control,
        formState.isDirty
    ]);
    (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useEffect(()=>{
        if (props.values && !$0ab3112b8267cb1d$var$deepEqual(props.values, _values.current)) {
            control._reset(props.values, control._options.resetOptions);
            _values.current = props.values;
            updateFormState((state)=>({
                    ...state
                }));
        } else control._resetDefaultValues();
    }, [
        props.values,
        control
    ]);
    (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useEffect(()=>{
        if (props.errors) control._setErrors(props.errors);
    }, [
        props.errors,
        control
    ]);
    (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useEffect(()=>{
        if (!control._state.mount) {
            control._updateValid();
            control._state.mount = true;
        }
        if (control._state.watch) {
            control._state.watch = false;
            control._subjects.state.next({
                ...control._formState
            });
        }
        control._removeUnmounted();
    });
    (0, (/*@__PURE__*/$parcel$interopDefault($7Pt7X))).useEffect(()=>{
        props.shouldUnregister && control._subjects.values.next({
            values: control._getWatch()
        });
    }, [
        props.shouldUnregister,
        control
    ]);
    _formControl.current.formState = $0ab3112b8267cb1d$var$getProxyFormState(formState, control);
    return _formControl.current;
}

});

parcelRegister("gUmy6", function(module, exports) {
"use strict";
module.exports = {
    DevTool: ()=>null
};

});




//# sourceMappingURL=ContactUs.274f694b.js.map
