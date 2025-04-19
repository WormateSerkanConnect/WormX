var _0x36751a = _0x5032;
(function (_0x3e9282, _0x43204f) {
    var _0x32bf30 = _0x5032,
        _0x40e2dd = _0x3e9282();
    while (!![]) {
        try {
            var _0x44d47d = parseInt(_0x32bf30(0x19f)) / 0x1 * (-parseInt(_0x32bf30(0x458)) / 0x2) + -parseInt(_0x32bf30(0x41f)) / 0x3 + parseInt(_0x32bf30(0x3da)) / 0x4 * (parseInt(_0x32bf30(0x5e5)) / 0x5) + -parseInt(_0x32bf30(0x359)) / 0x6 * (-parseInt(_0x32bf30(0x254)) / 0x7) + -parseInt(_0x32bf30(0x1ef)) / 0x8 + -parseInt(_0x32bf30(0x587)) / 0x9 * (-parseInt(_0x32bf30(0x1f4)) / 0xa) + parseInt(_0x32bf30(0x3bc)) / 0xb;
            if (_0x44d47d === _0x43204f) break;
            else _0x40e2dd['push'](_0x40e2dd['shift']());
        } catch (_0x4dba48) {
            _0x40e2dd['push'](_0x40e2dd['shift']());
        }
    }
}(_0x309b, 0x488d0));
var SITE_XTHOST = "https://wormateserkanconnect.github.io/WormX";
window['detectLog'] = null;
const _wrmxt = {
    'BETAisSkinCustom'(_0x54efb4) {
        var _0x581802 = _0x36751a,
            _0x1dccda = /[a-zA-Z]/;
        return _0x581802(0x327) === typeof _0x54efb4 && _0x1dccda[_0x581802(0x19d)](_0x54efb4);
    },
    'testSkinCustom': function (_0x2895d9) {
        var _0x43e422 = _0x36751a;
        return _wrmxt[_0x43e422(0x1d2)](_0x2895d9) ? 0x22 || 0x21 : _0x2895d9;
    },
    'testSkinMod': function (_0x3f9304) {
        return 0x18f <= _0x3f9304 && 0x3e7 > _0x3f9304;
    },
    'testWear': function (_0x119df2) {
        return 0x18f <= _0x119df2 && 0x3e7 > _0x119df2;
    },
    'isNumberValid': function (_0x14c339) {
        return '' !== _0x14c339 && null !== _0x14c339 && void 0x0 !== _0x14c339 && !isNaN(_0x14c339);
    },
    'validInput': function (_0x413381) {
        var _0x4d1c2a = _0x36751a;
        if (!_wrmxt['testSkinMod'](_0x413381) && !_wrmxt[_0x4d1c2a(0x1d2)](_0x413381)) return _0x413381;
        try {
            let _0xd934e1 = $(_0x4d1c2a(0x360))[_0x4d1c2a(0x398)]();
            return encodeURI(_wrmxt['isNumberValid'](_0xd934e1) ? _0xd934e1 : 0x23);
        } catch (_0x76f6b2) {
            return encodeURI(0x23);
        }
    },
    'aload': ![],
    'aId': 0x0
};
var inputReplaceSkin = localStorage[_0x36751a(0xff)]('inputReplaceSkin'),
    PilotoAutomatico = null,
    isPlaying = ![],
    pwrups = {};
window[_0x36751a(0x36c)] = 0x51;
var theoEvents = {
        'eventoPrincipal': null,
        'joystick': {
            'positionMode': 'L',
            'checked': !0x0,
            'size': 0x5a,
            'mode': _0x36751a(0x164),
            'position': {
                'left': _0x36751a(0x161),
                'bottom': _0x36751a(0x161)
            },
            'backgroundImage': _0x36751a(0xeb),
            'pxy': 0x6e
        }
    },
    theoKzObjects = {
        'FB_UserID': '',
        'smoothCamera': 0.5,
        'eat_animation': 0.0025,
        'flag': _0x36751a(0x1bf),
        'PortionSize': localStorage[_0x36751a(0x497)] || 0x2,
        'PortionAura': localStorage[_0x36751a(0x1d0)] || 1.2,
        'PortionTransparent': 0.8,
        'FoodTransparent': 0.3,
        'ModeStremer': ![],
        'ModeStremerbatop': ![],
        'ModeStremermuiten': ![],
        'ModeStremeremoj': ![],
        'ModeStremerheadshot': ![],
        'ModeStremersaveheadshot': ![],
        'arrow': ![],
        'KeyCodeRespawn': localStorage[_0x36751a(0x58a)] || 0x52,
        'KeyCodeAutoMov': localStorage[_0x36751a(0x61b)] || window[_0x36751a(0x36c)],
        'AbilityZ': ![],
        'FoodShadow': localStorage['ComidaShadow'] || 0x2,
        'FoodSize': localStorage['ComidaSize'] || 0x2,
        'headshot': 0x0,
        'visibleSkin': [],
        'pL': [],
        'gamePad': theoEvents['joystick'],
        'mobile': !0x1,
        'loading': ![],
        'kill': 0x0,
        'totalKills': 0x0,
        'totalHeadshots': 0x0,
        'adblock': ![],
        'CLIENTE_ADMIN': 0x1,
        'CLIENTE_ACTIVO': 0x3,
        'CLIENTE_INACTIVO': 0x4
    };
saveGameLocal = localStorage[_0x36751a(0xff)](_0x36751a(0x182));
if (saveGameLocal && _0x36751a(0x1d8) !== saveGameLocal) {
    let t = JSON[_0x36751a(0x13b)](saveGameLocal);
    for (let e in t) theoKzObjects[e] = t[e];
}
theoKzObjects['loading'] = !![];
const PhoneChecked = function () {
        var _0x3f2f2c = _0x36751a;
        let _0x5eda10 = ![];
        theoKzObjects[_0x3f2f2c(0x5fb)] = ![];
        var _0x15c67d = navigator[_0x3f2f2c(0x356)] || navigator[_0x3f2f2c(0x627)] || window['opera'];
        return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i [_0x3f2f2c(0x19d)](_0x15c67d) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i [_0x3f2f2c(0x19d)](_0x15c67d['substr'](0x0, 0x4))) && (theoKzObjects['mobile'] = !![], _0x5eda10 = !![]), _0x5eda10;
    },
    RechekingPhone = function () {
        var _0x10aff4 = _0x36751a;
        let _0x9cbb6 = ![];
        var _0x1eb01e = navigator[_0x10aff4(0x356)] || navigator[_0x10aff4(0x627)] || window[_0x10aff4(0x4eb)];
        return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i ['test'](_0x1eb01e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i [_0x10aff4(0x19d)](_0x1eb01e['substr'](0x0, 0x4))) && (_0x9cbb6 = !![]), _0x9cbb6;
    },
    loadJoy = function (_0x47f90f) {
        var _0x48ad96 = _0x36751a;
        let _0x13ccbe;
        try {
            return console[_0x48ad96(0x5a2)](_0x47f90f), (theoKzObjects[_0x48ad96(0x3f5)] || (theoKzObjects[_0x48ad96(0x3f5)] = theoEvents[_0x48ad96(0x5ad)]), RechekingPhone() && (_0x47f90f || theoKzObjects[_0x48ad96(0x3f5)][_0x48ad96(0x24d)]) && (_0x13ccbe = nipplejs[_0x48ad96(0x2c5)](theoKzObjects[_0x48ad96(0x3f5)]), _0x13ccbe['on']('move', function (_0x57a49c, _0x28de84) {
                var _0x214320 = _0x48ad96;
                theoEvents['eventoPrincipal']['sk'] = _0x28de84[_0x214320(0x494)][_0x214320(0x515)] <= Math['PI'] ? -0x1 * _0x28de84['angle']['radian'] : Math['PI'] - (_0x28de84[_0x214320(0x494)][_0x214320(0x515)] - Math['PI']), console['log'](_0x28de84);
            })), _0x13ccbe);
        } catch (_0x32052a) {
            console['log'](_0x32052a);
        }
    };
let clientes = {
        'clientesVencidos': [],
        'clientesActivos': []
    },
    servers = {
        'Api_listServer': []
    };
async function loadUsers() {
    var _0x468796 = _0x36751a;
    await fetch(_0x468796(0x223))[_0x468796(0x525)](_0x26ea52 => _0x26ea52[_0x468796(0x2a7)]())[_0x468796(0x525)](_0xd77d29 => {
        var _0x3e36eb = _0x468796;
        if (_0xd77d29['success']) {
            let _0x8ade48 = _0xd77d29[_0x3e36eb(0x48a)];
            clientes[_0x3e36eb(0x2f0)] = _0x8ade48[_0x3e36eb(0x32a)](_0x134f71 => {
                var _0x54187b = _0x3e36eb;
                return _0x134f71[_0x54187b(0x3c1)];
            });
        } else clientes = {
            'clientesVencidos': [],
            'clientesActivos': []
        }, alert(_0x3e36eb(0x1ad));
    });
}
async function loadServers() {
    var _0x4b4521 = _0x36751a,
        _0x327e32 = (function () {
            var _0x2bdecf = !![];
            return function (_0x336888, _0x17cab8) {
                var _0x54b649 = _0x2bdecf ? function () {
                    var _0x2b1819 = _0x5032;
                    if (_0x17cab8) {
                        var _0x14053a = _0x17cab8[_0x2b1819(0x340)](_0x336888, arguments);
                        return _0x17cab8 = null, _0x14053a;
                    }
                } : function () {};
                return _0x2bdecf = ![], _0x54b649;
            };
        }()),
        _0x3a3335 = _0x327e32(this, function () {
            var _0x22cdf5 = _0x5032;
            return _0x3a3335[_0x22cdf5(0x1f3)]()[_0x22cdf5(0x42f)](_0x22cdf5(0x1ce))['toString']()[_0x22cdf5(0xcc)](_0x3a3335)[_0x22cdf5(0x42f)](_0x22cdf5(0x1ce));
        });
    _0x3a3335();
    var _0x4075df = (function () {
            var _0x56aab7 = !![];
            return function (_0x1a49fb, _0x29a8f4) {
                var _0x1e42ca = _0x56aab7 ? function () {
                    if (_0x29a8f4) {
                        var _0xe01b63 = _0x29a8f4['apply'](_0x1a49fb, arguments);
                        return _0x29a8f4 = null, _0xe01b63;
                    }
                } : function () {};
                return _0x56aab7 = ![], _0x1e42ca;
            };
        }()),
        _0x5d9854 = _0x4075df(this, function () {
            var _0x599469 = _0x5032,
                _0x4284f2 = function () {
                    var _0x5c503e;
                    try {
                        _0x5c503e = Function('return (function() ' + '{}.constructor(\"return this\")( )' + ');')();
                    } catch (_0x28de0b) {
                        _0x5c503e = window;
                    }
                    return _0x5c503e;
                },
                _0x48563b = _0x4284f2(),
                _0x1e28c9 = _0x48563b[_0x599469(0x14d)] = _0x48563b[_0x599469(0x14d)] || {},
                _0x572401 = [_0x599469(0x5a2), _0x599469(0x245), _0x599469(0x5b9), _0x599469(0x15b), _0x599469(0x496), 'table', _0x599469(0x26d)];
            for (var _0x4e9ebd = 0x0; _0x4e9ebd < _0x572401[_0x599469(0x42e)]; _0x4e9ebd++) {
                var _0x5320df = _0x4075df[_0x599469(0xcc)][_0x599469(0x541)][_0x599469(0x100)](_0x4075df),
                    _0x932894 = _0x572401[_0x4e9ebd],
                    _0x3b46e8 = _0x1e28c9[_0x932894] || _0x5320df;
                _0x5320df[_0x599469(0x20a)] = _0x4075df['bind'](_0x4075df), _0x5320df[_0x599469(0x1f3)] = _0x3b46e8['toString'][_0x599469(0x100)](_0x3b46e8), _0x1e28c9[_0x932894] = _0x5320df;
            }
        });
    _0x5d9854(), await fetch(_0x4b4521(0x554))[_0x4b4521(0x525)](_0x3af377 => _0x3af377[_0x4b4521(0x2a7)]())[_0x4b4521(0x525)](_0x5c00fa => {
        var _0x58f481 = _0x4b4521;
        if (_0x5c00fa[_0x58f481(0x444)]) {
            let _0x48d134 = _0x5c00fa['servers'];
            servers['Api_listServer'] = _0x48d134[_0x58f481(0x32a)](_0x4fa382 => {
                var _0x11ff7d = _0x58f481;
                return _0x4fa382[_0x11ff7d(0x1b0)];
            });
        } else servers = {
            'Api_listServer': []
        }, alert('An error occurred while loading the serv' + _0x58f481(0x236));
    });
}
loadUsers(), loadServers(), $(_0x36751a(0x3c0))[_0x36751a(0x235)](_0x36751a(0x38d));

function _0x5032(_0x2bd0d0, _0x5c57a5) {
    var _0x47d393 = _0x309b();
    return _0x5032 = function (_0xc40916, _0x100e3f) {
        _0xc40916 = _0xc40916 - 0xb9;
        var _0x552a19 = _0x47d393[_0xc40916];
        return _0x552a19;
    }, _0x5032(_0x2bd0d0, _0x5c57a5);
}
var StoreSkinID = $(_0x36751a(0x69e));
const ctx = {
    'fontStyle': {
        'name': new PIXI[(_0x36751a(0xf4))]({
            'fill': '#FFFF00',
            'fontSize': 0xb,
            'lineJoin': _0x36751a(0x6ad),
            'stroke': _0x36751a(0x294),
            'fontFamily': 'vuonghiep',
            'fontWeight': _0x36751a(0x1ea)
        }),
        'blanco': new PIXI[(_0x36751a(0xf4))]({
            'align': _0x36751a(0x37b),
            'fill': _0x36751a(0x623),
            'fontSize': 0xc,
            'lineJoin': _0x36751a(0x6ad),
            'stroke': _0x36751a(0x623),
            'strokeThickness': 0x1,
            'whiteSpace': _0x36751a(0x583),
            'fontFamily': _0x36751a(0x421),
            'fontWeight': _0x36751a(0x1ea),
            'wordWrap': !![]
        }),
        'morado': new PIXI[(_0x36751a(0xf4))]({
            'align': _0x36751a(0x37b),
            'fill': '#FFFF00',
            'fontSize': 0xa,
            'lineJoin': _0x36751a(0x6ad),
            'stroke': '#FAA845',
            'strokeThickness': 0x1,
            'whiteSpace': _0x36751a(0x583),
            'fontFamily': _0x36751a(0x421),
            'fontWeight': 'bold',
            'wordWrap': !![]
        }),
        'morado1': new PIXI[(_0x36751a(0xf4))]({
            'align': _0x36751a(0x37b),
            'fill': '#FFF',
            'fontSize': 0xa,
            'lineJoin': 'round',
            'stroke': _0x36751a(0x1c0),
            'strokeThickness': 0x1,
            'whiteSpace': _0x36751a(0x583),
            'fontFamily': _0x36751a(0x421),
            'fontWeight': 'bold',
            'wordWrap': !![]
        }),
        'amarillo': new PIXI['TextStyle']({
            'align': 'center',
            'fill': _0x36751a(0x6bb),
            'fontSize': 0xa,
            'lineJoin': _0x36751a(0x6ad),
            'stroke': _0x36751a(0x1c0),
            'strokeThickness': 0x1,
            'whiteSpace': _0x36751a(0x583),
            'fontFamily': _0x36751a(0x421),
            'fontWeight': _0x36751a(0x1ea),
            'wordWrap': !![]
        }),
        'amarillo1': new PIXI[(_0x36751a(0xf4))]({
            'align': _0x36751a(0x37b),
            'fill': _0x36751a(0x623),
            'fontSize': 0xa,
            'lineJoin': _0x36751a(0x6ad),
            'stroke': _0x36751a(0x1c0),
            'strokeThickness': 0x1,
            'whiteSpace': _0x36751a(0x583),
            'fontFamily': _0x36751a(0x421),
            'fontWeight': _0x36751a(0x1ea),
            'wordWrap': !![]
        }),
        'anheadshot': new PIXI[(_0x36751a(0xf4))]({
            'align': _0x36751a(0x37b),
            'fill': _0x36751a(0x623),
            'fontSize': 0x0,
            'lineJoin': _0x36751a(0x6ad),
            'stroke': _0x36751a(0x1c0),
            'strokeThickness': 0x1,
            'whiteSpace': _0x36751a(0x583),
            'fontFamily': _0x36751a(0x421),
            'fontWeight': _0x36751a(0x1ea),
            'wordWrap': !![]
        }),
        'keysColor': new PIXI[(_0x36751a(0xf4))]({
            'align': _0x36751a(0x37b),
            'fill': _0x36751a(0xe4),
            'fontSize': 0xa,
            'lineJoin': 'round',
            'stroke': _0x36751a(0xe4),
            'strokeThickness': 0x1,
            'whiteSpace': _0x36751a(0x583),
            'fontWeight': 'bold',
            'fontFamily': _0x36751a(0x421),
            'wordWrap': !![]
        })
    }
};
ctx[_0x36751a(0x422)] = PIXI[_0x36751a(0x1ae)][_0x36751a(0x617)]('https://i.imgur.com/v6szE9c.png'), ctx['clock'][_0x36751a(0x2e1)] = 0x64, ctx[_0x36751a(0x422)]['height'] = 0x64, ctx['clock']['x'] = -0x32, ctx[_0x36751a(0x422)]['y'] = -0x32, ctx['clockan'] = PIXI[_0x36751a(0x1ae)][_0x36751a(0x617)]('https://i.imgur.com/jkOvq9J.png');

