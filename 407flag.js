// Deobfuscation failed
;
(self.webpackChunkpikachu_volleyball = self.webpackChunkpikachu_volleyball || []).push([
    [407],
    {
        971: (_0x1c78ff, _0x20229a, _0x3f5315) => {
            'use strict';
            ;
            var _0x3ca26e = _0x3f5315(585);
            _0x3ca26e.W2.prototype['_renderCanvas'] = function (_0x2fef17) {
            };
            _0x3ca26e.W2.prototype.renderCanvas = function (_0x50276e) {
                ;
                if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
                    this['_mask'] && _0x50276e.maskManager.pushMask(this['_mask']);
                    this['_renderCanvas'](_0x50276e);
                    for (var _0x3ef67e = 0, _0x52dcdb = this.children.length; _0x3ef67e < _0x52dcdb; ++_0x3ef67e) {
                        this.children[_0x3ef67e].renderCanvas(_0x50276e);
                    }
                    this['_mask'] && _0x50276e.maskManager.popMask(_0x50276e);
                }
            };
            _0x3ca26e['s$'].prototype.renderCanvas = function (_0xb54de8) {
            };
        },
        619: (_0x39a0b8, _0x54eecf, _0x54404d) => {
            'use strict';
            _0x54404d.d(_0x54eecf, { 'T': () => _0x26396e });
            var _0x383b40 = _0x54404d(710), _0x213135 = _0x54404d(724), _0x43f519 = function (_0x47e2c4, _0x3bb7a5) {
                    ;
                    return _0x43f519 = Object.setPrototypeOf || { '__proto__': [] } instanceof Array && function (_0x4ddb32, _0x2d0ff7) {
                        ;
                        _0x4ddb32['__proto__'] = _0x2d0ff7;
                    } || function (_0x50f877, _0x4352c7) {
                        for (var _0x42ae0c in _0x4352c7)
                            _0x4352c7.hasOwnProperty(_0x42ae0c) && (_0x50f877[_0x42ae0c] = _0x4352c7[_0x42ae0c]);
                    }, _0x43f519(_0x47e2c4, _0x3bb7a5);
                };
            function _0x50f365(_0x5229fa, _0x4279c6) {
                var _0x3158d7 = _0x5229fa;
                if (_0x4279c6 instanceof _0x383b40.VL) {
                    var _0xae6cbc = _0x4279c6.source, _0x4fc53d = 0 === _0xae6cbc.width ? _0x3158d7.canvas.width : Math.min(_0x3158d7.canvas.width, _0xae6cbc.width), _0xa81a1d = 0 === _0xae6cbc.height ? _0x3158d7.canvas.height : Math.min(_0x3158d7.canvas.height, _0xae6cbc.height);
                    return _0x3158d7.ctx.drawImage(_0xae6cbc, 0, 0, _0x4fc53d, _0xa81a1d, 0, 0, _0x3158d7.canvas.width, _0x3158d7.canvas.height), true;
                }
                return false;
            }
            var _0x26396e = function (_0x4ccb11) {
                ;
                function _0x3effab(_0x47ddef) {
                    var _0x85c0f4 = _0x4ccb11.call(this, _0x47ddef) || this;
                    return _0x85c0f4.uploadHookHelper = _0x85c0f4, _0x85c0f4.canvas = document.createElement('canvas'), _0x85c0f4.canvas.width = 16, _0x85c0f4.canvas.height = 16, _0x85c0f4.ctx = _0x85c0f4.canvas.getContext('2d'), _0x85c0f4.registerUploadHook(_0x50f365), _0x85c0f4;
                }
                return function (_0x257896, _0x363612) {
                    ;
                    function _0x3113f3() {
                        ;
                        this.constructor = _0x257896;
                    }
                    _0x43f519(_0x257896, _0x363612);
                    _0x257896.prototype = null === _0x363612 ? Object.create(_0x363612) : (_0x3113f3.prototype = _0x363612.prototype, new _0x3113f3());
                }(_0x3effab, _0x4ccb11), _0x3effab.prototype.destroy = function () {
                    ;
                    _0x4ccb11.prototype.destroy.call(this);
                    this.ctx = null;
                    this.canvas = null;
                }, _0x3effab;
            }(_0x213135.Zq);
        },
        93: (_0x24fbbd, _0x3face7, _0x5da6af) => {
            'use strict';
            ;
            _0x5da6af.d(_0x3face7, {
                'MU': () => _0x5e253e,
                'uK': () => _0x471784
            });
            var _0x239715 = _0x5da6af(710), _0x47c775 = _0x5da6af(942), _0x295902 = _0x5da6af(658), _0x99538f = _0x5da6af(680), _0xca4ec1 = _0x5da6af(319), _0x4d5e4d = function (_0x241f99, _0x5b3889) {
                    ;
                    return _0x4d5e4d = Object.setPrototypeOf || { '__proto__': [] } instanceof Array && function (_0x24084c, _0x47a10a) {
                        ;
                        _0x24084c['__proto__'] = _0x47a10a;
                    } || function (_0x5e26fc, _0x49510b) {
                        ;
                        for (var _0x411553 in _0x49510b)
                            _0x49510b.hasOwnProperty(_0x411553) && (_0x5e26fc[_0x411553] = _0x49510b[_0x411553]);
                    }, _0x4d5e4d(_0x241f99, _0x5b3889);
                }, _0x307dc3 = function () {
                    ;
                    function _0x5278e4(_0x13a371) {
                        ;
                        this['_foundShapes'] = [];
                        this.renderer = _0x13a371;
                    }
                    return _0x5278e4.prototype.pushMask = function (_0x3de153) {
                        var _0x51eb59 = this.renderer, _0x5660aa = _0x3de153.maskObject || _0x3de153;
                        _0x51eb59.context.save();
                        var _0x1829d1 = this['_foundShapes'];
                        if (this.recursiveFindShapes(_0x5660aa, _0x1829d1), _0x1829d1.length > 0) {
                            var _0x58dcdf = _0x51eb59.context;
                            _0x58dcdf.beginPath();
                            for (var _0x54efa3 = 0; _0x54efa3 < _0x1829d1.length; _0x54efa3++) {
                                var _0x4a1d47 = _0x1829d1[_0x54efa3], _0x4f4342 = _0x4a1d47.transform.worldTransform;
                                this.renderer.setContextTransform(_0x4f4342);
                                this.renderGraphicsShape(_0x4a1d47);
                            }
                            _0x1829d1.length = 0;
                            _0x58dcdf.clip();
                        }
                    }, _0x5278e4.prototype.recursiveFindShapes = function (_0x4e8f51, _0x5445f4) {
                        ;
                        _0x4e8f51.geometry && _0x4e8f51.geometry.graphicsData && _0x5445f4.push(_0x4e8f51);
                        var _0x497776 = _0x4e8f51.children;
                        if (_0x497776) {
                            for (var _0x65c60c = 0; _0x65c60c < _0x497776.length; _0x65c60c++) {
                                this.recursiveFindShapes(_0x497776[_0x65c60c], _0x5445f4);
                            }
                        }
                    }, _0x5278e4.prototype.renderGraphicsShape = function (_0x254dd0) {
                        ;
                        _0x254dd0.finishPoly();
                        var _0xde532a = this.renderer.context, _0x4c8d91 = _0x254dd0.geometry.graphicsData, _0x54c61b = _0x4c8d91.length;
                        if (0 !== _0x54c61b) {
                            for (var _0x32d417 = 0; _0x32d417 < _0x54c61b; _0x32d417++) {
                                var _0x3473f5 = _0x4c8d91[_0x32d417], _0x4eeec9 = _0x3473f5.shape;
                                if (_0x4eeec9.type === _0x295902.HS.POLY) {
                                    var _0x5e441d = _0x4eeec9.points, _0x2088f1 = _0x3473f5.holes, _0x51b22d = void 0, _0x229034 = void 0, _0x5d8665 = void 0, _0x24b6d6 = void 0;
                                    _0xde532a.moveTo(_0x5e441d[0], _0x5e441d[1]);
                                    for (var _0x25e1f7 = 1; _0x25e1f7 < _0x5e441d.length / 2; _0x25e1f7++) {
                                        _0xde532a.lineTo(_0x5e441d[2 * _0x25e1f7], _0x5e441d[2 * _0x25e1f7 + 1]);
                                    }
                                    if (_0x2088f1.length > 0) {
                                        for (_0x51b22d = 0, _0x5d8665 = _0x5e441d[0], _0x24b6d6 = _0x5e441d[1], _0x25e1f7 = 2; _0x25e1f7 + 2 < _0x5e441d.length; _0x25e1f7 += 2) {
                                            _0x51b22d += (_0x5e441d[_0x25e1f7] - _0x5d8665) * (_0x5e441d[_0x25e1f7 + 3] - _0x24b6d6) - (_0x5e441d[_0x25e1f7 + 2] - _0x5d8665) * (_0x5e441d[_0x25e1f7 + 1] - _0x24b6d6);
                                        }
                                        for (var _0x267f2c = 0; _0x267f2c < _0x2088f1.length; _0x267f2c++) {
                                            if (_0x5e441d = _0x2088f1[_0x267f2c].shape.points) {
                                                for (_0x229034 = 0, _0x5d8665 = _0x5e441d[0], _0x24b6d6 = _0x5e441d[1], _0x25e1f7 = 2; _0x25e1f7 + 2 < _0x5e441d.length; _0x25e1f7 += 2) {
                                                    _0x229034 += (_0x5e441d[_0x25e1f7] - _0x5d8665) * (_0x5e441d[_0x25e1f7 + 3] - _0x24b6d6) - (_0x5e441d[_0x25e1f7 + 2] - _0x5d8665) * (_0x5e441d[_0x25e1f7 + 1] - _0x24b6d6);
                                                }
                                                if (_0x229034 * _0x51b22d < 0) {
                                                    for (_0xde532a.moveTo(_0x5e441d[0], _0x5e441d[1]), _0x25e1f7 = 2; _0x25e1f7 < _0x5e441d.length; _0x25e1f7 += 2) {
                                                        _0xde532a.lineTo(_0x5e441d[_0x25e1f7], _0x5e441d[_0x25e1f7 + 1]);
                                                    }
                                                } else {
                                                    for (_0xde532a.moveTo(_0x5e441d[_0x5e441d.length - 2], _0x5e441d[_0x5e441d.length - 1]), _0x25e1f7 = _0x5e441d.length - 4; _0x25e1f7 >= 0; _0x25e1f7 -= 2) {
                                                        _0xde532a.lineTo(_0x5e441d[_0x25e1f7], _0x5e441d[_0x25e1f7 + 1]);
                                                    }
                                                }
                                                _0x2088f1[_0x267f2c].shape.closeStroke && _0xde532a.closePath();
                                            }
                                        }
                                    }
                                    _0x5e441d[0] === _0x5e441d[_0x5e441d.length - 2] && _0x5e441d[1] === _0x5e441d[_0x5e441d.length - 1] && _0xde532a.closePath();
                                } else {
                                    if (_0x4eeec9.type === _0x295902.HS.RECT) {
                                        _0xde532a.rect(_0x4eeec9.x, _0x4eeec9.y, _0x4eeec9.width, _0x4eeec9.height);
                                        _0xde532a.closePath();
                                    } else {
                                        if (_0x4eeec9.type === _0x295902.HS.CIRC) {
                                            _0xde532a.arc(_0x4eeec9.x, _0x4eeec9.y, _0x4eeec9.radius, 0, 2 * Math.PI);
                                            _0xde532a.closePath();
                                        } else {
                                            if (_0x4eeec9.type === _0x295902.HS.ELIP) {
                                                var _0x485018 = 2 * _0x4eeec9.width, _0x8c8586 = 2 * _0x4eeec9.height, _0x2a94fc = _0x4eeec9.x - _0x485018 / 2, _0x38d2da = _0x4eeec9.y - _0x8c8586 / 2, _0x2f0ca7 = 0.5522848, _0x33759e = _0x485018 / 2 * 0.5522848, _0x170bdc = _0x8c8586 / 2 * 0.5522848, _0x18ff1c = _0x2a94fc + _0x485018, _0x367d07 = _0x38d2da + _0x8c8586, _0x3cd2f4 = _0x2a94fc + _0x485018 / 2, _0x3108b8 = _0x38d2da + _0x8c8586 / 2;
                                                _0xde532a.moveTo(_0x2a94fc, _0x3108b8);
                                                _0xde532a.bezierCurveTo(_0x2a94fc, _0x3108b8 - _0x170bdc, _0x3cd2f4 - _0x33759e, _0x38d2da, _0x3cd2f4, _0x38d2da);
                                                _0xde532a.bezierCurveTo(_0x3cd2f4 + _0x33759e, _0x38d2da, _0x18ff1c, _0x3108b8 - _0x170bdc, _0x18ff1c, _0x3108b8);
                                                _0xde532a.bezierCurveTo(_0x18ff1c, _0x3108b8 + _0x170bdc, _0x3cd2f4 + _0x33759e, _0x367d07, _0x3cd2f4, _0x367d07);
                                                _0xde532a.bezierCurveTo(_0x3cd2f4 - _0x33759e, _0x367d07, _0x2a94fc, _0x3108b8 + _0x170bdc, _0x2a94fc, _0x3108b8);
                                                _0xde532a.closePath();
                                            } else {
                                                if (_0x4eeec9.type === _0x295902.HS.RREC) {
                                                    var _0x5f3283 = _0x4eeec9.x, _0x45b1aa = _0x4eeec9.y, _0x5db696 = _0x4eeec9.width, _0x4f1a79 = _0x4eeec9.height, _0x2acd35 = _0x4eeec9.radius, _0x246a0b = Math.min(_0x5db696, _0x4f1a79) / 2;
                                                    _0x2acd35 = _0x2acd35 > _0x246a0b ? _0x246a0b : _0x2acd35;
                                                    _0xde532a.moveTo(_0x5f3283, _0x45b1aa + _0x2acd35);
                                                    _0xde532a.lineTo(_0x5f3283, _0x45b1aa + _0x4f1a79 - _0x2acd35);
                                                    _0xde532a.quadraticCurveTo(_0x5f3283, _0x45b1aa + _0x4f1a79, _0x5f3283 + _0x2acd35, _0x45b1aa + _0x4f1a79);
                                                    _0xde532a.lineTo(_0x5f3283 + _0x5db696 - _0x2acd35, _0x45b1aa + _0x4f1a79);
                                                    _0xde532a.quadraticCurveTo(_0x5f3283 + _0x5db696, _0x45b1aa + _0x4f1a79, _0x5f3283 + _0x5db696, _0x45b1aa + _0x4f1a79 - _0x2acd35);
                                                    _0xde532a.lineTo(_0x5f3283 + _0x5db696, _0x45b1aa + _0x2acd35);
                                                    _0xde532a.quadraticCurveTo(_0x5f3283 + _0x5db696, _0x45b1aa, _0x5f3283 + _0x5db696 - _0x2acd35, _0x45b1aa);
                                                    _0xde532a.lineTo(_0x5f3283 + _0x2acd35, _0x45b1aa);
                                                    _0xde532a.quadraticCurveTo(_0x5f3283, _0x45b1aa, _0x5f3283, _0x45b1aa + _0x2acd35);
                                                    _0xde532a.closePath();
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }, _0x5278e4.prototype.popMask = function (_0x29ce28) {
                        ;
                        _0x29ce28.context.restore();
                        _0x29ce28.invalidateBlendMode();
                    }, _0x5278e4.prototype.destroy = function () {
                    }, _0x5278e4;
                }();
            function _0x27c743(_0xb1cad2) {
                var _0x4bf712 = document.createElement('canvas');
                _0x4bf712.width = 6;
                _0x4bf712.height = 1;
                var _0x16229d = _0x4bf712.getContext('2d');
                return _0x16229d.fillStyle = _0xb1cad2, _0x16229d.fillRect(0, 0, 6, 1), _0x4bf712;
            }
            function _0xf41099() {
                ;
                if ('undefined' == typeof document) {
                    return false;
                }
                var _0x24c28e = _0x27c743('#ff00ff'), _0x25b404 = _0x27c743('#ffff00'), _0x535948 = document.createElement('canvas');
                _0x535948.width = 6;
                _0x535948.height = 1;
                var _0x27232d = _0x535948.getContext('2d');
                _0x27232d.globalCompositeOperation = 'multiply';
                _0x27232d.drawImage(_0x24c28e, 0, 0);
                _0x27232d.drawImage(_0x25b404, 2, 0);
                var _0x4173dc = _0x27232d.getImageData(2, 0, 1, 1);
                if (!_0x4173dc) {
                    return false;
                }
                var _0x5bd11d = _0x4173dc.data;
                return 255 === _0x5bd11d[0] && 0 === _0x5bd11d[1] && 0 === _0x5bd11d[2];
            }
            var _0x398f5a = new _0x295902.y3(), _0x471784 = function (_0x5b4663) {
                    ;
                    function _0x2888f4(_0x20ed5e) {
                        var _0x34b4b6, _0x380aea = _0x5b4663.call(this, _0x99538f.N3.CANVAS, _0x20ed5e) || this;
                        if (_0x380aea.refresh = true, _0x380aea.maskManager = new _0x307dc3(_0x380aea), _0x380aea.smoothProperty = 'imageSmoothingEnabled', _0x380aea.blendModes = (void 0 === _0x34b4b6 && (_0x34b4b6 = []), _0xf41099() ? (_0x34b4b6[_0x99538f['T$'].NORMAL] = 'source-over', _0x34b4b6[_0x99538f['T$'].ADD] = 'lighter', _0x34b4b6[_0x99538f['T$'].MULTIPLY] = 'multiply', _0x34b4b6[_0x99538f['T$'].SCREEN] = 'screen', _0x34b4b6[_0x99538f['T$'].OVERLAY] = 'overlay', _0x34b4b6[_0x99538f['T$'].DARKEN] = 'darken', _0x34b4b6[_0x99538f['T$'].LIGHTEN] = 'lighten', _0x34b4b6[_0x99538f['T$'].COLOR_DODGE] = 'color-dodge', _0x34b4b6[_0x99538f['T$'].COLOR_BURN] = 'color-burn', _0x34b4b6[_0x99538f['T$'].HARD_LIGHT] = 'hard-light', _0x34b4b6[_0x99538f['T$'].SOFT_LIGHT] = 'soft-light', _0x34b4b6[_0x99538f['T$'].DIFFERENCE] = 'difference', _0x34b4b6[_0x99538f['T$'].EXCLUSION] = 'exclusion', _0x34b4b6[_0x99538f['T$'].HUE] = 'hue', _0x34b4b6[_0x99538f['T$'].SATURATION] = 'saturate', _0x34b4b6[_0x99538f['T$'].COLOR] = 'color', _0x34b4b6[_0x99538f['T$'].LUMINOSITY] = 'luminosity') : (_0x34b4b6[_0x99538f['T$'].NORMAL] = 'source-over', _0x34b4b6[_0x99538f['T$'].ADD] = 'lighter', _0x34b4b6[_0x99538f['T$'].MULTIPLY] = 'source-over', _0x34b4b6[_0x99538f['T$'].SCREEN] = 'source-over', _0x34b4b6[_0x99538f['T$'].OVERLAY] = 'source-over', _0x34b4b6[_0x99538f['T$'].DARKEN] = 'source-over', _0x34b4b6[_0x99538f['T$'].LIGHTEN] = 'source-over', _0x34b4b6[_0x99538f['T$'].COLOR_DODGE] = 'source-over', _0x34b4b6[_0x99538f['T$'].COLOR_BURN] = 'source-over', _0x34b4b6[_0x99538f['T$'].HARD_LIGHT] = 'source-over', _0x34b4b6[_0x99538f['T$'].SOFT_LIGHT] = 'source-over', _0x34b4b6[_0x99538f['T$'].DIFFERENCE] = 'source-over', _0x34b4b6[_0x99538f['T$'].EXCLUSION] = 'source-over', _0x34b4b6[_0x99538f['T$'].HUE] = 'source-over', _0x34b4b6[_0x99538f['T$'].SATURATION] = 'source-over', _0x34b4b6[_0x99538f['T$'].COLOR] = 'source-over', _0x34b4b6[_0x99538f['T$'].LUMINOSITY] = 'source-over'), _0x34b4b6[_0x99538f['T$'].NORMAL_NPM] = _0x34b4b6[_0x99538f['T$'].NORMAL], _0x34b4b6[_0x99538f['T$'].ADD_NPM] = _0x34b4b6[_0x99538f['T$'].ADD], _0x34b4b6[_0x99538f['T$'].SCREEN_NPM] = _0x34b4b6[_0x99538f['T$'].SCREEN], _0x34b4b6[_0x99538f['T$'].SRC_IN] = 'source-in', _0x34b4b6[_0x99538f['T$'].SRC_OUT] = 'source-out', _0x34b4b6[_0x99538f['T$'].SRC_ATOP] = 'source-atop', _0x34b4b6[_0x99538f['T$'].DST_OVER] = 'destination-over', _0x34b4b6[_0x99538f['T$'].DST_IN] = 'destination-in', _0x34b4b6[_0x99538f['T$'].DST_OUT] = 'destination-out', _0x34b4b6[_0x99538f['T$'].DST_ATOP] = 'destination-atop', _0x34b4b6[_0x99538f['T$'].XOR] = 'xor', _0x34b4b6[_0x99538f['T$'].SUBTRACT] = 'source-over', _0x34b4b6), _0x380aea.renderingToScreen = false, _0x380aea['_activeBlendMode'] = null, _0x380aea['_projTransform'] = null, _0x380aea['_outerBlend'] = false, _0x380aea.rootContext = _0x380aea.view.getContext('2d', { 'alpha': _0x380aea.useContextAlpha }), _0x380aea.context = _0x380aea.rootContext, !_0x380aea.rootContext.imageSmoothingEnabled) {
                            var _0x41b539 = _0x380aea.rootContext;
                            _0x41b539.webkitImageSmoothingEnabled ? _0x380aea.smoothProperty = 'webkitImageSmoothingEnabled' : _0x41b539.mozImageSmoothingEnabled ? _0x380aea.smoothProperty = 'mozImageSmoothingEnabled' : _0x41b539.oImageSmoothingEnabled ? _0x380aea.smoothProperty = 'oImageSmoothingEnabled' : _0x41b539.msImageSmoothingEnabled && (_0x380aea.smoothProperty = 'msImageSmoothingEnabled');
                        }
                        return _0x380aea.initPlugins(_0x2888f4['__plugins']), (0, _0x47c775.DE)('Canvas'), _0x380aea.resize(_0x380aea.options.width, _0x380aea.options.height), _0x380aea;
                    }
                    return function (_0x2a045c, _0x299d43) {
                        ;
                        function _0x1ca928() {
                            ;
                            this.constructor = _0x2a045c;
                        }
                        _0x4d5e4d(_0x2a045c, _0x299d43);
                        _0x2a045c.prototype = null === _0x299d43 ? Object.create(_0x299d43) : (_0x1ca928.prototype = _0x299d43.prototype, new _0x1ca928());
                    }(_0x2888f4, _0x5b4663), _0x2888f4.prototype.addSystem = function () {
                        return this;
                    }, _0x2888f4.prototype.render = function (_0x5a5d50, _0x30351d) {
                        ;
                        if (this.view) {
                            var _0x563a0d, _0x3e9380, _0x43d05a, _0x1044a6;
                            _0x30351d && (_0x30351d instanceof _0x239715.TI || _0x30351d instanceof _0x239715.jd ? ((0, _0x47c775.a1)('6.0.0', 'CanvasRenderer#render arguments changed, use options instead.'), _0x563a0d = _0x30351d, _0x3e9380 = arguments[2], _0x43d05a = arguments[3], _0x1044a6 = arguments[4]) : (_0x563a0d = _0x30351d.renderTexture, _0x3e9380 = _0x30351d.clear, _0x43d05a = _0x30351d.transform, _0x1044a6 = _0x30351d.skipUpdateTransform));
                            this.renderingToScreen = !_0x563a0d;
                            this.emit('prerender');
                            var _0x127527 = this.resolution;
                            _0x563a0d ? ((_0x563a0d = _0x563a0d.castToBaseTexture())['_canvasRenderTarget'] || (_0x563a0d['_canvasRenderTarget'] = new _0x47c775.qU(_0x563a0d.width, _0x563a0d.height, _0x563a0d.resolution), _0x563a0d.resource = new _0x239715.Y8(_0x563a0d['_canvasRenderTarget'].canvas), _0x563a0d.valid = true), this.context = _0x563a0d['_canvasRenderTarget'].context, this.resolution = _0x563a0d['_canvasRenderTarget'].resolution) : this.context = this.rootContext;
                            var _0x1ac00d = this.context;
                            if (this['_projTransform'] = _0x43d05a || null, _0x563a0d || (this['_lastObjectRendered'] = _0x5a5d50), !_0x1044a6) {
                                var _0x476e7a = _0x5a5d50.enableTempParent();
                                _0x5a5d50.updateTransform();
                                _0x5a5d50.disableTempParent(_0x476e7a);
                            }
                            if (_0x1ac00d.save(), _0x1ac00d.setTransform(1, 0, 0, 1, 0, 0), _0x1ac00d.globalAlpha = 1, this['_activeBlendMode'] = _0x99538f['T$'].NORMAL, this['_outerBlend'] = false, _0x1ac00d.globalCompositeOperation = this.blendModes[_0x99538f['T$'].NORMAL], void 0 !== _0x3e9380 ? _0x3e9380 : this.clearBeforeRender) {
                                if (this.renderingToScreen) {
                                    _0x1ac00d.clearRect(0, 0, this.width, this.height);
                                    this.backgroundAlpha > 0 && (_0x1ac00d.globalAlpha = this.useContextAlpha ? this.backgroundAlpha : 1, _0x1ac00d.fillStyle = this['_backgroundColorString'], _0x1ac00d.fillRect(0, 0, this.width, this.height), _0x1ac00d.globalAlpha = 1);
                                } else {
                                    _0x563a0d['_canvasRenderTarget'].clear();
                                    var _0x528161 = _0x563a0d.clearColor;
                                    _0x528161[3] > 0 && (_0x1ac00d.globalAlpha = this.useContextAlpha ? _0x528161[3] : 1, _0x1ac00d.fillStyle = (0, _0x47c775.XN)((0, _0x47c775.CO)(_0x528161)), _0x1ac00d.fillRect(0, 0, _0x563a0d.realWidth, _0x563a0d.realHeight), _0x1ac00d.globalAlpha = 1);
                                }
                            }
                            var _0x17415f = this.context;
                            this.context = _0x1ac00d;
                            _0x5a5d50.renderCanvas(this);
                            this.context = _0x17415f;
                            _0x1ac00d.restore();
                            this.resolution = _0x127527;
                            this['_projTransform'] = null;
                            this.emit('postrender');
                        }
                    }, _0x2888f4.prototype.setContextTransform = function (_0x4edd39, _0x853099, _0x493799) {
                        var _0x435d1f = _0x4edd39, _0x3c0f08 = this['_projTransform'], _0x39b7f0 = this.resolution;
                        _0x493799 = _0x493799 || _0x39b7f0;
                        _0x3c0f08 && ((_0x435d1f = _0x398f5a).copyFrom(_0x4edd39), _0x435d1f.prepend(_0x3c0f08));
                        _0x853099 ? this.context.setTransform(_0x435d1f.a * _0x493799, _0x435d1f.b * _0x493799, _0x435d1f.c * _0x493799, _0x435d1f.d * _0x493799, _0x435d1f.tx * _0x39b7f0 | 0, _0x435d1f.ty * _0x39b7f0 | 0) : this.context.setTransform(_0x435d1f.a * _0x493799, _0x435d1f.b * _0x493799, _0x435d1f.c * _0x493799, _0x435d1f.d * _0x493799, _0x435d1f.tx * _0x39b7f0, _0x435d1f.ty * _0x39b7f0);
                    }, _0x2888f4.prototype.clear = function (_0x2d43f6, _0x51a9d9) {
                        ;
                        void 0 === _0x2d43f6 && (_0x2d43f6 = this['_backgroundColorString']);
                        void 0 === _0x51a9d9 && (_0x51a9d9 = this.backgroundAlpha);
                        var _0x419d0a = this.context;
                        _0x419d0a.clearRect(0, 0, this.width, this.height);
                        _0x2d43f6 && (_0x419d0a.globalAlpha = this.useContextAlpha ? _0x51a9d9 : 1, _0x419d0a.fillStyle = _0x2d43f6, _0x419d0a.fillRect(0, 0, this.width, this.height), _0x419d0a.globalAlpha = 1);
                    }, _0x2888f4.prototype.setBlendMode = function (_0x12b991, _0xf51285) {
                        var _0x3a3e6f = _0x12b991 === _0x99538f['T$'].SRC_IN || _0x12b991 === _0x99538f['T$'].SRC_OUT || _0x12b991 === _0x99538f['T$'].DST_IN || _0x12b991 === _0x99538f['T$'].DST_ATOP;
                        !_0xf51285 && _0x3a3e6f && (_0x12b991 = _0x99538f['T$'].NORMAL);
                        this['_activeBlendMode'] !== _0x12b991 && (this['_activeBlendMode'] = _0x12b991, this['_outerBlend'] = _0x3a3e6f, this.context.globalCompositeOperation = this.blendModes[_0x12b991]);
                    }, _0x2888f4.prototype.destroy = function (_0x23ca1a) {
                        ;
                        _0x5b4663.prototype.destroy.call(this, _0x23ca1a);
                        this.context = null;
                        this.refresh = true;
                        this.maskManager.destroy();
                        this.maskManager = null;
                        this.smoothProperty = null;
                    }, _0x2888f4.prototype.resize = function (_0x113fa3, _0x554da4) {
                        ;
                        _0x5b4663.prototype.resize.call(this, _0x113fa3, _0x554da4);
                        this.smoothProperty && (this.rootContext[this.smoothProperty] = _0xca4ec1.X.SCALE_MODE === _0x99538f.aH.LINEAR);
                    }, _0x2888f4.prototype.invalidateBlendMode = function () {
                        ;
                        this['_activeBlendMode'] = this.blendModes.indexOf(this.context.globalCompositeOperation);
                    }, _0x2888f4.registerPlugin = function (_0x30f512, _0x160e44) {
                        ;
                        _0x2888f4['__plugins'] = _0x2888f4['__plugins'] || {};
                        _0x2888f4['__plugins'][_0x30f512] = _0x160e44;
                    }, _0x2888f4;
                }(_0x239715.I8), _0x5e253e = {
                    'canvas': null,
                    'getTintedCanvas': function (_0x535249, _0x4ebc94) {
                        var _0x3c83f8 = _0x535249.texture, _0x259fec = '#' + ('00000' + (0 | (_0x4ebc94 = _0x5e253e.roundColor(_0x4ebc94))).toString(16)).slice(-6);
                        _0x3c83f8.tintCache = _0x3c83f8.tintCache || {};
                        var _0x22ff66, _0x28dfb0 = _0x3c83f8.tintCache[_0x259fec];
                        if (_0x28dfb0) {
                            if (_0x28dfb0.tintId === _0x3c83f8['_updateID']) {
                                return _0x3c83f8.tintCache[_0x259fec];
                            }
                            _0x22ff66 = _0x3c83f8.tintCache[_0x259fec];
                        } else {
                            _0x22ff66 = document.createElement('canvas');
                        }
                        if (_0x5e253e.tintMethod(_0x3c83f8, _0x4ebc94, _0x22ff66), _0x22ff66.tintId = _0x3c83f8['_updateID'], _0x5e253e.convertTintToImage) {
                            var _0x1b0d7e = new Image();
                            _0x1b0d7e.src = _0x22ff66.toDataURL();
                            _0x3c83f8.tintCache[_0x259fec] = _0x1b0d7e;
                        } else {
                            _0x3c83f8.tintCache[_0x259fec] = _0x22ff66;
                        }
                        return _0x22ff66;
                    },
                    'getTintedPattern': function (_0x1d49e8, _0x353943) {
                        var _0x4593c4 = '#' + ('00000' + (0 | (_0x353943 = _0x5e253e.roundColor(_0x353943))).toString(16)).slice(-6);
                        _0x1d49e8.patternCache = _0x1d49e8.patternCache || {};
                        var _0x3cc0be = _0x1d49e8.patternCache[_0x4593c4];
                        return _0x3cc0be && _0x3cc0be.tintId === _0x1d49e8['_updateID'] || (_0x5e253e.canvas || (_0x5e253e.canvas = document.createElement('canvas')), _0x5e253e.tintMethod(_0x1d49e8, _0x353943, _0x5e253e.canvas), (_0x3cc0be = _0x5e253e.canvas.getContext('2d').createPattern(_0x5e253e.canvas, 'repeat')).tintId = _0x1d49e8['_updateID'], _0x1d49e8.patternCache[_0x4593c4] = _0x3cc0be), _0x3cc0be;
                    },
                    'tintWithMultiply': function (_0x2a5186, _0x3b0cfc, _0x3b7909) {
                        var _0x74c031 = _0x3b7909.getContext('2d'), _0x2e679e = _0x2a5186['_frame'].clone(), _0x27cf70 = _0x2a5186.baseTexture.resolution;
                        _0x2e679e.x *= _0x27cf70;
                        _0x2e679e.y *= _0x27cf70;
                        _0x2e679e.width *= _0x27cf70;
                        _0x2e679e.height *= _0x27cf70;
                        _0x3b7909.width = Math.ceil(_0x2e679e.width);
                        _0x3b7909.height = Math.ceil(_0x2e679e.height);
                        _0x74c031.save();
                        _0x74c031.fillStyle = '#' + ('00000' + (0 | _0x3b0cfc).toString(16)).slice(-6);
                        _0x74c031.fillRect(0, 0, _0x2e679e.width, _0x2e679e.height);
                        _0x74c031.globalCompositeOperation = 'multiply';
                        var _0xf8750b = _0x2a5186.baseTexture.getDrawableSource();
                        _0x74c031.drawImage(_0xf8750b, _0x2e679e.x, _0x2e679e.y, _0x2e679e.width, _0x2e679e.height, 0, 0, _0x2e679e.width, _0x2e679e.height);
                        _0x74c031.globalCompositeOperation = 'destination-atop';
                        _0x74c031.drawImage(_0xf8750b, _0x2e679e.x, _0x2e679e.y, _0x2e679e.width, _0x2e679e.height, 0, 0, _0x2e679e.width, _0x2e679e.height);
                        _0x74c031.restore();
                    },
                    'tintWithOverlay': function (_0x1a64d9, _0xab1803, _0x455319) {
                        var _0x565b4c = _0x455319.getContext('2d'), _0x5cd809 = _0x1a64d9['_frame'].clone(), _0x4ce26e = _0x1a64d9.baseTexture.resolution;
                        _0x5cd809.x *= _0x4ce26e;
                        _0x5cd809.y *= _0x4ce26e;
                        _0x5cd809.width *= _0x4ce26e;
                        _0x5cd809.height *= _0x4ce26e;
                        _0x455319.width = Math.ceil(_0x5cd809.width);
                        _0x455319.height = Math.ceil(_0x5cd809.height);
                        _0x565b4c.save();
                        _0x565b4c.globalCompositeOperation = 'copy';
                        _0x565b4c.fillStyle = '#' + ('00000' + (0 | _0xab1803).toString(16)).slice(-6);
                        _0x565b4c.fillRect(0, 0, _0x5cd809.width, _0x5cd809.height);
                        _0x565b4c.globalCompositeOperation = 'destination-atop';
                        _0x565b4c.drawImage(_0x1a64d9.baseTexture.getDrawableSource(), _0x5cd809.x, _0x5cd809.y, _0x5cd809.width, _0x5cd809.height, 0, 0, _0x5cd809.width, _0x5cd809.height);
                        _0x565b4c.restore();
                    },
                    'tintWithPerPixel': function (_0x5414bd, _0x5231e5, _0x1da78a) {
                        var _0x5201ad = _0x1da78a.getContext('2d'), _0x2d5c65 = _0x5414bd['_frame'].clone(), _0x2c8bc4 = _0x5414bd.baseTexture.resolution;
                        _0x2d5c65.x *= _0x2c8bc4;
                        _0x2d5c65.y *= _0x2c8bc4;
                        _0x2d5c65.width *= _0x2c8bc4;
                        _0x2d5c65.height *= _0x2c8bc4;
                        _0x1da78a.width = Math.ceil(_0x2d5c65.width);
                        _0x1da78a.height = Math.ceil(_0x2d5c65.height);
                        _0x5201ad.save();
                        _0x5201ad.globalCompositeOperation = 'copy';
                        _0x5201ad.drawImage(_0x5414bd.baseTexture.getDrawableSource(), _0x2d5c65.x, _0x2d5c65.y, _0x2d5c65.width, _0x2d5c65.height, 0, 0, _0x2d5c65.width, _0x2d5c65.height);
                        _0x5201ad.restore();
                        for (var _0x1c7219 = (0, _0x47c775.wK)(_0x5231e5), _0x2ba9b7 = _0x1c7219[0], _0x689ece = _0x1c7219[1], _0x539ce4 = _0x1c7219[2], _0x439ffd = _0x5201ad.getImageData(0, 0, _0x2d5c65.width, _0x2d5c65.height), _0x1e33b9 = _0x439ffd.data, _0x16b85e = 0; _0x16b85e < _0x1e33b9.length; _0x16b85e += 4) {
                            _0x1e33b9[_0x16b85e + 0] *= _0x2ba9b7;
                            _0x1e33b9[_0x16b85e + 1] *= _0x689ece;
                            _0x1e33b9[_0x16b85e + 2] *= _0x539ce4;
                        }
                        _0x5201ad.putImageData(_0x439ffd, 0, 0);
                    },
                    'roundColor': function (_0x441069) {
                        var _0x3bdf42 = _0x5e253e.cacheStepsPerColorChannel, _0x3457e1 = (0, _0x47c775.wK)(_0x441069);
                        return _0x3457e1[0] = Math.min(255, _0x3457e1[0] / _0x3bdf42 * _0x3bdf42), _0x3457e1[1] = Math.min(255, _0x3457e1[1] / _0x3bdf42 * _0x3bdf42), _0x3457e1[2] = Math.min(255, _0x3457e1[2] / _0x3bdf42 * _0x3bdf42), (0, _0x47c775.CO)(_0x3457e1);
                    },
                    'cacheStepsPerColorChannel': 8,
                    'convertTintToImage': false,
                    'canUseMultiply': _0xf41099(),
                    'tintMethod': null
                };
            _0x5e253e.tintMethod = _0x5e253e.canUseMultiply ? _0x5e253e.tintWithMultiply : _0x5e253e.tintWithPerPixel;
            var _0x652361 = _0x239715.Th.create;
            _0x239715.Th.create = function (_0x1af748) {
                if (!_0x1af748 || !_0x1af748.forceCanvas) {
                    try {
                        return _0x652361(_0x1af748);
                    } catch (_0x5be48d) {
                    }
                }
                return new _0x471784(_0x1af748);
            };
            _0x239715.VL.prototype.getDrawableSource = function () {
                var _0x20e221 = this.resource;
                return _0x20e221 ? _0x20e221.bitmap || _0x20e221.source : null;
            };
            _0x239715.jd.prototype['_canvasRenderTarget'] = null;
            _0x239715.xE.prototype.patternCache = null;
            _0x239715.xE.prototype.tintCache = null;
        },
        196: (_0xbb87d, _0xe16fe7, _0x36db67) => {
            'use strict';
            ;
            _0x36db67.d(_0xe16fe7, { 'O': () => _0x27eb19 });
            var _0x1c7cbd = _0x36db67(680), _0x1d7608 = _0x36db67(658), _0x275a34 = _0x36db67(93), _0xfb7c8c = _0x36db67(33), _0x216353 = new _0x1d7608.y3(), _0x27eb19 = function () {
                    ;
                    function _0x171752(_0x309ef1) {
                        ;
                        this.renderer = _0x309ef1;
                    }
                    return _0x171752.prototype.render = function (_0x100f3d) {
                        var _0x4bcce4 = _0x100f3d['_texture'], _0x2d68d5 = this.renderer, _0x2c9d5e = _0x2d68d5.context;
                        if (_0x4bcce4.valid) {
                            var _0x105b41 = _0x4bcce4['_frame'].width, _0x18d8c1 = _0x4bcce4['_frame'].height, _0x30d254 = _0x100f3d.transform.worldTransform, _0x2ab9c4 = 0, _0x2dca29 = 0, _0x2ab141 = _0x4bcce4.baseTexture.getDrawableSource();
                            if (!(_0x4bcce4.orig.width <= 0 || _0x4bcce4.orig.height <= 0) && _0x4bcce4.valid && _0x2ab141) {
                                _0x2d68d5.setBlendMode(_0x100f3d.blendMode, true);
                                _0x2d68d5.context.globalAlpha = _0x100f3d.worldAlpha;
                                var _0x186e74 = _0x4bcce4.baseTexture.scaleMode === _0x1c7cbd.aH.LINEAR;
                                _0x2d68d5.smoothProperty && _0x2d68d5.context[_0x2d68d5.smoothProperty] !== _0x186e74 && (_0x2c9d5e[_0x2d68d5.smoothProperty] = _0x186e74);
                                _0x4bcce4.trim ? (_0x2ab9c4 = _0x4bcce4.trim.width / 2 + _0x4bcce4.trim.x - _0x100f3d.anchor.x * _0x4bcce4.orig.width, _0x2dca29 = _0x4bcce4.trim.height / 2 + _0x4bcce4.trim.y - _0x100f3d.anchor.y * _0x4bcce4.orig.height) : (_0x2ab9c4 = (0.5 - _0x100f3d.anchor.x) * _0x4bcce4.orig.width, _0x2dca29 = (0.5 - _0x100f3d.anchor.y) * _0x4bcce4.orig.height);
                                _0x4bcce4.rotate && (_0x30d254.copyTo(_0x216353), _0x30d254 = _0x216353, _0x1d7608.Lv.matrixAppendRotationInv(_0x30d254, _0x4bcce4.rotate, _0x2ab9c4, _0x2dca29), _0x2ab9c4 = 0, _0x2dca29 = 0);
                                _0x2ab9c4 -= _0x105b41 / 2;
                                _0x2dca29 -= _0x18d8c1 / 2;
                                _0x2d68d5.setContextTransform(_0x30d254, _0x100f3d.roundPixels, 1);
                                _0x100f3d.roundPixels && (_0x2ab9c4 |= 0, _0x2dca29 |= 0);
                                var _0x1745eb = _0x4bcce4.baseTexture.resolution, _0x127133 = _0x2d68d5['_outerBlend'];
                                _0x127133 && (_0x2c9d5e.save(), _0x2c9d5e.beginPath(), _0x2c9d5e.rect(_0x2ab9c4 * _0x2d68d5.resolution, _0x2dca29 * _0x2d68d5.resolution, _0x105b41 * _0x2d68d5.resolution, _0x18d8c1 * _0x2d68d5.resolution), _0x2c9d5e.clip());
                                16777215 !== _0x100f3d.tint ? (_0x100f3d['_cachedTint'] === _0x100f3d.tint && _0x100f3d['_tintedCanvas'].tintId === _0x100f3d['_texture']['_updateID'] || (_0x100f3d['_cachedTint'] = _0x100f3d.tint, _0x100f3d['_tintedCanvas'] = _0x275a34.MU.getTintedCanvas(_0x100f3d, _0x100f3d.tint)), _0x2c9d5e.drawImage(_0x100f3d['_tintedCanvas'], 0, 0, Math.floor(_0x105b41 * _0x1745eb), Math.floor(_0x18d8c1 * _0x1745eb), Math.floor(_0x2ab9c4 * _0x2d68d5.resolution), Math.floor(_0x2dca29 * _0x2d68d5.resolution), Math.floor(_0x105b41 * _0x2d68d5.resolution), Math.floor(_0x18d8c1 * _0x2d68d5.resolution))) : _0x2c9d5e.drawImage(_0x2ab141, _0x4bcce4['_frame'].x * _0x1745eb, _0x4bcce4['_frame'].y * _0x1745eb, Math.floor(_0x105b41 * _0x1745eb), Math.floor(_0x18d8c1 * _0x1745eb), Math.floor(_0x2ab9c4 * _0x2d68d5.resolution), Math.floor(_0x2dca29 * _0x2d68d5.resolution), Math.floor(_0x105b41 * _0x2d68d5.resolution), Math.floor(_0x18d8c1 * _0x2d68d5.resolution));
                                _0x127133 && _0x2c9d5e.restore();
                                _0x2d68d5.setBlendMode(_0x1c7cbd['T$'].NORMAL);
                            }
                        }
                    }, _0x171752.prototype.destroy = function () {
                        this.renderer = null;
                    }, _0x171752;
                }();
            _0xfb7c8c.j.prototype['_tintedCanvas'] = null;
            _0xfb7c8c.j.prototype['_renderCanvas'] = function (_0x2414c6) {
                ;
                _0x2414c6.plugins.sprite.render(this);
            };
        },
        680: (_0x597707, _0x3894ef, _0x5c422f) => {
            'use strict';
            var _0x1a5a27, _0x3d1096, _0x3ca0d6, _0x1fba36, _0x1c9800, _0x598686, _0x1f56b2, _0x283ef7, _0x1c4b3a, _0x44304b, _0xfb03fa, _0x1efbeb, _0xb14ab5, _0x2382f7, _0x312c6d, _0x32b727, _0x5a6689, _0x15dd8d, _0x348918;
            _0x5c422f.d(_0x3894ef, {
                'A7': () => _0x5a6689,
                'G5': () => _0x15dd8d,
                'I2': () => _0x598686,
                'N3': () => _0x3d1096,
                'Nt': () => _0xfb03fa,
                'T$': () => _0x1fba36,
                'UN': () => _0x312c6d,
                'V0': () => _0x3ca0d6,
                'Vi': () => _0x1a5a27,
                'WB': () => _0x1efbeb,
                'aH': () => _0x44304b,
                'cB': () => _0x32b727,
                'iw': () => _0xb14ab5,
                'lg': () => _0x1c9800,
                'mr': () => _0x348918,
                'oT': () => _0x1c4b3a,
                'sp': () => _0x1f56b2,
                'vK': () => _0x283ef7,
                'yl': () => _0x2382f7
            });
            (function (_0x30ec6e) {
                ;
                _0x30ec6e[_0x30ec6e.WEBGL_LEGACY = 0] = 'WEBGL_LEGACY';
                _0x30ec6e[_0x30ec6e.WEBGL = 1] = 'WEBGL';
                _0x30ec6e[_0x30ec6e.WEBGL2 = 2] = 'WEBGL2';
            }(_0x1a5a27 || (_0x1a5a27 = {})));
            (function (_0x33e052) {
                ;
                _0x33e052[_0x33e052.UNKNOWN = 0] = 'UNKNOWN';
                _0x33e052[_0x33e052.WEBGL = 1] = 'WEBGL';
                _0x33e052[_0x33e052.CANVAS = 2] = 'CANVAS';
            }(_0x3d1096 || (_0x3d1096 = {})));
            (function (_0x12f594) {
                ;
                _0x12f594[_0x12f594.COLOR = 16384] = 'COLOR';
                _0x12f594[_0x12f594.DEPTH = 256] = 'DEPTH';
                _0x12f594[_0x12f594.STENCIL = 1024] = 'STENCIL';
            }(_0x3ca0d6 || (_0x3ca0d6 = {})));
            (function (_0x273174) {
                ;
                _0x273174[_0x273174.NORMAL = 0] = 'NORMAL';
                _0x273174[_0x273174.ADD = 1] = 'ADD';
                _0x273174[_0x273174.MULTIPLY = 2] = 'MULTIPLY';
                _0x273174[_0x273174.SCREEN = 3] = 'SCREEN';
                _0x273174[_0x273174.OVERLAY = 4] = 'OVERLAY';
                _0x273174[_0x273174.DARKEN = 5] = 'DARKEN';
                _0x273174[_0x273174.LIGHTEN = 6] = 'LIGHTEN';
                _0x273174[_0x273174.COLOR_DODGE = 7] = 'COLOR_DODGE';
                _0x273174[_0x273174.COLOR_BURN = 8] = 'COLOR_BURN';
                _0x273174[_0x273174.HARD_LIGHT = 9] = 'HARD_LIGHT';
                _0x273174[_0x273174.SOFT_LIGHT = 10] = 'SOFT_LIGHT';
                _0x273174[_0x273174.DIFFERENCE = 11] = 'DIFFERENCE';
                _0x273174[_0x273174.EXCLUSION = 12] = 'EXCLUSION';
                _0x273174[_0x273174.HUE = 13] = 'HUE';
                _0x273174[_0x273174.SATURATION = 14] = 'SATURATION';
                _0x273174[_0x273174.COLOR = 15] = 'COLOR';
                _0x273174[_0x273174.LUMINOSITY = 16] = 'LUMINOSITY';
                _0x273174[_0x273174.NORMAL_NPM = 17] = 'NORMAL_NPM';
                _0x273174[_0x273174.ADD_NPM = 18] = 'ADD_NPM';
                _0x273174[_0x273174.SCREEN_NPM = 19] = 'SCREEN_NPM';
                _0x273174[_0x273174.NONE = 20] = 'NONE';
                _0x273174[_0x273174.SRC_OVER = 0] = 'SRC_OVER';
                _0x273174[_0x273174.SRC_IN = 21] = 'SRC_IN';
                _0x273174[_0x273174.SRC_OUT = 22] = 'SRC_OUT';
                _0x273174[_0x273174.SRC_ATOP = 23] = 'SRC_ATOP';
                _0x273174[_0x273174.DST_OVER = 24] = 'DST_OVER';
                _0x273174[_0x273174.DST_IN = 25] = 'DST_IN';
                _0x273174[_0x273174.DST_OUT = 26] = 'DST_OUT';
                _0x273174[_0x273174.DST_ATOP = 27] = 'DST_ATOP';
                _0x273174[_0x273174.ERASE = 26] = 'ERASE';
                _0x273174[_0x273174.SUBTRACT = 28] = 'SUBTRACT';
                _0x273174[_0x273174.XOR = 29] = 'XOR';
            }(_0x1fba36 || (_0x1fba36 = {})));
            (function (_0x9daf6b) {
                ;
                _0x9daf6b[_0x9daf6b.POINTS = 0] = 'POINTS';
                _0x9daf6b[_0x9daf6b.LINES = 1] = 'LINES';
                _0x9daf6b[_0x9daf6b.LINE_LOOP = 2] = 'LINE_LOOP';
                _0x9daf6b[_0x9daf6b.LINE_STRIP = 3] = 'LINE_STRIP';
                _0x9daf6b[_0x9daf6b.TRIANGLES = 4] = 'TRIANGLES';
                _0x9daf6b[_0x9daf6b.TRIANGLE_STRIP = 5] = 'TRIANGLE_STRIP';
                _0x9daf6b[_0x9daf6b.TRIANGLE_FAN = 6] = 'TRIANGLE_FAN';
            }(_0x1c9800 || (_0x1c9800 = {})));
            (function (_0x10ea86) {
                ;
                _0x10ea86[_0x10ea86.RGBA = 6408] = 'RGBA';
                _0x10ea86[_0x10ea86.RGB = 6407] = 'RGB';
                _0x10ea86[_0x10ea86.RG = 33319] = 'RG';
                _0x10ea86[_0x10ea86.RED = 6403] = 'RED';
                _0x10ea86[_0x10ea86.RGBA_INTEGER = 36249] = 'RGBA_INTEGER';
                _0x10ea86[_0x10ea86.RGB_INTEGER = 36248] = 'RGB_INTEGER';
                _0x10ea86[_0x10ea86.RG_INTEGER = 33320] = 'RG_INTEGER';
                _0x10ea86[_0x10ea86.RED_INTEGER = 36244] = 'RED_INTEGER';
                _0x10ea86[_0x10ea86.ALPHA = 6406] = 'ALPHA';
                _0x10ea86[_0x10ea86.LUMINANCE = 6409] = 'LUMINANCE';
                _0x10ea86[_0x10ea86.LUMINANCE_ALPHA = 6410] = 'LUMINANCE_ALPHA';
                _0x10ea86[_0x10ea86.DEPTH_COMPONENT = 6402] = 'DEPTH_COMPONENT';
                _0x10ea86[_0x10ea86.DEPTH_STENCIL = 34041] = 'DEPTH_STENCIL';
            }(_0x598686 || (_0x598686 = {})));
            (function (_0x490632) {
                ;
                _0x490632[_0x490632.TEXTURE_2D = 3553] = 'TEXTURE_2D';
                _0x490632[_0x490632.TEXTURE_CUBE_MAP = 34067] = 'TEXTURE_CUBE_MAP';
                _0x490632[_0x490632.TEXTURE_2D_ARRAY = 35866] = 'TEXTURE_2D_ARRAY';
                _0x490632[_0x490632.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = 'TEXTURE_CUBE_MAP_POSITIVE_X';
                _0x490632[_0x490632.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = 'TEXTURE_CUBE_MAP_NEGATIVE_X';
                _0x490632[_0x490632.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = 'TEXTURE_CUBE_MAP_POSITIVE_Y';
                _0x490632[_0x490632.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = 'TEXTURE_CUBE_MAP_NEGATIVE_Y';
                _0x490632[_0x490632.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = 'TEXTURE_CUBE_MAP_POSITIVE_Z';
                _0x490632[_0x490632.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = 'TEXTURE_CUBE_MAP_NEGATIVE_Z';
            }(_0x1f56b2 || (_0x1f56b2 = {})));
            (function (_0x27303e) {
                ;
                _0x27303e[_0x27303e.UNSIGNED_BYTE = 5121] = 'UNSIGNED_BYTE';
                _0x27303e[_0x27303e.UNSIGNED_SHORT = 5123] = 'UNSIGNED_SHORT';
                _0x27303e[_0x27303e.UNSIGNED_SHORT_5_6_5 = 33635] = 'UNSIGNED_SHORT_5_6_5';
                _0x27303e[_0x27303e.UNSIGNED_SHORT_4_4_4_4 = 32819] = 'UNSIGNED_SHORT_4_4_4_4';
                _0x27303e[_0x27303e.UNSIGNED_SHORT_5_5_5_1 = 32820] = 'UNSIGNED_SHORT_5_5_5_1';
                _0x27303e[_0x27303e.UNSIGNED_INT = 5125] = 'UNSIGNED_INT';
                _0x27303e[_0x27303e.UNSIGNED_INT_10F_11F_11F_REV = 35899] = 'UNSIGNED_INT_10F_11F_11F_REV';
                _0x27303e[_0x27303e.UNSIGNED_INT_2_10_10_10_REV = 33640] = 'UNSIGNED_INT_2_10_10_10_REV';
                _0x27303e[_0x27303e.UNSIGNED_INT_24_8 = 34042] = 'UNSIGNED_INT_24_8';
                _0x27303e[_0x27303e.UNSIGNED_INT_5_9_9_9_REV = 35902] = 'UNSIGNED_INT_5_9_9_9_REV';
                _0x27303e[_0x27303e.BYTE = 5120] = 'BYTE';
                _0x27303e[_0x27303e.SHORT = 5122] = 'SHORT';
                _0x27303e[_0x27303e.INT = 5124] = 'INT';
                _0x27303e[_0x27303e.FLOAT = 5126] = 'FLOAT';
                _0x27303e[_0x27303e.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = 'FLOAT_32_UNSIGNED_INT_24_8_REV';
                _0x27303e[_0x27303e.HALF_FLOAT = 36193] = 'HALF_FLOAT';
            }(_0x283ef7 || (_0x283ef7 = {})));
            (function (_0x46cb45) {
                ;
                _0x46cb45[_0x46cb45.FLOAT = 0] = 'FLOAT';
                _0x46cb45[_0x46cb45.INT = 1] = 'INT';
                _0x46cb45[_0x46cb45.UINT = 2] = 'UINT';
            }(_0x1c4b3a || (_0x1c4b3a = {})));
            (function (_0x338f06) {
                ;
                _0x338f06[_0x338f06.NEAREST = 0] = 'NEAREST';
                _0x338f06[_0x338f06.LINEAR = 1] = 'LINEAR';
            }(_0x44304b || (_0x44304b = {})));
            (function (_0x566441) {
                ;
                _0x566441[_0x566441.CLAMP = 33071] = 'CLAMP';
                _0x566441[_0x566441.REPEAT = 10497] = 'REPEAT';
                _0x566441[_0x566441.MIRRORED_REPEAT = 33648] = 'MIRRORED_REPEAT';
            }(_0xfb03fa || (_0xfb03fa = {})));
            (function (_0x4cf1fc) {
                ;
                _0x4cf1fc[_0x4cf1fc.OFF = 0] = 'OFF';
                _0x4cf1fc[_0x4cf1fc.POW2 = 1] = 'POW2';
                _0x4cf1fc[_0x4cf1fc.ON = 2] = 'ON';
                _0x4cf1fc[_0x4cf1fc.ON_MANUAL = 3] = 'ON_MANUAL';
            }(_0x1efbeb || (_0x1efbeb = {})));
            (function (_0x3d0e5e) {
                ;
                _0x3d0e5e[_0x3d0e5e.NPM = 0] = 'NPM';
                _0x3d0e5e[_0x3d0e5e.UNPACK = 1] = 'UNPACK';
                _0x3d0e5e[_0x3d0e5e.PMA = 2] = 'PMA';
                _0x3d0e5e[_0x3d0e5e.NO_PREMULTIPLIED_ALPHA = 0] = 'NO_PREMULTIPLIED_ALPHA';
                _0x3d0e5e[_0x3d0e5e.PREMULTIPLY_ON_UPLOAD = 1] = 'PREMULTIPLY_ON_UPLOAD';
                _0x3d0e5e[_0x3d0e5e.PREMULTIPLY_ALPHA = 2] = 'PREMULTIPLY_ALPHA';
                _0x3d0e5e[_0x3d0e5e.PREMULTIPLIED_ALPHA = 2] = 'PREMULTIPLIED_ALPHA';
            }(_0xb14ab5 || (_0xb14ab5 = {})));
            (function (_0x1d8766) {
                ;
                _0x1d8766[_0x1d8766.NO = 0] = 'NO';
                _0x1d8766[_0x1d8766.YES = 1] = 'YES';
                _0x1d8766[_0x1d8766.AUTO = 2] = 'AUTO';
                _0x1d8766[_0x1d8766.BLEND = 0] = 'BLEND';
                _0x1d8766[_0x1d8766.CLEAR = 1] = 'CLEAR';
                _0x1d8766[_0x1d8766.BLIT = 2] = 'BLIT';
            }(_0x2382f7 || (_0x2382f7 = {})));
            (function (_0x3c1c74) {
                ;
                _0x3c1c74[_0x3c1c74.AUTO = 0] = 'AUTO';
                _0x3c1c74[_0x3c1c74.MANUAL = 1] = 'MANUAL';
            }(_0x312c6d || (_0x312c6d = {})));
            (function (_0x57bad5) {
                ;
                _0x57bad5.LOW = 'lowp';
                _0x57bad5.MEDIUM = 'mediump';
                _0x57bad5.HIGH = 'highp';
            }(_0x32b727 || (_0x32b727 = {})));
            (function (_0x109445) {
                ;
                _0x109445[_0x109445.NONE = 0] = 'NONE';
                _0x109445[_0x109445.SCISSOR = 1] = 'SCISSOR';
                _0x109445[_0x109445.STENCIL = 2] = 'STENCIL';
                _0x109445[_0x109445.SPRITE = 3] = 'SPRITE';
            }(_0x5a6689 || (_0x5a6689 = {})));
            (function (_0x583d88) {
                ;
                _0x583d88[_0x583d88.NONE = 0] = 'NONE';
                _0x583d88[_0x583d88.LOW = 2] = 'LOW';
                _0x583d88[_0x583d88.MEDIUM = 4] = 'MEDIUM';
                _0x583d88[_0x583d88.HIGH = 8] = 'HIGH';
            }(_0x15dd8d || (_0x15dd8d = {})));
            (function (_0x599c59) {
                ;
                _0x599c59[_0x599c59.ELEMENT_ARRAY_BUFFER = 34963] = 'ELEMENT_ARRAY_BUFFER';
                _0x599c59[_0x599c59.ARRAY_BUFFER = 34962] = 'ARRAY_BUFFER';
                _0x599c59[_0x599c59.UNIFORM_BUFFER = 35345] = 'UNIFORM_BUFFER';
            }(_0x348918 || (_0x348918 = {})));
        },
        710: (_0x332421, _0x29680c, _0x3a5303) => {
            'use strict';
            ;
            _0x3a5303.d(_0x29680c, {
                'I8': () => _0xea058a,
                'jd': () => _0x52468a,
                'VL': () => _0x496d39,
                'a$': () => _0x565370,
                'JZ': () => _0x2e64b0,
                'Bv': () => _0x3f0073,
                'Ie': () => _0x547dea,
                'Y8': () => _0x474578,
                'TI': () => _0x1cb37d,
                'Th': () => _0x22a728,
                'ex': () => _0x3ba51c,
                'ZM': () => _0x377a62,
                'xE': () => _0x4fe212,
                'oo': () => _0x3c2d61,
                'e6': () => _0x35c85c
            });
            var _0xa851a9 = _0x3a5303(319), _0x589e0e = _0x3a5303(680), _0x2932e8 = _0x3a5303(942), _0x5643fe = function () {
                    ;
                    function _0x57b92c(_0x2f26e4) {
                        ;
                        this.items = [];
                        this['_name'] = _0x2f26e4;
                        this['_aliasCount'] = 0;
                    }
                    return _0x57b92c.prototype.emit = function (_0x3e09d8, _0x5989f3, _0x105b1e, _0x3e19a0, _0xafbbe, _0x42604b, _0x1be23e, _0x4f6086) {
                        ;
                        if (arguments.length > 8) {
                            throw new Error('max arguments reached');
                        }
                        var _0x3882bb = this.name, _0x2c4172 = this.items;
                        this['_aliasCount']++;
                        for (var _0x9e1c0a = 0, _0x901935 = _0x2c4172.length; _0x9e1c0a < _0x901935; _0x9e1c0a++) {
                            _0x2c4172[_0x9e1c0a][_0x3882bb](_0x3e09d8, _0x5989f3, _0x105b1e, _0x3e19a0, _0xafbbe, _0x42604b, _0x1be23e, _0x4f6086);
                        }
                        return _0x2c4172 === this.items && this['_aliasCount']--, this;
                    }, _0x57b92c.prototype.ensureNonAliasedItems = function () {
                        ;
                        this['_aliasCount'] > 0 && this.items.length > 1 && (this['_aliasCount'] = 0, this.items = this.items.slice(0));
                    }, _0x57b92c.prototype.add = function (_0x42f44a) {
                        ;
                        return _0x42f44a[this['_name']] && (this.ensureNonAliasedItems(), this.remove(_0x42f44a), this.items.push(_0x42f44a)), this;
                    }, _0x57b92c.prototype.remove = function (_0x4bda0d) {
                        var _0x40f581 = this.items.indexOf(_0x4bda0d);
                        return -1 !== _0x40f581 && (this.ensureNonAliasedItems(), this.items.splice(_0x40f581, 1)), this;
                    }, _0x57b92c.prototype.contains = function (_0x93c199) {
                        ;
                        return -1 !== this.items.indexOf(_0x93c199);
                    }, _0x57b92c.prototype.removeAll = function () {
                        ;
                        return this.ensureNonAliasedItems(), this.items.length = 0, this;
                    }, _0x57b92c.prototype.destroy = function () {
                        ;
                        this.removeAll();
                        this.items = null;
                        this['_name'] = null;
                    }, Object.defineProperty(_0x57b92c.prototype, 'empty', {
                        'get': function () {
                            ;
                            return 0 === this.items.length;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x57b92c.prototype, 'name', {
                        'get': function () {
                            ;
                            return this['_name'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x57b92c;
                }();
            Object.defineProperties(_0x5643fe.prototype, {
                'dispatch': { 'value': _0x5643fe.prototype.emit },
                'run': { 'value': _0x5643fe.prototype.emit }
            });
            var _0x17327c = _0x3a5303(679), _0x596cf7 = _0x3a5303(658);
            _0xa851a9.X.PREFER_ENV = _0x2932e8.tq.any ? _0x589e0e.Vi.WEBGL : _0x589e0e.Vi.WEBGL2;
            _0xa851a9.X.STRICT_TEXTURE_CACHE = false;
            var _0x59d7d9 = [];
            function _0x4a3038(_0x20b9c7, _0x1df5f6) {
                ;
                if (!_0x20b9c7) {
                    return null;
                }
                var _0xb32ce6 = '';
                if ('string' == typeof _0x20b9c7) {
                    var _0x100921 = /\.(\w{3,4})(?:$|\?|#)/i.exec(_0x20b9c7);
                    _0x100921 && (_0xb32ce6 = _0x100921[1].toLowerCase());
                }
                for (var _0xe9de66 = _0x59d7d9.length - 1; _0xe9de66 >= 0; --_0xe9de66) {
                    var _0x3ad517 = _0x59d7d9[_0xe9de66];
                    if (_0x3ad517.test && _0x3ad517.test(_0x20b9c7, _0xb32ce6)) {
                        return new _0x3ad517(_0x20b9c7, _0x1df5f6);
                    }
                }
                throw new Error('Unrecognized source type to auto-detect Resource');
            }
            var _0x390613 = function (_0x47e8dc, _0x5e5764) {
                ;
                return _0x390613 = Object.setPrototypeOf || { '__proto__': [] } instanceof Array && function (_0x3d3f5b, _0xa564e) {
                    _0x3d3f5b['__proto__'] = _0xa564e;
                } || function (_0x261738, _0x29436e) {
                    ;
                    for (var _0x2c3bb6 in _0x29436e)
                        _0x29436e.hasOwnProperty(_0x2c3bb6) && (_0x261738[_0x2c3bb6] = _0x29436e[_0x2c3bb6]);
                }, _0x390613(_0x47e8dc, _0x5e5764);
            };
            function _0x8b02be(_0x43dea9, _0x1a5997) {
                ;
                function _0x417c94() {
                    ;
                    this.constructor = _0x43dea9;
                }
                _0x390613(_0x43dea9, _0x1a5997);
                _0x43dea9.prototype = null === _0x1a5997 ? Object.create(_0x1a5997) : (_0x417c94.prototype = _0x1a5997.prototype, new _0x417c94());
            }
            var _0xa43c = function () {
                    ;
                    return _0xa43c = Object.assign || function (_0x510fe7) {
                        ;
                        for (var _0x528867, _0x554b21 = arguments, _0x56c413 = 1, _0x850ae6 = arguments.length; _0x56c413 < _0x850ae6; _0x56c413++) {
                            for (var _0x1f6581 in _0x528867 = _0x554b21[_0x56c413])
                                Object.prototype.hasOwnProperty.call(_0x528867, _0x1f6581) && (_0x510fe7[_0x1f6581] = _0x528867[_0x1f6581]);
                        }
                        return _0x510fe7;
                    }, _0xa43c.apply(this, arguments);
                }, _0x1f538a = function () {
                    ;
                    function _0x49d62e(_0x4a66cc, _0x33b6bf) {
                        ;
                        void 0 === _0x4a66cc && (_0x4a66cc = 0);
                        void 0 === _0x33b6bf && (_0x33b6bf = 0);
                        this['_width'] = _0x4a66cc;
                        this['_height'] = _0x33b6bf;
                        this.destroyed = false;
                        this.internal = false;
                        this.onResize = new _0x5643fe('setRealSize');
                        this.onUpdate = new _0x5643fe('update');
                        this.onError = new _0x5643fe('onError');
                    }
                    return _0x49d62e.prototype.bind = function (_0x3d707c) {
                        ;
                        this.onResize.add(_0x3d707c);
                        this.onUpdate.add(_0x3d707c);
                        this.onError.add(_0x3d707c);
                        (this['_width'] || this['_height']) && this.onResize.emit(this['_width'], this['_height']);
                    }, _0x49d62e.prototype.unbind = function (_0x5428b3) {
                        ;
                        this.onResize.remove(_0x5428b3);
                        this.onUpdate.remove(_0x5428b3);
                        this.onError.remove(_0x5428b3);
                    }, _0x49d62e.prototype.resize = function (_0x1afede, _0x29f73f) {
                        ;
                        _0x1afede === this['_width'] && _0x29f73f === this['_height'] || (this['_width'] = _0x1afede, this['_height'] = _0x29f73f, this.onResize.emit(_0x1afede, _0x29f73f));
                    }, Object.defineProperty(_0x49d62e.prototype, 'valid', {
                        'get': function () {
                            ;
                            return !!this['_width'] && !!this['_height'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x49d62e.prototype.update = function () {
                        ;
                        this.destroyed || this.onUpdate.emit();
                    }, _0x49d62e.prototype.load = function () {
                        ;
                        return Promise.resolve(this);
                    }, Object.defineProperty(_0x49d62e.prototype, 'width', {
                        'get': function () {
                            ;
                            return this['_width'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x49d62e.prototype, 'height', {
                        'get': function () {
                            ;
                            return this['_height'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x49d62e.prototype.style = function (_0x461eae, _0x10c134, _0x5dd032) {
                        return false;
                    }, _0x49d62e.prototype.dispose = function () {
                    }, _0x49d62e.prototype.destroy = function () {
                        ;
                        this.destroyed || (this.destroyed = true, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null);
                    }, _0x49d62e.test = function (_0x20a8df, _0x37a36a) {
                        return false;
                    }, _0x49d62e;
                }(), _0x231b8f = function (_0x2ee224) {
                    ;
                    function _0x10ea1c(_0x492cd6, _0x56e0d2) {
                        var _0x14785f = this, _0x4c0c84 = _0x56e0d2 || {}, _0x55b1e7 = _0x4c0c84.width, _0x210dd6 = _0x4c0c84.height;
                        if (!_0x55b1e7 || !_0x210dd6) {
                            throw new Error('BufferResource width or height invalid');
                        }
                        return (_0x14785f = _0x2ee224.call(this, _0x55b1e7, _0x210dd6) || this).data = _0x492cd6, _0x14785f;
                    }
                    return _0x8b02be(_0x10ea1c, _0x2ee224), _0x10ea1c.prototype.upload = function (_0x294af1, _0x3b843e, _0x119dba) {
                        var _0xdc92d4 = _0x294af1.gl;
                        _0xdc92d4.pixelStorei(_0xdc92d4.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _0x3b843e.alphaMode === _0x589e0e.iw.UNPACK);
                        var _0x5c27c8 = _0x3b843e.realWidth, _0x2ea5b1 = _0x3b843e.realHeight;
                        return _0x119dba.width === _0x5c27c8 && _0x119dba.height === _0x2ea5b1 ? _0xdc92d4.texSubImage2D(_0x3b843e.target, 0, 0, 0, _0x5c27c8, _0x2ea5b1, _0x3b843e.format, _0x119dba.type, this.data) : (_0x119dba.width = _0x5c27c8, _0x119dba.height = _0x2ea5b1, _0xdc92d4.texImage2D(_0x3b843e.target, 0, _0x119dba.internalFormat, _0x5c27c8, _0x2ea5b1, 0, _0x3b843e.format, _0x119dba.type, this.data)), true;
                    }, _0x10ea1c.prototype.dispose = function () {
                        this.data = null;
                    }, _0x10ea1c.test = function (_0x5c8a44) {
                        return _0x5c8a44 instanceof Float32Array || _0x5c8a44 instanceof Uint8Array || _0x5c8a44 instanceof Uint32Array;
                    }, _0x10ea1c;
                }(_0x1f538a), _0x4a45ca = {
                    'scaleMode': _0x589e0e.aH.NEAREST,
                    'format': _0x589e0e.I2.RGBA,
                    'alphaMode': _0x589e0e.iw.NPM
                }, _0x496d39 = function (_0x272fc8) {
                    ;
                    function _0xa3bcb0(_0x429c87, _0x2c7f9b) {
                        ;
                        void 0 === _0x429c87 && (_0x429c87 = null);
                        void 0 === _0x2c7f9b && (_0x2c7f9b = null);
                        var _0x591779 = _0x272fc8.call(this) || this, _0x5cdadf = (_0x2c7f9b = _0x2c7f9b || {}).alphaMode, _0x13898a = _0x2c7f9b.mipmap, _0x5bf7fb = _0x2c7f9b.anisotropicLevel, _0x498094 = _0x2c7f9b.scaleMode, _0x53ee0f = _0x2c7f9b.width, _0xd83c5c = _0x2c7f9b.height, _0x24fbe6 = _0x2c7f9b.wrapMode, _0x216eb2 = _0x2c7f9b.format, _0x245028 = _0x2c7f9b.type, _0x1bba69 = _0x2c7f9b.target, _0x47eecd = _0x2c7f9b.resolution, _0x3eb74d = _0x2c7f9b.resourceOptions;
                        return !_0x429c87 || _0x429c87 instanceof _0x1f538a || ((_0x429c87 = _0x4a3038(_0x429c87, _0x3eb74d)).internal = true), _0x591779.resolution = _0x47eecd || _0xa851a9.X.RESOLUTION, _0x591779.width = Math.round((_0x53ee0f || 0) * _0x591779.resolution) / _0x591779.resolution, _0x591779.height = Math.round((_0xd83c5c || 0) * _0x591779.resolution) / _0x591779.resolution, _0x591779['_mipmap'] = void 0 !== _0x13898a ? _0x13898a : _0xa851a9.X.MIPMAP_TEXTURES, _0x591779.anisotropicLevel = void 0 !== _0x5bf7fb ? _0x5bf7fb : _0xa851a9.X.ANISOTROPIC_LEVEL, _0x591779['_wrapMode'] = _0x24fbe6 || _0xa851a9.X.WRAP_MODE, _0x591779['_scaleMode'] = void 0 !== _0x498094 ? _0x498094 : _0xa851a9.X.SCALE_MODE, _0x591779.format = _0x216eb2 || _0x589e0e.I2.RGBA, _0x591779.type = _0x245028 || _0x589e0e.vK.UNSIGNED_BYTE, _0x591779.target = _0x1bba69 || _0x589e0e.sp.TEXTURE_2D, _0x591779.alphaMode = void 0 !== _0x5cdadf ? _0x5cdadf : _0x589e0e.iw.UNPACK, _0x591779.uid = (0, _0x2932e8.hQ)(), _0x591779.touched = 0, _0x591779.isPowerOfTwo = false, _0x591779['_refreshPOT'](), _0x591779['_glTextures'] = {}, _0x591779.dirtyId = 0, _0x591779.dirtyStyleId = 0, _0x591779.cacheId = null, _0x591779.valid = _0x53ee0f > 0 && _0xd83c5c > 0, _0x591779.textureCacheIds = [], _0x591779.destroyed = false, _0x591779.resource = null, _0x591779['_batchEnabled'] = 0, _0x591779['_batchLocation'] = 0, _0x591779.parentTextureArray = null, _0x591779.setResource(_0x429c87), _0x591779;
                    }
                    return _0x8b02be(_0xa3bcb0, _0x272fc8), Object.defineProperty(_0xa3bcb0.prototype, 'realWidth', {
                        'get': function () {
                            ;
                            return Math.round(this.width * this.resolution);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0xa3bcb0.prototype, 'realHeight', {
                        'get': function () {
                            ;
                            return Math.round(this.height * this.resolution);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0xa3bcb0.prototype, 'mipmap', {
                        'get': function () {
                            ;
                            return this['_mipmap'];
                        },
                        'set': function (_0x2f1d09) {
                            ;
                            this['_mipmap'] !== _0x2f1d09 && (this['_mipmap'] = _0x2f1d09, this.dirtyStyleId++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0xa3bcb0.prototype, 'scaleMode', {
                        'get': function () {
                            ;
                            return this['_scaleMode'];
                        },
                        'set': function (_0x1445b0) {
                            ;
                            this['_scaleMode'] !== _0x1445b0 && (this['_scaleMode'] = _0x1445b0, this.dirtyStyleId++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0xa3bcb0.prototype, 'wrapMode', {
                        'get': function () {
                            ;
                            return this['_wrapMode'];
                        },
                        'set': function (_0x3db0b9) {
                            ;
                            this['_wrapMode'] !== _0x3db0b9 && (this['_wrapMode'] = _0x3db0b9, this.dirtyStyleId++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0xa3bcb0.prototype.setStyle = function (_0x21c508, _0x44656c) {
                        var _0x1b1cb7;
                        return void 0 !== _0x21c508 && _0x21c508 !== this.scaleMode && (this.scaleMode = _0x21c508, _0x1b1cb7 = true), void 0 !== _0x44656c && _0x44656c !== this.mipmap && (this.mipmap = _0x44656c, _0x1b1cb7 = true), _0x1b1cb7 && this.dirtyStyleId++, this;
                    }, _0xa3bcb0.prototype.setSize = function (_0x4c3bcb, _0x58c9d2, _0x5be0de) {
                        ;
                        return _0x5be0de = _0x5be0de || this.resolution, this.setRealSize(_0x4c3bcb * _0x5be0de, _0x58c9d2 * _0x5be0de, _0x5be0de);
                    }, _0xa3bcb0.prototype.setRealSize = function (_0x5a1093, _0x1eb61c, _0x2777d7) {
                        ;
                        return this.resolution = _0x2777d7 || this.resolution, this.width = Math.round(_0x5a1093) / this.resolution, this.height = Math.round(_0x1eb61c) / this.resolution, this['_refreshPOT'](), this.update(), this;
                    }, _0xa3bcb0.prototype['_refreshPOT'] = function () {
                        ;
                        this.isPowerOfTwo = (0, _0x2932e8.wv)(this.realWidth) && (0, _0x2932e8.wv)(this.realHeight);
                    }, _0xa3bcb0.prototype.setResolution = function (_0x27e429) {
                        var _0x1431e6 = this.resolution;
                        return _0x1431e6 === _0x27e429 || (this.resolution = _0x27e429, this.valid && (this.width = Math.round(this.width * _0x1431e6) / _0x27e429, this.height = Math.round(this.height * _0x1431e6) / _0x27e429, this.emit('update', this)), this['_refreshPOT']()), this;
                    }, _0xa3bcb0.prototype.setResource = function (_0x4f877c) {
                        ;
                        if (this.resource === _0x4f877c) {
                            return this;
                        }
                        if (this.resource) {
                            throw new Error('Resource can be set only once');
                        }
                        return _0x4f877c.bind(this), this.resource = _0x4f877c, this;
                    }, _0xa3bcb0.prototype.update = function () {
                        ;
                        this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit('update', this)) : this.width > 0 && this.height > 0 && (this.valid = true, this.emit('loaded', this), this.emit('update', this));
                    }, _0xa3bcb0.prototype.onError = function (_0x181ec3) {
                        ;
                        this.emit('error', this, _0x181ec3);
                    }, _0xa3bcb0.prototype.destroy = function () {
                        ;
                        this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null);
                        this.cacheId && (delete _0x2932e8.V8[this.cacheId], delete _0x2932e8.kN[this.cacheId], this.cacheId = null);
                        this.dispose();
                        _0xa3bcb0.removeFromCache(this);
                        this.textureCacheIds = null;
                        this.destroyed = true;
                    }, _0xa3bcb0.prototype.dispose = function () {
                        ;
                        this.emit('dispose', this);
                    }, _0xa3bcb0.prototype.castToBaseTexture = function () {
                        return this;
                    }, _0xa3bcb0.from = function (_0x39a69e, _0x342d13, _0x40c8b5) {
                        ;
                        void 0 === _0x40c8b5 && (_0x40c8b5 = _0xa851a9.X.STRICT_TEXTURE_CACHE);
                        var _0x15ccf2 = 'string' == typeof _0x39a69e, _0x555dab = null;
                        if (_0x15ccf2) {
                            _0x555dab = _0x39a69e;
                        } else {
                            if (!_0x39a69e['_pixiId']) {
                                var _0x57be16 = _0x342d13 && _0x342d13.pixiIdPrefix || 'pixiid';
                                _0x39a69e['_pixiId'] = _0x57be16 + '_' + (0, _0x2932e8.hQ)();
                            }
                            _0x555dab = _0x39a69e['_pixiId'];
                        }
                        var _0x526132 = _0x2932e8.V8[_0x555dab];
                        if (_0x15ccf2 && _0x40c8b5 && !_0x526132) {
                            throw new Error('The cacheId "' + _0x555dab + '" does not exist in BaseTextureCache.');
                        }
                        return _0x526132 || ((_0x526132 = new _0xa3bcb0(_0x39a69e, _0x342d13)).cacheId = _0x555dab, _0xa3bcb0.addToCache(_0x526132, _0x555dab)), _0x526132;
                    }, _0xa3bcb0.fromBuffer = function (_0x141bf5, _0x43de5b, _0x285011, _0x3414ae) {
                        ;
                        _0x141bf5 = _0x141bf5 || new Float32Array(_0x43de5b * _0x285011 * 4);
                        var _0x1882b9 = new _0x231b8f(_0x141bf5, {
                                'width': _0x43de5b,
                                'height': _0x285011
                            }), _0x1604eb = _0x141bf5 instanceof Float32Array ? _0x589e0e.vK.FLOAT : _0x589e0e.vK.UNSIGNED_BYTE;
                        return new _0xa3bcb0(_0x1882b9, Object.assign(_0x4a45ca, _0x3414ae || {
                            'width': _0x43de5b,
                            'height': _0x285011,
                            'type': _0x1604eb
                        }));
                    }, _0xa3bcb0.addToCache = function (_0x4b3756, _0x361e7d) {
                        ;
                        _0x361e7d && (-1 === _0x4b3756.textureCacheIds.indexOf(_0x361e7d) && _0x4b3756.textureCacheIds.push(_0x361e7d), _0x2932e8.V8[_0x361e7d] && console.warn('BaseTexture added to the cache with an id [' + _0x361e7d + '] that already had an entry'), _0x2932e8.V8[_0x361e7d] = _0x4b3756);
                    }, _0xa3bcb0.removeFromCache = function (_0x4c6e7a) {
                        ;
                        if ('string' == typeof _0x4c6e7a) {
                            var _0x2e51b7 = _0x2932e8.V8[_0x4c6e7a];
                            if (_0x2e51b7) {
                                var _0x253351 = _0x2e51b7.textureCacheIds.indexOf(_0x4c6e7a);
                                return _0x253351 > -1 && _0x2e51b7.textureCacheIds.splice(_0x253351, 1), delete _0x2932e8.V8[_0x4c6e7a], _0x2e51b7;
                            }
                        } else {
                            if (_0x4c6e7a && _0x4c6e7a.textureCacheIds) {
                                for (var _0x11b0f4 = 0; _0x11b0f4 < _0x4c6e7a.textureCacheIds.length; ++_0x11b0f4) {
                                    delete _0x2932e8.V8[_0x4c6e7a.textureCacheIds[_0x11b0f4]];
                                }
                                return _0x4c6e7a.textureCacheIds.length = 0, _0x4c6e7a;
                            }
                        }
                        return null;
                    }, _0xa3bcb0['_globalBatch'] = 0, _0xa3bcb0;
                }(_0x2932e8.vp), _0x4577ec = function (_0x27410d) {
                    ;
                    function _0x58abad(_0x3bd770, _0x500ec0) {
                        var _0x10e765 = this, _0x3138fc = _0x500ec0 || {}, _0x4b19e8 = _0x3138fc.width, _0x28c8d3 = _0x3138fc.height;
                        (_0x10e765 = _0x27410d.call(this, _0x4b19e8, _0x28c8d3) || this).items = [];
                        _0x10e765.itemDirtyIds = [];
                        for (var _0x65e63 = 0; _0x65e63 < _0x3bd770; _0x65e63++) {
                            var _0x2b190b = new _0x496d39();
                            _0x10e765.items.push(_0x2b190b);
                            _0x10e765.itemDirtyIds.push(-2);
                        }
                        return _0x10e765.length = _0x3bd770, _0x10e765['_load'] = null, _0x10e765.baseTexture = null, _0x10e765;
                    }
                    return _0x8b02be(_0x58abad, _0x27410d), _0x58abad.prototype.initFromArray = function (_0x43bd39, _0x260e40) {
                        ;
                        for (var _0x21e4e3 = 0; _0x21e4e3 < this.length; _0x21e4e3++) {
                            _0x43bd39[_0x21e4e3] && (_0x43bd39[_0x21e4e3].castToBaseTexture ? this.addBaseTextureAt(_0x43bd39[_0x21e4e3].castToBaseTexture(), _0x21e4e3) : _0x43bd39[_0x21e4e3] instanceof _0x1f538a ? this.addResourceAt(_0x43bd39[_0x21e4e3], _0x21e4e3) : this.addResourceAt(_0x4a3038(_0x43bd39[_0x21e4e3], _0x260e40), _0x21e4e3));
                        }
                    }, _0x58abad.prototype.dispose = function () {
                        ;
                        for (var _0x47ed44 = 0, _0x3b2957 = this.length; _0x47ed44 < _0x3b2957; _0x47ed44++) {
                            this.items[_0x47ed44].destroy();
                        }
                        this.items = null;
                        this.itemDirtyIds = null;
                        this['_load'] = null;
                    }, _0x58abad.prototype.addResourceAt = function (_0x513b87, _0x2aa6e1) {
                        ;
                        if (!this.items[_0x2aa6e1]) {
                            throw new Error('Index ' + _0x2aa6e1 + ' is out of bounds');
                        }
                        return _0x513b87.valid && !this.valid && this.resize(_0x513b87.width, _0x513b87.height), this.items[_0x2aa6e1].setResource(_0x513b87), this;
                    }, _0x58abad.prototype.bind = function (_0x502b1c) {
                        ;
                        if (null !== this.baseTexture) {
                            throw new Error('Only one base texture per TextureArray is allowed');
                        }
                        _0x27410d.prototype.bind.call(this, _0x502b1c);
                        for (var _0x2697c0 = 0; _0x2697c0 < this.length; _0x2697c0++) {
                            this.items[_0x2697c0].parentTextureArray = _0x502b1c;
                            this.items[_0x2697c0].on('update', _0x502b1c.update, _0x502b1c);
                        }
                    }, _0x58abad.prototype.unbind = function (_0x422cc0) {
                        ;
                        _0x27410d.prototype.unbind.call(this, _0x422cc0);
                        for (var _0x619ea6 = 0; _0x619ea6 < this.length; _0x619ea6++) {
                            this.items[_0x619ea6].parentTextureArray = null;
                            this.items[_0x619ea6].off('update', _0x422cc0.update, _0x422cc0);
                        }
                    }, _0x58abad.prototype.load = function () {
                        var _0x400109 = this;
                        if (this['_load']) {
                            return this['_load'];
                        }
                        var _0x47c8fd = this.items.map(function (_0x2c81d3) {
                            ;
                            return _0x2c81d3.resource;
                        }).filter(function (_0x29fe10) {
                            return _0x29fe10;
                        }).map(function (_0x3ed612) {
                            ;
                            return _0x3ed612.load();
                        });
                        return this['_load'] = Promise.all(_0x47c8fd).then(function () {
                            var _0x43d455 = _0x400109.items[0], _0x4d950e = _0x43d455.realWidth, _0x11bc9c = _0x43d455.realHeight;
                            return _0x400109.resize(_0x4d950e, _0x11bc9c), Promise.resolve(_0x400109);
                        }), this['_load'];
                    }, _0x58abad;
                }(_0x1f538a), _0x317917 = function (_0x2de41a) {
                    ;
                    function _0x1849ee(_0x1788cb, _0x492a60) {
                        var _0x553e43, _0x4795bd, _0x5b93a9 = this, _0xc6da8b = _0x492a60 || {}, _0xfa9485 = _0xc6da8b.width, _0x5cbc3a = _0xc6da8b.height;
                        return Array.isArray(_0x1788cb) ? (_0x553e43 = _0x1788cb, _0x4795bd = _0x1788cb.length) : _0x4795bd = _0x1788cb, _0x5b93a9 = _0x2de41a.call(this, _0x4795bd, {
                            'width': _0xfa9485,
                            'height': _0x5cbc3a
                        }) || this, _0x553e43 && _0x5b93a9.initFromArray(_0x553e43, _0x492a60), _0x5b93a9;
                    }
                    return _0x8b02be(_0x1849ee, _0x2de41a), _0x1849ee.prototype.addBaseTextureAt = function (_0x130779, _0x27184a) {
                        ;
                        if (!_0x130779.resource) {
                            throw new Error('ArrayResource does not support RenderTexture');
                        }
                        return this.addResourceAt(_0x130779.resource, _0x27184a), this;
                    }, _0x1849ee.prototype.bind = function (_0x118655) {
                        ;
                        _0x2de41a.prototype.bind.call(this, _0x118655);
                        _0x118655.target = _0x589e0e.sp.TEXTURE_2D_ARRAY;
                    }, _0x1849ee.prototype.upload = function (_0x505159, _0x41b6fe, _0x5069c5) {
                        var _0x535d28 = this, _0x4db7e9 = _0x535d28.length, _0x1b0e21 = _0x535d28.itemDirtyIds, _0x260ab2 = _0x535d28.items, _0x31ebb9 = _0x505159.gl;
                        _0x5069c5.dirtyId < 0 && _0x31ebb9.texImage3D(_0x31ebb9.TEXTURE_2D_ARRAY, 0, _0x5069c5.internalFormat, this['_width'], this['_height'], _0x4db7e9, 0, _0x41b6fe.format, _0x5069c5.type, null);
                        for (var _0xc7f43b = 0; _0xc7f43b < _0x4db7e9; _0xc7f43b++) {
                            var _0x31be5d = _0x260ab2[_0xc7f43b];
                            _0x1b0e21[_0xc7f43b] < _0x31be5d.dirtyId && (_0x1b0e21[_0xc7f43b] = _0x31be5d.dirtyId, _0x31be5d.valid && _0x31ebb9.texSubImage3D(_0x31ebb9.TEXTURE_2D_ARRAY, 0, 0, 0, _0xc7f43b, _0x31be5d.resource.width, _0x31be5d.resource.height, 1, _0x41b6fe.format, _0x5069c5.type, _0x31be5d.resource.source));
                        }
                        return true;
                    }, _0x1849ee;
                }(_0x4577ec), _0x4f529c = function (_0x201cce) {
                    ;
                    function _0xa68184(_0x39e901) {
                        var _0x28c536 = this, _0x218a54 = _0x39e901, _0x24340f = _0x218a54.naturalWidth || _0x218a54.videoWidth || _0x218a54.width, _0x4d0d7e = _0x218a54.naturalHeight || _0x218a54.videoHeight || _0x218a54.height;
                        return (_0x28c536 = _0x201cce.call(this, _0x24340f, _0x4d0d7e) || this).source = _0x39e901, _0x28c536.noSubImage = false, _0x28c536;
                    }
                    return _0x8b02be(_0xa68184, _0x201cce), _0xa68184.crossOrigin = function (_0x9505b1, _0x5dc88f, _0x145088) {
                        ;
                        void 0 === _0x145088 && 0 !== _0x5dc88f.indexOf('data:') ? _0x9505b1.crossOrigin = (0, _0x2932e8.Qq)(_0x5dc88f) : false !== _0x145088 && (_0x9505b1.crossOrigin = 'string' == typeof _0x145088 ? _0x145088 : 'anonymous');
                    }, _0xa68184.prototype.upload = function (_0x20a5dd, _0x1c0dd7, _0xc4f71b, _0x54d9ca) {
                        var _0x525817 = _0x20a5dd.gl, _0xa65925 = _0x1c0dd7.realWidth, _0x19fb21 = _0x1c0dd7.realHeight;
                        if ((_0x54d9ca = _0x54d9ca || this.source) instanceof HTMLImageElement) {
                            if (!_0x54d9ca.complete || 0 === _0x54d9ca.naturalWidth) {
                                return false;
                            }
                        } else {
                            if (_0x54d9ca instanceof HTMLVideoElement && _0x54d9ca.readyState <= 1) {
                                return false;
                            }
                        }
                        return _0x525817.pixelStorei(_0x525817.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _0x1c0dd7.alphaMode === _0x589e0e.iw.UNPACK), this.noSubImage || _0x1c0dd7.target !== _0x525817.TEXTURE_2D || _0xc4f71b.width !== _0xa65925 || _0xc4f71b.height !== _0x19fb21 ? (_0xc4f71b.width = _0xa65925, _0xc4f71b.height = _0x19fb21, _0x525817.texImage2D(_0x1c0dd7.target, 0, _0xc4f71b.internalFormat, _0x1c0dd7.format, _0xc4f71b.type, _0x54d9ca)) : _0x525817.texSubImage2D(_0x525817.TEXTURE_2D, 0, 0, 0, _0x1c0dd7.format, _0xc4f71b.type, _0x54d9ca), true;
                    }, _0xa68184.prototype.update = function () {
                        ;
                        if (!this.destroyed) {
                            var _0x52f2db = this.source, _0x546eea = _0x52f2db.naturalWidth || _0x52f2db.videoWidth || _0x52f2db.width, _0x6b07cd = _0x52f2db.naturalHeight || _0x52f2db.videoHeight || _0x52f2db.height;
                            this.resize(_0x546eea, _0x6b07cd);
                            _0x201cce.prototype.update.call(this);
                        }
                    }, _0xa68184.prototype.dispose = function () {
                        this.source = null;
                    }, _0xa68184;
                }(_0x1f538a), _0x474578 = function (_0x5103b4) {
                    ;
                    function _0x4dfd74(_0x1baa61) {
                        ;
                        return _0x5103b4.call(this, _0x1baa61) || this;
                    }
                    return _0x8b02be(_0x4dfd74, _0x5103b4), _0x4dfd74.test = function (_0x2dc575) {
                        var _0x4f2477 = globalThis.OffscreenCanvas;
                        return !!(_0x4f2477 && _0x2dc575 instanceof _0x4f2477) || globalThis.HTMLCanvasElement && _0x2dc575 instanceof HTMLCanvasElement;
                    }, _0x4dfd74;
                }(_0x4f529c), _0x96fa98 = function (_0x49f17b) {
                    ;
                    function _0x3defaa(_0xc2b2b9, _0x3f739a) {
                        var _0x17b0c8 = this, _0x55e2e6 = _0x3f739a || {}, _0x1b9d77 = _0x55e2e6.width, _0x393355 = _0x55e2e6.height, _0x47a5de = _0x55e2e6.autoLoad, _0x475885 = _0x55e2e6.linkBaseTexture;
                        if (_0xc2b2b9 && _0xc2b2b9.length !== _0x3defaa.SIDES) {
                            throw new Error('Invalid length. Got ' + _0xc2b2b9.length + ', expected 6');
                        }
                        _0x17b0c8 = _0x49f17b.call(this, 6, {
                            'width': _0x1b9d77,
                            'height': _0x393355
                        }) || this;
                        for (var _0x3719be = 0; _0x3719be < _0x3defaa.SIDES; _0x3719be++) {
                            _0x17b0c8.items[_0x3719be].target = _0x589e0e.sp.TEXTURE_CUBE_MAP_POSITIVE_X + _0x3719be;
                        }
                        return _0x17b0c8.linkBaseTexture = false !== _0x475885, _0xc2b2b9 && _0x17b0c8.initFromArray(_0xc2b2b9, _0x3f739a), false !== _0x47a5de && _0x17b0c8.load(), _0x17b0c8;
                    }
                    return _0x8b02be(_0x3defaa, _0x49f17b), _0x3defaa.prototype.bind = function (_0x270f27) {
                        ;
                        _0x49f17b.prototype.bind.call(this, _0x270f27);
                        _0x270f27.target = _0x589e0e.sp.TEXTURE_CUBE_MAP;
                    }, _0x3defaa.prototype.addBaseTextureAt = function (_0x32d64d, _0x145cb0, _0xccd47f) {
                        ;
                        if (!this.items[_0x145cb0]) {
                            throw new Error('Index ' + _0x145cb0 + ' is out of bounds');
                        }
                        if (!this.linkBaseTexture || _0x32d64d.parentTextureArray || Object.keys(_0x32d64d['_glTextures']).length > 0) {
                            if (!_0x32d64d.resource) {
                                throw new Error('CubeResource does not support copying of renderTexture.');
                            }
                            this.addResourceAt(_0x32d64d.resource, _0x145cb0);
                        } else {
                            _0x32d64d.target = _0x589e0e.sp.TEXTURE_CUBE_MAP_POSITIVE_X + _0x145cb0;
                            _0x32d64d.parentTextureArray = this.baseTexture;
                            this.items[_0x145cb0] = _0x32d64d;
                        }
                        return _0x32d64d.valid && !this.valid && this.resize(_0x32d64d.realWidth, _0x32d64d.realHeight), this.items[_0x145cb0] = _0x32d64d, this;
                    }, _0x3defaa.prototype.upload = function (_0x55092f, _0x2af763, _0x50dd53) {
                        ;
                        for (var _0x25153d = this.itemDirtyIds, _0x330887 = 0; _0x330887 < _0x3defaa.SIDES; _0x330887++) {
                            var _0x11f180 = this.items[_0x330887];
                            _0x25153d[_0x330887] < _0x11f180.dirtyId && (_0x11f180.valid && _0x11f180.resource ? (_0x11f180.resource.upload(_0x55092f, _0x11f180, _0x50dd53), _0x25153d[_0x330887] = _0x11f180.dirtyId) : _0x25153d[_0x330887] < -1 && (_0x55092f.gl.texImage2D(_0x11f180.target, 0, _0x50dd53.internalFormat, _0x2af763.realWidth, _0x2af763.realHeight, 0, _0x2af763.format, _0x50dd53.type, null), _0x25153d[_0x330887] = -1));
                        }
                        return true;
                    }, _0x3defaa.test = function (_0x578d6) {
                        ;
                        return Array.isArray(_0x578d6) && _0x578d6.length === _0x3defaa.SIDES;
                    }, _0x3defaa.SIDES = 6, _0x3defaa;
                }(_0x4577ec), _0xc344ef = function (_0x315a1e) {
                    ;
                    function _0x515d19(_0x1c2326, _0x437559) {
                        var _0x5395e0 = this;
                        if (_0x437559 = _0x437559 || {}, !(_0x1c2326 instanceof HTMLImageElement)) {
                            var _0x5a66d1 = new Image();
                            _0x4f529c.crossOrigin(_0x5a66d1, _0x1c2326, _0x437559.crossorigin);
                            _0x5a66d1.src = _0x1c2326;
                            _0x1c2326 = _0x5a66d1;
                        }
                        return _0x5395e0 = _0x315a1e.call(this, _0x1c2326) || this, !_0x1c2326.complete && _0x5395e0['_width'] && _0x5395e0['_height'] && (_0x5395e0['_width'] = 0, _0x5395e0['_height'] = 0), _0x5395e0.url = _0x1c2326.src, _0x5395e0['_process'] = null, _0x5395e0.preserveBitmap = false, _0x5395e0.createBitmap = (void 0 !== _0x437559.createBitmap ? _0x437559.createBitmap : _0xa851a9.X.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap, _0x5395e0.alphaMode = 'number' == typeof _0x437559.alphaMode ? _0x437559.alphaMode : null, _0x5395e0.bitmap = null, _0x5395e0['_load'] = null, false !== _0x437559.autoLoad && _0x5395e0.load(), _0x5395e0;
                    }
                    return _0x8b02be(_0x515d19, _0x315a1e), _0x515d19.prototype.load = function (_0x54fb11) {
                        var _0x512494 = this;
                        return this['_load'] || (void 0 !== _0x54fb11 && (this.createBitmap = _0x54fb11), this['_load'] = new Promise(function (_0x1f8ea9, _0x3153ad) {
                            var _0x59e435 = _0x512494.source;
                            _0x512494.url = _0x59e435.src;
                            var _0x5bbb97 = function () {
                                ;
                                _0x512494.destroyed || (_0x59e435.onload = null, _0x59e435.onerror = null, _0x512494.resize(_0x59e435.width, _0x59e435.height), _0x512494['_load'] = null, _0x512494.createBitmap ? _0x1f8ea9(_0x512494.process()) : _0x1f8ea9(_0x512494));
                            };
                            _0x59e435.complete && _0x59e435.src ? _0x5bbb97() : (_0x59e435.onload = _0x5bbb97, _0x59e435.onerror = function (_0x3cac36) {
                                ;
                                _0x3153ad(_0x3cac36);
                                _0x512494.onError.emit(_0x3cac36);
                            });
                        })), this['_load'];
                    }, _0x515d19.prototype.process = function () {
                        var _0x14193a = this, _0x4d0ef2 = this.source;
                        if (null !== this['_process']) {
                            return this['_process'];
                        }
                        if (null !== this.bitmap || !globalThis.createImageBitmap) {
                            return Promise.resolve(this);
                        }
                        var _0xfa9e50 = globalThis.createImageBitmap, _0x35b40d = !_0x4d0ef2.crossOrigin || 'anonymous' === _0x4d0ef2.crossOrigin;
                        return this['_process'] = fetch(_0x4d0ef2.src, { 'mode': _0x35b40d ? 'cors' : 'no-cors' }).then(function (_0x56c42d) {
                            ;
                            return _0x56c42d.blob();
                        }).then(function (_0x518c9f) {
                            ;
                            return _0xfa9e50(_0x518c9f, 0, 0, _0x4d0ef2.width, _0x4d0ef2.height, { 'premultiplyAlpha': _0x14193a.alphaMode === _0x589e0e.iw.UNPACK ? 'premultiply' : 'none' });
                        }).then(function (_0x47d71e) {
                            ;
                            return _0x14193a.destroyed ? Promise.reject() : (_0x14193a.bitmap = _0x47d71e, _0x14193a.update(), _0x14193a['_process'] = null, Promise.resolve(_0x14193a));
                        }), this['_process'];
                    }, _0x515d19.prototype.upload = function (_0x3c478e, _0x5b9f52, _0x169b72) {
                        ;
                        if ('number' == typeof this.alphaMode && (_0x5b9f52.alphaMode = this.alphaMode), !this.createBitmap) {
                            return _0x315a1e.prototype.upload.call(this, _0x3c478e, _0x5b9f52, _0x169b72);
                        }
                        if (!this.bitmap && (this.process(), !this.bitmap)) {
                            return false;
                        }
                        if (_0x315a1e.prototype.upload.call(this, _0x3c478e, _0x5b9f52, _0x169b72, this.bitmap), !this.preserveBitmap) {
                            var _0x213c07 = true, _0x345ac3 = _0x5b9f52['_glTextures'];
                            for (var _0x1e1e22 in _0x345ac3) {
                                var _0x2137d7 = _0x345ac3[_0x1e1e22];
                                if (_0x2137d7 !== _0x169b72 && _0x2137d7.dirtyId !== _0x5b9f52.dirtyId) {
                                    _0x213c07 = false;
                                    break;
                                }
                            }
                            _0x213c07 && (this.bitmap.close && this.bitmap.close(), this.bitmap = null);
                        }
                        return true;
                    }, _0x515d19.prototype.dispose = function () {
                        ;
                        this.source.onload = null;
                        this.source.onerror = null;
                        _0x315a1e.prototype.dispose.call(this);
                        this.bitmap && (this.bitmap.close(), this.bitmap = null);
                        this['_process'] = null;
                        this['_load'] = null;
                    }, _0x515d19.test = function (_0x3d58ce) {
                        ;
                        return 'string' == typeof _0x3d58ce || _0x3d58ce instanceof HTMLImageElement;
                    }, _0x515d19;
                }(_0x4f529c), _0x387445 = function (_0x37342a) {
                    ;
                    function _0x580f60(_0x2f3ecd, _0x6558d0) {
                        var _0x2feb03 = this;
                        return _0x6558d0 = _0x6558d0 || {}, (_0x2feb03 = _0x37342a.call(this, document.createElement('canvas')) || this)['_width'] = 0, _0x2feb03['_height'] = 0, _0x2feb03.svg = _0x2f3ecd, _0x2feb03.scale = _0x6558d0.scale || 1, _0x2feb03['_overrideWidth'] = _0x6558d0.width, _0x2feb03['_overrideHeight'] = _0x6558d0.height, _0x2feb03['_resolve'] = null, _0x2feb03['_crossorigin'] = _0x6558d0.crossorigin, _0x2feb03['_load'] = null, false !== _0x6558d0.autoLoad && _0x2feb03.load(), _0x2feb03;
                    }
                    return _0x8b02be(_0x580f60, _0x37342a), _0x580f60.prototype.load = function () {
                        var _0x3ae34d = this;
                        return this['_load'] || (this['_load'] = new Promise(function (_0x5c6981) {
                            ;
                            if (_0x3ae34d['_resolve'] = function () {
                                    ;
                                    _0x3ae34d.resize(_0x3ae34d.source.width, _0x3ae34d.source.height);
                                    _0x5c6981(_0x3ae34d);
                                }, _0x580f60.SVG_XML.test(_0x3ae34d.svg.trim())) {
                                if (!btoa) {
                                    throw new Error('Your browser doesn\'t support base64 conversions.');
                                }
                                _0x3ae34d.svg = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(_0x3ae34d.svg)));
                            }
                            _0x3ae34d['_loadSvg']();
                        })), this['_load'];
                    }, _0x580f60.prototype['_loadSvg'] = function () {
                        var _0xd73e6b = this, _0x2ab02e = new Image();
                        _0x4f529c.crossOrigin(_0x2ab02e, this.svg, this['_crossorigin']);
                        _0x2ab02e.src = this.svg;
                        _0x2ab02e.onerror = function (_0x1c5c01) {
                            ;
                            _0xd73e6b['_resolve'] && (_0x2ab02e.onerror = null, _0xd73e6b.onError.emit(_0x1c5c01));
                        };
                        _0x2ab02e.onload = function () {
                            ;
                            if (_0xd73e6b['_resolve']) {
                                var _0x356f84 = _0x2ab02e.width, _0x5da502 = _0x2ab02e.height;
                                if (!_0x356f84 || !_0x5da502) {
                                    throw new Error('The SVG image must have width and height defined (in pixels), canvas API needs them.');
                                }
                                var _0xb84b4e = _0x356f84 * _0xd73e6b.scale, _0x449db4 = _0x5da502 * _0xd73e6b.scale;
                                (_0xd73e6b['_overrideWidth'] || _0xd73e6b['_overrideHeight']) && (_0xb84b4e = _0xd73e6b['_overrideWidth'] || _0xd73e6b['_overrideHeight'] / _0x5da502 * _0x356f84, _0x449db4 = _0xd73e6b['_overrideHeight'] || _0xd73e6b['_overrideWidth'] / _0x356f84 * _0x5da502);
                                _0xb84b4e = Math.round(_0xb84b4e);
                                _0x449db4 = Math.round(_0x449db4);
                                var _0x36c0da = _0xd73e6b.source;
                                _0x36c0da.width = _0xb84b4e;
                                _0x36c0da.height = _0x449db4;
                                _0x36c0da['_pixiId'] = 'canvas_' + (0, _0x2932e8.hQ)();
                                _0x36c0da.getContext('2d').drawImage(_0x2ab02e, 0, 0, _0x356f84, _0x5da502, 0, 0, _0xb84b4e, _0x449db4);
                                _0xd73e6b['_resolve']();
                                _0xd73e6b['_resolve'] = null;
                            }
                        };
                    }, _0x580f60.getSize = function (_0x5d6807) {
                        var _0x556cda = _0x580f60.SVG_SIZE.exec(_0x5d6807), _0x4d5237 = {};
                        return _0x556cda && (_0x4d5237[_0x556cda[1]] = Math.round(parseFloat(_0x556cda[3])), _0x4d5237[_0x556cda[5]] = Math.round(parseFloat(_0x556cda[7]))), _0x4d5237;
                    }, _0x580f60.prototype.dispose = function () {
                        ;
                        _0x37342a.prototype.dispose.call(this);
                        this['_resolve'] = null;
                        this['_crossorigin'] = null;
                    }, _0x580f60.test = function (_0x310462, _0x9b8a14) {
                        ;
                        return 'svg' === _0x9b8a14 || 'string' == typeof _0x310462 && /^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/.test(_0x310462) || 'string' == typeof _0x310462 && _0x580f60.SVG_XML.test(_0x310462);
                    }, _0x580f60.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m, _0x580f60.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i, _0x580f60;
                }(_0x4f529c), _0x4a4281 = function (_0x227420) {
                    ;
                    function _0x372a01(_0x42cfd1, _0xa30a0f) {
                        var _0x55c5ec = this;
                        if (_0xa30a0f = _0xa30a0f || {}, !(_0x42cfd1 instanceof HTMLVideoElement)) {
                            var _0x430007 = document.createElement('video');
                            _0x430007.setAttribute('preload', 'auto');
                            _0x430007.setAttribute('webkit-playsinline', '');
                            _0x430007.setAttribute('playsinline', '');
                            'string' == typeof _0x42cfd1 && (_0x42cfd1 = [_0x42cfd1]);
                            var _0x55f03e = _0x42cfd1[0].src || _0x42cfd1[0];
                            _0x4f529c.crossOrigin(_0x430007, _0x55f03e, _0xa30a0f.crossorigin);
                            for (var _0x1f4469 = 0; _0x1f4469 < _0x42cfd1.length; ++_0x1f4469) {
                                var _0x35c849 = document.createElement('source'), _0x20802b = _0x42cfd1[_0x1f4469], _0x52cc7e = _0x20802b.src, _0x2ac848 = _0x20802b.mime, _0x423d54 = (_0x52cc7e = _0x52cc7e || _0x42cfd1[_0x1f4469]).split('?').shift().toLowerCase(), _0x37d3e7 = _0x423d54.slice(_0x423d54.lastIndexOf('.') + 1);
                                _0x2ac848 = _0x2ac848 || _0x372a01.MIME_TYPES[_0x37d3e7] || 'video/' + _0x37d3e7;
                                _0x35c849.src = _0x52cc7e;
                                _0x35c849.type = _0x2ac848;
                                _0x430007.appendChild(_0x35c849);
                            }
                            _0x42cfd1 = _0x430007;
                        }
                        return (_0x55c5ec = _0x227420.call(this, _0x42cfd1) || this).noSubImage = true, _0x55c5ec['_autoUpdate'] = true, _0x55c5ec['_isConnectedToTicker'] = false, _0x55c5ec['_updateFPS'] = _0xa30a0f.updateFPS || 0, _0x55c5ec['_msToNextUpdate'] = 0, _0x55c5ec.autoPlay = false !== _0xa30a0f.autoPlay, _0x55c5ec['_load'] = null, _0x55c5ec['_resolve'] = null, _0x55c5ec['_onCanPlay'] = _0x55c5ec['_onCanPlay'].bind(_0x55c5ec), _0x55c5ec['_onError'] = _0x55c5ec['_onError'].bind(_0x55c5ec), false !== _0xa30a0f.autoLoad && _0x55c5ec.load(), _0x55c5ec;
                    }
                    return _0x8b02be(_0x372a01, _0x227420), _0x372a01.prototype.update = function (_0x3e96bb) {
                        ;
                        if (!this.destroyed) {
                            var _0x25c1e1 = _0x17327c.vB.shared.elapsedMS * this.source.playbackRate;
                            this['_msToNextUpdate'] = Math.floor(this['_msToNextUpdate'] - _0x25c1e1);
                            (!this['_updateFPS'] || this['_msToNextUpdate'] <= 0) && (_0x227420.prototype.update.call(this), this['_msToNextUpdate'] = this['_updateFPS'] ? Math.floor(1000 / this['_updateFPS']) : 0);
                        }
                    }, _0x372a01.prototype.load = function () {
                        var _0x21a9b8 = this;
                        if (this['_load']) {
                            return this['_load'];
                        }
                        var _0x28cd4d = this.source;
                        return (_0x28cd4d.readyState === _0x28cd4d.HAVE_ENOUGH_DATA || _0x28cd4d.readyState === _0x28cd4d.HAVE_FUTURE_DATA) && _0x28cd4d.width && _0x28cd4d.height && (_0x28cd4d.complete = true), _0x28cd4d.addEventListener('play', this['_onPlayStart'].bind(this)), _0x28cd4d.addEventListener('pause', this['_onPlayStop'].bind(this)), this['_isSourceReady']() ? this['_onCanPlay']() : (_0x28cd4d.addEventListener('canplay', this['_onCanPlay']), _0x28cd4d.addEventListener('canplaythrough', this['_onCanPlay']), _0x28cd4d.addEventListener('error', this['_onError'], true)), this['_load'] = new Promise(function (_0x3d95cf) {
                            ;
                            _0x21a9b8.valid ? _0x3d95cf(_0x21a9b8) : (_0x21a9b8['_resolve'] = _0x3d95cf, _0x28cd4d.load());
                        }), this['_load'];
                    }, _0x372a01.prototype['_onError'] = function (_0x5d4282) {
                        ;
                        this.source.removeEventListener('error', this['_onError'], true);
                        this.onError.emit(_0x5d4282);
                    }, _0x372a01.prototype['_isSourcePlaying'] = function () {
                        var _0x18396b = this.source;
                        return _0x18396b.currentTime > 0 && false === _0x18396b.paused && false === _0x18396b.ended && _0x18396b.readyState > 2;
                    }, _0x372a01.prototype['_isSourceReady'] = function () {
                        var _0x4071b1 = this.source;
                        return 3 === _0x4071b1.readyState || 4 === _0x4071b1.readyState;
                    }, _0x372a01.prototype['_onPlayStart'] = function () {
                        ;
                        this.valid || this['_onCanPlay']();
                        this.autoUpdate && !this['_isConnectedToTicker'] && (_0x17327c.vB.shared.add(this.update, this), this['_isConnectedToTicker'] = true);
                    }, _0x372a01.prototype['_onPlayStop'] = function () {
                        ;
                        this['_isConnectedToTicker'] && (_0x17327c.vB.shared.remove(this.update, this), this['_isConnectedToTicker'] = false);
                    }, _0x372a01.prototype['_onCanPlay'] = function () {
                        var _0x3efcc6 = this.source;
                        _0x3efcc6.removeEventListener('canplay', this['_onCanPlay']);
                        _0x3efcc6.removeEventListener('canplaythrough', this['_onCanPlay']);
                        var _0x60bfcc = this.valid;
                        this.resize(_0x3efcc6.videoWidth, _0x3efcc6.videoHeight);
                        !_0x60bfcc && this['_resolve'] && (this['_resolve'](this), this['_resolve'] = null);
                        this['_isSourcePlaying']() ? this['_onPlayStart']() : this.autoPlay && _0x3efcc6.play();
                    }, _0x372a01.prototype.dispose = function () {
                        ;
                        this['_isConnectedToTicker'] && (_0x17327c.vB.shared.remove(this.update, this), this['_isConnectedToTicker'] = false);
                        var _0x597a28 = this.source;
                        _0x597a28 && (_0x597a28.removeEventListener('error', this['_onError'], true), _0x597a28.pause(), _0x597a28.src = '', _0x597a28.load());
                        _0x227420.prototype.dispose.call(this);
                    }, Object.defineProperty(_0x372a01.prototype, 'autoUpdate', {
                        'get': function () {
                            return this['_autoUpdate'];
                        },
                        'set': function (_0x2bab69) {
                            ;
                            _0x2bab69 !== this['_autoUpdate'] && (this['_autoUpdate'] = _0x2bab69, !this['_autoUpdate'] && this['_isConnectedToTicker'] ? (_0x17327c.vB.shared.remove(this.update, this), this['_isConnectedToTicker'] = false) : this['_autoUpdate'] && !this['_isConnectedToTicker'] && this['_isSourcePlaying']() && (_0x17327c.vB.shared.add(this.update, this), this['_isConnectedToTicker'] = true));
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x372a01.prototype, 'updateFPS', {
                        'get': function () {
                            return this['_updateFPS'];
                        },
                        'set': function (_0x15f771) {
                            ;
                            _0x15f771 !== this['_updateFPS'] && (this['_updateFPS'] = _0x15f771);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x372a01.test = function (_0x4cd1c8, _0x54c526) {
                        ;
                        return globalThis.HTMLVideoElement && _0x4cd1c8 instanceof HTMLVideoElement || _0x372a01.TYPES.indexOf(_0x54c526) > -1;
                    }, _0x372a01.TYPES = [
                        'mp4',
                        'm4v',
                        'webm',
                        'ogg',
                        'ogv',
                        'h264',
                        'avi',
                        'mov'
                    ], _0x372a01.MIME_TYPES = {
                        'ogv': 'video/ogg',
                        'mov': 'video/quicktime',
                        'm4v': 'video/mp4'
                    }, _0x372a01;
                }(_0x4f529c), _0x7b02bb = function (_0x5f2954) {
                    ;
                    function _0x3cfde4(_0x351f76) {
                        ;
                        return _0x5f2954.call(this, _0x351f76) || this;
                    }
                    return _0x8b02be(_0x3cfde4, _0x5f2954), _0x3cfde4.test = function (_0x2f3a8b) {
                        ;
                        return !!globalThis.createImageBitmap && _0x2f3a8b instanceof ImageBitmap;
                    }, _0x3cfde4;
                }(_0x4f529c);
            _0x59d7d9.push(_0xc344ef, _0x7b02bb, _0x474578, _0x4a4281, _0x387445, _0x231b8f, _0x96fa98, _0x317917);
            var _0x1d151f = {
                    '__proto__': null,
                    'Resource': _0x1f538a,
                    'BaseImageResource': _0x4f529c,
                    'INSTALLED': _0x59d7d9,
                    'autoDetectResource': _0x4a3038,
                    'AbstractMultiResource': _0x4577ec,
                    'ArrayResource': _0x317917,
                    'BufferResource': _0x231b8f,
                    'CanvasResource': _0x474578,
                    'CubeResource': _0x96fa98,
                    'ImageResource': _0xc344ef,
                    'SVGResource': _0x387445,
                    'VideoResource': _0x4a4281,
                    'ImageBitmapResource': _0x7b02bb
                }, _0x98912 = function (_0x3d0ed4) {
                    ;
                    function _0x1ba922() {
                        ;
                        return null !== _0x3d0ed4 && _0x3d0ed4.apply(this, arguments) || this;
                    }
                    return _0x8b02be(_0x1ba922, _0x3d0ed4), _0x1ba922.prototype.upload = function (_0x2c125c, _0x3ad1e9, _0x3c00b0) {
                        var _0x41efdc = _0x2c125c.gl;
                        _0x41efdc.pixelStorei(_0x41efdc.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _0x3ad1e9.alphaMode === _0x589e0e.iw.UNPACK);
                        var _0x2f013d = _0x3ad1e9.realWidth, _0x563225 = _0x3ad1e9.realHeight;
                        return _0x3c00b0.width === _0x2f013d && _0x3c00b0.height === _0x563225 ? _0x41efdc.texSubImage2D(_0x3ad1e9.target, 0, 0, 0, _0x2f013d, _0x563225, _0x3ad1e9.format, _0x3c00b0.type, this.data) : (_0x3c00b0.width = _0x2f013d, _0x3c00b0.height = _0x563225, _0x41efdc.texImage2D(_0x3ad1e9.target, 0, _0x3c00b0.internalFormat, _0x2f013d, _0x563225, 0, _0x3ad1e9.format, _0x3c00b0.type, this.data)), true;
                    }, _0x1ba922;
                }(_0x231b8f), _0x48e67a = function () {
                    ;
                    function _0x334f84(_0x521030, _0x5d5e2f) {
                        ;
                        this.width = Math.round(_0x521030 || 100);
                        this.height = Math.round(_0x5d5e2f || 100);
                        this.stencil = false;
                        this.depth = false;
                        this.dirtyId = 0;
                        this.dirtyFormat = 0;
                        this.dirtySize = 0;
                        this.depthTexture = null;
                        this.colorTextures = [];
                        this.glFramebuffers = {};
                        this.disposeRunner = new _0x5643fe('disposeFramebuffer');
                        this.multisample = _0x589e0e.G5.NONE;
                    }
                    return Object.defineProperty(_0x334f84.prototype, 'colorTexture', {
                        'get': function () {
                            return this.colorTextures[0];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x334f84.prototype.addColorTexture = function (_0x41e75b, _0x4398ad) {
                        ;
                        return void 0 === _0x41e75b && (_0x41e75b = 0), this.colorTextures[_0x41e75b] = _0x4398ad || new _0x496d39(null, {
                            'scaleMode': _0x589e0e.aH.NEAREST,
                            'resolution': 1,
                            'mipmap': _0x589e0e.WB.OFF,
                            'width': this.width,
                            'height': this.height
                        }), this.dirtyId++, this.dirtyFormat++, this;
                    }, _0x334f84.prototype.addDepthTexture = function (_0x14c50b) {
                        ;
                        return this.depthTexture = _0x14c50b || new _0x496d39(new _0x98912(null, {
                            'width': this.width,
                            'height': this.height
                        }), {
                            'scaleMode': _0x589e0e.aH.NEAREST,
                            'resolution': 1,
                            'width': this.width,
                            'height': this.height,
                            'mipmap': _0x589e0e.WB.OFF,
                            'format': _0x589e0e.I2.DEPTH_COMPONENT,
                            'type': _0x589e0e.vK.UNSIGNED_SHORT
                        }), this.dirtyId++, this.dirtyFormat++, this;
                    }, _0x334f84.prototype.enableDepth = function () {
                        ;
                        return this.depth = true, this.dirtyId++, this.dirtyFormat++, this;
                    }, _0x334f84.prototype.enableStencil = function () {
                        ;
                        return this.stencil = true, this.dirtyId++, this.dirtyFormat++, this;
                    }, _0x334f84.prototype.resize = function (_0x49b43e, _0x12e291) {
                        ;
                        if (_0x49b43e = Math.round(_0x49b43e), _0x12e291 = Math.round(_0x12e291), _0x49b43e !== this.width || _0x12e291 !== this.height) {
                            this.width = _0x49b43e;
                            this.height = _0x12e291;
                            this.dirtyId++;
                            this.dirtySize++;
                            for (var _0x3ad4ee = 0; _0x3ad4ee < this.colorTextures.length; _0x3ad4ee++) {
                                var _0xfe0991 = this.colorTextures[_0x3ad4ee], _0x815599 = _0xfe0991.resolution;
                                _0xfe0991.setSize(_0x49b43e / _0x815599, _0x12e291 / _0x815599);
                            }
                            this.depthTexture && (_0x815599 = this.depthTexture.resolution, this.depthTexture.setSize(_0x49b43e / _0x815599, _0x12e291 / _0x815599));
                        }
                    }, _0x334f84.prototype.dispose = function () {
                        ;
                        this.disposeRunner.emit(this, false);
                    }, _0x334f84.prototype.destroyDepthTexture = function () {
                        ;
                        this.depthTexture && (this.depthTexture.destroy(), this.depthTexture = null, ++this.dirtyId, ++this.dirtyFormat);
                    }, _0x334f84;
                }(), _0x52468a = function (_0x1495ee) {
                    ;
                    function _0x8d7a41(_0x7b2c07) {
                        ;
                        void 0 === _0x7b2c07 && (_0x7b2c07 = {});
                        var _0x272556 = this;
                        return 'number' == typeof _0x7b2c07 && (_0x7b2c07 = {
                            'width': arguments[0],
                            'height': arguments[1],
                            'scaleMode': arguments[2],
                            'resolution': arguments[3]
                        }), _0x7b2c07.width = _0x7b2c07.width || 100, _0x7b2c07.height = _0x7b2c07.height || 100, _0x7b2c07.multisample = void 0 !== _0x7b2c07.multisample ? _0x7b2c07.multisample : _0x589e0e.G5.NONE, (_0x272556 = _0x1495ee.call(this, null, _0x7b2c07) || this).mipmap = _0x589e0e.WB.OFF, _0x272556.valid = true, _0x272556.clearColor = [
                            0,
                            0,
                            0,
                            0
                        ], _0x272556.framebuffer = new _0x48e67a(_0x272556.realWidth, _0x272556.realHeight).addColorTexture(0, _0x272556), _0x272556.framebuffer.multisample = _0x7b2c07.multisample, _0x272556.maskStack = [], _0x272556.filterStack = [{}], _0x272556;
                    }
                    return _0x8b02be(_0x8d7a41, _0x1495ee), _0x8d7a41.prototype.resize = function (_0x4d819c, _0xba0f75) {
                        ;
                        this.framebuffer.resize(_0x4d819c * this.resolution, _0xba0f75 * this.resolution);
                        this.setRealSize(this.framebuffer.width, this.framebuffer.height);
                    }, _0x8d7a41.prototype.dispose = function () {
                        ;
                        this.framebuffer.dispose();
                        _0x1495ee.prototype.dispose.call(this);
                    }, _0x8d7a41.prototype.destroy = function () {
                        ;
                        _0x1495ee.prototype.destroy.call(this);
                        this.framebuffer.destroyDepthTexture();
                        this.framebuffer = null;
                    }, _0x8d7a41;
                }(_0x496d39), _0x3d2de0 = function () {
                    ;
                    function _0x3b3b25() {
                        ;
                        this.x0 = 0;
                        this.y0 = 0;
                        this.x1 = 1;
                        this.y1 = 0;
                        this.x2 = 1;
                        this.y2 = 1;
                        this.x3 = 0;
                        this.y3 = 1;
                        this.uvsFloat32 = new Float32Array(8);
                    }
                    return _0x3b3b25.prototype.set = function (_0x1c38fb, _0x36bf2f, _0x33352c) {
                        var _0x579f31 = _0x36bf2f.width, _0x43f086 = _0x36bf2f.height;
                        if (_0x33352c) {
                            var _0x39502d = _0x1c38fb.width / 2 / _0x579f31, _0x5222f8 = _0x1c38fb.height / 2 / _0x43f086, _0x27460f = _0x1c38fb.x / _0x579f31 + _0x39502d, _0x54af07 = _0x1c38fb.y / _0x43f086 + _0x5222f8;
                            _0x33352c = _0x596cf7.Lv.add(_0x33352c, _0x596cf7.Lv.NW);
                            this.x0 = _0x27460f + _0x39502d * _0x596cf7.Lv.uX(_0x33352c);
                            this.y0 = _0x54af07 + _0x5222f8 * _0x596cf7.Lv.uY(_0x33352c);
                            _0x33352c = _0x596cf7.Lv.add(_0x33352c, 2);
                            this.x1 = _0x27460f + _0x39502d * _0x596cf7.Lv.uX(_0x33352c);
                            this.y1 = _0x54af07 + _0x5222f8 * _0x596cf7.Lv.uY(_0x33352c);
                            _0x33352c = _0x596cf7.Lv.add(_0x33352c, 2);
                            this.x2 = _0x27460f + _0x39502d * _0x596cf7.Lv.uX(_0x33352c);
                            this.y2 = _0x54af07 + _0x5222f8 * _0x596cf7.Lv.uY(_0x33352c);
                            _0x33352c = _0x596cf7.Lv.add(_0x33352c, 2);
                            this.x3 = _0x27460f + _0x39502d * _0x596cf7.Lv.uX(_0x33352c);
                            this.y3 = _0x54af07 + _0x5222f8 * _0x596cf7.Lv.uY(_0x33352c);
                        } else {
                            this.x0 = _0x1c38fb.x / _0x579f31;
                            this.y0 = _0x1c38fb.y / _0x43f086;
                            this.x1 = (_0x1c38fb.x + _0x1c38fb.width) / _0x579f31;
                            this.y1 = _0x1c38fb.y / _0x43f086;
                            this.x2 = (_0x1c38fb.x + _0x1c38fb.width) / _0x579f31;
                            this.y2 = (_0x1c38fb.y + _0x1c38fb.height) / _0x43f086;
                            this.x3 = _0x1c38fb.x / _0x579f31;
                            this.y3 = (_0x1c38fb.y + _0x1c38fb.height) / _0x43f086;
                        }
                        this.uvsFloat32[0] = this.x0;
                        this.uvsFloat32[1] = this.y0;
                        this.uvsFloat32[2] = this.x1;
                        this.uvsFloat32[3] = this.y1;
                        this.uvsFloat32[4] = this.x2;
                        this.uvsFloat32[5] = this.y2;
                        this.uvsFloat32[6] = this.x3;
                        this.uvsFloat32[7] = this.y3;
                    }, _0x3b3b25.prototype.toString = function () {
                        ;
                        return '[@pixi/core:TextureUvs x0=' + this.x0 + ' y0=' + this.y0 + ' x1=' + this.x1 + ' y1=' + this.y1 + ' x2=' + this.x2 + ' y2=' + this.y2 + ' x3=' + this.x3 + ' y3=' + this.y3 + ']';
                    }, _0x3b3b25;
                }(), _0x214cf9 = new _0x3d2de0();
            function _0x192b8b(_0x450961) {
                ;
                _0x450961.destroy = function () {
                };
                _0x450961.on = function () {
                };
                _0x450961.once = function () {
                };
                _0x450961.emit = function () {
                };
            }
            var _0x4fe212 = function (_0x2b84ed) {
                    ;
                    function _0x17f769(_0x3c2b7b, _0x1b25ba, _0x2d3c77, _0xf59bdf, _0x1a0fe0, _0x341e41) {
                        var _0x3b0e13 = _0x2b84ed.call(this) || this;
                        if (_0x3b0e13.noFrame = false, _0x1b25ba || (_0x3b0e13.noFrame = true, _0x1b25ba = new _0x596cf7.Ae(0, 0, 1, 1)), _0x3c2b7b instanceof _0x17f769 && (_0x3c2b7b = _0x3c2b7b.baseTexture), _0x3b0e13.baseTexture = _0x3c2b7b, _0x3b0e13['_frame'] = _0x1b25ba, _0x3b0e13.trim = _0xf59bdf, _0x3b0e13.valid = false, _0x3b0e13['_uvs'] = _0x214cf9, _0x3b0e13.uvMatrix = null, _0x3b0e13.orig = _0x2d3c77 || _0x1b25ba, _0x3b0e13['_rotate'] = Number(_0x1a0fe0 || 0), true === _0x1a0fe0) {
                            _0x3b0e13['_rotate'] = 2;
                        } else {
                            if (_0x3b0e13['_rotate'] % 2 != 0) {
                                throw new Error('attempt to use diamond-shaped UVs. If you are sure, set rotation manually');
                            }
                        }
                        return _0x3b0e13.defaultAnchor = _0x341e41 ? new _0x596cf7.E9(_0x341e41.x, _0x341e41.y) : new _0x596cf7.E9(0, 0), _0x3b0e13['_updateID'] = 0, _0x3b0e13.textureCacheIds = [], _0x3c2b7b.valid ? _0x3b0e13.noFrame ? _0x3c2b7b.valid && _0x3b0e13.onBaseTextureUpdated(_0x3c2b7b) : _0x3b0e13.frame = _0x1b25ba : _0x3c2b7b.once('loaded', _0x3b0e13.onBaseTextureUpdated, _0x3b0e13), _0x3b0e13.noFrame && _0x3c2b7b.on('update', _0x3b0e13.onBaseTextureUpdated, _0x3b0e13), _0x3b0e13;
                    }
                    return _0x8b02be(_0x17f769, _0x2b84ed), _0x17f769.prototype.update = function () {
                        ;
                        this.baseTexture.resource && this.baseTexture.resource.update();
                    }, _0x17f769.prototype.onBaseTextureUpdated = function (_0x3419da) {
                        ;
                        if (this.noFrame) {
                            if (!this.baseTexture.valid) {
                                return;
                            }
                            this['_frame'].width = _0x3419da.width;
                            this['_frame'].height = _0x3419da.height;
                            this.valid = true;
                            this.updateUvs();
                        } else {
                            this.frame = this['_frame'];
                        }
                        this.emit('update', this);
                    }, _0x17f769.prototype.destroy = function (_0x4fc0f7) {
                        ;
                        if (this.baseTexture) {
                            if (_0x4fc0f7) {
                                var _0x2747c1 = this.baseTexture.resource;
                                _0x2747c1 && _0x2747c1.url && _0x2932e8.kN[_0x2747c1.url] && _0x17f769.removeFromCache(_0x2747c1.url);
                                this.baseTexture.destroy();
                            }
                            this.baseTexture.off('loaded', this.onBaseTextureUpdated, this);
                            this.baseTexture.off('update', this.onBaseTextureUpdated, this);
                            this.baseTexture = null;
                        }
                        this['_frame'] = null;
                        this['_uvs'] = null;
                        this.trim = null;
                        this.orig = null;
                        this.valid = false;
                        _0x17f769.removeFromCache(this);
                        this.textureCacheIds = null;
                    }, _0x17f769.prototype.clone = function () {
                        var _0x199e5b = this['_frame'].clone(), _0x15c52a = this['_frame'] === this.orig ? _0x199e5b : this.orig.clone(), _0x512c65 = new _0x17f769(this.baseTexture, !this.noFrame && _0x199e5b, _0x15c52a, this.trim && this.trim.clone(), this.rotate, this.defaultAnchor);
                        return this.noFrame && (_0x512c65['_frame'] = _0x199e5b), _0x512c65;
                    }, _0x17f769.prototype.updateUvs = function () {
                        ;
                        this['_uvs'] === _0x214cf9 && (this['_uvs'] = new _0x3d2de0());
                        this['_uvs'].set(this['_frame'], this.baseTexture, this.rotate);
                        this['_updateID']++;
                    }, _0x17f769.from = function (_0x4253db, _0x474ff5, _0x5725d1) {
                        ;
                        void 0 === _0x474ff5 && (_0x474ff5 = {});
                        void 0 === _0x5725d1 && (_0x5725d1 = _0xa851a9.X.STRICT_TEXTURE_CACHE);
                        var _0x58a9dd = 'string' == typeof _0x4253db, _0x104414 = null;
                        if (_0x58a9dd) {
                            _0x104414 = _0x4253db;
                        } else {
                            if (_0x4253db instanceof _0x496d39) {
                                if (!_0x4253db.cacheId) {
                                    var _0x6f3130 = _0x474ff5 && _0x474ff5.pixiIdPrefix || 'pixiid';
                                    _0x4253db.cacheId = _0x6f3130 + '-' + (0, _0x2932e8.hQ)();
                                    _0x496d39.addToCache(_0x4253db, _0x4253db.cacheId);
                                }
                                _0x104414 = _0x4253db.cacheId;
                            } else {
                                _0x4253db['_pixiId'] || (_0x6f3130 = _0x474ff5 && _0x474ff5.pixiIdPrefix || 'pixiid', _0x4253db['_pixiId'] = _0x6f3130 + '_' + (0, _0x2932e8.hQ)());
                                _0x104414 = _0x4253db['_pixiId'];
                            }
                        }
                        var _0x5710ab = _0x2932e8.kN[_0x104414];
                        if (_0x58a9dd && _0x5725d1 && !_0x5710ab) {
                            throw new Error('The cacheId "' + _0x104414 + '" does not exist in TextureCache.');
                        }
                        return _0x5710ab || _0x4253db instanceof _0x496d39 ? !_0x5710ab && _0x4253db instanceof _0x496d39 && (_0x5710ab = new _0x17f769(_0x4253db), _0x17f769.addToCache(_0x5710ab, _0x104414)) : (_0x474ff5.resolution || (_0x474ff5.resolution = (0, _0x2932e8.fL)(_0x4253db)), (_0x5710ab = new _0x17f769(new _0x496d39(_0x4253db, _0x474ff5))).baseTexture.cacheId = _0x104414, _0x496d39.addToCache(_0x5710ab.baseTexture, _0x104414), _0x17f769.addToCache(_0x5710ab, _0x104414)), _0x5710ab;
                    }, _0x17f769.fromURL = function (_0x2edd63, _0x35dd4f) {
                        var _0x277546 = Object.assign({ 'autoLoad': false }, null == _0x35dd4f ? void 0 : _0x35dd4f.resourceOptions), _0x3f5416 = _0x17f769.from(_0x2edd63, Object.assign({ 'resourceOptions': _0x277546 }, _0x35dd4f), false), _0x1a695f = _0x3f5416.baseTexture.resource;
                        return _0x3f5416.baseTexture.valid ? Promise.resolve(_0x3f5416) : _0x1a695f.load().then(function () {
                            ;
                            return Promise.resolve(_0x3f5416);
                        });
                    }, _0x17f769.fromBuffer = function (_0x3f7e90, _0x275ffc, _0x188e90, _0x4ed46c) {
                        ;
                        return new _0x17f769(_0x496d39.fromBuffer(_0x3f7e90, _0x275ffc, _0x188e90, _0x4ed46c));
                    }, _0x17f769.fromLoader = function (_0x6d0f6b, _0x34f608, _0x2d3d54, _0x2b4c7c) {
                        var _0x158961 = new _0x496d39(_0x6d0f6b, Object.assign({
                                'scaleMode': _0xa851a9.X.SCALE_MODE,
                                'resolution': (0, _0x2932e8.fL)(_0x34f608)
                            }, _0x2b4c7c)), _0x3ecbee = _0x158961.resource;
                        _0x3ecbee instanceof _0xc344ef && (_0x3ecbee.url = _0x34f608);
                        var _0x59dc3c = new _0x17f769(_0x158961);
                        return _0x2d3d54 || (_0x2d3d54 = _0x34f608), _0x496d39.addToCache(_0x59dc3c.baseTexture, _0x2d3d54), _0x17f769.addToCache(_0x59dc3c, _0x2d3d54), _0x2d3d54 !== _0x34f608 && (_0x496d39.addToCache(_0x59dc3c.baseTexture, _0x34f608), _0x17f769.addToCache(_0x59dc3c, _0x34f608)), _0x59dc3c.baseTexture.valid ? Promise.resolve(_0x59dc3c) : new Promise(function (_0x23a4df) {
                            ;
                            _0x59dc3c.baseTexture.once('loaded', function () {
                                return _0x23a4df(_0x59dc3c);
                            });
                        });
                    }, _0x17f769.addToCache = function (_0x4e0959, _0x4529b4) {
                        ;
                        _0x4529b4 && (-1 === _0x4e0959.textureCacheIds.indexOf(_0x4529b4) && _0x4e0959.textureCacheIds.push(_0x4529b4), _0x2932e8.kN[_0x4529b4] && console.warn('Texture added to the cache with an id [' + _0x4529b4 + '] that already had an entry'), _0x2932e8.kN[_0x4529b4] = _0x4e0959);
                    }, _0x17f769.removeFromCache = function (_0x59fdaf) {
                        ;
                        if ('string' == typeof _0x59fdaf) {
                            var _0x5a38bd = _0x2932e8.kN[_0x59fdaf];
                            if (_0x5a38bd) {
                                var _0x146622 = _0x5a38bd.textureCacheIds.indexOf(_0x59fdaf);
                                return _0x146622 > -1 && _0x5a38bd.textureCacheIds.splice(_0x146622, 1), delete _0x2932e8.kN[_0x59fdaf], _0x5a38bd;
                            }
                        } else {
                            if (_0x59fdaf && _0x59fdaf.textureCacheIds) {
                                for (var _0x3829ba = 0; _0x3829ba < _0x59fdaf.textureCacheIds.length; ++_0x3829ba) {
                                    _0x2932e8.kN[_0x59fdaf.textureCacheIds[_0x3829ba]] === _0x59fdaf && delete _0x2932e8.kN[_0x59fdaf.textureCacheIds[_0x3829ba]];
                                }
                                return _0x59fdaf.textureCacheIds.length = 0, _0x59fdaf;
                            }
                        }
                        return null;
                    }, Object.defineProperty(_0x17f769.prototype, 'resolution', {
                        'get': function () {
                            ;
                            return this.baseTexture.resolution;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x17f769.prototype, 'frame', {
                        'get': function () {
                            ;
                            return this['_frame'];
                        },
                        'set': function (_0x2fed03) {
                            ;
                            this['_frame'] = _0x2fed03;
                            this.noFrame = false;
                            var _0x4220e1 = _0x2fed03.x, _0x3d2d6e = _0x2fed03.y, _0x79298c = _0x2fed03.width, _0x31e319 = _0x2fed03.height, _0x522e69 = _0x4220e1 + _0x79298c > this.baseTexture.width, _0x52fd15 = _0x3d2d6e + _0x31e319 > this.baseTexture.height;
                            if (_0x522e69 || _0x52fd15) {
                                var _0x2d76bf = _0x522e69 && _0x52fd15 ? 'and' : 'or', _0x112e75 = 'X: ' + _0x4220e1 + ' + ' + _0x79298c + ' = ' + (_0x4220e1 + _0x79298c) + ' > ' + this.baseTexture.width, _0x447612 = 'Y: ' + _0x3d2d6e + ' + ' + _0x31e319 + ' = ' + (_0x3d2d6e + _0x31e319) + ' > ' + this.baseTexture.height;
                                throw new Error('Texture Error: frame does not fit inside the base Texture dimensions: ' + _0x112e75 + ' ' + _0x2d76bf + ' ' + _0x447612);
                            }
                            this.valid = _0x79298c && _0x31e319 && this.baseTexture.valid;
                            this.trim || this.rotate || (this.orig = _0x2fed03);
                            this.valid && this.updateUvs();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x17f769.prototype, 'rotate', {
                        'get': function () {
                            return this['_rotate'];
                        },
                        'set': function (_0x105c35) {
                            ;
                            this['_rotate'] = _0x105c35;
                            this.valid && this.updateUvs();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x17f769.prototype, 'width', {
                        'get': function () {
                            ;
                            return this.orig.width;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x17f769.prototype, 'height', {
                        'get': function () {
                            ;
                            return this.orig.height;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x17f769.prototype.castToBaseTexture = function () {
                        ;
                        return this.baseTexture;
                    }, Object.defineProperty(_0x17f769, 'EMPTY', {
                        'get': function () {
                            ;
                            return _0x17f769['_EMPTY'] || (_0x17f769['_EMPTY'] = new _0x17f769(new _0x496d39()), _0x192b8b(_0x17f769['_EMPTY']), _0x192b8b(_0x17f769['_EMPTY'].baseTexture)), _0x17f769['_EMPTY'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x17f769, 'WHITE', {
                        'get': function () {
                            ;
                            if (!_0x17f769['_WHITE']) {
                                var _0x1983d2 = document.createElement('canvas'), _0x34c683 = _0x1983d2.getContext('2d');
                                _0x1983d2.width = 16;
                                _0x1983d2.height = 16;
                                _0x34c683.fillStyle = 'white';
                                _0x34c683.fillRect(0, 0, 16, 16);
                                _0x17f769['_WHITE'] = new _0x17f769(new _0x496d39(new _0x474578(_0x1983d2)));
                                _0x192b8b(_0x17f769['_WHITE']);
                                _0x192b8b(_0x17f769['_WHITE'].baseTexture);
                            }
                            return _0x17f769['_WHITE'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x17f769;
                }(_0x2932e8.vp), _0x1cb37d = function (_0x38e6c8) {
                    ;
                    function _0x166006(_0x354806, _0x1c83d5) {
                        var _0x3b93d8 = _0x38e6c8.call(this, _0x354806, _0x1c83d5) || this;
                        return _0x3b93d8.valid = true, _0x3b93d8.filterFrame = null, _0x3b93d8.filterPoolKey = null, _0x3b93d8.updateUvs(), _0x3b93d8;
                    }
                    return _0x8b02be(_0x166006, _0x38e6c8), Object.defineProperty(_0x166006.prototype, 'framebuffer', {
                        'get': function () {
                            ;
                            return this.baseTexture.framebuffer;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x166006.prototype, 'multisample', {
                        'get': function () {
                            ;
                            return this.framebuffer.multisample;
                        },
                        'set': function (_0x3a1a4d) {
                            ;
                            this.framebuffer.multisample = _0x3a1a4d;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x166006.prototype.resize = function (_0x363d87, _0x4e066a, _0x573dec) {
                        ;
                        void 0 === _0x573dec && (_0x573dec = true);
                        var _0x224a59 = this.baseTexture.resolution, _0x1b13f = Math.round(_0x363d87 * _0x224a59) / _0x224a59, _0x2f01f2 = Math.round(_0x4e066a * _0x224a59) / _0x224a59;
                        this.valid = _0x1b13f > 0 && _0x2f01f2 > 0;
                        this['_frame'].width = this.orig.width = _0x1b13f;
                        this['_frame'].height = this.orig.height = _0x2f01f2;
                        _0x573dec && this.baseTexture.resize(_0x1b13f, _0x2f01f2);
                        this.updateUvs();
                    }, _0x166006.prototype.setResolution = function (_0x7c51d7) {
                        var _0x4cee8d = this.baseTexture;
                        _0x4cee8d.resolution !== _0x7c51d7 && (_0x4cee8d.setResolution(_0x7c51d7), this.resize(_0x4cee8d.width, _0x4cee8d.height, false));
                    }, _0x166006.create = function (_0x44ba7f) {
                        ;
                        for (var _0x8b4587 = arguments, _0x397b49 = [], _0x177c3e = 1; _0x177c3e < arguments.length; _0x177c3e++) {
                            _0x397b49[_0x177c3e - 1] = _0x8b4587[_0x177c3e];
                        }
                        return 'number' == typeof _0x44ba7f && ((0, _0x2932e8.a1)('6.0.0', 'Arguments (width, height, scaleMode, resolution) have been deprecated.'), _0x44ba7f = {
                            'width': _0x44ba7f,
                            'height': _0x397b49[0],
                            'scaleMode': _0x397b49[1],
                            'resolution': _0x397b49[2]
                        }), new _0x166006(new _0x52468a(_0x44ba7f));
                    }, _0x166006;
                }(_0x4fe212), _0x150ebd = function () {
                    ;
                    function _0x3bfdad(_0x26c5e0) {
                        ;
                        this.texturePool = {};
                        this.textureOptions = _0x26c5e0 || {};
                        this.enableFullScreen = false;
                        this['_pixelsWidth'] = 0;
                        this['_pixelsHeight'] = 0;
                    }
                    return _0x3bfdad.prototype.createTexture = function (_0x21da1b, _0xf2393b, _0x487484) {
                        ;
                        void 0 === _0x487484 && (_0x487484 = _0x589e0e.G5.NONE);
                        var _0x2fa45e = new _0x52468a(Object.assign({
                            'width': _0x21da1b,
                            'height': _0xf2393b,
                            'resolution': 1,
                            'multisample': _0x487484
                        }, this.textureOptions));
                        return new _0x1cb37d(_0x2fa45e);
                    }, _0x3bfdad.prototype.getOptimalTexture = function (_0x5b39ef, _0x3a2065, _0x2b72cb, _0x2a1841) {
                        var _0xd81f78;
                        void 0 === _0x2b72cb && (_0x2b72cb = 1);
                        void 0 === _0x2a1841 && (_0x2a1841 = _0x589e0e.G5.NONE);
                        _0x5b39ef = Math.ceil(_0x5b39ef * _0x2b72cb - 0.000001);
                        _0x3a2065 = Math.ceil(_0x3a2065 * _0x2b72cb - 0.000001);
                        this.enableFullScreen && _0x5b39ef === this['_pixelsWidth'] && _0x3a2065 === this['_pixelsHeight'] ? _0xd81f78 = _0x2a1841 > 1 ? -_0x2a1841 : -1 : (_0xd81f78 = ((65535 & (_0x5b39ef = (0, _0x2932e8.a9)(_0x5b39ef))) << 16 | 65535 & (_0x3a2065 = (0, _0x2932e8.a9)(_0x3a2065))) >>> 0, _0x2a1841 > 1 && (_0xd81f78 += 4294967296 * _0x2a1841));
                        this.texturePool[_0xd81f78] || (this.texturePool[_0xd81f78] = []);
                        var _0x24e58a = this.texturePool[_0xd81f78].pop();
                        return _0x24e58a || (_0x24e58a = this.createTexture(_0x5b39ef, _0x3a2065, _0x2a1841)), _0x24e58a.filterPoolKey = _0xd81f78, _0x24e58a.setResolution(_0x2b72cb), _0x24e58a;
                    }, _0x3bfdad.prototype.getFilterTexture = function (_0x183fa8, _0xcc10bc, _0x2fdd31) {
                        var _0x5ed8cd = this.getOptimalTexture(_0x183fa8.width, _0x183fa8.height, _0xcc10bc || _0x183fa8.resolution, _0x2fdd31 || _0x589e0e.G5.NONE);
                        return _0x5ed8cd.filterFrame = _0x183fa8.filterFrame, _0x5ed8cd;
                    }, _0x3bfdad.prototype.returnTexture = function (_0x3f9e70) {
                        var _0x4bc972 = _0x3f9e70.filterPoolKey;
                        _0x3f9e70.filterFrame = null;
                        this.texturePool[_0x4bc972].push(_0x3f9e70);
                    }, _0x3bfdad.prototype.returnFilterTexture = function (_0xe16b8a) {
                        ;
                        this.returnTexture(_0xe16b8a);
                    }, _0x3bfdad.prototype.clear = function (_0x28e46d) {
                        ;
                        if (_0x28e46d = false !== _0x28e46d) {
                            for (var _0x28bbd5 in this.texturePool) {
                                var _0x13cedb = this.texturePool[_0x28bbd5];
                                if (_0x13cedb) {
                                    for (var _0x1181a6 = 0; _0x1181a6 < _0x13cedb.length; _0x1181a6++) {
                                        _0x13cedb[_0x1181a6].destroy(true);
                                    }
                                }
                            }
                        }
                        this.texturePool = {};
                    }, _0x3bfdad.prototype.setScreenSize = function (_0x9c58b3) {
                        ;
                        if (_0x9c58b3.width !== this['_pixelsWidth'] || _0x9c58b3.height !== this['_pixelsHeight']) {
                            for (var _0x222c3b in (this.enableFullScreen = _0x9c58b3.width > 0 && _0x9c58b3.height > 0, this.texturePool))
                                if (Number(_0x222c3b) < 0) {
                                    var _0x39c674 = this.texturePool[_0x222c3b];
                                    if (_0x39c674) {
                                        for (var _0x4758e3 = 0; _0x4758e3 < _0x39c674.length; _0x4758e3++) {
                                            _0x39c674[_0x4758e3].destroy(true);
                                        }
                                    }
                                    this.texturePool[_0x222c3b] = [];
                                }
                            this['_pixelsWidth'] = _0x9c58b3.width;
                            this['_pixelsHeight'] = _0x9c58b3.height;
                        }
                    }, _0x3bfdad.SCREEN_KEY = -1, _0x3bfdad;
                }(), _0x1c3c16 = function () {
                    ;
                    function _0x28033a(_0x5096ce, _0x4a8f0b, _0x1b9b51, _0x380736, _0x100b28, _0x181505, _0x484404) {
                        ;
                        void 0 === _0x4a8f0b && (_0x4a8f0b = 0);
                        void 0 === _0x1b9b51 && (_0x1b9b51 = false);
                        void 0 === _0x380736 && (_0x380736 = _0x589e0e.vK.FLOAT);
                        this.buffer = _0x5096ce;
                        this.size = _0x4a8f0b;
                        this.normalized = _0x1b9b51;
                        this.type = _0x380736;
                        this.stride = _0x100b28;
                        this.start = _0x181505;
                        this.instance = _0x484404;
                    }
                    return _0x28033a.prototype.destroy = function () {
                        ;
                        this.buffer = null;
                    }, _0x28033a.from = function (_0x5181af, _0x1d242, _0x2804bf, _0x36cefd, _0xc9f1a) {
                        return new _0x28033a(_0x5181af, _0x1d242, _0x2804bf, _0x36cefd, _0xc9f1a);
                    }, _0x28033a;
                }(), _0x3aebb5 = 0, _0x5f195b = function () {
                    ;
                    function _0x525693(_0x23b1dd, _0x516c66, _0x5eb3bb) {
                        ;
                        void 0 === _0x516c66 && (_0x516c66 = true);
                        void 0 === _0x5eb3bb && (_0x5eb3bb = false);
                        this.data = _0x23b1dd || new Float32Array(1);
                        this['_glBuffers'] = {};
                        this['_updateID'] = 0;
                        this.index = _0x5eb3bb;
                        this.static = _0x516c66;
                        this.id = _0x3aebb5++;
                        this.disposeRunner = new _0x5643fe('disposeBuffer');
                    }
                    return _0x525693.prototype.update = function (_0x7ab8f9) {
                        ;
                        _0x7ab8f9 instanceof Array && (_0x7ab8f9 = new Float32Array(_0x7ab8f9));
                        this.data = _0x7ab8f9 || this.data;
                        this['_updateID']++;
                    }, _0x525693.prototype.dispose = function () {
                        ;
                        this.disposeRunner.emit(this, false);
                    }, _0x525693.prototype.destroy = function () {
                        ;
                        this.dispose();
                        this.data = null;
                    }, Object.defineProperty(_0x525693.prototype, 'index', {
                        'get': function () {
                            ;
                            return this.type === _0x589e0e.mr.ELEMENT_ARRAY_BUFFER;
                        },
                        'set': function (_0x591960) {
                            ;
                            this.type = _0x591960 ? _0x589e0e.mr.ELEMENT_ARRAY_BUFFER : _0x589e0e.mr.ARRAY_BUFFER;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x525693.from = function (_0x448997) {
                        return _0x448997 instanceof Array && (_0x448997 = new Float32Array(_0x448997)), new _0x525693(_0x448997);
                    }, _0x525693;
                }(), _0x3b5b32 = {
                    'Float32Array': Float32Array,
                    'Uint32Array': Uint32Array,
                    'Int32Array': Int32Array,
                    'Uint8Array': Uint8Array
                }, _0x4c2fae = 0, _0x3a0bb2 = {
                    'Float32Array': Float32Array,
                    'Uint32Array': Uint32Array,
                    'Int32Array': Int32Array,
                    'Uint8Array': Uint8Array,
                    'Uint16Array': Uint16Array
                }, _0x52d398 = function () {
                    ;
                    function _0x8a78ee(_0x38e782, _0x1966e5) {
                        ;
                        void 0 === _0x38e782 && (_0x38e782 = []);
                        void 0 === _0x1966e5 && (_0x1966e5 = {});
                        this.buffers = _0x38e782;
                        this.indexBuffer = null;
                        this.attributes = _0x1966e5;
                        this.glVertexArrayObjects = {};
                        this.id = _0x4c2fae++;
                        this.instanced = false;
                        this.instanceCount = 1;
                        this.disposeRunner = new _0x5643fe('disposeGeometry');
                        this.refCount = 0;
                    }
                    return _0x8a78ee.prototype.addAttribute = function (_0x6a04f1, _0x3d5cdd, _0x30c394, _0x4701ee, _0x160b7c, _0x4eebb0, _0x24cdbf, _0x316b83) {
                        ;
                        if (void 0 === _0x30c394 && (_0x30c394 = 0), void 0 === _0x4701ee && (_0x4701ee = false), void 0 === _0x316b83 && (_0x316b83 = false), !_0x3d5cdd) {
                            throw new Error('You must pass a buffer when creating an attribute');
                        }
                        _0x3d5cdd instanceof _0x5f195b || (_0x3d5cdd instanceof Array && (_0x3d5cdd = new Float32Array(_0x3d5cdd)), _0x3d5cdd = new _0x5f195b(_0x3d5cdd));
                        var _0x41b9a5 = _0x6a04f1.split('|');
                        if (_0x41b9a5.length > 1) {
                            for (var _0xadf6f = 0; _0xadf6f < _0x41b9a5.length; _0xadf6f++) {
                                this.addAttribute(_0x41b9a5[_0xadf6f], _0x3d5cdd, _0x30c394, _0x4701ee, _0x160b7c);
                            }
                            return this;
                        }
                        var _0x3e384c = this.buffers.indexOf(_0x3d5cdd);
                        return -1 === _0x3e384c && (this.buffers.push(_0x3d5cdd), _0x3e384c = this.buffers.length - 1), this.attributes[_0x6a04f1] = new _0x1c3c16(_0x3e384c, _0x30c394, _0x4701ee, _0x160b7c, _0x4eebb0, _0x24cdbf, _0x316b83), this.instanced = this.instanced || _0x316b83, this;
                    }, _0x8a78ee.prototype.getAttribute = function (_0x5d78b5) {
                        ;
                        return this.attributes[_0x5d78b5];
                    }, _0x8a78ee.prototype.getBuffer = function (_0x10e218) {
                        ;
                        return this.buffers[this.getAttribute(_0x10e218).buffer];
                    }, _0x8a78ee.prototype.addIndex = function (_0x2f6024) {
                        ;
                        return _0x2f6024 instanceof _0x5f195b || (_0x2f6024 instanceof Array && (_0x2f6024 = new Uint16Array(_0x2f6024)), _0x2f6024 = new _0x5f195b(_0x2f6024)), _0x2f6024.type = _0x589e0e.mr.ELEMENT_ARRAY_BUFFER, this.indexBuffer = _0x2f6024, -1 === this.buffers.indexOf(_0x2f6024) && this.buffers.push(_0x2f6024), this;
                    }, _0x8a78ee.prototype.getIndex = function () {
                        return this.indexBuffer;
                    }, _0x8a78ee.prototype.interleave = function () {
                        ;
                        if (1 === this.buffers.length || 2 === this.buffers.length && this.indexBuffer) {
                            return this;
                        }
                        var _0x3cecd2, _0x59e8c0 = [], _0x2abeed = [], _0x8460fa = new _0x5f195b();
                        for (_0x3cecd2 in this.attributes) {
                            var _0x562756 = this.attributes[_0x3cecd2], _0x50f8ab = this.buffers[_0x562756.buffer];
                            _0x59e8c0.push(_0x50f8ab.data);
                            _0x2abeed.push(_0x562756.size * _0x4242b9[_0x562756.type] / 4);
                            _0x562756.buffer = 0;
                        }
                        for (_0x8460fa.data = function (_0x400348, _0x28e14e) {
                                ;
                                for (var _0x48c697 = 0, _0x259700 = 0, _0x2d8b2a = {}, _0x3999cb = 0; _0x3999cb < _0x400348.length; _0x3999cb++) {
                                    _0x259700 += _0x28e14e[_0x3999cb];
                                    _0x48c697 += _0x400348[_0x3999cb].length;
                                }
                                var _0x1c42f8 = new ArrayBuffer(4 * _0x48c697), _0x238ea3 = null, _0x3ada24 = 0;
                                for (_0x3999cb = 0; _0x3999cb < _0x400348.length; _0x3999cb++) {
                                    var _0x4e6661 = _0x28e14e[_0x3999cb], _0xa84b2d = _0x400348[_0x3999cb], _0x55fd94 = (0, _0x2932e8.u7)(_0xa84b2d);
                                    _0x2d8b2a[_0x55fd94] || (_0x2d8b2a[_0x55fd94] = new _0x3b5b32[_0x55fd94](_0x1c42f8));
                                    _0x238ea3 = _0x2d8b2a[_0x55fd94];
                                    for (var _0x2bd8e5 = 0; _0x2bd8e5 < _0xa84b2d.length; _0x2bd8e5++) {
                                        _0x238ea3[(_0x2bd8e5 / _0x4e6661 | 0) * _0x259700 + _0x3ada24 + _0x2bd8e5 % _0x4e6661] = _0xa84b2d[_0x2bd8e5];
                                    }
                                    _0x3ada24 += _0x4e6661;
                                }
                                return new Float32Array(_0x1c42f8);
                            }(_0x59e8c0, _0x2abeed), _0x3cecd2 = 0; _0x3cecd2 < this.buffers.length; _0x3cecd2++) {
                            this.buffers[_0x3cecd2] !== this.indexBuffer && this.buffers[_0x3cecd2].destroy();
                        }
                        return this.buffers = [_0x8460fa], this.indexBuffer && this.buffers.push(this.indexBuffer), this;
                    }, _0x8a78ee.prototype.getSize = function () {
                        ;
                        for (var _0xa2bd3c in this.attributes) {
                            var _0x819af8 = this.attributes[_0xa2bd3c];
                            return this.buffers[_0x819af8.buffer].data.length / (_0x819af8.stride / 4 || _0x819af8.size);
                        }
                        return 0;
                    }, _0x8a78ee.prototype.dispose = function () {
                        ;
                        this.disposeRunner.emit(this, false);
                    }, _0x8a78ee.prototype.destroy = function () {
                        ;
                        this.dispose();
                        this.buffers = null;
                        this.indexBuffer = null;
                        this.attributes = null;
                    }, _0x8a78ee.prototype.clone = function () {
                        ;
                        for (var _0x5de50a = new _0x8a78ee(), _0x4f4dd2 = 0; _0x4f4dd2 < this.buffers.length; _0x4f4dd2++) {
                            _0x5de50a.buffers[_0x4f4dd2] = new _0x5f195b(this.buffers[_0x4f4dd2].data.slice(0));
                        }
                        for (var _0x4f4dd2 in this.attributes) {
                            var _0x13fdf1 = this.attributes[_0x4f4dd2];
                            _0x5de50a.attributes[_0x4f4dd2] = new _0x1c3c16(_0x13fdf1.buffer, _0x13fdf1.size, _0x13fdf1.normalized, _0x13fdf1.type, _0x13fdf1.stride, _0x13fdf1.start, _0x13fdf1.instance);
                        }
                        return this.indexBuffer && (_0x5de50a.indexBuffer = _0x5de50a.buffers[this.buffers.indexOf(this.indexBuffer)], _0x5de50a.indexBuffer.type = _0x589e0e.mr.ELEMENT_ARRAY_BUFFER), _0x5de50a;
                    }, _0x8a78ee.merge = function (_0x15ef60) {
                        ;
                        for (var _0x315805, _0x42104c = new _0x8a78ee(), _0x516954 = [], _0x219d67 = [], _0x4013d8 = [], _0x4a7301 = 0; _0x4a7301 < _0x15ef60.length; _0x4a7301++) {
                            _0x315805 = _0x15ef60[_0x4a7301];
                            for (var _0x237eb0 = 0; _0x237eb0 < _0x315805.buffers.length; _0x237eb0++) {
                                _0x219d67[_0x237eb0] = _0x219d67[_0x237eb0] || 0;
                                _0x219d67[_0x237eb0] += _0x315805.buffers[_0x237eb0].data.length;
                                _0x4013d8[_0x237eb0] = 0;
                            }
                        }
                        for (_0x4a7301 = 0; _0x4a7301 < _0x315805.buffers.length; _0x4a7301++) {
                            _0x516954[_0x4a7301] = new _0x3a0bb2[((0, _0x2932e8.u7)(_0x315805.buffers[_0x4a7301].data))](_0x219d67[_0x4a7301]);
                            _0x42104c.buffers[_0x4a7301] = new _0x5f195b(_0x516954[_0x4a7301]);
                        }
                        for (_0x4a7301 = 0; _0x4a7301 < _0x15ef60.length; _0x4a7301++) {
                            for (_0x315805 = _0x15ef60[_0x4a7301], _0x237eb0 = 0; _0x237eb0 < _0x315805.buffers.length; _0x237eb0++) {
                                _0x516954[_0x237eb0].set(_0x315805.buffers[_0x237eb0].data, _0x4013d8[_0x237eb0]);
                                _0x4013d8[_0x237eb0] += _0x315805.buffers[_0x237eb0].data.length;
                            }
                        }
                        if (_0x42104c.attributes = _0x315805.attributes, _0x315805.indexBuffer) {
                            _0x42104c.indexBuffer = _0x42104c.buffers[_0x315805.buffers.indexOf(_0x315805.indexBuffer)];
                            _0x42104c.indexBuffer.type = _0x589e0e.mr.ELEMENT_ARRAY_BUFFER;
                            var _0x24ba7c = 0, _0x524f3e = 0, _0x839c19 = 0, _0x27b198 = 0;
                            for (_0x4a7301 = 0; _0x4a7301 < _0x315805.buffers.length; _0x4a7301++) {
                                if (_0x315805.buffers[_0x4a7301] !== _0x315805.indexBuffer) {
                                    _0x27b198 = _0x4a7301;
                                    break;
                                }
                            }
                            for (var _0x4a7301 in _0x315805.attributes) {
                                var _0x5bb7a8 = _0x315805.attributes[_0x4a7301];
                                (0 | _0x5bb7a8.buffer) === _0x27b198 && (_0x524f3e += _0x5bb7a8.size * _0x4242b9[_0x5bb7a8.type] / 4);
                            }
                            for (_0x4a7301 = 0; _0x4a7301 < _0x15ef60.length; _0x4a7301++) {
                                var _0x489634 = _0x15ef60[_0x4a7301].indexBuffer.data;
                                for (_0x237eb0 = 0; _0x237eb0 < _0x489634.length; _0x237eb0++) {
                                    _0x42104c.indexBuffer.data[_0x237eb0 + _0x839c19] += _0x24ba7c;
                                }
                                _0x24ba7c += _0x15ef60[_0x4a7301].buffers[_0x27b198].data.length / _0x524f3e;
                                _0x839c19 += _0x489634.length;
                            }
                        }
                        return _0x42104c;
                    }, _0x8a78ee;
                }(), _0x32c7bf = function (_0x2b1240) {
                    function _0x2908b0() {
                        var _0xdeb6d0 = _0x2b1240.call(this) || this;
                        return _0xdeb6d0.addAttribute('aVertexPosition', new Float32Array([
                            0,
                            0,
                            1,
                            0,
                            1,
                            1,
                            0,
                            1
                        ])).addIndex([
                            0,
                            1,
                            3,
                            2
                        ]), _0xdeb6d0;
                    }
                    return _0x8b02be(_0x2908b0, _0x2b1240), _0x2908b0;
                }(_0x52d398), _0x26c748 = function (_0xa2147f) {
                    ;
                    function _0x37f9af() {
                        var _0x4f83fc = _0xa2147f.call(this) || this;
                        return _0x4f83fc.vertices = new Float32Array([
                            -1,
                            -1,
                            1,
                            -1,
                            1,
                            1,
                            -1,
                            1
                        ]), _0x4f83fc.uvs = new Float32Array([
                            0,
                            0,
                            1,
                            0,
                            1,
                            1,
                            0,
                            1
                        ]), _0x4f83fc.vertexBuffer = new _0x5f195b(_0x4f83fc.vertices), _0x4f83fc.uvBuffer = new _0x5f195b(_0x4f83fc.uvs), _0x4f83fc.addAttribute('aVertexPosition', _0x4f83fc.vertexBuffer).addAttribute('aTextureCoord', _0x4f83fc.uvBuffer).addIndex([
                            0,
                            1,
                            2,
                            0,
                            2,
                            3
                        ]), _0x4f83fc;
                    }
                    return _0x8b02be(_0x37f9af, _0xa2147f), _0x37f9af.prototype.map = function (_0x431969, _0x14d5de) {
                        var _0x48ddf3 = 0, _0x1e4a2b = 0;
                        return this.uvs[0] = _0x48ddf3, this.uvs[1] = _0x1e4a2b, this.uvs[2] = _0x48ddf3 + _0x14d5de.width / _0x431969.width, this.uvs[3] = _0x1e4a2b, this.uvs[4] = _0x48ddf3 + _0x14d5de.width / _0x431969.width, this.uvs[5] = _0x1e4a2b + _0x14d5de.height / _0x431969.height, this.uvs[6] = _0x48ddf3, this.uvs[7] = _0x1e4a2b + _0x14d5de.height / _0x431969.height, _0x48ddf3 = _0x14d5de.x, _0x1e4a2b = _0x14d5de.y, this.vertices[0] = _0x48ddf3, this.vertices[1] = _0x1e4a2b, this.vertices[2] = _0x48ddf3 + _0x14d5de.width, this.vertices[3] = _0x1e4a2b, this.vertices[4] = _0x48ddf3 + _0x14d5de.width, this.vertices[5] = _0x1e4a2b + _0x14d5de.height, this.vertices[6] = _0x48ddf3, this.vertices[7] = _0x1e4a2b + _0x14d5de.height, this.invalidate(), this;
                    }, _0x37f9af.prototype.invalidate = function () {
                        ;
                        return this.vertexBuffer['_updateID']++, this.uvBuffer['_updateID']++, this;
                    }, _0x37f9af;
                }(_0x52d398), _0x1ba9bf = 0, _0x3c2d61 = function () {
                    ;
                    function _0xf487a3(_0xc7daf2, _0x517b4b, _0x33c2ac) {
                        ;
                        this.group = true;
                        this.syncUniforms = {};
                        this.dirtyId = 0;
                        this.id = _0x1ba9bf++;
                        this.static = !!_0x517b4b;
                        this.ubo = !!_0x33c2ac;
                        _0xc7daf2 instanceof _0x5f195b ? (this.buffer = _0xc7daf2, this.buffer.type = _0x589e0e.mr.UNIFORM_BUFFER, this.autoManage = false, this.ubo = true) : (this.uniforms = _0xc7daf2, this.ubo && (this.buffer = new _0x5f195b(new Float32Array(1)), this.buffer.type = _0x589e0e.mr.UNIFORM_BUFFER, this.autoManage = true));
                    }
                    return _0xf487a3.prototype.update = function () {
                        ;
                        this.dirtyId++;
                        !this.autoManage && this.buffer && this.buffer.update();
                    }, _0xf487a3.prototype.add = function (_0x588194, _0x1605f3, _0x40c1c0) {
                        ;
                        if (this.ubo) {
                            throw new Error('[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them');
                        }
                        this.uniforms[_0x588194] = new _0xf487a3(_0x1605f3, _0x40c1c0);
                    }, _0xf487a3.from = function (_0x42502c, _0x49d659, _0x2b5a86) {
                        return new _0xf487a3(_0x42502c, _0x49d659, _0x2b5a86);
                    }, _0xf487a3.uboFrom = function (_0x6690de, _0x3c5b03) {
                        return new _0xf487a3(_0x6690de, null == _0x3c5b03 || _0x3c5b03, true);
                    }, _0xf487a3;
                }(), _0x226dd3 = function () {
                    ;
                    function _0x78f779() {
                        ;
                        this.renderTexture = null;
                        this.target = null;
                        this.legacy = false;
                        this.resolution = 1;
                        this.multisample = _0x589e0e.G5.NONE;
                        this.sourceFrame = new _0x596cf7.Ae();
                        this.destinationFrame = new _0x596cf7.Ae();
                        this.bindingSourceFrame = new _0x596cf7.Ae();
                        this.bindingDestinationFrame = new _0x596cf7.Ae();
                        this.filters = [];
                        this.transform = null;
                    }
                    return _0x78f779.prototype.clear = function () {
                        ;
                        this.target = null;
                        this.filters = null;
                        this.renderTexture = null;
                    }, _0x78f779;
                }(), _0x1a6128 = [
                    new _0x596cf7.E9(),
                    new _0x596cf7.E9(),
                    new _0x596cf7.E9(),
                    new _0x596cf7.E9()
                ], _0x136a7d = new _0x596cf7.y3(), _0x2c1eb3 = function () {
                    ;
                    function _0x147e33(_0x3bc2e9) {
                        ;
                        this.renderer = _0x3bc2e9;
                        this.defaultFilterStack = [{}];
                        this.texturePool = new _0x150ebd();
                        this.texturePool.setScreenSize(_0x3bc2e9.view);
                        this.statePool = [];
                        this.quad = new _0x32c7bf();
                        this.quadUv = new _0x26c748();
                        this.tempRect = new _0x596cf7.Ae();
                        this.activeState = {};
                        this.globalUniforms = new _0x3c2d61({
                            'outputFrame': new _0x596cf7.Ae(),
                            'inputSize': new Float32Array(4),
                            'inputPixel': new Float32Array(4),
                            'inputClamp': new Float32Array(4),
                            'resolution': 1,
                            'filterArea': new Float32Array(4),
                            'filterClamp': new Float32Array(4)
                        }, true);
                        this.forceClear = false;
                        this.useMaxPadding = false;
                    }
                    return _0x147e33.prototype.push = function (_0x7156df, _0x299a85) {
                        ;
                        for (var _0x4238f4, _0x543a89, _0x3c45c9 = this.renderer, _0x5a5395 = this.defaultFilterStack, _0x48f803 = this.statePool.pop() || new _0x226dd3(), _0x237e98 = this.renderer.renderTexture, _0x3b5828 = _0x299a85[0].resolution, _0x5c8fb4 = _0x299a85[0].multisample, _0x484789 = _0x299a85[0].padding, _0x3a0236 = _0x299a85[0].autoFit, _0x4a82d1 = null === (_0x4238f4 = _0x299a85[0].legacy) || void 0 === _0x4238f4 || _0x4238f4, _0x533d5f = 1; _0x533d5f < _0x299a85.length; _0x533d5f++) {
                            var _0x1f3d91 = _0x299a85[_0x533d5f];
                            _0x3b5828 = Math.min(_0x3b5828, _0x1f3d91.resolution);
                            _0x5c8fb4 = Math.min(_0x5c8fb4, _0x1f3d91.multisample);
                            _0x484789 = this.useMaxPadding ? Math.max(_0x484789, _0x1f3d91.padding) : _0x484789 + _0x1f3d91.padding;
                            _0x3a0236 = _0x3a0236 && _0x1f3d91.autoFit;
                            _0x4a82d1 = _0x4a82d1 || null === (_0x543a89 = _0x1f3d91.legacy) || void 0 === _0x543a89 || _0x543a89;
                        }
                        1 === _0x5a5395.length && (this.defaultFilterStack[0].renderTexture = _0x237e98.current);
                        _0x5a5395.push(_0x48f803);
                        _0x48f803.resolution = _0x3b5828;
                        _0x48f803.multisample = _0x5c8fb4;
                        _0x48f803.legacy = _0x4a82d1;
                        _0x48f803.target = _0x7156df;
                        _0x48f803.sourceFrame.copyFrom(_0x7156df.filterArea || _0x7156df.getBounds(true));
                        _0x48f803.sourceFrame.pad(_0x484789);
                        var _0x136002 = this.tempRect.copyFrom(_0x237e98.sourceFrame);
                        _0x3c45c9.projection.transform && this.transformAABB(_0x136a7d.copyFrom(_0x3c45c9.projection.transform).invert(), _0x136002);
                        _0x3a0236 ? (_0x48f803.sourceFrame.fit(_0x136002), (_0x48f803.sourceFrame.width <= 0 || _0x48f803.sourceFrame.height <= 0) && (_0x48f803.sourceFrame.width = 0, _0x48f803.sourceFrame.height = 0)) : _0x48f803.sourceFrame.intersects(_0x136002) || (_0x48f803.sourceFrame.width = 0, _0x48f803.sourceFrame.height = 0);
                        this.roundFrame(_0x48f803.sourceFrame, _0x237e98.current ? _0x237e98.current.resolution : _0x3c45c9.resolution, _0x237e98.sourceFrame, _0x237e98.destinationFrame, _0x3c45c9.projection.transform);
                        _0x48f803.renderTexture = this.getOptimalFilterTexture(_0x48f803.sourceFrame.width, _0x48f803.sourceFrame.height, _0x3b5828, _0x5c8fb4);
                        _0x48f803.filters = _0x299a85;
                        _0x48f803.destinationFrame.width = _0x48f803.renderTexture.width;
                        _0x48f803.destinationFrame.height = _0x48f803.renderTexture.height;
                        var _0x187ca7 = this.tempRect;
                        _0x187ca7.x = 0;
                        _0x187ca7.y = 0;
                        _0x187ca7.width = _0x48f803.sourceFrame.width;
                        _0x187ca7.height = _0x48f803.sourceFrame.height;
                        _0x48f803.renderTexture.filterFrame = _0x48f803.sourceFrame;
                        _0x48f803.bindingSourceFrame.copyFrom(_0x237e98.sourceFrame);
                        _0x48f803.bindingDestinationFrame.copyFrom(_0x237e98.destinationFrame);
                        _0x48f803.transform = _0x3c45c9.projection.transform;
                        _0x3c45c9.projection.transform = null;
                        _0x237e98.bind(_0x48f803.renderTexture, _0x48f803.sourceFrame, _0x187ca7);
                        _0x3c45c9.framebuffer.clear(0, 0, 0, 0);
                    }, _0x147e33.prototype.pop = function () {
                        var _0x1c7cd7 = this.defaultFilterStack, _0x5d6713 = _0x1c7cd7.pop(), _0xd29824 = _0x5d6713.filters;
                        this.activeState = _0x5d6713;
                        var _0x2cbe19 = this.globalUniforms.uniforms;
                        _0x2cbe19.outputFrame = _0x5d6713.sourceFrame;
                        _0x2cbe19.resolution = _0x5d6713.resolution;
                        var _0x1575ca = _0x2cbe19.inputSize, _0x3a1450 = _0x2cbe19.inputPixel, _0x54d8cd = _0x2cbe19.inputClamp;
                        if (_0x1575ca[0] = _0x5d6713.destinationFrame.width, _0x1575ca[1] = _0x5d6713.destinationFrame.height, _0x1575ca[2] = 1 / _0x1575ca[0], _0x1575ca[3] = 1 / _0x1575ca[1], _0x3a1450[0] = Math.round(_0x1575ca[0] * _0x5d6713.resolution), _0x3a1450[1] = Math.round(_0x1575ca[1] * _0x5d6713.resolution), _0x3a1450[2] = 1 / _0x3a1450[0], _0x3a1450[3] = 1 / _0x3a1450[1], _0x54d8cd[0] = 0.5 * _0x3a1450[2], _0x54d8cd[1] = 0.5 * _0x3a1450[3], _0x54d8cd[2] = _0x5d6713.sourceFrame.width * _0x1575ca[2] - 0.5 * _0x3a1450[2], _0x54d8cd[3] = _0x5d6713.sourceFrame.height * _0x1575ca[3] - 0.5 * _0x3a1450[3], _0x5d6713.legacy) {
                            var _0x137152 = _0x2cbe19.filterArea;
                            _0x137152[0] = _0x5d6713.destinationFrame.width;
                            _0x137152[1] = _0x5d6713.destinationFrame.height;
                            _0x137152[2] = _0x5d6713.sourceFrame.x;
                            _0x137152[3] = _0x5d6713.sourceFrame.y;
                            _0x2cbe19.filterClamp = _0x2cbe19.inputClamp;
                        }
                        this.globalUniforms.update();
                        var _0x36087d = _0x1c7cd7[_0x1c7cd7.length - 1];
                        if (this.renderer.framebuffer.blit(), 1 === _0xd29824.length) {
                            _0xd29824[0].apply(this, _0x5d6713.renderTexture, _0x36087d.renderTexture, _0x589e0e.yl.BLEND, _0x5d6713);
                            this.returnFilterTexture(_0x5d6713.renderTexture);
                        } else {
                            var _0x2289e5 = _0x5d6713.renderTexture, _0x541e7e = this.getOptimalFilterTexture(_0x2289e5.width, _0x2289e5.height, _0x5d6713.resolution);
                            _0x541e7e.filterFrame = _0x2289e5.filterFrame;
                            var _0x3a6b67 = 0;
                            for (_0x3a6b67 = 0; _0x3a6b67 < _0xd29824.length - 1; ++_0x3a6b67) {
                                1 === _0x3a6b67 && _0x5d6713.multisample > 1 && ((_0x541e7e = this.getOptimalFilterTexture(_0x2289e5.width, _0x2289e5.height, _0x5d6713.resolution)).filterFrame = _0x2289e5.filterFrame);
                                _0xd29824[_0x3a6b67].apply(this, _0x2289e5, _0x541e7e, _0x589e0e.yl.CLEAR, _0x5d6713);
                                var _0x1df0fb = _0x2289e5;
                                _0x2289e5 = _0x541e7e;
                                _0x541e7e = _0x1df0fb;
                            }
                            _0xd29824[_0x3a6b67].apply(this, _0x2289e5, _0x36087d.renderTexture, _0x589e0e.yl.BLEND, _0x5d6713);
                            _0x3a6b67 > 1 && _0x5d6713.multisample > 1 && this.returnFilterTexture(_0x5d6713.renderTexture);
                            this.returnFilterTexture(_0x2289e5);
                            this.returnFilterTexture(_0x541e7e);
                        }
                        _0x5d6713.clear();
                        this.statePool.push(_0x5d6713);
                    }, _0x147e33.prototype.bindAndClear = function (_0x73b96a, _0x372832) {
                        ;
                        void 0 === _0x372832 && (_0x372832 = _0x589e0e.yl.CLEAR);
                        var _0x2e95bf = this.renderer, _0x3a2c99 = _0x2e95bf.renderTexture, _0x446b70 = _0x2e95bf.state;
                        if (_0x73b96a === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? this.renderer.projection.transform = this.activeState.transform : this.renderer.projection.transform = null, _0x73b96a && _0x73b96a.filterFrame) {
                            var _0xffac8f = this.tempRect;
                            _0xffac8f.x = 0;
                            _0xffac8f.y = 0;
                            _0xffac8f.width = _0x73b96a.filterFrame.width;
                            _0xffac8f.height = _0x73b96a.filterFrame.height;
                            _0x3a2c99.bind(_0x73b96a, _0x73b96a.filterFrame, _0xffac8f);
                        } else {
                            _0x73b96a !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? _0x3a2c99.bind(_0x73b96a) : this.renderer.renderTexture.bind(_0x73b96a, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
                        }
                        var _0x1795b4 = 1 & _0x446b70.stateId || this.forceClear;
                        (_0x372832 === _0x589e0e.yl.CLEAR || _0x372832 === _0x589e0e.yl.BLIT && _0x1795b4) && this.renderer.framebuffer.clear(0, 0, 0, 0);
                    }, _0x147e33.prototype.applyFilter = function (_0xe922bf, _0x47afaf, _0x421a3d, _0x2c3ce7) {
                        var _0x17ad6b = this.renderer;
                        _0x17ad6b.state.set(_0xe922bf.state);
                        this.bindAndClear(_0x421a3d, _0x2c3ce7);
                        _0xe922bf.uniforms.uSampler = _0x47afaf;
                        _0xe922bf.uniforms.filterGlobals = this.globalUniforms;
                        _0x17ad6b.shader.bind(_0xe922bf);
                        _0xe922bf.legacy = !!_0xe922bf.program.attributeData.aTextureCoord;
                        _0xe922bf.legacy ? (this.quadUv.map(_0x47afaf['_frame'], _0x47afaf.filterFrame), _0x17ad6b.geometry.bind(this.quadUv), _0x17ad6b.geometry.draw(_0x589e0e.lg.TRIANGLES)) : (_0x17ad6b.geometry.bind(this.quad), _0x17ad6b.geometry.draw(_0x589e0e.lg.TRIANGLE_STRIP));
                    }, _0x147e33.prototype.calculateSpriteMatrix = function (_0x544d2b, _0xe0a0df) {
                        var _0x288f3e = this.activeState, _0x21adf9 = _0x288f3e.sourceFrame, _0x11a83f = _0x288f3e.destinationFrame, _0x39a85a = _0xe0a0df['_texture'].orig, _0x5a3561 = _0x544d2b.set(_0x11a83f.width, 0, 0, _0x11a83f.height, _0x21adf9.x, _0x21adf9.y), _0x1c1079 = _0xe0a0df.worldTransform.copyTo(_0x596cf7.y3.TEMP_MATRIX);
                        return _0x1c1079.invert(), _0x5a3561.prepend(_0x1c1079), _0x5a3561.scale(1 / _0x39a85a.width, 1 / _0x39a85a.height), _0x5a3561.translate(_0xe0a0df.anchor.x, _0xe0a0df.anchor.y), _0x5a3561;
                    }, _0x147e33.prototype.destroy = function () {
                        ;
                        this.renderer = null;
                        this.texturePool.clear(false);
                    }, _0x147e33.prototype.getOptimalFilterTexture = function (_0x12e004, _0x506992, _0x15ad50, _0x52d23b) {
                        ;
                        return void 0 === _0x15ad50 && (_0x15ad50 = 1), void 0 === _0x52d23b && (_0x52d23b = _0x589e0e.G5.NONE), this.texturePool.getOptimalTexture(_0x12e004, _0x506992, _0x15ad50, _0x52d23b);
                    }, _0x147e33.prototype.getFilterTexture = function (_0x5addd0, _0x43fe01, _0x488470) {
                        ;
                        if ('number' == typeof _0x5addd0) {
                            var _0x13ae52 = _0x5addd0;
                            _0x5addd0 = _0x43fe01;
                            _0x43fe01 = _0x13ae52;
                        }
                        _0x5addd0 = _0x5addd0 || this.activeState.renderTexture;
                        var _0xe314cd = this.texturePool.getOptimalTexture(_0x5addd0.width, _0x5addd0.height, _0x43fe01 || _0x5addd0.resolution, _0x488470 || _0x589e0e.G5.NONE);
                        return _0xe314cd.filterFrame = _0x5addd0.filterFrame, _0xe314cd;
                    }, _0x147e33.prototype.returnFilterTexture = function (_0x4c4667) {
                        ;
                        this.texturePool.returnTexture(_0x4c4667);
                    }, _0x147e33.prototype.emptyPool = function () {
                        ;
                        this.texturePool.clear(true);
                    }, _0x147e33.prototype.resize = function () {
                        ;
                        this.texturePool.setScreenSize(this.renderer.view);
                    }, _0x147e33.prototype.transformAABB = function (_0x4b1bdc, _0x2e70ad) {
                        var _0x27c48c = _0x1a6128[0], _0x72eeb3 = _0x1a6128[1], _0x1fe415 = _0x1a6128[2], _0x23cb40 = _0x1a6128[3];
                        _0x27c48c.set(_0x2e70ad.left, _0x2e70ad.top);
                        _0x72eeb3.set(_0x2e70ad.left, _0x2e70ad.bottom);
                        _0x1fe415.set(_0x2e70ad.right, _0x2e70ad.top);
                        _0x23cb40.set(_0x2e70ad.right, _0x2e70ad.bottom);
                        _0x4b1bdc.apply(_0x27c48c, _0x27c48c);
                        _0x4b1bdc.apply(_0x72eeb3, _0x72eeb3);
                        _0x4b1bdc.apply(_0x1fe415, _0x1fe415);
                        _0x4b1bdc.apply(_0x23cb40, _0x23cb40);
                        var _0x397729 = Math.min(_0x27c48c.x, _0x72eeb3.x, _0x1fe415.x, _0x23cb40.x), _0x3935f6 = Math.min(_0x27c48c.y, _0x72eeb3.y, _0x1fe415.y, _0x23cb40.y), _0x57bbac = Math.max(_0x27c48c.x, _0x72eeb3.x, _0x1fe415.x, _0x23cb40.x), _0x5d643a = Math.max(_0x27c48c.y, _0x72eeb3.y, _0x1fe415.y, _0x23cb40.y);
                        _0x2e70ad.x = _0x397729;
                        _0x2e70ad.y = _0x3935f6;
                        _0x2e70ad.width = _0x57bbac - _0x397729;
                        _0x2e70ad.height = _0x5d643a - _0x3935f6;
                    }, _0x147e33.prototype.roundFrame = function (_0x575737, _0x4cc694, _0x3a0546, _0x2a3dc2, _0x4289a9) {
                        ;
                        if (!(_0x575737.width <= 0 || _0x575737.height <= 0 || _0x3a0546.width <= 0 || _0x3a0546.height <= 0)) {
                            if (_0x4289a9) {
                                var _0xbc7cf1 = _0x4289a9.a, _0x2de1d0 = _0x4289a9.b, _0x3da813 = _0x4289a9.c, _0xf2359c = _0x4289a9.d;
                                if ((Math.abs(_0x2de1d0) > 0.0001 || Math.abs(_0x3da813) > 0.0001) && (Math.abs(_0xbc7cf1) > 0.0001 || Math.abs(_0xf2359c) > 0.0001)) {
                                    return;
                                }
                            }
                            (_0x4289a9 = _0x4289a9 ? _0x136a7d.copyFrom(_0x4289a9) : _0x136a7d.identity()).translate(-_0x3a0546.x, -_0x3a0546.y).scale(_0x2a3dc2.width / _0x3a0546.width, _0x2a3dc2.height / _0x3a0546.height).translate(_0x2a3dc2.x, _0x2a3dc2.y);
                            this.transformAABB(_0x4289a9, _0x575737);
                            _0x575737.ceil(_0x4cc694);
                            this.transformAABB(_0x4289a9.invert(), _0x575737);
                        }
                    }, _0x147e33;
                }(), _0x228dd6 = function () {
                    ;
                    function _0x27462e(_0x29d2ee) {
                        ;
                        this.renderer = _0x29d2ee;
                    }
                    return _0x27462e.prototype.flush = function () {
                    }, _0x27462e.prototype.destroy = function () {
                        ;
                        this.renderer = null;
                    }, _0x27462e.prototype.start = function () {
                    }, _0x27462e.prototype.stop = function () {
                        ;
                        this.flush();
                    }, _0x27462e.prototype.render = function (_0x4e8110) {
                    }, _0x27462e;
                }(), _0x7d0139 = function () {
                    ;
                    function _0x1ca740(_0x4d286e) {
                        ;
                        this.renderer = _0x4d286e;
                        this.emptyRenderer = new _0x228dd6(_0x4d286e);
                        this.currentRenderer = this.emptyRenderer;
                    }
                    return _0x1ca740.prototype.setObjectRenderer = function (_0x5860b4) {
                        ;
                        this.currentRenderer !== _0x5860b4 && (this.currentRenderer.stop(), this.currentRenderer = _0x5860b4, this.currentRenderer.start());
                    }, _0x1ca740.prototype.flush = function () {
                        ;
                        this.setObjectRenderer(this.emptyRenderer);
                    }, _0x1ca740.prototype.reset = function () {
                        ;
                        this.setObjectRenderer(this.emptyRenderer);
                    }, _0x1ca740.prototype.copyBoundTextures = function (_0x39bbd9, _0x1d3423) {
                        ;
                        for (var _0x397009 = this.renderer.texture.boundTextures, _0x2a8dba = _0x1d3423 - 1; _0x2a8dba >= 0; --_0x2a8dba) {
                            _0x39bbd9[_0x2a8dba] = _0x397009[_0x2a8dba] || null;
                            _0x39bbd9[_0x2a8dba] && (_0x39bbd9[_0x2a8dba]['_batchLocation'] = _0x2a8dba);
                        }
                    }, _0x1ca740.prototype.boundArray = function (_0xaa94ef, _0x180fbb, _0x13b65b, _0x5754eb) {
                        ;
                        for (var _0x1142c6 = _0xaa94ef.elements, _0x4586cb = _0xaa94ef.ids, _0x3901a5 = _0xaa94ef.count, _0x5e65aa = 0, _0x49d1cf = 0; _0x49d1cf < _0x3901a5; _0x49d1cf++) {
                            var _0x2939e8 = _0x1142c6[_0x49d1cf], _0x421e29 = _0x2939e8['_batchLocation'];
                            if (_0x421e29 >= 0 && _0x421e29 < _0x5754eb && _0x180fbb[_0x421e29] === _0x2939e8) {
                                _0x4586cb[_0x49d1cf] = _0x421e29;
                            } else {
                                for (; _0x5e65aa < _0x5754eb;) {
                                    var _0x4dbbff = _0x180fbb[_0x5e65aa];
                                    if (!_0x4dbbff || _0x4dbbff['_batchEnabled'] !== _0x13b65b || _0x4dbbff['_batchLocation'] !== _0x5e65aa) {
                                        _0x4586cb[_0x49d1cf] = _0x5e65aa;
                                        _0x2939e8['_batchLocation'] = _0x5e65aa;
                                        _0x180fbb[_0x5e65aa] = _0x2939e8;
                                        break;
                                    }
                                    _0x5e65aa++;
                                }
                            }
                        }
                    }, _0x1ca740.prototype.destroy = function () {
                        ;
                        this.renderer = null;
                    }, _0x1ca740;
                }(), _0x57c018 = 0, _0x477860 = function () {
                    ;
                    function _0xd87a6e(_0x201e9c) {
                        ;
                        this.renderer = _0x201e9c;
                        this.webGLVersion = 1;
                        this.extensions = {};
                        this.supports = { 'uint32Indices': false };
                        this.handleContextLost = this.handleContextLost.bind(this);
                        this.handleContextRestored = this.handleContextRestored.bind(this);
                        _0x201e9c.view.addEventListener('webglcontextlost', this.handleContextLost, false);
                        _0x201e9c.view.addEventListener('webglcontextrestored', this.handleContextRestored, false);
                    }
                    return Object.defineProperty(_0xd87a6e.prototype, 'isLost', {
                        'get': function () {
                            ;
                            return !this.gl || this.gl.isContextLost();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0xd87a6e.prototype.contextChange = function (_0x49da36) {
                        ;
                        this.gl = _0x49da36;
                        this.renderer.gl = _0x49da36;
                        this.renderer.CONTEXT_UID = _0x57c018++;
                        _0x49da36.isContextLost() && _0x49da36.getExtension('WEBGL_lose_context') && _0x49da36.getExtension('WEBGL_lose_context').restoreContext();
                    }, _0xd87a6e.prototype.initFromContext = function (_0x495c6a) {
                        ;
                        this.gl = _0x495c6a;
                        this.validateContext(_0x495c6a);
                        this.renderer.gl = _0x495c6a;
                        this.renderer.CONTEXT_UID = _0x57c018++;
                        this.renderer.runners.contextChange.emit(_0x495c6a);
                    }, _0xd87a6e.prototype.initFromOptions = function (_0x213e87) {
                        var _0x203d5c = this.createContext(this.renderer.view, _0x213e87);
                        this.initFromContext(_0x203d5c);
                    }, _0xd87a6e.prototype.createContext = function (_0x39d49a, _0x599391) {
                        var _0x4f6d77;
                        if (_0xa851a9.X.PREFER_ENV >= _0x589e0e.Vi.WEBGL2 && (_0x4f6d77 = _0x39d49a.getContext('webgl2', _0x599391)), _0x4f6d77) {
                            this.webGLVersion = 2;
                        } else {
                            if (this.webGLVersion = 1, !(_0x4f6d77 = _0x39d49a.getContext('webgl', _0x599391) || _0x39d49a.getContext('experimental-webgl', _0x599391))) {
                                throw new Error('This browser does not support WebGL. Try using the canvas renderer');
                            }
                        }
                        return this.gl = _0x4f6d77, this.getExtensions(), this.gl;
                    }, _0xd87a6e.prototype.getExtensions = function () {
                        var _0x237490 = this.gl, _0x287a31 = {
                                'anisotropicFiltering': _0x237490.getExtension('EXT_texture_filter_anisotropic'),
                                'floatTextureLinear': _0x237490.getExtension('OES_texture_float_linear'),
                                's3tc': _0x237490.getExtension('WEBGL_compressed_texture_s3tc'),
                                's3tc_sRGB': _0x237490.getExtension('WEBGL_compressed_texture_s3tc_srgb'),
                                'etc': _0x237490.getExtension('WEBGL_compressed_texture_etc'),
                                'etc1': _0x237490.getExtension('WEBGL_compressed_texture_etc1'),
                                'pvrtc': _0x237490.getExtension('WEBGL_compressed_texture_pvrtc') || _0x237490.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'),
                                'atc': _0x237490.getExtension('WEBGL_compressed_texture_atc'),
                                'astc': _0x237490.getExtension('WEBGL_compressed_texture_astc')
                            };
                        1 === this.webGLVersion ? Object.assign(this.extensions, _0x287a31, {
                            'drawBuffers': _0x237490.getExtension('WEBGL_draw_buffers'),
                            'depthTexture': _0x237490.getExtension('WEBGL_depth_texture'),
                            'loseContext': _0x237490.getExtension('WEBGL_lose_context'),
                            'vertexArrayObject': _0x237490.getExtension('OES_vertex_array_object') || _0x237490.getExtension('MOZ_OES_vertex_array_object') || _0x237490.getExtension('WEBKIT_OES_vertex_array_object'),
                            'uint32ElementIndex': _0x237490.getExtension('OES_element_index_uint'),
                            'floatTexture': _0x237490.getExtension('OES_texture_float'),
                            'floatTextureLinear': _0x237490.getExtension('OES_texture_float_linear'),
                            'textureHalfFloat': _0x237490.getExtension('OES_texture_half_float'),
                            'textureHalfFloatLinear': _0x237490.getExtension('OES_texture_half_float_linear')
                        }) : 2 === this.webGLVersion && Object.assign(this.extensions, _0x287a31, { 'colorBufferFloat': _0x237490.getExtension('EXT_color_buffer_float') });
                    }, _0xd87a6e.prototype.handleContextLost = function (_0x17fcf9) {
                        ;
                        _0x17fcf9.preventDefault();
                    }, _0xd87a6e.prototype.handleContextRestored = function () {
                        ;
                        this.renderer.runners.contextChange.emit(this.gl);
                    }, _0xd87a6e.prototype.destroy = function () {
                        var _0x8f0de6 = this.renderer.view;
                        this.renderer = null;
                        _0x8f0de6.removeEventListener('webglcontextlost', this.handleContextLost);
                        _0x8f0de6.removeEventListener('webglcontextrestored', this.handleContextRestored);
                        this.gl.useProgram(null);
                        this.extensions.loseContext && this.extensions.loseContext.loseContext();
                    }, _0xd87a6e.prototype.postrender = function () {
                        ;
                        this.renderer.renderingToScreen && this.gl.flush();
                    }, _0xd87a6e.prototype.validateContext = function (_0x11567a) {
                        var _0x75df72 = _0x11567a.getContextAttributes(), _0x1a552f = 'WebGL2RenderingContext' in globalThis && _0x11567a instanceof globalThis.WebGL2RenderingContext;
                        _0x1a552f && (this.webGLVersion = 2);
                        _0x75df72 && !_0x75df72.stencil && console.warn('Provided WebGL context does not have a stencil buffer, masks may not render correctly');
                        var _0x2bdf55 = _0x1a552f || !!_0x11567a.getExtension('OES_element_index_uint');
                        this.supports.uint32Indices = _0x2bdf55;
                        _0x2bdf55 || console.warn('Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly');
                    }, _0xd87a6e;
                }(), _0x12399b = function (_0xaeb227) {
                    ;
                    this.framebuffer = _0xaeb227;
                    this.stencil = null;
                    this.dirtyId = -1;
                    this.dirtyFormat = -1;
                    this.dirtySize = -1;
                    this.multisample = _0x589e0e.G5.NONE;
                    this.msaaBuffer = null;
                    this.blitFramebuffer = null;
                    this.mipLevel = 0;
                }, _0x216528 = new _0x596cf7.Ae(), _0x283bfc = function () {
                    ;
                    function _0x495e54(_0x2dca73) {
                        ;
                        this.renderer = _0x2dca73;
                        this.managedFramebuffers = [];
                        this.unknownFramebuffer = new _0x48e67a(10, 10);
                        this.msaaSamples = null;
                    }
                    return _0x495e54.prototype.contextChange = function () {
                        var _0x4bdcdf = this.gl = this.renderer.gl;
                        if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new _0x596cf7.Ae(), this.hasMRT = true, this.writeDepthTexture = true, this.disposeAll(true), 1 === this.renderer.context.webGLVersion) {
                            var _0x26277d = this.renderer.context.extensions.drawBuffers, _0x51ca8a = this.renderer.context.extensions.depthTexture;
                            _0xa851a9.X.PREFER_ENV === _0x589e0e.Vi.WEBGL_LEGACY && (_0x26277d = null, _0x51ca8a = null);
                            _0x26277d ? _0x4bdcdf.drawBuffers = function (_0x1b3352) {
                                return _0x26277d.drawBuffersWEBGL(_0x1b3352);
                            } : (this.hasMRT = false, _0x4bdcdf.drawBuffers = function () {
                            });
                            _0x51ca8a || (this.writeDepthTexture = false);
                        } else {
                            this.msaaSamples = _0x4bdcdf.getInternalformatParameter(_0x4bdcdf.RENDERBUFFER, _0x4bdcdf.RGBA8, _0x4bdcdf.SAMPLES);
                        }
                    }, _0x495e54.prototype.bind = function (_0x1f2fe9, _0xe8669f, _0x3ac166) {
                        ;
                        void 0 === _0x3ac166 && (_0x3ac166 = 0);
                        var _0x48a691 = this.gl;
                        if (_0x1f2fe9) {
                            var _0x571e4e = _0x1f2fe9.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(_0x1f2fe9);
                            this.current !== _0x1f2fe9 && (this.current = _0x1f2fe9, _0x48a691.bindFramebuffer(_0x48a691.FRAMEBUFFER, _0x571e4e.framebuffer));
                            _0x571e4e.mipLevel !== _0x3ac166 && (_0x1f2fe9.dirtyId++, _0x1f2fe9.dirtyFormat++, _0x571e4e.mipLevel = _0x3ac166);
                            _0x571e4e.dirtyId !== _0x1f2fe9.dirtyId && (_0x571e4e.dirtyId = _0x1f2fe9.dirtyId, _0x571e4e.dirtyFormat !== _0x1f2fe9.dirtyFormat ? (_0x571e4e.dirtyFormat = _0x1f2fe9.dirtyFormat, _0x571e4e.dirtySize = _0x1f2fe9.dirtySize, this.updateFramebuffer(_0x1f2fe9, _0x3ac166)) : _0x571e4e.dirtySize !== _0x1f2fe9.dirtySize && (_0x571e4e.dirtySize = _0x1f2fe9.dirtySize, this.resizeFramebuffer(_0x1f2fe9)));
                            for (var _0x13ec1a = 0; _0x13ec1a < _0x1f2fe9.colorTextures.length; _0x13ec1a++) {
                                var _0x41c307 = _0x1f2fe9.colorTextures[_0x13ec1a];
                                this.renderer.texture.unbind(_0x41c307.parentTextureArray || _0x41c307);
                            }
                            if (_0x1f2fe9.depthTexture && this.renderer.texture.unbind(_0x1f2fe9.depthTexture), _0xe8669f) {
                                var _0x3c3f41 = _0xe8669f.width >> _0x3ac166, _0x4e755e = _0xe8669f.height >> _0x3ac166, _0x46490b = _0x3c3f41 / _0xe8669f.width;
                                this.setViewport(_0xe8669f.x * _0x46490b, _0xe8669f.y * _0x46490b, _0x3c3f41, _0x4e755e);
                            } else {
                                _0x3c3f41 = _0x1f2fe9.width >> _0x3ac166;
                                _0x4e755e = _0x1f2fe9.height >> _0x3ac166;
                                this.setViewport(0, 0, _0x3c3f41, _0x4e755e);
                            }
                        } else {
                            this.current && (this.current = null, _0x48a691.bindFramebuffer(_0x48a691.FRAMEBUFFER, null));
                            _0xe8669f ? this.setViewport(_0xe8669f.x, _0xe8669f.y, _0xe8669f.width, _0xe8669f.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height);
                        }
                    }, _0x495e54.prototype.setViewport = function (_0x23b1d9, _0x3b3be5, _0x2c77c5, _0x3076f3) {
                        var _0x3aa74e = this.viewport;
                        _0x23b1d9 = Math.round(_0x23b1d9);
                        _0x3b3be5 = Math.round(_0x3b3be5);
                        _0x2c77c5 = Math.round(_0x2c77c5);
                        _0x3076f3 = Math.round(_0x3076f3);
                        _0x3aa74e.width === _0x2c77c5 && _0x3aa74e.height === _0x3076f3 && _0x3aa74e.x === _0x23b1d9 && _0x3aa74e.y === _0x3b3be5 || (_0x3aa74e.x = _0x23b1d9, _0x3aa74e.y = _0x3b3be5, _0x3aa74e.width = _0x2c77c5, _0x3aa74e.height = _0x3076f3, this.gl.viewport(_0x23b1d9, _0x3b3be5, _0x2c77c5, _0x3076f3));
                    }, Object.defineProperty(_0x495e54.prototype, 'size', {
                        'get': function () {
                            ;
                            return this.current ? {
                                'x': 0,
                                'y': 0,
                                'width': this.current.width,
                                'height': this.current.height
                            } : {
                                'x': 0,
                                'y': 0,
                                'width': this.renderer.width,
                                'height': this.renderer.height
                            };
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x495e54.prototype.clear = function (_0x28449f, _0x3cd097, _0x3532c4, _0x584589, _0x4cd63f) {
                        ;
                        void 0 === _0x4cd63f && (_0x4cd63f = _0x589e0e.V0.COLOR | _0x589e0e.V0.DEPTH);
                        var _0x224ed6 = this.gl;
                        _0x224ed6.clearColor(_0x28449f, _0x3cd097, _0x3532c4, _0x584589);
                        _0x224ed6.clear(_0x4cd63f);
                    }, _0x495e54.prototype.initFramebuffer = function (_0x52a19c) {
                        var _0x5b632f = this.gl, _0x3648bb = new _0x12399b(_0x5b632f.createFramebuffer());
                        return _0x3648bb.multisample = this.detectSamples(_0x52a19c.multisample), _0x52a19c.glFramebuffers[this.CONTEXT_UID] = _0x3648bb, this.managedFramebuffers.push(_0x52a19c), _0x52a19c.disposeRunner.add(this), _0x3648bb;
                    }, _0x495e54.prototype.resizeFramebuffer = function (_0x764785) {
                        var _0x117633 = this.gl, _0xe78ec4 = _0x764785.glFramebuffers[this.CONTEXT_UID];
                        _0xe78ec4.msaaBuffer && (_0x117633.bindRenderbuffer(_0x117633.RENDERBUFFER, _0xe78ec4.msaaBuffer), _0x117633.renderbufferStorageMultisample(_0x117633.RENDERBUFFER, _0xe78ec4.multisample, _0x117633.RGBA8, _0x764785.width, _0x764785.height));
                        _0xe78ec4.stencil && (_0x117633.bindRenderbuffer(_0x117633.RENDERBUFFER, _0xe78ec4.stencil), _0xe78ec4.msaaBuffer ? _0x117633.renderbufferStorageMultisample(_0x117633.RENDERBUFFER, _0xe78ec4.multisample, _0x117633.DEPTH24_STENCIL8, _0x764785.width, _0x764785.height) : _0x117633.renderbufferStorage(_0x117633.RENDERBUFFER, _0x117633.DEPTH_STENCIL, _0x764785.width, _0x764785.height));
                        var _0x56899a = _0x764785.colorTextures, _0x70a52 = _0x56899a.length;
                        _0x117633.drawBuffers || (_0x70a52 = Math.min(_0x70a52, 1));
                        for (var _0x1ee221 = 0; _0x1ee221 < _0x70a52; _0x1ee221++) {
                            var _0x17a400 = _0x56899a[_0x1ee221], _0x36171b = _0x17a400.parentTextureArray || _0x17a400;
                            this.renderer.texture.bind(_0x36171b, 0);
                        }
                        _0x764785.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(_0x764785.depthTexture, 0);
                    }, _0x495e54.prototype.updateFramebuffer = function (_0xddd788, _0x3ea202) {
                        var _0x5a2b43 = this.gl, _0xfd5cae = _0xddd788.glFramebuffers[this.CONTEXT_UID], _0x37e7c3 = _0xddd788.colorTextures, _0x41b969 = _0x37e7c3.length;
                        _0x5a2b43.drawBuffers || (_0x41b969 = Math.min(_0x41b969, 1));
                        _0xfd5cae.multisample > 1 && this.canMultisampleFramebuffer(_0xddd788) ? (_0xfd5cae.msaaBuffer = _0xfd5cae.msaaBuffer || _0x5a2b43.createRenderbuffer(), _0x5a2b43.bindRenderbuffer(_0x5a2b43.RENDERBUFFER, _0xfd5cae.msaaBuffer), _0x5a2b43.renderbufferStorageMultisample(_0x5a2b43.RENDERBUFFER, _0xfd5cae.multisample, _0x5a2b43.RGBA8, _0xddd788.width, _0xddd788.height), _0x5a2b43.framebufferRenderbuffer(_0x5a2b43.FRAMEBUFFER, _0x5a2b43.COLOR_ATTACHMENT0, _0x5a2b43.RENDERBUFFER, _0xfd5cae.msaaBuffer)) : _0xfd5cae.msaaBuffer && (_0x5a2b43.deleteRenderbuffer(_0xfd5cae.msaaBuffer), _0xfd5cae.msaaBuffer = null, _0xfd5cae.blitFramebuffer && (_0xfd5cae.blitFramebuffer.dispose(), _0xfd5cae.blitFramebuffer = null));
                        for (var _0x2ee637 = [], _0x4c0e2a = 0; _0x4c0e2a < _0x41b969; _0x4c0e2a++) {
                            var _0x2bc39e = _0x37e7c3[_0x4c0e2a], _0x3be0f6 = _0x2bc39e.parentTextureArray || _0x2bc39e;
                            this.renderer.texture.bind(_0x3be0f6, 0);
                            0 === _0x4c0e2a && _0xfd5cae.msaaBuffer || (_0x5a2b43.framebufferTexture2D(_0x5a2b43.FRAMEBUFFER, _0x5a2b43.COLOR_ATTACHMENT0 + _0x4c0e2a, _0x2bc39e.target, _0x3be0f6['_glTextures'][this.CONTEXT_UID].texture, _0x3ea202), _0x2ee637.push(_0x5a2b43.COLOR_ATTACHMENT0 + _0x4c0e2a));
                        }
                        if (_0x2ee637.length > 1 && _0x5a2b43.drawBuffers(_0x2ee637), _0xddd788.depthTexture && this.writeDepthTexture) {
                            var _0x20e15f = _0xddd788.depthTexture;
                            this.renderer.texture.bind(_0x20e15f, 0);
                            _0x5a2b43.framebufferTexture2D(_0x5a2b43.FRAMEBUFFER, _0x5a2b43.DEPTH_ATTACHMENT, _0x5a2b43.TEXTURE_2D, _0x20e15f['_glTextures'][this.CONTEXT_UID].texture, _0x3ea202);
                        }
                        !_0xddd788.stencil && !_0xddd788.depth || _0xddd788.depthTexture && this.writeDepthTexture ? _0xfd5cae.stencil && (_0x5a2b43.deleteRenderbuffer(_0xfd5cae.stencil), _0xfd5cae.stencil = null) : (_0xfd5cae.stencil = _0xfd5cae.stencil || _0x5a2b43.createRenderbuffer(), _0x5a2b43.bindRenderbuffer(_0x5a2b43.RENDERBUFFER, _0xfd5cae.stencil), _0xfd5cae.msaaBuffer ? _0x5a2b43.renderbufferStorageMultisample(_0x5a2b43.RENDERBUFFER, _0xfd5cae.multisample, _0x5a2b43.DEPTH24_STENCIL8, _0xddd788.width, _0xddd788.height) : _0x5a2b43.renderbufferStorage(_0x5a2b43.RENDERBUFFER, _0x5a2b43.DEPTH_STENCIL, _0xddd788.width, _0xddd788.height), _0x5a2b43.framebufferRenderbuffer(_0x5a2b43.FRAMEBUFFER, _0x5a2b43.DEPTH_STENCIL_ATTACHMENT, _0x5a2b43.RENDERBUFFER, _0xfd5cae.stencil));
                    }, _0x495e54.prototype.canMultisampleFramebuffer = function (_0x38d7a0) {
                        ;
                        return 1 !== this.renderer.context.webGLVersion && _0x38d7a0.colorTextures.length <= 1 && !_0x38d7a0.depthTexture;
                    }, _0x495e54.prototype.detectSamples = function (_0x11f60e) {
                        var _0x2e9f59 = this.msaaSamples, _0x3223e3 = _0x589e0e.G5.NONE;
                        if (_0x11f60e <= 1 || null === _0x2e9f59) {
                            return _0x3223e3;
                        }
                        for (var _0x3feba8 = 0; _0x3feba8 < _0x2e9f59.length; _0x3feba8++) {
                            if (_0x2e9f59[_0x3feba8] <= _0x11f60e) {
                                _0x3223e3 = _0x2e9f59[_0x3feba8];
                                break;
                            }
                        }
                        return 1 === _0x3223e3 && (_0x3223e3 = _0x589e0e.G5.NONE), _0x3223e3;
                    }, _0x495e54.prototype.blit = function (_0x86b2f4, _0x5828b2, _0x396f02) {
                        var _0x2e703e = this, _0x244564 = _0x2e703e.current, _0x179718 = _0x2e703e.renderer, _0x42805d = _0x2e703e.gl, _0x1048b5 = _0x2e703e.CONTEXT_UID;
                        if (2 === _0x179718.context.webGLVersion && _0x244564) {
                            var _0x19fc06 = _0x244564.glFramebuffers[_0x1048b5];
                            if (_0x19fc06) {
                                if (!_0x86b2f4) {
                                    if (!_0x19fc06.msaaBuffer) {
                                        return;
                                    }
                                    var _0x1aa4ee = _0x244564.colorTextures[0];
                                    if (!_0x1aa4ee) {
                                        return;
                                    }
                                    _0x19fc06.blitFramebuffer || (_0x19fc06.blitFramebuffer = new _0x48e67a(_0x244564.width, _0x244564.height), _0x19fc06.blitFramebuffer.addColorTexture(0, _0x1aa4ee));
                                    (_0x86b2f4 = _0x19fc06.blitFramebuffer).colorTextures[0] !== _0x1aa4ee && (_0x86b2f4.colorTextures[0] = _0x1aa4ee, _0x86b2f4.dirtyId++, _0x86b2f4.dirtyFormat++);
                                    _0x86b2f4.width === _0x244564.width && _0x86b2f4.height === _0x244564.height || (_0x86b2f4.width = _0x244564.width, _0x86b2f4.height = _0x244564.height, _0x86b2f4.dirtyId++, _0x86b2f4.dirtySize++);
                                }
                                _0x5828b2 || ((_0x5828b2 = _0x216528).width = _0x244564.width, _0x5828b2.height = _0x244564.height);
                                _0x396f02 || (_0x396f02 = _0x5828b2);
                                var _0x2e1057 = _0x5828b2.width === _0x396f02.width && _0x5828b2.height === _0x396f02.height;
                                this.bind(_0x86b2f4);
                                _0x42805d.bindFramebuffer(_0x42805d.READ_FRAMEBUFFER, _0x19fc06.framebuffer);
                                _0x42805d.blitFramebuffer(_0x5828b2.left, _0x5828b2.top, _0x5828b2.right, _0x5828b2.bottom, _0x396f02.left, _0x396f02.top, _0x396f02.right, _0x396f02.bottom, _0x42805d.COLOR_BUFFER_BIT, _0x2e1057 ? _0x42805d.NEAREST : _0x42805d.LINEAR);
                            }
                        }
                    }, _0x495e54.prototype.disposeFramebuffer = function (_0x3915d0, _0x2f82a1) {
                        var _0x2c0e66 = _0x3915d0.glFramebuffers[this.CONTEXT_UID], _0x175ece = this.gl;
                        if (_0x2c0e66) {
                            delete _0x3915d0.glFramebuffers[this.CONTEXT_UID];
                            var _0x50830e = this.managedFramebuffers.indexOf(_0x3915d0);
                            _0x50830e >= 0 && this.managedFramebuffers.splice(_0x50830e, 1);
                            _0x3915d0.disposeRunner.remove(this);
                            _0x2f82a1 || (_0x175ece.deleteFramebuffer(_0x2c0e66.framebuffer), _0x2c0e66.msaaBuffer && _0x175ece.deleteRenderbuffer(_0x2c0e66.msaaBuffer), _0x2c0e66.stencil && _0x175ece.deleteRenderbuffer(_0x2c0e66.stencil));
                            _0x2c0e66.blitFramebuffer && _0x2c0e66.blitFramebuffer.dispose();
                        }
                    }, _0x495e54.prototype.disposeAll = function (_0x33a41c) {
                        var _0x23ac28 = this.managedFramebuffers;
                        this.managedFramebuffers = [];
                        for (var _0x59584a = 0; _0x59584a < _0x23ac28.length; _0x59584a++) {
                            this.disposeFramebuffer(_0x23ac28[_0x59584a], _0x33a41c);
                        }
                    }, _0x495e54.prototype.forceStencil = function () {
                        var _0x5b8a96 = this.current;
                        if (_0x5b8a96) {
                            var _0x107669 = _0x5b8a96.glFramebuffers[this.CONTEXT_UID];
                            if (_0x107669 && !_0x107669.stencil) {
                                _0x5b8a96.stencil = true;
                                var _0x40e0db = _0x5b8a96.width, _0x51dff6 = _0x5b8a96.height, _0x251650 = this.gl, _0x1a9f69 = _0x251650.createRenderbuffer();
                                _0x251650.bindRenderbuffer(_0x251650.RENDERBUFFER, _0x1a9f69);
                                _0x107669.msaaBuffer ? _0x251650.renderbufferStorageMultisample(_0x251650.RENDERBUFFER, _0x107669.multisample, _0x251650.DEPTH24_STENCIL8, _0x40e0db, _0x51dff6) : _0x251650.renderbufferStorage(_0x251650.RENDERBUFFER, _0x251650.DEPTH_STENCIL, _0x40e0db, _0x51dff6);
                                _0x107669.stencil = _0x1a9f69;
                                _0x251650.framebufferRenderbuffer(_0x251650.FRAMEBUFFER, _0x251650.DEPTH_STENCIL_ATTACHMENT, _0x251650.RENDERBUFFER, _0x1a9f69);
                            }
                        }
                    }, _0x495e54.prototype.reset = function () {
                        ;
                        this.current = this.unknownFramebuffer;
                        this.viewport = new _0x596cf7.Ae();
                    }, _0x495e54.prototype.destroy = function () {
                        ;
                        this.renderer = null;
                    }, _0x495e54;
                }(), _0x13b497 = function () {
                    ;
                    function _0x140461(_0x69170) {
                        ;
                        this.renderer = _0x69170;
                        this['_activeGeometry'] = null;
                        this['_activeVao'] = null;
                        this.hasVao = true;
                        this.hasInstance = true;
                        this.canUseUInt32ElementIndex = false;
                        this.managedGeometries = {};
                    }
                    return _0x140461.prototype.contextChange = function () {
                        ;
                        this.disposeAll(true);
                        var _0x3ddbff = this.gl = this.renderer.gl, _0x1db9d9 = this.renderer.context;
                        if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, 2 !== _0x1db9d9.webGLVersion) {
                            var _0x8593f1 = this.renderer.context.extensions.vertexArrayObject;
                            _0xa851a9.X.PREFER_ENV === _0x589e0e.Vi.WEBGL_LEGACY && (_0x8593f1 = null);
                            _0x8593f1 ? (_0x3ddbff.createVertexArray = function () {
                                ;
                                return _0x8593f1.createVertexArrayOES();
                            }, _0x3ddbff.bindVertexArray = function (_0x9a1ae4) {
                                return _0x8593f1.bindVertexArrayOES(_0x9a1ae4);
                            }, _0x3ddbff.deleteVertexArray = function (_0x34ee4d) {
                                return _0x8593f1.deleteVertexArrayOES(_0x34ee4d);
                            }) : (this.hasVao = false, _0x3ddbff.createVertexArray = function () {
                                return null;
                            }, _0x3ddbff.bindVertexArray = function () {
                                return null;
                            }, _0x3ddbff.deleteVertexArray = function () {
                                return null;
                            });
                        }
                        if (2 !== _0x1db9d9.webGLVersion) {
                            var _0x1519af = _0x3ddbff.getExtension('ANGLE_instanced_arrays');
                            _0x1519af ? (_0x3ddbff.vertexAttribDivisor = function (_0x1df9f7, _0x236b93) {
                                ;
                                return _0x1519af.vertexAttribDivisorANGLE(_0x1df9f7, _0x236b93);
                            }, _0x3ddbff.drawElementsInstanced = function (_0x50a4f3, _0x3e1256, _0x13a0f6, _0x25e7bf, _0x3db58e) {
                                ;
                                return _0x1519af.drawElementsInstancedANGLE(_0x50a4f3, _0x3e1256, _0x13a0f6, _0x25e7bf, _0x3db58e);
                            }, _0x3ddbff.drawArraysInstanced = function (_0x3dc389, _0x2cfb13, _0x4e971c, _0x28ab70) {
                                ;
                                return _0x1519af.drawArraysInstancedANGLE(_0x3dc389, _0x2cfb13, _0x4e971c, _0x28ab70);
                            }) : this.hasInstance = false;
                        }
                        this.canUseUInt32ElementIndex = 2 === _0x1db9d9.webGLVersion || !!_0x1db9d9.extensions.uint32ElementIndex;
                    }, _0x140461.prototype.bind = function (_0x878ab4, _0x50b435) {
                        ;
                        _0x50b435 = _0x50b435 || this.renderer.shader.shader;
                        var _0x26be9 = this.gl, _0x24a14c = _0x878ab4.glVertexArrayObjects[this.CONTEXT_UID], _0x4ca49d = false;
                        _0x24a14c || (this.managedGeometries[_0x878ab4.id] = _0x878ab4, _0x878ab4.disposeRunner.add(this), _0x878ab4.glVertexArrayObjects[this.CONTEXT_UID] = _0x24a14c = {}, _0x4ca49d = true);
                        var _0x432230 = _0x24a14c[_0x50b435.program.id] || this.initGeometryVao(_0x878ab4, _0x50b435, _0x4ca49d);
                        this['_activeGeometry'] = _0x878ab4;
                        this['_activeVao'] !== _0x432230 && (this['_activeVao'] = _0x432230, this.hasVao ? _0x26be9.bindVertexArray(_0x432230) : this.activateVao(_0x878ab4, _0x50b435.program));
                        this.updateBuffers();
                    }, _0x140461.prototype.reset = function () {
                        ;
                        this.unbind();
                    }, _0x140461.prototype.updateBuffers = function () {
                        ;
                        for (var _0xbb6781 = this['_activeGeometry'], _0x1b42ab = this.renderer.buffer, _0x91c74 = 0; _0x91c74 < _0xbb6781.buffers.length; _0x91c74++) {
                            var _0x3e381c = _0xbb6781.buffers[_0x91c74];
                            _0x1b42ab.update(_0x3e381c);
                        }
                    }, _0x140461.prototype.checkCompatibility = function (_0x18b4df, _0x33d3a7) {
                        var _0xf0d23f = _0x18b4df.attributes, _0x15a97f = _0x33d3a7.attributeData;
                        for (var _0x3a4e79 in _0x15a97f)
                            if (!_0xf0d23f[_0x3a4e79]) {
                                throw new Error('shader and geometry incompatible, geometry missing the "' + _0x3a4e79 + '" attribute');
                            }
                    }, _0x140461.prototype.getSignature = function (_0x2984ac, _0x4da589) {
                        var _0x10e45c = _0x2984ac.attributes, _0x58610b = _0x4da589.attributeData, _0x11b63e = [
                                'g',
                                _0x2984ac.id
                            ];
                        for (var _0x33bf95 in _0x10e45c)
                            _0x58610b[_0x33bf95] && _0x11b63e.push(_0x33bf95, _0x58610b[_0x33bf95].location);
                        return _0x11b63e.join('-');
                    }, _0x140461.prototype.initGeometryVao = function (_0x361407, _0x29f80, _0x793ab9) {
                        ;
                        void 0 === _0x793ab9 && (_0x793ab9 = true);
                        var _0x133f1b = this.gl, _0x21dcd6 = this.CONTEXT_UID, _0x211443 = this.renderer.buffer, _0x29cf06 = _0x29f80.program;
                        _0x29cf06.glPrograms[_0x21dcd6] || this.renderer.shader.generateProgram(_0x29f80);
                        this.checkCompatibility(_0x361407, _0x29cf06);
                        var _0x40de70 = this.getSignature(_0x361407, _0x29cf06), _0x27a39e = _0x361407.glVertexArrayObjects[this.CONTEXT_UID], _0x54d14d = _0x27a39e[_0x40de70];
                        if (_0x54d14d) {
                            return _0x27a39e[_0x29cf06.id] = _0x54d14d, _0x54d14d;
                        }
                        var _0xaad50 = _0x361407.buffers, _0x1212e6 = _0x361407.attributes, _0xc39a33 = {}, _0x179ecd = {};
                        for (var _0xaea82a in _0xaad50)
                            _0xc39a33[_0xaea82a] = 0, _0x179ecd[_0xaea82a] = 0;
                        for (var _0xaea82a in _0x1212e6)
                            !_0x1212e6[_0xaea82a].size && _0x29cf06.attributeData[_0xaea82a] ? _0x1212e6[_0xaea82a].size = _0x29cf06.attributeData[_0xaea82a].size : _0x1212e6[_0xaea82a].size || console.warn('PIXI Geometry attribute \'' + _0xaea82a + '\' size cannot be determined (likely the bound shader does not have the attribute)'), _0xc39a33[_0x1212e6[_0xaea82a].buffer] += _0x1212e6[_0xaea82a].size * _0x254e34[_0x1212e6[_0xaea82a].type];
                        for (var _0xaea82a in _0x1212e6) {
                            var _0x22fffb = _0x1212e6[_0xaea82a], _0x495ff0 = _0x22fffb.size;
                            void 0 === _0x22fffb.stride && (_0xc39a33[_0x22fffb.buffer] === _0x495ff0 * _0x254e34[_0x22fffb.type] ? _0x22fffb.stride = 0 : _0x22fffb.stride = _0xc39a33[_0x22fffb.buffer]);
                            void 0 === _0x22fffb.start && (_0x22fffb.start = _0x179ecd[_0x22fffb.buffer], _0x179ecd[_0x22fffb.buffer] += _0x495ff0 * _0x254e34[_0x22fffb.type]);
                        }
                        _0x54d14d = _0x133f1b.createVertexArray();
                        _0x133f1b.bindVertexArray(_0x54d14d);
                        for (var _0x3792ca = 0; _0x3792ca < _0xaad50.length; _0x3792ca++) {
                            var _0x40cbe8 = _0xaad50[_0x3792ca];
                            _0x211443.bind(_0x40cbe8);
                            _0x793ab9 && _0x40cbe8['_glBuffers'][_0x21dcd6].refCount++;
                        }
                        return this.activateVao(_0x361407, _0x29cf06), this['_activeVao'] = _0x54d14d, _0x27a39e[_0x29cf06.id] = _0x54d14d, _0x27a39e[_0x40de70] = _0x54d14d, _0x54d14d;
                    }, _0x140461.prototype.disposeGeometry = function (_0x4a40d8, _0x362c73) {
                        var _0x189e46;
                        if (this.managedGeometries[_0x4a40d8.id]) {
                            delete this.managedGeometries[_0x4a40d8.id];
                            var _0x4fb29d = _0x4a40d8.glVertexArrayObjects[this.CONTEXT_UID], _0x37c802 = this.gl, _0xd96315 = _0x4a40d8.buffers, _0x5dc750 = null === (_0x189e46 = this.renderer) || void 0 === _0x189e46 ? void 0 : _0x189e46.buffer;
                            if (_0x4a40d8.disposeRunner.remove(this), _0x4fb29d) {
                                if (_0x5dc750) {
                                    for (var _0x5f2361 = 0; _0x5f2361 < _0xd96315.length; _0x5f2361++) {
                                        var _0x19ebdf = _0xd96315[_0x5f2361]['_glBuffers'][this.CONTEXT_UID];
                                        _0x19ebdf && (_0x19ebdf.refCount--, 0 !== _0x19ebdf.refCount || _0x362c73 || _0x5dc750.dispose(_0xd96315[_0x5f2361], _0x362c73));
                                    }
                                }
                                if (!_0x362c73) {
                                    for (var _0x53f599 in _0x4fb29d)
                                        if ('g' === _0x53f599[0]) {
                                            var _0x504b62 = _0x4fb29d[_0x53f599];
                                            this['_activeVao'] === _0x504b62 && this.unbind();
                                            _0x37c802.deleteVertexArray(_0x504b62);
                                        }
                                }
                                delete _0x4a40d8.glVertexArrayObjects[this.CONTEXT_UID];
                            }
                        }
                    }, _0x140461.prototype.disposeAll = function (_0x3eb45a) {
                        ;
                        for (var _0x36268e = Object.keys(this.managedGeometries), _0x392a40 = 0; _0x392a40 < _0x36268e.length; _0x392a40++) {
                            this.disposeGeometry(this.managedGeometries[_0x36268e[_0x392a40]], _0x3eb45a);
                        }
                    }, _0x140461.prototype.activateVao = function (_0x5501a8, _0x43e5d5) {
                        var _0x589d43 = this.gl, _0x1c0fbd = this.CONTEXT_UID, _0x1a7056 = this.renderer.buffer, _0x2ff88b = _0x5501a8.buffers, _0x3f9194 = _0x5501a8.attributes;
                        _0x5501a8.indexBuffer && _0x1a7056.bind(_0x5501a8.indexBuffer);
                        var _0x1bdbb5 = null;
                        for (var _0xf86f7 in _0x3f9194) {
                            var _0x4767ff = _0x3f9194[_0xf86f7], _0x2aff68 = _0x2ff88b[_0x4767ff.buffer], _0x544c81 = _0x2aff68['_glBuffers'][_0x1c0fbd];
                            if (_0x43e5d5.attributeData[_0xf86f7]) {
                                _0x1bdbb5 !== _0x544c81 && (_0x1a7056.bind(_0x2aff68), _0x1bdbb5 = _0x544c81);
                                var _0x4b7f21 = _0x43e5d5.attributeData[_0xf86f7].location;
                                if (_0x589d43.enableVertexAttribArray(_0x4b7f21), _0x589d43.vertexAttribPointer(_0x4b7f21, _0x4767ff.size, _0x4767ff.type || _0x589d43.FLOAT, _0x4767ff.normalized, _0x4767ff.stride, _0x4767ff.start), _0x4767ff.instance) {
                                    if (!this.hasInstance) {
                                        throw new Error('geometry error, GPU Instancing is not supported on this device');
                                    }
                                    _0x589d43.vertexAttribDivisor(_0x4b7f21, 1);
                                }
                            }
                        }
                    }, _0x140461.prototype.draw = function (_0x4f4808, _0x27799b, _0x403020, _0x181cef) {
                        var _0x1b24c4 = this.gl, _0x207c9f = this['_activeGeometry'];
                        if (_0x207c9f.indexBuffer) {
                            var _0x5416b8 = _0x207c9f.indexBuffer.data.BYTES_PER_ELEMENT, _0x120c3a = 2 === _0x5416b8 ? _0x1b24c4.UNSIGNED_SHORT : _0x1b24c4.UNSIGNED_INT;
                            2 === _0x5416b8 || 4 === _0x5416b8 && this.canUseUInt32ElementIndex ? _0x207c9f.instanced ? _0x1b24c4.drawElementsInstanced(_0x4f4808, _0x27799b || _0x207c9f.indexBuffer.data.length, _0x120c3a, (_0x403020 || 0) * _0x5416b8, _0x181cef || 1) : _0x1b24c4.drawElements(_0x4f4808, _0x27799b || _0x207c9f.indexBuffer.data.length, _0x120c3a, (_0x403020 || 0) * _0x5416b8) : console.warn('unsupported index buffer type: uint32');
                        } else {
                            _0x207c9f.instanced ? _0x1b24c4.drawArraysInstanced(_0x4f4808, _0x403020, _0x27799b || _0x207c9f.getSize(), _0x181cef || 1) : _0x1b24c4.drawArrays(_0x4f4808, _0x403020, _0x27799b || _0x207c9f.getSize());
                        }
                        return this;
                    }, _0x140461.prototype.unbind = function () {
                        ;
                        this.gl.bindVertexArray(null);
                        this['_activeVao'] = null;
                        this['_activeGeometry'] = null;
                    }, _0x140461.prototype.destroy = function () {
                        ;
                        this.renderer = null;
                    }, _0x140461;
                }(), _0x53fe84 = function () {
                    ;
                    function _0x187dcb(_0x356008) {
                        ;
                        void 0 === _0x356008 && (_0x356008 = null);
                        this.type = _0x589e0e.A7.NONE;
                        this.autoDetect = true;
                        this.maskObject = _0x356008 || null;
                        this.pooled = false;
                        this.isMaskData = true;
                        this.resolution = null;
                        this.multisample = _0xa851a9.X.FILTER_MULTISAMPLE;
                        this.enabled = true;
                        this['_filters'] = null;
                        this['_stencilCounter'] = 0;
                        this['_scissorCounter'] = 0;
                        this['_scissorRect'] = null;
                        this['_scissorRectLocal'] = null;
                        this['_target'] = null;
                    }
                    return Object.defineProperty(_0x187dcb.prototype, 'filter', {
                        'get': function () {
                            return this['_filters'] ? this['_filters'][0] : null;
                        },
                        'set': function (_0x3608eb) {
                            ;
                            _0x3608eb ? this['_filters'] ? this['_filters'][0] = _0x3608eb : this['_filters'] = [_0x3608eb] : this['_filters'] = null;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x187dcb.prototype.reset = function () {
                        ;
                        this.pooled && (this.maskObject = null, this.type = _0x589e0e.A7.NONE, this.autoDetect = true);
                        this['_target'] = null;
                        this['_scissorRectLocal'] = null;
                    }, _0x187dcb.prototype.copyCountersOrReset = function (_0x5cf4f7) {
                        ;
                        _0x5cf4f7 ? (this['_stencilCounter'] = _0x5cf4f7['_stencilCounter'], this['_scissorCounter'] = _0x5cf4f7['_scissorCounter'], this['_scissorRect'] = _0x5cf4f7['_scissorRect']) : (this['_stencilCounter'] = 0, this['_scissorCounter'] = 0, this['_scissorRect'] = null);
                    }, _0x187dcb;
                }();
            function _0x47c868(_0x39ebec, _0x21a307, _0x326e14) {
                var _0x2f2809 = _0x39ebec.createShader(_0x21a307);
                return _0x39ebec.shaderSource(_0x2f2809, _0x326e14), _0x39ebec.compileShader(_0x2f2809), _0x2f2809;
            }
            function _0x4866a9(_0xf7b790, _0x47372f) {
                var _0x21f056 = _0xf7b790.getShaderSource(_0x47372f).split('\n').map(function (_0x22d7a3, _0xe7e4bd) {
                        return _0xe7e4bd + ': ' + _0x22d7a3;
                    }), _0xf26acc = _0xf7b790.getShaderInfoLog(_0x47372f), _0x1f8bf6 = _0xf26acc.split('\n'), _0x2064e8 = {}, _0x33d03d = _0x1f8bf6.map(function (_0x1c36ef) {
                        ;
                        return parseFloat(_0x1c36ef.replace(/^ERROR\: 0\:([\d]+)\:.*$/, '$1'));
                    }).filter(function (_0x50f69b) {
                        return !(!_0x50f69b || _0x2064e8[_0x50f69b] || (_0x2064e8[_0x50f69b] = true, 0));
                    }), _0xc0eb4e = [''];
                _0x33d03d.forEach(function (_0x6a5d36) {
                    ;
                    _0x21f056[_0x6a5d36 - 1] = '%c' + _0x21f056[_0x6a5d36 - 1] + '%c';
                    _0xc0eb4e.push('background: #FF0000; color:#FFFFFF; font-size: 10px', 'font-size: 10px');
                });
                var _0xfbb8f0 = _0x21f056.join('\n');
                _0xc0eb4e[0] = _0xfbb8f0;
                console.error(_0xf26acc);
                console.groupCollapsed('click to view full shader code');
                console.warn.apply(console, _0xc0eb4e);
                console.groupEnd();
            }
            function _0x3a0c59(_0x358a8f) {
                ;
                for (var _0x487bbf = new Array(_0x358a8f), _0x363be9 = 0; _0x363be9 < _0x487bbf.length; _0x363be9++) {
                    _0x487bbf[_0x363be9] = false;
                }
                return _0x487bbf;
            }
            function _0x5f5af7(_0x12833a, _0x598b92) {
                ;
                switch (_0x12833a) {
                case 'float':
                case 'int':
                case 'uint':
                case 'sampler2D':
                case 'sampler2DArray':
                    return 0;
                case 'vec2':
                    return new Float32Array(2 * _0x598b92);
                case 'vec3':
                    return new Float32Array(3 * _0x598b92);
                case 'vec4':
                    return new Float32Array(4 * _0x598b92);
                case 'ivec2':
                    return new Int32Array(2 * _0x598b92);
                case 'ivec3':
                    return new Int32Array(3 * _0x598b92);
                case 'ivec4':
                    return new Int32Array(4 * _0x598b92);
                case 'uvec2':
                    return new Uint32Array(2 * _0x598b92);
                case 'uvec3':
                    return new Uint32Array(3 * _0x598b92);
                case 'uvec4':
                    return new Uint32Array(4 * _0x598b92);
                case 'bool':
                    return false;
                case 'bvec2':
                    return _0x3a0c59(2 * _0x598b92);
                case 'bvec3':
                    return _0x3a0c59(3 * _0x598b92);
                case 'bvec4':
                    return _0x3a0c59(4 * _0x598b92);
                case 'mat2':
                    return new Float32Array([
                        1,
                        0,
                        0,
                        1
                    ]);
                case 'mat3':
                    return new Float32Array([
                        1,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        1
                    ]);
                case 'mat4':
                    return new Float32Array([
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1
                    ]);
                }
                return null;
            }
            var _0x19e74f, _0x13b7c4 = {}, _0x136c77 = _0x13b7c4;
            function _0xe2b255(_0xb953cb, _0x51f0fe, _0x4b13d5) {
                ;
                if ('precision' !== _0xb953cb.substring(0, 9)) {
                    var _0x17ce5e = _0x51f0fe;
                    return _0x51f0fe === _0x589e0e.cB.HIGH && _0x4b13d5 !== _0x589e0e.cB.HIGH && (_0x17ce5e = _0x589e0e.cB.MEDIUM), 'precision ' + _0x17ce5e + ' float;\n' + _0xb953cb;
                }
                return _0x4b13d5 !== _0x589e0e.cB.HIGH && 'precision highp' === _0xb953cb.substring(0, 15) ? _0xb953cb.replace('precision highp', 'precision mediump') : _0xb953cb;
            }
            ;
            function _0x21a87f(_0x55dfd0) {
                return _0x36b310[_0x55dfd0];
            }
            var _0x25ee3b = null, _0x2bdc03 = {
                    'FLOAT': 'float',
                    'FLOAT_VEC2': 'vec2',
                    'FLOAT_VEC3': 'vec3',
                    'FLOAT_VEC4': 'vec4',
                    'INT': 'int',
                    'INT_VEC2': 'ivec2',
                    'INT_VEC3': 'ivec3',
                    'INT_VEC4': 'ivec4',
                    'UNSIGNED_INT': 'uint',
                    'UNSIGNED_INT_VEC2': 'uvec2',
                    'UNSIGNED_INT_VEC3': 'uvec3',
                    'UNSIGNED_INT_VEC4': 'uvec4',
                    'BOOL': 'bool',
                    'BOOL_VEC2': 'bvec2',
                    'BOOL_VEC3': 'bvec3',
                    'BOOL_VEC4': 'bvec4',
                    'FLOAT_MAT2': 'mat2',
                    'FLOAT_MAT3': 'mat3',
                    'FLOAT_MAT4': 'mat4',
                    'SAMPLER_2D': 'sampler2D',
                    'INT_SAMPLER_2D': 'sampler2D',
                    'UNSIGNED_INT_SAMPLER_2D': 'sampler2D',
                    'SAMPLER_CUBE': 'samplerCube',
                    'INT_SAMPLER_CUBE': 'samplerCube',
                    'UNSIGNED_INT_SAMPLER_CUBE': 'samplerCube',
                    'SAMPLER_2D_ARRAY': 'sampler2DArray',
                    'INT_SAMPLER_2D_ARRAY': 'sampler2DArray',
                    'UNSIGNED_INT_SAMPLER_2D_ARRAY': 'sampler2DArray'
                };
            function _0x47c8cc(_0x2cc794, _0x56a818) {
                ;
                if (!_0x25ee3b) {
                    var _0x4858a9 = Object.keys(_0x2bdc03);
                    _0x25ee3b = {};
                    for (var _0x2905a8 = 0; _0x2905a8 < _0x4858a9.length; ++_0x2905a8) {
                        var _0x411f20 = _0x4858a9[_0x2905a8];
                        _0x25ee3b[_0x2cc794[_0x411f20]] = _0x2bdc03[_0x411f20];
                    }
                }
                return _0x25ee3b[_0x56a818];
            }
            var _0xa16165, _0x2f31da = [
                    {
                        'test': function (_0x46ba60) {
                            ;
                            return 'float' === _0x46ba60.type && 1 === _0x46ba60.size;
                        },
                        'code': function (_0x495268) {
                            ;
                            return '\n            if(uv["' + _0x495268 + '"] !== ud["' + _0x495268 + '"].value)\n            {\n                ud["' + _0x495268 + '"].value = uv["' + _0x495268 + '"]\n                gl.uniform1f(ud["' + _0x495268 + '"].location, uv["' + _0x495268 + '"])\n            }\n            ';
                        }
                    },
                    {
                        'test': function (_0x14cdae) {
                            ;
                            return ('sampler2D' === _0x14cdae.type || 'samplerCube' === _0x14cdae.type || 'sampler2DArray' === _0x14cdae.type) && 1 === _0x14cdae.size && !_0x14cdae.isArray;
                        },
                        'code': function (_0x31532a) {
                            ;
                            return 't = syncData.textureCount++;\n\n            renderer.texture.bind(uv["' + _0x31532a + '"], t);\n\n            if(ud["' + _0x31532a + '"].value !== t)\n            {\n                ud["' + _0x31532a + '"].value = t;\n                gl.uniform1i(ud["' + _0x31532a + '"].location, t);\n; // eslint-disable-line max-len\n            }';
                        }
                    },
                    {
                        'test': function (_0x206c8b, _0x592769) {
                            ;
                            return 'mat3' === _0x206c8b.type && 1 === _0x206c8b.size && void 0 !== _0x592769.a;
                        },
                        'code': function (_0x4b4639) {
                            ;
                            return '\n            gl.uniformMatrix3fv(ud["' + _0x4b4639 + '"].location, false, uv["' + _0x4b4639 + '"].toArray(true));\n            ';
                        },
                        'codeUbo': function (_0x17f5d6) {
                            ;
                            return '\n                var ' + _0x17f5d6 + '_matrix = uv.' + _0x17f5d6 + '.toArray(true);\n\n                data[offset] = ' + _0x17f5d6 + '_matrix[0];\n                data[offset+1] = ' + _0x17f5d6 + '_matrix[1];\n                data[offset+2] = ' + _0x17f5d6 + '_matrix[2];\n        \n                data[offset + 4] = ' + _0x17f5d6 + '_matrix[3];\n                data[offset + 5] = ' + _0x17f5d6 + '_matrix[4];\n                data[offset + 6] = ' + _0x17f5d6 + '_matrix[5];\n        \n                data[offset + 8] = ' + _0x17f5d6 + '_matrix[6];\n                data[offset + 9] = ' + _0x17f5d6 + '_matrix[7];\n                data[offset + 10] = ' + _0x17f5d6 + '_matrix[8];\n            ';
                        }
                    },
                    {
                        'test': function (_0x3463dc, _0x5ddd15) {
                            ;
                            return 'vec2' === _0x3463dc.type && 1 === _0x3463dc.size && void 0 !== _0x5ddd15.x;
                        },
                        'code': function (_0x2d2f3e) {
                            ;
                            return '\n                cv = ud["' + _0x2d2f3e + '"].value;\n                v = uv["' + _0x2d2f3e + '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud["' + _0x2d2f3e + '"].location, v.x, v.y);\n                }';
                        },
                        'codeUbo': function (_0x5d5f40) {
                            ;
                            return '\n                v = uv.' + _0x5d5f40 + ';\n\n                data[offset] = v.x;\n                data[offset+1] = v.y;\n            ';
                        }
                    },
                    {
                        'test': function (_0x2dfa89) {
                            ;
                            return 'vec2' === _0x2dfa89.type && 1 === _0x2dfa89.size;
                        },
                        'code': function (_0x5ee2e5) {
                            ;
                            return '\n                cv = ud["' + _0x5ee2e5 + '"].value;\n                v = uv["' + _0x5ee2e5 + '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud["' + _0x5ee2e5 + '"].location, v[0], v[1]);\n                }\n            ';
                        }
                    },
                    {
                        'test': function (_0x26a664, _0x539ea0) {
                            ;
                            return 'vec4' === _0x26a664.type && 1 === _0x26a664.size && void 0 !== _0x539ea0.width;
                        },
                        'code': function (_0x58371b) {
                            ;
                            return '\n                cv = ud["' + _0x58371b + '"].value;\n                v = uv["' + _0x58371b + '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud["' + _0x58371b + '"].location, v.x, v.y, v.width, v.height)\n                }';
                        },
                        'codeUbo': function (_0x46aa44) {
                            ;
                            return '\n                    v = uv.' + _0x46aa44 + ';\n\n                    data[offset] = v.x;\n                    data[offset+1] = v.y;\n                    data[offset+2] = v.width;\n                    data[offset+3] = v.height;\n                ';
                        }
                    },
                    {
                        'test': function (_0x551802) {
                            ;
                            return 'vec4' === _0x551802.type && 1 === _0x551802.size;
                        },
                        'code': function (_0x4338c5) {
                            ;
                            return '\n                cv = ud["' + _0x4338c5 + '"].value;\n                v = uv["' + _0x4338c5 + '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud["' + _0x4338c5 + '"].location, v[0], v[1], v[2], v[3])\n                }';
                        }
                    }
                ], _0x57cf36 = {
                    'float': '\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1f(location, v);\n    }',
                    'vec2': '\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2f(location, v[0], v[1])\n    }',
                    'vec3': '\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }',
                    'vec4': '\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4f(location, v[0], v[1], v[2], v[3]);\n    }',
                    'int': '\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }',
                    'ivec2': '\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }',
                    'ivec3': '\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }',
                    'ivec4': '\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }',
                    'uint': '\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1ui(location, v);\n    }',
                    'uvec2': '\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2ui(location, v[0], v[1]);\n    }',
                    'uvec3': '\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3ui(location, v[0], v[1], v[2]);\n    }',
                    'uvec4': '\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);\n    }',
                    'bool': '\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1i(location, v);\n    }',
                    'bvec2': '\n    if (cv[0] != v[0] || cv[1] != v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }',
                    'bvec3': '\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }',
                    'bvec4': '\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }',
                    'mat2': 'gl.uniformMatrix2fv(location, false, v)',
                    'mat3': 'gl.uniformMatrix3fv(location, false, v)',
                    'mat4': 'gl.uniformMatrix4fv(location, false, v)',
                    'sampler2D': 'gl.uniform1i(location, v)',
                    'samplerCube': 'gl.uniform1i(location, v)',
                    'sampler2DArray': 'gl.uniform1i(location, v)'
                }, _0x5d12a8 = {
                    'float': 'gl.uniform1fv(location, v)',
                    'vec2': 'gl.uniform2fv(location, v)',
                    'vec3': 'gl.uniform3fv(location, v)',
                    'vec4': 'gl.uniform4fv(location, v)',
                    'mat4': 'gl.uniformMatrix4fv(location, false, v)',
                    'mat3': 'gl.uniformMatrix3fv(location, false, v)',
                    'mat2': 'gl.uniformMatrix2fv(location, false, v)',
                    'int': 'gl.uniform1iv(location, v)',
                    'ivec2': 'gl.uniform2iv(location, v)',
                    'ivec3': 'gl.uniform3iv(location, v)',
                    'ivec4': 'gl.uniform4iv(location, v)',
                    'uint': 'gl.uniform1uiv(location, v)',
                    'uvec2': 'gl.uniform2uiv(location, v)',
                    'uvec3': 'gl.uniform3uiv(location, v)',
                    'uvec4': 'gl.uniform4uiv(location, v)',
                    'bool': 'gl.uniform1iv(location, v)',
                    'bvec2': 'gl.uniform2iv(location, v)',
                    'bvec3': 'gl.uniform3iv(location, v)',
                    'bvec4': 'gl.uniform4iv(location, v)',
                    'sampler2D': 'gl.uniform1iv(location, v)',
                    'samplerCube': 'gl.uniform1iv(location, v)',
                    'sampler2DArray': 'gl.uniform1iv(location, v)'
                }, _0x1fd66e = [
                    'precision mediump float;',
                    'void main(void){',
                    'float test = 0.1;',
                    '%forloop%',
                    'gl_FragColor = vec4(0.0);',
                    '}'
                ].join('\n');
            function _0x2e5fbf(_0x49de95) {
                ;
                for (var _0x122fbe = '', _0x5284a4 = 0; _0x5284a4 < _0x49de95; ++_0x5284a4) {
                    _0x5284a4 > 0 && (_0x122fbe += '\nelse ');
                    _0x5284a4 < _0x49de95 - 1 && (_0x122fbe += 'if(test == ' + _0x5284a4 + '.0){}');
                }
                return _0x122fbe;
            }
            var _0x1a0be5 = 0, _0x28f147 = {}, _0x2eb48a = function () {
                    ;
                    function _0xe4b3a6(_0x73017a, _0x2e33ec, _0x538ef2) {
                        ;
                        void 0 === _0x538ef2 && (_0x538ef2 = 'pixi-shader');
                        this.id = _0x1a0be5++;
                        this.vertexSrc = _0x73017a || _0xe4b3a6.defaultVertexSrc;
                        this.fragmentSrc = _0x2e33ec || _0xe4b3a6.defaultFragmentSrc;
                        this.vertexSrc = this.vertexSrc.trim();
                        this.fragmentSrc = this.fragmentSrc.trim();
                        '#version' !== this.vertexSrc.substring(0, 8) && (_0x538ef2 = _0x538ef2.replace(/\s+/g, '-'), _0x28f147[_0x538ef2] ? (_0x28f147[_0x538ef2]++, _0x538ef2 += '-' + _0x28f147[_0x538ef2]) : _0x28f147[_0x538ef2] = 1, this.vertexSrc = '#define SHADER_NAME ' + _0x538ef2 + '\n' + this.vertexSrc, this.fragmentSrc = '#define SHADER_NAME ' + _0x538ef2 + '\n' + this.fragmentSrc, this.vertexSrc = _0xe2b255(this.vertexSrc, _0xa851a9.X.PRECISION_VERTEX, _0x589e0e.cB.HIGH), this.fragmentSrc = _0xe2b255(this.fragmentSrc, _0xa851a9.X.PRECISION_FRAGMENT, function () {
                            ;
                            if (!_0x19e74f) {
                                _0x19e74f = _0x589e0e.cB.MEDIUM;
                                var _0x4ff6a9 = function () {
                                    ;
                                    if (_0x136c77 === _0x13b7c4 || _0x136c77 && _0x136c77.isContextLost()) {
                                        var _0x4fa8f6 = document.createElement('canvas'), _0x36b600 = void 0;
                                        _0xa851a9.X.PREFER_ENV >= _0x589e0e.Vi.WEBGL2 && (_0x36b600 = _0x4fa8f6.getContext('webgl2', {}));
                                        _0x36b600 || ((_0x36b600 = _0x4fa8f6.getContext('webgl', {}) || _0x4fa8f6.getContext('experimental-webgl', {})) ? _0x36b600.getExtension('WEBGL_draw_buffers') : _0x36b600 = null);
                                        _0x136c77 = _0x36b600;
                                    }
                                    return _0x136c77;
                                }();
                                if (_0x4ff6a9 && _0x4ff6a9.getShaderPrecisionFormat) {
                                    var _0x2f633f = _0x4ff6a9.getShaderPrecisionFormat(_0x4ff6a9.FRAGMENT_SHADER, _0x4ff6a9.HIGH_FLOAT);
                                    _0x19e74f = _0x2f633f.precision ? _0x589e0e.cB.HIGH : _0x589e0e.cB.MEDIUM;
                                }
                            }
                            return _0x19e74f;
                        }()));
                        this.glPrograms = {};
                        this.syncUniforms = null;
                    }
                    return Object.defineProperty(_0xe4b3a6, 'defaultVertexSrc', {
                        'get': function () {
                            ;
                            return 'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n';
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0xe4b3a6, 'defaultFragmentSrc', {
                        'get': function () {
                            return 'varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}';
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0xe4b3a6.from = function (_0x587518, _0x38535a, _0x3da9b0) {
                        var _0x4c1d5e = _0x587518 + _0x38535a, _0x391247 = _0x2932e8.GG[_0x4c1d5e];
                        return _0x391247 || (_0x2932e8.GG[_0x4c1d5e] = _0x391247 = new _0xe4b3a6(_0x587518, _0x38535a, _0x3da9b0)), _0x391247;
                    }, _0xe4b3a6;
                }(), _0x3ba51c = function () {
                    ;
                    function _0x5cfa45(_0x4cfd41, _0x4aa2e7) {
                        ;
                        this.uniformBindCount = 0;
                        this.program = _0x4cfd41;
                        this.uniformGroup = _0x4aa2e7 ? _0x4aa2e7 instanceof _0x3c2d61 ? _0x4aa2e7 : new _0x3c2d61(_0x4aa2e7) : new _0x3c2d61({});
                    }
                    return _0x5cfa45.prototype.checkUniformExists = function (_0x544a35, _0x2d2d06) {
                        ;
                        if (_0x2d2d06.uniforms[_0x544a35]) {
                            return true;
                        }
                        for (var _0x246dd2 in _0x2d2d06.uniforms) {
                            var _0x2af12e = _0x2d2d06.uniforms[_0x246dd2];
                            if (_0x2af12e.group && this.checkUniformExists(_0x544a35, _0x2af12e)) {
                                return true;
                            }
                        }
                        return false;
                    }, _0x5cfa45.prototype.destroy = function () {
                        this.uniformGroup = null;
                    }, Object.defineProperty(_0x5cfa45.prototype, 'uniforms', {
                        'get': function () {
                            return this.uniformGroup.uniforms;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x5cfa45.from = function (_0x20590e, _0xa41798, _0x52b4cf) {
                        ;
                        return new _0x5cfa45(_0x2eb48a.from(_0x20590e, _0xa41798), _0x52b4cf);
                    }, _0x5cfa45;
                }(), _0x377a62 = function () {
                    ;
                    function _0x38a578() {
                        ;
                        this.data = 0;
                        this.blendMode = _0x589e0e['T$'].NORMAL;
                        this.polygonOffset = 0;
                        this.blend = true;
                        this.depthMask = true;
                    }
                    return Object.defineProperty(_0x38a578.prototype, 'blend', {
                        'get': function () {
                            return !!(1 & this.data);
                        },
                        'set': function (_0x5b60e8) {
                            ;
                            !!(1 & this.data) !== _0x5b60e8 && (this.data ^= 1);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x38a578.prototype, 'offsets', {
                        'get': function () {
                            ;
                            return !!(2 & this.data);
                        },
                        'set': function (_0x1088da) {
                            ;
                            !!(2 & this.data) !== _0x1088da && (this.data ^= 2);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x38a578.prototype, 'culling', {
                        'get': function () {
                            ;
                            return !!(4 & this.data);
                        },
                        'set': function (_0x1acd5b) {
                            ;
                            !!(4 & this.data) !== _0x1acd5b && (this.data ^= 4);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x38a578.prototype, 'depthTest', {
                        'get': function () {
                            ;
                            return !!(8 & this.data);
                        },
                        'set': function (_0x40b826) {
                            ;
                            !!(8 & this.data) !== _0x40b826 && (this.data ^= 8);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x38a578.prototype, 'depthMask', {
                        'get': function () {
                            ;
                            return !!(32 & this.data);
                        },
                        'set': function (_0x6bdc77) {
                            ;
                            !!(32 & this.data) !== _0x6bdc77 && (this.data ^= 32);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x38a578.prototype, 'clockwiseFrontFace', {
                        'get': function () {
                            ;
                            return !!(16 & this.data);
                        },
                        'set': function (_0x27f6ab) {
                            ;
                            !!(16 & this.data) !== _0x27f6ab && (this.data ^= 16);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x38a578.prototype, 'blendMode', {
                        'get': function () {
                            ;
                            return this['_blendMode'];
                        },
                        'set': function (_0x372c1b) {
                            ;
                            this.blend = _0x372c1b !== _0x589e0e['T$'].NONE;
                            this['_blendMode'] = _0x372c1b;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x38a578.prototype, 'polygonOffset', {
                        'get': function () {
                            ;
                            return this['_polygonOffset'];
                        },
                        'set': function (_0xbdf6f4) {
                            ;
                            this.offsets = !!_0xbdf6f4;
                            this['_polygonOffset'] = _0xbdf6f4;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x38a578.prototype.toString = function () {
                        ;
                        return '[@pixi/core:State blendMode=' + this.blendMode + ' clockwiseFrontFace=' + this.clockwiseFrontFace + ' culling=' + this.culling + ' depthMask=' + this.depthMask + ' polygonOffset=' + this.polygonOffset + ']';
                    }, _0x38a578.for2d = function () {
                        var _0x2b5414 = new _0x38a578();
                        return _0x2b5414.depthTest = false, _0x2b5414.blend = true, _0x2b5414;
                    }, _0x38a578;
                }(), _0x36e52c = function (_0x3d7f72) {
                    ;
                    function _0x3569f1(_0x680288, _0x247b81, _0x2ea56a) {
                        var _0xc62c56 = this, _0x56ccf1 = _0x2eb48a.from(_0x680288 || _0x3569f1.defaultVertexSrc, _0x247b81 || _0x3569f1.defaultFragmentSrc);
                        return (_0xc62c56 = _0x3d7f72.call(this, _0x56ccf1, _0x2ea56a) || this).padding = 0, _0xc62c56.resolution = _0xa851a9.X.FILTER_RESOLUTION, _0xc62c56.multisample = _0xa851a9.X.FILTER_MULTISAMPLE, _0xc62c56.enabled = true, _0xc62c56.autoFit = true, _0xc62c56.state = new _0x377a62(), _0xc62c56;
                    }
                    return _0x8b02be(_0x3569f1, _0x3d7f72), _0x3569f1.prototype.apply = function (_0xae18cb, _0x5c6898, _0x45bf9a, _0x13dfb9, _0x367360) {
                        ;
                        _0xae18cb.applyFilter(this, _0x5c6898, _0x45bf9a, _0x13dfb9);
                    }, Object.defineProperty(_0x3569f1.prototype, 'blendMode', {
                        'get': function () {
                            ;
                            return this.state.blendMode;
                        },
                        'set': function (_0x2ae4c9) {
                            ;
                            this.state.blendMode = _0x2ae4c9;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x3569f1.prototype, 'resolution', {
                        'get': function () {
                            ;
                            return this['_resolution'];
                        },
                        'set': function (_0x118dc0) {
                            this['_resolution'] = _0x118dc0;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x3569f1, 'defaultVertexSrc', {
                        'get': function () {
                            return 'attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n';
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x3569f1, 'defaultFragmentSrc', {
                        'get': function () {
                            ;
                            return 'varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n';
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x3569f1;
                }(_0x3ba51c), _0x3fbee5 = new _0x596cf7.y3(), _0x2fdcbc = function () {
                    ;
                    function _0x579e40(_0x493bd1, _0x490d6d) {
                        ;
                        this['_texture'] = _0x493bd1;
                        this.mapCoord = new _0x596cf7.y3();
                        this.uClampFrame = new Float32Array(4);
                        this.uClampOffset = new Float32Array(2);
                        this['_textureID'] = -1;
                        this['_updateID'] = 0;
                        this.clampOffset = 0;
                        this.clampMargin = void 0 === _0x490d6d ? 0.5 : _0x490d6d;
                        this.isSimple = false;
                    }
                    return Object.defineProperty(_0x579e40.prototype, 'texture', {
                        'get': function () {
                            ;
                            return this['_texture'];
                        },
                        'set': function (_0x5a6a9e) {
                            ;
                            this['_texture'] = _0x5a6a9e;
                            this['_textureID'] = -1;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x579e40.prototype.multiplyUvs = function (_0x553e39, _0x2b3eab) {
                        ;
                        void 0 === _0x2b3eab && (_0x2b3eab = _0x553e39);
                        for (var _0x990371 = this.mapCoord, _0x34e005 = 0; _0x34e005 < _0x553e39.length; _0x34e005 += 2) {
                            var _0x1a2c47 = _0x553e39[_0x34e005], _0x5866be = _0x553e39[_0x34e005 + 1];
                            _0x2b3eab[_0x34e005] = _0x1a2c47 * _0x990371.a + _0x5866be * _0x990371.c + _0x990371.tx;
                            _0x2b3eab[_0x34e005 + 1] = _0x1a2c47 * _0x990371.b + _0x5866be * _0x990371.d + _0x990371.ty;
                        }
                        return _0x2b3eab;
                    }, _0x579e40.prototype.update = function (_0xacdae1) {
                        var _0x554999 = this['_texture'];
                        if (!_0x554999 || !_0x554999.valid) {
                            return false;
                        }
                        if (!_0xacdae1 && this['_textureID'] === _0x554999['_updateID']) {
                            return false;
                        }
                        this['_textureID'] = _0x554999['_updateID'];
                        this['_updateID']++;
                        var _0x13fbf3 = _0x554999['_uvs'];
                        this.mapCoord.set(_0x13fbf3.x1 - _0x13fbf3.x0, _0x13fbf3.y1 - _0x13fbf3.y0, _0x13fbf3.x3 - _0x13fbf3.x0, _0x13fbf3.y3 - _0x13fbf3.y0, _0x13fbf3.x0, _0x13fbf3.y0);
                        var _0xeb2d6d = _0x554999.orig, _0x58ddf7 = _0x554999.trim;
                        _0x58ddf7 && (_0x3fbee5.set(_0xeb2d6d.width / _0x58ddf7.width, 0, 0, _0xeb2d6d.height / _0x58ddf7.height, -_0x58ddf7.x / _0x58ddf7.width, -_0x58ddf7.y / _0x58ddf7.height), this.mapCoord.append(_0x3fbee5));
                        var _0x538aa2 = _0x554999.baseTexture, _0x5343df = this.uClampFrame, _0x3ffbdb = this.clampMargin / _0x538aa2.resolution, _0xdddf10 = this.clampOffset;
                        return _0x5343df[0] = (_0x554999['_frame'].x + _0x3ffbdb + _0xdddf10) / _0x538aa2.width, _0x5343df[1] = (_0x554999['_frame'].y + _0x3ffbdb + _0xdddf10) / _0x538aa2.height, _0x5343df[2] = (_0x554999['_frame'].x + _0x554999['_frame'].width - _0x3ffbdb + _0xdddf10) / _0x538aa2.width, _0x5343df[3] = (_0x554999['_frame'].y + _0x554999['_frame'].height - _0x3ffbdb + _0xdddf10) / _0x538aa2.height, this.uClampOffset[0] = _0xdddf10 / _0x538aa2.realWidth, this.uClampOffset[1] = _0xdddf10 / _0x538aa2.realHeight, this.isSimple = _0x554999['_frame'].width === _0x538aa2.width && _0x554999['_frame'].height === _0x538aa2.height && 0 === _0x554999.rotate, true;
                    }, _0x579e40;
                }(), _0x5b6f43 = function (_0x5d58dd) {
                    ;
                    function _0x53c8d7(_0x51cb6f, _0x5abff5, _0x64aa22) {
                        var _0x46b7f2 = this, _0x34729c = null;
                        return 'string' != typeof _0x51cb6f && void 0 === _0x5abff5 && void 0 === _0x64aa22 && (_0x34729c = _0x51cb6f, _0x51cb6f = void 0, _0x5abff5 = void 0, _0x64aa22 = void 0), (_0x46b7f2 = _0x5d58dd.call(this, _0x51cb6f || 'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n', _0x5abff5 || 'varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n', _0x64aa22) || this).maskSprite = _0x34729c, _0x46b7f2.maskMatrix = new _0x596cf7.y3(), _0x46b7f2;
                    }
                    return _0x8b02be(_0x53c8d7, _0x5d58dd), Object.defineProperty(_0x53c8d7.prototype, 'maskSprite', {
                        'get': function () {
                            ;
                            return this['_maskSprite'];
                        },
                        'set': function (_0x1b4101) {
                            ;
                            this['_maskSprite'] = _0x1b4101;
                            this['_maskSprite'] && (this['_maskSprite'].renderable = false);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x53c8d7.prototype.apply = function (_0x12a92b, _0x56c6ee, _0x4ee351, _0x2be3c3) {
                        var _0xbb0038 = this['_maskSprite'], _0x197d30 = _0xbb0038['_texture'];
                        _0x197d30.valid && (_0x197d30.uvMatrix || (_0x197d30.uvMatrix = new _0x2fdcbc(_0x197d30, 0)), _0x197d30.uvMatrix.update(), this.uniforms.npmAlpha = _0x197d30.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = _0x197d30, this.uniforms.otherMatrix = _0x12a92b.calculateSpriteMatrix(this.maskMatrix, _0xbb0038).prepend(_0x197d30.uvMatrix.mapCoord), this.uniforms.alpha = _0xbb0038.worldAlpha, this.uniforms.maskClamp = _0x197d30.uvMatrix.uClampFrame, _0x12a92b.applyFilter(this, _0x56c6ee, _0x4ee351, _0x2be3c3));
                    }, _0x53c8d7;
                }(_0x36e52c), _0x67f4ab = function () {
                    ;
                    function _0x5b94ef(_0x343608) {
                        ;
                        this.renderer = _0x343608;
                        this.enableScissor = true;
                        this.alphaMaskPool = [];
                        this.maskDataPool = [];
                        this.maskStack = [];
                        this.alphaMaskIndex = 0;
                    }
                    return _0x5b94ef.prototype.setMaskStack = function (_0x3dbe93) {
                        ;
                        this.maskStack = _0x3dbe93;
                        this.renderer.scissor.setMaskStack(_0x3dbe93);
                        this.renderer.stencil.setMaskStack(_0x3dbe93);
                    }, _0x5b94ef.prototype.push = function (_0x15023d, _0x401ee6) {
                        var _0x1ec185 = _0x401ee6;
                        if (!_0x1ec185.isMaskData) {
                            var _0x169509 = this.maskDataPool.pop() || new _0x53fe84();
                            _0x169509.pooled = true;
                            _0x169509.maskObject = _0x401ee6;
                            _0x1ec185 = _0x169509;
                        }
                        var _0x10c6b2 = 0 !== this.maskStack.length ? this.maskStack[this.maskStack.length - 1] : null;
                        if (_0x1ec185.copyCountersOrReset(_0x10c6b2), _0x1ec185.autoDetect && this.detect(_0x1ec185), _0x1ec185['_target'] = _0x15023d, _0x1ec185.type !== _0x589e0e.A7.SPRITE && this.maskStack.push(_0x1ec185), _0x1ec185.enabled) {
                            switch (_0x1ec185.type) {
                            case _0x589e0e.A7.SCISSOR:
                                this.renderer.scissor.push(_0x1ec185);
                                break;
                            case _0x589e0e.A7.STENCIL:
                                this.renderer.stencil.push(_0x1ec185);
                                break;
                            case _0x589e0e.A7.SPRITE:
                                _0x1ec185.copyCountersOrReset(null), this.pushSpriteMask(_0x1ec185);
                            }
                        }
                        _0x1ec185.type === _0x589e0e.A7.SPRITE && this.maskStack.push(_0x1ec185);
                    }, _0x5b94ef.prototype.pop = function (_0x52213b) {
                        var _0x4bf6f5 = this.maskStack.pop();
                        if (_0x4bf6f5 && _0x4bf6f5['_target'] === _0x52213b) {
                            if (_0x4bf6f5.enabled) {
                                switch (_0x4bf6f5.type) {
                                case _0x589e0e.A7.SCISSOR:
                                    this.renderer.scissor.pop();
                                    break;
                                case _0x589e0e.A7.STENCIL:
                                    this.renderer.stencil.pop(_0x4bf6f5.maskObject);
                                    break;
                                case _0x589e0e.A7.SPRITE:
                                    this.popSpriteMask(_0x4bf6f5);
                                }
                            }
                            if (_0x4bf6f5.reset(), _0x4bf6f5.pooled && this.maskDataPool.push(_0x4bf6f5), 0 !== this.maskStack.length) {
                                var _0x41489a = this.maskStack[this.maskStack.length - 1];
                                _0x41489a.type === _0x589e0e.A7.SPRITE && _0x41489a['_filters'] && (_0x41489a['_filters'][0].maskSprite = _0x41489a.maskObject);
                            }
                        }
                    }, _0x5b94ef.prototype.detect = function (_0x120613) {
                        ;
                        _0x120613.maskObject.isSprite ? _0x120613.type = _0x589e0e.A7.SPRITE : this.enableScissor && this.renderer.scissor.testScissor(_0x120613) ? _0x120613.type = _0x589e0e.A7.SCISSOR : _0x120613.type = _0x589e0e.A7.STENCIL;
                    }, _0x5b94ef.prototype.pushSpriteMask = function (_0x234747) {
                        var _0x7db5dd, _0x410073, _0x5aaf09 = _0x234747.maskObject, _0x221d48 = _0x234747['_target'], _0x2d5d5d = _0x234747['_filters'];
                        _0x2d5d5d || (_0x2d5d5d = this.alphaMaskPool[this.alphaMaskIndex]) || (_0x2d5d5d = this.alphaMaskPool[this.alphaMaskIndex] = [new _0x5b6f43()]);
                        var _0x4b10d9, _0x16aef2, _0x336b75 = this.renderer, _0x33c100 = _0x336b75.renderTexture;
                        if (_0x33c100.current) {
                            var _0x1413c9 = _0x33c100.current;
                            _0x4b10d9 = _0x234747.resolution || _0x1413c9.resolution;
                            _0x16aef2 = null !== (_0x7db5dd = _0x234747.multisample) && void 0 !== _0x7db5dd ? _0x7db5dd : _0x1413c9.multisample;
                        } else {
                            _0x4b10d9 = _0x234747.resolution || _0x336b75.resolution;
                            _0x16aef2 = null !== (_0x410073 = _0x234747.multisample) && void 0 !== _0x410073 ? _0x410073 : _0x336b75.multisample;
                        }
                        _0x2d5d5d[0].resolution = _0x4b10d9;
                        _0x2d5d5d[0].multisample = _0x16aef2;
                        _0x2d5d5d[0].maskSprite = _0x5aaf09;
                        var _0x82f689 = _0x221d48.filterArea;
                        _0x221d48.filterArea = _0x5aaf09.getBounds(true);
                        _0x336b75.filter.push(_0x221d48, _0x2d5d5d);
                        _0x221d48.filterArea = _0x82f689;
                        _0x234747['_filters'] || this.alphaMaskIndex++;
                    }, _0x5b94ef.prototype.popSpriteMask = function (_0x1d07f5) {
                        ;
                        this.renderer.filter.pop();
                        _0x1d07f5['_filters'] ? _0x1d07f5['_filters'][0].maskSprite = null : (this.alphaMaskIndex--, this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null);
                    }, _0x5b94ef.prototype.destroy = function () {
                        ;
                        this.renderer = null;
                    }, _0x5b94ef;
                }(), _0x1d4fdb = function () {
                    ;
                    function _0x5254bb(_0x24de5e) {
                        ;
                        this.renderer = _0x24de5e;
                        this.maskStack = [];
                        this.glConst = 0;
                    }
                    return _0x5254bb.prototype.getStackLength = function () {
                        ;
                        return this.maskStack.length;
                    }, _0x5254bb.prototype.setMaskStack = function (_0x4950cc) {
                        var _0x375787 = this.renderer.gl, _0x683fcd = this.getStackLength();
                        this.maskStack = _0x4950cc;
                        var _0x522257 = this.getStackLength();
                        _0x522257 !== _0x683fcd && (0 === _0x522257 ? _0x375787.disable(this.glConst) : (_0x375787.enable(this.glConst), this['_useCurrent']()));
                    }, _0x5254bb.prototype['_useCurrent'] = function () {
                    }, _0x5254bb.prototype.destroy = function () {
                        ;
                        this.renderer = null;
                        this.maskStack = null;
                    }, _0x5254bb;
                }(), _0x1d2a3a = new _0x596cf7.y3(), _0x160d3c = function (_0x2f60e0) {
                    ;
                    function _0x227a6f(_0x31b333) {
                        var _0x2434b9 = _0x2f60e0.call(this, _0x31b333) || this;
                        return _0x2434b9.glConst = WebGLRenderingContext.SCISSOR_TEST, _0x2434b9;
                    }
                    return _0x8b02be(_0x227a6f, _0x2f60e0), _0x227a6f.prototype.getStackLength = function () {
                        var _0x592a41 = this.maskStack[this.maskStack.length - 1];
                        return _0x592a41 ? _0x592a41['_scissorCounter'] : 0;
                    }, _0x227a6f.prototype.calcScissorRect = function (_0x49552e) {
                        ;
                        if (!_0x49552e['_scissorRectLocal']) {
                            var _0x50d3ff = _0x49552e['_scissorRect'], _0xab1a8b = _0x49552e.maskObject, _0x41ea0b = this.renderer, _0x11dc08 = _0x41ea0b.renderTexture;
                            _0xab1a8b.renderable = true;
                            var _0x5708c6 = _0xab1a8b.getBounds();
                            this.roundFrameToPixels(_0x5708c6, _0x11dc08.current ? _0x11dc08.current.resolution : _0x41ea0b.resolution, _0x11dc08.sourceFrame, _0x11dc08.destinationFrame, _0x41ea0b.projection.transform);
                            _0xab1a8b.renderable = false;
                            _0x50d3ff && _0x5708c6.fit(_0x50d3ff);
                            _0x49552e['_scissorRectLocal'] = _0x5708c6;
                        }
                    }, _0x227a6f.isMatrixRotated = function (_0x222f61) {
                        ;
                        if (!_0x222f61) {
                            return false;
                        }
                        var _0x1174c3 = _0x222f61.a, _0x359659 = _0x222f61.b, _0x246d05 = _0x222f61.c, _0x1a0365 = _0x222f61.d;
                        return (Math.abs(_0x359659) > 0.0001 || Math.abs(_0x246d05) > 0.0001) && (Math.abs(_0x1174c3) > 0.0001 || Math.abs(_0x1a0365) > 0.0001);
                    }, _0x227a6f.prototype.testScissor = function (_0x369896) {
                        var _0x4cf4ad = _0x369896.maskObject;
                        if (!_0x4cf4ad.isFastRect || !_0x4cf4ad.isFastRect()) {
                            return false;
                        }
                        if (_0x227a6f.isMatrixRotated(_0x4cf4ad.worldTransform)) {
                            return false;
                        }
                        if (_0x227a6f.isMatrixRotated(this.renderer.projection.transform)) {
                            return false;
                        }
                        this.calcScissorRect(_0x369896);
                        var _0x3c76d3 = _0x369896['_scissorRectLocal'];
                        return _0x3c76d3.width > 0 && _0x3c76d3.height > 0;
                    }, _0x227a6f.prototype.roundFrameToPixels = function (_0x40ccfd, _0x3b3c4a, _0x5043b9, _0x52b07c, _0x16f7c6) {
                        ;
                        _0x227a6f.isMatrixRotated(_0x16f7c6) || ((_0x16f7c6 = _0x16f7c6 ? _0x1d2a3a.copyFrom(_0x16f7c6) : _0x1d2a3a.identity()).translate(-_0x5043b9.x, -_0x5043b9.y).scale(_0x52b07c.width / _0x5043b9.width, _0x52b07c.height / _0x5043b9.height).translate(_0x52b07c.x, _0x52b07c.y), this.renderer.filter.transformAABB(_0x16f7c6, _0x40ccfd), _0x40ccfd.fit(_0x52b07c), _0x40ccfd.x = Math.round(_0x40ccfd.x * _0x3b3c4a), _0x40ccfd.y = Math.round(_0x40ccfd.y * _0x3b3c4a), _0x40ccfd.width = Math.round(_0x40ccfd.width * _0x3b3c4a), _0x40ccfd.height = Math.round(_0x40ccfd.height * _0x3b3c4a));
                    }, _0x227a6f.prototype.push = function (_0x5813a7) {
                        ;
                        _0x5813a7['_scissorRectLocal'] || this.calcScissorRect(_0x5813a7);
                        var _0x45956a = this.renderer.gl;
                        _0x5813a7['_scissorRect'] || _0x45956a.enable(_0x45956a.SCISSOR_TEST);
                        _0x5813a7['_scissorCounter']++;
                        _0x5813a7['_scissorRect'] = _0x5813a7['_scissorRectLocal'];
                        this['_useCurrent']();
                    }, _0x227a6f.prototype.pop = function () {
                        var _0x213539 = this.renderer.gl;
                        this.getStackLength() > 0 ? this['_useCurrent']() : _0x213539.disable(_0x213539.SCISSOR_TEST);
                    }, _0x227a6f.prototype['_useCurrent'] = function () {
                        var _0x118513, _0x235871 = this.maskStack[this.maskStack.length - 1]['_scissorRect'];
                        _0x118513 = this.renderer.renderTexture.current ? _0x235871.y : this.renderer.height - _0x235871.height - _0x235871.y;
                        this.renderer.gl.scissor(_0x235871.x, _0x118513, _0x235871.width, _0x235871.height);
                    }, _0x227a6f;
                }(_0x1d4fdb), _0x5e9d43 = function (_0x10c245) {
                    ;
                    function _0xcddb3f(_0x111bab) {
                        var _0x1e3376 = _0x10c245.call(this, _0x111bab) || this;
                        return _0x1e3376.glConst = WebGLRenderingContext.STENCIL_TEST, _0x1e3376;
                    }
                    return _0x8b02be(_0xcddb3f, _0x10c245), _0xcddb3f.prototype.getStackLength = function () {
                        var _0x2d5efc = this.maskStack[this.maskStack.length - 1];
                        return _0x2d5efc ? _0x2d5efc['_stencilCounter'] : 0;
                    }, _0xcddb3f.prototype.push = function (_0x3b2eae) {
                        var _0x45ae74 = _0x3b2eae.maskObject, _0x36fd11 = this.renderer.gl, _0x2c4f63 = _0x3b2eae['_stencilCounter'];
                        0 === _0x2c4f63 && (this.renderer.framebuffer.forceStencil(), _0x36fd11.clearStencil(0), _0x36fd11.clear(_0x36fd11.STENCIL_BUFFER_BIT), _0x36fd11.enable(_0x36fd11.STENCIL_TEST));
                        _0x3b2eae['_stencilCounter']++;
                        _0x36fd11.colorMask(false, false, false, false);
                        _0x36fd11.stencilFunc(_0x36fd11.EQUAL, _0x2c4f63, 4294967295);
                        _0x36fd11.stencilOp(_0x36fd11.KEEP, _0x36fd11.KEEP, _0x36fd11.INCR);
                        _0x45ae74.renderable = true;
                        _0x45ae74.render(this.renderer);
                        this.renderer.batch.flush();
                        _0x45ae74.renderable = false;
                        this['_useCurrent']();
                    }, _0xcddb3f.prototype.pop = function (_0x4dc842) {
                        var _0x38e58b = this.renderer.gl;
                        0 === this.getStackLength() ? _0x38e58b.disable(_0x38e58b.STENCIL_TEST) : (_0x38e58b.colorMask(false, false, false, false), _0x38e58b.stencilOp(_0x38e58b.KEEP, _0x38e58b.KEEP, _0x38e58b.DECR), _0x4dc842.renderable = true, _0x4dc842.render(this.renderer), this.renderer.batch.flush(), _0x4dc842.renderable = false, this['_useCurrent']());
                    }, _0xcddb3f.prototype['_useCurrent'] = function () {
                        var _0x51bd73 = this.renderer.gl;
                        _0x51bd73.colorMask(true, true, true, true);
                        _0x51bd73.stencilFunc(_0x51bd73.EQUAL, this.getStackLength(), 4294967295);
                        _0x51bd73.stencilOp(_0x51bd73.KEEP, _0x51bd73.KEEP, _0x51bd73.KEEP);
                    }, _0xcddb3f;
                }(_0x1d4fdb), _0x2022e3 = function () {
                    ;
                    function _0x3a241d(_0xf2c90b) {
                        ;
                        this.renderer = _0xf2c90b;
                        this.destinationFrame = null;
                        this.sourceFrame = null;
                        this.defaultFrame = null;
                        this.projectionMatrix = new _0x596cf7.y3();
                        this.transform = null;
                    }
                    return _0x3a241d.prototype.update = function (_0x5ac053, _0x8e0bc9, _0x1a8a8f, _0x6db1e2) {
                        ;
                        this.destinationFrame = _0x5ac053 || this.destinationFrame || this.defaultFrame;
                        this.sourceFrame = _0x8e0bc9 || this.sourceFrame || _0x5ac053;
                        this.calculateProjection(this.destinationFrame, this.sourceFrame, _0x1a8a8f, _0x6db1e2);
                        this.transform && this.projectionMatrix.append(this.transform);
                        var _0x3ce084 = this.renderer;
                        _0x3ce084.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix;
                        _0x3ce084.globalUniforms.update();
                        _0x3ce084.shader.shader && _0x3ce084.shader.syncUniformGroup(_0x3ce084.shader.shader.uniforms.globals);
                    }, _0x3a241d.prototype.calculateProjection = function (_0x5b131b, _0x2cb9c9, _0x864ffb, _0x39b11f) {
                        var _0x444571 = this.projectionMatrix, _0x50b3c6 = _0x39b11f ? -1 : 1;
                        _0x444571.identity();
                        _0x444571.a = 1 / _0x2cb9c9.width * 2;
                        _0x444571.d = _0x50b3c6 * (1 / _0x2cb9c9.height * 2);
                        _0x444571.tx = -1 - _0x2cb9c9.x * _0x444571.a;
                        _0x444571.ty = -_0x50b3c6 - _0x2cb9c9.y * _0x444571.d;
                    }, _0x3a241d.prototype.setTransform = function (_0xb154d3) {
                    }, _0x3a241d.prototype.destroy = function () {
                        this.renderer = null;
                    }, _0x3a241d;
                }(), _0x49771b = new _0x596cf7.Ae(), _0x3c4a3c = new _0x596cf7.Ae(), _0x9a4066 = function () {
                    ;
                    function _0x569935(_0x1fd430) {
                        ;
                        this.renderer = _0x1fd430;
                        this.clearColor = _0x1fd430['_backgroundColorRgba'];
                        this.defaultMaskStack = [];
                        this.current = null;
                        this.sourceFrame = new _0x596cf7.Ae();
                        this.destinationFrame = new _0x596cf7.Ae();
                        this.viewportFrame = new _0x596cf7.Ae();
                    }
                    return _0x569935.prototype.bind = function (_0x4114aa, _0xdb086d, _0x2007ce) {
                        ;
                        void 0 === _0x4114aa && (_0x4114aa = null);
                        var _0x236b22, _0x211fff, _0x23f40c, _0x55c8f2 = this.renderer;
                        this.current = _0x4114aa;
                        _0x4114aa ? (_0x23f40c = (_0x236b22 = _0x4114aa.baseTexture).resolution, _0xdb086d || (_0x49771b.width = _0x4114aa.frame.width, _0x49771b.height = _0x4114aa.frame.height, _0xdb086d = _0x49771b), _0x2007ce || (_0x3c4a3c.x = _0x4114aa.frame.x, _0x3c4a3c.y = _0x4114aa.frame.y, _0x3c4a3c.width = _0xdb086d.width, _0x3c4a3c.height = _0xdb086d.height, _0x2007ce = _0x3c4a3c), _0x211fff = _0x236b22.framebuffer) : (_0x23f40c = _0x55c8f2.resolution, _0xdb086d || (_0x49771b.width = _0x55c8f2.screen.width, _0x49771b.height = _0x55c8f2.screen.height, _0xdb086d = _0x49771b), _0x2007ce || ((_0x2007ce = _0x49771b).width = _0xdb086d.width, _0x2007ce.height = _0xdb086d.height));
                        var _0x55fa36 = this.viewportFrame;
                        _0x55fa36.x = _0x2007ce.x * _0x23f40c;
                        _0x55fa36.y = _0x2007ce.y * _0x23f40c;
                        _0x55fa36.width = _0x2007ce.width * _0x23f40c;
                        _0x55fa36.height = _0x2007ce.height * _0x23f40c;
                        _0x4114aa || (_0x55fa36.y = _0x55c8f2.view.height - (_0x55fa36.y + _0x55fa36.height));
                        _0x55fa36.ceil();
                        this.renderer.framebuffer.bind(_0x211fff, _0x55fa36);
                        this.renderer.projection.update(_0x2007ce, _0xdb086d, _0x23f40c, !_0x211fff);
                        _0x4114aa ? this.renderer.mask.setMaskStack(_0x236b22.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack);
                        this.sourceFrame.copyFrom(_0xdb086d);
                        this.destinationFrame.copyFrom(_0x2007ce);
                    }, _0x569935.prototype.clear = function (_0x26d943, _0x3cd2cf) {
                        ;
                        _0x26d943 = this.current ? _0x26d943 || this.current.baseTexture.clearColor : _0x26d943 || this.clearColor;
                        var _0xdaaeed = this.destinationFrame, _0x3b1d05 = this.current ? this.current.baseTexture : this.renderer.screen, _0x419910 = _0xdaaeed.width !== _0x3b1d05.width || _0xdaaeed.height !== _0x3b1d05.height;
                        if (_0x419910) {
                            var _0x21e79d = this.viewportFrame, _0x1ea570 = _0x21e79d.x, _0x22b1d8 = _0x21e79d.y, _0x22b80d = _0x21e79d.width, _0x286548 = _0x21e79d.height;
                            _0x1ea570 = Math.round(_0x1ea570);
                            _0x22b1d8 = Math.round(_0x22b1d8);
                            _0x22b80d = Math.round(_0x22b80d);
                            _0x286548 = Math.round(_0x286548);
                            this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
                            this.renderer.gl.scissor(_0x1ea570, _0x22b1d8, _0x22b80d, _0x286548);
                        }
                        this.renderer.framebuffer.clear(_0x26d943[0], _0x26d943[1], _0x26d943[2], _0x26d943[3], _0x3cd2cf);
                        _0x419910 && this.renderer.scissor.pop();
                    }, _0x569935.prototype.resize = function () {
                        ;
                        this.bind(null);
                    }, _0x569935.prototype.reset = function () {
                        ;
                        this.bind(null);
                    }, _0x569935.prototype.destroy = function () {
                        ;
                        this.renderer = null;
                    }, _0x569935;
                }();
            function _0x180925(_0x57270e, _0x127892, _0x114822, _0x191adf, _0x144e35) {
                ;
                _0x114822.buffer.update(_0x144e35);
            }
            var _0x551db8 = {
                    'float': '\n        data[offset] = v;\n    ',
                    'vec2': '\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n    ',
                    'vec3': '\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n    ',
                    'vec4': '\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n        data[offset+3] = v[3];\n    ',
                    'mat2': '\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n\n        data[offset+4] = v[2];\n        data[offset+5] = v[3];\n    ',
                    'mat3': '\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n        data[offset + 4] = v[3];\n        data[offset + 5] = v[4];\n        data[offset + 6] = v[5];\n\n        data[offset + 8] = v[6];\n        data[offset + 9] = v[7];\n        data[offset + 10] = v[8];\n    ',
                    'mat4': '\n        for(var i = 0; i < 16; i++)\n        {\n            data[offset + i] = v[i];\n        }\n    '
                }, _0x2551da = function () {
                    ;
                    function _0x203a91(_0xdeb78c, _0x8fc3fd) {
                        ;
                        this.program = _0xdeb78c;
                        this.uniformData = _0x8fc3fd;
                        this.uniformGroups = {};
                        this.uniformDirtyGroups = {};
                        this.uniformBufferBindings = {};
                    }
                    return _0x203a91.prototype.destroy = function () {
                        ;
                        this.uniformData = null;
                        this.uniformGroups = null;
                        this.uniformDirtyGroups = null;
                        this.uniformBufferBindings = null;
                        this.program = null;
                    }, _0x203a91;
                }(), _0x303fc6 = 0, _0x487dea = function () {
                    ;
                    function _0x18de03(_0x1d07db) {
                        ;
                        this.destroyed = false;
                        this.renderer = _0x1d07db;
                        this.systemCheck();
                        this.gl = null;
                        this.shader = null;
                        this.program = null;
                        this.cache = {};
                        this['_uboCache'] = {};
                        this.id = _0x303fc6++;
                    }
                    return _0x18de03.prototype.systemCheck = function () {
                        ;
                        if (!function () {
                                ;
                                if ('boolean' == typeof _0xa16165) {
                                    return _0xa16165;
                                }
                                try {
                                    var _0x301408 = new Function('param1', 'param2', 'param3', 'return param1[param2] === param3;');
                                    _0xa16165 = true === _0x301408({ 'a': 'b' }, 'a', 'b');
                                } catch (_0xffd993) {
                                    _0xa16165 = false;
                                }
                                return _0xa16165;
                            }()) {
                            throw new Error('Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.');
                        }
                    }, _0x18de03.prototype.contextChange = function (_0x14fb66) {
                        this.gl = _0x14fb66;
                        this.reset();
                    }, _0x18de03.prototype.bind = function (_0x2d05c4, _0x18a3ea) {
                        ;
                        _0x2d05c4.uniforms.globals = this.renderer.globalUniforms;
                        var _0xa4fc3e = _0x2d05c4.program, _0x13b03f = _0xa4fc3e.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(_0x2d05c4);
                        return this.shader = _0x2d05c4, this.program !== _0xa4fc3e && (this.program = _0xa4fc3e, this.gl.useProgram(_0x13b03f.program)), _0x18a3ea || (_0x15713a.textureCount = 0, _0x15713a.uboCount = 0, this.syncUniformGroup(_0x2d05c4.uniformGroup, _0x15713a)), _0x13b03f;
                    }, _0x18de03.prototype.setUniforms = function (_0x179fce) {
                        var _0x2f6ddc = this.shader.program, _0x33e85f = _0x2f6ddc.glPrograms[this.renderer.CONTEXT_UID];
                        _0x2f6ddc.syncUniforms(_0x33e85f.uniformData, _0x179fce, this.renderer);
                    }, _0x18de03.prototype.syncUniformGroup = function (_0x4674db, _0x36c392) {
                        var _0x1e4e34 = this.getGlProgram();
                        _0x4674db.static && _0x4674db.dirtyId === _0x1e4e34.uniformDirtyGroups[_0x4674db.id] || (_0x1e4e34.uniformDirtyGroups[_0x4674db.id] = _0x4674db.dirtyId, this.syncUniforms(_0x4674db, _0x1e4e34, _0x36c392));
                    }, _0x18de03.prototype.syncUniforms = function (_0x3c8f24, _0x24c22d, _0x4a4203) {
                        ;
                        (_0x3c8f24.syncUniforms[this.shader.program.id] || this.createSyncGroups(_0x3c8f24))(_0x24c22d.uniformData, _0x3c8f24.uniforms, this.renderer, _0x4a4203);
                    }, _0x18de03.prototype.createSyncGroups = function (_0x1d462e) {
                        var _0x1f556f = this.getSignature(_0x1d462e, this.shader.program.uniformData, 'u');
                        return this.cache[_0x1f556f] || (this.cache[_0x1f556f] = function (_0x4f290b, _0x5c9243) {
                            var _0x160bc4, _0xa0530c = ['\n        var v = null;\n        var cv = null;\n        var cu = null;\n        var t = 0;\n        var gl = renderer.gl;\n    '];
                            for (var _0x53019b in _0x4f290b.uniforms) {
                                var _0x40f454 = _0x5c9243[_0x53019b];
                                if (_0x40f454) {
                                    for (var _0x5a6339 = _0x4f290b.uniforms[_0x53019b], _0x3b0b2f = false, _0x27a695 = 0; _0x27a695 < _0x2f31da.length; _0x27a695++) {
                                        if (_0x2f31da[_0x27a695].test(_0x40f454, _0x5a6339)) {
                                            _0xa0530c.push(_0x2f31da[_0x27a695].code(_0x53019b, _0x5a6339));
                                            _0x3b0b2f = true;
                                            break;
                                        }
                                    }
                                    if (!_0x3b0b2f) {
                                        var _0xaf1212 = (1 === _0x40f454.size ? _0x57cf36 : _0x5d12a8)[_0x40f454.type].replace('location', 'ud["' + _0x53019b + '"].location');
                                        _0xa0530c.push('\n            cu = ud["' + _0x53019b + '"];\n            cv = cu.value;\n            v = uv["' + _0x53019b + '"];\n            ' + _0xaf1212 + ';');
                                    }
                                } else {
                                    (null === (_0x160bc4 = _0x4f290b.uniforms[_0x53019b]) || void 0 === _0x160bc4 ? void 0 : _0x160bc4.group) && (_0x4f290b.uniforms[_0x53019b].ubo ? _0xa0530c.push('\n                        renderer.shader.syncUniformBufferGroup(uv.' + _0x53019b + ', \'' + _0x53019b + '\');\n                    ') : _0xa0530c.push('\n                        renderer.shader.syncUniformGroup(uv.' + _0x53019b + ', syncData);\n                    '));
                                }
                            }
                            return new Function('ud', 'uv', 'renderer', 'syncData', _0xa0530c.join('\n'));
                        }(_0x1d462e, this.shader.program.uniformData)), _0x1d462e.syncUniforms[this.shader.program.id] = this.cache[_0x1f556f], _0x1d462e.syncUniforms[this.shader.program.id];
                    }, _0x18de03.prototype.syncUniformBufferGroup = function (_0x4393d7, _0x334126) {
                        var _0x2119ff = this.getGlProgram();
                        if (!_0x4393d7.static || 0 !== _0x4393d7.dirtyId || !_0x2119ff.uniformGroups[_0x4393d7.id]) {
                            _0x4393d7.dirtyId = 0;
                            var _0x3e6f8c = _0x2119ff.uniformGroups[_0x4393d7.id] || this.createSyncBufferGroup(_0x4393d7, _0x2119ff, _0x334126);
                            _0x4393d7.buffer.update();
                            _0x3e6f8c(_0x2119ff.uniformData, _0x4393d7.uniforms, this.renderer, _0x15713a, _0x4393d7.buffer);
                        }
                        this.renderer.buffer.bindBufferBase(_0x4393d7.buffer, _0x2119ff.uniformBufferBindings[_0x334126]);
                    }, _0x18de03.prototype.createSyncBufferGroup = function (_0x508093, _0x217cc9, _0x426732) {
                        var _0x1c2332 = this.renderer.gl;
                        this.renderer.buffer.bind(_0x508093.buffer);
                        var _0x4dad44 = this.gl.getUniformBlockIndex(_0x217cc9.program, _0x426732);
                        _0x217cc9.uniformBufferBindings[_0x426732] = this.shader.uniformBindCount;
                        _0x1c2332.uniformBlockBinding(_0x217cc9.program, _0x4dad44, this.shader.uniformBindCount);
                        this.shader.uniformBindCount++;
                        var _0x50da54 = this.getSignature(_0x508093, this.shader.program.uniformData, 'ubo'), _0x5ef8b1 = this['_uboCache'][_0x50da54];
                        if (_0x5ef8b1 || (_0x5ef8b1 = this['_uboCache'][_0x50da54] = function (_0xe0cb45, _0x37c785) {
                                ;
                                if (!_0xe0cb45.autoManage) {
                                    return {
                                        'size': 0,
                                        'syncFunc': _0x180925
                                    };
                                }
                                for (var _0x31b6ba = function (_0x3bdf2b, _0x1c973a) {
                                            var _0x4a6248 = [];
                                            for (var _0x3d1af6 in _0x3bdf2b)
                                                _0x1c973a[_0x3d1af6] && _0x4a6248.push(_0x1c973a[_0x3d1af6]);
                                            return _0x4a6248.sort(function (_0x4d6a06, _0x2ee879) {
                                                ;
                                                return _0x4d6a06.index - _0x2ee879.index;
                                            }), _0x4a6248;
                                        }(_0xe0cb45.uniforms, _0x37c785), _0x557229 = function (_0x478a10) {
                                            ;
                                            for (var _0x97ce80 = _0x478a10.map(function (_0x45d1cb) {
                                                        return {
                                                            'data': _0x45d1cb,
                                                            'offset': 0,
                                                            'dataLen': 0,
                                                            'dirty': 0
                                                        };
                                                    }), _0x40f711 = 0, _0x200e6e = 0, _0x4b25f2 = 0, _0x58f8bd = 0; _0x58f8bd < _0x97ce80.length; _0x58f8bd++) {
                                                var _0x5769da = _0x97ce80[_0x58f8bd];
                                                if (_0x40f711 = _0x3cf71a[_0x5769da.data.type], _0x5769da.data.size > 1 && (_0x40f711 = Math.max(_0x40f711, 16) * _0x5769da.data.size), _0x5769da.dataLen = _0x40f711, _0x200e6e % _0x40f711 != 0 && _0x200e6e < 16) {
                                                    var _0x515ad8 = _0x200e6e % _0x40f711 % 16;
                                                    _0x200e6e += _0x515ad8;
                                                    _0x4b25f2 += _0x515ad8;
                                                }
                                                _0x200e6e + _0x40f711 > 16 ? (_0x4b25f2 = 16 * Math.ceil(_0x4b25f2 / 16), _0x5769da.offset = _0x4b25f2, _0x4b25f2 += _0x40f711, _0x200e6e = _0x40f711) : (_0x5769da.offset = _0x4b25f2, _0x200e6e += _0x40f711, _0x4b25f2 += _0x40f711);
                                            }
                                            return {
                                                'uboElements': _0x97ce80,
                                                'size': _0x4b25f2 = 16 * Math.ceil(_0x4b25f2 / 16)
                                            };
                                        }(_0x31b6ba), _0x4ccf78 = _0x557229.uboElements, _0x456ed0 = _0x557229.size, _0x227beb = ['\n    var v = null;\n    var v2 = null;\n    var cv = null;\n    var t = 0;\n    var gl = renderer.gl\n    var index = 0;\n    var data = buffer.data;\n    '], _0x30d936 = 0; _0x30d936 < _0x4ccf78.length; _0x30d936++) {
                                    for (var _0x4c9da8 = _0x4ccf78[_0x30d936], _0x5d2275 = _0xe0cb45.uniforms[_0x4c9da8.data.name], _0xe91496 = _0x4c9da8.data.name, _0x386534 = false, _0x3218fa = 0; _0x3218fa < _0x2f31da.length; _0x3218fa++) {
                                        var _0x3cc355 = _0x2f31da[_0x3218fa];
                                        if (_0x3cc355.codeUbo && _0x3cc355.test(_0x4c9da8.data, _0x5d2275)) {
                                            _0x227beb.push('offset = ' + _0x4c9da8.offset / 4 + ';', _0x2f31da[_0x3218fa].codeUbo(_0x4c9da8.data.name, _0x5d2275));
                                            _0x386534 = true;
                                            break;
                                        }
                                    }
                                    if (!_0x386534) {
                                        if (_0x4c9da8.data.size > 1) {
                                            var _0x3efb98 = _0x21a87f(_0x4c9da8.data.type), _0x55cd9f = Math.max(_0x3cf71a[_0x4c9da8.data.type] / 16, 1), _0x2221b7 = _0x3efb98 / _0x55cd9f, _0x4b660d = (4 - _0x2221b7 % 4) % 4;
                                            _0x227beb.push('\n                cv = ud.' + _0xe91496 + '.value;\n                v = uv.' + _0xe91496 + ';\n                offset = ' + _0x4c9da8.offset / 4 + ';\n\n                t = 0;\n\n                for(var i=0; i < ' + _0x4c9da8.data.size * _0x55cd9f + '; i++)\n                {\n                    for(var j = 0; j < ' + _0x2221b7 + '; j++)\n                    {\n                        data[offset++] = v[t++];\n                    }\n                    offset += ' + _0x4b660d + ';\n                }\n\n                ');
                                        } else {
                                            var _0x527cf6 = _0x551db8[_0x4c9da8.data.type];
                                            _0x227beb.push('\n                cv = ud.' + _0xe91496 + '.value;\n                v = uv.' + _0xe91496 + ';\n                offset = ' + _0x4c9da8.offset / 4 + ';\n                ' + _0x527cf6 + ';\n                ');
                                        }
                                    }
                                }
                                return _0x227beb.push('\n       renderer.buffer.update(buffer);\n    '), {
                                    'size': _0x456ed0,
                                    'syncFunc': new Function('ud', 'uv', 'renderer', 'syncData', 'buffer', _0x227beb.join('\n'))
                                };
                            }(_0x508093, this.shader.program.uniformData)), _0x508093.autoManage) {
                            var _0x1fbf13 = new Float32Array(_0x5ef8b1.size / 4);
                            _0x508093.buffer.update(_0x1fbf13);
                        }
                        return _0x217cc9.uniformGroups[_0x508093.id] = _0x5ef8b1.syncFunc, _0x217cc9.uniformGroups[_0x508093.id];
                    }, _0x18de03.prototype.getSignature = function (_0x25cc4d, _0x2b6e7b, _0x556142) {
                        var _0x197897 = _0x25cc4d.uniforms, _0x343eaa = [_0x556142 + '-'];
                        for (var _0xbee642 in _0x197897)
                            _0x343eaa.push(_0xbee642), _0x2b6e7b[_0xbee642] && _0x343eaa.push(_0x2b6e7b[_0xbee642].type);
                        return _0x343eaa.join('-');
                    }, _0x18de03.prototype.getGlProgram = function () {
                        ;
                        return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null;
                    }, _0x18de03.prototype.generateProgram = function (_0x4c74ae) {
                        var _0x30a527 = this.gl, _0x2f01d6 = _0x4c74ae.program, _0x4ca32f = function (_0x37e3bf, _0x2751f5) {
                                var _0x1cdc2d = _0x47c868(_0x37e3bf, _0x37e3bf.VERTEX_SHADER, _0x2751f5.vertexSrc), _0x1afac2 = _0x47c868(_0x37e3bf, _0x37e3bf.FRAGMENT_SHADER, _0x2751f5.fragmentSrc), _0x3c561a = _0x37e3bf.createProgram();
                                if (_0x37e3bf.attachShader(_0x3c561a, _0x1cdc2d), _0x37e3bf.attachShader(_0x3c561a, _0x1afac2), _0x37e3bf.linkProgram(_0x3c561a), _0x37e3bf.getProgramParameter(_0x3c561a, _0x37e3bf.LINK_STATUS) || function (_0x1caf36, _0x30ad8f, _0x107b2c, _0x20fe9a) {
                                        ;
                                        _0x1caf36.getProgramParameter(_0x30ad8f, _0x1caf36.LINK_STATUS) || (_0x1caf36.getShaderParameter(_0x107b2c, _0x1caf36.COMPILE_STATUS) || _0x4866a9(_0x1caf36, _0x107b2c), _0x1caf36.getShaderParameter(_0x20fe9a, _0x1caf36.COMPILE_STATUS) || _0x4866a9(_0x1caf36, _0x20fe9a), console.error('PixiJS Error: Could not initialize shader.'), '' !== _0x1caf36.getProgramInfoLog(_0x30ad8f) && console.warn('PixiJS Warning: gl.getProgramInfoLog()', _0x1caf36.getProgramInfoLog(_0x30ad8f)));
                                    }(_0x37e3bf, _0x3c561a, _0x1cdc2d, _0x1afac2), _0x2751f5.attributeData = function (_0x5ec67e, _0x17bec3) {
                                        ;
                                        for (var _0x1f1029 = {}, _0x5759dd = _0x17bec3.getProgramParameter(_0x5ec67e, _0x17bec3.ACTIVE_ATTRIBUTES), _0x1ccfab = 0; _0x1ccfab < _0x5759dd; _0x1ccfab++) {
                                            var _0x18b96f = _0x17bec3.getActiveAttrib(_0x5ec67e, _0x1ccfab);
                                            if (0 !== _0x18b96f.name.indexOf('gl_')) {
                                                var _0x543ab1 = _0x47c8cc(_0x17bec3, _0x18b96f.type), _0x23d6e2 = {
                                                        'type': _0x543ab1,
                                                        'name': _0x18b96f.name,
                                                        'size': _0x21a87f(_0x543ab1),
                                                        'location': _0x17bec3.getAttribLocation(_0x5ec67e, _0x18b96f.name)
                                                    };
                                                _0x1f1029[_0x18b96f.name] = _0x23d6e2;
                                            }
                                        }
                                        return _0x1f1029;
                                    }(_0x3c561a, _0x37e3bf), _0x2751f5.uniformData = function (_0x5ba5eb, _0x7a3526) {
                                        ;
                                        for (var _0xc01d33 = {
                                                    _0x1ccb50: {
                                                        'name': _0x1ccb50,
                                                        'index': _0x5ef83e,
                                                        'type': _0x1c6101,
                                                        'size': _0x4b4af3.size,
                                                        'isArray': _0x213e97,
                                                        'value': _0x5f5af7(_0x1c6101, _0x4b4af3.size)
                                                    }
                                                }, _0x42800b = _0x7a3526.getProgramParameter(_0x5ba5eb, _0x7a3526.ACTIVE_UNIFORMS), _0x5ef83e = 0; _0x5ef83e < _0x42800b; _0x5ef83e++) {
                                            var _0x4b4af3 = _0x7a3526.getActiveUniform(_0x5ba5eb, _0x5ef83e), _0x1ccb50 = _0x4b4af3.name.replace(/\[.*?\]$/, ''), _0x213e97 = !!_0x4b4af3.name.match(/\[.*?\]$/), _0x1c6101 = _0x47c8cc(_0x7a3526, _0x4b4af3.type);
                                            ;
                                        }
                                        return _0xc01d33;
                                    }(_0x3c561a, _0x37e3bf), !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(_0x2751f5.vertexSrc)) {
                                    var _0x337035 = Object.keys(_0x2751f5.attributeData);
                                    _0x337035.sort(function (_0xc74288, _0x20fd2a) {
                                        return _0xc74288 > _0x20fd2a ? 1 : -1;
                                    });
                                    for (var _0x419e9f = 0; _0x419e9f < _0x337035.length; _0x419e9f++) {
                                        _0x2751f5.attributeData[_0x337035[_0x419e9f]].location = _0x419e9f;
                                        _0x37e3bf.bindAttribLocation(_0x3c561a, _0x419e9f, _0x337035[_0x419e9f]);
                                    }
                                    _0x37e3bf.linkProgram(_0x3c561a);
                                }
                                _0x37e3bf.deleteShader(_0x1cdc2d);
                                _0x37e3bf.deleteShader(_0x1afac2);
                                var _0x66d3f0 = {
                                    _0x419e9f: {
                                        'location': _0x37e3bf.getUniformLocation(_0x3c561a, _0x419e9f),
                                        'value': _0x5f5af7(_0x4b3816.type, _0x4b3816.size)
                                    }
                                };
                                for (var _0x419e9f in _0x2751f5.uniformData) {
                                    var _0x4b3816 = _0x2751f5.uniformData[_0x419e9f];
                                    ;
                                }
                                return new _0x2551da(_0x3c561a, _0x66d3f0);
                            }(_0x30a527, _0x2f01d6);
                        return _0x2f01d6.glPrograms[this.renderer.CONTEXT_UID] = _0x4ca32f, _0x4ca32f;
                    }, _0x18de03.prototype.reset = function () {
                        ;
                        this.program = null;
                        this.shader = null;
                    }, _0x18de03.prototype.destroy = function () {
                        ;
                        this.renderer = null;
                        this.destroyed = true;
                    }, _0x18de03;
                }(), _0x2c3407 = function () {
                    ;
                    function _0x5bc7ea() {
                        ;
                        this.gl = null;
                        this.stateId = 0;
                        this.polygonOffset = 0;
                        this.blendMode = _0x589e0e['T$'].NONE;
                        this['_blendEq'] = false;
                        this.map = [];
                        this.map[0] = this.setBlend;
                        this.map[1] = this.setOffset;
                        this.map[2] = this.setCullFace;
                        this.map[3] = this.setDepthTest;
                        this.map[4] = this.setFrontFace;
                        this.map[5] = this.setDepthMask;
                        this.checks = [];
                        this.defaultState = new _0x377a62();
                        this.defaultState.blend = true;
                    }
                    return _0x5bc7ea.prototype.contextChange = function (_0x333ca9) {
                        ;
                        this.gl = _0x333ca9;
                        this.blendModes = function (_0x220cb4, _0x2389ad) {
                            ;
                            return void 0 === _0x2389ad && (_0x2389ad = []), _0x2389ad[_0x589e0e['T$'].NORMAL] = [
                                _0x220cb4.ONE,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].ADD] = [
                                _0x220cb4.ONE,
                                _0x220cb4.ONE
                            ], _0x2389ad[_0x589e0e['T$'].MULTIPLY] = [
                                _0x220cb4.DST_COLOR,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA,
                                _0x220cb4.ONE,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].SCREEN] = [
                                _0x220cb4.ONE,
                                _0x220cb4.ONE_MINUS_SRC_COLOR,
                                _0x220cb4.ONE,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].OVERLAY] = [
                                _0x220cb4.ONE,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].DARKEN] = [
                                _0x220cb4.ONE,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].LIGHTEN] = [
                                _0x220cb4.ONE,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].COLOR_DODGE] = [
                                _0x220cb4.ONE,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].COLOR_BURN] = [
                                _0x220cb4.ONE,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].HARD_LIGHT] = [
                                _0x220cb4.ONE,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].SOFT_LIGHT] = [
                                _0x220cb4.ONE,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].DIFFERENCE] = [
                                _0x220cb4.ONE,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].EXCLUSION] = [
                                _0x220cb4.ONE,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].HUE] = [
                                _0x220cb4.ONE,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].SATURATION] = [
                                _0x220cb4.ONE,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].COLOR] = [
                                _0x220cb4.ONE,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].LUMINOSITY] = [
                                _0x220cb4.ONE,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].NONE] = [
                                0,
                                0
                            ], _0x2389ad[_0x589e0e['T$'].NORMAL_NPM] = [
                                _0x220cb4.SRC_ALPHA,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA,
                                _0x220cb4.ONE,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].ADD_NPM] = [
                                _0x220cb4.SRC_ALPHA,
                                _0x220cb4.ONE,
                                _0x220cb4.ONE,
                                _0x220cb4.ONE
                            ], _0x2389ad[_0x589e0e['T$'].SCREEN_NPM] = [
                                _0x220cb4.SRC_ALPHA,
                                _0x220cb4.ONE_MINUS_SRC_COLOR,
                                _0x220cb4.ONE,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].SRC_IN] = [
                                _0x220cb4.DST_ALPHA,
                                _0x220cb4.ZERO
                            ], _0x2389ad[_0x589e0e['T$'].SRC_OUT] = [
                                _0x220cb4.ONE_MINUS_DST_ALPHA,
                                _0x220cb4.ZERO
                            ], _0x2389ad[_0x589e0e['T$'].SRC_ATOP] = [
                                _0x220cb4.DST_ALPHA,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].DST_OVER] = [
                                _0x220cb4.ONE_MINUS_DST_ALPHA,
                                _0x220cb4.ONE
                            ], _0x2389ad[_0x589e0e['T$'].DST_IN] = [
                                _0x220cb4.ZERO,
                                _0x220cb4.SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].DST_OUT] = [
                                _0x220cb4.ZERO,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].DST_ATOP] = [
                                _0x220cb4.ONE_MINUS_DST_ALPHA,
                                _0x220cb4.SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].XOR] = [
                                _0x220cb4.ONE_MINUS_DST_ALPHA,
                                _0x220cb4.ONE_MINUS_SRC_ALPHA
                            ], _0x2389ad[_0x589e0e['T$'].SUBTRACT] = [
                                _0x220cb4.ONE,
                                _0x220cb4.ONE,
                                _0x220cb4.ONE,
                                _0x220cb4.ONE,
                                _0x220cb4.FUNC_REVERSE_SUBTRACT,
                                _0x220cb4.FUNC_ADD
                            ], _0x2389ad;
                        }(_0x333ca9);
                        this.set(this.defaultState);
                        this.reset();
                    }, _0x5bc7ea.prototype.set = function (_0x438e) {
                        ;
                        if (_0x438e = _0x438e || this.defaultState, this.stateId !== _0x438e.data) {
                            for (var _0x5a9ac7 = this.stateId ^ _0x438e.data, _0x4201b7 = 0; _0x5a9ac7;) {
                                1 & _0x5a9ac7 && this.map[_0x4201b7].call(this, !!(_0x438e.data & 1 << _0x4201b7));
                                _0x5a9ac7 >>= 1;
                                _0x4201b7++;
                            }
                            this.stateId = _0x438e.data;
                        }
                        for (_0x4201b7 = 0; _0x4201b7 < this.checks.length; _0x4201b7++) {
                            this.checks[_0x4201b7](this, _0x438e);
                        }
                    }, _0x5bc7ea.prototype.forceState = function (_0x3af026) {
                        ;
                        _0x3af026 = _0x3af026 || this.defaultState;
                        for (var _0x31ab03 = 0; _0x31ab03 < this.map.length; _0x31ab03++) {
                            this.map[_0x31ab03].call(this, !!(_0x3af026.data & 1 << _0x31ab03));
                        }
                        for (_0x31ab03 = 0; _0x31ab03 < this.checks.length; _0x31ab03++) {
                            this.checks[_0x31ab03](this, _0x3af026);
                        }
                        this.stateId = _0x3af026.data;
                    }, _0x5bc7ea.prototype.setBlend = function (_0x287773) {
                        ;
                        this.updateCheck(_0x5bc7ea.checkBlendMode, _0x287773);
                        this.gl[_0x287773 ? 'enable' : 'disable'](this.gl.BLEND);
                    }, _0x5bc7ea.prototype.setOffset = function (_0x16d6d9) {
                        ;
                        this.updateCheck(_0x5bc7ea.checkPolygonOffset, _0x16d6d9);
                        this.gl[_0x16d6d9 ? 'enable' : 'disable'](this.gl.POLYGON_OFFSET_FILL);
                    }, _0x5bc7ea.prototype.setDepthTest = function (_0x349d60) {
                        ;
                        this.gl[_0x349d60 ? 'enable' : 'disable'](this.gl.DEPTH_TEST);
                    }, _0x5bc7ea.prototype.setDepthMask = function (_0x1ad3be) {
                        ;
                        this.gl.depthMask(_0x1ad3be);
                    }, _0x5bc7ea.prototype.setCullFace = function (_0x53f8c9) {
                        ;
                        this.gl[_0x53f8c9 ? 'enable' : 'disable'](this.gl.CULL_FACE);
                    }, _0x5bc7ea.prototype.setFrontFace = function (_0x24dad9) {
                        ;
                        this.gl.frontFace(this.gl[_0x24dad9 ? 'CW' : 'CCW']);
                    }, _0x5bc7ea.prototype.setBlendMode = function (_0x5270f0) {
                        ;
                        if (_0x5270f0 !== this.blendMode) {
                            this.blendMode = _0x5270f0;
                            var _0x519d24 = this.blendModes[_0x5270f0], _0x507b81 = this.gl;
                            2 === _0x519d24.length ? _0x507b81.blendFunc(_0x519d24[0], _0x519d24[1]) : _0x507b81.blendFuncSeparate(_0x519d24[0], _0x519d24[1], _0x519d24[2], _0x519d24[3]);
                            6 === _0x519d24.length ? (this['_blendEq'] = true, _0x507b81.blendEquationSeparate(_0x519d24[4], _0x519d24[5])) : this['_blendEq'] && (this['_blendEq'] = false, _0x507b81.blendEquationSeparate(_0x507b81.FUNC_ADD, _0x507b81.FUNC_ADD));
                        }
                    }, _0x5bc7ea.prototype.setPolygonOffset = function (_0x5b21d6, _0x3d0176) {
                        ;
                        this.gl.polygonOffset(_0x5b21d6, _0x3d0176);
                    }, _0x5bc7ea.prototype.reset = function () {
                        ;
                        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false);
                        this.forceState(this.defaultState);
                        this['_blendEq'] = true;
                        this.blendMode = -1;
                        this.setBlendMode(0);
                    }, _0x5bc7ea.prototype.updateCheck = function (_0x3905e3, _0x5bb0d7) {
                        var _0x1cd646 = this.checks.indexOf(_0x3905e3);
                        _0x5bb0d7 && -1 === _0x1cd646 ? this.checks.push(_0x3905e3) : _0x5bb0d7 || -1 === _0x1cd646 || this.checks.splice(_0x1cd646, 1);
                    }, _0x5bc7ea.checkBlendMode = function (_0x227b14, _0x24cad1) {
                        ;
                        _0x227b14.setBlendMode(_0x24cad1.blendMode);
                    }, _0x5bc7ea.checkPolygonOffset = function (_0x22ffbd, _0x1b300d) {
                        ;
                        _0x22ffbd.setPolygonOffset(1, _0x1b300d.polygonOffset);
                    }, _0x5bc7ea.prototype.destroy = function () {
                        this.gl = null;
                    }, _0x5bc7ea;
                }(), _0x4b0e61 = function () {
                    ;
                    function _0x13f90f(_0x8383b8) {
                        ;
                        this.renderer = _0x8383b8;
                        this.count = 0;
                        this.checkCount = 0;
                        this.maxIdle = _0xa851a9.X.GC_MAX_IDLE;
                        this.checkCountMax = _0xa851a9.X.GC_MAX_CHECK_COUNT;
                        this.mode = _0xa851a9.X.GC_MODE;
                    }
                    return _0x13f90f.prototype.postrender = function () {
                        ;
                        this.renderer.renderingToScreen && (this.count++, this.mode !== _0x589e0e.UN.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())));
                    }, _0x13f90f.prototype.run = function () {
                        ;
                        for (var _0x5f2a0f = this.renderer.texture, _0x135017 = _0x5f2a0f.managedTextures, _0x64764e = false, _0x59ce3e = 0; _0x59ce3e < _0x135017.length; _0x59ce3e++) {
                            var _0x5e7a70 = _0x135017[_0x59ce3e];
                            !_0x5e7a70.framebuffer && this.count - _0x5e7a70.touched > this.maxIdle && (_0x5f2a0f.destroyTexture(_0x5e7a70, true), _0x135017[_0x59ce3e] = null, _0x64764e = true);
                        }
                        if (_0x64764e) {
                            var _0x46f406 = 0;
                            for (_0x59ce3e = 0; _0x59ce3e < _0x135017.length; _0x59ce3e++) {
                                null !== _0x135017[_0x59ce3e] && (_0x135017[_0x46f406++] = _0x135017[_0x59ce3e]);
                            }
                            _0x135017.length = _0x46f406;
                        }
                    }, _0x13f90f.prototype.unload = function (_0x49c222) {
                        var _0xf37d54 = this.renderer.texture, _0x15f541 = _0x49c222['_texture'];
                        _0x15f541 && !_0x15f541.framebuffer && _0xf37d54.destroyTexture(_0x15f541);
                        for (var _0x275272 = _0x49c222.children.length - 1; _0x275272 >= 0; _0x275272--) {
                            this.unload(_0x49c222.children[_0x275272]);
                        }
                    }, _0x13f90f.prototype.destroy = function () {
                        ;
                        this.renderer = null;
                    }, _0x13f90f;
                }(), _0x40953b = function (_0x280143) {
                    ;
                    this.texture = _0x280143;
                    this.width = -1;
                    this.height = -1;
                    this.dirtyId = -1;
                    this.dirtyStyleId = -1;
                    this.mipmap = false;
                    this.wrapMode = 33071;
                    this.type = _0x589e0e.vK.UNSIGNED_BYTE;
                    this.internalFormat = _0x589e0e.I2.RGBA;
                    this.samplerType = 0;
                }, _0x3b6de7 = function () {
                    ;
                    function _0x480261(_0xc3d222) {
                        ;
                        this.renderer = _0xc3d222;
                        this.boundTextures = [];
                        this.currentLocation = -1;
                        this.managedTextures = [];
                        this['_unknownBoundTextures'] = false;
                        this.unknownTexture = new _0x496d39();
                        this.hasIntegerTextures = false;
                    }
                    return _0x480261.prototype.contextChange = function () {
                        var _0x5e30d5 = this.gl = this.renderer.gl;
                        this.CONTEXT_UID = this.renderer.CONTEXT_UID;
                        this.webGLVersion = this.renderer.context.webGLVersion;
                        this.internalFormats = function (_0x3402e0) {
                            var _0x4f6f48, _0x4f3225, _0x41861d, _0x443aa3, _0x596730, _0x1653b6, _0x3db8c3, _0x51a5fc, _0x480249, _0x2ea16c, _0x142261, _0x32d760, _0x41648d, _0x4069f3, _0x2baddb, _0x15310a, _0x26b903, _0x4f626f, _0x5b5ff4, _0x168494, _0x20fd70, _0x103c45, _0x9a24f5;
                            return 'WebGL2RenderingContext' in globalThis && _0x3402e0 instanceof globalThis.WebGL2RenderingContext ? ((_0x4f6f48 = {})[_0x589e0e.vK.UNSIGNED_BYTE] = ((_0x4f3225 = {})[_0x589e0e.I2.RGBA] = _0x3402e0.RGBA8, _0x4f3225[_0x589e0e.I2.RGB] = _0x3402e0.RGB8, _0x4f3225[_0x589e0e.I2.RG] = _0x3402e0.RG8, _0x4f3225[_0x589e0e.I2.RED] = _0x3402e0.R8, _0x4f3225[_0x589e0e.I2.RGBA_INTEGER] = _0x3402e0.RGBA8UI, _0x4f3225[_0x589e0e.I2.RGB_INTEGER] = _0x3402e0.RGB8UI, _0x4f3225[_0x589e0e.I2.RG_INTEGER] = _0x3402e0.RG8UI, _0x4f3225[_0x589e0e.I2.RED_INTEGER] = _0x3402e0.R8UI, _0x4f3225[_0x589e0e.I2.ALPHA] = _0x3402e0.ALPHA, _0x4f3225[_0x589e0e.I2.LUMINANCE] = _0x3402e0.LUMINANCE, _0x4f3225[_0x589e0e.I2.LUMINANCE_ALPHA] = _0x3402e0.LUMINANCE_ALPHA, _0x4f3225), _0x4f6f48[_0x589e0e.vK.BYTE] = ((_0x41861d = {})[_0x589e0e.I2.RGBA] = _0x3402e0.RGBA8_SNORM, _0x41861d[_0x589e0e.I2.RGB] = _0x3402e0.RGB8_SNORM, _0x41861d[_0x589e0e.I2.RG] = _0x3402e0.RG8_SNORM, _0x41861d[_0x589e0e.I2.RED] = _0x3402e0.R8_SNORM, _0x41861d[_0x589e0e.I2.RGBA_INTEGER] = _0x3402e0.RGBA8I, _0x41861d[_0x589e0e.I2.RGB_INTEGER] = _0x3402e0.RGB8I, _0x41861d[_0x589e0e.I2.RG_INTEGER] = _0x3402e0.RG8I, _0x41861d[_0x589e0e.I2.RED_INTEGER] = _0x3402e0.R8I, _0x41861d), _0x4f6f48[_0x589e0e.vK.UNSIGNED_SHORT] = ((_0x443aa3 = {})[_0x589e0e.I2.RGBA_INTEGER] = _0x3402e0.RGBA16UI, _0x443aa3[_0x589e0e.I2.RGB_INTEGER] = _0x3402e0.RGB16UI, _0x443aa3[_0x589e0e.I2.RG_INTEGER] = _0x3402e0.RG16UI, _0x443aa3[_0x589e0e.I2.RED_INTEGER] = _0x3402e0.R16UI, _0x443aa3[_0x589e0e.I2.DEPTH_COMPONENT] = _0x3402e0.DEPTH_COMPONENT16, _0x443aa3), _0x4f6f48[_0x589e0e.vK.SHORT] = ((_0x596730 = {})[_0x589e0e.I2.RGBA_INTEGER] = _0x3402e0.RGBA16I, _0x596730[_0x589e0e.I2.RGB_INTEGER] = _0x3402e0.RGB16I, _0x596730[_0x589e0e.I2.RG_INTEGER] = _0x3402e0.RG16I, _0x596730[_0x589e0e.I2.RED_INTEGER] = _0x3402e0.R16I, _0x596730), _0x4f6f48[_0x589e0e.vK.UNSIGNED_INT] = ((_0x1653b6 = {})[_0x589e0e.I2.RGBA_INTEGER] = _0x3402e0.RGBA32UI, _0x1653b6[_0x589e0e.I2.RGB_INTEGER] = _0x3402e0.RGB32UI, _0x1653b6[_0x589e0e.I2.RG_INTEGER] = _0x3402e0.RG32UI, _0x1653b6[_0x589e0e.I2.RED_INTEGER] = _0x3402e0.R32UI, _0x1653b6[_0x589e0e.I2.DEPTH_COMPONENT] = _0x3402e0.DEPTH_COMPONENT24, _0x1653b6), _0x4f6f48[_0x589e0e.vK.INT] = ((_0x3db8c3 = {})[_0x589e0e.I2.RGBA_INTEGER] = _0x3402e0.RGBA32I, _0x3db8c3[_0x589e0e.I2.RGB_INTEGER] = _0x3402e0.RGB32I, _0x3db8c3[_0x589e0e.I2.RG_INTEGER] = _0x3402e0.RG32I, _0x3db8c3[_0x589e0e.I2.RED_INTEGER] = _0x3402e0.R32I, _0x3db8c3), _0x4f6f48[_0x589e0e.vK.FLOAT] = ((_0x51a5fc = {})[_0x589e0e.I2.RGBA] = _0x3402e0.RGBA32F, _0x51a5fc[_0x589e0e.I2.RGB] = _0x3402e0.RGB32F, _0x51a5fc[_0x589e0e.I2.RG] = _0x3402e0.RG32F, _0x51a5fc[_0x589e0e.I2.RED] = _0x3402e0.R32F, _0x51a5fc[_0x589e0e.I2.DEPTH_COMPONENT] = _0x3402e0.DEPTH_COMPONENT32F, _0x51a5fc), _0x4f6f48[_0x589e0e.vK.HALF_FLOAT] = ((_0x480249 = {})[_0x589e0e.I2.RGBA] = _0x3402e0.RGBA16F, _0x480249[_0x589e0e.I2.RGB] = _0x3402e0.RGB16F, _0x480249[_0x589e0e.I2.RG] = _0x3402e0.RG16F, _0x480249[_0x589e0e.I2.RED] = _0x3402e0.R16F, _0x480249), _0x4f6f48[_0x589e0e.vK.UNSIGNED_SHORT_5_6_5] = ((_0x2ea16c = {})[_0x589e0e.I2.RGB] = _0x3402e0.RGB565, _0x2ea16c), _0x4f6f48[_0x589e0e.vK.UNSIGNED_SHORT_4_4_4_4] = ((_0x142261 = {})[_0x589e0e.I2.RGBA] = _0x3402e0.RGBA4, _0x142261), _0x4f6f48[_0x589e0e.vK.UNSIGNED_SHORT_5_5_5_1] = ((_0x32d760 = {})[_0x589e0e.I2.RGBA] = _0x3402e0.RGB5_A1, _0x32d760), _0x4f6f48[_0x589e0e.vK.UNSIGNED_INT_2_10_10_10_REV] = ((_0x41648d = {})[_0x589e0e.I2.RGBA] = _0x3402e0.RGB10_A2, _0x41648d[_0x589e0e.I2.RGBA_INTEGER] = _0x3402e0.RGB10_A2UI, _0x41648d), _0x4f6f48[_0x589e0e.vK.UNSIGNED_INT_10F_11F_11F_REV] = ((_0x4069f3 = {})[_0x589e0e.I2.RGB] = _0x3402e0.R11F_G11F_B10F, _0x4069f3), _0x4f6f48[_0x589e0e.vK.UNSIGNED_INT_5_9_9_9_REV] = ((_0x2baddb = {})[_0x589e0e.I2.RGB] = _0x3402e0.RGB9_E5, _0x2baddb), _0x4f6f48[_0x589e0e.vK.UNSIGNED_INT_24_8] = ((_0x15310a = {})[_0x589e0e.I2.DEPTH_STENCIL] = _0x3402e0.DEPTH24_STENCIL8, _0x15310a), _0x4f6f48[_0x589e0e.vK.FLOAT_32_UNSIGNED_INT_24_8_REV] = ((_0x26b903 = {})[_0x589e0e.I2.DEPTH_STENCIL] = _0x3402e0.DEPTH32F_STENCIL8, _0x26b903), _0x9a24f5 = _0x4f6f48) : ((_0x4f626f = {})[_0x589e0e.vK.UNSIGNED_BYTE] = ((_0x5b5ff4 = {})[_0x589e0e.I2.RGBA] = _0x3402e0.RGBA, _0x5b5ff4[_0x589e0e.I2.RGB] = _0x3402e0.RGB, _0x5b5ff4[_0x589e0e.I2.ALPHA] = _0x3402e0.ALPHA, _0x5b5ff4[_0x589e0e.I2.LUMINANCE] = _0x3402e0.LUMINANCE, _0x5b5ff4[_0x589e0e.I2.LUMINANCE_ALPHA] = _0x3402e0.LUMINANCE_ALPHA, _0x5b5ff4), _0x4f626f[_0x589e0e.vK.UNSIGNED_SHORT_5_6_5] = ((_0x168494 = {})[_0x589e0e.I2.RGB] = _0x3402e0.RGB, _0x168494), _0x4f626f[_0x589e0e.vK.UNSIGNED_SHORT_4_4_4_4] = ((_0x20fd70 = {})[_0x589e0e.I2.RGBA] = _0x3402e0.RGBA, _0x20fd70), _0x4f626f[_0x589e0e.vK.UNSIGNED_SHORT_5_5_5_1] = ((_0x103c45 = {})[_0x589e0e.I2.RGBA] = _0x3402e0.RGBA, _0x103c45), _0x9a24f5 = _0x4f626f), _0x9a24f5;
                        }(_0x5e30d5);
                        var _0x39fedc = _0x5e30d5.getParameter(_0x5e30d5.MAX_TEXTURE_IMAGE_UNITS);
                        this.boundTextures.length = _0x39fedc;
                        for (var _0x474783 = 0; _0x474783 < _0x39fedc; _0x474783++) {
                            this.boundTextures[_0x474783] = null;
                        }
                        this.emptyTextures = {};
                        var _0x1187c4 = new _0x40953b(_0x5e30d5.createTexture());
                        for (_0x5e30d5.bindTexture(_0x5e30d5.TEXTURE_2D, _0x1187c4.texture), _0x5e30d5.texImage2D(_0x5e30d5.TEXTURE_2D, 0, _0x5e30d5.RGBA, 1, 1, 0, _0x5e30d5.RGBA, _0x5e30d5.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[_0x5e30d5.TEXTURE_2D] = _0x1187c4, this.emptyTextures[_0x5e30d5.TEXTURE_CUBE_MAP] = new _0x40953b(_0x5e30d5.createTexture()), _0x5e30d5.bindTexture(_0x5e30d5.TEXTURE_CUBE_MAP, this.emptyTextures[_0x5e30d5.TEXTURE_CUBE_MAP].texture), _0x474783 = 0; _0x474783 < 6; _0x474783++) {
                            _0x5e30d5.texImage2D(_0x5e30d5.TEXTURE_CUBE_MAP_POSITIVE_X + _0x474783, 0, _0x5e30d5.RGBA, 1, 1, 0, _0x5e30d5.RGBA, _0x5e30d5.UNSIGNED_BYTE, null);
                        }
                        for (_0x5e30d5.texParameteri(_0x5e30d5.TEXTURE_CUBE_MAP, _0x5e30d5.TEXTURE_MAG_FILTER, _0x5e30d5.LINEAR), _0x5e30d5.texParameteri(_0x5e30d5.TEXTURE_CUBE_MAP, _0x5e30d5.TEXTURE_MIN_FILTER, _0x5e30d5.LINEAR), _0x474783 = 0; _0x474783 < this.boundTextures.length; _0x474783++) {
                            this.bind(null, _0x474783);
                        }
                    }, _0x480261.prototype.bind = function (_0x3d3108, _0x436403) {
                        ;
                        void 0 === _0x436403 && (_0x436403 = 0);
                        var _0x2dfc27 = this.gl;
                        if ((_0x3d3108 = null == _0x3d3108 ? void 0 : _0x3d3108.castToBaseTexture()) && _0x3d3108.valid && !_0x3d3108.parentTextureArray) {
                            _0x3d3108.touched = this.renderer.textureGC.count;
                            var _0x152d26 = _0x3d3108['_glTextures'][this.CONTEXT_UID] || this.initTexture(_0x3d3108);
                            this.boundTextures[_0x436403] !== _0x3d3108 && (this.currentLocation !== _0x436403 && (this.currentLocation = _0x436403, _0x2dfc27.activeTexture(_0x2dfc27.TEXTURE0 + _0x436403)), _0x2dfc27.bindTexture(_0x3d3108.target, _0x152d26.texture));
                            _0x152d26.dirtyId !== _0x3d3108.dirtyId && (this.currentLocation !== _0x436403 && (this.currentLocation = _0x436403, _0x2dfc27.activeTexture(_0x2dfc27.TEXTURE0 + _0x436403)), this.updateTexture(_0x3d3108));
                            this.boundTextures[_0x436403] = _0x3d3108;
                        } else {
                            this.currentLocation !== _0x436403 && (this.currentLocation = _0x436403, _0x2dfc27.activeTexture(_0x2dfc27.TEXTURE0 + _0x436403));
                            _0x2dfc27.bindTexture(_0x2dfc27.TEXTURE_2D, this.emptyTextures[_0x2dfc27.TEXTURE_2D].texture);
                            this.boundTextures[_0x436403] = null;
                        }
                    }, _0x480261.prototype.reset = function () {
                        ;
                        this['_unknownBoundTextures'] = true;
                        this.hasIntegerTextures = false;
                        this.currentLocation = -1;
                        for (var _0x3b2b72 = 0; _0x3b2b72 < this.boundTextures.length; _0x3b2b72++) {
                            this.boundTextures[_0x3b2b72] = this.unknownTexture;
                        }
                    }, _0x480261.prototype.unbind = function (_0x4138e7) {
                        var _0x539e45 = this.gl, _0x306dca = this.boundTextures;
                        if (this['_unknownBoundTextures']) {
                            this['_unknownBoundTextures'] = false;
                            for (var _0x31b6a4 = 0; _0x31b6a4 < _0x306dca.length; _0x31b6a4++) {
                                _0x306dca[_0x31b6a4] === this.unknownTexture && this.bind(null, _0x31b6a4);
                            }
                        }
                        for (_0x31b6a4 = 0; _0x31b6a4 < _0x306dca.length; _0x31b6a4++) {
                            _0x306dca[_0x31b6a4] === _0x4138e7 && (this.currentLocation !== _0x31b6a4 && (_0x539e45.activeTexture(_0x539e45.TEXTURE0 + _0x31b6a4), this.currentLocation = _0x31b6a4), _0x539e45.bindTexture(_0x4138e7.target, this.emptyTextures[_0x4138e7.target].texture), _0x306dca[_0x31b6a4] = null);
                        }
                    }, _0x480261.prototype.ensureSamplerType = function (_0x4aa62c) {
                        var _0x468c56 = this, _0x1332ae = _0x468c56.boundTextures, _0x54d452 = _0x468c56.hasIntegerTextures, _0x52fe79 = _0x468c56.CONTEXT_UID;
                        if (_0x54d452) {
                            for (var _0x51048b = _0x4aa62c - 1; _0x51048b >= 0; --_0x51048b) {
                                var _0x5d9c9b = _0x1332ae[_0x51048b];
                                _0x5d9c9b && _0x5d9c9b['_glTextures'][_0x52fe79].samplerType !== _0x589e0e.oT.FLOAT && this.renderer.texture.unbind(_0x5d9c9b);
                            }
                        }
                    }, _0x480261.prototype.initTexture = function (_0xe6a7a8) {
                        var _0x61f565 = new _0x40953b(this.gl.createTexture());
                        return _0x61f565.dirtyId = -1, _0xe6a7a8['_glTextures'][this.CONTEXT_UID] = _0x61f565, this.managedTextures.push(_0xe6a7a8), _0xe6a7a8.on('dispose', this.destroyTexture, this), _0x61f565;
                    }, _0x480261.prototype.initTextureType = function (_0xbff5bb, _0x41237d) {
                        var _0x145282, _0x4dbb5f;
                        _0x41237d.internalFormat = null !== (_0x4dbb5f = null === (_0x145282 = this.internalFormats[_0xbff5bb.type]) || void 0 === _0x145282 ? void 0 : _0x145282[_0xbff5bb.format]) && void 0 !== _0x4dbb5f ? _0x4dbb5f : _0xbff5bb.format;
                        2 === this.webGLVersion && _0xbff5bb.type === _0x589e0e.vK.HALF_FLOAT ? _0x41237d.type = this.gl.HALF_FLOAT : _0x41237d.type = _0xbff5bb.type;
                    }, _0x480261.prototype.updateTexture = function (_0x4d142e) {
                        var _0x18bdf6 = _0x4d142e['_glTextures'][this.CONTEXT_UID];
                        if (_0x18bdf6) {
                            var _0x39afe8 = this.renderer;
                            if (this.initTextureType(_0x4d142e, _0x18bdf6), _0x4d142e.resource && _0x4d142e.resource.upload(_0x39afe8, _0x4d142e, _0x18bdf6)) {
                                _0x18bdf6.samplerType !== _0x589e0e.oT.FLOAT && (this.hasIntegerTextures = true);
                            } else {
                                var _0x129260 = _0x4d142e.realWidth, _0x4a1410 = _0x4d142e.realHeight, _0x1e303b = _0x39afe8.gl;
                                (_0x18bdf6.width !== _0x129260 || _0x18bdf6.height !== _0x4a1410 || _0x18bdf6.dirtyId < 0) && (_0x18bdf6.width = _0x129260, _0x18bdf6.height = _0x4a1410, _0x1e303b.texImage2D(_0x4d142e.target, 0, _0x18bdf6.internalFormat, _0x129260, _0x4a1410, 0, _0x4d142e.format, _0x18bdf6.type, null));
                            }
                            _0x4d142e.dirtyStyleId !== _0x18bdf6.dirtyStyleId && this.updateTextureStyle(_0x4d142e);
                            _0x18bdf6.dirtyId = _0x4d142e.dirtyId;
                        }
                    }, _0x480261.prototype.destroyTexture = function (_0x272fcc, _0x10dd45) {
                        var _0x618c5a = this.gl;
                        if ((_0x272fcc = _0x272fcc.castToBaseTexture())['_glTextures'][this.CONTEXT_UID] && (this.unbind(_0x272fcc), _0x618c5a.deleteTexture(_0x272fcc['_glTextures'][this.CONTEXT_UID].texture), _0x272fcc.off('dispose', this.destroyTexture, this), delete _0x272fcc['_glTextures'][this.CONTEXT_UID], !_0x10dd45)) {
                            var _0x26414c = this.managedTextures.indexOf(_0x272fcc);
                            -1 !== _0x26414c && (0, _0x2932e8.Er)(this.managedTextures, _0x26414c, 1);
                        }
                    }, _0x480261.prototype.updateTextureStyle = function (_0x9f34ce) {
                        var _0x474279 = _0x9f34ce['_glTextures'][this.CONTEXT_UID];
                        _0x474279 && (_0x9f34ce.mipmap !== _0x589e0e.WB.POW2 && 2 === this.webGLVersion || _0x9f34ce.isPowerOfTwo ? _0x474279.mipmap = _0x9f34ce.mipmap >= 1 : _0x474279.mipmap = false, 2 === this.webGLVersion || _0x9f34ce.isPowerOfTwo ? _0x474279.wrapMode = _0x9f34ce.wrapMode : _0x474279.wrapMode = _0x589e0e.Nt.CLAMP, _0x9f34ce.resource && _0x9f34ce.resource.style(this.renderer, _0x9f34ce, _0x474279) || this.setStyle(_0x9f34ce, _0x474279), _0x474279.dirtyStyleId = _0x9f34ce.dirtyStyleId);
                    }, _0x480261.prototype.setStyle = function (_0x3f561b, _0x5c88b9) {
                        var _0x4e2256 = this.gl;
                        if (_0x5c88b9.mipmap && _0x3f561b.mipmap !== _0x589e0e.WB.ON_MANUAL && _0x4e2256.generateMipmap(_0x3f561b.target), _0x4e2256.texParameteri(_0x3f561b.target, _0x4e2256.TEXTURE_WRAP_S, _0x5c88b9.wrapMode), _0x4e2256.texParameteri(_0x3f561b.target, _0x4e2256.TEXTURE_WRAP_T, _0x5c88b9.wrapMode), _0x5c88b9.mipmap) {
                            _0x4e2256.texParameteri(_0x3f561b.target, _0x4e2256.TEXTURE_MIN_FILTER, _0x3f561b.scaleMode === _0x589e0e.aH.LINEAR ? _0x4e2256.LINEAR_MIPMAP_LINEAR : _0x4e2256.NEAREST_MIPMAP_NEAREST);
                            var _0x52ace3 = this.renderer.context.extensions.anisotropicFiltering;
                            if (_0x52ace3 && _0x3f561b.anisotropicLevel > 0 && _0x3f561b.scaleMode === _0x589e0e.aH.LINEAR) {
                                var _0x1e85a9 = Math.min(_0x3f561b.anisotropicLevel, _0x4e2256.getParameter(_0x52ace3.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
                                _0x4e2256.texParameterf(_0x3f561b.target, _0x52ace3.TEXTURE_MAX_ANISOTROPY_EXT, _0x1e85a9);
                            }
                        } else {
                            _0x4e2256.texParameteri(_0x3f561b.target, _0x4e2256.TEXTURE_MIN_FILTER, _0x3f561b.scaleMode === _0x589e0e.aH.LINEAR ? _0x4e2256.LINEAR : _0x4e2256.NEAREST);
                        }
                        _0x4e2256.texParameteri(_0x3f561b.target, _0x4e2256.TEXTURE_MAG_FILTER, _0x3f561b.scaleMode === _0x589e0e.aH.LINEAR ? _0x4e2256.LINEAR : _0x4e2256.NEAREST);
                    }, _0x480261.prototype.destroy = function () {
                        ;
                        this.renderer = null;
                    }, _0x480261;
                }(), _0x44f860 = {
                    '__proto__': null,
                    'FilterSystem': _0x2c1eb3,
                    'BatchSystem': _0x7d0139,
                    'ContextSystem': _0x477860,
                    'FramebufferSystem': _0x283bfc,
                    'GeometrySystem': _0x13b497,
                    'MaskSystem': _0x67f4ab,
                    'ScissorSystem': _0x160d3c,
                    'StencilSystem': _0x5e9d43,
                    'ProjectionSystem': _0x2022e3,
                    'RenderTextureSystem': _0x9a4066,
                    'ShaderSystem': _0x487dea,
                    'StateSystem': _0x2c3407,
                    'TextureGCSystem': _0x4b0e61,
                    'TextureSystem': _0x3b6de7
                }, _0x3f957c = new _0x596cf7.y3(), _0xea058a = function (_0x7e25b7) {
                    ;
                    function _0x3c19db(_0x3d4261, _0x37764b) {
                        ;
                        void 0 === _0x3d4261 && (_0x3d4261 = _0x589e0e.N3.UNKNOWN);
                        var _0xa50a65 = _0x7e25b7.call(this) || this;
                        return _0x37764b = Object.assign({}, _0xa851a9.X.RENDER_OPTIONS, _0x37764b), _0xa50a65.options = _0x37764b, _0xa50a65.type = _0x3d4261, _0xa50a65.screen = new _0x596cf7.Ae(0, 0, _0x37764b.width, _0x37764b.height), _0xa50a65.view = _0x37764b.view || document.createElement('canvas'), _0xa50a65.resolution = _0x37764b.resolution || _0xa851a9.X.RESOLUTION, _0xa50a65.useContextAlpha = _0x37764b.useContextAlpha, _0xa50a65.autoDensity = !!_0x37764b.autoDensity, _0xa50a65.preserveDrawingBuffer = _0x37764b.preserveDrawingBuffer, _0xa50a65.clearBeforeRender = _0x37764b.clearBeforeRender, _0xa50a65['_backgroundColor'] = 0, _0xa50a65['_backgroundColorRgba'] = [
                            0,
                            0,
                            0,
                            1
                        ], _0xa50a65['_backgroundColorString'] = '#000000', _0xa50a65.backgroundColor = _0x37764b.backgroundColor || _0xa50a65['_backgroundColor'], _0xa50a65.backgroundAlpha = _0x37764b.backgroundAlpha, void 0 !== _0x37764b.transparent && ((0, _0x2932e8.a1)('6.0.0', 'Option transparent is deprecated, please use backgroundAlpha instead.'), _0xa50a65.useContextAlpha = _0x37764b.transparent, _0xa50a65.backgroundAlpha = _0x37764b.transparent ? 0 : 1), _0xa50a65['_lastObjectRendered'] = null, _0xa50a65.plugins = {}, _0xa50a65;
                    }
                    return _0x8b02be(_0x3c19db, _0x7e25b7), _0x3c19db.prototype.initPlugins = function (_0x2f3b00) {
                        ;
                        for (var _0x1b7f71 in _0x2f3b00)
                            this.plugins[_0x1b7f71] = new _0x2f3b00[_0x1b7f71](this);
                    }, Object.defineProperty(_0x3c19db.prototype, 'width', {
                        'get': function () {
                            ;
                            return this.view.width;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x3c19db.prototype, 'height', {
                        'get': function () {
                            ;
                            return this.view.height;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x3c19db.prototype.resize = function (_0x310288, _0x2767c7) {
                        ;
                        this.view.width = Math.round(_0x310288 * this.resolution);
                        this.view.height = Math.round(_0x2767c7 * this.resolution);
                        var _0x40f9ba = this.view.width / this.resolution, _0x2e7608 = this.view.height / this.resolution;
                        this.screen.width = _0x40f9ba;
                        this.screen.height = _0x2e7608;
                        this.autoDensity && (this.view.style.width = _0x40f9ba + 'px', this.view.style.height = _0x2e7608 + 'px');
                        this.emit('resize', _0x40f9ba, _0x2e7608);
                    }, _0x3c19db.prototype.generateTexture = function (_0xbfd7d8, _0x358bac, _0xe841c9, _0x3c2353) {
                        ;
                        void 0 === _0x358bac && (_0x358bac = {});
                        'number' == typeof _0x358bac && ((0, _0x2932e8.a1)('6.1.0', 'generateTexture options (scaleMode, resolution, region) are now object options.'), _0x358bac = {
                            'scaleMode': _0x358bac,
                            'resolution': _0xe841c9,
                            'region': _0x3c2353
                        });
                        var _0x287c41 = _0x358bac.region, _0x5cfffe = function (_0x4e7707, _0x5c84d0) {
                                var _0x11f938 = {};
                                for (var _0x2a4104 in _0x4e7707)
                                    Object.prototype.hasOwnProperty.call(_0x4e7707, _0x2a4104) && _0x5c84d0.indexOf(_0x2a4104) < 0 && (_0x11f938[_0x2a4104] = _0x4e7707[_0x2a4104]);
                                if (null != _0x4e7707 && 'function' == typeof Object.getOwnPropertySymbols) {
                                    var _0x30ecfc = 0;
                                    for (_0x2a4104 = Object.getOwnPropertySymbols(_0x4e7707); _0x30ecfc < _0x2a4104.length; _0x30ecfc++) {
                                        _0x5c84d0.indexOf(_0x2a4104[_0x30ecfc]) < 0 && (_0x11f938[_0x2a4104[_0x30ecfc]] = _0x4e7707[_0x2a4104[_0x30ecfc]]);
                                    }
                                }
                                return _0x11f938;
                            }(_0x358bac, ['region']);
                        0 === (_0x3c2353 = _0x287c41 || _0xbfd7d8.getLocalBounds(null, true)).width && (_0x3c2353.width = 1);
                        0 === _0x3c2353.height && (_0x3c2353.height = 1);
                        var _0x52370b = _0x1cb37d.create(_0xa43c({
                            'width': _0x3c2353.width,
                            'height': _0x3c2353.height
                        }, _0x5cfffe));
                        return _0x3f957c.tx = -_0x3c2353.x, _0x3f957c.ty = -_0x3c2353.y, this.render(_0xbfd7d8, {
                            'renderTexture': _0x52370b,
                            'clear': false,
                            'transform': _0x3f957c,
                            'skipUpdateTransform': !!_0xbfd7d8.parent
                        }), _0x52370b;
                    }, _0x3c19db.prototype.destroy = function (_0x36b6be) {
                        ;
                        for (var _0x58130e in this.plugins)
                            this.plugins[_0x58130e].destroy(), this.plugins[_0x58130e] = null;
                        _0x36b6be && this.view.parentNode && this.view.parentNode.removeChild(this.view);
                        var _0x581e56 = this;
                        _0x581e56.plugins = null;
                        _0x581e56.type = _0x589e0e.N3.UNKNOWN;
                        _0x581e56.view = null;
                        _0x581e56.screen = null;
                        _0x581e56['_tempDisplayObjectParent'] = null;
                        _0x581e56.options = null;
                        this['_backgroundColorRgba'] = null;
                        this['_backgroundColorString'] = null;
                        this['_lastObjectRendered'] = null;
                    }, Object.defineProperty(_0x3c19db.prototype, 'backgroundColor', {
                        'get': function () {
                            return this['_backgroundColor'];
                        },
                        'set': function (_0x475f85) {
                            ;
                            this['_backgroundColor'] = _0x475f85;
                            this['_backgroundColorString'] = (0, _0x2932e8.XN)(_0x475f85);
                            (0, _0x2932e8.wK)(_0x475f85, this['_backgroundColorRgba']);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x3c19db.prototype, 'backgroundAlpha', {
                        'get': function () {
                            ;
                            return this['_backgroundColorRgba'][3];
                        },
                        'set': function (_0x2ca298) {
                            ;
                            this['_backgroundColorRgba'][3] = _0x2ca298;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x3c19db;
                }(_0x2932e8.vp), _0xf97029 = function (_0x517332) {
                    ;
                    this.buffer = _0x517332 || null;
                    this.updateID = -1;
                    this.byteLength = -1;
                    this.refCount = 0;
                }, _0x486f4b = function () {
                    ;
                    function _0x26750c(_0x4619ca) {
                        ;
                        this.renderer = _0x4619ca;
                        this.managedBuffers = {};
                        this.boundBufferBases = {};
                    }
                    return _0x26750c.prototype.destroy = function () {
                        ;
                        this.renderer = null;
                    }, _0x26750c.prototype.contextChange = function () {
                        ;
                        this.disposeAll(true);
                        this.gl = this.renderer.gl;
                        this.CONTEXT_UID = this.renderer.CONTEXT_UID;
                    }, _0x26750c.prototype.bind = function (_0x4f0d5f) {
                        var _0x1092a9 = this.gl, _0x4d4f63 = this.CONTEXT_UID, _0xad608f = _0x4f0d5f['_glBuffers'][_0x4d4f63] || this.createGLBuffer(_0x4f0d5f);
                        _0x1092a9.bindBuffer(_0x4f0d5f.type, _0xad608f.buffer);
                    }, _0x26750c.prototype.bindBufferBase = function (_0x35b99c, _0x5d7eca) {
                        var _0x52acf9 = this.gl, _0x2f6013 = this.CONTEXT_UID;
                        if (this.boundBufferBases[_0x5d7eca] !== _0x35b99c) {
                            var _0x39eb18 = _0x35b99c['_glBuffers'][_0x2f6013] || this.createGLBuffer(_0x35b99c);
                            this.boundBufferBases[_0x5d7eca] = _0x35b99c;
                            _0x52acf9.bindBufferBase(_0x52acf9.UNIFORM_BUFFER, _0x5d7eca, _0x39eb18.buffer);
                        }
                    }, _0x26750c.prototype.bindBufferRange = function (_0xabfa67, _0x27263d, _0x549b0f) {
                        var _0x5c6f86 = this.gl, _0x3d9910 = this.CONTEXT_UID;
                        _0x549b0f = _0x549b0f || 0;
                        var _0x52a34e = _0xabfa67['_glBuffers'][_0x3d9910] || this.createGLBuffer(_0xabfa67);
                        _0x5c6f86.bindBufferRange(_0x5c6f86.UNIFORM_BUFFER, _0x27263d || 0, _0x52a34e.buffer, 256 * _0x549b0f, 256);
                    }, _0x26750c.prototype.update = function (_0x122e7c) {
                        var _0x4027dd = this.gl, _0x4f09d8 = this.CONTEXT_UID, _0xb38670 = _0x122e7c['_glBuffers'][_0x4f09d8];
                        if (_0x122e7c['_updateID'] !== _0xb38670.updateID) {
                            if (_0xb38670.updateID = _0x122e7c['_updateID'], _0x4027dd.bindBuffer(_0x122e7c.type, _0xb38670.buffer), _0xb38670.byteLength >= _0x122e7c.data.byteLength) {
                                _0x4027dd.bufferSubData(_0x122e7c.type, 0, _0x122e7c.data);
                            } else {
                                var _0x36d717 = _0x122e7c.static ? _0x4027dd.STATIC_DRAW : _0x4027dd.DYNAMIC_DRAW;
                                _0xb38670.byteLength = _0x122e7c.data.byteLength;
                                _0x4027dd.bufferData(_0x122e7c.type, _0x122e7c.data, _0x36d717);
                            }
                        }
                    }, _0x26750c.prototype.dispose = function (_0x47b249, _0x4235f6) {
                        ;
                        if (this.managedBuffers[_0x47b249.id]) {
                            delete this.managedBuffers[_0x47b249.id];
                            var _0x313dc6 = _0x47b249['_glBuffers'][this.CONTEXT_UID], _0x142eb5 = this.gl;
                            _0x47b249.disposeRunner.remove(this);
                            _0x313dc6 && (_0x4235f6 || _0x142eb5.deleteBuffer(_0x313dc6.buffer), delete _0x47b249['_glBuffers'][this.CONTEXT_UID]);
                        }
                    }, _0x26750c.prototype.disposeAll = function (_0x25edef) {
                        ;
                        for (var _0x222a29 = Object.keys(this.managedBuffers), _0x484cbb = 0; _0x484cbb < _0x222a29.length; _0x484cbb++) {
                            this.dispose(this.managedBuffers[_0x222a29[_0x484cbb]], _0x25edef);
                        }
                    }, _0x26750c.prototype.createGLBuffer = function (_0x8ce4e) {
                        var _0x8fcbe1 = this.CONTEXT_UID, _0xe9a0fd = this.gl;
                        return _0x8ce4e['_glBuffers'][_0x8fcbe1] = new _0xf97029(_0xe9a0fd.createBuffer()), this.managedBuffers[_0x8ce4e.id] = _0x8ce4e, _0x8ce4e.disposeRunner.add(this), _0x8ce4e['_glBuffers'][_0x8fcbe1];
                    }, _0x26750c;
                }(), _0x22a728 = function (_0x26ed3d) {
                    ;
                    function _0x2c5453(_0x3ac215) {
                        var _0x2f3a40 = _0x26ed3d.call(this, _0x589e0e.N3.WEBGL, _0x3ac215) || this;
                        return _0x3ac215 = _0x2f3a40.options, _0x2f3a40.gl = null, _0x2f3a40.CONTEXT_UID = 0, _0x2f3a40.runners = {
                            'destroy': new _0x5643fe('destroy'),
                            'contextChange': new _0x5643fe('contextChange'),
                            'reset': new _0x5643fe('reset'),
                            'update': new _0x5643fe('update'),
                            'postrender': new _0x5643fe('postrender'),
                            'prerender': new _0x5643fe('prerender'),
                            'resize': new _0x5643fe('resize')
                        }, _0x2f3a40.runners.contextChange.add(_0x2f3a40), _0x2f3a40.globalUniforms = new _0x3c2d61({ 'projectionMatrix': new _0x596cf7.y3() }, true), _0x2f3a40.addSystem(_0x67f4ab, 'mask').addSystem(_0x477860, 'context').addSystem(_0x2c3407, 'state').addSystem(_0x487dea, 'shader').addSystem(_0x3b6de7, 'texture').addSystem(_0x486f4b, 'buffer').addSystem(_0x13b497, 'geometry').addSystem(_0x283bfc, 'framebuffer').addSystem(_0x160d3c, 'scissor').addSystem(_0x5e9d43, 'stencil').addSystem(_0x2022e3, 'projection').addSystem(_0x4b0e61, 'textureGC').addSystem(_0x2c1eb3, 'filter').addSystem(_0x9a4066, 'renderTexture').addSystem(_0x7d0139, 'batch'), _0x2f3a40.initPlugins(_0x2c5453['__plugins']), _0x2f3a40.multisample = void 0, _0x3ac215.context ? _0x2f3a40.context.initFromContext(_0x3ac215.context) : _0x2f3a40.context.initFromOptions({
                            'alpha': !!_0x2f3a40.useContextAlpha,
                            'antialias': _0x3ac215.antialias,
                            'premultipliedAlpha': _0x2f3a40.useContextAlpha && 'notMultiplied' !== _0x2f3a40.useContextAlpha,
                            'stencil': true,
                            'preserveDrawingBuffer': _0x3ac215.preserveDrawingBuffer,
                            'powerPreference': _0x2f3a40.options.powerPreference
                        }), _0x2f3a40.renderingToScreen = true, (0, _0x2932e8.DE)(2 === _0x2f3a40.context.webGLVersion ? 'WebGL 2' : 'WebGL 1'), _0x2f3a40.resize(_0x2f3a40.options.width, _0x2f3a40.options.height), _0x2f3a40;
                    }
                    return _0x8b02be(_0x2c5453, _0x26ed3d), _0x2c5453.create = function (_0x1fe524) {
                        ;
                        if ((0, _0x2932e8.HR)()) {
                            return new _0x2c5453(_0x1fe524);
                        }
                        throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.');
                    }, _0x2c5453.prototype.contextChange = function () {
                        var _0x196a09, _0x5170f5 = this.gl;
                        if (1 === this.context.webGLVersion) {
                            var _0x3aa7a9 = _0x5170f5.getParameter(_0x5170f5.FRAMEBUFFER_BINDING);
                            _0x5170f5.bindFramebuffer(_0x5170f5.FRAMEBUFFER, null);
                            _0x196a09 = _0x5170f5.getParameter(_0x5170f5.SAMPLES);
                            _0x5170f5.bindFramebuffer(_0x5170f5.FRAMEBUFFER, _0x3aa7a9);
                        } else {
                            _0x3aa7a9 = _0x5170f5.getParameter(_0x5170f5.DRAW_FRAMEBUFFER_BINDING);
                            _0x5170f5.bindFramebuffer(_0x5170f5.DRAW_FRAMEBUFFER, null);
                            _0x196a09 = _0x5170f5.getParameter(_0x5170f5.SAMPLES);
                            _0x5170f5.bindFramebuffer(_0x5170f5.DRAW_FRAMEBUFFER, _0x3aa7a9);
                        }
                        _0x196a09 >= _0x589e0e.G5.HIGH ? this.multisample = _0x589e0e.G5.HIGH : _0x196a09 >= _0x589e0e.G5.MEDIUM ? this.multisample = _0x589e0e.G5.MEDIUM : _0x196a09 >= _0x589e0e.G5.LOW ? this.multisample = _0x589e0e.G5.LOW : this.multisample = _0x589e0e.G5.NONE;
                    }, _0x2c5453.prototype.addSystem = function (_0x10c562, _0x48bcf5) {
                        var _0x5a0cd7 = new _0x10c562(this);
                        if (this[_0x48bcf5]) {
                            throw new Error('Whoops! The name "' + _0x48bcf5 + '" is already in use');
                        }
                        for (var _0x35a5ca in (this[_0x48bcf5] = _0x5a0cd7, this.runners))
                            this.runners[_0x35a5ca].add(_0x5a0cd7);
                        return this;
                    }, _0x2c5453.prototype.render = function (_0x2bc0ea, _0x21d12a) {
                        var _0x3f2690, _0x28cc34, _0x34aec2, _0x15ad04;
                        if (_0x21d12a && (_0x21d12a instanceof _0x1cb37d ? ((0, _0x2932e8.a1)('6.0.0', 'Renderer#render arguments changed, use options instead.'), _0x3f2690 = _0x21d12a, _0x28cc34 = arguments[2], _0x34aec2 = arguments[3], _0x15ad04 = arguments[4]) : (_0x3f2690 = _0x21d12a.renderTexture, _0x28cc34 = _0x21d12a.clear, _0x34aec2 = _0x21d12a.transform, _0x15ad04 = _0x21d12a.skipUpdateTransform)), this.renderingToScreen = !_0x3f2690, this.runners.prerender.emit(), this.emit('prerender'), this.projection.transform = _0x34aec2, !this.context.isLost) {
                            if (_0x3f2690 || (this['_lastObjectRendered'] = _0x2bc0ea), !_0x15ad04) {
                                var _0x1fcf0a = _0x2bc0ea.enableTempParent();
                                _0x2bc0ea.updateTransform();
                                _0x2bc0ea.disableTempParent(_0x1fcf0a);
                            }
                            this.renderTexture.bind(_0x3f2690);
                            this.batch.currentRenderer.start();
                            (void 0 !== _0x28cc34 ? _0x28cc34 : this.clearBeforeRender) && this.renderTexture.clear();
                            _0x2bc0ea.render(this);
                            this.batch.currentRenderer.flush();
                            _0x3f2690 && _0x3f2690.baseTexture.update();
                            this.runners.postrender.emit();
                            this.projection.transform = null;
                            this.emit('postrender');
                        }
                    }, _0x2c5453.prototype.generateTexture = function (_0x48a20b, _0x4c4bcb, _0x18a503, _0x5882ce) {
                        ;
                        void 0 === _0x4c4bcb && (_0x4c4bcb = {});
                        var _0x5bb757 = _0x26ed3d.prototype.generateTexture.call(this, _0x48a20b, _0x4c4bcb, _0x18a503, _0x5882ce);
                        return this.framebuffer.blit(), _0x5bb757;
                    }, _0x2c5453.prototype.resize = function (_0x23c959, _0x53a148) {
                        ;
                        _0x26ed3d.prototype.resize.call(this, _0x23c959, _0x53a148);
                        this.runners.resize.emit(this.screen.height, this.screen.width);
                    }, _0x2c5453.prototype.reset = function () {
                        ;
                        return this.runners.reset.emit(), this;
                    }, _0x2c5453.prototype.clear = function () {
                        ;
                        this.renderTexture.bind();
                        this.renderTexture.clear();
                    }, _0x2c5453.prototype.destroy = function (_0x3bef8f) {
                        ;
                        for (var _0x3248bb in (this.runners.destroy.emit(), this.runners))
                            this.runners[_0x3248bb].destroy();
                        _0x26ed3d.prototype.destroy.call(this, _0x3bef8f);
                        this.gl = null;
                    }, Object.defineProperty(_0x2c5453.prototype, 'extract', {
                        'get': function () {
                            ;
                            return (0, _0x2932e8.a1)('6.0.0', 'Renderer#extract has been deprecated, please use Renderer#plugins.extract instead.'), this.plugins.extract;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x2c5453.registerPlugin = function (_0x92c5bd, _0x53c36) {
                        ;
                        _0x2c5453['__plugins'] = _0x2c5453['__plugins'] || {};
                        _0x2c5453['__plugins'][_0x92c5bd] = _0x53c36;
                    }, _0x2c5453;
                }(_0xea058a);
            function _0x35c85c(_0x112cfa) {
                ;
                return _0x22a728.create(_0x112cfa);
            }
            var _0x565370 = function () {
                    ;
                    this.texArray = null;
                    this.blend = 0;
                    this.type = _0x589e0e.lg.TRIANGLES;
                    this.start = 0;
                    this.size = 0;
                    this.data = null;
                }, _0x547dea = function () {
                    ;
                    function _0x6712d9() {
                        ;
                        this.elements = [];
                        this.ids = [];
                        this.count = 0;
                    }
                    return _0x6712d9.prototype.clear = function () {
                        ;
                        for (var _0x47a511 = 0; _0x47a511 < this.count; _0x47a511++) {
                            this.elements[_0x47a511] = null;
                        }
                        this.count = 0;
                    }, _0x6712d9;
                }(), _0xae3cfc = function () {
                    ;
                    function _0x20ffc9(_0x517334) {
                        ;
                        'number' == typeof _0x517334 ? this.rawBinaryData = new ArrayBuffer(_0x517334) : _0x517334 instanceof Uint8Array ? this.rawBinaryData = _0x517334.buffer : this.rawBinaryData = _0x517334;
                        this.uint32View = new Uint32Array(this.rawBinaryData);
                        this.float32View = new Float32Array(this.rawBinaryData);
                    }
                    return Object.defineProperty(_0x20ffc9.prototype, 'int8View', {
                        'get': function () {
                            ;
                            return this['_int8View'] || (this['_int8View'] = new Int8Array(this.rawBinaryData)), this['_int8View'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x20ffc9.prototype, 'uint8View', {
                        'get': function () {
                            ;
                            return this['_uint8View'] || (this['_uint8View'] = new Uint8Array(this.rawBinaryData)), this['_uint8View'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x20ffc9.prototype, 'int16View', {
                        'get': function () {
                            ;
                            return this['_int16View'] || (this['_int16View'] = new Int16Array(this.rawBinaryData)), this['_int16View'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x20ffc9.prototype, 'uint16View', {
                        'get': function () {
                            ;
                            return this['_uint16View'] || (this['_uint16View'] = new Uint16Array(this.rawBinaryData)), this['_uint16View'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x20ffc9.prototype, 'int32View', {
                        'get': function () {
                            ;
                            return this['_int32View'] || (this['_int32View'] = new Int32Array(this.rawBinaryData)), this['_int32View'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x20ffc9.prototype.view = function (_0x146f96) {
                        ;
                        return this[_0x146f96 + 'View'];
                    }, _0x20ffc9.prototype.destroy = function () {
                        ;
                        this.rawBinaryData = null;
                        this['_int8View'] = null;
                        this['_uint8View'] = null;
                        this['_int16View'] = null;
                        this['_uint16View'] = null;
                        this['_int32View'] = null;
                        this.uint32View = null;
                        this.float32View = null;
                    }, _0x20ffc9.sizeOf = function (_0x3b09db) {
                        ;
                        switch (_0x3b09db) {
                        case 'int8':
                        case 'uint8':
                            return 1;
                        case 'int16':
                        case 'uint16':
                            return 2;
                        case 'int32':
                        case 'uint32':
                        case 'float32':
                            return 4;
                        default:
                            throw new Error(_0x3b09db + ' isn\'t a valid view type');
                        }
                    }, _0x20ffc9;
                }(), _0x41109e = function (_0x3d08f0) {
                    ;
                    function _0x110808(_0xd64847) {
                        var _0x3d7385 = _0x3d08f0.call(this, _0xd64847) || this;
                        return _0x3d7385.shaderGenerator = null, _0x3d7385.geometryClass = null, _0x3d7385.vertexSize = null, _0x3d7385.state = _0x377a62.for2d(), _0x3d7385.size = 4 * _0xa851a9.X.SPRITE_BATCH_SIZE, _0x3d7385['_vertexCount'] = 0, _0x3d7385['_indexCount'] = 0, _0x3d7385['_bufferedElements'] = [], _0x3d7385['_bufferedTextures'] = [], _0x3d7385['_bufferSize'] = 0, _0x3d7385['_shader'] = null, _0x3d7385['_packedGeometries'] = [], _0x3d7385['_packedGeometryPoolSize'] = 2, _0x3d7385['_flushId'] = 0, _0x3d7385['_aBuffers'] = {}, _0x3d7385['_iBuffers'] = {}, _0x3d7385.MAX_TEXTURES = 1, _0x3d7385.renderer.on('prerender', _0x3d7385.onPrerender, _0x3d7385), _0xd64847.runners.contextChange.add(_0x3d7385), _0x3d7385['_dcIndex'] = 0, _0x3d7385['_aIndex'] = 0, _0x3d7385['_iIndex'] = 0, _0x3d7385['_attributeBuffer'] = null, _0x3d7385['_indexBuffer'] = null, _0x3d7385['_tempBoundTextures'] = [], _0x3d7385;
                    }
                    return _0x8b02be(_0x110808, _0x3d08f0), _0x110808.prototype.contextChange = function () {
                        var _0x569771 = this.renderer.gl;
                        _0xa851a9.X.PREFER_ENV === _0x589e0e.Vi.WEBGL_LEGACY ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(_0x569771.getParameter(_0x569771.MAX_TEXTURE_IMAGE_UNITS), _0xa851a9.X.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = function (_0x2eb772, _0x411213) {
                            ;
                            if (0 === _0x2eb772) {
                                throw new Error('Invalid value of `0` passed to `checkMaxIfStatementsInShader`');
                            }
                            for (var _0x1dda49 = _0x411213.createShader(_0x411213.FRAGMENT_SHADER);;) {
                                var _0x15d04e = _0x1fd66e.replace(/%forloop%/gi, _0x2e5fbf(_0x2eb772));
                                if (_0x411213.shaderSource(_0x1dda49, _0x15d04e), _0x411213.compileShader(_0x1dda49), _0x411213.getShaderParameter(_0x1dda49, _0x411213.COMPILE_STATUS)) {
                                    break;
                                }
                                _0x2eb772 = _0x2eb772 / 2 | 0;
                            }
                            return _0x2eb772;
                        }(this.MAX_TEXTURES, _0x569771));
                        this['_shader'] = this.shaderGenerator.generateShader(this.MAX_TEXTURES);
                        for (var _0x512f7c = 0; _0x512f7c < this['_packedGeometryPoolSize']; _0x512f7c++) {
                            this['_packedGeometries'][_0x512f7c] = new this.geometryClass();
                        }
                        this.initFlushBuffers();
                    }, _0x110808.prototype.initFlushBuffers = function () {
                        ;
                        for (var _0x1b5dea = _0x110808['_drawCallPool'], _0x5ce744 = _0x110808['_textureArrayPool'], _0x3b67bc = this.size / 4, _0x3b6556 = Math.floor(_0x3b67bc / this.MAX_TEXTURES) + 1; _0x1b5dea.length < _0x3b67bc;) {
                            _0x1b5dea.push(new _0x565370());
                        }
                        for (; _0x5ce744.length < _0x3b6556;) {
                            _0x5ce744.push(new _0x547dea());
                        }
                        for (var _0x120d07 = 0; _0x120d07 < this.MAX_TEXTURES; _0x120d07++) {
                            this['_tempBoundTextures'][_0x120d07] = null;
                        }
                    }, _0x110808.prototype.onPrerender = function () {
                        ;
                        this['_flushId'] = 0;
                    }, _0x110808.prototype.render = function (_0x13eae6) {
                        ;
                        _0x13eae6['_texture'].valid && (this['_vertexCount'] + _0x13eae6.vertexData.length / 2 > this.size && this.flush(), this['_vertexCount'] += _0x13eae6.vertexData.length / 2, this['_indexCount'] += _0x13eae6.indices.length, this['_bufferedTextures'][this['_bufferSize']] = _0x13eae6['_texture'].baseTexture, this['_bufferedElements'][this['_bufferSize']++] = _0x13eae6);
                    }, _0x110808.prototype.buildTexturesAndDrawCalls = function () {
                        var _0xe5d945 = this['_bufferedTextures'], _0xa961cc = this.MAX_TEXTURES, _0x55bc74 = _0x110808['_textureArrayPool'], _0x198052 = this.renderer.batch, _0x46a747 = this['_tempBoundTextures'], _0x172b80 = this.renderer.textureGC.count, _0x1c652d = ++_0x496d39['_globalBatch'], _0x2b5345 = 0, _0x59c5b6 = _0x55bc74[0], _0x180c20 = 0;
                        _0x198052.copyBoundTextures(_0x46a747, _0xa961cc);
                        for (var _0x280105 = 0; _0x280105 < this['_bufferSize']; ++_0x280105) {
                            var _0xef8143 = _0xe5d945[_0x280105];
                            _0xe5d945[_0x280105] = null;
                            _0xef8143['_batchEnabled'] !== _0x1c652d && (_0x59c5b6.count >= _0xa961cc && (_0x198052.boundArray(_0x59c5b6, _0x46a747, _0x1c652d, _0xa961cc), this.buildDrawCalls(_0x59c5b6, _0x180c20, _0x280105), _0x180c20 = _0x280105, _0x59c5b6 = _0x55bc74[++_0x2b5345], ++_0x1c652d), _0xef8143['_batchEnabled'] = _0x1c652d, _0xef8143.touched = _0x172b80, _0x59c5b6.elements[_0x59c5b6.count++] = _0xef8143);
                        }
                        for (_0x59c5b6.count > 0 && (_0x198052.boundArray(_0x59c5b6, _0x46a747, _0x1c652d, _0xa961cc), this.buildDrawCalls(_0x59c5b6, _0x180c20, this['_bufferSize']), ++_0x2b5345, ++_0x1c652d), _0x280105 = 0; _0x280105 < _0x46a747.length; _0x280105++) {
                            _0x46a747[_0x280105] = null;
                        }
                        _0x496d39['_globalBatch'] = _0x1c652d;
                    }, _0x110808.prototype.buildDrawCalls = function (_0xad2ba1, _0x520860, _0x4951f0) {
                        var _0x3c5086 = this, _0x389f20 = _0x3c5086['_bufferedElements'], _0x14d5ba = _0x3c5086['_attributeBuffer'], _0x114ada = _0x3c5086['_indexBuffer'], _0x3d2819 = _0x3c5086.vertexSize, _0x2ae8f4 = _0x110808['_drawCallPool'], _0xefe4a2 = this['_dcIndex'], _0x2c0810 = this['_aIndex'], _0x4597f0 = this['_iIndex'], _0x4511c1 = _0x2ae8f4[_0xefe4a2];
                        _0x4511c1.start = this['_iIndex'];
                        _0x4511c1.texArray = _0xad2ba1;
                        for (var _0x4bf861 = _0x520860; _0x4bf861 < _0x4951f0; ++_0x4bf861) {
                            var _0x295e78 = _0x389f20[_0x4bf861], _0x3ed17e = _0x295e78['_texture'].baseTexture, _0x247d30 = _0x2932e8.YA[_0x3ed17e.alphaMode ? 1 : 0][_0x295e78.blendMode];
                            _0x389f20[_0x4bf861] = null;
                            _0x520860 < _0x4bf861 && _0x4511c1.blend !== _0x247d30 && (_0x4511c1.size = _0x4597f0 - _0x4511c1.start, _0x520860 = _0x4bf861, (_0x4511c1 = _0x2ae8f4[++_0xefe4a2]).texArray = _0xad2ba1, _0x4511c1.start = _0x4597f0);
                            this.packInterleavedGeometry(_0x295e78, _0x14d5ba, _0x114ada, _0x2c0810, _0x4597f0);
                            _0x2c0810 += _0x295e78.vertexData.length / 2 * _0x3d2819;
                            _0x4597f0 += _0x295e78.indices.length;
                            _0x4511c1.blend = _0x247d30;
                        }
                        _0x520860 < _0x4951f0 && (_0x4511c1.size = _0x4597f0 - _0x4511c1.start, ++_0xefe4a2);
                        this['_dcIndex'] = _0xefe4a2;
                        this['_aIndex'] = _0x2c0810;
                        this['_iIndex'] = _0x4597f0;
                    }, _0x110808.prototype.bindAndClearTexArray = function (_0x17df47) {
                        ;
                        for (var _0x19acc2 = this.renderer.texture, _0x5d98d6 = 0; _0x5d98d6 < _0x17df47.count; _0x5d98d6++) {
                            _0x19acc2.bind(_0x17df47.elements[_0x5d98d6], _0x17df47.ids[_0x5d98d6]);
                            _0x17df47.elements[_0x5d98d6] = null;
                        }
                        _0x17df47.count = 0;
                    }, _0x110808.prototype.updateGeometry = function () {
                        var _0x4925db = this, _0x4f3fab = _0x4925db['_packedGeometries'], _0x54a19b = _0x4925db['_attributeBuffer'], _0x5d8a0b = _0x4925db['_indexBuffer'];
                        _0xa851a9.X.CAN_UPLOAD_SAME_BUFFER ? (_0x4f3fab[this['_flushId']]['_buffer'].update(_0x54a19b.rawBinaryData), _0x4f3fab[this['_flushId']]['_indexBuffer'].update(_0x5d8a0b), this.renderer.geometry.updateBuffers()) : (this['_packedGeometryPoolSize'] <= this['_flushId'] && (this['_packedGeometryPoolSize']++, _0x4f3fab[this['_flushId']] = new this.geometryClass()), _0x4f3fab[this['_flushId']]['_buffer'].update(_0x54a19b.rawBinaryData), _0x4f3fab[this['_flushId']]['_indexBuffer'].update(_0x5d8a0b), this.renderer.geometry.bind(_0x4f3fab[this['_flushId']]), this.renderer.geometry.updateBuffers(), this['_flushId']++);
                    }, _0x110808.prototype.drawBatches = function () {
                        ;
                        for (var _0x15fa82 = this['_dcIndex'], _0x4ad25f = this.renderer, _0x4d5900 = _0x4ad25f.gl, _0x5806ab = _0x4ad25f.state, _0x18622f = _0x110808['_drawCallPool'], _0x279623 = null, _0x214226 = 0; _0x214226 < _0x15fa82; _0x214226++) {
                            var _0x4374bd = _0x18622f[_0x214226], _0x4d94cd = _0x4374bd.texArray, _0x5d6e10 = _0x4374bd.type, _0x1f807b = _0x4374bd.size, _0x218eef = _0x4374bd.start, _0x325afd = _0x4374bd.blend;
                            _0x279623 !== _0x4d94cd && (_0x279623 = _0x4d94cd, this.bindAndClearTexArray(_0x4d94cd));
                            this.state.blendMode = _0x325afd;
                            _0x5806ab.set(this.state);
                            _0x4d5900.drawElements(_0x5d6e10, _0x1f807b, _0x4d5900.UNSIGNED_SHORT, 2 * _0x218eef);
                        }
                    }, _0x110808.prototype.flush = function () {
                        ;
                        0 !== this['_vertexCount'] && (this['_attributeBuffer'] = this.getAttributeBuffer(this['_vertexCount']), this['_indexBuffer'] = this.getIndexBuffer(this['_indexCount']), this['_aIndex'] = 0, this['_iIndex'] = 0, this['_dcIndex'] = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this['_bufferSize'] = 0, this['_vertexCount'] = 0, this['_indexCount'] = 0);
                    }, _0x110808.prototype.start = function () {
                        ;
                        this.renderer.state.set(this.state);
                        this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES);
                        this.renderer.shader.bind(this['_shader']);
                        _0xa851a9.X.CAN_UPLOAD_SAME_BUFFER && this.renderer.geometry.bind(this['_packedGeometries'][this['_flushId']]);
                    }, _0x110808.prototype.stop = function () {
                        ;
                        this.flush();
                    }, _0x110808.prototype.destroy = function () {
                        ;
                        for (var _0x1e0911 = 0; _0x1e0911 < this['_packedGeometryPoolSize']; _0x1e0911++) {
                            this['_packedGeometries'][_0x1e0911] && this['_packedGeometries'][_0x1e0911].destroy();
                        }
                        this.renderer.off('prerender', this.onPrerender, this);
                        this['_aBuffers'] = null;
                        this['_iBuffers'] = null;
                        this['_packedGeometries'] = null;
                        this['_attributeBuffer'] = null;
                        this['_indexBuffer'] = null;
                        this['_shader'] && (this['_shader'].destroy(), this['_shader'] = null);
                        _0x3d08f0.prototype.destroy.call(this);
                    }, _0x110808.prototype.getAttributeBuffer = function (_0x13af2d) {
                        var _0x33423a = (0, _0x2932e8.a9)(Math.ceil(_0x13af2d / 8)), _0x27fb7f = (0, _0x2932e8.k3)(_0x33423a), _0x581f1a = 8 * _0x33423a;
                        this['_aBuffers'].length <= _0x27fb7f && (this['_iBuffers'].length = _0x27fb7f + 1);
                        var _0xc987be = this['_aBuffers'][_0x581f1a];
                        return _0xc987be || (this['_aBuffers'][_0x581f1a] = _0xc987be = new _0xae3cfc(_0x581f1a * this.vertexSize * 4)), _0xc987be;
                    }, _0x110808.prototype.getIndexBuffer = function (_0x63a183) {
                        var _0xf54008 = (0, _0x2932e8.a9)(Math.ceil(_0x63a183 / 12)), _0x61811d = (0, _0x2932e8.k3)(_0xf54008), _0x27042d = 12 * _0xf54008;
                        this['_iBuffers'].length <= _0x61811d && (this['_iBuffers'].length = _0x61811d + 1);
                        var _0x55c38b = this['_iBuffers'][_0x61811d];
                        return _0x55c38b || (this['_iBuffers'][_0x61811d] = _0x55c38b = new Uint16Array(_0x27042d)), _0x55c38b;
                    }, _0x110808.prototype.packInterleavedGeometry = function (_0x1eebaa, _0x5a8a7f, _0x5cca7e, _0x139b54, _0x5195ac) {
                        ;
                        for (var _0x49d9e8 = _0x5a8a7f.uint32View, _0x1777ad = _0x5a8a7f.float32View, _0x4c3524 = _0x139b54 / this.vertexSize, _0x3075ac = _0x1eebaa.uvs, _0x18e97d = _0x1eebaa.indices, _0x38ddd7 = _0x1eebaa.vertexData, _0x1255aa = _0x1eebaa['_texture'].baseTexture['_batchLocation'], _0x22d0c6 = Math.min(_0x1eebaa.worldAlpha, 1), _0x1800e5 = _0x22d0c6 < 1 && _0x1eebaa['_texture'].baseTexture.alphaMode ? (0, _0x2932e8.rA)(_0x1eebaa['_tintRGB'], _0x22d0c6) : _0x1eebaa['_tintRGB'] + (255 * _0x22d0c6 << 24), _0x4dca8f = 0; _0x4dca8f < _0x38ddd7.length; _0x4dca8f += 2) {
                            _0x1777ad[_0x139b54++] = _0x38ddd7[_0x4dca8f];
                            _0x1777ad[_0x139b54++] = _0x38ddd7[_0x4dca8f + 1];
                            _0x1777ad[_0x139b54++] = _0x3075ac[_0x4dca8f];
                            _0x1777ad[_0x139b54++] = _0x3075ac[_0x4dca8f + 1];
                            _0x49d9e8[_0x139b54++] = _0x1800e5;
                            _0x1777ad[_0x139b54++] = _0x1255aa;
                        }
                        for (_0x4dca8f = 0; _0x4dca8f < _0x18e97d.length; _0x4dca8f++) {
                            _0x5cca7e[_0x5195ac++] = _0x4c3524 + _0x18e97d[_0x4dca8f];
                        }
                    }, _0x110808['_drawCallPool'] = [], _0x110808['_textureArrayPool'] = [], _0x110808;
                }(_0x228dd6), _0x26ee75 = function () {
                    ;
                    function _0x2b7097(_0x460601, _0x4cdf7d) {
                        ;
                        if (this.vertexSrc = _0x460601, this.fragTemplate = _0x4cdf7d, this.programCache = {}, this.defaultGroupCache = {}, _0x4cdf7d.indexOf('%count%') < 0) {
                            throw new Error('Fragment template must contain "%count%".');
                        }
                        if (_0x4cdf7d.indexOf('%forloop%') < 0) {
                            throw new Error('Fragment template must contain "%forloop%".');
                        }
                    }
                    return _0x2b7097.prototype.generateShader = function (_0x1530e2) {
                        ;
                        if (!this.programCache[_0x1530e2]) {
                            for (var _0x5c7d78 = new Int32Array(_0x1530e2), _0x2a98d9 = 0; _0x2a98d9 < _0x1530e2; _0x2a98d9++) {
                                _0x5c7d78[_0x2a98d9] = _0x2a98d9;
                            }
                            this.defaultGroupCache[_0x1530e2] = _0x3c2d61.from({ 'uSamplers': _0x5c7d78 }, true);
                            var _0x5e542c = this.fragTemplate;
                            _0x5e542c = (_0x5e542c = _0x5e542c.replace(/%count%/gi, '' + _0x1530e2)).replace(/%forloop%/gi, this.generateSampleSrc(_0x1530e2));
                            this.programCache[_0x1530e2] = new _0x2eb48a(this.vertexSrc, _0x5e542c);
                        }
                        var _0x39e64e = {
                            'tint': new Float32Array([
                                1,
                                1,
                                1,
                                1
                            ]),
                            'translationMatrix': new _0x596cf7.y3(),
                            'default': this.defaultGroupCache[_0x1530e2]
                        };
                        return new _0x3ba51c(this.programCache[_0x1530e2], _0x39e64e);
                    }, _0x2b7097.prototype.generateSampleSrc = function (_0x573473) {
                        var _0x555d8d = '';
                        _0x555d8d += '\n';
                        _0x555d8d += '\n';
                        for (var _0x2b0a43 = 0; _0x2b0a43 < _0x573473; _0x2b0a43++) {
                            _0x2b0a43 > 0 && (_0x555d8d += '\nelse ');
                            _0x2b0a43 < _0x573473 - 1 && (_0x555d8d += 'if(vTextureId < ' + _0x2b0a43 + '.5)');
                            _0x555d8d += '\n{';
                            _0x555d8d += '\n\tcolor = texture2D(uSamplers[' + _0x2b0a43 + '], vTextureCoord);';
                            _0x555d8d += '\n}';
                        }
                        return (_0x555d8d += '\n') + '\n';
                    }, _0x2b7097;
                }(), _0x2e64b0 = function (_0x59edf4) {
                    function _0x48d5c9(_0x585934) {
                        ;
                        void 0 === _0x585934 && (_0x585934 = false);
                        var _0x4f5ca8 = _0x59edf4.call(this) || this;
                        return _0x4f5ca8['_buffer'] = new _0x5f195b(null, _0x585934, false), _0x4f5ca8['_indexBuffer'] = new _0x5f195b(null, _0x585934, true), _0x4f5ca8.addAttribute('aVertexPosition', _0x4f5ca8['_buffer'], 2, false, _0x589e0e.vK.FLOAT).addAttribute('aTextureCoord', _0x4f5ca8['_buffer'], 2, false, _0x589e0e.vK.FLOAT).addAttribute('aColor', _0x4f5ca8['_buffer'], 4, true, _0x589e0e.vK.UNSIGNED_BYTE).addAttribute('aTextureId', _0x4f5ca8['_buffer'], 1, true, _0x589e0e.vK.FLOAT).addIndex(_0x4f5ca8['_indexBuffer']), _0x4f5ca8;
                    }
                    return _0x8b02be(_0x48d5c9, _0x59edf4), _0x48d5c9;
                }(_0x52d398), _0x288d6c = 'precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n', _0x3f0073 = function () {
                    ;
                    function _0x5d2f3f() {
                    }
                    return _0x5d2f3f.create = function (_0x370532) {
                        var _0x2a9d63 = Object.assign({
                                'vertex': _0x288d6c,
                                'fragment': 'varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n',
                                'geometryClass': _0x2e64b0,
                                'vertexSize': 6
                            }, _0x370532), _0x5720ea = _0x2a9d63.vertex, _0x15fc73 = _0x2a9d63.fragment, _0x5beba8 = _0x2a9d63.vertexSize, _0x43d56c = _0x2a9d63.geometryClass;
                        return function (_0x26d67d) {
                            function _0x2b8295(_0x1c9a24) {
                                var _0x5c6f1d = _0x26d67d.call(this, _0x1c9a24) || this;
                                return _0x5c6f1d.shaderGenerator = new _0x26ee75(_0x5720ea, _0x15fc73), _0x5c6f1d.geometryClass = _0x43d56c, _0x5c6f1d.vertexSize = _0x5beba8, _0x5c6f1d;
                            }
                            return _0x8b02be(_0x2b8295, _0x26d67d), _0x2b8295;
                        }(_0x41109e);
                    }, Object.defineProperty(_0x5d2f3f, 'defaultVertexSrc', {
                        'get': function () {
                            return _0x288d6c;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x5d2f3f, 'defaultFragmentTemplate', {
                        'get': function () {
                            return 'varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n';
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x5d2f3f;
                }().create(), _0x57d709 = {}, _0xe3ab4 = function (_0x16937a) {
                    ;
                    Object.defineProperty(_0x57d709, _0x16937a, {
                        'get': function () {
                            ;
                            return (0, _0x2932e8.a1)('6.0.0', 'PIXI.systems.' + _0x16937a + ' has moved to PIXI.' + _0x16937a), _0x1d151f[_0x16937a];
                        }
                    });
                };
            for (var _0x492713 in _0x1d151f)
                _0xe3ab4(_0x492713);
            var _0x54d91b = {}, _0x32f06e = function (_0x247fdc) {
                    Object.defineProperty(_0x54d91b, _0x247fdc, {
                        'get': function () {
                            ;
                            return (0, _0x2932e8.a1)('6.0.0', 'PIXI.resources.' + _0x247fdc + ' has moved to PIXI.' + _0x247fdc), _0x44f860[_0x247fdc];
                        }
                    });
                };
            for (var _0x492713 in _0x44f860)
                _0x32f06e(_0x492713);
        },
        585: (_0x3795f5, _0x456bec, _0x4a4274) => {
            'use strict';
            ;
            _0x4a4274.d(_0x456bec, {
                'W2': () => _0x176b46,
                'YZ': () => _0xc7633d,
                's$': () => _0x55713e
            });
            var _0x1c9fd4 = _0x4a4274(319), _0x5a7e38 = _0x4a4274(658), _0x308b12 = _0x4a4274(942);
            _0x1c9fd4.X.SORTABLE_CHILDREN = false;
            var _0xc7633d = function () {
                    ;
                    function _0x515454() {
                        ;
                        this.minX = 1e+400;
                        this.minY = 1e+400;
                        this.maxX = -1e+400;
                        this.maxY = -1e+400;
                        this.rect = null;
                        this.updateID = -1;
                    }
                    return _0x515454.prototype.isEmpty = function () {
                        ;
                        return this.minX > this.maxX || this.minY > this.maxY;
                    }, _0x515454.prototype.clear = function () {
                        ;
                        this.minX = 1e+400;
                        this.minY = 1e+400;
                        this.maxX = -1e+400;
                        this.maxY = -1e+400;
                    }, _0x515454.prototype.getRectangle = function (_0x5ad692) {
                        ;
                        return this.minX > this.maxX || this.minY > this.maxY ? _0x5a7e38.Ae.EMPTY : ((_0x5ad692 = _0x5ad692 || new _0x5a7e38.Ae(0, 0, 1, 1)).x = this.minX, _0x5ad692.y = this.minY, _0x5ad692.width = this.maxX - this.minX, _0x5ad692.height = this.maxY - this.minY, _0x5ad692);
                    }, _0x515454.prototype.addPoint = function (_0x365fe9) {
                        ;
                        this.minX = Math.min(this.minX, _0x365fe9.x);
                        this.maxX = Math.max(this.maxX, _0x365fe9.x);
                        this.minY = Math.min(this.minY, _0x365fe9.y);
                        this.maxY = Math.max(this.maxY, _0x365fe9.y);
                    }, _0x515454.prototype.addPointMatrix = function (_0x3345ea, _0x2f541e) {
                        var _0x3f17c2 = _0x3345ea.a, _0x42f350 = _0x3345ea.b, _0x2d8c0a = _0x3345ea.c, _0x1efd69 = _0x3345ea.d, _0x43109d = _0x3345ea.tx, _0x55bfde = _0x3345ea.ty, _0x1871a = _0x3f17c2 * _0x2f541e.x + _0x2d8c0a * _0x2f541e.y + _0x43109d, _0x1c5940 = _0x42f350 * _0x2f541e.x + _0x1efd69 * _0x2f541e.y + _0x55bfde;
                        this.minX = Math.min(this.minX, _0x1871a);
                        this.maxX = Math.max(this.maxX, _0x1871a);
                        this.minY = Math.min(this.minY, _0x1c5940);
                        this.maxY = Math.max(this.maxY, _0x1c5940);
                    }, _0x515454.prototype.addQuad = function (_0x1939ee) {
                        var _0x596cb8 = this.minX, _0xc131da = this.minY, _0x3f2406 = this.maxX, _0x2152c9 = this.maxY, _0x44a1cd = _0x1939ee[0], _0x4db91a = _0x1939ee[1];
                        _0x596cb8 = _0x44a1cd < _0x596cb8 ? _0x44a1cd : _0x596cb8;
                        _0xc131da = _0x4db91a < _0xc131da ? _0x4db91a : _0xc131da;
                        _0x3f2406 = _0x44a1cd > _0x3f2406 ? _0x44a1cd : _0x3f2406;
                        _0x2152c9 = _0x4db91a > _0x2152c9 ? _0x4db91a : _0x2152c9;
                        _0x596cb8 = (_0x44a1cd = _0x1939ee[2]) < _0x596cb8 ? _0x44a1cd : _0x596cb8;
                        _0xc131da = (_0x4db91a = _0x1939ee[3]) < _0xc131da ? _0x4db91a : _0xc131da;
                        _0x3f2406 = _0x44a1cd > _0x3f2406 ? _0x44a1cd : _0x3f2406;
                        _0x2152c9 = _0x4db91a > _0x2152c9 ? _0x4db91a : _0x2152c9;
                        _0x596cb8 = (_0x44a1cd = _0x1939ee[4]) < _0x596cb8 ? _0x44a1cd : _0x596cb8;
                        _0xc131da = (_0x4db91a = _0x1939ee[5]) < _0xc131da ? _0x4db91a : _0xc131da;
                        _0x3f2406 = _0x44a1cd > _0x3f2406 ? _0x44a1cd : _0x3f2406;
                        _0x2152c9 = _0x4db91a > _0x2152c9 ? _0x4db91a : _0x2152c9;
                        _0x596cb8 = (_0x44a1cd = _0x1939ee[6]) < _0x596cb8 ? _0x44a1cd : _0x596cb8;
                        _0xc131da = (_0x4db91a = _0x1939ee[7]) < _0xc131da ? _0x4db91a : _0xc131da;
                        _0x3f2406 = _0x44a1cd > _0x3f2406 ? _0x44a1cd : _0x3f2406;
                        _0x2152c9 = _0x4db91a > _0x2152c9 ? _0x4db91a : _0x2152c9;
                        this.minX = _0x596cb8;
                        this.minY = _0xc131da;
                        this.maxX = _0x3f2406;
                        this.maxY = _0x2152c9;
                    }, _0x515454.prototype.addFrame = function (_0x71aeb5, _0x5a5c04, _0x248927, _0x59405a, _0x52e763) {
                        ;
                        this.addFrameMatrix(_0x71aeb5.worldTransform, _0x5a5c04, _0x248927, _0x59405a, _0x52e763);
                    }, _0x515454.prototype.addFrameMatrix = function (_0xfae084, _0x28efb4, _0x3ed5bc, _0x5a9086, _0x2fcf5e) {
                        var _0x3f4243 = _0xfae084.a, _0x5b5c4e = _0xfae084.b, _0x23bf71 = _0xfae084.c, _0x8d8e3b = _0xfae084.d, _0x371bdd = _0xfae084.tx, _0x7e8a1a = _0xfae084.ty, _0x2c604c = this.minX, _0x35393f = this.minY, _0x3a6f76 = this.maxX, _0x3d624d = this.maxY, _0x49489f = _0x3f4243 * _0x28efb4 + _0x23bf71 * _0x3ed5bc + _0x371bdd, _0x55fc0a = _0x5b5c4e * _0x28efb4 + _0x8d8e3b * _0x3ed5bc + _0x7e8a1a;
                        _0x2c604c = _0x49489f < _0x2c604c ? _0x49489f : _0x2c604c;
                        _0x35393f = _0x55fc0a < _0x35393f ? _0x55fc0a : _0x35393f;
                        _0x3a6f76 = _0x49489f > _0x3a6f76 ? _0x49489f : _0x3a6f76;
                        _0x3d624d = _0x55fc0a > _0x3d624d ? _0x55fc0a : _0x3d624d;
                        _0x2c604c = (_0x49489f = _0x3f4243 * _0x5a9086 + _0x23bf71 * _0x3ed5bc + _0x371bdd) < _0x2c604c ? _0x49489f : _0x2c604c;
                        _0x35393f = (_0x55fc0a = _0x5b5c4e * _0x5a9086 + _0x8d8e3b * _0x3ed5bc + _0x7e8a1a) < _0x35393f ? _0x55fc0a : _0x35393f;
                        _0x3a6f76 = _0x49489f > _0x3a6f76 ? _0x49489f : _0x3a6f76;
                        _0x3d624d = _0x55fc0a > _0x3d624d ? _0x55fc0a : _0x3d624d;
                        _0x2c604c = (_0x49489f = _0x3f4243 * _0x28efb4 + _0x23bf71 * _0x2fcf5e + _0x371bdd) < _0x2c604c ? _0x49489f : _0x2c604c;
                        _0x35393f = (_0x55fc0a = _0x5b5c4e * _0x28efb4 + _0x8d8e3b * _0x2fcf5e + _0x7e8a1a) < _0x35393f ? _0x55fc0a : _0x35393f;
                        _0x3a6f76 = _0x49489f > _0x3a6f76 ? _0x49489f : _0x3a6f76;
                        _0x3d624d = _0x55fc0a > _0x3d624d ? _0x55fc0a : _0x3d624d;
                        _0x2c604c = (_0x49489f = _0x3f4243 * _0x5a9086 + _0x23bf71 * _0x2fcf5e + _0x371bdd) < _0x2c604c ? _0x49489f : _0x2c604c;
                        _0x35393f = (_0x55fc0a = _0x5b5c4e * _0x5a9086 + _0x8d8e3b * _0x2fcf5e + _0x7e8a1a) < _0x35393f ? _0x55fc0a : _0x35393f;
                        _0x3a6f76 = _0x49489f > _0x3a6f76 ? _0x49489f : _0x3a6f76;
                        _0x3d624d = _0x55fc0a > _0x3d624d ? _0x55fc0a : _0x3d624d;
                        this.minX = _0x2c604c;
                        this.minY = _0x35393f;
                        this.maxX = _0x3a6f76;
                        this.maxY = _0x3d624d;
                    }, _0x515454.prototype.addVertexData = function (_0x4c2497, _0x468acc, _0x3825b2) {
                        ;
                        for (var _0x50ccdb = this.minX, _0x1f6eb3 = this.minY, _0x281c77 = this.maxX, _0x5cc4a1 = this.maxY, _0x19e37a = _0x468acc; _0x19e37a < _0x3825b2; _0x19e37a += 2) {
                            var _0x1d8b35 = _0x4c2497[_0x19e37a], _0x24b23a = _0x4c2497[_0x19e37a + 1];
                            _0x50ccdb = _0x1d8b35 < _0x50ccdb ? _0x1d8b35 : _0x50ccdb;
                            _0x1f6eb3 = _0x24b23a < _0x1f6eb3 ? _0x24b23a : _0x1f6eb3;
                            _0x281c77 = _0x1d8b35 > _0x281c77 ? _0x1d8b35 : _0x281c77;
                            _0x5cc4a1 = _0x24b23a > _0x5cc4a1 ? _0x24b23a : _0x5cc4a1;
                        }
                        this.minX = _0x50ccdb;
                        this.minY = _0x1f6eb3;
                        this.maxX = _0x281c77;
                        this.maxY = _0x5cc4a1;
                    }, _0x515454.prototype.addVertices = function (_0x39489d, _0xa5e93c, _0x2b43e1, _0x28238a) {
                        ;
                        this.addVerticesMatrix(_0x39489d.worldTransform, _0xa5e93c, _0x2b43e1, _0x28238a);
                    }, _0x515454.prototype.addVerticesMatrix = function (_0xdee293, _0x1244f1, _0x3d21c9, _0x410153, _0x3364c1, _0x22d09d) {
                        ;
                        void 0 === _0x3364c1 && (_0x3364c1 = 0);
                        void 0 === _0x22d09d && (_0x22d09d = _0x3364c1);
                        for (var _0x103d17 = _0xdee293.a, _0x1e6332 = _0xdee293.b, _0x2c2500 = _0xdee293.c, _0x2a45a5 = _0xdee293.d, _0x5057a3 = _0xdee293.tx, _0x2cd76b = _0xdee293.ty, _0x4dadbf = this.minX, _0x378723 = this.minY, _0x39a447 = this.maxX, _0x1c2666 = this.maxY, _0x41efae = _0x3d21c9; _0x41efae < _0x410153; _0x41efae += 2) {
                            var _0x4e35eb = _0x1244f1[_0x41efae], _0x23da3f = _0x1244f1[_0x41efae + 1], _0x4e368b = _0x103d17 * _0x4e35eb + _0x2c2500 * _0x23da3f + _0x5057a3, _0x30c7b8 = _0x2a45a5 * _0x23da3f + _0x1e6332 * _0x4e35eb + _0x2cd76b;
                            _0x4dadbf = Math.min(_0x4dadbf, _0x4e368b - _0x3364c1);
                            _0x39a447 = Math.max(_0x39a447, _0x4e368b + _0x3364c1);
                            _0x378723 = Math.min(_0x378723, _0x30c7b8 - _0x22d09d);
                            _0x1c2666 = Math.max(_0x1c2666, _0x30c7b8 + _0x22d09d);
                        }
                        this.minX = _0x4dadbf;
                        this.minY = _0x378723;
                        this.maxX = _0x39a447;
                        this.maxY = _0x1c2666;
                    }, _0x515454.prototype.addBounds = function (_0x458a22) {
                        var _0x18a86a = this.minX, _0x22e500 = this.minY, _0x27c952 = this.maxX, _0x2fae58 = this.maxY;
                        this.minX = _0x458a22.minX < _0x18a86a ? _0x458a22.minX : _0x18a86a;
                        this.minY = _0x458a22.minY < _0x22e500 ? _0x458a22.minY : _0x22e500;
                        this.maxX = _0x458a22.maxX > _0x27c952 ? _0x458a22.maxX : _0x27c952;
                        this.maxY = _0x458a22.maxY > _0x2fae58 ? _0x458a22.maxY : _0x2fae58;
                    }, _0x515454.prototype.addBoundsMask = function (_0x13d733, _0x4e4314) {
                        var _0x2b730e = _0x13d733.minX > _0x4e4314.minX ? _0x13d733.minX : _0x4e4314.minX, _0x11ca93 = _0x13d733.minY > _0x4e4314.minY ? _0x13d733.minY : _0x4e4314.minY, _0x1f475b = _0x13d733.maxX < _0x4e4314.maxX ? _0x13d733.maxX : _0x4e4314.maxX, _0x59fbdb = _0x13d733.maxY < _0x4e4314.maxY ? _0x13d733.maxY : _0x4e4314.maxY;
                        if (_0x2b730e <= _0x1f475b && _0x11ca93 <= _0x59fbdb) {
                            var _0x3389b5 = this.minX, _0x1d7c0a = this.minY, _0x1df06e = this.maxX, _0x565da7 = this.maxY;
                            this.minX = _0x2b730e < _0x3389b5 ? _0x2b730e : _0x3389b5;
                            this.minY = _0x11ca93 < _0x1d7c0a ? _0x11ca93 : _0x1d7c0a;
                            this.maxX = _0x1f475b > _0x1df06e ? _0x1f475b : _0x1df06e;
                            this.maxY = _0x59fbdb > _0x565da7 ? _0x59fbdb : _0x565da7;
                        }
                    }, _0x515454.prototype.addBoundsMatrix = function (_0x16a8d6, _0x1d336b) {
                        ;
                        this.addFrameMatrix(_0x1d336b, _0x16a8d6.minX, _0x16a8d6.minY, _0x16a8d6.maxX, _0x16a8d6.maxY);
                    }, _0x515454.prototype.addBoundsArea = function (_0x3403d5, _0x5a520c) {
                        var _0x1f2b37 = _0x3403d5.minX > _0x5a520c.x ? _0x3403d5.minX : _0x5a520c.x, _0xd85f71 = _0x3403d5.minY > _0x5a520c.y ? _0x3403d5.minY : _0x5a520c.y, _0x5a8aec = _0x3403d5.maxX < _0x5a520c.x + _0x5a520c.width ? _0x3403d5.maxX : _0x5a520c.x + _0x5a520c.width, _0x1db434 = _0x3403d5.maxY < _0x5a520c.y + _0x5a520c.height ? _0x3403d5.maxY : _0x5a520c.y + _0x5a520c.height;
                        if (_0x1f2b37 <= _0x5a8aec && _0xd85f71 <= _0x1db434) {
                            var _0x5416bc = this.minX, _0x1697cc = this.minY, _0x4d59c0 = this.maxX, _0x51e339 = this.maxY;
                            this.minX = _0x1f2b37 < _0x5416bc ? _0x1f2b37 : _0x5416bc;
                            this.minY = _0xd85f71 < _0x1697cc ? _0xd85f71 : _0x1697cc;
                            this.maxX = _0x5a8aec > _0x4d59c0 ? _0x5a8aec : _0x4d59c0;
                            this.maxY = _0x1db434 > _0x51e339 ? _0x1db434 : _0x51e339;
                        }
                    }, _0x515454.prototype.pad = function (_0x11a9e5, _0x2ec2a4) {
                        ;
                        void 0 === _0x11a9e5 && (_0x11a9e5 = 0);
                        void 0 === _0x2ec2a4 && (_0x2ec2a4 = _0x11a9e5);
                        this.isEmpty() || (this.minX -= _0x11a9e5, this.maxX += _0x11a9e5, this.minY -= _0x2ec2a4, this.maxY += _0x2ec2a4);
                    }, _0x515454.prototype.addFramePad = function (_0x28d600, _0x5b36d4, _0x514383, _0x3615a8, _0x55b6bc, _0xb0fa6d) {
                        ;
                        _0x28d600 -= _0x55b6bc;
                        _0x5b36d4 -= _0xb0fa6d;
                        _0x514383 += _0x55b6bc;
                        _0x3615a8 += _0xb0fa6d;
                        this.minX = this.minX < _0x28d600 ? this.minX : _0x28d600;
                        this.maxX = this.maxX > _0x514383 ? this.maxX : _0x514383;
                        this.minY = this.minY < _0x5b36d4 ? this.minY : _0x5b36d4;
                        this.maxY = this.maxY > _0x3615a8 ? this.maxY : _0x3615a8;
                    }, _0x515454;
                }(), _0x459fd5 = function (_0xe29f33, _0x54659b) {
                    ;
                    return _0x459fd5 = Object.setPrototypeOf || { '__proto__': [] } instanceof Array && function (_0x504ae7, _0xee6d9) {
                        ;
                        _0x504ae7['__proto__'] = _0xee6d9;
                    } || function (_0x4280c4, _0x47edbc) {
                        ;
                        for (var _0x1b0db6 in _0x47edbc)
                            _0x47edbc.hasOwnProperty(_0x1b0db6) && (_0x4280c4[_0x1b0db6] = _0x47edbc[_0x1b0db6]);
                    }, _0x459fd5(_0xe29f33, _0x54659b);
                };
            function _0x18b0e8(_0x31f916, _0x42fe65) {
                ;
                function _0x1808cd() {
                    ;
                    this.constructor = _0x31f916;
                }
                _0x459fd5(_0x31f916, _0x42fe65);
                _0x31f916.prototype = null === _0x42fe65 ? Object.create(_0x42fe65) : (_0x1808cd.prototype = _0x42fe65.prototype, new _0x1808cd());
            }
            var _0x5b33ad, _0xbac723, _0x589edd, _0x284154, _0x291f74, _0x26c854, _0x31f00a, _0x35408f, _0x1ca957, _0xa8d7d3, _0x4f3a6b, _0x320e8d, _0x4c1509, _0x3138a3, _0x1a2fb3, _0x37fe98, _0x7565bf, _0xa5eaed, _0x58f8c9, _0x55713e = function (_0x1d4ad7) {
                    ;
                    function _0x60723f() {
                        var _0x3e4b3e = _0x1d4ad7.call(this) || this;
                        return _0x3e4b3e.tempDisplayObjectParent = null, _0x3e4b3e.transform = new _0x5a7e38.wx(), _0x3e4b3e.alpha = 1, _0x3e4b3e.visible = true, _0x3e4b3e.renderable = true, _0x3e4b3e.cullable = false, _0x3e4b3e.cullArea = null, _0x3e4b3e.parent = null, _0x3e4b3e.worldAlpha = 1, _0x3e4b3e['_lastSortedIndex'] = 0, _0x3e4b3e['_zIndex'] = 0, _0x3e4b3e.filterArea = null, _0x3e4b3e.filters = null, _0x3e4b3e['_enabledFilters'] = null, _0x3e4b3e['_bounds'] = new _0xc7633d(), _0x3e4b3e['_localBounds'] = null, _0x3e4b3e['_boundsID'] = 0, _0x3e4b3e['_boundsRect'] = null, _0x3e4b3e['_localBoundsRect'] = null, _0x3e4b3e['_mask'] = null, _0x3e4b3e['_maskRefCount'] = 0, _0x3e4b3e['_destroyed'] = false, _0x3e4b3e.isSprite = false, _0x3e4b3e.isMask = false, _0x3e4b3e;
                    }
                    return _0x18b0e8(_0x60723f, _0x1d4ad7), _0x60723f.mixin = function (_0x207c08) {
                        ;
                        for (var _0x23819b = Object.keys(_0x207c08), _0x132f3e = 0; _0x132f3e < _0x23819b.length; ++_0x132f3e) {
                            var _0x265ebe = _0x23819b[_0x132f3e];
                            Object.defineProperty(_0x60723f.prototype, _0x265ebe, Object.getOwnPropertyDescriptor(_0x207c08, _0x265ebe));
                        }
                    }, Object.defineProperty(_0x60723f.prototype, 'destroyed', {
                        'get': function () {
                            return this['_destroyed'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x60723f.prototype['_recursivePostUpdateTransform'] = function () {
                        ;
                        this.parent ? (this.parent['_recursivePostUpdateTransform'](), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this['_tempDisplayObjectParent'].transform);
                    }, _0x60723f.prototype.updateTransform = function () {
                        ;
                        this['_boundsID']++;
                        this.transform.updateTransform(this.parent.transform);
                        this.worldAlpha = this.alpha * this.parent.worldAlpha;
                    }, _0x60723f.prototype.getBounds = function (_0x46a559, _0x5224ad) {
                        ;
                        return _0x46a559 || (this.parent ? (this['_recursivePostUpdateTransform'](), this.updateTransform()) : (this.parent = this['_tempDisplayObjectParent'], this.updateTransform(), this.parent = null)), this['_bounds'].updateID !== this['_boundsID'] && (this.calculateBounds(), this['_bounds'].updateID = this['_boundsID']), _0x5224ad || (this['_boundsRect'] || (this['_boundsRect'] = new _0x5a7e38.Ae()), _0x5224ad = this['_boundsRect']), this['_bounds'].getRectangle(_0x5224ad);
                    }, _0x60723f.prototype.getLocalBounds = function (_0x4ed0d0) {
                        ;
                        _0x4ed0d0 || (this['_localBoundsRect'] || (this['_localBoundsRect'] = new _0x5a7e38.Ae()), _0x4ed0d0 = this['_localBoundsRect']);
                        this['_localBounds'] || (this['_localBounds'] = new _0xc7633d());
                        var _0x4a5f91 = this.transform, _0x47809c = this.parent;
                        this.parent = null;
                        this.transform = this['_tempDisplayObjectParent'].transform;
                        var _0x3f5182 = this['_bounds'], _0xc98530 = this['_boundsID'];
                        this['_bounds'] = this['_localBounds'];
                        var _0x4476ab = this.getBounds(false, _0x4ed0d0);
                        return this.parent = _0x47809c, this.transform = _0x4a5f91, this['_bounds'] = _0x3f5182, this['_bounds'].updateID += this['_boundsID'] - _0xc98530, _0x4476ab;
                    }, _0x60723f.prototype.toGlobal = function (_0x5b08b4, _0x29decf, _0x12b354) {
                        ;
                        return void 0 === _0x12b354 && (_0x12b354 = false), _0x12b354 || (this['_recursivePostUpdateTransform'](), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this['_tempDisplayObjectParent'], this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(_0x5b08b4, _0x29decf);
                    }, _0x60723f.prototype.toLocal = function (_0x2da95a, _0x3c359a, _0x5c19c7, _0x1bbd1e) {
                        ;
                        return _0x3c359a && (_0x2da95a = _0x3c359a.toGlobal(_0x2da95a, _0x5c19c7, _0x1bbd1e)), _0x1bbd1e || (this['_recursivePostUpdateTransform'](), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this['_tempDisplayObjectParent'], this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(_0x2da95a, _0x5c19c7);
                    }, _0x60723f.prototype.setParent = function (_0x3886e7) {
                        ;
                        if (!_0x3886e7 || !_0x3886e7.addChild) {
                            throw new Error('setParent: Argument must be a Container');
                        }
                        return _0x3886e7.addChild(this), _0x3886e7;
                    }, _0x60723f.prototype.setTransform = function (_0x2fa494, _0x401b7b, _0x3cf5a5, _0x1a84cb, _0x279111, _0x36b0f0, _0x5b5053, _0x55655f, _0x537a09) {
                        ;
                        return void 0 === _0x2fa494 && (_0x2fa494 = 0), void 0 === _0x401b7b && (_0x401b7b = 0), void 0 === _0x3cf5a5 && (_0x3cf5a5 = 1), void 0 === _0x1a84cb && (_0x1a84cb = 1), void 0 === _0x279111 && (_0x279111 = 0), void 0 === _0x36b0f0 && (_0x36b0f0 = 0), void 0 === _0x5b5053 && (_0x5b5053 = 0), void 0 === _0x55655f && (_0x55655f = 0), void 0 === _0x537a09 && (_0x537a09 = 0), this.position.x = _0x2fa494, this.position.y = _0x401b7b, this.scale.x = _0x3cf5a5 || 1, this.scale.y = _0x1a84cb || 1, this.rotation = _0x279111, this.skew.x = _0x36b0f0, this.skew.y = _0x5b5053, this.pivot.x = _0x55655f, this.pivot.y = _0x537a09, this;
                    }, _0x60723f.prototype.destroy = function (_0x596820) {
                        ;
                        this.parent && this.parent.removeChild(this);
                        this['_destroyed'] = true;
                        this.transform = null;
                        this.parent = null;
                        this['_bounds'] = null;
                        this.mask = null;
                        this.cullArea = null;
                        this.filters = null;
                        this.filterArea = null;
                        this.hitArea = null;
                        this.interactive = false;
                        this.interactiveChildren = false;
                        this.emit('destroyed');
                        this.removeAllListeners();
                    }, Object.defineProperty(_0x60723f.prototype, '_tempDisplayObjectParent', {
                        'get': function () {
                            ;
                            return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new _0x547e54()), this.tempDisplayObjectParent;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x60723f.prototype.enableTempParent = function () {
                        var _0xc899a6 = this.parent;
                        return this.parent = this['_tempDisplayObjectParent'], _0xc899a6;
                    }, _0x60723f.prototype.disableTempParent = function (_0x29d249) {
                        ;
                        this.parent = _0x29d249;
                    }, Object.defineProperty(_0x60723f.prototype, 'x', {
                        'get': function () {
                            return this.position.x;
                        },
                        'set': function (_0x526edb) {
                            ;
                            this.transform.position.x = _0x526edb;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x60723f.prototype, 'y', {
                        'get': function () {
                            ;
                            return this.position.y;
                        },
                        'set': function (_0x4bf59f) {
                            ;
                            this.transform.position.y = _0x4bf59f;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x60723f.prototype, 'worldTransform', {
                        'get': function () {
                            ;
                            return this.transform.worldTransform;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x60723f.prototype, 'localTransform', {
                        'get': function () {
                            ;
                            return this.transform.localTransform;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x60723f.prototype, 'position', {
                        'get': function () {
                            ;
                            return this.transform.position;
                        },
                        'set': function (_0x657159) {
                            ;
                            this.transform.position.copyFrom(_0x657159);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x60723f.prototype, 'scale', {
                        'get': function () {
                            ;
                            return this.transform.scale;
                        },
                        'set': function (_0x980fcf) {
                            ;
                            this.transform.scale.copyFrom(_0x980fcf);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x60723f.prototype, 'pivot', {
                        'get': function () {
                            ;
                            return this.transform.pivot;
                        },
                        'set': function (_0x20cf56) {
                            ;
                            this.transform.pivot.copyFrom(_0x20cf56);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x60723f.prototype, 'skew', {
                        'get': function () {
                            return this.transform.skew;
                        },
                        'set': function (_0x5f9808) {
                            ;
                            this.transform.skew.copyFrom(_0x5f9808);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x60723f.prototype, 'rotation', {
                        'get': function () {
                            ;
                            return this.transform.rotation;
                        },
                        'set': function (_0x3bcbb9) {
                            ;
                            this.transform.rotation = _0x3bcbb9;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x60723f.prototype, 'angle', {
                        'get': function () {
                            ;
                            return this.transform.rotation * _0x5a7e38.jl;
                        },
                        'set': function (_0x30e0ff) {
                            this.transform.rotation = _0x30e0ff * _0x5a7e38.ZX;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x60723f.prototype, 'zIndex', {
                        'get': function () {
                            ;
                            return this['_zIndex'];
                        },
                        'set': function (_0x4f7950) {
                            ;
                            this['_zIndex'] = _0x4f7950;
                            this.parent && (this.parent.sortDirty = true);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x60723f.prototype, 'worldVisible', {
                        'get': function () {
                            var _0x1d00ea = this;
                            do {
                                if (!_0x1d00ea.visible) {
                                    return false;
                                }
                                _0x1d00ea = _0x1d00ea.parent;
                            } while (_0x1d00ea);
                            return true;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x60723f.prototype, 'mask', {
                        'get': function () {
                            ;
                            return this['_mask'];
                        },
                        'set': function (_0x378266) {
                            var _0x59fd52;
                            this['_mask'] !== _0x378266 && (this['_mask'] && ((_0x59fd52 = this['_mask'].maskObject || this['_mask'])['_maskRefCount']--, 0 === _0x59fd52['_maskRefCount'] && (_0x59fd52.renderable = true, _0x59fd52.isMask = false)), this['_mask'] = _0x378266, this['_mask'] && (0 === (_0x59fd52 = this['_mask'].maskObject || this['_mask'])['_maskRefCount'] && (_0x59fd52.renderable = false, _0x59fd52.isMask = true), _0x59fd52['_maskRefCount']++));
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x60723f;
                }(_0x308b12.vp), _0x547e54 = function (_0x14b183) {
                    function _0x461dfe() {
                        var _0x562fe5 = null !== _0x14b183 && _0x14b183.apply(this, arguments) || this;
                        return _0x562fe5.sortDirty = null, _0x562fe5;
                    }
                    return _0x18b0e8(_0x461dfe, _0x14b183), _0x461dfe;
                }(_0x55713e);
            function _0x4e923f(_0x16791b, _0x1dad53) {
                ;
                return _0x16791b.zIndex === _0x1dad53.zIndex ? _0x16791b['_lastSortedIndex'] - _0x1dad53['_lastSortedIndex'] : _0x16791b.zIndex - _0x1dad53.zIndex;
            }
            _0x55713e.prototype.displayObjectUpdateTransform = _0x55713e.prototype.updateTransform;
            (function (_0xc8c442) {
                ;
                _0xc8c442[_0xc8c442.WEBGL_LEGACY = 0] = 'WEBGL_LEGACY';
                _0xc8c442[_0xc8c442.WEBGL = 1] = 'WEBGL';
                _0xc8c442[_0xc8c442.WEBGL2 = 2] = 'WEBGL2';
            }(_0x5b33ad || (_0x5b33ad = {})));
            (function (_0x342a2a) {
                ;
                _0x342a2a[_0x342a2a.UNKNOWN = 0] = 'UNKNOWN';
                _0x342a2a[_0x342a2a.WEBGL = 1] = 'WEBGL';
                _0x342a2a[_0x342a2a.CANVAS = 2] = 'CANVAS';
            }(_0xbac723 || (_0xbac723 = {})));
            (function (_0x3402f0) {
                ;
                _0x3402f0[_0x3402f0.COLOR = 16384] = 'COLOR';
                _0x3402f0[_0x3402f0.DEPTH = 256] = 'DEPTH';
                _0x3402f0[_0x3402f0.STENCIL = 1024] = 'STENCIL';
            }(_0x589edd || (_0x589edd = {})));
            (function (_0xa3d88f) {
                ;
                _0xa3d88f[_0xa3d88f.NORMAL = 0] = 'NORMAL';
                _0xa3d88f[_0xa3d88f.ADD = 1] = 'ADD';
                _0xa3d88f[_0xa3d88f.MULTIPLY = 2] = 'MULTIPLY';
                _0xa3d88f[_0xa3d88f.SCREEN = 3] = 'SCREEN';
                _0xa3d88f[_0xa3d88f.OVERLAY = 4] = 'OVERLAY';
                _0xa3d88f[_0xa3d88f.DARKEN = 5] = 'DARKEN';
                _0xa3d88f[_0xa3d88f.LIGHTEN = 6] = 'LIGHTEN';
                _0xa3d88f[_0xa3d88f.COLOR_DODGE = 7] = 'COLOR_DODGE';
                _0xa3d88f[_0xa3d88f.COLOR_BURN = 8] = 'COLOR_BURN';
                _0xa3d88f[_0xa3d88f.HARD_LIGHT = 9] = 'HARD_LIGHT';
                _0xa3d88f[_0xa3d88f.SOFT_LIGHT = 10] = 'SOFT_LIGHT';
                _0xa3d88f[_0xa3d88f.DIFFERENCE = 11] = 'DIFFERENCE';
                _0xa3d88f[_0xa3d88f.EXCLUSION = 12] = 'EXCLUSION';
                _0xa3d88f[_0xa3d88f.HUE = 13] = 'HUE';
                _0xa3d88f[_0xa3d88f.SATURATION = 14] = 'SATURATION';
                _0xa3d88f[_0xa3d88f.COLOR = 15] = 'COLOR';
                _0xa3d88f[_0xa3d88f.LUMINOSITY = 16] = 'LUMINOSITY';
                _0xa3d88f[_0xa3d88f.NORMAL_NPM = 17] = 'NORMAL_NPM';
                _0xa3d88f[_0xa3d88f.ADD_NPM = 18] = 'ADD_NPM';
                _0xa3d88f[_0xa3d88f.SCREEN_NPM = 19] = 'SCREEN_NPM';
                _0xa3d88f[_0xa3d88f.NONE = 20] = 'NONE';
                _0xa3d88f[_0xa3d88f.SRC_OVER = 0] = 'SRC_OVER';
                _0xa3d88f[_0xa3d88f.SRC_IN = 21] = 'SRC_IN';
                _0xa3d88f[_0xa3d88f.SRC_OUT = 22] = 'SRC_OUT';
                _0xa3d88f[_0xa3d88f.SRC_ATOP = 23] = 'SRC_ATOP';
                _0xa3d88f[_0xa3d88f.DST_OVER = 24] = 'DST_OVER';
                _0xa3d88f[_0xa3d88f.DST_IN = 25] = 'DST_IN';
                _0xa3d88f[_0xa3d88f.DST_OUT = 26] = 'DST_OUT';
                _0xa3d88f[_0xa3d88f.DST_ATOP = 27] = 'DST_ATOP';
                _0xa3d88f[_0xa3d88f.ERASE = 26] = 'ERASE';
                _0xa3d88f[_0xa3d88f.SUBTRACT = 28] = 'SUBTRACT';
                _0xa3d88f[_0xa3d88f.XOR = 29] = 'XOR';
            }(_0x284154 || (_0x284154 = {})));
            (function (_0x4785e8) {
                ;
                _0x4785e8[_0x4785e8.POINTS = 0] = 'POINTS';
                _0x4785e8[_0x4785e8.LINES = 1] = 'LINES';
                _0x4785e8[_0x4785e8.LINE_LOOP = 2] = 'LINE_LOOP';
                _0x4785e8[_0x4785e8.LINE_STRIP = 3] = 'LINE_STRIP';
                _0x4785e8[_0x4785e8.TRIANGLES = 4] = 'TRIANGLES';
                _0x4785e8[_0x4785e8.TRIANGLE_STRIP = 5] = 'TRIANGLE_STRIP';
                _0x4785e8[_0x4785e8.TRIANGLE_FAN = 6] = 'TRIANGLE_FAN';
            }(_0x291f74 || (_0x291f74 = {})));
            (function (_0x1f9988) {
                ;
                _0x1f9988[_0x1f9988.RGBA = 6408] = 'RGBA';
                _0x1f9988[_0x1f9988.RGB = 6407] = 'RGB';
                _0x1f9988[_0x1f9988.RG = 33319] = 'RG';
                _0x1f9988[_0x1f9988.RED = 6403] = 'RED';
                _0x1f9988[_0x1f9988.RGBA_INTEGER = 36249] = 'RGBA_INTEGER';
                _0x1f9988[_0x1f9988.RGB_INTEGER = 36248] = 'RGB_INTEGER';
                _0x1f9988[_0x1f9988.RG_INTEGER = 33320] = 'RG_INTEGER';
                _0x1f9988[_0x1f9988.RED_INTEGER = 36244] = 'RED_INTEGER';
                _0x1f9988[_0x1f9988.ALPHA = 6406] = 'ALPHA';
                _0x1f9988[_0x1f9988.LUMINANCE = 6409] = 'LUMINANCE';
                _0x1f9988[_0x1f9988.LUMINANCE_ALPHA = 6410] = 'LUMINANCE_ALPHA';
                _0x1f9988[_0x1f9988.DEPTH_COMPONENT = 6402] = 'DEPTH_COMPONENT';
                _0x1f9988[_0x1f9988.DEPTH_STENCIL = 34041] = 'DEPTH_STENCIL';
            }(_0x26c854 || (_0x26c854 = {})));
            (function (_0x8362b3) {
                ;
                _0x8362b3[_0x8362b3.TEXTURE_2D = 3553] = 'TEXTURE_2D';
                _0x8362b3[_0x8362b3.TEXTURE_CUBE_MAP = 34067] = 'TEXTURE_CUBE_MAP';
                _0x8362b3[_0x8362b3.TEXTURE_2D_ARRAY = 35866] = 'TEXTURE_2D_ARRAY';
                _0x8362b3[_0x8362b3.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = 'TEXTURE_CUBE_MAP_POSITIVE_X';
                _0x8362b3[_0x8362b3.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = 'TEXTURE_CUBE_MAP_NEGATIVE_X';
                _0x8362b3[_0x8362b3.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = 'TEXTURE_CUBE_MAP_POSITIVE_Y';
                _0x8362b3[_0x8362b3.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = 'TEXTURE_CUBE_MAP_NEGATIVE_Y';
                _0x8362b3[_0x8362b3.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = 'TEXTURE_CUBE_MAP_POSITIVE_Z';
                _0x8362b3[_0x8362b3.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = 'TEXTURE_CUBE_MAP_NEGATIVE_Z';
            }(_0x31f00a || (_0x31f00a = {})));
            (function (_0x23a67f) {
                ;
                _0x23a67f[_0x23a67f.UNSIGNED_BYTE = 5121] = 'UNSIGNED_BYTE';
                _0x23a67f[_0x23a67f.UNSIGNED_SHORT = 5123] = 'UNSIGNED_SHORT';
                _0x23a67f[_0x23a67f.UNSIGNED_SHORT_5_6_5 = 33635] = 'UNSIGNED_SHORT_5_6_5';
                _0x23a67f[_0x23a67f.UNSIGNED_SHORT_4_4_4_4 = 32819] = 'UNSIGNED_SHORT_4_4_4_4';
                _0x23a67f[_0x23a67f.UNSIGNED_SHORT_5_5_5_1 = 32820] = 'UNSIGNED_SHORT_5_5_5_1';
                _0x23a67f[_0x23a67f.UNSIGNED_INT = 5125] = 'UNSIGNED_INT';
                _0x23a67f[_0x23a67f.UNSIGNED_INT_10F_11F_11F_REV = 35899] = 'UNSIGNED_INT_10F_11F_11F_REV';
                _0x23a67f[_0x23a67f.UNSIGNED_INT_2_10_10_10_REV = 33640] = 'UNSIGNED_INT_2_10_10_10_REV';
                _0x23a67f[_0x23a67f.UNSIGNED_INT_24_8 = 34042] = 'UNSIGNED_INT_24_8';
                _0x23a67f[_0x23a67f.UNSIGNED_INT_5_9_9_9_REV = 35902] = 'UNSIGNED_INT_5_9_9_9_REV';
                _0x23a67f[_0x23a67f.BYTE = 5120] = 'BYTE';
                _0x23a67f[_0x23a67f.SHORT = 5122] = 'SHORT';
                _0x23a67f[_0x23a67f.INT = 5124] = 'INT';
                _0x23a67f[_0x23a67f.FLOAT = 5126] = 'FLOAT';
                _0x23a67f[_0x23a67f.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = 'FLOAT_32_UNSIGNED_INT_24_8_REV';
                _0x23a67f[_0x23a67f.HALF_FLOAT = 36193] = 'HALF_FLOAT';
            }(_0x35408f || (_0x35408f = {})));
            (function (_0x4ab330) {
                ;
                _0x4ab330[_0x4ab330.FLOAT = 0] = 'FLOAT';
                _0x4ab330[_0x4ab330.INT = 1] = 'INT';
                _0x4ab330[_0x4ab330.UINT = 2] = 'UINT';
            }(_0x1ca957 || (_0x1ca957 = {})));
            (function (_0x46ba72) {
                ;
                _0x46ba72[_0x46ba72.NEAREST = 0] = 'NEAREST';
                _0x46ba72[_0x46ba72.LINEAR = 1] = 'LINEAR';
            }(_0xa8d7d3 || (_0xa8d7d3 = {})));
            (function (_0xc17f8e) {
                ;
                _0xc17f8e[_0xc17f8e.CLAMP = 33071] = 'CLAMP';
                _0xc17f8e[_0xc17f8e.REPEAT = 10497] = 'REPEAT';
                _0xc17f8e[_0xc17f8e.MIRRORED_REPEAT = 33648] = 'MIRRORED_REPEAT';
            }(_0x4f3a6b || (_0x4f3a6b = {})));
            (function (_0x1a9416) {
                ;
                _0x1a9416[_0x1a9416.OFF = 0] = 'OFF';
                _0x1a9416[_0x1a9416.POW2 = 1] = 'POW2';
                _0x1a9416[_0x1a9416.ON = 2] = 'ON';
                _0x1a9416[_0x1a9416.ON_MANUAL = 3] = 'ON_MANUAL';
            }(_0x320e8d || (_0x320e8d = {})));
            (function (_0xe392c5) {
                ;
                _0xe392c5[_0xe392c5.NPM = 0] = 'NPM';
                _0xe392c5[_0xe392c5.UNPACK = 1] = 'UNPACK';
                _0xe392c5[_0xe392c5.PMA = 2] = 'PMA';
                _0xe392c5[_0xe392c5.NO_PREMULTIPLIED_ALPHA = 0] = 'NO_PREMULTIPLIED_ALPHA';
                _0xe392c5[_0xe392c5.PREMULTIPLY_ON_UPLOAD = 1] = 'PREMULTIPLY_ON_UPLOAD';
                _0xe392c5[_0xe392c5.PREMULTIPLY_ALPHA = 2] = 'PREMULTIPLY_ALPHA';
                _0xe392c5[_0xe392c5.PREMULTIPLIED_ALPHA = 2] = 'PREMULTIPLIED_ALPHA';
            }(_0x4c1509 || (_0x4c1509 = {})));
            (function (_0x4d5295) {
                ;
                _0x4d5295[_0x4d5295.NO = 0] = 'NO';
                _0x4d5295[_0x4d5295.YES = 1] = 'YES';
                _0x4d5295[_0x4d5295.AUTO = 2] = 'AUTO';
                _0x4d5295[_0x4d5295.BLEND = 0] = 'BLEND';
                _0x4d5295[_0x4d5295.CLEAR = 1] = 'CLEAR';
                _0x4d5295[_0x4d5295.BLIT = 2] = 'BLIT';
            }(_0x3138a3 || (_0x3138a3 = {})));
            (function (_0x11877e) {
                ;
                _0x11877e[_0x11877e.AUTO = 0] = 'AUTO';
                _0x11877e[_0x11877e.MANUAL = 1] = 'MANUAL';
            }(_0x1a2fb3 || (_0x1a2fb3 = {})));
            (function (_0x540262) {
                ;
                _0x540262.LOW = 'lowp';
                _0x540262.MEDIUM = 'mediump';
                _0x540262.HIGH = 'highp';
            }(_0x37fe98 || (_0x37fe98 = {})));
            (function (_0x323201) {
                ;
                _0x323201[_0x323201.NONE = 0] = 'NONE';
                _0x323201[_0x323201.SCISSOR = 1] = 'SCISSOR';
                _0x323201[_0x323201.STENCIL = 2] = 'STENCIL';
                _0x323201[_0x323201.SPRITE = 3] = 'SPRITE';
            }(_0x7565bf || (_0x7565bf = {})));
            (function (_0x10ead4) {
                ;
                _0x10ead4[_0x10ead4.NONE = 0] = 'NONE';
                _0x10ead4[_0x10ead4.LOW = 2] = 'LOW';
                _0x10ead4[_0x10ead4.MEDIUM = 4] = 'MEDIUM';
                _0x10ead4[_0x10ead4.HIGH = 8] = 'HIGH';
            }(_0xa5eaed || (_0xa5eaed = {})));
            (function (_0x232e9f) {
                ;
                _0x232e9f[_0x232e9f.ELEMENT_ARRAY_BUFFER = 34963] = 'ELEMENT_ARRAY_BUFFER';
                _0x232e9f[_0x232e9f.ARRAY_BUFFER = 34962] = 'ARRAY_BUFFER';
                _0x232e9f[_0x232e9f.UNIFORM_BUFFER = 35345] = 'UNIFORM_BUFFER';
            }(_0x58f8c9 || (_0x58f8c9 = {})));
            var _0x176b46 = function (_0x4fa7b6) {
                ;
                function _0x1dbe73() {
                    var _0x578874 = _0x4fa7b6.call(this) || this;
                    return _0x578874.children = [], _0x578874.sortableChildren = _0x1c9fd4.X.SORTABLE_CHILDREN, _0x578874.sortDirty = false, _0x578874;
                }
                return _0x18b0e8(_0x1dbe73, _0x4fa7b6), _0x1dbe73.prototype.onChildrenChange = function (_0x543294) {
                }, _0x1dbe73.prototype.addChild = function () {
                    ;
                    for (var _0x4240ee = arguments, _0x41fa74 = [], _0x2e1332 = 0; _0x2e1332 < arguments.length; _0x2e1332++) {
                        _0x41fa74[_0x2e1332] = _0x4240ee[_0x2e1332];
                    }
                    if (_0x41fa74.length > 1) {
                        for (var _0x2962f6 = 0; _0x2962f6 < _0x41fa74.length; _0x2962f6++) {
                            this.addChild(_0x41fa74[_0x2962f6]);
                        }
                    } else {
                        var _0x3337d6 = _0x41fa74[0];
                        _0x3337d6.parent && _0x3337d6.parent.removeChild(_0x3337d6);
                        _0x3337d6.parent = this;
                        this.sortDirty = true;
                        _0x3337d6.transform['_parentID'] = -1;
                        this.children.push(_0x3337d6);
                        this['_boundsID']++;
                        this.onChildrenChange(this.children.length - 1);
                        this.emit('childAdded', _0x3337d6, this, this.children.length - 1);
                        _0x3337d6.emit('added', this);
                    }
                    return _0x41fa74[0];
                }, _0x1dbe73.prototype.addChildAt = function (_0x14f01e, _0x163ab3) {
                    ;
                    if (_0x163ab3 < 0 || _0x163ab3 > this.children.length) {
                        throw new Error(_0x14f01e + 'addChildAt: The index ' + _0x163ab3 + ' supplied is out of bounds ' + this.children.length);
                    }
                    return _0x14f01e.parent && _0x14f01e.parent.removeChild(_0x14f01e), _0x14f01e.parent = this, this.sortDirty = true, _0x14f01e.transform['_parentID'] = -1, this.children.splice(_0x163ab3, 0, _0x14f01e), this['_boundsID']++, this.onChildrenChange(_0x163ab3), _0x14f01e.emit('added', this), this.emit('childAdded', _0x14f01e, this, _0x163ab3), _0x14f01e;
                }, _0x1dbe73.prototype.swapChildren = function (_0x118eb1, _0x4956dc) {
                    ;
                    if (_0x118eb1 !== _0x4956dc) {
                        var _0x4c77ba = this.getChildIndex(_0x118eb1), _0x2603dd = this.getChildIndex(_0x4956dc);
                        this.children[_0x4c77ba] = _0x4956dc;
                        this.children[_0x2603dd] = _0x118eb1;
                        this.onChildrenChange(_0x4c77ba < _0x2603dd ? _0x4c77ba : _0x2603dd);
                    }
                }, _0x1dbe73.prototype.getChildIndex = function (_0x5dfd5b) {
                    var _0x3594e0 = this.children.indexOf(_0x5dfd5b);
                    if (-1 === _0x3594e0) {
                        throw new Error('The supplied DisplayObject must be a child of the caller');
                    }
                    return _0x3594e0;
                }, _0x1dbe73.prototype.setChildIndex = function (_0x3b6780, _0x163df9) {
                    ;
                    if (_0x163df9 < 0 || _0x163df9 >= this.children.length) {
                        throw new Error('The index ' + _0x163df9 + ' supplied is out of bounds ' + this.children.length);
                    }
                    var _0x324f53 = this.getChildIndex(_0x3b6780);
                    (0, _0x308b12.Er)(this.children, _0x324f53, 1);
                    this.children.splice(_0x163df9, 0, _0x3b6780);
                    this.onChildrenChange(_0x163df9);
                }, _0x1dbe73.prototype.getChildAt = function (_0xe14503) {
                    ;
                    if (_0xe14503 < 0 || _0xe14503 >= this.children.length) {
                        throw new Error('getChildAt: Index (' + _0xe14503 + ') does not exist.');
                    }
                    return this.children[_0xe14503];
                }, _0x1dbe73.prototype.removeChild = function () {
                    ;
                    for (var _0x5c5122 = arguments, _0x17e4c8 = [], _0xebc6dc = 0; _0xebc6dc < arguments.length; _0xebc6dc++) {
                        _0x17e4c8[_0xebc6dc] = _0x5c5122[_0xebc6dc];
                    }
                    if (_0x17e4c8.length > 1) {
                        for (var _0x494c73 = 0; _0x494c73 < _0x17e4c8.length; _0x494c73++) {
                            this.removeChild(_0x17e4c8[_0x494c73]);
                        }
                    } else {
                        var _0x574333 = _0x17e4c8[0], _0x3f2523 = this.children.indexOf(_0x574333);
                        if (-1 === _0x3f2523) {
                            return null;
                        }
                        _0x574333.parent = null;
                        _0x574333.transform['_parentID'] = -1;
                        (0, _0x308b12.Er)(this.children, _0x3f2523, 1);
                        this['_boundsID']++;
                        this.onChildrenChange(_0x3f2523);
                        _0x574333.emit('removed', this);
                        this.emit('childRemoved', _0x574333, this, _0x3f2523);
                    }
                    return _0x17e4c8[0];
                }, _0x1dbe73.prototype.removeChildAt = function (_0xab4867) {
                    var _0xa6a736 = this.getChildAt(_0xab4867);
                    return _0xa6a736.parent = null, _0xa6a736.transform['_parentID'] = -1, (0, _0x308b12.Er)(this.children, _0xab4867, 1), this['_boundsID']++, this.onChildrenChange(_0xab4867), _0xa6a736.emit('removed', this), this.emit('childRemoved', _0xa6a736, this, _0xab4867), _0xa6a736;
                }, _0x1dbe73.prototype.removeChildren = function (_0x2db59b, _0x3ed9bf) {
                    ;
                    void 0 === _0x2db59b && (_0x2db59b = 0);
                    void 0 === _0x3ed9bf && (_0x3ed9bf = this.children.length);
                    var _0x53af6b, _0x358b2f = _0x2db59b, _0x33a899 = _0x3ed9bf - _0x358b2f;
                    if (_0x33a899 > 0 && _0x33a899 <= _0x3ed9bf) {
                        _0x53af6b = this.children.splice(_0x358b2f, _0x33a899);
                        for (var _0xb37ca1 = 0; _0xb37ca1 < _0x53af6b.length; ++_0xb37ca1) {
                            _0x53af6b[_0xb37ca1].parent = null;
                            _0x53af6b[_0xb37ca1].transform && (_0x53af6b[_0xb37ca1].transform['_parentID'] = -1);
                        }
                        for (this['_boundsID']++, this.onChildrenChange(_0x2db59b), _0xb37ca1 = 0; _0xb37ca1 < _0x53af6b.length; ++_0xb37ca1) {
                            _0x53af6b[_0xb37ca1].emit('removed', this);
                            this.emit('childRemoved', _0x53af6b[_0xb37ca1], this, _0xb37ca1);
                        }
                        return _0x53af6b;
                    }
                    if (0 === _0x33a899 && 0 === this.children.length) {
                        return [];
                    }
                    throw new RangeError('removeChildren: numeric values are outside the acceptable range.');
                }, _0x1dbe73.prototype.sortChildren = function () {
                    ;
                    for (var _0x2ea6bb = false, _0x3289a6 = 0, _0x226b61 = this.children.length; _0x3289a6 < _0x226b61; ++_0x3289a6) {
                        var _0x912fd6 = this.children[_0x3289a6];
                        _0x912fd6['_lastSortedIndex'] = _0x3289a6;
                        _0x2ea6bb || 0 === _0x912fd6.zIndex || (_0x2ea6bb = true);
                    }
                    _0x2ea6bb && this.children.length > 1 && this.children.sort(_0x4e923f);
                    this.sortDirty = false;
                }, _0x1dbe73.prototype.updateTransform = function () {
                    ;
                    this.sortableChildren && this.sortDirty && this.sortChildren();
                    this['_boundsID']++;
                    this.transform.updateTransform(this.parent.transform);
                    this.worldAlpha = this.alpha * this.parent.worldAlpha;
                    for (var _0x45a518 = 0, _0x2acdd3 = this.children.length; _0x45a518 < _0x2acdd3; ++_0x45a518) {
                        var _0x52c0c3 = this.children[_0x45a518];
                        _0x52c0c3.visible && _0x52c0c3.updateTransform();
                    }
                }, _0x1dbe73.prototype.calculateBounds = function () {
                    ;
                    this['_bounds'].clear();
                    this['_calculateBounds']();
                    for (var _0x23ae57 = 0; _0x23ae57 < this.children.length; _0x23ae57++) {
                        var _0x3d009f = this.children[_0x23ae57];
                        if (_0x3d009f.visible && _0x3d009f.renderable) {
                            if (_0x3d009f.calculateBounds(), _0x3d009f['_mask']) {
                                var _0x483c4d = _0x3d009f['_mask'].maskObject || _0x3d009f['_mask'];
                                _0x483c4d.calculateBounds();
                                this['_bounds'].addBoundsMask(_0x3d009f['_bounds'], _0x483c4d['_bounds']);
                            } else {
                                _0x3d009f.filterArea ? this['_bounds'].addBoundsArea(_0x3d009f['_bounds'], _0x3d009f.filterArea) : this['_bounds'].addBounds(_0x3d009f['_bounds']);
                            }
                        }
                    }
                    this['_bounds'].updateID = this['_boundsID'];
                }, _0x1dbe73.prototype.getLocalBounds = function (_0x1b68de, _0x13df6a) {
                    ;
                    void 0 === _0x13df6a && (_0x13df6a = false);
                    var _0x3f2acc = _0x4fa7b6.prototype.getLocalBounds.call(this, _0x1b68de);
                    if (!_0x13df6a) {
                        for (var _0x1d300d = 0, _0x2b48fd = this.children.length; _0x1d300d < _0x2b48fd; ++_0x1d300d) {
                            var _0x397f18 = this.children[_0x1d300d];
                            _0x397f18.visible && _0x397f18.updateTransform();
                        }
                    }
                    return _0x3f2acc;
                }, _0x1dbe73.prototype['_calculateBounds'] = function () {
                }, _0x1dbe73.prototype['_renderWithCulling'] = function (_0x189fac) {
                    var _0x10f587 = _0x189fac.renderTexture.sourceFrame;
                    if (_0x10f587.width > 0 && _0x10f587.height > 0) {
                        var _0x1b5212, _0x143032;
                        if (this.cullArea ? (_0x1b5212 = this.cullArea, _0x143032 = this.worldTransform) : this['_render'] !== _0x1dbe73.prototype['_render'] && (_0x1b5212 = this.getBounds(true)), _0x1b5212 && _0x10f587.intersects(_0x1b5212, _0x143032)) {
                            this['_render'](_0x189fac);
                        } else {
                            if (this.cullArea) {
                                return;
                            }
                        }
                        for (var _0x285dd0 = 0, _0x442724 = this.children.length; _0x285dd0 < _0x442724; ++_0x285dd0) {
                            var _0x33d04c = this.children[_0x285dd0], _0x1920e5 = _0x33d04c.cullable;
                            _0x33d04c.cullable = _0x1920e5 || !this.cullArea;
                            _0x33d04c.render(_0x189fac);
                            _0x33d04c.cullable = _0x1920e5;
                        }
                    }
                }, _0x1dbe73.prototype.render = function (_0x361f6a) {
                    ;
                    if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
                        if (this['_mask'] || this.filters && this.filters.length) {
                            this.renderAdvanced(_0x361f6a);
                        } else {
                            if (this.cullable) {
                                this['_renderWithCulling'](_0x361f6a);
                            } else {
                                this['_render'](_0x361f6a);
                                for (var _0x2ae832 = 0, _0x27845f = this.children.length; _0x2ae832 < _0x27845f; ++_0x2ae832) {
                                    this.children[_0x2ae832].render(_0x361f6a);
                                }
                            }
                        }
                    }
                }, _0x1dbe73.prototype.renderAdvanced = function (_0x298f6a) {
                    var _0x2800c0 = this.filters, _0x4a4e65 = this['_mask'];
                    if (_0x2800c0) {
                        this['_enabledFilters'] || (this['_enabledFilters'] = []);
                        this['_enabledFilters'].length = 0;
                        for (var _0x95cba8 = 0; _0x95cba8 < _0x2800c0.length; _0x95cba8++) {
                            _0x2800c0[_0x95cba8].enabled && this['_enabledFilters'].push(_0x2800c0[_0x95cba8]);
                        }
                    }
                    var _0x1f91c0 = _0x2800c0 && this['_enabledFilters'] && this['_enabledFilters'].length || _0x4a4e65 && (!_0x4a4e65.isMaskData || _0x4a4e65.enabled && (_0x4a4e65.autoDetect || _0x4a4e65.type !== _0x7565bf.NONE));
                    if (_0x1f91c0 && _0x298f6a.batch.flush(), _0x2800c0 && this['_enabledFilters'] && this['_enabledFilters'].length && _0x298f6a.filter.push(this, this['_enabledFilters']), _0x4a4e65 && _0x298f6a.mask.push(this, this['_mask']), this.cullable) {
                        this['_renderWithCulling'](_0x298f6a);
                    } else {
                        this['_render'](_0x298f6a);
                        _0x95cba8 = 0;
                        for (var _0x45810c = this.children.length; _0x95cba8 < _0x45810c; ++_0x95cba8) {
                            this.children[_0x95cba8].render(_0x298f6a);
                        }
                    }
                    _0x1f91c0 && _0x298f6a.batch.flush();
                    _0x4a4e65 && _0x298f6a.mask.pop(this);
                    _0x2800c0 && this['_enabledFilters'] && this['_enabledFilters'].length && _0x298f6a.filter.pop();
                }, _0x1dbe73.prototype['_render'] = function (_0xfdc549) {
                }, _0x1dbe73.prototype.destroy = function (_0x44dcfa) {
                    ;
                    _0x4fa7b6.prototype.destroy.call(this);
                    this.sortDirty = false;
                    var _0x17cb14 = 'boolean' == typeof _0x44dcfa ? _0x44dcfa : _0x44dcfa && _0x44dcfa.children, _0x17878c = this.removeChildren(0, this.children.length);
                    if (_0x17cb14) {
                        for (var _0x46167c = 0; _0x46167c < _0x17878c.length; ++_0x46167c) {
                            _0x17878c[_0x46167c].destroy(_0x44dcfa);
                        }
                    }
                }, Object.defineProperty(_0x1dbe73.prototype, 'width', {
                    'get': function () {
                        ;
                        return this.scale.x * this.getLocalBounds().width;
                    },
                    'set': function (_0xcefb54) {
                        var _0x4abd11 = this.getLocalBounds().width;
                        this.scale.x = 0 !== _0x4abd11 ? _0xcefb54 / _0x4abd11 : 1;
                        this['_width'] = _0xcefb54;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_0x1dbe73.prototype, 'height', {
                    'get': function () {
                        ;
                        return this.scale.y * this.getLocalBounds().height;
                    },
                    'set': function (_0x383e9c) {
                        var _0x53e586 = this.getLocalBounds().height;
                        this.scale.y = 0 !== _0x53e586 ? _0x383e9c / _0x53e586 : 1;
                        this['_height'] = _0x383e9c;
                    },
                    'enumerable': false,
                    'configurable': true
                }), _0x1dbe73;
            }(_0x55713e);
            _0x176b46.prototype.containerUpdateTransform = _0x176b46.prototype.updateTransform;
        },
        550: (_0x583b5d, _0x5c96a4, _0x2c9926) => {
            'use strict';
            ;
            _0x2c9926.d(_0x5c96a4, {
                'aN': () => _0x5e1695,
                'kC': () => _0x1bac7e
            });
            var _0x1cdc63 = _0x2c9926(710), _0x4741a2 = function () {
                    ;
                    function _0x187f90(_0x5d45fb, _0x54b63d, _0x31f57b) {
                        ;
                        void 0 === _0x54b63d && (_0x54b63d = false);
                        this['_fn'] = _0x5d45fb;
                        this['_once'] = _0x54b63d;
                        this['_thisArg'] = _0x31f57b;
                        this['_next'] = this['_prev'] = this['_owner'] = null;
                    }
                    return _0x187f90.prototype.detach = function () {
                        ;
                        return null !== this['_owner'] && (this['_owner'].detach(this), true);
                    }, _0x187f90;
                }();
            function _0x29f15a(_0x44f841, _0x4c5cbc) {
                ;
                return _0x44f841['_head'] ? (_0x44f841['_tail']['_next'] = _0x4c5cbc, _0x4c5cbc['_prev'] = _0x44f841['_tail'], _0x44f841['_tail'] = _0x4c5cbc) : (_0x44f841['_head'] = _0x4c5cbc, _0x44f841['_tail'] = _0x4c5cbc), _0x4c5cbc['_owner'] = _0x44f841, _0x4c5cbc;
            }
            var _0x71a424, _0x522357 = function () {
                    ;
                    function _0x195b36() {
                        this['_head'] = this['_tail'] = void 0;
                    }
                    return _0x195b36.prototype.handlers = function (_0x51516e) {
                        ;
                        void 0 === _0x51516e && (_0x51516e = false);
                        var _0x41de03 = this['_head'];
                        if (_0x51516e) {
                            return !!_0x41de03;
                        }
                        for (var _0xae674a = []; _0x41de03;) {
                            _0xae674a.push(_0x41de03);
                            _0x41de03 = _0x41de03['_next'];
                        }
                        return _0xae674a;
                    }, _0x195b36.prototype.has = function (_0x46c61e) {
                        ;
                        if (!(_0x46c61e instanceof _0x4741a2)) {
                            throw new Error('MiniSignal#has(): First arg must be a SignalBinding object.');
                        }
                        return _0x46c61e['_owner'] === this;
                    }, _0x195b36.prototype.dispatch = function () {
                        ;
                        for (var _0x5c0d6d = arguments, _0x3a8907 = [], _0x3fe8ae = 0; _0x3fe8ae < arguments.length; _0x3fe8ae++) {
                            _0x3a8907[_0x3fe8ae] = _0x5c0d6d[_0x3fe8ae];
                        }
                        var _0x53f9a4 = this['_head'];
                        if (!_0x53f9a4) {
                            return false;
                        }
                        for (; _0x53f9a4;) {
                            _0x53f9a4['_once'] && this.detach(_0x53f9a4);
                            _0x53f9a4['_fn'].apply(_0x53f9a4['_thisArg'], _0x3a8907);
                            _0x53f9a4 = _0x53f9a4['_next'];
                        }
                        return true;
                    }, _0x195b36.prototype.add = function (_0x5563b9, _0x1cb8a3) {
                        ;
                        if (void 0 === _0x1cb8a3 && (_0x1cb8a3 = null), 'function' != typeof _0x5563b9) {
                            throw new Error('MiniSignal#add(): First arg must be a Function.');
                        }
                        return _0x29f15a(this, new _0x4741a2(_0x5563b9, false, _0x1cb8a3));
                    }, _0x195b36.prototype.once = function (_0x1cd4bf, _0x4828ba) {
                        ;
                        if (void 0 === _0x4828ba && (_0x4828ba = null), 'function' != typeof _0x1cd4bf) {
                            throw new Error('MiniSignal#once(): First arg must be a Function.');
                        }
                        return _0x29f15a(this, new _0x4741a2(_0x1cd4bf, true, _0x4828ba));
                    }, _0x195b36.prototype.detach = function (_0x3656bd) {
                        ;
                        if (!(_0x3656bd instanceof _0x4741a2)) {
                            throw new Error('MiniSignal#detach(): First arg must be a SignalBinding object.');
                        }
                        return _0x3656bd['_owner'] !== this || (_0x3656bd['_prev'] && (_0x3656bd['_prev']['_next'] = _0x3656bd['_next']), _0x3656bd['_next'] && (_0x3656bd['_next']['_prev'] = _0x3656bd['_prev']), _0x3656bd === this['_head'] ? (this['_head'] = _0x3656bd['_next'], null === _0x3656bd['_next'] && (this['_tail'] = null)) : _0x3656bd === this['_tail'] && (this['_tail'] = _0x3656bd['_prev'], this['_tail']['_next'] = null), _0x3656bd['_owner'] = null), this;
                    }, _0x195b36.prototype.detachAll = function () {
                        var _0x5d6f02 = this['_head'];
                        if (!_0x5d6f02) {
                            return this;
                        }
                        for (this['_head'] = this['_tail'] = null; _0x5d6f02;) {
                            _0x5d6f02['_owner'] = null;
                            _0x5d6f02 = _0x5d6f02['_next'];
                        }
                        return this;
                    }, _0x195b36;
                }();
            function _0x5f1732(_0x318e42, _0x2cc0b2) {
                ;
                _0x2cc0b2 = _0x2cc0b2 || {};
                for (var _0x792a9 = {
                            'key': [
                                'source',
                                'protocol',
                                'authority',
                                'userInfo',
                                'user',
                                'password',
                                'host',
                                'port',
                                'relative',
                                'path',
                                'directory',
                                'file',
                                'query',
                                'anchor'
                            ],
                            'q': {
                                'name': 'queryKey',
                                'parser': /(?:^|&)([^&=]*)=?([^&]*)/g
                            },
                            'parser': {
                                'strict': /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                                'loose': /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                            }
                        }, _0x4131ef = _0x792a9.parser[_0x2cc0b2.strictMode ? 'strict' : 'loose'].exec(_0x318e42), _0x9d4407 = {}, _0x22aca5 = 14; _0x22aca5--;) {
                    _0x9d4407[_0x792a9.key[_0x22aca5]] = _0x4131ef[_0x22aca5] || '';
                }
                return _0x9d4407[_0x792a9.q.name] = {}, _0x9d4407[_0x792a9.key[12]].replace(_0x792a9.q.parser, function (_0x2c3e4d, _0x49b9a3, _0x4122ca) {
                    _0x49b9a3 && (_0x9d4407[_0x792a9.q.name][_0x49b9a3] = _0x4122ca);
                }), _0x9d4407;
            }
            var _0x1a418d = null;
            function _0x1044c7() {
            }
            function _0x50fac6(_0x572022, _0x1c4890, _0x3ea190) {
                ;
                _0x1c4890 && 0 === _0x1c4890.indexOf('.') && (_0x1c4890 = _0x1c4890.substring(1));
                _0x1c4890 && (_0x572022[_0x1c4890] = _0x3ea190);
            }
            function _0x2b19ab(_0x422b3e) {
                ;
                return _0x422b3e.toString().replace('object ', '');
            }
            var _0x1bac7e = function () {
                ;
                function _0x2d99c9(_0x14cc2e, _0x4fb854, _0x2e4587) {
                    ;
                    if (this['_dequeue'] = _0x1044c7, this['_onLoadBinding'] = null, this['_elementTimer'] = 0, this['_boundComplete'] = null, this['_boundOnError'] = null, this['_boundOnProgress'] = null, this['_boundOnTimeout'] = null, this['_boundXhrOnError'] = null, this['_boundXhrOnTimeout'] = null, this['_boundXhrOnAbort'] = null, this['_boundXhrOnLoad'] = null, 'string' != typeof _0x14cc2e || 'string' != typeof _0x4fb854) {
                        throw new Error('Both name and url are required for constructing a resource.');
                    }
                    _0x2e4587 = _0x2e4587 || {};
                    this['_flags'] = 0;
                    this['_setFlag'](_0x2d99c9.STATUS_FLAGS.DATA_URL, 0 === _0x4fb854.indexOf('data:'));
                    this.name = _0x14cc2e;
                    this.url = _0x4fb854;
                    this.extension = this['_getExtension']();
                    this.data = null;
                    this.crossOrigin = true === _0x2e4587.crossOrigin ? 'anonymous' : _0x2e4587.crossOrigin;
                    this.timeout = _0x2e4587.timeout || 0;
                    this.loadType = _0x2e4587.loadType || this['_determineLoadType']();
                    this.xhrType = _0x2e4587.xhrType;
                    this.metadata = _0x2e4587.metadata || {};
                    this.error = null;
                    this.xhr = null;
                    this.children = [];
                    this.type = _0x2d99c9.TYPE.UNKNOWN;
                    this.progressChunk = 0;
                    this['_dequeue'] = _0x1044c7;
                    this['_onLoadBinding'] = null;
                    this['_elementTimer'] = 0;
                    this['_boundComplete'] = this.complete.bind(this);
                    this['_boundOnError'] = this['_onError'].bind(this);
                    this['_boundOnProgress'] = this['_onProgress'].bind(this);
                    this['_boundOnTimeout'] = this['_onTimeout'].bind(this);
                    this['_boundXhrOnError'] = this['_xhrOnError'].bind(this);
                    this['_boundXhrOnTimeout'] = this['_xhrOnTimeout'].bind(this);
                    this['_boundXhrOnAbort'] = this['_xhrOnAbort'].bind(this);
                    this['_boundXhrOnLoad'] = this['_xhrOnLoad'].bind(this);
                    this.onStart = new _0x522357();
                    this.onProgress = new _0x522357();
                    this.onComplete = new _0x522357();
                    this.onAfterMiddleware = new _0x522357();
                }
                return _0x2d99c9.setExtensionLoadType = function (_0x13dd16, _0x3ab2f6) {
                    ;
                    _0x50fac6(_0x2d99c9['_loadTypeMap'], _0x13dd16, _0x3ab2f6);
                }, _0x2d99c9.setExtensionXhrType = function (_0x447410, _0x3e58d5) {
                    _0x50fac6(_0x2d99c9['_xhrTypeMap'], _0x447410, _0x3e58d5);
                }, Object.defineProperty(_0x2d99c9.prototype, 'isDataUrl', {
                    'get': function () {
                        ;
                        return this['_hasFlag'](_0x2d99c9.STATUS_FLAGS.DATA_URL);
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_0x2d99c9.prototype, 'isComplete', {
                    'get': function () {
                        ;
                        return this['_hasFlag'](_0x2d99c9.STATUS_FLAGS.COMPLETE);
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_0x2d99c9.prototype, 'isLoading', {
                    'get': function () {
                        ;
                        return this['_hasFlag'](_0x2d99c9.STATUS_FLAGS.LOADING);
                    },
                    'enumerable': false,
                    'configurable': true
                }), _0x2d99c9.prototype.complete = function () {
                    ;
                    this['_clearEvents']();
                    this['_finish']();
                }, _0x2d99c9.prototype.abort = function (_0x3c45ec) {
                    ;
                    if (!this.error) {
                        if (this.error = new Error(_0x3c45ec), this['_clearEvents'](), this.xhr) {
                            this.xhr.abort();
                        } else {
                            if (this.xdr) {
                                this.xdr.abort();
                            } else {
                                if (this.data) {
                                    if (this.data.src) {
                                        this.data.src = _0x2d99c9.EMPTY_GIF;
                                    } else {
                                        for (; this.data.firstChild;) {
                                            this.data.removeChild(this.data.firstChild);
                                        }
                                    }
                                }
                            }
                        }
                        this['_finish']();
                    }
                }, _0x2d99c9.prototype.load = function (_0x45a691) {
                    var _0x54ec77 = this;
                    if (!this.isLoading) {
                        if (this.isComplete) {
                            _0x45a691 && setTimeout(function () {
                                return _0x45a691(_0x54ec77);
                            }, 1);
                        } else {
                            switch (_0x45a691 && this.onComplete.once(_0x45a691), this['_setFlag'](_0x2d99c9.STATUS_FLAGS.LOADING, true), this.onStart.dispatch(this), false !== this.crossOrigin && 'string' == typeof this.crossOrigin || (this.crossOrigin = this['_determineCrossOrigin'](this.url)), this.loadType) {
                            case _0x2d99c9.LOAD_TYPE.IMAGE:
                                this.type = _0x2d99c9.TYPE.IMAGE, this['_loadElement']('image');
                                break;
                            case _0x2d99c9.LOAD_TYPE.AUDIO:
                                this.type = _0x2d99c9.TYPE.AUDIO, this['_loadSourceElement']('audio');
                                break;
                            case _0x2d99c9.LOAD_TYPE.VIDEO:
                                this.type = _0x2d99c9.TYPE.VIDEO, this['_loadSourceElement']('video');
                                break;
                            case _0x2d99c9.LOAD_TYPE.XHR:
                            default:
                                void 0 === _0x71a424 && (_0x71a424 = !(!globalThis.XDomainRequest || 'withCredentials' in new XMLHttpRequest())), _0x71a424 && this.crossOrigin ? this['_loadXdr']() : this['_loadXhr']();
                            }
                        }
                    }
                }, _0x2d99c9.prototype['_hasFlag'] = function (_0x30e7e7) {
                    ;
                    return 0 != (this['_flags'] & _0x30e7e7);
                }, _0x2d99c9.prototype['_setFlag'] = function (_0x5a9b56, _0x56f5b4) {
                    ;
                    this['_flags'] = _0x56f5b4 ? this['_flags'] | _0x5a9b56 : this['_flags'] & ~_0x5a9b56;
                }, _0x2d99c9.prototype['_clearEvents'] = function () {
                    ;
                    clearTimeout(this['_elementTimer']);
                    this.data && this.data.removeEventListener && (this.data.removeEventListener('error', this['_boundOnError'], false), this.data.removeEventListener('load', this['_boundComplete'], false), this.data.removeEventListener('progress', this['_boundOnProgress'], false), this.data.removeEventListener('canplaythrough', this['_boundComplete'], false));
                    this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener('error', this['_boundXhrOnError'], false), this.xhr.removeEventListener('timeout', this['_boundXhrOnTimeout'], false), this.xhr.removeEventListener('abort', this['_boundXhrOnAbort'], false), this.xhr.removeEventListener('progress', this['_boundOnProgress'], false), this.xhr.removeEventListener('load', this['_boundXhrOnLoad'], false)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null));
                }, _0x2d99c9.prototype['_finish'] = function () {
                    ;
                    if (this.isComplete) {
                        throw new Error('Complete called again for an already completed resource.');
                    }
                    this['_setFlag'](_0x2d99c9.STATUS_FLAGS.COMPLETE, true);
                    this['_setFlag'](_0x2d99c9.STATUS_FLAGS.LOADING, false);
                    this.onComplete.dispatch(this);
                }, _0x2d99c9.prototype['_loadElement'] = function (_0x54cc59) {
                    ;
                    this.metadata.loadElement ? this.data = this.metadata.loadElement : 'image' === _0x54cc59 && void 0 !== globalThis.Image ? this.data = new Image() : this.data = document.createElement(_0x54cc59);
                    this.crossOrigin && (this.data.crossOrigin = this.crossOrigin);
                    this.metadata.skipSource || (this.data.src = this.url);
                    this.data.addEventListener('error', this['_boundOnError'], false);
                    this.data.addEventListener('load', this['_boundComplete'], false);
                    this.data.addEventListener('progress', this['_boundOnProgress'], false);
                    this.timeout && (this['_elementTimer'] = setTimeout(this['_boundOnTimeout'], this.timeout));
                }, _0x2d99c9.prototype['_loadSourceElement'] = function (_0x3f8070) {
                    ;
                    if (this.metadata.loadElement ? this.data = this.metadata.loadElement : 'audio' === _0x3f8070 && void 0 !== globalThis.Audio ? this.data = new Audio() : this.data = document.createElement(_0x3f8070), null !== this.data) {
                        if (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), !this.metadata.skipSource) {
                            if (navigator.isCocoonJS) {
                                this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
                            } else {
                                if (Array.isArray(this.url)) {
                                    for (var _0x4ffb75 = this.metadata.mimeType, _0x5d908b = 0; _0x5d908b < this.url.length; ++_0x5d908b) {
                                        this.data.appendChild(this['_createSource'](_0x3f8070, this.url[_0x5d908b], Array.isArray(_0x4ffb75) ? _0x4ffb75[_0x5d908b] : _0x4ffb75));
                                    }
                                } else {
                                    _0x4ffb75 = this.metadata.mimeType;
                                    this.data.appendChild(this['_createSource'](_0x3f8070, this.url, Array.isArray(_0x4ffb75) ? _0x4ffb75[0] : _0x4ffb75));
                                }
                            }
                        }
                        this.data.addEventListener('error', this['_boundOnError'], false);
                        this.data.addEventListener('load', this['_boundComplete'], false);
                        this.data.addEventListener('progress', this['_boundOnProgress'], false);
                        this.data.addEventListener('canplaythrough', this['_boundComplete'], false);
                        this.data.load();
                        this.timeout && (this['_elementTimer'] = setTimeout(this['_boundOnTimeout'], this.timeout));
                    } else {
                        this.abort('Unsupported element: ' + _0x3f8070);
                    }
                }, _0x2d99c9.prototype['_loadXhr'] = function () {
                    ;
                    'string' != typeof this.xhrType && (this.xhrType = this['_determineXhrType']());
                    var _0x4210ca = this.xhr = new XMLHttpRequest();
                    'use-credentials' === this.crossOrigin && (_0x4210ca.withCredentials = true);
                    _0x4210ca.open('GET', this.url, true);
                    _0x4210ca.timeout = this.timeout;
                    this.xhrType === _0x2d99c9.XHR_RESPONSE_TYPE.JSON || this.xhrType === _0x2d99c9.XHR_RESPONSE_TYPE.DOCUMENT ? _0x4210ca.responseType = _0x2d99c9.XHR_RESPONSE_TYPE.TEXT : _0x4210ca.responseType = this.xhrType;
                    _0x4210ca.addEventListener('error', this['_boundXhrOnError'], false);
                    _0x4210ca.addEventListener('timeout', this['_boundXhrOnTimeout'], false);
                    _0x4210ca.addEventListener('abort', this['_boundXhrOnAbort'], false);
                    _0x4210ca.addEventListener('progress', this['_boundOnProgress'], false);
                    _0x4210ca.addEventListener('load', this['_boundXhrOnLoad'], false);
                    _0x4210ca.send();
                }, _0x2d99c9.prototype['_loadXdr'] = function () {
                    ;
                    'string' != typeof this.xhrType && (this.xhrType = this['_determineXhrType']());
                    var _0x5db352 = this.xhr = new globalThis.XDomainRequest();
                    _0x5db352.timeout = this.timeout || 5000;
                    _0x5db352.onerror = this['_boundXhrOnError'];
                    _0x5db352.ontimeout = this['_boundXhrOnTimeout'];
                    _0x5db352.onprogress = this['_boundOnProgress'];
                    _0x5db352.onload = this['_boundXhrOnLoad'];
                    _0x5db352.open('GET', this.url, true);
                    setTimeout(function () {
                        ;
                        return _0x5db352.send();
                    }, 1);
                }, _0x2d99c9.prototype['_createSource'] = function (_0x1f6a82, _0x83f6b9, _0x15f9f2) {
                    ;
                    _0x15f9f2 || (_0x15f9f2 = _0x1f6a82 + '/' + this['_getExtension'](_0x83f6b9));
                    var _0x4a6c41 = document.createElement('source');
                    return _0x4a6c41.src = _0x83f6b9, _0x4a6c41.type = _0x15f9f2, _0x4a6c41;
                }, _0x2d99c9.prototype['_onError'] = function (_0x582ca5) {
                    ;
                    this.abort('Failed to load element using: ' + _0x582ca5.target.nodeName);
                }, _0x2d99c9.prototype['_onProgress'] = function (_0x247596) {
                    ;
                    _0x247596 && _0x247596.lengthComputable && this.onProgress.dispatch(this, _0x247596.loaded / _0x247596.total);
                }, _0x2d99c9.prototype['_onTimeout'] = function () {
                    ;
                    this.abort('Load timed out.');
                }, _0x2d99c9.prototype['_xhrOnError'] = function () {
                    var _0x126da3 = this.xhr;
                    this.abort(_0x2b19ab(_0x126da3) + ' Request failed. Status: ' + _0x126da3.status + ', text: "' + _0x126da3.statusText + '"');
                }, _0x2d99c9.prototype['_xhrOnTimeout'] = function () {
                    var _0x2d3c4f = this.xhr;
                    this.abort(_0x2b19ab(_0x2d3c4f) + ' Request timed out.');
                }, _0x2d99c9.prototype['_xhrOnAbort'] = function () {
                    var _0xe55b5d = this.xhr;
                    this.abort(_0x2b19ab(_0xe55b5d) + ' Request was aborted by the user.');
                }, _0x2d99c9.prototype['_xhrOnLoad'] = function () {
                    var _0x2008f8 = this.xhr, _0x5cbbcc = '', _0x46f018 = void 0 === _0x2008f8.status ? 200 : _0x2008f8.status;
                    if ('' !== _0x2008f8.responseType && 'text' !== _0x2008f8.responseType && void 0 !== _0x2008f8.responseType || (_0x5cbbcc = _0x2008f8.responseText), 0 === _0x46f018 && (_0x5cbbcc.length > 0 || _0x2008f8.responseType === _0x2d99c9.XHR_RESPONSE_TYPE.BUFFER) ? _0x46f018 = 200 : 1223 === _0x46f018 && (_0x46f018 = 204), 2 == (_0x46f018 / 100 | 0)) {
                        if (this.xhrType === _0x2d99c9.XHR_RESPONSE_TYPE.TEXT) {
                            this.data = _0x5cbbcc;
                            this.type = _0x2d99c9.TYPE.TEXT;
                        } else {
                            if (this.xhrType === _0x2d99c9.XHR_RESPONSE_TYPE.JSON) {
                                try {
                                    this.data = JSON.parse(_0x5cbbcc);
                                    this.type = _0x2d99c9.TYPE.JSON;
                                } catch (_0x112cc1) {
                                    return void this.abort('Error trying to parse loaded json: ' + _0x112cc1);
                                }
                            } else {
                                if (this.xhrType === _0x2d99c9.XHR_RESPONSE_TYPE.DOCUMENT) {
                                    try {
                                        if (globalThis.DOMParser) {
                                            var _0x44cef7 = new DOMParser();
                                            this.data = _0x44cef7.parseFromString(_0x5cbbcc, 'text/xml');
                                        } else {
                                            var _0x1fb802 = document.createElement('div');
                                            _0x1fb802.innerHTML = _0x5cbbcc;
                                            this.data = _0x1fb802;
                                        }
                                        this.type = _0x2d99c9.TYPE.XML;
                                    } catch (_0x264bfb) {
                                        return void this.abort('Error trying to parse loaded xml: ' + _0x264bfb);
                                    }
                                } else {
                                    this.data = _0x2008f8.response || _0x5cbbcc;
                                }
                            }
                        }
                        this.complete();
                    } else {
                        this.abort('[' + _0x2008f8.status + '] ' + _0x2008f8.statusText + ': ' + _0x2008f8.responseURL);
                    }
                }, _0x2d99c9.prototype['_determineCrossOrigin'] = function (_0x38b50b, _0x3c548b) {
                    ;
                    if (0 === _0x38b50b.indexOf('data:')) {
                        return '';
                    }
                    if (globalThis.origin !== globalThis.location.origin) {
                        return 'anonymous';
                    }
                    _0x3c548b = _0x3c548b || globalThis.location;
                    _0x1a418d || (_0x1a418d = document.createElement('a'));
                    _0x1a418d.href = _0x38b50b;
                    var _0x472504 = _0x5f1732(_0x1a418d.href, { 'strictMode': true }), _0x3a859b = !_0x472504.port && '' === _0x3c548b.port || _0x472504.port === _0x3c548b.port, _0x205b9e = _0x472504.protocol ? _0x472504.protocol + ':' : '';
                    return _0x472504.host === _0x3c548b.hostname && _0x3a859b && _0x205b9e === _0x3c548b.protocol ? '' : 'anonymous';
                }, _0x2d99c9.prototype['_determineXhrType'] = function () {
                    ;
                    return _0x2d99c9['_xhrTypeMap'][this.extension] || _0x2d99c9.XHR_RESPONSE_TYPE.TEXT;
                }, _0x2d99c9.prototype['_determineLoadType'] = function () {
                    ;
                    return _0x2d99c9['_loadTypeMap'][this.extension] || _0x2d99c9.LOAD_TYPE.XHR;
                }, _0x2d99c9.prototype['_getExtension'] = function (_0xddbd08) {
                    ;
                    void 0 === _0xddbd08 && (_0xddbd08 = this.url);
                    var _0x4ffdec = '';
                    if (this.isDataUrl) {
                        var _0x1d955d = _0xddbd08.indexOf('/');
                        _0x4ffdec = _0xddbd08.substring(_0x1d955d + 1, _0xddbd08.indexOf(';', _0x1d955d));
                    } else {
                        var _0xb60f64 = _0xddbd08.indexOf('?'), _0x5ce121 = _0xddbd08.indexOf('#'), _0x3a4d4a = Math.min(_0xb60f64 > -1 ? _0xb60f64 : _0xddbd08.length, _0x5ce121 > -1 ? _0x5ce121 : _0xddbd08.length);
                        _0x4ffdec = (_0xddbd08 = _0xddbd08.substring(0, _0x3a4d4a)).substring(_0xddbd08.lastIndexOf('.') + 1);
                    }
                    return _0x4ffdec.toLowerCase();
                }, _0x2d99c9.prototype['_getMimeFromXhrType'] = function (_0x39eecd) {
                    ;
                    switch (_0x39eecd) {
                    case _0x2d99c9.XHR_RESPONSE_TYPE.BUFFER:
                        return 'application/octet-binary';
                    case _0x2d99c9.XHR_RESPONSE_TYPE.BLOB:
                        return 'application/blob';
                    case _0x2d99c9.XHR_RESPONSE_TYPE.DOCUMENT:
                        return 'application/xml';
                    case _0x2d99c9.XHR_RESPONSE_TYPE.JSON:
                        return 'application/json';
                    case _0x2d99c9.XHR_RESPONSE_TYPE.DEFAULT:
                    case _0x2d99c9.XHR_RESPONSE_TYPE.TEXT:
                    default:
                        return 'text/plain';
                    }
                }, _0x2d99c9;
            }();
            function _0x706a59() {
            }
            function _0x440bd5(_0x2a2b87) {
                return function () {
                    ;
                    for (var _0x1add63 = arguments, _0x1eeba9 = [], _0x58ed33 = 0; _0x58ed33 < arguments.length; _0x58ed33++) {
                        _0x1eeba9[_0x58ed33] = _0x1add63[_0x58ed33];
                    }
                    if (null === _0x2a2b87) {
                        throw new Error('Callback was already called.');
                    }
                    var _0x1c93b0 = _0x2a2b87;
                    _0x2a2b87 = null;
                    _0x1c93b0.apply(this, _0x1eeba9);
                };
            }
            !function (_0x4e2f22) {
                var _0x5025ea, _0x557761, _0x161726, _0xfc97fc;
                (_0x5025ea = _0x4e2f22.STATUS_FLAGS || (_0x4e2f22.STATUS_FLAGS = {}))[_0x5025ea.NONE = 0] = 'NONE';
                _0x5025ea[_0x5025ea.DATA_URL = 1] = 'DATA_URL';
                _0x5025ea[_0x5025ea.COMPLETE = 2] = 'COMPLETE';
                _0x5025ea[_0x5025ea.LOADING = 4] = 'LOADING';
                (_0x557761 = _0x4e2f22.TYPE || (_0x4e2f22.TYPE = {}))[_0x557761.UNKNOWN = 0] = 'UNKNOWN';
                _0x557761[_0x557761.JSON = 1] = 'JSON';
                _0x557761[_0x557761.XML = 2] = 'XML';
                _0x557761[_0x557761.IMAGE = 3] = 'IMAGE';
                _0x557761[_0x557761.AUDIO = 4] = 'AUDIO';
                _0x557761[_0x557761.VIDEO = 5] = 'VIDEO';
                _0x557761[_0x557761.TEXT = 6] = 'TEXT';
                (_0x161726 = _0x4e2f22.LOAD_TYPE || (_0x4e2f22.LOAD_TYPE = {}))[_0x161726.XHR = 1] = 'XHR';
                _0x161726[_0x161726.IMAGE = 2] = 'IMAGE';
                _0x161726[_0x161726.AUDIO = 3] = 'AUDIO';
                _0x161726[_0x161726.VIDEO = 4] = 'VIDEO';
                (_0xfc97fc = _0x4e2f22.XHR_RESPONSE_TYPE || (_0x4e2f22.XHR_RESPONSE_TYPE = {})).DEFAULT = 'text';
                _0xfc97fc.BUFFER = 'arraybuffer';
                _0xfc97fc.BLOB = 'blob';
                _0xfc97fc.DOCUMENT = 'document';
                _0xfc97fc.JSON = 'json';
                _0xfc97fc.TEXT = 'text';
                _0x4e2f22['_loadTypeMap'] = {
                    'gif': _0x4e2f22.LOAD_TYPE.IMAGE,
                    'png': _0x4e2f22.LOAD_TYPE.IMAGE,
                    'bmp': _0x4e2f22.LOAD_TYPE.IMAGE,
                    'jpg': _0x4e2f22.LOAD_TYPE.IMAGE,
                    'jpeg': _0x4e2f22.LOAD_TYPE.IMAGE,
                    'tif': _0x4e2f22.LOAD_TYPE.IMAGE,
                    'tiff': _0x4e2f22.LOAD_TYPE.IMAGE,
                    'webp': _0x4e2f22.LOAD_TYPE.IMAGE,
                    'tga': _0x4e2f22.LOAD_TYPE.IMAGE,
                    'svg': _0x4e2f22.LOAD_TYPE.IMAGE,
                    'svg+xml': _0x4e2f22.LOAD_TYPE.IMAGE,
                    'mp3': _0x4e2f22.LOAD_TYPE.AUDIO,
                    'ogg': _0x4e2f22.LOAD_TYPE.AUDIO,
                    'wav': _0x4e2f22.LOAD_TYPE.AUDIO,
                    'mp4': _0x4e2f22.LOAD_TYPE.VIDEO,
                    'webm': _0x4e2f22.LOAD_TYPE.VIDEO
                };
                _0x4e2f22['_xhrTypeMap'] = {
                    'xhtml': _0x4e2f22.XHR_RESPONSE_TYPE.DOCUMENT,
                    'html': _0x4e2f22.XHR_RESPONSE_TYPE.DOCUMENT,
                    'htm': _0x4e2f22.XHR_RESPONSE_TYPE.DOCUMENT,
                    'xml': _0x4e2f22.XHR_RESPONSE_TYPE.DOCUMENT,
                    'tmx': _0x4e2f22.XHR_RESPONSE_TYPE.DOCUMENT,
                    'svg': _0x4e2f22.XHR_RESPONSE_TYPE.DOCUMENT,
                    'tsx': _0x4e2f22.XHR_RESPONSE_TYPE.DOCUMENT,
                    'gif': _0x4e2f22.XHR_RESPONSE_TYPE.BLOB,
                    'png': _0x4e2f22.XHR_RESPONSE_TYPE.BLOB,
                    'bmp': _0x4e2f22.XHR_RESPONSE_TYPE.BLOB,
                    'jpg': _0x4e2f22.XHR_RESPONSE_TYPE.BLOB,
                    'jpeg': _0x4e2f22.XHR_RESPONSE_TYPE.BLOB,
                    'tif': _0x4e2f22.XHR_RESPONSE_TYPE.BLOB,
                    'tiff': _0x4e2f22.XHR_RESPONSE_TYPE.BLOB,
                    'webp': _0x4e2f22.XHR_RESPONSE_TYPE.BLOB,
                    'tga': _0x4e2f22.XHR_RESPONSE_TYPE.BLOB,
                    'json': _0x4e2f22.XHR_RESPONSE_TYPE.JSON,
                    'text': _0x4e2f22.XHR_RESPONSE_TYPE.TEXT,
                    'txt': _0x4e2f22.XHR_RESPONSE_TYPE.TEXT,
                    'ttf': _0x4e2f22.XHR_RESPONSE_TYPE.BUFFER,
                    'otf': _0x4e2f22.XHR_RESPONSE_TYPE.BUFFER
                };
                _0x4e2f22.EMPTY_GIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
            }(_0x1bac7e || (_0x1bac7e = {}));
            var _0x31a81a = function (_0x2beb3e, _0x8e85a4) {
                    this.data = _0x2beb3e;
                    this.callback = _0x8e85a4;
                }, _0xb8cde5 = function () {
                    ;
                    function _0x6acf2d(_0xfa788, _0x49399a) {
                        var _0x119424 = this;
                        if (void 0 === _0x49399a && (_0x49399a = 1), this.workers = 0, this.saturated = _0x706a59, this.unsaturated = _0x706a59, this.empty = _0x706a59, this.drain = _0x706a59, this.error = _0x706a59, this.started = false, this.paused = false, this['_tasks'] = [], this['_insert'] = function (_0x1a5fd3, _0x756b5c, _0x4cf8e9) {
                                ;
                                if (_0x4cf8e9 && 'function' != typeof _0x4cf8e9) {
                                    throw new Error('task callback must be a function');
                                }
                                if (_0x119424.started = true, null == _0x1a5fd3 && _0x119424.idle()) {
                                    setTimeout(function () {
                                        ;
                                        return _0x119424.drain();
                                    }, 1);
                                } else {
                                    var _0x532820 = new _0x31a81a(_0x1a5fd3, 'function' == typeof _0x4cf8e9 ? _0x4cf8e9 : _0x706a59);
                                    _0x756b5c ? _0x119424['_tasks'].unshift(_0x532820) : _0x119424['_tasks'].push(_0x532820);
                                    setTimeout(_0x119424.process, 1);
                                }
                            }, this.process = function () {
                                ;
                                for (; !_0x119424.paused && _0x119424.workers < _0x119424.concurrency && _0x119424['_tasks'].length;) {
                                    var _0x3606c2 = _0x119424['_tasks'].shift();
                                    0 === _0x119424['_tasks'].length && _0x119424.empty();
                                    _0x119424.workers += 1;
                                    _0x119424.workers === _0x119424.concurrency && _0x119424.saturated();
                                    _0x119424['_worker'](_0x3606c2.data, _0x440bd5(_0x119424['_next'](_0x3606c2)));
                                }
                            }, this['_worker'] = _0xfa788, 0 === _0x49399a) {
                            throw new Error('Concurrency must not be zero');
                        }
                        this.concurrency = _0x49399a;
                        this.buffer = _0x49399a / 4;
                    }
                    return _0x6acf2d.prototype['_next'] = function (_0x26a745) {
                        var _0x2a49bf = this;
                        return function () {
                            ;
                            for (var _0x5be928 = arguments, _0x58e2eb = [], _0x1336ff = 0; _0x1336ff < arguments.length; _0x1336ff++) {
                                _0x58e2eb[_0x1336ff] = _0x5be928[_0x1336ff];
                            }
                            _0x2a49bf.workers -= 1;
                            _0x26a745.callback.apply(_0x26a745, _0x58e2eb);
                            null != _0x58e2eb[0] && _0x2a49bf.error(_0x58e2eb[0], _0x26a745.data);
                            _0x2a49bf.workers <= _0x2a49bf.concurrency - _0x2a49bf.buffer && _0x2a49bf.unsaturated();
                            _0x2a49bf.idle() && _0x2a49bf.drain();
                            _0x2a49bf.process();
                        };
                    }, _0x6acf2d.prototype.push = function (_0x303be8, _0x5858bd) {
                        ;
                        this['_insert'](_0x303be8, false, _0x5858bd);
                    }, _0x6acf2d.prototype.kill = function () {
                        ;
                        this.workers = 0;
                        this.drain = _0x706a59;
                        this.started = false;
                        this['_tasks'] = [];
                    }, _0x6acf2d.prototype.unshift = function (_0x583b65, _0x534eff) {
                        ;
                        this['_insert'](_0x583b65, true, _0x534eff);
                    }, _0x6acf2d.prototype.length = function () {
                        ;
                        return this['_tasks'].length;
                    }, _0x6acf2d.prototype.running = function () {
                        return this.workers;
                    }, _0x6acf2d.prototype.idle = function () {
                        ;
                        return this['_tasks'].length + this.workers === 0;
                    }, _0x6acf2d.prototype.pause = function () {
                        ;
                        true !== this.paused && (this.paused = true);
                    }, _0x6acf2d.prototype.resume = function () {
                        ;
                        if (false !== this.paused) {
                            this.paused = false;
                            for (var _0x3d545a = 1; _0x3d545a <= this.concurrency; _0x3d545a++) {
                                this.process();
                            }
                        }
                    }, _0x6acf2d.eachSeries = function (_0x106081, _0x5ceefb, _0x35a9d5, _0x4a7695) {
                        var _0x588588 = 0, _0x38f36d = _0x106081.length;
                        !function _0x3bdf51(_0x5015f6) {
                            _0x5015f6 || _0x588588 === _0x38f36d ? _0x35a9d5 && _0x35a9d5(_0x5015f6) : _0x4a7695 ? setTimeout(function () {
                                _0x5ceefb(_0x106081[_0x588588++], _0x3bdf51);
                            }, 1) : _0x5ceefb(_0x106081[_0x588588++], _0x3bdf51);
                        }();
                    }, _0x6acf2d.queue = function (_0xfe819b, _0x5e324f) {
                        return new _0x6acf2d(_0xfe819b, _0x5e324f);
                    }, _0x6acf2d;
                }(), _0x5e1695 = function () {
                    ;
                    function _0x6ca121(_0xe21686, _0x2b6791) {
                        var _0x2a83a7 = this;
                        void 0 === _0xe21686 && (_0xe21686 = '');
                        void 0 === _0x2b6791 && (_0x2b6791 = 10);
                        this.progress = 0;
                        this.loading = false;
                        this.defaultQueryString = '';
                        this['_beforeMiddleware'] = [];
                        this['_afterMiddleware'] = [];
                        this['_resourcesParsing'] = [];
                        this['_boundLoadResource'] = function (_0x385e13, _0x2dff73) {
                            return _0x2a83a7['_loadResource'](_0x385e13, _0x2dff73);
                        };
                        this.resources = {};
                        this.baseUrl = _0xe21686;
                        this['_beforeMiddleware'] = [];
                        this['_afterMiddleware'] = [];
                        this['_resourcesParsing'] = [];
                        this['_boundLoadResource'] = function (_0x4173d1, _0x452282) {
                            return _0x2a83a7['_loadResource'](_0x4173d1, _0x452282);
                        };
                        this['_queue'] = _0xb8cde5.queue(this['_boundLoadResource'], _0x2b6791);
                        this['_queue'].pause();
                        this.resources = {};
                        this.onProgress = new _0x522357();
                        this.onError = new _0x522357();
                        this.onLoad = new _0x522357();
                        this.onStart = new _0x522357();
                        this.onComplete = new _0x522357();
                        for (var _0x5e3d89 = 0; _0x5e3d89 < _0x6ca121['_plugins'].length; ++_0x5e3d89) {
                            var _0x13dcd5 = _0x6ca121['_plugins'][_0x5e3d89], _0x891098 = _0x13dcd5.pre, _0x1555bb = _0x13dcd5.use;
                            _0x891098 && this.pre(_0x891098);
                            _0x1555bb && this.use(_0x1555bb);
                        }
                        this['_protected'] = false;
                    }
                    return _0x6ca121.prototype['_add'] = function (_0x3d32c2, _0x4933bb, _0x2c1d3b, _0x2856a6) {
                        ;
                        if (this.loading && (!_0x2c1d3b || !_0x2c1d3b.parentResource)) {
                            throw new Error('Cannot add resources while the loader is running.');
                        }
                        if (this.resources[_0x3d32c2]) {
                            throw new Error('Resource named "' + _0x3d32c2 + '" already exists.');
                        }
                        if (_0x4933bb = this['_prepareUrl'](_0x4933bb), this.resources[_0x3d32c2] = new _0x1bac7e(_0x3d32c2, _0x4933bb, _0x2c1d3b), 'function' == typeof _0x2856a6 && this.resources[_0x3d32c2].onAfterMiddleware.once(_0x2856a6), this.loading) {
                            for (var _0x5133b4 = _0x2c1d3b.parentResource, _0x1fe41c = [], _0x5e17e6 = 0; _0x5e17e6 < _0x5133b4.children.length; ++_0x5e17e6) {
                                _0x5133b4.children[_0x5e17e6].isComplete || _0x1fe41c.push(_0x5133b4.children[_0x5e17e6]);
                            }
                            var _0x1e8761 = _0x5133b4.progressChunk * (_0x1fe41c.length + 1) / (_0x1fe41c.length + 2);
                            for (_0x5133b4.children.push(this.resources[_0x3d32c2]), _0x5133b4.progressChunk = _0x1e8761, _0x5e17e6 = 0; _0x5e17e6 < _0x1fe41c.length; ++_0x5e17e6) {
                                _0x1fe41c[_0x5e17e6].progressChunk = _0x1e8761;
                            }
                            this.resources[_0x3d32c2].progressChunk = _0x1e8761;
                        }
                        return this['_queue'].push(this.resources[_0x3d32c2]), this;
                    }, _0x6ca121.prototype.pre = function (_0x49202a) {
                        ;
                        return this['_beforeMiddleware'].push(_0x49202a), this;
                    }, _0x6ca121.prototype.use = function (_0x1e7f54) {
                        ;
                        return this['_afterMiddleware'].push(_0x1e7f54), this;
                    }, _0x6ca121.prototype.reset = function () {
                        ;
                        for (var _0x3911ff in (this.progress = 0, this.loading = false, this['_queue'].kill(), this['_queue'].pause(), this.resources)) {
                            var _0x363f4b = this.resources[_0x3911ff];
                            _0x363f4b['_onLoadBinding'] && _0x363f4b['_onLoadBinding'].detach();
                            _0x363f4b.isLoading && _0x363f4b.abort('loader reset');
                        }
                        return this.resources = {}, this;
                    }, _0x6ca121.prototype.load = function (_0x37e70d) {
                        ;
                        if ('function' == typeof _0x37e70d && this.onComplete.once(_0x37e70d), this.loading) {
                            return this;
                        }
                        if (this['_queue'].idle()) {
                            this['_onStart']();
                            this['_onComplete']();
                        } else {
                            for (var _0x19466b = 100 / this['_queue']['_tasks'].length, _0x2e9892 = 0; _0x2e9892 < this['_queue']['_tasks'].length; ++_0x2e9892) {
                                this['_queue']['_tasks'][_0x2e9892].data.progressChunk = _0x19466b;
                            }
                            this['_onStart']();
                            this['_queue'].resume();
                        }
                        return this;
                    }, Object.defineProperty(_0x6ca121.prototype, 'concurrency', {
                        'get': function () {
                            ;
                            return this['_queue'].concurrency;
                        },
                        'set': function (_0x5d9399) {
                            this['_queue'].concurrency = _0x5d9399;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x6ca121.prototype['_prepareUrl'] = function (_0x515055) {
                        var _0xb0976f, _0x3446a3 = _0x5f1732(_0x515055, { 'strictMode': true });
                        if (_0xb0976f = _0x3446a3.protocol || !_0x3446a3.path || 0 === _0x515055.indexOf('//') ? _0x515055 : this.baseUrl.length && this.baseUrl.lastIndexOf('/') !== this.baseUrl.length - 1 && '/' !== _0x515055.charAt(0) ? this.baseUrl + '/' + _0x515055 : this.baseUrl + _0x515055, this.defaultQueryString) {
                            var _0x16aa9c = /(#[\w-]+)?$/.exec(_0xb0976f)[0];
                            -1 !== (_0xb0976f = _0xb0976f.slice(0, _0xb0976f.length - _0x16aa9c.length)).indexOf('?') ? _0xb0976f += '&' + this.defaultQueryString : _0xb0976f += '?' + this.defaultQueryString;
                            _0xb0976f += _0x16aa9c;
                        }
                        return _0xb0976f;
                    }, _0x6ca121.prototype['_loadResource'] = function (_0x29e575, _0x161e6b) {
                        var _0x4e9042 = this;
                        _0x29e575['_dequeue'] = _0x161e6b;
                        _0xb8cde5.eachSeries(this['_beforeMiddleware'], function (_0x40febb, _0x4f2ec7) {
                            ;
                            _0x40febb.call(_0x4e9042, _0x29e575, function () {
                                ;
                                _0x4f2ec7(_0x29e575.isComplete ? {} : null);
                            });
                        }, function () {
                            ;
                            _0x29e575.isComplete ? _0x4e9042['_onLoad'](_0x29e575) : (_0x29e575['_onLoadBinding'] = _0x29e575.onComplete.once(_0x4e9042['_onLoad'], _0x4e9042), _0x29e575.load());
                        }, true);
                    }, _0x6ca121.prototype['_onStart'] = function () {
                        ;
                        this.progress = 0;
                        this.loading = true;
                        this.onStart.dispatch(this);
                    }, _0x6ca121.prototype['_onComplete'] = function () {
                        ;
                        this.progress = 100;
                        this.loading = false;
                        this.onComplete.dispatch(this, this.resources);
                    }, _0x6ca121.prototype['_onLoad'] = function (_0x59ed16) {
                        var _0x486c42 = this;
                        _0x59ed16['_onLoadBinding'] = null;
                        this['_resourcesParsing'].push(_0x59ed16);
                        _0x59ed16['_dequeue']();
                        _0xb8cde5.eachSeries(this['_afterMiddleware'], function (_0x2db52b, _0x3a160f) {
                            ;
                            _0x2db52b.call(_0x486c42, _0x59ed16, _0x3a160f);
                        }, function () {
                            ;
                            _0x59ed16.onAfterMiddleware.dispatch(_0x59ed16);
                            _0x486c42.progress = Math.min(100, _0x486c42.progress + _0x59ed16.progressChunk);
                            _0x486c42.onProgress.dispatch(_0x486c42, _0x59ed16);
                            _0x59ed16.error ? _0x486c42.onError.dispatch(_0x59ed16.error, _0x486c42, _0x59ed16) : _0x486c42.onLoad.dispatch(_0x486c42, _0x59ed16);
                            _0x486c42['_resourcesParsing'].splice(_0x486c42['_resourcesParsing'].indexOf(_0x59ed16), 1);
                            _0x486c42['_queue'].idle() && 0 === _0x486c42['_resourcesParsing'].length && _0x486c42['_onComplete']();
                        }, true);
                    }, _0x6ca121.prototype.destroy = function () {
                        ;
                        this['_protected'] || this.reset();
                    }, Object.defineProperty(_0x6ca121, 'shared', {
                        'get': function () {
                            var _0x43fbc7 = _0x6ca121['_shared'];
                            return _0x43fbc7 || ((_0x43fbc7 = new _0x6ca121())['_protected'] = true, _0x6ca121['_shared'] = _0x43fbc7), _0x43fbc7;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x6ca121.registerPlugin = function (_0x9cdc65) {
                        ;
                        return _0x6ca121['_plugins'].push(_0x9cdc65), _0x9cdc65.add && _0x9cdc65.add(), _0x6ca121;
                    }, _0x6ca121['_plugins'] = [], _0x6ca121;
                }();
            _0x5e1695.prototype.add = function (_0x46aaf6, _0x5b190f, _0x2f86f4, _0x3fc7c2) {
                ;
                if (Array.isArray(_0x46aaf6)) {
                    for (var _0x290d0e = 0; _0x290d0e < _0x46aaf6.length; ++_0x290d0e) {
                        this.add(_0x46aaf6[_0x290d0e]);
                    }
                    return this;
                }
                if ('object' == typeof _0x46aaf6 && (_0x2f86f4 = _0x46aaf6, _0x3fc7c2 = _0x5b190f || _0x2f86f4.callback || _0x2f86f4.onComplete, _0x5b190f = _0x2f86f4.url, _0x46aaf6 = _0x2f86f4.name || _0x2f86f4.key || _0x2f86f4.url), 'string' != typeof _0x5b190f && (_0x3fc7c2 = _0x2f86f4, _0x2f86f4 = _0x5b190f, _0x5b190f = _0x46aaf6), 'string' != typeof _0x5b190f) {
                    throw new Error('No url passed to add resource to loader.');
                }
                return 'function' == typeof _0x2f86f4 && (_0x3fc7c2 = _0x2f86f4, _0x2f86f4 = null), this['_add'](_0x46aaf6, _0x5b190f, _0x2f86f4, _0x3fc7c2);
            };
            (function () {
                ;
                function _0xcf93d6() {
                }
                _0xcf93d6.init = function (_0xc67108) {
                    ;
                    _0xc67108 = Object.assign({ 'sharedLoader': false }, _0xc67108);
                    this.loader = _0xc67108.sharedLoader ? _0x5e1695.shared : new _0x5e1695();
                };
                _0xcf93d6.destroy = function () {
                    ;
                    this.loader && (this.loader.destroy(), this.loader = null);
                };
            }());
            var _0x6e750b = function () {
                ;
                function _0x5ed579() {
                }
                return _0x5ed579.add = function () {
                    ;
                    _0x1bac7e.setExtensionLoadType('svg', _0x1bac7e.LOAD_TYPE.XHR);
                    _0x1bac7e.setExtensionXhrType('svg', _0x1bac7e.XHR_RESPONSE_TYPE.TEXT);
                }, _0x5ed579.use = function (_0x3d9d67, _0x2c7c05) {
                    ;
                    if (!_0x3d9d67.data || _0x3d9d67.type !== _0x1bac7e.TYPE.IMAGE && 'svg' !== _0x3d9d67.extension) {
                        _0x2c7c05();
                    } else {
                        var _0x363efd = _0x3d9d67.data, _0x30a8e5 = _0x3d9d67.url, _0x30c0f5 = _0x3d9d67.name, _0x1edf98 = _0x3d9d67.metadata;
                        _0x1cdc63.xE.fromLoader(_0x363efd, _0x30a8e5, _0x30c0f5, _0x1edf98).then(function (_0x18f528) {
                            _0x3d9d67.texture = _0x18f528;
                            _0x2c7c05();
                        }).catch(_0x2c7c05);
                    }
                }, _0x5ed579;
            }();
            _0x5e1695.registerPlugin({
                'use': function (_0x4e47dd, _0x1acf2a) {
                    ;
                    if (_0x4e47dd.data) {
                        if (_0x4e47dd.xhr && _0x4e47dd.xhrType === _0x1bac7e.XHR_RESPONSE_TYPE.BLOB) {
                            if (self.Blob && 'string' != typeof _0x4e47dd.data) {
                                if (0 === _0x4e47dd.data.type.indexOf('image')) {
                                    var _0x2df046 = globalThis.URL || globalThis.webkitURL, _0x32d311 = _0x2df046.createObjectURL(_0x4e47dd.data);
                                    return _0x4e47dd.blob = _0x4e47dd.data, _0x4e47dd.data = new Image(), _0x4e47dd.data.src = _0x32d311, _0x4e47dd.type = _0x1bac7e.TYPE.IMAGE, void (_0x4e47dd.data.onload = function () {
                                        ;
                                        _0x2df046.revokeObjectURL(_0x32d311);
                                        _0x4e47dd.data.onload = null;
                                        _0x1acf2a();
                                    });
                                }
                            } else {
                                var _0x22af25 = _0x4e47dd.xhr.getResponseHeader('content-type');
                                if (_0x22af25 && 0 === _0x22af25.indexOf('image')) {
                                    return _0x4e47dd.data = new Image(), _0x4e47dd.data.src = 'data:' + _0x22af25 + ';base64,' + function (_0xce9f66) {
                                        ;
                                        for (var _0x5291ab = '', _0x343e0a = 0; _0x343e0a < _0xce9f66.length;) {
                                            for (var _0xd4656d = [
                                                        0,
                                                        0,
                                                        0
                                                    ], _0x356fe6 = [
                                                        0,
                                                        0,
                                                        0,
                                                        0
                                                    ], _0xcc1605 = 0; _0xcc1605 < _0xd4656d.length; ++_0xcc1605) {
                                                _0x343e0a < _0xce9f66.length ? _0xd4656d[_0xcc1605] = 255 & _0xce9f66.charCodeAt(_0x343e0a++) : _0xd4656d[_0xcc1605] = 0;
                                            }
                                            switch (_0x356fe6[0] = _0xd4656d[0] >> 2, _0x356fe6[1] = (3 & _0xd4656d[0]) << 4 | _0xd4656d[1] >> 4, _0x356fe6[2] = (15 & _0xd4656d[1]) << 2 | _0xd4656d[2] >> 6, _0x356fe6[3] = 63 & _0xd4656d[2], _0x343e0a - (_0xce9f66.length - 1)) {
                                            case 2:
                                                _0x356fe6[3] = 64, _0x356fe6[2] = 64;
                                                break;
                                            case 1:
                                                _0x356fe6[3] = 64;
                                            }
                                            for (_0xcc1605 = 0; _0xcc1605 < _0x356fe6.length; ++_0xcc1605) {
                                                _0x5291ab += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.charAt(_0x356fe6[_0xcc1605]);
                                            }
                                        }
                                        return _0x5291ab;
                                    }(_0x4e47dd.xhr.responseText), _0x4e47dd.type = _0x1bac7e.TYPE.IMAGE, void (_0x4e47dd.data.onload = function () {
                                        ;
                                        _0x4e47dd.data.onload = null;
                                        _0x1acf2a();
                                    });
                                }
                            }
                        }
                        _0x1acf2a();
                    } else {
                        _0x1acf2a();
                    }
                }
            });
            _0x5e1695.registerPlugin(_0x6e750b);
        },
        658: (_0x25e7d1, _0x204ed3, _0x35919e) => {
            'use strict';
            ;
            _0x35919e.d(_0x204ed3, {
                'AB': () => _0x3f9844,
                'Ae': () => _0x562540,
                'Cd': () => _0x5dd1a1,
                'E9': () => _0x49aec3,
                'HS': () => _0x3ce924,
                'Lv': () => _0x50ea09,
                'Pj': () => _0x8c1a5c,
                'ZX': () => _0x38dea7,
                '_b': () => _0x468c2f,
                'c9': () => _0x289710,
                'jl': () => _0x504556,
                'mg': () => _0x8f016c,
                'wx': () => _0x389f12,
                'y3': () => _0x565494
            });
            var _0x3ce924, _0x468c2f = 2 * Math.PI, _0x504556 = 180 / Math.PI, _0x38dea7 = Math.PI / 180;
            !function (_0x5cfbc2) {
                ;
                _0x5cfbc2[_0x5cfbc2.POLY = 0] = 'POLY';
                _0x5cfbc2[_0x5cfbc2.RECT = 1] = 'RECT';
                _0x5cfbc2[_0x5cfbc2.CIRC = 2] = 'CIRC';
                _0x5cfbc2[_0x5cfbc2.ELIP = 3] = 'ELIP';
                _0x5cfbc2[_0x5cfbc2.RREC = 4] = 'RREC';
            }(_0x3ce924 || (_0x3ce924 = {}));
            var _0x49aec3 = function () {
                    ;
                    function _0x302c25(_0x343d77, _0x24f18a) {
                        void 0 === _0x343d77 && (_0x343d77 = 0);
                        void 0 === _0x24f18a && (_0x24f18a = 0);
                        this.x = 0;
                        this.y = 0;
                        this.x = _0x343d77;
                        this.y = _0x24f18a;
                    }
                    return _0x302c25.prototype.clone = function () {
                        return new _0x302c25(this.x, this.y);
                    }, _0x302c25.prototype.copyFrom = function (_0x371d9f) {
                        ;
                        return this.set(_0x371d9f.x, _0x371d9f.y), this;
                    }, _0x302c25.prototype.copyTo = function (_0x4853a4) {
                        ;
                        return _0x4853a4.set(this.x, this.y), _0x4853a4;
                    }, _0x302c25.prototype.equals = function (_0x50db0a) {
                        return _0x50db0a.x === this.x && _0x50db0a.y === this.y;
                    }, _0x302c25.prototype.set = function (_0x31b858, _0x2acfba) {
                        return void 0 === _0x31b858 && (_0x31b858 = 0), void 0 === _0x2acfba && (_0x2acfba = _0x31b858), this.x = _0x31b858, this.y = _0x2acfba, this;
                    }, _0x302c25.prototype.toString = function () {
                        ;
                        return '[@pixi/math:Point x=' + this.x + ' y=' + this.y + ']';
                    }, _0x302c25;
                }(), _0x33d350 = [
                    new _0x49aec3(),
                    new _0x49aec3(),
                    new _0x49aec3(),
                    new _0x49aec3()
                ], _0x562540 = function () {
                    ;
                    function _0x339c83(_0x53169b, _0x32cc64, _0x514c98, _0x42abe9) {
                        ;
                        void 0 === _0x53169b && (_0x53169b = 0);
                        void 0 === _0x32cc64 && (_0x32cc64 = 0);
                        void 0 === _0x514c98 && (_0x514c98 = 0);
                        void 0 === _0x42abe9 && (_0x42abe9 = 0);
                        this.x = Number(_0x53169b);
                        this.y = Number(_0x32cc64);
                        this.width = Number(_0x514c98);
                        this.height = Number(_0x42abe9);
                        this.type = _0x3ce924.RECT;
                    }
                    return Object.defineProperty(_0x339c83.prototype, 'left', {
                        'get': function () {
                            return this.x;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x339c83.prototype, 'right', {
                        'get': function () {
                            ;
                            return this.x + this.width;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x339c83.prototype, 'top', {
                        'get': function () {
                            return this.y;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x339c83.prototype, 'bottom', {
                        'get': function () {
                            ;
                            return this.y + this.height;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x339c83, 'EMPTY', {
                        'get': function () {
                            return new _0x339c83(0, 0, 0, 0);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x339c83.prototype.clone = function () {
                        ;
                        return new _0x339c83(this.x, this.y, this.width, this.height);
                    }, _0x339c83.prototype.copyFrom = function (_0x558046) {
                        ;
                        return this.x = _0x558046.x, this.y = _0x558046.y, this.width = _0x558046.width, this.height = _0x558046.height, this;
                    }, _0x339c83.prototype.copyTo = function (_0xe881e9) {
                        ;
                        return _0xe881e9.x = this.x, _0xe881e9.y = this.y, _0xe881e9.width = this.width, _0xe881e9.height = this.height, _0xe881e9;
                    }, _0x339c83.prototype.contains = function (_0x5b8b03, _0x5f077b) {
                        ;
                        return !(this.width <= 0 || this.height <= 0) && _0x5b8b03 >= this.x && _0x5b8b03 < this.x + this.width && _0x5f077b >= this.y && _0x5f077b < this.y + this.height;
                    }, _0x339c83.prototype.intersects = function (_0x2536e5, _0x36b8d4) {
                        ;
                        if (!_0x36b8d4) {
                            var _0x1edd5b = this.x < _0x2536e5.x ? _0x2536e5.x : this.x;
                            if ((this.right > _0x2536e5.right ? _0x2536e5.right : this.right) <= _0x1edd5b) {
                                return false;
                            }
                            var _0x1e1663 = this.y < _0x2536e5.y ? _0x2536e5.y : this.y;
                            return (this.bottom > _0x2536e5.bottom ? _0x2536e5.bottom : this.bottom) > _0x1e1663;
                        }
                        var _0x3ff5c5 = this.left, _0x2bff8c = this.right, _0x795287 = this.top, _0x2053ea = this.bottom;
                        if (_0x2bff8c <= _0x3ff5c5 || _0x2053ea <= _0x795287) {
                            return false;
                        }
                        var _0x46387f = _0x33d350[0].set(_0x2536e5.left, _0x2536e5.top), _0x196d50 = _0x33d350[1].set(_0x2536e5.left, _0x2536e5.bottom), _0x1a2f68 = _0x33d350[2].set(_0x2536e5.right, _0x2536e5.top), _0x4e15b9 = _0x33d350[3].set(_0x2536e5.right, _0x2536e5.bottom);
                        if (_0x1a2f68.x <= _0x46387f.x || _0x196d50.y <= _0x46387f.y) {
                            return false;
                        }
                        var _0x5221e3 = Math.sign(_0x36b8d4.a * _0x36b8d4.d - _0x36b8d4.b * _0x36b8d4.c);
                        if (0 === _0x5221e3) {
                            return false;
                        }
                        if (_0x36b8d4.apply(_0x46387f, _0x46387f), _0x36b8d4.apply(_0x196d50, _0x196d50), _0x36b8d4.apply(_0x1a2f68, _0x1a2f68), _0x36b8d4.apply(_0x4e15b9, _0x4e15b9), Math.max(_0x46387f.x, _0x196d50.x, _0x1a2f68.x, _0x4e15b9.x) <= _0x3ff5c5 || Math.min(_0x46387f.x, _0x196d50.x, _0x1a2f68.x, _0x4e15b9.x) >= _0x2bff8c || Math.max(_0x46387f.y, _0x196d50.y, _0x1a2f68.y, _0x4e15b9.y) <= _0x795287 || Math.min(_0x46387f.y, _0x196d50.y, _0x1a2f68.y, _0x4e15b9.y) >= _0x2053ea) {
                            return false;
                        }
                        var _0x5c7386 = _0x5221e3 * (_0x196d50.y - _0x46387f.y), _0x5944fe = _0x5221e3 * (_0x46387f.x - _0x196d50.x), _0x432503 = _0x5c7386 * _0x3ff5c5 + _0x5944fe * _0x795287, _0x3f1b08 = _0x5c7386 * _0x2bff8c + _0x5944fe * _0x795287, _0x37bdcf = _0x5c7386 * _0x3ff5c5 + _0x5944fe * _0x2053ea, _0x194780 = _0x5c7386 * _0x2bff8c + _0x5944fe * _0x2053ea;
                        if (Math.max(_0x432503, _0x3f1b08, _0x37bdcf, _0x194780) <= _0x5c7386 * _0x46387f.x + _0x5944fe * _0x46387f.y || Math.min(_0x432503, _0x3f1b08, _0x37bdcf, _0x194780) >= _0x5c7386 * _0x4e15b9.x + _0x5944fe * _0x4e15b9.y) {
                            return false;
                        }
                        var _0x242d0d = _0x5221e3 * (_0x46387f.y - _0x1a2f68.y), _0x24bc11 = _0x5221e3 * (_0x1a2f68.x - _0x46387f.x), _0x316683 = _0x242d0d * _0x3ff5c5 + _0x24bc11 * _0x795287, _0x4cf949 = _0x242d0d * _0x2bff8c + _0x24bc11 * _0x795287, _0x1a9bdc = _0x242d0d * _0x3ff5c5 + _0x24bc11 * _0x2053ea, _0x18dd2e = _0x242d0d * _0x2bff8c + _0x24bc11 * _0x2053ea;
                        return !(Math.max(_0x316683, _0x4cf949, _0x1a9bdc, _0x18dd2e) <= _0x242d0d * _0x46387f.x + _0x24bc11 * _0x46387f.y || Math.min(_0x316683, _0x4cf949, _0x1a9bdc, _0x18dd2e) >= _0x242d0d * _0x4e15b9.x + _0x24bc11 * _0x4e15b9.y);
                    }, _0x339c83.prototype.pad = function (_0xb5e954, _0x2369f3) {
                        ;
                        return void 0 === _0xb5e954 && (_0xb5e954 = 0), void 0 === _0x2369f3 && (_0x2369f3 = _0xb5e954), this.x -= _0xb5e954, this.y -= _0x2369f3, this.width += 2 * _0xb5e954, this.height += 2 * _0x2369f3, this;
                    }, _0x339c83.prototype.fit = function (_0x4077e5) {
                        var _0x2ce1e6 = Math.max(this.x, _0x4077e5.x), _0x331a98 = Math.min(this.x + this.width, _0x4077e5.x + _0x4077e5.width), _0x293bdc = Math.max(this.y, _0x4077e5.y), _0x2e68a5 = Math.min(this.y + this.height, _0x4077e5.y + _0x4077e5.height);
                        return this.x = _0x2ce1e6, this.width = Math.max(_0x331a98 - _0x2ce1e6, 0), this.y = _0x293bdc, this.height = Math.max(_0x2e68a5 - _0x293bdc, 0), this;
                    }, _0x339c83.prototype.ceil = function (_0x230864, _0x23b6b2) {
                        ;
                        void 0 === _0x230864 && (_0x230864 = 1);
                        void 0 === _0x23b6b2 && (_0x23b6b2 = 0.001);
                        var _0x3f0eb7 = Math.ceil((this.x + this.width - _0x23b6b2) * _0x230864) / _0x230864, _0x6b26bc = Math.ceil((this.y + this.height - _0x23b6b2) * _0x230864) / _0x230864;
                        return this.x = Math.floor((this.x + _0x23b6b2) * _0x230864) / _0x230864, this.y = Math.floor((this.y + _0x23b6b2) * _0x230864) / _0x230864, this.width = _0x3f0eb7 - this.x, this.height = _0x6b26bc - this.y, this;
                    }, _0x339c83.prototype.enlarge = function (_0x48ef03) {
                        var _0x3fc0fc = Math.min(this.x, _0x48ef03.x), _0x47dbe7 = Math.max(this.x + this.width, _0x48ef03.x + _0x48ef03.width), _0x7527ed = Math.min(this.y, _0x48ef03.y), _0x20dd57 = Math.max(this.y + this.height, _0x48ef03.y + _0x48ef03.height);
                        return this.x = _0x3fc0fc, this.width = _0x47dbe7 - _0x3fc0fc, this.y = _0x7527ed, this.height = _0x20dd57 - _0x7527ed, this;
                    }, _0x339c83.prototype.toString = function () {
                        ;
                        return '[@pixi/math:Rectangle x=' + this.x + ' y=' + this.y + ' width=' + this.width + ' height=' + this.height + ']';
                    }, _0x339c83;
                }(), _0x5dd1a1 = function () {
                    ;
                    function _0x3dd667(_0x53bb27, _0x41876c, _0x3d7093) {
                        ;
                        void 0 === _0x53bb27 && (_0x53bb27 = 0);
                        void 0 === _0x41876c && (_0x41876c = 0);
                        void 0 === _0x3d7093 && (_0x3d7093 = 0);
                        this.x = _0x53bb27;
                        this.y = _0x41876c;
                        this.radius = _0x3d7093;
                        this.type = _0x3ce924.CIRC;
                    }
                    return _0x3dd667.prototype.clone = function () {
                        ;
                        return new _0x3dd667(this.x, this.y, this.radius);
                    }, _0x3dd667.prototype.contains = function (_0x50396b, _0x213da9) {
                        ;
                        if (this.radius <= 0) {
                            return false;
                        }
                        var _0x2690e4 = this.radius * this.radius, _0x5286bd = this.x - _0x50396b, _0x34ff9d = this.y - _0x213da9;
                        return (_0x5286bd *= _0x5286bd) + (_0x34ff9d *= _0x34ff9d) <= _0x2690e4;
                    }, _0x3dd667.prototype.getBounds = function () {
                        ;
                        return new _0x562540(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius);
                    }, _0x3dd667.prototype.toString = function () {
                        ;
                        return '[@pixi/math:Circle x=' + this.x + ' y=' + this.y + ' radius=' + this.radius + ']';
                    }, _0x3dd667;
                }(), _0x8c1a5c = function () {
                    ;
                    function _0x1169f7(_0x297da8, _0x437b91, _0x1259fb, _0x1509b7) {
                        ;
                        void 0 === _0x297da8 && (_0x297da8 = 0);
                        void 0 === _0x437b91 && (_0x437b91 = 0);
                        void 0 === _0x1259fb && (_0x1259fb = 0);
                        void 0 === _0x1509b7 && (_0x1509b7 = 0);
                        this.x = _0x297da8;
                        this.y = _0x437b91;
                        this.width = _0x1259fb;
                        this.height = _0x1509b7;
                        this.type = _0x3ce924.ELIP;
                    }
                    return _0x1169f7.prototype.clone = function () {
                        ;
                        return new _0x1169f7(this.x, this.y, this.width, this.height);
                    }, _0x1169f7.prototype.contains = function (_0x599215, _0x1bd2fa) {
                        ;
                        if (this.width <= 0 || this.height <= 0) {
                            return false;
                        }
                        var _0x189519 = (_0x599215 - this.x) / this.width, _0x3a0729 = (_0x1bd2fa - this.y) / this.height;
                        return (_0x189519 *= _0x189519) + (_0x3a0729 *= _0x3a0729) <= 1;
                    }, _0x1169f7.prototype.getBounds = function () {
                        ;
                        return new _0x562540(this.x - this.width, this.y - this.height, this.width, this.height);
                    }, _0x1169f7.prototype.toString = function () {
                        ;
                        return '[@pixi/math:Ellipse x=' + this.x + ' y=' + this.y + ' width=' + this.width + ' height=' + this.height + ']';
                    }, _0x1169f7;
                }(), _0x8f016c = function () {
                    ;
                    function _0x39cd12() {
                        ;
                        for (var _0x29cd46 = arguments, _0x23e254 = [], _0x2a3abd = 0; _0x2a3abd < arguments.length; _0x2a3abd++) {
                            _0x23e254[_0x2a3abd] = _0x29cd46[_0x2a3abd];
                        }
                        var _0x562b52 = Array.isArray(_0x23e254[0]) ? _0x23e254[0] : _0x23e254;
                        if ('number' != typeof _0x562b52[0]) {
                            for (var _0xb7bfed = [], _0xe0d956 = 0, _0x1c0547 = _0x562b52.length; _0xe0d956 < _0x1c0547; _0xe0d956++) {
                                _0xb7bfed.push(_0x562b52[_0xe0d956].x, _0x562b52[_0xe0d956].y);
                            }
                            _0x562b52 = _0xb7bfed;
                        }
                        this.points = _0x562b52;
                        this.type = _0x3ce924.POLY;
                        this.closeStroke = true;
                    }
                    return _0x39cd12.prototype.clone = function () {
                        var _0x250bb4 = new _0x39cd12(this.points.slice());
                        return _0x250bb4.closeStroke = this.closeStroke, _0x250bb4;
                    }, _0x39cd12.prototype.contains = function (_0xa78a74, _0x495fa3) {
                        ;
                        for (var _0x7c9511 = false, _0x141b34 = this.points.length / 2, _0x25e882 = 0, _0x3d36fb = _0x141b34 - 1; _0x25e882 < _0x141b34; _0x3d36fb = _0x25e882++) {
                            var _0x1705b1 = this.points[2 * _0x25e882], _0x3e391a = this.points[2 * _0x25e882 + 1], _0x587db9 = this.points[2 * _0x3d36fb], _0x38e3a3 = this.points[2 * _0x3d36fb + 1];
                            _0x3e391a > _0x495fa3 != _0x38e3a3 > _0x495fa3 && _0xa78a74 < (_0x495fa3 - _0x3e391a) / (_0x38e3a3 - _0x3e391a) * (_0x587db9 - _0x1705b1) + _0x1705b1 && (_0x7c9511 = !_0x7c9511);
                        }
                        return _0x7c9511;
                    }, _0x39cd12.prototype.toString = function () {
                        ;
                        return '[@pixi/math:PolygoncloseStroke=' + this.closeStroke + 'points=' + this.points.reduce(function (_0x3f8e84, _0x36d635) {
                            return _0x3f8e84 + ', ' + _0x36d635;
                        }, '') + ']';
                    }, _0x39cd12;
                }(), _0x289710 = function () {
                    ;
                    function _0x444b28(_0x31413d, _0xf644c5, _0x2ca3b0, _0x1a051e, _0x2635b8) {
                        ;
                        void 0 === _0x31413d && (_0x31413d = 0);
                        void 0 === _0xf644c5 && (_0xf644c5 = 0);
                        void 0 === _0x2ca3b0 && (_0x2ca3b0 = 0);
                        void 0 === _0x1a051e && (_0x1a051e = 0);
                        void 0 === _0x2635b8 && (_0x2635b8 = 20);
                        this.x = _0x31413d;
                        this.y = _0xf644c5;
                        this.width = _0x2ca3b0;
                        this.height = _0x1a051e;
                        this.radius = _0x2635b8;
                        this.type = _0x3ce924.RREC;
                    }
                    return _0x444b28.prototype.clone = function () {
                        ;
                        return new _0x444b28(this.x, this.y, this.width, this.height, this.radius);
                    }, _0x444b28.prototype.contains = function (_0x38b53e, _0x389e6e) {
                        ;
                        if (this.width <= 0 || this.height <= 0) {
                            return false;
                        }
                        if (_0x38b53e >= this.x && _0x38b53e <= this.x + this.width && _0x389e6e >= this.y && _0x389e6e <= this.y + this.height) {
                            var _0x5ef10b = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
                            if (_0x389e6e >= this.y + _0x5ef10b && _0x389e6e <= this.y + this.height - _0x5ef10b || _0x38b53e >= this.x + _0x5ef10b && _0x38b53e <= this.x + this.width - _0x5ef10b) {
                                return true;
                            }
                            var _0x39f552 = _0x38b53e - (this.x + _0x5ef10b), _0x20cb70 = _0x389e6e - (this.y + _0x5ef10b), _0x4a4679 = _0x5ef10b * _0x5ef10b;
                            if (_0x39f552 * _0x39f552 + _0x20cb70 * _0x20cb70 <= _0x4a4679) {
                                return true;
                            }
                            if ((_0x39f552 = _0x38b53e - (this.x + this.width - _0x5ef10b)) * _0x39f552 + _0x20cb70 * _0x20cb70 <= _0x4a4679) {
                                return true;
                            }
                            if (_0x39f552 * _0x39f552 + (_0x20cb70 = _0x389e6e - (this.y + this.height - _0x5ef10b)) * _0x20cb70 <= _0x4a4679) {
                                return true;
                            }
                            if ((_0x39f552 = _0x38b53e - (this.x + _0x5ef10b)) * _0x39f552 + _0x20cb70 * _0x20cb70 <= _0x4a4679) {
                                return true;
                            }
                        }
                        return false;
                    }, _0x444b28.prototype.toString = function () {
                        ;
                        return '[@pixi/math:RoundedRectangle x=' + this.x + ' y=' + this.y + 'width=' + this.width + ' height=' + this.height + ' radius=' + this.radius + ']';
                    }, _0x444b28;
                }(), _0x3f9844 = function () {
                    ;
                    function _0x56f704(_0x1b32c5, _0x4f4e1e, _0x1ed647, _0x1865b3) {
                        ;
                        void 0 === _0x1ed647 && (_0x1ed647 = 0);
                        void 0 === _0x1865b3 && (_0x1865b3 = 0);
                        this['_x'] = _0x1ed647;
                        this['_y'] = _0x1865b3;
                        this.cb = _0x1b32c5;
                        this.scope = _0x4f4e1e;
                    }
                    return _0x56f704.prototype.clone = function (_0x4b4c9c, _0x203758) {
                        ;
                        return void 0 === _0x4b4c9c && (_0x4b4c9c = this.cb), void 0 === _0x203758 && (_0x203758 = this.scope), new _0x56f704(_0x4b4c9c, _0x203758, this['_x'], this['_y']);
                    }, _0x56f704.prototype.set = function (_0x348e4f, _0x190fac) {
                        ;
                        return void 0 === _0x348e4f && (_0x348e4f = 0), void 0 === _0x190fac && (_0x190fac = _0x348e4f), this['_x'] === _0x348e4f && this['_y'] === _0x190fac || (this['_x'] = _0x348e4f, this['_y'] = _0x190fac, this.cb.call(this.scope)), this;
                    }, _0x56f704.prototype.copyFrom = function (_0x3fcd26) {
                        ;
                        return this['_x'] === _0x3fcd26.x && this['_y'] === _0x3fcd26.y || (this['_x'] = _0x3fcd26.x, this['_y'] = _0x3fcd26.y, this.cb.call(this.scope)), this;
                    }, _0x56f704.prototype.copyTo = function (_0x29db5b) {
                        return _0x29db5b.set(this['_x'], this['_y']), _0x29db5b;
                    }, _0x56f704.prototype.equals = function (_0x49d49f) {
                        return _0x49d49f.x === this['_x'] && _0x49d49f.y === this['_y'];
                    }, _0x56f704.prototype.toString = function () {
                        ;
                        return '[@pixi/math:ObservablePoint x=0 y=0 scope=' + this.scope + ']';
                    }, Object.defineProperty(_0x56f704.prototype, 'x', {
                        'get': function () {
                            return this['_x'];
                        },
                        'set': function (_0x4b3028) {
                            ;
                            this['_x'] !== _0x4b3028 && (this['_x'] = _0x4b3028, this.cb.call(this.scope));
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x56f704.prototype, 'y', {
                        'get': function () {
                            return this['_y'];
                        },
                        'set': function (_0x5e0a11) {
                            ;
                            this['_y'] !== _0x5e0a11 && (this['_y'] = _0x5e0a11, this.cb.call(this.scope));
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x56f704;
                }(), _0x565494 = function () {
                    ;
                    function _0x1bf0ea(_0x29c0bc, _0x16864c, _0x415f52, _0x268067, _0x76f523, _0x4acec7) {
                        void 0 === _0x29c0bc && (_0x29c0bc = 1);
                        void 0 === _0x16864c && (_0x16864c = 0);
                        void 0 === _0x415f52 && (_0x415f52 = 0);
                        void 0 === _0x268067 && (_0x268067 = 1);
                        void 0 === _0x76f523 && (_0x76f523 = 0);
                        void 0 === _0x4acec7 && (_0x4acec7 = 0);
                        this.array = null;
                        this.a = _0x29c0bc;
                        this.b = _0x16864c;
                        this.c = _0x415f52;
                        this.d = _0x268067;
                        this.tx = _0x76f523;
                        this.ty = _0x4acec7;
                    }
                    return _0x1bf0ea.prototype.fromArray = function (_0x64d73e) {
                        this.a = _0x64d73e[0];
                        this.b = _0x64d73e[1];
                        this.c = _0x64d73e[3];
                        this.d = _0x64d73e[4];
                        this.tx = _0x64d73e[2];
                        this.ty = _0x64d73e[5];
                    }, _0x1bf0ea.prototype.set = function (_0x1274ca, _0x5a8841, _0x5d6f3f, _0x27b0e4, _0x3eac26, _0x3a5341) {
                        return this.a = _0x1274ca, this.b = _0x5a8841, this.c = _0x5d6f3f, this.d = _0x27b0e4, this.tx = _0x3eac26, this.ty = _0x3a5341, this;
                    }, _0x1bf0ea.prototype.toArray = function (_0x56b183, _0x2c3d88) {
                        ;
                        this.array || (this.array = new Float32Array(9));
                        var _0x37bf75 = _0x2c3d88 || this.array;
                        return _0x56b183 ? (_0x37bf75[0] = this.a, _0x37bf75[1] = this.b, _0x37bf75[2] = 0, _0x37bf75[3] = this.c, _0x37bf75[4] = this.d, _0x37bf75[5] = 0, _0x37bf75[6] = this.tx, _0x37bf75[7] = this.ty, _0x37bf75[8] = 1) : (_0x37bf75[0] = this.a, _0x37bf75[1] = this.c, _0x37bf75[2] = this.tx, _0x37bf75[3] = this.b, _0x37bf75[4] = this.d, _0x37bf75[5] = this.ty, _0x37bf75[6] = 0, _0x37bf75[7] = 0, _0x37bf75[8] = 1), _0x37bf75;
                    }, _0x1bf0ea.prototype.apply = function (_0x4338e7, _0x365e6c) {
                        _0x365e6c = _0x365e6c || new _0x49aec3();
                        var _0x506a1b = _0x4338e7.x, _0x4583e6 = _0x4338e7.y;
                        return _0x365e6c.x = this.a * _0x506a1b + this.c * _0x4583e6 + this.tx, _0x365e6c.y = this.b * _0x506a1b + this.d * _0x4583e6 + this.ty, _0x365e6c;
                    }, _0x1bf0ea.prototype.applyInverse = function (_0x542695, _0xafaa26) {
                        _0xafaa26 = _0xafaa26 || new _0x49aec3();
                        var _0x514260 = 1 / (this.a * this.d + this.c * -this.b), _0x14ed98 = _0x542695.x, _0x5a8353 = _0x542695.y;
                        return _0xafaa26.x = this.d * _0x514260 * _0x14ed98 + -this.c * _0x514260 * _0x5a8353 + (this.ty * this.c - this.tx * this.d) * _0x514260, _0xafaa26.y = this.a * _0x514260 * _0x5a8353 + -this.b * _0x514260 * _0x14ed98 + (-this.ty * this.a + this.tx * this.b) * _0x514260, _0xafaa26;
                    }, _0x1bf0ea.prototype.translate = function (_0x562797, _0x13ba4d) {
                        return this.tx += _0x562797, this.ty += _0x13ba4d, this;
                    }, _0x1bf0ea.prototype.scale = function (_0x4a9ea1, _0x2d679b) {
                        return this.a *= _0x4a9ea1, this.d *= _0x2d679b, this.c *= _0x4a9ea1, this.b *= _0x2d679b, this.tx *= _0x4a9ea1, this.ty *= _0x2d679b, this;
                    }, _0x1bf0ea.prototype.rotate = function (_0x39f951) {
                        var _0x3453df = Math.cos(_0x39f951), _0x3e55f8 = Math.sin(_0x39f951), _0x75e65 = this.a, _0x43eaf1 = this.c, _0x45302b = this.tx;
                        return this.a = _0x75e65 * _0x3453df - this.b * _0x3e55f8, this.b = _0x75e65 * _0x3e55f8 + this.b * _0x3453df, this.c = _0x43eaf1 * _0x3453df - this.d * _0x3e55f8, this.d = _0x43eaf1 * _0x3e55f8 + this.d * _0x3453df, this.tx = _0x45302b * _0x3453df - this.ty * _0x3e55f8, this.ty = _0x45302b * _0x3e55f8 + this.ty * _0x3453df, this;
                    }, _0x1bf0ea.prototype.append = function (_0x3c3f6e) {
                        var _0xe7c7ff = this.a, _0x5f3c39 = this.b, _0x4a7858 = this.c, _0x4a5405 = this.d;
                        return this.a = _0x3c3f6e.a * _0xe7c7ff + _0x3c3f6e.b * _0x4a7858, this.b = _0x3c3f6e.a * _0x5f3c39 + _0x3c3f6e.b * _0x4a5405, this.c = _0x3c3f6e.c * _0xe7c7ff + _0x3c3f6e.d * _0x4a7858, this.d = _0x3c3f6e.c * _0x5f3c39 + _0x3c3f6e.d * _0x4a5405, this.tx = _0x3c3f6e.tx * _0xe7c7ff + _0x3c3f6e.ty * _0x4a7858 + this.tx, this.ty = _0x3c3f6e.tx * _0x5f3c39 + _0x3c3f6e.ty * _0x4a5405 + this.ty, this;
                    }, _0x1bf0ea.prototype.setTransform = function (_0x513131, _0x102a7a, _0x1b7c97, _0x8983bc, _0x31f4f3, _0x10cf29, _0x5dedb6, _0x2ea433, _0x5e9794) {
                        ;
                        return this.a = Math.cos(_0x5dedb6 + _0x5e9794) * _0x31f4f3, this.b = Math.sin(_0x5dedb6 + _0x5e9794) * _0x31f4f3, this.c = -Math.sin(_0x5dedb6 - _0x2ea433) * _0x10cf29, this.d = Math.cos(_0x5dedb6 - _0x2ea433) * _0x10cf29, this.tx = _0x513131 - (_0x1b7c97 * this.a + _0x8983bc * this.c), this.ty = _0x102a7a - (_0x1b7c97 * this.b + _0x8983bc * this.d), this;
                    }, _0x1bf0ea.prototype.prepend = function (_0x39d30e) {
                        var _0x4c9263 = this.tx;
                        if (1 !== _0x39d30e.a || 0 !== _0x39d30e.b || 0 !== _0x39d30e.c || 1 !== _0x39d30e.d) {
                            var _0x55d60c = this.a, _0x4bf001 = this.c;
                            this.a = _0x55d60c * _0x39d30e.a + this.b * _0x39d30e.c;
                            this.b = _0x55d60c * _0x39d30e.b + this.b * _0x39d30e.d;
                            this.c = _0x4bf001 * _0x39d30e.a + this.d * _0x39d30e.c;
                            this.d = _0x4bf001 * _0x39d30e.b + this.d * _0x39d30e.d;
                        }
                        return this.tx = _0x4c9263 * _0x39d30e.a + this.ty * _0x39d30e.c + _0x39d30e.tx, this.ty = _0x4c9263 * _0x39d30e.b + this.ty * _0x39d30e.d + _0x39d30e.ty, this;
                    }, _0x1bf0ea.prototype.decompose = function (_0x2f0cd0) {
                        var _0x3e3fd2 = this.a, _0x555800 = this.b, _0x3e80a6 = this.c, _0x351be4 = this.d, _0x2b4a86 = _0x2f0cd0.pivot, _0x124021 = -Math.atan2(-_0x3e80a6, _0x351be4), _0x30305d = Math.atan2(_0x555800, _0x3e3fd2), _0x287c97 = Math.abs(_0x124021 + _0x30305d);
                        return _0x287c97 < 0.00001 || Math.abs(_0x468c2f - _0x287c97) < 0.00001 ? (_0x2f0cd0.rotation = _0x30305d, _0x2f0cd0.skew.x = _0x2f0cd0.skew.y = 0) : (_0x2f0cd0.rotation = 0, _0x2f0cd0.skew.x = _0x124021, _0x2f0cd0.skew.y = _0x30305d), _0x2f0cd0.scale.x = Math.sqrt(_0x3e3fd2 * _0x3e3fd2 + _0x555800 * _0x555800), _0x2f0cd0.scale.y = Math.sqrt(_0x3e80a6 * _0x3e80a6 + _0x351be4 * _0x351be4), _0x2f0cd0.position.x = this.tx + (_0x2b4a86.x * _0x3e3fd2 + _0x2b4a86.y * _0x3e80a6), _0x2f0cd0.position.y = this.ty + (_0x2b4a86.x * _0x555800 + _0x2b4a86.y * _0x351be4), _0x2f0cd0;
                    }, _0x1bf0ea.prototype.invert = function () {
                        var _0x2879b8 = this.a, _0x52eb66 = this.b, _0x238ecf = this.c, _0x2e6cc7 = this.d, _0x445cd6 = this.tx, _0x537384 = _0x2879b8 * _0x2e6cc7 - _0x52eb66 * _0x238ecf;
                        return this.a = _0x2e6cc7 / _0x537384, this.b = -_0x52eb66 / _0x537384, this.c = -_0x238ecf / _0x537384, this.d = _0x2879b8 / _0x537384, this.tx = (_0x238ecf * this.ty - _0x2e6cc7 * _0x445cd6) / _0x537384, this.ty = -(_0x2879b8 * this.ty - _0x52eb66 * _0x445cd6) / _0x537384, this;
                    }, _0x1bf0ea.prototype.identity = function () {
                        return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this;
                    }, _0x1bf0ea.prototype.clone = function () {
                        var _0x5c1ea4 = new _0x1bf0ea();
                        return _0x5c1ea4.a = this.a, _0x5c1ea4.b = this.b, _0x5c1ea4.c = this.c, _0x5c1ea4.d = this.d, _0x5c1ea4.tx = this.tx, _0x5c1ea4.ty = this.ty, _0x5c1ea4;
                    }, _0x1bf0ea.prototype.copyTo = function (_0x361762) {
                        return _0x361762.a = this.a, _0x361762.b = this.b, _0x361762.c = this.c, _0x361762.d = this.d, _0x361762.tx = this.tx, _0x361762.ty = this.ty, _0x361762;
                    }, _0x1bf0ea.prototype.copyFrom = function (_0xc71132) {
                        return this.a = _0xc71132.a, this.b = _0xc71132.b, this.c = _0xc71132.c, this.d = _0xc71132.d, this.tx = _0xc71132.tx, this.ty = _0xc71132.ty, this;
                    }, _0x1bf0ea.prototype.toString = function () {
                        ;
                        return '[@pixi/math:Matrix a=' + this.a + ' b=' + this.b + ' c=' + this.c + ' d=' + this.d + ' tx=' + this.tx + ' ty=' + this.ty + ']';
                    }, Object.defineProperty(_0x1bf0ea, 'IDENTITY', {
                        'get': function () {
                            return new _0x1bf0ea();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x1bf0ea, 'TEMP_MATRIX', {
                        'get': function () {
                            return new _0x1bf0ea();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x1bf0ea;
                }(), _0x2098f1 = [
                    1,
                    1,
                    0,
                    -1,
                    -1,
                    -1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    -1,
                    -1,
                    -1,
                    0,
                    1
                ], _0x2bd9bd = [
                    0,
                    1,
                    1,
                    1,
                    0,
                    -1,
                    -1,
                    -1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    -1,
                    -1,
                    -1
                ], _0x47a3b5 = [
                    0,
                    -1,
                    -1,
                    -1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    -1,
                    -1,
                    -1
                ], _0x314f7e = [
                    1,
                    1,
                    0,
                    -1,
                    -1,
                    -1,
                    0,
                    1,
                    -1,
                    -1,
                    0,
                    1,
                    1,
                    1,
                    0,
                    -1
                ], _0x4d392e = [], _0x23ee25 = [], _0x413d49 = Math.sign;
            !function () {
                ;
                for (var _0x7b905c = 0; _0x7b905c < 16; _0x7b905c++) {
                    var _0x2c61c9 = [];
                    _0x4d392e.push(_0x2c61c9);
                    for (var _0x579272 = 0; _0x579272 < 16; _0x579272++) {
                        for (var _0x4cd493 = _0x413d49(_0x2098f1[_0x7b905c] * _0x2098f1[_0x579272] + _0x47a3b5[_0x7b905c] * _0x2bd9bd[_0x579272]), _0x1099a4 = _0x413d49(_0x2bd9bd[_0x7b905c] * _0x2098f1[_0x579272] + _0x314f7e[_0x7b905c] * _0x2bd9bd[_0x579272]), _0x4eb251 = _0x413d49(_0x2098f1[_0x7b905c] * _0x47a3b5[_0x579272] + _0x47a3b5[_0x7b905c] * _0x314f7e[_0x579272]), _0x24624f = _0x413d49(_0x2bd9bd[_0x7b905c] * _0x47a3b5[_0x579272] + _0x314f7e[_0x7b905c] * _0x314f7e[_0x579272]), _0x27c247 = 0; _0x27c247 < 16; _0x27c247++) {
                            if (_0x2098f1[_0x27c247] === _0x4cd493 && _0x2bd9bd[_0x27c247] === _0x1099a4 && _0x47a3b5[_0x27c247] === _0x4eb251 && _0x314f7e[_0x27c247] === _0x24624f) {
                                _0x2c61c9.push(_0x27c247);
                                break;
                            }
                        }
                    }
                }
                for (_0x7b905c = 0; _0x7b905c < 16; _0x7b905c++) {
                    var _0x31e92d = new _0x565494();
                    _0x31e92d.set(_0x2098f1[_0x7b905c], _0x2bd9bd[_0x7b905c], _0x47a3b5[_0x7b905c], _0x314f7e[_0x7b905c], 0, 0);
                    _0x23ee25.push(_0x31e92d);
                }
            }();
            var _0x50ea09 = {
                    'E': 0,
                    'SE': 1,
                    'S': 2,
                    'SW': 3,
                    'W': 4,
                    'NW': 5,
                    'N': 6,
                    'NE': 7,
                    'MIRROR_VERTICAL': 8,
                    'MAIN_DIAGONAL': 10,
                    'MIRROR_HORIZONTAL': 12,
                    'REVERSE_DIAGONAL': 14,
                    'uX': function (_0x4a61ed) {
                        return _0x2098f1[_0x4a61ed];
                    },
                    'uY': function (_0x80c457) {
                        return _0x2bd9bd[_0x80c457];
                    },
                    'vX': function (_0x4ce15f) {
                        return _0x47a3b5[_0x4ce15f];
                    },
                    'vY': function (_0x52913a) {
                        return _0x314f7e[_0x52913a];
                    },
                    'inv': function (_0x420b9f) {
                        return 8 & _0x420b9f ? 15 & _0x420b9f : 7 & -_0x420b9f;
                    },
                    'add': function (_0x5f48ba, _0x11778d) {
                        return _0x4d392e[_0x5f48ba][_0x11778d];
                    },
                    'sub': function (_0x57f885, _0x1eedf1) {
                        ;
                        return _0x4d392e[_0x57f885][_0x50ea09.inv(_0x1eedf1)];
                    },
                    'rotate180': function (_0x2122bf) {
                        return 4 ^ _0x2122bf;
                    },
                    'isVertical': function (_0x55dc04) {
                        return 2 == (3 & _0x55dc04);
                    },
                    'byDirection': function (_0x2b62a8, _0x57cae9) {
                        ;
                        return 2 * Math.abs(_0x2b62a8) <= Math.abs(_0x57cae9) ? _0x57cae9 >= 0 ? _0x50ea09.S : _0x50ea09.N : 2 * Math.abs(_0x57cae9) <= Math.abs(_0x2b62a8) ? _0x2b62a8 > 0 ? _0x50ea09.E : _0x50ea09.W : _0x57cae9 > 0 ? _0x2b62a8 > 0 ? _0x50ea09.SE : _0x50ea09.SW : _0x2b62a8 > 0 ? _0x50ea09.NE : _0x50ea09.NW;
                    },
                    'matrixAppendRotationInv': function (_0x2c6f5c, _0x33171d, _0x20b527, _0x247e7e) {
                        ;
                        void 0 === _0x20b527 && (_0x20b527 = 0);
                        void 0 === _0x247e7e && (_0x247e7e = 0);
                        var _0x46bbcc = _0x23ee25[_0x50ea09.inv(_0x33171d)];
                        _0x46bbcc.tx = _0x20b527;
                        _0x46bbcc.ty = _0x247e7e;
                        _0x2c6f5c.append(_0x46bbcc);
                    }
                }, _0x389f12 = function () {
                    ;
                    function _0x2504ae() {
                        ;
                        this.worldTransform = new _0x565494();
                        this.localTransform = new _0x565494();
                        this.position = new _0x3f9844(this.onChange, this, 0, 0);
                        this.scale = new _0x3f9844(this.onChange, this, 1, 1);
                        this.pivot = new _0x3f9844(this.onChange, this, 0, 0);
                        this.skew = new _0x3f9844(this.updateSkew, this, 0, 0);
                        this['_rotation'] = 0;
                        this['_cx'] = 1;
                        this['_sx'] = 0;
                        this['_cy'] = 0;
                        this['_sy'] = 1;
                        this['_localID'] = 0;
                        this['_currentLocalID'] = 0;
                        this['_worldID'] = 0;
                        this['_parentID'] = 0;
                    }
                    return _0x2504ae.prototype.onChange = function () {
                        ;
                        this['_localID']++;
                    }, _0x2504ae.prototype.updateSkew = function () {
                        ;
                        this['_cx'] = Math.cos(this['_rotation'] + this.skew.y);
                        this['_sx'] = Math.sin(this['_rotation'] + this.skew.y);
                        this['_cy'] = -Math.sin(this['_rotation'] - this.skew.x);
                        this['_sy'] = Math.cos(this['_rotation'] - this.skew.x);
                        this['_localID']++;
                    }, _0x2504ae.prototype.toString = function () {
                        ;
                        return '[@pixi/math:Transform position=(' + this.position.x + ', ' + this.position.y + ') rotation=' + this.rotation + ' scale=(' + this.scale.x + ', ' + this.scale.y + ') skew=(' + this.skew.x + ', ' + this.skew.y + ') ]';
                    }, _0x2504ae.prototype.updateLocalTransform = function () {
                        var _0x12ecd1 = this.localTransform;
                        this['_localID'] !== this['_currentLocalID'] && (_0x12ecd1.a = this['_cx'] * this.scale.x, _0x12ecd1.b = this['_sx'] * this.scale.x, _0x12ecd1.c = this['_cy'] * this.scale.y, _0x12ecd1.d = this['_sy'] * this.scale.y, _0x12ecd1.tx = this.position.x - (this.pivot.x * _0x12ecd1.a + this.pivot.y * _0x12ecd1.c), _0x12ecd1.ty = this.position.y - (this.pivot.x * _0x12ecd1.b + this.pivot.y * _0x12ecd1.d), this['_currentLocalID'] = this['_localID'], this['_parentID'] = -1);
                    }, _0x2504ae.prototype.updateTransform = function (_0x1ab526) {
                        var _0x3beb36 = this.localTransform;
                        if (this['_localID'] !== this['_currentLocalID'] && (_0x3beb36.a = this['_cx'] * this.scale.x, _0x3beb36.b = this['_sx'] * this.scale.x, _0x3beb36.c = this['_cy'] * this.scale.y, _0x3beb36.d = this['_sy'] * this.scale.y, _0x3beb36.tx = this.position.x - (this.pivot.x * _0x3beb36.a + this.pivot.y * _0x3beb36.c), _0x3beb36.ty = this.position.y - (this.pivot.x * _0x3beb36.b + this.pivot.y * _0x3beb36.d), this['_currentLocalID'] = this['_localID'], this['_parentID'] = -1), this['_parentID'] !== _0x1ab526['_worldID']) {
                            var _0x14abaf = _0x1ab526.worldTransform, _0x162d1a = this.worldTransform;
                            _0x162d1a.a = _0x3beb36.a * _0x14abaf.a + _0x3beb36.b * _0x14abaf.c;
                            _0x162d1a.b = _0x3beb36.a * _0x14abaf.b + _0x3beb36.b * _0x14abaf.d;
                            _0x162d1a.c = _0x3beb36.c * _0x14abaf.a + _0x3beb36.d * _0x14abaf.c;
                            _0x162d1a.d = _0x3beb36.c * _0x14abaf.b + _0x3beb36.d * _0x14abaf.d;
                            _0x162d1a.tx = _0x3beb36.tx * _0x14abaf.a + _0x3beb36.ty * _0x14abaf.c + _0x14abaf.tx;
                            _0x162d1a.ty = _0x3beb36.tx * _0x14abaf.b + _0x3beb36.ty * _0x14abaf.d + _0x14abaf.ty;
                            this['_parentID'] = _0x1ab526['_worldID'];
                            this['_worldID']++;
                        }
                    }, _0x2504ae.prototype.setFromMatrix = function (_0x2609ce) {
                        ;
                        _0x2609ce.decompose(this);
                        this['_localID']++;
                    }, Object.defineProperty(_0x2504ae.prototype, 'rotation', {
                        'get': function () {
                            return this['_rotation'];
                        },
                        'set': function (_0x350040) {
                            ;
                            this['_rotation'] !== _0x350040 && (this['_rotation'] = _0x350040, this.updateSkew());
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x2504ae.IDENTITY = new _0x2504ae(), _0x2504ae;
                }();
        },
        724: (_0x416c21, _0x32c194, _0x3292ae) => {
            'use strict';
            ;
            _0x3292ae.d(_0x32c194, {
                'Zq': () => _0x44de51,
                'B9': () => _0x4cd0e8
            });
            var _0x3dce18, _0x54c841, _0x2beca4 = _0x3292ae(319), _0x5d6d6c = _0x3292ae(710), _0x522b04 = _0x3292ae(658), _0x1d7bd2 = _0x3292ae(942), _0x3cfa1e = _0x3292ae(680), _0x227758 = _0x3292ae(585);
            !function (_0x303806) {
                ;
                _0x303806.MITER = 'miter';
                _0x303806.BEVEL = 'bevel';
                _0x303806.ROUND = 'round';
            }(_0x3dce18 || (_0x3dce18 = {}));
            (function (_0x4f8595) {
                ;
                _0x4f8595.BUTT = 'butt';
                _0x4f8595.ROUND = 'round';
                _0x4f8595.SQUARE = 'square';
            }(_0x54c841 || (_0x54c841 = {})));
            var _0x2b57a8 = {
                    'adaptive': true,
                    'maxLength': 10,
                    'minSegments': 8,
                    'maxSegments': 2048,
                    'epsilon': 0.0001,
                    '_segmentsCount': function (_0x204839, _0x38f82b) {
                        ;
                        if (void 0 === _0x38f82b && (_0x38f82b = 20), !this.adaptive || !_0x204839 || isNaN(_0x204839)) {
                            return _0x38f82b;
                        }
                        var _0x557345 = Math.ceil(_0x204839 / this.maxLength);
                        return _0x557345 < this.minSegments ? _0x557345 = this.minSegments : _0x557345 > this.maxSegments && (_0x557345 = this.maxSegments), _0x557345;
                    }
                }, _0x2637d2 = function () {
                    ;
                    function _0x28bfed() {
                        ;
                        this.color = 16777215;
                        this.alpha = 1;
                        this.texture = _0x5d6d6c.xE.WHITE;
                        this.matrix = null;
                        this.visible = false;
                        this.reset();
                    }
                    return _0x28bfed.prototype.clone = function () {
                        var _0x52d32b = new _0x28bfed();
                        return _0x52d32b.color = this.color, _0x52d32b.alpha = this.alpha, _0x52d32b.texture = this.texture, _0x52d32b.matrix = this.matrix, _0x52d32b.visible = this.visible, _0x52d32b;
                    }, _0x28bfed.prototype.reset = function () {
                        ;
                        this.color = 16777215;
                        this.alpha = 1;
                        this.texture = _0x5d6d6c.xE.WHITE;
                        this.matrix = null;
                        this.visible = false;
                    }, _0x28bfed.prototype.destroy = function () {
                        ;
                        this.texture = null;
                        this.matrix = null;
                    }, _0x28bfed;
                }(), _0xa30603 = function (_0x113fd9, _0x3fa284) {
                    ;
                    return _0xa30603 = Object.setPrototypeOf || { '__proto__': [] } instanceof Array && function (_0x19f175, _0x5c281f) {
                        ;
                        _0x19f175['__proto__'] = _0x5c281f;
                    } || function (_0x2b56c5, _0x359f14) {
                        ;
                        for (var _0x3a66cb in _0x359f14)
                            _0x359f14.hasOwnProperty(_0x3a66cb) && (_0x2b56c5[_0x3a66cb] = _0x359f14[_0x3a66cb]);
                    }, _0xa30603(_0x113fd9, _0x3fa284);
                };
            function _0x4e6bc8(_0xfba3cf, _0x228a06) {
                ;
                function _0x19553a() {
                    ;
                    this.constructor = _0xfba3cf;
                }
                _0xa30603(_0xfba3cf, _0x228a06);
                _0xfba3cf.prototype = null === _0x228a06 ? Object.create(_0x228a06) : (_0x19553a.prototype = _0x228a06.prototype, new _0x19553a());
            }
            function _0xdb2f4f(_0x406476, _0x6ec28b) {
                var _0x254b4b, _0x38f61b;
                void 0 === _0x6ec28b && (_0x6ec28b = false);
                var _0x50219e = _0x406476.length;
                if (!(_0x50219e < 6)) {
                    for (var _0x3f20fd = 0, _0x477e8d = 0, _0x5dd3d7 = _0x406476[_0x50219e - 2], _0xe5d904 = _0x406476[_0x50219e - 1]; _0x477e8d < _0x50219e; _0x477e8d += 2) {
                        var _0x5b315b = _0x406476[_0x477e8d], _0xcdaecd = _0x406476[_0x477e8d + 1];
                        _0x3f20fd += (_0x5b315b - _0x5dd3d7) * (_0xcdaecd + _0xe5d904);
                        _0x5dd3d7 = _0x5b315b;
                        _0xe5d904 = _0xcdaecd;
                    }
                    if (!_0x6ec28b && _0x3f20fd > 0 || _0x6ec28b && _0x3f20fd <= 0) {
                        var _0x4776e9 = _0x50219e / 2;
                        for (_0x477e8d = _0x4776e9 + _0x4776e9 % 2; _0x477e8d < _0x50219e; _0x477e8d += 2) {
                            var _0x29f5a4 = _0x50219e - _0x477e8d - 2, _0x1abf24 = _0x50219e - _0x477e8d - 1, _0x468103 = _0x477e8d, _0x55bbb8 = _0x477e8d + 1;
                            _0x254b4b = [
                                _0x406476[_0x468103],
                                _0x406476[_0x29f5a4]
                            ];
                            _0x406476[_0x29f5a4] = _0x254b4b[0];
                            _0x406476[_0x468103] = _0x254b4b[1];
                            _0x38f61b = [
                                _0x406476[_0x55bbb8],
                                _0x406476[_0x1abf24]
                            ];
                            _0x406476[_0x1abf24] = _0x38f61b[0];
                            _0x406476[_0x55bbb8] = _0x38f61b[1];
                        }
                    }
                }
            }
            var _0x208671 = {
                    'build': function (_0x1cf281) {
                        ;
                        _0x1cf281.points = _0x1cf281.shape.points.slice();
                    },
                    'triangulate': function (_0x3c4299, _0x1b1184) {
                        var _0x32b84f = _0x3c4299.points, _0x538a34 = _0x3c4299.holes, _0x15b96c = _0x1b1184.points, _0xc606b8 = _0x1b1184.indices;
                        if (_0x32b84f.length >= 6) {
                            _0xdb2f4f(_0x32b84f, false);
                            for (var _0x501f4a = [], _0x1495e2 = 0; _0x1495e2 < _0x538a34.length; _0x1495e2++) {
                                var _0x581707 = _0x538a34[_0x1495e2];
                                _0xdb2f4f(_0x581707.points, true);
                                _0x501f4a.push(_0x32b84f.length / 2);
                                _0x32b84f = _0x32b84f.concat(_0x581707.points);
                            }
                            var _0x122af3 = (0, _0x1d7bd2.OT)(_0x32b84f, _0x501f4a, 2);
                            if (!_0x122af3) {
                                return;
                            }
                            var _0x400ab4 = _0x15b96c.length / 2;
                            for (_0x1495e2 = 0; _0x1495e2 < _0x122af3.length; _0x1495e2 += 3) {
                                _0xc606b8.push(_0x122af3[_0x1495e2] + _0x400ab4);
                                _0xc606b8.push(_0x122af3[_0x1495e2 + 1] + _0x400ab4);
                                _0xc606b8.push(_0x122af3[_0x1495e2 + 2] + _0x400ab4);
                            }
                            for (_0x1495e2 = 0; _0x1495e2 < _0x32b84f.length; _0x1495e2++) {
                                _0x15b96c.push(_0x32b84f[_0x1495e2]);
                            }
                        }
                    }
                }, _0x5040f3 = {
                    'build': function (_0x160a22) {
                        var _0x2b42a0, _0x3d7321, _0x4928a1, _0x5dbde9, _0x13e208, _0x276a42, _0x28fb1e = _0x160a22.points;
                        if (_0x160a22.type === _0x522b04.HS.CIRC) {
                            var _0x3a86b1 = _0x160a22.shape;
                            _0x2b42a0 = _0x3a86b1.x;
                            _0x3d7321 = _0x3a86b1.y;
                            _0x13e208 = _0x276a42 = _0x3a86b1.radius;
                            _0x4928a1 = _0x5dbde9 = 0;
                        } else {
                            if (_0x160a22.type === _0x522b04.HS.ELIP) {
                                var _0x46b519 = _0x160a22.shape;
                                _0x2b42a0 = _0x46b519.x;
                                _0x3d7321 = _0x46b519.y;
                                _0x13e208 = _0x46b519.width;
                                _0x276a42 = _0x46b519.height;
                                _0x4928a1 = _0x5dbde9 = 0;
                            } else {
                                var _0x15d9e1 = _0x160a22.shape, _0x1ddfa2 = _0x15d9e1.width / 2, _0x573968 = _0x15d9e1.height / 2;
                                _0x2b42a0 = _0x15d9e1.x + _0x1ddfa2;
                                _0x3d7321 = _0x15d9e1.y + _0x573968;
                                _0x4928a1 = _0x1ddfa2 - (_0x13e208 = _0x276a42 = Math.max(0, Math.min(_0x15d9e1.radius, Math.min(_0x1ddfa2, _0x573968))));
                                _0x5dbde9 = _0x573968 - _0x276a42;
                            }
                        }
                        if (_0x13e208 >= 0 && _0x276a42 >= 0 && _0x4928a1 >= 0 && _0x5dbde9 >= 0) {
                            var _0x2f402a = Math.ceil(2.3 * Math.sqrt(_0x13e208 + _0x276a42)), _0x149f9b = 8 * _0x2f402a + (_0x4928a1 ? 4 : 0) + (_0x5dbde9 ? 4 : 0);
                            if (_0x28fb1e.length = _0x149f9b, 0 !== _0x149f9b) {
                                if (0 === _0x2f402a) {
                                    return _0x28fb1e.length = 8, _0x28fb1e[0] = _0x28fb1e[6] = _0x2b42a0 + _0x4928a1, _0x28fb1e[1] = _0x28fb1e[3] = _0x3d7321 + _0x5dbde9, _0x28fb1e[2] = _0x28fb1e[4] = _0x2b42a0 - _0x4928a1, void (_0x28fb1e[5] = _0x28fb1e[7] = _0x3d7321 - _0x5dbde9);
                                }
                                var _0x237668, _0x20026b, _0x3aa489 = 0, _0x793329 = 4 * _0x2f402a + (_0x4928a1 ? 2 : 0) + 2, _0x510c1f = _0x793329, _0x47d477 = _0x149f9b, _0x397be8 = _0x2b42a0 + (_0x237668 = _0x4928a1 + _0x13e208), _0x2e90e3 = _0x2b42a0 - _0x237668, _0x1e1fea = _0x3d7321 + (_0x20026b = _0x5dbde9);
                                if (_0x28fb1e[_0x3aa489++] = _0x397be8, _0x28fb1e[_0x3aa489++] = _0x1e1fea, _0x28fb1e[--_0x793329] = _0x1e1fea, _0x28fb1e[--_0x793329] = _0x2e90e3, _0x5dbde9) {
                                    var _0x8b6ba1 = _0x3d7321 - _0x20026b;
                                    _0x28fb1e[_0x510c1f++] = _0x2e90e3;
                                    _0x28fb1e[_0x510c1f++] = _0x8b6ba1;
                                    _0x28fb1e[--_0x47d477] = _0x8b6ba1;
                                    _0x28fb1e[--_0x47d477] = _0x397be8;
                                }
                                for (var _0x5e091c = 1; _0x5e091c < _0x2f402a; _0x5e091c++) {
                                    var _0x189ff1 = Math.PI / 2 * (_0x5e091c / _0x2f402a);
                                    _0x397be8 = _0x2b42a0 + (_0x237668 = _0x4928a1 + Math.cos(_0x189ff1) * _0x13e208);
                                    _0x2e90e3 = _0x2b42a0 - _0x237668;
                                    _0x1e1fea = _0x3d7321 + (_0x20026b = _0x5dbde9 + Math.sin(_0x189ff1) * _0x276a42);
                                    _0x8b6ba1 = _0x3d7321 - _0x20026b;
                                    _0x28fb1e[_0x3aa489++] = _0x397be8;
                                    _0x28fb1e[_0x3aa489++] = _0x1e1fea;
                                    _0x28fb1e[--_0x793329] = _0x1e1fea;
                                    _0x28fb1e[--_0x793329] = _0x2e90e3;
                                    _0x28fb1e[_0x510c1f++] = _0x2e90e3;
                                    _0x28fb1e[_0x510c1f++] = _0x8b6ba1;
                                    _0x28fb1e[--_0x47d477] = _0x8b6ba1;
                                    _0x28fb1e[--_0x47d477] = _0x397be8;
                                }
                                _0x397be8 = _0x2b42a0 + (_0x237668 = _0x4928a1);
                                _0x2e90e3 = _0x2b42a0 - _0x237668;
                                _0x1e1fea = _0x3d7321 + (_0x20026b = _0x5dbde9 + _0x276a42);
                                _0x8b6ba1 = _0x3d7321 - _0x20026b;
                                _0x28fb1e[_0x3aa489++] = _0x397be8;
                                _0x28fb1e[_0x3aa489++] = _0x1e1fea;
                                _0x28fb1e[--_0x47d477] = _0x8b6ba1;
                                _0x28fb1e[--_0x47d477] = _0x397be8;
                                _0x4928a1 && (_0x28fb1e[_0x3aa489++] = _0x2e90e3, _0x28fb1e[_0x3aa489++] = _0x1e1fea, _0x28fb1e[--_0x47d477] = _0x8b6ba1, _0x28fb1e[--_0x47d477] = _0x2e90e3);
                            }
                        } else {
                            _0x28fb1e.length = 0;
                        }
                    },
                    'triangulate': function (_0xea9028, _0x5308de) {
                        var _0x38e5b2, _0x3b78fa, _0x1aad7d = _0xea9028.points, _0x6a1db6 = _0x5308de.points, _0x55c161 = _0x5308de.indices, _0x511c09 = _0x6a1db6.length / 2, _0x121f6e = _0x511c09;
                        if (_0xea9028.type !== _0x522b04.HS.RREC) {
                            var _0x523267 = _0xea9028.shape;
                            _0x38e5b2 = _0x523267.x;
                            _0x3b78fa = _0x523267.y;
                        } else {
                            var _0x1f7598 = _0xea9028.shape;
                            _0x38e5b2 = _0x1f7598.x + _0x1f7598.width / 2;
                            _0x3b78fa = _0x1f7598.y + _0x1f7598.height / 2;
                        }
                        var _0x1d17e5 = _0xea9028.matrix;
                        _0x6a1db6.push(_0xea9028.matrix ? _0x1d17e5.a * _0x38e5b2 + _0x1d17e5.c * _0x3b78fa + _0x1d17e5.tx : _0x38e5b2, _0xea9028.matrix ? _0x1d17e5.b * _0x38e5b2 + _0x1d17e5.d * _0x3b78fa + _0x1d17e5.ty : _0x3b78fa);
                        _0x511c09++;
                        _0x6a1db6.push(_0x1aad7d[0], _0x1aad7d[1]);
                        for (var _0x4c0040 = 2; _0x4c0040 < _0x1aad7d.length; _0x4c0040 += 2) {
                            _0x6a1db6.push(_0x1aad7d[_0x4c0040], _0x1aad7d[_0x4c0040 + 1]);
                            _0x55c161.push(_0x511c09++, _0x121f6e, _0x511c09);
                        }
                        _0x55c161.push(_0x121f6e + 1, _0x121f6e, _0x511c09);
                    }
                };
            function _0xf1af88(_0x4d2688, _0x528401, _0xad006f) {
                return _0x4d2688 + (_0x528401 - _0x4d2688) * _0xad006f;
            }
            function _0x4e56c2(_0x198a74, _0x238bb7, _0x1c3cb1, _0x3307fd, _0x15e6f2, _0x2b1e59, _0x4e2a3f) {
                ;
                void 0 === _0x4e2a3f && (_0x4e2a3f = []);
                for (var _0x436b20 = _0x4e2a3f, _0x25f7c7 = 0, _0x45c042 = 0, _0xd13efb = 0, _0x9f3665 = 0, _0x197a63 = 0, _0x4292f1 = 0, _0x36caf9 = 0, _0x265656 = 0; _0x36caf9 <= 20; ++_0x36caf9) {
                    _0x25f7c7 = _0xf1af88(_0x198a74, _0x1c3cb1, _0x265656 = _0x36caf9 / 20);
                    _0x45c042 = _0xf1af88(_0x238bb7, _0x3307fd, _0x265656);
                    _0xd13efb = _0xf1af88(_0x1c3cb1, _0x15e6f2, _0x265656);
                    _0x9f3665 = _0xf1af88(_0x3307fd, _0x2b1e59, _0x265656);
                    _0x197a63 = _0xf1af88(_0x25f7c7, _0xd13efb, _0x265656);
                    _0x4292f1 = _0xf1af88(_0x45c042, _0x9f3665, _0x265656);
                    0 === _0x36caf9 && _0x436b20[_0x436b20.length - 2] === _0x197a63 && _0x436b20[_0x436b20.length - 1] === _0x4292f1 || _0x436b20.push(_0x197a63, _0x4292f1);
                }
                return _0x436b20;
            }
            var _0x4f940c = {
                'build': function (_0x56a95c) {
                    ;
                    if (_0x3c9f86.nextRoundedRectBehavior) {
                        _0x5040f3.build(_0x56a95c);
                    } else {
                        var _0x3405db = _0x56a95c.shape, _0x16c8c0 = _0x56a95c.points, _0x55148b = _0x3405db.x, _0x5b80e5 = _0x3405db.y, _0x30cf0a = _0x3405db.width, _0x2969af = _0x3405db.height, _0x4c15b6 = Math.max(0, Math.min(_0x3405db.radius, Math.min(_0x30cf0a, _0x2969af) / 2));
                        _0x16c8c0.length = 0;
                        _0x4c15b6 ? (_0x4e56c2(_0x55148b, _0x5b80e5 + _0x4c15b6, _0x55148b, _0x5b80e5, _0x55148b + _0x4c15b6, _0x5b80e5, _0x16c8c0), _0x4e56c2(_0x55148b + _0x30cf0a - _0x4c15b6, _0x5b80e5, _0x55148b + _0x30cf0a, _0x5b80e5, _0x55148b + _0x30cf0a, _0x5b80e5 + _0x4c15b6, _0x16c8c0), _0x4e56c2(_0x55148b + _0x30cf0a, _0x5b80e5 + _0x2969af - _0x4c15b6, _0x55148b + _0x30cf0a, _0x5b80e5 + _0x2969af, _0x55148b + _0x30cf0a - _0x4c15b6, _0x5b80e5 + _0x2969af, _0x16c8c0), _0x4e56c2(_0x55148b + _0x4c15b6, _0x5b80e5 + _0x2969af, _0x55148b, _0x5b80e5 + _0x2969af, _0x55148b, _0x5b80e5 + _0x2969af - _0x4c15b6, _0x16c8c0)) : _0x16c8c0.push(_0x55148b, _0x5b80e5, _0x55148b + _0x30cf0a, _0x5b80e5, _0x55148b + _0x30cf0a, _0x5b80e5 + _0x2969af, _0x55148b, _0x5b80e5 + _0x2969af);
                    }
                },
                'triangulate': function (_0x5ea2c9, _0x2cbf99) {
                    ;
                    if (_0x3c9f86.nextRoundedRectBehavior) {
                        _0x5040f3.triangulate(_0x5ea2c9, _0x2cbf99);
                    } else {
                        for (var _0x14a8ed = _0x5ea2c9.points, _0x40f405 = _0x2cbf99.points, _0xa35a16 = _0x2cbf99.indices, _0x328f43 = _0x40f405.length / 2, _0x5c057a = (0, _0x1d7bd2.OT)(_0x14a8ed, null, 2), _0x531cb8 = 0, _0x3ff708 = _0x5c057a.length; _0x531cb8 < _0x3ff708; _0x531cb8 += 3) {
                            _0xa35a16.push(_0x5c057a[_0x531cb8] + _0x328f43);
                            _0xa35a16.push(_0x5c057a[_0x531cb8 + 1] + _0x328f43);
                            _0xa35a16.push(_0x5c057a[_0x531cb8 + 2] + _0x328f43);
                        }
                        for (_0x531cb8 = 0, _0x3ff708 = _0x14a8ed.length; _0x531cb8 < _0x3ff708; _0x531cb8++) {
                            _0x40f405.push(_0x14a8ed[_0x531cb8], _0x14a8ed[++_0x531cb8]);
                        }
                    }
                }
            };
            function _0xecbf20(_0x4fdb25, _0x1cba0c, _0x2776ad, _0x5523e5, _0x9688c5, _0x10f5fd, _0xac1b0a, _0x28c4da) {
                var _0x57b2d1, _0x225e5a;
                _0xac1b0a ? (_0x57b2d1 = _0x5523e5, _0x225e5a = -_0x2776ad) : (_0x57b2d1 = -_0x5523e5, _0x225e5a = _0x2776ad);
                var _0x441f16 = _0x4fdb25 - _0x2776ad * _0x9688c5 + _0x57b2d1, _0x41d08a = _0x1cba0c - _0x5523e5 * _0x9688c5 + _0x225e5a, _0x2a6cf8 = _0x4fdb25 + _0x2776ad * _0x10f5fd + _0x57b2d1, _0x455498 = _0x1cba0c + _0x5523e5 * _0x10f5fd + _0x225e5a;
                return _0x28c4da.push(_0x441f16, _0x41d08a), _0x28c4da.push(_0x2a6cf8, _0x455498), 2;
            }
            function _0x2b7030(_0x5dafbe, _0x3cdb43, _0x3fad0f, _0x15c2d2, _0x862858, _0x15bf5f, _0x533669, _0x20241a) {
                var _0x2ba888 = _0x3fad0f - _0x5dafbe, _0x3480a7 = _0x15c2d2 - _0x3cdb43, _0x166c38 = Math.atan2(_0x2ba888, _0x3480a7), _0xe25d16 = Math.atan2(_0x862858 - _0x5dafbe, _0x15bf5f - _0x3cdb43);
                _0x20241a && _0x166c38 < _0xe25d16 ? _0x166c38 += 2 * Math.PI : !_0x20241a && _0x166c38 > _0xe25d16 && (_0xe25d16 += 2 * Math.PI);
                var _0x587db7 = _0x166c38, _0x4dca5b = _0xe25d16 - _0x166c38, _0x30ecc4 = Math.abs(_0x4dca5b), _0x3471ad = Math.sqrt(_0x2ba888 * _0x2ba888 + _0x3480a7 * _0x3480a7), _0x20115b = 1 + (15 * _0x30ecc4 * Math.sqrt(_0x3471ad) / Math.PI >> 0), _0xaf89b9 = _0x4dca5b / _0x20115b;
                if (_0x587db7 += _0xaf89b9, _0x20241a) {
                    _0x533669.push(_0x5dafbe, _0x3cdb43);
                    _0x533669.push(_0x3fad0f, _0x15c2d2);
                    for (var _0x57c6e4 = 1, _0xe537de = _0x587db7; _0x57c6e4 < _0x20115b; _0x57c6e4++, _0xe537de += _0xaf89b9) {
                        _0x533669.push(_0x5dafbe, _0x3cdb43);
                        _0x533669.push(_0x5dafbe + Math.sin(_0xe537de) * _0x3471ad, _0x3cdb43 + Math.cos(_0xe537de) * _0x3471ad);
                    }
                    _0x533669.push(_0x5dafbe, _0x3cdb43);
                    _0x533669.push(_0x862858, _0x15bf5f);
                } else {
                    for (_0x533669.push(_0x3fad0f, _0x15c2d2), _0x533669.push(_0x5dafbe, _0x3cdb43), _0x57c6e4 = 1, _0xe537de = _0x587db7; _0x57c6e4 < _0x20115b; _0x57c6e4++, _0xe537de += _0xaf89b9) {
                        _0x533669.push(_0x5dafbe + Math.sin(_0xe537de) * _0x3471ad, _0x3cdb43 + Math.cos(_0xe537de) * _0x3471ad);
                        _0x533669.push(_0x5dafbe, _0x3cdb43);
                    }
                    _0x533669.push(_0x862858, _0x15bf5f);
                    _0x533669.push(_0x5dafbe, _0x3cdb43);
                }
                return 2 * _0x20115b;
            }
            function _0x276ea7(_0x2a4fe4, _0x100d3c) {
                ;
                _0x2a4fe4.lineStyle.native ? function (_0x3f98c5, _0xf9a7aa) {
                    var _0x19b94c = 0, _0x333d39 = _0x3f98c5.shape, _0x2a6b90 = _0x3f98c5.points || _0x333d39.points, _0x4a7d27 = _0x333d39.type !== _0x522b04.HS.POLY || _0x333d39.closeStroke;
                    if (0 !== _0x2a6b90.length) {
                        var _0x10469e = _0xf9a7aa.points, _0x1c9123 = _0xf9a7aa.indices, _0x3d9fb2 = _0x2a6b90.length / 2, _0x59217f = _0x10469e.length / 2, _0x473f46 = _0x59217f;
                        for (_0x10469e.push(_0x2a6b90[0], _0x2a6b90[1]), _0x19b94c = 1; _0x19b94c < _0x3d9fb2; _0x19b94c++) {
                            _0x10469e.push(_0x2a6b90[2 * _0x19b94c], _0x2a6b90[2 * _0x19b94c + 1]);
                            _0x1c9123.push(_0x473f46, _0x473f46 + 1);
                            _0x473f46++;
                        }
                        _0x4a7d27 && _0x1c9123.push(_0x473f46, _0x59217f);
                    }
                }(_0x2a4fe4, _0x100d3c) : function (_0x3363fe, _0x4711a4) {
                    var _0x47ff9d = _0x3363fe.shape, _0x158be7 = _0x3363fe.points || _0x47ff9d.points.slice(), _0x4e6321 = _0x4711a4.closePointEps;
                    if (0 !== _0x158be7.length) {
                        var _0x5a45a8 = _0x3363fe.lineStyle, _0x46c966 = new _0x522b04.E9(_0x158be7[0], _0x158be7[1]), _0x1d810e = new _0x522b04.E9(_0x158be7[_0x158be7.length - 2], _0x158be7[_0x158be7.length - 1]), _0xe0d434 = _0x47ff9d.type !== _0x522b04.HS.POLY || _0x47ff9d.closeStroke, _0x477045 = Math.abs(_0x46c966.x - _0x1d810e.x) < _0x4e6321 && Math.abs(_0x46c966.y - _0x1d810e.y) < _0x4e6321;
                        if (_0xe0d434) {
                            _0x158be7 = _0x158be7.slice();
                            _0x477045 && (_0x158be7.pop(), _0x158be7.pop(), _0x1d810e.set(_0x158be7[_0x158be7.length - 2], _0x158be7[_0x158be7.length - 1]));
                            var _0x11f35a = 0.5 * (_0x46c966.x + _0x1d810e.x), _0x21692b = 0.5 * (_0x1d810e.y + _0x46c966.y);
                            _0x158be7.unshift(_0x11f35a, _0x21692b);
                            _0x158be7.push(_0x11f35a, _0x21692b);
                        }
                        var _0x5ca795 = _0x4711a4.points, _0x5bd608 = _0x158be7.length / 2, _0x1b92c5 = _0x158be7.length, _0x112f34 = _0x5ca795.length / 2, _0x70eb9f = _0x5a45a8.width / 2, _0x3d184e = _0x70eb9f * _0x70eb9f, _0x4c7531 = _0x5a45a8.miterLimit * _0x5a45a8.miterLimit, _0x1fa525 = _0x158be7[0], _0x2b3d83 = _0x158be7[1], _0x5c60b8 = _0x158be7[2], _0x1d1ad2 = _0x158be7[3], _0x418205 = 0, _0x54f613 = 0, _0x49faa1 = -(_0x2b3d83 - _0x1d1ad2), _0x5d898f = _0x1fa525 - _0x5c60b8, _0x5604be = 0, _0x1c8d46 = 0, _0x1d658e = Math.sqrt(_0x49faa1 * _0x49faa1 + _0x5d898f * _0x5d898f);
                        _0x49faa1 /= _0x1d658e;
                        _0x5d898f /= _0x1d658e;
                        _0x49faa1 *= _0x70eb9f;
                        _0x5d898f *= _0x70eb9f;
                        var _0x5a2666 = _0x5a45a8.alignment, _0x505ef6 = 2 * (1 - _0x5a2666), _0x1a2be0 = 2 * _0x5a2666;
                        _0xe0d434 || (_0x5a45a8.cap === _0x54c841.ROUND ? _0x1b92c5 += _0x2b7030(_0x1fa525 - _0x49faa1 * (_0x505ef6 - _0x1a2be0) * 0.5, _0x2b3d83 - _0x5d898f * (_0x505ef6 - _0x1a2be0) * 0.5, _0x1fa525 - _0x49faa1 * _0x505ef6, _0x2b3d83 - _0x5d898f * _0x505ef6, _0x1fa525 + _0x49faa1 * _0x1a2be0, _0x2b3d83 + _0x5d898f * _0x1a2be0, _0x5ca795, true) + 2 : _0x5a45a8.cap === _0x54c841.SQUARE && (_0x1b92c5 += _0xecbf20(_0x1fa525, _0x2b3d83, _0x49faa1, _0x5d898f, _0x505ef6, _0x1a2be0, true, _0x5ca795)));
                        _0x5ca795.push(_0x1fa525 - _0x49faa1 * _0x505ef6, _0x2b3d83 - _0x5d898f * _0x505ef6);
                        _0x5ca795.push(_0x1fa525 + _0x49faa1 * _0x1a2be0, _0x2b3d83 + _0x5d898f * _0x1a2be0);
                        for (var _0x1ed658 = 1; _0x1ed658 < _0x5bd608 - 1; ++_0x1ed658) {
                            _0x1fa525 = _0x158be7[2 * (_0x1ed658 - 1)];
                            _0x2b3d83 = _0x158be7[2 * (_0x1ed658 - 1) + 1];
                            _0x5c60b8 = _0x158be7[2 * _0x1ed658];
                            _0x1d1ad2 = _0x158be7[2 * _0x1ed658 + 1];
                            _0x418205 = _0x158be7[2 * (_0x1ed658 + 1)];
                            _0x54f613 = _0x158be7[2 * (_0x1ed658 + 1) + 1];
                            _0x49faa1 = -(_0x2b3d83 - _0x1d1ad2);
                            _0x5d898f = _0x1fa525 - _0x5c60b8;
                            _0x49faa1 /= _0x1d658e = Math.sqrt(_0x49faa1 * _0x49faa1 + _0x5d898f * _0x5d898f);
                            _0x5d898f /= _0x1d658e;
                            _0x49faa1 *= _0x70eb9f;
                            _0x5d898f *= _0x70eb9f;
                            _0x5604be = -(_0x1d1ad2 - _0x54f613);
                            _0x1c8d46 = _0x5c60b8 - _0x418205;
                            _0x5604be /= _0x1d658e = Math.sqrt(_0x5604be * _0x5604be + _0x1c8d46 * _0x1c8d46);
                            _0x1c8d46 /= _0x1d658e;
                            _0x5604be *= _0x70eb9f;
                            _0x1c8d46 *= _0x70eb9f;
                            var _0x200b5b = _0x5c60b8 - _0x1fa525, _0x6e2dc1 = _0x2b3d83 - _0x1d1ad2, _0xf9106c = _0x5c60b8 - _0x418205, _0x4340c8 = _0x54f613 - _0x1d1ad2, _0x4b0f84 = _0x6e2dc1 * _0xf9106c - _0x4340c8 * _0x200b5b, _0x5eaa5d = _0x4b0f84 < 0;
                            if (Math.abs(_0x4b0f84) < 0.1) {
                                _0x5ca795.push(_0x5c60b8 - _0x49faa1 * _0x505ef6, _0x1d1ad2 - _0x5d898f * _0x505ef6);
                                _0x5ca795.push(_0x5c60b8 + _0x49faa1 * _0x1a2be0, _0x1d1ad2 + _0x5d898f * _0x1a2be0);
                            } else {
                                var _0x52ee44 = (-_0x49faa1 + _0x1fa525) * (-_0x5d898f + _0x1d1ad2) - (-_0x49faa1 + _0x5c60b8) * (-_0x5d898f + _0x2b3d83), _0x1e2238 = (-_0x5604be + _0x418205) * (-_0x1c8d46 + _0x1d1ad2) - (-_0x5604be + _0x5c60b8) * (-_0x1c8d46 + _0x54f613), _0x3b5c42 = (_0x200b5b * _0x1e2238 - _0xf9106c * _0x52ee44) / _0x4b0f84, _0x27de04 = (_0x4340c8 * _0x52ee44 - _0x6e2dc1 * _0x1e2238) / _0x4b0f84, _0x365d13 = (_0x3b5c42 - _0x5c60b8) * (_0x3b5c42 - _0x5c60b8) + (_0x27de04 - _0x1d1ad2) * (_0x27de04 - _0x1d1ad2), _0x14484c = _0x5c60b8 + (_0x3b5c42 - _0x5c60b8) * _0x505ef6, _0x2a05ef = _0x1d1ad2 + (_0x27de04 - _0x1d1ad2) * _0x505ef6, _0x1fbe8a = _0x5c60b8 - (_0x3b5c42 - _0x5c60b8) * _0x1a2be0, _0x2bd49f = _0x1d1ad2 - (_0x27de04 - _0x1d1ad2) * _0x1a2be0, _0x13c49c = _0x5eaa5d ? _0x505ef6 : _0x1a2be0;
                                _0x365d13 <= Math.min(_0x200b5b * _0x200b5b + _0x6e2dc1 * _0x6e2dc1, _0xf9106c * _0xf9106c + _0x4340c8 * _0x4340c8) + _0x13c49c * _0x13c49c * _0x3d184e ? _0x5a45a8.join === _0x3dce18.BEVEL || _0x365d13 / _0x3d184e > _0x4c7531 ? (_0x5eaa5d ? (_0x5ca795.push(_0x14484c, _0x2a05ef), _0x5ca795.push(_0x5c60b8 + _0x49faa1 * _0x1a2be0, _0x1d1ad2 + _0x5d898f * _0x1a2be0), _0x5ca795.push(_0x14484c, _0x2a05ef), _0x5ca795.push(_0x5c60b8 + _0x5604be * _0x1a2be0, _0x1d1ad2 + _0x1c8d46 * _0x1a2be0)) : (_0x5ca795.push(_0x5c60b8 - _0x49faa1 * _0x505ef6, _0x1d1ad2 - _0x5d898f * _0x505ef6), _0x5ca795.push(_0x1fbe8a, _0x2bd49f), _0x5ca795.push(_0x5c60b8 - _0x5604be * _0x505ef6, _0x1d1ad2 - _0x1c8d46 * _0x505ef6), _0x5ca795.push(_0x1fbe8a, _0x2bd49f)), _0x1b92c5 += 2) : _0x5a45a8.join === _0x3dce18.ROUND ? _0x5eaa5d ? (_0x5ca795.push(_0x14484c, _0x2a05ef), _0x5ca795.push(_0x5c60b8 + _0x49faa1 * _0x1a2be0, _0x1d1ad2 + _0x5d898f * _0x1a2be0), _0x1b92c5 += _0x2b7030(_0x5c60b8, _0x1d1ad2, _0x5c60b8 + _0x49faa1 * _0x1a2be0, _0x1d1ad2 + _0x5d898f * _0x1a2be0, _0x5c60b8 + _0x5604be * _0x1a2be0, _0x1d1ad2 + _0x1c8d46 * _0x1a2be0, _0x5ca795, true) + 4, _0x5ca795.push(_0x14484c, _0x2a05ef), _0x5ca795.push(_0x5c60b8 + _0x5604be * _0x1a2be0, _0x1d1ad2 + _0x1c8d46 * _0x1a2be0)) : (_0x5ca795.push(_0x5c60b8 - _0x49faa1 * _0x505ef6, _0x1d1ad2 - _0x5d898f * _0x505ef6), _0x5ca795.push(_0x1fbe8a, _0x2bd49f), _0x1b92c5 += _0x2b7030(_0x5c60b8, _0x1d1ad2, _0x5c60b8 - _0x49faa1 * _0x505ef6, _0x1d1ad2 - _0x5d898f * _0x505ef6, _0x5c60b8 - _0x5604be * _0x505ef6, _0x1d1ad2 - _0x1c8d46 * _0x505ef6, _0x5ca795, false) + 4, _0x5ca795.push(_0x5c60b8 - _0x5604be * _0x505ef6, _0x1d1ad2 - _0x1c8d46 * _0x505ef6), _0x5ca795.push(_0x1fbe8a, _0x2bd49f)) : (_0x5ca795.push(_0x14484c, _0x2a05ef), _0x5ca795.push(_0x1fbe8a, _0x2bd49f)) : (_0x5ca795.push(_0x5c60b8 - _0x49faa1 * _0x505ef6, _0x1d1ad2 - _0x5d898f * _0x505ef6), _0x5ca795.push(_0x5c60b8 + _0x49faa1 * _0x1a2be0, _0x1d1ad2 + _0x5d898f * _0x1a2be0), _0x5a45a8.join === _0x3dce18.ROUND ? _0x1b92c5 += _0x5eaa5d ? _0x2b7030(_0x5c60b8, _0x1d1ad2, _0x5c60b8 + _0x49faa1 * _0x1a2be0, _0x1d1ad2 + _0x5d898f * _0x1a2be0, _0x5c60b8 + _0x5604be * _0x1a2be0, _0x1d1ad2 + _0x1c8d46 * _0x1a2be0, _0x5ca795, true) + 2 : _0x2b7030(_0x5c60b8, _0x1d1ad2, _0x5c60b8 - _0x49faa1 * _0x505ef6, _0x1d1ad2 - _0x5d898f * _0x505ef6, _0x5c60b8 - _0x5604be * _0x505ef6, _0x1d1ad2 - _0x1c8d46 * _0x505ef6, _0x5ca795, false) + 2 : _0x5a45a8.join === _0x3dce18.MITER && _0x365d13 / _0x3d184e <= _0x4c7531 && (_0x5eaa5d ? (_0x5ca795.push(_0x1fbe8a, _0x2bd49f), _0x5ca795.push(_0x1fbe8a, _0x2bd49f)) : (_0x5ca795.push(_0x14484c, _0x2a05ef), _0x5ca795.push(_0x14484c, _0x2a05ef)), _0x1b92c5 += 2), _0x5ca795.push(_0x5c60b8 - _0x5604be * _0x505ef6, _0x1d1ad2 - _0x1c8d46 * _0x505ef6), _0x5ca795.push(_0x5c60b8 + _0x5604be * _0x1a2be0, _0x1d1ad2 + _0x1c8d46 * _0x1a2be0), _0x1b92c5 += 2);
                            }
                        }
                        _0x1fa525 = _0x158be7[2 * (_0x5bd608 - 2)];
                        _0x2b3d83 = _0x158be7[2 * (_0x5bd608 - 2) + 1];
                        _0x5c60b8 = _0x158be7[2 * (_0x5bd608 - 1)];
                        _0x49faa1 = -(_0x2b3d83 - (_0x1d1ad2 = _0x158be7[2 * (_0x5bd608 - 1) + 1]));
                        _0x5d898f = _0x1fa525 - _0x5c60b8;
                        _0x49faa1 /= _0x1d658e = Math.sqrt(_0x49faa1 * _0x49faa1 + _0x5d898f * _0x5d898f);
                        _0x5d898f /= _0x1d658e;
                        _0x49faa1 *= _0x70eb9f;
                        _0x5d898f *= _0x70eb9f;
                        _0x5ca795.push(_0x5c60b8 - _0x49faa1 * _0x505ef6, _0x1d1ad2 - _0x5d898f * _0x505ef6);
                        _0x5ca795.push(_0x5c60b8 + _0x49faa1 * _0x1a2be0, _0x1d1ad2 + _0x5d898f * _0x1a2be0);
                        _0xe0d434 || (_0x5a45a8.cap === _0x54c841.ROUND ? _0x1b92c5 += _0x2b7030(_0x5c60b8 - _0x49faa1 * (_0x505ef6 - _0x1a2be0) * 0.5, _0x1d1ad2 - _0x5d898f * (_0x505ef6 - _0x1a2be0) * 0.5, _0x5c60b8 - _0x49faa1 * _0x505ef6, _0x1d1ad2 - _0x5d898f * _0x505ef6, _0x5c60b8 + _0x49faa1 * _0x1a2be0, _0x1d1ad2 + _0x5d898f * _0x1a2be0, _0x5ca795, false) + 2 : _0x5a45a8.cap === _0x54c841.SQUARE && (_0x1b92c5 += _0xecbf20(_0x5c60b8, _0x1d1ad2, _0x49faa1, _0x5d898f, _0x505ef6, _0x1a2be0, false, _0x5ca795)));
                        var _0x47680c = _0x4711a4.indices, _0x4a2865 = _0x2b57a8.epsilon * _0x2b57a8.epsilon;
                        for (_0x1ed658 = _0x112f34; _0x1ed658 < _0x1b92c5 + _0x112f34 - 2; ++_0x1ed658) {
                            _0x1fa525 = _0x5ca795[2 * _0x1ed658];
                            _0x2b3d83 = _0x5ca795[2 * _0x1ed658 + 1];
                            _0x5c60b8 = _0x5ca795[2 * (_0x1ed658 + 1)];
                            _0x1d1ad2 = _0x5ca795[2 * (_0x1ed658 + 1) + 1];
                            _0x418205 = _0x5ca795[2 * (_0x1ed658 + 2)];
                            _0x54f613 = _0x5ca795[2 * (_0x1ed658 + 2) + 1];
                            Math.abs(_0x1fa525 * (_0x1d1ad2 - _0x54f613) + _0x5c60b8 * (_0x54f613 - _0x2b3d83) + _0x418205 * (_0x2b3d83 - _0x1d1ad2)) < _0x4a2865 || _0x47680c.push(_0x1ed658, _0x1ed658 + 1, _0x1ed658 + 2);
                        }
                    }
                }(_0x2a4fe4, _0x100d3c);
            }
            var _0x15c7c5, _0x179442 = function () {
                    ;
                    function _0x12708d() {
                    }
                    return _0x12708d.curveTo = function (_0x2c964c, _0x13e8e6, _0x35cd01, _0x11ac1a, _0x1d0211, _0x47214a) {
                        var _0x11138d = _0x47214a[_0x47214a.length - 2], _0xd9e17b = _0x47214a[_0x47214a.length - 1] - _0x13e8e6, _0x59340b = _0x11138d - _0x2c964c, _0x4acf13 = _0x11ac1a - _0x13e8e6, _0x53063c = _0x35cd01 - _0x2c964c, _0x5aef37 = Math.abs(_0xd9e17b * _0x53063c - _0x59340b * _0x4acf13);
                        if (_0x5aef37 < 1e-8 || 0 === _0x1d0211) {
                            return _0x47214a[_0x47214a.length - 2] === _0x2c964c && _0x47214a[_0x47214a.length - 1] === _0x13e8e6 || _0x47214a.push(_0x2c964c, _0x13e8e6), null;
                        }
                        var _0x56c237 = _0xd9e17b * _0xd9e17b + _0x59340b * _0x59340b, _0xc52dbe = _0x4acf13 * _0x4acf13 + _0x53063c * _0x53063c, _0x376e1d = _0xd9e17b * _0x4acf13 + _0x59340b * _0x53063c, _0xe07714 = _0x1d0211 * Math.sqrt(_0x56c237) / _0x5aef37, _0x502c33 = _0x1d0211 * Math.sqrt(_0xc52dbe) / _0x5aef37, _0x1b72c5 = _0xe07714 * _0x376e1d / _0x56c237, _0x360377 = _0x502c33 * _0x376e1d / _0xc52dbe, _0x514ed6 = _0xe07714 * _0x53063c + _0x502c33 * _0x59340b, _0x296ed7 = _0xe07714 * _0x4acf13 + _0x502c33 * _0xd9e17b, _0x413da3 = _0x59340b * (_0x502c33 + _0x1b72c5), _0x3a9e58 = _0xd9e17b * (_0x502c33 + _0x1b72c5), _0x4fc950 = _0x53063c * (_0xe07714 + _0x360377), _0xf80168 = _0x4acf13 * (_0xe07714 + _0x360377);
                        return {
                            'cx': _0x514ed6 + _0x2c964c,
                            'cy': _0x296ed7 + _0x13e8e6,
                            'radius': _0x1d0211,
                            'startAngle': Math.atan2(_0x3a9e58 - _0x296ed7, _0x413da3 - _0x514ed6),
                            'endAngle': Math.atan2(_0xf80168 - _0x296ed7, _0x4fc950 - _0x514ed6),
                            'anticlockwise': _0x59340b * _0x4acf13 > _0x53063c * _0xd9e17b
                        };
                    }, _0x12708d.arc = function (_0x1a246b, _0x5aed4e, _0x29d085, _0x57850c, _0x52bdc4, _0xd309e5, _0x109968, _0x1345ac, _0x29a86c) {
                        ;
                        for (var _0x3dc428 = _0x109968 - _0xd309e5, _0x4429dc = _0x2b57a8['_segmentsCount'](Math.abs(_0x3dc428) * _0x52bdc4, 40 * Math.ceil(Math.abs(_0x3dc428) / _0x522b04['_b'])), _0x24a9cb = _0x3dc428 / (2 * _0x4429dc), _0x751d09 = 2 * _0x24a9cb, _0x2bc97c = Math.cos(_0x24a9cb), _0x296ef6 = Math.sin(_0x24a9cb), _0x458736 = _0x4429dc - 1, _0x2c8f9c = _0x458736 % 1 / _0x458736, _0x2e8a26 = 0; _0x2e8a26 <= _0x458736; ++_0x2e8a26) {
                            var _0x3537fb = _0x24a9cb + _0xd309e5 + _0x751d09 * (_0x2e8a26 + _0x2c8f9c * _0x2e8a26), _0x578dfe = Math.cos(_0x3537fb), _0x385fff = -Math.sin(_0x3537fb);
                            _0x29a86c.push((_0x2bc97c * _0x578dfe + _0x296ef6 * _0x385fff) * _0x52bdc4 + _0x29d085, (_0x2bc97c * -_0x385fff + _0x296ef6 * _0x578dfe) * _0x52bdc4 + _0x57850c);
                        }
                    }, _0x12708d;
                }(), _0x4b72cc = function () {
                    ;
                    function _0xbc8e3() {
                    }
                    return _0xbc8e3.curveLength = function (_0x383075, _0x523685, _0x3f4fd7, _0x525ede, _0x5b73fe, _0xf0189, _0x3e704c, _0x4682f4) {
                        ;
                        for (var _0x257d0c = 0, _0x37aa36 = 0, _0x175ad4 = 0, _0x1838fe = 0, _0xdbb880 = 0, _0x1e0dc = 0, _0x2d19a1 = 0, _0x3edf3f = 0, _0x51ddff = 0, _0x4fb911 = 0, _0x4516a8 = 0, _0x118817 = _0x383075, _0x392fbb = _0x523685, _0x1b7101 = 1; _0x1b7101 <= 10; ++_0x1b7101) {
                            _0x4fb911 = _0x118817 - (_0x3edf3f = (_0x2d19a1 = (_0x1e0dc = (_0xdbb880 = 1 - (_0x37aa36 = _0x1b7101 / 10)) * _0xdbb880) * _0xdbb880) * _0x383075 + 3 * _0x1e0dc * _0x37aa36 * _0x3f4fd7 + 3 * _0xdbb880 * (_0x175ad4 = _0x37aa36 * _0x37aa36) * _0x5b73fe + (_0x1838fe = _0x175ad4 * _0x37aa36) * _0x3e704c);
                            _0x4516a8 = _0x392fbb - (_0x51ddff = _0x2d19a1 * _0x523685 + 3 * _0x1e0dc * _0x37aa36 * _0x525ede + 3 * _0xdbb880 * _0x175ad4 * _0xf0189 + _0x1838fe * _0x4682f4);
                            _0x118817 = _0x3edf3f;
                            _0x392fbb = _0x51ddff;
                            _0x257d0c += Math.sqrt(_0x4fb911 * _0x4fb911 + _0x4516a8 * _0x4516a8);
                        }
                        return _0x257d0c;
                    }, _0xbc8e3.curveTo = function (_0x28df0d, _0x4c07e7, _0x22edc6, _0x2491c4, _0x314bd9, _0x170025, _0x43dd13) {
                        var _0x30dfab = _0x43dd13[_0x43dd13.length - 2], _0x119d88 = _0x43dd13[_0x43dd13.length - 1];
                        _0x43dd13.length -= 2;
                        var _0x441289 = _0x2b57a8['_segmentsCount'](_0xbc8e3.curveLength(_0x30dfab, _0x119d88, _0x28df0d, _0x4c07e7, _0x22edc6, _0x2491c4, _0x314bd9, _0x170025)), _0xb2253e = 0, _0x219166 = 0, _0x45a07f = 0, _0x4c0293 = 0, _0xe949e5 = 0;
                        _0x43dd13.push(_0x30dfab, _0x119d88);
                        for (var _0x174deb = 1, _0xbe140a = 0; _0x174deb <= _0x441289; ++_0x174deb) {
                            _0x45a07f = (_0x219166 = (_0xb2253e = 1 - (_0xbe140a = _0x174deb / _0x441289)) * _0xb2253e) * _0xb2253e;
                            _0xe949e5 = (_0x4c0293 = _0xbe140a * _0xbe140a) * _0xbe140a;
                            _0x43dd13.push(_0x45a07f * _0x30dfab + 3 * _0x219166 * _0xbe140a * _0x28df0d + 3 * _0xb2253e * _0x4c0293 * _0x22edc6 + _0xe949e5 * _0x314bd9, _0x45a07f * _0x119d88 + 3 * _0x219166 * _0xbe140a * _0x4c07e7 + 3 * _0xb2253e * _0x4c0293 * _0x2491c4 + _0xe949e5 * _0x170025);
                        }
                    }, _0xbc8e3;
                }(), _0x3adad3 = function () {
                    function _0x4ad0a6() {
                    }
                    return _0x4ad0a6.curveLength = function (_0x1626d3, _0xd4a8b5, _0x2209d8, _0x34ce32, _0x186324, _0xd07fac) {
                        var _0xb2b794 = _0x1626d3 - 2 * _0x2209d8 + _0x186324, _0x5e8b9a = _0xd4a8b5 - 2 * _0x34ce32 + _0xd07fac, _0xcb62bc = 2 * _0x2209d8 - 2 * _0x1626d3, _0x25a326 = 2 * _0x34ce32 - 2 * _0xd4a8b5, _0x419beb = 4 * (_0xb2b794 * _0xb2b794 + _0x5e8b9a * _0x5e8b9a), _0x4763b3 = 4 * (_0xb2b794 * _0xcb62bc + _0x5e8b9a * _0x25a326), _0x159a1b = _0xcb62bc * _0xcb62bc + _0x25a326 * _0x25a326, _0x27bdc4 = 2 * Math.sqrt(_0x419beb + _0x4763b3 + _0x159a1b), _0x201a8b = Math.sqrt(_0x419beb), _0x8e2e7f = 2 * _0x419beb * _0x201a8b, _0xf9fecd = 2 * Math.sqrt(_0x159a1b), _0x146554 = _0x4763b3 / _0x201a8b;
                        return (_0x8e2e7f * _0x27bdc4 + _0x201a8b * _0x4763b3 * (_0x27bdc4 - _0xf9fecd) + (4 * _0x159a1b * _0x419beb - _0x4763b3 * _0x4763b3) * Math.log((2 * _0x201a8b + _0x146554 + _0x27bdc4) / (_0x146554 + _0xf9fecd))) / (4 * _0x8e2e7f);
                    }, _0x4ad0a6.curveTo = function (_0x2dfbe7, _0x4f7c64, _0x32a698, _0xf29d88, _0x46f52d) {
                        ;
                        for (var _0x1d5cb1 = _0x46f52d[_0x46f52d.length - 2], _0x166cae = _0x46f52d[_0x46f52d.length - 1], _0x56255a = _0x2b57a8['_segmentsCount'](_0x4ad0a6.curveLength(_0x1d5cb1, _0x166cae, _0x2dfbe7, _0x4f7c64, _0x32a698, _0xf29d88)), _0xee469e = 0, _0x318f4a = 0, _0x175a1b = 1; _0x175a1b <= _0x56255a; ++_0x175a1b) {
                            var _0x1cba9d = _0x175a1b / _0x56255a;
                            _0xee469e = _0x1d5cb1 + (_0x2dfbe7 - _0x1d5cb1) * _0x1cba9d;
                            _0x318f4a = _0x166cae + (_0x4f7c64 - _0x166cae) * _0x1cba9d;
                            _0x46f52d.push(_0xee469e + (_0x2dfbe7 + (_0x32a698 - _0x2dfbe7) * _0x1cba9d - _0xee469e) * _0x1cba9d, _0x318f4a + (_0x4f7c64 + (_0xf29d88 - _0x4f7c64) * _0x1cba9d - _0x318f4a) * _0x1cba9d);
                        }
                    }, _0x4ad0a6;
                }(), _0x12fb3d = function () {
                    ;
                    function _0x3c8691() {
                        ;
                        this.reset();
                    }
                    return _0x3c8691.prototype.begin = function (_0x5a8c88, _0x3db39a, _0x2ac496) {
                        ;
                        this.reset();
                        this.style = _0x5a8c88;
                        this.start = _0x3db39a;
                        this.attribStart = _0x2ac496;
                    }, _0x3c8691.prototype.end = function (_0x3f25e2, _0x38ee62) {
                        ;
                        this.attribSize = _0x38ee62 - this.attribStart;
                        this.size = _0x3f25e2 - this.start;
                    }, _0x3c8691.prototype.reset = function () {
                        ;
                        this.style = null;
                        this.size = 0;
                        this.start = 0;
                        this.attribStart = 0;
                        this.attribSize = 0;
                    }, _0x3c8691;
                }(), _0xce48d = ((_0x15c7c5 = {})[_0x522b04.HS.POLY] = _0x208671, _0x15c7c5[_0x522b04.HS.CIRC] = _0x5040f3, _0x15c7c5[_0x522b04.HS.ELIP] = _0x5040f3, _0x15c7c5[_0x522b04.HS.RECT] = {
                    'build': function (_0x21bd74) {
                        var _0x344a20 = _0x21bd74.shape, _0x1ca647 = _0x344a20.x, _0x500fc8 = _0x344a20.y, _0x2a6446 = _0x344a20.width, _0x4fa3a8 = _0x344a20.height, _0x29b5f9 = _0x21bd74.points;
                        _0x29b5f9.length = 0;
                        _0x29b5f9.push(_0x1ca647, _0x500fc8, _0x1ca647 + _0x2a6446, _0x500fc8, _0x1ca647 + _0x2a6446, _0x500fc8 + _0x4fa3a8, _0x1ca647, _0x500fc8 + _0x4fa3a8);
                    },
                    'triangulate': function (_0xec00ab, _0x1300de) {
                        var _0x305a4b = _0xec00ab.points, _0x5ec1be = _0x1300de.points, _0x5030ba = _0x5ec1be.length / 2;
                        _0x5ec1be.push(_0x305a4b[0], _0x305a4b[1], _0x305a4b[2], _0x305a4b[3], _0x305a4b[6], _0x305a4b[7], _0x305a4b[4], _0x305a4b[5]);
                        _0x1300de.indices.push(_0x5030ba, _0x5030ba + 1, _0x5030ba + 2, _0x5030ba + 1, _0x5030ba + 2, _0x5030ba + 3);
                    }
                }, _0x15c7c5[_0x522b04.HS.RREC] = _0x4f940c, _0x15c7c5), _0x3fd597 = [], _0x1511e2 = [], _0x2c1414 = function () {
                    ;
                    function _0x562b01(_0x4ba541, _0x277d8f, _0x4127b0, _0x30beb0) {
                        ;
                        void 0 === _0x277d8f && (_0x277d8f = null);
                        void 0 === _0x4127b0 && (_0x4127b0 = null);
                        void 0 === _0x30beb0 && (_0x30beb0 = null);
                        this.points = [];
                        this.holes = [];
                        this.shape = _0x4ba541;
                        this.lineStyle = _0x4127b0;
                        this.fillStyle = _0x277d8f;
                        this.matrix = _0x30beb0;
                        this.type = _0x4ba541.type;
                    }
                    return _0x562b01.prototype.clone = function () {
                        ;
                        return new _0x562b01(this.shape, this.fillStyle, this.lineStyle, this.matrix);
                    }, _0x562b01.prototype.destroy = function () {
                        ;
                        this.shape = null;
                        this.holes.length = 0;
                        this.holes = null;
                        this.points.length = 0;
                        this.points = null;
                        this.lineStyle = null;
                        this.fillStyle = null;
                    }, _0x562b01;
                }(), _0x1ce66d = new _0x522b04.E9(), _0x1daf69 = new _0x227758.YZ(), _0x309264 = function (_0x31b0df) {
                    ;
                    function _0x28acd0() {
                        var _0x529410 = _0x31b0df.call(this) || this;
                        return _0x529410.closePointEps = 0.0001, _0x529410.boundsPadding = 0, _0x529410.uvsFloat32 = null, _0x529410.indicesUint16 = null, _0x529410.batchable = false, _0x529410.points = [], _0x529410.colors = [], _0x529410.uvs = [], _0x529410.indices = [], _0x529410.textureIds = [], _0x529410.graphicsData = [], _0x529410.drawCalls = [], _0x529410.batchDirty = -1, _0x529410.batches = [], _0x529410.dirty = 0, _0x529410.cacheDirty = -1, _0x529410.clearDirty = 0, _0x529410.shapeIndex = 0, _0x529410['_bounds'] = new _0x227758.YZ(), _0x529410.boundsDirty = -1, _0x529410;
                    }
                    return _0x4e6bc8(_0x28acd0, _0x31b0df), Object.defineProperty(_0x28acd0.prototype, 'bounds', {
                        'get': function () {
                            ;
                            return this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), this['_bounds'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x28acd0.prototype.invalidate = function () {
                        ;
                        this.boundsDirty = -1;
                        this.dirty++;
                        this.batchDirty++;
                        this.shapeIndex = 0;
                        this.points.length = 0;
                        this.colors.length = 0;
                        this.uvs.length = 0;
                        this.indices.length = 0;
                        this.textureIds.length = 0;
                        for (var _0x325f2e = 0; _0x325f2e < this.drawCalls.length; _0x325f2e++) {
                            this.drawCalls[_0x325f2e].texArray.clear();
                            _0x1511e2.push(this.drawCalls[_0x325f2e]);
                        }
                        for (this.drawCalls.length = 0, _0x325f2e = 0; _0x325f2e < this.batches.length; _0x325f2e++) {
                            var _0x53b3d0 = this.batches[_0x325f2e];
                            _0x53b3d0.reset();
                            _0x3fd597.push(_0x53b3d0);
                        }
                        this.batches.length = 0;
                    }, _0x28acd0.prototype.clear = function () {
                        ;
                        return this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0), this;
                    }, _0x28acd0.prototype.drawShape = function (_0x865531, _0x5bc128, _0x238ef8, _0x5635b2) {
                        ;
                        void 0 === _0x5bc128 && (_0x5bc128 = null);
                        void 0 === _0x238ef8 && (_0x238ef8 = null);
                        void 0 === _0x5635b2 && (_0x5635b2 = null);
                        var _0x47d128 = new _0x2c1414(_0x865531, _0x5bc128, _0x238ef8, _0x5635b2);
                        return this.graphicsData.push(_0x47d128), this.dirty++, this;
                    }, _0x28acd0.prototype.drawHole = function (_0x32ee65, _0x8afa22) {
                        ;
                        if (void 0 === _0x8afa22 && (_0x8afa22 = null), !this.graphicsData.length) {
                            return null;
                        }
                        var _0x2c8d03 = new _0x2c1414(_0x32ee65, null, null, _0x8afa22), _0x5f471c = this.graphicsData[this.graphicsData.length - 1];
                        return _0x2c8d03.lineStyle = _0x5f471c.lineStyle, _0x5f471c.holes.push(_0x2c8d03), this.dirty++, this;
                    }, _0x28acd0.prototype.destroy = function () {
                        ;
                        _0x31b0df.prototype.destroy.call(this);
                        for (var _0x289535 = 0; _0x289535 < this.graphicsData.length; ++_0x289535) {
                            this.graphicsData[_0x289535].destroy();
                        }
                        this.points.length = 0;
                        this.points = null;
                        this.colors.length = 0;
                        this.colors = null;
                        this.uvs.length = 0;
                        this.uvs = null;
                        this.indices.length = 0;
                        this.indices = null;
                        this.indexBuffer.destroy();
                        this.indexBuffer = null;
                        this.graphicsData.length = 0;
                        this.graphicsData = null;
                        this.drawCalls.length = 0;
                        this.drawCalls = null;
                        this.batches.length = 0;
                        this.batches = null;
                        this['_bounds'] = null;
                    }, _0x28acd0.prototype.containsPoint = function (_0x182f96) {
                        ;
                        for (var _0x3ef776 = this.graphicsData, _0xe955b3 = 0; _0xe955b3 < _0x3ef776.length; ++_0xe955b3) {
                            var _0x50fc18 = _0x3ef776[_0xe955b3];
                            if (_0x50fc18.fillStyle.visible && _0x50fc18.shape && (_0x50fc18.matrix ? _0x50fc18.matrix.applyInverse(_0x182f96, _0x1ce66d) : _0x1ce66d.copyFrom(_0x182f96), _0x50fc18.shape.contains(_0x1ce66d.x, _0x1ce66d.y))) {
                                var _0x1d63a4 = false;
                                if (_0x50fc18.holes) {
                                    for (var _0x2a8dc7 = 0; _0x2a8dc7 < _0x50fc18.holes.length; _0x2a8dc7++) {
                                        if (_0x50fc18.holes[_0x2a8dc7].shape.contains(_0x1ce66d.x, _0x1ce66d.y)) {
                                            _0x1d63a4 = true;
                                            break;
                                        }
                                    }
                                }
                                if (!_0x1d63a4) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    }, _0x28acd0.prototype.updateBatches = function (_0x1b412e) {
                        ;
                        if (this.graphicsData.length) {
                            if (this.validateBatching()) {
                                this.cacheDirty = this.dirty;
                                var _0x27225f = this.uvs, _0xc07cb6 = this.graphicsData, _0x31dbb9 = null, _0x2903c4 = null;
                                this.batches.length > 0 && (_0x2903c4 = (_0x31dbb9 = this.batches[this.batches.length - 1]).style);
                                for (var _0x89aa9a = this.shapeIndex; _0x89aa9a < _0xc07cb6.length; _0x89aa9a++) {
                                    this.shapeIndex++;
                                    var _0x2d7287 = _0xc07cb6[_0x89aa9a], _0x376880 = _0x2d7287.fillStyle, _0x27d59a = _0x2d7287.lineStyle;
                                    _0xce48d[_0x2d7287.type].build(_0x2d7287);
                                    _0x2d7287.matrix && this.transformPoints(_0x2d7287.points, _0x2d7287.matrix);
                                    (_0x376880.visible || _0x27d59a.visible) && this.processHoles(_0x2d7287.holes);
                                    for (var _0x55e2e7 = 0; _0x55e2e7 < 2; _0x55e2e7++) {
                                        var _0x1efe50 = 0 === _0x55e2e7 ? _0x376880 : _0x27d59a;
                                        if (_0x1efe50.visible) {
                                            var _0x455fb9 = _0x1efe50.texture.baseTexture, _0x31f0d0 = this.indices.length, _0x7265fd = this.points.length / 2;
                                            _0x455fb9.wrapMode = _0x3cfa1e.Nt.REPEAT;
                                            0 === _0x55e2e7 ? this.processFill(_0x2d7287) : this.processLine(_0x2d7287);
                                            var _0x328ecc = this.points.length / 2 - _0x7265fd;
                                            0 !== _0x328ecc && (_0x31dbb9 && !this['_compareStyles'](_0x2903c4, _0x1efe50) && (_0x31dbb9.end(_0x31f0d0, _0x7265fd), _0x31dbb9 = null), _0x31dbb9 || ((_0x31dbb9 = _0x3fd597.pop() || new _0x12fb3d()).begin(_0x1efe50, _0x31f0d0, _0x7265fd), this.batches.push(_0x31dbb9), _0x2903c4 = _0x1efe50), this.addUvs(this.points, _0x27225f, _0x1efe50.texture, _0x7265fd, _0x328ecc, _0x1efe50.matrix));
                                        }
                                    }
                                }
                                var _0x39d6fd = this.indices.length, _0x36f3b6 = this.points.length / 2;
                                if (_0x31dbb9 && _0x31dbb9.end(_0x39d6fd, _0x36f3b6), 0 !== this.batches.length) {
                                    if (this.indicesUint16 && this.indices.length === this.indicesUint16.length) {
                                        this.indicesUint16.set(this.indices);
                                    } else {
                                        var _0x2cfb19 = _0x36f3b6 > 65535 && _0x1b412e;
                                        this.indicesUint16 = _0x2cfb19 ? new Uint32Array(this.indices) : new Uint16Array(this.indices);
                                    }
                                    this.batchable = this.isBatchable();
                                    this.batchable ? this.packBatches() : this.buildDrawCalls();
                                } else {
                                    this.batchable = true;
                                }
                            }
                        } else {
                            this.batchable = true;
                        }
                    }, _0x28acd0.prototype['_compareStyles'] = function (_0x2110fb, _0x34bc92) {
                        ;
                        return !(!_0x2110fb || !_0x34bc92) && _0x2110fb.texture.baseTexture === _0x34bc92.texture.baseTexture && _0x2110fb.color + _0x2110fb.alpha === _0x34bc92.color + _0x34bc92.alpha && !!_0x2110fb.native == !!_0x34bc92.native;
                    }, _0x28acd0.prototype.validateBatching = function () {
                        ;
                        if (this.dirty === this.cacheDirty || !this.graphicsData.length) {
                            return false;
                        }
                        for (var _0x5e67a2 = 0, _0x30cdc3 = this.graphicsData.length; _0x5e67a2 < _0x30cdc3; _0x5e67a2++) {
                            var _0x28ce06 = this.graphicsData[_0x5e67a2], _0x4811d3 = _0x28ce06.fillStyle, _0x5a0b4c = _0x28ce06.lineStyle;
                            if (_0x4811d3 && !_0x4811d3.texture.baseTexture.valid) {
                                return false;
                            }
                            if (_0x5a0b4c && !_0x5a0b4c.texture.baseTexture.valid) {
                                return false;
                            }
                        }
                        return true;
                    }, _0x28acd0.prototype.packBatches = function () {
                        ;
                        this.batchDirty++;
                        this.uvsFloat32 = new Float32Array(this.uvs);
                        for (var _0x4e1173 = this.batches, _0x4b7bfb = 0, _0x40664a = _0x4e1173.length; _0x4b7bfb < _0x40664a; _0x4b7bfb++) {
                            for (var _0x5ee921 = _0x4e1173[_0x4b7bfb], _0x119af2 = 0; _0x119af2 < _0x5ee921.size; _0x119af2++) {
                                var _0x219796 = _0x5ee921.start + _0x119af2;
                                this.indicesUint16[_0x219796] = this.indicesUint16[_0x219796] - _0x5ee921.attribStart;
                            }
                        }
                    }, _0x28acd0.prototype.isBatchable = function () {
                        ;
                        if (this.points.length > 131070) {
                            return false;
                        }
                        for (var _0x29ca02 = this.batches, _0x2b7329 = 0; _0x2b7329 < _0x29ca02.length; _0x2b7329++) {
                            if (_0x29ca02[_0x2b7329].style.native) {
                                return false;
                            }
                        }
                        return this.points.length < 2 * _0x28acd0.BATCHABLE_SIZE;
                    }, _0x28acd0.prototype.buildDrawCalls = function () {
                        ;
                        for (var _0x130570 = ++_0x5d6d6c.VL['_globalBatch'], _0x36101a = 0; _0x36101a < this.drawCalls.length; _0x36101a++) {
                            this.drawCalls[_0x36101a].texArray.clear();
                            _0x1511e2.push(this.drawCalls[_0x36101a]);
                        }
                        this.drawCalls.length = 0;
                        var _0x3d30e7 = this.colors, _0x4e9f9f = this.textureIds, _0x28794e = _0x1511e2.pop();
                        _0x28794e || ((_0x28794e = new _0x5d6d6c['a$']()).texArray = new _0x5d6d6c.Ie());
                        _0x28794e.texArray.count = 0;
                        _0x28794e.start = 0;
                        _0x28794e.size = 0;
                        _0x28794e.type = _0x3cfa1e.lg.TRIANGLES;
                        var _0x3b76a6 = 0, _0x3c275c = null, _0x3dd5c2 = 0, _0x155ee2 = false, _0x2780db = _0x3cfa1e.lg.TRIANGLES, _0x2c4fe2 = 0;
                        for (this.drawCalls.push(_0x28794e), _0x36101a = 0; _0x36101a < this.batches.length; _0x36101a++) {
                            var _0x3b5967 = this.batches[_0x36101a], _0x53428d = _0x3b5967.style, _0x579424 = _0x53428d.texture.baseTexture;
                            _0x155ee2 !== !!_0x53428d.native && (_0x2780db = (_0x155ee2 = !!_0x53428d.native) ? _0x3cfa1e.lg.LINES : _0x3cfa1e.lg.TRIANGLES, _0x3c275c = null, _0x3b76a6 = 8, _0x130570++);
                            _0x3c275c !== _0x579424 && (_0x3c275c = _0x579424, _0x579424['_batchEnabled'] !== _0x130570 && (8 === _0x3b76a6 && (_0x130570++, _0x3b76a6 = 0, _0x28794e.size > 0 && ((_0x28794e = _0x1511e2.pop()) || ((_0x28794e = new _0x5d6d6c['a$']()).texArray = new _0x5d6d6c.Ie()), this.drawCalls.push(_0x28794e)), _0x28794e.start = _0x2c4fe2, _0x28794e.size = 0, _0x28794e.texArray.count = 0, _0x28794e.type = _0x2780db), _0x579424.touched = 1, _0x579424['_batchEnabled'] = _0x130570, _0x579424['_batchLocation'] = _0x3b76a6, _0x579424.wrapMode = _0x3cfa1e.Nt.REPEAT, _0x28794e.texArray.elements[_0x28794e.texArray.count++] = _0x579424, _0x3b76a6++));
                            _0x28794e.size += _0x3b5967.size;
                            _0x2c4fe2 += _0x3b5967.size;
                            _0x3dd5c2 = _0x579424['_batchLocation'];
                            this.addColors(_0x3d30e7, _0x53428d.color, _0x53428d.alpha, _0x3b5967.attribSize, _0x3b5967.attribStart);
                            this.addTextureIds(_0x4e9f9f, _0x3dd5c2, _0x3b5967.attribSize, _0x3b5967.attribStart);
                        }
                        _0x5d6d6c.VL['_globalBatch'] = _0x130570;
                        this.packAttributes();
                    }, _0x28acd0.prototype.packAttributes = function () {
                        ;
                        for (var _0x53da4d = this.points, _0x10cbfb = this.uvs, _0x167b32 = this.colors, _0x220d49 = this.textureIds, _0x6fd0df = new ArrayBuffer(3 * _0x53da4d.length * 4), _0x1312b9 = new Float32Array(_0x6fd0df), _0x47e918 = new Uint32Array(_0x6fd0df), _0x5aa4f4 = 0, _0x241e67 = 0; _0x241e67 < _0x53da4d.length / 2; _0x241e67++) {
                            _0x1312b9[_0x5aa4f4++] = _0x53da4d[2 * _0x241e67];
                            _0x1312b9[_0x5aa4f4++] = _0x53da4d[2 * _0x241e67 + 1];
                            _0x1312b9[_0x5aa4f4++] = _0x10cbfb[2 * _0x241e67];
                            _0x1312b9[_0x5aa4f4++] = _0x10cbfb[2 * _0x241e67 + 1];
                            _0x47e918[_0x5aa4f4++] = _0x167b32[_0x241e67];
                            _0x1312b9[_0x5aa4f4++] = _0x220d49[_0x241e67];
                        }
                        this['_buffer'].update(_0x6fd0df);
                        this['_indexBuffer'].update(this.indicesUint16);
                    }, _0x28acd0.prototype.processFill = function (_0x39274c) {
                        ;
                        _0x39274c.holes.length ? _0x208671.triangulate(_0x39274c, this) : _0xce48d[_0x39274c.type].triangulate(_0x39274c, this);
                    }, _0x28acd0.prototype.processLine = function (_0x514617) {
                        ;
                        _0x276ea7(_0x514617, this);
                        for (var _0xbc7ff2 = 0; _0xbc7ff2 < _0x514617.holes.length; _0xbc7ff2++) {
                            _0x276ea7(_0x514617.holes[_0xbc7ff2], this);
                        }
                    }, _0x28acd0.prototype.processHoles = function (_0xca0042) {
                        ;
                        for (var _0x40dce3 = 0; _0x40dce3 < _0xca0042.length; _0x40dce3++) {
                            var _0x2f4baa = _0xca0042[_0x40dce3];
                            _0xce48d[_0x2f4baa.type].build(_0x2f4baa);
                            _0x2f4baa.matrix && this.transformPoints(_0x2f4baa.points, _0x2f4baa.matrix);
                        }
                    }, _0x28acd0.prototype.calculateBounds = function () {
                        var _0x33c001 = this['_bounds'], _0xa7f5a2 = _0x1daf69, _0x5426f3 = _0x522b04.y3.IDENTITY;
                        this['_bounds'].clear();
                        _0xa7f5a2.clear();
                        for (var _0x46f71f = 0; _0x46f71f < this.graphicsData.length; _0x46f71f++) {
                            var _0x4c6e66 = this.graphicsData[_0x46f71f], _0x1e336d = _0x4c6e66.shape, _0x1479ea = _0x4c6e66.type, _0x167ad6 = _0x4c6e66.lineStyle, _0x58ef3e = _0x4c6e66.matrix || _0x522b04.y3.IDENTITY, _0x21e0d5 = 0;
                            if (_0x167ad6 && _0x167ad6.visible && (_0x21e0d5 = _0x167ad6.width, _0x1479ea !== _0x522b04.HS.POLY || _0x4c6e66.fillStyle.visible ? _0x21e0d5 *= Math.max(0, _0x167ad6.alignment) : _0x21e0d5 *= Math.max(_0x167ad6.alignment, 1 - _0x167ad6.alignment)), _0x5426f3 !== _0x58ef3e && (_0xa7f5a2.isEmpty() || (_0x33c001.addBoundsMatrix(_0xa7f5a2, _0x5426f3), _0xa7f5a2.clear()), _0x5426f3 = _0x58ef3e), _0x1479ea === _0x522b04.HS.RECT || _0x1479ea === _0x522b04.HS.RREC) {
                                var _0x3f83ad = _0x1e336d;
                                _0xa7f5a2.addFramePad(_0x3f83ad.x, _0x3f83ad.y, _0x3f83ad.x + _0x3f83ad.width, _0x3f83ad.y + _0x3f83ad.height, _0x21e0d5, _0x21e0d5);
                            } else {
                                if (_0x1479ea === _0x522b04.HS.CIRC) {
                                    var _0x4b123c = _0x1e336d;
                                    _0xa7f5a2.addFramePad(_0x4b123c.x, _0x4b123c.y, _0x4b123c.x, _0x4b123c.y, _0x4b123c.radius + _0x21e0d5, _0x4b123c.radius + _0x21e0d5);
                                } else {
                                    if (_0x1479ea === _0x522b04.HS.ELIP) {
                                        var _0x59ccaf = _0x1e336d;
                                        _0xa7f5a2.addFramePad(_0x59ccaf.x, _0x59ccaf.y, _0x59ccaf.x, _0x59ccaf.y, _0x59ccaf.width + _0x21e0d5, _0x59ccaf.height + _0x21e0d5);
                                    } else {
                                        var _0x354119 = _0x1e336d;
                                        _0x33c001.addVerticesMatrix(_0x5426f3, _0x354119.points, 0, _0x354119.points.length, _0x21e0d5, _0x21e0d5);
                                    }
                                }
                            }
                        }
                        _0xa7f5a2.isEmpty() || _0x33c001.addBoundsMatrix(_0xa7f5a2, _0x5426f3);
                        _0x33c001.pad(this.boundsPadding, this.boundsPadding);
                    }, _0x28acd0.prototype.transformPoints = function (_0x321024, _0x37791e) {
                        ;
                        for (var _0x1d7451 = 0; _0x1d7451 < _0x321024.length / 2; _0x1d7451++) {
                            var _0x384065 = _0x321024[2 * _0x1d7451], _0xcd9752 = _0x321024[2 * _0x1d7451 + 1];
                            _0x321024[2 * _0x1d7451] = _0x37791e.a * _0x384065 + _0x37791e.c * _0xcd9752 + _0x37791e.tx;
                            _0x321024[2 * _0x1d7451 + 1] = _0x37791e.b * _0x384065 + _0x37791e.d * _0xcd9752 + _0x37791e.ty;
                        }
                    }, _0x28acd0.prototype.addColors = function (_0x13a7a3, _0x5f5957, _0x50d5b6, _0x153594, _0x1b141d) {
                        ;
                        void 0 === _0x1b141d && (_0x1b141d = 0);
                        var _0x51054f = (_0x5f5957 >> 16) + (65280 & _0x5f5957) + ((255 & _0x5f5957) << 16), _0x4c0c95 = (0, _0x1d7bd2.rA)(_0x51054f, _0x50d5b6);
                        _0x13a7a3.length = Math.max(_0x13a7a3.length, _0x1b141d + _0x153594);
                        for (var _0x35f6ec = 0; _0x35f6ec < _0x153594; _0x35f6ec++) {
                            _0x13a7a3[_0x1b141d + _0x35f6ec] = _0x4c0c95;
                        }
                    }, _0x28acd0.prototype.addTextureIds = function (_0x3262a4, _0x1fd370, _0x53b9f0, _0x47d1e9) {
                        ;
                        void 0 === _0x47d1e9 && (_0x47d1e9 = 0);
                        _0x3262a4.length = Math.max(_0x3262a4.length, _0x47d1e9 + _0x53b9f0);
                        for (var _0x28f157 = 0; _0x28f157 < _0x53b9f0; _0x28f157++) {
                            _0x3262a4[_0x47d1e9 + _0x28f157] = _0x1fd370;
                        }
                    }, _0x28acd0.prototype.addUvs = function (_0x2ef187, _0x5dd86c, _0x260667, _0x284bc5, _0x1d0b73, _0x1b8372) {
                        ;
                        void 0 === _0x1b8372 && (_0x1b8372 = null);
                        for (var _0x342c9c = 0, _0x5741f1 = _0x5dd86c.length, _0x29390b = _0x260667.frame; _0x342c9c < _0x1d0b73;) {
                            var _0x286ec9 = _0x2ef187[2 * (_0x284bc5 + _0x342c9c)], _0x28c234 = _0x2ef187[2 * (_0x284bc5 + _0x342c9c) + 1];
                            if (_0x1b8372) {
                                var _0x1113e8 = _0x1b8372.a * _0x286ec9 + _0x1b8372.c * _0x28c234 + _0x1b8372.tx;
                                _0x28c234 = _0x1b8372.b * _0x286ec9 + _0x1b8372.d * _0x28c234 + _0x1b8372.ty;
                                _0x286ec9 = _0x1113e8;
                            }
                            _0x342c9c++;
                            _0x5dd86c.push(_0x286ec9 / _0x29390b.width, _0x28c234 / _0x29390b.height);
                        }
                        var _0x236012 = _0x260667.baseTexture;
                        (_0x29390b.width < _0x236012.width || _0x29390b.height < _0x236012.height) && this.adjustUvs(_0x5dd86c, _0x260667, _0x5741f1, _0x1d0b73);
                    }, _0x28acd0.prototype.adjustUvs = function (_0x37af99, _0x2e66bb, _0x1a93d9, _0x5ac6ff) {
                        ;
                        for (var _0x33eea8 = _0x2e66bb.baseTexture, _0x1e1b55 = _0x1a93d9 + 2 * _0x5ac6ff, _0x35a8b0 = _0x2e66bb.frame, _0x2dc5af = _0x35a8b0.width / _0x33eea8.width, _0x33a23a = _0x35a8b0.height / _0x33eea8.height, _0x1f008e = _0x35a8b0.x / _0x35a8b0.width, _0x46a200 = _0x35a8b0.y / _0x35a8b0.height, _0x3b8134 = Math.floor(_0x37af99[_0x1a93d9] + 0.000001), _0x3a6980 = Math.floor(_0x37af99[_0x1a93d9 + 1] + 0.000001), _0x368c0c = _0x1a93d9 + 2; _0x368c0c < _0x1e1b55; _0x368c0c += 2) {
                            _0x3b8134 = Math.min(_0x3b8134, Math.floor(_0x37af99[_0x368c0c] + 0.000001));
                            _0x3a6980 = Math.min(_0x3a6980, Math.floor(_0x37af99[_0x368c0c + 1] + 0.000001));
                        }
                        for (_0x1f008e -= _0x3b8134, _0x46a200 -= _0x3a6980, _0x368c0c = _0x1a93d9; _0x368c0c < _0x1e1b55; _0x368c0c += 2) {
                            _0x37af99[_0x368c0c] = (_0x37af99[_0x368c0c] + _0x1f008e) * _0x2dc5af;
                            _0x37af99[_0x368c0c + 1] = (_0x37af99[_0x368c0c + 1] + _0x46a200) * _0x33a23a;
                        }
                    }, _0x28acd0.BATCHABLE_SIZE = 100, _0x28acd0;
                }(_0x5d6d6c.JZ), _0x3baf3d = function (_0x3ed09b) {
                    ;
                    function _0x3d2faf() {
                        var _0x1de66f = null !== _0x3ed09b && _0x3ed09b.apply(this, arguments) || this;
                        return _0x1de66f.width = 0, _0x1de66f.alignment = 0.5, _0x1de66f.native = false, _0x1de66f.cap = _0x54c841.BUTT, _0x1de66f.join = _0x3dce18.MITER, _0x1de66f.miterLimit = 10, _0x1de66f;
                    }
                    return _0x4e6bc8(_0x3d2faf, _0x3ed09b), _0x3d2faf.prototype.clone = function () {
                        var _0x4d637c = new _0x3d2faf();
                        return _0x4d637c.color = this.color, _0x4d637c.alpha = this.alpha, _0x4d637c.texture = this.texture, _0x4d637c.matrix = this.matrix, _0x4d637c.visible = this.visible, _0x4d637c.width = this.width, _0x4d637c.alignment = this.alignment, _0x4d637c.native = this.native, _0x4d637c.cap = this.cap, _0x4d637c.join = this.join, _0x4d637c.miterLimit = this.miterLimit, _0x4d637c;
                    }, _0x3d2faf.prototype.reset = function () {
                        ;
                        _0x3ed09b.prototype.reset.call(this);
                        this.color = 0;
                        this.alignment = 0.5;
                        this.width = 0;
                        this.native = false;
                    }, _0x3d2faf;
                }(_0x2637d2), _0x506fdd = new Float32Array(3), _0x476f3d = { _0x392ecd: new _0x5d6d6c.ex(_0x23f4c1, _0xc6623c) }, _0x3c9f86 = function (_0x214777) {
                    ;
                    function _0x28d72e(_0x3aa73e) {
                        ;
                        void 0 === _0x3aa73e && (_0x3aa73e = null);
                        var _0x86e7a4 = _0x214777.call(this) || this;
                        return _0x86e7a4.shader = null, _0x86e7a4.pluginName = 'batch', _0x86e7a4.currentPath = null, _0x86e7a4.batches = [], _0x86e7a4.batchTint = -1, _0x86e7a4.batchDirty = -1, _0x86e7a4.vertexData = null, _0x86e7a4['_fillStyle'] = new _0x2637d2(), _0x86e7a4['_lineStyle'] = new _0x3baf3d(), _0x86e7a4['_matrix'] = null, _0x86e7a4['_holeMode'] = false, _0x86e7a4.state = _0x5d6d6c.ZM.for2d(), _0x86e7a4['_geometry'] = _0x3aa73e || new _0x309264(), _0x86e7a4['_geometry'].refCount++, _0x86e7a4['_transformID'] = -1, _0x86e7a4.tint = 16777215, _0x86e7a4.blendMode = _0x3cfa1e['T$'].NORMAL, _0x86e7a4;
                    }
                    return _0x4e6bc8(_0x28d72e, _0x214777), Object.defineProperty(_0x28d72e.prototype, 'geometry', {
                        'get': function () {
                            ;
                            return this['_geometry'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x28d72e.prototype.clone = function () {
                        ;
                        return this.finishPoly(), new _0x28d72e(this['_geometry']);
                    }, Object.defineProperty(_0x28d72e.prototype, 'blendMode', {
                        'get': function () {
                            ;
                            return this.state.blendMode;
                        },
                        'set': function (_0x37920b) {
                            ;
                            this.state.blendMode = _0x37920b;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x28d72e.prototype, 'tint', {
                        'get': function () {
                            return this['_tint'];
                        },
                        'set': function (_0xeb91bf) {
                            ;
                            this['_tint'] = _0xeb91bf;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x28d72e.prototype, 'fill', {
                        'get': function () {
                            ;
                            return this['_fillStyle'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x28d72e.prototype, 'line', {
                        'get': function () {
                            ;
                            return this['_lineStyle'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x28d72e.prototype.lineStyle = function (_0x5d173f, _0x1e378d, _0x172da1, _0x4fc0b5, _0x1521d8) {
                        ;
                        return void 0 === _0x5d173f && (_0x5d173f = null), void 0 === _0x1e378d && (_0x1e378d = 0), void 0 === _0x172da1 && (_0x172da1 = 1), void 0 === _0x4fc0b5 && (_0x4fc0b5 = 0.5), void 0 === _0x1521d8 && (_0x1521d8 = false), 'number' == typeof _0x5d173f && (_0x5d173f = {
                            'width': _0x5d173f,
                            'color': _0x1e378d,
                            'alpha': _0x172da1,
                            'alignment': _0x4fc0b5,
                            'native': _0x1521d8
                        }), this.lineTextureStyle(_0x5d173f);
                    }, _0x28d72e.prototype.lineTextureStyle = function (_0x2f3015) {
                        ;
                        _0x2f3015 = Object.assign({
                            'width': 0,
                            'texture': _0x5d6d6c.xE.WHITE,
                            'color': _0x2f3015 && _0x2f3015.texture ? 16777215 : 0,
                            'alpha': 1,
                            'matrix': null,
                            'alignment': 0.5,
                            'native': false,
                            'cap': _0x54c841.BUTT,
                            'join': _0x3dce18.MITER,
                            'miterLimit': 10
                        }, _0x2f3015);
                        this.currentPath && this.startPoly();
                        var _0x913c4b = _0x2f3015.width > 0 && _0x2f3015.alpha > 0;
                        return _0x913c4b ? (_0x2f3015.matrix && (_0x2f3015.matrix = _0x2f3015.matrix.clone(), _0x2f3015.matrix.invert()), Object.assign(this['_lineStyle'], { 'visible': _0x913c4b }, _0x2f3015)) : this['_lineStyle'].reset(), this;
                    }, _0x28d72e.prototype.startPoly = function () {
                        ;
                        if (this.currentPath) {
                            var _0x5c455d = this.currentPath.points, _0x1b9fde = this.currentPath.points.length;
                            _0x1b9fde > 2 && (this.drawShape(this.currentPath), this.currentPath = new _0x522b04.mg(), this.currentPath.closeStroke = false, this.currentPath.points.push(_0x5c455d[_0x1b9fde - 2], _0x5c455d[_0x1b9fde - 1]));
                        } else {
                            this.currentPath = new _0x522b04.mg();
                            this.currentPath.closeStroke = false;
                        }
                    }, _0x28d72e.prototype.finishPoly = function () {
                        ;
                        this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0);
                    }, _0x28d72e.prototype.moveTo = function (_0x4f2234, _0x1fcd90) {
                        ;
                        return this.startPoly(), this.currentPath.points[0] = _0x4f2234, this.currentPath.points[1] = _0x1fcd90, this;
                    }, _0x28d72e.prototype.lineTo = function (_0x5761a0, _0x3f7516) {
                        ;
                        this.currentPath || this.moveTo(0, 0);
                        var _0x5b3a60 = this.currentPath.points, _0x11d7c5 = _0x5b3a60[_0x5b3a60.length - 2], _0x2a2ac1 = _0x5b3a60[_0x5b3a60.length - 1];
                        return _0x11d7c5 === _0x5761a0 && _0x2a2ac1 === _0x3f7516 || _0x5b3a60.push(_0x5761a0, _0x3f7516), this;
                    }, _0x28d72e.prototype['_initCurve'] = function (_0x2f249f, _0x3dd818) {
                        ;
                        void 0 === _0x2f249f && (_0x2f249f = 0);
                        void 0 === _0x3dd818 && (_0x3dd818 = 0);
                        this.currentPath ? 0 === this.currentPath.points.length && (this.currentPath.points = [
                            _0x2f249f,
                            _0x3dd818
                        ]) : this.moveTo(_0x2f249f, _0x3dd818);
                    }, _0x28d72e.prototype.quadraticCurveTo = function (_0x3e149b, _0x4c9c4c, _0x1ca355, _0x236c5c) {
                        ;
                        this['_initCurve']();
                        var _0x387f8d = this.currentPath.points;
                        return 0 === _0x387f8d.length && this.moveTo(0, 0), _0x3adad3.curveTo(_0x3e149b, _0x4c9c4c, _0x1ca355, _0x236c5c, _0x387f8d), this;
                    }, _0x28d72e.prototype.bezierCurveTo = function (_0xc0bf43, _0x2e150a, _0x2d05bb, _0x327ecc, _0x33f713, _0x5053ae) {
                        ;
                        return this['_initCurve'](), _0x4b72cc.curveTo(_0xc0bf43, _0x2e150a, _0x2d05bb, _0x327ecc, _0x33f713, _0x5053ae, this.currentPath.points), this;
                    }, _0x28d72e.prototype.arcTo = function (_0x463af2, _0xcb6ed9, _0x292d94, _0x1adcbb, _0x14818c) {
                        ;
                        this['_initCurve'](_0x463af2, _0xcb6ed9);
                        var _0x51c941 = this.currentPath.points, _0x1585c1 = _0x179442.curveTo(_0x463af2, _0xcb6ed9, _0x292d94, _0x1adcbb, _0x14818c, _0x51c941);
                        if (_0x1585c1) {
                            var _0x213a45 = _0x1585c1.cx, _0x2b1c65 = _0x1585c1.cy, _0x35c9d6 = _0x1585c1.radius, _0x1d1fbd = _0x1585c1.startAngle, _0x2fc0f6 = _0x1585c1.endAngle, _0x246db8 = _0x1585c1.anticlockwise;
                            this.arc(_0x213a45, _0x2b1c65, _0x35c9d6, _0x1d1fbd, _0x2fc0f6, _0x246db8);
                        }
                        return this;
                    }, _0x28d72e.prototype.arc = function (_0x421e48, _0x4cee29, _0x371596, _0x5f4e58, _0x33346f, _0x353f91) {
                        ;
                        if (void 0 === _0x353f91 && (_0x353f91 = false), _0x5f4e58 === _0x33346f) {
                            return this;
                        }
                        if (!_0x353f91 && _0x33346f <= _0x5f4e58 ? _0x33346f += _0x522b04['_b'] : _0x353f91 && _0x5f4e58 <= _0x33346f && (_0x5f4e58 += _0x522b04['_b']), 0 == _0x33346f - _0x5f4e58) {
                            return this;
                        }
                        var _0x38c6cb = _0x421e48 + Math.cos(_0x5f4e58) * _0x371596, _0x4ce346 = _0x4cee29 + Math.sin(_0x5f4e58) * _0x371596, _0x439593 = this['_geometry'].closePointEps, _0x85bc59 = this.currentPath ? this.currentPath.points : null;
                        if (_0x85bc59) {
                            var _0x4f5ea5 = Math.abs(_0x85bc59[_0x85bc59.length - 2] - _0x38c6cb), _0x238c54 = Math.abs(_0x85bc59[_0x85bc59.length - 1] - _0x4ce346);
                            _0x4f5ea5 < _0x439593 && _0x238c54 < _0x439593 || _0x85bc59.push(_0x38c6cb, _0x4ce346);
                        } else {
                            this.moveTo(_0x38c6cb, _0x4ce346);
                            _0x85bc59 = this.currentPath.points;
                        }
                        return _0x179442.arc(_0x38c6cb, _0x4ce346, _0x421e48, _0x4cee29, _0x371596, _0x5f4e58, _0x33346f, _0x353f91, _0x85bc59), this;
                    }, _0x28d72e.prototype.beginFill = function (_0x36218a, _0x212510) {
                        ;
                        return void 0 === _0x36218a && (_0x36218a = 0), void 0 === _0x212510 && (_0x212510 = 1), this.beginTextureFill({
                            'texture': _0x5d6d6c.xE.WHITE,
                            'color': _0x36218a,
                            'alpha': _0x212510
                        });
                    }, _0x28d72e.prototype.beginTextureFill = function (_0x17c6ba) {
                        ;
                        _0x17c6ba = Object.assign({
                            'texture': _0x5d6d6c.xE.WHITE,
                            'color': 16777215,
                            'alpha': 1,
                            'matrix': null
                        }, _0x17c6ba);
                        this.currentPath && this.startPoly();
                        var _0xfb0876 = _0x17c6ba.alpha > 0;
                        return _0xfb0876 ? (_0x17c6ba.matrix && (_0x17c6ba.matrix = _0x17c6ba.matrix.clone(), _0x17c6ba.matrix.invert()), Object.assign(this['_fillStyle'], { 'visible': _0xfb0876 }, _0x17c6ba)) : this['_fillStyle'].reset(), this;
                    }, _0x28d72e.prototype.endFill = function () {
                        ;
                        return this.finishPoly(), this['_fillStyle'].reset(), this;
                    }, _0x28d72e.prototype.drawRect = function (_0x2dd171, _0x35aec0, _0x1463a5, _0x25eff1) {
                        ;
                        return this.drawShape(new _0x522b04.Ae(_0x2dd171, _0x35aec0, _0x1463a5, _0x25eff1));
                    }, _0x28d72e.prototype.drawRoundedRect = function (_0x220e69, _0x488f5c, _0x49e11c, _0x9368f0, _0xb1bcec) {
                        ;
                        return this.drawShape(new _0x522b04.c9(_0x220e69, _0x488f5c, _0x49e11c, _0x9368f0, _0xb1bcec));
                    }, _0x28d72e.prototype.drawCircle = function (_0x173a10, _0x40a353, _0x287712) {
                        ;
                        return this.drawShape(new _0x522b04.Cd(_0x173a10, _0x40a353, _0x287712));
                    }, _0x28d72e.prototype.drawEllipse = function (_0x5b96a9, _0x3805f6, _0x32e704, _0x1642fc) {
                        ;
                        return this.drawShape(new _0x522b04.Pj(_0x5b96a9, _0x3805f6, _0x32e704, _0x1642fc));
                    }, _0x28d72e.prototype.drawPolygon = function () {
                        ;
                        for (var _0x71c146, _0x2ef76c = arguments, _0x1db4a7 = [], _0x511e90 = 0; _0x511e90 < arguments.length; _0x511e90++) {
                            _0x1db4a7[_0x511e90] = _0x2ef76c[_0x511e90];
                        }
                        var _0x26bc45 = true, _0x232cd8 = _0x1db4a7[0];
                        _0x232cd8.points ? (_0x26bc45 = _0x232cd8.closeStroke, _0x71c146 = _0x232cd8.points) : _0x71c146 = Array.isArray(_0x1db4a7[0]) ? _0x1db4a7[0] : _0x1db4a7;
                        var _0x495a84 = new _0x522b04.mg(_0x71c146);
                        return _0x495a84.closeStroke = _0x26bc45, this.drawShape(_0x495a84), this;
                    }, _0x28d72e.prototype.drawShape = function (_0x2d096b) {
                        ;
                        return this['_holeMode'] ? this['_geometry'].drawHole(_0x2d096b, this['_matrix']) : this['_geometry'].drawShape(_0x2d096b, this['_fillStyle'].clone(), this['_lineStyle'].clone(), this['_matrix']), this;
                    }, _0x28d72e.prototype.clear = function () {
                        ;
                        return this['_geometry'].clear(), this['_lineStyle'].reset(), this['_fillStyle'].reset(), this['_boundsID']++, this['_matrix'] = null, this['_holeMode'] = false, this.currentPath = null, this;
                    }, _0x28d72e.prototype.isFastRect = function () {
                        var _0x1dfd21 = this['_geometry'].graphicsData;
                        return !(1 !== _0x1dfd21.length || _0x1dfd21[0].shape.type !== _0x522b04.HS.RECT || _0x1dfd21[0].matrix || _0x1dfd21[0].holes.length || _0x1dfd21[0].lineStyle.visible && _0x1dfd21[0].lineStyle.width);
                    }, _0x28d72e.prototype['_render'] = function (_0x5c784f) {
                        ;
                        this.finishPoly();
                        var _0x35cb6e = this['_geometry'], _0x1daff2 = _0x5c784f.context.supports.uint32Indices;
                        _0x35cb6e.updateBatches(_0x1daff2);
                        _0x35cb6e.batchable ? (this.batchDirty !== _0x35cb6e.batchDirty && this['_populateBatches'](), this['_renderBatched'](_0x5c784f)) : (_0x5c784f.batch.flush(), this['_renderDirect'](_0x5c784f));
                    }, _0x28d72e.prototype['_populateBatches'] = function () {
                        var _0x12ca3f = this['_geometry'], _0x1e0abe = this.blendMode, _0x467f15 = _0x12ca3f.batches.length;
                        this.batchTint = -1;
                        this['_transformID'] = -1;
                        this.batchDirty = _0x12ca3f.batchDirty;
                        this.batches.length = _0x467f15;
                        this.vertexData = new Float32Array(_0x12ca3f.points);
                        for (var _0x341098 = 0; _0x341098 < _0x467f15; _0x341098++) {
                            var _0x1868d0 = _0x12ca3f.batches[_0x341098], _0x1e0dac = _0x1868d0.style.color, _0x548dfb = new Float32Array(this.vertexData.buffer, 4 * _0x1868d0.attribStart * 2, 2 * _0x1868d0.attribSize), _0x5ef0e6 = new Float32Array(_0x12ca3f.uvsFloat32.buffer, 4 * _0x1868d0.attribStart * 2, 2 * _0x1868d0.attribSize), _0x1a0d17 = {
                                    'vertexData': _0x548dfb,
                                    'blendMode': _0x1e0abe,
                                    'indices': new Uint16Array(_0x12ca3f.indicesUint16.buffer, 2 * _0x1868d0.start, _0x1868d0.size),
                                    'uvs': _0x5ef0e6,
                                    '_batchRGB': (0, _0x1d7bd2.wK)(_0x1e0dac),
                                    '_tintRGB': _0x1e0dac,
                                    '_texture': _0x1868d0.style.texture,
                                    'alpha': _0x1868d0.style.alpha,
                                    'worldAlpha': 1
                                };
                            this.batches[_0x341098] = _0x1a0d17;
                        }
                    }, _0x28d72e.prototype['_renderBatched'] = function (_0x1758b4) {
                        ;
                        if (this.batches.length) {
                            _0x1758b4.batch.setObjectRenderer(_0x1758b4.plugins[this.pluginName]);
                            this.calculateVertices();
                            this.calculateTints();
                            for (var _0x15a796 = 0, _0x27e90e = this.batches.length; _0x15a796 < _0x27e90e; _0x15a796++) {
                                var _0x371233 = this.batches[_0x15a796];
                                _0x371233.worldAlpha = this.worldAlpha * _0x371233.alpha;
                                _0x1758b4.plugins[this.pluginName].render(_0x371233);
                            }
                        }
                    }, _0x28d72e.prototype['_renderDirect'] = function (_0x15be87) {
                        var _0x403863 = this['_resolveDirectShader'](_0x15be87), _0x3d1514 = this['_geometry'], _0x5c5286 = this.tint, _0x5c08ea = this.worldAlpha, _0x4b8d73 = _0x403863.uniforms, _0x18dcb7 = _0x3d1514.drawCalls;
                        _0x4b8d73.translationMatrix = this.transform.worldTransform;
                        _0x4b8d73.tint[0] = (_0x5c5286 >> 16 & 255) / 255 * _0x5c08ea;
                        _0x4b8d73.tint[1] = (_0x5c5286 >> 8 & 255) / 255 * _0x5c08ea;
                        _0x4b8d73.tint[2] = (255 & _0x5c5286) / 255 * _0x5c08ea;
                        _0x4b8d73.tint[3] = _0x5c08ea;
                        _0x15be87.shader.bind(_0x403863);
                        _0x15be87.geometry.bind(_0x3d1514, _0x403863);
                        _0x15be87.state.set(this.state);
                        for (var _0x572b3a = 0, _0x40f344 = _0x18dcb7.length; _0x572b3a < _0x40f344; _0x572b3a++) {
                            this['_renderDrawCallDirect'](_0x15be87, _0x3d1514.drawCalls[_0x572b3a]);
                        }
                    }, _0x28d72e.prototype['_renderDrawCallDirect'] = function (_0xec8c50, _0x42ef08) {
                        ;
                        for (var _0x43daf1 = _0x42ef08.texArray, _0x3a56c4 = _0x42ef08.type, _0x22bbde = _0x42ef08.size, _0x14a741 = _0x42ef08.start, _0x408cf3 = _0x43daf1.count, _0x25fca4 = 0; _0x25fca4 < _0x408cf3; _0x25fca4++) {
                            _0xec8c50.texture.bind(_0x43daf1.elements[_0x25fca4], _0x25fca4);
                        }
                        _0xec8c50.geometry.draw(_0x3a56c4, _0x22bbde, _0x14a741);
                    }, _0x28d72e.prototype['_resolveDirectShader'] = function (_0x321b52) {
                        var _0x555701 = this.shader, _0x392ecd = this.pluginName;
                        if (!_0x555701) {
                            if (!_0x476f3d[_0x392ecd]) {
                                for (var _0x3e2de2 = _0x321b52.plugins[_0x392ecd].MAX_TEXTURES, _0xd0cb9e = new Int32Array(_0x3e2de2), _0xfb604b = 0; _0xfb604b < _0x3e2de2; _0xfb604b++) {
                                    _0xd0cb9e[_0xfb604b] = _0xfb604b;
                                }
                                var _0xc6623c = {
                                        'tint': new Float32Array([
                                            1,
                                            1,
                                            1,
                                            1
                                        ]),
                                        'translationMatrix': new _0x522b04.y3(),
                                        'default': _0x5d6d6c.oo.from({ 'uSamplers': _0xd0cb9e }, true)
                                    }, _0x23f4c1 = _0x321b52.plugins[_0x392ecd]['_shader'].program;
                                ;
                            }
                            _0x555701 = _0x476f3d[_0x392ecd];
                        }
                        return _0x555701;
                    }, _0x28d72e.prototype['_calculateBounds'] = function () {
                        ;
                        this.finishPoly();
                        var _0x62e3f6 = this['_geometry'];
                        if (_0x62e3f6.graphicsData.length) {
                            var _0x114dfe = _0x62e3f6.bounds, _0xb8edf6 = _0x114dfe.minX, _0x33d191 = _0x114dfe.minY, _0x1a620e = _0x114dfe.maxX, _0x3f3691 = _0x114dfe.maxY;
                            this['_bounds'].addFrame(this.transform, _0xb8edf6, _0x33d191, _0x1a620e, _0x3f3691);
                        }
                    }, _0x28d72e.prototype.containsPoint = function (_0x53fceb) {
                        ;
                        return this.worldTransform.applyInverse(_0x53fceb, _0x28d72e['_TEMP_POINT']), this['_geometry'].containsPoint(_0x28d72e['_TEMP_POINT']);
                    }, _0x28d72e.prototype.calculateTints = function () {
                        ;
                        if (this.batchTint !== this.tint) {
                            this.batchTint = this.tint;
                            for (var _0x4b157f = (0, _0x1d7bd2.wK)(this.tint, _0x506fdd), _0x3f0d15 = 0; _0x3f0d15 < this.batches.length; _0x3f0d15++) {
                                var _0x5e2737 = this.batches[_0x3f0d15], _0x31c829 = _0x5e2737['_batchRGB'], _0x5f3533 = (_0x4b157f[0] * _0x31c829[0] * 255 << 16) + (_0x4b157f[1] * _0x31c829[1] * 255 << 8) + (0 | _0x4b157f[2] * _0x31c829[2] * 255);
                                _0x5e2737['_tintRGB'] = (_0x5f3533 >> 16) + (65280 & _0x5f3533) + ((255 & _0x5f3533) << 16);
                            }
                        }
                    }, _0x28d72e.prototype.calculateVertices = function () {
                        var _0x2e0654 = this.transform['_worldID'];
                        if (this['_transformID'] !== _0x2e0654) {
                            this['_transformID'] = _0x2e0654;
                            for (var _0x8fc1ce = this.transform.worldTransform, _0x43975c = _0x8fc1ce.a, _0x32cd44 = _0x8fc1ce.b, _0x4c1799 = _0x8fc1ce.c, _0x1e3ae1 = _0x8fc1ce.d, _0x28a1a3 = _0x8fc1ce.tx, _0x54a0dc = _0x8fc1ce.ty, _0x1bc425 = this['_geometry'].points, _0x1520fb = this.vertexData, _0xfb7c5d = 0, _0x5e7abb = 0; _0x5e7abb < _0x1bc425.length; _0x5e7abb += 2) {
                                var _0x5f3ab2 = _0x1bc425[_0x5e7abb], _0x1e829d = _0x1bc425[_0x5e7abb + 1];
                                _0x1520fb[_0xfb7c5d++] = _0x43975c * _0x5f3ab2 + _0x4c1799 * _0x1e829d + _0x28a1a3;
                                _0x1520fb[_0xfb7c5d++] = _0x1e3ae1 * _0x1e829d + _0x32cd44 * _0x5f3ab2 + _0x54a0dc;
                            }
                        }
                    }, _0x28d72e.prototype.closePath = function () {
                        var _0x5e0336 = this.currentPath;
                        return _0x5e0336 && (_0x5e0336.closeStroke = true, this.finishPoly()), this;
                    }, _0x28d72e.prototype.setMatrix = function (_0x9ceb78) {
                        ;
                        return this['_matrix'] = _0x9ceb78, this;
                    }, _0x28d72e.prototype.beginHole = function () {
                        ;
                        return this.finishPoly(), this['_holeMode'] = true, this;
                    }, _0x28d72e.prototype.endHole = function () {
                        ;
                        return this.finishPoly(), this['_holeMode'] = false, this;
                    }, _0x28d72e.prototype.destroy = function (_0x18c806) {
                        ;
                        this['_geometry'].refCount--;
                        0 === this['_geometry'].refCount && this['_geometry'].dispose();
                        this['_matrix'] = null;
                        this.currentPath = null;
                        this['_lineStyle'].destroy();
                        this['_lineStyle'] = null;
                        this['_fillStyle'].destroy();
                        this['_fillStyle'] = null;
                        this['_geometry'] = null;
                        this.shader = null;
                        this.vertexData = null;
                        this.batches.length = 0;
                        this.batches = null;
                        _0x214777.prototype.destroy.call(this, _0x18c806);
                    }, _0x28d72e.nextRoundedRectBehavior = false, _0x28d72e['_TEMP_POINT'] = new _0x522b04.E9(), _0x28d72e;
                }(_0x227758.W2), _0x157376 = _0x3292ae(679), _0x30effa = _0x3292ae(886);
            _0x2beca4.X.UPLOADS_PER_FRAME = 4;
            var _0x533104 = function (_0x5ca2be, _0x27c822) {
                    return _0x533104 = Object.setPrototypeOf || { '__proto__': [] } instanceof Array && function (_0x29e6b4, _0x14d4c6) {
                        ;
                        _0x29e6b4['__proto__'] = _0x14d4c6;
                    } || function (_0x5de2b8, _0x57ab19) {
                        ;
                        for (var _0x47b066 in _0x57ab19)
                            _0x57ab19.hasOwnProperty(_0x47b066) && (_0x5de2b8[_0x47b066] = _0x57ab19[_0x47b066]);
                    }, _0x533104(_0x5ca2be, _0x27c822);
                }, _0x527e6a = function () {
                    ;
                    function _0x175bab(_0x34640f) {
                        ;
                        this.maxItemsPerFrame = _0x34640f;
                        this.itemsLeft = 0;
                    }
                    return _0x175bab.prototype.beginFrame = function () {
                        ;
                        this.itemsLeft = this.maxItemsPerFrame;
                    }, _0x175bab.prototype.allowedToUpload = function () {
                        ;
                        return this.itemsLeft-- > 0;
                    }, _0x175bab;
                }();
            function _0x234e14(_0x76b52f, _0x59875c) {
                var _0x3136a2 = false;
                if (_0x76b52f && _0x76b52f['_textures'] && _0x76b52f['_textures'].length) {
                    for (var _0x58f8d4 = 0; _0x58f8d4 < _0x76b52f['_textures'].length; _0x58f8d4++) {
                        if (_0x76b52f['_textures'][_0x58f8d4] instanceof _0x5d6d6c.xE) {
                            var _0x1b5d12 = _0x76b52f['_textures'][_0x58f8d4].baseTexture;
                            -1 === _0x59875c.indexOf(_0x1b5d12) && (_0x59875c.push(_0x1b5d12), _0x3136a2 = true);
                        }
                    }
                }
                return _0x3136a2;
            }
            function _0xfee930(_0x599398, _0x38dc7f) {
                ;
                if (_0x599398.baseTexture instanceof _0x5d6d6c.VL) {
                    var _0x4006ab = _0x599398.baseTexture;
                    return -1 === _0x38dc7f.indexOf(_0x4006ab) && _0x38dc7f.push(_0x4006ab), true;
                }
                return false;
            }
            function _0x1530ab(_0x39e73a, _0x5619df) {
                ;
                if (_0x39e73a['_texture'] && _0x39e73a['_texture'] instanceof _0x5d6d6c.xE) {
                    var _0x5e851d = _0x39e73a['_texture'].baseTexture;
                    return -1 === _0x5619df.indexOf(_0x5e851d) && _0x5619df.push(_0x5e851d), true;
                }
                return false;
            }
            function _0x4fc6b6(_0x39842a, _0x89af55) {
                ;
                return _0x89af55 instanceof _0x30effa.xv && (_0x89af55.updateText(true), true);
            }
            function _0x53b2ec(_0x202e9f, _0x39dec3) {
                ;
                if (_0x39dec3 instanceof _0x30effa.pn) {
                    var _0x5dac0c = _0x39dec3.toFontString();
                    return _0x30effa['_A'].measureFont(_0x5dac0c), true;
                }
                return false;
            }
            function _0x14aa4c(_0x269831, _0x5aed1c) {
                ;
                if (_0x269831 instanceof _0x30effa.xv) {
                    -1 === _0x5aed1c.indexOf(_0x269831.style) && _0x5aed1c.push(_0x269831.style);
                    -1 === _0x5aed1c.indexOf(_0x269831) && _0x5aed1c.push(_0x269831);
                    var _0x31271d = _0x269831['_texture'].baseTexture;
                    return -1 === _0x5aed1c.indexOf(_0x31271d) && _0x5aed1c.push(_0x31271d), true;
                }
                return false;
            }
            function _0x2d04ad(_0x376b4f, _0x1aa08d) {
                ;
                return _0x376b4f instanceof _0x30effa.pn && (-1 === _0x1aa08d.indexOf(_0x376b4f) && _0x1aa08d.push(_0x376b4f), true);
            }
            var _0x44de51 = function () {
                ;
                function _0x19f994(_0x45d1d6) {
                    var _0x50577c = this;
                    this.limiter = new _0x527e6a(_0x2beca4.X.UPLOADS_PER_FRAME);
                    this.renderer = _0x45d1d6;
                    this.uploadHookHelper = null;
                    this.queue = [];
                    this.addHooks = [];
                    this.uploadHooks = [];
                    this.completes = [];
                    this.ticking = false;
                    this.delayedTick = function () {
                        ;
                        _0x50577c.queue && _0x50577c.prepareItems();
                    };
                    this.registerFindHook(_0x14aa4c);
                    this.registerFindHook(_0x2d04ad);
                    this.registerFindHook(_0x234e14);
                    this.registerFindHook(_0xfee930);
                    this.registerFindHook(_0x1530ab);
                    this.registerUploadHook(_0x4fc6b6);
                    this.registerUploadHook(_0x53b2ec);
                }
                return _0x19f994.prototype.upload = function (_0x56815d, _0x5f4af7) {
                    ;
                    'function' == typeof _0x56815d && (_0x5f4af7 = _0x56815d, _0x56815d = null);
                    _0x56815d && this.add(_0x56815d);
                    this.queue.length ? (_0x5f4af7 && this.completes.push(_0x5f4af7), this.ticking || (this.ticking = true, _0x157376.vB.system.addOnce(this.tick, this, _0x157376.uF.UTILITY))) : _0x5f4af7 && _0x5f4af7();
                }, _0x19f994.prototype.tick = function () {
                    setTimeout(this.delayedTick, 0);
                }, _0x19f994.prototype.prepareItems = function () {
                    ;
                    for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload();) {
                        var _0x7d8b2 = this.queue[0], _0x32a03c = false;
                        if (_0x7d8b2 && !_0x7d8b2['_destroyed']) {
                            for (var _0x53a848 = 0, _0x33999e = this.uploadHooks.length; _0x53a848 < _0x33999e; _0x53a848++) {
                                if (this.uploadHooks[_0x53a848](this.uploadHookHelper, _0x7d8b2)) {
                                    this.queue.shift();
                                    _0x32a03c = true;
                                    break;
                                }
                            }
                        }
                        _0x32a03c || this.queue.shift();
                    }
                    if (this.queue.length) {
                        _0x157376.vB.system.addOnce(this.tick, this, _0x157376.uF.UTILITY);
                    } else {
                        this.ticking = false;
                        var _0x179df6 = this.completes.slice(0);
                        for (this.completes.length = 0, _0x53a848 = 0, _0x33999e = _0x179df6.length; _0x53a848 < _0x33999e; _0x53a848++) {
                            _0x179df6[_0x53a848]();
                        }
                    }
                }, _0x19f994.prototype.registerFindHook = function (_0x92f643) {
                    ;
                    return _0x92f643 && this.addHooks.push(_0x92f643), this;
                }, _0x19f994.prototype.registerUploadHook = function (_0x46d841) {
                    ;
                    return _0x46d841 && this.uploadHooks.push(_0x46d841), this;
                }, _0x19f994.prototype.add = function (_0x27d9fa) {
                    ;
                    for (var _0x26a802 = 0, _0x1145f7 = this.addHooks.length; _0x26a802 < _0x1145f7 && !this.addHooks[_0x26a802](_0x27d9fa, this.queue); _0x26a802++) {
                        ;
                    }
                    if (_0x27d9fa instanceof _0x227758.W2) {
                        for (_0x26a802 = _0x27d9fa.children.length - 1; _0x26a802 >= 0; _0x26a802--) {
                            this.add(_0x27d9fa.children[_0x26a802]);
                        }
                    }
                    return this;
                }, _0x19f994.prototype.destroy = function () {
                    ;
                    this.ticking && _0x157376.vB.system.remove(this.tick, this);
                    this.ticking = false;
                    this.addHooks = null;
                    this.uploadHooks = null;
                    this.renderer = null;
                    this.completes = null;
                    this.queue = null;
                    this.limiter = null;
                    this.uploadHookHelper = null;
                }, _0x19f994;
            }();
            function _0x4f8e99(_0x3e44c7, _0x306d24) {
                ;
                return _0x306d24 instanceof _0x5d6d6c.VL && (_0x306d24['_glTextures'][_0x3e44c7.CONTEXT_UID] || _0x3e44c7.texture.bind(_0x306d24), true);
            }
            function _0x370356(_0x320c8d, _0x733434) {
                ;
                if (!(_0x733434 instanceof _0x3c9f86)) {
                    return false;
                }
                var _0x2ddf8b = _0x733434.geometry;
                _0x733434.finishPoly();
                _0x2ddf8b.updateBatches();
                for (var _0x43caf8 = _0x2ddf8b.batches, _0x4feecf = 0; _0x4feecf < _0x43caf8.length; _0x4feecf++) {
                    var _0x20f5da = _0x43caf8[_0x4feecf].style.texture;
                    _0x20f5da && _0x4f8e99(_0x320c8d, _0x20f5da.baseTexture);
                }
                return _0x2ddf8b.batchable || _0x320c8d.geometry.bind(_0x2ddf8b, _0x733434['_resolveDirectShader'](_0x320c8d)), true;
            }
            function _0x3242b6(_0x12afa8, _0x47ff08) {
                ;
                return _0x12afa8 instanceof _0x3c9f86 && (_0x47ff08.push(_0x12afa8), true);
            }
            var _0x4cd0e8 = function (_0x4d1de6) {
                function _0x18b6b3(_0x13a37e) {
                    var _0x294232 = _0x4d1de6.call(this, _0x13a37e) || this;
                    return _0x294232.uploadHookHelper = _0x294232.renderer, _0x294232.registerFindHook(_0x3242b6), _0x294232.registerUploadHook(_0x4f8e99), _0x294232.registerUploadHook(_0x370356), _0x294232;
                }
                return function (_0x492da2, _0x306599) {
                    ;
                    function _0x1e2dd5() {
                        ;
                        this.constructor = _0x492da2;
                    }
                    _0x533104(_0x492da2, _0x306599);
                    _0x492da2.prototype = null === _0x306599 ? Object.create(_0x306599) : (_0x1e2dd5.prototype = _0x306599.prototype, new _0x1e2dd5());
                }(_0x18b6b3, _0x4d1de6), _0x18b6b3;
            }(_0x44de51);
            !function () {
                ;
                function _0x20e932(_0x123f78) {
                    ;
                    this.maxMilliseconds = _0x123f78;
                    this.frameStart = 0;
                }
                _0x20e932.prototype.beginFrame = function () {
                    this.frameStart = Date.now();
                };
                _0x20e932.prototype.allowedToUpload = function () {
                    ;
                    return Date.now() - this.frameStart < this.maxMilliseconds;
                };
            }();
        },
        319: (_0x421ddc, _0x8e4489, _0x40aa49) => {
            'use strict';
            ;
            _0x40aa49.d(_0x8e4489, {
                't': () => _0x52d3ae,
                'X': () => _0xa3271c
            });
            var _0x107a3c, _0x62cb2f, _0x2b7c2d, _0x43a2a6, _0x11f4af, _0x197d37, _0x2bbd10, _0x2a7afe, _0x9fab21, _0x3c79b6, _0x9ca953, _0x27addf, _0x4faec7, _0x76cb44, _0x5f14f8, _0x177567, _0x4a959a, _0x4228cf, _0x13f919, _0x247057 = function (_0x2dc510) {
                    ;
                    return void 0 !== _0x2dc510 && 'MacIntel' === _0x2dc510.platform && 'number' == typeof _0x2dc510.maxTouchPoints && _0x2dc510.maxTouchPoints > 1 && 'undefined' == typeof MSStream;
                }, _0x52d3ae = function (_0x494fa7) {
                    ;
                    _0x494fa7 || 'undefined' == typeof navigator ? 'string' == typeof _0x494fa7 ? _0x16a19c.userAgent = _0x494fa7 : _0x494fa7 && _0x494fa7.userAgent && (_0x16a19c = {
                        'userAgent': _0x494fa7.userAgent,
                        'platform': _0x494fa7.platform,
                        'maxTouchPoints': _0x494fa7.maxTouchPoints || 0
                    }) : _0x16a19c = {
                        'userAgent': navigator.userAgent,
                        'platform': navigator.platform,
                        'maxTouchPoints': navigator.maxTouchPoints || 0
                    };
                    var _0x58fe7d = _0x16a19c.userAgent, _0x18fa3e = _0x58fe7d.split('[FBAN');
                    void 0 !== _0x18fa3e[1] && (_0x58fe7d = _0x18fa3e[0]);
                    void 0 !== (_0x18fa3e = _0x58fe7d.split('Twitter'))[1] && (_0x58fe7d = _0x18fa3e[0]);
                    var _0x484884 = function (_0x2bd321) {
                            return function (_0x285a4f) {
                                ;
                                return _0x285a4f.test(_0x2bd321);
                            };
                        }(_0x58fe7d), _0x4e32a9 = {
                            'apple': {
                                'phone': _0x484884(/iPhone/i) && !_0x484884(/Windows Phone/i),
                                'ipod': _0x484884(/iPod/i),
                                'tablet': !_0x484884(/iPhone/i) && (_0x484884(/iPad/i) || _0x247057(_0x16a19c)) && !_0x484884(/Windows Phone/i),
                                'universal': _0x484884(/\biOS-universal(?:.+)Mac\b/i),
                                'device': (_0x484884(/iPhone/i) || _0x484884(/iPod/i) || _0x484884(/iPad/i) || _0x484884(/\biOS-universal(?:.+)Mac\b/i) || _0x247057(_0x16a19c)) && !_0x484884(/Windows Phone/i)
                            },
                            'amazon': {
                                'phone': _0x484884(/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i),
                                'tablet': !_0x484884(/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i) && _0x484884(/Silk/i),
                                'device': _0x484884(/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i) || _0x484884(/Silk/i)
                            },
                            'android': {
                                'phone': !_0x484884(/Windows Phone/i) && _0x484884(/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i) || !_0x484884(/Windows Phone/i) && _0x484884(/\bAndroid(?:.+)Mobile\b/i),
                                'tablet': !_0x484884(/Windows Phone/i) && !_0x484884(/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i) && !_0x484884(/\bAndroid(?:.+)Mobile\b/i) && (_0x484884(/Silk/i) || _0x484884(/Android/i)),
                                'device': !_0x484884(/Windows Phone/i) && (_0x484884(/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i) || _0x484884(/Silk/i) || _0x484884(/\bAndroid(?:.+)Mobile\b/i) || _0x484884(/Android/i)) || _0x484884(/\bokhttp\b/i)
                            },
                            'windows': {
                                'phone': _0x484884(/Windows Phone/i),
                                'tablet': _0x484884(/\bWindows(?:.+)ARM\b/i),
                                'device': _0x484884(/Windows Phone/i) || _0x484884(/\bWindows(?:.+)ARM\b/i)
                            },
                            'other': {
                                'blackberry': _0x484884(/BlackBerry/i),
                                'blackberry10': _0x484884(/BB10/i),
                                'opera': _0x484884(/Opera Mini/i),
                                'firefox': _0x484884(/Mobile(?:.+)Firefox\b/i),
                                'chrome': _0x484884(/\b(CriOS|Chrome)(?:.+)Mobile/i),
                                'device': _0x484884(/BlackBerry/i) || _0x484884(/BB10/i) || _0x484884(/Opera Mini/i) || _0x484884(/Mobile(?:.+)Firefox\b/i) || _0x484884(/\b(CriOS|Chrome)(?:.+)Mobile/i)
                            },
                            'any': false,
                            'phone': false,
                            'tablet': false
                        };
                    return _0x4e32a9.any = _0x4e32a9.apple.device || _0x4e32a9.android.device || _0x4e32a9.windows.device || _0x4e32a9.other.device, _0x4e32a9.phone = _0x4e32a9.apple.phone || _0x4e32a9.android.phone || _0x4e32a9.windows.phone, _0x4e32a9.tablet = _0x4e32a9.apple.tablet || _0x4e32a9.android.tablet || _0x4e32a9.windows.tablet, _0x4e32a9;
                }(globalThis.navigator);
            !function (_0x52ee18) {
                ;
                _0x52ee18[_0x52ee18.WEBGL_LEGACY = 0] = 'WEBGL_LEGACY';
                _0x52ee18[_0x52ee18.WEBGL = 1] = 'WEBGL';
                _0x52ee18[_0x52ee18.WEBGL2 = 2] = 'WEBGL2';
            }(_0x107a3c || (_0x107a3c = {}));
            (function (_0x4cd0bd) {
                ;
                _0x4cd0bd[_0x4cd0bd.UNKNOWN = 0] = 'UNKNOWN';
                _0x4cd0bd[_0x4cd0bd.WEBGL = 1] = 'WEBGL';
                _0x4cd0bd[_0x4cd0bd.CANVAS = 2] = 'CANVAS';
            }(_0x62cb2f || (_0x62cb2f = {})));
            (function (_0x487944) {
                ;
                _0x487944[_0x487944.COLOR = 16384] = 'COLOR';
                _0x487944[_0x487944.DEPTH = 256] = 'DEPTH';
                _0x487944[_0x487944.STENCIL = 1024] = 'STENCIL';
            }(_0x2b7c2d || (_0x2b7c2d = {})));
            (function (_0x4192c8) {
                ;
                _0x4192c8[_0x4192c8.NORMAL = 0] = 'NORMAL';
                _0x4192c8[_0x4192c8.ADD = 1] = 'ADD';
                _0x4192c8[_0x4192c8.MULTIPLY = 2] = 'MULTIPLY';
                _0x4192c8[_0x4192c8.SCREEN = 3] = 'SCREEN';
                _0x4192c8[_0x4192c8.OVERLAY = 4] = 'OVERLAY';
                _0x4192c8[_0x4192c8.DARKEN = 5] = 'DARKEN';
                _0x4192c8[_0x4192c8.LIGHTEN = 6] = 'LIGHTEN';
                _0x4192c8[_0x4192c8.COLOR_DODGE = 7] = 'COLOR_DODGE';
                _0x4192c8[_0x4192c8.COLOR_BURN = 8] = 'COLOR_BURN';
                _0x4192c8[_0x4192c8.HARD_LIGHT = 9] = 'HARD_LIGHT';
                _0x4192c8[_0x4192c8.SOFT_LIGHT = 10] = 'SOFT_LIGHT';
                _0x4192c8[_0x4192c8.DIFFERENCE = 11] = 'DIFFERENCE';
                _0x4192c8[_0x4192c8.EXCLUSION = 12] = 'EXCLUSION';
                _0x4192c8[_0x4192c8.HUE = 13] = 'HUE';
                _0x4192c8[_0x4192c8.SATURATION = 14] = 'SATURATION';
                _0x4192c8[_0x4192c8.COLOR = 15] = 'COLOR';
                _0x4192c8[_0x4192c8.LUMINOSITY = 16] = 'LUMINOSITY';
                _0x4192c8[_0x4192c8.NORMAL_NPM = 17] = 'NORMAL_NPM';
                _0x4192c8[_0x4192c8.ADD_NPM = 18] = 'ADD_NPM';
                _0x4192c8[_0x4192c8.SCREEN_NPM = 19] = 'SCREEN_NPM';
                _0x4192c8[_0x4192c8.NONE = 20] = 'NONE';
                _0x4192c8[_0x4192c8.SRC_OVER = 0] = 'SRC_OVER';
                _0x4192c8[_0x4192c8.SRC_IN = 21] = 'SRC_IN';
                _0x4192c8[_0x4192c8.SRC_OUT = 22] = 'SRC_OUT';
                _0x4192c8[_0x4192c8.SRC_ATOP = 23] = 'SRC_ATOP';
                _0x4192c8[_0x4192c8.DST_OVER = 24] = 'DST_OVER';
                _0x4192c8[_0x4192c8.DST_IN = 25] = 'DST_IN';
                _0x4192c8[_0x4192c8.DST_OUT = 26] = 'DST_OUT';
                _0x4192c8[_0x4192c8.DST_ATOP = 27] = 'DST_ATOP';
                _0x4192c8[_0x4192c8.ERASE = 26] = 'ERASE';
                _0x4192c8[_0x4192c8.SUBTRACT = 28] = 'SUBTRACT';
                _0x4192c8[_0x4192c8.XOR = 29] = 'XOR';
            }(_0x43a2a6 || (_0x43a2a6 = {})));
            (function (_0x25cc0b) {
                ;
                _0x25cc0b[_0x25cc0b.POINTS = 0] = 'POINTS';
                _0x25cc0b[_0x25cc0b.LINES = 1] = 'LINES';
                _0x25cc0b[_0x25cc0b.LINE_LOOP = 2] = 'LINE_LOOP';
                _0x25cc0b[_0x25cc0b.LINE_STRIP = 3] = 'LINE_STRIP';
                _0x25cc0b[_0x25cc0b.TRIANGLES = 4] = 'TRIANGLES';
                _0x25cc0b[_0x25cc0b.TRIANGLE_STRIP = 5] = 'TRIANGLE_STRIP';
                _0x25cc0b[_0x25cc0b.TRIANGLE_FAN = 6] = 'TRIANGLE_FAN';
            }(_0x11f4af || (_0x11f4af = {})));
            (function (_0x35bd3b) {
                ;
                _0x35bd3b[_0x35bd3b.RGBA = 6408] = 'RGBA';
                _0x35bd3b[_0x35bd3b.RGB = 6407] = 'RGB';
                _0x35bd3b[_0x35bd3b.RG = 33319] = 'RG';
                _0x35bd3b[_0x35bd3b.RED = 6403] = 'RED';
                _0x35bd3b[_0x35bd3b.RGBA_INTEGER = 36249] = 'RGBA_INTEGER';
                _0x35bd3b[_0x35bd3b.RGB_INTEGER = 36248] = 'RGB_INTEGER';
                _0x35bd3b[_0x35bd3b.RG_INTEGER = 33320] = 'RG_INTEGER';
                _0x35bd3b[_0x35bd3b.RED_INTEGER = 36244] = 'RED_INTEGER';
                _0x35bd3b[_0x35bd3b.ALPHA = 6406] = 'ALPHA';
                _0x35bd3b[_0x35bd3b.LUMINANCE = 6409] = 'LUMINANCE';
                _0x35bd3b[_0x35bd3b.LUMINANCE_ALPHA = 6410] = 'LUMINANCE_ALPHA';
                _0x35bd3b[_0x35bd3b.DEPTH_COMPONENT = 6402] = 'DEPTH_COMPONENT';
                _0x35bd3b[_0x35bd3b.DEPTH_STENCIL = 34041] = 'DEPTH_STENCIL';
            }(_0x197d37 || (_0x197d37 = {})));
            (function (_0x4f1389) {
                ;
                _0x4f1389[_0x4f1389.TEXTURE_2D = 3553] = 'TEXTURE_2D';
                _0x4f1389[_0x4f1389.TEXTURE_CUBE_MAP = 34067] = 'TEXTURE_CUBE_MAP';
                _0x4f1389[_0x4f1389.TEXTURE_2D_ARRAY = 35866] = 'TEXTURE_2D_ARRAY';
                _0x4f1389[_0x4f1389.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = 'TEXTURE_CUBE_MAP_POSITIVE_X';
                _0x4f1389[_0x4f1389.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = 'TEXTURE_CUBE_MAP_NEGATIVE_X';
                _0x4f1389[_0x4f1389.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = 'TEXTURE_CUBE_MAP_POSITIVE_Y';
                _0x4f1389[_0x4f1389.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = 'TEXTURE_CUBE_MAP_NEGATIVE_Y';
                _0x4f1389[_0x4f1389.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = 'TEXTURE_CUBE_MAP_POSITIVE_Z';
                _0x4f1389[_0x4f1389.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = 'TEXTURE_CUBE_MAP_NEGATIVE_Z';
            }(_0x2bbd10 || (_0x2bbd10 = {})));
            (function (_0x2c1ec6) {
                ;
                _0x2c1ec6[_0x2c1ec6.UNSIGNED_BYTE = 5121] = 'UNSIGNED_BYTE';
                _0x2c1ec6[_0x2c1ec6.UNSIGNED_SHORT = 5123] = 'UNSIGNED_SHORT';
                _0x2c1ec6[_0x2c1ec6.UNSIGNED_SHORT_5_6_5 = 33635] = 'UNSIGNED_SHORT_5_6_5';
                _0x2c1ec6[_0x2c1ec6.UNSIGNED_SHORT_4_4_4_4 = 32819] = 'UNSIGNED_SHORT_4_4_4_4';
                _0x2c1ec6[_0x2c1ec6.UNSIGNED_SHORT_5_5_5_1 = 32820] = 'UNSIGNED_SHORT_5_5_5_1';
                _0x2c1ec6[_0x2c1ec6.UNSIGNED_INT = 5125] = 'UNSIGNED_INT';
                _0x2c1ec6[_0x2c1ec6.UNSIGNED_INT_10F_11F_11F_REV = 35899] = 'UNSIGNED_INT_10F_11F_11F_REV';
                _0x2c1ec6[_0x2c1ec6.UNSIGNED_INT_2_10_10_10_REV = 33640] = 'UNSIGNED_INT_2_10_10_10_REV';
                _0x2c1ec6[_0x2c1ec6.UNSIGNED_INT_24_8 = 34042] = 'UNSIGNED_INT_24_8';
                _0x2c1ec6[_0x2c1ec6.UNSIGNED_INT_5_9_9_9_REV = 35902] = 'UNSIGNED_INT_5_9_9_9_REV';
                _0x2c1ec6[_0x2c1ec6.BYTE = 5120] = 'BYTE';
                _0x2c1ec6[_0x2c1ec6.SHORT = 5122] = 'SHORT';
                _0x2c1ec6[_0x2c1ec6.INT = 5124] = 'INT';
                _0x2c1ec6[_0x2c1ec6.FLOAT = 5126] = 'FLOAT';
                _0x2c1ec6[_0x2c1ec6.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = 'FLOAT_32_UNSIGNED_INT_24_8_REV';
                _0x2c1ec6[_0x2c1ec6.HALF_FLOAT = 36193] = 'HALF_FLOAT';
            }(_0x2a7afe || (_0x2a7afe = {})));
            (function (_0x4e4795) {
                ;
                _0x4e4795[_0x4e4795.FLOAT = 0] = 'FLOAT';
                _0x4e4795[_0x4e4795.INT = 1] = 'INT';
                _0x4e4795[_0x4e4795.UINT = 2] = 'UINT';
            }(_0x9fab21 || (_0x9fab21 = {})));
            (function (_0x5bb9f4) {
                ;
                _0x5bb9f4[_0x5bb9f4.NEAREST = 0] = 'NEAREST';
                _0x5bb9f4[_0x5bb9f4.LINEAR = 1] = 'LINEAR';
            }(_0x3c79b6 || (_0x3c79b6 = {})));
            (function (_0x2f3d37) {
                ;
                _0x2f3d37[_0x2f3d37.CLAMP = 33071] = 'CLAMP';
                _0x2f3d37[_0x2f3d37.REPEAT = 10497] = 'REPEAT';
                _0x2f3d37[_0x2f3d37.MIRRORED_REPEAT = 33648] = 'MIRRORED_REPEAT';
            }(_0x9ca953 || (_0x9ca953 = {})));
            (function (_0x31d1ea) {
                ;
                _0x31d1ea[_0x31d1ea.OFF = 0] = 'OFF';
                _0x31d1ea[_0x31d1ea.POW2 = 1] = 'POW2';
                _0x31d1ea[_0x31d1ea.ON = 2] = 'ON';
                _0x31d1ea[_0x31d1ea.ON_MANUAL = 3] = 'ON_MANUAL';
            }(_0x27addf || (_0x27addf = {})));
            (function (_0x1a0a56) {
                ;
                _0x1a0a56[_0x1a0a56.NPM = 0] = 'NPM';
                _0x1a0a56[_0x1a0a56.UNPACK = 1] = 'UNPACK';
                _0x1a0a56[_0x1a0a56.PMA = 2] = 'PMA';
                _0x1a0a56[_0x1a0a56.NO_PREMULTIPLIED_ALPHA = 0] = 'NO_PREMULTIPLIED_ALPHA';
                _0x1a0a56[_0x1a0a56.PREMULTIPLY_ON_UPLOAD = 1] = 'PREMULTIPLY_ON_UPLOAD';
                _0x1a0a56[_0x1a0a56.PREMULTIPLY_ALPHA = 2] = 'PREMULTIPLY_ALPHA';
                _0x1a0a56[_0x1a0a56.PREMULTIPLIED_ALPHA = 2] = 'PREMULTIPLIED_ALPHA';
            }(_0x4faec7 || (_0x4faec7 = {})));
            (function (_0x5a11fb) {
                ;
                _0x5a11fb[_0x5a11fb.NO = 0] = 'NO';
                _0x5a11fb[_0x5a11fb.YES = 1] = 'YES';
                _0x5a11fb[_0x5a11fb.AUTO = 2] = 'AUTO';
                _0x5a11fb[_0x5a11fb.BLEND = 0] = 'BLEND';
                _0x5a11fb[_0x5a11fb.CLEAR = 1] = 'CLEAR';
                _0x5a11fb[_0x5a11fb.BLIT = 2] = 'BLIT';
            }(_0x76cb44 || (_0x76cb44 = {})));
            (function (_0x1b7c7a) {
                ;
                _0x1b7c7a[_0x1b7c7a.AUTO = 0] = 'AUTO';
                _0x1b7c7a[_0x1b7c7a.MANUAL = 1] = 'MANUAL';
            }(_0x5f14f8 || (_0x5f14f8 = {})));
            (function (_0x26b4c2) {
                ;
                _0x26b4c2.LOW = 'lowp';
                _0x26b4c2.MEDIUM = 'mediump';
                _0x26b4c2.HIGH = 'highp';
            }(_0x177567 || (_0x177567 = {})));
            (function (_0x43c44e) {
                ;
                _0x43c44e[_0x43c44e.NONE = 0] = 'NONE';
                _0x43c44e[_0x43c44e.SCISSOR = 1] = 'SCISSOR';
                _0x43c44e[_0x43c44e.STENCIL = 2] = 'STENCIL';
                _0x43c44e[_0x43c44e.SPRITE = 3] = 'SPRITE';
            }(_0x4a959a || (_0x4a959a = {})));
            (function (_0x4cecbd) {
                ;
                _0x4cecbd[_0x4cecbd.NONE = 0] = 'NONE';
                _0x4cecbd[_0x4cecbd.LOW = 2] = 'LOW';
                _0x4cecbd[_0x4cecbd.MEDIUM = 4] = 'MEDIUM';
                _0x4cecbd[_0x4cecbd.HIGH = 8] = 'HIGH';
            }(_0x4228cf || (_0x4228cf = {})));
            (function (_0x52b0d0) {
                ;
                _0x52b0d0[_0x52b0d0.ELEMENT_ARRAY_BUFFER = 34963] = 'ELEMENT_ARRAY_BUFFER';
                _0x52b0d0[_0x52b0d0.ARRAY_BUFFER = 34962] = 'ARRAY_BUFFER';
                _0x52b0d0[_0x52b0d0.UNIFORM_BUFFER = 35345] = 'UNIFORM_BUFFER';
            }(_0x13f919 || (_0x13f919 = {})));
            var _0xa3271c = {
                'MIPMAP_TEXTURES': _0x27addf.POW2,
                'ANISOTROPIC_LEVEL': 0,
                'RESOLUTION': 1,
                'FILTER_RESOLUTION': 1,
                'FILTER_MULTISAMPLE': _0x4228cf.NONE,
                'SPRITE_MAX_TEXTURES': function (_0x1592af) {
                    var _0x77a037, _0x428879 = true;
                    return (_0x52d3ae.tablet || _0x52d3ae.phone) && (_0x52d3ae.apple.device && (_0x77a037 = navigator.userAgent.match(/OS (\d+)_(\d+)?/)) && parseInt(_0x77a037[1], 10) < 11 && (_0x428879 = false), _0x52d3ae.android.device && (_0x77a037 = navigator.userAgent.match(/Android\s([0-9.]*)/)) && parseInt(_0x77a037[1], 10) < 7 && (_0x428879 = false)), _0x428879 ? 32 : 4;
                }(),
                'SPRITE_BATCH_SIZE': 4096,
                'RENDER_OPTIONS': {
                    'view': null,
                    'antialias': false,
                    'autoDensity': false,
                    'backgroundColor': 0,
                    'backgroundAlpha': 1,
                    'useContextAlpha': true,
                    'clearBeforeRender': true,
                    'preserveDrawingBuffer': false,
                    'width': 800,
                    'height': 600,
                    'legacy': false
                },
                'GC_MODE': _0x5f14f8.AUTO,
                'GC_MAX_IDLE': 3600,
                'GC_MAX_CHECK_COUNT': 600,
                'WRAP_MODE': _0x9ca953.CLAMP,
                'SCALE_MODE': _0x3c79b6.LINEAR,
                'PRECISION_VERTEX': _0x177567.HIGH,
                'PRECISION_FRAGMENT': _0x52d3ae.apple.device ? _0x177567.HIGH : _0x177567.MEDIUM,
                'CAN_UPLOAD_SAME_BUFFER': !_0x52d3ae.apple.device,
                'CREATE_IMAGE_BITMAP': false,
                'ROUND_PIXELS': false
            };
        },
        292: (_0x578dd3, _0x143c8d, _0x1a347f) => {
            'use strict';
            ;
            _0x1a347f.d(_0x143c8d, {
                '$u': () => _0x592881,
                'eq': () => _0x17eb99,
                'u8': () => _0x3203c3
            });
            var _0x15deea, _0x5a43a8 = _0x1a347f(550), _0xab413f = _0x1a347f(942), _0x479eba = _0x1a347f(679);
            function _0x3a4357() {
                return _0x15deea;
            }
            _0x1a347f(710);
            var _0x5e468c = function (_0x260b20, _0x3792e1) {
                ;
                return (_0x5e468c = Object.setPrototypeOf || { '__proto__': [] } instanceof Array && function (_0x1a2fb5, _0x5d8ada) {
                    ;
                    _0x1a2fb5['__proto__'] = _0x5d8ada;
                } || function (_0xe161ad, _0x5ce961) {
                    ;
                    for (var _0x248f96 in _0x5ce961)
                        Object.prototype.hasOwnProperty.call(_0x5ce961, _0x248f96) && (_0xe161ad[_0x248f96] = _0x5ce961[_0x248f96]);
                })(_0x260b20, _0x3792e1);
            };
            function _0x4e0218(_0x2a3fc2, _0x582f4d) {
                ;
                if ('function' != typeof _0x582f4d && null !== _0x582f4d) {
                    throw new TypeError('Class extends value ' + String(_0x582f4d) + ' is not a constructor or null');
                }
                function _0x60f13d() {
                    this.constructor = _0x2a3fc2;
                }
                _0x5e468c(_0x2a3fc2, _0x582f4d);
                _0x2a3fc2.prototype = null === _0x582f4d ? Object.create(_0x582f4d) : (_0x60f13d.prototype = _0x582f4d.prototype, new _0x60f13d());
            }
            var _0x302256 = function () {
                    ;
                    return (_0x302256 = Object.assign || function (_0x253353) {
                        ;
                        for (var _0xfaaef, _0x3b9f3b = 1, _0x4dff4c = arguments.length; _0x3b9f3b < _0x4dff4c; _0x3b9f3b++) {
                            for (var _0x5bd767 in _0xfaaef = arguments[_0x3b9f3b])
                                Object.prototype.hasOwnProperty.call(_0xfaaef, _0x5bd767) && (_0x253353[_0x5bd767] = _0xfaaef[_0x5bd767]);
                        }
                        return _0x253353;
                    }).apply(this, arguments);
                }, _0x1d7492 = [
                    'mp3',
                    'ogg',
                    'oga',
                    'opus',
                    'mpeg',
                    'wav',
                    'm4a',
                    'aiff',
                    'wma',
                    'mid',
                    'caf'
                ], _0x7d080c = {};
            !function (_0xc47633) {
                var _0x34cc13 = _0x302256({
                        'm4a': 'audio/mp4',
                        'oga': 'audio/ogg',
                        'opus': 'audio/ogg; codecs="opus"',
                        'caf': 'audio/x-caf; codecs="opus"'
                    }, _0xc47633 || {}), _0x3c2f67 = document.createElement('audio'), _0x4b5cb0 = { _0x397bf4: !!_0x40ddf1 || !!_0x55a18f };
                _0x1d7492.forEach(function (_0x397bf4) {
                    var _0x40ddf1 = _0x3c2f67.canPlayType('audio/'.concat(_0x397bf4)).replace(/^no$/, ''), _0x55a18f = _0x34cc13[_0x397bf4] ? _0x3c2f67.canPlayType(_0x34cc13[_0x397bf4]).replace(/^no$/, '') : '';
                    ;
                });
                Object.assign(_0x7d080c, _0x4b5cb0);
            }();
            ;
            function _0x4c785f(_0x2cadb2) {
                var _0x5d75fb = /\.(\{([^\}]+)\})(\?.*)?$/, _0x40742c = 'string' == typeof _0x2cadb2 ? _0x2cadb2 : _0x2cadb2.url;
                if (!_0x5d75fb.test(_0x40742c)) {
                    return _0x40742c;
                }
                for (var _0x27bd19 = _0x5d75fb.exec(_0x40742c), _0x46d2e7 = _0x27bd19[2].split(','), _0x453c2e = _0x46d2e7[_0x46d2e7.length - 1], _0x2af685 = 0, _0x264e21 = _0x46d2e7.length; _0x2af685 < _0x264e21; _0x2af685++) {
                    var _0x593829 = _0x46d2e7[_0x2af685];
                    if (_0x7d080c[_0x593829]) {
                        _0x453c2e = _0x593829;
                        break;
                    }
                }
                var _0x5d1393 = _0x40742c.replace(_0x27bd19[1], _0x453c2e);
                if ('string' != typeof _0x2cadb2) {
                    var _0x310129 = _0x2cadb2;
                    _0x310129.extension = _0x453c2e;
                    _0x310129.url = _0x5d1393;
                }
                return _0x5d1393;
            }
            var _0x56386e, _0x34f7ef = function () {
                    ;
                    function _0x2fd5ef() {
                    }
                    return _0x2fd5ef.add = function () {
                        ;
                        _0x2fd5ef.setLegacy(_0x3a4357().useLegacy);
                    }, _0x2fd5ef.setLegacy = function (_0x3af6d9) {
                        var _0x2f158c = _0x1d7492;
                        _0x3af6d9 ? _0x2f158c.forEach(function (_0x15242e) {
                            ;
                            _0x5a43a8.kC.setExtensionXhrType(_0x15242e, _0x5a43a8.kC.XHR_RESPONSE_TYPE.DEFAULT);
                            _0x5a43a8.kC.setExtensionLoadType(_0x15242e, _0x5a43a8.kC.LOAD_TYPE.AUDIO);
                        }) : _0x2f158c.forEach(function (_0x542525) {
                            ;
                            _0x5a43a8.kC.setExtensionXhrType(_0x542525, _0x5a43a8.kC.XHR_RESPONSE_TYPE.BUFFER);
                            _0x5a43a8.kC.setExtensionLoadType(_0x542525, _0x5a43a8.kC.LOAD_TYPE.XHR);
                        });
                    }, _0x2fd5ef.pre = function (_0x41d009, _0x25c1f8) {
                        _0x4c785f(_0x41d009);
                        _0x25c1f8();
                    }, _0x2fd5ef.use = function (_0x5e12b8, _0x14a9dc) {
                        ;
                        _0x5e12b8.data && _0x1d7492.indexOf(_0x5e12b8.extension) > -1 ? _0x5e12b8.sound = _0x3a4357().add(_0x5e12b8.name, {
                            'loaded': _0x14a9dc,
                            'preload': true,
                            'url': _0x5e12b8.url,
                            'source': _0x5e12b8.data
                        }) : _0x14a9dc();
                    }, _0x2fd5ef;
                }(), _0x5dc9c1 = 0, _0x5e4912 = function (_0x18cb13) {
                    ;
                    function _0x5abef0(_0x582af2) {
                        var _0x514b4b = _0x18cb13.call(this) || this;
                        return _0x514b4b.id = _0x5dc9c1++, _0x514b4b.init(_0x582af2), _0x514b4b;
                    }
                    return _0x4e0218(_0x5abef0, _0x18cb13), _0x5abef0.prototype.set = function (_0x3445eb, _0x531bca) {
                        ;
                        if (void 0 === this[_0x3445eb]) {
                            throw new Error('Property with name '.concat(_0x3445eb, ' does not exist.'));
                        }
                        switch (_0x3445eb) {
                        case 'speed':
                            this.speed = _0x531bca;
                            break;
                        case 'volume':
                            this.volume = _0x531bca;
                            break;
                        case 'paused':
                            this.paused = _0x531bca;
                            break;
                        case 'loop':
                            this.loop = _0x531bca;
                            break;
                        case 'muted':
                            this.muted = _0x531bca;
                        }
                        return this;
                    }, Object.defineProperty(_0x5abef0.prototype, 'progress', {
                        'get': function () {
                            ;
                            return this['_source'].currentTime / this['_duration'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x5abef0.prototype, 'paused', {
                        'get': function () {
                            ;
                            return this['_paused'];
                        },
                        'set': function (_0x25202d) {
                            ;
                            this['_paused'] = _0x25202d;
                            this.refreshPaused();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x5abef0.prototype['_onPlay'] = function () {
                        ;
                        this['_playing'] = true;
                    }, _0x5abef0.prototype['_onPause'] = function () {
                        ;
                        this['_playing'] = false;
                    }, _0x5abef0.prototype.init = function (_0xc6d3f8) {
                        ;
                        this['_playing'] = false;
                        this['_duration'] = _0xc6d3f8.source.duration;
                        var _0x2c25d8 = this['_source'] = _0xc6d3f8.source.cloneNode(false);
                        _0x2c25d8.src = _0xc6d3f8.parent.url;
                        _0x2c25d8.onplay = this['_onPlay'].bind(this);
                        _0x2c25d8.onpause = this['_onPause'].bind(this);
                        _0xc6d3f8.context.on('refresh', this.refresh, this);
                        _0xc6d3f8.context.on('refreshPaused', this.refreshPaused, this);
                        this['_media'] = _0xc6d3f8;
                    }, _0x5abef0.prototype['_internalStop'] = function () {
                        ;
                        this['_source'] && this['_playing'] && (this['_source'].onended = null, this['_source'].pause());
                    }, _0x5abef0.prototype.stop = function () {
                        ;
                        this['_internalStop']();
                        this['_source'] && this.emit('stop');
                    }, Object.defineProperty(_0x5abef0.prototype, 'speed', {
                        'get': function () {
                            return this['_speed'];
                        },
                        'set': function (_0x4881c4) {
                            ;
                            this['_speed'] = _0x4881c4;
                            this.refresh();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x5abef0.prototype, 'volume', {
                        'get': function () {
                            ;
                            return this['_volume'];
                        },
                        'set': function (_0x3078ed) {
                            ;
                            this['_volume'] = _0x3078ed;
                            this.refresh();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x5abef0.prototype, 'loop', {
                        'get': function () {
                            ;
                            return this['_loop'];
                        },
                        'set': function (_0x1f5971) {
                            ;
                            this['_loop'] = _0x1f5971;
                            this.refresh();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x5abef0.prototype, 'muted', {
                        'get': function () {
                            ;
                            return this['_muted'];
                        },
                        'set': function (_0x1db82f) {
                            ;
                            this['_muted'] = _0x1db82f;
                            this.refresh();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x5abef0.prototype, 'filters', {
                        'get': function () {
                            return null;
                        },
                        'set': function (_0x2438a2) {
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x5abef0.prototype.refresh = function () {
                        var _0x38b098 = this['_media'].context, _0x141142 = this['_media'].parent;
                        this['_source'].loop = this['_loop'] || _0x141142.loop;
                        var _0x12207e = _0x38b098.volume * (_0x38b098.muted ? 0 : 1), _0x5502bf = _0x141142.volume * (_0x141142.muted ? 0 : 1), _0x5a35af = this['_volume'] * (this['_muted'] ? 0 : 1);
                        this['_source'].volume = _0x5a35af * _0x12207e * _0x5502bf;
                        this['_source'].playbackRate = this['_speed'] * _0x38b098.speed * _0x141142.speed;
                    }, _0x5abef0.prototype.refreshPaused = function () {
                        var _0x40cfdf = this['_media'].context, _0x303e5a = this['_media'].parent, _0x1284a3 = this['_paused'] || _0x303e5a.paused || _0x40cfdf.paused;
                        _0x1284a3 !== this['_pausedReal'] && (this['_pausedReal'] = _0x1284a3, _0x1284a3 ? (this['_internalStop'](), this.emit('paused')) : (this.emit('resumed'), this.play({
                            'start': this['_source'].currentTime,
                            'end': this['_end'],
                            'volume': this['_volume'],
                            'speed': this['_speed'],
                            'loop': this['_loop']
                        })), this.emit('pause', _0x1284a3));
                    }, _0x5abef0.prototype.play = function (_0x5b39c4) {
                        var _0x1fb7c1 = this, _0x278901 = _0x5b39c4.start, _0x2a045f = _0x5b39c4.end, _0x1cba72 = _0x5b39c4.speed, _0x526fd7 = _0x5b39c4.loop, _0x620879 = _0x5b39c4.volume, _0x12ec01 = _0x5b39c4.muted;
                        this['_speed'] = _0x1cba72;
                        this['_volume'] = _0x620879;
                        this['_loop'] = !!_0x526fd7;
                        this['_muted'] = _0x12ec01;
                        this.refresh();
                        this.loop && null !== _0x2a045f && (this.loop = false);
                        this['_start'] = _0x278901;
                        this['_end'] = _0x2a045f || this['_duration'];
                        this['_start'] = Math.max(0, this['_start'] - _0x5abef0.PADDING);
                        this['_end'] = Math.min(this['_end'] + _0x5abef0.PADDING, this['_duration']);
                        this['_source'].onloadedmetadata = function () {
                            ;
                            _0x1fb7c1['_source'] && (_0x1fb7c1['_source'].currentTime = _0x278901, _0x1fb7c1['_source'].onloadedmetadata = null, _0x1fb7c1.emit('progress', _0x278901, _0x1fb7c1['_duration']), _0x479eba.vB.shared.add(_0x1fb7c1['_onUpdate'], _0x1fb7c1));
                        };
                        this['_source'].onended = this['_onComplete'].bind(this);
                        this['_source'].play();
                        this.emit('start');
                    }, _0x5abef0.prototype['_onUpdate'] = function () {
                        ;
                        this.emit('progress', this.progress, this['_duration']);
                        this['_source'].currentTime >= this['_end'] && !this['_source'].loop && this['_onComplete']();
                    }, _0x5abef0.prototype['_onComplete'] = function () {
                        ;
                        _0x479eba.vB.shared.remove(this['_onUpdate'], this);
                        this['_internalStop']();
                        this.emit('progress', 1, this['_duration']);
                        this.emit('end', this);
                    }, _0x5abef0.prototype.destroy = function () {
                        ;
                        _0x479eba.vB.shared.remove(this['_onUpdate'], this);
                        this.removeAllListeners();
                        var _0x4f1534 = this['_source'];
                        _0x4f1534 && (_0x4f1534.onended = null, _0x4f1534.onplay = null, _0x4f1534.onpause = null, this['_internalStop']());
                        this['_source'] = null;
                        this['_speed'] = 1;
                        this['_volume'] = 1;
                        this['_loop'] = false;
                        this['_end'] = null;
                        this['_start'] = 0;
                        this['_duration'] = 0;
                        this['_playing'] = false;
                        this['_pausedReal'] = false;
                        this['_paused'] = false;
                        this['_muted'] = false;
                        this['_media'] && (this['_media'].context.off('refresh', this.refresh, this), this['_media'].context.off('refreshPaused', this.refreshPaused, this), this['_media'] = null);
                    }, _0x5abef0.prototype.toString = function () {
                        ;
                        return '[HTMLAudioInstance id='.concat(this.id, ']');
                    }, _0x5abef0.PADDING = 0.1, _0x5abef0;
                }(_0xab413f.vp), _0x5bb207 = function (_0x466bf5) {
                    ;
                    function _0x3767b1() {
                        ;
                        return null !== _0x466bf5 && _0x466bf5.apply(this, arguments) || this;
                    }
                    return _0x4e0218(_0x3767b1, _0x466bf5), _0x3767b1.prototype.init = function (_0x44ead0) {
                        ;
                        this.parent = _0x44ead0;
                        this['_source'] = _0x44ead0.options.source || new Audio();
                        _0x44ead0.url && (this['_source'].src = _0x44ead0.url);
                    }, _0x3767b1.prototype.create = function () {
                        return new _0x5e4912(this);
                    }, Object.defineProperty(_0x3767b1.prototype, 'isPlayable', {
                        'get': function () {
                            ;
                            return !!this['_source'] && 4 === this['_source'].readyState;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x3767b1.prototype, 'duration', {
                        'get': function () {
                            ;
                            return this['_source'].duration;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x3767b1.prototype, 'context', {
                        'get': function () {
                            ;
                            return this.parent.context;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x3767b1.prototype, 'filters', {
                        'get': function () {
                            return null;
                        },
                        'set': function (_0x37eb43) {
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x3767b1.prototype.destroy = function () {
                        ;
                        this.removeAllListeners();
                        this.parent = null;
                        this['_source'] && (this['_source'].src = '', this['_source'].load(), this['_source'] = null);
                    }, Object.defineProperty(_0x3767b1.prototype, 'source', {
                        'get': function () {
                            return this['_source'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x3767b1.prototype.load = function (_0x12af97) {
                        var _0x1c38ba = this['_source'], _0x451f7a = this.parent;
                        if (4 !== _0x1c38ba.readyState) {
                            if (_0x451f7a.url) {
                                _0x1c38ba.src = _0x451f7a.url;
                                var _0xbe2344 = function () {
                                        ;
                                        _0x1d13e7();
                                        _0x451f7a.isLoaded = true;
                                        var _0x13a22e = _0x451f7a.autoPlayStart();
                                        _0x12af97 && _0x12af97(null, _0x451f7a, _0x13a22e);
                                    }, _0x126c56 = function () {
                                        ;
                                        _0x1d13e7();
                                        _0x12af97 && _0x12af97(new Error('Sound loading has been aborted'));
                                    }, _0x487810 = function () {
                                        ;
                                        _0x1d13e7();
                                        var _0x491105 = 'Failed to load audio element (code: '.concat(_0x1c38ba.error.code, ')');
                                        _0x12af97 && _0x12af97(new Error(_0x491105));
                                    }, _0x1d13e7 = function () {
                                        ;
                                        _0x1c38ba.removeEventListener('canplaythrough', _0xbe2344);
                                        _0x1c38ba.removeEventListener('load', _0xbe2344);
                                        _0x1c38ba.removeEventListener('abort', _0x126c56);
                                        _0x1c38ba.removeEventListener('error', _0x487810);
                                    };
                                _0x1c38ba.addEventListener('canplaythrough', _0xbe2344, false);
                                _0x1c38ba.addEventListener('load', _0xbe2344, false);
                                _0x1c38ba.addEventListener('abort', _0x126c56, false);
                                _0x1c38ba.addEventListener('error', _0x487810, false);
                                _0x1c38ba.load();
                            } else {
                                _0x12af97(new Error('sound.url or sound.source must be set'));
                            }
                        } else {
                            _0x451f7a.isLoaded = true;
                            var _0x438ce5 = _0x451f7a.autoPlayStart();
                            _0x12af97 && setTimeout(function () {
                                _0x12af97(null, _0x451f7a, _0x438ce5);
                            }, 0);
                        }
                    }, _0x3767b1;
                }(_0xab413f.vp), _0x30de5c = function () {
                    ;
                    function _0x494a5f(_0x12c45f, _0x2fb918) {
                        ;
                        this.parent = _0x12c45f;
                        Object.assign(this, _0x2fb918);
                        this.duration = this.end - this.start;
                    }
                    return _0x494a5f.prototype.play = function (_0x60f45f) {
                        ;
                        return this.parent.play({
                            'complete': _0x60f45f,
                            'speed': this.speed || this.parent.speed,
                            'end': this.end,
                            'start': this.start,
                            'loop': this.loop
                        });
                    }, _0x494a5f.prototype.destroy = function () {
                        ;
                        this.parent = null;
                    }, _0x494a5f;
                }(), _0xede001 = function () {
                    function _0x5d733b() {
                    }
                    return _0x5d733b.setParamValue = function (_0x54cc8a, _0x651646) {
                        ;
                        if (_0x54cc8a.setValueAtTime) {
                            var _0x2c0335 = _0x3a4357().context;
                            _0x54cc8a.setValueAtTime(_0x651646, _0x2c0335.audioContext.currentTime);
                        } else {
                            _0x54cc8a.value = _0x651646;
                        }
                        return _0x651646;
                    }, _0x5d733b;
                }(), _0x2ad5a8 = 0, _0x2344c9 = function (_0x3361de) {
                    ;
                    function _0xa42100(_0x343c13) {
                        var _0xb0ea87 = _0x3361de.call(this) || this;
                        return _0xb0ea87.id = _0x2ad5a8++, _0xb0ea87['_media'] = null, _0xb0ea87['_paused'] = false, _0xb0ea87['_muted'] = false, _0xb0ea87['_elapsed'] = 0, _0xb0ea87.init(_0x343c13), _0xb0ea87;
                    }
                    return _0x4e0218(_0xa42100, _0x3361de), _0xa42100.prototype.set = function (_0x443e0c, _0x3f46dd) {
                        ;
                        if (void 0 === this[_0x443e0c]) {
                            throw new Error('Property with name '.concat(_0x443e0c, ' does not exist.'));
                        }
                        switch (_0x443e0c) {
                        case 'speed':
                            this.speed = _0x3f46dd;
                            break;
                        case 'volume':
                            this.volume = _0x3f46dd;
                            break;
                        case 'muted':
                            this.muted = _0x3f46dd;
                            break;
                        case 'loop':
                            this.loop = _0x3f46dd;
                            break;
                        case 'paused':
                            this.paused = _0x3f46dd;
                        }
                        return this;
                    }, _0xa42100.prototype.stop = function () {
                        ;
                        this['_source'] && (this['_internalStop'](), this.emit('stop'));
                    }, Object.defineProperty(_0xa42100.prototype, 'speed', {
                        'get': function () {
                            ;
                            return this['_speed'];
                        },
                        'set': function (_0x1ef351) {
                            ;
                            this['_speed'] = _0x1ef351;
                            this.refresh();
                            this['_update'](true);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0xa42100.prototype, 'volume', {
                        'get': function () {
                            ;
                            return this['_volume'];
                        },
                        'set': function (_0x4bc906) {
                            ;
                            this['_volume'] = _0x4bc906;
                            this.refresh();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0xa42100.prototype, 'muted', {
                        'get': function () {
                            ;
                            return this['_muted'];
                        },
                        'set': function (_0x5da639) {
                            ;
                            this['_muted'] = _0x5da639;
                            this.refresh();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0xa42100.prototype, 'loop', {
                        'get': function () {
                            ;
                            return this['_loop'];
                        },
                        'set': function (_0x14daf6) {
                            ;
                            this['_loop'] = _0x14daf6;
                            this.refresh();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0xa42100.prototype, 'filters', {
                        'get': function () {
                            ;
                            return this['_filters'];
                        },
                        'set': function (_0x54484) {
                            var _0x29ce25;
                            this['_filters'] && (null === (_0x29ce25 = this['_filters']) || void 0 === _0x29ce25 || _0x29ce25.filter(function (_0xa4f894) {
                                return _0xa4f894;
                            }).forEach(function (_0x13aff5) {
                                return _0x13aff5.disconnect();
                            }), this['_filters'] = null, this['_source'].connect(this['_gain']));
                            this['_filters'] = (null == _0x54484 ? void 0 : _0x54484.length) ? _0x54484.slice(0) : null;
                            this.refresh();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0xa42100.prototype.refresh = function () {
                        ;
                        if (this['_source']) {
                            var _0x2aae6e = this['_media'].context, _0xcaee8a = this['_media'].parent;
                            this['_source'].loop = this['_loop'] || _0xcaee8a.loop;
                            var _0x6e51ca = _0x2aae6e.volume * (_0x2aae6e.muted ? 0 : 1), _0x5ae4be = _0xcaee8a.volume * (_0xcaee8a.muted ? 0 : 1), _0x5ea668 = this['_volume'] * (this['_muted'] ? 0 : 1);
                            _0xede001.setParamValue(this['_gain'].gain, _0x5ea668 * _0x5ae4be * _0x6e51ca);
                            _0xede001.setParamValue(this['_source'].playbackRate, this['_speed'] * _0xcaee8a.speed * _0x2aae6e.speed);
                            this.applyFilters();
                        }
                    }, _0xa42100.prototype.applyFilters = function () {
                        var _0x56a533;
                        if (null === (_0x56a533 = this['_filters']) || void 0 === _0x56a533 ? void 0 : _0x56a533.length) {
                            this['_source'].disconnect();
                            var _0x70dcaf = this['_source'];
                            this['_filters'].forEach(function (_0x24028c) {
                                ;
                                _0x70dcaf.connect(_0x24028c.destination);
                                _0x70dcaf = _0x24028c;
                            });
                            _0x70dcaf.connect(this['_gain']);
                        }
                    }, _0xa42100.prototype.refreshPaused = function () {
                        var _0x1a3849 = this['_media'].context, _0x45224e = this['_media'].parent, _0x57d515 = this['_paused'] || _0x45224e.paused || _0x1a3849.paused;
                        _0x57d515 !== this['_pausedReal'] && (this['_pausedReal'] = _0x57d515, _0x57d515 ? (this['_internalStop'](), this.emit('paused')) : (this.emit('resumed'), this.play({
                            'start': this['_elapsed'] % this['_duration'],
                            'end': this['_end'],
                            'speed': this['_speed'],
                            'loop': this['_loop'],
                            'volume': this['_volume']
                        })), this.emit('pause', _0x57d515));
                    }, _0xa42100.prototype.play = function (_0xcb318) {
                        var _0x40b2 = _0xcb318.start, _0x1e740f = _0xcb318.end, _0x24c958 = _0xcb318.speed, _0x534f = _0xcb318.loop, _0x4970c3 = _0xcb318.volume, _0x1d9d5f = _0xcb318.muted, _0x23f3ed = _0xcb318.filters;
                        this['_paused'] = false;
                        var _0xe97a58 = this['_media'].nodes.cloneBufferSource(), _0x59dfa2 = _0xe97a58.source, _0x45d50d = _0xe97a58.gain;
                        this['_source'] = _0x59dfa2;
                        this['_gain'] = _0x45d50d;
                        this['_speed'] = _0x24c958;
                        this['_volume'] = _0x4970c3;
                        this['_loop'] = !!_0x534f;
                        this['_muted'] = _0x1d9d5f;
                        this['_filters'] = _0x23f3ed;
                        this.refresh();
                        var _0x1a05a5 = this['_source'].buffer.duration;
                        this['_duration'] = _0x1a05a5;
                        this['_end'] = _0x1e740f;
                        this['_lastUpdate'] = this['_now']();
                        this['_elapsed'] = _0x40b2;
                        this['_source'].onended = this['_onComplete'].bind(this);
                        this['_loop'] ? (this['_source'].loopEnd = _0x1e740f, this['_source'].loopStart = _0x40b2, this['_source'].start(0, _0x40b2)) : _0x1e740f ? this['_source'].start(0, _0x40b2, _0x1e740f - _0x40b2) : this['_source'].start(0, _0x40b2);
                        this.emit('start');
                        this['_update'](true);
                        this.enableTicker(true);
                    }, _0xa42100.prototype.enableTicker = function (_0x2a1862) {
                        ;
                        _0x479eba.vB.shared.remove(this['_updateListener'], this);
                        _0x2a1862 && _0x479eba.vB.shared.add(this['_updateListener'], this);
                    }, Object.defineProperty(_0xa42100.prototype, 'progress', {
                        'get': function () {
                            ;
                            return this['_progress'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0xa42100.prototype, 'paused', {
                        'get': function () {
                            ;
                            return this['_paused'];
                        },
                        'set': function (_0xb615f2) {
                            ;
                            this['_paused'] = _0xb615f2;
                            this.refreshPaused();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0xa42100.prototype.destroy = function () {
                        var _0x41aa7f;
                        this.removeAllListeners();
                        this['_internalStop']();
                        this['_gain'] && (this['_gain'].disconnect(), this['_gain'] = null);
                        this['_media'] && (this['_media'].context.events.off('refresh', this.refresh, this), this['_media'].context.events.off('refreshPaused', this.refreshPaused, this), this['_media'] = null);
                        null === (_0x41aa7f = this['_filters']) || void 0 === _0x41aa7f || _0x41aa7f.forEach(function (_0x68db5f) {
                            ;
                            return _0x68db5f.disconnect();
                        });
                        this['_filters'] = null;
                        this['_end'] = null;
                        this['_speed'] = 1;
                        this['_volume'] = 1;
                        this['_loop'] = false;
                        this['_elapsed'] = 0;
                        this['_duration'] = 0;
                        this['_paused'] = false;
                        this['_muted'] = false;
                        this['_pausedReal'] = false;
                    }, _0xa42100.prototype.toString = function () {
                        ;
                        return '[WebAudioInstance id='.concat(this.id, ']');
                    }, _0xa42100.prototype['_now'] = function () {
                        ;
                        return this['_media'].context.audioContext.currentTime;
                    }, _0xa42100.prototype['_updateListener'] = function () {
                        ;
                        this['_update']();
                    }, _0xa42100.prototype['_update'] = function (_0x49dccf) {
                        ;
                        if (void 0 === _0x49dccf && (_0x49dccf = false), this['_source']) {
                            var _0x444c7d = this['_now'](), _0xe95664 = _0x444c7d - this['_lastUpdate'];
                            if (_0xe95664 > 0 || _0x49dccf) {
                                var _0x2ab32f = this['_source'].playbackRate.value;
                                this['_elapsed'] += _0xe95664 * _0x2ab32f;
                                this['_lastUpdate'] = _0x444c7d;
                                var _0x2e3038 = this['_duration'], _0x1bf77f = void 0;
                                if (this['_source'].loopStart) {
                                    var _0x1f4d8a = this['_source'].loopEnd - this['_source'].loopStart;
                                    _0x1bf77f = (this['_source'].loopStart + this['_elapsed'] % _0x1f4d8a) / _0x2e3038;
                                } else {
                                    _0x1bf77f = this['_elapsed'] % _0x2e3038 / _0x2e3038;
                                }
                                this['_progress'] = _0x1bf77f;
                                this.emit('progress', this['_progress'], _0x2e3038);
                            }
                        }
                    }, _0xa42100.prototype.init = function (_0x120932) {
                        ;
                        this['_media'] = _0x120932;
                        _0x120932.context.events.on('refresh', this.refresh, this);
                        _0x120932.context.events.on('refreshPaused', this.refreshPaused, this);
                    }, _0xa42100.prototype['_internalStop'] = function () {
                        ;
                        if (this['_source']) {
                            this.enableTicker(false);
                            this['_source'].onended = null;
                            this['_source'].stop(0);
                            this['_source'].disconnect();
                            try {
                                this['_source'].buffer = null;
                            } catch (_0x45892a) {
                            }
                            this['_source'] = null;
                        }
                    }, _0xa42100.prototype['_onComplete'] = function () {
                        ;
                        if (this['_source']) {
                            this.enableTicker(false);
                            this['_source'].onended = null;
                            this['_source'].disconnect();
                            try {
                                this['_source'].buffer = null;
                            } catch (_0x364bb7) {
                            }
                        }
                        this['_source'] = null;
                        this['_progress'] = 1;
                        this.emit('progress', 1, this['_duration']);
                        this.emit('end', this);
                    }, _0xa42100;
                }(_0xab413f.vp), _0x23490f = function () {
                    ;
                    function _0x30087d(_0x2a945a, _0x3ce359) {
                        ;
                        this['_output'] = _0x3ce359;
                        this['_input'] = _0x2a945a;
                    }
                    return Object.defineProperty(_0x30087d.prototype, 'destination', {
                        'get': function () {
                            ;
                            return this['_input'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x30087d.prototype, 'filters', {
                        'get': function () {
                            ;
                            return this['_filters'];
                        },
                        'set': function (_0x50985a) {
                            var _0x3b6e2a = this;
                            if (this['_filters'] && (this['_filters'].forEach(function (_0x25e7b1) {
                                    ;
                                    _0x25e7b1 && _0x25e7b1.disconnect();
                                }), this['_filters'] = null, this['_input'].connect(this['_output'])), _0x50985a && _0x50985a.length) {
                                this['_filters'] = _0x50985a.slice(0);
                                this['_input'].disconnect();
                                var _0x508dae = null;
                                _0x50985a.forEach(function (_0x3285d2) {
                                    ;
                                    null === _0x508dae ? _0x3b6e2a['_input'].connect(_0x3285d2.destination) : _0x508dae.connect(_0x3285d2.destination);
                                    _0x508dae = _0x3285d2;
                                });
                                _0x508dae.connect(this['_output']);
                            }
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x30087d.prototype.destroy = function () {
                        ;
                        this.filters = null;
                        this['_input'] = null;
                        this['_output'] = null;
                    }, _0x30087d;
                }(), _0x53b922 = function (_0x288069) {
                    ;
                    function _0x29b130(_0x1b04f4) {
                        var _0x589961 = this, _0x21801f = _0x1b04f4.audioContext, _0x4a9a66 = _0x21801f.createBufferSource(), _0x30dac9 = _0x21801f.createGain(), _0x4265bc = _0x21801f.createAnalyser();
                        return _0x4a9a66.connect(_0x4265bc), _0x4265bc.connect(_0x30dac9), _0x30dac9.connect(_0x1b04f4.destination), (_0x589961 = _0x288069.call(this, _0x4265bc, _0x30dac9) || this).context = _0x1b04f4, _0x589961.bufferSource = _0x4a9a66, _0x589961.gain = _0x30dac9, _0x589961.analyser = _0x4265bc, _0x589961;
                    }
                    return _0x4e0218(_0x29b130, _0x288069), Object.defineProperty(_0x29b130.prototype, 'script', {
                        'get': function () {
                            ;
                            return this['_script'] || (this['_script'] = this.context.audioContext.createScriptProcessor(_0x29b130.BUFFER_SIZE), this['_script'].connect(this.context.destination)), this['_script'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x29b130.prototype.destroy = function () {
                        ;
                        _0x288069.prototype.destroy.call(this);
                        this.bufferSource.disconnect();
                        this['_script'] && this['_script'].disconnect();
                        this.gain.disconnect();
                        this.analyser.disconnect();
                        this.bufferSource = null;
                        this['_script'] = null;
                        this.gain = null;
                        this.analyser = null;
                        this.context = null;
                    }, _0x29b130.prototype.cloneBufferSource = function () {
                        var _0x2e2a9b = this.bufferSource, _0xada62c = this.context.audioContext.createBufferSource();
                        _0xada62c.buffer = _0x2e2a9b.buffer;
                        _0xede001.setParamValue(_0xada62c.playbackRate, _0x2e2a9b.playbackRate.value);
                        _0xada62c.loop = _0x2e2a9b.loop;
                        var _0x1c5090 = this.context.audioContext.createGain();
                        return _0xada62c.connect(_0x1c5090), _0x1c5090.connect(this.destination), {
                            'source': _0xada62c,
                            'gain': _0x1c5090
                        };
                    }, Object.defineProperty(_0x29b130.prototype, 'bufferSize', {
                        'get': function () {
                            ;
                            return this.script.bufferSize;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x29b130.BUFFER_SIZE = 0, _0x29b130;
                }(_0x23490f), _0x4d9f34 = function () {
                    ;
                    function _0x4dc086() {
                    }
                    return _0x4dc086.prototype.init = function (_0x1cf2bf) {
                        ;
                        this.parent = _0x1cf2bf;
                        this['_nodes'] = new _0x53b922(this.context);
                        this['_source'] = this['_nodes'].bufferSource;
                        this.source = _0x1cf2bf.options.source;
                    }, _0x4dc086.prototype.destroy = function () {
                        ;
                        this.parent = null;
                        this['_nodes'].destroy();
                        this['_nodes'] = null;
                        try {
                            this['_source'].buffer = null;
                        } catch (_0x319c45) {
                        }
                        this['_source'] = null;
                        this.source = null;
                    }, _0x4dc086.prototype.create = function () {
                        return new _0x2344c9(this);
                    }, Object.defineProperty(_0x4dc086.prototype, 'context', {
                        'get': function () {
                            ;
                            return this.parent.context;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x4dc086.prototype, 'isPlayable', {
                        'get': function () {
                            ;
                            return !!this['_source'] && !!this['_source'].buffer;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x4dc086.prototype, 'filters', {
                        'get': function () {
                            return this['_nodes'].filters;
                        },
                        'set': function (_0x15926b) {
                            ;
                            this['_nodes'].filters = _0x15926b;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x4dc086.prototype, 'duration', {
                        'get': function () {
                            ;
                            return this['_source'].buffer.duration;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x4dc086.prototype, 'buffer', {
                        'get': function () {
                            ;
                            return this['_source'].buffer;
                        },
                        'set': function (_0x3a672b) {
                            this['_source'].buffer = _0x3a672b;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x4dc086.prototype, 'nodes', {
                        'get': function () {
                            ;
                            return this['_nodes'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x4dc086.prototype.load = function (_0x443a74) {
                        ;
                        this.source ? this['_decode'](this.source, _0x443a74) : this.parent.url ? this['_loadUrl'](_0x443a74) : _0x443a74 && _0x443a74(new Error('sound.url or sound.source must be set'));
                    }, _0x4dc086.prototype['_loadUrl'] = function (_0x39ebc7) {
                        var _0x2f4d50 = this, _0x273678 = new XMLHttpRequest(), _0x1d9e77 = this.parent.url;
                        _0x273678.open('GET', _0x1d9e77, true);
                        _0x273678.responseType = 'arraybuffer';
                        _0x273678.onload = function () {
                            ;
                            _0x2f4d50.source = _0x273678.response;
                            _0x2f4d50['_decode'](_0x273678.response, _0x39ebc7);
                        };
                        _0x273678.send();
                    }, _0x4dc086.prototype['_decode'] = function (_0x2e37e3, _0xbe3741) {
                        var _0x5eb2f0 = this, _0xc6ecb4 = function (_0x5e2f81, _0x3e6b21) {
                                ;
                                if (_0x5e2f81) {
                                    _0xbe3741 && _0xbe3741(_0x5e2f81);
                                } else {
                                    _0x5eb2f0.parent.isLoaded = true;
                                    _0x5eb2f0.buffer = _0x3e6b21;
                                    var _0x5a80dd = _0x5eb2f0.parent.autoPlayStart();
                                    _0xbe3741 && _0xbe3741(null, _0x5eb2f0.parent, _0x5a80dd);
                                }
                            };
                        _0x2e37e3 instanceof AudioBuffer ? _0xc6ecb4(null, _0x2e37e3) : this.parent.context.decode(_0x2e37e3, _0xc6ecb4);
                    }, _0x4dc086;
                }(), _0x592881 = function () {
                    ;
                    function _0x49233a(_0x18955d, _0x24965d) {
                        ;
                        this.media = _0x18955d;
                        this.options = _0x24965d;
                        this['_instances'] = [];
                        this['_sprites'] = {};
                        this.media.init(this);
                        var _0x593210 = _0x24965d.complete;
                        this['_autoPlayOptions'] = _0x593210 ? { 'complete': _0x593210 } : null;
                        this.isLoaded = false;
                        this.isPlaying = false;
                        this.autoPlay = _0x24965d.autoPlay;
                        this.singleInstance = _0x24965d.singleInstance;
                        this.preload = _0x24965d.preload || this.autoPlay;
                        this.url = _0x24965d.url;
                        this.speed = _0x24965d.speed;
                        this.volume = _0x24965d.volume;
                        this.loop = _0x24965d.loop;
                        _0x24965d.sprites && this.addSprites(_0x24965d.sprites);
                        this.preload && this['_preload'](_0x24965d.loaded);
                    }
                    return _0x49233a.from = function (_0x32df91) {
                        var _0x2980ee = {};
                        return 'string' == typeof _0x32df91 ? _0x2980ee.url = _0x32df91 : _0x32df91 instanceof ArrayBuffer || _0x32df91 instanceof AudioBuffer || _0x32df91 instanceof HTMLAudioElement ? _0x2980ee.source = _0x32df91 : _0x2980ee = _0x32df91, (_0x2980ee = _0x302256({
                            'autoPlay': false,
                            'singleInstance': false,
                            'url': null,
                            'source': null,
                            'preload': false,
                            'volume': 1,
                            'speed': 1,
                            'complete': null,
                            'loaded': null,
                            'loop': false
                        }, _0x2980ee)).url && (_0x2980ee.url = _0x4c785f(_0x2980ee.url)), Object.freeze(_0x2980ee), new _0x49233a(_0x3a4357().useLegacy ? new _0x5bb207() : new _0x4d9f34(), _0x2980ee);
                    }, Object.defineProperty(_0x49233a.prototype, 'context', {
                        'get': function () {
                            ;
                            return _0x3a4357().context;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x49233a.prototype.pause = function () {
                        ;
                        return this.isPlaying = false, this.paused = true, this;
                    }, _0x49233a.prototype.resume = function () {
                        ;
                        return this.isPlaying = this['_instances'].length > 0, this.paused = false, this;
                    }, Object.defineProperty(_0x49233a.prototype, 'paused', {
                        'get': function () {
                            ;
                            return this['_paused'];
                        },
                        'set': function (_0xcdd3c8) {
                            ;
                            this['_paused'] = _0xcdd3c8;
                            this.refreshPaused();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x49233a.prototype, 'speed', {
                        'get': function () {
                            return this['_speed'];
                        },
                        'set': function (_0xf919bb) {
                            ;
                            this['_speed'] = _0xf919bb;
                            this.refresh();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x49233a.prototype, 'filters', {
                        'get': function () {
                            ;
                            return this.media.filters;
                        },
                        'set': function (_0x1197ee) {
                            ;
                            this.media.filters = _0x1197ee;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x49233a.prototype.addSprites = function (_0x5f2130, _0x1ef155) {
                        ;
                        if ('object' == typeof _0x5f2130) {
                            var _0x436ec2 = { _0x20e547: this.addSprites(_0x20e547, _0x5f2130[_0x20e547]) };
                            for (var _0x20e547 in _0x5f2130);
                            return _0x436ec2;
                        }
                        var _0x301947 = new _0x30de5c(this, _0x1ef155);
                        return this['_sprites'][_0x5f2130] = _0x301947, _0x301947;
                    }, _0x49233a.prototype.destroy = function () {
                        ;
                        this['_removeInstances']();
                        this.removeSprites();
                        this.media.destroy();
                        this.media = null;
                        this['_sprites'] = null;
                        this['_instances'] = null;
                    }, _0x49233a.prototype.removeSprites = function (_0x4d7fa7) {
                        ;
                        if (_0x4d7fa7) {
                            var _0x150fac = this['_sprites'][_0x4d7fa7];
                            void 0 !== _0x150fac && (_0x150fac.destroy(), delete this['_sprites'][_0x4d7fa7]);
                        } else {
                            for (var _0x4a48b2 in this['_sprites'])
                                this.removeSprites(_0x4a48b2);
                        }
                        return this;
                    }, Object.defineProperty(_0x49233a.prototype, 'isPlayable', {
                        'get': function () {
                            ;
                            return this.isLoaded && this.media && this.media.isPlayable;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x49233a.prototype.stop = function () {
                        ;
                        if (!this.isPlayable) {
                            return this.autoPlay = false, this['_autoPlayOptions'] = null, this;
                        }
                        this.isPlaying = false;
                        for (var _0x5f2f6b = this['_instances'].length - 1; _0x5f2f6b >= 0; _0x5f2f6b--) {
                            this['_instances'][_0x5f2f6b].stop();
                        }
                        return this;
                    }, _0x49233a.prototype.play = function (_0x14d925, _0x2bd59e) {
                        var _0x132eb3, _0x56c535 = this;
                        if ('string' == typeof _0x14d925 ? _0x132eb3 = {
                                'sprite': _0x28e12f = _0x14d925,
                                'loop': this.loop,
                                'complete': _0x2bd59e
                            } : 'function' == typeof _0x14d925 ? (_0x132eb3 = {}).complete = _0x14d925 : _0x132eb3 = _0x14d925, (_0x132eb3 = _0x302256({
                                'complete': null,
                                'loaded': null,
                                'sprite': null,
                                'end': null,
                                'start': 0,
                                'volume': 1,
                                'speed': 1,
                                'muted': false,
                                'loop': false
                            }, _0x132eb3 || {})).sprite) {
                            var _0x113bd2 = _0x132eb3.sprite, _0x28e12f = this['_sprites'][_0x113bd2];
                            _0x132eb3.start = _0x28e12f.start + (_0x132eb3.start || 0);
                            _0x132eb3.end = _0x28e12f.end;
                            _0x132eb3.speed = _0x28e12f.speed || 1;
                            _0x132eb3.loop = _0x28e12f.loop || _0x132eb3.loop;
                            delete _0x132eb3.sprite;
                        }
                        if (_0x132eb3.offset && (_0x132eb3.start = _0x132eb3.offset), !this.isLoaded) {
                            return new Promise(function (_0x54f118, _0xc2100a) {
                                ;
                                _0x56c535.autoPlay = true;
                                _0x56c535['_autoPlayOptions'] = _0x132eb3;
                                _0x56c535['_preload'](function (_0x94c187, _0x2965ed, _0xf5f70a) {
                                    ;
                                    _0x94c187 ? _0xc2100a(_0x94c187) : (_0x132eb3.loaded && _0x132eb3.loaded(_0x94c187, _0x2965ed, _0xf5f70a), _0x54f118(_0xf5f70a));
                                });
                            });
                        }
                        (this.singleInstance || _0x132eb3.singleInstance) && this['_removeInstances']();
                        var _0x4980be = this['_createInstance']();
                        return this['_instances'].push(_0x4980be), this.isPlaying = true, _0x4980be.once('end', function () {
                            ;
                            _0x132eb3.complete && _0x132eb3.complete(_0x56c535);
                            _0x56c535['_onComplete'](_0x4980be);
                        }), _0x4980be.once('stop', function () {
                            ;
                            _0x56c535['_onComplete'](_0x4980be);
                        }), _0x4980be.play(_0x132eb3), _0x4980be;
                    }, _0x49233a.prototype.refresh = function () {
                        ;
                        for (var _0x5b5828 = this['_instances'].length, _0x36d1cb = 0; _0x36d1cb < _0x5b5828; _0x36d1cb++) {
                            this['_instances'][_0x36d1cb].refresh();
                        }
                    }, _0x49233a.prototype.refreshPaused = function () {
                        ;
                        for (var _0x31748c = this['_instances'].length, _0x499a58 = 0; _0x499a58 < _0x31748c; _0x499a58++) {
                            this['_instances'][_0x499a58].refreshPaused();
                        }
                    }, Object.defineProperty(_0x49233a.prototype, 'volume', {
                        'get': function () {
                            ;
                            return this['_volume'];
                        },
                        'set': function (_0x882dd9) {
                            ;
                            this['_volume'] = _0x882dd9;
                            this.refresh();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x49233a.prototype, 'muted', {
                        'get': function () {
                            ;
                            return this['_muted'];
                        },
                        'set': function (_0x566852) {
                            ;
                            this['_muted'] = _0x566852;
                            this.refresh();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x49233a.prototype, 'loop', {
                        'get': function () {
                            return this['_loop'];
                        },
                        'set': function (_0x4c1f72) {
                            ;
                            this['_loop'] = _0x4c1f72;
                            this.refresh();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x49233a.prototype['_preload'] = function (_0x1ef909) {
                        ;
                        this.media.load(_0x1ef909);
                    }, Object.defineProperty(_0x49233a.prototype, 'instances', {
                        'get': function () {
                            ;
                            return this['_instances'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x49233a.prototype, 'sprites', {
                        'get': function () {
                            ;
                            return this['_sprites'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x49233a.prototype, 'duration', {
                        'get': function () {
                            ;
                            return this.media.duration;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x49233a.prototype.autoPlayStart = function () {
                        var _0x2f343b;
                        return this.autoPlay && (_0x2f343b = this.play(this['_autoPlayOptions'])), _0x2f343b;
                    }, _0x49233a.prototype['_removeInstances'] = function () {
                        ;
                        for (var _0x44b1ea = this['_instances'].length - 1; _0x44b1ea >= 0; _0x44b1ea--) {
                            this['_poolInstance'](this['_instances'][_0x44b1ea]);
                        }
                        this['_instances'].length = 0;
                    }, _0x49233a.prototype['_onComplete'] = function (_0x3bd422) {
                        ;
                        if (this['_instances']) {
                            var _0x205e1a = this['_instances'].indexOf(_0x3bd422);
                            _0x205e1a > -1 && this['_instances'].splice(_0x205e1a, 1);
                            this.isPlaying = this['_instances'].length > 0;
                        }
                        this['_poolInstance'](_0x3bd422);
                    }, _0x49233a.prototype['_createInstance'] = function () {
                        ;
                        if (_0x49233a['_pool'].length > 0) {
                            var _0x3cd9cc = _0x49233a['_pool'].pop();
                            return _0x3cd9cc.init(this.media), _0x3cd9cc;
                        }
                        return this.media.create();
                    }, _0x49233a.prototype['_poolInstance'] = function (_0x9b10c1) {
                        ;
                        _0x9b10c1.destroy();
                        _0x49233a['_pool'].indexOf(_0x9b10c1) < 0 && _0x49233a['_pool'].push(_0x9b10c1);
                    }, _0x49233a['_pool'] = [], _0x49233a;
                }(), _0x22cc91 = function (_0x40bfb0) {
                    ;
                    function _0x4c706c() {
                        var _0x563dff = null !== _0x40bfb0 && _0x40bfb0.apply(this, arguments) || this;
                        return _0x563dff.speed = 1, _0x563dff.muted = false, _0x563dff.volume = 1, _0x563dff.paused = false, _0x563dff;
                    }
                    return _0x4e0218(_0x4c706c, _0x40bfb0), _0x4c706c.prototype.refresh = function () {
                        ;
                        this.emit('refresh');
                    }, _0x4c706c.prototype.refreshPaused = function () {
                        ;
                        this.emit('refreshPaused');
                    }, Object.defineProperty(_0x4c706c.prototype, 'filters', {
                        'get': function () {
                            return null;
                        },
                        'set': function (_0x4f0e90) {
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x4c706c.prototype, 'audioContext', {
                        'get': function () {
                            return null;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x4c706c.prototype.toggleMute = function () {
                        ;
                        return this.muted = !this.muted, this.refresh(), this.muted;
                    }, _0x4c706c.prototype.togglePause = function () {
                        ;
                        return this.paused = !this.paused, this.refreshPaused(), this.paused;
                    }, _0x4c706c.prototype.destroy = function () {
                        ;
                        this.removeAllListeners();
                    }, _0x4c706c;
                }(_0xab413f.vp), _0x1eda9b = function (_0xf2c61) {
                    ;
                    function _0x4123e9() {
                        var _0x5448a8 = this, _0x534574 = window, _0x1f2cd3 = new _0x4123e9.AudioContext(), _0x3cdd62 = _0x1f2cd3.createDynamicsCompressor(), _0x148451 = _0x1f2cd3.createAnalyser();
                        return _0x148451.connect(_0x3cdd62), _0x3cdd62.connect(_0x1f2cd3.destination), (_0x5448a8 = _0xf2c61.call(this, _0x148451, _0x3cdd62) || this)['_ctx'] = _0x1f2cd3, _0x5448a8['_offlineCtx'] = new _0x4123e9.OfflineAudioContext(1, 2, _0x534574.OfflineAudioContext ? Math.max(8000, Math.min(96000, _0x1f2cd3.sampleRate)) : 44100), _0x5448a8['_unlocked'] = false, _0x5448a8.compressor = _0x3cdd62, _0x5448a8.analyser = _0x148451, _0x5448a8.events = new _0xab413f.vp(), _0x5448a8.volume = 1, _0x5448a8.speed = 1, _0x5448a8.muted = false, _0x5448a8.paused = false, 'running' !== _0x1f2cd3.state && (_0x5448a8['_unlock'](), _0x5448a8['_unlock'] = _0x5448a8['_unlock'].bind(_0x5448a8), document.addEventListener('mousedown', _0x5448a8['_unlock'], true), document.addEventListener('touchstart', _0x5448a8['_unlock'], true), document.addEventListener('touchend', _0x5448a8['_unlock'], true)), _0x5448a8;
                    }
                    return _0x4e0218(_0x4123e9, _0xf2c61), _0x4123e9.prototype['_unlock'] = function () {
                        ;
                        this['_unlocked'] || (this.playEmptySound(), 'running' === this['_ctx'].state && (document.removeEventListener('mousedown', this['_unlock'], true), document.removeEventListener('touchend', this['_unlock'], true), document.removeEventListener('touchstart', this['_unlock'], true), this['_unlocked'] = true));
                    }, _0x4123e9.prototype.playEmptySound = function () {
                        var _0x1c8a03 = this['_ctx'].createBufferSource();
                        _0x1c8a03.buffer = this['_ctx'].createBuffer(1, 1, 22050);
                        _0x1c8a03.connect(this['_ctx'].destination);
                        _0x1c8a03.start(0, 0, 0);
                        'suspended' === _0x1c8a03.context.state && _0x1c8a03.context.resume();
                    }, Object.defineProperty(_0x4123e9, 'AudioContext', {
                        'get': function () {
                            var _0x13cab7 = window;
                            return _0x13cab7.AudioContext || _0x13cab7.webkitAudioContext || null;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x4123e9, 'OfflineAudioContext', {
                        'get': function () {
                            var _0x4e61f9 = window;
                            return _0x4e61f9.OfflineAudioContext || _0x4e61f9.webkitOfflineAudioContext || null;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x4123e9.prototype.destroy = function () {
                        ;
                        _0xf2c61.prototype.destroy.call(this);
                        var _0x3e9838 = this['_ctx'];
                        void 0 !== _0x3e9838.close && _0x3e9838.close();
                        this.events.removeAllListeners();
                        this.analyser.disconnect();
                        this.compressor.disconnect();
                        this.analyser = null;
                        this.compressor = null;
                        this.events = null;
                        this['_offlineCtx'] = null;
                        this['_ctx'] = null;
                    }, Object.defineProperty(_0x4123e9.prototype, 'audioContext', {
                        'get': function () {
                            ;
                            return this['_ctx'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x4123e9.prototype, 'offlineContext', {
                        'get': function () {
                            ;
                            return this['_offlineCtx'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x4123e9.prototype, 'paused', {
                        'get': function () {
                            ;
                            return this['_paused'];
                        },
                        'set': function (_0x197334) {
                            ;
                            _0x197334 && 'running' === this['_ctx'].state ? this['_ctx'].suspend() : _0x197334 || 'suspended' !== this['_ctx'].state || this['_ctx'].resume();
                            this['_paused'] = _0x197334;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x4123e9.prototype.refresh = function () {
                        ;
                        this.events.emit('refresh');
                    }, _0x4123e9.prototype.refreshPaused = function () {
                        ;
                        this.events.emit('refreshPaused');
                    }, _0x4123e9.prototype.toggleMute = function () {
                        ;
                        return this.muted = !this.muted, this.refresh(), this.muted;
                    }, _0x4123e9.prototype.togglePause = function () {
                        ;
                        return this.paused = !this.paused, this.refreshPaused(), this['_paused'];
                    }, _0x4123e9.prototype.decode = function (_0xbd037c, _0xb35d0e) {
                        var _0x45412d = function (_0x31029d) {
                                ;
                                _0xb35d0e(new Error((null == _0x31029d ? void 0 : _0x31029d.message) || 'Unable to decode file'));
                            }, _0x3f5a03 = this['_offlineCtx'].decodeAudioData(_0xbd037c, function (_0x2f7fb5) {
                                _0xb35d0e(null, _0x2f7fb5);
                            }, _0x45412d);
                        _0x3f5a03 && _0x3f5a03.catch(_0x45412d);
                    }, _0x4123e9;
                }(_0x23490f), _0xa40684 = function () {
                    ;
                    function _0x5958f0() {
                        ;
                        this.init();
                    }
                    return _0x5958f0.prototype.init = function () {
                        ;
                        return this.supported && (this['_webAudioContext'] = new _0x1eda9b()), this['_htmlAudioContext'] = new _0x22cc91(), this['_sounds'] = {}, this.useLegacy = !this.supported, this;
                    }, Object.defineProperty(_0x5958f0.prototype, 'context', {
                        'get': function () {
                            ;
                            return this['_context'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x5958f0.prototype, 'filtersAll', {
                        'get': function () {
                            ;
                            return this.useLegacy ? [] : this['_context'].filters;
                        },
                        'set': function (_0x4b143f) {
                            ;
                            this.useLegacy || (this['_context'].filters = _0x4b143f);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x5958f0.prototype, 'supported', {
                        'get': function () {
                            ;
                            return null !== _0x1eda9b.AudioContext;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x5958f0.prototype.add = function (_0x3e18e9, _0x5f2009) {
                        ;
                        if ('object' == typeof _0x3e18e9) {
                            var _0x5692c0 = { _0x333bf4: this.add(_0x333bf4, _0x10f67a) };
                            for (var _0x333bf4 in _0x3e18e9) {
                                var _0x10f67a = this['_getOptions'](_0x3e18e9[_0x333bf4], _0x5f2009);
                                ;
                            }
                            return _0x5692c0;
                        }
                        if (_0x5f2009 instanceof _0x592881) {
                            return this['_sounds'][_0x3e18e9] = _0x5f2009, _0x5f2009;
                        }
                        var _0x9ba13b = this['_getOptions'](_0x5f2009), _0x56ece8 = _0x592881.from(_0x9ba13b);
                        return this['_sounds'][_0x3e18e9] = _0x56ece8, _0x56ece8;
                    }, _0x5958f0.prototype['_getOptions'] = function (_0x5a0899, _0xd6cefe) {
                        var _0x149249;
                        return _0x149249 = 'string' == typeof _0x5a0899 ? { 'url': _0x5a0899 } : _0x5a0899 instanceof ArrayBuffer || _0x5a0899 instanceof AudioBuffer || _0x5a0899 instanceof HTMLAudioElement ? { 'source': _0x5a0899 } : _0x5a0899, _0x302256(_0x302256({}, _0x149249), _0xd6cefe || {});
                    }, Object.defineProperty(_0x5958f0.prototype, 'useLegacy', {
                        'get': function () {
                            return this['_useLegacy'];
                        },
                        'set': function (_0x23b11b) {
                            ;
                            _0x34f7ef.setLegacy(_0x23b11b);
                            this['_useLegacy'] = _0x23b11b;
                            this['_context'] = !_0x23b11b && this.supported ? this['_webAudioContext'] : this['_htmlAudioContext'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x5958f0.prototype.remove = function (_0x2e65e5) {
                        ;
                        return this.exists(_0x2e65e5, true), this['_sounds'][_0x2e65e5].destroy(), delete this['_sounds'][_0x2e65e5], this;
                    }, Object.defineProperty(_0x5958f0.prototype, 'volumeAll', {
                        'get': function () {
                            return this['_context'].volume;
                        },
                        'set': function (_0x5ec266) {
                            ;
                            this['_context'].volume = _0x5ec266;
                            this['_context'].refresh();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x5958f0.prototype, 'speedAll', {
                        'get': function () {
                            ;
                            return this['_context'].speed;
                        },
                        'set': function (_0x4efce4) {
                            ;
                            this['_context'].speed = _0x4efce4;
                            this['_context'].refresh();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x5958f0.prototype.togglePauseAll = function () {
                        ;
                        return this['_context'].togglePause();
                    }, _0x5958f0.prototype.pauseAll = function () {
                        ;
                        return this['_context'].paused = true, this['_context'].refreshPaused(), this;
                    }, _0x5958f0.prototype.resumeAll = function () {
                        ;
                        return this['_context'].paused = false, this['_context'].refreshPaused(), this;
                    }, _0x5958f0.prototype.toggleMuteAll = function () {
                        ;
                        return this['_context'].toggleMute();
                    }, _0x5958f0.prototype.muteAll = function () {
                        ;
                        return this['_context'].muted = true, this['_context'].refresh(), this;
                    }, _0x5958f0.prototype.unmuteAll = function () {
                        ;
                        return this['_context'].muted = false, this['_context'].refresh(), this;
                    }, _0x5958f0.prototype.removeAll = function () {
                        ;
                        for (var _0x326648 in this['_sounds'])
                            this['_sounds'][_0x326648].destroy(), delete this['_sounds'][_0x326648];
                        return this;
                    }, _0x5958f0.prototype.stopAll = function () {
                        ;
                        for (var _0x1ab557 in this['_sounds'])
                            this['_sounds'][_0x1ab557].stop();
                        return this;
                    }, _0x5958f0.prototype.exists = function (_0x28566a, _0x284be5) {
                        ;
                        return void 0 === _0x284be5 && (_0x284be5 = false), !!this['_sounds'][_0x28566a];
                    }, _0x5958f0.prototype.find = function (_0x33f88b) {
                        ;
                        return this.exists(_0x33f88b, true), this['_sounds'][_0x33f88b];
                    }, _0x5958f0.prototype.play = function (_0x4eae2b, _0x27d5ce) {
                        ;
                        return this.find(_0x4eae2b).play(_0x27d5ce);
                    }, _0x5958f0.prototype.stop = function (_0x25a238) {
                        ;
                        return this.find(_0x25a238).stop();
                    }, _0x5958f0.prototype.pause = function (_0x40be68) {
                        ;
                        return this.find(_0x40be68).pause();
                    }, _0x5958f0.prototype.resume = function (_0x38e8e8) {
                        ;
                        return this.find(_0x38e8e8).resume();
                    }, _0x5958f0.prototype.volume = function (_0x7c7df3, _0x1ced16) {
                        var _0x365a6f = this.find(_0x7c7df3);
                        return void 0 !== _0x1ced16 && (_0x365a6f.volume = _0x1ced16), _0x365a6f.volume;
                    }, _0x5958f0.prototype.speed = function (_0x56e770, _0x3fc884) {
                        var _0x2a2ce5 = this.find(_0x56e770);
                        return void 0 !== _0x3fc884 && (_0x2a2ce5.speed = _0x3fc884), _0x2a2ce5.speed;
                    }, _0x5958f0.prototype.duration = function (_0x3fb94a) {
                        return this.find(_0x3fb94a).duration;
                    }, _0x5958f0.prototype.close = function () {
                        ;
                        return this.removeAll(), this['_sounds'] = null, this['_webAudioContext'] && (this['_webAudioContext'].destroy(), this['_webAudioContext'] = null), this['_htmlAudioContext'] && (this['_htmlAudioContext'].destroy(), this['_htmlAudioContext'] = null), this['_context'] = null, this;
                    }, _0x5958f0;
                }(), _0x44b927 = function () {
                    ;
                    function _0x475b88(_0x264d08, _0x238b75) {
                        ;
                        this.init(_0x264d08, _0x238b75);
                    }
                    return _0x475b88.prototype.init = function (_0x91cbd3, _0x518146) {
                        ;
                        this.destination = _0x91cbd3;
                        this.source = _0x518146 || _0x91cbd3;
                    }, _0x475b88.prototype.connect = function (_0x51d234) {
                        ;
                        this.source.connect(_0x51d234);
                    }, _0x475b88.prototype.disconnect = function () {
                        ;
                        this.source.disconnect();
                    }, _0x475b88.prototype.destroy = function () {
                        ;
                        this.disconnect();
                        this.destination = null;
                        this.source = null;
                    }, _0x475b88;
                }(), _0x3203c3 = {
                    '__proto__': null,
                    'Filter': _0x44b927,
                    'EqualizerFilter': function (_0x1ac7c2) {
                        ;
                        function _0x540967(_0x4ac75c, _0x4e1fc7, _0x1177f1, _0x537ad7, _0x346e31, _0xfbb05c, _0x432e2d, _0x1252ef, _0x199619, _0x436954) {
                            ;
                            void 0 === _0x4ac75c && (_0x4ac75c = 0);
                            void 0 === _0x4e1fc7 && (_0x4e1fc7 = 0);
                            void 0 === _0x1177f1 && (_0x1177f1 = 0);
                            void 0 === _0x537ad7 && (_0x537ad7 = 0);
                            void 0 === _0x346e31 && (_0x346e31 = 0);
                            void 0 === _0xfbb05c && (_0xfbb05c = 0);
                            void 0 === _0x432e2d && (_0x432e2d = 0);
                            void 0 === _0x1252ef && (_0x1252ef = 0);
                            void 0 === _0x199619 && (_0x199619 = 0);
                            void 0 === _0x436954 && (_0x436954 = 0);
                            var _0x57563f = this;
                            if (!_0x3a4357().useLegacy) {
                                var _0x49ee34 = [
                                    {
                                        'f': _0x540967.F32,
                                        'type': 'lowshelf',
                                        'gain': _0x4ac75c
                                    },
                                    {
                                        'f': _0x540967.F64,
                                        'type': 'peaking',
                                        'gain': _0x4e1fc7
                                    },
                                    {
                                        'f': _0x540967.F125,
                                        'type': 'peaking',
                                        'gain': _0x1177f1
                                    },
                                    {
                                        'f': _0x540967.F250,
                                        'type': 'peaking',
                                        'gain': _0x537ad7
                                    },
                                    {
                                        'f': _0x540967.F500,
                                        'type': 'peaking',
                                        'gain': _0x346e31
                                    },
                                    {
                                        'f': _0x540967.F1K,
                                        'type': 'peaking',
                                        'gain': _0xfbb05c
                                    },
                                    {
                                        'f': _0x540967.F2K,
                                        'type': 'peaking',
                                        'gain': _0x432e2d
                                    },
                                    {
                                        'f': _0x540967.F4K,
                                        'type': 'peaking',
                                        'gain': _0x1252ef
                                    },
                                    {
                                        'f': _0x540967.F8K,
                                        'type': 'peaking',
                                        'gain': _0x199619
                                    },
                                    {
                                        'f': _0x540967.F16K,
                                        'type': 'highshelf',
                                        'gain': _0x436954
                                    }
                                ].map(function (_0x24b7eb) {
                                    var _0x3b5b29 = _0x3a4357().context.audioContext.createBiquadFilter();
                                    return _0x3b5b29.type = _0x24b7eb.type, _0xede001.setParamValue(_0x3b5b29.Q, 1), _0x3b5b29.frequency.value = _0x24b7eb.f, _0xede001.setParamValue(_0x3b5b29.gain, _0x24b7eb.gain), _0x3b5b29;
                                });
                                (_0x57563f = _0x1ac7c2.call(this, _0x49ee34[0], _0x49ee34[_0x49ee34.length - 1]) || this).bands = _0x49ee34;
                                _0x57563f.bandsMap = {};
                                for (var _0x1599ca = 0; _0x1599ca < _0x57563f.bands.length; _0x1599ca++) {
                                    var _0x41480d = _0x57563f.bands[_0x1599ca];
                                    _0x1599ca > 0 && _0x57563f.bands[_0x1599ca - 1].connect(_0x41480d);
                                    _0x57563f.bandsMap[_0x41480d.frequency.value] = _0x41480d;
                                }
                                return _0x57563f;
                            }
                            _0x57563f = _0x1ac7c2.call(this, null) || this;
                        }
                        return _0x4e0218(_0x540967, _0x1ac7c2), _0x540967.prototype.setGain = function (_0x3a6d53, _0x577904) {
                            ;
                            if (void 0 === _0x577904 && (_0x577904 = 0), !this.bandsMap[_0x3a6d53]) {
                                throw new Error('No band found for frequency '.concat(_0x3a6d53));
                            }
                            _0xede001.setParamValue(this.bandsMap[_0x3a6d53].gain, _0x577904);
                        }, _0x540967.prototype.getGain = function (_0x2e4388) {
                            ;
                            if (!this.bandsMap[_0x2e4388]) {
                                throw new Error('No band found for frequency '.concat(_0x2e4388));
                            }
                            return this.bandsMap[_0x2e4388].gain.value;
                        }, Object.defineProperty(_0x540967.prototype, 'f32', {
                            'get': function () {
                                ;
                                return this.getGain(_0x540967.F32);
                            },
                            'set': function (_0x26dbca) {
                                ;
                                this.setGain(_0x540967.F32, _0x26dbca);
                            },
                            'enumerable': false,
                            'configurable': true
                        }), Object.defineProperty(_0x540967.prototype, 'f64', {
                            'get': function () {
                                ;
                                return this.getGain(_0x540967.F64);
                            },
                            'set': function (_0x44bdb4) {
                                ;
                                this.setGain(_0x540967.F64, _0x44bdb4);
                            },
                            'enumerable': false,
                            'configurable': true
                        }), Object.defineProperty(_0x540967.prototype, 'f125', {
                            'get': function () {
                                ;
                                return this.getGain(_0x540967.F125);
                            },
                            'set': function (_0x31df89) {
                                this.setGain(_0x540967.F125, _0x31df89);
                            },
                            'enumerable': false,
                            'configurable': true
                        }), Object.defineProperty(_0x540967.prototype, 'f250', {
                            'get': function () {
                                ;
                                return this.getGain(_0x540967.F250);
                            },
                            'set': function (_0xe4b392) {
                                ;
                                this.setGain(_0x540967.F250, _0xe4b392);
                            },
                            'enumerable': false,
                            'configurable': true
                        }), Object.defineProperty(_0x540967.prototype, 'f500', {
                            'get': function () {
                                ;
                                return this.getGain(_0x540967.F500);
                            },
                            'set': function (_0x249789) {
                                ;
                                this.setGain(_0x540967.F500, _0x249789);
                            },
                            'enumerable': false,
                            'configurable': true
                        }), Object.defineProperty(_0x540967.prototype, 'f1k', {
                            'get': function () {
                                ;
                                return this.getGain(_0x540967.F1K);
                            },
                            'set': function (_0x22426d) {
                                ;
                                this.setGain(_0x540967.F1K, _0x22426d);
                            },
                            'enumerable': false,
                            'configurable': true
                        }), Object.defineProperty(_0x540967.prototype, 'f2k', {
                            'get': function () {
                                ;
                                return this.getGain(_0x540967.F2K);
                            },
                            'set': function (_0x12402d) {
                                ;
                                this.setGain(_0x540967.F2K, _0x12402d);
                            },
                            'enumerable': false,
                            'configurable': true
                        }), Object.defineProperty(_0x540967.prototype, 'f4k', {
                            'get': function () {
                                ;
                                return this.getGain(_0x540967.F4K);
                            },
                            'set': function (_0x2c4754) {
                                ;
                                this.setGain(_0x540967.F4K, _0x2c4754);
                            },
                            'enumerable': false,
                            'configurable': true
                        }), Object.defineProperty(_0x540967.prototype, 'f8k', {
                            'get': function () {
                                ;
                                return this.getGain(_0x540967.F8K);
                            },
                            'set': function (_0x44dfc2) {
                                ;
                                this.setGain(_0x540967.F8K, _0x44dfc2);
                            },
                            'enumerable': false,
                            'configurable': true
                        }), Object.defineProperty(_0x540967.prototype, 'f16k', {
                            'get': function () {
                                ;
                                return this.getGain(_0x540967.F16K);
                            },
                            'set': function (_0x5eb4ff) {
                                ;
                                this.setGain(_0x540967.F16K, _0x5eb4ff);
                            },
                            'enumerable': false,
                            'configurable': true
                        }), _0x540967.prototype.reset = function () {
                            ;
                            this.bands.forEach(function (_0x53d662) {
                                ;
                                _0xede001.setParamValue(_0x53d662.gain, 0);
                            });
                        }, _0x540967.prototype.destroy = function () {
                            ;
                            this.bands.forEach(function (_0xd3984d) {
                                _0xd3984d.disconnect();
                            });
                            this.bands = null;
                            this.bandsMap = null;
                        }, _0x540967.F32 = 32, _0x540967.F64 = 64, _0x540967.F125 = 125, _0x540967.F250 = 250, _0x540967.F500 = 500, _0x540967.F1K = 1000, _0x540967.F2K = 2000, _0x540967.F4K = 4000, _0x540967.F8K = 8000, _0x540967.F16K = 16000, _0x540967;
                    }(_0x44b927),
                    'DistortionFilter': function (_0xed5feb) {
                        ;
                        function _0x41c26f(_0x19ef71) {
                            ;
                            void 0 === _0x19ef71 && (_0x19ef71 = 0);
                            var _0x59fbf1 = this;
                            if (!_0x3a4357().useLegacy) {
                                var _0xc80056 = _0x3a4357().context.audioContext.createWaveShaper();
                                return (_0x59fbf1 = _0xed5feb.call(this, _0xc80056) || this)['_distortion'] = _0xc80056, _0x59fbf1.amount = _0x19ef71, _0x59fbf1;
                            }
                            _0x59fbf1 = _0xed5feb.call(this, null) || this;
                        }
                        return _0x4e0218(_0x41c26f, _0xed5feb), Object.defineProperty(_0x41c26f.prototype, 'amount', {
                            'get': function () {
                                return this['_amount'];
                            },
                            'set': function (_0x15e919) {
                                ;
                                this['_amount'] = _0x15e919;
                                for (var _0x4f9734, _0x5c6b0d = 1000 * _0x15e919, _0x467b87 = new Float32Array(44100), _0xb2b558 = Math.PI / 180, _0x57ddec = 0; _0x57ddec < 44100; ++_0x57ddec) {
                                    _0x4f9734 = 2 * _0x57ddec / 44100 - 1;
                                    _0x467b87[_0x57ddec] = (3 + _0x5c6b0d) * _0x4f9734 * 20 * _0xb2b558 / (Math.PI + _0x5c6b0d * Math.abs(_0x4f9734));
                                }
                                this['_distortion'].curve = _0x467b87;
                                this['_distortion'].oversample = '4x';
                            },
                            'enumerable': false,
                            'configurable': true
                        }), _0x41c26f.prototype.destroy = function () {
                            ;
                            this['_distortion'] = null;
                            _0xed5feb.prototype.destroy.call(this);
                        }, _0x41c26f;
                    }(_0x44b927),
                    'StereoFilter': function (_0x515a7d) {
                        ;
                        function _0x4b64cd(_0x4aef47) {
                            ;
                            void 0 === _0x4aef47 && (_0x4aef47 = 0);
                            var _0x5e519a = this;
                            if (!_0x3a4357().useLegacy) {
                                var _0x37f8e5, _0x4b88da, _0x45880c, _0x379355 = _0x3a4357().context.audioContext;
                                return _0x379355.createStereoPanner ? _0x45880c = _0x37f8e5 = _0x379355.createStereoPanner() : ((_0x4b88da = _0x379355.createPanner()).panningModel = 'equalpower', _0x45880c = _0x4b88da), (_0x5e519a = _0x515a7d.call(this, _0x45880c) || this)['_stereo'] = _0x37f8e5, _0x5e519a['_panner'] = _0x4b88da, _0x5e519a.pan = _0x4aef47, _0x5e519a;
                            }
                            _0x5e519a = _0x515a7d.call(this, null) || this;
                        }
                        return _0x4e0218(_0x4b64cd, _0x515a7d), Object.defineProperty(_0x4b64cd.prototype, 'pan', {
                            'get': function () {
                                ;
                                return this['_pan'];
                            },
                            'set': function (_0x5ef62b) {
                                ;
                                this['_pan'] = _0x5ef62b;
                                this['_stereo'] ? _0xede001.setParamValue(this['_stereo'].pan, _0x5ef62b) : this['_panner'].setPosition(_0x5ef62b, 0, 1 - Math.abs(_0x5ef62b));
                            },
                            'enumerable': false,
                            'configurable': true
                        }), _0x4b64cd.prototype.destroy = function () {
                            ;
                            _0x515a7d.prototype.destroy.call(this);
                            this['_stereo'] = null;
                            this['_panner'] = null;
                        }, _0x4b64cd;
                    }(_0x44b927),
                    'ReverbFilter': function (_0x8e4b78) {
                        ;
                        function _0x566bb3(_0x293879, _0x2c912f, _0x2ce21c) {
                            ;
                            void 0 === _0x293879 && (_0x293879 = 3);
                            void 0 === _0x2c912f && (_0x2c912f = 2);
                            void 0 === _0x2ce21c && (_0x2ce21c = false);
                            var _0x1e6e6f = this;
                            if (!_0x3a4357().useLegacy) {
                                return (_0x1e6e6f = _0x8e4b78.call(this, null) || this)['_seconds'] = _0x1e6e6f['_clamp'](_0x293879, 1, 50), _0x1e6e6f['_decay'] = _0x1e6e6f['_clamp'](_0x2c912f, 0, 100), _0x1e6e6f['_reverse'] = _0x2ce21c, _0x1e6e6f['_rebuild'](), _0x1e6e6f;
                            }
                            _0x1e6e6f = _0x8e4b78.call(this, null) || this;
                        }
                        return _0x4e0218(_0x566bb3, _0x8e4b78), _0x566bb3.prototype['_clamp'] = function (_0x3c4678, _0x4cdd5b, _0x571d82) {
                            ;
                            return Math.min(_0x571d82, Math.max(_0x4cdd5b, _0x3c4678));
                        }, Object.defineProperty(_0x566bb3.prototype, 'seconds', {
                            'get': function () {
                                ;
                                return this['_seconds'];
                            },
                            'set': function (_0x5a6bf7) {
                                ;
                                this['_seconds'] = this['_clamp'](_0x5a6bf7, 1, 50);
                                this['_rebuild']();
                            },
                            'enumerable': false,
                            'configurable': true
                        }), Object.defineProperty(_0x566bb3.prototype, 'decay', {
                            'get': function () {
                                ;
                                return this['_decay'];
                            },
                            'set': function (_0x1df604) {
                                this['_decay'] = this['_clamp'](_0x1df604, 0, 100);
                                this['_rebuild']();
                            },
                            'enumerable': false,
                            'configurable': true
                        }), Object.defineProperty(_0x566bb3.prototype, 'reverse', {
                            'get': function () {
                                ;
                                return this['_reverse'];
                            },
                            'set': function (_0x191e3e) {
                                ;
                                this['_reverse'] = _0x191e3e;
                                this['_rebuild']();
                            },
                            'enumerable': false,
                            'configurable': true
                        }), _0x566bb3.prototype['_rebuild'] = function () {
                            ;
                            for (var _0x3a1fe6, _0x528e18 = _0x3a4357().context.audioContext, _0x50c524 = _0x528e18.sampleRate, _0xa20185 = _0x50c524 * this['_seconds'], _0x22cd4e = _0x528e18.createBuffer(2, _0xa20185, _0x50c524), _0x4b94e6 = _0x22cd4e.getChannelData(0), _0x58f5d7 = _0x22cd4e.getChannelData(1), _0x3075a0 = 0; _0x3075a0 < _0xa20185; _0x3075a0++) {
                                _0x3a1fe6 = this['_reverse'] ? _0xa20185 - _0x3075a0 : _0x3075a0;
                                _0x4b94e6[_0x3075a0] = (2 * Math.random() - 1) * Math.pow(1 - _0x3a1fe6 / _0xa20185, this['_decay']);
                                _0x58f5d7[_0x3075a0] = (2 * Math.random() - 1) * Math.pow(1 - _0x3a1fe6 / _0xa20185, this['_decay']);
                            }
                            var _0x59bdea = _0x3a4357().context.audioContext.createConvolver();
                            _0x59bdea.buffer = _0x22cd4e;
                            this.init(_0x59bdea);
                        }, _0x566bb3;
                    }(_0x44b927),
                    'MonoFilter': function (_0x2dba43) {
                        function _0x3e8a6c() {
                            var _0x38f990 = this;
                            if (!_0x3a4357().useLegacy) {
                                var _0xfa5a60 = _0x3a4357().context.audioContext, _0x12ebdf = _0xfa5a60.createChannelSplitter(), _0x1c257c = _0xfa5a60.createChannelMerger();
                                return _0x1c257c.connect(_0x12ebdf), (_0x38f990 = _0x2dba43.call(this, _0x1c257c, _0x12ebdf) || this)['_merger'] = _0x1c257c, _0x38f990;
                            }
                            _0x38f990 = _0x2dba43.call(this, null) || this;
                        }
                        return _0x4e0218(_0x3e8a6c, _0x2dba43), _0x3e8a6c.prototype.destroy = function () {
                            ;
                            this['_merger'].disconnect();
                            this['_merger'] = null;
                            _0x2dba43.prototype.destroy.call(this);
                        }, _0x3e8a6c;
                    }(_0x44b927),
                    'StreamFilter': function (_0x16e10c) {
                        ;
                        function _0x6e681a() {
                            var _0x438efd = this;
                            if (!_0x3a4357().useLegacy) {
                                var _0x235ef7 = _0x3a4357().context.audioContext, _0x219fa5 = _0x235ef7.createMediaStreamDestination(), _0x781b22 = _0x235ef7.createMediaStreamSource(_0x219fa5.stream);
                                return (_0x438efd = _0x16e10c.call(this, _0x219fa5, _0x781b22) || this)['_stream'] = _0x219fa5.stream, _0x438efd;
                            }
                            _0x438efd = _0x16e10c.call(this, null) || this;
                        }
                        return _0x4e0218(_0x6e681a, _0x16e10c), Object.defineProperty(_0x6e681a.prototype, 'stream', {
                            'get': function () {
                                ;
                                return this['_stream'];
                            },
                            'enumerable': false,
                            'configurable': true
                        }), _0x6e681a.prototype.destroy = function () {
                            ;
                            this['_stream'] = null;
                            _0x16e10c.prototype.destroy.call(this);
                        }, _0x6e681a;
                    }(_0x44b927),
                    'TelephoneFilter': function (_0xac25ad) {
                        function _0x5d7e5c() {
                            ;
                            if (!_0x3a4357().useLegacy) {
                                var _0x5a37b4 = _0x3a4357().context.audioContext, _0x1f1f2f = _0x5a37b4.createBiquadFilter(), _0x51b920 = _0x5a37b4.createBiquadFilter(), _0x2d5d8c = _0x5a37b4.createBiquadFilter(), _0x3c057e = _0x5a37b4.createBiquadFilter();
                                return _0x1f1f2f.type = 'lowpass', _0xede001.setParamValue(_0x1f1f2f.frequency, 2000), _0x51b920.type = 'lowpass', _0xede001.setParamValue(_0x51b920.frequency, 2000), _0x2d5d8c.type = 'highpass', _0xede001.setParamValue(_0x2d5d8c.frequency, 500), _0x3c057e.type = 'highpass', _0xede001.setParamValue(_0x3c057e.frequency, 500), _0x1f1f2f.connect(_0x51b920), _0x51b920.connect(_0x2d5d8c), _0x2d5d8c.connect(_0x3c057e), _0xac25ad.call(this, _0x1f1f2f, _0x3c057e) || this;
                            }
                            _0xac25ad.call(this, null);
                        }
                        return _0x4e0218(_0x5d7e5c, _0xac25ad), _0x5d7e5c;
                    }(_0x44b927)
                }, _0x17eb99 = (_0x56386e = new _0xa40684(), _0x15deea = _0x56386e, _0x56386e);
            _0x5a43a8.aN.registerPlugin(_0x34f7ef);
        },
        408: (_0x1ca5f9, _0x3fc5cf, _0x2986ba) => {
            'use strict';
            _0x2986ba.d(_0x3fc5cf, { 'K': () => _0x25dae2 });
            var _0x58aa95 = _0x2986ba(710), _0x5674ec = _0x2986ba(33), _0x5a27ab = _0x2986ba(679), _0x412236 = function (_0x3ea19c, _0x3cc214) {
                    ;
                    return _0x412236 = Object.setPrototypeOf || { '__proto__': [] } instanceof Array && function (_0x40916b, _0x5460c1) {
                        _0x40916b['__proto__'] = _0x5460c1;
                    } || function (_0x136f92, _0x1d4ada) {
                        ;
                        for (var _0x318343 in _0x1d4ada)
                            _0x1d4ada.hasOwnProperty(_0x318343) && (_0x136f92[_0x318343] = _0x1d4ada[_0x318343]);
                    }, _0x412236(_0x3ea19c, _0x3cc214);
                }, _0x25dae2 = function (_0x590de6) {
                    ;
                    function _0x341f97(_0x3963ed, _0x9f8c58) {
                        ;
                        void 0 === _0x9f8c58 && (_0x9f8c58 = true);
                        var _0x1b5a7c = _0x590de6.call(this, _0x3963ed[0] instanceof _0x58aa95.xE ? _0x3963ed[0] : _0x3963ed[0].texture) || this;
                        return _0x1b5a7c['_textures'] = null, _0x1b5a7c['_durations'] = null, _0x1b5a7c['_autoUpdate'] = _0x9f8c58, _0x1b5a7c['_isConnectedToTicker'] = false, _0x1b5a7c.animationSpeed = 1, _0x1b5a7c.loop = true, _0x1b5a7c.updateAnchor = false, _0x1b5a7c.onComplete = null, _0x1b5a7c.onFrameChange = null, _0x1b5a7c.onLoop = null, _0x1b5a7c['_currentTime'] = 0, _0x1b5a7c['_playing'] = false, _0x1b5a7c['_previousFrame'] = null, _0x1b5a7c.textures = _0x3963ed, _0x1b5a7c;
                    }
                    return function (_0x3f019e, _0x343362) {
                        ;
                        function _0x60b4b6() {
                            this.constructor = _0x3f019e;
                        }
                        _0x412236(_0x3f019e, _0x343362);
                        _0x3f019e.prototype = null === _0x343362 ? Object.create(_0x343362) : (_0x60b4b6.prototype = _0x343362.prototype, new _0x60b4b6());
                    }(_0x341f97, _0x590de6), _0x341f97.prototype.stop = function () {
                        ;
                        this['_playing'] && (this['_playing'] = false, this['_autoUpdate'] && this['_isConnectedToTicker'] && (_0x5a27ab.vB.shared.remove(this.update, this), this['_isConnectedToTicker'] = false));
                    }, _0x341f97.prototype.play = function () {
                        ;
                        this['_playing'] || (this['_playing'] = true, this['_autoUpdate'] && !this['_isConnectedToTicker'] && (_0x5a27ab.vB.shared.add(this.update, this, _0x5a27ab.uF.HIGH), this['_isConnectedToTicker'] = true));
                    }, _0x341f97.prototype.gotoAndStop = function (_0x4c6723) {
                        ;
                        this.stop();
                        var _0x4e1c6e = this.currentFrame;
                        this['_currentTime'] = _0x4c6723;
                        _0x4e1c6e !== this.currentFrame && this.updateTexture();
                    }, _0x341f97.prototype.gotoAndPlay = function (_0x559632) {
                        var _0x3d3977 = this.currentFrame;
                        this['_currentTime'] = _0x559632;
                        _0x3d3977 !== this.currentFrame && this.updateTexture();
                        this.play();
                    }, _0x341f97.prototype.update = function (_0x290022) {
                        ;
                        if (this['_playing']) {
                            var _0x255dfa = this.animationSpeed * _0x290022, _0x1e0080 = this.currentFrame;
                            if (null !== this['_durations']) {
                                var _0x34f66a = this['_currentTime'] % 1 * this['_durations'][this.currentFrame];
                                for (_0x34f66a += _0x255dfa / 60 * 1000; _0x34f66a < 0;) {
                                    this['_currentTime']--;
                                    _0x34f66a += this['_durations'][this.currentFrame];
                                }
                                var _0xd5ed4d = Math.sign(this.animationSpeed * _0x290022);
                                for (this['_currentTime'] = Math.floor(this['_currentTime']); _0x34f66a >= this['_durations'][this.currentFrame];) {
                                    _0x34f66a -= this['_durations'][this.currentFrame] * _0xd5ed4d;
                                    this['_currentTime'] += _0xd5ed4d;
                                }
                                this['_currentTime'] += _0x34f66a / this['_durations'][this.currentFrame];
                            } else {
                                this['_currentTime'] += _0x255dfa;
                            }
                            this['_currentTime'] < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this['_currentTime'] >= this['_textures'].length && !this.loop ? (this.gotoAndStop(this['_textures'].length - 1), this.onComplete && this.onComplete()) : _0x1e0080 !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < _0x1e0080 || this.animationSpeed < 0 && this.currentFrame > _0x1e0080) && this.onLoop(), this.updateTexture());
                        }
                    }, _0x341f97.prototype.updateTexture = function () {
                        var _0x2cceb7 = this.currentFrame;
                        this['_previousFrame'] !== _0x2cceb7 && (this['_previousFrame'] = _0x2cceb7, this['_texture'] = this['_textures'][_0x2cceb7], this['_textureID'] = -1, this['_textureTrimmedID'] = -1, this['_cachedTint'] = 16777215, this.uvs = this['_texture']['_uvs'].uvsFloat32, this.updateAnchor && this['_anchor'].copyFrom(this['_texture'].defaultAnchor), this.onFrameChange && this.onFrameChange(this.currentFrame));
                    }, _0x341f97.prototype.destroy = function (_0x1a7765) {
                        ;
                        this.stop();
                        _0x590de6.prototype.destroy.call(this, _0x1a7765);
                        this.onComplete = null;
                        this.onFrameChange = null;
                        this.onLoop = null;
                    }, _0x341f97.fromFrames = function (_0x59cf68) {
                        ;
                        for (var _0x1a23c0 = [], _0x2c0597 = 0; _0x2c0597 < _0x59cf68.length; ++_0x2c0597) {
                            _0x1a23c0.push(_0x58aa95.xE.from(_0x59cf68[_0x2c0597]));
                        }
                        return new _0x341f97(_0x1a23c0);
                    }, _0x341f97.fromImages = function (_0x4519c8) {
                        ;
                        for (var _0x1c80dd = [], _0x4deb33 = 0; _0x4deb33 < _0x4519c8.length; ++_0x4deb33) {
                            _0x1c80dd.push(_0x58aa95.xE.from(_0x4519c8[_0x4deb33]));
                        }
                        return new _0x341f97(_0x1c80dd);
                    }, Object.defineProperty(_0x341f97.prototype, 'totalFrames', {
                        'get': function () {
                            return this['_textures'].length;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x341f97.prototype, 'textures', {
                        'get': function () {
                            return this['_textures'];
                        },
                        'set': function (_0x2a3992) {
                            ;
                            if (_0x2a3992[0] instanceof _0x58aa95.xE) {
                                this['_textures'] = _0x2a3992;
                                this['_durations'] = null;
                            } else {
                                this['_textures'] = [];
                                this['_durations'] = [];
                                for (var _0x4af31d = 0; _0x4af31d < _0x2a3992.length; _0x4af31d++) {
                                    this['_textures'].push(_0x2a3992[_0x4af31d].texture);
                                    this['_durations'].push(_0x2a3992[_0x4af31d].time);
                                }
                            }
                            this['_previousFrame'] = null;
                            this.gotoAndStop(0);
                            this.updateTexture();
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x341f97.prototype, 'currentFrame', {
                        'get': function () {
                            var _0x4328ff = Math.floor(this['_currentTime']) % this['_textures'].length;
                            return _0x4328ff < 0 && (_0x4328ff += this['_textures'].length), _0x4328ff;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x341f97.prototype, 'playing', {
                        'get': function () {
                            return this['_playing'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x341f97.prototype, 'autoUpdate', {
                        'get': function () {
                            ;
                            return this['_autoUpdate'];
                        },
                        'set': function (_0x21d735) {
                            ;
                            _0x21d735 !== this['_autoUpdate'] && (this['_autoUpdate'] = _0x21d735, !this['_autoUpdate'] && this['_isConnectedToTicker'] ? (_0x5a27ab.vB.shared.remove(this.update, this), this['_isConnectedToTicker'] = false) : this['_autoUpdate'] && !this['_isConnectedToTicker'] && this['_playing'] && (_0x5a27ab.vB.shared.add(this.update, this), this['_isConnectedToTicker'] = true));
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x341f97;
                }(_0x5674ec.j);
        },
        33: (_0x28e300, _0x186e7e, _0x133c68) => {
            'use strict';
            _0x133c68.d(_0x186e7e, { 'j': () => _0x2f923e });
            var _0x1bded1 = _0x133c68(680), _0x2d5595 = _0x133c68(710), _0x52e6fc = _0x133c68(585), _0x111862 = _0x133c68(658), _0x35e2aa = _0x133c68(319), _0x18f9e1 = _0x133c68(942), _0xbb23a3 = function (_0x569c9f, _0x49aa33) {
                    ;
                    return _0xbb23a3 = Object.setPrototypeOf || { '__proto__': [] } instanceof Array && function (_0x1df4a2, _0x489bd7) {
                        ;
                        _0x1df4a2['__proto__'] = _0x489bd7;
                    } || function (_0x3669cc, _0x449eda) {
                        ;
                        for (var _0x132e5f in _0x449eda)
                            _0x449eda.hasOwnProperty(_0x132e5f) && (_0x3669cc[_0x132e5f] = _0x449eda[_0x132e5f]);
                    }, _0xbb23a3(_0x569c9f, _0x49aa33);
                }, _0x349b1e = new _0x111862.E9(), _0x449fc1 = new Uint16Array([
                    0,
                    1,
                    2,
                    0,
                    2,
                    3
                ]), _0x2f923e = function (_0x14c1cb) {
                    ;
                    function _0x333a89(_0x13f37c) {
                        var _0x39ad8f = _0x14c1cb.call(this) || this;
                        return _0x39ad8f['_anchor'] = new _0x111862.AB(_0x39ad8f['_onAnchorUpdate'], _0x39ad8f, _0x13f37c ? _0x13f37c.defaultAnchor.x : 0, _0x13f37c ? _0x13f37c.defaultAnchor.y : 0), _0x39ad8f['_texture'] = null, _0x39ad8f['_width'] = 0, _0x39ad8f['_height'] = 0, _0x39ad8f['_tint'] = null, _0x39ad8f['_tintRGB'] = null, _0x39ad8f.tint = 16777215, _0x39ad8f.blendMode = _0x1bded1['T$'].NORMAL, _0x39ad8f['_cachedTint'] = 16777215, _0x39ad8f.uvs = null, _0x39ad8f.texture = _0x13f37c || _0x2d5595.xE.EMPTY, _0x39ad8f.vertexData = new Float32Array(8), _0x39ad8f.vertexTrimmedData = null, _0x39ad8f['_transformID'] = -1, _0x39ad8f['_textureID'] = -1, _0x39ad8f['_transformTrimmedID'] = -1, _0x39ad8f['_textureTrimmedID'] = -1, _0x39ad8f.indices = _0x449fc1, _0x39ad8f.pluginName = 'batch', _0x39ad8f.isSprite = true, _0x39ad8f['_roundPixels'] = _0x35e2aa.X.ROUND_PIXELS, _0x39ad8f;
                    }
                    return function (_0x2c8493, _0x1a638f) {
                        ;
                        function _0x575d11() {
                            this.constructor = _0x2c8493;
                        }
                        _0xbb23a3(_0x2c8493, _0x1a638f);
                        _0x2c8493.prototype = null === _0x1a638f ? Object.create(_0x1a638f) : (_0x575d11.prototype = _0x1a638f.prototype, new _0x575d11());
                    }(_0x333a89, _0x14c1cb), _0x333a89.prototype['_onTextureUpdate'] = function () {
                        ;
                        this['_textureID'] = -1;
                        this['_textureTrimmedID'] = -1;
                        this['_cachedTint'] = 16777215;
                        this['_width'] && (this.scale.x = (0, _0x18f9e1.Xx)(this.scale.x) * this['_width'] / this['_texture'].orig.width);
                        this['_height'] && (this.scale.y = (0, _0x18f9e1.Xx)(this.scale.y) * this['_height'] / this['_texture'].orig.height);
                    }, _0x333a89.prototype['_onAnchorUpdate'] = function () {
                        ;
                        this['_transformID'] = -1;
                        this['_transformTrimmedID'] = -1;
                    }, _0x333a89.prototype.calculateVertices = function () {
                        var _0x24919d = this['_texture'];
                        if (this['_transformID'] !== this.transform['_worldID'] || this['_textureID'] !== _0x24919d['_updateID']) {
                            this['_textureID'] !== _0x24919d['_updateID'] && (this.uvs = this['_texture']['_uvs'].uvsFloat32);
                            this['_transformID'] = this.transform['_worldID'];
                            this['_textureID'] = _0x24919d['_updateID'];
                            var _0x4773f5 = this.transform.worldTransform, _0xad1e7b = _0x4773f5.a, _0x30159d = _0x4773f5.b, _0x964b41 = _0x4773f5.c, _0x413e2c = _0x4773f5.d, _0x4bbe81 = _0x4773f5.tx, _0x5e361a = _0x4773f5.ty, _0x1924ba = this.vertexData, _0x5c79b1 = _0x24919d.trim, _0x2cebf6 = _0x24919d.orig, _0x502a42 = this['_anchor'], _0x110d7f = 0, _0x584cda = 0, _0x145bcf = 0, _0xf73554 = 0;
                            if (_0x5c79b1 ? (_0x110d7f = (_0x584cda = _0x5c79b1.x - _0x502a42['_x'] * _0x2cebf6.width) + _0x5c79b1.width, _0x145bcf = (_0xf73554 = _0x5c79b1.y - _0x502a42['_y'] * _0x2cebf6.height) + _0x5c79b1.height) : (_0x110d7f = (_0x584cda = -_0x502a42['_x'] * _0x2cebf6.width) + _0x2cebf6.width, _0x145bcf = (_0xf73554 = -_0x502a42['_y'] * _0x2cebf6.height) + _0x2cebf6.height), _0x1924ba[0] = _0xad1e7b * _0x584cda + _0x964b41 * _0xf73554 + _0x4bbe81, _0x1924ba[1] = _0x413e2c * _0xf73554 + _0x30159d * _0x584cda + _0x5e361a, _0x1924ba[2] = _0xad1e7b * _0x110d7f + _0x964b41 * _0xf73554 + _0x4bbe81, _0x1924ba[3] = _0x413e2c * _0xf73554 + _0x30159d * _0x110d7f + _0x5e361a, _0x1924ba[4] = _0xad1e7b * _0x110d7f + _0x964b41 * _0x145bcf + _0x4bbe81, _0x1924ba[5] = _0x413e2c * _0x145bcf + _0x30159d * _0x110d7f + _0x5e361a, _0x1924ba[6] = _0xad1e7b * _0x584cda + _0x964b41 * _0x145bcf + _0x4bbe81, _0x1924ba[7] = _0x413e2c * _0x145bcf + _0x30159d * _0x584cda + _0x5e361a, this['_roundPixels']) {
                                for (var _0x4a2115 = _0x35e2aa.X.RESOLUTION, _0x394332 = 0; _0x394332 < _0x1924ba.length; ++_0x394332) {
                                    _0x1924ba[_0x394332] = Math.round((_0x1924ba[_0x394332] * _0x4a2115 | 0) / _0x4a2115);
                                }
                            }
                        }
                    }, _0x333a89.prototype.calculateTrimmedVertices = function () {
                        ;
                        if (this.vertexTrimmedData) {
                            if (this['_transformTrimmedID'] === this.transform['_worldID'] && this['_textureTrimmedID'] === this['_texture']['_updateID']) {
                                return;
                            }
                        } else {
                            this.vertexTrimmedData = new Float32Array(8);
                        }
                        this['_transformTrimmedID'] = this.transform['_worldID'];
                        this['_textureTrimmedID'] = this['_texture']['_updateID'];
                        var _0x1a1840 = this['_texture'], _0x433210 = this.vertexTrimmedData, _0x4d2e44 = _0x1a1840.orig, _0x436b15 = this['_anchor'], _0x4d7e10 = this.transform.worldTransform, _0x520add = _0x4d7e10.a, _0x569c2d = _0x4d7e10.b, _0x5c80b3 = _0x4d7e10.c, _0x3937a1 = _0x4d7e10.d, _0x4f0f4e = _0x4d7e10.tx, _0x15103f = _0x4d7e10.ty, _0x28c829 = -_0x436b15['_x'] * _0x4d2e44.width, _0x539dad = _0x28c829 + _0x4d2e44.width, _0x15e14b = -_0x436b15['_y'] * _0x4d2e44.height, _0x30a451 = _0x15e14b + _0x4d2e44.height;
                        _0x433210[0] = _0x520add * _0x28c829 + _0x5c80b3 * _0x15e14b + _0x4f0f4e;
                        _0x433210[1] = _0x3937a1 * _0x15e14b + _0x569c2d * _0x28c829 + _0x15103f;
                        _0x433210[2] = _0x520add * _0x539dad + _0x5c80b3 * _0x15e14b + _0x4f0f4e;
                        _0x433210[3] = _0x3937a1 * _0x15e14b + _0x569c2d * _0x539dad + _0x15103f;
                        _0x433210[4] = _0x520add * _0x539dad + _0x5c80b3 * _0x30a451 + _0x4f0f4e;
                        _0x433210[5] = _0x3937a1 * _0x30a451 + _0x569c2d * _0x539dad + _0x15103f;
                        _0x433210[6] = _0x520add * _0x28c829 + _0x5c80b3 * _0x30a451 + _0x4f0f4e;
                        _0x433210[7] = _0x3937a1 * _0x30a451 + _0x569c2d * _0x28c829 + _0x15103f;
                    }, _0x333a89.prototype['_render'] = function (_0x243e46) {
                        ;
                        this.calculateVertices();
                        _0x243e46.batch.setObjectRenderer(_0x243e46.plugins[this.pluginName]);
                        _0x243e46.plugins[this.pluginName].render(this);
                    }, _0x333a89.prototype['_calculateBounds'] = function () {
                        var _0x2996cb = this['_texture'].trim, _0x4f3717 = this['_texture'].orig;
                        !_0x2996cb || _0x2996cb.width === _0x4f3717.width && _0x2996cb.height === _0x4f3717.height ? (this.calculateVertices(), this['_bounds'].addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this['_bounds'].addQuad(this.vertexTrimmedData));
                    }, _0x333a89.prototype.getLocalBounds = function (_0x1b0b21) {
                        ;
                        return 0 === this.children.length ? (this['_localBounds'] || (this['_localBounds'] = new _0x52e6fc.YZ()), this['_localBounds'].minX = this['_texture'].orig.width * -this['_anchor']['_x'], this['_localBounds'].minY = this['_texture'].orig.height * -this['_anchor']['_y'], this['_localBounds'].maxX = this['_texture'].orig.width * (1 - this['_anchor']['_x']), this['_localBounds'].maxY = this['_texture'].orig.height * (1 - this['_anchor']['_y']), _0x1b0b21 || (this['_localBoundsRect'] || (this['_localBoundsRect'] = new _0x111862.Ae()), _0x1b0b21 = this['_localBoundsRect']), this['_localBounds'].getRectangle(_0x1b0b21)) : _0x14c1cb.prototype.getLocalBounds.call(this, _0x1b0b21);
                    }, _0x333a89.prototype.containsPoint = function (_0xe62a4e) {
                        ;
                        this.worldTransform.applyInverse(_0xe62a4e, _0x349b1e);
                        var _0x255cf7 = this['_texture'].orig.width, _0x5cb7b3 = this['_texture'].orig.height, _0xa9403a = -_0x255cf7 * this.anchor.x, _0x296af5 = 0;
                        return _0x349b1e.x >= _0xa9403a && _0x349b1e.x < _0xa9403a + _0x255cf7 && (_0x296af5 = -_0x5cb7b3 * this.anchor.y, _0x349b1e.y >= _0x296af5 && _0x349b1e.y < _0x296af5 + _0x5cb7b3);
                    }, _0x333a89.prototype.destroy = function (_0x801052) {
                        ;
                        if (_0x14c1cb.prototype.destroy.call(this, _0x801052), this['_texture'].off('update', this['_onTextureUpdate'], this), this['_anchor'] = null, 'boolean' == typeof _0x801052 ? _0x801052 : _0x801052 && _0x801052.texture) {
                            var _0x1c0f2d = 'boolean' == typeof _0x801052 ? _0x801052 : _0x801052 && _0x801052.baseTexture;
                            this['_texture'].destroy(!!_0x1c0f2d);
                        }
                        this['_texture'] = null;
                    }, _0x333a89.from = function (_0x8fd96b, _0x200a4b) {
                        ;
                        return new _0x333a89(_0x8fd96b instanceof _0x2d5595.xE ? _0x8fd96b : _0x2d5595.xE.from(_0x8fd96b, _0x200a4b));
                    }, Object.defineProperty(_0x333a89.prototype, 'roundPixels', {
                        'get': function () {
                            ;
                            return this['_roundPixels'];
                        },
                        'set': function (_0x5d21ec) {
                            ;
                            this['_roundPixels'] !== _0x5d21ec && (this['_transformID'] = -1);
                            this['_roundPixels'] = _0x5d21ec;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x333a89.prototype, 'width', {
                        'get': function () {
                            ;
                            return Math.abs(this.scale.x) * this['_texture'].orig.width;
                        },
                        'set': function (_0x3f2a1b) {
                            var _0x37a8ec = (0, _0x18f9e1.Xx)(this.scale.x) || 1;
                            this.scale.x = _0x37a8ec * _0x3f2a1b / this['_texture'].orig.width;
                            this['_width'] = _0x3f2a1b;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x333a89.prototype, 'height', {
                        'get': function () {
                            ;
                            return Math.abs(this.scale.y) * this['_texture'].orig.height;
                        },
                        'set': function (_0x3ad272) {
                            var _0x4248ac = (0, _0x18f9e1.Xx)(this.scale.y) || 1;
                            this.scale.y = _0x4248ac * _0x3ad272 / this['_texture'].orig.height;
                            this['_height'] = _0x3ad272;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x333a89.prototype, 'anchor', {
                        'get': function () {
                            return this['_anchor'];
                        },
                        'set': function (_0x515733) {
                            ;
                            this['_anchor'].copyFrom(_0x515733);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x333a89.prototype, 'tint', {
                        'get': function () {
                            ;
                            return this['_tint'];
                        },
                        'set': function (_0xc991b2) {
                            ;
                            this['_tint'] = _0xc991b2;
                            this['_tintRGB'] = (_0xc991b2 >> 16) + (65280 & _0xc991b2) + ((255 & _0xc991b2) << 16);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x333a89.prototype, 'texture', {
                        'get': function () {
                            ;
                            return this['_texture'];
                        },
                        'set': function (_0x276827) {
                            ;
                            this['_texture'] !== _0x276827 && (this['_texture'] && this['_texture'].off('update', this['_onTextureUpdate'], this), this['_texture'] = _0x276827 || _0x2d5595.xE.EMPTY, this['_cachedTint'] = 16777215, this['_textureID'] = -1, this['_textureTrimmedID'] = -1, _0x276827 && (_0x276827.baseTexture.valid ? this['_onTextureUpdate']() : _0x276827.once('update', this['_onTextureUpdate'], this)));
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x333a89;
                }(_0x52e6fc.W2);
        },
        126: (_0x504857, _0x18a530, _0x1bc475) => {
            'use strict';
            _0x1bc475.d(_0x18a530, { 'o': () => _0x26e92f });
            var _0x1fa5dd = _0x1bc475(658), _0x34f547 = _0x1bc475(710), _0x571172 = _0x1bc475(942), _0x26cffb = _0x1bc475(550), _0x409a4d = function () {
                    ;
                    function _0x4d392c(_0x50341c, _0x238040, _0x1ba386) {
                        ;
                        void 0 === _0x1ba386 && (_0x1ba386 = null);
                        this['_texture'] = _0x50341c instanceof _0x34f547.xE ? _0x50341c : null;
                        this.baseTexture = _0x50341c instanceof _0x34f547.VL ? _0x50341c : this['_texture'].baseTexture;
                        this.textures = {};
                        this.animations = {};
                        this.data = _0x238040;
                        var _0x3d57bb = this.baseTexture.resource;
                        this.resolution = this['_updateResolution'](_0x1ba386 || (_0x3d57bb ? _0x3d57bb.url : null));
                        this['_frames'] = this.data.frames;
                        this['_frameKeys'] = Object.keys(this['_frames']);
                        this['_batchIndex'] = 0;
                        this['_callback'] = null;
                    }
                    return _0x4d392c.prototype['_updateResolution'] = function (_0x39fe52) {
                        ;
                        void 0 === _0x39fe52 && (_0x39fe52 = null);
                        var _0xfb4b9 = this.data.meta.scale, _0xc3c085 = (0, _0x571172.fL)(_0x39fe52, null);
                        return null === _0xc3c085 && (_0xc3c085 = void 0 !== _0xfb4b9 ? parseFloat(_0xfb4b9) : 1), 1 !== _0xc3c085 && this.baseTexture.setResolution(_0xc3c085), _0xc3c085;
                    }, _0x4d392c.prototype.parse = function (_0x3e373b) {
                        ;
                        this['_batchIndex'] = 0;
                        this['_callback'] = _0x3e373b;
                        this['_frameKeys'].length <= _0x4d392c.BATCH_SIZE ? (this['_processFrames'](0), this['_processAnimations'](), this['_parseComplete']()) : this['_nextBatch']();
                    }, _0x4d392c.prototype['_processFrames'] = function (_0x9d3763) {
                        ;
                        for (var _0x3c272d = _0x9d3763, _0xffd2b0 = _0x4d392c.BATCH_SIZE; _0x3c272d - _0x9d3763 < _0xffd2b0 && _0x3c272d < this['_frameKeys'].length;) {
                            var _0x1154e3 = this['_frameKeys'][_0x3c272d], _0x5e1977 = this['_frames'][_0x1154e3], _0x102a46 = _0x5e1977.frame;
                            if (_0x102a46) {
                                var _0x10c0d5, _0x3815f5 = null, _0x45121 = false !== _0x5e1977.trimmed && _0x5e1977.sourceSize ? _0x5e1977.sourceSize : _0x5e1977.frame, _0x1b318f = new _0x1fa5dd.Ae(0, 0, Math.floor(_0x45121.w) / this.resolution, Math.floor(_0x45121.h) / this.resolution);
                                _0x10c0d5 = _0x5e1977.rotated ? new _0x1fa5dd.Ae(Math.floor(_0x102a46.x) / this.resolution, Math.floor(_0x102a46.y) / this.resolution, Math.floor(_0x102a46.h) / this.resolution, Math.floor(_0x102a46.w) / this.resolution) : new _0x1fa5dd.Ae(Math.floor(_0x102a46.x) / this.resolution, Math.floor(_0x102a46.y) / this.resolution, Math.floor(_0x102a46.w) / this.resolution, Math.floor(_0x102a46.h) / this.resolution);
                                false !== _0x5e1977.trimmed && _0x5e1977.spriteSourceSize && (_0x3815f5 = new _0x1fa5dd.Ae(Math.floor(_0x5e1977.spriteSourceSize.x) / this.resolution, Math.floor(_0x5e1977.spriteSourceSize.y) / this.resolution, Math.floor(_0x102a46.w) / this.resolution, Math.floor(_0x102a46.h) / this.resolution));
                                this.textures[_0x1154e3] = new _0x34f547.xE(this.baseTexture, _0x10c0d5, _0x1b318f, _0x3815f5, _0x5e1977.rotated ? 2 : 0, _0x5e1977.anchor);
                                _0x34f547.xE.addToCache(this.textures[_0x1154e3], _0x1154e3);
                            }
                            _0x3c272d++;
                        }
                    }, _0x4d392c.prototype['_processAnimations'] = function () {
                        var _0x59d30b = this.data.animations || {};
                        for (var _0xb4932e in _0x59d30b) {
                            this.animations[_0xb4932e] = [];
                            for (var _0x3adb14 = 0; _0x3adb14 < _0x59d30b[_0xb4932e].length; _0x3adb14++) {
                                var _0x1c42d9 = _0x59d30b[_0xb4932e][_0x3adb14];
                                this.animations[_0xb4932e].push(this.textures[_0x1c42d9]);
                            }
                        }
                    }, _0x4d392c.prototype['_parseComplete'] = function () {
                        var _0x6a2ec5 = this['_callback'];
                        this['_callback'] = null;
                        this['_batchIndex'] = 0;
                        _0x6a2ec5.call(this, this.textures);
                    }, _0x4d392c.prototype['_nextBatch'] = function () {
                        var _0x26f8ed = this;
                        this['_processFrames'](this['_batchIndex'] * _0x4d392c.BATCH_SIZE);
                        this['_batchIndex']++;
                        setTimeout(function () {
                            ;
                            _0x26f8ed['_batchIndex'] * _0x4d392c.BATCH_SIZE < _0x26f8ed['_frameKeys'].length ? _0x26f8ed['_nextBatch']() : (_0x26f8ed['_processAnimations'](), _0x26f8ed['_parseComplete']());
                        }, 0);
                    }, _0x4d392c.prototype.destroy = function (_0x4c6f17) {
                        var _0x5cd532;
                        for (var _0x10cf68 in (void 0 === _0x4c6f17 && (_0x4c6f17 = false), this.textures))
                            this.textures[_0x10cf68].destroy();
                        this['_frames'] = null;
                        this['_frameKeys'] = null;
                        this.data = null;
                        this.textures = null;
                        _0x4c6f17 && (null === (_0x5cd532 = this['_texture']) || void 0 === _0x5cd532 || _0x5cd532.destroy(), this.baseTexture.destroy());
                        this['_texture'] = null;
                        this.baseTexture = null;
                    }, _0x4d392c.BATCH_SIZE = 1000, _0x4d392c;
                }(), _0x26e92f = function () {
                    ;
                    function _0x4d8bfd() {
                    }
                    return _0x4d8bfd.use = function (_0x11974e, _0x2cba46) {
                        var _0x99cf45, _0x11029e, _0x55a57b = this, _0x2e09d7 = _0x11974e.name + '_image';
                        if (_0x11974e.data && _0x11974e.type === _0x26cffb.kC.TYPE.JSON && _0x11974e.data.frames && !_0x55a57b.resources[_0x2e09d7]) {
                            var _0x2e3776 = null === (_0x11029e = null === (_0x99cf45 = _0x11974e.data) || void 0 === _0x99cf45 ? void 0 : _0x99cf45.meta) || void 0 === _0x11029e ? void 0 : _0x11029e.related_multi_packs;
                            if (Array.isArray(_0x2e3776)) {
                                for (var _0x3defb3 = function (_0x35f0e8) {
                                            ;
                                            if ('string' != typeof _0x35f0e8) {
                                                return 'continue';
                                            }
                                            var _0x43536b = _0x35f0e8.replace('.json', ''), _0x56adba = _0x571172.HQ.resolve(_0x11974e.url.replace(_0x55a57b.baseUrl, ''), _0x35f0e8);
                                            if (_0x55a57b.resources[_0x43536b] || Object.values(_0x55a57b.resources).some(function (_0x3f1cde) {
                                                    ;
                                                    return _0x571172.HQ.format(_0x571172.HQ.parse(_0x3f1cde.url)) === _0x56adba;
                                                })) {
                                                return 'continue';
                                            }
                                            var _0x490d5f = {
                                                'crossOrigin': _0x11974e.crossOrigin,
                                                'loadType': _0x26cffb.kC.LOAD_TYPE.XHR,
                                                'xhrType': _0x26cffb.kC.XHR_RESPONSE_TYPE.JSON,
                                                'parentResource': _0x11974e,
                                                'metadata': _0x11974e.metadata
                                            };
                                            _0x55a57b.add(_0x43536b, _0x56adba, _0x490d5f);
                                        }, _0x1fb970 = 0, _0x13dcc5 = _0x2e3776; _0x1fb970 < _0x13dcc5.length; _0x1fb970++) {
                                    _0x3defb3(_0x13dcc5[_0x1fb970]);
                                }
                            }
                            var _0x49cb5c = {
                                    'crossOrigin': _0x11974e.crossOrigin,
                                    'metadata': _0x11974e.metadata.imageMetadata,
                                    'parentResource': _0x11974e
                                }, _0x4f2264 = _0x4d8bfd.getResourcePath(_0x11974e, _0x55a57b.baseUrl);
                            _0x55a57b.add(_0x2e09d7, _0x4f2264, _0x49cb5c, function (_0x463b55) {
                                ;
                                if (_0x463b55.error) {
                                    _0x2cba46(_0x463b55.error);
                                } else {
                                    var _0x186fc9 = new _0x409a4d(_0x463b55.texture, _0x11974e.data, _0x11974e.url);
                                    _0x186fc9.parse(function () {
                                        ;
                                        _0x11974e.spritesheet = _0x186fc9;
                                        _0x11974e.textures = _0x186fc9.textures;
                                        _0x2cba46();
                                    });
                                }
                            });
                        } else {
                            _0x2cba46();
                        }
                    }, _0x4d8bfd.getResourcePath = function (_0x3c28c9, _0x29740b) {
                        ;
                        return _0x3c28c9.isDataUrl ? _0x3c28c9.data.meta.image : _0x571172.HQ.resolve(_0x3c28c9.url.replace(_0x29740b, ''), _0x3c28c9.data.meta.image);
                    }, _0x4d8bfd;
                }();
        },
        886: (_0x3d78bf, _0x4c1391, _0x4e450e) => {
            'use strict';
            ;
            _0x4e450e.d(_0x4c1391, {
                '_A': () => _0x2526fa,
                'pn': () => _0xe6e90b,
                'xv': () => _0x231602
            });
            var _0x332d4d, _0x48ef0c = _0x4e450e(33), _0x4eb27a = _0x4e450e(710), _0x58ae15 = _0x4e450e(319), _0x16dfcf = _0x4e450e(658), _0xeee678 = _0x4e450e(942), _0x4f4fbd = function (_0x5ca984, _0x262680) {
                    ;
                    return _0x4f4fbd = Object.setPrototypeOf || { '__proto__': [] } instanceof Array && function (_0x1ec229, _0x48442a) {
                        ;
                        _0x1ec229['__proto__'] = _0x48442a;
                    } || function (_0x6c5d51, _0x5e77ad) {
                        ;
                        for (var _0x2b66bc in _0x5e77ad)
                            _0x5e77ad.hasOwnProperty(_0x2b66bc) && (_0x6c5d51[_0x2b66bc] = _0x5e77ad[_0x2b66bc]);
                    }, _0x4f4fbd(_0x5ca984, _0x262680);
                };
            !function (_0x1096cc) {
                ;
                _0x1096cc[_0x1096cc.LINEAR_VERTICAL = 0] = 'LINEAR_VERTICAL';
                _0x1096cc[_0x1096cc.LINEAR_HORIZONTAL = 1] = 'LINEAR_HORIZONTAL';
            }(_0x332d4d || (_0x332d4d = {}));
            var _0x380d59 = {
                    'align': 'left',
                    'breakWords': false,
                    'dropShadow': false,
                    'dropShadowAlpha': 1,
                    'dropShadowAngle': Math.PI / 6,
                    'dropShadowBlur': 0,
                    'dropShadowColor': 'black',
                    'dropShadowDistance': 5,
                    'fill': 'black',
                    'fillGradientType': _0x332d4d.LINEAR_VERTICAL,
                    'fillGradientStops': [],
                    'fontFamily': 'Arial',
                    'fontSize': 26,
                    'fontStyle': 'normal',
                    'fontVariant': 'normal',
                    'fontWeight': 'normal',
                    'letterSpacing': 0,
                    'lineHeight': 0,
                    'lineJoin': 'miter',
                    'miterLimit': 10,
                    'padding': 0,
                    'stroke': 'black',
                    'strokeThickness': 0,
                    'textBaseline': 'alphabetic',
                    'trim': false,
                    'whiteSpace': 'pre',
                    'wordWrap': false,
                    'wordWrapWidth': 100,
                    'leading': 0
                }, _0x2cd04d = [
                    'serif',
                    'sans-serif',
                    'monospace',
                    'cursive',
                    'fantasy',
                    'system-ui'
                ], _0xe6e90b = function () {
                    ;
                    function _0x294c4c(_0x55e6d3) {
                        ;
                        this.styleID = 0;
                        this.reset();
                        _0x392562(this, _0x55e6d3, _0x55e6d3);
                    }
                    return _0x294c4c.prototype.clone = function () {
                        var _0x11710a = {};
                        return _0x392562(_0x11710a, this, _0x380d59), new _0x294c4c(_0x11710a);
                    }, _0x294c4c.prototype.reset = function () {
                        _0x392562(this, _0x380d59, _0x380d59);
                    }, Object.defineProperty(_0x294c4c.prototype, 'align', {
                        'get': function () {
                            return this['_align'];
                        },
                        'set': function (_0x5e677e) {
                            ;
                            this['_align'] !== _0x5e677e && (this['_align'] = _0x5e677e, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'breakWords', {
                        'get': function () {
                            return this['_breakWords'];
                        },
                        'set': function (_0x1c66d4) {
                            ;
                            this['_breakWords'] !== _0x1c66d4 && (this['_breakWords'] = _0x1c66d4, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'dropShadow', {
                        'get': function () {
                            ;
                            return this['_dropShadow'];
                        },
                        'set': function (_0xb10ab3) {
                            ;
                            this['_dropShadow'] !== _0xb10ab3 && (this['_dropShadow'] = _0xb10ab3, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'dropShadowAlpha', {
                        'get': function () {
                            ;
                            return this['_dropShadowAlpha'];
                        },
                        'set': function (_0x123118) {
                            ;
                            this['_dropShadowAlpha'] !== _0x123118 && (this['_dropShadowAlpha'] = _0x123118, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'dropShadowAngle', {
                        'get': function () {
                            ;
                            return this['_dropShadowAngle'];
                        },
                        'set': function (_0x344268) {
                            ;
                            this['_dropShadowAngle'] !== _0x344268 && (this['_dropShadowAngle'] = _0x344268, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'dropShadowBlur', {
                        'get': function () {
                            ;
                            return this['_dropShadowBlur'];
                        },
                        'set': function (_0x4397f5) {
                            ;
                            this['_dropShadowBlur'] !== _0x4397f5 && (this['_dropShadowBlur'] = _0x4397f5, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'dropShadowColor', {
                        'get': function () {
                            return this['_dropShadowColor'];
                        },
                        'set': function (_0x5c1a26) {
                            var _0x49f358 = _0x5f2140(_0x5c1a26);
                            this['_dropShadowColor'] !== _0x49f358 && (this['_dropShadowColor'] = _0x49f358, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'dropShadowDistance', {
                        'get': function () {
                            ;
                            return this['_dropShadowDistance'];
                        },
                        'set': function (_0x3ed5b5) {
                            ;
                            this['_dropShadowDistance'] !== _0x3ed5b5 && (this['_dropShadowDistance'] = _0x3ed5b5, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'fill', {
                        'get': function () {
                            return this['_fill'];
                        },
                        'set': function (_0x47a003) {
                            var _0x464df4 = _0x5f2140(_0x47a003);
                            this['_fill'] !== _0x464df4 && (this['_fill'] = _0x464df4, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'fillGradientType', {
                        'get': function () {
                            ;
                            return this['_fillGradientType'];
                        },
                        'set': function (_0x404512) {
                            ;
                            this['_fillGradientType'] !== _0x404512 && (this['_fillGradientType'] = _0x404512, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'fillGradientStops', {
                        'get': function () {
                            ;
                            return this['_fillGradientStops'];
                        },
                        'set': function (_0x2dff8b) {
                            ;
                            (function (_0x374cd9, _0x58726a) {
                                ;
                                if (!Array.isArray(_0x374cd9) || !Array.isArray(_0x58726a)) {
                                    return false;
                                }
                                if (_0x374cd9.length !== _0x58726a.length) {
                                    return false;
                                }
                                for (var _0x1ee67f = 0; _0x1ee67f < _0x374cd9.length; ++_0x1ee67f) {
                                    if (_0x374cd9[_0x1ee67f] !== _0x58726a[_0x1ee67f]) {
                                        return false;
                                    }
                                }
                                return true;
                            }(this['_fillGradientStops'], _0x2dff8b) || (this['_fillGradientStops'] = _0x2dff8b, this.styleID++));
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'fontFamily', {
                        'get': function () {
                            ;
                            return this['_fontFamily'];
                        },
                        'set': function (_0x54b8e6) {
                            ;
                            this.fontFamily !== _0x54b8e6 && (this['_fontFamily'] = _0x54b8e6, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'fontSize', {
                        'get': function () {
                            return this['_fontSize'];
                        },
                        'set': function (_0x1af156) {
                            ;
                            this['_fontSize'] !== _0x1af156 && (this['_fontSize'] = _0x1af156, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'fontStyle', {
                        'get': function () {
                            ;
                            return this['_fontStyle'];
                        },
                        'set': function (_0x7591a) {
                            ;
                            this['_fontStyle'] !== _0x7591a && (this['_fontStyle'] = _0x7591a, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'fontVariant', {
                        'get': function () {
                            ;
                            return this['_fontVariant'];
                        },
                        'set': function (_0x3c8ad9) {
                            ;
                            this['_fontVariant'] !== _0x3c8ad9 && (this['_fontVariant'] = _0x3c8ad9, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'fontWeight', {
                        'get': function () {
                            ;
                            return this['_fontWeight'];
                        },
                        'set': function (_0x55f30e) {
                            ;
                            this['_fontWeight'] !== _0x55f30e && (this['_fontWeight'] = _0x55f30e, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'letterSpacing', {
                        'get': function () {
                            ;
                            return this['_letterSpacing'];
                        },
                        'set': function (_0x5db012) {
                            ;
                            this['_letterSpacing'] !== _0x5db012 && (this['_letterSpacing'] = _0x5db012, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'lineHeight', {
                        'get': function () {
                            return this['_lineHeight'];
                        },
                        'set': function (_0x1be1b3) {
                            ;
                            this['_lineHeight'] !== _0x1be1b3 && (this['_lineHeight'] = _0x1be1b3, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'leading', {
                        'get': function () {
                            ;
                            return this['_leading'];
                        },
                        'set': function (_0x2d6794) {
                            this['_leading'] !== _0x2d6794 && (this['_leading'] = _0x2d6794, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'lineJoin', {
                        'get': function () {
                            ;
                            return this['_lineJoin'];
                        },
                        'set': function (_0x28e5c7) {
                            ;
                            this['_lineJoin'] !== _0x28e5c7 && (this['_lineJoin'] = _0x28e5c7, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'miterLimit', {
                        'get': function () {
                            return this['_miterLimit'];
                        },
                        'set': function (_0x3bb80c) {
                            ;
                            this['_miterLimit'] !== _0x3bb80c && (this['_miterLimit'] = _0x3bb80c, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'padding', {
                        'get': function () {
                            return this['_padding'];
                        },
                        'set': function (_0x26698b) {
                            ;
                            this['_padding'] !== _0x26698b && (this['_padding'] = _0x26698b, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'stroke', {
                        'get': function () {
                            return this['_stroke'];
                        },
                        'set': function (_0x635fb3) {
                            var _0x44842a = _0x5f2140(_0x635fb3);
                            this['_stroke'] !== _0x44842a && (this['_stroke'] = _0x44842a, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'strokeThickness', {
                        'get': function () {
                            ;
                            return this['_strokeThickness'];
                        },
                        'set': function (_0x182dfc) {
                            ;
                            this['_strokeThickness'] !== _0x182dfc && (this['_strokeThickness'] = _0x182dfc, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'textBaseline', {
                        'get': function () {
                            ;
                            return this['_textBaseline'];
                        },
                        'set': function (_0x3a69f1) {
                            ;
                            this['_textBaseline'] !== _0x3a69f1 && (this['_textBaseline'] = _0x3a69f1, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'trim', {
                        'get': function () {
                            return this['_trim'];
                        },
                        'set': function (_0xcfcb15) {
                            ;
                            this['_trim'] !== _0xcfcb15 && (this['_trim'] = _0xcfcb15, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'whiteSpace', {
                        'get': function () {
                            ;
                            return this['_whiteSpace'];
                        },
                        'set': function (_0x466e9e) {
                            ;
                            this['_whiteSpace'] !== _0x466e9e && (this['_whiteSpace'] = _0x466e9e, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'wordWrap', {
                        'get': function () {
                            ;
                            return this['_wordWrap'];
                        },
                        'set': function (_0x421fbf) {
                            ;
                            this['_wordWrap'] !== _0x421fbf && (this['_wordWrap'] = _0x421fbf, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x294c4c.prototype, 'wordWrapWidth', {
                        'get': function () {
                            ;
                            return this['_wordWrapWidth'];
                        },
                        'set': function (_0x58adc6) {
                            ;
                            this['_wordWrapWidth'] !== _0x58adc6 && (this['_wordWrapWidth'] = _0x58adc6, this.styleID++);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x294c4c.prototype.toFontString = function () {
                        var _0x3f0959 = 'number' == typeof this.fontSize ? this.fontSize + 'px' : this.fontSize, _0x38f9f3 = this.fontFamily;
                        Array.isArray(this.fontFamily) || (_0x38f9f3 = this.fontFamily.split(','));
                        for (var _0x4d1301 = _0x38f9f3.length - 1; _0x4d1301 >= 0; _0x4d1301--) {
                            var _0x516049 = _0x38f9f3[_0x4d1301].trim();
                            !/([\"\'])[^\'\"]+\1/.test(_0x516049) && _0x2cd04d.indexOf(_0x516049) < 0 && (_0x516049 = '"' + _0x516049 + '"');
                            _0x38f9f3[_0x4d1301] = _0x516049;
                        }
                        return this.fontStyle + ' ' + this.fontVariant + ' ' + this.fontWeight + ' ' + _0x3f0959 + ' ' + _0x38f9f3.join(',');
                    }, _0x294c4c;
                }();
            function _0x5ab11c(_0x19add7) {
                ;
                return 'number' == typeof _0x19add7 ? (0, _0xeee678.XN)(_0x19add7) : ('string' == typeof _0x19add7 && 0 === _0x19add7.indexOf('0x') && (_0x19add7 = _0x19add7.replace('0x', '#')), _0x19add7);
            }
            function _0x5f2140(_0x2d3ce1) {
                ;
                if (Array.isArray(_0x2d3ce1)) {
                    for (var _0xbc587d = 0; _0xbc587d < _0x2d3ce1.length; ++_0xbc587d) {
                        _0x2d3ce1[_0xbc587d] = _0x5ab11c(_0x2d3ce1[_0xbc587d]);
                    }
                    return _0x2d3ce1;
                }
                return _0x5ab11c(_0x2d3ce1);
            }
            function _0x392562(_0x1333e3, _0xa6c3e6, _0x1a2e8c) {
                ;
                for (var _0x23394c in _0x1a2e8c)
                    Array.isArray(_0xa6c3e6[_0x23394c]) ? _0x1333e3[_0x23394c] = _0xa6c3e6[_0x23394c].slice() : _0x1333e3[_0x23394c] = _0xa6c3e6[_0x23394c];
            }
            var _0x2526fa = function () {
                ;
                function _0x2d78b7(_0x365ff8, _0x462c9d, _0x384465, _0x4ea078, _0x3b4622, _0x58d434, _0x1075f6, _0x248d61, _0x2f261d) {
                    ;
                    this.text = _0x365ff8;
                    this.style = _0x462c9d;
                    this.width = _0x384465;
                    this.height = _0x4ea078;
                    this.lines = _0x3b4622;
                    this.lineWidths = _0x58d434;
                    this.lineHeight = _0x1075f6;
                    this.maxLineWidth = _0x248d61;
                    this.fontProperties = _0x2f261d;
                }
                return _0x2d78b7.measureText = function (_0x35ab15, _0x3a6fa8, _0x29fd36, _0xfd6763) {
                    ;
                    void 0 === _0xfd6763 && (_0xfd6763 = _0x2d78b7['_canvas']);
                    _0x29fd36 = null == _0x29fd36 ? _0x3a6fa8.wordWrap : _0x29fd36;
                    var _0x14676d = _0x3a6fa8.toFontString(), _0x212462 = _0x2d78b7.measureFont(_0x14676d);
                    0 === _0x212462.fontSize && (_0x212462.fontSize = _0x3a6fa8.fontSize, _0x212462.ascent = _0x3a6fa8.fontSize);
                    var _0xffa203 = _0xfd6763.getContext('2d');
                    _0xffa203.font = _0x14676d;
                    for (var _0x99815b = (_0x29fd36 ? _0x2d78b7.wordWrap(_0x35ab15, _0x3a6fa8, _0xfd6763) : _0x35ab15).split(/(?:\r\n|\r|\n)/), _0x4b91e0 = new Array(_0x99815b.length), _0x3b6d15 = 0, _0xa5ba7 = 0; _0xa5ba7 < _0x99815b.length; _0xa5ba7++) {
                        var _0x4f839e = _0xffa203.measureText(_0x99815b[_0xa5ba7]).width + (_0x99815b[_0xa5ba7].length - 1) * _0x3a6fa8.letterSpacing;
                        _0x4b91e0[_0xa5ba7] = _0x4f839e;
                        _0x3b6d15 = Math.max(_0x3b6d15, _0x4f839e);
                    }
                    var _0x48d631 = _0x3b6d15 + _0x3a6fa8.strokeThickness;
                    _0x3a6fa8.dropShadow && (_0x48d631 += _0x3a6fa8.dropShadowDistance);
                    var _0x298284 = _0x3a6fa8.lineHeight || _0x212462.fontSize + _0x3a6fa8.strokeThickness, _0x56fcec = Math.max(_0x298284, _0x212462.fontSize + _0x3a6fa8.strokeThickness) + (_0x99815b.length - 1) * (_0x298284 + _0x3a6fa8.leading);
                    return _0x3a6fa8.dropShadow && (_0x56fcec += _0x3a6fa8.dropShadowDistance), new _0x2d78b7(_0x35ab15, _0x3a6fa8, _0x48d631, _0x56fcec, _0x99815b, _0x4b91e0, _0x298284 + _0x3a6fa8.leading, _0x3b6d15, _0x212462);
                }, _0x2d78b7.wordWrap = function (_0x33812a, _0x59980e, _0x4aae72) {
                    ;
                    void 0 === _0x4aae72 && (_0x4aae72 = _0x2d78b7['_canvas']);
                    for (var _0x3edbac = _0x4aae72.getContext('2d'), _0xf8c5ff = 0, _0x491af1 = '', _0x3b41b7 = '', _0x25a187 = Object.create(null), _0x361966 = _0x59980e.letterSpacing, _0x2f7712 = _0x59980e.whiteSpace, _0xb73b = _0x2d78b7.collapseSpaces(_0x2f7712), _0x41e179 = _0x2d78b7.collapseNewlines(_0x2f7712), _0x40f9a7 = !_0xb73b, _0x42f583 = _0x59980e.wordWrapWidth + _0x361966, _0x326e3e = _0x2d78b7.tokenize(_0x33812a), _0xf4dfcf = 0; _0xf4dfcf < _0x326e3e.length; _0xf4dfcf++) {
                        var _0x42223d = _0x326e3e[_0xf4dfcf];
                        if (_0x2d78b7.isNewline(_0x42223d)) {
                            if (!_0x41e179) {
                                _0x3b41b7 += _0x2d78b7.addLine(_0x491af1);
                                _0x40f9a7 = !_0xb73b;
                                _0x491af1 = '';
                                _0xf8c5ff = 0;
                                continue;
                            }
                            _0x42223d = ' ';
                        }
                        if (_0xb73b) {
                            var _0x351415 = _0x2d78b7.isBreakingSpace(_0x42223d), _0x376d8a = _0x2d78b7.isBreakingSpace(_0x491af1[_0x491af1.length - 1]);
                            if (_0x351415 && _0x376d8a) {
                                continue;
                            }
                        }
                        var _0x7abab8 = _0x2d78b7.getFromCache(_0x42223d, _0x361966, _0x25a187, _0x3edbac);
                        if (_0x7abab8 > _0x42f583) {
                            if ('' !== _0x491af1 && (_0x3b41b7 += _0x2d78b7.addLine(_0x491af1), _0x491af1 = '', _0xf8c5ff = 0), _0x2d78b7.canBreakWords(_0x42223d, _0x59980e.breakWords)) {
                                for (var _0x5608d4 = _0x2d78b7.wordWrapSplit(_0x42223d), _0x3bc3ac = 0; _0x3bc3ac < _0x5608d4.length; _0x3bc3ac++) {
                                    for (var _0x376f8a = _0x5608d4[_0x3bc3ac], _0x2f20e4 = 1; _0x5608d4[_0x3bc3ac + _0x2f20e4];) {
                                        var _0x34dac9 = _0x5608d4[_0x3bc3ac + _0x2f20e4], _0x1ce0b7 = _0x376f8a[_0x376f8a.length - 1];
                                        if (_0x2d78b7.canBreakChars(_0x1ce0b7, _0x34dac9, _0x42223d, _0x3bc3ac, _0x59980e.breakWords)) {
                                            break;
                                        }
                                        _0x376f8a += _0x34dac9;
                                        _0x2f20e4++;
                                    }
                                    _0x3bc3ac += _0x376f8a.length - 1;
                                    var _0x2c0b60 = _0x2d78b7.getFromCache(_0x376f8a, _0x361966, _0x25a187, _0x3edbac);
                                    _0x2c0b60 + _0xf8c5ff > _0x42f583 && (_0x3b41b7 += _0x2d78b7.addLine(_0x491af1), _0x40f9a7 = false, _0x491af1 = '', _0xf8c5ff = 0);
                                    _0x491af1 += _0x376f8a;
                                    _0xf8c5ff += _0x2c0b60;
                                }
                            } else {
                                _0x491af1.length > 0 && (_0x3b41b7 += _0x2d78b7.addLine(_0x491af1), _0x491af1 = '', _0xf8c5ff = 0);
                                var _0x500295 = _0xf4dfcf === _0x326e3e.length - 1;
                                _0x3b41b7 += _0x2d78b7.addLine(_0x42223d, !_0x500295);
                                _0x40f9a7 = false;
                                _0x491af1 = '';
                                _0xf8c5ff = 0;
                            }
                        } else {
                            _0x7abab8 + _0xf8c5ff > _0x42f583 && (_0x40f9a7 = false, _0x3b41b7 += _0x2d78b7.addLine(_0x491af1), _0x491af1 = '', _0xf8c5ff = 0);
                            (_0x491af1.length > 0 || !_0x2d78b7.isBreakingSpace(_0x42223d) || _0x40f9a7) && (_0x491af1 += _0x42223d, _0xf8c5ff += _0x7abab8);
                        }
                    }
                    return _0x3b41b7 + _0x2d78b7.addLine(_0x491af1, false);
                }, _0x2d78b7.addLine = function (_0x1c49d7, _0x4b804d) {
                    return void 0 === _0x4b804d && (_0x4b804d = true), _0x1c49d7 = _0x2d78b7.trimRight(_0x1c49d7), _0x4b804d ? _0x1c49d7 + '\n' : _0x1c49d7;
                }, _0x2d78b7.getFromCache = function (_0x535308, _0x36d2ae, _0x1f302b, _0x176ea9) {
                    var _0x176996 = _0x1f302b[_0x535308];
                    if ('number' != typeof _0x176996) {
                        var _0x5af697 = _0x535308.length * _0x36d2ae;
                        _0x176996 = _0x176ea9.measureText(_0x535308).width + _0x5af697;
                        _0x1f302b[_0x535308] = _0x176996;
                    }
                    return _0x176996;
                }, _0x2d78b7.collapseSpaces = function (_0x58352f) {
                    ;
                    return 'normal' === _0x58352f || 'pre-line' === _0x58352f;
                }, _0x2d78b7.collapseNewlines = function (_0x468998) {
                    return 'normal' === _0x468998;
                }, _0x2d78b7.trimRight = function (_0x4c6213) {
                    ;
                    if ('string' != typeof _0x4c6213) {
                        return '';
                    }
                    for (var _0x164839 = _0x4c6213.length - 1; _0x164839 >= 0; _0x164839--) {
                        var _0x19effd = _0x4c6213[_0x164839];
                        if (!_0x2d78b7.isBreakingSpace(_0x19effd)) {
                            break;
                        }
                        _0x4c6213 = _0x4c6213.slice(0, -1);
                    }
                    return _0x4c6213;
                }, _0x2d78b7.isNewline = function (_0x13496e) {
                    ;
                    return 'string' == typeof _0x13496e && _0x2d78b7['_newlines'].indexOf(_0x13496e.charCodeAt(0)) >= 0;
                }, _0x2d78b7.isBreakingSpace = function (_0x564f95, _0x256d8f) {
                    ;
                    return 'string' == typeof _0x564f95 && _0x2d78b7['_breakingSpaces'].indexOf(_0x564f95.charCodeAt(0)) >= 0;
                }, _0x2d78b7.tokenize = function (_0x167f5c) {
                    var _0x459cc3 = [], _0x5d9649 = '';
                    if ('string' != typeof _0x167f5c) {
                        return _0x459cc3;
                    }
                    for (var _0xf827ba = 0; _0xf827ba < _0x167f5c.length; _0xf827ba++) {
                        var _0x3e2b7e = _0x167f5c[_0xf827ba], _0x53954d = _0x167f5c[_0xf827ba + 1];
                        _0x2d78b7.isBreakingSpace(_0x3e2b7e, _0x53954d) || _0x2d78b7.isNewline(_0x3e2b7e) ? ('' !== _0x5d9649 && (_0x459cc3.push(_0x5d9649), _0x5d9649 = ''), _0x459cc3.push(_0x3e2b7e)) : _0x5d9649 += _0x3e2b7e;
                    }
                    return '' !== _0x5d9649 && _0x459cc3.push(_0x5d9649), _0x459cc3;
                }, _0x2d78b7.canBreakWords = function (_0x3c099c, _0x576037) {
                    return _0x576037;
                }, _0x2d78b7.canBreakChars = function (_0x41ee2e, _0x1c970f, _0xa569c, _0x16a7a1, _0x5f248f) {
                    return true;
                }, _0x2d78b7.wordWrapSplit = function (_0x484e8f) {
                    ;
                    return _0x484e8f.split('');
                }, _0x2d78b7.measureFont = function (_0x2e3c69) {
                    ;
                    if (_0x2d78b7['_fonts'][_0x2e3c69]) {
                        return _0x2d78b7['_fonts'][_0x2e3c69];
                    }
                    var _0x35daac = _0x2d78b7['_canvas'], _0x5427fa = _0x2d78b7['_context'];
                    _0x5427fa.font = _0x2e3c69;
                    var _0x490e0b = _0x2d78b7.METRICS_STRING + _0x2d78b7.BASELINE_SYMBOL, _0x1c80aa = Math.ceil(_0x5427fa.measureText(_0x490e0b).width), _0x4e2d4f = Math.ceil(_0x5427fa.measureText(_0x2d78b7.BASELINE_SYMBOL).width), _0x2247a8 = Math.ceil(_0x2d78b7.HEIGHT_MULTIPLIER * _0x4e2d4f);
                    _0x4e2d4f = _0x4e2d4f * _0x2d78b7.BASELINE_MULTIPLIER | 0;
                    _0x35daac.width = _0x1c80aa;
                    _0x35daac.height = _0x2247a8;
                    _0x5427fa.fillStyle = '#f00';
                    _0x5427fa.fillRect(0, 0, _0x1c80aa, _0x2247a8);
                    _0x5427fa.font = _0x2e3c69;
                    _0x5427fa.textBaseline = 'alphabetic';
                    _0x5427fa.fillStyle = '#000';
                    _0x5427fa.fillText(_0x490e0b, 0, _0x4e2d4f);
                    var _0x46501c = _0x5427fa.getImageData(0, 0, _0x1c80aa, _0x2247a8).data, _0x541229 = _0x46501c.length, _0x3f7fd9 = 4 * _0x1c80aa, _0x5b910c = 0, _0x43d29f = 0, _0x4542bd = false;
                    for (_0x5b910c = 0; _0x5b910c < _0x4e2d4f; ++_0x5b910c) {
                        for (var _0xc2a160 = 0; _0xc2a160 < _0x3f7fd9; _0xc2a160 += 4) {
                            if (255 !== _0x46501c[_0x43d29f + _0xc2a160]) {
                                _0x4542bd = true;
                                break;
                            }
                        }
                        if (_0x4542bd) {
                            break;
                        }
                        _0x43d29f += _0x3f7fd9;
                    }
                    for (_0xe08b7.ascent = _0x4e2d4f - _0x5b910c, _0x43d29f = _0x541229 - _0x3f7fd9, _0x4542bd = false, _0x5b910c = _0x2247a8; _0x5b910c > _0x4e2d4f; --_0x5b910c) {
                        for (_0xc2a160 = 0; _0xc2a160 < _0x3f7fd9; _0xc2a160 += 4) {
                            if (255 !== _0x46501c[_0x43d29f + _0xc2a160]) {
                                _0x4542bd = true;
                                break;
                            }
                        }
                        if (_0x4542bd) {
                            break;
                        }
                        _0x43d29f -= _0x3f7fd9;
                    }
                    return _0xe08b7.descent = _0x5b910c - _0x4e2d4f, _0xe08b7.fontSize = _0xe08b7.ascent + 0, _0x2d78b7['_fonts'][_0x2e3c69] = _0xe08b7, _0xe08b7;
                }, _0x2d78b7.clearMetrics = function (_0x3edbc4) {
                    ;
                    void 0 === _0x3edbc4 && (_0x3edbc4 = '');
                    _0x3edbc4 ? delete _0x2d78b7['_fonts'][_0x3edbc4] : _0x2d78b7['_fonts'] = {};
                }, Object.defineProperty(_0x2d78b7, '_canvas', {
                    'get': function () {
                        ;
                        if (!_0x2d78b7['__canvas']) {
                            var _0x14ad70 = void 0;
                            try {
                                var _0x2ca9b1 = new OffscreenCanvas(0, 0), _0x373f19 = _0x2ca9b1.getContext('2d');
                                if (_0x373f19 && _0x373f19.measureText) {
                                    return _0x2d78b7['__canvas'] = _0x2ca9b1, _0x2ca9b1;
                                }
                                _0x14ad70 = document.createElement('canvas');
                            } catch (_0x1dfbf5) {
                                _0x14ad70 = document.createElement('canvas');
                            }
                            _0x14ad70.width = _0x14ad70.height = 10;
                            _0x2d78b7['__canvas'] = _0x14ad70;
                        }
                        return _0x2d78b7['__canvas'];
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_0x2d78b7, '_context', {
                    'get': function () {
                        ;
                        return _0x2d78b7['__context'] || (_0x2d78b7['__context'] = _0x2d78b7['_canvas'].getContext('2d')), _0x2d78b7['__context'];
                    },
                    'enumerable': false,
                    'configurable': true
                }), _0x2d78b7;
            }();
            _0x2526fa['_fonts'] = {};
            _0x2526fa.METRICS_STRING = '|ÉqÅ';
            _0x2526fa.BASELINE_SYMBOL = 'M';
            _0x2526fa.BASELINE_MULTIPLIER = 1.4;
            _0x2526fa.HEIGHT_MULTIPLIER = 2;
            _0x2526fa['_newlines'] = [
                10,
                13
            ];
            _0x2526fa['_breakingSpaces'] = [
                9,
                32,
                8192,
                8193,
                8194,
                8195,
                8196,
                8197,
                8198,
                8200,
                8201,
                8202,
                8287,
                12288
            ];
            var _0x231602 = function (_0x10c688) {
                ;
                function _0x4e9560(_0x5d3d71, _0x3ecb37, _0xf4cd57) {
                    var _0x3f1505 = this, _0x17edc4 = false;
                    _0xf4cd57 || (_0xf4cd57 = document.createElement('canvas'), _0x17edc4 = true);
                    _0xf4cd57.width = 3;
                    _0xf4cd57.height = 3;
                    var _0x1ad768 = _0x4eb27a.xE.from(_0xf4cd57);
                    return _0x1ad768.orig = new _0x16dfcf.Ae(), _0x1ad768.trim = new _0x16dfcf.Ae(), (_0x3f1505 = _0x10c688.call(this, _0x1ad768) || this)['_ownCanvas'] = _0x17edc4, _0x3f1505.canvas = _0xf4cd57, _0x3f1505.context = _0x3f1505.canvas.getContext('2d'), _0x3f1505['_resolution'] = _0x58ae15.X.RESOLUTION, _0x3f1505['_autoResolution'] = true, _0x3f1505['_text'] = null, _0x3f1505['_style'] = null, _0x3f1505['_styleListener'] = null, _0x3f1505['_font'] = '', _0x3f1505.text = _0x5d3d71, _0x3f1505.style = _0x3ecb37, _0x3f1505.localStyleID = -1, _0x3f1505;
                }
                return function (_0x16fca3, _0x39b970) {
                    ;
                    function _0x9551db() {
                        this.constructor = _0x16fca3;
                    }
                    _0x4f4fbd(_0x16fca3, _0x39b970);
                    _0x16fca3.prototype = null === _0x39b970 ? Object.create(_0x39b970) : (_0x9551db.prototype = _0x39b970.prototype, new _0x9551db());
                }(_0x4e9560, _0x10c688), _0x4e9560.prototype.updateText = function (_0x324445) {
                    var _0x1aa7ea = this['_style'];
                    if (this.localStyleID !== _0x1aa7ea.styleID && (this.dirty = true, this.localStyleID = _0x1aa7ea.styleID), this.dirty || !_0x324445) {
                        this['_font'] = this['_style'].toFontString();
                        var _0x3e98cc, _0x178cf1, _0x3b7a5e = this.context, _0x2ef8ce = _0x2526fa.measureText(this['_text'] || ' ', this['_style'], this['_style'].wordWrap, this.canvas), _0x2fadce = _0x2ef8ce.width, _0x4c633b = _0x2ef8ce.height, _0x438b0d = _0x2ef8ce.lines, _0x6222d1 = _0x2ef8ce.lineHeight, _0x228c42 = _0x2ef8ce.lineWidths, _0x1e5fc2 = _0x2ef8ce.maxLineWidth, _0x3f7cd9 = _0x2ef8ce.fontProperties;
                        this.canvas.width = Math.ceil(Math.ceil(Math.max(1, _0x2fadce) + 2 * _0x1aa7ea.padding) * this['_resolution']);
                        this.canvas.height = Math.ceil(Math.ceil(Math.max(1, _0x4c633b) + 2 * _0x1aa7ea.padding) * this['_resolution']);
                        _0x3b7a5e.scale(this['_resolution'], this['_resolution']);
                        _0x3b7a5e.clearRect(0, 0, this.canvas.width, this.canvas.height);
                        _0x3b7a5e.font = this['_font'];
                        _0x3b7a5e.lineWidth = _0x1aa7ea.strokeThickness;
                        _0x3b7a5e.textBaseline = _0x1aa7ea.textBaseline;
                        _0x3b7a5e.lineJoin = _0x1aa7ea.lineJoin;
                        _0x3b7a5e.miterLimit = _0x1aa7ea.miterLimit;
                        for (var _0x2c5e91 = _0x1aa7ea.dropShadow ? 2 : 1, _0x293b53 = 0; _0x293b53 < _0x2c5e91; ++_0x293b53) {
                            var _0x5cb22b = _0x1aa7ea.dropShadow && 0 === _0x293b53, _0x542226 = _0x5cb22b ? Math.ceil(Math.max(1, _0x4c633b) + 2 * _0x1aa7ea.padding) : 0, _0x329877 = _0x542226 * this['_resolution'];
                            if (_0x5cb22b) {
                                _0x3b7a5e.fillStyle = 'black';
                                _0x3b7a5e.strokeStyle = 'black';
                                var _0x2a38a8 = _0x1aa7ea.dropShadowColor, _0x22fa41 = (0, _0xeee678.wK)('number' == typeof _0x2a38a8 ? _0x2a38a8 : (0, _0xeee678.qm)(_0x2a38a8)), _0x38518f = _0x1aa7ea.dropShadowBlur * this['_resolution'], _0x2a2b42 = _0x1aa7ea.dropShadowDistance * this['_resolution'];
                                _0x3b7a5e.shadowColor = 'rgba(' + 255 * _0x22fa41[0] + ',' + 255 * _0x22fa41[1] + ',' + 255 * _0x22fa41[2] + ',' + _0x1aa7ea.dropShadowAlpha + ')';
                                _0x3b7a5e.shadowBlur = _0x38518f;
                                _0x3b7a5e.shadowOffsetX = Math.cos(_0x1aa7ea.dropShadowAngle) * _0x2a2b42;
                                _0x3b7a5e.shadowOffsetY = Math.sin(_0x1aa7ea.dropShadowAngle) * _0x2a2b42 + _0x329877;
                            } else {
                                _0x3b7a5e.fillStyle = this['_generateFillStyle'](_0x1aa7ea, _0x438b0d, _0x2ef8ce);
                                _0x3b7a5e.strokeStyle = _0x1aa7ea.stroke;
                                _0x3b7a5e.shadowColor = 'black';
                                _0x3b7a5e.shadowBlur = 0;
                                _0x3b7a5e.shadowOffsetX = 0;
                                _0x3b7a5e.shadowOffsetY = 0;
                            }
                            var _0x28af40 = (_0x6222d1 - _0x3f7cd9.fontSize) / 2;
                            (!_0x4e9560.nextLineHeightBehavior || _0x6222d1 - _0x3f7cd9.fontSize < 0) && (_0x28af40 = 0);
                            for (var _0x59184f = 0; _0x59184f < _0x438b0d.length; _0x59184f++) {
                                _0x3e98cc = _0x1aa7ea.strokeThickness / 2;
                                _0x178cf1 = _0x1aa7ea.strokeThickness / 2 + _0x59184f * _0x6222d1 + _0x3f7cd9.ascent + _0x28af40;
                                'right' === _0x1aa7ea.align ? _0x3e98cc += _0x1e5fc2 - _0x228c42[_0x59184f] : 'center' === _0x1aa7ea.align && (_0x3e98cc += (_0x1e5fc2 - _0x228c42[_0x59184f]) / 2);
                                _0x1aa7ea.stroke && _0x1aa7ea.strokeThickness && this.drawLetterSpacing(_0x438b0d[_0x59184f], _0x3e98cc + _0x1aa7ea.padding, _0x178cf1 + _0x1aa7ea.padding - _0x542226, true);
                                _0x1aa7ea.fill && this.drawLetterSpacing(_0x438b0d[_0x59184f], _0x3e98cc + _0x1aa7ea.padding, _0x178cf1 + _0x1aa7ea.padding - _0x542226);
                            }
                        }
                        this.updateTexture();
                    }
                }, _0x4e9560.prototype.drawLetterSpacing = function (_0x2088be, _0x9c7fc5, _0x3975ed, _0x11e92c) {
                    ;
                    void 0 === _0x11e92c && (_0x11e92c = false);
                    var _0x338fc6 = this['_style'].letterSpacing, _0x5ce9d9 = _0x4e9560.experimentalLetterSpacing && ('letterSpacing' in CanvasRenderingContext2D.prototype || 'textLetterSpacing' in CanvasRenderingContext2D.prototype);
                    if (0 === _0x338fc6 || _0x5ce9d9) {
                        return _0x5ce9d9 && (this.context.letterSpacing = _0x338fc6, this.context.textLetterSpacing = _0x338fc6), void (_0x11e92c ? this.context.strokeText(_0x2088be, _0x9c7fc5, _0x3975ed) : this.context.fillText(_0x2088be, _0x9c7fc5, _0x3975ed));
                    }
                    for (var _0x5a1264 = _0x9c7fc5, _0x56ee29 = Array.from ? Array.from(_0x2088be) : _0x2088be.split(''), _0x16962b = this.context.measureText(_0x2088be).width, _0x798047 = 0, _0x167813 = 0; _0x167813 < _0x56ee29.length; ++_0x167813) {
                        var _0x461bc0 = _0x56ee29[_0x167813];
                        _0x11e92c ? this.context.strokeText(_0x461bc0, _0x5a1264, _0x3975ed) : this.context.fillText(_0x461bc0, _0x5a1264, _0x3975ed);
                        for (var _0x3bca11 = '', _0x10aae0 = _0x167813 + 1; _0x10aae0 < _0x56ee29.length; ++_0x10aae0) {
                            _0x3bca11 += _0x56ee29[_0x10aae0];
                        }
                        _0x5a1264 += _0x16962b - (_0x798047 = this.context.measureText(_0x3bca11).width) + _0x338fc6;
                        _0x16962b = _0x798047;
                    }
                }, _0x4e9560.prototype.updateTexture = function () {
                    var _0x8a86c4 = this.canvas;
                    if (this['_style'].trim) {
                        var _0x4952bd = (0, _0xeee678.yA)(_0x8a86c4);
                        _0x4952bd.data && (_0x8a86c4.width = _0x4952bd.width, _0x8a86c4.height = _0x4952bd.height, this.context.putImageData(_0x4952bd.data, 0, 0));
                    }
                    var _0x4530d7 = this['_texture'], _0x1271e7 = this['_style'], _0x1c2194 = _0x1271e7.trim ? 0 : _0x1271e7.padding, _0x2eba83 = _0x4530d7.baseTexture;
                    _0x4530d7.trim.width = _0x4530d7['_frame'].width = _0x8a86c4.width / this['_resolution'];
                    _0x4530d7.trim.height = _0x4530d7['_frame'].height = _0x8a86c4.height / this['_resolution'];
                    _0x4530d7.trim.x = -_0x1c2194;
                    _0x4530d7.trim.y = -_0x1c2194;
                    _0x4530d7.orig.width = _0x4530d7['_frame'].width - 2 * _0x1c2194;
                    _0x4530d7.orig.height = _0x4530d7['_frame'].height - 2 * _0x1c2194;
                    this['_onTextureUpdate']();
                    _0x2eba83.setRealSize(_0x8a86c4.width, _0x8a86c4.height, this['_resolution']);
                    _0x4530d7.updateUvs();
                    this.dirty = false;
                }, _0x4e9560.prototype['_render'] = function (_0x29af7b) {
                    ;
                    this['_autoResolution'] && this['_resolution'] !== _0x29af7b.resolution && (this['_resolution'] = _0x29af7b.resolution, this.dirty = true);
                    this.updateText(true);
                    _0x10c688.prototype['_render'].call(this, _0x29af7b);
                }, _0x4e9560.prototype.updateTransform = function () {
                    ;
                    this.updateText(true);
                    _0x10c688.prototype.updateTransform.call(this);
                }, _0x4e9560.prototype.getBounds = function (_0xc10951, _0x50b087) {
                    ;
                    return this.updateText(true), -1 === this['_textureID'] && (_0xc10951 = false), _0x10c688.prototype.getBounds.call(this, _0xc10951, _0x50b087);
                }, _0x4e9560.prototype.getLocalBounds = function (_0x394aba) {
                    ;
                    return this.updateText(true), _0x10c688.prototype.getLocalBounds.call(this, _0x394aba);
                }, _0x4e9560.prototype['_calculateBounds'] = function () {
                    ;
                    this.calculateVertices();
                    this['_bounds'].addQuad(this.vertexData);
                }, _0x4e9560.prototype['_generateFillStyle'] = function (_0x19de36, _0x526faa, _0x5cd90a) {
                    var _0x59b01b, _0x59cdbe = _0x19de36.fill;
                    if (!Array.isArray(_0x59cdbe)) {
                        return _0x59cdbe;
                    }
                    if (1 === _0x59cdbe.length) {
                        return _0x59cdbe[0];
                    }
                    var _0x41e6f8 = _0x19de36.dropShadow ? _0x19de36.dropShadowDistance : 0, _0xd22a00 = _0x19de36.padding || 0, _0x5892a1 = this.canvas.width / this['_resolution'] - _0x41e6f8 - 2 * _0xd22a00, _0x295775 = this.canvas.height / this['_resolution'] - _0x41e6f8 - 2 * _0xd22a00, _0x3b29cf = _0x59cdbe.slice(), _0x3205a6 = _0x19de36.fillGradientStops.slice();
                    if (!_0x3205a6.length) {
                        for (var _0x854618 = _0x3b29cf.length + 1, _0x8001bb = 1; _0x8001bb < _0x854618; ++_0x8001bb) {
                            _0x3205a6.push(_0x8001bb / _0x854618);
                        }
                    }
                    if (_0x3b29cf.unshift(_0x59cdbe[0]), _0x3205a6.unshift(0), _0x3b29cf.push(_0x59cdbe[_0x59cdbe.length - 1]), _0x3205a6.push(1), _0x19de36.fillGradientType === _0x332d4d.LINEAR_VERTICAL) {
                        _0x59b01b = this.context.createLinearGradient(_0x5892a1 / 2, _0xd22a00, _0x5892a1 / 2, _0x295775 + _0xd22a00);
                        var _0x57b951 = _0x5cd90a.fontProperties.fontSize + _0x19de36.strokeThickness;
                        for (_0x8001bb = 0; _0x8001bb < _0x526faa.length; _0x8001bb++) {
                            var _0xee44c = _0x5cd90a.lineHeight * (_0x8001bb - 1) + _0x57b951, _0x1bd67e = _0x5cd90a.lineHeight * _0x8001bb, _0x4ab1c0 = _0x1bd67e;
                            _0x8001bb > 0 && _0xee44c > _0x1bd67e && (_0x4ab1c0 = (_0x1bd67e + _0xee44c) / 2);
                            var _0x2ea52e = _0x1bd67e + _0x57b951, _0x4e9697 = _0x5cd90a.lineHeight * (_0x8001bb + 1), _0x53a6a0 = _0x2ea52e;
                            _0x8001bb + 1 < _0x526faa.length && _0x4e9697 < _0x2ea52e && (_0x53a6a0 = (_0x2ea52e + _0x4e9697) / 2);
                            for (var _0x5e0d47 = (_0x53a6a0 - _0x4ab1c0) / _0x295775, _0x1522d6 = 0; _0x1522d6 < _0x3b29cf.length; _0x1522d6++) {
                                var _0x5db1b6;
                                _0x5db1b6 = 'number' == typeof _0x3205a6[_0x1522d6] ? _0x3205a6[_0x1522d6] : _0x1522d6 / _0x3b29cf.length;
                                var _0x419719 = Math.min(1, Math.max(0, _0x4ab1c0 / _0x295775 + _0x5db1b6 * _0x5e0d47));
                                _0x419719 = Number(_0x419719.toFixed(5));
                                _0x59b01b.addColorStop(_0x419719, _0x3b29cf[_0x1522d6]);
                            }
                        }
                    } else {
                        _0x59b01b = this.context.createLinearGradient(_0xd22a00, _0x295775 / 2, _0x5892a1 + _0xd22a00, _0x295775 / 2);
                        var _0x1fae54 = _0x3b29cf.length + 1, _0x4a13f3 = 1;
                        for (_0x8001bb = 0; _0x8001bb < _0x3b29cf.length; _0x8001bb++) {
                            var _0x5e0361;
                            _0x5e0361 = 'number' == typeof _0x3205a6[_0x8001bb] ? _0x3205a6[_0x8001bb] : _0x4a13f3 / _0x1fae54;
                            _0x59b01b.addColorStop(_0x5e0361, _0x3b29cf[_0x8001bb]);
                            _0x4a13f3++;
                        }
                    }
                    return _0x59b01b;
                }, _0x4e9560.prototype.destroy = function (_0x57faed) {
                    ;
                    'boolean' == typeof _0x57faed && (_0x57faed = { 'children': _0x57faed });
                    _0x57faed = Object.assign({}, _0x4b0692, _0x57faed);
                    _0x10c688.prototype.destroy.call(this, _0x57faed);
                    this['_ownCanvas'] && (this.canvas.height = this.canvas.width = 0);
                    this.context = null;
                    this.canvas = null;
                    this['_style'] = null;
                }, Object.defineProperty(_0x4e9560.prototype, 'width', {
                    'get': function () {
                        ;
                        return this.updateText(true), Math.abs(this.scale.x) * this['_texture'].orig.width;
                    },
                    'set': function (_0x2fea3b) {
                        ;
                        this.updateText(true);
                        var _0x1562ee = (0, _0xeee678.Xx)(this.scale.x) || 1;
                        this.scale.x = _0x1562ee * _0x2fea3b / this['_texture'].orig.width;
                        this['_width'] = _0x2fea3b;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_0x4e9560.prototype, 'height', {
                    'get': function () {
                        ;
                        return this.updateText(true), Math.abs(this.scale.y) * this['_texture'].orig.height;
                    },
                    'set': function (_0x492c71) {
                        ;
                        this.updateText(true);
                        var _0x28b92c = (0, _0xeee678.Xx)(this.scale.y) || 1;
                        this.scale.y = _0x28b92c * _0x492c71 / this['_texture'].orig.height;
                        this['_height'] = _0x492c71;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_0x4e9560.prototype, 'style', {
                    'get': function () {
                        ;
                        return this['_style'];
                    },
                    'set': function (_0x38849b) {
                        ;
                        _0x38849b = _0x38849b || {};
                        this['_style'] = _0x38849b instanceof _0xe6e90b ? _0x38849b : new _0xe6e90b(_0x38849b);
                        this.localStyleID = -1;
                        this.dirty = true;
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_0x4e9560.prototype, 'text', {
                    'get': function () {
                        ;
                        return this['_text'];
                    },
                    'set': function (_0xf844a0) {
                        _0xf844a0 = String(null == _0xf844a0 ? '' : _0xf844a0);
                        this['_text'] !== _0xf844a0 && (this['_text'] = _0xf844a0, this.dirty = true);
                    },
                    'enumerable': false,
                    'configurable': true
                }), Object.defineProperty(_0x4e9560.prototype, 'resolution', {
                    'get': function () {
                        ;
                        return this['_resolution'];
                    },
                    'set': function (_0x3eed46) {
                        ;
                        this['_autoResolution'] = false;
                        this['_resolution'] !== _0x3eed46 && (this['_resolution'] = _0x3eed46, this.dirty = true);
                    },
                    'enumerable': false,
                    'configurable': true
                }), _0x4e9560.nextLineHeightBehavior = false, _0x4e9560.experimentalLetterSpacing = false, _0x4e9560;
            }(_0x48ef0c.j);
        },
        679: (_0x40414d, _0x238209, _0x5bd310) => {
            'use strict';
            _0x5bd310.d(_0x238209, {
                'uF': () => _0x18be30,
                'vB': () => _0x4c7921
            });
            var _0x18be30, _0x18ba55 = _0x5bd310(319);
            _0x18ba55.X.TARGET_FPMS = 0.06;
            (function (_0x105408) {
                ;
                _0x105408[_0x105408.INTERACTION = 50] = 'INTERACTION';
                _0x105408[_0x105408.HIGH = 25] = 'HIGH';
                _0x105408[_0x105408.NORMAL = 0] = 'NORMAL';
                _0x105408[_0x105408.LOW = -25] = 'LOW';
                _0x105408[_0x105408.UTILITY = -50] = 'UTILITY';
            }(_0x18be30 || (_0x18be30 = {})));
            var _0xf020e7 = function () {
                    ;
                    function _0x52a939(_0x5c5961, _0x15bf28, _0x3dc32d, _0x4bfa7c) {
                        ;
                        void 0 === _0x15bf28 && (_0x15bf28 = null);
                        void 0 === _0x3dc32d && (_0x3dc32d = 0);
                        void 0 === _0x4bfa7c && (_0x4bfa7c = false);
                        this.next = null;
                        this.previous = null;
                        this['_destroyed'] = false;
                        this.fn = _0x5c5961;
                        this.context = _0x15bf28;
                        this.priority = _0x3dc32d;
                        this.once = _0x4bfa7c;
                    }
                    return _0x52a939.prototype.match = function (_0x88854c, _0x3a6d8d) {
                        ;
                        return void 0 === _0x3a6d8d && (_0x3a6d8d = null), this.fn === _0x88854c && this.context === _0x3a6d8d;
                    }, _0x52a939.prototype.emit = function (_0x1d006e) {
                        ;
                        this.fn && (this.context ? this.fn.call(this.context, _0x1d006e) : this.fn(_0x1d006e));
                        var _0x52e8be = this.next;
                        return this.once && this.destroy(true), this['_destroyed'] && (this.next = null), _0x52e8be;
                    }, _0x52a939.prototype.connect = function (_0x50c8f) {
                        ;
                        this.previous = _0x50c8f;
                        _0x50c8f.next && (_0x50c8f.next.previous = this);
                        this.next = _0x50c8f.next;
                        _0x50c8f.next = this;
                    }, _0x52a939.prototype.destroy = function (_0xf33fbd) {
                        ;
                        void 0 === _0xf33fbd && (_0xf33fbd = false);
                        this['_destroyed'] = true;
                        this.fn = null;
                        this.context = null;
                        this.previous && (this.previous.next = this.next);
                        this.next && (this.next.previous = this.previous);
                        var _0x3722ff = this.next;
                        return this.next = _0xf33fbd ? null : _0x3722ff, this.previous = null, _0x3722ff;
                    }, _0x52a939;
                }(), _0x4c7921 = function () {
                    ;
                    function _0x197c35() {
                        var _0x3f5afc = this;
                        this.autoStart = false;
                        this.deltaTime = 1;
                        this.lastTime = -1;
                        this.speed = 1;
                        this.started = false;
                        this['_requestId'] = null;
                        this['_maxElapsedMS'] = 100;
                        this['_minElapsedMS'] = 0;
                        this['_protected'] = false;
                        this['_lastFrame'] = -1;
                        this['_head'] = new _0xf020e7(null, null, 1e+400);
                        this.deltaMS = 1 / _0x18ba55.X.TARGET_FPMS;
                        this.elapsedMS = 1 / _0x18ba55.X.TARGET_FPMS;
                        this['_tick'] = function (_0x267b4e) {
                            ;
                            _0x3f5afc['_requestId'] = null;
                            _0x3f5afc.started && (_0x3f5afc.update(_0x267b4e), _0x3f5afc.started && null === _0x3f5afc['_requestId'] && _0x3f5afc['_head'].next && (_0x3f5afc['_requestId'] = requestAnimationFrame(_0x3f5afc['_tick'])));
                        };
                    }
                    return _0x197c35.prototype['_requestIfNeeded'] = function () {
                        ;
                        null === this['_requestId'] && this['_head'].next && (this.lastTime = performance.now(), this['_lastFrame'] = this.lastTime, this['_requestId'] = requestAnimationFrame(this['_tick']));
                    }, _0x197c35.prototype['_cancelIfNeeded'] = function () {
                        ;
                        null !== this['_requestId'] && (cancelAnimationFrame(this['_requestId']), this['_requestId'] = null);
                    }, _0x197c35.prototype['_startIfPossible'] = function () {
                        ;
                        this.started ? this['_requestIfNeeded']() : this.autoStart && this.start();
                    }, _0x197c35.prototype.add = function (_0x472368, _0x5717bb, _0x53920e) {
                        ;
                        return void 0 === _0x53920e && (_0x53920e = _0x18be30.NORMAL), this['_addListener'](new _0xf020e7(_0x472368, _0x5717bb, _0x53920e));
                    }, _0x197c35.prototype.addOnce = function (_0x2a3703, _0x567fb2, _0x8ab5fb) {
                        return void 0 === _0x8ab5fb && (_0x8ab5fb = _0x18be30.NORMAL), this['_addListener'](new _0xf020e7(_0x2a3703, _0x567fb2, _0x8ab5fb, true));
                    }, _0x197c35.prototype['_addListener'] = function (_0x474597) {
                        var _0xbae53c = this['_head'].next, _0x10eb2d = this['_head'];
                        if (_0xbae53c) {
                            for (; _0xbae53c;) {
                                if (_0x474597.priority > _0xbae53c.priority) {
                                    _0x474597.connect(_0x10eb2d);
                                    break;
                                }
                                _0x10eb2d = _0xbae53c;
                                _0xbae53c = _0xbae53c.next;
                            }
                            _0x474597.previous || _0x474597.connect(_0x10eb2d);
                        } else {
                            _0x474597.connect(_0x10eb2d);
                        }
                        return this['_startIfPossible'](), this;
                    }, _0x197c35.prototype.remove = function (_0x46382e, _0x3e4ad8) {
                        ;
                        for (var _0x1b5c4b = this['_head'].next; _0x1b5c4b;) {
                            _0x1b5c4b = _0x1b5c4b.match(_0x46382e, _0x3e4ad8) ? _0x1b5c4b.destroy() : _0x1b5c4b.next;
                        }
                        return this['_head'].next || this['_cancelIfNeeded'](), this;
                    }, Object.defineProperty(_0x197c35.prototype, 'count', {
                        'get': function () {
                            ;
                            if (!this['_head']) {
                                return 0;
                            }
                            for (var _0x4ec014 = 0, _0x15ca4e = this['_head']; _0x15ca4e = _0x15ca4e.next;) {
                                _0x4ec014++;
                            }
                            return _0x4ec014;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x197c35.prototype.start = function () {
                        ;
                        this.started || (this.started = true, this['_requestIfNeeded']());
                    }, _0x197c35.prototype.stop = function () {
                        ;
                        this.started && (this.started = false, this['_cancelIfNeeded']());
                    }, _0x197c35.prototype.destroy = function () {
                        ;
                        if (!this['_protected']) {
                            this.stop();
                            for (var _0x158ef1 = this['_head'].next; _0x158ef1;) {
                                _0x158ef1 = _0x158ef1.destroy(true);
                            }
                            this['_head'].destroy();
                            this['_head'] = null;
                        }
                    }, _0x197c35.prototype.update = function (_0x567d8a) {
                        var _0x461e3e;
                        if (void 0 === _0x567d8a && (_0x567d8a = performance.now()), _0x567d8a > this.lastTime) {
                            if ((_0x461e3e = this.elapsedMS = _0x567d8a - this.lastTime) > this['_maxElapsedMS'] && (_0x461e3e = this['_maxElapsedMS']), _0x461e3e *= this.speed, this['_minElapsedMS']) {
                                var _0x1a3a71 = _0x567d8a - this['_lastFrame'] | 0;
                                if (_0x1a3a71 < this['_minElapsedMS']) {
                                    return;
                                }
                                this['_lastFrame'] = _0x567d8a - _0x1a3a71 % this['_minElapsedMS'];
                            }
                            this.deltaMS = _0x461e3e;
                            this.deltaTime = this.deltaMS * _0x18ba55.X.TARGET_FPMS;
                            for (var _0x7c91a0 = this['_head'], _0x50fd4d = _0x7c91a0.next; _0x50fd4d;) {
                                _0x50fd4d = _0x50fd4d.emit(this.deltaTime);
                            }
                            _0x7c91a0.next || this['_cancelIfNeeded']();
                        } else {
                            this.deltaTime = this.deltaMS = this.elapsedMS = 0;
                        }
                        this.lastTime = _0x567d8a;
                    }, Object.defineProperty(_0x197c35.prototype, 'FPS', {
                        'get': function () {
                            ;
                            return 1000 / this.elapsedMS;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x197c35.prototype, 'minFPS', {
                        'get': function () {
                            ;
                            return 1000 / this['_maxElapsedMS'];
                        },
                        'set': function (_0x544455) {
                            var _0x49c038 = Math.min(this.maxFPS, _0x544455), _0x15c17e = Math.min(Math.max(0, _0x49c038) / 1000, _0x18ba55.X.TARGET_FPMS);
                            this['_maxElapsedMS'] = 1 / _0x15c17e;
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x197c35.prototype, 'maxFPS', {
                        'get': function () {
                            ;
                            return this['_minElapsedMS'] ? Math.round(1000 / this['_minElapsedMS']) : 0;
                        },
                        'set': function (_0x3a705b) {
                            ;
                            if (0 === _0x3a705b) {
                                this['_minElapsedMS'] = 0;
                            } else {
                                var _0x4709e0 = Math.max(this.minFPS, _0x3a705b);
                                this['_minElapsedMS'] = 1 / (_0x4709e0 / 1000);
                            }
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x197c35, 'shared', {
                        'get': function () {
                            ;
                            if (!_0x197c35['_shared']) {
                                var _0x35bc9e = _0x197c35['_shared'] = new _0x197c35();
                                _0x35bc9e.autoStart = true;
                                _0x35bc9e['_protected'] = true;
                            }
                            return _0x197c35['_shared'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x197c35, 'system', {
                        'get': function () {
                            ;
                            if (!_0x197c35['_system']) {
                                var _0x266926 = _0x197c35['_system'] = new _0x197c35();
                                _0x266926.autoStart = true;
                                _0x266926['_protected'] = true;
                            }
                            return _0x197c35['_system'];
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x197c35;
                }();
            !function () {
                ;
                function _0x413e56() {
                }
                _0x413e56.init = function (_0x237a1f) {
                    var _0x33ac43 = this;
                    _0x237a1f = Object.assign({
                        'autoStart': true,
                        'sharedTicker': false
                    }, _0x237a1f);
                    Object.defineProperty(this, 'ticker', {
                        'set': function (_0x46e2fa) {
                            ;
                            this['_ticker'] && this['_ticker'].remove(this.render, this);
                            this['_ticker'] = _0x46e2fa;
                            _0x46e2fa && _0x46e2fa.add(this.render, this, _0x18be30.LOW);
                        },
                        'get': function () {
                            ;
                            return this['_ticker'];
                        }
                    });
                    this.stop = function () {
                        _0x33ac43['_ticker'].stop();
                    };
                    this.start = function () {
                        ;
                        _0x33ac43['_ticker'].start();
                    };
                    this['_ticker'] = null;
                    this.ticker = _0x237a1f.sharedTicker ? _0x4c7921.shared : new _0x4c7921();
                    _0x237a1f.autoStart && this.start();
                };
                _0x413e56.destroy = function () {
                    ;
                    if (this['_ticker']) {
                        var _0x74f934 = this['_ticker'];
                        this.ticker = null;
                        _0x74f934.destroy();
                    }
                };
            }();
        },
        942: (_0x36ea13, _0x503748, _0x7ae306) => {
            'use strict';
            ;
            _0x7ae306.d(_0x503748, {
                'CO': () => _0x5e1af3,
                'DE': () => _0x1ee753,
                'Er': () => _0x33e89b,
                'GG': () => _0x343b54,
                'HQ': () => _0x1ac07c,
                'HR': () => _0x2b13f4,
                'OT': () => _0x38d161.a,
                'Qq': () => _0x2ea640,
                'V8': () => _0x5b964e,
                'XN': () => _0x1bae8b,
                'Xx': () => _0x574c4c,
                'YA': () => _0xe3b5f8,
                'a1': () => _0x2e609e,
                'a9': () => _0x22c6d7,
                'fL': () => _0x2eab61,
                'hQ': () => _0x3bf7c1,
                'k3': () => _0x41f82b,
                'kN': () => _0x400c06,
                'qU': () => _0x3f348c,
                'qm': () => _0xe99d85,
                'rA': () => _0x3cafa2,
                'tq': () => _0x51776d.t,
                'u7': () => _0x26a85c,
                'vp': () => _0x432eee.a,
                'wK': () => _0x362e01,
                'wv': () => _0x382b30,
                'yA': () => _0x1653cb
            });
            var _0x51776d = _0x7ae306(319), _0x53d3ba = _0x7ae306(729), _0x432eee = _0x7ae306.n(_0x53d3ba), _0x280bcd = _0x7ae306(187), _0x38d161 = _0x7ae306.n(_0x280bcd), _0x2d5f08 = _0x7ae306(575), _0x4c2eae = _0x7ae306(680), _0x1ac07c = {
                    'parse': _0x2d5f08.Qc,
                    'format': _0x2d5f08.WU,
                    'resolve': _0x2d5f08.DB
                };
            _0x51776d.X.RETINA_PREFIX = /@([0-9\.]+)x/;
            _0x51776d.X.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = false;
            var _0x3c258d, _0x547306 = false, _0x4cf06d = '6.4.2';
            function _0x1ee753(_0x8ec755) {
                var _0x413522;
                if (!_0x547306) {
                    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
                        var _0x2d1d20 = [
                            '\n %c %c %c PixiJS ' + _0x4cf06d + ' - \u2730 ' + _0x8ec755 + ' \u2730  %c  %c  http://www.pixijs.com/  %c %c \u2665%c\u2665%c\u2665 \n\n',
                            'background: #ff66a5; padding:5px 0;',
                            'background: #ff66a5; padding:5px 0;',
                            'color: #ff66a5; background: #030307; padding:5px 0;',
                            'background: #ff66a5; padding:5px 0;',
                            'background: #ffc3dc; padding:5px 0;',
                            'background: #ff66a5; padding:5px 0;',
                            'color: #ff2424; background: #fff; padding:5px 0;',
                            'color: #ff2424; background: #fff; padding:5px 0;',
                            'color: #ff2424; background: #fff; padding:5px 0;'
                        ];
                        (_0x413522 = globalThis.console).log.apply(_0x413522, _0x2d1d20);
                    } else {
                        globalThis.console && globalThis.console.log('PixiJS ' + _0x4cf06d + ' - ' + _0x8ec755 + ' - http://www.pixijs.com/');
                    }
                    _0x547306 = true;
                }
            }
            function _0x2b13f4() {
                return void 0 === _0x3c258d && (_0x3c258d = function () {
                    var _0x1110fb = {
                        'stencil': true,
                        'failIfMajorPerformanceCaveat': _0x51776d.X.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
                    };
                    try {
                        if (!globalThis.WebGLRenderingContext) {
                            return false;
                        }
                        var _0x363c8d = document.createElement('canvas'), _0x4399ac = _0x363c8d.getContext('webgl', _0x1110fb) || _0x363c8d.getContext('experimental-webgl', _0x1110fb), _0x3403af = !(!_0x4399ac || !_0x4399ac.getContextAttributes().stencil);
                        if (_0x4399ac) {
                            var _0x5074ef = _0x4399ac.getExtension('WEBGL_lose_context');
                            _0x5074ef && _0x5074ef.loseContext();
                        }
                        return _0x4399ac = null, _0x3403af;
                    } catch (_0x3c53ef) {
                        return false;
                    }
                }()), _0x3c258d;
            }
            var _0xcc6057 = {
                'aliceblue': '#f0f8ff',
                'antiquewhite': '#faebd7',
                'aqua': '#00ffff',
                'aquamarine': '#7fffd4',
                'azure': '#f0ffff',
                'beige': '#f5f5dc',
                'bisque': '#ffe4c4',
                'black': '#000000',
                'blanchedalmond': '#ffebcd',
                'blue': '#0000ff',
                'blueviolet': '#8a2be2',
                'brown': '#a52a2a',
                'burlywood': '#deb887',
                'cadetblue': '#5f9ea0',
                'chartreuse': '#7fff00',
                'chocolate': '#d2691e',
                'coral': '#ff7f50',
                'cornflowerblue': '#6495ed',
                'cornsilk': '#fff8dc',
                'crimson': '#dc143c',
                'cyan': '#00ffff',
                'darkblue': '#00008b',
                'darkcyan': '#008b8b',
                'darkgoldenrod': '#b8860b',
                'darkgray': '#a9a9a9',
                'darkgreen': '#006400',
                'darkgrey': '#a9a9a9',
                'darkkhaki': '#bdb76b',
                'darkmagenta': '#8b008b',
                'darkolivegreen': '#556b2f',
                'darkorange': '#ff8c00',
                'darkorchid': '#9932cc',
                'darkred': '#8b0000',
                'darksalmon': '#e9967a',
                'darkseagreen': '#8fbc8f',
                'darkslateblue': '#483d8b',
                'darkslategray': '#2f4f4f',
                'darkslategrey': '#2f4f4f',
                'darkturquoise': '#00ced1',
                'darkviolet': '#9400d3',
                'deeppink': '#ff1493',
                'deepskyblue': '#00bfff',
                'dimgray': '#696969',
                'dimgrey': '#696969',
                'dodgerblue': '#1e90ff',
                'firebrick': '#b22222',
                'floralwhite': '#fffaf0',
                'forestgreen': '#228b22',
                'fuchsia': '#ff00ff',
                'gainsboro': '#dcdcdc',
                'ghostwhite': '#f8f8ff',
                'goldenrod': '#daa520',
                'gold': '#ffd700',
                'gray': '#808080',
                'green': '#008000',
                'greenyellow': '#adff2f',
                'grey': '#808080',
                'honeydew': '#f0fff0',
                'hotpink': '#ff69b4',
                'indianred': '#cd5c5c',
                'indigo': '#4b0082',
                'ivory': '#fffff0',
                'khaki': '#f0e68c',
                'lavenderblush': '#fff0f5',
                'lavender': '#e6e6fa',
                'lawngreen': '#7cfc00',
                'lemonchiffon': '#fffacd',
                'lightblue': '#add8e6',
                'lightcoral': '#f08080',
                'lightcyan': '#e0ffff',
                'lightgoldenrodyellow': '#fafad2',
                'lightgray': '#d3d3d3',
                'lightgreen': '#90ee90',
                'lightgrey': '#d3d3d3',
                'lightpink': '#ffb6c1',
                'lightsalmon': '#ffa07a',
                'lightseagreen': '#20b2aa',
                'lightskyblue': '#87cefa',
                'lightslategray': '#778899',
                'lightslategrey': '#778899',
                'lightsteelblue': '#b0c4de',
                'lightyellow': '#ffffe0',
                'lime': '#00ff00',
                'limegreen': '#32cd32',
                'linen': '#faf0e6',
                'magenta': '#ff00ff',
                'maroon': '#800000',
                'mediumaquamarine': '#66cdaa',
                'mediumblue': '#0000cd',
                'mediumorchid': '#ba55d3',
                'mediumpurple': '#9370db',
                'mediumseagreen': '#3cb371',
                'mediumslateblue': '#7b68ee',
                'mediumspringgreen': '#00fa9a',
                'mediumturquoise': '#48d1cc',
                'mediumvioletred': '#c71585',
                'midnightblue': '#191970',
                'mintcream': '#f5fffa',
                'mistyrose': '#ffe4e1',
                'moccasin': '#ffe4b5',
                'navajowhite': '#ffdead',
                'navy': '#000080',
                'oldlace': '#fdf5e6',
                'olive': '#808000',
                'olivedrab': '#6b8e23',
                'orange': '#ffa500',
                'orangered': '#ff4500',
                'orchid': '#da70d6',
                'palegoldenrod': '#eee8aa',
                'palegreen': '#98fb98',
                'paleturquoise': '#afeeee',
                'palevioletred': '#db7093',
                'papayawhip': '#ffefd5',
                'peachpuff': '#ffdab9',
                'peru': '#cd853f',
                'pink': '#ffc0cb',
                'plum': '#dda0dd',
                'powderblue': '#b0e0e6',
                'purple': '#800080',
                'rebeccapurple': '#663399',
                'red': '#ff0000',
                'rosybrown': '#bc8f8f',
                'royalblue': '#4169e1',
                'saddlebrown': '#8b4513',
                'salmon': '#fa8072',
                'sandybrown': '#f4a460',
                'seagreen': '#2e8b57',
                'seashell': '#fff5ee',
                'sienna': '#a0522d',
                'silver': '#c0c0c0',
                'skyblue': '#87ceeb',
                'slateblue': '#6a5acd',
                'slategray': '#708090',
                'slategrey': '#708090',
                'snow': '#fffafa',
                'springgreen': '#00ff7f',
                'steelblue': '#4682b4',
                'tan': '#d2b48c',
                'teal': '#008080',
                'thistle': '#d8bfd8',
                'tomato': '#ff6347',
                'turquoise': '#40e0d0',
                'violet': '#ee82ee',
                'wheat': '#f5deb3',
                'white': '#ffffff',
                'whitesmoke': '#f5f5f5',
                'yellow': '#ffff00',
                'yellowgreen': '#9acd32'
            };
            function _0x362e01(_0x174d47, _0x3eceb2) {
                return void 0 === _0x3eceb2 && (_0x3eceb2 = []), _0x3eceb2[0] = (_0x174d47 >> 16 & 255) / 255, _0x3eceb2[1] = (_0x174d47 >> 8 & 255) / 255, _0x3eceb2[2] = (255 & _0x174d47) / 255, _0x3eceb2;
            }
            function _0x1bae8b(_0x21431d) {
                var _0x1f4db9 = _0x21431d.toString(16);
                return '#' + ('000000'.substring(0, 6 - _0x1f4db9.length) + _0x1f4db9);
            }
            function _0xe99d85(_0x137997) {
                ;
                return 'string' == typeof _0x137997 && '#' === (_0x137997 = _0xcc6057[_0x137997.toLowerCase()] || _0x137997)[0] && (_0x137997 = _0x137997.slice(1)), parseInt(_0x137997, 16);
            }
            function _0x5e1af3(_0x2ea44b) {
                return (255 * _0x2ea44b[0] << 16) + (255 * _0x2ea44b[1] << 8) + (255 * _0x2ea44b[2] | 0);
            }
            var _0xe3b5f8 = function () {
                ;
                for (var _0x2bdb93 = [], _0x6a1612 = [], _0x1b4178 = 0; _0x1b4178 < 32; _0x1b4178++) {
                    _0x2bdb93[_0x1b4178] = _0x1b4178;
                    _0x6a1612[_0x1b4178] = _0x1b4178;
                }
                _0x2bdb93[_0x4c2eae['T$'].NORMAL_NPM] = _0x4c2eae['T$'].NORMAL;
                _0x2bdb93[_0x4c2eae['T$'].ADD_NPM] = _0x4c2eae['T$'].ADD;
                _0x2bdb93[_0x4c2eae['T$'].SCREEN_NPM] = _0x4c2eae['T$'].SCREEN;
                _0x6a1612[_0x4c2eae['T$'].NORMAL] = _0x4c2eae['T$'].NORMAL_NPM;
                _0x6a1612[_0x4c2eae['T$'].ADD] = _0x4c2eae['T$'].ADD_NPM;
                _0x6a1612[_0x4c2eae['T$'].SCREEN] = _0x4c2eae['T$'].SCREEN_NPM;
                var _0x33a248 = [];
                return _0x33a248.push(_0x6a1612), _0x33a248.push(_0x2bdb93), _0x33a248;
            }();
            function _0x3cafa2(_0x1ec43e, _0x2f2357) {
                if (1 === _0x2f2357) {
                    return (255 * _0x2f2357 << 24) + _0x1ec43e;
                }
                if (0 === _0x2f2357) {
                    return 0;
                }
                var _0x1b359c = _0x1ec43e >> 16 & 255, _0x3c2b1b = _0x1ec43e >> 8 & 255, _0x510d79 = 255 & _0x1ec43e;
                return (255 * _0x2f2357 << 24) + ((_0x1b359c = _0x1b359c * _0x2f2357 + 0.5 | 0) << 16) + ((_0x3c2b1b = _0x3c2b1b * _0x2f2357 + 0.5 | 0) << 8) + (_0x510d79 * _0x2f2357 + 0.5 | 0);
            }
            function _0x26a85c(_0x4e72ef) {
                ;
                if (4 === _0x4e72ef.BYTES_PER_ELEMENT) {
                    return _0x4e72ef instanceof Float32Array ? 'Float32Array' : _0x4e72ef instanceof Uint32Array ? 'Uint32Array' : 'Int32Array';
                }
                if (2 === _0x4e72ef.BYTES_PER_ELEMENT) {
                    if (_0x4e72ef instanceof Uint16Array) {
                        return 'Uint16Array';
                    }
                } else {
                    if (1 === _0x4e72ef.BYTES_PER_ELEMENT && _0x4e72ef instanceof Uint8Array) {
                        return 'Uint8Array';
                    }
                }
                return null;
            }
            function _0x22c6d7(_0x4b6637) {
                return _0x4b6637 += 0 === _0x4b6637 ? 1 : 0, --_0x4b6637, _0x4b6637 |= _0x4b6637 >>> 1, _0x4b6637 |= _0x4b6637 >>> 2, _0x4b6637 |= _0x4b6637 >>> 4, _0x4b6637 |= _0x4b6637 >>> 8, 1 + (_0x4b6637 |= _0x4b6637 >>> 16);
            }
            function _0x382b30(_0x3ea5a6) {
                return !(_0x3ea5a6 & _0x3ea5a6 - 1 || !_0x3ea5a6);
            }
            function _0x41f82b(_0x391ffe) {
                var _0x12cf08 = (_0x391ffe > 65535 ? 1 : 0) << 4, _0x46079c = ((_0x391ffe >>>= _0x12cf08) > 255 ? 1 : 0) << 3;
                return _0x12cf08 |= _0x46079c, _0x12cf08 |= _0x46079c = ((_0x391ffe >>>= _0x46079c) > 15 ? 1 : 0) << 2, (_0x12cf08 |= _0x46079c = ((_0x391ffe >>>= _0x46079c) > 3 ? 1 : 0) << 1) | (_0x391ffe >>>= _0x46079c) >> 1;
            }
            function _0x33e89b(_0x38af9a, _0x102bfd, _0xe88d59) {
                var _0x545e90, _0x5db981 = _0x38af9a.length;
                if (!(_0x102bfd >= _0x5db981 || 0 === _0xe88d59)) {
                    var _0x2343b1 = _0x5db981 - (_0xe88d59 = _0x102bfd + _0xe88d59 > _0x5db981 ? _0x5db981 - _0x102bfd : _0xe88d59);
                    for (_0x545e90 = _0x102bfd; _0x545e90 < _0x2343b1; ++_0x545e90) {
                        _0x38af9a[_0x545e90] = _0x38af9a[_0x545e90 + _0xe88d59];
                    }
                    _0x38af9a.length = _0x2343b1;
                }
            }
            function _0x574c4c(_0x486203) {
                return 0 === _0x486203 ? 0 : _0x486203 < 0 ? -1 : 1;
            }
            Float32Array;
            Uint32Array;
            Int32Array;
            Uint8Array;
            var _0x28aff7 = 0;
            function _0x3bf7c1() {
                return ++_0x28aff7;
            }
            var _0x519bd1 = { _0x215b79: true };
            function _0x2e609e(_0x396c91, _0x215b79, _0x9fc8b6) {
                ;
                if (void 0 === _0x9fc8b6 && (_0x9fc8b6 = 3), !_0x519bd1[_0x215b79]) {
                    var _0x2a0be2 = new Error().stack;
                    void 0 === _0x2a0be2 ? console.warn('PixiJS Deprecation Warning: ', _0x215b79 + '\nDeprecated since v' + _0x396c91) : (_0x2a0be2 = _0x2a0be2.split('\n').splice(_0x9fc8b6).join('\n'), console.groupCollapsed ? (console.groupCollapsed('%cPixiJS Deprecation Warning: %c%s', 'color:#614108;background:#fffbe6', 'font-weight:normal;color:#614108;background:#fffbe6', _0x215b79 + '\nDeprecated since v' + _0x396c91), console.warn(_0x2a0be2), console.groupEnd()) : (console.warn('PixiJS Deprecation Warning: ', _0x215b79 + '\nDeprecated since v' + _0x396c91), console.warn(_0x2a0be2)));
                    ;
                }
            }
            var _0x439b55, _0x343b54 = {}, _0x400c06 = Object.create(null), _0x5b964e = Object.create(null), _0x3f348c = function () {
                    ;
                    function _0x6d80fb(_0x3c0e3a, _0x3f198e, _0x470e9b) {
                        ;
                        this.canvas = document.createElement('canvas');
                        this.context = this.canvas.getContext('2d');
                        this.resolution = _0x470e9b || _0x51776d.X.RESOLUTION;
                        this.resize(_0x3c0e3a, _0x3f198e);
                    }
                    return _0x6d80fb.prototype.clear = function () {
                        ;
                        this.context.setTransform(1, 0, 0, 1, 0, 0);
                        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    }, _0x6d80fb.prototype.resize = function (_0x26dc19, _0x2897cd) {
                        ;
                        this.canvas.width = Math.round(_0x26dc19 * this.resolution);
                        this.canvas.height = Math.round(_0x2897cd * this.resolution);
                    }, _0x6d80fb.prototype.destroy = function () {
                        ;
                        this.context = null;
                        this.canvas = null;
                    }, Object.defineProperty(_0x6d80fb.prototype, 'width', {
                        'get': function () {
                            ;
                            return this.canvas.width;
                        },
                        'set': function (_0x3349b9) {
                            ;
                            this.canvas.width = Math.round(_0x3349b9);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), Object.defineProperty(_0x6d80fb.prototype, 'height', {
                        'get': function () {
                            ;
                            return this.canvas.height;
                        },
                        'set': function (_0x5dac2a) {
                            ;
                            this.canvas.height = Math.round(_0x5dac2a);
                        },
                        'enumerable': false,
                        'configurable': true
                    }), _0x6d80fb;
                }();
            function _0x1653cb(_0x819d56) {
                var _0x52e8af, _0xd299ae, _0x2b9292, _0x175635 = _0x819d56.width, _0x2a6c86 = _0x819d56.height, _0x118754 = _0x819d56.getContext('2d'), _0x2a9acb = _0x118754.getImageData(0, 0, _0x175635, _0x2a6c86).data, _0x303826 = _0x2a9acb.length, _0x5467c5 = null;
                for (_0x52e8af = 0; _0x52e8af < _0x303826; _0x52e8af += 4) {
                    0 !== _0x2a9acb[_0x52e8af + 3] && (_0xd299ae = _0x52e8af / 4 % _0x175635, _0x2b9292 = ~~(_0x52e8af / 4 / _0x175635), null === _0x12b74a.top && (null = _0x2b9292), (null === null || _0xd299ae < _0x12b74a.left) && (_0x12b74a.left = _0xd299ae), (null === _0x12b74a.right || _0x12b74a.right < _0xd299ae) && (null = _0xd299ae + 1), (null === _0x12b74a.bottom || _0x12b74a.bottom < _0x2b9292) && (_0x12b74a.bottom = _0x2b9292));
                }
                return null !== null && (_0x175635 = _0x12b74a.right - _0x12b74a.left, _0x2a6c86 = _0x12b74a.bottom - _0x12b74a.top + 1, _0x5467c5 = _0x118754.getImageData(_0x12b74a.left, _0x12b74a.top, _0x175635, _0x2a6c86)), {
                    'height': _0x2a6c86,
                    'width': _0x175635,
                    'data': _0x5467c5
                };
            }
            function _0x2ea640(_0x3e0eb2, _0x474b0e) {
                ;
                if (void 0 === _0x474b0e && (_0x474b0e = globalThis.location), 0 === _0x3e0eb2.indexOf('data:')) {
                    return '';
                }
                _0x474b0e = _0x474b0e || globalThis.location;
                _0x439b55 || (_0x439b55 = document.createElement('a'));
                _0x439b55.href = _0x3e0eb2;
                var _0x678189 = _0x1ac07c.parse(_0x439b55.href), _0xf8ee3e = !_0x678189.port && '' === _0x474b0e.port || _0x678189.port === _0x474b0e.port;
                return _0x678189.hostname === _0x474b0e.hostname && _0xf8ee3e && _0x678189.protocol === _0x474b0e.protocol ? '' : 'anonymous';
            }
            function _0x2eab61(_0x548e86, _0x5ea1a7) {
                var _0x1bebfb = _0x51776d.X.RETINA_PREFIX.exec(_0x548e86);
                return _0x1bebfb ? parseFloat(_0x1bebfb[1]) : void 0 !== _0x5ea1a7 ? _0x5ea1a7 : 1;
            }
        },
        187: _0x230498 => {
            'use strict';
            ;
            function _0x33748b(_0x2274e5, _0x145b90, _0x5b21a0) {
                ;
                _0x5b21a0 = _0x5b21a0 || 2;
                var _0x18d729, _0x16a085, _0x4098a3, _0x4dcd9d, _0x7121b9, _0x524f02, _0x47304d, _0x1fae40 = _0x145b90 && _0x145b90.length, _0x29c6e6 = _0x1fae40 ? _0x145b90[0] * _0x5b21a0 : _0x2274e5.length, _0x2ad31e = _0x1509bf(_0x2274e5, 0, _0x29c6e6, _0x5b21a0, true), _0x466e59 = [];
                if (!_0x2ad31e || _0x2ad31e.next === _0x2ad31e.prev) {
                    return _0x466e59;
                }
                if (_0x1fae40 && (_0x2ad31e = function (_0x44447c, _0x2fabfd, _0x35994c, _0x55079d) {
                        var _0x25b536, _0x5af257, _0x38a5ea, _0x3c20e4 = [];
                        for (_0x25b536 = 0, _0x5af257 = _0x2fabfd.length; _0x25b536 < _0x5af257; _0x25b536++) {
                            (_0x38a5ea = _0x1509bf(_0x44447c, _0x2fabfd[_0x25b536] * _0x55079d, _0x25b536 < _0x5af257 - 1 ? _0x2fabfd[_0x25b536 + 1] * _0x55079d : _0x44447c.length, _0x55079d, false)) === _0x38a5ea.next && (_0x38a5ea.steiner = true);
                            _0x3c20e4.push(_0x661c3f(_0x38a5ea));
                        }
                        for (_0x3c20e4.sort(_0x430689), _0x25b536 = 0; _0x25b536 < _0x3c20e4.length; _0x25b536++) {
                            _0x35994c = _0x17f5b6(_0x3c20e4[_0x25b536], _0x35994c);
                        }
                        return _0x35994c;
                    }(_0x2274e5, _0x145b90, _0x2ad31e, _0x5b21a0)), _0x2274e5.length > 80 * _0x5b21a0) {
                    _0x18d729 = _0x4098a3 = _0x2274e5[0];
                    _0x16a085 = _0x4dcd9d = _0x2274e5[1];
                    for (var _0x353278 = _0x5b21a0; _0x353278 < _0x29c6e6; _0x353278 += _0x5b21a0) {
                        (_0x7121b9 = _0x2274e5[_0x353278]) < _0x18d729 && (_0x18d729 = _0x7121b9);
                        (_0x524f02 = _0x2274e5[_0x353278 + 1]) < _0x16a085 && (_0x16a085 = _0x524f02);
                        _0x7121b9 > _0x4098a3 && (_0x4098a3 = _0x7121b9);
                        _0x524f02 > _0x4dcd9d && (_0x4dcd9d = _0x524f02);
                    }
                    _0x47304d = 0 !== (_0x47304d = Math.max(_0x4098a3 - _0x18d729, _0x4dcd9d - _0x16a085)) ? 32767 / _0x47304d : 0;
                }
                return _0x48fe88(_0x2ad31e, _0x466e59, _0x5b21a0, _0x18d729, _0x16a085, _0x47304d, 0), _0x466e59;
            }
            function _0x1509bf(_0x460204, _0x26f035, _0x4590d7, _0x123e9f, _0x122b84) {
                var _0x457369, _0x5cab96;
                if (_0x122b84 === _0x558a9f(_0x460204, _0x26f035, _0x4590d7, _0x123e9f) > 0) {
                    for (_0x457369 = _0x26f035; _0x457369 < _0x4590d7; _0x457369 += _0x123e9f) {
                        _0x5cab96 = _0x33b924(_0x457369, _0x460204[_0x457369], _0x460204[_0x457369 + 1], _0x5cab96);
                    }
                } else {
                    for (_0x457369 = _0x4590d7 - _0x123e9f; _0x457369 >= _0x26f035; _0x457369 -= _0x123e9f) {
                        _0x5cab96 = _0x33b924(_0x457369, _0x460204[_0x457369], _0x460204[_0x457369 + 1], _0x5cab96);
                    }
                }
                return _0x5cab96 && _0x763241(_0x5cab96, _0x5cab96.next) && (_0x3b8dff(_0x5cab96), _0x5cab96 = _0x5cab96.next), _0x5cab96;
            }
            function _0x11bce3(_0x416e7d, _0x4e16d2) {
                ;
                if (!_0x416e7d) {
                    return _0x416e7d;
                }
                _0x4e16d2 || (_0x4e16d2 = _0x416e7d);
                var _0x5b63d3, _0x3707a6 = _0x416e7d;
                do {
                    if (_0x5b63d3 = false, _0x3707a6.steiner || !_0x763241(_0x3707a6, _0x3707a6.next) && 0 !== _0x5e2ad4(_0x3707a6.prev, _0x3707a6, _0x3707a6.next)) {
                        _0x3707a6 = _0x3707a6.next;
                    } else {
                        if (_0x3b8dff(_0x3707a6), (_0x3707a6 = _0x4e16d2 = _0x3707a6.prev) === _0x3707a6.next) {
                            break;
                        }
                        _0x5b63d3 = true;
                    }
                } while (_0x5b63d3 || _0x3707a6 !== _0x4e16d2);
                return _0x4e16d2;
            }
            function _0x48fe88(_0x228eb9, _0x5a7885, _0x419523, _0x375261, _0xfa3560, _0x3c8953, _0x45f296) {
                ;
                if (_0x228eb9) {
                    !_0x45f296 && _0x3c8953 && function (_0x2684fb, _0x48838f, _0x37fe86, _0xfaf1c4) {
                        var _0x26a2ee = _0x2684fb;
                        do {
                            0 === _0x26a2ee.z && (_0x26a2ee.z = _0x1bb06e(_0x26a2ee.x, _0x26a2ee.y, _0x48838f, _0x37fe86, _0xfaf1c4));
                            _0x26a2ee.prevZ = _0x26a2ee.prev;
                            _0x26a2ee.nextZ = _0x26a2ee.next;
                            _0x26a2ee = _0x26a2ee.next;
                        } while (_0x26a2ee !== _0x2684fb);
                        _0x26a2ee.prevZ.nextZ = null;
                        _0x26a2ee.prevZ = null;
                        (function (_0x359c42) {
                            var _0x521be2, _0x1ca0f7, _0x46203b, _0x2d632d, _0xd81c8c, _0x2e149a, _0x430f5d, _0x38915e, _0x1c71ea = 1;
                            do {
                                for (_0x1ca0f7 = _0x359c42, _0x359c42 = null, _0xd81c8c = null, _0x2e149a = 0; _0x1ca0f7;) {
                                    for (_0x2e149a++, _0x46203b = _0x1ca0f7, _0x430f5d = 0, _0x521be2 = 0; _0x521be2 < _0x1c71ea && (_0x430f5d++, _0x46203b = _0x46203b.nextZ); _0x521be2++) {
                                        ;
                                    }
                                    for (_0x38915e = _0x1c71ea; _0x430f5d > 0 || _0x38915e > 0 && _0x46203b;) {
                                        0 !== _0x430f5d && (0 === _0x38915e || !_0x46203b || _0x1ca0f7.z <= _0x46203b.z) ? (_0x2d632d = _0x1ca0f7, _0x1ca0f7 = _0x1ca0f7.nextZ, _0x430f5d--) : (_0x2d632d = _0x46203b, _0x46203b = _0x46203b.nextZ, _0x38915e--);
                                        _0xd81c8c ? _0xd81c8c.nextZ = _0x2d632d : _0x359c42 = _0x2d632d;
                                        _0x2d632d.prevZ = _0xd81c8c;
                                        _0xd81c8c = _0x2d632d;
                                    }
                                    _0x1ca0f7 = _0x46203b;
                                }
                                _0xd81c8c.nextZ = null;
                                _0x1c71ea *= 2;
                            } while (_0x2e149a > 1);
                        }(_0x26a2ee));
                    }(_0x228eb9, _0x375261, _0xfa3560, _0x3c8953);
                    for (var _0x2b3b0c, _0x393520, _0x6d69db = _0x228eb9; _0x228eb9.prev !== _0x228eb9.next;) {
                        if (_0x2b3b0c = _0x228eb9.prev, _0x393520 = _0x228eb9.next, _0x3c8953 ? _0x289a9f(_0x228eb9, _0x375261, _0xfa3560, _0x3c8953) : _0x2b1c3b(_0x228eb9)) {
                            _0x5a7885.push(_0x2b3b0c.i / _0x419523 | 0);
                            _0x5a7885.push(_0x228eb9.i / _0x419523 | 0);
                            _0x5a7885.push(_0x393520.i / _0x419523 | 0);
                            _0x3b8dff(_0x228eb9);
                            _0x228eb9 = _0x393520.next;
                            _0x6d69db = _0x393520.next;
                        } else {
                            if ((_0x228eb9 = _0x393520) === _0x6d69db) {
                                _0x45f296 ? 1 === _0x45f296 ? _0x48fe88(_0x228eb9 = _0x51f720(_0x11bce3(_0x228eb9), _0x5a7885, _0x419523), _0x5a7885, _0x419523, _0x375261, _0xfa3560, _0x3c8953, 2) : 2 === _0x45f296 && _0x5b118a(_0x228eb9, _0x5a7885, _0x419523, _0x375261, _0xfa3560, _0x3c8953) : _0x48fe88(_0x11bce3(_0x228eb9), _0x5a7885, _0x419523, _0x375261, _0xfa3560, _0x3c8953, 1);
                                break;
                            }
                        }
                    }
                }
            }
            function _0x2b1c3b(_0x3f17f5) {
                var _0x139b2a = _0x3f17f5.prev, _0x23962a = _0x3f17f5, _0x22b524 = _0x3f17f5.next;
                if (_0x5e2ad4(_0x139b2a, _0x23962a, _0x22b524) >= 0) {
                    return false;
                }
                for (var _0x5223e1 = _0x139b2a.x, _0x1b1f6e = _0x23962a.x, _0x278604 = _0x22b524.x, _0x4f2b16 = _0x139b2a.y, _0x4aa500 = _0x23962a.y, _0x242ce7 = _0x22b524.y, _0x2fe0b3 = _0x5223e1 < _0x1b1f6e ? _0x5223e1 < _0x278604 ? _0x5223e1 : _0x278604 : _0x1b1f6e < _0x278604 ? _0x1b1f6e : _0x278604, _0x3ed98f = _0x4f2b16 < _0x4aa500 ? _0x4f2b16 < _0x242ce7 ? _0x4f2b16 : _0x242ce7 : _0x4aa500 < _0x242ce7 ? _0x4aa500 : _0x242ce7, _0x1dd2ad = _0x5223e1 > _0x1b1f6e ? _0x5223e1 > _0x278604 ? _0x5223e1 : _0x278604 : _0x1b1f6e > _0x278604 ? _0x1b1f6e : _0x278604, _0x399808 = _0x4f2b16 > _0x4aa500 ? _0x4f2b16 > _0x242ce7 ? _0x4f2b16 : _0x242ce7 : _0x4aa500 > _0x242ce7 ? _0x4aa500 : _0x242ce7, _0x598ba5 = _0x22b524.next; _0x598ba5 !== _0x139b2a;) {
                    if (_0x598ba5.x >= _0x2fe0b3 && _0x598ba5.x <= _0x1dd2ad && _0x598ba5.y >= _0x3ed98f && _0x598ba5.y <= _0x399808 && _0x51aa54(_0x5223e1, _0x4f2b16, _0x1b1f6e, _0x4aa500, _0x278604, _0x242ce7, _0x598ba5.x, _0x598ba5.y) && _0x5e2ad4(_0x598ba5.prev, _0x598ba5, _0x598ba5.next) >= 0) {
                        return false;
                    }
                    _0x598ba5 = _0x598ba5.next;
                }
                return true;
            }
            function _0x289a9f(_0x3324b, _0x5cc5e4, _0x32de60, _0x2b8383) {
                var _0x2ac9be = _0x3324b.prev, _0x119979 = _0x3324b, _0x375705 = _0x3324b.next;
                if (_0x5e2ad4(_0x2ac9be, _0x119979, _0x375705) >= 0) {
                    return false;
                }
                for (var _0x4f30e1 = _0x2ac9be.x, _0x4bc751 = _0x119979.x, _0x31c965 = _0x375705.x, _0x552062 = _0x2ac9be.y, _0xb3db36 = _0x119979.y, _0x1764a1 = _0x375705.y, _0x315383 = _0x4f30e1 < _0x4bc751 ? _0x4f30e1 < _0x31c965 ? _0x4f30e1 : _0x31c965 : _0x4bc751 < _0x31c965 ? _0x4bc751 : _0x31c965, _0x39f270 = _0x552062 < _0xb3db36 ? _0x552062 < _0x1764a1 ? _0x552062 : _0x1764a1 : _0xb3db36 < _0x1764a1 ? _0xb3db36 : _0x1764a1, _0x448904 = _0x4f30e1 > _0x4bc751 ? _0x4f30e1 > _0x31c965 ? _0x4f30e1 : _0x31c965 : _0x4bc751 > _0x31c965 ? _0x4bc751 : _0x31c965, _0x214b4b = _0x552062 > _0xb3db36 ? _0x552062 > _0x1764a1 ? _0x552062 : _0x1764a1 : _0xb3db36 > _0x1764a1 ? _0xb3db36 : _0x1764a1, _0x510118 = _0x1bb06e(_0x315383, _0x39f270, _0x5cc5e4, _0x32de60, _0x2b8383), _0x414aca = _0x1bb06e(_0x448904, _0x214b4b, _0x5cc5e4, _0x32de60, _0x2b8383), _0x3ef990 = _0x3324b.prevZ, _0x140aad = _0x3324b.nextZ; _0x3ef990 && _0x3ef990.z >= _0x510118 && _0x140aad && _0x140aad.z <= _0x414aca;) {
                    if (_0x3ef990.x >= _0x315383 && _0x3ef990.x <= _0x448904 && _0x3ef990.y >= _0x39f270 && _0x3ef990.y <= _0x214b4b && _0x3ef990 !== _0x2ac9be && _0x3ef990 !== _0x375705 && _0x51aa54(_0x4f30e1, _0x552062, _0x4bc751, _0xb3db36, _0x31c965, _0x1764a1, _0x3ef990.x, _0x3ef990.y) && _0x5e2ad4(_0x3ef990.prev, _0x3ef990, _0x3ef990.next) >= 0) {
                        return false;
                    }
                    if (_0x3ef990 = _0x3ef990.prevZ, _0x140aad.x >= _0x315383 && _0x140aad.x <= _0x448904 && _0x140aad.y >= _0x39f270 && _0x140aad.y <= _0x214b4b && _0x140aad !== _0x2ac9be && _0x140aad !== _0x375705 && _0x51aa54(_0x4f30e1, _0x552062, _0x4bc751, _0xb3db36, _0x31c965, _0x1764a1, _0x140aad.x, _0x140aad.y) && _0x5e2ad4(_0x140aad.prev, _0x140aad, _0x140aad.next) >= 0) {
                        return false;
                    }
                    _0x140aad = _0x140aad.nextZ;
                }
                for (; _0x3ef990 && _0x3ef990.z >= _0x510118;) {
                    if (_0x3ef990.x >= _0x315383 && _0x3ef990.x <= _0x448904 && _0x3ef990.y >= _0x39f270 && _0x3ef990.y <= _0x214b4b && _0x3ef990 !== _0x2ac9be && _0x3ef990 !== _0x375705 && _0x51aa54(_0x4f30e1, _0x552062, _0x4bc751, _0xb3db36, _0x31c965, _0x1764a1, _0x3ef990.x, _0x3ef990.y) && _0x5e2ad4(_0x3ef990.prev, _0x3ef990, _0x3ef990.next) >= 0) {
                        return false;
                    }
                    _0x3ef990 = _0x3ef990.prevZ;
                }
                for (; _0x140aad && _0x140aad.z <= _0x414aca;) {
                    if (_0x140aad.x >= _0x315383 && _0x140aad.x <= _0x448904 && _0x140aad.y >= _0x39f270 && _0x140aad.y <= _0x214b4b && _0x140aad !== _0x2ac9be && _0x140aad !== _0x375705 && _0x51aa54(_0x4f30e1, _0x552062, _0x4bc751, _0xb3db36, _0x31c965, _0x1764a1, _0x140aad.x, _0x140aad.y) && _0x5e2ad4(_0x140aad.prev, _0x140aad, _0x140aad.next) >= 0) {
                        return false;
                    }
                    _0x140aad = _0x140aad.nextZ;
                }
                return true;
            }
            function _0x51f720(_0x265a08, _0x442d6d, _0x1f74a0) {
                var _0x33165b = _0x265a08;
                do {
                    var _0x38c9e7 = _0x33165b.prev, _0x2831d9 = _0x33165b.next.next;
                    !_0x763241(_0x38c9e7, _0x2831d9) && _0x53dd55(_0x38c9e7, _0x33165b, _0x33165b.next, _0x2831d9) && _0x41b401(_0x38c9e7, _0x2831d9) && _0x41b401(_0x2831d9, _0x38c9e7) && (_0x442d6d.push(_0x38c9e7.i / _0x1f74a0 | 0), _0x442d6d.push(_0x33165b.i / _0x1f74a0 | 0), _0x442d6d.push(_0x2831d9.i / _0x1f74a0 | 0), _0x3b8dff(_0x33165b), _0x3b8dff(_0x33165b.next), _0x33165b = _0x265a08 = _0x2831d9);
                    _0x33165b = _0x33165b.next;
                } while (_0x33165b !== _0x265a08);
                return _0x11bce3(_0x33165b);
            }
            function _0x5b118a(_0x5054b1, _0x104809, _0x5a6db1, _0x2db4b2, _0x44dd4e, _0x2fa18d) {
                var _0x4bbb29 = _0x5054b1;
                do {
                    for (var _0x54dcd2 = _0x4bbb29.next.next; _0x54dcd2 !== _0x4bbb29.prev;) {
                        if (_0x4bbb29.i !== _0x54dcd2.i && _0x41d0af(_0x4bbb29, _0x54dcd2)) {
                            var _0x50f85b = _0x53f2bf(_0x4bbb29, _0x54dcd2);
                            return _0x4bbb29 = _0x11bce3(_0x4bbb29, _0x4bbb29.next), _0x50f85b = _0x11bce3(_0x50f85b, _0x50f85b.next), _0x48fe88(_0x4bbb29, _0x104809, _0x5a6db1, _0x2db4b2, _0x44dd4e, _0x2fa18d, 0), void _0x48fe88(_0x50f85b, _0x104809, _0x5a6db1, _0x2db4b2, _0x44dd4e, _0x2fa18d, 0);
                        }
                        _0x54dcd2 = _0x54dcd2.next;
                    }
                    _0x4bbb29 = _0x4bbb29.next;
                } while (_0x4bbb29 !== _0x5054b1);
            }
            function _0x430689(_0x3e8e9d, _0x39753a) {
                return _0x3e8e9d.x - _0x39753a.x;
            }
            function _0x17f5b6(_0x25a771, _0x5af600) {
                var _0x431a8f = function (_0x1d3ea2, _0x34b228) {
                    var _0x294a63, _0x5321a1 = _0x34b228, _0x109a5a = _0x1d3ea2.x, _0x38fcef = _0x1d3ea2.y, _0x513503 = -1e+400;
                    do {
                        if (_0x38fcef <= _0x5321a1.y && _0x38fcef >= _0x5321a1.next.y && _0x5321a1.next.y !== _0x5321a1.y) {
                            var _0x4796e3 = _0x5321a1.x + (_0x38fcef - _0x5321a1.y) * (_0x5321a1.next.x - _0x5321a1.x) / (_0x5321a1.next.y - _0x5321a1.y);
                            if (_0x4796e3 <= _0x109a5a && _0x4796e3 > _0x513503 && (_0x513503 = _0x4796e3, _0x294a63 = _0x5321a1.x < _0x5321a1.next.x ? _0x5321a1 : _0x5321a1.next, _0x4796e3 === _0x109a5a)) {
                                return _0x294a63;
                            }
                        }
                        _0x5321a1 = _0x5321a1.next;
                    } while (_0x5321a1 !== _0x34b228);
                    if (!_0x294a63) {
                        return null;
                    }
                    var _0x55bdcf, _0x3dd99c = _0x294a63, _0x41ca21 = _0x294a63.x, _0x2d111d = _0x294a63.y, _0x2780cd = 1e+400;
                    _0x5321a1 = _0x294a63;
                    do {
                        _0x109a5a >= _0x5321a1.x && _0x5321a1.x >= _0x41ca21 && _0x109a5a !== _0x5321a1.x && _0x51aa54(_0x38fcef < _0x2d111d ? _0x109a5a : _0x513503, _0x38fcef, _0x41ca21, _0x2d111d, _0x38fcef < _0x2d111d ? _0x513503 : _0x109a5a, _0x38fcef, _0x5321a1.x, _0x5321a1.y) && (_0x55bdcf = Math.abs(_0x38fcef - _0x5321a1.y) / (_0x109a5a - _0x5321a1.x), _0x41b401(_0x5321a1, _0x1d3ea2) && (_0x55bdcf < _0x2780cd || _0x55bdcf === _0x2780cd && (_0x5321a1.x > _0x294a63.x || _0x5321a1.x === _0x294a63.x && _0x18f5ef(_0x294a63, _0x5321a1))) && (_0x294a63 = _0x5321a1, _0x2780cd = _0x55bdcf));
                        _0x5321a1 = _0x5321a1.next;
                    } while (_0x5321a1 !== _0x3dd99c);
                    return _0x294a63;
                }(_0x25a771, _0x5af600);
                if (!_0x431a8f) {
                    return _0x5af600;
                }
                var _0x34147d = _0x53f2bf(_0x431a8f, _0x25a771);
                return _0x11bce3(_0x34147d, _0x34147d.next), _0x11bce3(_0x431a8f, _0x431a8f.next);
            }
            function _0x18f5ef(_0x2c8ab6, _0x3ce57c) {
                ;
                return _0x5e2ad4(_0x2c8ab6.prev, _0x2c8ab6, _0x3ce57c.prev) < 0 && _0x5e2ad4(_0x3ce57c.next, _0x2c8ab6, _0x2c8ab6.next) < 0;
            }
            function _0x1bb06e(_0x2dbf64, _0x39a4bb, _0x3e55ff, _0xcc625d, _0x7e2430) {
                return (_0x2dbf64 = 1431655765 & ((_0x2dbf64 = 858993459 & ((_0x2dbf64 = 252645135 & ((_0x2dbf64 = 16711935 & ((_0x2dbf64 = (_0x2dbf64 - _0x3e55ff) * _0x7e2430 | 0) | _0x2dbf64 << 8)) | _0x2dbf64 << 4)) | _0x2dbf64 << 2)) | _0x2dbf64 << 1)) | (_0x39a4bb = 1431655765 & ((_0x39a4bb = 858993459 & ((_0x39a4bb = 252645135 & ((_0x39a4bb = 16711935 & ((_0x39a4bb = (_0x39a4bb - _0xcc625d) * _0x7e2430 | 0) | _0x39a4bb << 8)) | _0x39a4bb << 4)) | _0x39a4bb << 2)) | _0x39a4bb << 1)) << 1;
            }
            function _0x661c3f(_0x3113d9) {
                var _0x1e9b04 = _0x3113d9, _0x303eda = _0x3113d9;
                do {
                    (_0x1e9b04.x < _0x303eda.x || _0x1e9b04.x === _0x303eda.x && _0x1e9b04.y < _0x303eda.y) && (_0x303eda = _0x1e9b04);
                    _0x1e9b04 = _0x1e9b04.next;
                } while (_0x1e9b04 !== _0x3113d9);
                return _0x303eda;
            }
            function _0x51aa54(_0x27637f, _0x2ee294, _0x43893f, _0x4b6d67, _0x1f3f84, _0x4870df, _0x2d1384, _0xe826ff) {
                return (_0x1f3f84 - _0x2d1384) * (_0x2ee294 - _0xe826ff) >= (_0x27637f - _0x2d1384) * (_0x4870df - _0xe826ff) && (_0x27637f - _0x2d1384) * (_0x4b6d67 - _0xe826ff) >= (_0x43893f - _0x2d1384) * (_0x2ee294 - _0xe826ff) && (_0x43893f - _0x2d1384) * (_0x4870df - _0xe826ff) >= (_0x1f3f84 - _0x2d1384) * (_0x4b6d67 - _0xe826ff);
            }
            function _0x41d0af(_0x389176, _0x1ef5bf) {
                ;
                return _0x389176.next.i !== _0x1ef5bf.i && _0x389176.prev.i !== _0x1ef5bf.i && !function (_0x3d6260, _0x17d5d9) {
                    var _0x3e6cf4 = _0x3d6260;
                    do {
                        if (_0x3e6cf4.i !== _0x3d6260.i && _0x3e6cf4.next.i !== _0x3d6260.i && _0x3e6cf4.i !== _0x17d5d9.i && _0x3e6cf4.next.i !== _0x17d5d9.i && _0x53dd55(_0x3e6cf4, _0x3e6cf4.next, _0x3d6260, _0x17d5d9)) {
                            return true;
                        }
                        _0x3e6cf4 = _0x3e6cf4.next;
                    } while (_0x3e6cf4 !== _0x3d6260);
                    return false;
                }(_0x389176, _0x1ef5bf) && (_0x41b401(_0x389176, _0x1ef5bf) && _0x41b401(_0x1ef5bf, _0x389176) && function (_0x521221, _0xdcbe17) {
                    var _0x1b881e = _0x521221, _0x359e51 = false, _0x1f1731 = (_0x521221.x + _0xdcbe17.x) / 2, _0x2e1469 = (_0x521221.y + _0xdcbe17.y) / 2;
                    do {
                        _0x1b881e.y > _0x2e1469 != _0x1b881e.next.y > _0x2e1469 && _0x1b881e.next.y !== _0x1b881e.y && _0x1f1731 < (_0x1b881e.next.x - _0x1b881e.x) * (_0x2e1469 - _0x1b881e.y) / (_0x1b881e.next.y - _0x1b881e.y) + _0x1b881e.x && (_0x359e51 = !_0x359e51);
                        _0x1b881e = _0x1b881e.next;
                    } while (_0x1b881e !== _0x521221);
                    return _0x359e51;
                }(_0x389176, _0x1ef5bf) && (_0x5e2ad4(_0x389176.prev, _0x389176, _0x1ef5bf.prev) || _0x5e2ad4(_0x389176, _0x1ef5bf.prev, _0x1ef5bf)) || _0x763241(_0x389176, _0x1ef5bf) && _0x5e2ad4(_0x389176.prev, _0x389176, _0x389176.next) > 0 && _0x5e2ad4(_0x1ef5bf.prev, _0x1ef5bf, _0x1ef5bf.next) > 0);
            }
            function _0x5e2ad4(_0x425246, _0x11297e, _0x56777e) {
                return (_0x11297e.y - _0x425246.y) * (_0x56777e.x - _0x11297e.x) - (_0x11297e.x - _0x425246.x) * (_0x56777e.y - _0x11297e.y);
            }
            function _0x763241(_0x25ee31, _0x12dd6d) {
                return _0x25ee31.x === _0x12dd6d.x && _0x25ee31.y === _0x12dd6d.y;
            }
            function _0x53dd55(_0x161602, _0x3956b6, _0x3f5a96, _0x414066) {
                var _0x21e30a = _0x1bdc2e(_0x5e2ad4(_0x161602, _0x3956b6, _0x3f5a96)), _0x512f2b = _0x1bdc2e(_0x5e2ad4(_0x161602, _0x3956b6, _0x414066)), _0x5ac95b = _0x1bdc2e(_0x5e2ad4(_0x3f5a96, _0x414066, _0x161602)), _0x344a70 = _0x1bdc2e(_0x5e2ad4(_0x3f5a96, _0x414066, _0x3956b6));
                return _0x21e30a !== _0x512f2b && _0x5ac95b !== _0x344a70 || !(0 !== _0x21e30a || !_0x2f5ec3(_0x161602, _0x3f5a96, _0x3956b6)) || !(0 !== _0x512f2b || !_0x2f5ec3(_0x161602, _0x414066, _0x3956b6)) || !(0 !== _0x5ac95b || !_0x2f5ec3(_0x3f5a96, _0x161602, _0x414066)) || !(0 !== _0x344a70 || !_0x2f5ec3(_0x3f5a96, _0x3956b6, _0x414066));
            }
            function _0x2f5ec3(_0x1af348, _0x246849, _0x1d08f7) {
                ;
                return _0x246849.x <= Math.max(_0x1af348.x, _0x1d08f7.x) && _0x246849.x >= Math.min(_0x1af348.x, _0x1d08f7.x) && _0x246849.y <= Math.max(_0x1af348.y, _0x1d08f7.y) && _0x246849.y >= Math.min(_0x1af348.y, _0x1d08f7.y);
            }
            function _0x1bdc2e(_0x5a7449) {
                return _0x5a7449 > 0 ? 1 : _0x5a7449 < 0 ? -1 : 0;
            }
            function _0x41b401(_0x41e53e, _0xcf7308) {
                ;
                return _0x5e2ad4(_0x41e53e.prev, _0x41e53e, _0x41e53e.next) < 0 ? _0x5e2ad4(_0x41e53e, _0xcf7308, _0x41e53e.next) >= 0 && _0x5e2ad4(_0x41e53e, _0x41e53e.prev, _0xcf7308) >= 0 : _0x5e2ad4(_0x41e53e, _0xcf7308, _0x41e53e.prev) < 0 || _0x5e2ad4(_0x41e53e, _0x41e53e.next, _0xcf7308) < 0;
            }
            function _0x53f2bf(_0x56bc0a, _0x5294fe) {
                var _0x2cadc5 = new _0x3f39d9(_0x56bc0a.i, _0x56bc0a.x, _0x56bc0a.y), _0x397280 = new _0x3f39d9(_0x5294fe.i, _0x5294fe.x, _0x5294fe.y), _0x2fd6c1 = _0x56bc0a.next, _0x37bb11 = _0x5294fe.prev;
                return _0x56bc0a.next = _0x5294fe, _0x5294fe.prev = _0x56bc0a, _0x2cadc5.next = _0x2fd6c1, _0x2fd6c1.prev = _0x2cadc5, _0x397280.next = _0x2cadc5, _0x2cadc5.prev = _0x397280, _0x37bb11.next = _0x397280, _0x397280.prev = _0x37bb11, _0x397280;
            }
            function _0x33b924(_0x15754b, _0x364b62, _0x1d1cb6, _0x3c35a2) {
                var _0xe63f98 = new _0x3f39d9(_0x15754b, _0x364b62, _0x1d1cb6);
                return _0x3c35a2 ? (_0xe63f98.next = _0x3c35a2.next, _0xe63f98.prev = _0x3c35a2, _0x3c35a2.next.prev = _0xe63f98, _0x3c35a2.next = _0xe63f98) : (_0xe63f98.prev = _0xe63f98, _0xe63f98.next = _0xe63f98), _0xe63f98;
            }
            function _0x3b8dff(_0x3beb19) {
                ;
                _0x3beb19.next.prev = _0x3beb19.prev;
                _0x3beb19.prev.next = _0x3beb19.next;
                _0x3beb19.prevZ && (_0x3beb19.prevZ.nextZ = _0x3beb19.nextZ);
                _0x3beb19.nextZ && (_0x3beb19.nextZ.prevZ = _0x3beb19.prevZ);
            }
            function _0x3f39d9(_0x5ac421, _0xb618b8, _0xe6ca38) {
                ;
                this.i = _0x5ac421;
                this.x = _0xb618b8;
                this.y = _0xe6ca38;
                this.prev = null;
                this.next = null;
                this.z = 0;
                this.prevZ = null;
                this.nextZ = null;
                this.steiner = false;
            }
            function _0x558a9f(_0x2f8cdd, _0x1f6c00, _0x33e3bc, _0x446f4b) {
                for (var _0x2db046 = 0, _0x1ec38c = _0x1f6c00, _0x367a0d = _0x33e3bc - _0x446f4b; _0x1ec38c < _0x33e3bc; _0x1ec38c += _0x446f4b) {
                    _0x2db046 += (_0x2f8cdd[_0x367a0d] - _0x2f8cdd[_0x1ec38c]) * (_0x2f8cdd[_0x1ec38c + 1] + _0x2f8cdd[_0x367a0d + 1]);
                    _0x367a0d = _0x1ec38c;
                }
                return _0x2db046;
            }
            _0x230498.exports = _0x33748b;
            _0x230498.exports.default = _0x33748b;
            _0x33748b.deviation = function (_0x2f3f02, _0x5aa2ae, _0x677c55, _0x7af93e) {
                var _0x2694e6 = _0x5aa2ae && _0x5aa2ae.length, _0x34c337 = _0x2694e6 ? _0x5aa2ae[0] * _0x677c55 : _0x2f3f02.length, _0x128fba = Math.abs(_0x558a9f(_0x2f3f02, 0, _0x34c337, _0x677c55));
                if (_0x2694e6) {
                    for (var _0x9ddf60 = 0, _0x1d2ff4 = _0x5aa2ae.length; _0x9ddf60 < _0x1d2ff4; _0x9ddf60++) {
                        var _0x5399f8 = _0x5aa2ae[_0x9ddf60] * _0x677c55, _0x12a946 = _0x9ddf60 < _0x1d2ff4 - 1 ? _0x5aa2ae[_0x9ddf60 + 1] * _0x677c55 : _0x2f3f02.length;
                        _0x128fba -= Math.abs(_0x558a9f(_0x2f3f02, _0x5399f8, _0x12a946, _0x677c55));
                    }
                }
                var _0x59cc2b = 0;
                for (_0x9ddf60 = 0; _0x9ddf60 < _0x7af93e.length; _0x9ddf60 += 3) {
                    var _0x6ba0fe = _0x7af93e[_0x9ddf60] * _0x677c55, _0x28e015 = _0x7af93e[_0x9ddf60 + 1] * _0x677c55, _0x27cebf = _0x7af93e[_0x9ddf60 + 2] * _0x677c55;
                    _0x59cc2b += Math.abs((_0x2f3f02[_0x6ba0fe] - _0x2f3f02[_0x27cebf]) * (_0x2f3f02[_0x28e015 + 1] - _0x2f3f02[_0x6ba0fe + 1]) - (_0x2f3f02[_0x6ba0fe] - _0x2f3f02[_0x28e015]) * (_0x2f3f02[_0x27cebf + 1] - _0x2f3f02[_0x6ba0fe + 1]));
                }
                return 0 === _0x128fba && 0 === _0x59cc2b ? 0 : Math.abs((_0x59cc2b - _0x128fba) / _0x128fba);
            };
            _0x33748b.flatten = function (_0x51ced4) {
                ;
                for (var _0x8bd783 = _0x51ced4[0][0].length, _0x2d2c12 = {
                            'vertices': [],
                            'holes': [],
                            'dimensions': _0x8bd783
                        }, _0x57f21 = 0, _0x1da9fa = 0; _0x1da9fa < _0x51ced4.length; _0x1da9fa++) {
                    for (var _0x4a5db6 = 0; _0x4a5db6 < _0x51ced4[_0x1da9fa].length; _0x4a5db6++) {
                        for (var _0x4ba97e = 0; _0x4ba97e < _0x8bd783; _0x4ba97e++) {
                            _0x2d2c12.vertices.push(_0x51ced4[_0x1da9fa][_0x4a5db6][_0x4ba97e]);
                        }
                    }
                    _0x1da9fa > 0 && (_0x57f21 += _0x51ced4[_0x1da9fa - 1].length, _0x2d2c12.holes.push(_0x57f21));
                }
                return _0x2d2c12;
            };
        },
        729: _0x48d215 => {
            'use strict';
            ;
            var _0x4468d1 = Object.prototype.hasOwnProperty, _0x578fa9 = '~';
            function _0x10c09b() {
            }
            function _0x5df1df(_0x31d3f8, _0x1c5db8, _0x191a7a) {
                ;
                this.fn = _0x31d3f8;
                this.context = _0x1c5db8;
                this.once = _0x191a7a || false;
            }
            function _0x22b7e2(_0xb797f5, _0x33e4b7, _0x3bca01, _0x139b03, _0x294b2e) {
                ;
                if ('function' != typeof _0x3bca01) {
                    throw new TypeError('The listener must be a function');
                }
                var _0x15d638 = new _0x5df1df(_0x3bca01, _0x139b03 || _0xb797f5, _0x294b2e), _0x9c490b = _0x578fa9 ? _0x578fa9 + _0x33e4b7 : _0x33e4b7;
                return _0xb797f5['_events'][_0x9c490b] ? _0xb797f5['_events'][_0x9c490b].fn ? _0xb797f5['_events'][_0x9c490b] = [
                    _0xb797f5['_events'][_0x9c490b],
                    _0x15d638
                ] : _0xb797f5['_events'][_0x9c490b].push(_0x15d638) : (_0xb797f5['_events'][_0x9c490b] = _0x15d638, _0xb797f5['_eventsCount']++), _0xb797f5;
            }
            function _0x5dbf6d(_0x10ee2c, _0x480d10) {
                ;
                0 == --_0x10ee2c['_eventsCount'] ? _0x10ee2c['_events'] = new _0x10c09b() : delete _0x10ee2c['_events'][_0x480d10];
            }
            function _0x3b8919() {
                ;
                this['_events'] = new _0x10c09b();
                this['_eventsCount'] = 0;
            }
            Object.create && (_0x10c09b.prototype = Object.create(null), new _0x10c09b()['__proto__'] || (_0x578fa9 = false));
            _0x3b8919.prototype.eventNames = function () {
                var _0x2f411d, _0x29c4dd, _0xfe9d10 = [];
                if (0 === this['_eventsCount']) {
                    return _0xfe9d10;
                }
                for (_0x29c4dd in _0x2f411d = this['_events'])
                    _0x4468d1.call(_0x2f411d, _0x29c4dd) && _0xfe9d10.push(_0x578fa9 ? _0x29c4dd.slice(1) : _0x29c4dd);
                return Object.getOwnPropertySymbols ? _0xfe9d10.concat(Object.getOwnPropertySymbols(_0x2f411d)) : _0xfe9d10;
            };
            _0x3b8919.prototype.listeners = function (_0x37c545) {
                var _0x32adb6 = _0x578fa9 ? _0x578fa9 + _0x37c545 : _0x37c545, _0x20458f = this['_events'][_0x32adb6];
                if (!_0x20458f) {
                    return [];
                }
                if (_0x20458f.fn) {
                    return [_0x20458f.fn];
                }
                for (var _0x2d26c8 = 0, _0x367029 = _0x20458f.length, _0x13def5 = new Array(_0x367029); _0x2d26c8 < _0x367029; _0x2d26c8++) {
                    _0x13def5[_0x2d26c8] = _0x20458f[_0x2d26c8].fn;
                }
                return _0x13def5;
            };
            _0x3b8919.prototype.listenerCount = function (_0x37877b) {
                var _0x4db43a = _0x578fa9 ? _0x578fa9 + _0x37877b : _0x37877b, _0x2432b2 = this['_events'][_0x4db43a];
                return _0x2432b2 ? _0x2432b2.fn ? 1 : _0x2432b2.length : 0;
            };
            _0x3b8919.prototype.emit = function (_0x483965, _0xd0ea0f, _0x847dbb, _0x4b03e0, _0x28e084, _0x92133) {
                var _0x44996d = _0x578fa9 ? _0x578fa9 + _0x483965 : _0x483965;
                if (!this['_events'][_0x44996d]) {
                    return false;
                }
                var _0x157584, _0x247152, _0x32bd00 = this['_events'][_0x44996d], _0x1f8f4b = arguments.length;
                if (_0x32bd00.fn) {
                    switch (_0x32bd00.once && this.removeListener(_0x483965, _0x32bd00.fn, void 0, true), _0x1f8f4b) {
                    case 1:
                        return _0x32bd00.fn.call(_0x32bd00.context), true;
                    case 2:
                        return _0x32bd00.fn.call(_0x32bd00.context, _0xd0ea0f), true;
                    case 3:
                        return _0x32bd00.fn.call(_0x32bd00.context, _0xd0ea0f, _0x847dbb), true;
                    case 4:
                        return _0x32bd00.fn.call(_0x32bd00.context, _0xd0ea0f, _0x847dbb, _0x4b03e0), true;
                    case 5:
                        return _0x32bd00.fn.call(_0x32bd00.context, _0xd0ea0f, _0x847dbb, _0x4b03e0, _0x28e084), true;
                    case 6:
                        return _0x32bd00.fn.call(_0x32bd00.context, _0xd0ea0f, _0x847dbb, _0x4b03e0, _0x28e084, _0x92133), true;
                    }
                    for (_0x247152 = 1, _0x157584 = new Array(_0x1f8f4b - 1); _0x247152 < _0x1f8f4b; _0x247152++) {
                        _0x157584[_0x247152 - 1] = arguments[_0x247152];
                    }
                    _0x32bd00.fn.apply(_0x32bd00.context, _0x157584);
                } else {
                    var _0x33eaad, _0x1105c1 = _0x32bd00.length;
                    for (_0x247152 = 0; _0x247152 < _0x1105c1; _0x247152++) {
                        switch (_0x32bd00[_0x247152].once && this.removeListener(_0x483965, _0x32bd00[_0x247152].fn, void 0, true), _0x1f8f4b) {
                        case 1:
                            _0x32bd00[_0x247152].fn.call(_0x32bd00[_0x247152].context);
                            break;
                        case 2:
                            _0x32bd00[_0x247152].fn.call(_0x32bd00[_0x247152].context, _0xd0ea0f);
                            break;
                        case 3:
                            _0x32bd00[_0x247152].fn.call(_0x32bd00[_0x247152].context, _0xd0ea0f, _0x847dbb);
                            break;
                        case 4:
                            _0x32bd00[_0x247152].fn.call(_0x32bd00[_0x247152].context, _0xd0ea0f, _0x847dbb, _0x4b03e0);
                            break;
                        default:
                            if (!_0x157584) {
                                for (_0x33eaad = 1, _0x157584 = new Array(_0x1f8f4b - 1); _0x33eaad < _0x1f8f4b; _0x33eaad++) {
                                    _0x157584[_0x33eaad - 1] = arguments[_0x33eaad];
                                }
                            }
                            _0x32bd00[_0x247152].fn.apply(_0x32bd00[_0x247152].context, _0x157584);
                        }
                    }
                }
                return true;
            };
            _0x3b8919.prototype.on = function (_0x2a9682, _0x36dde3, _0x3e7f0b) {
                return _0x22b7e2(this, _0x2a9682, _0x36dde3, _0x3e7f0b, false);
            };
            _0x3b8919.prototype.once = function (_0x44866c, _0x27eeed, _0x45c373) {
                return _0x22b7e2(this, _0x44866c, _0x27eeed, _0x45c373, true);
            };
            _0x3b8919.prototype.removeListener = function (_0x58a5ee, _0x1ad237, _0x4a0ce8, _0x1047b0) {
                var _0x34d278 = _0x578fa9 ? _0x578fa9 + _0x58a5ee : _0x58a5ee;
                if (!this['_events'][_0x34d278]) {
                    return this;
                }
                if (!_0x1ad237) {
                    return _0x5dbf6d(this, _0x34d278), this;
                }
                var _0x4ad7f7 = this['_events'][_0x34d278];
                if (_0x4ad7f7.fn) {
                    _0x4ad7f7.fn !== _0x1ad237 || _0x1047b0 && !_0x4ad7f7.once || _0x4a0ce8 && _0x4ad7f7.context !== _0x4a0ce8 || _0x5dbf6d(this, _0x34d278);
                } else {
                    for (var _0x15d19a = 0, _0x1fecf2 = [], _0x4514e0 = _0x4ad7f7.length; _0x15d19a < _0x4514e0; _0x15d19a++) {
                        (_0x4ad7f7[_0x15d19a].fn !== _0x1ad237 || _0x1047b0 && !_0x4ad7f7[_0x15d19a].once || _0x4a0ce8 && _0x4ad7f7[_0x15d19a].context !== _0x4a0ce8) && _0x1fecf2.push(_0x4ad7f7[_0x15d19a]);
                    }
                    _0x1fecf2.length ? this['_events'][_0x34d278] = 1 === _0x1fecf2.length ? _0x1fecf2[0] : _0x1fecf2 : _0x5dbf6d(this, _0x34d278);
                }
                return this;
            };
            _0x3b8919.prototype.removeAllListeners = function (_0x5ddc1c) {
                var _0x5e9248;
                return _0x5ddc1c ? (_0x5e9248 = _0x578fa9 ? _0x578fa9 + _0x5ddc1c : _0x5ddc1c, this['_events'][_0x5e9248] && _0x5dbf6d(this, _0x5e9248)) : (this['_events'] = new _0x10c09b(), this['_eventsCount'] = 0), this;
            };
            _0x3b8919.prototype.off = _0x3b8919.prototype.removeListener;
            _0x3b8919.prototype.addListener = _0x3b8919.prototype.on;
            _0x3b8919.prefixed = _0x578fa9;
            _0x3b8919.EventEmitter = _0x3b8919;
            _0x48d215.exports = _0x3b8919;
        },
        587: _0x5e4fbb => {
            'use strict';
            ;
            function _0x4a8778(_0x258a96, _0x3e60bf) {
                ;
                return Object.prototype.hasOwnProperty.call(_0x258a96, _0x3e60bf);
            }
            _0x5e4fbb.exports = function (_0x5efe69, _0x4d46bb, _0x5d950c, _0x11c881) {
                ;
                _0x4d46bb = _0x4d46bb || '&';
                _0x5d950c = _0x5d950c || '=';
                var _0x5f16d8 = {};
                if ('string' != typeof _0x5efe69 || 0 === _0x5efe69.length) {
                    return _0x5f16d8;
                }
                ;
                _0x5efe69 = _0x5efe69.split(_0x4d46bb);
                var _0x31fda7 = 1000;
                _0x11c881 && 'number' == typeof _0x11c881.maxKeys && (_0x31fda7 = _0x11c881.maxKeys);
                var _0x3749d7 = _0x5efe69.length;
                _0x31fda7 > 0 && _0x3749d7 > _0x31fda7 && (_0x3749d7 = _0x31fda7);
                for (var _0x491da4 = 0; _0x491da4 < _0x3749d7; ++_0x491da4) {
                    var _0x46de80, _0x1c2bed, _0x494b8e, _0x5a24b5, _0x10cea6 = _0x5efe69[_0x491da4].replace(/\+/g, '%20'), _0x17b061 = _0x10cea6.indexOf(_0x5d950c);
                    _0x17b061 >= 0 ? (_0x46de80 = _0x10cea6.substr(0, _0x17b061), _0x1c2bed = _0x10cea6.substr(_0x17b061 + 1)) : (_0x46de80 = _0x10cea6, _0x1c2bed = '');
                    _0x494b8e = decodeURIComponent(_0x46de80);
                    _0x5a24b5 = decodeURIComponent(_0x1c2bed);
                    _0x4a8778(_0x5f16d8, _0x494b8e) ? Array.isArray(_0x5f16d8[_0x494b8e]) ? _0x5f16d8[_0x494b8e].push(_0x5a24b5) : _0x5f16d8[_0x494b8e] = [
                        _0x5f16d8[_0x494b8e],
                        _0x5a24b5
                    ] : _0x5f16d8[_0x494b8e] = _0x5a24b5;
                }
                return _0x5f16d8;
            };
        },
        361: _0x1a5226 => {
            'use strict';
            ;
            var _0xe583eb = function (_0xbdd388) {
                ;
                switch (typeof _0xbdd388) {
                case 'string':
                    return _0xbdd388;
                case 'boolean':
                    return _0xbdd388 ? 'true' : 'false';
                case 'number':
                    return isFinite(_0xbdd388) ? _0xbdd388 : '';
                default:
                    return '';
                }
            };
            _0x1a5226.exports = function (_0x27b8bb, _0x34e32d, _0x21ede0, _0x477b9b) {
                ;
                return _0x34e32d = _0x34e32d || '&', _0x21ede0 = _0x21ede0 || '=', null === _0x27b8bb && (_0x27b8bb = void 0), 'object' == typeof _0x27b8bb ? Object.keys(_0x27b8bb).map(function (_0xebd860) {
                    var _0x25e5e8 = encodeURIComponent(_0xe583eb(_0xebd860)) + _0x21ede0;
                    return Array.isArray(_0x27b8bb[_0xebd860]) ? _0x27b8bb[_0xebd860].map(function (_0x26df0c) {
                        return _0x25e5e8 + encodeURIComponent(_0xe583eb(_0x26df0c));
                    }).join(_0x34e32d) : _0x25e5e8 + encodeURIComponent(_0xe583eb(_0x27b8bb[_0xebd860]));
                }).join(_0x34e32d) : _0x477b9b ? encodeURIComponent(_0xe583eb(_0x477b9b)) + _0x21ede0 + encodeURIComponent(_0xe583eb(_0x27b8bb)) : '';
            };
        },
        673: (_0x3b0dc2, _0x2fc6bf, _0x2e2346) => {
            'use strict';
            ;
            _0x2fc6bf.decode = _0x2fc6bf.parse = _0x2e2346(587);
            _0x2fc6bf.encode = _0x2fc6bf.stringify = _0x2e2346(361);
        },
        511: function (_0x48e33b, _0xc62d7, _0x198891) {
            var _0x1e0e65;
            _0x48e33b = _0x198891.nmd(_0x48e33b);
            (function (_0x4c6ead) {
                ;
                _0xc62d7 && _0xc62d7.nodeType;
                _0x48e33b && _0x48e33b.nodeType;
                var _0x54048a = 'object' == typeof _0x198891.g && _0x198891.g;
                _0x54048a.global !== _0x54048a && _0x54048a.window !== _0x54048a && _0x54048a.self;
                var _0x5e996c, _0x5b8621 = {
                        'overflow': 'Overflow: input needs wider integers to process',
                        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
                        'invalid-input': 'Invalid input'
                    }, _0x13f2c5 = 35, _0x550e31 = Math.floor, _0x3ac15e = String.fromCharCode;
                function _0x53eec7(_0x5d6498) {
                    throw RangeError(_0x5b8621[_0x5d6498]);
                }
                function _0x5513a2(_0x591129, _0xa72f01) {
                    for (var _0x5d8332 = _0x591129.length, _0x4642a3 = []; _0x5d8332--;) {
                        _0x4642a3[_0x5d8332] = _0xa72f01(_0x591129[_0x5d8332]);
                    }
                    return _0x4642a3;
                }
                function _0x1bc05e(_0x5e0956, _0x1236e0) {
                    var _0x292b99 = _0x5e0956.split('@'), _0x404366 = '';
                    return _0x292b99.length > 1 && (_0x404366 = _0x292b99[0] + '@', _0x5e0956 = _0x292b99[1]), _0x404366 + _0x5513a2((_0x5e0956 = _0x5e0956.replace(/[\x2E\u3002\uFF0E\uFF61]/g, '.')).split('.'), _0x1236e0).join('.');
                }
                function _0x15df10(_0x4493e5) {
                    ;
                    for (var _0x438c78, _0x47b375, _0x585cb4 = [], _0x52aeda = 0, _0x30e19d = _0x4493e5.length; _0x52aeda < _0x30e19d;) {
                        (_0x438c78 = _0x4493e5.charCodeAt(_0x52aeda++)) >= 55296 && _0x438c78 <= 56319 && _0x52aeda < _0x30e19d ? 56320 == (64512 & (_0x47b375 = _0x4493e5.charCodeAt(_0x52aeda++))) ? _0x585cb4.push(((1023 & _0x438c78) << 10) + (1023 & _0x47b375) + 65536) : (_0x585cb4.push(_0x438c78), _0x52aeda--) : _0x585cb4.push(_0x438c78);
                    }
                    return _0x585cb4;
                }
                function _0x277acd(_0x4b7124) {
                    ;
                    return _0x5513a2(_0x4b7124, function (_0x4c21a8) {
                        var _0x49bb9d = '';
                        return _0x4c21a8 > 65535 && (_0x49bb9d += _0x3ac15e((_0x4c21a8 -= 65536) >>> 10 & 1023 | 55296), _0x4c21a8 = 56320 | 1023 & _0x4c21a8), _0x49bb9d + _0x3ac15e(_0x4c21a8);
                    }).join('');
                }
                function _0x3c97d1(_0x3c19c8, _0x23a625) {
                    return _0x3c19c8 + 22 + 75 * (_0x3c19c8 < 26) - ((0 != _0x23a625) << 5);
                }
                function _0x590ac8(_0x9ef710, _0x2515c5, _0x46918d) {
                    var _0xa2a38b = 0;
                    for (_0x9ef710 = _0x46918d ? _0x550e31(_0x9ef710 / 700) : _0x9ef710 >> 1, _0x9ef710 += _0x550e31(_0x9ef710 / _0x2515c5); _0x9ef710 > _0x13f2c5 * 26 >> 1; _0xa2a38b += 36) {
                        _0x9ef710 = _0x550e31(_0x9ef710 / _0x13f2c5);
                    }
                    return _0x550e31(_0xa2a38b + (_0x13f2c5 + 1) * _0x9ef710 / (_0x9ef710 + 38));
                }
                function _0x1f4e0e(_0x15a833) {
                    var _0x46b5c6, _0x54ecad, _0x1f6b35, _0x370397, _0x201c8e, _0x1fadfb, _0x481c1b, _0x25c917, _0x480488, _0x2cf904, _0x283a1f, _0x53100d = [], _0x3ec006 = _0x15a833.length, _0x312307 = 0, _0x586c64 = 128, _0x59b763 = 72;
                    for ((_0x54ecad = _0x15a833.lastIndexOf('-')) < 0 && (_0x54ecad = 0), _0x1f6b35 = 0; _0x1f6b35 < _0x54ecad; ++_0x1f6b35) {
                        _0x15a833.charCodeAt(_0x1f6b35) >= 128 && _0x53eec7('not-basic');
                        _0x53100d.push(_0x15a833.charCodeAt(_0x1f6b35));
                    }
                    for (_0x370397 = _0x54ecad > 0 ? _0x54ecad + 1 : 0; _0x370397 < _0x3ec006;) {
                        for (_0x201c8e = _0x312307, _0x1fadfb = 1, _0x481c1b = 36; _0x370397 >= _0x3ec006 && _0x53eec7('invalid-input'), ((_0x25c917 = (_0x283a1f = _0x15a833.charCodeAt(_0x370397++)) - 48 < 10 ? _0x283a1f - 22 : _0x283a1f - 65 < 26 ? _0x283a1f - 65 : _0x283a1f - 97 < 26 ? _0x283a1f - 97 : 36) >= 36 || _0x25c917 > _0x550e31((2147483647 - _0x312307) / _0x1fadfb)) && _0x53eec7('overflow'), _0x312307 += _0x25c917 * _0x1fadfb, !(_0x25c917 < (_0x480488 = _0x481c1b <= _0x59b763 ? 1 : _0x481c1b >= _0x59b763 + 26 ? 26 : _0x481c1b - _0x59b763)); _0x481c1b += 36) {
                            _0x1fadfb > _0x550e31(2147483647 / (_0x2cf904 = 36 - _0x480488)) && _0x53eec7('overflow');
                            _0x1fadfb *= _0x2cf904;
                        }
                        _0x59b763 = _0x590ac8(_0x312307 - _0x201c8e, _0x46b5c6 = _0x53100d.length + 1, 0 == _0x201c8e);
                        _0x550e31(_0x312307 / _0x46b5c6) > 2147483647 - _0x586c64 && _0x53eec7('overflow');
                        _0x586c64 += _0x550e31(_0x312307 / _0x46b5c6);
                        _0x312307 %= _0x46b5c6;
                        _0x53100d.splice(_0x312307++, 0, _0x586c64);
                    }
                    return _0x277acd(_0x53100d);
                }
                function _0x1514ea(_0x249ad7) {
                    var _0x51c3b1, _0x47a121, _0x1c50f2, _0x51f3a8, _0x20b9d7, _0x3ec62f, _0x1105d5, _0x193745, _0x47d2b9, _0x1fddb8, _0x2fd231, _0x4ce217, _0x2ed6c8, _0x30fad8, _0x153527, _0x3079fc = [];
                    for (_0x4ce217 = (_0x249ad7 = _0x15df10(_0x249ad7)).length, _0x51c3b1 = 128, _0x47a121 = 0, _0x20b9d7 = 72, _0x3ec62f = 0; _0x3ec62f < _0x4ce217; ++_0x3ec62f) {
                        (_0x2fd231 = _0x249ad7[_0x3ec62f]) < 128 && _0x3079fc.push(_0x3ac15e(_0x2fd231));
                    }
                    for (_0x1c50f2 = _0x51f3a8 = _0x3079fc.length, _0x51f3a8 && _0x3079fc.push('-'); _0x1c50f2 < _0x4ce217;) {
                        for (_0x1105d5 = 2147483647, _0x3ec62f = 0; _0x3ec62f < _0x4ce217; ++_0x3ec62f) {
                            (_0x2fd231 = _0x249ad7[_0x3ec62f]) >= _0x51c3b1 && _0x2fd231 < _0x1105d5 && (_0x1105d5 = _0x2fd231);
                        }
                        for (_0x1105d5 - _0x51c3b1 > _0x550e31((2147483647 - _0x47a121) / (_0x2ed6c8 = _0x1c50f2 + 1)) && _0x53eec7('overflow'), _0x47a121 += (_0x1105d5 - _0x51c3b1) * _0x2ed6c8, _0x51c3b1 = _0x1105d5, _0x3ec62f = 0; _0x3ec62f < _0x4ce217; ++_0x3ec62f) {
                            if ((_0x2fd231 = _0x249ad7[_0x3ec62f]) < _0x51c3b1 && ++_0x47a121 > 2147483647 && _0x53eec7('overflow'), _0x2fd231 == _0x51c3b1) {
                                for (_0x193745 = _0x47a121, _0x47d2b9 = 36; !(_0x193745 < (_0x1fddb8 = _0x47d2b9 <= _0x20b9d7 ? 1 : _0x47d2b9 >= _0x20b9d7 + 26 ? 26 : _0x47d2b9 - _0x20b9d7)); _0x47d2b9 += 36) {
                                    _0x153527 = _0x193745 - _0x1fddb8;
                                    _0x30fad8 = 36 - _0x1fddb8;
                                    _0x3079fc.push(_0x3ac15e(_0x3c97d1(_0x1fddb8 + _0x153527 % _0x30fad8, 0)));
                                    _0x193745 = _0x550e31(_0x153527 / _0x30fad8);
                                }
                                _0x3079fc.push(_0x3ac15e(_0x3c97d1(_0x193745, 0)));
                                _0x20b9d7 = _0x590ac8(_0x47a121, _0x2ed6c8, _0x1c50f2 == _0x51f3a8);
                                _0x47a121 = 0;
                                ++_0x1c50f2;
                            }
                        }
                        ++_0x47a121;
                        ++_0x51c3b1;
                    }
                    return _0x3079fc.join('');
                }
                _0x5e996c = {
                    'version': '1.3.2',
                    'ucs2': {
                        'decode': _0x15df10,
                        'encode': _0x277acd
                    },
                    'decode': _0x1f4e0e,
                    'encode': _0x1514ea,
                    'toASCII': function (_0x207881) {
                        return _0x1bc05e(_0x207881, function (_0x234c58) {
                            ;
                            return /[^\x20-\x7E]/.test(_0x234c58) ? 'xn--' + _0x1514ea(_0x234c58) : _0x234c58;
                        });
                    },
                    'toUnicode': function (_0x1802a4) {
                        return _0x1bc05e(_0x1802a4, function (_0x3c0855) {
                            ;
                            return /^xn--/.test(_0x3c0855) ? _0x1f4e0e(_0x3c0855.slice(4).toLowerCase()) : _0x3c0855;
                        });
                    }
                };
                void 0 === (_0x1e0e65 = function () {
                    return _0x5e996c;
                }.call(_0xc62d7, _0x198891, _0xc62d7, _0x48e33b)) || (_0x48e33b.exports = _0x1e0e65);
            }());
        },
        575: (_0x5df92a, _0x41f0a4, _0x2bc546) => {
            'use strict';
            ;
            var _0x4647e5 = _0x2bc546(511), _0x3d7eb9 = _0x2bc546(502);
            function _0x4a803f() {
                ;
                this.protocol = null;
                this.slashes = null;
                this.auth = null;
                this.host = null;
                this.port = null;
                this.hostname = null;
                this.hash = null;
                this.search = null;
                this.query = null;
                this.pathname = null;
                this.path = null;
                this.href = null;
            }
            _0x41f0a4.Qc = _0x4c1da6;
            _0x41f0a4.DB = function (_0x2d2a04, _0x11b2dd) {
                return _0x4c1da6(_0x2d2a04, false, true).resolve(_0x11b2dd);
            };
            _0x41f0a4.WU = function (_0x1a1f91) {
                ;
                return _0x3d7eb9.isString(_0x1a1f91) && (_0x1a1f91 = _0x4c1da6(_0x1a1f91)), _0x1a1f91 instanceof _0x4a803f ? _0x1a1f91.format() : _0x4a803f.prototype.format.call(_0x1a1f91);
            };
            var _0x10c0aa = [
                    '{',
                    '}',
                    '|',
                    '\\',
                    '^',
                    '`'
                ].concat([
                    '<',
                    '>',
                    '"',
                    '`',
                    ' ',
                    '\r',
                    '\n',
                    '\t'
                ]), _0x5b8052 = ['\''].concat(_0x10c0aa), _0xd98534 = [
                    '%',
                    '/',
                    '?',
                    ';',
                    '#'
                ].concat(_0x5b8052), _0x43440f = [
                    '/',
                    '?',
                    '#'
                ], _0x447ffe = _0x2bc546(673);
            function _0x4c1da6(_0x3b6522, _0x5b1d23, _0x49a484) {
                ;
                if (_0x3b6522 && _0x3d7eb9.isObject(_0x3b6522) && _0x3b6522 instanceof _0x4a803f) {
                    return _0x3b6522;
                }
                var _0x479dd5 = new _0x4a803f();
                return _0x479dd5.parse(_0x3b6522, _0x5b1d23, _0x49a484), _0x479dd5;
            }
            _0x4a803f.prototype.parse = function (_0x422942, _0x562183, _0x555045) {
                ;
                if (!_0x3d7eb9.isString(_0x422942)) {
                    throw new TypeError('Parameter \'url\' must be a string, not ' + typeof _0x422942);
                }
                var _0x22c7ef = _0x422942.indexOf('?'), _0x33355d = -1 !== _0x22c7ef && _0x22c7ef < _0x422942.indexOf('#') ? '?' : '#', _0x3ca558 = _0x422942.split(_0x33355d);
                _0x3ca558[0] = _0x3ca558[0].replace(/\\/g, '/');
                var _0x275839 = _0x422942 = _0x3ca558.join(_0x33355d);
                if (_0x275839 = _0x275839.trim(), !_0x555045 && 1 === _0x422942.split('#').length) {
                    var _0x4830aa = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/.exec(_0x275839);
                    if (_0x4830aa) {
                        return this.path = _0x275839, this.href = _0x275839, this.pathname = _0x4830aa[1], _0x4830aa[2] ? (this.search = _0x4830aa[2], this.query = _0x562183 ? _0x447ffe.parse(this.search.substr(1)) : this.search.substr(1)) : _0x562183 && (this.search = '', this.query = {}), this;
                    }
                }
                var _0x41966d = /^([a-z0-9.+-]+:)/i.exec(_0x275839);
                if (_0x41966d) {
                    var _0x559a38 = (_0x41966d = _0x41966d[0]).toLowerCase();
                    this.protocol = _0x559a38;
                    _0x275839 = _0x275839.substr(_0x41966d.length);
                }
                if (_0x555045 || _0x41966d || _0x275839.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var _0x1188f2 = '//' === _0x275839.substr(0, 2);
                    !_0x1188f2 || _0x41966d && _0x16e293[_0x41966d] || (_0x275839 = _0x275839.substr(2), this.slashes = true);
                }
                if (!_0x16e293[_0x41966d] && (_0x1188f2 || _0x41966d && !_0x59ff68[_0x41966d])) {
                    for (var _0x2cd07c, _0x28f58b, _0x138741 = -1, _0x1048ca = 0; _0x1048ca < _0x43440f.length; _0x1048ca++) {
                        -1 !== (_0x60c5c0 = _0x275839.indexOf(_0x43440f[_0x1048ca])) && (-1 === _0x138741 || _0x60c5c0 < _0x138741) && (_0x138741 = _0x60c5c0);
                    }
                    for (-1 !== (_0x28f58b = -1 === _0x138741 ? _0x275839.lastIndexOf('@') : _0x275839.lastIndexOf('@', _0x138741)) && (_0x2cd07c = _0x275839.slice(0, _0x28f58b), _0x275839 = _0x275839.slice(_0x28f58b + 1), this.auth = decodeURIComponent(_0x2cd07c)), _0x138741 = -1, _0x1048ca = 0; _0x1048ca < _0xd98534.length; _0x1048ca++) {
                        var _0x60c5c0;
                        -1 !== (_0x60c5c0 = _0x275839.indexOf(_0xd98534[_0x1048ca])) && (-1 === _0x138741 || _0x60c5c0 < _0x138741) && (_0x138741 = _0x60c5c0);
                    }
                    -1 === _0x138741 && (_0x138741 = _0x275839.length);
                    this.host = _0x275839.slice(0, _0x138741);
                    _0x275839 = _0x275839.slice(_0x138741);
                    this.parseHost();
                    this.hostname = this.hostname || '';
                    var _0x53589c = '[' === this.hostname[0] && ']' === this.hostname[this.hostname.length - 1];
                    if (!_0x53589c) {
                        for (var _0x45952a = this.hostname.split(/\./), _0x492dc9 = (_0x1048ca = 0, _0x45952a.length); _0x1048ca < _0x492dc9; _0x1048ca++) {
                            var _0x3bb818 = _0x45952a[_0x1048ca];
                            if (_0x3bb818 && !_0x3bb818.match(/^[+a-z0-9A-Z_-]{0,63}$/)) {
                                for (var _0x55bcec = '', _0x12555d = 0, _0x492ab2 = _0x3bb818.length; _0x12555d < _0x492ab2; _0x12555d++) {
                                    _0x3bb818.charCodeAt(_0x12555d) > 127 ? _0x55bcec += 'x' : _0x55bcec += _0x3bb818[_0x12555d];
                                }
                                if (!_0x55bcec.match(/^[+a-z0-9A-Z_-]{0,63}$/)) {
                                    var _0xe3ab23 = _0x45952a.slice(0, _0x1048ca), _0x7b28fc = _0x45952a.slice(_0x1048ca + 1), _0x506b65 = _0x3bb818.match(/^([+a-z0-9A-Z_-]{0,63})(.*)$/);
                                    _0x506b65 && (_0xe3ab23.push(_0x506b65[1]), _0x7b28fc.unshift(_0x506b65[2]));
                                    _0x7b28fc.length && (_0x275839 = '/' + _0x7b28fc.join('.') + _0x275839);
                                    this.hostname = _0xe3ab23.join('.');
                                    break;
                                }
                            }
                        }
                    }
                    this.hostname.length > 255 ? this.hostname = '' : this.hostname = this.hostname.toLowerCase();
                    _0x53589c || (this.hostname = _0x4647e5.toASCII(this.hostname));
                    var _0x2144a0 = this.port ? ':' + this.port : '', _0x293119 = this.hostname || '';
                    this.host = _0x293119 + _0x2144a0;
                    this.href += this.host;
                    _0x53589c && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), '/' !== _0x275839[0] && (_0x275839 = '/' + _0x275839));
                }
                if (!_0xe217d[_0x559a38]) {
                    for (_0x1048ca = 0, _0x492dc9 = _0x5b8052.length; _0x1048ca < _0x492dc9; _0x1048ca++) {
                        var _0x2cfd53 = _0x5b8052[_0x1048ca];
                        if (-1 !== _0x275839.indexOf(_0x2cfd53)) {
                            var _0x6634ee = encodeURIComponent(_0x2cfd53);
                            _0x6634ee === _0x2cfd53 && (_0x6634ee = escape(_0x2cfd53));
                            _0x275839 = _0x275839.split(_0x2cfd53).join(_0x6634ee);
                        }
                    }
                }
                var _0x5e365c = _0x275839.indexOf('#');
                -1 !== _0x5e365c && (this.hash = _0x275839.substr(_0x5e365c), _0x275839 = _0x275839.slice(0, _0x5e365c));
                var _0x4fa270 = _0x275839.indexOf('?');
                if (-1 !== _0x4fa270 ? (this.search = _0x275839.substr(_0x4fa270), this.query = _0x275839.substr(_0x4fa270 + 1), _0x562183 && (this.query = _0x447ffe.parse(this.query)), _0x275839 = _0x275839.slice(0, _0x4fa270)) : _0x562183 && (this.search = '', this.query = {}), _0x275839 && (this.pathname = _0x275839), _0x59ff68[_0x559a38] && this.hostname && !this.pathname && (this.pathname = '/'), this.pathname || this.search) {
                    _0x2144a0 = this.pathname || '';
                    var _0x38b137 = this.search || '';
                    this.path = _0x2144a0 + _0x38b137;
                }
                return this.href = this.format(), this;
            };
            _0x4a803f.prototype.format = function () {
                var _0x6a3ef1 = this.auth || '';
                _0x6a3ef1 && (_0x6a3ef1 = (_0x6a3ef1 = encodeURIComponent(_0x6a3ef1)).replace(/%3A/i, ':'), _0x6a3ef1 += '@');
                var _0x431a24 = this.protocol || '', _0x12e21e = this.pathname || '', _0x11c7fe = this.hash || '', _0x587b9b = false, _0x588256 = '';
                this.host ? _0x587b9b = _0x6a3ef1 + this.host : this.hostname && (_0x587b9b = _0x6a3ef1 + (-1 === this.hostname.indexOf(':') ? this.hostname : '[' + this.hostname + ']'), this.port && (_0x587b9b += ':' + this.port));
                this.query && _0x3d7eb9.isObject(this.query) && Object.keys(this.query).length && (_0x588256 = _0x447ffe.stringify(this.query));
                var _0x312422 = this.search || _0x588256 && '?' + _0x588256 || '';
                return _0x431a24 && ':' !== _0x431a24.substr(-1) && (_0x431a24 += ':'), this.slashes || (!_0x431a24 || _0x59ff68[_0x431a24]) && false !== _0x587b9b ? (_0x587b9b = '//' + (_0x587b9b || ''), _0x12e21e && '/' !== _0x12e21e.charAt(0) && (_0x12e21e = '/' + _0x12e21e)) : _0x587b9b || (_0x587b9b = ''), _0x11c7fe && '#' !== _0x11c7fe.charAt(0) && (_0x11c7fe = '#' + _0x11c7fe), _0x312422 && '?' !== _0x312422.charAt(0) && (_0x312422 = '?' + _0x312422), _0x431a24 + _0x587b9b + (_0x12e21e = _0x12e21e.replace(/[?#]/g, function (_0x2498d3) {
                    return encodeURIComponent(_0x2498d3);
                })) + (_0x312422 = _0x312422.replace('#', '%23')) + _0x11c7fe;
            };
            _0x4a803f.prototype.resolve = function (_0x1bae90) {
                ;
                return this.resolveObject(_0x4c1da6(_0x1bae90, false, true)).format();
            };
            _0x4a803f.prototype.resolveObject = function (_0x552c11) {
                ;
                if (_0x3d7eb9.isString(_0x552c11)) {
                    var _0x2b1d81 = new _0x4a803f();
                    _0x2b1d81.parse(_0x552c11, false, true);
                    _0x552c11 = _0x2b1d81;
                }
                for (var _0x2779df = new _0x4a803f(), _0x2ec682 = Object.keys(this), _0x41ec37 = 0; _0x41ec37 < _0x2ec682.length; _0x41ec37++) {
                    var _0x4a78b1 = _0x2ec682[_0x41ec37];
                    _0x2779df[_0x4a78b1] = this[_0x4a78b1];
                }
                if (_0x2779df.hash = _0x552c11.hash, '' === _0x552c11.href) {
                    return _0x2779df.href = _0x2779df.format(), _0x2779df;
                }
                if (_0x552c11.slashes && !_0x552c11.protocol) {
                    for (var _0x231d42 = Object.keys(_0x552c11), _0x3d7775 = 0; _0x3d7775 < _0x231d42.length; _0x3d7775++) {
                        var _0x41df2c = _0x231d42[_0x3d7775];
                        'protocol' !== _0x41df2c && (_0x2779df[_0x41df2c] = _0x552c11[_0x41df2c]);
                    }
                    return _0x59ff68[_0x2779df.protocol] && _0x2779df.hostname && !_0x2779df.pathname && (_0x2779df.path = _0x2779df.pathname = '/'), _0x2779df.href = _0x2779df.format(), _0x2779df;
                }
                if (_0x552c11.protocol && _0x552c11.protocol !== _0x2779df.protocol) {
                    if (!_0x59ff68[_0x552c11.protocol]) {
                        for (var _0x389507 = Object.keys(_0x552c11), _0x51589d = 0; _0x51589d < _0x389507.length; _0x51589d++) {
                            var _0x26a40b = _0x389507[_0x51589d];
                            _0x2779df[_0x26a40b] = _0x552c11[_0x26a40b];
                        }
                        return _0x2779df.href = _0x2779df.format(), _0x2779df;
                    }
                    if (_0x2779df.protocol = _0x552c11.protocol, _0x552c11.host || _0x16e293[_0x552c11.protocol]) {
                        _0x2779df.pathname = _0x552c11.pathname;
                    } else {
                        for (var _0x2681b9 = (_0x552c11.pathname || '').split('/'); _0x2681b9.length && !(_0x552c11.host = _0x2681b9.shift());) {
                            ;
                        }
                        _0x552c11.host || (_0x552c11.host = '');
                        _0x552c11.hostname || (_0x552c11.hostname = '');
                        '' !== _0x2681b9[0] && _0x2681b9.unshift('');
                        _0x2681b9.length < 2 && _0x2681b9.unshift('');
                        _0x2779df.pathname = _0x2681b9.join('/');
                    }
                    if (_0x2779df.search = _0x552c11.search, _0x2779df.query = _0x552c11.query, _0x2779df.host = _0x552c11.host || '', _0x2779df.auth = _0x552c11.auth, _0x2779df.hostname = _0x552c11.hostname || _0x552c11.host, _0x2779df.port = _0x552c11.port, _0x2779df.pathname || _0x2779df.search) {
                        var _0x57986a = _0x2779df.pathname || '', _0x4c722f = _0x2779df.search || '';
                        _0x2779df.path = _0x57986a + _0x4c722f;
                    }
                    return _0x2779df.slashes = _0x2779df.slashes || _0x552c11.slashes, _0x2779df.href = _0x2779df.format(), _0x2779df;
                }
                var _0xccecb8 = _0x2779df.pathname && '/' === _0x2779df.pathname.charAt(0), _0x348d89 = _0x552c11.host || _0x552c11.pathname && '/' === _0x552c11.pathname.charAt(0), _0xc7d419 = _0x348d89 || _0xccecb8 || _0x2779df.host && _0x552c11.pathname, _0x2ed334 = _0xc7d419, _0x226200 = _0x2779df.pathname && _0x2779df.pathname.split('/') || [], _0x24f511 = (_0x2681b9 = _0x552c11.pathname && _0x552c11.pathname.split('/') || [], _0x2779df.protocol && !_0x59ff68[_0x2779df.protocol]);
                if (_0x24f511 && (_0x2779df.hostname = '', _0x2779df.port = null, _0x2779df.host && ('' === _0x226200[0] ? _0x226200[0] = _0x2779df.host : _0x226200.unshift(_0x2779df.host)), _0x2779df.host = '', _0x552c11.protocol && (_0x552c11.hostname = null, _0x552c11.port = null, _0x552c11.host && ('' === _0x2681b9[0] ? _0x2681b9[0] = _0x552c11.host : _0x2681b9.unshift(_0x552c11.host)), _0x552c11.host = null), _0xc7d419 = _0xc7d419 && ('' === _0x2681b9[0] || '' === _0x226200[0])), _0x348d89) {
                    _0x2779df.host = _0x552c11.host || '' === _0x552c11.host ? _0x552c11.host : _0x2779df.host;
                    _0x2779df.hostname = _0x552c11.hostname || '' === _0x552c11.hostname ? _0x552c11.hostname : _0x2779df.hostname;
                    _0x2779df.search = _0x552c11.search;
                    _0x2779df.query = _0x552c11.query;
                    _0x226200 = _0x2681b9;
                } else {
                    if (_0x2681b9.length) {
                        _0x226200 || (_0x226200 = []);
                        _0x226200.pop();
                        _0x226200 = _0x226200.concat(_0x2681b9);
                        _0x2779df.search = _0x552c11.search;
                        _0x2779df.query = _0x552c11.query;
                    } else {
                        if (!_0x3d7eb9.isNullOrUndefined(_0x552c11.search)) {
                            return _0x24f511 && (_0x2779df.hostname = _0x2779df.host = _0x226200.shift(), (_0x21af26 = !!(_0x2779df.host && _0x2779df.host.indexOf('@') > 0) && _0x2779df.host.split('@')) && (_0x2779df.auth = _0x21af26.shift(), _0x2779df.host = _0x2779df.hostname = _0x21af26.shift())), _0x2779df.search = _0x552c11.search, _0x2779df.query = _0x552c11.query, _0x3d7eb9.isNull(_0x2779df.pathname) && _0x3d7eb9.isNull(_0x2779df.search) || (_0x2779df.path = (_0x2779df.pathname ? _0x2779df.pathname : '') + (_0x2779df.search ? _0x2779df.search : '')), _0x2779df.href = _0x2779df.format(), _0x2779df;
                        }
                    }
                }
                if (!_0x226200.length) {
                    return _0x2779df.pathname = null, _0x2779df.search ? _0x2779df.path = '/' + _0x2779df.search : _0x2779df.path = null, _0x2779df.href = _0x2779df.format(), _0x2779df;
                }
                for (var _0xd48624 = _0x226200.slice(-1)[0], _0x5a3809 = (_0x2779df.host || _0x552c11.host || _0x226200.length > 1) && ('.' === _0xd48624 || '..' === _0xd48624) || '' === _0xd48624, _0x108a35 = 0, _0x5e5a55 = _0x226200.length; _0x5e5a55 >= 0; _0x5e5a55--) {
                    '.' === (_0xd48624 = _0x226200[_0x5e5a55]) ? _0x226200.splice(_0x5e5a55, 1) : '..' === _0xd48624 ? (_0x226200.splice(_0x5e5a55, 1), _0x108a35++) : _0x108a35 && (_0x226200.splice(_0x5e5a55, 1), _0x108a35--);
                }
                if (!_0xc7d419 && !_0x2ed334) {
                    for (; _0x108a35--; _0x108a35) {
                        _0x226200.unshift('..');
                    }
                }
                !_0xc7d419 || '' === _0x226200[0] || _0x226200[0] && '/' === _0x226200[0].charAt(0) || _0x226200.unshift('');
                _0x5a3809 && '/' !== _0x226200.join('/').substr(-1) && _0x226200.push('');
                var _0x21af26, _0x1f8170 = '' === _0x226200[0] || _0x226200[0] && '/' === _0x226200[0].charAt(0);
                return _0x24f511 && (_0x2779df.hostname = _0x2779df.host = _0x1f8170 ? '' : _0x226200.length ? _0x226200.shift() : '', (_0x21af26 = !!(_0x2779df.host && _0x2779df.host.indexOf('@') > 0) && _0x2779df.host.split('@')) && (_0x2779df.auth = _0x21af26.shift(), _0x2779df.host = _0x2779df.hostname = _0x21af26.shift())), (_0xc7d419 = _0xc7d419 || _0x2779df.host && _0x226200.length) && !_0x1f8170 && _0x226200.unshift(''), _0x226200.length ? _0x2779df.pathname = _0x226200.join('/') : (_0x2779df.pathname = null, _0x2779df.path = null), _0x3d7eb9.isNull(_0x2779df.pathname) && _0x3d7eb9.isNull(_0x2779df.search) || (_0x2779df.path = (_0x2779df.pathname ? _0x2779df.pathname : '') + (_0x2779df.search ? _0x2779df.search : '')), _0x2779df.auth = _0x552c11.auth || _0x2779df.auth, _0x2779df.slashes = _0x2779df.slashes || _0x552c11.slashes, _0x2779df.href = _0x2779df.format(), _0x2779df;
            };
            _0x4a803f.prototype.parseHost = function () {
                var _0x3fe767 = this.host, _0x7d0761 = /:[0-9]*$/.exec(_0x3fe767);
                _0x7d0761 && (':' !== (_0x7d0761 = _0x7d0761[0]) && (this.port = _0x7d0761.substr(1)), _0x3fe767 = _0x3fe767.substr(0, _0x3fe767.length - _0x7d0761.length));
                _0x3fe767 && (this.hostname = _0x3fe767);
            };
        },
        502: _0x5504ab => {
            'use strict';
            ;
            _0x5504ab.exports = {
                'isString': function (_0x464e28) {
                    ;
                    return 'string' == typeof _0x464e28;
                },
                'isObject': function (_0x54156a) {
                    return 'object' == typeof _0x54156a && null !== _0x54156a;
                },
                'isNull': function (_0x125249) {
                    return null === _0x125249;
                },
                'isNullOrUndefined': function (_0x4d1ee7) {
                    return null == _0x4d1ee7;
                }
            };
        }
    }
]);
;
;
