!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.UnmuteButton = e() : t.UnmuteButton = e()
}(window, function() {
    return function(t) {
        var e = {};
        function n(i) {
            if (e[i])
                return e[i].exports;
            var o = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return t[i].call(o.exports, o, o.exports, n),
            o.l = !0,
            o.exports
        }
        return n.m = t,
        n.c = e,
        n.d = function(t, e, i) {
            n.o(t, e) || Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }
        ,
        n.r = function(t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return n.d(e, "a", e),
            e
        }
        ,
        n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        n.p = "",
        n(n.s = 18)
    }([function(t, e, n) {
        (function(i) {
            var o, r;
            /**
 *  Tone.js
 *  @author Yotam Mann
 *  @license http://opensource.org/licenses/MIT MIT License
 *  @copyright 2014-2018 Yotam Mann
 */
            o = [n(36)],
            void 0 === (r = function(t) {
                "use strict";
                var e = function() {
                    if (!(this instanceof e))
                        throw new Error("constructor needs to be called with the 'new' keyword")
                };
                return e.prototype.toString = function() {
                    for (var t in e) {
                        var n = t[0].match(/^[A-Z]$/)
                          , i = e[t] === this.constructor;
                        if (e.isFunction(e[t]) && n && i)
                            return t
                    }
                    return "Tone"
                }
                ,
                e.prototype.dispose = function() {
                    return this
                }
                ,
                e.prototype.set = function(t, n, i) {
                    if (e.isObject(t))
                        i = n;
                    else if (e.isString(t)) {
                        var o = {};
                        o[t] = n,
                        t = o
                    }
                    t: for (var r in t) {
                        n = t[r];
                        var s = this;
                        if (-1 !== r.indexOf(".")) {
                            for (var a = r.split("."), u = 0; u < a.length - 1; u++)
                                if ((s = s[a[u]])instanceof e) {
                                    a.splice(0, u + 1);
                                    var c = a.join(".");
                                    s.set(c, n);
                                    continue t
                                }
                            r = a[a.length - 1]
                        }
                        var p = s[r];
                        e.isUndef(p) || (e.Signal && p instanceof e.Signal || e.Param && p instanceof e.Param ? p.value !== n && (e.isUndef(i) ? p.value = n : p.rampTo(n, i)) : p instanceof AudioParam ? p.value !== n && (p.value = n) : e.TimeBase && p instanceof e.TimeBase ? s[r] = n : p instanceof e ? p.set(n) : p !== n && (s[r] = n))
                    }
                    return this
                }
                ,
                e.prototype.get = function(t) {
                    e.isUndef(t) ? t = this._collectDefaults(this.constructor) : e.isString(t) && (t = [t]);
                    for (var n = {}, i = 0; i < t.length; i++) {
                        var o = t[i]
                          , r = this
                          , s = n;
                        if (-1 !== o.indexOf(".")) {
                            for (var a = o.split("."), u = 0; u < a.length - 1; u++) {
                                var c = a[u];
                                s[c] = s[c] || {},
                                s = s[c],
                                r = r[c]
                            }
                            o = a[a.length - 1]
                        }
                        var p = r[o];
                        e.isObject(t[o]) ? s[o] = p.get() : e.Signal && p instanceof e.Signal ? s[o] = p.value : e.Param && p instanceof e.Param ? s[o] = p.value : p instanceof AudioParam ? s[o] = p.value : p instanceof e ? s[o] = p.get() : !e.isFunction(p) && e.isDefined(p) && (s[o] = p)
                    }
                    return n
                }
                ,
                e.prototype._collectDefaults = function(t) {
                    var n = [];
                    if (e.isDefined(t.defaults) && (n = Object.keys(t.defaults)),
                    e.isDefined(t._super))
                        for (var i = this._collectDefaults(t._super), o = 0; o < i.length; o++)
                            -1 === n.indexOf(i[o]) && n.push(i[o]);
                    return n
                }
                ,
                e.defaults = function(t, n, i) {
                    var o = {};
                    if (1 === t.length && e.isObject(t[0]))
                        o = t[0];
                    else
                        for (var r = 0; r < n.length; r++)
                            o[n[r]] = t[r];
                    return e.isDefined(i.defaults) ? e.defaultArg(o, i.defaults) : e.isObject(i) ? e.defaultArg(o, i) : o
                }
                ,
                e.defaultArg = function(t, n) {
                    if (e.isObject(t) && e.isObject(n)) {
                        var i = {};
                        for (var o in t)
                            i[o] = e.defaultArg(n[o], t[o]);
                        for (var r in n)
                            i[r] = e.defaultArg(t[r], n[r]);
                        return i
                    }
                    return e.isUndef(t) ? n : t
                }
                ,
                e.prototype.log = function() {
                    if (this.debug || this.toString() === e.global.TONE_DEBUG_CLASS) {
                        var t = Array.from(arguments);
                        t.unshift(this.toString() + ":"),
                        console.log.apply(void 0, t)
                    }
                }
                ,
                e.prototype.assert = function(t, e) {
                    if (!t)
                        throw new Error(e)
                }
                ,
                e.connectSeries = function() {
                    for (var t = arguments[0], n = 1; n < arguments.length; n++) {
                        var i = arguments[n];
                        t.connect(i),
                        t = i
                    }
                    return e
                }
                ,
                e.isUndef = function(t) {
                    return void 0 === t
                }
                ,
                e.isDefined = function(t) {
                    return !e.isUndef(t)
                }
                ,
                e.isFunction = function(t) {
                    return "function" == typeof t
                }
                ,
                e.isNumber = function(t) {
                    return "number" == typeof t
                }
                ,
                e.isObject = function(t) {
                    return "[object Object]" === Object.prototype.toString.call(t) && t.constructor === Object
                }
                ,
                e.isBoolean = function(t) {
                    return "boolean" == typeof t
                }
                ,
                e.isArray = function(t) {
                    return Array.isArray(t)
                }
                ,
                e.isString = function(t) {
                    return "string" == typeof t
                }
                ,
                e.isNote = function(t) {
                    return e.isString(t) && /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t)
                }
                ,
                e.noOp = function() {}
                ,
                e.prototype._readOnly = function(t) {
                    if (Array.isArray(t))
                        for (var e = 0; e < t.length; e++)
                            this._readOnly(t[e]);
                    else
                        Object.defineProperty(this, t, {
                            writable: !1,
                            enumerable: !0
                        })
                }
                ,
                e.prototype._writable = function(t) {
                    if (Array.isArray(t))
                        for (var e = 0; e < t.length; e++)
                            this._writable(t[e]);
                    else
                        Object.defineProperty(this, t, {
                            writable: !0
                        })
                }
                ,
                e.State = {
                    Started: "started",
                    Stopped: "stopped",
                    Paused: "paused"
                },
                e.global = e.isUndef(i) ? window : i,
                e.equalPowerScale = function(t) {
                    var e = .5 * Math.PI;
                    return Math.sin(t * e)
                }
                ,
                e.dbToGain = function(t) {
                    return Math.pow(10, t / 20)
                }
                ,
                e.gainToDb = function(t) {
                    return Math.log(t) / Math.LN10 * 20
                }
                ,
                e.intervalToFrequencyRatio = function(t) {
                    return Math.pow(2, t / 12)
                }
                ,
                e.prototype.now = function() {
                    return e.context.now()
                }
                ,
                e.now = function() {
                    return e.context.now()
                }
                ,
                e.prototype.immediate = function() {
                    return e.context.currentTime
                }
                ,
                e.immediate = function() {
                    return e.context.currentTime
                }
                ,
                e.extend = function(t, n) {
                    function i() {}
                    e.isUndef(n) && (n = e),
                    i.prototype = n.prototype,
                    t.prototype = new i,
                    t.prototype.constructor = t,
                    t._super = n
                }
                ,
                e._audioContext = null,
                Object.defineProperty(e, "context", {
                    get: function() {
                        return e._audioContext
                    },
                    set: function(t) {
                        t.isContext ? e._audioContext = t : e._audioContext = new e.Context(t),
                        e.Context.emit("init", e._audioContext)
                    }
                }),
                Object.defineProperty(e.prototype, "context", {
                    get: function() {
                        return e.context
                    }
                }),
                e.setContext = function(t) {
                    e.context = t
                }
                ,
                Object.defineProperty(e.prototype, "blockTime", {
                    get: function() {
                        return 128 / this.context.sampleRate
                    }
                }),
                Object.defineProperty(e.prototype, "sampleTime", {
                    get: function() {
                        return 1 / this.context.sampleRate
                    }
                }),
                Object.defineProperty(e, "supported", {
                    get: function() {
                        var t = e.global.hasOwnProperty("AudioContext") || e.global.hasOwnProperty("webkitAudioContext")
                          , n = e.global.hasOwnProperty("Promise");
                        return t && n
                    }
                }),
                Object.defineProperty(e, "initialized", {
                    get: function() {
                        return Boolean(e.context)
                    }
                }),
                e.getContext = function(t) {
                    if (e.initialized)
                        t(e.context);
                    else {
                        var n = function() {
                            t(e.context),
                            e.Context.off("init", n)
                        };
                        e.Context.on("init", n)
                    }
                    return e
                }
                ,
                e.version = t,
                e
            }
            .apply(e, o)) || (t.exports = r)
        }
        ).call(this, n(37))
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(34), n(13), n(6)],
        void 0 === (o = function(t) {
            t.Context = function() {
                t.Emitter.call(this);
                var n = t.defaults(arguments, ["context"], t.Context);
                if (!n.context && (n.context = new t.global.AudioContext,
                !n.context))
                    throw new Error("could not create AudioContext. Possibly too many AudioContexts running already.");
                for (this._context = n.context; this._context.rawContext; )
                    this._context = this._context.rawContext;
                for (var i in this._context)
                    this._defineProperty(this._context, i);
                this._latencyHint = n.latencyHint,
                this._constants = {},
                this.lookAhead = n.lookAhead,
                this._computedUpdateInterval = 0,
                this._ticker = new e(this.emit.bind(this, "tick"),n.clockSource,n.updateInterval),
                this._timeouts = new t.Timeline,
                this._timeoutIds = 0,
                this.on("tick", this._timeoutLoop.bind(this)),
                this._context.onstatechange = function(t) {
                    this.emit("statechange", t)
                }
                .bind(this)
            }
            ,
            t.extend(t.Context, t.Emitter),
            t.Emitter.mixin(t.Context),
            t.Context.defaults = {
                clockSource: "worker",
                latencyHint: "interactive",
                lookAhead: .1,
                updateInterval: .03
            },
            t.Context.prototype.isContext = !0,
            t.Context.prototype._defineProperty = function(e, n) {
                t.isUndef(this[n]) && Object.defineProperty(this, n, {
                    get: function() {
                        return "function" == typeof e[n] ? e[n].bind(e) : e[n]
                    },
                    set: function(t) {
                        e[n] = t
                    }
                })
            }
            ,
            t.Context.prototype.now = function() {
                return this._context.currentTime + this.lookAhead
            }
            ,
            Object.defineProperty(t.Context.prototype, "destination", {
                get: function() {
                    return this.master ? this.master : this._context.destination
                }
            }),
            t.Context.prototype.resume = function() {
                return "suspended" === this._context.state && this._context instanceof AudioContext ? this._context.resume() : Promise.resolve()
            }
            ,
            t.Context.prototype.close = function() {
                var e = Promise.resolve();
                return this !== t.global.TONE_AUDIO_CONTEXT && (e = this.rawContext.close()),
                e.then(function() {
                    t.Context.emit("close", this)
                }
                .bind(this))
            }
            ,
            t.Context.prototype.getConstant = function(t) {
                if (this._constants[t])
                    return this._constants[t];
                for (var e = this._context.createBuffer(1, 128, this._context.sampleRate), n = e.getChannelData(0), i = 0; i < n.length; i++)
                    n[i] = t;
                var o = this._context.createBufferSource();
                return o.channelCount = 1,
                o.channelCountMode = "explicit",
                o.buffer = e,
                o.loop = !0,
                o.start(0),
                this._constants[t] = o,
                o
            }
            ,
            t.Context.prototype._timeoutLoop = function() {
                for (var t = this.now(); this._timeouts && this._timeouts.length && this._timeouts.peek().time <= t; )
                    this._timeouts.shift().callback()
            }
            ,
            t.Context.prototype.setTimeout = function(t, e) {
                this._timeoutIds++;
                var n = this.now();
                return this._timeouts.add({
                    callback: t,
                    time: n + e,
                    id: this._timeoutIds
                }),
                this._timeoutIds
            }
            ,
            t.Context.prototype.clearTimeout = function(t) {
                return this._timeouts.forEach(function(e) {
                    e.id === t && this.remove(e)
                }),
                this
            }
            ,
            Object.defineProperty(t.Context.prototype, "updateInterval", {
                get: function() {
                    return this._ticker.updateInterval
                },
                set: function(t) {
                    this._ticker.updateInterval = t
                }
            }),
            Object.defineProperty(t.Context.prototype, "rawContext", {
                get: function() {
                    return this._context
                }
            }),
            Object.defineProperty(t.Context.prototype, "clockSource", {
                get: function() {
                    return this._ticker.type
                },
                set: function(t) {
                    this._ticker.type = t
                }
            }),
            Object.defineProperty(t.Context.prototype, "latencyHint", {
                get: function() {
                    return this._latencyHint
                },
                set: function(e) {
                    var n = e;
                    if (this._latencyHint = e,
                    t.isString(e))
                        switch (e) {
                        case "interactive":
                            n = .1,
                            this._context.latencyHint = e;
                            break;
                        case "playback":
                            n = .8,
                            this._context.latencyHint = e;
                            break;
                        case "balanced":
                            n = .25,
                            this._context.latencyHint = e;
                            break;
                        case "fastest":
                            this._context.latencyHint = "interactive",
                            n = .01
                        }
                    this.lookAhead = n,
                    this.updateInterval = n / 3
                }
            }),
            t.Context.prototype.dispose = function() {
                return this.close().then(function() {
                    for (var e in t.Emitter.prototype.dispose.call(this),
                    this._ticker.dispose(),
                    this._ticker = null,
                    this._timeouts.dispose(),
                    this._timeouts = null,
                    this._constants)
                        this._constants[e].disconnect();
                    this._constants = null
                }
                .bind(this))
            }
            ;
            var e = function(e, n, i) {
                this._type = n,
                this._updateInterval = i,
                this._callback = t.defaultArg(e, t.noOp),
                this._createClock()
            };
            if (e.Type = {
                Worker: "worker",
                Timeout: "timeout",
                Offline: "offline"
            },
            e.prototype._createWorker = function() {
                t.global.URL = t.global.URL || t.global.webkitURL;
                var e = new Blob(["var timeoutTime = " + (1e3 * this._updateInterval).toFixed(1) + ";self.onmessage = function(msg){\ttimeoutTime = parseInt(msg.data);};function tick(){\tsetTimeout(tick, timeoutTime);\tself.postMessage('tick');}tick();"])
                  , n = URL.createObjectURL(e)
                  , i = new Worker(n);
                i.onmessage = this._callback.bind(this),
                this._worker = i
            }
            ,
            e.prototype._createTimeout = function() {
                this._timeout = setTimeout(function() {
                    this._createTimeout(),
                    this._callback()
                }
                .bind(this), 1e3 * this._updateInterval)
            }
            ,
            e.prototype._createClock = function() {
                if (this._type === e.Type.Worker)
                    try {
                        this._createWorker()
                    } catch (t) {
                        this._type = e.Type.Timeout,
                        this._createClock()
                    }
                else
                    this._type === e.Type.Timeout && this._createTimeout()
            }
            ,
            Object.defineProperty(e.prototype, "updateInterval", {
                get: function() {
                    return this._updateInterval
                },
                set: function(t) {
                    this._updateInterval = Math.max(t, 128 / 44100),
                    this._type === e.Type.Worker && this._worker.postMessage(Math.max(1e3 * t, 1))
                }
            }),
            Object.defineProperty(e.prototype, "type", {
                get: function() {
                    return this._type
                },
                set: function(t) {
                    this._disposeClock(),
                    this._type = t,
                    this._createClock()
                }
            }),
            e.prototype._disposeClock = function() {
                this._timeout && (clearTimeout(this._timeout),
                this._timeout = null),
                this._worker && (this._worker.terminate(),
                this._worker.onmessage = null,
                this._worker = null)
            }
            ,
            e.prototype.dispose = function() {
                this._disposeClock(),
                this._callback = null
            }
            ,
            t.getContext(function() {
                var e = AudioNode.prototype.connect
                  , n = AudioNode.prototype.disconnect;
                function i(n, i, o) {
                    if (n.input)
                        return o = t.defaultArg(o, 0),
                        t.isArray(n.input) ? this.connect(n.input[o]) : this.connect(n.input, i, o);
                    try {
                        return n instanceof AudioNode ? (e.call(this, n, i, o),
                        n) : (e.call(this, n, i),
                        n)
                    } catch (t) {
                        throw new Error("error connecting to node: " + n + "\n" + t)
                    }
                }
                AudioNode.prototype.connect !== i && (AudioNode.prototype.connect = i,
                AudioNode.prototype.disconnect = function(e, i, o) {
                    if (e && e.input && t.isArray(e.input))
                        o = t.defaultArg(o, 0),
                        this.disconnect(e.input[o], i, 0);
                    else if (e && e.input)
                        this.disconnect(e.input, i, o);
                    else
                        try {
                            e instanceof AudioParam ? n.call(this, e, i) : n.apply(this, arguments)
                        } catch (t) {
                            throw new Error("error disconnecting node: " + e + "\n" + t)
                        }
                }
                )
            }),
            t.supported && !t.initialized) {
                if (t.global.TONE_AUDIO_CONTEXT || (t.global.TONE_AUDIO_CONTEXT = new t.Context),
                t.context = t.global.TONE_AUDIO_CONTEXT,
                !t.global.TONE_SILENCE_VERSION_LOGGING) {
                    var n = "v";
                    "dev" === t.version && (n = "");
                    var i = " * Tone.js " + n + t.version + " * ";
                    console.log("%c" + i, "background: #000; color: #fff")
                }
            } else
                t.supported || console.warn("This browser does not support Tone.js");
            return t.Context
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(1)],
        void 0 === (o = function(t) {
            return t.AudioNode = function() {
                t.call(this);
                var e = t.defaults(arguments, ["context"], {
                    context: t.context
                });
                this._context = e.context
            }
            ,
            t.extend(t.AudioNode),
            Object.defineProperty(t.AudioNode.prototype, "context", {
                get: function() {
                    return this._context
                }
            }),
            t.AudioNode.prototype.createInsOuts = function(t, e) {
                1 === t ? this.input = this.context.createGain() : t > 1 && (this.input = new Array(t)),
                1 === e ? this.output = this.context.createGain() : e > 1 && (this.output = new Array(e))
            }
            ,
            Object.defineProperty(t.AudioNode.prototype, "channelCount", {
                get: function() {
                    return this.output.channelCount
                },
                set: function(t) {
                    return this.output.channelCount = t
                }
            }),
            Object.defineProperty(t.AudioNode.prototype, "channelCountMode", {
                get: function() {
                    return this.output.channelCountMode
                },
                set: function(t) {
                    return this.output.channelCountMode = t
                }
            }),
            Object.defineProperty(t.AudioNode.prototype, "channelInterpretation", {
                get: function() {
                    return this.output.channelInterpretation
                },
                set: function(t) {
                    return this.output.channelInterpretation = t
                }
            }),
            Object.defineProperty(t.AudioNode.prototype, "numberOfInputs", {
                get: function() {
                    return this.input ? t.isArray(this.input) ? this.input.length : 1 : 0
                }
            }),
            Object.defineProperty(t.AudioNode.prototype, "numberOfOutputs", {
                get: function() {
                    return this.output ? t.isArray(this.output) ? this.output.length : 1 : 0
                }
            }),
            t.AudioNode.prototype.connect = function(e, n, i) {
                return t.isArray(this.output) ? (n = t.defaultArg(n, 0),
                this.output[n].connect(e, 0, i)) : this.output.connect(e, n, i),
                this
            }
            ,
            t.AudioNode.prototype.disconnect = function(e, n, i) {
                t.isArray(this.output) ? t.isNumber(e) ? this.output[e].disconnect() : (n = t.defaultArg(n, 0),
                this.output[n].disconnect(e, 0, i)) : this.output.disconnect.apply(this.output, arguments)
            }
            ,
            t.AudioNode.prototype.chain = function() {
                for (var t = this, e = 0; e < arguments.length; e++) {
                    var n = arguments[e];
                    t.connect(n),
                    t = n
                }
                return this
            }
            ,
            t.AudioNode.prototype.fan = function() {
                for (var t = 0; t < arguments.length; t++)
                    this.connect(arguments[t]);
                return this
            }
            ,
            t.global.AudioNode && (AudioNode.prototype.chain = t.AudioNode.prototype.chain,
            AudioNode.prototype.fan = t.AudioNode.prototype.fan),
            t.AudioNode.prototype.dispose = function() {
                return t.isDefined(this.input) && (this.input instanceof AudioNode && this.input.disconnect(),
                this.input = null),
                t.isDefined(this.output) && (this.output instanceof AudioNode && this.output.disconnect(),
                this.output = null),
                this._context = null,
                this
            }
            ,
            t.AudioNode
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(11), n(5), n(2)],
        void 0 === (o = function(t) {
            "use strict";
            return t.Gain = function() {
                var e = t.defaults(arguments, ["gain", "units"], t.Gain);
                t.AudioNode.call(this, e),
                this.input = this.output = this._gainNode = this.context.createGain(),
                this.gain = new t.Param({
                    param: this._gainNode.gain,
                    units: e.units,
                    value: e.gain,
                    convert: e.convert
                }),
                this._readOnly("gain")
            }
            ,
            t.extend(t.Gain, t.AudioNode),
            t.Gain.defaults = {
                gain: 1,
                convert: !0
            },
            t.Gain.prototype.dispose = function() {
                t.AudioNode.prototype.dispose.call(this),
                this._gainNode.disconnect(),
                this._gainNode = null,
                this._writable("gain"),
                this.gain.dispose(),
                this.gain = null
            }
            ,
            t.Gain
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e) {
        function n() {
            this._events = this._events || {},
            this._maxListeners = this._maxListeners || void 0
        }
        function i(t) {
            return "function" == typeof t
        }
        function o(t) {
            return "object" == typeof t && null !== t
        }
        function r(t) {
            return void 0 === t
        }
        t.exports = n,
        n.EventEmitter = n,
        n.prototype._events = void 0,
        n.prototype._maxListeners = void 0,
        n.defaultMaxListeners = 10,
        n.prototype.setMaxListeners = function(t) {
            if ("number" != typeof t || t < 0 || isNaN(t))
                throw TypeError("n must be a positive number");
            return this._maxListeners = t,
            this
        }
        ,
        n.prototype.emit = function(t) {
            var e, n, s, a, u, c;
            if (this._events || (this._events = {}),
            "error" === t && (!this._events.error || o(this._events.error) && !this._events.error.length)) {
                if ((e = arguments[1])instanceof Error)
                    throw e;
                var p = new Error('Uncaught, unspecified "error" event. (' + e + ")");
                throw p.context = e,
                p
            }
            if (r(n = this._events[t]))
                return !1;
            if (i(n))
                switch (arguments.length) {
                case 1:
                    n.call(this);
                    break;
                case 2:
                    n.call(this, arguments[1]);
                    break;
                case 3:
                    n.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    a = Array.prototype.slice.call(arguments, 1),
                    n.apply(this, a)
                }
            else if (o(n))
                for (a = Array.prototype.slice.call(arguments, 1),
                s = (c = n.slice()).length,
                u = 0; u < s; u++)
                    c[u].apply(this, a);
            return !0
        }
        ,
        n.prototype.addListener = function(t, e) {
            var s;
            if (!i(e))
                throw TypeError("listener must be a function");
            return this._events || (this._events = {}),
            this._events.newListener && this.emit("newListener", t, i(e.listener) ? e.listener : e),
            this._events[t] ? o(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e,
            o(this._events[t]) && !this._events[t].warned && (s = r(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && s > 0 && this._events[t].length > s && (this._events[t].warned = !0,
            console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length),
            "function" == typeof console.trace && console.trace()),
            this
        }
        ,
        n.prototype.on = n.prototype.addListener,
        n.prototype.once = function(t, e) {
            if (!i(e))
                throw TypeError("listener must be a function");
            var n = !1;
            function o() {
                this.removeListener(t, o),
                n || (n = !0,
                e.apply(this, arguments))
            }
            return o.listener = e,
            this.on(t, o),
            this
        }
        ,
        n.prototype.removeListener = function(t, e) {
            var n, r, s, a;
            if (!i(e))
                throw TypeError("listener must be a function");
            if (!this._events || !this._events[t])
                return this;
            if (s = (n = this._events[t]).length,
            r = -1,
            n === e || i(n.listener) && n.listener === e)
                delete this._events[t],
                this._events.removeListener && this.emit("removeListener", t, e);
            else if (o(n)) {
                for (a = s; a-- > 0; )
                    if (n[a] === e || n[a].listener && n[a].listener === e) {
                        r = a;
                        break
                    }
                if (r < 0)
                    return this;
                1 === n.length ? (n.length = 0,
                delete this._events[t]) : n.splice(r, 1),
                this._events.removeListener && this.emit("removeListener", t, e)
            }
            return this
        }
        ,
        n.prototype.removeAllListeners = function(t) {
            var e, n;
            if (!this._events)
                return this;
            if (!this._events.removeListener)
                return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t],
                this;
            if (0 === arguments.length) {
                for (e in this._events)
                    "removeListener" !== e && this.removeAllListeners(e);
                return this.removeAllListeners("removeListener"),
                this._events = {},
                this
            }
            if (i(n = this._events[t]))
                this.removeListener(t, n);
            else if (n)
                for (; n.length; )
                    this.removeListener(t, n[n.length - 1]);
            return delete this._events[t],
            this
        }
        ,
        n.prototype.listeners = function(t) {
            return this._events && this._events[t] ? i(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
        }
        ,
        n.prototype.listenerCount = function(t) {
            if (this._events) {
                var e = this._events[t];
                if (i(e))
                    return 1;
                if (e)
                    return e.length
            }
            return 0
        }
        ,
        n.listenerCount = function(t, e) {
            return t.listenerCount(e)
        }
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(10), n(8), n(30), n(1)],
        void 0 === (o = function(t) {
            return t.Type = {
                Default: "number",
                Time: "time",
                Frequency: "frequency",
                TransportTime: "transportTime",
                Ticks: "ticks",
                NormalRange: "normalRange",
                AudioRange: "audioRange",
                Decibels: "db",
                Interval: "interval",
                BPM: "bpm",
                Positive: "positive",
                Gain: "gain",
                Cents: "cents",
                Degrees: "degrees",
                MIDI: "midi",
                BarsBeatsSixteenths: "barsBeatsSixteenths",
                Samples: "samples",
                Hertz: "hertz",
                Note: "note",
                Milliseconds: "milliseconds",
                Seconds: "seconds",
                Notation: "notation"
            },
            t.prototype.toSeconds = function(e) {
                return t.isNumber(e) ? e : t.isUndef(e) ? this.now() : t.isString(e) || t.isObject(e) ? new t.Time(e).toSeconds() : e instanceof t.TimeBase ? e.toSeconds() : void 0
            }
            ,
            t.prototype.toFrequency = function(e) {
                return t.isNumber(e) ? e : t.isString(e) || t.isUndef(e) || t.isObject(e) ? new t.Frequency(e).valueOf() : e instanceof t.TimeBase ? e.toFrequency() : void 0
            }
            ,
            t.prototype.toTicks = function(e) {
                return t.isNumber(e) || t.isString(e) || t.isObject(e) ? new t.TransportTime(e).toTicks() : t.isUndef(e) ? t.Transport.ticks : e instanceof t.TimeBase ? e.toTicks() : void 0
            }
            ,
            t
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(12)],
        void 0 === (o = function(t) {
            if (t.supported) {
                !t.global.hasOwnProperty("AudioContext") && t.global.hasOwnProperty("webkitAudioContext") && (t.global.AudioContext = t.global.webkitAudioContext),
                AudioContext.prototype.close || (AudioContext.prototype.close = function() {
                    return t.isFunction(this.suspend) && this.suspend(),
                    Promise.resolve()
                }
                ),
                AudioContext.prototype.resume || (AudioContext.prototype.resume = function() {
                    var t = this.createBuffer(1, 1, this.sampleRate)
                      , e = this.createBufferSource();
                    return e.buffer = t,
                    e.connect(this.destination),
                    e.start(0),
                    Promise.resolve()
                }
                ),
                !AudioContext.prototype.createGain && AudioContext.prototype.createGainNode && (AudioContext.prototype.createGain = AudioContext.prototype.createGainNode),
                !AudioContext.prototype.createDelay && AudioContext.prototype.createDelayNode && (AudioContext.prototype.createDelay = AudioContext.prototype.createDelayNode);
                var e = !1
                  , n = new OfflineAudioContext(1,1,44100)
                  , i = new Uint32Array([1179011410, 48, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 8, 0, 0, 0, 0]).buffer;
                try {
                    var o = n.decodeAudioData(i);
                    o && t.isFunction(o.then) && (e = !0)
                } catch (t) {
                    e = !1
                }
                e || (AudioContext.prototype._native_decodeAudioData = AudioContext.prototype.decodeAudioData,
                AudioContext.prototype.decodeAudioData = function(t) {
                    return new Promise(function(e, n) {
                        this._native_decodeAudioData(t, e, n)
                    }
                    .bind(this))
                }
                )
            }
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(15), n(5), n(11), n(28), n(3)],
        void 0 === (o = function(t) {
            "use strict";
            return t.Signal = function() {
                var e = t.defaults(arguments, ["value", "units"], t.Signal);
                t.Param.call(this, e),
                this._constantSource = this.context.createConstantSource(),
                this._constantSource.start(0),
                this._param = this._constantSource.offset,
                this.value = e.value,
                this.output = this._constantSource,
                this.input = this._param = this.output.offset
            }
            ,
            t.extend(t.Signal, t.Param),
            t.Signal.defaults = {
                value: 0,
                units: t.Type.Default,
                convert: !0
            },
            t.Signal.prototype.connect = t.SignalBase.prototype.connect,
            t.Signal.prototype.disconnect = t.SignalBase.prototype.disconnect,
            t.Signal.prototype.getValueAtTime = function(e) {
                return this._param.getValueAtTime ? this._param.getValueAtTime(e) : t.Param.prototype.getValueAtTime.call(this, e)
            }
            ,
            t.Signal.prototype.dispose = function() {
                return t.Param.prototype.dispose.call(this),
                this._constantSource.disconnect(),
                this._constantSource = null,
                this
            }
            ,
            t.Signal
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(9)],
        void 0 === (o = function(t) {
            t.Frequency = function(e, n) {
                if (!(this instanceof t.Frequency))
                    return new t.Frequency(e,n);
                t.TimeBase.call(this, e, n)
            }
            ,
            t.extend(t.Frequency, t.TimeBase),
            t.Frequency.prototype._expressions = Object.assign({}, t.TimeBase.prototype._expressions, {
                midi: {
                    regexp: /^(\d+(?:\.\d+)?midi)/,
                    method: function(e) {
                        return "midi" === this._defaultUnits ? e : t.Frequency.mtof(e)
                    }
                },
                note: {
                    regexp: /^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,
                    method: function(n, i) {
                        var o = e[n.toLowerCase()] + 12 * (parseInt(i) + 1);
                        return "midi" === this._defaultUnits ? o : t.Frequency.mtof(o)
                    }
                },
                tr: {
                    regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,
                    method: function(t, e, n) {
                        var i = 1;
                        return t && "0" !== t && (i *= this._beatsToUnits(this._getTimeSignature() * parseFloat(t))),
                        e && "0" !== e && (i *= this._beatsToUnits(parseFloat(e))),
                        n && "0" !== n && (i *= this._beatsToUnits(parseFloat(n) / 4)),
                        i
                    }
                }
            }),
            t.Frequency.prototype.transpose = function(e) {
                return new this.constructor(this.valueOf() * t.intervalToFrequencyRatio(e))
            }
            ,
            t.Frequency.prototype.harmonize = function(t) {
                return t.map(function(t) {
                    return this.transpose(t)
                }
                .bind(this))
            }
            ,
            t.Frequency.prototype.toMidi = function() {
                return t.Frequency.ftom(this.valueOf())
            }
            ,
            t.Frequency.prototype.toNote = function() {
                var e = this.toFrequency()
                  , i = Math.log2(e / t.Frequency.A4)
                  , o = Math.round(12 * i) + 57
                  , r = Math.floor(o / 12);
                return r < 0 && (o += -12 * r),
                n[o % 12] + r.toString()
            }
            ,
            t.Frequency.prototype.toSeconds = function() {
                return 1 / t.TimeBase.prototype.toSeconds.call(this)
            }
            ,
            t.Frequency.prototype.toFrequency = function() {
                return t.TimeBase.prototype.toFrequency.call(this)
            }
            ,
            t.Frequency.prototype.toTicks = function() {
                var e = this._beatsToUnits(1)
                  , n = this.valueOf() / e;
                return Math.floor(n * t.Transport.PPQ)
            }
            ,
            t.Frequency.prototype._noArg = function() {
                return 0
            }
            ,
            t.Frequency.prototype._frequencyToUnits = function(t) {
                return t
            }
            ,
            t.Frequency.prototype._ticksToUnits = function(e) {
                return 1 / (60 * e / (t.Transport.bpm.value * t.Transport.PPQ))
            }
            ,
            t.Frequency.prototype._beatsToUnits = function(e) {
                return 1 / t.TimeBase.prototype._beatsToUnits.call(this, e)
            }
            ,
            t.Frequency.prototype._secondsToUnits = function(t) {
                return 1 / t
            }
            ,
            t.Frequency.prototype._defaultUnits = "hz";
            var e = {
                cbb: -2,
                cb: -1,
                c: 0,
                "c#": 1,
                cx: 2,
                dbb: 0,
                db: 1,
                d: 2,
                "d#": 3,
                dx: 4,
                ebb: 2,
                eb: 3,
                e: 4,
                "e#": 5,
                ex: 6,
                fbb: 3,
                fb: 4,
                f: 5,
                "f#": 6,
                fx: 7,
                gbb: 5,
                gb: 6,
                g: 7,
                "g#": 8,
                gx: 9,
                abb: 7,
                ab: 8,
                a: 9,
                "a#": 10,
                ax: 11,
                bbb: 9,
                bb: 10,
                b: 11,
                "b#": 12,
                bx: 13
            }
              , n = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
            return t.Frequency.A4 = 440,
            t.Frequency.mtof = function(e) {
                return t.Frequency.A4 * Math.pow(2, (e - 69) / 12)
            }
            ,
            t.Frequency.ftom = function(e) {
                return 69 + Math.round(12 * Math.log2(e / t.Frequency.A4))
            }
            ,
            t.Frequency
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0)],
        void 0 === (o = function(t) {
            return t.TimeBase = function(e, n) {
                if (!(this instanceof t.TimeBase))
                    return new t.TimeBase(e,n);
                if (this._val = e,
                this._units = n,
                t.isUndef(this._units) && t.isString(this._val) && parseFloat(this._val) == this._val && "+" !== this._val.charAt(0))
                    this._val = parseFloat(this._val),
                    this._units = this._defaultUnits;
                else if (e && e.constructor === this.constructor)
                    this._val = e._val,
                    this._units = e._units;
                else if (e instanceof t.TimeBase)
                    switch (this._defaultUnits) {
                    case "s":
                        this._val = e.toSeconds();
                        break;
                    case "i":
                        this._val = e.toTicks();
                        break;
                    case "hz":
                        this._val = e.toFrequency();
                        break;
                    case "midi":
                        this._val = e.toMidi();
                        break;
                    default:
                        throw new Error("Unrecognized default units " + this._defaultUnits)
                    }
            }
            ,
            t.extend(t.TimeBase),
            t.TimeBase.prototype._expressions = {
                n: {
                    regexp: /^(\d+)n(\.?)$/i,
                    method: function(t, e) {
                        t = parseInt(t);
                        var n = "." === e ? 1.5 : 1;
                        return 1 === t ? this._beatsToUnits(this._getTimeSignature()) * n : this._beatsToUnits(4 / t) * n
                    }
                },
                t: {
                    regexp: /^(\d+)t$/i,
                    method: function(t) {
                        return t = parseInt(t),
                        this._beatsToUnits(8 / (3 * parseInt(t)))
                    }
                },
                m: {
                    regexp: /^(\d+)m$/i,
                    method: function(t) {
                        return this._beatsToUnits(parseInt(t) * this._getTimeSignature())
                    }
                },
                i: {
                    regexp: /^(\d+)i$/i,
                    method: function(t) {
                        return this._ticksToUnits(parseInt(t))
                    }
                },
                hz: {
                    regexp: /^(\d+(?:\.\d+)?)hz$/i,
                    method: function(t) {
                        return this._frequencyToUnits(parseFloat(t))
                    }
                },
                tr: {
                    regexp: /^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/,
                    method: function(t, e, n) {
                        var i = 0;
                        return t && "0" !== t && (i += this._beatsToUnits(this._getTimeSignature() * parseFloat(t))),
                        e && "0" !== e && (i += this._beatsToUnits(parseFloat(e))),
                        n && "0" !== n && (i += this._beatsToUnits(parseFloat(n) / 4)),
                        i
                    }
                },
                s: {
                    regexp: /^(\d+(?:\.\d+)?)s$/,
                    method: function(t) {
                        return this._secondsToUnits(parseFloat(t))
                    }
                },
                samples: {
                    regexp: /^(\d+)samples$/,
                    method: function(t) {
                        return parseInt(t) / this.context.sampleRate
                    }
                },
                default: {
                    regexp: /^(\d+(?:\.\d+)?)$/,
                    method: function(t) {
                        return this._expressions[this._defaultUnits].method.call(this, t)
                    }
                }
            },
            t.TimeBase.prototype._defaultUnits = "s",
            t.TimeBase.prototype._getBpm = function() {
                return t.Transport ? t.Transport.bpm.value : 120
            }
            ,
            t.TimeBase.prototype._getTimeSignature = function() {
                return t.Transport ? t.Transport.timeSignature : 4
            }
            ,
            t.TimeBase.prototype._getPPQ = function() {
                return t.Transport ? t.Transport.PPQ : 192
            }
            ,
            t.TimeBase.prototype._now = function() {
                return this.now()
            }
            ,
            t.TimeBase.prototype._frequencyToUnits = function(t) {
                return 1 / t
            }
            ,
            t.TimeBase.prototype._beatsToUnits = function(t) {
                return 60 / this._getBpm() * t
            }
            ,
            t.TimeBase.prototype._secondsToUnits = function(t) {
                return t
            }
            ,
            t.TimeBase.prototype._ticksToUnits = function(t) {
                return t * (this._beatsToUnits(1) / this._getPPQ())
            }
            ,
            t.TimeBase.prototype._noArg = function() {
                return this._now()
            }
            ,
            t.TimeBase.prototype.valueOf = function() {
                if (t.isUndef(this._val))
                    return this._noArg();
                if (t.isString(this._val) && t.isUndef(this._units)) {
                    for (var e in this._expressions)
                        if (this._expressions[e].regexp.test(this._val.trim())) {
                            this._units = e;
                            break
                        }
                } else if (t.isObject(this._val)) {
                    var n = 0;
                    for (var i in this._val) {
                        var o = this._val[i];
                        n += new this.constructor(i).valueOf() * o
                    }
                    return n
                }
                if (t.isDefined(this._units)) {
                    var r = this._expressions[this._units]
                      , s = this._val.toString().trim().match(r.regexp);
                    return s ? r.method.apply(this, s.slice(1)) : r.method.call(this, parseFloat(this._val))
                }
                return this._val
            }
            ,
            t.TimeBase.prototype.toSeconds = function() {
                return this.valueOf()
            }
            ,
            t.TimeBase.prototype.toFrequency = function() {
                return 1 / this.toSeconds()
            }
            ,
            t.TimeBase.prototype.toSamples = function() {
                return this.toSeconds() * this.context.sampleRate
            }
            ,
            t.TimeBase.prototype.toMilliseconds = function() {
                return 1e3 * this.toSeconds()
            }
            ,
            t.TimeBase.prototype.dispose = function() {
                this._val = null,
                this._units = null
            }
            ,
            t.TimeBase
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(9), n(8)],
        void 0 === (o = function(t) {
            return t.Time = function(e, n) {
                if (!(this instanceof t.Time))
                    return new t.Time(e,n);
                t.TimeBase.call(this, e, n)
            }
            ,
            t.extend(t.Time, t.TimeBase),
            t.Time.prototype._expressions = Object.assign({}, t.TimeBase.prototype._expressions, {
                quantize: {
                    regexp: /^@(.+)/,
                    method: function(e) {
                        if (t.Transport) {
                            var n = new this.constructor(e);
                            return this._secondsToUnits(t.Transport.nextSubdivision(n))
                        }
                        return 0
                    }
                },
                now: {
                    regexp: /^\+(.+)/,
                    method: function(t) {
                        return this._now() + new this.constructor(t)
                    }
                }
            }),
            t.Time.prototype.quantize = function(e, n) {
                n = t.defaultArg(n, 1);
                var i = new this.constructor(e)
                  , o = this.valueOf();
                return o + (Math.round(o / i) * i - o) * n
            }
            ,
            t.Time.prototype.toNotation = function() {
                for (var e = this.toSeconds(), n = ["1m"], i = 1; i < 8; i++) {
                    var o = Math.pow(2, i);
                    n.push(o + "n."),
                    n.push(o + "n"),
                    n.push(o + "t")
                }
                n.push("0");
                var r = n[0]
                  , s = t.Time(n[0]).toSeconds();
                return n.forEach(function(n) {
                    var i = t.Time(n).toSeconds();
                    Math.abs(i - e) < Math.abs(s - e) && (r = n,
                    s = i)
                }),
                r
            }
            ,
            t.Time.prototype.toBarsBeatsSixteenths = function() {
                var t = this._beatsToUnits(1)
                  , e = this.valueOf() / t;
                e = parseFloat(e.toFixed(4));
                var n = Math.floor(e / this._getTimeSignature())
                  , i = e % 1 * 4;
                return e = Math.floor(e) % this._getTimeSignature(),
                (i = i.toString()).length > 3 && (i = parseFloat(parseFloat(i).toFixed(3))),
                [n, e, i].join(":")
            }
            ,
            t.Time.prototype.toTicks = function() {
                var t = this._beatsToUnits(1)
                  , e = this.valueOf() / t;
                return Math.round(e * this._getPPQ())
            }
            ,
            t.Time.prototype.toSeconds = function() {
                return this.valueOf()
            }
            ,
            t.Time.prototype.toMidi = function() {
                return t.Frequency.ftom(this.toFrequency())
            }
            ,
            t.Time
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(5), n(2), n(13)],
        void 0 === (o = function(t) {
            "use strict";
            return t.Param = function() {
                var e = t.defaults(arguments, ["param", "units", "convert"], t.Param);
                t.AudioNode.call(this, e),
                this._param = this.input = e.param,
                this.units = e.units,
                this.convert = e.convert,
                this.overridden = !1,
                this._events = new t.Timeline(1e3),
                t.isDefined(e.value) && this._param && this.setValueAtTime(e.value, 0)
            }
            ,
            t.extend(t.Param, t.AudioNode),
            t.Param.defaults = {
                units: t.Type.Default,
                convert: !0,
                param: void 0
            },
            Object.defineProperty(t.Param.prototype, "value", {
                get: function() {
                    var t = this.now();
                    return this._toUnits(this.getValueAtTime(t))
                },
                set: function(t) {
                    this._initialValue = this._fromUnits(t),
                    this.cancelScheduledValues(this.context.currentTime),
                    this.setValueAtTime(t, this.context.currentTime)
                }
            }),
            Object.defineProperty(t.Param.prototype, "minValue", {
                get: function() {
                    return this.units === t.Type.Time || this.units === t.Type.Frequency || this.units === t.Type.NormalRange || this.units === t.Type.Positive || this.units === t.Type.BPM ? 0 : this.units === t.Type.AudioRange ? -1 : this.units === t.Type.Decibels ? -1 / 0 : this._param.minValue
                }
            }),
            Object.defineProperty(t.Param.prototype, "maxValue", {
                get: function() {
                    return this.units === t.Type.NormalRange || this.units === t.Type.AudioRange ? 1 : this._param.maxValue
                }
            }),
            t.Param.prototype._fromUnits = function(e) {
                if (!this.convert && !t.isUndef(this.convert) || this.overridden)
                    return e;
                switch (this.units) {
                case t.Type.Time:
                    return this.toSeconds(e);
                case t.Type.Frequency:
                    return this.toFrequency(e);
                case t.Type.Decibels:
                    return t.dbToGain(e);
                case t.Type.NormalRange:
                    return Math.min(Math.max(e, 0), 1);
                case t.Type.AudioRange:
                    return Math.min(Math.max(e, -1), 1);
                case t.Type.Positive:
                    return Math.max(e, 0);
                default:
                    return e
                }
            }
            ,
            t.Param.prototype._toUnits = function(e) {
                if (!this.convert && !t.isUndef(this.convert))
                    return e;
                switch (this.units) {
                case t.Type.Decibels:
                    return t.gainToDb(e);
                default:
                    return e
                }
            }
            ,
            t.Param.prototype._minOutput = 1e-5,
            t.Param.AutomationType = {
                Linear: "linearRampToValueAtTime",
                Exponential: "exponentialRampToValueAtTime",
                Target: "setTargetAtTime",
                SetValue: "setValueAtTime",
                Cancel: "cancelScheduledValues"
            },
            t.Param.prototype.setValueAtTime = function(e, n) {
                return n = this.toSeconds(n),
                e = this._fromUnits(e),
                this._events.add({
                    type: t.Param.AutomationType.SetValue,
                    value: e,
                    time: n
                }),
                this.log(t.Param.AutomationType.SetValue, e, n),
                this._param.setValueAtTime(e, n),
                this
            }
            ,
            t.Param.prototype.getValueAtTime = function(e) {
                e = this.toSeconds(e);
                var n = this._events.getAfter(e)
                  , i = this._events.get(e)
                  , o = t.defaultArg(this._initialValue, this._param.defaultValue)
                  , r = o;
                if (null === i)
                    r = o;
                else if (i.type === t.Param.AutomationType.Target) {
                    var s, a = this._events.getBefore(i.time);
                    s = null === a ? o : a.value,
                    r = this._exponentialApproach(i.time, s, i.value, i.constant, e)
                } else
                    r = null === n ? i.value : n.type === t.Param.AutomationType.Linear ? this._linearInterpolate(i.time, i.value, n.time, n.value, e) : n.type === t.Param.AutomationType.Exponential ? this._exponentialInterpolate(i.time, i.value, n.time, n.value, e) : i.value;
                return r
            }
            ,
            t.Param.prototype.setRampPoint = function(t) {
                t = this.toSeconds(t);
                var e = this.getValueAtTime(t);
                return this.cancelAndHoldAtTime(t),
                0 === e && (e = this._minOutput),
                this.setValueAtTime(this._toUnits(e), t),
                this
            }
            ,
            t.Param.prototype.linearRampToValueAtTime = function(e, n) {
                return e = this._fromUnits(e),
                n = this.toSeconds(n),
                this._events.add({
                    type: t.Param.AutomationType.Linear,
                    value: e,
                    time: n
                }),
                this.log(t.Param.AutomationType.Linear, e, n),
                this._param.linearRampToValueAtTime(e, n),
                this
            }
            ,
            t.Param.prototype.exponentialRampToValueAtTime = function(e, n) {
                return e = this._fromUnits(e),
                e = Math.max(this._minOutput, e),
                n = this.toSeconds(n),
                this._events.add({
                    type: t.Param.AutomationType.Exponential,
                    time: n,
                    value: e
                }),
                this.log(t.Param.AutomationType.Exponential, e, n),
                this._param.exponentialRampToValueAtTime(e, n),
                this
            }
            ,
            t.Param.prototype.exponentialRampTo = function(t, e, n) {
                return n = this.toSeconds(n),
                this.setRampPoint(n),
                this.exponentialRampToValueAtTime(t, n + this.toSeconds(e)),
                this
            }
            ,
            t.Param.prototype.linearRampTo = function(t, e, n) {
                return n = this.toSeconds(n),
                this.setRampPoint(n),
                this.linearRampToValueAtTime(t, n + this.toSeconds(e)),
                this
            }
            ,
            t.Param.prototype.targetRampTo = function(t, e, n) {
                return n = this.toSeconds(n),
                this.setRampPoint(n),
                this.exponentialApproachValueAtTime(t, n, e),
                this
            }
            ,
            t.Param.prototype.exponentialApproachValueAtTime = function(t, e, n) {
                var i = Math.log(this.toSeconds(n) + 1) / Math.log(200);
                return e = this.toSeconds(e),
                this.setTargetAtTime(t, e, i)
            }
            ,
            t.Param.prototype.setTargetAtTime = function(e, n, i) {
                if (e = this._fromUnits(e),
                i <= 0)
                    throw new Error("timeConstant must be greater than 0");
                return n = this.toSeconds(n),
                this._events.add({
                    type: t.Param.AutomationType.Target,
                    value: e,
                    time: n,
                    constant: i
                }),
                this.log(t.Param.AutomationType.Target, e, n, i),
                this._param.setTargetAtTime(e, n, i),
                this
            }
            ,
            t.Param.prototype.setValueCurveAtTime = function(e, n, i, o) {
                o = t.defaultArg(o, 1),
                i = this.toSeconds(i),
                n = this.toSeconds(n),
                this.setValueAtTime(e[0] * o, n);
                for (var r = i / (e.length - 1), s = 1; s < e.length; s++)
                    this.linearRampToValueAtTime(e[s] * o, n + s * r);
                return this
            }
            ,
            t.Param.prototype.cancelScheduledValues = function(e) {
                return e = this.toSeconds(e),
                this._events.cancel(e),
                this._param.cancelScheduledValues(e),
                this.log(t.Param.AutomationType.Cancel, e),
                this
            }
            ,
            t.Param.prototype.cancelAndHoldAtTime = function(e) {
                var n = this.getValueAtTime(e);
                this.log("cancelAndHoldAtTime", e, "value=" + n),
                this._param.cancelScheduledValues(e);
                var i = this._events.get(e)
                  , o = this._events.getAfter(e);
                return i && i.time === e ? o ? this._events.cancel(o.time) : this._events.cancel(e + 1e-6) : o && (this._events.cancel(o.time),
                o.type === t.Param.AutomationType.Linear ? this.linearRampToValueAtTime(n, e) : o.type === t.Param.AutomationType.Exponential && this.exponentialRampToValueAtTime(n, e)),
                this._events.add({
                    type: t.Param.AutomationType.SetValue,
                    value: n,
                    time: e
                }),
                this._param.setValueAtTime(n, e),
                this
            }
            ,
            t.Param.prototype.rampTo = function(e, n, i) {
                return n = t.defaultArg(n, .1),
                this.units === t.Type.Frequency || this.units === t.Type.BPM || this.units === t.Type.Decibels ? this.exponentialRampTo(e, n, i) : this.linearRampTo(e, n, i),
                this
            }
            ,
            t.Param.prototype._exponentialApproach = function(t, e, n, i, o) {
                return n + (e - n) * Math.exp(-(o - t) / i)
            }
            ,
            t.Param.prototype._linearInterpolate = function(t, e, n, i, o) {
                return e + (o - t) / (n - t) * (i - e)
            }
            ,
            t.Param.prototype._exponentialInterpolate = function(t, e, n, i, o) {
                return e * Math.pow(i / e, (o - t) / (n - t))
            }
            ,
            t.Param.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._param = null,
                this._events = null,
                this
            }
            ,
            t.Param
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0)],
        void 0 === (o = function(t) {
            if (t.supported) {
                !t.global.hasOwnProperty("OfflineAudioContext") && t.global.hasOwnProperty("webkitOfflineAudioContext") && (t.global.OfflineAudioContext = t.global.webkitOfflineAudioContext);
                var e = new OfflineAudioContext(1,1,44100).startRendering();
                e && t.isFunction(e.then) || (OfflineAudioContext.prototype._native_startRendering = OfflineAudioContext.prototype.startRendering,
                OfflineAudioContext.prototype.startRendering = function() {
                    return new Promise(function(t) {
                        this.oncomplete = function(e) {
                            t(e.renderedBuffer)
                        }
                        ,
                        this._native_startRendering()
                    }
                    .bind(this))
                }
                )
            }
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0)],
        void 0 === (o = function(t) {
            "use strict";
            return t.Timeline = function() {
                var e = t.defaults(arguments, ["memory"], t.Timeline);
                t.call(this),
                this._timeline = [],
                this.memory = e.memory
            }
            ,
            t.extend(t.Timeline),
            t.Timeline.defaults = {
                memory: 1 / 0
            },
            Object.defineProperty(t.Timeline.prototype, "length", {
                get: function() {
                    return this._timeline.length
                }
            }),
            t.Timeline.prototype.add = function(e) {
                if (t.isUndef(e.time))
                    throw new Error("Tone.Timeline: events must have a time attribute");
                e.time = e.time.valueOf();
                var n = this._search(e.time);
                if (this._timeline.splice(n + 1, 0, e),
                this.length > this.memory) {
                    var i = this.length - this.memory;
                    this._timeline.splice(0, i)
                }
                return this
            }
            ,
            t.Timeline.prototype.remove = function(t) {
                var e = this._timeline.indexOf(t);
                return -1 !== e && this._timeline.splice(e, 1),
                this
            }
            ,
            t.Timeline.prototype.get = function(e, n) {
                n = t.defaultArg(n, "time");
                var i = this._search(e, n);
                return -1 !== i ? this._timeline[i] : null
            }
            ,
            t.Timeline.prototype.peek = function() {
                return this._timeline[0]
            }
            ,
            t.Timeline.prototype.shift = function() {
                return this._timeline.shift()
            }
            ,
            t.Timeline.prototype.getAfter = function(e, n) {
                n = t.defaultArg(n, "time");
                var i = this._search(e, n);
                return i + 1 < this._timeline.length ? this._timeline[i + 1] : null
            }
            ,
            t.Timeline.prototype.getBefore = function(e, n) {
                n = t.defaultArg(n, "time");
                var i = this._timeline.length;
                if (i > 0 && this._timeline[i - 1][n] < e)
                    return this._timeline[i - 1];
                var o = this._search(e, n);
                return o - 1 >= 0 ? this._timeline[o - 1] : null
            }
            ,
            t.Timeline.prototype.cancel = function(t) {
                if (this._timeline.length > 1) {
                    var e = this._search(t);
                    if (e >= 0)
                        if (this._timeline[e].time === t) {
                            for (var n = e; n >= 0 && this._timeline[n].time === t; n--)
                                e = n;
                            this._timeline = this._timeline.slice(0, e)
                        } else
                            this._timeline = this._timeline.slice(0, e + 1);
                    else
                        this._timeline = []
                } else
                    1 === this._timeline.length && this._timeline[0].time >= t && (this._timeline = []);
                return this
            }
            ,
            t.Timeline.prototype.cancelBefore = function(t) {
                var e = this._search(t);
                return e >= 0 && (this._timeline = this._timeline.slice(e + 1)),
                this
            }
            ,
            t.Timeline.prototype.previousEvent = function(t) {
                var e = this._timeline.indexOf(t);
                return e > 0 ? this._timeline[e - 1] : null
            }
            ,
            t.Timeline.prototype._search = function(e, n) {
                if (0 === this._timeline.length)
                    return -1;
                n = t.defaultArg(n, "time");
                var i = 0
                  , o = this._timeline.length
                  , r = o;
                if (o > 0 && this._timeline[o - 1][n] <= e)
                    return o - 1;
                for (; i < r; ) {
                    var s = Math.floor(i + (r - i) / 2)
                      , a = this._timeline[s]
                      , u = this._timeline[s + 1];
                    if (a[n] === e) {
                        for (var c = s; c < this._timeline.length; c++) {
                            this._timeline[c][n] === e && (s = c)
                        }
                        return s
                    }
                    if (a[n] < e && u[n] > e)
                        return s;
                    a[n] > e ? r = s : i = s + 1
                }
                return -1
            }
            ,
            t.Timeline.prototype._iterate = function(e, n, i) {
                n = t.defaultArg(n, 0),
                i = t.defaultArg(i, this._timeline.length - 1),
                this._timeline.slice(n, i + 1).forEach(function(t) {
                    e.call(this, t)
                }
                .bind(this))
            }
            ,
            t.Timeline.prototype.forEach = function(t) {
                return this._iterate(t),
                this
            }
            ,
            t.Timeline.prototype.forEachBefore = function(t, e) {
                var n = this._search(t);
                return -1 !== n && this._iterate(e, 0, n),
                this
            }
            ,
            t.Timeline.prototype.forEachAfter = function(t, e) {
                var n = this._search(t);
                return this._iterate(e, n + 1),
                this
            }
            ,
            t.Timeline.prototype.forEachBetween = function(t, e, n) {
                var i = this._search(t)
                  , o = this._search(e);
                return -1 !== i && -1 !== o ? (this._timeline[i].time !== t && (i += 1),
                this._timeline[o].time === e && (o -= 1),
                this._iterate(n, i, o)) : -1 === i && this._iterate(n, 0, o),
                this
            }
            ,
            t.Timeline.prototype.forEachFrom = function(t, e) {
                for (var n = this._search(t); n >= 0 && this._timeline[n].time >= t; )
                    n--;
                return this._iterate(e, n + 1),
                this
            }
            ,
            t.Timeline.prototype.forEachAtTime = function(t, e) {
                var n = this._search(t);
                return -1 !== n && this._iterate(function(n) {
                    n.time === t && e.call(this, n)
                }, 0, n),
                this
            }
            ,
            t.Timeline.prototype.dispose = function() {
                return t.prototype.dispose.call(this),
                this._timeline = null,
                this
            }
            ,
            t.Timeline
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(2)],
        void 0 === (o = function(t) {
            "use strict";
            return t.SignalBase = function() {
                t.AudioNode.call(this)
            }
            ,
            t.extend(t.SignalBase, t.AudioNode),
            t.SignalBase.prototype.connect = function(e, n, i) {
                return t.Signal && t.Signal === e.constructor || t.Param && t.Param === e.constructor ? (e._param.cancelScheduledValues(0),
                e._param.setValueAtTime(0, 0),
                e.overridden = !0) : e instanceof AudioParam && (e.cancelScheduledValues(0),
                e.setValueAtTime(0, 0)),
                t.AudioNode.prototype.connect.call(this, e, n, i),
                this
            }
            ,
            t.SignalBase
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(14), n(33)],
        void 0 === (o = function(t) {
            "use strict";
            return t.WaveShaper = function(e, n) {
                t.SignalBase.call(this),
                this._shaper = this.input = this.output = this.context.createWaveShaper(),
                this._curve = null,
                Array.isArray(e) ? this.curve = e : isFinite(e) || t.isUndef(e) ? this._curve = new Float32Array(t.defaultArg(e, 1024)) : t.isFunction(e) && (this._curve = new Float32Array(t.defaultArg(n, 1024)),
                this.setMap(e))
            }
            ,
            t.extend(t.WaveShaper, t.SignalBase),
            t.WaveShaper.prototype.setMap = function(t) {
                for (var e = new Array(this._curve.length), n = 0, i = this._curve.length; n < i; n++) {
                    var o = n / (i - 1) * 2 - 1;
                    e[n] = t(o, n)
                }
                return this.curve = e,
                this
            }
            ,
            Object.defineProperty(t.WaveShaper.prototype, "curve", {
                get: function() {
                    return this._shaper.curve
                },
                set: function(t) {
                    this._curve = new Float32Array(t),
                    this._shaper.curve = this._curve
                }
            }),
            Object.defineProperty(t.WaveShaper.prototype, "oversample", {
                get: function() {
                    return this._shaper.oversample
                },
                set: function(t) {
                    if (!["none", "2x", "4x"].includes(t))
                        throw new RangeError("Tone.WaveShaper: oversampling must be either 'none', '2x', or '4x'");
                    this._shaper.oversample = t
                }
            }),
            t.WaveShaper.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this),
                this._shaper.disconnect(),
                this._shaper = null,
                this._curve = null,
                this
            }
            ,
            t.WaveShaper
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e) {
        t.exports = '<?xml version="1.0" encoding="utf-8"?>\n<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">\n<rect fill="white" width="50" height="50"/>\n<polygon fill="1D1D1D" points="41.6,24.6 12.5,7.7 12.5,41.4 "/>\n</svg>'
    }
    , function(t, e) {
        t.exports = '<?xml version="1.0" encoding="utf-8"?>\n<svg version="1.1" id="Livello_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">\n<rect fill="white" width="50" height="50"/>\n<polygon fill="#FFD600" points="41.6,24.6 12.5,7.7 12.5,41.4 "/>\n</svg>'
    }
    , function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n(4)
          , o = n(17)
          , r = n.n(o)
          , s = n(16)
          , a = n.n(s);
        class u extends i.EventEmitter {
            constructor(t) {
                super(),
                this.element = document.createElement("button"),
                this.element.id = "unmute-button",
                this.element.setAttribute("aria-pressed", !1),
                this.element.setAttribute("aria-label", "mute"),
                "none" !== t && t.appendChild(this.element),
                this.element.addEventListener("click", t=>{
                    this.emit("click", t)
                }
                ),
                this.mute = !0
            }
            get mute() {
                return this.element.classList.contains("muted")
            }
            set mute(t) {
                this.element.setAttribute("aria-pressed", t),
                t ? (this.element.classList.add("muted"),
                this.element.innerHTML = a.a) : (this.element.classList.remove("muted"),
                this.element.innerHTML = r.a)
            }
            click() {
                this.element.click()
            }
            remove() {
                this.element.remove()
            }
        }
        var c = n(0)
          , p = n.n(c);
        n(35),
        n(1),
        n(25);
        class h extends i.EventEmitter {
            constructor(t, e, n) {
                super(),
                n && n.context !== p.a.context ? p.a.context = n.context : t && t !== p.a.context && (p.a.context = t),
                this.context = p.a.context,
                n && n.Master !== p.a.Master ? this.master = n.Master : this.master = this.context.master,
                this.context.addEventListener("statechange", t=>{
                    this.emit("statechange", t)
                }
                ),
                this.master.mute = e;
                let i = this.mute;
                const o = ()=>{
                    requestAnimationFrame(o),
                    this.mute !== i && (i = this.mute,
                    this.emit("mute", this.mute))
                }
                ;
                o()
            }
            get state() {
                return this.context.state
            }
            get mute() {
                return this.master.mute || "running" !== this.state
            }
            set mute(t) {
                "running" === this.state && (this.master.mute = t)
            }
            resume() {
                return p.a.supported && "running" !== this.state ? this.context.resume() : Promise.resolve()
            }
            started() {
                return "running" === this.state ? Promise.resolve() : new Promise(t=>{
                    this.on("statechange", ()=>{
                        "running" === this.state && t()
                    }
                    )
                }
                )
            }
            toggleMute() {
                this.mute = !this.mute
            }
        }
        const l = "data:audio/mp3;base64,//MkxAAHiAICWABElBeKPL/RANb2w+yiT1g/gTok//lP/W/l3h8QO/OCdCqCW2Cw//MkxAQHkAIWUAhEmAQXWUOFW2dxPu//9mr60ElY5sseQ+xxesmHKtZr7bsqqX2L//MkxAgFwAYiQAhEAC2hq22d3///9FTV6tA36JdgBJoOGgc+7qvqej5Zu7/7uI9l//MkxBQHAAYi8AhEAO193vt9KGOq+6qcT7hhfN5FTInmwk8RkqKImTM55pRQHQSq//MkxBsGkgoIAABHhTACIJLf99nVI///yuW1uBqWfEu7CgNPWGpUadBmZ////4sL//MkxCMHMAH9iABEmAsKioqKigsLCwtVTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVV//MkxCkECAUYCAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
        class f {
            constructor(t) {
                this.element = document.createElement("audio"),
                this.element.controls = !1,
                this.element.preload = "auto",
                this.element.loop = !1,
                this.element.src = l,
                this.element.title = t
            }
            click() {
                this.element.play()
            }
        }
        const d = document.currentScript;
        n(23);
        n.d(e, "UnmuteButton", function() {
            return v
        });
        class m extends i.EventEmitter {
            constructor({container: t=document.body, tone: e=window.Tone, context: n=(e ? e.context : null), title: i="Web Audio", mute: o=!1}={}) {
                super(),
                this._button = new u(t),
                this._context = new h(n,o,e),
                this._audioElement = new f(i),
                this._context.on("mute", t=>{
                    this._button.mute = t,
                    this.emit(t ? "mute" : "unmute")
                }
                ),
                this._button.on("click", ()=>{
                    "running" !== this._context.state ? (this.start(),
                    this.emit("click")) : this._context.toggleMute()
                }
                ),
                this._context.started().then(()=>{
                    this.emit("start")
                }
                ),
                this._button.mute = this._context.mute
            }
            get mute() {
                return this._context.mute
            }
            set mute(t) {
                this._button.mute = t,
                this._context.mute = t
            }
            get element() {
                return this._button.element
            }
            get context() {
                return this._context.context
            }
            remove() {
                this._button.remove()
            }
            click() {
                this._button.click()
            }
            start() {
                "running" !== this._context.state && (this._context.resume(),
                this._audioElement.click())
            }
        }
        function v(...t) {
            return new m(...t)
        }
        !function(t) {
            const e = d.getAttribute("data-add-button");
            if (d && "true" === e) {
                const e = "true" === d.getAttribute("data-mute");
                "complete" === document.readyState ? t({
                    mute: e
                }) : window.addEventListener("load", ()=>t({
                    mute: e
                }))
            }
        }(v)
    }
    , function(t, e) {
        t.exports = function(t) {
            var e = "undefined" != typeof window && window.location;
            if (!e)
                throw new Error("fixUrls requires window.location");
            if (!t || "string" != typeof t)
                return t;
            var n = e.protocol + "//" + e.host
              , i = n + e.pathname.replace(/\/[^\/]*$/, "/");
            return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
                var o, r = e.trim().replace(/^"(.*)"$/, function(t, e) {
                    return e
                }).replace(/^'(.*)'$/, function(t, e) {
                    return e
                });
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r) ? t : (o = 0 === r.indexOf("//") ? r : 0 === r.indexOf("/") ? n + r : i + r.replace(/^\.\//, ""),
                "url(" + JSON.stringify(o) + ")")
            })
        }
    }
    , function(t, e, n) {
        var i, o, r = {}, s = (i = function() {
            return window && document && document.all && !window.atob
        }
        ,
        function() {
            return void 0 === o && (o = i.apply(this, arguments)),
            o
        }
        ), a = function(t) {
            var e = {};
            return function(t) {
                if ("function" == typeof t)
                    return t();
                if (void 0 === e[t]) {
                    var n = function(t) {
                        return document.querySelector(t)
                    }
                    .call(this, t);
                    if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                        try {
                            n = n.contentDocument.head
                        } catch (t) {
                            n = null
                        }
                    e[t] = n
                }
                return e[t]
            }
        }(), u = null, c = 0, p = [], h = n(19);
        function l(t, e) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n]
                  , o = r[i.id];
                if (o) {
                    o.refs++;
                    for (var s = 0; s < o.parts.length; s++)
                        o.parts[s](i.parts[s]);
                    for (; s < i.parts.length; s++)
                        o.parts.push(_(i.parts[s], e))
                } else {
                    var a = [];
                    for (s = 0; s < i.parts.length; s++)
                        a.push(_(i.parts[s], e));
                    r[i.id] = {
                        id: i.id,
                        refs: 1,
                        parts: a
                    }
                }
            }
        }
        function f(t, e) {
            for (var n = [], i = {}, o = 0; o < t.length; o++) {
                var r = t[o]
                  , s = e.base ? r[0] + e.base : r[0]
                  , a = {
                    css: r[1],
                    media: r[2],
                    sourceMap: r[3]
                };
                i[s] ? i[s].parts.push(a) : n.push(i[s] = {
                    id: s,
                    parts: [a]
                })
            }
            return n
        }
        function d(t, e) {
            var n = a(t.insertInto);
            if (!n)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var i = p[p.length - 1];
            if ("top" === t.insertAt)
                i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild),
                p.push(e);
            else if ("bottom" === t.insertAt)
                n.appendChild(e);
            else {
                if ("object" != typeof t.insertAt || !t.insertAt.before)
                    throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = a(t.insertInto + " " + t.insertAt.before);
                n.insertBefore(e, o)
            }
        }
        function m(t) {
            if (null === t.parentNode)
                return !1;
            t.parentNode.removeChild(t);
            var e = p.indexOf(t);
            e >= 0 && p.splice(e, 1)
        }
        function v(t) {
            var e = document.createElement("style");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"),
            y(e, t.attrs),
            d(t, e),
            e
        }
        function y(t, e) {
            Object.keys(e).forEach(function(n) {
                t.setAttribute(n, e[n])
            })
        }
        function _(t, e) {
            var n, i, o, r;
            if (e.transform && t.css) {
                if (!(r = e.transform(t.css)))
                    return function() {}
                    ;
                t.css = r
            }
            if (e.singleton) {
                var s = c++;
                n = u || (u = v(e)),
                i = T.bind(null, n, s, !1),
                o = T.bind(null, n, s, !0)
            } else
                t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(t) {
                    var e = document.createElement("link");
                    return void 0 === t.attrs.type && (t.attrs.type = "text/css"),
                    t.attrs.rel = "stylesheet",
                    y(e, t.attrs),
                    d(t, e),
                    e
                }(e),
                i = function(t, e, n) {
                    var i = n.css
                      , o = n.sourceMap
                      , r = void 0 === e.convertToAbsoluteUrls && o;
                    (e.convertToAbsoluteUrls || r) && (i = h(i));
                    o && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                    var s = new Blob([i],{
                        type: "text/css"
                    })
                      , a = t.href;
                    t.href = URL.createObjectURL(s),
                    a && URL.revokeObjectURL(a)
                }
                .bind(null, n, e),
                o = function() {
                    m(n),
                    n.href && URL.revokeObjectURL(n.href)
                }
                ) : (n = v(e),
                i = function(t, e) {
                    var n = e.css
                      , i = e.media;
                    i && t.setAttribute("media", i);
                    if (t.styleSheet)
                        t.styleSheet.cssText = n;
                    else {
                        for (; t.firstChild; )
                            t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(n))
                    }
                }
                .bind(null, n),
                o = function() {
                    m(n)
                }
                );
            return i(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap)
                        return;
                    i(t = e)
                } else
                    o()
            }
        }
        t.exports = function(t, e) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
                throw new Error("The style-loader cannot be used in a non-browser environment");
            (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {},
            e.singleton || "boolean" == typeof e.singleton || (e.singleton = s()),
            e.insertInto || (e.insertInto = "head"),
            e.insertAt || (e.insertAt = "bottom");
            var n = f(t, e);
            return l(n, e),
            function(t) {
                for (var i = [], o = 0; o < n.length; o++) {
                    var s = n[o];
                    (a = r[s.id]).refs--,
                    i.push(a)
                }
                t && l(f(t, e), e);
                for (o = 0; o < i.length; o++) {
                    var a;
                    if (0 === (a = i[o]).refs) {
                        for (var u = 0; u < a.parts.length; u++)
                            a.parts[u]();
                        delete r[a.id]
                    }
                }
            }
        }
        ;
        var g, x = (g = [],
        function(t, e) {
            return g[t] = e,
            g.filter(Boolean).join("\n")
        }
        );
        function T(t, e, n, i) {
            var o = n ? "" : i.css;
            if (t.styleSheet)
                t.styleSheet.cssText = x(e, o);
            else {
                var r = document.createTextNode(o)
                  , s = t.childNodes;
                s[e] && t.removeChild(s[e]),
                s.length ? t.insertBefore(r, s[e]) : t.appendChild(r)
            }
        }
    }
    , function(t, e) {
        t.exports = function(t) {
            var e = [];
            return e.toString = function() {
                return this.map(function(e) {
                    var n = function(t, e) {
                        var n = t[1] || ""
                          , i = t[3];
                        if (!i)
                            return n;
                        if (e && "function" == typeof btoa) {
                            var o = (s = i,
                            "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */")
                              , r = i.sources.map(function(t) {
                                return "/*# sourceURL=" + i.sourceRoot + t + " */"
                            });
                            return [n].concat(r).concat([o]).join("\n")
                        }
                        var s;
                        return [n].join("\n")
                    }(e, t);
                    return e[2] ? "@media " + e[2] + "{" + n + "}" : n
                }).join("")
            }
            ,
            e.i = function(t, n) {
                "string" == typeof t && (t = [[null, t, ""]]);
                for (var i = {}, o = 0; o < this.length; o++) {
                    var r = this[o][0];
                    "number" == typeof r && (i[r] = !0)
                }
                for (o = 0; o < t.length; o++) {
                    var s = t[o];
                    "number" == typeof s[0] && i[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"),
                    e.push(s))
                }
            }
            ,
            e
        }
    }
    , function(t, e, n) {
        (t.exports = n(21)(!1)).push([t.i, "#unmute-button{--unmute-margin:8px;--unmute-size:24px;position:fixed;right:var(--unmute-margin);top:var(--unmute-margin);border-radius:50%;width:var(--unmute-size);height:var(--unmute-size);background-color:transparent;border:none;cursor:pointer}#unmute-button svg{position:absolute;left:0;top:0;width:100%;height:100%}", ""])
    }
    , function(t, e, n) {
        var i = n(22);
        "string" == typeof i && (i = [[t.i, i, ""]]);
        var o = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        n(20)(i, o);
        i.locals && (t.exports = i.locals)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(7), n(3), n(2)],
        void 0 === (o = function(t) {
            "use strict";
            return t.Volume = function() {
                var e = t.defaults(arguments, ["volume"], t.Volume);
                t.AudioNode.call(this, e),
                this.output = this.input = new t.Gain(e.volume,t.Type.Decibels),
                this._unmutedVolume = e.volume,
                this.volume = this.output.gain,
                this._readOnly("volume"),
                this.mute = e.mute
            }
            ,
            t.extend(t.Volume, t.AudioNode),
            t.Volume.defaults = {
                volume: 0,
                mute: !1
            },
            Object.defineProperty(t.Volume.prototype, "mute", {
                get: function() {
                    return this.volume.value === -1 / 0
                },
                set: function(t) {
                    !this.mute && t ? (this._unmutedVolume = this.volume.value,
                    this.volume.value = -1 / 0) : this.mute && !t && (this.volume.value = this._unmutedVolume)
                }
            }),
            t.Volume.prototype.dispose = function() {
                return this.input.dispose(),
                t.AudioNode.prototype.dispose.call(this),
                this._writable("volume"),
                this.volume.dispose(),
                this.volume = null,
                this
            }
            ,
            t.Volume
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(24), n(1), n(2)],
        void 0 === (o = function(t) {
            "use strict";
            t.Master = function() {
                t.AudioNode.call(this),
                t.getContext(function() {
                    this.createInsOuts(1, 0),
                    this._volume = this.output = new t.Volume,
                    this.volume = this._volume.volume,
                    this._readOnly("volume"),
                    this.input.chain(this.output, this.context.destination),
                    this.context.master = this
                }
                .bind(this))
            }
            ,
            t.extend(t.Master, t.AudioNode),
            t.Master.defaults = {
                volume: 0,
                mute: !1
            },
            t.Master.prototype.isMaster = !0,
            Object.defineProperty(t.Master.prototype, "mute", {
                get: function() {
                    return this._volume.mute
                },
                set: function(t) {
                    this._volume.mute = t
                }
            }),
            t.Master.prototype.chain = function() {
                this.input.disconnect(),
                this.input.chain.apply(this.input, arguments),
                arguments[arguments.length - 1].connect(this.output)
            }
            ,
            t.Master.prototype.dispose = function() {
                t.AudioNode.prototype.dispose.call(this),
                this._writable("volume"),
                this._volume.dispose(),
                this._volume = null,
                this.volume = null
            }
            ,
            t.AudioNode.prototype.toMaster = function() {
                return this.connect(this.context.master),
                this
            }
            ;
            var e = t.Master;
            return t.Master = new e,
            t.Context.on("init", function(n) {
                n.master && n.master.isMaster ? t.Master = n.master : t.Master = new e
            }),
            t.Context.on("close", function(t) {
                t.master && t.master.isMaster && t.master.dispose()
            }),
            t.Master
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(1), n(12)],
        void 0 === (o = function(t) {
            return t.OfflineContext = function(e, n, i) {
                var o = new OfflineAudioContext(e,n * i,i);
                t.Context.call(this, {
                    context: o,
                    clockSource: "offline",
                    lookAhead: 0,
                    updateInterval: 128 / i
                }),
                this._duration = n,
                this._currentTime = 0
            }
            ,
            t.extend(t.OfflineContext, t.Context),
            t.OfflineContext.prototype.now = function() {
                return this._currentTime
            }
            ,
            t.OfflineContext.prototype.resume = function() {
                return Promise.resolve()
            }
            ,
            t.OfflineContext.prototype.render = function() {
                for (; this._duration - this._currentTime >= 0; )
                    this.emit("tick"),
                    this._currentTime += this.blockTime;
                return this._context.startRendering()
            }
            ,
            t.OfflineContext.prototype.close = function() {
                return this._context = null,
                Promise.resolve()
            }
            ,
            t.OfflineContext
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(26)],
        void 0 === (o = function(t) {
            if (t.supported) {
                var e = navigator.userAgent.toLowerCase();
                e.includes("safari") && !e.includes("chrome") && e.includes("mobile") && (t.OfflineContext.prototype.createBufferSource = function() {
                    var t = this._context.createBufferSource()
                      , e = t.start;
                    return t.start = function(n) {
                        this.setTimeout(function() {
                            e.call(t, n)
                        }
                        .bind(this), 0)
                    }
                    .bind(this),
                    t
                }
                )
            }
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(6), n(27), n(1), n(3)],
        void 0 === (o = function(t) {
            if (t.supported && !t.global.AudioContext.prototype.createConstantSource) {
                var e = function(t) {
                    this.context = t;
                    for (var e = t.createBuffer(1, 128, t.sampleRate), n = e.getChannelData(0), i = 0; i < n.length; i++)
                        n[i] = 1;
                    this._bufferSource = t.createBufferSource(),
                    this._bufferSource.channelCount = 1,
                    this._bufferSource.channelCountMode = "explicit",
                    this._bufferSource.buffer = e,
                    this._bufferSource.loop = !0;
                    var o = this._output = t.createGain();
                    this.offset = o.gain,
                    this._bufferSource.connect(o)
                };
                e.prototype.start = function(t) {
                    return this._bufferSource.start(t),
                    this
                }
                ,
                e.prototype.stop = function(t) {
                    return this._bufferSource.stop(t),
                    this
                }
                ,
                e.prototype.connect = function() {
                    return this._output.connect.apply(this._output, arguments),
                    this
                }
                ,
                e.prototype.disconnect = function() {
                    return this._output.disconnect.apply(this._output, arguments),
                    this
                }
                ,
                AudioContext.prototype.createConstantSource = function() {
                    return new e(this)
                }
                ,
                t.Context.prototype.createConstantSource = function() {
                    return new e(this)
                }
            }
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(3), n(2)],
        void 0 === (o = function(t) {
            "use strict";
            return t.Split = function() {
                t.AudioNode.call(this),
                this.createInsOuts(0, 2),
                this._splitter = this.input = this.context.createChannelSplitter(2),
                this.left = this.output[0] = new t.Gain,
                this.right = this.output[1] = new t.Gain,
                this._splitter.connect(this.left, 0, 0),
                this._splitter.connect(this.right, 1, 0)
            }
            ,
            t.extend(t.Split, t.AudioNode),
            t.Split.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this._splitter.disconnect(),
                this.left.dispose(),
                this.left = null,
                this.right.dispose(),
                this.right = null,
                this._splitter = null,
                this
            }
            ,
            t.Split
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(10)],
        void 0 === (o = function(t) {
            return t.TransportTime = function(e, n) {
                if (!(this instanceof t.TransportTime))
                    return new t.TransportTime(e,n);
                t.Time.call(this, e, n)
            }
            ,
            t.extend(t.TransportTime, t.Time),
            t.TransportTime.prototype._now = function() {
                return t.Transport.seconds
            }
            ,
            t.TransportTime
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(3), n(14)],
        void 0 === (o = function(t) {
            return t.Zero = function() {
                t.SignalBase.call(this),
                this._gain = this.input = this.output = new t.Gain,
                this.context.getConstant(0).connect(this._gain)
            }
            ,
            t.extend(t.Zero, t.SignalBase),
            t.Zero.prototype.dispose = function() {
                return t.SignalBase.prototype.dispose.call(this),
                this._gain.dispose(),
                this._gain = null,
                this
            }
            ,
            t.Zero
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(2)],
        void 0 === (o = function(t) {
            "use strict";
            return t.Merge = function() {
                t.AudioNode.call(this),
                this.createInsOuts(2, 0),
                this.left = this.input[0] = new t.Gain,
                this.right = this.input[1] = new t.Gain,
                this._merger = this.output = this.context.createChannelMerger(2),
                this.left.connect(this._merger, 0, 0),
                this.right.connect(this._merger, 0, 1),
                this.left.channelCount = 1,
                this.right.channelCount = 1,
                this.left.channelCountMode = "explicit",
                this.right.channelCountMode = "explicit"
            }
            ,
            t.extend(t.Merge, t.AudioNode),
            t.Merge.prototype.dispose = function() {
                return t.AudioNode.prototype.dispose.call(this),
                this.left.dispose(),
                this.left = null,
                this.right.dispose(),
                this.right = null,
                this._merger.disconnect(),
                this._merger = null,
                this
            }
            ,
            t.Merge
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(6)],
        void 0 === (o = function(t) {
            if (t.supported) {
                var e = navigator.userAgent.toLowerCase();
                if (e.includes("safari") && !e.includes("chrome")) {
                    var n = function(t) {
                        for (var e in this._internalNode = this.input = this.output = t._native_createWaveShaper(),
                        this._curve = null,
                        this._internalNode)
                            this._defineProperty(this._internalNode, e)
                    };
                    Object.defineProperty(n.prototype, "curve", {
                        get: function() {
                            return this._curve
                        },
                        set: function(t) {
                            this._curve = t;
                            var e = new Float32Array(t.length + 1);
                            e.set(t, 1),
                            e[0] = t[0],
                            this._internalNode.curve = e
                        }
                    }),
                    n.prototype._defineProperty = function(e, n) {
                        t.isUndef(this[n]) && Object.defineProperty(this, n, {
                            get: function() {
                                return "function" == typeof e[n] ? e[n].bind(e) : e[n]
                            },
                            set: function(t) {
                                e[n] = t
                            }
                        })
                    }
                    ,
                    t.global.AudioContext.prototype._native_createWaveShaper = t.global.AudioContext.prototype.createWaveShaper,
                    t.global.AudioContext.prototype.createWaveShaper = function() {
                        return new n(this)
                    }
                }
            }
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0)],
        void 0 === (o = function(t) {
            "use strict";
            return t.Emitter = function() {
                t.call(this),
                this._events = {}
            }
            ,
            t.extend(t.Emitter),
            t.Emitter.prototype.on = function(t, e) {
                for (var n = t.split(/\W+/), i = 0; i < n.length; i++) {
                    var o = n[i];
                    this._events.hasOwnProperty(o) || (this._events[o] = []),
                    this._events[o].push(e)
                }
                return this
            }
            ,
            t.Emitter.prototype.once = function(t, e) {
                var n = function() {
                    e.apply(this, arguments),
                    this.off(t, n)
                }
                .bind(this);
                return this.on(t, n),
                this
            }
            ,
            t.Emitter.prototype.off = function(e, n) {
                for (var i = e.split(/\W+/), o = 0; o < i.length; o++)
                    if (e = i[o],
                    this._events.hasOwnProperty(e))
                        if (t.isUndef(n))
                            this._events[e] = [];
                        else
                            for (var r = this._events[e], s = 0; s < r.length; s++)
                                r[s] === n && r.splice(s, 1);
                return this
            }
            ,
            t.Emitter.prototype.emit = function(t) {
                if (this._events) {
                    var e = Array.apply(null, arguments).slice(1);
                    if (this._events.hasOwnProperty(t))
                        for (var n = this._events[t].slice(0), i = 0, o = n.length; i < o; i++)
                            n[i].apply(this, e)
                }
                return this
            }
            ,
            t.Emitter.mixin = function(e) {
                var n = ["on", "once", "off", "emit"];
                e._events = {};
                for (var i = 0; i < n.length; i++) {
                    var o = n[i]
                      , r = t.Emitter.prototype[o];
                    e[o] = r
                }
                return t.Emitter
            }
            ,
            t.Emitter.prototype.dispose = function() {
                return t.prototype.dispose.call(this),
                this._events = null,
                this
            }
            ,
            t.Emitter
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e, n) {
        var i, o;
        i = [n(0), n(15), n(32), n(31), n(29), n(3), n(7), n(1)],
        void 0 === (o = function(t) {
            if (t.supported && !t.global.AudioContext.prototype.createStereoPanner) {
                var e = function(e) {
                    this.context = e,
                    this.pan = new t.Signal(0,t.Type.AudioRange);
                    var n = new t.WaveShaper(function(e) {
                        return t.equalPowerScale((e + 1) / 2)
                    }
                    ,4096)
                      , i = new t.WaveShaper(function(e) {
                        return t.equalPowerScale(1 - (e + 1) / 2)
                    }
                    ,4096)
                      , o = new t.Gain
                      , r = new t.Gain
                      , s = this.input = new t.Split;
                    s._splitter.channelCountMode = "explicit",
                    (new t.Zero).fan(n, i);
                    var a = this.output = new t.Merge;
                    s.left.chain(o, a.left),
                    s.right.chain(r, a.right),
                    this.pan.chain(i, o.gain),
                    this.pan.chain(n, r.gain)
                };
                e.prototype.disconnect = function() {
                    this.output.disconnect.apply(this.output, arguments)
                }
                ,
                e.prototype.connect = function() {
                    this.output.connect.apply(this.output, arguments)
                }
                ,
                AudioContext.prototype.createStereoPanner = function() {
                    return new e(this)
                }
                ,
                t.Context.prototype.createStereoPanner = function() {
                    return new e(this)
                }
            }
        }
        .apply(e, i)) || (t.exports = o)
    }
    , function(t, e) {
        t.exports = "13.3.6"
    }
    , function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0,
            eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }
    ]).UnmuteButton
});
//# sourceMappingURL=unmute.js.map