function _0x309b() {
    var _0x1ece87 = ['mobileconfig', 'toLowerCase', 'MSStream', '>\x0a                 Vui lÃ²ng khÃ´ng táº£i lÃª', '#mm-skin-over-button-list', 'ui-tab-active ui-tab-inactive5', 'beginFill', '      \x0a                 <div class=\"bao-', '#wear-view', 'ng\">', 'https://wormateserkanconnect.github.io/WormX/api/server_wmxt.php', 'kills', 'movimiento', 'fill', 'portionDict', '.com/iekrYYm.png\"><span class=\"Worm_cerc', 'index.game.antiadblocker.continue', 'oodSize + \'\" step=\"0.5\" onmousemove=\"ran', 'xzs', '-accepted-link\" href=\"/privacy-policy\">', '#mm-coins-box', 'wrapMode', 'ntainer cho 2 pháº§n tá»­ (hÃ ng 2) -->\x0a<div ', '#mm-player-level', 'flag ca', ' </li>\x0a    <li class=\"ui-tabs-tab ui-tab', 'signIn', 'lo:fb', '#settings-show-names-switch', 'padStart', 'input', 'Client_VisibleSkin11', 'glow', '.background-container', 'ype: none;\x0a          padding: 0;\x0a       ', '#background-canvas', '32/Tom_and_JerryCursor.png', '<img src=\"', 'k=\"window.location.href=\'https://skinlab', 'splice', ' cursor: pointer;\x0a          border-botto', '.ui-tab-inactive3', ' function() {\x0a            // Táº¡i Ä‘Ã¢y báº¡n', 'linear-gradient(45deg, #FF6347 20%, #FFA', 'emplate-columns: 1fr 1fr;gap: 10px;margi', 'ted-logo\" src=\"', 'getContext', 'price', 'glassesId', 'id_token', ', .2) 11%, rgba(255, 255, 255, .4) 13%, ', 'AwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT', 'clear', '{0}', 's\" />\x0a  \x0a    <div class=\"label\" id=\"titl', 'includes', 'https://i.imgur.com/P2rYk1k.png\"></span>', 'normal', 'ck vÃ o div, vÃ­ dá»¥:\x0a            console.l', 'a\"></span>', '.column-left', '277551xkMqHi', 'fo-circle\"></i> Giá»›i Thiá»‡u\x0a        </li>', 'class=\"servers-peru\"></div>\x0a      <div c', 'KeyRespawn', 'dotFormatSelect2', 'ew.jpg', 'FB_UserID', 'createElement', 'dShadow\" class=\"range\" type=\"range\" min=', 'er-box;-webkit-appearance: none;outline:', '#loading-worm-b', '#withdraw-consent-yes', 'uk_UA', 'done', 'ModeStremerbatop', 'R2VvbWV0cnk=', 'https://i.imgur.com/vD4zoMk.png', 'touchend', 'Core 2022 THEO Update 2023', 'oodShadowvalue.value=value\" />\x0a         ', 'portion', 'Client_KeyAccecs', 'img', 'drawCircle', 'ider\" type=\"range\" min=\"0\" max=\"100\" val', 'ComidaSize', 'aHR0cHM6Ly9yZXNvdXJjZXMud29ybWF0ZS5pbw==', 'log', 'singapur', 'gg_', 'https://i.imgur.com/8ubx4RA.png', 'TEAM2', 'hasOwnProperty', 'iterator', '// Láº¥y pháº§n tá»­ nÃºt vÃ  div\x0a        const ', '//connect.facebook.net/', 'eSetings\">Notification</div>\x0a    <div cl', '></div>\x0a        <link rel=\"stylesheet\" h', 'joystick', 'regionDict', '         \x0a         \x0a          <div id=\"c', 'eyesId', 'substr', 'createElementNS', 'options', '#FFFFFF', '/images/paths/', 'getPropertyValue', 'setInt16', 'm/QuEjBr0.png\"></span> </a>\x0a    </li>\x0a  ', 'info', 'ettings-stremingmodeheadshot-switch\" typ', '/images/lens.png', '\x0a    \x0a          </div>\x0a          \x0a      ', 'antiadblocker', '.fr', '#skin-description-text', ')\"><i aria-hidden=\"true\" class=\"fa fa-co', '  <a> <span class=\"flag us\" value=\"https', 'url', ';\x0a          box-shadow: 0px 0px 10px #25', 'visible', '2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso', '#store-locked-bar', '#smoothCamera', ' copiado! copied!\'));\">Copy</button></di', '.toaster-consent-close', 'status', 'selectSala', 'lang=\"uk\" href=\"/uk/\">Ğ£ĞºÑ€Ğ°Ñ—Ğ½ÑÑŒĞºĞ°</a>\x0a<a ', ' class=\"title-wormate-friends-connect\" s', '#store-view-next', '#popup-menu-label', 'login', '#loa831pibur0w4gv', 'html', 'yle=\"margin: 0;\" id=\"loa831pibur0w4gv\">\x0a', 'DataReader error: ', '<div class=\"worm_2\">\x0a        <button id=', 'px;background-color: #fff;color: #806102', 'Client_VisibleSkin3', 'month', 'nonbuyable', ' vÃ o div khi nháº¥n nÃºt\x0a            player', '\x0a      }\x0a\x0a      .sidebar {\x0a          wid', 'Cherries_Pointer', 'glassesDict', '            \x0a           <div style=\"marg', 'Socket send error: ', 'reload', '         <div class=\"lang-menu\"><button ', 'skinArrayDict', 'comidax5', 'gdprConsent', '10GGrmIL', 'count', '#leaders-button-kills', 'switch\"></label>\x0a    </div>\x0a</div>\x0a\x0a<!--', 'eyesDict', 'I\'m not checked', 'AbilitySkinData', 'getTime', 'index.game.antiadblocker.msg1', 'cerrar', 'rs:fb', 'save sPN: ', '\" class=\"toaster toaster-consent-accepte', 'clientX', 'prop', '  <li class=\"ui-tabs-tab ui-tab ui-tab-i', '#settings-stremingmodeanclock-switch', 'binaryType', ' class=\"toaster-coins-img\" alt=\"Wormate ', 'min', 'showPlayerNames', 'flag fr', 'mobile', 'app', '#leaders-view', 'level', 'YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNz', '.v4', '2NA==', '\'.sidebar ul li\');\x0a          menuItems.f', 'https://i.imgur.com/SjFtyqp.png', '<img class=\"pwrups v4\" style=\"display: n', '#popup-withdraw-consent', '/start?gameMode=', 'anchor', ' / ', 'ction) {\x0a              activeSection.sty', '<div id=\"key-container\"><div class=\"key\"', '     <div class=\"spancursor\"> Select Cur', 'right;position: relative;min-width: 95px', 'Client_VisibleSkin9', '0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbD', 'k=\"navigator.clipboard.writeText(\'', 'SW50', 'lineTo', 'call', 'index.game.popup.menu.store.locked', 'peru', 'atan2', 'mousemove', 'fromImage', '     // Äá»•i mÃ u má»¥c Ä‘Ã£ chá»n\x0a          le', 'gsi:c', 'split', 'KeyAutoMov', 'UkVQRUFU', '   </div>\x0a  </div>\x0a\x0a  <script>\x0a      fun', 'O3VuaWZvcm0gdmVjNCA=', '.cursor-container', 'Client_VisibleSkin14', '#store-buy-coins_125000', 'X2_TYPE', '#FFF', 'name', 'attr', ': gold;  \x0a}\x0a        ', 'vendor', 'cancelFullScreen', 'cursorSeleccionado', 'cÃ¡i lá»“n', '#unl6wj4czdl84o9b', '.mm-merchant', 'Text', 'ttps://thanhtoan.vuonghiep.com\" target=\"', ' <li id=\"toolgame-btn\" class=\"selected\" ', '#markup-footer', 'href=\"https://maxcdn.bootstrapcdn.com/fo', 'I18N_LANG', 'endFill', '</h2>', '#profile-stat-totalTimeSpent', '#markup-wrap', 'QxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS', '/i> Off Sounds:\x0a        </span>\x0a        ', 'morado', '&gh=', 'aliases', 'index.game.antiadblocker.msg2', 'floor', '#settings-stremingmodeemoj-switch', 'nodeName', 've1\" style=\"margin: -5px\">\x0a      <a> <sp', 'guest', 'sidebar ul li:hover {\x0a          backgrou', 'act\">\x0a    \x0a    <input type=\"button\" valu', '\"range\" min=\"10\" max=\"100\" value=\"70\" st', '\x0a    </li>\x0a    <li class=\"ui-tabs-tab ui', '      </span>\x0a        <input class=\"sett', 'U3ByaXRl', 'nction() {\x0a            // MÃ´ phá»ng click', 'description', '), default', 'open', 'dA: FAIL', '.style.display = \'none\');\x0a\x0a          // ', 'enableClasses', '&type=', 'tn\" onclick=\"displayContent(\'gioithieu\',', 'https://cdn.custom-cursor.com/db/pointer', '#wear-item-price', 'value_server', 's fa-video yellow-icon\"></i> Center Stre', 'cmd', ' style=\"width: 100%; height: 40px;\" src=', '<img class=\"worm_1\" src=\"https://i.imgur', '#store-view-canv', 'touches', 'none', 'cursor', ' hreflang=\"fr\" href=\"/fr/\">FranÃ§ais</a>\x0a', 'revision', 'KHZfY29sb3JfbWl4LnJnYiwwLjApO30=', 'tton\" value=\"ACTIVATE ALL\" target=\"_blan', 'at: right;border-radius: 10px;border: so', '.au', '/div>', ' .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`', 'util.time.min', '     <span class=\"toaster-consent-accept', 'ui-tab-active ui-tab-inactive8', 'nmousemove=\"rangevalue1.value=value\" />\x0a', '#settings-stremingmodesaveheadshot-switc', 'eyesVariantArray', 'label_hs', 'cos', 'mouthId_A: ', '.png\"></span> </a>\x0a    </li>\x0a    <li cla', 'zoomLevel', 'lineStyle', 'Ä‘á»‹t', '\"/></span><span>', 'g.o', '/dynamic/assets/revision.json', 'fillText', 'base', '#wear-description-text', '/dynamic/assets/registry.json', ': -10px;\" class=\"spancursor\"> Upload Ski', 'sqrt', 'sortableChildren', 'Fetching a new token...', '#mm-coins-val', '. Thank you !</li>\x0a                </div', 'onreadystatechange', ' <span class=\"settings_span\">Food-Size: ', '_config', 'index.game.popup.menu.skins.tab', 'loading', 'join', 'random', '#settings-sfx-enabled-switch', 'u3_', '=\"checkbox\"/>\x0a        <label for=\"settin', 'consent_state_2', 'iSI: ', 'nombre: ', 'replaceWith', 'button = document.getElementById(\"click-', 'v>\x0a\x0a    <div class=\"settings-lineZoom\">\x0a', 'mm-params-nickname', 'Client_VisibleSkin6', '                  ', 'closed', '&glassesId=', 'alue\" />\x0a      </div>\x0a       \x0a      <div', 'distance', 'ssss', 'backgroundColor', 'gameMode', 'class', 'Q1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icH', 'ltmolilci1iurq1i', 'segundos digitos: ', 'tById(sectionId);\x0a          if (activeSe', 'undefined', '#idReplaceSkin', 'https://i.imgur.com/PfdBkc2.png', 'hreflang=\"de\" href=\"/de/\">Deutsch</a>\x0a<a', 'one;\" src=\"https://i.imgur.com/mSCZeEp.p', 'ESC', 'geolocation', '#store-go-wear-button', '#skins-view', ' ui-tab-inactive7\" style=\"margin: -5px\">', 'index.game.result.tryHit', 'ng\x0a          let sections = document.que', 'rsor-btn\">\x0a                <img src=\"htt', 'X5_TYPE', '#popup-menu-coins-val', 'visibleSkin', 'round', 'chuot 4', 'fondoSeleccionado', '#highscore-table', 'fontStyle', '>\x0a                \x0a                   <d', 'Current track \'', 'r-width: 0;\"/>\x0a      <button style=\"heig', 'totalPlayTimeSec', 'baseVal', '<div id=\"wormcerca\">', '#settings-arrowmobile-switch', 'mozFullScreen', 'Play', '#FFFF00', 'isFinite', 'e\">', 'resolution', 'ENV', '#wear-buy-button', '\x0a  <div class=\"description-text\">\x0a  <div', '         element.classList.add(\'selected', 'nombre', 'AwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMC', '1\"><li>\x0a                 21/02/2025: Upd', '.v0', 'https://cdn.custom-cursor.com/db/cursor/', 'ck=\"navigator.clipboard.writeText(\'', 'index.game.result.continue', ' https://wormate.io/ #wormate #wormateio', 'in-over-tw\" target=\"_blank\" href=\"http:/', 's=\"settings-labelZoom\">\x0a             <i ', 'body', 'TeamSkinData', 'Unlock Skins</button>\x0a                </', 'replace', 'n-top: 8px;\">\x0a    <a href=\"https://www.y', 'constructor', 'true', 'onwheel', 'm: 1px solid #ddd;\x0a          width: 140p', 'src', 'regDate', '#profile-view', '2535;\x0a          color: #fff;\x0a      }\x0a\x0a  ', 'woman', ' right;position: relative;min-width: 95p', 'WearSkinData', 'file', 'https://asserts.wormworld.io/sounds/head', 'pzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yND', 'guia_mobile', 'abilityDict', 'amarillo', '#PortionSize', 'coins', 'this is null or not defined', 'game-wrap', '>\x0a    <li class=\"ui-tabs-tab ui-tab ui-t', '>\x0a            <i class=\"fas fa-toggle-of', '    .sidebar ul {\x0a          list-style-t', '#fff009', 'coords', '</div></div>', '#addflag', '\" width=\"20\" align=\"center\" alt=\"\">Worma', '\'img-teamsv\'>Streamer</div></div>\x0a    \x0a ', 'margin-right: -6px;line-height: 1.2;font', 'url(\'path_to_image.png\')', '></label>\x0a    </div>\x0a</div>\x0a\x0a\x0a\x0a<div clas', '#social-buttons', '{1}', 'Client_VisibleSkin17', 'ng\" alt=\"nona\"/>\x0a    </a>\x0a    <a href=\"h', '            <div class=\"vietnam\" style=\"', 'one;\" src=\"https://i.imgur.com/M1LFPpp.p', ':nth-child(', 'TextStyle', ' copiado! copied!\'));\">COPY</button>\x0a   ', 'g fa-spin\" style=\"color:yellow;font-size', 'oodShadow + \'\" step=\"0.5\" onmousemove=\"F', 'rgba(255, 255, 255, 0) 14%) 130px 370px,', ';font-size: 23px;\"></i></button>\x0a       ', 'off', 'skin', 'getCurrentPosition', 'Client_VisibleSkin19', '   </div>\x0a        </div>\x0a          </div', 'getItem', 'bind', '#popup-view', 'className', 'one;\" src=\"https://i.imgur.com/l3ds43O.p', '.description-text', '#wear-locked-bar', 'gs-stremingmodesaveheadshot-switch\" type', '#settings-stremingmodemuiten-switch', 'Kratos', 'ps://i.imgur.com/rI522o3.png\">\x0a         ', 'reen_button\">\x0a    \x0a    \x0a    <input type=', '#mm-action-guest', 'banner', 'fb_', '\"0.6\" value=\"\' + theoKzObjects.smoothCam', 'BE2 100%)', '://www.youtube.com/watch?v=uyHHXWKHgRw</', '.servers-eeuu', 'skinId', 'Id_mobileguia', '/consent/change?value=', 'ad = function() {\x0a          displayConte', 'Wormy Error: ', 'hypot', '20px;\x0a          background: #393e43;\x0a   ', '     </div>\x0a                    <div cla', 'one;\" src=\"https://i.imgur.com/kXlF32q.p', '#store-go-skins-button', 'sgp1', '#leaders-button-level', 'outerHeight', 'borderurl', 'alpha', 'FoodShadow', '.servers-australia', 'head', 'Using the stored token:', 'd\">    <img class=\"toaster-consent-accep', '.servers-mexico', 'and iPad New 2024: <a style=\"color: #2ae', 'emoji_kill', '.mm-merchant-cont', 'HAT', 'preload', 'data', 'document', 'tuNewScore', 'tal Kill :\x0a        </span>\x0a        <inpu', 'Config', 'index.game.result.title', 'bs-tab ui-tab ui-tab-inactive4\" style=\"m', '.servers-peru', '\" class=\"toaster toaster-coins\">    <img', 'container1\">\x0a        <span class=\"settin', '<div id=\"', 'v class=\"servers-container\">\x0a      <div ', '     \x0a      \x0a      \x0a  </script>\x0a        ', 'appendChild', '#wear-view-next', 'parse', 'main', 'value', 'fadeOut', 'value2_kill', 'audio', 'moveTo', ' 0;border-width: 0;\">\x0a        <button on', '#mm-skin-next', 'XTPRIVATESKIN', '#final-continue', '\" style=\"width: 230px;text-align: center', 'value1_kill', '/login', 'index.game.popup.menu.consent.tab', '\" style=\"width: 88%; height: 35px; borde', 'WebSocket', '.. 4 ..', 'console', 'tings-switchZoom\" id=\"settings-stremingm', 'flag jp', '#main-menu-view', ' style=\"display: grid !important; grid-t', 'kill', '.ui-tab-inactive5', 'setItem', 'ui-tab-active ui-tab-inactive6', 'MAGNETIC_TYPE', 'r.com/JMAvuFN.png\"></span> </a>\x0a    </li', 'stopPropagation', 'ru_RU', 'ne;\"></div>\x0a      <div class=\"servers-ee', 'error', '200% 100%', '\').then(()=> alert(\'You ID ', 'gradient', '</div>    <div class=\"toaster-levelup-cl', 'addClass', '110px', 'nt.getElementById(\"mm-player-info\");\x0a\x0a  ', 'chuot 5', 'dynamic', 'AKM', 'Tom_and_JerryCurso', 'no-', ', .2) 17%, rgba(255, 255, 255, .43) 19%,', 'ui-tab-active ui-tab-inactive7', 'ModeStremeranclock', 'O3ZlYzQgdl9jb2xvcl9taXg9', 'Client_VisibleSkin15', 'symbol', 'W/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso', 'hide', '#wear-glasses-button', 'util.time.hours', 'addChild', '.servers-japon', 'ote=', 'gsi:sil', 'offsetWidth', '#final-score', 'index.game.antiadblocker.msg4', '31pibur0w4gv\">\x0a  <link rel=\"stylesheet\" ', ' none;\"></div>\x0a      <div class=\"servers', 'index.game.social.shareResult.messGood', 'setTime', 'iv class=\"settings-row\">\x0a    <div class=', 'odeemoj-switch\" type=\"checkbox\"/>\x0a      ', 'auth2', 'Client_VisibleSkin8', 'gs_span\">Power-ups-Size: </span>\x0a       ', 'SaveGameXT', 'token__gg', 'hite;\x0a      }\x0a\x0a      .main-content {\x0a   ', 'custom', 'er cho 2 pháº§n tá»­ (hÃ ng 1) -->\x0a<div class', 'onclose', 'isplayContent(\'chuot\', this)\">\x0a         ', '<p id=\'title\'>Wormate Friends</p>', ' at ', 'atan', '#profile-stat-headshots', 'dA: NO', 'pow', 'anApp', ' center\"><div class=\'logo\'><img src=\'htt', '</span>        <a class=\"toaster-consent', 'chuot 1', 'Texture', '.ui-tab-inactive6', '/32/Cherries_Pointer.png', 'abel>\x0a    </div>\x0a\x0a    <div class=\"settin', 'display', 'text', 'lá»“n', 'ria-hidden=\"true\" style=\"color:48ff00;\">', 'rs:lo', 'Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /', 'test', 'O3VuaWZvcm0gdmVjMiA=', '24524wrAPyK', '#mm-menu-cont', 'clientY', 'W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss/', 'Mal3ab', 'r-radius: 4px; font-size: 18px; \x0a          color: w', 'auto', '                                    \x0a   ', '0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LT', 'https://wormateserkanconnect.github.io/WormX/api/skins.php', 'Client_VisibleSkin1', 'O3ZhcnlpbmcgdmVjMiA=', 'chuot 2', '        <span class=\"settings-labelZoom\"', 'start pSC: ', '#game-cont, #game-canvas, body', '     <ul>\x0a              <li><div class=\"', '>\x0a          <div id=\"gioithieu\" class=\"c', 'byLevel', 'propertyList', 'black', 'Njk', 'nt-awesome/4.7.0/css/font-awesome.min.cs', '#adbl-3', '<a hreflang=\"es\" href=\"/es/\">EspaÃ±ol</a>', 'keypress', '3.3.1', 'charAt', 'totalKills', 'TEAM_DEFAULT', 'skinUnknown', '#EFFA45', 'now', '#CCCF81', '.jp', 'WormSkinData', '/Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y', '#mm-leaders', 'pressed', 'ModeStremeremoj', 'index.game.popup.menu.leaders.tab', 'PortionSkinData', 'e=\"margin: -5px\">\x0a      <a> <span class=', '_display', 'settingContent', 'ue=\"https://i.imgur.com/m1skEsB.png\"></s', 'pwr_clock', 'uonghiep.com/\">Activated</a> </div>\x0a    ', '.layout {\x0a          display: flex;\x0a     ', 'get', 'json', '           <input id=\"zoom-slider\" type=', '#profile-experience-val', 'QkxFTkRfTU9ERVM=', 'ZOOM_TYPE', ' copied!\'));\">Copy ID</button>\x0a        \x0a', 'false', 'Client_VisibleSkin13', 'TAB', '</span><span><img src=\"', '#final-message', 'dotFormat', '=\"spancursor\"> Upload Hat</div>\x0a <iframe', 'mg class=\"toaster-levelup-img\" alt=\"Worm', '+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oH', 'FoodTransparent', 'contextmenu', '=\"container1\">\x0a      <span class=\"settin', '100% 200%', ' online)', '#settings-Abilityzoom-switch', 'class=\"settings-row\">\x0a    <div class=\"se', 'me>\x0a \x0a  <div class=\"spancursor\">NOTE : <', 'gsi:l', '#popup-login-gg', 'https://asserts.wormworld.io/backgrounds', '#mm-advice-cont', '/div>\x0a                <ul><li>\x0a         ', 'target', '#stretch-box', 'create', '                                  \x0a     ', 'index.game.social.shareResult.caption', '#delete-account-timer', '32/PUBG_AKM_Cursor.png', '2\" onmousemove=\"PortionAuravalue.value=v', 'ui-tab-active ui-tab-inactive1', 'https://i.imgur.com/MlCgOma.png', 'a class=\"link\" hreflang=\"en\" href=\"https', 'textDict', '.2 - 2025-03-26 23:02:50</div>', '<input class=\"settings-switchZoom\" id=\"s', 'FoodSize', 'X10_TYPE', 'region', 'white', '#delete-account-no', 'iv class=\"settings-row\">\x0a     <div class', '>Q</div></div>\x0a        <div id=\'zoom-con', 'dHJhbnNsYXRpb25NYXRyaXg=', 'substring', '.ui-tab-inactive2', '\" alt=\"Wormate.io logo\"/>    <div class=', 'witchZoom\" id=\"settings-stremingmodemuit', 'el for=\"settings-Abilityzoom-switch\"></l', 'MOUTH', 'in-gg1\">Login via Google</div>', 'ontent-section\">\x0a              <h2>Giá»›i ', 'width', 'preroll', '\"flag br\" value=\"https://i.imgur.com/dix', '\x0a    \x0a \x0a\x0a<footer id=\"markup-footer\">\x0a   ', 'year', 'zMg==', 'background-position', 'stop', 'coins_3250', 'aipAABS', 'Client_VisibleSkin4', '_start', ' </footer>\x0a\x0a        ', 'px\">\x0a      <a> <span class=\"flag ca\" val', 'bited. ID will be locked if violated.</l', 'clientesActivos', '#login-view', 'toUTCString', '#mm-player-exp-bar', 'Ä‘Ã©o', 'onOpen', '\'></div>', 'n skin sex 18+. Bá»‹ phÃ¡t hiá»‡n sáº½ bá»‹ khÃ³a.', 'util.time.days', 'index.game.main.menu.unlockSkins.share', '\" class=\"toaster toaster-levelup\">    <i', 'click', '.v1', '.us', '#congrats', ';display: block;box-sizing: border-box;-', 'morado1', 's fa-paint-brush\"></i> Skins\x0a        </l', 'Q29udGFpbmVy', 'div class=\"toaster-coins-val\">+', 'visited', 'cliente_NOMBRE', 'or=\"settings-stremingmodeanclock-switch\"', '10px 310px, 230px 230px, 530px 530px, 10', '.. 8 ..', '</span></div>', 'background', '></ul>\x0a            \x0a \x0a          </div>\x0a ', 'https://i.imgur.com/n4N79UI.png', 'le=\"margin: -5px\">\x0a      <a> <span class', 'ready', 'Client_VisibleSkin18', '#adbl-2', '#adbl-continue', 'hatVariantArray', 'O3ZvaWQgbWFpbigpe3ZlYzIgY29vcmQ9', 'rgba(255, 255, 255, 0) 14%) 0 0,', 's://haylamday.com/images/hiep_img/nona.p', '>         \x0a        \x0a        <div class=\"', 'PQ==', 'xEmojiType_kill', 'www.facebook.com/WormateFriendsConnect\">', 'gs-labelZoom\">\x0a             <i class=\"fa', 'map', 'PortionSize', ' style=\"margin: -5px\">\x0a      <a> <span c', 'og(\"Div Ä‘Ã£ Ä‘Æ°á»£c click!\");\x0a        });\x0a\x0a ', 'hatDict', 'uu\" style=\"display: none;\"></div>\x0a      ', 'ComidaShadow', 'getElementById', ' </a>\x0a    </li>\x0a    <li class=\"ui-tabs-t', '#mm-params-game-mode', 'mousedown', 'arrow', 'string', '\');\x0a      }\x0a\x0a      // Hiá»ƒn thá»‹ ná»™i dung ', 'gs-stremingmodesaveheadshot-switch\"></la', 'filter', 'd29ybWF0ZS1pb185NzB4MjUw', 'ep=\"1\">\x0a  <div id=\"zoom-percentage\">50%<', '/cOrk9pM.png\" alt=\"Turn on\"/> :\x0a        ', 'glassesVariantArray', '                                      \x0a ', 'script', '2/sailor-moon-fish-eye-and-lipstick-curs', 'V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==', 'texture', 'gevalue2.value=value\" />\x0a               ', 'flag', '<h2>Auto Login Google Wormate Friends Co', '<style>\x0a        .yellow-icon {\x0a    color', 's=\"fas fa-chart-bar yellow-icon\"></i> To', '#title', 'resize', '#getskin', '=\"fa fa-cog fa-spin\" style=\"color:yellow', 'some', 'chÃ³', 'expToNext', 'apply', 'show', '/bkgnd7.png', 'touchstart', 'yout\">\x0a      <div class=\"sidebar\">\x0a     ', 'play', '#game-canvas', '.key', 'onmessage', '    </div>\x0a    \x0a    <div class=\"vietnam\"', 'ar.svg\" />    <div class=\"toaster-levelu', 'radial-gradient(circle at 50% 50%, rgba(', 'p\" scrolling=\"no\" frameborder=\"0\"></ifra', 'validInput', 'index.game.main.menu.unlockSkins.comeAnd', 'headShots', 'OPEN', 'dispatchEvent', '0000', 'velocidad', 'server_url', '.v2', 'userAgent', 'sin', 'background-color', '6oWPobR', 'ps://haylamday.com/images/hiep_img/logo.', '           \x0a            \x0a    <input type', 'index.game.popup.menu.store.tab', 'borderImg', '#popup-delete-account', 'Z2V0', '#inputReplaceSkin', 'mouthDict', 'util.time.sec', 'cloneNode', 'CLOSING', 'fade IN ', '#adbl-1', '.ui-tab-inactive8', '#adbl-4', ' li {\x0a          padding: 12px;\x0a         ', 'elimina spacios: ', 'touchmove', 'keyMove', 'list', 'click=\"navigator.clipboard.writeText(\'', 'Thiá»‡u</h2>\x0a              <p>ÄÃ¢y lÃ  ná»™i d', '>\x0a    </div>\x0a\x0a    <div class=\"settings-l', '#settings-music-enabled-switch', ':o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 ', 'devicePixelRatio', 'I am checked', 'mozCancelFullScreen', 'U2hhZGVy', 'x;background:#ff0000;height: 50px;\" oncl', 'coins_125000', 'containerCountInfo', 'f yellow-icon\"></i> Turn Off <img style=', 'center', 'oodSize\" class=\"range\" type=\"range\" min=', '://VuongHiep.Com\">Â© 2025 Wormate Friends', 'shared', 'webkit-appearance: none;outline: 0;borde', 'nncet : ', 'index.game.floating.wellDone', 'e=\"checkbox\"/>\x0a        <label for=\"setti', 'highScore', '.. 10 ..', '100% 100%', 'leSetings\">Notification</div>\x0a          ', 'O2F0dHJpYnV0ZSB2ZWMyIA==', '#final-place', 'find', '=\"popup\" class=\"popup\">\x0a        \x0a       ', '<div class=\'contact\'><i class=\'fa fa-pho', 'v8.0', '<div id=\"idReplaceSkin\"></div>', 'PortionAura', '#settings-stremingmodeheadshot-switch', 'ue=\"50\" step=\"1\">\x0a        <div style=\"di', 'mouthVariantArray', 'user_data', '\x0a            \x0a            <link href=\'ht', 'e=\"range\" min=\"1.2\" max=\"3.2\" value=\"\' +', 'fullScreenElement', 'error-view', '.fullscreen_button', 'val', 'one;\" src=\"https://i.imgur.com/z162iYa.p', 'https://haylamday.com', '/i> Tool Game\x0a        </li>\x0a        <li ', '.ui-tab-inactive9', ' line-height: 0; font-size: 18px;\" oncli', '_refresh', 'ARENA', '<div class=\"description-text\">', '.servers-germania', 'Pusheen_Ca', 'top', '#wear-locked-bar-text', '#mm-bottom-buttons', 'https://i.imgur.com/19YALRi.png', '<img class=\"pwrups v5\" style=\"display: n', '\"></span> </a>\x0a    </li>\x0a    <li class=\"', 'SPACE', '\"https://haylamday.com/api/hat_upload.ph', 'yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:', 'event', 'coins_1250', 'shift', ', .1) 11%, rgba(255, 255, 255, .2) 13%, ', '   <center>\x0a        <div class=\"hg\"><a t', 'username', 'classPrefix', 'sessionsPlayed', '#mm-line-top', 'svg', 'canvas', 'ui-tab-active', '/twitter.com/intent/tweet?status=', 'tercer digitos: ', 'left', 'Client_VisibleSkin20', '958859GMOpAT', 'arraybuffer', 'ineZoom\">\x0a        <span class=\"settings-', 'destroy', '.store-view-cont', 'cliente_ID', 'concat', 'latitude', 'amarillo1', '           <div class=\"list1\"><li>\x0a     ', 'Load sPN: ', '=\"display: none;\"></div>\x0a      <div clas', 'cHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3Zhcnlpbmcg', 'labelZoom\">\x0a             <i class=\"fa fa', 'ng: 0 6px; */ text-align: center; backgr', '_blank\">\x0a      <img style=\"width:100%\" s', 'onclick=\"displayContent(\'toolgame\', this', 'PortionTransparent', 'Load GM: ', 'canvastext', 'ated !</li>\x0a                </div>\x0a     ', 'https://i.imgur.com/U5sTlhC.png', 'ound-color: #fff; color: #0a6928; font-w', 'websockets', 'ner1\">\x0a                    <span class=\"', 'orEach(item => item.classList.remove(\'se', '&nickname=', 'signOut', 'O3ZvaWQgbWFpbigpew==', '=\"settings-labelZoom\">\x0a             <i c', '154524GCwCnI', 'value1_hs', 'div>\x0a                </div>', 'UElYSQ==', 'ref=\"https://www.youtube.com/watch?v=uyH', '<div class=\"text-vnxx\"><a href=\"https://', 'tainer\'>\x0a        \x0a                      ', '</div>    <div class=\"toaster-coins-clos', 'zas', '/buyProperty?id=', 'gs-lineZoom\">\x0a        <span class=\"setti', '<div id=\"idwormworld\" style=\"text-align:', '<div class=\"idwormate\"><input type=\"text', 'ss=\"fullscreen_contact\">\x0a    \x0a    \x0a    \x0a', 'loading advertisement', 'target=\"_black\" href', '   \x0a      .', '\', change in (ms) ', '0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPj', 'mySwitch', 'urlRequest: ', '.v6', ' theoKzObjects.PortionAura + \'\" step=\"0.', 'documentElement', 'height', 'u5_', 'onload', 'gamePad', 'prepend', 'ass=\"settings-switchZoom\" id=\"settings-s', 'toggle', ' }\x0a\x0a      .sidebar ul li.selected {\x0a    ', 'authResponse', 'prime', 'abilityUnknown', 'JDHnkHtYwyXyVgG9', 'facebook', 'index.game.toaster.continue', '#profile-username', 'a> </div>\x0a      \x0a    \x0a</div>', 'VGV4dA==', 'aload', '<img class=\"pwrups v3\" style=\"display: n', '   <i class=\"fas fa-mouse\"></i> Cursor\x0a ', 'SHIFT', 'an class=\"settings_span\">Food-Shadow: </', 'https://i.imgur.com/ub4ed3R.png', '#adbl-continue span', 'mexico', 'relativePath', 'i>\x0a        <li id=\"chuot-btn\" onclick=\"d', 'YtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC', '</span></a>', '\"stylesheet\" href=\"https://maxcdn.bootst', 'tyle=\"position: absolute; top: 0; z-inde', 'settings_span\">Spin-Fast: </span>\x0a      ', 'function', 'sSE=', 'byKillsAndHeadShots', 'fadeIn', ', .15) 30%, rgba(255, 255, 255, .3) 32%,', 'aipS', 'position', 'accessToken', 'eventoPrincipal', '   <div class=\"gachngang\"></div>\x0a    <di', '<div class=\"background-container\"></div>', '              <div class=\"label\" id=\"tit', 'removeClass', '291489lwjzNZ', 'cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7YXR0cmli', 'vuonghiep', 'clock', '<div id=\'final-replay\'>Replay</div>', '#FFC75A', 'index.game.result.placeInBoard', '#profile-stat-kills', '3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//', 'iv class=\"list1\"><li> Instructions for i', '000', '#0094D7', 'ung Giá»›i Thiá»‡u.</p>\x0a          </div>\x0a   ', '/pointers/32/GOW_Kratos_Pointer.png', '#markup-header', 'length', 'search', 'Njh', '     width: 100%;\x0a          height: 90%;', 'duration', ' margin-top: -40px; margin-right: -40px;', 'disposing prev texture: ', '-tab ui-tab-inactive3\" style=\"margin: -5', 'https://wormate.io/images/og-share-img-n', '255, 255, 255, 0) 0%, rgba(255, 255, 255', '#settings-stremingmodebatop-switch', '  <label for=\"settings-stremingmodeemoj-', 'Galaxy_Star', 'N2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMj', 'testSkinCustom', 'hhhh', 'linear-gradient(45deg, #32CD32 20%, #FFD', 'ht: 25px;float: right;margin-top: -24px;', '.br', '#toaster-stack', '#wear-view-prev', 'ings-switchZoom\" id=\"settings-Abilityzoo', 'success', '100px 100px, 470px 470px, 210px 210px, 3', ': 23px;\"></i> Tool</div>\x0a        <div id', 'getImageData', 'ngs-stremingmodebatop-switch\" type=\"chec', 'input id=\"PortionAura\" class=\"range\" typ', 'format', '\"0.5\" max=\"3\" value=\"\' + theoKzObjects.F', 'replaceAll', 'I Love Viá»‡t Nam', 'PropertyManager', '.ui-tab-inactive0', 'label_kill', '_complete', '-japon\" style=\"display: none;\"></div>\x0a  ', 'offsetHeight', 'async', 'SKIN', 'o3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +', '#store-buy-coins_50000', '10dEERbg', 'pause', 'mouseup', 'dmVjMiA=', 'init2 pSC: ', 'rgba(255, 255, 255, 0) 14%) -130px -170p', 'iv><div class=\'valusv\'>Region</div><div ', 'textContent', '</span><span>', 'Socket closed', 'addAsyncTest', 'fi_bg', '/32/Tom_and_JerryPointer.png', '#store-buy-coins_3250', ' Container cho 2 pháº§n tá»­ (hÃ ng 2) -->\x0a<d', 'expires=', 'v=uyHHXWKHgRw</a></li></div></div>\x0a     ', 'adblock', 'AudioState', 'preventDefault', 'ate Level Up Star\" src=\"/images/level-st', '&skinId=', 'containerImgS', 'tainer\">\x0a            <div id=\"default-cu', 'ODYxOTI2ODUwNjE5MDUx', '\x0a            \x0a            \x0a            \x0a', 'userId', 'ModeStremerheadshot', '#delete-account-yes', 'prerollCount', 'itch\" type=\"checkbox\"/>\x0a        <label f', 'â¤ï¸ Wormate Friends Connect 2025 â¤ï¸</a></di', '      <label for=\"settings-stremingmode-', 'zIndex', '#store-locked-bar-text', 'wormate.io', '#PortionAura', ' \x0a        <div id=\"settingContent\">\x0a    ', '#00B2ED', 'translate(-50%, -50%) scale(', '#mm-params-nickname', 'unshift', 'index.game.floating.headshot', '.servers-francia', 'index.game.popup.menu.login.tab', '#withdraw-consent-view', 'Client_VisibleSkin7', '#FFD500', 'totalHeadshots', 'addAttribute', 'Users', 'Client_VisibleSkin16', '</div>', '       color: #fff;\x0a      }\x0a\x0a      .cont', 'tton style=\"padding: 19px; float: right;', 'runtimeHash', '.. 2 ..', 'abs', 'mouthId', 'ModeStremersaveheadshot', 'angle', '&mouthId=', 'exception', 'PotenciadorSize', 'ont-size: 16px;font-weight: 600;\" onclic', '#store-buy-button', 'scale', '#popup-login-fb', '    <div class=\"servers-australia\" style', '#svhiep .valu', 'AwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9Ij', '.ui-tab-inactive4', 'ass=\"bao-list1\">\x0a      \x0a      <input typ', '\" value=\"https://i.imgur.com/X0co8Ao.png', '     sections.forEach(section => section', '0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMC', 'display: grid !important; grid-template-', 'primeros digitos: ', 'ent-section {\x0a          display: none;\x0a ', 'lass=\"range\" type=\"range\" min=\"0.3\" max=', '>\x0a        <input class=\"settings-switchZ', '#profile-stat-gamesPlayed', 'e=\"CONTACT\" onclick=\"window.location.hre', '            Uploading 18+ sex skins is p', 'enableJSClass', 'webkitCancelFullScreen', 'Api_listServer', 'nonbuyableCause', 'index.game.toaster.consent.text', '#mm-player-info', 'adplayer', '200% 200%', 'flag br', '</span>\x0a                    <input id=\"F', '#1eaom01c3pxu9wd3', ';background:#ff0000\" onclick=\"openPopup(', 'stringify', 'cookie', 'nickname', '     button.addEventListener(\"click\", fu', ' <input style=\"display:none\" id=\"zoom-sl', 'value=\"', 'lass=\"flag fr\" value=\"https://i.imgur.co', 'absolute', 'https://cdn.custom-cursor.com/128/assets', '<img class=\"pwrups v6\" style=\"display: n', ')\">\x0a            <i class=\"fas fa-cogs\"><', '#mm-player-avatar', 'css', 'GET', 'save gm: ', '#mm-event-text', '           </div>\x0a    </div>\x0a    </div>', '       <div id=\"mm-store\" style=\"float: ', 'none;\"></div>\x0a    </div>\x0a  </div>\x0a      ', 'webkitRequestFullScreen', '/div>\x0a  \x0a                               ', 'vÃ£i lá»“n', ' rgba(255, 255, 255, 0) 33%) 0 0,', 'Kg==', 'onclickServer', 'fontFamily', 'KeyQ', 'eat_animation', '_end', 'granbretana', ' lÃ½ sá»± kiá»‡n click trá»±c tiáº¿p vÃ o div\x0a    ', 'le.display = \'block\';\x0a          }\x0a\x0a     ', 'skinGroupArrayDict', '#final-board', 'TWVzaA==', '/pub/leaders', '/images/bg-obstacle.png', '      // Xá»­ lÃ½ sá»± kiá»‡n click vÃ o nÃºt\x0a   ', '<div class=\'phienban\'>Version: vth2025.0', 'lass=\"fas fa-trophy yellow-icon\"></i> 3 ', 'Modernizr', '.css\">\x0a                   <div class=\"la', ' <input id=\"PortionSize\" class=\"range\" t', 'push', '#mm-skin-canv', '\x0a                         <div id=\"final', '#coins-view', 'popup', 'flag mx', 'sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M`', 'https://i.imgur.com/wYJAfmO0.png', 'opera', '\x0a      \x0a      \x0a        \x0a        \x0a       ', '0% 100%', 'x: 1; width: 95.5%;margin-top: 10px;\">\x0a<', '      background-color: #000; \x0a      }\x0a\x0a      h2' + _0x14a254(0x1e8) + _0x14a254(0x3ea) + _0x14a254(0x642) + 'nd-color: #666;\x0a      }</style>\x0a        ' + _0x14a254(0x48c)))), $(_0x14a254(0x5d1))[_0x14a254(0x68b)]('\x0a              \x0a              <link rel=' + _0x14a254(0x40f) + _0x14a254(0x1d9) + _0x14a254(0x1b5) + _0x14a254(0x5d3) + _0x14a254(0x41d) + _0x14a254(0x386) + _0x14a254(0x551) + 'list1\">\x0a                <div class=\"list' + _0x14a254(0xbf) + _0x14a254(0x3d0) + _0x14a254(0x3c5) + _0x14a254(0x4ab) + 'rohibited. ID will be locked if violated' + _0x14a254(0x67d) + '>\x0a                <div class=\"list1\"><li' + _0x14a254(0x54d) + _0x14a254(0x2f7) + ' Xin cáº£m Æ¡n !</li>\x0a                </div' + _0x14a254(0x6b2) + _0x14a254(0x428) + 'nstalling on IOS and iPad New 2024: <a h' + _0x14a254(0x3de) + _0x14a254(0x1be) + _0x14a254(0x468) + '         \x0a                   '), $(_0x14a254(0x55e))[_0x14a254(0x68b)]('<div style=\"margin: 0;\" id=\"mm-coins-box' + '\">\x0a                \x0a                <but' + _0x14a254(0x535) + _0x14a254(0x660) + 'lid #fac 2px;display:none\' id=\'getskin\'>' + _0x14a254(0xc9) + _0x14a254(0x3dc)), window['multiplier'] = 0.625, window[_0x14a254(0x66e)] = 0x5;

function _0x459e2f() {
    var _0xb013cc = _0x14a254;
    window['zoomLevel']++, window[_0xb013cc(0x25d)] *= 0.8, changedNf(), _0x3f4c3f();
}

function _0x4c1b1a() {
    var _0x3b395c = _0x14a254;
    window[_0x3b395c(0x66e)] > 0x0 && (window[_0x3b395c(0x66e)]--, window[_0x3b395c(0x25d)] /= 0.8, changedNf(), _0x3f4c3f());
}

function _0x3f4c3f() {
    var _0x53a3e0 = _0x14a254,
        _0x5305fe = Math['round'](window[_0x53a3e0(0x25d)] / 0.625 * 0x64);
    _0x5305fe = Math['min'](0x64, _0x5305fe);
    var _0x44d052 = document['getElementById']('zoom-percentage');
    _0x44d052[_0x53a3e0(0x45f)] = _0x5305fe + '%';
}
document[_0x14a254(0x322)]('zoom-slider')[_0x14a254(0x219)](_0x14a254(0x568), function (_0x567dfe) {
    var _0x22e3a5 = _0x14a254;
    const _0x5011b6 = _0x567dfe[_0x22e3a5(0x2c3)]['value'],
        _0x5a1e6d = _0x5011b6;
    window[_0x22e3a5(0x66e)] = Math['round'](_0x5011b6 / 0xa), window[_0x22e3a5(0x25d)] = 0.625 * (_0x5a1e6d / 0x32), changedNf(), _0x3f4c3f();
}), window[_0x14a254(0xce)] = _0x4bc70f => {
    var _0x5b5de1 = _0x14a254;
    _0x4bc70f[_0x5b5de1(0x46b)](), _0x4bc70f['deltaY'] < 0x0 ? _0x459e2f() : _0x4c1b1a();
}, $('#settings-Abilityzoom-switch')['on']('click', function () {
    var _0x2d24af = _0x14a254;
    this[_0x2d24af(0x24d)] ? (console[_0x2d24af(0x5a2)](_0x2d24af(0x374)), theoKzObjects[_0x2d24af(0x4d3)] = 0x1, localStorage[_0x2d24af(0x154)](_0x2d24af(0x3ed), 'on')) : (console['log'](_0x2d24af(0x5ea)), theoKzObjects[_0x2d24af(0x4d3)] = 0.0025, localStorage[_0x2d24af(0x154)](_0x2d24af(0x3ed), _0x2d24af(0xfa)));
}), $(document)[_0x14a254(0x30e)](function () {
    var _0x992aa3 = _0x14a254,
        _0x400139 = localStorage[_0x992aa3(0xff)](_0x992aa3(0x3ed));
    _0x400139 === 'on' ? ($(_0x992aa3(0x2bb))[_0x992aa3(0x5f3)](_0x992aa3(0x24d), !![]), theoKzObjects[_0x992aa3(0x4d3)] = 0x1) : ($('#settings-Abilityzoom-switch')[_0x992aa3(0x5f3)](_0x992aa3(0x24d), ![]), theoKzObjects[_0x992aa3(0x4d3)] = 0.0025);
}), $(_0x14a254(0x242))['on'](_0x14a254(0x2fb), function () {
    var _0x5c9a6c = _0x14a254;
    this['checked'] ? (console[_0x5c9a6c(0x5a2)](_0x5c9a6c(0x374)), theoKzObjects[_0x5c9a6c(0x1e5)] = !![], localStorage['setItem'](_0x5c9a6c(0x1e5), 'true')) : (console['log'](_0x5c9a6c(0x5ea)), theoKzObjects[_0x5c9a6c(0x1e5)] = ![], localStorage[_0x5c9a6c(0x154)](_0x5c9a6c(0x1e5), _0x5c9a6c(0x2ad)));
}), $(document)[_0x14a254(0x30e)](function () {
    var _0x164d3 = _0x14a254,
        _0x1ae03f = localStorage[_0x164d3(0xff)](_0x164d3(0x1e5));
    _0x1ae03f === _0x164d3(0xcd) ? (theoKzObjects[_0x164d3(0x1e5)] = !![], $(_0x164d3(0x242))[_0x164d3(0x5f3)](_0x164d3(0x24d), !![])) : (theoKzObjects[_0x164d3(0x1e5)] = ![], $(_0x164d3(0x242))['prop']('checked', ![]));
}), $(_0x14a254(0x438))['on']('click', function () {
    var _0x539f4b = _0x14a254;
    this[_0x539f4b(0x24d)] ? (console['log']('I am checked'), theoKzObjects[_0x539f4b(0x595)] = !![], localStorage[_0x539f4b(0x154)](_0x539f4b(0x595), 'true')) : (console[_0x539f4b(0x5a2)](_0x539f4b(0x5ea)), theoKzObjects[_0x539f4b(0x595)] = ![], localStorage[_0x539f4b(0x154)](_0x539f4b(0x595), _0x539f4b(0x2ad)));
}), $(document)[_0x14a254(0x30e)](function () {
    var _0x1009f8 = _0x14a254,
        _0x2c17bd = localStorage[_0x1009f8(0xff)](_0x1009f8(0x595));
    _0x2c17bd === _0x1009f8(0xcd) ? (theoKzObjects[_0x1009f8(0x595)] = !![], $(_0x1009f8(0x438))[_0x1009f8(0x5f3)](_0x1009f8(0x24d), !![])) : (theoKzObjects['ModeStremerbatop'] = ![], $(_0x1009f8(0x438))[_0x1009f8(0x5f3)](_0x1009f8(0x24d), ![]));
}), $(document)[_0x14a254(0x30e)](function () {
    var _0x46b7ff = _0x14a254,
        _0x176b75 = localStorage['getItem'](_0x46b7ff(0x16a));
    _0x176b75 === _0x46b7ff(0xcd) ? (theoKzObjects[_0x46b7ff(0x16a)] = !![], $(_0x46b7ff(0x5f5))[_0x46b7ff(0x5f3)](_0x46b7ff(0x24d), !![])) : (theoKzObjects[_0x46b7ff(0x16a)] = ![], $(_0x46b7ff(0x5f5))[_0x46b7ff(0x5f3)](_0x46b7ff(0x24d), ![])), theoKzObjects[_0x46b7ff(0x16a)] ? (ctx['clockan'][_0x46b7ff(0x2e1)] = 0x64, ctx[_0x46b7ff(0x206)][_0x46b7ff(0x3f2)] = 0x64, ctx[_0x46b7ff(0x206)]['x'] = -0x32, ctx[_0x46b7ff(0x206)]['y'] = -0x32) : (ctx['clockan']['width'] = 0x0, ctx['clockan'][_0x46b7ff(0x3f2)] = 0x0, ctx[_0x46b7ff(0x206)]['x'] = -0x32, ctx[_0x46b7ff(0x206)]['y'] = -0x32);
}), $(_0x14a254(0x5f5))['on'](_0x14a254(0x2fb), function () {
    var _0x4ce06e = _0x14a254;
    this[_0x4ce06e(0x24d)] ? (console[_0x4ce06e(0x5a2)](_0x4ce06e(0x374)), theoKzObjects['ModeStremeranclock'] = !![], localStorage[_0x4ce06e(0x154)](_0x4ce06e(0x16a), 'true')) : (console[_0x4ce06e(0x5a2)](_0x4ce06e(0x5ea)), theoKzObjects[_0x4ce06e(0x16a)] = ![], localStorage[_0x4ce06e(0x154)](_0x4ce06e(0x16a), _0x4ce06e(0x2ad))), theoKzObjects[_0x4ce06e(0x16a)] ? (ctx[_0x4ce06e(0x206)][_0x4ce06e(0x2e1)] = 0x64, ctx[_0x4ce06e(0x206)][_0x4ce06e(0x3f2)] = 0x64, ctx[_0x4ce06e(0x206)]['x'] = -0x32, ctx[_0x4ce06e(0x206)]['y'] = -0x32) : (ctx[_0x4ce06e(0x206)][_0x4ce06e(0x2e1)] = 0x0, ctx['clockan'][_0x4ce06e(0x3f2)] = 0x0, ctx[_0x4ce06e(0x206)]['x'] = -0x32, ctx[_0x4ce06e(0x206)]['y'] = -0x32);
}), $(_0x14a254(0x107))['on'](_0x14a254(0x2fb), function () {
    var _0x404bb0 = _0x14a254;
    this['checked'] ? (console[_0x404bb0(0x5a2)](_0x404bb0(0x374)), theoKzObjects[_0x404bb0(0x1ba)] = !![], localStorage[_0x404bb0(0x154)](_0x404bb0(0x1ba), _0x404bb0(0xcd))) : (console['log'](_0x404bb0(0x5ea)), theoKzObjects[_0x404bb0(0x1ba)] = ![], localStorage[_0x404bb0(0x154)](_0x404bb0(0x1ba), 'false')), $(_0x404bb0(0x1c8))['click'](), setTimeout(function () {
        var _0x515e55 = _0x404bb0;
        location[_0x515e55(0x5e0)]();
    }, 0x3e8);
}), $(document)[_0x14a254(0x30e)](function () {
    var _0x50175f = _0x14a254,
        _0x1659b5 = localStorage[_0x50175f(0xff)](_0x50175f(0x1ba));
    _0x1659b5 === _0x50175f(0xcd) ? (theoKzObjects[_0x50175f(0x1ba)] = !![], $(_0x50175f(0x107))['prop']('checked', !![])) : (theoKzObjects[_0x50175f(0x1ba)] = ![], $(_0x50175f(0x107))[_0x50175f(0x5f3)](_0x50175f(0x24d), ![]));
}), $('#settings-stremingmodeemoj-switch')['on'](_0x14a254(0x2fb), function () {
    var _0x3dddec = _0x14a254;
    this[_0x3dddec(0x24d)] ? (console[_0x3dddec(0x5a2)](_0x3dddec(0x374)), theoKzObjects[_0x3dddec(0x29c)] = !![], localStorage[_0x3dddec(0x154)]('ModeStremeremoj', _0x3dddec(0xcd))) : (console[_0x3dddec(0x5a2)]('I\'m not checked'), theoKzObjects['ModeStremeremoj'] = ![], localStorage['setItem']('ModeStremeremoj', _0x3dddec(0x2ad)));
}), $(document)[_0x14a254(0x30e)](function () {
    var _0x42258a = _0x14a254,
        _0x4aecd7 = localStorage[_0x42258a(0xff)](_0x42258a(0x29c));
    _0x4aecd7 === _0x42258a(0xcd) ? (theoKzObjects[_0x42258a(0x29c)] = !![], $('#settings-stremingmodeemoj-switch')['prop'](_0x42258a(0x24d), !![])) : (theoKzObjects['ModeStremeremoj'] = ![], $(_0x42258a(0x63e))[_0x42258a(0x5f3)]('checked', ![]));
}), $('#settings-stremingmodeheadshot-switch')['on']('click', function () {
    var _0x11c64d = _0x14a254;
    this[_0x11c64d(0x24d)] ? (console[_0x11c64d(0x5a2)]('I am checked'), theoKzObjects[_0x11c64d(0x473)] = !![], localStorage[_0x11c64d(0x154)]('ModeStremerheadshot', _0x11c64d(0xcd))) : (console[_0x11c64d(0x5a2)](_0x11c64d(0x5ea)), theoKzObjects[_0x11c64d(0x473)] = ![], localStorage[_0x11c64d(0x154)](_0x11c64d(0x473), _0x11c64d(0x2ad)));
}), $(document)[_0x14a254(0x30e)](function () {
    var _0x1e6476 = _0x14a254,
        _0x516073 = localStorage[_0x1e6476(0xff)]('ModeStremerheadshot');
    _0x516073 === _0x1e6476(0xcd) ? (theoKzObjects[_0x1e6476(0x473)] = !![], $(_0x1e6476(0x38f))[_0x1e6476(0x5f3)]('checked', !![])) : (theoKzObjects[_0x1e6476(0x473)] = ![], $(_0x1e6476(0x38f))[_0x1e6476(0x5f3)]('checked', ![]));
}), $(_0x14a254(0x38f))['on'](_0x14a254(0x2fb), function () {
    var _0xe48a9e = _0x14a254;
    this[_0xe48a9e(0x24d)] ? (console[_0xe48a9e(0x5a2)](_0xe48a9e(0x374)), theoKzObjects[_0xe48a9e(0x473)] = !![], localStorage[_0xe48a9e(0x154)](_0xe48a9e(0x473), _0xe48a9e(0xcd))) : (console[_0xe48a9e(0x5a2)](_0xe48a9e(0x5ea)), theoKzObjects['ModeStremerheadshot'] = ![], localStorage[_0xe48a9e(0x154)](_0xe48a9e(0x473), _0xe48a9e(0x2ad)));
}), $(document)[_0x14a254(0x30e)](function () {
    var _0x57cffe = _0x14a254,
        _0x2ebccd = localStorage[_0x57cffe(0xff)]('ModeStremerheadshot');
    _0x2ebccd === _0x57cffe(0xcd) ? (theoKzObjects[_0x57cffe(0x473)] = !![], $(_0x57cffe(0x38f))[_0x57cffe(0x5f3)](_0x57cffe(0x24d), !![])) : (theoKzObjects[_0x57cffe(0x473)] = ![], $(_0x57cffe(0x38f))[_0x57cffe(0x5f3)](_0x57cffe(0x24d), ![]));
}), $(_0x14a254(0x668) + 'h')['on'](_0x14a254(0x2fb), function () {
    var _0x124796 = _0x14a254;
    this[_0x124796(0x24d)] ? (console[_0x124796(0x5a2)](_0x124796(0x374)), theoKzObjects[_0x124796(0x493)] = !![], localStorage[_0x124796(0x154)](_0x124796(0x493), _0x124796(0xcd))) : (console['log'](_0x124796(0x5ea)), theoKzObjects['ModeStremersaveheadshot'] = ![], localStorage[_0x124796(0x154)](_0x124796(0x493), _0x124796(0x2ad))), location[_0x124796(0x5e0)]();
}), $(document)['ready'](function () {
    var _0x34e1a7 = _0x14a254,
        _0x5873f4 = localStorage[_0x34e1a7(0xff)]('ModeStremersaveheadshot');
    _0x5873f4 === _0x34e1a7(0xcd) ? (theoKzObjects[_0x34e1a7(0x493)] = !![], $('#settings-stremingmodesaveheadshot-switc' + 'h')[_0x34e1a7(0x5f3)](_0x34e1a7(0x24d), !![])) : (theoKzObjects['ModeStremersaveheadshot'] = ![], $(_0x34e1a7(0x668) + 'h')[_0x34e1a7(0x5f3)]('checked', ![]));
}), $(_0x14a254(0x6b8))['on']('click', function () {
    var _0x51985d = _0x14a254;
    this['checked'] ? (console[_0x51985d(0x5a2)](_0x51985d(0x374)), theoKzObjects[_0x51985d(0x326)] = ![]) : (console[_0x51985d(0x5a2)](_0x51985d(0x5ea)), theoKzObjects[_0x51985d(0x326)] = !![]);
}), $(_0x14a254(0xdd))['on'](_0x14a254(0x568), function () {
    var _0x409bda = _0x14a254;
    theoKzObjects[_0x409bda(0x31c)] = $(this)[_0x409bda(0x398)](), localStorage[_0x409bda(0x497)] = theoKzObjects[_0x409bda(0x31c)];
}), $(_0x14a254(0x47c))['on'](_0x14a254(0x568), function () {
    var _0x25a478 = _0x14a254;
    theoKzObjects['PortionAura'] = $(this)[_0x25a478(0x398)](), localStorage[_0x25a478(0x1d0)] = theoKzObjects[_0x25a478(0x38e)];
}), $(_0x14a254(0x5c7))['on'](_0x14a254(0x568), function () {
    var _0x1ae066 = _0x14a254;
    theoKzObjects['smoothCamera'] = $(this)[_0x1ae066(0x398)](), localStorage[_0x1ae066(0x53e)] = theoKzObjects[_0x1ae066(0x53e)];
}), $('#FoodSize')['on'](_0x14a254(0x568), function () {
    var _0x2dc1c2 = _0x14a254;
    theoKzObjects[_0x2dc1c2(0x2d1)] = $(this)[_0x2dc1c2(0x398)](), localStorage[_0x2dc1c2(0x5a0)] = theoKzObjects[_0x2dc1c2(0x2d1)];
}), $('#FoodShadow')['on'](_0x14a254(0x568), function () {
    var _0x211da5 = _0x14a254;
    theoKzObjects[_0x211da5(0x121)] = $(this)['val'](), localStorage['ComidaShadow'] = theoKzObjects[_0x211da5(0x121)];
});
for (a = 0x0; a < _0x1d2d36[_0x14a254(0x42e)]; a++) {
    var _0x3bd9fa = _0x1d2d36[a][_0x14a254(0x5c2)],
        _0x4c13ba = _0x1d2d36[a][_0x14a254(0xbd)];
    let _0x2f9110 = document[_0x14a254(0x58e)](_0x14a254(0x59d));
    _0x2f9110[_0x14a254(0xd0)] = _0x3bd9fa, $(_0x14a254(0x61f))['prepend'](_0x2f9110), $(_0x2f9110)['attr']('class', _0x14a254(0x65b)), $(_0x2f9110)[_0x14a254(0x2fb)](function () {
        var _0xfb310 = _0x14a254;
        let _0x22a2d6 = $(this)[_0xfb310(0x625)]('src');
        localStorage[_0xfb310(0x629)] = _0x22a2d6, $(_0xfb310(0x24a))[_0xfb310(0x4c4)]({
            'cursor': _0xfb310(0x503) + _0x22a2d6 + _0xfb310(0x64a)
        }), $(_0xfb310(0x346))[_0xfb310(0x4c4)]({
            'cursor': 'url(' + _0x22a2d6 + _0xfb310(0x64a)
        }), $(_0xfb310(0xc7))['css']({
            'cursor': _0xfb310(0x503) + _0x22a2d6 + _0xfb310(0x64a)
        });
    }), $('#default-cursor-btn')[_0x14a254(0x2fb)](function () {
        var _0x27fca7 = _0x14a254;
        delete localStorage[_0x27fca7(0x629)], $(_0x27fca7(0x284))[_0x27fca7(0x4c4)]('cursor', 'default');
    });
}
$('#game-cont')['css']({
    'cursor': _0x14a254(0x503) + localStorage[_0x14a254(0x629)] + _0x14a254(0x64a)
}), $(_0x14a254(0x346))[_0x14a254(0x4c4)]({
    'cursor': _0x14a254(0x503) + localStorage[_0x14a254(0x629)] + _0x14a254(0x64a)
}), $('body')[_0x14a254(0x4c4)]({
    'cursor': _0x14a254(0x503) + localStorage['cursorSeleccionado'] + _0x14a254(0x64a)
});
for (a = 0x0; a < _0xd82be1[_0x14a254(0x42e)]; a++) {
    var _0x448d8f = _0xd82be1[a][_0x14a254(0x5c2)],
        _0x58830d = _0xd82be1[a][_0x14a254(0xbd)];
    let _0x31d1e8 = document[_0x14a254(0x58e)](_0x14a254(0x59d));
    _0x31d1e8[_0x14a254(0xd0)] = _0x448d8f, $('.background-container')[_0x14a254(0x3f6)](_0x31d1e8), $(_0x31d1e8)[_0x14a254(0x625)](_0x14a254(0x698), _0x14a254(0x30a)), $(_0x31d1e8)['attr']('value', _0x58830d), $(_0x31d1e8)['click'](function () {
        var _0x1b4694 = _0x14a254;
        let _0x20d7c2 = $(this)[_0x1b4694(0x625)](_0x1b4694(0xd0)),
            _0x3490a7 = $(this)['attr'](_0x1b4694(0x13d));
        backgroundIMG = _0x20d7c2, localStorage[_0x1b4694(0x6af)] = backgroundIMG, alert('You selected the background: ' + _0x3490a7), _0x4458be['q']['Cf'] = new _0x53baca['_b'](_0x4458be['q'][_0x1b4694(0x269)](_0x20d7c2));
    });
}
$(_0x14a254(0x56b))[_0x14a254(0x3f6)](''), _0x4458be['q']['Cf'] = new _0x53baca['_b'](_0x4458be['q'][_0x14a254(0x269)](localStorage['fondoSeleccionado']));
}, _0x2e4422 = function () {
    var _0x34d252 = _0x294f3d;
    $('.description-text')[_0x34d252(0x68b)](_0x34d252(0x3a0)), $('.description-text')[_0x34d252(0x3f6)](_0x34d252(0x189)), $(_0x34d252(0x339))[_0x34d252(0x23b)](_0x34d252(0x3e5) + _0x34d252(0x190) + _0x34d252(0x35a) + _0x34d252(0x4f7) + _0x34d252(0x4bd) + theoKzObjects['FB_UserID'] + (_0x34d252(0x146) + ';border-radius: 4px;font-size: 20px;padd' + 'ing: 0 6px;background-color: #fff;color:' + ' #806102;display: block;box-sizing: bord' + _0x34d252(0x590) + _0x34d252(0x142) + _0x34d252(0x36e)) + theoKzObjects[_0x34d252(0x58d)] + _0x34d252(0x15d) + theoKzObjects['FB_UserID'] + (_0x34d252(0xf5) + ' </div>\x0a<div></div>\x0a<div><input type=\"bu' + _0x34d252(0x65f) + 'k\" onclick=\"window.location.href=\'') + MYPAGE + (_0x34d252(0x207) + _0x34d252(0x48c)));
};

function _0x3cec9c() {
    var _0x1b2dfb = _0x294f3d;
    localStorage['setItem']('totalKills', theoKzObjects[_0x1b2dfb(0x291)]), localStorage[_0x1b2dfb(0x154)](_0x1b2dfb(0x488), theoKzObjects['totalHeadshots']);
}

function _0x83ea23() {
    var _0x1efb0d = _0x294f3d;
    theoKzObjects[_0x1efb0d(0x291)] = parseInt(localStorage[_0x1efb0d(0xff)](_0x1efb0d(0x291))) || 0x0, theoKzObjects[_0x1efb0d(0x488)] = parseInt(localStorage['getItem'](_0x1efb0d(0x488))) || 0x0;
}
var _0x4954ce = function (_0x57ee8c, _0x74ef38) {
    var _0x3387cf = _0x294f3d;
    let _0x215eb9 = function (_0x2f6b19, _0x343fa4, _0x2e1ae0, _0x2a1963) {
        var _0xaa21e8 = _0x5032;
        ctx[_0xaa21e8(0x1ec)](_0x2f6b19, _0x343fa4, _0x2e1ae0, _0x2a1963);
    };
    _0x83ea23(), _0x57ee8c === 'count' && (theoKzObjects['kill'] = (theoKzObjects['kill'] || 0x0) + (_0x74ef38 ? 0x0 : 0x1), theoKzObjects['headshot'] = (theoKzObjects[_0x3387cf(0x52e)] || 0x0) + (_0x74ef38 ? 0x1 : 0x0), theoKzObjects['totalKills'] = theoKzObjects[_0x3387cf(0x291)] + (_0x74ef38 ? 0x0 : 0x1), theoKzObjects[_0x3387cf(0x488)] = theoKzObjects[_0x3387cf(0x488)] + (_0x74ef38 ? 0x1 : 0x0), _0x3cec9c(), _0x215eb9(theoKzObjects[_0x3387cf(0x152)], theoKzObjects[_0x3387cf(0x52e)], theoKzObjects[_0x3387cf(0x291)], theoKzObjects[_0x3387cf(0x488)])), _0x57ee8c === _0x3387cf(0x64b) && (theoKzObjects[_0x3387cf(0x152)] = 0x0, theoKzObjects[_0x3387cf(0x52e)] = 0x0, $(_0x3387cf(0x1b7))[_0x3387cf(0x341)](), _0x215eb9(theoKzObjects[_0x3387cf(0x152)], theoKzObjects[_0x3387cf(0x52e)], theoKzObjects[_0x3387cf(0x291)], theoKzObjects[_0x3387cf(0x488)])), _0x57ee8c === _0x3387cf(0x691) && (pwrups = {}), _0x57ee8c === _0x3387cf(0x5ee) && (theoKzObjects['kill'] = 0x0, theoKzObjects['headshot'] = 0x0, theoKzObjects[_0x3387cf(0x291)] = 0x0, theoKzObjects['totalHeadshots'] = 0x0, _0x3cec9c());
};
!Number['prototype']['dotFormat'] && (Number[_0x294f3d(0x541)]['dotFormat'] = function () {
    var _0x47ac44 = _0x294f3d;
    return this['toString']()[_0x47ac44(0xca)](/\B(?=(\d{3})+(?!\d))/g, '.');
});
!Number[_0x294f3d(0x541)]['dotFormatSelect2'] && (Number[_0x294f3d(0x541)][_0x294f3d(0x58b)] = function () {
    var _0x6542a4 = _0x294f3d;
    return this[_0x6542a4(0x1f3)]()[_0x6542a4(0x5b1)](0x3, 0x2);
});
setTimeout(function () {
    var _0x2c7cb0 = _0x294f3d,
        _0x276a2c = ['fuck you', _0x2c7cb0(0x670), _0x2c7cb0(0x62a), _0x2c7cb0(0x33e), _0x2c7cb0(0x2f4), _0x2c7cb0(0x199), _0x2c7cb0(0x2f4), _0x2c7cb0(0x670), _0x2c7cb0(0x4cd), 'cáº·c'];
    const _0x5e2788 = document[_0x2c7cb0(0x322)](_0x2c7cb0(0x68e)),
        _0x313db4 = _0x5e2788[_0x2c7cb0(0x13d)],
        _0x254bca = _0x313db4[_0x2c7cb0(0x248)]('x');
    if (_0x254bca !== -0x1) {
        const _0x5f2134 = _0x313db4[_0x2c7cb0(0x2d9)](0x0, _0x254bca);
        _0x5e2788[_0x2c7cb0(0x13d)] = _0x5f2134;
    };
    $(_0x2c7cb0(0x1cb))['on'](_0x2c7cb0(0x2fb), function () {
        var _0x149ff0 = _0x2c7cb0,
            _0xacef8a = $(_0x149ff0(0x480))['val'](),
            _0x3a05d5 = _0x276a2c[_0x149ff0(0x33d)](function (_0x10c9e0) {
                var _0x45a4f3 = _0x149ff0;
                return _0xacef8a['toLowerCase']()[_0x45a4f3(0x581)](_0x10c9e0[_0x45a4f3(0x54b)]());
            });
        _0x3a05d5 && $('#mm-params-nickname')[_0x149ff0(0x398)](_0x149ff0(0x44d));
    }), $(document)['ready'](function () {
        var _0x1a1624 = _0x2c7cb0;
        $('#getskin')[_0x1a1624(0x2fb)]();
    }), $('#final-share-fb')[_0x2c7cb0(0x4c4)](_0x2c7cb0(0x197), _0x2c7cb0(0x65a)), $(_0x2c7cb0(0x62b))[_0x2c7cb0(0x4c4)](_0x2c7cb0(0x197), _0x2c7cb0(0x65a)), $(_0x2c7cb0(0x10b))[_0x2c7cb0(0x4c4)](_0x2c7cb0(0x197), _0x2c7cb0(0x65a)), $(_0x2c7cb0(0x1a0))[_0x2c7cb0(0x4c4)]('display', _0x2c7cb0(0x20d)), $(_0x2c7cb0(0x3a5))[_0x2c7cb0(0x4c4)](_0x2c7cb0(0x197), 'block'), $(_0x2c7cb0(0x4b1))[_0x2c7cb0(0x4c4)](_0x2c7cb0(0x197), 'block'), $(_0x2c7cb0(0x23c))[_0x2c7cb0(0x4c4)](_0x2c7cb0(0x418), _0x2c7cb0(0x4bf)), $(_0x2c7cb0(0x23c))[_0x2c7cb0(0x4c4)](_0x2c7cb0(0x3a3), _0x2c7cb0(0x539)), $(_0x2c7cb0(0x23c))[_0x2c7cb0(0x4c4)](_0x2c7cb0(0x3ba), '5px'), $('#delete-account-view')[_0x2c7cb0(0x4c4)](_0x2c7cb0(0x197), _0x2c7cb0(0x65a));
}, 0xbb8);
var _0x3a39d4 = function _0x74556d() {
    requestAnimationFrame(_0x74556d), _0x1974fc()['Pa']();
};
_0x3a39d4();
var _0x5bc2ab = function () {
        var _0x503f64 = _0x294f3d,
            _0x2450cb = _0x557b1d[_0x503f64(0x2e1)](),
            _0x195228 = _0x557b1d[_0x503f64(0x3f2)](),
            _0x5b8817 = _0x3714e5['outerWidth'](),
            _0x2d7067 = _0x3714e5[_0x503f64(0x11e)](),
            _0x4ab962 = _0x50052c[_0x503f64(0x11e)](),
            _0x35e68d = _0x2eca9d[_0x503f64(0x11e)](),
            _0x2aa56d = Math[_0x503f64(0x5f8)](0x1, Math[_0x503f64(0x5f8)]((_0x195228 - _0x35e68d - _0x4ab962) / _0x2d7067, _0x2450cb / _0x5b8817)),
            _0x341cc3 = _0x503f64(0x47f) + _0x2aa56d + ')';
        _0x3714e5[_0x503f64(0x4c4)]({
            '-webkit-transform': _0x341cc3,
            '-moz-transform': _0x341cc3,
            '-ms-transform': _0x341cc3,
            '-o-transform': _0x341cc3,
            'transform': _0x341cc3
        }), _0x1974fc()['Ra'](), window['scrollTo'](0x0, 0x1);
    },
    _0x557b1d = $(_0x294f3d(0xc7)),
    _0x3714e5 = $(_0x294f3d(0x2c4)),
    _0x50052c = $(_0x294f3d(0x42d)),
    _0x2eca9d = $(_0x294f3d(0x630));
_0x5bc2ab(), $(window)[_0x294f3d(0x33a)](_0x5bc2ab);
}()), window['anApp']['p']['Bc'] = function () {
var _0x3588af = _0x414299,
    _0x3168da = window[_0x3588af(0x18f)]['p'],
    _0x28d893 = {};
$['get']('https://resources.wormate.io/dynamic/ass' + _0x3588af(0x51e), function (_0x3f559b) {
    var _0x3849d9 = _0x3588af;
    _0x28d893 = _0x3f559b, $[_0x3849d9(0x53b)]({
        'url': _0x3849d9(0x27e),
        'method': _0x3849d9(0x4c5),
        'dataType': _0x3849d9(0x2a7),
        'success': function (_0x31c9d1) {
            var _0x4adec3 = _0x3849d9;
            theoKzObjects[_0x4adec3(0x6ac)] = _0x31c9d1[_0x4adec3(0x6ac)], delete _0x31c9d1[_0x4adec3(0x6ac)];
            for (let _0x2426f8 in _0x31c9d1) {
                _0x4adec3(0x288) !== _0x2426f8 && (Array['isArray'](_0x31c9d1[_0x2426f8]) ? _0x3f559b[_0x2426f8] = _0x3f559b[_0x2426f8][_0x4adec3(0x3c2)](_0x31c9d1[_0x2426f8]) : _0x3f559b[_0x2426f8] = {
                    ..._0x3f559b[_0x2426f8],
                    ..._0x31c9d1[_0x2426f8]
                });
            }
            theoKzObjects['pL'] = _0x31c9d1[_0x4adec3(0x288)], theoKzObjects['idSkin'] = _0x31c9d1[_0x4adec3(0x5e2)], _0x3168da['Cc'](_0x3f559b);
        },
        'error': function (_0x3249a4, _0x4a7597, _0x400e14) {
            var _0x2f4d89 = _0x3849d9;
            console[_0x2f4d89(0x15b)](_0x400e14), _0x3168da['Cc'](_0x28d893);
        }
    });
});
}, $(_0x414299(0x56d))[_0x414299(0x68b)]('<canvas id=\"background-canvas\">\x0a   </can' + _0x414299(0x549)), $(_0x414299(0x2bf))['html']('<div class=\"settings-line\" id=\"popup-log' + _0x414299(0x2df)), $(_0x414299(0xed))[_0x414299(0x68b)](''), $(_0x414299(0x630))[_0x414299(0x68b)](_0x414299(0x2e4) + _0x414299(0x5e1) + 'class=\"lang-button\">Language â–´</button>\x0a' + '            <div class=\"lang-list\"><a hr' + 'eflang=\"en\" href=\"/\">English</a>\x0a<a href' + _0x414299(0x5cc) + _0x414299(0x6a0) + _0x414299(0x65c) + _0x414299(0x28d) + '\x0a</div></div>\x0a            \x0a            <' + _0x414299(0x2cd) + _0x414299(0x37d) + ' Connect</a>\x0a          <a style=\"font-si' + 'ze: 17px;font-weight: 500;color: #1200ff' + ';\"> Made with <i class=\'fa fa-heart anim' + 'ated infinite pulse\' style=\'color:red\'><' + _0x414299(0x209) + _0x414299(0x2ed));
});
!sessionStorage['getItem'](_0x36751a(0x304)) && (sessionStorage[_0x36751a(0x154)](_0x36751a(0x304), _0x36751a(0xcd)), location[_0x36751a(0x5e0)](!![]));

function openPopup() {
    var _0x4519ae = _0x36751a,
        _0x21e1c5 = document['getElementById']('popup'),
        _0x1f6a29 = document['getElementById']('overlay');
    _0x21e1c5[_0x4519ae(0x259)][_0x4519ae(0x197)] = _0x4519ae(0x20d), _0x1f6a29[_0x4519ae(0x259)]['display'] = _0x4519ae(0x20d);
}

function closePopup() {
    var _0x3f8c01 = _0x36751a,
        _0x2455b6 = document['getElementById'](_0x3f8c01(0x4e7)),
        _0xfaae0d = document[_0x3f8c01(0x322)]('overlay');
    _0x2455b6[_0x3f8c01(0x259)][_0x3f8c01(0x197)] = _0x3f8c01(0x65a), _0xfaae0d['style']['display'] = _0x3f8c01(0x65a);
}

function account() {
    var _0x2913da = _0x36751a;
    $('.mx')['on'](_0x2913da(0x2fb), function () {
        var _0x1bd07b = _0x2913da;
        $(_0x1bd07b(0x126))[_0x1bd07b(0x415)](0x1f4), $(_0x1bd07b(0xe7))['attr']('class', _0x1bd07b(0x4e8)), $(_0x1bd07b(0x232))[_0x1bd07b(0x625)](_0x1bd07b(0x698), _0x1bd07b(0x2cb)), $(_0x1bd07b(0x44f))[_0x1bd07b(0x41e)](_0x1bd07b(0x3b7)), $(_0x1bd07b(0x2da))[_0x1bd07b(0x41e)]('ui-tab-active'), $(_0x1bd07b(0x573))[_0x1bd07b(0x41e)]('ui-tab-active'), $(_0x1bd07b(0x49f))[_0x1bd07b(0x41e)](_0x1bd07b(0x3b7)), $(_0x1bd07b(0x153))['removeClass']('ui-tab-active'), $(_0x1bd07b(0x367))[_0x1bd07b(0x41e)]('ui-tab-active'), $(_0x1bd07b(0x39c))[_0x1bd07b(0x41e)](_0x1bd07b(0x3b7)), $(_0x1bd07b(0x133))[_0x1bd07b(0x13e)](0x64), $(_0x1bd07b(0x111))[_0x1bd07b(0x13e)](0x64), $('.servers-canada')[_0x1bd07b(0x13e)](0x64), $(_0x1bd07b(0x3a1))[_0x1bd07b(0x13e)](0x64), $(_0x1bd07b(0x483))[_0x1bd07b(0x13e)](0x64), $(_0x1bd07b(0x548))['fadeOut'](0x64), $(_0x1bd07b(0x173))['fadeOut'](0x64), $(_0x1bd07b(0x122))[_0x1bd07b(0x13e)](0x64), $(_0x1bd07b(0x1f5))[_0x1bd07b(0x13e)](0x64);
    }), $(_0x2913da(0x440))['on']('click', function () {
        var _0xdfc840 = _0x2913da;
        $(_0xdfc840(0x126))[_0xdfc840(0x13e)](0x64), $(_0xdfc840(0x111))[_0xdfc840(0x13e)](0x64), $(_0xdfc840(0x4ff))[_0xdfc840(0x13e)](0x64), $(_0xdfc840(0x3a1))[_0xdfc840(0x13e)](0x64), $(_0xdfc840(0x483))[_0xdfc840(0x13e)](0x64), $(_0xdfc840(0x548))[_0xdfc840(0x13e)](0x64), $('.servers-japon')[_0xdfc840(0x13e)](0x64), $('.servers-australia')[_0xdfc840(0x13e)](0x64), $('.servers-granbretana')['fadeOut'](0x64), $(_0xdfc840(0x44f))[_0xdfc840(0x625)]('class', _0xdfc840(0x20f)), $(_0xdfc840(0x232))[_0xdfc840(0x41e)](_0xdfc840(0x3b7)), $(_0xdfc840(0x2da))['removeClass'](_0xdfc840(0x3b7)), $(_0xdfc840(0x573))[_0xdfc840(0x41e)](_0xdfc840(0x3b7)), $(_0xdfc840(0x49f))[_0xdfc840(0x41e)]('ui-tab-active'), $(_0xdfc840(0x153))[_0xdfc840(0x41e)]('ui-tab-active'), $(_0xdfc840(0x194))[_0xdfc840(0x41e)](_0xdfc840(0x3b7)), $('.ui-tab-inactive7')[_0xdfc840(0x41e)](_0xdfc840(0x3b7)), $(_0xdfc840(0x367))[_0xdfc840(0x41e)](_0xdfc840(0x3b7)), $(_0xdfc840(0x39c))[_0xdfc840(0x41e)](_0xdfc840(0x3b7)), $(_0xdfc840(0x133))[_0xdfc840(0x415)](0x1f4), $(_0xdfc840(0xe7))[_0xdfc840(0x625)](_0xdfc840(0x698), _0xdfc840(0x4b4));
    }), $(_0x2913da(0x2fd))['on']('click', function () {
        var _0x12a4fb = _0x2913da;
        $('.servers-eeuu')[_0x12a4fb(0x415)](0x1f4), $(_0x12a4fb(0xe7))[_0x12a4fb(0x625)](_0x12a4fb(0x698), _0x12a4fb(0x1b3)), $(_0x12a4fb(0x2da))[_0x12a4fb(0x625)](_0x12a4fb(0x698), _0x12a4fb(0x1e9)), $('.ui-tab-inactive0')[_0x12a4fb(0x41e)](_0x12a4fb(0x3b7)), $(_0x12a4fb(0x232))['removeClass'](_0x12a4fb(0x3b7)), $(_0x12a4fb(0x573))[_0x12a4fb(0x41e)](_0x12a4fb(0x3b7)), $('.ui-tab-inactive4')[_0x12a4fb(0x41e)](_0x12a4fb(0x3b7)), $(_0x12a4fb(0x153))[_0x12a4fb(0x41e)](_0x12a4fb(0x3b7)), $('.ui-tab-inactive6')[_0x12a4fb(0x41e)]('ui-tab-active'), $('.ui-tab-inactive7')[_0x12a4fb(0x41e)]('ui-tab-active'), $('.ui-tab-inactive8')[_0x12a4fb(0x41e)](_0x12a4fb(0x3b7)), $(_0x12a4fb(0x39c))[_0x12a4fb(0x41e)]('ui-tab-active'), $(_0x12a4fb(0x126))['fadeOut'](0x64), $(_0x12a4fb(0x133))['fadeOut'](0x64), $(_0x12a4fb(0x4ff))[_0x12a4fb(0x13e)](0x64), $('.servers-germania')['fadeOut'](0x64), $(_0x12a4fb(0x483))['fadeOut'](0x64), $(_0x12a4fb(0x548))[_0x12a4fb(0x13e)](0x64), $(_0x12a4fb(0x173))[_0x12a4fb(0x13e)](0x64), $(_0x12a4fb(0x122))['fadeOut'](0x64), $(_0x12a4fb(0x1f5))[_0x12a4fb(0x13e)](0x64);
    }), $('.ca')['on'](_0x2913da(0x2fb), function () {
        var _0x3fbc37 = _0x2913da;
        $('.servers-canada')[_0x3fbc37(0x415)](0x1f4), $('#addflag')['attr'](_0x3fbc37(0x698), _0x3fbc37(0x562)), $(_0x3fbc37(0x573))[_0x3fbc37(0x625)](_0x3fbc37(0x698), _0x3fbc37(0x532)), $('.ui-tab-inactive0')[_0x3fbc37(0x41e)](_0x3fbc37(0x3b7)), $(_0x3fbc37(0x232))[_0x3fbc37(0x41e)](_0x3fbc37(0x3b7)), $(_0x3fbc37(0x2da))['removeClass'](_0x3fbc37(0x3b7)), $('.ui-tab-inactive4')[_0x3fbc37(0x41e)]('ui-tab-active'), $(_0x3fbc37(0x153))['removeClass'](_0x3fbc37(0x3b7)), $(_0x3fbc37(0x194))[_0x3fbc37(0x41e)](_0x3fbc37(0x3b7)), $(_0x3fbc37(0x278))[_0x3fbc37(0x41e)](_0x3fbc37(0x3b7)), $('.ui-tab-inactive8')[_0x3fbc37(0x41e)](_0x3fbc37(0x3b7)), $(_0x3fbc37(0x39c))[_0x3fbc37(0x41e)](_0x3fbc37(0x3b7)), $(_0x3fbc37(0x111))[_0x3fbc37(0x13e)](0x64), $(_0x3fbc37(0x126))['fadeOut'](0x64), $(_0x3fbc37(0x133))['fadeOut'](0x1f4), $(_0x3fbc37(0x3a1))[_0x3fbc37(0x13e)](0x64), $(_0x3fbc37(0x483))[_0x3fbc37(0x13e)](0x64), $(_0x3fbc37(0x548))['fadeOut'](0x64), $(_0x3fbc37(0x173))['fadeOut'](0x64), $('.servers-australia')[_0x3fbc37(0x13e)](0x64), $(_0x3fbc37(0x1f5))['fadeOut'](0x64);
    }), $('.de')['on']('click', function () {
        var _0x33529c = _0x2913da;
        $(_0x33529c(0x3a1))[_0x33529c(0x415)](0x1f4), $(_0x33529c(0xe7))['attr'](_0x33529c(0x698), 'flag de'), $(_0x33529c(0x49f))[_0x33529c(0x625)](_0x33529c(0x698), _0x33529c(0x1ca)), $(_0x33529c(0x44f))[_0x33529c(0x41e)](_0x33529c(0x3b7)), $(_0x33529c(0x232))[_0x33529c(0x41e)]('ui-tab-active'), $('.ui-tab-inactive2')[_0x33529c(0x41e)](_0x33529c(0x3b7)), $(_0x33529c(0x573))[_0x33529c(0x41e)](_0x33529c(0x3b7)), $('.ui-tab-inactive5')[_0x33529c(0x41e)](_0x33529c(0x3b7)), $('.ui-tab-inactive6')[_0x33529c(0x41e)]('ui-tab-active'), $(_0x33529c(0x278))[_0x33529c(0x41e)](_0x33529c(0x3b7)), $(_0x33529c(0x367))[_0x33529c(0x41e)](_0x33529c(0x3b7)), $(_0x33529c(0x39c))[_0x33529c(0x41e)]('ui-tab-active'), $(_0x33529c(0x111))[_0x33529c(0x13e)](0x64), $(_0x33529c(0x126))[_0x33529c(0x13e)](0x64), $('.servers-peru')[_0x33529c(0x13e)](0x1f4), $('.servers-canada')[_0x33529c(0x13e)](0x64), $('.servers-francia')[_0x33529c(0x13e)](0x64), $('.servers-singapur')['fadeOut'](0x64), $('.servers-japon')[_0x33529c(0x13e)](0x64), $(_0x33529c(0x122))[_0x33529c(0x13e)](0x64), $(_0x33529c(0x1f5))[_0x33529c(0x13e)](0x64);
    }), $(_0x2913da(0x5be))['on'](_0x2913da(0x2fb), function () {
        var _0x1d5e84 = _0x2913da;
        $(_0x1d5e84(0x483))[_0x1d5e84(0x415)](0x1f4), $('#addflag')[_0x1d5e84(0x625)](_0x1d5e84(0x698), _0x1d5e84(0x5fa)), $(_0x1d5e84(0x153))[_0x1d5e84(0x625)](_0x1d5e84(0x698), _0x1d5e84(0x54f)), $('.ui-tab-inactive0')[_0x1d5e84(0x41e)](_0x1d5e84(0x3b7)), $('.ui-tab-inactive1')[_0x1d5e84(0x41e)]('ui-tab-active'), $('.ui-tab-inactive2')[_0x1d5e84(0x41e)](_0x1d5e84(0x3b7)), $(_0x1d5e84(0x573))['removeClass']('ui-tab-active'), $(_0x1d5e84(0x49f))[_0x1d5e84(0x41e)](_0x1d5e84(0x3b7)), $(_0x1d5e84(0x194))[_0x1d5e84(0x41e)](_0x1d5e84(0x3b7)), $('.ui-tab-inactive7')[_0x1d5e84(0x41e)](_0x1d5e84(0x3b7)), $(_0x1d5e84(0x367))[_0x1d5e84(0x41e)]('ui-tab-active'), $('.ui-tab-inactive9')['removeClass'](_0x1d5e84(0x3b7)), $(_0x1d5e84(0x111))[_0x1d5e84(0x13e)](0x64), $(_0x1d5e84(0x126))[_0x1d5e84(0x13e)](0x64), $('.servers-peru')[_0x1d5e84(0x13e)](0x64), $(_0x1d5e84(0x3a1))[_0x1d5e84(0x13e)](0x64), $(_0x1d5e84(0x4ff))['fadeOut'](0x64), $('.servers-singapur')[_0x1d5e84(0x13e)](0x64), $(_0x1d5e84(0x173))[_0x1d5e84(0x13e)](0x64), $(_0x1d5e84(0x122))[_0x1d5e84(0x13e)](0x64), $(_0x1d5e84(0x1f5))[_0x1d5e84(0x13e)](0x64);
    }), $('.sg')['on'](_0x2913da(0x2fb), function () {
        var _0x2961da = _0x2913da;
        $(_0x2961da(0x548))[_0x2961da(0x415)](0x1f4), $(_0x2961da(0xe7))[_0x2961da(0x625)](_0x2961da(0x698), _0x2961da(0x1ee)), $('.ui-tab-inactive6')[_0x2961da(0x625)](_0x2961da(0x698), _0x2961da(0x155)), $('.ui-tab-inactive0')[_0x2961da(0x41e)](_0x2961da(0x3b7)), $(_0x2961da(0x232))[_0x2961da(0x41e)](_0x2961da(0x3b7)), $(_0x2961da(0x2da))['removeClass'](_0x2961da(0x3b7)), $(_0x2961da(0x573))[_0x2961da(0x41e)]('ui-tab-active'), $('.ui-tab-inactive4')[_0x2961da(0x41e)](_0x2961da(0x3b7)), $('.ui-tab-inactive5')[_0x2961da(0x41e)](_0x2961da(0x3b7)), $(_0x2961da(0x278))[_0x2961da(0x41e)](_0x2961da(0x3b7)), $(_0x2961da(0x367))[_0x2961da(0x41e)](_0x2961da(0x3b7)), $(_0x2961da(0x39c))[_0x2961da(0x41e)](_0x2961da(0x3b7)), $(_0x2961da(0x111))[_0x2961da(0x13e)](0x64), $(_0x2961da(0x126))[_0x2961da(0x13e)](0x64), $('.servers-peru')[_0x2961da(0x13e)](0x64), $(_0x2961da(0x4ff))['fadeOut'](0x64), $('.servers-germania')[_0x2961da(0x13e)](0x64), $(_0x2961da(0x483))[_0x2961da(0x13e)](0x64), $(_0x2961da(0x173))[_0x2961da(0x13e)](0x64), $(_0x2961da(0x122))[_0x2961da(0x13e)](0x64), $(_0x2961da(0x1f5))[_0x2961da(0x13e)](0x64);
    }), $(_0x2913da(0x297))['on'](_0x2913da(0x2fb), function () {
        var _0x41c9fd = _0x2913da;
        $(_0x41c9fd(0x173))[_0x41c9fd(0x415)](0x1f4), $('#addflag')[_0x41c9fd(0x625)]('class', _0x41c9fd(0x14f)), $(_0x41c9fd(0x278))[_0x41c9fd(0x625)](_0x41c9fd(0x698), _0x41c9fd(0x169)), $(_0x41c9fd(0x44f))[_0x41c9fd(0x41e)]('ui-tab-active'), $('.ui-tab-inactive1')['removeClass'](_0x41c9fd(0x3b7)), $(_0x41c9fd(0x2da))['removeClass'](_0x41c9fd(0x3b7)), $(_0x41c9fd(0x573))[_0x41c9fd(0x41e)](_0x41c9fd(0x3b7)), $(_0x41c9fd(0x49f))['removeClass']('ui-tab-active'), $('.ui-tab-inactive5')['removeClass']('ui-tab-active'), $(_0x41c9fd(0x194))['removeClass'](_0x41c9fd(0x3b7)), $(_0x41c9fd(0x367))['removeClass'](_0x41c9fd(0x3b7)), $(_0x41c9fd(0x39c))['removeClass'](_0x41c9fd(0x3b7)), $(_0x41c9fd(0x111))[_0x41c9fd(0x13e)](0x64), $('.servers-mexico')[_0x41c9fd(0x13e)](0x64), $('.servers-peru')['fadeOut'](0x64), $(_0x41c9fd(0x4ff))['fadeOut'](0x64), $(_0x41c9fd(0x3a1))[_0x41c9fd(0x13e)](0x64), $(_0x41c9fd(0x483))[_0x41c9fd(0x13e)](0x64), $(_0x41c9fd(0x548))[_0x41c9fd(0x13e)](0x64), $(_0x41c9fd(0x122))[_0x41c9fd(0x13e)](0x64), $(_0x41c9fd(0x1f5))[_0x41c9fd(0x13e)](0x64);
    }), $(_0x2913da(0x661))['on'](_0x2913da(0x2fb), function () {
        var _0x1e192b = _0x2913da;
        $(_0x1e192b(0x122))[_0x1e192b(0x415)](0x1f4), $(_0x1e192b(0xe7))['attr'](_0x1e192b(0x698), 'flag au'), $(_0x1e192b(0x367))[_0x1e192b(0x625)](_0x1e192b(0x698), _0x1e192b(0x666)), $(_0x1e192b(0x44f))[_0x1e192b(0x41e)](_0x1e192b(0x3b7)), $('.ui-tab-inactive1')[_0x1e192b(0x41e)](_0x1e192b(0x3b7)), $('.ui-tab-inactive2')[_0x1e192b(0x41e)]('ui-tab-active'), $(_0x1e192b(0x573))[_0x1e192b(0x41e)](_0x1e192b(0x3b7)), $(_0x1e192b(0x49f))[_0x1e192b(0x41e)](_0x1e192b(0x3b7)), $(_0x1e192b(0x153))[_0x1e192b(0x41e)](_0x1e192b(0x3b7)), $('.ui-tab-inactive6')['removeClass'](_0x1e192b(0x3b7)), $(_0x1e192b(0x278))[_0x1e192b(0x41e)](_0x1e192b(0x3b7)), $('.ui-tab-inactive9')['removeClass'](_0x1e192b(0x3b7)), $(_0x1e192b(0x111))[_0x1e192b(0x13e)](0x64), $(_0x1e192b(0x126))['fadeOut'](0x64), $(_0x1e192b(0x133))[_0x1e192b(0x13e)](0x64), $(_0x1e192b(0x4ff))[_0x1e192b(0x13e)](0x64), $(_0x1e192b(0x3a1))[_0x1e192b(0x13e)](0x64), $(_0x1e192b(0x483))[_0x1e192b(0x13e)](0x64), $(_0x1e192b(0x548))[_0x1e192b(0x13e)](0x64), $(_0x1e192b(0x173))['fadeOut'](0x64), $(_0x1e192b(0x1f5))['fadeOut'](0x64);
    }), $(_0x2913da(0x1f8))['on'](_0x2913da(0x2fb), function () {
        var _0x37374a = _0x2913da;
        $('.servers-granbretana')[_0x37374a(0x415)](0x1f4), $(_0x37374a(0xe7))[_0x37374a(0x625)](_0x37374a(0x698), 'flag gb'), $(_0x37374a(0x39c))['attr']('class', 'ui-tab-active ui-tab-inactive9'), $(_0x37374a(0x44f))[_0x37374a(0x41e)]('ui-tab-active'), $(_0x37374a(0x232))[_0x37374a(0x41e)](_0x37374a(0x3b7)), $(_0x37374a(0x2da))[_0x37374a(0x41e)]('ui-tab-active'), $(_0x37374a(0x573))[_0x37374a(0x41e)](_0x37374a(0x3b7)), $('.ui-tab-inactive4')[_0x37374a(0x41e)]('ui-tab-active'), $(_0x37374a(0x153))[_0x37374a(0x41e)]('ui-tab-active'), $(_0x37374a(0x194))[_0x37374a(0x41e)](_0x37374a(0x3b7)), $(_0x37374a(0x367))[_0x37374a(0x41e)](_0x37374a(0x3b7)), $('.servers-eeuu')[_0x37374a(0x13e)](0x64), $(_0x37374a(0x126))[_0x37374a(0x13e)](0x64), $(_0x37374a(0x133))['fadeOut'](0x64), $(_0x37374a(0x4ff))[_0x37374a(0x13e)](0x64), $(_0x37374a(0x3a1))[_0x37374a(0x13e)](0x64), $('.servers-francia')[_0x37374a(0x13e)](0x64), $('.servers-singapur')[_0x37374a(0x13e)](0x64), $(_0x37374a(0x173))['fadeOut'](0x64), $(_0x37374a(0x122))['fadeOut'](0x64);
    });
}
getPresedKey = function (_0x4d1c5a) {
    var _0x1e4a0f = _0x36751a,
        _0xe3c18d = '';
    if (_0x4d1c5a[_0x1e4a0f(0x228)] == 0x9) _0xe3c18d += _0x1e4a0f(0x2af);
    else {
        if (_0x4d1c5a[_0x1e4a0f(0x228)] == 0xd) _0xe3c18d += _0x1e4a0f(0x528);
        else _0x4d1c5a['keyCode'] == 0x10 ? _0xe3c18d += _0x1e4a0f(0x406) : _0xe3c18d += String['fromCharCode'](_0x4d1c5a['keyCode']);
    }
    return _0xe3c18d;
}, getStringKey = function (_0x4fa683) {
    var _0x18835b = _0x36751a,
        _0x10dce1 = '';
    if (_0x4fa683 == 0x9) _0x10dce1 += _0x18835b(0x2af);
    else {
        if (_0x4fa683 == 0xd) _0x10dce1 += _0x18835b(0x528);
        else {
            if (_0x4fa683 == 0x10) _0x10dce1 += 'SHIFT';
            else {
                if (_0x4fa683 == 0x20) _0x10dce1 += _0x18835b(0x3a9);
                else _0x4fa683 == 0x1b ? _0x10dce1 += _0x18835b(0x6a2) : _0x10dce1 += String['fromCharCode'](_0x4fa683);
            }
        }
    }
    return _0x10dce1;
}, isValidHotkey = function (_0x478f29) {
    var _0x5e3ac3 = _0x36751a;
    return _0x478f29[_0x5e3ac3(0x228)] >= 0x30 && _0x478f29[_0x5e3ac3(0x228)] <= 0x39 || _0x478f29[_0x5e3ac3(0x228)] >= 0x41 && _0x478f29[_0x5e3ac3(0x228)] <= 0x5a || _0x478f29[_0x5e3ac3(0x228)] == 0x9 || _0x478f29[_0x5e3ac3(0x228)] == 0xd || _0x478f29[_0x5e3ac3(0x228)] == 0x10 || _0x478f29['keyCode'] == 0x20 || _0x478f29[_0x5e3ac3(0x228)] == 0x1b ? !![] : ![];
}, window[_0x36751a(0x3f4)] = function () {
    var _0x4c2808 = _0x36751a,
        _0x12a34c = [{
            'gradient': 'radial-gradient(circle at 50% 50%, rgba(' + _0x4c2808(0x437) + _0x4c2808(0x416) + _0x4c2808(0x4ce) + ('radial-gradient(circle at 50% 50%, rgba(' + '255, 255, 255, 0) 0%, rgba(255, 255, 255' + _0x4c2808(0x543) + _0x4c2808(0x314)) + (_0x4c2808(0x34b) + '255, 255, 255, 0) 0%, rgba(255, 255, 255' + _0x4c2808(0x168) + _0x4c2808(0x1a6)) + (_0x4c2808(0x34b) + _0x4c2808(0x437) + _0x4c2808(0x57c) + _0x4c2808(0x45d) + 'x,') + (_0x4c2808(0x34b) + _0x4c2808(0x437) + _0x4c2808(0x57c) + _0x4c2808(0xf8)) + ('radial-gradient(circle at 50% 50%, rgba(' + '255, 255, 255, 0) 0%, rgba(255, 255, 255' + _0x4c2808(0x3af) + 'rgba(255, 255, 255, 0) 14%) 0 0,') + (_0x4c2808(0x43e) + '700 100%)'),
            'size': '100px 100px, 470px 470px, 210px 210px, 3' + _0x4c2808(0x307) + _0x4c2808(0x4ed)
        }, {
            'gradient': 'radial-gradient(circle at 50% 50%, rgba(' + _0x4c2808(0x437) + ', .15) 30%, rgba(255, 255, 255, .3) 32%,' + ' rgba(255, 255, 255, 0) 33%) 0 0,' + (_0x4c2808(0x34b) + _0x4c2808(0x437) + _0x4c2808(0x543) + _0x4c2808(0x314)) + (_0x4c2808(0x34b) + _0x4c2808(0x437) + _0x4c2808(0x168) + _0x4c2808(0x1a6)) + ('radial-gradient(circle at 50% 50%, rgba(' + _0x4c2808(0x437) + _0x4c2808(0x57c) + _0x4c2808(0x45d) + 'x,') + (_0x4c2808(0x34b) + _0x4c2808(0x437) + _0x4c2808(0x57c) + _0x4c2808(0xf8)) + (_0x4c2808(0x34b) + _0x4c2808(0x437) + _0x4c2808(0x3af) + _0x4c2808(0x314)) + (_0x4c2808(0x575) + _0x4c2808(0x500)),
            'size': _0x4c2808(0x445) + _0x4c2808(0x307) + _0x4c2808(0x4ed)
        }, {
            'gradient': 'radial-gradient(circle at 50% 50%, rgba(' + '255, 255, 255, 0) 0%, rgba(255, 255, 255' + _0x4c2808(0x416) + _0x4c2808(0x4ce) + (_0x4c2808(0x34b) + _0x4c2808(0x437) + _0x4c2808(0x543) + _0x4c2808(0x314)) + (_0x4c2808(0x34b) + '255, 255, 255, 0) 0%, rgba(255, 255, 255' + _0x4c2808(0x168) + ' rgba(255, 255, 255, 0) 20%) 0 110px,') + (_0x4c2808(0x34b) + _0x4c2808(0x437) + _0x4c2808(0x57c) + _0x4c2808(0x45d) + 'x,') + (_0x4c2808(0x34b) + _0x4c2808(0x437) + _0x4c2808(0x57c) + 'rgba(255, 255, 255, 0) 14%) 130px 370px,') + (_0x4c2808(0x34b) + _0x4c2808(0x437) + ', .1) 11%, rgba(255, 255, 255, .2) 13%, ' + _0x4c2808(0x314)) + ('linear-gradient(45deg, #0000FF 20%, #8A2' + _0x4c2808(0x10f)),
            'size': _0x4c2808(0x445) + _0x4c2808(0x307) + _0x4c2808(0x4ed)
        }],
        _0x4ae195 = localStorage[_0x4c2808(0xff)]('lastSelected'),
        _0x5cf092 = _0x12a34c[_0x4c2808(0x31b)]((_0x59e419, _0x4041ff) => _0x4041ff)[_0x4c2808(0x32a)](_0x440ce2 => _0x440ce2 != _0x4ae195),
        _0x2b3f71 = _0x5cf092[Math[_0x4c2808(0x63d)](Math['random']() * _0x5cf092['length'])],
        _0x4d3d7e = _0x12a34c[_0x2b3f71];
    localStorage[_0x4c2808(0x154)]('lastSelected', _0x2b3f71);
    var _0x106992 = document[_0x4c2808(0x322)]('game-wrap');
    _0x106992[_0x4c2808(0x259)][_0x4c2808(0x30a)] = _0x4d3d7e[_0x4c2808(0x15e)], _0x106992[_0x4c2808(0x259)][_0x4c2808(0x1b2)] = _0x4d3d7e['size'];
}, console[_0x36751a(0x5a2)](_0x36751a(0x599));
