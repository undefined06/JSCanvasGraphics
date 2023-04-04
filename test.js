function _typeof(f) {
  return (_typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (A) {
          return typeof A
        }
      : function (A) {
          return A &&
            'function' == typeof Symbol &&
            A.constructor === Symbol &&
            A !== Symbol.prototype
            ? 'symbol'
            : typeof A
        })(f)
}
function _slicedToArray(f, A) {
  return (
    _arrayWithHoles(f) ||
    _iterableToArrayLimit(f, A) ||
    _unsupportedIterableToArray(f, A) ||
    _nonIterableRest()
  )
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  )
}
function _unsupportedIterableToArray(f, A) {
  if (f) {
    if ('string' == typeof f) {
      return _arrayLikeToArray(f, A)
    }
    var G = Object.prototype.toString.call(f).slice(8, -1)
    return 'Map' ===
      (G = 'Object' === G && f.constructor ? f.constructor.name : G) ||
      'Set' === G
      ? Array.from(f)
      : 'Arguments' === G || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(G)
      ? _arrayLikeToArray(f, A)
      : void 0
  }
}
function _arrayLikeToArray(f, A) {
  ;(null == A || A > f.length) && (A = f.length)
  for (var G = 0, k = new Array(A); G < A; G++) {
    k[G] = f[G]
  }
  return k
}
function _iterableToArrayLimit(f, A) {
  var G =
    null == f
      ? null
      : ('undefined' != typeof Symbol && f[Symbol.iterator]) || f['@@iterator']
  if (null != G) {
    var k,
      b,
      P = [],
      Z = true,
      D = false
    try {
      for (
        G = G.call(f);
        !(Z = (k = G.next()).done) && (P.push(k.value), !A || P.length !== A);
        Z = true
      ) {}
    } catch (l) {
      D = true
      b = l
    } finally {
      try {
        Z || null == G.return || G.return()
      } finally {
        if (D) {
          throw b
        }
      }
    }
    return P
  }
}
function _arrayWithHoles(f) {
  if (Array.isArray(f)) {
    return f
  }
}
function _classCallCheck(f, A) {
  if (!(f instanceof A)) {
    throw new TypeError('Cannot call a class as a function')
  }
}
function _defineProperties(f, A) {
  for (var G = 0; G < A.length; G++) {
    var k = A[G]
    k.enumerable = k.enumerable || false
    k.configurable = true
    'value' in k && (k.writable = true)
    Object.defineProperty(f, k.key, k)
  }
}
function _createClass(f, A, G) {
  return (
    A && _defineProperties(f.prototype, A),
    G && _defineProperties(f, G),
    Object.defineProperty(f, 'prototype', { writable: false }),
    f
  )
}
function _readOnlyError(f) {
  throw new TypeError('"' + f + '" is read-only')
}
var build = 2301260
function f(G) {
  G = $('#' + G)
  'none' == G.css('display') && (A(), G.slideDown(500))
}
function A() {
  $('#main-right')
    .children()
    .each(function () {
      'block' == $(this).css('display') && $(this).slideUp(500)
    })
}
window.showSideMenu = f
window.hideSideMenu = A
window.version = '3.6.1'
var f0,
  f1,
  f2,
  f3 = window.PIXI,
  f4 = ((window.PIXI = null), 256),
  f5 = {
    THICK: 9,
    THIN: 5,
    NONE: 0,
  },
  f6 = {
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    fontSize: 69,
    fill: 16777215,
  },
  f7 = new f3.Point(0.5, 0.5),
  f8 = new f3.Container(),
  f9 = new f3.Container(),
  ff = new f3.Container(),
  fA = new f3.Container(),
  fG = new f3.Container(),
  fk = new f3.Container(),
  fa = new f3.Sprite(f3.Texture.EMPTY),
  fb =
    ((Gr = (f1 = document.createElement('canvas')).getContext('2d')),
    (f1.width = f1.height = 512),
    Gr.beginPath(),
    Gr.arc(f4, f4, f4, 0, f3.PI_2),
    (Gr.fillStyle = '#fff'),
    Gr.fill(),
    f3.Texture.from(f1))
fb.defaultAnchor = f7
fA.addChild(ff)
fA.addChild(fG)
fA.addChild(fk)
f8.addChild(f9)
f8.addChild(fA)
f8.addChild(fa)
var fP,
  fZ,
  fo,
  fD,
  fl,
  fg,
  fY,
  fX,
  fE,
  fL,
  fc,
  fj,
  fu,
  fN,
  fi,
  fW,
  fx,
  fp,
  fh,
  fv,
  fB,
  fS,
  fR,
  fM,
  fU,
  fJ,
  fw,
  fd,
  fT = '',
  fr = false,
  fC = null,
  fQ = null,
  fK = false,
  fI = {
    elements: [],
    callbacks: [],
    pendingFriends: [],
    timestamps: [],
  },
  fH = [],
  fq = false,
  fF = null,
  fs = true,
  fy = 2 * Math.PI,
  fz = {},
  fO = new firebase.auth.GoogleAuthProvider(),
  fV = 'https://accounts.gota.io',
  fm = {
    key: 'halloween2020',
    foodColors: [15633692, 11224098, 9453167, 6301513],
    customEjectedMass: false,
    motd: '',
    endDate: 1604188800000,
    enabled: false,
    motherCustomEnabled: false,
    motherCustom: function (GC) {},
    happyMotherCells: [],
  },
  A0 =
    ((fm.enabled = new Date() < fm.endDate),
    firebase.initializeApp({
      apiKey: 'AIzaSyCmYFIIazBPyg5goqvPb-7uA6W9-4TVqEM',
      authDomain: 'accounts.gota.io',
      databaseURL: 'https://gota-io.firebaseio.com',
      projectId: 'gota-io',
      storageBucket: 'gota-io.appspot.com',
      messagingSenderId: '570450309042',
      appId: '1:570450309042:web:380ab6c94d44de2f',
    }),
    {}),
  A1 = {},
  A2 = {
    massType: 0,
    cameraFocus: 0,
    textOutlineSize: 0,
    resolution: 1,
  },
  A3 = [
    {
      name: 'All',
      flags: 255,
      maxMessages: 100,
    },
    {
      name: 'Party',
      flags: 2,
      maxMessages: 100,
    },
  ],
  A4 = 4000,
  A5 = 4000,
  A6 = {
    min: 1,
    max: 15,
    defaultVal: 11,
    step: 1,
    onChange: function (GC, GQ) {
      A8[GC] = GQ
      var GK = 1000 * (A6.max - GQ) + 750
      switch (GC) {
        case 'rRainbowNameSpeed':
          A4 = GK
          break
        case 'rRainbowCellSpeed':
          A5 = GK
      }
    },
  },
  A7 = 0,
  A8 = {
    cDisableAA: false,
    cAutoRespawn: false,
    cHideId: false,
    cHideServerDisplay: true,
    sRenderType: 'AUTO',
    sTextOutlines: 'NONE',
    sQuality: 'ULTRA',
    sMassType: 'DEFAULT',
    cTransCells: false,
    cShowBorder: false,
    cSilentLogin: false,
    cHideChat: false,
    cHideMinimap: false,
    cShowCoordinates: false,
    cHideFood: false,
    cColoredPing: false,
    cColoredCellCount: false,
    cThemeEnabled: false,
    cDisableAutoZoom: false,
    cAutoDecline: false,
    cDisableEventSkins: false,
    cResizableChat: false,
    cDisableAutoNameHiding: false,
    cDisableAutoFoodHiding: false,
    cDisablePersistEjectMass: false,
    iChatWidth: '360px',
    iChatHeight: '250px',
    rUiScale: 1,
    rFreezeDelay: 50,
    rAnimationDelay: 90,
    rViewDistance: 100,
    rToggCell: 0,
    _ChatTabs: JSON.parse(JSON.stringify(A3)),
  },
  A9 = {
    kContextMenu: 3,
    kEjectMass: 87,
    kToggleSpec: 81,
    kSplit: 32,
    kDoubleSplit: -1,
    kTripleSplit: -1,
    kQuadSplit: -1,
    kHexaSplit: -1,
    kFreezeMouse: -1,
  },
  Af = {
    cHideLockedNames: false,
    cHideOwnName: false,
    cHideFriendNames: false,
    cHideEnemyNames: false,
    cHideOwnMass: true,
    cHideFriendMasses: true,
    cHideEnemyMasses: true,
    cHideOwnSkin: false,
    cHideFriendSkins: false,
    cHideEnemySkins: false,
    cSmoothCells: true,
    cHorizontalScorePanel: false,
    cHideLeaderboardHeader: false,
    cHidePartyHeader: false,
    cEnableSounds: true,
    iSplitSound: '',
    iEjectSound: '',
    sCameraFocus: 'CENTER',
    rCameraDelay: 0,
    rFreezeDelay: 50,
    spRainbowName: false,
    spRainbowCell: false,
    rRainbowNameSpeed: A6.defaultVal,
    rRainbowCellSpeed: A6.defaultVal,
  },
  AA = {
    kCycleNames: 78,
    kCycleMasses: 77,
    kCycleSkins: 75,
    kHideOwnName: -1,
    kHideFriendNames: -1,
    kHideEnemyNames: -1,
    kHideOwnMass: -1,
    kHideFriendMasses: -1,
    kHideEnemyMasses: -1,
    kHideOwnSkin: -1,
    kHideFriendSkins: -1,
    kHideEnemySkins: -1,
    kToggCell: -1,
    kFreezeMouseRight: -1,
    kFreezeMouseLeft: -1,
    kFreezeMouseUp: -1,
    kFreezeMouseDown: -1,
  },
  AG = new Map(),
  Ak = false,
  Aa = Object.assign({}, A9, AA),
  Ab = {
    version: 2,
    uiForegroundColor: 'rgb(255, 255, 255)',
    uiBackgroundColor: 'rgba(22, 22, 22, 0.8)',
    uiBorderColor: 'rgba(255, 255, 255, .2)',
    uiMenuBackgroundColor: '#2A2A2A',
    uiMenuTitleBackgroundColor: '#404040',
    uiMenuSubBackgroundColor: '#363636',
    uiMenuSubBackground2Color: '#404040',
    uiButtonColor: '#444444',
    uiGameBackgroundColor: '#121212',
    uiGameGridColor: 'rgba(170, 170, 170, .25)',
    uiGameBorderColor: '#ff0000',
    uiLeaderboardHighlightSelf: '#ffaaaa',
    uiLeaderboardHighlightParty: '#ffff00',
    uiPartyLeaderColor: '#00ffff',
    uiGameColorSuccess: '#00ff00',
    uiGameColorWarning: '#ffff00',
    uiGameColorError: '#ff0000',
    _FoodColors: [],
    aCustomBackground: '',
    aCustomSpike: '',
    aCustomMother: '',
    rBorderSize: 32,
    rBackgroundOpacity: 1,
  },
  AP = {}
for (fd in Ab) AP[fd] = Ab[fd]
var AZ,
  Ao,
  AD,
  Al,
  Ag,
  AY,
  AX = {
    aCustomSpike: null,
    aCustomMother: null,
  },
  AE = [],
  AL = {
    rules: false,
    nameColor: {
      r: 0,
      g: 255,
      b: 255,
    },
    chatColor: 0,
    lowerName: false,
    skinName: '',
    effect: 0,
    nameFont: 0,
  },
  Ac = null,
  Aj = 0,
  Au = null,
  AN = 'bVaxy3aWDwcCgyxamdBLZtUR1eD2',
  Ai = 'https://store.gota.io/camlan'
function AW() {
  fP.width = window.innerWidth * A2.resolution
  fP.height = window.innerHeight * A2.resolution
  f0.renderer.resize(fP.width, fP.height)
  f0.stage.position.x = (window.innerWidth * A2.resolution) / 2
  f0.stage.position.y = (window.innerHeight * A2.resolution) / 2
}
function Ax(GC) {
  for (var GQ in Ab) 'u' == GQ.charAt(0) && GC(GQ)
}
function Ap() {
  A8.cShowBorder && fD.serverData.border.enabled
    ? (null != f2 && (f2.parent.removeChild(f2), f2.destroy(), (f2 = null)),
      (f2 = new f3.Graphics()).lineStyle(
        Ab.rBorderSize,
        f3.utils.string2hex(tinycolor(Ab.uiGameBorderColor).toHexString())
      ),
      f2.drawRect(
        fD.serverData.border.left,
        fD.serverData.border.top,
        fD.serverData.border.width,
        fD.serverData.border.height
      ),
      ff.addChild(f2),
      (f2.visible = true))
    : null != f2 && (f2.parent.removeChild(f2), f2.destroy(), (f2 = null))
}
function Ah() {
  document.body.classList.add('hide-captcha-badge')
}
function Av(GC) {
  var GQ, GK
  Ag < GC &&
    ((GK = (GC = performance.now()) - fg),
    (fg = GC),
    (function (GI) {
      var GH,
        Gq,
        GF = Math.min(GI / A8.rAnimationDelay, 1),
        Gs =
          (fD.playerRegistry.renderPlayers(GI),
          !A8.cHideFood && (0.12 < fD.scale || A8.cDisableAutoFoodHiding))
      fG.visible = Gs
      for (GH of fD.foodObjects.values())
        0 < GH.steps && GH.animate(GF), Gs && GH.handleFood()
      for (Gq of fD.bucket.values()) 0 < Gq.steps && Gq.animate(GF), Gq.handle()
      this.isSorted || fD.sortCells()
      var Gy = 0,
        Gz = 0,
        GO = 0
      switch (A2.cameraFocus) {
        case Gi.CENTER:
          var GV,
            Gm = 0
          for (GV of fD.myCells.values())
            (Gy += GV.x), (Gz += GV.y), (GO += GV.size), Gm++
          0 !== Gm && ((fD.centerX_ = Gy / Gm), (fD.centerY_ = Gz / Gm))
          break
        case Gi.MASS:
          var k0,
            k1 = 0
          for (k0 of fD.myCells.values()) {
            var k2 = k0.getMass()
            Gy += k0.x * k2
            Gz += k0.y * k2
            k1 += k2
            GO += k0.size
          }
          k1 && ((fD.centerX_ = Gy / k1), (fD.centerY_ = Gz / k1))
          break
        case Gi.TOGG:
          const myCells = Array.from(fD.myCells.values());
          if(A8.rToggCell < myCells.length) {
              fD.centerX_ = myCells[A8.rToggCell].x;
              fD.centerY_ = myCells[A8.rToggCell].y;
            } else {
              A8.rToggCell = 0;
            }
          k1 && ((fD.centerX_ = Gy / k1), (fD.centerY_ = Gz / k1))
      }
      var k3 = 0 !== GO,
        k3 =
          (A8.cDisableAutoZoom
            ? (fD.scale_base =
                0.2 * Math.max(fP.height / 1080, fP.width / 1920))
            : k3 &&
              (fD.scale_base =
                Math.pow(Math.min(32 / GO, 1), 0.4) *
                Math.max(fP.height / 1080, fP.width / 1920)),
          k3 ? Math.min(GI / A8.rCameraDelay, 1) : GF),
        GI =
          ((fD.centerX += (fD.centerX_ - fD.centerX) * k3),
          (fD.centerY += (fD.centerY_ - fD.centerY) * k3),
          fD.scale_base * fD.mouseZoom)
      if (
        ((fD.scale = (9 * fD.scale + GI) / 10),
        (fA.scale.x = fD.scale),
        (fA.scale.y = fD.scale),
        (fA.pivot.x = fD.centerX),
        (fA.pivot.y = fD.centerY),
        fD.isConnected() &&
          'none' === fu.css('display') &&
          (!fD.mouseFrozen || fD.mouseFrozenButUpdating) &&
          ((k3 =
            fA.pivot.x -
            f0.stage.position.x / fD.scale +
            (fD.mouseRawX * A2.resolution) / fD.scale),
          (GI =
            fA.pivot.y -
            f0.stage.position.y / fD.scale +
            (fD.mouseRawY * A2.resolution) / fD.scale),
            !fD.mouseFrozenButUpdating ?
              fD.sendPacket(new fl.sendMouse(k3, GI)) :
              fD.sendPacket(new fl.sendMouse(fD.freezeX || k3, fD.freezeY || GI))
            ),
        !A8.cHideMinimap)
      ) {
        var k4 = GF
        if (fD.serverData.border.enabled) {
          fo.clearRect(0, 0, fZ.width, fZ.height)
          fo.font = '12px Calibri'
          for (var k5 = 0; k5 < fD.party.length; k5++) {
            var k6 = fD.party[k5]
            k6.state === GB.ALIVE &&
              k6.id != fD.playerId &&
              (ex(fo, k6.name, k6.x, k6.y, 4, k6.mmColor, true),
              (k6.x += (k6.x_ - k6.x) * k4),
              (k6.y += (k6.y_ - k6.y) * k4))
          }
          ex(fo, fD.name, fD.centerX, fD.centerY, 6, '#fefefe', false)
        }
      }
      A8.cShowCoordinates &&
        (fz.minimapCoords.css({ color: Ab.uiForegroundColor }),
        fz.minimapCoords.html(
          'X: '.concat(fD.centerX.toFixed(0), ' Y: ') + fD.centerY.toFixed(0)
        ))
      fD.buffHolder.update()
      f0.renderer.render(f0.stage)
    })(GK),
    ++AJ,
    1000 <= (AY += GC = GK) &&
      (fz.playerFps.html(AJ),
      (AY = AJ = 0),
      (GK = Date.now()),
      0 < fD.serverData.resetType && 0 < fD.serverData.resetTime
        ? (fz.resetInfo.css('display', 'block'),
          (GQ = Math.max(0, Math.floor((fD.serverData.resetTime - GK) / 1000))),
          fz.resetTime.html(GL(GQ)))
        : fz.resetInfo.css('display', 'none'),
      0 < fD.respawnCooldown && fD.respawnCooldown >= GK
        ? (fz.respawnInfo.css('display', 'block'),
          (GQ = Math.max(0, Math.ceil((fD.respawnCooldown - GK) / 1000))),
          fz.respawnCooldown.html(GL(GQ)))
        : fD.respawnCooldown < 0
        ? (fz.respawnInfo.css('display', 'block'),
          fz.respawnCooldown.html('NEVER'))
        : fz.respawnInfo.css('display', 'none')))
  Ag = performance.now()
  requestAnimationFrame(Av)
}
var AB,
  AS,
  AR,
  AM,
  AU,
  AJ = (AY = 0),
  Aw =
    ((AB = {
      m4a: 'audio/mp4',
      oga: 'audio/ogg',
      opus: 'audio/ogg; codecs="opus"',
      caf: 'audio/x-caf; codecs="opus"',
    }),
    (AS = new Audio()),
    (AR = new Set()),
    [
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
      'caf',
    ].forEach(function (GC) {
      AS.canPlayType(AB[GC] || 'audio/' + GC) && AR.add(GC)
    }),
    (AM = (function () {
      'use strict'
      function GC(GQ) {
        _classCallCheck(this, GC)
        this['_instances'] = []
        this.url = GQ
        this.loaded = false
        this.addInstance()
      }
      return (
        _createClass(GC, [
          {
            key: 'destroy',
            value: function () {
              for (var GQ of this['_instances'])
                (GQ.oncanplaythrough = null), (GQ.onended = null)
              this['_instances'] = null
              this.loaded = false
            },
          },
          {
            key: 'addInstance',
            value: function () {
              var GQ = this,
                GK =
                  0 < arguments.length &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                GI = new Audio(this.url)
              GI.oncanplaythrough = function () {
                GQ.loaded = true
                GQ['_instances'].push(GI)
                GI.oncanplaythrough = null
                GI.onended = function () {
                  return (GI.currentTime = 0)
                }
                GK && GI.play()
              }
            },
          },
          {
            key: 'play',
            value: function () {
              for (var GQ of this['_instances'])
                if (GQ.paused) {
                  return void GQ.play()
                }
              this.addInstance(true)
            },
          },
        ]),
        GC
      )
    })()),
    new ((function () {
      'use strict'
      function GC() {
        _classCallCheck(this, GC)
        this['_list'] = new Map()
      }
      return (
        _createClass(GC, [
          {
            key: 'isValidUrl',
            value: function (GQ) {
              return !!(GQ = GQ.match(/\.(\w+)$/)) && AR.has(GQ[1])
            },
          },
          {
            key: 'add',
            value: function (GQ, GK) {
              if (!this.isValidUrl(GK)) {
                return false
              }
              var GI = this['_list'].get(GQ)
              return (
                (null == GI ? void 0 : GI.url) !== GK &&
                (null != GI && GI.destroy(),
                this['_list'].set(GQ, new AM(GK)),
                true)
              )
            },
          },
          {
            key: 'remove',
            value: function (GQ) {
              var GK
              null != (GK = this['_list'].get(GQ)) && GK.destroy()
              this['_list'].delete(GQ)
            },
          },
          {
            key: 'play',
            value: function (GQ) {
              A8.cEnableSounds &&
                null != (GQ = this['_list'].get(GQ)) &&
                GQ.loaded &&
                GQ.play()
            },
          },
        ]),
        GC
      )
    })())())
function Ad() {
  this.socket = null
  this.currentServer = null
  this.currentServerName = null
  this.spectate = false
  this.isSorted = true
  this.name = ''
  this.playerId = 0
  this.playerData = null
  this.bucket = new Map()
  this.foodObjects = new Map()
  this.myCells = new Map()
  this.playerRegistry = new AH()
  this.buffHolder = new eV()
  this.centerX = 0
  this.centerY = 0
  this.freezeX = 0
  this.freezeY = 0
  this.centerX_ = 0
  this.centerY_ = 0
  this.scale = 0.5
  this.scale_ = 0.5
  this.scale_base = 0.5
  this.mouseZoom = 1
  this.offsetX = 0
  this.offsetY = 0
  this.mouseRawX = 0
  this.mouseRawY = 0
  this.mouseX = 0
  this.mouseY = 0
  this.mouseFrozen = false
  this.mouseFrozenButUpdating = false
  this.party = []
  this.partyIds = {}
  this.leaderboard = []
  this.subPanelOverride = false
  this.serverData = {
    hasSentSubPanel: false,
    border: {},
    maxCells: 16,
    autosplits: false,
  }
  this.score = 0
  this.respawnCooldown = 0
  this.customGameMap = null
  this.accountListeners = {}
  this.clearStats()
  setInterval(this.sendPing.bind(this), 30000)
}
function AT(GC, GQ, GK) {
  var GI = 2 < arguments.length && void 0 !== GK && GK,
    GH = document.getElementById(GC)
  GH.checked = GQ
  GI ? eM($(GH)) : (A8[GC] = GQ)
}
function Ar() {
  return new f3.Sprite(fb)
}
Ad.prototype.clearStats = function () {
  this.stats = {
    name: 'An unnamed cell',
    alive: 0,
    eatenFood: 0,
    eatenEject: 0,
    eatenVirus: 0,
    eatenPlayer: 0,
    gainFood: 0,
    gainEject: 0,
    gainVirus: 0,
    gainPlayer: 0,
  }
}
Ad.prototype.play = function () {
  null == fc
    ? this.selfMsg('No server selected!')
    : ((this.name = $('#name-box').val()),
      (this.spectate = false),
      (this.currentServerName = fc.name),
      $('#playerServer').html(this.currentServerName),
      e4(),
      this.isConnected() && this.currentServer == fc.address
        ? this.sendPacket(new fl.setName(this.name))
        : this.connect(fc.address),
      eS(),
      eh(fu)
      // window.Ga('send', 'event', 'Game', 'webMenu', 'Play')
      )
}
Ad.prototype.spec = function () {
  null == fc
    ? this.selfMsg('No server selected!')
    : ((this.spectate = true),
      e4(),
      this.isConnected() && this.currentServer == fc.address
        ? this.sendPacket(new fl.sendSpectate())
        : this.connect(fc.address),
      eS(),
      eh(fu)
      // window.Ga('send', 'event', 'Game', 'webMenu', 'Spectate')
      )
}
Ad.prototype.connect = function (GC) {
  if (null != this.socket) {
    return (this.socket.nextUrl = GC), void this.disconnect(GC)
  }
  this.currentServer = GC
  this.currentServerName = fc.name
  this.selfMsg('Connecting to '.concat(this.currentServerName, '...'))
  1 == fc.ssl
    ? (this.socket = new WebSocket('wss://' + GC))
    : (this.socket = new WebSocket('ws://' + GC))
  this.socket.binaryType = 'arraybuffer'
  var GQ = this
  this.socket.onopen = this.onConnect.bind(this)
  this.socket.onmessage = this.onMessage.bind(this)
  this.socket.onclose = function (GK) {
    GQ.reset()
    GQ.selfMsg(
      'You have been disconnected from the server. Reason: ' +
        ('' === GK.reason ? 'Unknown' : GK.reason)
    )
    null != this.nextUrl && GQ.connect(this.nextUrl)
  }
  this.socket.onerror = function (GK) {
    GQ.reset()
    this.nextUrl = null
    GQ.selfMsg('Error connecting to server... Retrying every second.')
    setTimeout(function () {
      0 == GQ.isConnected() && null == GQ.socket && GQ.connect(GC)
    }, 1000)
  }
  Ah()
}
Ad.prototype.disconnect = function (GC) {
  null != this.socket && this.socket.close()
}
Ad.prototype.clearBuckets = function () {
  for (var GC of this.bucket.values()) GC.onDelete()
  for (var GQ of this.foodObjects.values()) GQ.onDelete()
  this.bucket.clear()
  this.foodObjects.clear()
}
Ad.prototype.reset = function () {
  this.clearBuckets()
  this.myCells.clear()
  this.playerRegistry.clear()
  this.playerId = 0
  this.score = 0
  this.respawnCooldown = 0
  this.customGameMap = null
  this.currentServer = null
  this.clearStats()
  this.clearParty()
  this.buffHolder.clearBuffs()
  this.serverData.hasSentSubPanel = false
  this.serverData.resetType = 0
  this.serverData.autosplits = false
  null != this.socket && (this.socket = null)
  $('#playerId').html(this.playerId)
  this.subPanelOverride && ((this.subPanelOverride = false), eP())
}
Ad.prototype.handleKey = function (GC) {
  if (
    (38 === GC
      ? ((this.mouseZoom *= 1.05),
        (this.mouseZoom =
          5 < fD.mouseZoom ? 5 : this.mouseZoom < 0.1 ? 0.1 : this.mouseZoom))
      : 40 === GC &&
        ((this.mouseZoom *= 0.95),
        (this.mouseZoom =
          5 < fD.mouseZoom ? 5 : this.mouseZoom < 0.1 ? 0.1 : this.mouseZoom)),
    (GC = AG.get(GC)))
  ) {
    for (var GQ of GC)
      switch (GQ) {
        case 'kEjectMass':
          fh || ((fh = true), this.sendPacket(new fl.sendEjectMass(true)))
          break
        case 'kSplit':
          this.sendPacket(new fl.sendKey(17))
          break
        case 'kToggleSpec':
          this.sendPacket(new fl.sendKey(18))
          break
        case 'kDoubleSplit':
          this.sendPacket(new fl.sendKey(17)),
            this.sendPacket(new fl.sendKey(17))
          break
        case 'kTripleSplit':
          for (var GK = 0; GK < 3; GK++) {
            this.sendPacket(new fl.sendKey(17))
          }
          break
        case 'kQuadSplit':
          for (var GI = 0; GI < 4; GI++) {
            this.sendPacket(new fl.sendKey(17))
          }
          break
        case 'kHexaSplit':
          for (var GH = 0; GH < 6; GH++) {
            this.sendPacket(new fl.sendKey(17))
          }
          break
        case 'kFreezeMouse':
          ;(this.mouseFrozen = !this.mouseFrozen), (this.mouseFrozenButUpdating = false)
            this.mouseFrozen
              ? fz.mouseFrozenDiv.css('display', 'block')
              : fz.mouseFrozenDiv.css('display', 'none')
          break
        case 'kContextMenu':
          var Gq,
            GF =
              fA.pivot.x -
              f0.stage.position.x / fD.scale +
              (fD.mouseRawX * A2.resolution) / fD.scale,
            Gs =
              fA.pivot.y -
              f0.stage.position.y / fD.scale +
              (fD.mouseRawY * A2.resolution) / fD.scale
          for (Gq of fD.bucket.values())
            2 === Gq.type &&
              Math.pow(Gq.x - GF, 2) + Math.pow(Gq.y - Gs, 2) <=
                Math.pow(Gq.size, 2) &&
              ei(fD.playerRegistry.get(Gq.playerId).name, Gq.playerId)
          break
        case 'kCycleNames':
          A8.cHideEnemyNames
            ? A8.cHideFriendNames
              ? (A8.cHideOwnName
                  ? (AT('cHideOwnName', false), AT('cHideFriendNames', true))
                  : AT('cHideFriendNames', false),
                AT('cHideEnemyNames', true))
              : (AT('cHideOwnName', false), AT('cHideEnemyNames', false))
            : (AT('cHideOwnName', true),
              AT('cHideFriendNames', true),
              AT('cHideEnemyNames', true)),
            this.playerRegistry.updateNameVisibility()
          break
        case 'kToggCell':
          const nCells = this.myCells.size;
          const nextCell = A8.rToggCell + 1;
          if(!nCells || nextCell >= nCells) { 
              A8.rToggCell = 0;
              return;
          }
          A8.rToggCell = nextCell;
          break
        case 'kFreezeMouseRight':
          ;(this.mouseFrozen = !this.mouseFrozen), (this.mouseFrozenButUpdating = this.mouseFrozen)
            this.mouseFrozen
              ? fz.mouseFrozenDiv.css('display', 'block')
              : fz.mouseFrozenDiv.css('display', 'none')
            this.mouseFrozenButUpdating && (this.freezeX = Array.from(this.myCells.values())[A8.rToggCell].x), (this.freezeY = Array.from(this.myCells.values())[A8.rToggCell].y), (setTimeout(() => { (this.freezeX = 2147483647) , (this.freezeY = Array.from(this.myCells.values())[A8.rToggCell].y) }, A8.rFreezeDelay))
          break
        case 'kFreezeMouseLeft':
          ;(this.mouseFrozen = !this.mouseFrozen), (this.mouseFrozenButUpdating = this.mouseFrozen)
            this.mouseFrozen
              ? fz.mouseFrozenDiv.css('display', 'block')
              : fz.mouseFrozenDiv.css('display', 'none')
            this.mouseFrozenButUpdating && (this.freezeX = Array.from(this.myCells.values())[A8.rToggCell].x), (this.freezeY = Array.from(this.myCells.values())[A8.rToggCell].y), (setTimeout(() => { (this.freezeX = -2147483647) , (this.freezeY = Array.from(this.myCells.values())[A8.rToggCell].y) }, A8.rFreezeDelay))
            break
        case 'kFreezeMouseUp':
          ;(this.mouseFrozen = !this.mouseFrozen), (this.mouseFrozenButUpdating = this.mouseFrozen)
            this.mouseFrozen
              ? fz.mouseFrozenDiv.css('display', 'block')
              : fz.mouseFrozenDiv.css('display', 'none')
            this.mouseFrozenButUpdating && (this.freezeX = Array.from(this.myCells.values())[A8.rToggCell].x), (this.freezeY = Array.from(this.myCells.values())[A8.rToggCell].y), (setTimeout(() => { (this.freezeX = Array.from(this.myCells.values())[A8.rToggCell].x), (this.freezeY = -2147483647) }, A8.rFreezeDelay))
            break
        case 'kFreezeMouseDown':
          ;(this.mouseFrozen = !this.mouseFrozen), (this.mouseFrozenButUpdating = this.mouseFrozen)
            this.mouseFrozen
              ? fz.mouseFrozenDiv.css('display', 'block')
              : fz.mouseFrozenDiv.css('display', 'none')
            this.mouseFrozenButUpdating && (this.freezeX = Array.from(this.myCells.values())[A8.rToggCell].x), (this.freezeY = Array.from(this.myCells.values())[A8.rToggCell].y), (setTimeout(() => { (this.freezeX = Array.from(this.myCells.values())[A8.rToggCell].x), (this.freezeY = 2147483647) }, A8.rFreezeDelay))
            break
        case 'kCycleMasses':
          A8.cHideEnemyMasses
            ? A8.cHideFriendMasses
              ? (A8.cHideOwnMass
                  ? (AT('cHideOwnMass', false), AT('cHideFriendMasses', true))
                  : AT('cHideFriendMasses', false),
                AT('cHideEnemyMasses', true))
              : (AT('cHideOwnMass', false), AT('cHideEnemyMasses', false))
            : (AT('cHideOwnMass', true),
              AT('cHideFriendMasses', true),
              AT('cHideEnemyMasses', true)),
            this.playerRegistry.updateMassVisibility()
          break
        case 'kCycleSkins':
          A8.cHideEnemySkins
            ? A8.cHideFriendSkins
              ? (A8.cHideOwnSkin
                  ? (AT('cHideOwnSkin', false), AT('cHideFriendSkins', true))
                  : AT('cHideFriendSkins', false),
                AT('cHideEnemySkins', true))
              : (AT('cHideOwnSkin', false), AT('cHideEnemySkins', false))
            : (AT('cHideOwnSkin', true),
              AT('cHideFriendSkins', true),
              AT('cHideEnemySkins', true)),
            this.playerRegistry.updateSkinVisibility()
          break
        case 'kHideOwnName':
          AT('cHideOwnName', !A8.cHideOwnName, true)
          break
        case 'kHideFriendNames':
          AT('cHideFriendNames', !A8.cHideFriendNames, true)
          break
        case 'kHideEnemyNames':
          AT('cHideEnemyNames', !A8.cHideEnemyNames, true)
          break
        case 'kHideOwnMass':
          AT('cHideOwnMass', !A8.cHideOwnMass, true)
          break
        case 'kHideFriendMasses':
          AT('cHideFriendMasses', !A8.cHideFriendMasses, true)
          break
        case 'kHideEnemyMasses':
          AT('cHideEnemyMasses', !A8.cHideEnemyMasses, true)
          break
        case 'kHideOwnSkin':
          AT('cHideOwnSkin', !A8.cHideOwnSkin, true)
          break
        case 'kHideFriendSkins':
          AT('cHideFriendSkins', !A8.cHideFriendSkins, true)
          break
        case 'kHideEnemySkins':
          AT('cHideEnemySkins', !A8.cHideEnemySkins, true)
      }
  }
}
Ad.prototype.isConnected = function () {
  return null != this.socket && 1 == this.socket.readyState
}
Ad.prototype.sendPacket = function (GC) {
  this.isConnected() && this.socket.send(GC)
}
Ad.prototype.onConnect = function () {
  fH = []
  fF.execute('6LcycFwUAAAAANrun52k-J1_eNnF9zeLvgfJZSY3', {
    action: 'login',
  }).then(function (GC) {
    fD.sendPacket(new fl.sendCaptcha(GC))
    Ah()
    fD.spectate ? fD.spec() : fD.play()
  })
  this.sendPacket(new fl.connectionStart())
  this.sendPing()
  this.sendOptions()
  null !== firebase.auth().currentUser
    ? firebase
        .auth()
        .currentUser.getIdToken(true)
        .then(function (GC) {
          return fD.sendPacket(new fl.sendAuthToken(GC))
        })
        .catch(function (GC) {
          return AV(GC, true)
        })
    : this.spectate
    ? this.sendPacket(new fl.sendSpectate())
    : this.sendPacket(new fl.setName(this.name))
}
Ad.prototype.sendPing = function () {
  this.isConnected() && ((fY = +new Date()), this.sendPacket(new fl.sendPing()))
}
Ad.prototype.sendOptions = function () {
  this.isConnected() && this.sendPacket(new fl.sendOptions())
}
Ad.prototype.selfMsg = function (GC) {
  eY(
    Gv.SYSTEM,
    $(
      '<td><span style="color: #DDDD00">[System] '.concat(
        1 < arguments.length && void 0 !== arguments[1] && arguments[1]
          ? GC
          : eW(GC),
        '</span></td>'
      )
    )[0]
  )
}
Ad.prototype.selfMsgWithJoinCode = function (GC, GQ) {
  var GK = document.createElement('td'),
    GI = document.createElement('span'),
    GC =
      ((GI.style.color = '#DDDD00'),
      (GI.innerHTML = '[System] ' + eW(GC)),
      GK.appendChild(GI),
      document.createElement('span'))
  GC.style.color = '#DDDD00'
  GC.innerHTML = GQ
  GC.style.pointerEvents = 'all'
  GC.style.userSelect = 'all'
  GK.appendChild(GC)
  eY(Gv.SYSTEM, GK)
}
Ad.prototype.clearParty = function (GC) {
  this.party = []
  this.partyIds = {}
  this.partyLeader = -1
  this.partyIndex = -1
  $('#party-panel').css('display', 'none')
  'block' == fU.css('display') && this.handleCustomGameLeave()
  ;(null == this.partyCode && null == fS) ||
    ((this.partyCode = fS = null), window.history.pushState('page', '', ' '))
}
Ad.prototype.isPartyLeader = function () {
  return this.partyLeader == this.playerId
}
Ad.prototype.getServerMaxCells = function () {
  return this.serverData.maxCells + this.buffHolder.bonusMaxCells
}
Ad.prototype.onEject = function () {
  Aw.play('eject')
}
Ad.prototype.onSplit = function () {
  Aw.play('split')
}
Ad.prototype.onDie = function () {
  A8.cAutoRespawn
    ? 'none' === $('#main').css('display') && this.play()
    : ('block' !== fx.css('display') && ep(fu),
      aiptag.cmd.display.push(function () {
        return aipDisplayTag.refresh('GOT_gota-io_336x280')
      }))
}
Ad.prototype.onMessage = function (GC) {
  var GQ = new DataView(GC.data)
  switch (((GC = GQ.getUint8(0)), (GQ.offset = 1), GC)) {
    case 2:
      this.handleUpdate(GQ)
      break
    case 10:
      this.handlePosition(GQ)
      break
    case 21:
      this.handleStats(GQ)
      break
    case 22:
      this.showSubPanel(GQ)
      break
    case 23:
      this.updateSubPanel()
      break
    case 40:
      this.handleInvite(GQ)
      break
    case 41:
      this.handlePartyInfo(GQ)
      break
    case 45:
      this.handlePartyData(GQ)
      break
    case 43:
      this.handlePartyJoinCode(GQ)
      break
    case 49:
      this.handleLeaderboard(GQ)
      break
    case 50:
      this.handleLeaderboardCustom(GQ)
      break
    case 63:
      this.handleRespawnCooldown(GQ)
      break
    case 64:
      this.handleMapData(GQ)
      break
    case 65:
      this.handleClearNodes()
      break
    case 66:
      this.handleUpdateBorder(GQ)
      break
    case 68:
      this.handleResetTime(GQ)
      break
    case 69:
      this.handleSpectators(GQ)
      break
    case 70:
      this.handleSystemMsg(GQ)
      break
    case 71:
      this.handlePing()
      break
    case 72:
      this.handleChat(GQ)
      break
    case 73:
      this.handleWhisper(GQ)
      break
    case 80:
      this.handleShowScrimmageMenu()
      break
    case 81:
      this.handleQueueData(GQ)
      break
    case 82:
      this.handleQueueLeave(GQ)
      break
    case 83:
      this.handleMatchState(GQ)
      break
    case 90:
      this.handleScrimmageData(GQ)
      break
    case 91:
      this.handleCustomGameShow(GQ)
      break
    case 92:
      this.handleCustomGameUpdate(GQ)
      break
    case 93:
      this.handleCustomGameLeave()
      break
    case 94:
      this.handleShowCustomGameLobbies(GQ)
      break
    case 100:
      this.handleAddBuff(GQ)
      break
    case 101:
      this.handleRemoveBuff(GQ)
      break
    case 102:
      this.handleClearBuffs(GQ)
      break
    case 103:
      this.handleAuthenticated(GQ)
      break
    case 104:
      this.handleProfile(GQ)
  }
}
Ad.prototype.handlePlayerRemove = function (GC) {
  var GQ = GC.getUint16(GC.offset, true)
  for (GC.offset += 2; 0 < GQ; --GQ) {
    this.playerRegistry.removeVisible(GC.getUint16(GC.offset, true))
    GC.offset += 2
  }
}
Ad.prototype.handleCellRemove = function (GC) {
  var GQ = GC.getUint16(GC.offset, true)
  for (GC.offset += 2; 0 < GQ; --GQ) {
    var GK = GC.getUint16(GC.offset, true),
      GI = ((GC.offset += 2), this.bucket.get(GK) || this.foodObjects.get(GK))
    null != GI &&
      (GI.type === Gu.FOOD
        ? this.foodObjects.delete(GK)
        : (this.bucket.delete(GK),
          GI.playerId === this.playerId &&
            (this.myCells.delete(GK), 0 === this.myCells.size && this.onDie())),
      GI.onDelete())
  }
}
Ad.prototype.normaliseSkin = function (GC) {
  return GC && !GC.endsWith('.gif') ? GC : null
}
Ad.prototype.handlePlayerUpdate = function (GC) {
  for (;;) {
    var GQ = GC.getUint16(GC.offset, true)
    if (((GC.offset += 2), 0 === GQ)) {
      break
    }
    var GK = this.playerRegistry.get(GQ)
    null == GK && ((GK = new Aq(GQ)), this.playerRegistry.add(GK))
    GK.cellColor =
      (GC.getUint8(GC.offset++) << 16) +
      (GC.getUint8(GC.offset++) << 8) +
      GC.getUint8(GC.offset++)
    GK.name = AO(GC)
    GQ = this.normaliseSkin(Az(GC))
    GK.flags = GC.getUint8(GC.offset++)
    2 == (2 & GK.flags)
      ? (GK.lockedName = {
          nameColor:
            '#' +
            GE(GC.getUint8(GC.offset++)) +
            GE(GC.getUint8(GC.offset++)) +
            GE(GC.getUint8(GC.offset++)),
          lowerName: 64 <= GC.getUint8(GC.offset++),
          nameFont: GC.getUint8(GC.offset++),
          skin: GQ,
        })
      : ((GK.skin = GQ), (GK.lockedName = null))
    GK.update()
    this.playerRegistry.addVisible(GK)
  }
}
Ad.prototype.handlePlayerCellAdd = function (GC, GQ) {
  for (;;) {
    var GK = GC.getUint16(GC.offset, true)
    if (((GC.offset += 2), 0 === GK)) {
      break
    }
    var GI = GK === this.playerId
    for (GI && GQ && this.onSplit(); ; ) {
      var GH = GC.getUint16(GC.offset, true)
      if (((GC.offset += 2), 0 === GH)) {
        break
      }
      var Gq = new AQ(GH, Gu.PLAYER, this)
      Gq.setX(GC.getInt16(GC.offset, true))
      Gq.setY(GC.getInt16(GC.offset + 2, true))
      Gq.setSize(GC.getUint16(GC.offset + 4, true))
      GC.offset += 6
      Gq.playerId = GK
      GI && this.myCells.set(GH, Gq)
    }
  }
}
Ad.prototype.handleCellAdd = function (GC, GQ) {
  for (
    var GK = !fh && 400 < Date.now() - fv,
      GI = null == (GH = this.playerData) ? void 0 : GH.cellColor;
    ;

  ) {
    var GH,
      Gq = GC.getUint8(GC.offset++)
    if (Gq === Gu.PLAYER) {
      this.handlePlayerCellAdd(GC, GQ)
    } else {
      if (Gq === Gu.NONE) {
        break
      }
      for (;;) {
        var GF = GC.getUint16(GC.offset, true)
        if (((GC.offset += 2), 0 === GF)) {
          break
        }
        var Gs = new AQ(GF, Gq, this)
        if (
          (Gs.setX(GC.getInt16(GC.offset, true)),
          Gs.setY(GC.getInt16(GC.offset + 2, true)),
          (GC.offset += 4),
          Gq === Gu.FOOD)
        ) {
          Gs.color = G4(Gs.id)
        } else {
          switch (
            (Gs.setSize(GC.getUint16(GC.offset, true)), (GC.offset += 2), Gq)
          ) {
            case Gu.EJECTED_MASS:
              ;(Gs.parsedColor =
                '#' +
                GE(GC.getUint8(GC.offset)) +
                GE(GC.getUint8(GC.offset + 1)) +
                GE(GC.getUint8(GC.offset + 2))),
                (Gs.color =
                  (GC.getUint8(GC.offset++) << 16) +
                  (GC.getUint8(GC.offset++) << 8) +
                  GC.getUint8(GC.offset++)),
                (Gs.skin = GC.getUint8(GC.offset++) - 1),
                GK || Gs.color !== GI || (this.onEject(), (GK = true))
              break
            case Gu.POWERUP:
              Gs.buff = GC.getUint8(GC.offset++)
          }
        }
      }
    }
  }
}
Ad.prototype.handleCellUpdate = function (GC) {
  for (;;) {
    var GQ = GC.getUint8(GC.offset++)
    if (GQ === Gu.NONE) {
      break
    }
    for (;;) {
      var GK = GC.getUint16(GC.offset, true)
      if (((GC.offset += 2), 0 === GK)) {
        break
      }
      var GI = (GQ === Gu.FOOD ? this.foodObjects : this.bucket).get(GK)
      ;(GI = null == GI ? new AQ(GK, GQ, this) : GI).updateX(
        GC.getInt16(GC.offset, true)
      )
      GI.updateY(GC.getInt16(GC.offset + 2, true))
      GC.offset += 4
      ;(GQ !== Gu.PLAYER && GQ !== Gu.VIRUS && GQ !== Gu.MOTHERCELL) ||
        ((GI.size_ = GC.getUint16(GC.offset, true)), (GC.offset += 2))
      GI.steps = 30
    }
  }
}
Ad.prototype.handleUpdate = function (GC) {
  var GQ = 0 < this.myCells.size
  this.handlePlayerRemove(GC)
  this.handleCellRemove(GC)
  this.handlePlayerUpdate(GC)
  this.handleCellAdd(GC, GQ)
  this.handleCellUpdate(GC)
  this.isSorted = false
}
Ad.prototype.handlePosition = function (GC) {
  this.centerX_ = GC.getFloat32(GC.offset, true)
  GC.offset += 4
  this.centerY_ = GC.getFloat32(GC.offset, true)
  GC.offset += 4
  A8.cDisableAutoZoom || (this.scale_base = GC.getFloat32(GC.offset, true))
}
Ad.prototype.handleRespawnCooldown = function (GC) {
  this.respawnCooldown = GC.getFloat64(GC.offset, true)
}
Ad.prototype.handleMapData = function (GC) {
  this.playerId = GC.getUint16(GC.offset, true)
  GC.offset += 3
  this.handleUpdateBorder(GC)
  this.serverData.maxCells = GC.getUint16(GC.offset, true)
  GC.offset += 2
  for (var GQ = GC; 0 !== GQ.getUint8(GQ.offset++); ) {}
  this.serverData.autosplits = !!GC.getUint8(GC.offset++)
  $('#playerId').html(fD.playerId)
  this.updateCellCounter(true)
  null != fS && fD.sendPacket(new fl.sendPartyJoin(fS))
  fx.css('display', 'none')
  $('#scrimmage-btn-leave').css('display', 'none')
}
Ad.prototype.handleUpdateBorder = function (GC) {
  this.serverData.border = {}
  this.serverData.border.left = GC.getInt16(GC.offset, true)
  this.serverData.border.top = GC.getInt16(GC.offset + 2, true)
  this.serverData.border.right = GC.getInt16(GC.offset + 4, true)
  this.serverData.border.bottom = GC.getInt16(GC.offset + 6, true)
  GC.offset += 8
  this.serverData.border.width =
    this.serverData.border.right - this.serverData.border.left
  this.serverData.border.height =
    this.serverData.border.bottom - this.serverData.border.top
  this.serverData.border.enabled =
    0 != this.serverData.border.width && 0 != this.serverData.border.height
  Ap()
}
Ad.prototype.handleResetTime = function (GC) {
  var GQ = GC.getUint8(GC.offset++),
    GC = GC.getFloat64(GC.offset, true)
  this.serverData.resetType = GQ
  this.serverData.resetTime = GC
}
Ad.prototype.handleSpectators = function (GC) {
  this.spectators = GC.getUint16(GC.offset, true)
  this.updateSpectators()
}
Ad.prototype.handleClearNodes = function (GC) {
  this.clearBuckets()
}
Ad.prototype.handleLeaderboard = function (GC) {
  this.leaderboard.length = 0
  var GQ = GC.getUint32(GC.offset, true)
  GC.offset += 4
  for (var GK = 1; GK <= GQ; GK++) {
    var GI = GC.getUint16(GC.offset, true),
      GH = ((GC.offset += 2), AO(GC) || 'An unnamed cell'),
      Gq =
        GI === this.playerId
          ? Ab.uiLeaderboardHighlightSelf
          : null != this.partyIds[GI]
          ? Ab.uiLeaderboardHighlightParty
          : Ab.uiForegroundColor
    this.leaderboard.push({
      playerId: GI,
      name: GH,
      text: GK + '. ' + GH,
      fillStyle: Gq,
    })
  }
  this.drawLeaderboard()
}
Ad.prototype.handleLeaderboardCustom = function (GC) {
  this.leaderboard.length = 0
  var GQ = GC.getUint16(GC.offset, true),
    GK = GC.getUint8(GC.offset + 2)
  GC.offset += 4
  for (var GI = 0; GI < GQ; GI++) {
    this.leaderboard.push({
      text: Az(GC),
      fillStyle:
        GI === GK ? Ab.uiLeaderboardHighlightSelf : Ab.uiForegroundColor,
    })
  }
  this.drawLeaderboard()
}
Ad.prototype.handlePing = function () {
  var GC = +new Date() - fY
  A8.cColoredPing
    ? $('#playerPing').css({ color: Ab.uiForegroundColor })
    : GC < 100
    ? $('#playerPing').css({ color: Ab.uiGameColorSuccess })
    : GC < 200
    ? $('#playerPing').css({ color: Ab.uiGameColorWarning })
    : $('#playerPing').css({ color: Ab.uiGameColorError })
  $('#playerPing').html(GC + 'ms')
}
Ad.prototype.handleChat = function (GC) {
  var GQ = GC.getUint8(GC.offset++),
    GK = 'rgb('
      .concat(GC.getUint8(GC.offset++), ',')
      .concat(GC.getUint8(GC.offset++), ',')
      .concat(GC.getUint8(GC.offset++), ')'),
    GI = GC.getUint8(GC.offset++),
    GH = GC.getUint16(GC.offset, true)
  if (((GC.offset += 2), !fH.includes(GH))) {
    var Gq,
      GF = eW(AO(GC)),
      Gs = (GC.offset++, eW(AO(GC)) || 'An unnamed cell'),
      GC = eW(AO(GC)),
      Gy = Gv.ALL
    switch (GQ) {
      case 1:
        ;(Gq = 'Party'), (Gy = Gv.PARTY)
        break
      case 2:
        ;(Gq = 'Admin'), (Gy = Gv.ADMIN)
        break
      default:
        Gq = 'All'
    }
    GQ = A8.cHideLockedNames && GH !== this.playerId
    0 < GF.length && (!GQ || 'Gold' !== GF) && (Gq += ' - ' + GF)
    var GF = document.createElement('td'),
      Gz = document.createElement('span'),
      Gz =
        ((Gz.innerHTML = '['.concat(Gq, '] ')),
        GF.appendChild(Gz),
        document.createElement('span')),
      Gs =
        ((Gz.innerText = Gs),
        (Gz.dataset.playerId = GH),
        (Gz.style.color = GK),
        (Gz.className = 'chat-name'),
        GF.appendChild(Gz),
        document.createElement('span'))
    0 === GI || GQ
      ? ((Gs.innerHTML = ': ' + eq(GC)), (Gs.style.color = Ga[0]))
      : (((GH = document.createElement('span')).innerHTML = ': '),
        GF.appendChild(GH),
        (Gs.innerHTML = eq(GC)),
        (Gs.style.color = Ga[GI]))
    GF.appendChild(Gs)
    eY(Gy, GF)
  }
}
Ad.prototype.handleWhisper = function (GC) {
  var GQ,
    GK,
    GI,
    GH,
    Gq,
    GF,
    Gs = eW(AO(GC)) || 'An unnamed cell',
    Gy = GC.getUint16(GC.offset, true)
  GC.offset += 2
  fH.includes(Gy) ||
    ((GF = 'rgb('
      .concat(GC.getUint8(GC.offset++), ',')
      .concat(GC.getUint8(GC.offset++), ',')
      .concat(GC.getUint8(GC.offset++), ')')),
    (GQ = eW(AO(GC)) || 'An unnamed cell'),
    (GK = GC.getUint16(GC.offset, true)),
    (GC.offset += 2),
    (GI = 'rgb('
      .concat(GC.getUint8(GC.offset++), ',')
      .concat(GC.getUint8(GC.offset++), ',')
      .concat(GC.getUint8(GC.offset++), ')')),
    (GC = eW(AO(GC))),
    (GH = document.createElement('td')),
    ((Gq = document.createElement('span')).innerText = Gs),
    (Gq.dataset.playerId = Gy),
    (Gq.style.color = GF),
    (Gq.className = 'chat-name'),
    GH.appendChild(Gq),
    ((Gs = document.createElement('span')).innerHTML = ' > '),
    GH.appendChild(Gs),
    ((Gy = document.createElement('span')).innerText = GQ),
    (Gy.dataset.playerId = GK),
    (Gy.style.color = GI),
    (Gy.className = 'chat-name'),
    GH.appendChild(Gy),
    ((GF = document.createElement('span')).innerHTML = ': ' + eq(GC)),
    GH.appendChild(GF),
    eY(Gv.WHISPER, GH))
}
Ad.prototype.handleSystemMsg = function (GC) {
  GC = AO(GC)
  this.selfMsg(GC)
}
Ad.prototype.handleAuthenticated = function (GC) {
  GC.getUint8(1) === Gh.FAILURE &&
    this.selfMsg('Invalid authentication token! Please logout and try again!')
  this.sendPacket(
    this.spectate ? new fl.sendSpectate() : new fl.setName(this.name)
  )
}
Ad.prototype.handleProfile = function (GC) {
  e2(JSON.parse(Az(GC)))
}
Ad.prototype.handleInvite = function (GC) {
  A8.cAutoDecline
    ? fD.sendPacket(new fl.sendInviteResponse(false))
    : ((GC = eW(AO(GC))),
      (document.getElementById('popup-party-text').innerText =
        GC + ' has invited you to a party.'),
      ep($('#popup-party')))
}
Ad.prototype.handlePartyInfo = function (GC) {
  var GQ = {},
    GK = [],
    GI = -1,
    GH = GC.getUint16(GC.offset, true)
  GC.offset += 2
  for (var Gq, GF, Gs = 0; Gs < GH; Gs++) {
    Gz = 1 === GC.getUint8(GC.offset++)
    GC.offset += 2
    var Gy = {
        id: GC.getUint16(GC.offset, true),
        name: AO(GC) || 'An unnamed cell',
        x: 0,
        y: 0,
        x_: 0,
        y_: 0,
        score: 0,
        cache: -1,
        team: 0,
        state: GB.UNKNOWN,
      }
      GQ[Gy.id] = Gs
    Gz ? ((GI = Gy.id), (Gy.isLeader = true)) : (Gy.isLeader = false)
    null != this.partyIds[Gy.id]
      ? ((Gz = this.party[this.partyIds[Gy.id]]),
        (Gy.x = Gz.x),
        (Gy.y = Gz.y),
        (Gy.x_ = Gz.x_),
        (Gy.y_ = Gz.y_),
        (Gy.state = Gz.state),
        (Gy.score = Gz.score),
        (Gy.mmColor = Gz.mmColor))
      : ((Gy.mmColor = ((Gz = Gy.id), Gk[Gz % Gk.length])),
        (Gz = fD.playerRegistry.get(Gy.id)) && Gz.onPartyUpdate(true))
    GK.push(Gy)
  }
  for (Gq in this.partyIds)
    null == GQ[Gq] &&
      (GF = fD.playerRegistry.get(+Gq)) &&
      GF.onPartyUpdate(false)
  this.party = GK
  this.partyIds = GQ
  this.partyLeader != GI &&
    ((this.partyLeader = GI),
    'block' == fU.css('display') && ScrimmageHelper.checkLeader())
  0 < GH ? this.drawParty() : this.clearParty()
}
Ad.prototype.handlePartyData = function (GC) {
  var GQ = GC.getUint16(GC.offset, true)
  if (((GC.offset += 2), GQ == this.party.length)) {
    for (var GK = 0; GK < GQ; GK++) {
      var GI = this.party[GK]
      GI.state = GC.getUint8(GC.offset++)
      GI.state === GB.ALIVE &&
        ((GI.x_ = GC.getInt16(GC.offset, true)),
        (GI.y_ = GC.getInt16(GC.offset + 2, true)),
        (GI.score = GC.getInt32(GC.offset + 4, true)),
        (GC.offset += 8))
    }
    this.drawParty()
  }
}
Ad.prototype.handlePartyJoinCode = function (GC) {
  var GQ = Az(GC)
  this.partyCode = Az(GC) || null
  this.partyCode
    ? ((GC = '/join ' + this.partyCode),
      this.selfMsgWithJoinCode(GQ, GC),
      $('#popup-party-code-content input').val(GC),
      $('#popup-party-code').show(),
      window.history.pushState(
        'page',
        '',
        '#'.concat(this.currentServerName, '&') + this.partyCode
      ))
    : (this.selfMsg(GQ), window.history.pushState('page', '', ' '))
}
Ad.prototype.handleStats = function (GC) {
  var GQ = GC.getUint16(GC.offset, true),
    GC =
      ((GC.offset += 2),
      (this.stats.name = AO(GC) || 'An unnamed cell'),
      (this.stats.alive += GC.getUint32(GC.offset, true)),
      (GC.offset += 4),
      (this.stats.eatenFood += GC.getUint32(GC.offset, true)),
      (GC.offset += 4),
      (this.stats.eatenEject += GC.getUint32(GC.offset, true)),
      (GC.offset += 4),
      (this.stats.eatenVirus += GC.getUint32(GC.offset, true)),
      (GC.offset += 4),
      (this.stats.eatenPlayer += GC.getUint32(GC.offset, true)),
      (GC.offset += 4),
      (this.stats.gainFood += GC.getUint32(GC.offset, true)),
      (GC.offset += 4),
      (this.stats.gainEject += GC.getUint32(GC.offset, true)),
      (GC.offset += 4),
      (this.stats.gainVirus += GC.getUint32(GC.offset, true)),
      (GC.offset += 4),
      (this.stats.gainPlayer += GC.getUint32(GC.offset, true)),
      (GC.offset += 4),
      $('#main-stats'))
  GC.empty()
  GC.append(
    '<span>Name: '.concat(this.stats.name, ' (').concat(GQ, ')</span><br>')
  )
  GC.append('<span>Alive: '.concat(GL(this.stats.alive), '</span><br>'))
  GC.append(
    '<span>Food eaten: '
      .concat(this.stats.eatenFood, ' (')
      .concat(this.stats.gainFood, ')</span><br>')
  )
  GC.append(
    '<span>Ejected mass eaten: '
      .concat(this.stats.eatenEject, ' (')
      .concat(this.stats.gainEject, ')</span><br>')
  )
  GC.append(
    '<span>Viruses eaten: '
      .concat(this.stats.eatenVirus, ' (')
      .concat(this.stats.gainVirus, ')</span><br>')
  )
  GC.append(
    '<span>Player cells eaten: '
      .concat(this.stats.eatenPlayer, ' (')
      .concat(this.stats.gainPlayer, ')</span><br>')
  )
}
Ad.prototype.showSubPanel = function (GC) {
  GC = 1 === GC.getUint8(GC.offset++)
  this.subPanelOverride = GC
  eP()
  GC &&
    (this.serverData.hasSentSubPanel ||
      (eb(), (this.serverData.hasSentSubPanel = true)),
    Ah())
}
Ad.prototype.updateSubPanel = function () {
  fC && eZ(fC.uid)
}
Ad.prototype.updateSpectators = function () {
  fz.spectatorCount.html(this.spectators)
}
Ad.prototype.handleAddBuff = function (GC) {
  var GQ = GC.getUint8(GC.offset++),
    GK = GC.getUint8(GC.offset++),
    GI = GC.getFloat64(GC.offset, true)
  GC.offset += 8
  this.buffHolder.onAddBuff(GQ, GK, GI)
}
Ad.prototype.handleRemoveBuff = function (GC) {
  GC = GC.getUint8(GC.offset++)
  this.buffHolder.onRemoveBuff(GC)
}
Ad.prototype.handleClearBuffs = function (GC) {
  GC = 1 == GC.getUint8(GC.offset++)
  this.buffHolder.clearBuffs(GC)
}
Ad.prototype.sortCells = function () {
  fk.children.sort(function (GC, GQ) {
    return GC.parentCell.size - GQ.parentCell.size
  })
  this.updateScorePanel()
  this.isSorted = true
}
Ad.prototype.updateScorePanel = function () {
  var GC,
    GQ = 0
  for (GC of this.myCells.values()) GQ += GC.getMass()
  GQ > this.score &&
    ((this.score = GQ), fz.playerScore.html(this.score.toLocaleString()))
  this.updateCellCounter()
}
Ad.prototype.updateCellCounter = function (GC) {
  var GQ = this.myCells.size
  ;(fz.playerCellCount === GQ && !GC) ||
    ((fz.playerCellCount = GQ),
    fz.playerCells.html(GQ + '/' + this.getServerMaxCells()),
    A8.cColoredCellCount
      ? fz.playerCells.css({ color: Ab.uiForegroundColor })
      : 1 <= (GC = GQ / this.getServerMaxCells())
      ? fz.playerCells.css({ color: Ab.uiGameColorError })
      : 0.5 <= GC
      ? fz.playerCells.css({ color: Ab.uiGameColorWarning })
      : fz.playerCells.css({ color: Ab.uiGameColorSuccess }))
}
Ad.prototype.drawLeaderboard = function () {
  var GC =
      0 < arguments.length && void 0 !== arguments[0]
        ? arguments[0]
        : 'Leaderboard',
    GQ = document.getElementById('leaderboard-canvas'),
    GK = GQ.getContext('2d'),
    GI = this.leaderboard.length
  if ((Al(GC), (GQ.width = 200), (GQ.height = 20 * GI + 4), 0 !== GI)) {
    GK.font = '16px Calibri'
    for (var GH = 0; GH < GI; GH++) {
      var Gq = this.leaderboard[GH],
        GF = Gq.fillStyle,
        Gq = Gq.text
      GK.fillStyle = GF
      GK.fillText(Gq, 10, 20 * (GH + 1))
    }
  }
}
Ad.prototype.drawParty = function () {
  if (0 != this.party.length) {
    A8.cHidePartyPanel
      ? fz.partyPanel.css('display', 'none')
      : 'none' == fz.partyPanel.css('display') &&
        'none' != fi.css('display') &&
        fz.partyPanel.css('display', 'block')
    for (
      var GC = document.getElementById('party-canvas'),
        GQ = GC.getContext('2d'),
        GK = ((GQ.font = '16px Calibri'), 0),
        GI = 0,
        GH = 0,
        Gq = 0;
      Gq < this.party.length;
      Gq++
    ) {
      var GF = this.party[Gq],
        Gs =
          (-1 == GF.cache &&
            (GF.cache = GQ.measureText(Gq + 1 + '. ' + GF.name).width),
          GF.cache > GK && (GK = GF.cache),
          GF.state === GB.ALIVE || GF.state === GB.UNKNOWN
            ? ((GF.scoreText = GF.score.toLocaleString()), (GH += GF.score))
            : GF.state === GB.DEAD
            ? (GF.scoreText = 'DEAD')
            : GF.state === GB.SPECTATE && (GF.scoreText = 'SPEC'),
          GQ.measureText(GF.scoreText).width)
      GI < Gs && (GI = Gs)
    }
    var Gy = GH.toLocaleString(),
      GI = Math.max(GI, GQ.measureText(Gy).width)
    GC.width = 15 + GK + 50 + GI
    GC.height = 20 * this.party.length + 5 + (1 < this.party.length ? 20 : 0)
    GQ.font = '16px Calibri'
    for (var Gz = 20, GO = 5 + GK + 50, Gq = 0; Gq < this.party.length; Gq++) {
      GF = this.party[Gq]
      GQ.fillStyle = GF.isLeader ? Ab.uiPartyLeaderColor : Ab.uiForegroundColor
      GQ.fillText(Gq + 1 + '. ' + GF.name, 5, Gz)
      GQ.fillText(GF.scoreText, GO, Gz)
      Gz += 20
    }
    1 < this.party.length &&
      ((GQ.fillStyle = Ab.uiForegroundColor),
      GQ.fillText('Total:', 5, Gz),
      GQ.fillText(Gy, GO, Gz))
  }
}
Ad.prototype.handleShowScrimmageMenu = function () {
  fu.stop(true, false)
  fu.css('display', 'none')
  fx.css('display', 'block')
  $('#scrimmage-btn-leave').css('display', 'none')
  fD.serverData.border.enabled = false
}
Ad.prototype.handleQueueData = function (GC) {
  var GQ = ['Mode: ' + Az(GC), 'Time: ' + GL(GC.getUint32(GC.offset, true))]
  GC.offset += 4
  GC.offset < GC.byteLength &&
    GQ.push('Queued players: ' + GC.getUint8(GC.offset))
  this.leaderboard = GQ.map(function (GK) {
    return {
      fillStyle: Ab.uiForegroundColor,
      text: GK,
    }
  })
  this.drawLeaderboard('Queue')
}
Ad.prototype.handleQueueLeave = function (GC) {
  this.leaderboard.length = 0
  this.drawLeaderboard('Queue')
  this.selfMsg('You have left the queue for ['.concat(Az(GC), ']'))
}
Ad.prototype.handleMatchState = function (GC) {
  0 === (GC = 1 === GC.byteLength ? 0 : GC.getUint8(GC.offset++))
    ? (this.selfMsg('A match has been found. Good luck and have fun!'),
      fs ||
        ('Notification' in window &&
          'granted' === Notification.permission &&
          new Notification('Your match has started.', {
            icon: 'https://gota.io/assets/images/favicon.png',
          })))
    : 1 === GC && $('#scrimmage-btn-leave').css('display', 'block')
}
Ad.prototype.handleScrimmageData = function (GC) {
  for (
    var GQ = GC.getUint8(GC.offset++),
      GK = $('#scrimmage-mode-select'),
      GI = $('#scrimmage-mode-info'),
      GH = parseInt(GK.val()),
      Gq = (GK.empty(), GI.empty(), {});
    0 < GQ;

  ) {
    var GF = GC.getUint8(GC.offset++),
      Gs = Az(GC),
      Gy = Az(GC),
      Gz = document.createElement('option')
    Gz.innerHTML = Gs
    Gz.value = GF
    GK.append(Gz)
    ;(Gz = document.createElement('div')).innerHTML = Gy
    Gz.id = 'scrimmage-info-' + GF
    Gz.style.display = 'none'
    GI.append(Gz)
    Gq[GF] = true
    GQ--
  }
  if (
    ((fR = {
      modes: {},
      sizes: {},
      maps: [],
    }),
    GC.byteLength - 1 > GC.offset)
  ) {
    for (GQ = GC.getUint8(GC.offset++); 0 < GQ; ) {
      GF = GC.getUint8(GC.offset++)
      Gs = Az(GC)
      fR.modes[GF] = {
        id: GF,
        name: Gs,
      }
      GQ--
    }
    for (GQ = GC.getUint8(GC.offset++); 0 < GQ; ) {
      GF = GC.getUint8(GC.offset++)
      Gs = Az(GC)
      fR.sizes[GF] = {
        id: GF,
        name: Gs,
      }
      GQ--
    }
    for (GQ = GC.getUint8(GC.offset++); 0 < GQ; ) {
      for (
        var GO = {
            name: (Gs = Az(GC)),
            startmass: 0,
            teams: 0,
            modes: [],
            sizes: [],
          },
          GV = GC.getUint8(GC.offset++);
        0 < GV;

      ) {
        GO.modes.push(GC.getUint8(GC.offset++))
        GV--
      }
      for (GV = GC.getUint8(GC.offset++); 0 < GV; ) {
        GO.sizes.push(GC.getUint8(GC.offset++))
        GV--
      }
      GO.startmass = GC.getUint16(GC.offset, true)
      GC.offset += 2
      GO.respawnDelay = GC.getInt16(GC.offset, true)
      GC.offset += 2
      GO.teams = GC.getUint8(GC.offset++)
      fR.maps.push(GO)
      GQ--
    }
  }
  for (
    $('#scrimmage-custom-btn-container').css(
      'display',
      0 == fR.maps.length ? 'none' : 'block'
    ),
      $('#scrimmage-map').empty(),
      GV = 0;
    GV < fR.maps.length;
    GV++
  ) {
    $('#scrimmage-map').append(
      "<option value='".concat(GV, "'>").concat(fR.maps[GV].name, '</option>')
    )
  }
  null != Gq[GH] ? GK.val(GH) : GK.prop('selectedIndex', 0)
  GK.trigger('change')
}
Ad.prototype.handleCustomGameUpdate = function (GC) {
  switch (GC.getUint8(GC.offset++)) {
    case Gx.MAP:
      ScrimmageHelper.updateMap(GC.getUint8(GC.offset++))
      break
    case Gx.MODE:
      ScrimmageHelper.updateMode(GC.getUint8(GC.offset++))
      break
    case Gx.SIZE:
      ScrimmageHelper.updateSize(GC.getUint8(GC.offset++))
      break
    case Gx.STARTMASS:
      ScrimmageHelper.updateStartMass(GC.getUint16(GC.offset, true)),
        (GC.offset += 2)
      break
    case Gx.LOCK:
      ScrimmageHelper.updateLock(1 === GC.getUint8(GC.offset++))
      break
    case Gx.PLAYER_UPDATE:
      var GQ = GC.getUint8(GC.offset++),
        GK = GC.getUint8(GC.offset++)
      ;(fD.party[GQ].team = GK), ScrimmageHelper.updatePlayerById(GQ)
      break
    case Gx.PLAYER_LIST:
      for (var GI = GC.getUint8(GC.offset++), GQ = 0; 0 < GI; ) {
        fD.party[GQ].team = GC.getUint8(GC.offset++)
        GI--
        GQ++
      }
      ScrimmageHelper.updatePlayers()
      break
    case Gx.VIRUS_DENSITY:
      ScrimmageHelper.updateVirusDensity(GC.getUint16(GC.offset, true)),
        (GC.offset += 2)
      break
    case Gx.RESPAWN_DELAY:
      ScrimmageHelper.updateRespawnDelay(GC.getInt16(GC.offset, true)),
        (GC.offset += 2)
      break
    case Gx.AUTOSPLIT:
      ScrimmageHelper.updateAutoSplit(1 === GC.getUint8(GC.offset++))
      break
    case Gx.PUBLIC:
      ScrimmageHelper.updatePublic(1 === GC.getUint8(GC.offset++))
      break
    case Gx.PASSWORD:
      ScrimmageHelper.updatePassword(1 === GC.getUint8(GC.offset++))
      break
    case Gx.NAME:
      ScrimmageHelper.updateName(AO(GC))
  }
}
Ad.prototype.handleCustomGameShow = function (GC) {
  $('.scrimmage-full').css('display', 'none')
  $('#scrimmage-custom').css('display', 'block')
  ScrimmageHelper.updateName(AO(GC))
  ScrimmageHelper.updateMap(GC.getUint8(GC.offset++))
  ScrimmageHelper.updateMode(GC.getUint8(GC.offset++))
  ScrimmageHelper.updateSize(GC.getUint8(GC.offset++))
  ScrimmageHelper.updateStartMass(GC.getUint16(GC.offset, true))
  GC.offset += 2
  ScrimmageHelper.updateVirusDensity(GC.getUint16(GC.offset, true))
  GC.offset += 2
  ScrimmageHelper.updateRespawnDelay(GC.getInt16(GC.offset, true))
  GC.offset += 2
  ScrimmageHelper.updateAutoSplit(1 === GC.getUint8(GC.offset++))
  ScrimmageHelper.updateLock(1 === GC.getUint8(GC.offset++))
  ScrimmageHelper.updatePublic(1 === GC.getUint8(GC.offset++))
  ScrimmageHelper.updatePassword(1 === GC.getUint8(GC.offset++))
  for (var GQ = GC.getUint8(GC.offset++), GK = 0; GK < GQ; GK++) {
    fD.party[GK].team = GC.getUint8(GC.offset++)
  }
  ScrimmageHelper.updatePlayers()
  ScrimmageHelper.checkLeader()
}
Ad.prototype.handleCustomGameLeave = function () {
  $('.scrimmage-full').css('display', 'none')
  $('#scrimmage-menu').css('display', 'block')
}
Ad.prototype.handleShowCustomGameLobbies = function (GC) {
  $('.scrimmage-full').css('display', 'none')
  $('#scrimmage-lobbies').css('display', 'block')
  fM = {}
  var GQ = $('#scrimmage-lobbies-tbody')
  for (GQ.empty(); ; ) {
    var GK = GC.getUint32(GC.offset, true)
    if (((GC.offset += 4), 0 === GK)) {
      break
    }
    var GI = {
      id: GK,
      name: AO(GC),
      leaderId: GC.getUint32(GC.offset),
      leaderName: AO(GC) || 'An unnamed cell',
      map: GC.getUint8(GC.offset++),
      mode: GC.getUint8(GC.offset++),
      size: GC.getUint16(GC.offset, true),
      maxSize: GC.getUint16(GC.offset, true),
      hasPasscode: 1 === GC.getUint8(GC.offset++),
    }
    GC.offset += 4
    GC.offset += 2
    GC.offset += 2
    GK = (fM[GI.id] = GI).hasPasscode
      ? "<div class='scrimmage-lock'></div>"
      : ''
    GQ.append(
      "<tr partyId='"
        .concat(GI.id, "'><td><span>")
        .concat(GK)
        .concat(eW(GI.name), '</span></td><td><span>')
        .concat(eW(GI.leaderName), '</span></td><td><span>')
        .concat(fR.maps[GI.map].name, '</span></td><td><span>')
        .concat(fR.modes[GI.mode].name, '</span></td><td><span>')
        .concat(GI.size, '/')
        .concat(GI.maxSize, '</span></td></tr>')
    )
  }
  $('#scrimmage-lobbies-tbody tr').on('click', function () {
    $('.custom-game-selected').removeClass('custom-game-selected')
    fj = $(this).attr('partyId')
    $(this).addClass('custom-game-selected')
  })
}
Ad.prototype.updateTextOutlines = function () {
  this.playerRegistry.updateTextOutlines()
  for (var GC of this.bucket.values()) {
    GC = GC.massSprite
    null != GC && (GC.fontName = A2.textOutlineSize)
  }
}
ScrimmageHelper = {
  updateName: function (GC) {
    $('#scrimmage-name').text(GC)
  },
  updateMap: function (GC) {
    $("#scrimmage-map option[value='".concat(GC, "']")).prop('selected', true)
    var GQ = fR.maps[GC]
    $('#scrimmage-mapmode').empty()
    for (var GK = 0; GK < GQ.modes.length; GK++) {
      var GI = fR.modes[GQ.modes[GK]]
      $('#scrimmage-mapmode').append(
        "<option value='".concat(GK, "'>").concat(GI.name, '</option>')
      )
    }
    $('#scrimmage-mapsize').empty()
    for (var GH = 0; GH < GQ.sizes.length; GH++) {
      var Gq = fR.sizes[GQ.sizes[GH]]
      $('#scrimmage-mapsize').append(
        "<option value='".concat(GH, "'>").concat(Gq.name, '</option>')
      )
    }
    ScrimmageHelper.updateMode(0)
    ScrimmageHelper.updateSize(0)
    ScrimmageHelper.updateStartMass(GQ.startmass)
    $('#scrimmage-startmass').attr('placeholder', GQ.startmass)
    ScrimmageHelper.updateRespawnDelay(GQ.respawnDelay)
    $('#scrimmage-map').attr('data', GC)
    fD.customGameMap = GQ
  },
  updateMode: function (GC) {
    $("#scrimmage-mapmode option[value='".concat(GC, "']")).prop(
      'selected',
      true
    )
    $('#scrimmage-mapmode').attr('data', GC)
  },
  updateSize: function (GC) {
    $("#scrimmage-mapsize option[value='".concat(GC, "']")).prop(
      'selected',
      true
    )
    $('#scrimmage-mapsize').attr('data', GC)
  },
  updateStartMass: function (GC) {
    $('#scrimmage-startmass').val(GC)
    $('#scrimmage-startmass').attr('data', GC)
  },
  updateVirusDensity: function (GC) {
    $('#scrimmage-virusDensity').val(GC)
    $('#scrimmage-virusDensity').attr('data', GC)
  },
  updateRespawnDelay: function (GC) {
    $('#scrimmage-respawnDelay').val(GC)
    $('#scrimmage-respawnDelay').attr('data', GC)
  },
  updateAutoSplit: function (GC) {
    $('#scrimmage-autoSplit').prop('checked', GC)
  },
  updatePublic: function (GC) {
    $('#scrimmage-public').prop('checked', GC)
  },
  updatePassword: function (GC) {
    $('#scrimmage-password').prop('checked', GC)
  },
  updateLock: function (GC) {
    $('#scrimmage-lockteams').prop('checked', GC)
    ScrimmageHelper.checkLock()
  },
  checkLock: function () {
    $('#scrimmage-lockteams').prop('checked') && !fD.isPartyLeader()
      ? $('#cgp-' + fD.partyIndex).attr('disabled', 'disabled')
      : $('#cgp-' + fD.partyIndex).removeAttr('disabled')
  },
  checkLeader: function () {
    fD.isPartyLeader()
      ? $('.custom-game').removeAttr('disabled')
      : ($('.custom-game').attr('disabled', 'disabled'),
        ScrimmageHelper.checkLock())
  },
  updatePlayerById: function (GC) {
    var GQ = fD.party[GC]
    $('#cgp-'.concat(GC, " option[value='").concat(GQ.team, "']")).prop(
      'selected',
      true
    )
    $('#cgp-name-' + GC).text(GQ.name)
    $('#cgp-name-' + GC).css('color', GS[GQ.team])
  },
  updatePlayers: function () {
    $('#scrimmage-custom-players').empty()
    for (var GC, GQ = 0; GQ < fD.party.length; GQ++) {
      !(function (GK) {
        ;(GC = fD.party[GK]).id === fD.playerId && (fD.partyIndex = GK)
        $('#scrimmage-custom-players').append(
          "<tr><td><span id='cgp-name-"
            .concat(GK, "'>")
            .concat(GC.name, '</span></td>')
            .concat(
              ScrimmageHelper.getTeamOptions(GK, fD.customGameMap.teams),
              '</tr>'
            )
        )
        $('#cgp-'.concat(GK, " option[value='").concat(GC.team, "']")).prop(
          'selected',
          true
        )
        $('#cgp-name-' + GK).css('color', GS[GC.team])
        $('#cgp-' + GK).on('change', function () {
          var GI = parseInt($(this).attr('id').match('\\d+')[0]),
            GH = $(this).find('option:selected').val()
          $(
            '#cgp-'
              .concat(GK, " option[value='")
              .concat($(this).attr('data'), "']")
          ).prop('selected', true)
          fD.sendPacket(new fl.sendCustomGameUpdate(Gx.PLAYER_UPDATE, GI, GH))
        })
      })(GQ)
    }
    ScrimmageHelper.checkLeader()
  },
  getTeamOptions: function (GC, GQ) {
    var GK = ''
    if (null != GQ && 1 < GQ) {
      for (
        var GK = "<td><select class='custom-game' id='cgp-".concat(
            GC,
            "'><option value='0'>Spectator</option>"
          ),
          GI = 1;
        GI <= GQ;
        GI++
      ) {
        GK += "<option value='"
          .concat(GI, "' class='t")
          .concat(GI, "'>")
          .concat(Gp[GI], '</option>')
      }
      GK += '</select></td>'
    }
    return GK
  },
}
for (AU of Object.values(f5))
  f3.BitmapFont.from(
    AU.toString(),
    Object.assign({}, f6, { strokeThickness: AU }),
    {
      chars: [['0', '9'], '.', 'K', 'M', 'B'],
    }
  )
function AC(GC) {
  return 0 === GC
    ? 16711680
    : ((GC =
        5 <= (GC /= 60)
          ? [255, 0, 255 * (6 - GC)]
          : GC <= 1
          ? [255, 255 * GC, 0]
          : GC <= 2
          ? [255 * (2 - GC), 255, 0]
          : GC <= 3
          ? [0, 255, 255 * (GC - 2)]
          : GC <= 4
          ? [0, 255 * (4 - GC), 255]
          : [255 * (GC - 4), 0, 255])[0] <<
        16) +
        (GC[1] << 8) +
        (GC[2] << 0)
}
var AQ = (function () {
    'use strict'
    function GC(GQ, GK, GI) {
      _classCallCheck(this, GC)
      this.id = GQ
      this.player = GI
      this.type = GK
      this.nameCache = null
      this.massSprite = null
      this.skin = null
      this.playerId = 0
      this.color = null
      this.x = 0
      this.y = 0
      this.x_ = 0
      this.y_ = 0
      this.size = 0
      this.size_ = 0
      this.steps = 0
      this.prevMass = 0
      this.needsPixiUpdate = true
      ;(6 === GK ? GI.foodObjects : GI.bucket).set(GQ, this)
    }
    return (
      _createClass(GC, [
        {
          key: 'setX',
          value: function (GQ) {
            this.x_ = GQ
            this.x = GQ
          },
        },
        {
          key: 'setY',
          value: function (GQ) {
            this.y_ = GQ
            this.y = GQ
          },
        },
        {
          key: 'updateX',
          value: function (GQ) {
            this.x_ = GQ
          },
        },
        {
          key: 'updateY',
          value: function (GQ) {
            this.y_ = GQ
          },
        },
        {
          key: 'setSize',
          value: function (GQ) {
            this.size_ = GQ
            this.size = GQ
          },
        },
        {
          key: 'getMass',
          value: function () {
            return ((this.size_ * this.size_) / 25) >> 0
          },
        },
        {
          key: 'stringifyMass',
          value: function (GQ) {
            return 0 === A2.massType || GQ < 1000
              ? GQ.toString()
              : GQ < 1000000
              ? (Math.floor(GQ / 100) / 10).toFixed(1) + 'K'
              : GQ < 1000000000
              ? (Math.floor(GQ / 100000) / 10).toFixed(1) + 'M'
              : (Math.floor(GQ / 100000000) / 10).toFixed(1) + 'B'
          },
        },
        {
          key: 'animate',
          value: function (GQ) {
            this.x += (this.x_ - this.x) * GQ
            this.y += (this.y_ - this.y) * GQ
            this.size += (this.size_ - this.size) * GQ
            this.steps--
          },
        },
        {
          key: 'updateMassSprite',
          value: function () {
            var GQ = this.getMass()
            this.prevMass !== GQ &&
              (null == this.massSprite
                ? ((this.massSprite = new f3.BitmapText(
                    this.stringifyMass(GQ),
                    { fontName: A2.textOutlineSize }
                  )),
                  this.massSprite.anchor.set(0.5),
                  this.container.addChild(this.massSprite))
                : (this.massSprite.text = this.stringifyMass(GQ)),
              (this.prevMass = GQ))
          },
        },
        {
          key: 'handleFood',
          value: function () {
            this.needsPixiUpdate &&
              (this.sprite ||
                ((this.sprite = Ar()),
                (this.sprite.parentCell = this).sprite.scale.set(0.0234375),
                fG.addChild(this.sprite)),
              (this.sprite.tint =
                A8.cThemeEnabled && 0 < AE.length ? G5(this.id) : this.color),
              (this.needsPixiUpdate = false))
            this.sprite.position.set(this.x, this.y)
          },
        },
        {
          key: 'handle',
          value: function () {
            switch (this.type) {
              case 0:
                break
              case 1:
                this.needsPixiUpdate &&
                  (this.sprite ||
                    ((this.sprite = new f3.Sprite()),
                    this.sprite.anchor.set(0.5),
                    (this.sprite.parentCell = this),
                    fk.addChild(this.sprite)),
                  (this.sprite.texture =
                    0 <= this.skin &&
                    (!A8.cHideLockedNames ||
                      (null == (GQ = fD.playerData) ? void 0 : GQ.cellColor) ===
                        this.color) &&
                    this.skin < GX.length
                      ? GX[this.skin]
                      : fb),
                  (this.sprite.width = this.sprite.height = 2 * this.size),
                  (this.sprite.tint = this.color),
                  (this.needsPixiUpdate = false)),
                  this.sprite.position.set(this.x, this.y)
                break
              case 2:
                var GQ = fD.playerRegistry.get(this.playerId),
                  GK =
                    (this.needsPixiUpdate &&
                      ((this.container = new f3.Container()),
                      (GK = new f3.Sprite(GQ.texture)),
                      this.container.addChild(GK),
                      (this.container.parentCell = this),
                      fk.addChild(this.container),
                      (this.needsPixiUpdate = false)),
                    A8.cDisableAutoNameHiding || 15 <= this.size * fD.scale)
                GK && !GQ.hideName
                  ? (null == this.nameSprite &&
                      null !== GQ.nameCache &&
                      ((this.nameSprite = new f3.Sprite(GQ.nameCache.texture)),
                      this.container.addChild(this.nameSprite)),
                    this.nameSprite &&
                      ((this.nameSprite.y = GQ.lowerName ? 128 : 0),
                      (this.nameSprite.visible = true)))
                  : this.nameSprite && (this.nameSprite.visible = false),
                  GK && !GQ.hideMass
                    ? (this.updateMassSprite(),
                      (this.massSprite.y =
                        null != this.nameSprite && this.nameSprite.visible
                          ? this.nameSprite.y + 0.9 * this.nameSprite.height
                          : 0),
                      (this.massSprite.visible = true))
                    : this.massSprite && (this.massSprite.visible = false),
                  4 == (4 & GQ.flags)
                    ? this.debuffSprite ||
                      ((this.debuffSprite = new f3.Sprite(eF)),
                      (this.debuffSprite.width = this.debuffSprite.height =
                        704),
                      this.container.addChild(this.debuffSprite))
                    : this.debuffSprite &&
                      (this.debuffSprite.destroy(), (this.debuffSprite = null)),
                  1 == (1 & GQ.flags)
                    ? this.shieldSprite ||
                      ((this.shieldSprite = new f3.Sprite(es)),
                      (this.shieldSprite.width = this.shieldSprite.height =
                        704),
                      this.container.addChild(this.shieldSprite))
                    : this.shieldSprite &&
                      (this.shieldSprite.destroy(), (this.shieldSprite = null)),
                      A2.cameraFocus === Gi.TOGG &&
                      Array.from(this.player.myCells.values())[A8.rToggCell] &&
                      Array.from(this.player.myCells.values())[A8.rToggCell].id === this.id ?
                        this.highlightSprite ||
                        ((this.highlightSprite = new f3.Sprite(es)),
                        (this.highlightSprite.width = this.highlightSprite.height = 550),
                        this.container.addChild(this.highlightSprite)) :
                        this.highlightSprite && (this.highlightSprite.destroy(), (this.highlightSprite = null)),
                  this.container.scale.set(this.size / f4),
                  this.container.position.set(this.x, this.y)
                break
              case 3:
                this.needsPixiUpdate &&
                  (this.sprite ||
                    ((this.sprite = new f3.Sprite()),
                    this.sprite.anchor.set(0.5),
                    (this.sprite.parentCell = this),
                    fk.addChild(this.sprite)),
                  (this.sprite.texture = AX.aCustomSpike || fX),
                  (this.needsPixiUpdate = false)),
                  (this.sprite.width = this.sprite.height = 2 * this.size),
                  this.sprite.position.set(this.x, this.y)
                break
              case 4:
                this.needsPixiUpdate &&
                  (this.sprite ||
                    ((this.sprite = new f3.Sprite()),
                    this.sprite.anchor.set(0.5),
                    (this.sprite.parentCell = this),
                    fk.addChild(this.sprite)),
                  (this.sprite.texture = AX.aCustomMother || fE),
                  fm.enabled &&
                    fm.motherCustomEnabled &&
                    !A8.cDisableEventSkins &&
                    !AX.aCustomMother &&
                    fm.motherCustom(this),
                  (this.needsPixiUpdate = false)),
                  !AX.aCustomMother &&
                    fm.enabled &&
                    (this.sprite.texture =
                      100 <= this.size && !A8.cDisableEventSkins ? fL : fE),
                  (this.sprite.width = this.sprite.height = 2 * this.size),
                  this.sprite.position.set(this.x, this.y)
                break
              case 5:
                this.needsPixiUpdate &&
                  ((this.sprite = new f3.Sprite(ez[this.buff].texture)),
                  (this.sprite.width = this.sprite.height = 2 * this.size),
                  (this.sprite.parentCell = this),
                  fk.addChild(this.sprite),
                  (this.needsPixiUpdate = false)),
                  this.sprite.position.set(this.x, this.y)
            }
          },
        },
        {
          key: 'onDelete',
          value: function () {
            2 === this.type
              ? null != this.container &&
                ((this.container.parentCell = null),
                this.container.destroy({ children: true }),
                (this.container = null))
              : null != this.sprite &&
                ((this.sprite.parentCell = null),
                this.sprite.destroy({ children: true }),
                (this.sprite = null))
          },
        },
      ]),
      GC
    )
  })(),
  AK = _createClass(function GC() {
    'use strict'
    var GQ = this
    _classCallCheck(this, GC)
    this.texture = null
    this.loaded = false
    this.promise = new Promise(function (GK) {
      GQ.resolve = GK
    })
  }),
  AI = new ((function () {
    'use strict'
    function GQ() {
      var GK = this
      _classCallCheck(this, GQ)
      this.cache = new Map()
      window
        .fetch('https://dl.dropboxusercontent.com/s/efof68kuhxhhf1x/modded3.js')
        .then(function (GI) {
          return GI.blob()
        })
        .then(function (GI) {
          GK.worker = new Worker(URL.createObjectURL(GI))
          GK.worker.onmessage = GK.onSkinLoaded.bind(GK)
        })
    }
    return (
      _createClass(GQ, [
        {
          key: 'onSkinLoaded',
          value: function (GK) {
            var GK = GK.data,
              GI = GK.url,
              GK = GK.bitmap,
              GI = this.cache.get(GI)
            GK && (GI.texture = f3.Texture.from(GK))
            GI.loaded = true
            GI.resolve(GI.texture)
          },
        },
        {
          key: 'loadSkin',
          value: function (GK) {
            var GI = this.cache.get(GK)
            if (GI) {
              if (GI.loaded) {
                return GI.texture
              }
            } else {
              GI = new AK()
              this.cache.set(GK, GI)
              this.worker.postMessage(GK)
            }
            return GI.promise
          },
        },
      ]),
      GQ
    )
  })())(),
  AH = (function () {
    'use strict'
    function GQ() {
      _classCallCheck(this, GQ)
      this.players = new Map()
      this.visiblePlayers = new Set()
      setInterval(this.strip.bind(this), 1800000)
    }
    return (
      _createClass(GQ, [
        {
          key: 'friends',
          get: function () {
            var GK,
              GI = []
            for (GK of this.players.values()) GK.isFriend && GI.push(GK)
            return GI
          },
        },
        {
          key: 'enemies',
          get: function () {
            var GK,
              GI = []
            for (GK of this.players.values())
              GK.isSelf || GK.isFriend || GI.push(GK)
            return GI
          },
        },
        {
          key: 'add',
          value: function (GK) {
            this.players.set(GK.id, GK)
          },
        },
        {
          key: 'remove',
          value: function (GK) {
            GK.isSelf && (fD.playerData = null)
            GK.onDelete()
            this.players.delete(GK.id)
          },
        },
        {
          key: 'addVisible',
          value: function (GK) {
            this.visiblePlayers.add(GK)
          },
        },
        {
          key: 'removeVisible',
          value: function (GK) {
            this.visiblePlayers.delete(this.players.get(GK))
          },
        },
        {
          key: 'clear',
          value: function () {
            this.visiblePlayers.clear()
            for (var GK of this.players.values()) this.remove(GK)
          },
        },
        {
          key: 'strip',
          value: function () {
            for (var GK of this.players.values())
              GK.isSelf || this.visiblePlayers.has(GK) || this.remove(GK)
          },
        },
        {
          key: 'get',
          value: function (GK) {
            return this.players.get(GK)
          },
        },
        {
          key: 'updateTextOutlines',
          value: function () {
            for (var GK of this.players.values())
              GK.nameCache && 0 === GK.nameFont && (GK.nameDirty = true)
          },
        },
        {
          key: 'updateNameVisibility',
          value: function () {
            for (var GK of this.players.values()) GK.updateNameVisibility()
          },
        },
        {
          key: 'updateMassVisibility',
          value: function () {
            for (var GK of this.players.values()) GK.updateMassVisibility()
          },
        },
        {
          key: 'updateSkinVisibility',
          value: function () {
            for (var GK of this.players.values()) GK.updateSkinVisibility()
          },
        },
        {
          key: 'updateTextureMipmaps',
          value: function () {
            for (var GK of this.players.values()) GK.updateTextureMipmap()
          },
        },
        {
          key: 'updateLockedNames',
          value: function () {
            for (var GK of this.players.values())
              GK.updateLockedNameVisibility()
          },
        },
        {
          key: 'loadSkins',
          value: function () {
            for (var GK of this.players.values()) GK.skinDirty = true
          },
        },
        {
          key: 'renderPlayers',
          value: function (GK) {
            for (var GI of this.visiblePlayers) GI.render(GK)
          },
        },
      ]),
      GQ
    )
  })(),
  Aq = (function () {
    'use strict'
    function GQ(GK) {
      _classCallCheck(this, GQ)
      this.id = GK
      this.destroyed = false
      this.name = ''
      this.prevName = ''
      this.nameFont = 0
      this.prevNameFont = 0
      this.hideName = false
      this.hideMass = false
      this.skin = null
      this.prevSkin = null
      this.skinSprite = new f3.Sprite(f3.Texture.EMPTY)
      this.cellColor = null
      this.prevCellColor = null
      this.nameColor = '#fff'
      this.prevNameColor = '#fff'
      this.skinDirty = false
      this.cellDirty = false
      this.nameDirty = false
      this.rainbowNameHue = -1
      this.rainbowCellHue = -1
      this['_lockedName'] = null
      this.flags = 0
      this.lowerName = false
      this.nameCache = null
      this.texture = f3.RenderTexture.create({
        width: 512,
        height: 512,
      })
      this.texture.defaultAnchor = f7
      this.updateTextureMipmap(false)
      this.cellSprite = Ar()
      this.cellSprite.position.set(f4)
      this.cellContainer = new f3.Container()
      this.cellContainer.addChild(this.cellSprite, this.skinSprite)
      fD.playerId === this.id
        ? ((this.isSelf = true),
          (this.isFriend = false),
          (fD.playerData = this).onRainbow())
        : null != fD.partyIds[this.id]
        ? ((this.isSelf = false), (this.isFriend = true))
        : ((this.isSelf = false), (this.isFriend = false))
      this.updateVisibility()
    }
    return (
      _createClass(GQ, [
        {
          key: 'updateLockedNameVisibility',
          value: function () {
            null != this.lockedName &&
              (this.onLockedNameUpdate(), this.update())
          },
        },
        {
          key: 'hideLockedName',
          value: function () {
            this.nameColor = '#fff'
            this.lowerName = false
            this.nameFont = 0
          },
        },
        {
          key: 'onLockedNameUpdate',
          value: function () {
            A8.cHideLockedNames && !this.isSelf
              ? (this.hideLockedName(), (this.skin = null))
              : Object.assign(this, this.lockedName)
          },
        },
        {
          key: 'lockedName',
          get: function () {
            return this['_lockedName']
          },
          set: function (GK) {
            null == GK && null != this['_lockedName']
              ? ((this['_lockedName'] = GK), this.hideLockedName())
              : null != GK &&
                ((this['_lockedName'] = GK), this.onLockedNameUpdate())
          },
        },
        {
          key: 'updateVisibility',
          value: function () {
            this.updateNameVisibility()
            this.updateSkinVisibility()
            this.updateMassVisibility()
          },
        },
        {
          key: 'renderCell',
          value: function () {
            this.cellDirty &&
              ((this.cellSprite.tint = this.cellColor),
              this.renderTexture(),
              (this.cellDirty = false))
          },
        },
        {
          key: 'renderName',
          value: function () {
            this.nameDirty && (this.updateNameCache(), (this.nameDirty = false))
          },
        },
        {
          key: 'renderRainbow',
          value: function (GK) {
            var GI
            ;-1 !== this.rainbowNameHue
              ? ((GI = GK / A4),
                (this.rainbowNameHue = (this.rainbowNameHue + 360 * GI) % 360),
                this.updateNameCache(
                  'hsl('.concat(this.rainbowNameHue, ', 100%, 50%)')
                ))
              : this.renderName()
            ;-1 !== this.rainbowCellHue
              ? ((GI = GK / A5),
                (this.rainbowCellHue = (this.rainbowCellHue + 360 * GI) % 360),
                (this.cellSprite.tint = AC(this.rainbowCellHue)),
                this.renderTexture())
              : this.renderCell()
          },
        },
        {
          key: 'render',
          value: function (GK) {
            this.skinDirty && (this.loadSkin(), (this.skinDirty = false))
            this.isSelf
              ? this.renderRainbow(GK)
              : (this.renderCell(), this.renderName())
          },
        },
        {
          key: 'renderTexture',
          value: function () {
            f0.renderer.render(this.cellContainer, this.texture)
          },
        },
        {
          key: 'destroyNameCache',
          value: function () {
            this.nameCache &&
              (this.nameCache.destroy(), (this.nameCache = null))
          },
        },
        {
          key: 'updateNameCache',
          value: function () {
            var GK,
              GI =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : this.nameColor
            0 === this.name.length
              ? this.destroyNameCache()
              : ((GK = GR[this.nameFont] || GR[0]),
                null == this.nameCache
                  ? ((this.nameCache = new f3.Text(
                      this.name,
                      Object.assign({}, GK, {
                        fill: GI,
                        strokeThickness:
                          0 === this.nameFont ? A2.textOutlineSize : 9,
                      })
                    )),
                    this.nameCache.texture.defaultAnchor.set(0.5))
                  : ((this.nameCache.text = this.name),
                    Object.assign(this.nameCache.style, GK, {
                      fill: GI,
                      strokeThickness:
                        0 === this.nameFont ? A2.textOutlineSize : 9,
                    })),
                this.nameCache.updateText(true))
          },
        },
        {
          key: 'updateNameVisibility',
          value: function () {
            var GK = this.isSelf
              ? A8.cHideOwnName
              : this.isFriend
              ? A8.cHideFriendNames
              : A8.cHideEnemyNames
            this.hideName !== GK &&
              ((this.hideName = GK), (this.nameDirty = true))
          },
        },
        {
          key: 'updateSkinVisibility',
          value: function () {
            var GK = this.isSelf
              ? !A8.cHideOwnSkin
              : this.isFriend
              ? !A8.cHideFriendSkins
              : !A8.cHideEnemySkins
            this.skinSprite.visible !== GK &&
              ((this.skinSprite.visible = GK) &&
                this.skin &&
                (this.skinDirty = true),
              (this.cellDirty = true))
          },
        },
        {
          key: 'updateMassVisibility',
          value: function () {
            this.isSelf
              ? (this.hideMass = A8.cHideOwnMass)
              : this.isFriend
              ? (this.hideMass = A8.cHideFriendMasses)
              : (this.hideMass =
                  A8.cHideEnemyMasses || !fD.serverData.autosplits)
          },
        },
        {
          key: 'updateTextureMipmap',
          value: function () {
            var GK =
              !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0]
            this.texture.baseTexture.mipmap = A8.cSmoothCells
              ? f3.MIPMAP_MODES.ON
              : f3.MIPMAP_MODES.OFF
            GK && this.texture.baseTexture.update()
          },
        },
        {
          key: 'update',
          value: function () {
            this.skin !== this.prevSkin &&
              ((this.skinDirty = true), (this.prevSkin = this.skin))
            this.cellColor !== this.prevCellColor &&
              ((this.cellDirty = true), (this.prevCellColor = this.cellColor))
            ;(this.name === this.prevName &&
              this.nameColor === this.prevNameColor &&
              this.nameFont === this.prevNameFont) ||
              ((this.nameDirty = true),
              (this.prevName = this.name),
              (this.prevNameColor = this.nameColor),
              (this.prevNameFont = this.nameFont))
          },
        },
        {
          key: 'onRainbow',
          value: function () {
            this.onRainbowName()
            this.onRainbowCell()
          },
        },
        {
          key: 'onRainbowName',
          value: function () {
            this.nameDirty = true
            this.rainbowNameHue = A8.spRainbowName ? 0 : -1
          },
        },
        {
          key: 'onRainbowCell',
          value: function () {
            A8.spRainbowCell ||
              this.cellSprite.tint === this.cellColor ||
              (this.cellDirty = true)
            this.rainbowCellHue = A8.spRainbowCell ? 180 : -1
          },
        },
        {
          key: 'setSkinTexture',
          value: function (GK) {
            this.skinSprite.texture !== GK &&
              ((this.skinSprite.texture = GK), (this.cellDirty = true))
          },
        },
        {
          key: 'removeSkinTexture',
          value: function () {
            this.setSkinTexture(f3.Texture.EMPTY)
          },
        },
        {
          key: 'loadSkin',
          value: function () {
            var GK,
              GI,
              GH = this
            this.skinSprite.visible &&
              (this.removeSkinTexture(),
              null != (GK = this.skin) &&
                ((GI = AI.loadSkin(GK)) instanceof Promise
                  ? GI.then(function (Gq) {
                      GH.destroyed || GH.skin !== GK || GH.setSkinTexture(Gq)
                    })
                  : null != GI && this.setSkinTexture(GI)))
          },
        },
        {
          key: 'onPartyUpdate',
          value: function (GK) {
            this.isSelf || ((this.isFriend = GK), this.updateVisibility())
          },
        },
        {
          key: 'onDelete',
          value: function () {
            this.nameCache && this.nameCache.destroy()
            this.texture.destroy(true)
            this.cellContainer.destroy({ children: true })
            this.destroyed = true
          },
        },
      ]),
      GQ
    )
  })()
function AF() {}
function As(GQ, GK, GI) {
  for (var GH = 0; GH < GI.length; GH++) {
    GK.setUint8(GQ, GI.charCodeAt(GH))
    GQ++
  }
  GK.setUint8(GQ, 0)
}
function Ay(GQ, GK, GI) {
  for (var GH = 0; GH < GI.length; GH++) {
    GK.setUint16(GQ, GI.charCodeAt(GH), true)
    GQ += 2
  }
  GK.setUint16(GQ, 0, true)
}
function Az(GQ) {
  for (var GK = ''; ; ) {
    var GI = GQ.getUint8(GQ.offset)
    if ((GQ.offset++, 0 == GI)) {
      break
    }
    GK += String.fromCharCode(GI)
  }
  return GK
}
function AO(GQ) {
  for (var GK = ''; ; ) {
    var GI = GQ.getUint16(GQ.offset, true)
    if (((GQ.offset += 2), 0 == GI)) {
      break
    }
    GK += String.fromCharCode(GI)
  }
  return GK
}
function AV(GQ, GK) {
  if ((console.error(GQ.message, GQ.code), GK)) {
    switch (GQ.code) {
      case 'auth/user-disabled':
        alert(
          'This account has been permanently suspended by an administrator("Damn with all of them, gays!").'
        )
        break
      case 'auth/popup-closed-by-user':
        break
      default:
        alert(''.concat(GQ.message, ' (').concat(GQ.code, ')'))
    }
  }
}
function Am(GQ, GK) {
  var GI = '',
    GH = '',
    Gq = 'white'
  if (GK.flags.STAFF) {
    GH = 'Gota.io Staff'
    GI = 'build'
    Gq = 'royalblue'
  } else {
    if (!GK.flags.VERIFIED) {
      return
    }
    GH = 'Verified Player'
    GI = 'check_circle'
  }
  GK.className = 'material-icons'
  GK.id = 'user-badge'
  GK.innerText = GI
  GK.style.color = Gq
  $(GK).attr('data-balloon', GH)
  $(GK).attr('data-balloon-pos', 'right')
  $(GQ).append(GK)
  ;(GK.className = 'material-icons'),
    (GK.id = 'user-badge'),
    (GK.innerText = GI),
    (GK.style.color = Gq),
    $(GK).attr('data-balloon', GH),
    $(GK).attr('data-balloon-pos', 'right'),
    $(GQ).append(GK)
}
function e0(GQ, GK) {
  var GI = document.createElement('i')
  return (
    (GI.className = 'material-icons'),
    (GI.innerText = GQ),
    GI.setAttribute('data-balloon', GK),
    GI.setAttribute('data-balloon-pos', 'up'),
    GI
  )
}
function e1(GQ, GK, GI, GH) {
  var Gq,
    GF = document.createElement('li'),
    Gs =
      ((GF.className = 'user-embed menu-sub-bg2'),
      document.createElement('img')),
    Gs =
      ((Gs.src = GQ.avatar),
      (Gs.alt = GQ.username),
      GF.appendChild(Gs),
      document.createElement('div')),
    Gy = ((Gs.className = 'info'), document.createElement('div')),
    Gz =
      ((Gy.className = 'username'),
      (Gy.innerText = GQ.username),
      Gs.appendChild(Gy),
      Am(Gy, GQ),
      document.createElement('div')),
    GO = false,
    GV = null,
    Gm =
      (GI
        ? ((GV =
            (Gm = GQ.presence.server).charAt(0).toUpperCase() + Gm.slice(1)),
          GQ.presence.timestamp + 60000 < new Date().getTime() ||
          void 0 === GQ.presence.id
            ? ((Gz.className = 'status offline'),
              (Gz.innerText = 'Not playing on any server'))
            : ((GO = true),
              (Gz.className =
                'status ' +
                ('ONLINE' === GQ.presence.status ? 'online' : 'spectate')),
              (Gz.innerText =
                ('ONLINE' === GQ.presence.status ? 'Playing ' : 'Spectating ') +
                GQ.presence.gamemode +
                ' on '.concat(GV, ' (ID ').concat(GQ.presence.id, ')'))))
        : ((Gz.className = 'status pending'),
          (Gz.innerText = 'Pending Friend Request')),
      Gs.appendChild(Gz),
      document.createElement('div')),
    k0 =
      ((Gm.className = 'actions'),
      Gy.addEventListener('click', function (k1) {
        e2(GQ, $('#main-social'))
      }),
      GI &&
        GO &&
        ((Gz = e0('input', 'Join Server')).addEventListener(
          'click',
          function (k1) {
            el(GV)
            fD.play()
            fD.selfMsg(GQ.username + "'s ID is " + GQ.presence.id)
            eh($('#main-social'))
          }
        ),
        Gm.appendChild(Gz)),
      GI ||
        (((Gq = e0('done', 'Add as Friend')).isHandlingRequest = false),
        Gq.addEventListener('click', function (k1) {
          Gq.isHandlingRequest ||
            ((Gq.isHandlingRequest = true),
            firebase
              .auth()
              .currentUser.getIdToken()
              .then(function (k2) {
                fetch(fV + '/api/v1/social/friends', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    target: GQ.uid,
                    action: 2,
                    token: k2,
                  }),
                })
                  .then(function (k3) {
                    return k3.json()
                  })
                  .then(function (k3) {
                    200 !== k3.code && alert(k3.message)
                    Gq.isHandlingRequest = false
                  })
                  .catch(function (k3) {
                    alert(k3)
                    Gq.isHandlingRequest = false
                  })
              })
              .catch(function (k2) {
                AV(k2, true)
                Gq.isHandlingRequest = false
              }))
        }),
        Gm.appendChild(Gq)),
      e0('block', 'Remove Friend'))
  return (
    (k0.isHandlingRequest = false),
    k0.addEventListener('click', function (k1) {
      !k0.isHandlingRequest &&
        confirm(
          'Are you sure you want to remove "'.concat(
            GQ.username,
            '" as your friend?'
          )
        ) &&
        ((k0.isHandlingRequest = true),
        firebase
          .auth()
          .currentUser.getIdToken()
          .then(function (k2) {
            fetch(fV + '/api/v1/social/friends', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                target: GQ.uid,
                action: 4,
                token: k2,
              }),
            })
              .then(function (k3) {
                return k3.json()
              })
              .then(function (k3) {
                alert(k3.message)
                200 === k3.code &&
                  (firebase.database().ref(fI.callbacks[GQ.uid]).off(),
                  fI.elements[GQ.uid].remove(),
                  delete fI.callbacks[GQ.uid],
                  delete fI.elements[GQ.uid],
                  delete fI.timestamps[GQ.uid])
                k0.isHandlingRequest = false
              })
              .catch(function (k3) {
                alert(k3)
                k0.isHandlingRequest = false
              })
          })
          .catch(function (k2) {
            AV(k2, true)
            k0.isHandlingRequest = false
          }))
    }),
    Gm.appendChild(k0),
    GF.appendChild(Gs),
    GF.appendChild(Gm),
    GH ? GK.appendChild(GF) : GF
  )
}
function e2(GQ, GK) {
  GK && eh(GK)
  $('#profile-username').text(GQ.username)
  $('#profile-avatar').attr('src', GQ.avatar)
  $('#profile-avatar').attr('alt', GQ.username)
  $('#profile-level').html(
    'Level '
      .concat(GQ.levelData.level, '&nbsp;&nbsp;&nbsp;[')
      .concat(Gc(GQ.levelData.xp_current), '/')
      .concat(Gc(GQ.levelData.xp_needed), ']')
  )
  GQ.title && 0 < GQ.title && Gb[GQ.title]
    ? $('#profile-title').text(Gb[GQ.title])
    : $('#profile-title').text('')
  $('#profile-name').off('click')
  GQ.uid == fC.uid
    ? ($('#profile-name').on('click', function () {
        $('#popup-profile').hide()
        ev($('#popup-account-username'))
      }),
      $('#profile-name').css('cursor', 'pointer'))
    : $('#profile-name').css('cursor', 'default')
  GQ.flags.STAFF
    ? $('#profile-avatar').addClass('spin')
    : $('#profile-avatar').removeClass('spin')
  Am($('#profile-username'), GQ)
  $('#profile-close-btn')
    .off('click')
    .on('click', function () {
      GK && ep(GK)
      eh($('#popup-profile'))
    })
  ep($('#popup-profile'))
}
function e3(GQ) {
  var GK, GI
  fK ||
    ((GK = $('#social-friends .user-list')[0]),
    (GI = $('#social-friends .user-list')[1]),
    $('#social-uid').text(GQ.uid),
    firebase
      .database()
      .ref('/friendships/' + GQ.uid)
      .on('value', function (GH) {
        var Gq, GF
        if (null === (GH = GH.val())) {
          return (
            (Gq = document.createElement('div')),
            (GF = document.createElement('span')),
            (Gq.className = 'title-text center'),
            (GF.innerText = 'You have no friends \uD83D\uDE25'),
            Gq.appendChild(GF),
            void GK.appendChild(Gq)
          )
        }
        var Gs = 0,
          Gy = false
        Object.entries(GH).forEach(function (Gz) {
          var GO,
            Gz = _slicedToArray(Gz, 2),
            GV = Gz[0],
            Gz = Gz[1]
          if (!Gz && !Gy) {
            return (
              firebase
                .auth()
                .currentUser.getIdToken()
                .then(function (Gm) {
                  fetch(fV + '/api/v1/social/friends/pending', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ token: Gm }),
                  })
                    .then(function (k0) {
                      return k0.json()
                    })
                    .then(function (k0) {
                      200 === k0.code &&
                        k0.profiles.forEach(function (k1) {
                          var k2
                          if (
                            (fI.pendingFriends.includes(k1) ||
                              fI.pendingFriends.push(k1.uid),
                            fI.elements[k1.uid])
                          ) {
                            return (
                              (k2 = e1(k1, fI.elements[k1.uid], false, false)),
                              GI.replaceChild(k2, fI.elements[k1.uid]),
                              void (fI.elements[GV] = k2)
                            )
                          }
                          fI.elements[k1.uid] = e1(k1, GI, false, true)
                        })
                    })
                })
                .catch(function (Gm) {
                  return AV(Gm, false)
                }),
              void (Gy = true)
            )
          }
          fI.callbacks[GV] ||
            ((fI.callbacks[GV] = GO = '/users/' + GV),
            firebase
              .database()
              .ref(GO)
              .on('value', function (Gm) {
                var k0 = Gm.val()
                if (null !== k0) {
                  if (
                    (k0.uid === AN &&
                      (k0.presence = {
                        gamemode: '',
                        name: '',
                        server: '',
                        status: '',
                      }),
                    (fI.timestamps[k0.uid] = k0.presence.timestamp),
                    fI.pendingFriends.includes(GV))
                  ) {
                    return (
                      fI.pendingFriends.slice(fI.pendingFriends.indexOf(GV), 1),
                      fI.elements[GV].remove(),
                      (Gm = e1(k0, fI.elements[GV], true, false)),
                      GK.appendChild(Gm),
                      void (fI.elements[GV] = Gm)
                    )
                  }
                  fI.elements[GV]
                    ? ((Gm = e1(k0, fI.elements[GV], true, false)),
                      GK.replaceChild(Gm, fI.elements[GV]),
                      (fI.elements[GV] = Gm))
                    : (fI.elements[GV] = e1(k0, GK, true, true))
                  fz.friendOnlineCount.text(
                    (function () {
                      var k1,
                        k2 = 0,
                        k3 = Date.now()
                      for (k1 of Object.values(fI.timestamps))
                        null != k1 && k3 <= k1 + 60000 && k2++
                      return k2
                    })() + ' online'
                  )
                }
              }))
          Gz && Gs++
        })
        $('#social-friends-count').text(Gs)
      }),
    setInterval(function () {
      for (var GH in fI.timestamps) {
        if (!fI.timestamps.hasOwnProperty(GH)) {
          return
        }
        var Gq = fI.timestamps[GH]
        ;(Gq + 60000 < new Date().getTime() || void 0 === Gq) &&
          (((Gq = fI.elements[GH].children[1].children[1]).innerText =
            'Not playing on any server'),
          (Gq.className = 'status offline'),
          'Join Server' ===
            (Gq = fI.elements[GH].children[2].children[0]).dataset.balloon &&
            Gq.remove())
      }
    }, 60000),
    (fK = true))
}
function e4() {
  void 0 !== window.grecaptcha &&
    ((fF = window.grecaptcha),
    (window.grecaptcha = void 0),
    fF.ready(function () {}))
}
function e5() {
  var GQ = $('#food-color-list')
  if ((GQ.empty(), 0 == Ab['_FoodColors'].length)) {
    e6()
  } else {
    try {
      for (var GK in Ab['_FoodColors']) {
        var GI = Ab['_FoodColors'][GK]
        GQ.append(
          "<div c='"
            .concat(GI, "' style='background:")
            .concat(GI, ';color:')
            .concat(
              (function (GH) {
                if (
                  6 !==
                  (GH =
                    3 === (GH = 0 === GH.indexOf('#') ? GH.slice(1) : GH).length
                      ? GH[0] + GH[0] + GH[1] + GH[1] + GH[2] + GH[2]
                      : GH).length
                ) {
                  throw new Error('Invalid HEX color.')
                }
                return 186 <
                  0.299 * parseInt(GH.slice(0, 2), 16) +
                    0.587 * parseInt(GH.slice(2, 4), 16) +
                    0.114 * parseInt(GH.slice(4, 6), 16)
                  ? '#000000'
                  : '#FFFFFF'
              })(GI),
              ";'><span>"
            )
            .concat(
              GI,
              "</span><div><button class='btn-food-color'>X</button></div></div>"
            )
        )
      }
      $('.btn-food-color').on('click', function () {
        for (
          var GH, Gq, GF = $(this).parents().eq(1).attr('c');
          -1 !== (GH = Ab['_FoodColors'].indexOf(GF));

        ) {
          Ab['_FoodColors'].splice(GH, 1)
          Gq = true
        }
        Gq && e5()
      })
    } catch (GH) {
      Ab['_FoodColors'] = []
      GQ.empty()
    }
    e6()
  }
}
function e6() {
  AE = []
  for (var GQ of Ab['_FoodColors']) AE.push(f3.utils.string2hex(GQ))
  for (var GK of fD.foodObjects.values()) GK.needsPixiUpdate = true
}
function e7(GQ) {
  var GK,
    GI = $('.keybinds-btn-selected')
  Ak = false
  0 !== GI.size() &&
    ((GK = GI.first()),
    GI.removeClass('keybinds-btn-selected'),
    (A9[GK.attr('id')] = 27 !== GQ ? GQ : -1),
    e8(GK))
}
function e8(GQ) {
  var GK,
    GI = A9[GQ.attr('id')]
  GQ.html(0 < (GQ = GI) ? Gg[GQ].toUpperCase() : '&nbsp;')
  AG.clear()
  for (GK of Object.entries(A9)) {
    var GH = _slicedToArray(GK, 2),
      Gq = GH[0]
    ;-1 !== (GH = GH[1]) &&
      (AG.has(GH) ? AG.get(GH).push(Gq) : AG.set(GH, [Gq]))
  }
}
function e9() {
  var GQ = document.getElementById('logo')
  A8.cDisableEventSkins || !fm.enabled
    ? (GQ.style.backgroundImage = "url('images/logo.png')")
    : fm.enabled &&
      (GQ.style.backgroundImage = "url('images/events/".concat(
        fm.key,
        "/logo.png')"
      ))
}
function ef() {
  var GQ,
    GK =
      !A8.cDisableEventSkins && fm.enabled
        ? ((GQ = 'images/events/' + fm.key), '/spike_mother_happy.png')
        : ((GQ = 'images'), '/spike_mother.png'),
    GI = new Image(),
    GH =
      (GI.addEventListener('load', function () {
        if (((fX = f3.Texture.from(GI)), fD)) {
          for (var GF of fD.bucket.values())
            3 === GF.type && (GF.needsPixiUpdate = true)
        }
      }),
      new Image()),
    Gq =
      (GH.addEventListener('load', function () {
        if (((fE = f3.Texture.from(GH)), fD)) {
          for (var GF of fD.bucket.values())
            4 === GF.type && (GF.needsPixiUpdate = true)
        }
      }),
      new Image())
  Gq.addEventListener('load', function () {
    if (((fL = f3.Texture.from(Gq)), fD)) {
      for (var GF of fD.bucket.values())
        4 === GF.type && (GF.needsPixiUpdate = true)
    }
  })
  GI.src = GQ + '/spike.png'
  GH.src = GQ + '/spike_mother.png'
  Gq.src = GQ + GK
}
function eA(GQ, GK) {
  GQ.css('display', GK ? 'none' : '')
}
AF.prototype.connectionStart = function () {
  var GQ = 'Gota Web ' + version,
    GK = new ArrayBuffer(1 + GQ.length + 1 + 1),
    GI = new DataView(GK)
  return GI.setUint8(0, 255), GI.setUint8(1, 6), As(2, GI, GQ), GK
}
AF.prototype.setName = function (GQ) {
  var GK = new ArrayBuffer(2 + 2 * (GQ.length + 1)),
    GI = new DataView(GK)
  return (
    GI.setUint8(0, 0),
    Ay(1, GI, GQ),
    A8.cSilentLogin && GI.setUint8(2 + 2 * GQ.length + 1, 1),
    GK
  )
}
AF.prototype.sendKey = function (GQ) {
  var GK = new ArrayBuffer(1)
  return new DataView(GK).setUint8(0, GQ), GK
}
AF.prototype.sendMouse = function (GQ, GK) {
  var GI = new ArrayBuffer(9),
    GH = new DataView(GI)
  return (
    GH.setUint8(0, 16), GH.setInt32(1, GQ, true), GH.setInt32(5, GK, true), GI
  )
}
AF.prototype.sendEjectMass = function (GQ) {
  var GK = new ArrayBuffer(1)
  return new DataView(GK).setUint8(0, GQ ? 3 : 4), GK
}
AF.prototype.sendPing = function () {
  var GQ = new ArrayBuffer(1)
  return new DataView(GQ).setUint8(0, 71), GQ
}
AF.prototype.sendSpectate = function (GQ) {
  var GK = new ArrayBuffer(3),
    GI = new DataView(GK)
  return GI.setUint8(0, 1), GQ && GI.setUint16(1, GQ, true), GK
}
AF.prototype.sendChat = function (GQ, GK) {
  var GI = new ArrayBuffer(2 + 2 * (GQ.length + 1)),
    GH = new DataView(GI)
  return GH.setUint8(0, 72), GH.setUint8(1, GK), Ay(2, GH, GQ), GI
}
AF.prototype.sendInviteResponse = function (GQ) {
  var GK = new ArrayBuffer(2),
    GI = new DataView(GK)
  return GI.setUint8(0, 41), GI.setUint8(1, GQ ? 1 : 0), GK
}
AF.prototype.sendPartyAction = function (GQ, GK) {
  var GI = new ArrayBuffer(6),
    GH = new DataView(GI)
  return GH.setUint8(0, 40), GH.setUint8(1, GQ), GH.setUint32(2, GK, true), GI
}
AF.prototype.sendPartyJoin = function (GQ) {
  var GK = new ArrayBuffer(1 + GQ.length + 1),
    GI = new DataView(GK)
  return GI.setUint8(0, 42), As(1, GI, GQ), GK
}
AF.prototype.sendShowProfile = function (GQ) {
  var GK = new ArrayBuffer(3),
    GI = new DataView(GK)
  return GI.setUint8(0, 103), GI.setUint16(1, GQ, true), GK
}
AF.prototype.sendWhisper = function (GQ, GK) {
  var GI = new ArrayBuffer(5 + 2 * (GK.length + 1)),
    GH = new DataView(GI)
  return GH.setUint8(0, 73), GH.setUint32(1, GQ, true), Ay(5, GH, GK), GI
}
AF.prototype.sendSubPanel = function () {
  var GQ = new ArrayBuffer(8 + (AL.skinName.length + 1)),
    GK = new DataView(GQ)
  return (
    GK.setUint8(0, 10),
    GK.setUint8(1, AL.nameColor.r),
    GK.setUint8(2, AL.nameColor.g),
    GK.setUint8(3, AL.nameColor.b),
    GK.setUint8(4, AL.chatColor),
    GK.setUint8(5, AL.effect),
    GK.setUint8(6, AL.lowerName ? 1 : 0),
    As(7, GK, AL.skinName),
    GK.setUint8(8 + AL.skinName.length, AL.nameFont),
    GQ
  )
}
AF.prototype.sendLockedNameChange = function (GQ) {
  var GK = new ArrayBuffer(1 + (GQ.length + 1)),
    GI = new DataView(GK)
  return GI.setUint8(0, 11), As(1, GI, GQ), GK
}
AF.prototype.sendOptions = function () {
  var GQ = new ArrayBuffer(3),
    GK = new DataView(GQ)
  return GK.setUint8(0, 104), GK.setUint16(1, A8.rViewDistance, true), GQ
}
AF.prototype.sendQueue = function (GQ) {
  var GK = new ArrayBuffer(5),
    GI = new DataView(GK)
  return (
    GI.setUint8(0, 80),
    GI.setUint8(1, GQ),
    GI.setUint8(2, 0),
    GI.setUint16(3, 0),
    GK
  )
}
AF.prototype.sendCustomGame = function (GQ) {
  var GK = new ArrayBuffer(2),
    GI = new DataView(GK)
  return GI.setUint8(0, 90), GI.setUint8(1, GQ), GK
}
AF.prototype.sendLeaveMatch = function () {
  var GQ = new ArrayBuffer(1)
  return new DataView(GQ).setUint8(0, 81), GQ
}
AF.prototype.sendShowLobbies = function () {
  var GQ = new ArrayBuffer(2)
  return new DataView(GQ).setUint8(0, 93), GQ
}
AF.prototype.sendJoinLobby = function (GQ, GK) {
  var GI = new ArrayBuffer(5 + 2 * (GK.length + 1)),
    GH = new DataView(GI)
  return GH.setUint8(0, 94), GH.setUint32(1, GQ, true), Ay(5, GH, GK), GI
}
AF.prototype.sendCaptcha = function (GQ) {
  var GK = new ArrayBuffer(1 + (GQ.length + 1)),
    GI = new DataView(GK)
  return GI.setUint8(0, 100), As(1, GI, GQ), GK
}
AF.prototype.sendAuthToken = function (GQ) {
  var GK = new ArrayBuffer(1 + (GQ.length + 1)),
    GI = new DataView(GK)
  return GI.setUint8(0, 101), As(1, GI, GQ), GK
}
AF.prototype.sendCustomGameUpdate = function (GQ, GK, GI) {
  var GH = new ArrayBuffer(4),
    Gq = new DataView(GH)
  return (
    Gq.setUint8(0, 91),
    Gq.setUint8(1, GQ),
    GQ === Gx.STARTMASS || GQ === Gx.VIRUS_DENSITY
      ? Gq.setUint16(2, GK, false)
      : GQ === Gx.RESPAWN_DELAY
      ? Gq.setInt16(2, GK, false)
      : (Gq.setUint8(2, GK), Gq.setUint8(3, GI)),
    GH
  )
}
AF.prototype.sendCustomGameUpdateString = function (GQ, GK) {
  var GI = new ArrayBuffer(2 + 2 * (GK.length + 1)),
    GH = new DataView(GI)
  return GH.setUint8(0, 92), GH.setUint8(1, GQ), Ay(2, GH, GK), GI
}
var eG = {
  cDisableAA: function () {
    f0 && $('#performance-refresh').css('display', 'table-row')
  },
  sRenderType: function () {
    f0 && $('#performance-refresh').css('display', 'table-row')
  },
  cHideId: function () {
    var GQ = A8.cHideId ? 'none' : 'block'
    $('.pID').css('display', GQ)
  },
  cHideServerDisplay: function () {
    var GQ = A8.cHideServerDisplay ? 'none' : 'block'
    $('.psvr').css('display', GQ)
  },
  cTransCells: function () {
    fk.alpha = A8.cTransCells ? 0.5 : 1
  },
  cColoredCellCount: function () {
    fD.updateCellCounter(true)
  },
  cHideChat: function () {
    $('#chat-panel').css('visibility', A8.cHideChat ? 'hidden' : 'visible')
  },
  cHideMinimap: function () {
    var GQ = A8.cHideMinimap ? 'none' : 'block'
    $('#minimap-panel').css('display', GQ)
  },
  cHideScorePanel: function () {
    eA(fJ, A8.cHideScorePanel)
  },
  cHideLeaderboard: function () {
    var GQ = A8.cHideLeaderboard ? 'none' : 'block'
    $('#leaderboard-panel').css('display', GQ)
  },
  cHideExtraPanel: function () {
    var GQ = A8.cHideExtraPanel ? 'none' : 'block'
    $('#extra-panel').css('display', GQ)
  },
  cShowCoordinates: function () {
    var GQ = A8.cShowCoordinates ? 'block' : 'none'
    $('#minimap-coordinates').css('display', GQ)
    ek()
  },
  cDisableAutoZoom: function () {
    A8.cDisableAutoZoom &&
      (fD.scale_base = 0.2 * Math.max(fP.height / 1080, fP.width / 1920))
  },
  cThemeEnabled: function () {
    A8.cThemeEnabled
      ? Ax(function (GQ) {
          $('#' + GQ).spectrum('enable')
        })
      : (eQ(),
        Ax(function (GQ) {
          $('#' + GQ).spectrum('disable')
        }))
  },
  cShowBorder: function () {
    Ap()
  },
  cDisableEventSkins: function () {
    fm.enabled && $('body').toggleClass('event-' + fm.key)
    ef()
    e9()
  },
  cResizableChat: function () {
    $('#chat-resize').css('display', A8.cResizableChat ? 'block' : 'none')
  },
  cHideLockedNames: function () {
    fD.playerRegistry.updateLockedNames()
    for (var GQ of fD.bucket.values())
      1 === GQ.type && (GQ.needsPixiUpdate = true)
  },
  cHideOwnName: function () {
    var GQ
    null != (GQ = fD.playerData) && GQ.updateNameVisibility()
  },
  cHideFriendNames: function () {
    for (var GQ of fD.playerRegistry.friends) GQ.updateNameVisibility()
  },
  cHideEnemyNames: function () {
    for (var GQ of fD.playerRegistry.enemies) GQ.updateNameVisibility()
  },
  cHideOwnSkin: function () {
    var GQ
    null != (GQ = fD.playerData) && GQ.updateSkinVisibility()
  },
  cHideFriendSkins: function () {
    for (var GQ of fD.playerRegistry.friends) GQ.updateSkinVisibility()
  },
  cHideEnemySkins: function () {
    for (var GQ of fD.playerRegistry.enemies) GQ.updateSkinVisibility()
  },
  cHideOwnMass: function () {
    var GQ
    null != (GQ = fD.playerData) && GQ.updateMassVisibility()
  },
  cHideFriendMasses: function () {
    for (var GQ of fD.playerRegistry.friends) GQ.updateMassVisibility()
  },
  cHideEnemyMasses: function () {
    for (var GQ of fD.playerRegistry.enemies) GQ.updateMassVisibility()
  },
  cSmoothCells: function () {
    fD.playerRegistry.updateTextureMipmaps()
  },
  cHorizontalScorePanel: function () {
    fJ.toggleClass('horizontal', A8.cHorizontalScorePanel)
  },
  cHideLeaderboardHeader: function () {
    eA(fW, A8.cHideLeaderboardHeader)
  },
  cHidePartyHeader: function () {
    eA($('#party-header'), A8.cHidePartyHeader)
  },
  iSplitSound: function (GQ) {
    0 === GQ.length
      ? Aw.remove('split')
      : Aw.add('split', GQ) && (A8.iSplitSound = GQ)
  },
  iEjectSound: function (GQ) {
    0 === GQ.length
      ? Aw.remove('eject')
      : Aw.add('eject', GQ) && (A8.iEjectSound = GQ)
  },
  sMassType: function () {
    A2.massType = GN[A8.sMassType]
  },
  sCameraFocus: function () {
    A2.cameraFocus = Gi[A8.sCameraFocus]
  },
  sTextOutlines: function () {
    A2.textOutlineSize = f5[A8.sTextOutlines]
    fD.updateTextOutlines()
  },
  spRainbowName: function () {
    var GQ
    null != (GQ = fD.playerData) && GQ.onRainbowName()
  },
  spRainbowCell: function () {
    var GQ
    null != (GQ = fD.playerData) && GQ.onRainbowCell()
  },
  sQuality: function () {
    var GQ = A2.resolution
    A2.resolution = GW[A8.sQuality]
    GQ !== A2.resolution && $(window).trigger('resize')
  },
  uiForegroundColor: function (GQ) {
    fD && fD.drawParty()
    $('.fg-interface-color').css('color', GQ)
    $('.interface-color').css('color', GQ)
    $('.gota-btn').css('color', GQ).css('border-color', GQ)
    $('.popup-panel').css('color', GQ)
    $('.main').css('color', GQ)
    $('.main-bottom-stats').css('border-color', GQ)
  },
  uiBackgroundColor: function (GQ) {
    $('.hud-panel .interface-color').css('background-color', GQ)
  },
  uiButtonColor: function (GQ) {
    $('.gota-btn').css('background-color', GQ)
  },
  uiBorderColor: function (GQ) {
    $('.ui-pane').css('border-color', GQ)
    $('#chat-tab-container').css('border-color', GQ)
    $('.chat-tab').css('border-color', GQ)
  },
  uiMenuBackgroundColor: function (GQ) {
    $('.main-panel').css('background-color', GQ)
    $('.popup-panel').css('background-color', GQ)
    $('.options-container').css('background-color', GQ)
  },
  uiMenuTitleBackgroundColor: function (GQ) {
    $('.menu-title').css('background-color', GQ)
  },
  uiMenuSubBackgroundColor: function (GQ) {
    $('.menu-sub-bg').css('background-color', GQ)
    $('.server-active').css('background-color', GQ)
    $('#server-content').css('background-color', GQ)
  },
  uiMenuSubBackground2Color: function (GQ) {
    $('.menu-sub-bg2').css('background-color', GQ)
    $('.server-table tbody').css('background-color', GQ)
  },
  uiPartyLeaderColor: function () {
    fD && fD.drawParty()
  },
  uiGameColorSuccess: function (GQ) {
    $('#social-friends-online-count').css('color', GQ)
  },
  uiGameBackgroundColor: function (GQ) {
    document.body.style.background = GQ
  },
  uiGameBorderColor: function () {
    Ap()
  },
  rUiScale: function (GQ) {
    A8.rUiScale = Math.min(Math.max(GQ, 0.5), 1.25)
    $('#uiScale').val(Number.parseFloat(100 * A8.rUiScale).toFixed(0))
    $('.ui-scale').css('transform', 'scale('.concat(A8.rUiScale, ')'))
  },
  rAnimationDelay: function (GQ) {
    A8.rAnimationDelay = Math.min(Math.max(GQ, 1), 250)
    $('#animationDelay').val(A8.rAnimationDelay)
  },
  rCameraDelay: function (GQ) {
    A8.rCameraDelay = Math.min(Math.max(GQ, 0), 250)
    $('#cameraDelay').val(A8.rCameraDelay)
  },
  rFreezeDelay: function (GQ) {
    A8.rFreezeDelay = Math.min(Math.max(GQ, 0), 1000)
    $('#freezeDelay').val(A8.rFreezeDelay)
  },
  rViewDistance: function (GQ) {
    A8.rViewDistance = Math.min(Math.max(GQ, 50), 150)
    $('#viewDistance').val(A8.rViewDistance)
    fD.sendOptions()
  },
  rBorderSize: function (GQ) {
    Ab.rBorderSize = Math.min(Math.max(GQ, 1), 256)
    $('#borderSize').text(Ab.rBorderSize)
    Ap()
  },
  rBackgroundOpacity: function (GQ) {
    Ab.rBackgroundOpacity = Math.min(Math.max(GQ, 0), 1)
    $('#backgroundOpacity').text(
      Number.parseFloat(100 * Ab.rBackgroundOpacity).toFixed(0)
    )
    document.getElementById('canvas-background').style.opacity =
      Ab.rBackgroundOpacity
  },
  aCustomBackground: function (GQ) {
    document.getElementById('canvas-background').style.backgroundImage =
      "url('".concat(GQ, "')")
    document.getElementById('canvas-background').style.backgroundSize =
      '100% 100%'
  },
  aCustomSpike: function (GQ) {
    AX.aCustomSpike && AX.aCustomSpike.destroy()
    AX.aCustomSpike = null
    for (var GK of fD.bucket.values())
      3 === GK.type && (GK.needsPixiUpdate = true)
    var GI
    0 !== GQ.length &&
      (((GI = new Image()).crossOrigin = ''),
      GI.addEventListener('load', function () {
        AX.aCustomSpike = f3.Texture.from(GI)
      }),
      GI.addEventListener('error', function () {
        fD.selfMsg('Unable to load custom theme virus.')
      }),
      (GI.src = GQ))
  },
  aCustomMother: function (GQ) {
    AX.aCustomMother && AX.aCustomMother.destroy()
    AX.aCustomMother = null
    for (var GK of fD.bucket.values())
      4 === GK.type && (GK.needsPixiUpdate = true)
    var GI
    0 !== GQ.length &&
      (((GI = new Image()).crossOrigin = ''),
      GI.addEventListener('load', function () {
        AX.aCustomMother = f3.Texture.from(GI)
      }),
      GI.addEventListener('error', function () {
        fD.selfMsg('Unable to load custom theme mother cell.')
      }),
      (GI.src = GQ))
  },
}
function ek() {
  A8.cShowCoordinates
    ? ($('#minimap-canvas').css({
        'border-top': '2px solid rgba(255, 255, 255, .2)',
      }),
      $('#minimap-panel').css({ height: '270px' }))
    : ($('#minimap-canvas').css({ 'border-top': '0' }),
      $('#minimap-panel').css({ height: '250px' }))
}
function eb(GQ) {
  AL.skinName = $('#spSkinName').val().toLowerCase()
  AL.lowerName = $('#spLowerName').prop('checked')
  AL.nameColor = $('#spNameColor').spectrum('get').toRgb()
  var GK = $('#spChatColor').spectrum('get').toHexString().toUpperCase(),
    GI = Ga.findIndex(function (GH) {
      return GH === GK
    })
  AL.chatColor = -1 === GI ? 0 : GI
  AL.effect = parseInt($('#spEffect').val())
  AL.nameFont = parseInt($('#spNameFont').val())
  fD.sendPacket(new fl.sendSubPanel(GQ))
}
function eP() {
  var GQ = fr || fD.subPanelOverride,
    GK = $('#btn-cellpanel')
  GQ || Au
    ? (GQ
        ? (AD.show(),
          $('.subpanel-name-dashboard').css('display', fr ? '' : 'none'))
        : AD.hide(),
      (GQ = GQ && !AL.rules),
      $('#subpanel-rules').css('display', GQ ? 'block' : 'none'),
      $('#subpanel-content').css('display', GQ ? 'none' : 'block'),
      GK.prop('disabled', false))
    : GK.prop('disabled', true)
}
function eZ(GQ) {
  fD.accountListeners.loadSubPanel ||
    (fD.accountListeners.loadSubPanel = firebase
      .firestore()
      .collection('accounts')
      .doc(GQ)
      .onSnapshot(
        function (GK) {
          null != (GK = GK.data()) && GK.locked
            ? ((fr = true),
              $('#spLockedName').html(GK.name),
              void 0 !== GK.lastChange &&
                $('#btn-chg-ln').attr(
                  'title',
                  'Last Changed: ' + new Date(GK.lastChange).toLocaleString()
                ),
              $('#spExpiry').html(
                null != GK.expiry
                  ? new Date(1000 * GK.expiry.seconds).toLocaleString()
                  : 'Never'
              ))
            : ((fr = false),
              'none' !== $('#main-subpanel').css('display') &&
                f('main-servers'))
          eP()
          fD.accountListeners.loadSubPanel()
          fD.accountListeners.loadSubPanel = null
        },
        function () {
          fD.accountListeners.loadSubPanel()
          fD.accountListeners.loadSubPanel = null
        }
      ))
}
function eo() {
  for (var GQ in ($('[id^=servers-body-]').empty(), A0))
    for (var GK of Object.values(A0[GQ])) {
      var GI = GK.name,
        GH = GK.players,
        Gq = GK.bots,
        GF = GK.playersText,
        GK = GK.gamemode,
        GH =
          0 < Gq
            ? ' title="Players: '.concat(GH, '&#10;Bots: ').concat(Gq, '"')
            : ''
      $('#servers-body-' + GQ).append(
        '<tr id="s_'
          .concat(GI, '" class="server-row" server="')
          .concat(GI, '"><td class="server-table-name">')
          .concat(GI, '</td><td class="server-table-players"')
          .concat(GH, '>')
          .concat(GF, '</td><td class="server-table-mode">')
          .concat(GK, '</td></tr>')
      )
    }
  for (var Gs of Object.values(A1)) {
    var Gy = Gs.region,
      Gz = Gs.name,
      GO = Gs.playersText,
      Gs = Gs.gamemode
    $('#servers-body-' + Gy).prepend(
      '<tr id="s_'
        .concat(Gz, '" class="account-server server-row" server="')
        .concat(Gz, '"><td class="server-table-name">')
        .concat(Gz, '</td><td class="server-table-players">')
        .concat(GO, '</td><td class="server-table-mode">')
        .concat(Gs, '</td></tr>')
    )
  }
  $('.server-row').on('click', function () {
    el($(this).attr('server'))
  })
}
function eD(GQ) {
  if (GQ) {
    for (var GK in ((GQ = GQ.toLowerCase()), A0))
      for (var GI in A0[GK])
        if (GI.toLowerCase() === GQ) {
          return A0[GK][GI]
        }
    for (var GH in A1)
      if (GH.toLowerCase() === GQ) {
        return A1[GH]
      }
  }
  return null
}
function el(GQ) {
  null != fc && $('#s_' + fc.name).removeClass('server-selected')
  null != (fc = eD(GQ)) && $('#s_' + fc.name).addClass('server-selected')
}
function eg(GQ) {
  GQ = GQ.toLowerCase()
  var GK = $('#server-tab-' + GQ)
  $('.server-active').css('background-color', 'inherit')
  $('#server-tab-container').children().removeClass('server-active')
  GK.addClass('server-active')
  $('.server-active').css('background-color', Ab.uiMenuSubBackgroundColor)
  $('#server-content').children().css('display', 'none')
  $('#servers-' + GQ).css('display', 'block')
}
function eY(GQ, GK) {
  A8['_ChatTabs'].forEach(function (GI, GH) {
    var Gq,
      GF = GI.flags,
      GI = GI.maxMessages
    ;(GQ & GF) === GQ &&
      ((Gq = $('#chat-body-'.concat(GH, ' tr'))).length >= GI &&
        Gq.first().remove(),
      (GF =
        (Gq = $('#chat-container-' + GH)[0]).scrollHeight - Gq.scrollTop <=
        Gq.clientHeight + 10),
      (GI = GK.cloneNode(true)),
      $(GI).find('.chat-name').contextmenu(eN),
      $('#chat-body-' + GH).append($('<tr>').append(GI)),
      GF && (Gq.scrollTop = Gq.scrollHeight))
  })
}
function eX(GQ) {
  $('#chat-input').val(GQ)
}
function eE() {
  return $('#chat-input').val()
}
function eL() {
  var GQ,
    GK = $('#chat-tab-container'),
    GI = $('#chat-container')
  for (GQ in (GK.empty(), GI.empty(), A8['_ChatTabs'])) {
    var GH = A8['_ChatTabs'][GQ]
    0 == GH.name.length && (GH.name = 'Unnamed')
    GK.append(
      "<li class='chat-tab' id='chat-tab-"
        .concat(GQ, "' name='")
        .concat(GQ, "'><span>")
        .concat(GH.name, '</span></li>')
    )
    GI.append(
      "<div class='chat-inner-container' id='chat-container-"
        .concat(GQ, "'><table class='chat-table'><tbody id='chat-body-")
        .concat(GQ, "'></tbody></table></div>")
    )
  }
  $('.chat-tab')
    .on('click', function () {
      ec($(this).attr('name'))
    })
    .css('border-color', Ab.uiBorderColor)
  0 <= A7 && A7 < A8['_ChatTabs'].length ? ec(A7) : ec(0)
}
function ec(GQ) {
  $('.chat-tab').removeClass('chat-active-tab')
  $('.chat-inner-container')
    .removeClass('chat-active-container')
    .css('display', 'none')
  A7 = GQ
  A8['_ChatTabs'][GQ] &&
    ($('#chat-tab-' + GQ).addClass('chat-active-tab'),
    $('#chat-container-' + GQ)
      .addClass('chat-active-container')
      .css('display', 'block'))
}
function ej(GQ) {
  var GK,
    GI = 0 < arguments.length && void 0 !== GQ ? GQ : 0,
    GH = $('#cte-tab-selector')
  for (GK in (GH.empty(), A8['_ChatTabs']))
    GH.append(
      "<option value='"
        .concat(GK, "'>")
        .concat(A8['_ChatTabs'][GK].name, '</option>')
    )
  GH.prop('selectedIndex', GI)
  GH.trigger('change')
}
function eu(GQ) {
  var GK = $('#cte-tab-selector').val(),
    GI = A8['_ChatTabs'][GK]
  if (GI) {
    var GH = GI.name,
      Gq = $('#cte-tab-name').val()
    if (0 != Gq.length) {
      var GF,
        GH = Gq != GH,
        Gs = 0,
        Gy = parseInt($('#cte-max-messages').val())
      for (GF in Gv)
        $('#cte-type-' + GF.toLowerCase()).prop('checked') && (Gs += Gv[GF])
      if (((GI.name = Gq), (GI.flags = Gs), (GI.maxMessages = Gy), GH)) {
        for (var Gz in (ej(GK), A8['_ChatTabs'])) {
          var GO = A8['_ChatTabs'][Gz]
          GO &&
            (0 == GO.name.length && (GO.name = 'Unnamed'),
            (Gz = $('#chat-tab-' + Gz)) &&
              Gz.html('<span>'.concat(GO.name, '</span>')))
        }
      }
    }
  }
}
function eN() {
  ei(this.innerText, this.dataset.playerId, -1)
}
function ei(GQ, GK, GI) {
  var GH = 2 < arguments.length && void 0 !== GI ? GI : -1
  $('#context-name').text(GQ || 'An unnamed cell')
  fp.data({
    selected: GK,
    party: GH,
  })
  $('.context-action').css('display', 'none')
  ;-1 === GH
    ? ($('#menu-invite').css('display', 'block'),
      $('#menu-whisper').css('display', 'block'),
      $('#menu-block').css('display', 'block'),
      $('#menu-profile').css('display', 'block'))
    : ($('#menu-whisper').css('display', 'block'),
      $('#menu-profile').css('display', 'block'),
      fD.isPartyLeader() &&
        ($('#menu-pu_pr').css('display', 'block'),
        $('#menu-promote').css('display', 'block'),
        $('#menu-kick').css('display', 'block')))
  fD.spectate && $('#menu-spectate').css('display', 'block')
  fp.css({
    display: 'block',
    left: Math.min(fD.mouseRawX, window.innerWidth - fp.width()),
    top: Math.min(fD.mouseRawY, window.innerHeight - fp.height()),
  })
}
function eW(GQ) {
  return GQ.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
function ex(GQ, GK, GI, GH, Gq, GF, Gs) {
  GI =
    ((GI - fD.serverData.border.left) / fD.serverData.border.width) * fZ.width
  GH =
    ((GH - fD.serverData.border.top) / fD.serverData.border.height) * fZ.height
  GQ.beginPath()
  GQ.arc(GI, GH, Gq, 0, fy, false)
  GQ.fillStyle = GF
  GQ.fill()
  Gs && ((Gq = GQ.measureText(GK).width / 2), GQ.fillText(GK, GI - Gq, GH - 5))
}
function ep(GQ) {
  'none' === GQ.css('display') &&
    (GQ.css('display', 'block'), GQ.animate({ opacity: 1 }, 500))
}
function eh(GQ) {
  'block' === GQ.css('display') &&
    '1' === GQ.css('opacity') &&
    GQ.animate({ opacity: 0 }, 500, function () {
      GQ.css('display', 'none')
    })
}
function ev(GQ) {
  'block' === GQ.css('display') && '1' === GQ.css('opacity')
    ? eh(GQ)
    : 'none' === GQ.css('display') && ep(GQ)
}
function eB(GQ) {
  return 'none' === GQ.css('display')
}
function eS() {
  fi.show()
  ;(0 != fD.party.length && !A8.cHidePartyPanel) ||
    fz.partyPanel.css('display', 'none')
  A8.cHideChat && $('#chat-panel').css('visibility', 'hidden')
  A8.cHideMinimap && $('#minimap-panel').css('display', 'none')
}
function eR() {
  fi.hide()
}
function eM(GQ) {
  var GK = GQ.attr('id')
  A8[GK] = GQ.prop('checked')
  ed(GK)
}
function eU(GQ) {
  var GK = GQ.attr('id')
  A8[GK] = GQ.val()
  ed(GK, GQ.val())
}
function eJ(GQ) {
  ed(GQ.attr('id'), GQ.val())
}
function ew(GQ) {
  ed(GQ.attr('id'), GQ.val())
}
function ed(GQ, GK) {
  GQ = eG[GQ]
  null != GQ && GQ(GK)
}
function eT(GQ, GK) {
  null != GK && ed(GQ, (Ab[GQ] = GK))
}
var er = 'loadver',
  eC = [
    [1, 4, 'rRainbowNameSpeed'],
    [5, 4, 'rRainbowCellSpeed'],
    [10, 1, 'spRainbowName'],
    [11, 1, 'spRainbowCell'],
  ]
function eQ() {
  for (var GQ in AP) {
    var GK = GQ.charAt(0)
    'r' == GK
      ? ($('#' + GQ).val(AP[GQ]), eJ($('#' + GQ)))
      : 'u' == GK
      ? ((Ab[GQ] = AP[GQ]), $('#' + GQ).spectrum('set', Ab[GQ]), ed(GQ, Ab[GQ]))
      : 'a' == GK
      ? eT(GQ, '')
      : (Ab[GQ] = AP[GQ])
  }
  Ab['_FoodColors'] = []
}
function eK(GQ) {
  try {
    var GK,
      GI,
      GH = JSON.parse(GQ)
    if (null == GH.version || 2 != GH.version) {
      return eQ()
    }
    for (GI in GH)
      null != Ab[GI] &&
        0 != GH[GI].length &&
        ((Ab[GI] = GH[GI]),
        'u' == (GK = GI.charAt(0))
          ? ($('#' + GI).spectrum('set', Ab[GI]), ed(GI, Ab[GI]))
          : 'r' == GK
          ? ($('#' + GI).val(Ab[GI]), eJ($('#' + GI)))
          : 'a' == GK && eT(GI, Ab[GI]))
  } catch (Gq) {
    eQ()
  } finally {
    e6()
  }
}
function eI(GQ) {
  var GK
  ;/\.(json)$/i.test(GQ.name) &&
    ((GK = new FileReader()).addEventListener(
      'load',
      function () {
        A8.cThemeEnabled || eH()
        eQ()
        eK(this.result)
      },
      false
    ),
    GK.readAsText(GQ))
}
function eH() {
  $('#cThemeEnabled').prop('checked', true).trigger('change')
}
function eq(GQ) {
  for (
    var GK = GQ.split(' '), GI = '', GH = null, Gq = 0;
    Gq < GK.length;
    Gq++
  ) {
    0 != Gq && (GI += ' ')
    GH = GK[Gq]
    null != fB[GH]
      ? (GH.startsWith(':') &&
          GH.endsWith(':') &&
          (GH = GH.substring(1, GH.length - 1)),
        (GI += '<img src="https://gota.io/emotes/'
          .concat(GH, '.png" height="17" width="17" alt="')
          .concat(GH, '">')))
      : null != gifEmoteList[GH]
      ? (GH.startsWith(':') &&
          GH.endsWith(':') &&
          (GH = GH.substring(1, GH.length - 1)),
        (GI += '<img src="https://gota.io/emotes/gifs/'
          .concat(GH, '.gif" height="17" width="17" alt="')
          .concat(GH, '">')))
      : (GI += GH)
  }
  return GI
}
var eF,
  es,
  ey = {
    MODIFIER: 1,
    PASSIVE: 2,
    CONSUMABLE: 3,
    DEBUFF: 4,
    NONE: 0,
  },
  ez = {
    0: new eO('Random', 'random', ey.NONE),
    1: new eO('Maximum Cells Upgrade', 'extracells', ey.MODIFIER),
    2: new eO('Extra Consumable Slot', 'extraconsumable', ey.MODIFIER),
    3: new eO('Merge', 'merge', ey.PASSIVE),
    4: new eO('Grow', 'grow', ey.PASSIVE),
    5: new eO('Speed', 'speed', ey.PASSIVE),
    6: new eO('Shield', 'shield', ey.PASSIVE),
    7: new eO('Virus', 'spike', ey.CONSUMABLE),
    8: new eO('Disrupt', 'disrupt', ey.CONSUMABLE),
    9: new eO('Teleport', 'teleport', ey.CONSUMABLE),
    10: new eO('Disrupt', '_disrupt', ey.DEBUFF),
    11: new eO('Silver', 'phoenix', ey.MODIFIER),
    12: new eO('Consumable Shield', '_shield', ey.CONSUMABLE),
    13: new eO('Magnet', 'magnet', ey.PASSIVE),
    14: new eO('Decay', 'decay', ey.CONSUMABLE),
    15: new eO('Decay', '_decay', ey.DEBUFF),
  }
function eO(GQ, GK, GI) {
  this.name = GQ
  this.img = GK
  this.type = GI
  this.image = null
  this.texture = null
}
function eV() {
  this.passiveBuffs = {}
  this.passiveSortedBuffs = []
  this.consumableBuffs = []
  this.cache = null
  this.nextCacheUpdate = 0
  this.texture = null
  this.bonusMaxCells = 0
  this.onAddBuff = function (GQ, GK, GI) {
    var GH = null
    ez[GQ].type != ey.CONSUMABLE
      ? ((GH = this.passiveBuffs[GQ])
          ? GH.update(GK, GI)
          : ((GH = new G0(GQ, GK, GI)),
            (this.passiveBuffs[GQ] = GH),
            this.sortPassiveBuffs()),
        this.onPassiveBuffsUpdate())
      : ((GH = new G0(GQ, GK, GI)), this.consumableBuffs.push(GH))
    this.markCacheForUpdate()
    GH && fD.selfMsg('Recieved buff: ' + GH.powerup.name)
  }
  this.onRemoveBuff = function (GQ) {
    var GK = null
    if (ez[GQ].type != ey.CONSUMABLE) {
      ;(GK = this.passiveBuffs[GQ]) &&
        (delete this.passiveBuffs[GQ],
        this.sortPassiveBuffs(),
        this.markCacheForUpdate(),
        this.onPassiveBuffsUpdate())
    } else {
      for (var GI = 0; GI < this.consumableBuffs.length; GI++) {
        if ((GK = this.consumableBuffs[GI]).id == GQ) {
          this.consumableBuffs.splice(GI, 1)
          this.markCacheForUpdate()
          break
        }
      }
    }
    GK && fD.selfMsg('Lost buff: ' + GK.powerup.name)
  }
  this.clearBuffs = function (GQ) {
    if (
      0 != this.passiveSortedBuffs.length ||
      0 != this.consumableBuffs.length
    ) {
      var GK,
        GI = GQ || false
      for (GK in this.passiveBuffs) {
        var GH = this.passiveBuffs[GK]
        ;(GI && GH.powerup.type == ey.MODIFIER) || delete this.passiveBuffs[GK]
      }
      this.sortPassiveBuffs()
      this.onPassiveBuffsUpdate()
      this.consumableBuffs = []
      this.markCacheForUpdate()
    }
  }
  this.sortPassiveBuffs = function () {
    if (((this.passiveSortedBuffs = []), 0 != this.passiveBuffs.length)) {
      for (var GQ in this.passiveBuffs)
        this.passiveBuffs[GQ].powerup.type == ey.MODIFIER
          ? this.passiveSortedBuffs.splice(0, 0, GQ)
          : this.passiveSortedBuffs.push(GQ)
    }
  }
  this.onPassiveBuffsUpdate = function () {
    var GQ
    this.bonusMaxCells = 0
    null != this.passiveBuffs[1] &&
      ((GQ = this.passiveBuffs[1]), (this.bonusMaxCells = 16 * GQ.stack))
  }
  this.update = function () {
    0 == this.passiveSortedBuffs.length && 0 == this.consumableBuffs.length
      ? (fa.visible = false)
      : (Date.now() >= this.nextCacheUpdate &&
          (this.updateCache(), (this.nextCacheUpdate = Date.now() + 1000)),
        this.texture ||
          ((this.texture = f3.Texture.from(this.cache.canvas)),
          (fa.texture = this.texture),
          fa.anchor.set(0)),
        (fa.position.x = fJ.width() + 20 - f0.stage.position.x),
        (fa.position.y = 15 - f0.stage.position.y),
        (fa.visible = true))
  }
  this.updateCache = function () {
    for (
      var GQ =
          null == this.cache || null == this.cache.canvas
            ? document.createElement('canvas')
            : this.cache.canvas,
        GK = Math.max(
          this.passiveSortedBuffs.length,
          this.consumableBuffs.length
        ),
        GI =
          ((GQ.width = 55 * GK),
          (GQ.height = 105),
          (this.cache = GQ.getContext('2d')),
          (this.cache.fillStyle = '#222'),
          (this.cache.font = 'bold 16pt Calibri'),
          0),
        GH = 0,
        Gq = 0;
      Gq < this.passiveSortedBuffs.length;
      Gq++
    ) {
      this.passiveBuffs[this.passiveSortedBuffs[Gq]].draw(this.cache, GI, GH)
      GI += 55
    }
    for (GH = 55, Gq = GI = 0; Gq < this.consumableBuffs.length; Gq++) {
      this.consumableBuffs[Gq].draw(this.cache, GI, GH)
      GI += 55
    }
    this.texture && this.texture.update()
    this.nextCacheUpdate = Date.now() + 1000
  }
  this.markCacheForUpdate = function () {
    this.nextCacheUpdate = 0
  }
}
var em = 1.5 * Math.PI
function G0(GQ, GK, GI) {
  this.id = GQ
  this.powerup = ez[GQ]
  this.startTime = Date.now()
  this.expireTime = GI
  this.stack = GK
  this.update = function (GH, Gq) {
    this.startTime = Date.now()
    this.expireTime = Gq
    this.stack = GH
  }
  this.getCooldown = function () {
    var GH, Gq
    return Date.now() >= this.expireTime
      ? 2 * Math.PI
      : ((GH = this.expireTime - Date.now()),
        (Gq = this.expireTime - this.startTime),
        2 * Math.min(GH / Gq, 1) * Math.PI)
  }
  this.draw = function (GH, Gq, GF) {
    GH.drawImage(this.powerup.image, Gq, GF, 50, 50)
    1 < this.stack &&
      ((GH.fillStyle = '#000'), GH.fillText(this.stack, Gq + 35, GF + 17))
    0 < this.expireTime &&
      (GH.beginPath(),
      GH.moveTo(Gq + 25, GF + 25),
      GH.arc(Gq + 25, GF + 25, 25, em, em - this.getCooldown(), false),
      GH.closePath(),
      (GH.globalAlpha = 0.75),
      (GH.fillStyle = '#222'),
      GH.fill(),
      (GH.globalAlpha = 1))
  }
}
var G1 = ['hearts'],
  G2 = []
function G3() {
  this.delay = 0
  this.frames = []
  this.isGif = true
  this.push = function (GQ) {
    this.frames.push(GQ)
  }
  this.getFrame = function (GQ) {
    return this.frames[GQ]
  }
  this.getLength = function () {
    return this.frames.length
  }
  this.getTexture = function () {
    return this.getFrame(Math.floor(fg / this.delay) % this.getLength())
  }
  this.loadFromFrameData = function (GQ) {
    if (0 !== GQ.length) {
      var GK,
        GI = document.createElement('canvas'),
        GH = GI.getContext('2d'),
        Gq = document.createElement('canvas'),
        GF = Gq.getContext('2d'),
        Gs = GQ[0].getImage()
      this.delay = 10 * GQ[0].frameInfo.delay
      GI.width = Gs.width
      GI.height = Gs.height
      Gq.width = Gs.width
      Gq.height = Gs.height
      for (GK of GQ) {
        GH.clearRect(0, 0, GI.width, GI.height)
        GH.drawImage(Gq, 0, 0)
        var Gy = GK.getImage(),
          Gz = Gy.getContext('2d'),
          Gz =
            (GF.drawImage(Gy, 0, 0),
            Gz.clearRect(0, 0, Gy.width, Gy.height),
            Gz.drawImage(Gq, 0, 0),
            GK.frameInfo),
          GO = Gz.disposal
        2 === GO
          ? GF.clearRect(Gz.x, Gz.y, Gz.width, Gz.height)
          : 3 === GO &&
            (GF.clearRect(0, 0, Gq.width, Gq.height), GF.drawImage(GI, 0, 0))
        this.push(f3.Texture.from(Gy))
      }
    }
  }
}
function G4(GQ) {
  return GG[GQ % GG.length]
}
function G5(GQ) {
  return AE[GQ % AE.length]
}
function G6(GQ) {
  for (var GK = GQ.length - 1; 0 < GK; GK--) {
    var GI = Math.floor(Math.random() * (GK + 1)),
      GH = GQ[GK]
    GQ[GK] = GQ[GI]
    GQ[GI] = GH
  }
  return GQ
}
for (var G7 = [], G8 = [], G9 = 0; G9 < 180; G9++) {
  var Gf = tinycolor({
      h: 2 * G9,
      s: 97.25,
      v: 100,
    }),
    GA = Gf.toRgb()
  G7[G9] = (GA.r << 16) + (GA.g << 8) + GA.b
  G8[G9] = Gf.toHexString()
}
var GG = G6(G7.slice(0)),
  Gk = G6(G8.slice(0)),
  Ga =
    (delete G7,
    delete G8,
    fm.enabled &&
      fm.foodColors &&
      (G4 = function (GQ) {
        return fm.foodColors[GQ % fm.foodColors.length]
      }),
    [
      '#FFFFFF',
      '#FF9BDC',
      '#FF00FF',
      '#FF0000',
      '#C80000',
      '#FF6900',
      '#FFFF00',
      '#00FF00',
      '#008000',
      '#008080',
      '#00FFFF',
      '#0096FF',
      '#0000FF',
      '#CA48FA',
      '#8A2BE2',
      '#D2C878',
      '#8C4614',
    ]),
  Gb = {}
function GP(GQ) {
  return 0 === GQ || GQ === fD.playerId
    ? 'You cannot block that player.'
    : fH.includes(GQ)
    ? (delete fH[GQ], 'Unblocked player with ID: ' + GQ)
    : (fH.push(GQ), 'Blocked player with ID: ' + GQ)
}
var GZ = {
    whisper: {
      description: 'Whisper a player by ID',
      triggers: ['whisper', 't', 'w'],
      action: function (GQ) {
        var GK = parseInt(GQ[0])
        isNaN(GK)
          ? fD.selfMsg('Invalid player id.')
          : (0 != (GQ = GQ.slice(1).join(' ')).length &&
              fD.sendPacket(new fl.sendWhisper(GK, GQ)),
            eX('/t '.concat(GK, ' ')))
      },
    },
    reply_whisper: {
      description: 'Reply to previous whisper',
      triggers: ['reply', 'r'],
      action: function (GQ) {
        0 != (GQ = GQ.join(' ')).length &&
          fD.sendPacket(new fl.sendWhisper(0, GQ))
        eX('/r ')
      },
    },
    party_chat: {
      description: 'Send a message to other party members',
      triggers: ['party', 'p'],
      action: function (GQ) {
        0 != (GQ = GQ.join(' ')).length && fD.sendPacket(new fl.sendChat(GQ, 1))
        eX('/p ')
      },
    },
    invite: {
      description: 'Invite a player to the party',
      triggers: ['invite', 'i'],
      action: function (GQ) {
        GQ = parseInt(GQ[0])
        isNaN(GQ)
          ? fD.selfMsg('Invalid ID.')
          : fD.sendPacket(new fl.sendPartyAction(0, GQ))
      },
    },
    leave: {
      description: 'Leave your current party',
      triggers: ['leave', 'l'],
      action: function (GQ) {
        fD.sendPacket(new fl.sendPartyAction(3, 0))
      },
    },
    promote: {
      description: 'Promote a party member to leader',
      triggers: ['promote'],
      action: function (GQ) {
        GQ = parseInt(GQ[0])
        isNaN(GQ)
          ? fD.selfMsg('Invalid ID.')
          : fD.sendPacket(new fl.sendPartyAction(2, GQ))
      },
    },
    kick: {
      description: 'Kick a player from the party',
      triggers: ['kick'],
      action: function (GQ) {
        GQ = parseInt(GQ[0])
        isNaN(GQ)
          ? fD.selfMsg('Invalid ID.')
          : fD.sendPacket(new fl.sendPartyAction(1, GQ))
      },
    },
    clear: {
      description: 'Clear the chat tab',
      triggers: ['clear'],
      action: function () {
        return $('#chat-body-' + A7).empty()
      },
    },
    info: {
      description: 'Get your current ID',
      triggers: ['info'],
      action: function (GQ) {
        0 < fD.playerId
          ? fD.selfMsg('Your id is ' + fD.playerId)
          : fD.selfMsg(
              'You need to be connected to a server to use this command.'
            )
      },
    },
    scrimmenu: {
      description: 'Show the scrimmage menu',
      triggers: ['scrimmenu'],
      action: function (GQ) {
        fx.css('display', 'none' == fx.css('display') ? 'block' : 'none')
      },
    },
    join: {
      description: 'Join a party with a code',
      triggers: ['join', 'j'],
      action: function (GQ) {
        null != (GQ = GQ[0]) &&
          0 != GQ.length &&
          fD.sendPacket(new fl.sendPartyJoin(GQ))
      },
    },
    private: {
      description: 'Set the party to private',
      triggers: ['private'],
      action: function (GQ) {
        fD.sendPacket(new fl.sendPartyAction(4, 1))
      },
    },
    public: {
      description: 'Allow players to join the party without an invite',
      triggers: ['public'],
      action: function (GQ) {
        fD.sendPacket(new fl.sendPartyAction(4, 0))
      },
    },
    reset_chat: {
      description: 'Reset chat size',
      triggers: ['resetchat'],
      action: function (GQ) {
        $('#chat-panel').css('width', '360px')
        $('#chat-panel').css('height', '250px')
      },
    },
    reset_chat_tabs: {
      description: 'Reset chat tab settings',
      triggers: ['resetchattabs'],
      action: function (GQ) {
        A8['_ChatTabs'] = JSON.parse(JSON.stringify(A3))
        ej()
        eL()
      },
    },
    spectate: {
      description: 'Spectate a player',
      triggers: ['spectate', 's'],
      action: function (GQ) {
        GQ = parseInt(GQ[0])
        isNaN(GQ)
          ? fD.selfMsg('Invalid ID.')
          : fD.sendPacket(new fl.sendSpectate(GQ))
      },
    },
    disconnect: {
      description: 'Disconnect from the server',
      triggers: ['disconnect'],
      action: function (GQ) {
        fD.disconnect()
      },
    },
    account: {
      description: 'Get Account UID',
      triggers: ['account'],
      action: function (GQ) {
        null === fC
          ? fD.selfMsg('You are not logged in.')
          : fD.selfMsg('UID: ' + fC.uid)
      },
    },
    block: {
      description: 'Block or unblock a player by ID',
      triggers: ['block', 'b'],
      action: function (GQ) {
        GQ = parseInt(GQ[0])
        isNaN(GQ) || ((GQ = GP(GQ)), fD.selfMsg(GQ))
      },
    },
    renderer: {
      description: 'Get current renderer',
      triggers: ['renderer'],
      action: function () {
        fD.selfMsg(
          'Current renderer is ' + (f0.renderer.gl ? 'WebGL' : 'Canvas')
        )
      },
    },
  },
  Go = [
    '4Head',
    'BibleThump',
    'DansGame',
    'DatSheffy',
    'FailFish',
    'FeelsBadMan',
    'FeelsGoodMan',
    'FeelsMadMan',
    'GabeN',
    'HassanChop',
    'HeyGuys',
    'Kappa',
    'KappaPride',
    'Keepo',
    'Kreygasm',
    'NotLikeThis',
    'OMGScoots',
    'PJSalt',
    'PogChamp',
    'rekt',
    'rip',
    'SaltyCorn',
    'sodaC',
    'sodaHeyGuys',
    'sodaNOPE',
    'sodaW',
    'SwiftRage',
    'WutFace',
    'ResidentSleeper',
    'LUL',
    'MikuFail',
    'PepoHype',
    'KKona',
    'MeguFace',
    'AngryBork',
    'AngeryBOYE',
    'TohruFlex',
    'Sadness',
    'nou',
    'MarioFP',
  ],
  GD = [
    'Ditto',
    'MichaelPls',
    'RareParrot',
    'PepePls',
    'RooNoticeMe',
    'PepeEyes',
    'EverythingsFine',
    'WeSmart',
    'PandaAww',
    'SleepyCat',
    'Clap',
  ],
  Gl = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ],
  Gg = [
    '',
    'MOUSE1',
    'MOUSE2',
    'MOUSE3',
    'MOUSE4',
    'MOUSE5',
    'HELP',
    '',
    'BACK_SPACE',
    'TAB',
    '',
    '',
    'CLEAR',
    'ENTER',
    'ENTER_SPECIAL',
    '',
    'SHIFT',
    'CONTROL',
    'ALT',
    'PAUSE',
    'CAPS_LOCK',
    'KANA',
    'EISU',
    'JUNJA',
    'FINAL',
    'HANJA',
    '',
    'ESCAPE',
    'CONVERT',
    'NONCONVERT',
    'ACCEPT',
    'MODECHANGE',
    'SPACE',
    'PAGE_UP',
    'PAGE_DOWN',
    'END',
    'HOME',
    'LEFT',
    'UP',
    'RIGHT',
    'DOWN',
    'SELECT',
    'PRINT',
    'EXECUTE',
    'PRINTSCREEN',
    'INSERT',
    'DELETE',
    '',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    ':',
    ';',
    '<',
    '=',
    '>',
    '?',
    'AT',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'OS_KEY',
    '',
    'CONTEXT_MENU',
    '',
    'SLEEP',
    'NUMPAD0',
    'NUMPAD1',
    'NUMPAD2',
    'NUMPAD3',
    'NUMPAD4',
    'NUMPAD5',
    'NUMPAD6',
    'NUMPAD7',
    'NUMPAD8',
    'NUMPAD9',
    'MULTIPLY',
    'ADD',
    'SEPARATOR',
    'SUBTRACT',
    'DECIMAL',
    'DIVIDE',
    'F1',
    'F2',
    'F3',
    'F4',
    'F5',
    'F6',
    'F7',
    'F8',
    'F9',
    'F10',
    'F11',
    'F12',
    'F13',
    'F14',
    'F15',
    'F16',
    'F17',
    'F18',
    'F19',
    'F20',
    'F21',
    'F22',
    'F23',
    'F24',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    'NUM_LOCK',
    'SCROLL_LOCK',
    'WIN_OEM_FJ_JISHO',
    'WIN_OEM_FJ_MASSHOU',
    'WIN_OEM_FJ_TOUROKU',
    'WIN_OEM_FJ_LOYA',
    'WIN_OEM_FJ_ROYA',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    'CIRCUMFLEX',
    'EXCLAMATION',
    'DOUBLE_QUOTE',
    'HASH',
    'DOLLAR',
    'PERCENT',
    'AMPERSAND',
    'UNDERSCORE',
    'OPEN_PAREN',
    'CLOSE_PAREN',
    'ASTERISK',
    'PLUS',
    'PIPE',
    'HYPHEN_MINUS',
    'OPEN_CURLY_BRACKET',
    'CLOSE_CURLY_BRACKET',
    'TILDE',
    '',
    '',
    '',
    '',
    'VOLUME_MUTE',
    'VOLUME_DOWN',
    'VOLUME_UP',
    '',
    '',
    'SEMICOLON',
    'EQUALS',
    'COMMA',
    'MINUS',
    'PERIOD',
    'SLASH',
    'BACK_QUOTE',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    'OPEN_BRACKET',
    'BACK_SLASH',
    'CLOSE_BRACKET',
    'QUOTE',
    '',
    'META',
    'ALTGR',
    '',
    'WIN_ICO_HELP',
    'WIN_ICO_00',
    '',
    'WIN_ICO_CLEAR',
    '',
    '',
    'WIN_OEM_RESET',
    'WIN_OEM_JUMP',
    'WIN_OEM_PA1',
    'WIN_OEM_PA2',
    'WIN_OEM_PA3',
    'WIN_OEM_WSCTRL',
    'WIN_OEM_CUSEL',
    'WIN_OEM_ATTN',
    'WIN_OEM_FINISH',
    'WIN_OEM_COPY',
    'WIN_OEM_AUTO',
    'WIN_OEM_ENLW',
    'WIN_OEM_BACKTAB',
    'ATTN',
    'CRSEL',
    'EXSEL',
    'EREOF',
    'PLAY',
    'ZOOM',
    '',
    'PA1',
    'WIN_OEM_CLEAR',
    '',
  ],
  GY = [
    'heart',
    'star',
    'home',
    'apple',
    'spiral',
    'dice',
    'chicken',
    'ghost',
    'burger',
    'bow',
    'cloud',
    'skull',
    'mug',
    'flower',
    'music',
    'checkmark',
    'clover',
    'crown',
    'fancy',
    'fish',
    'flower2',
    'lightning',
    'paw',
    'duck',
    'snowflake',
    'bomb',
    'butterfly',
    'cherry',
    'watermelon',
  ],
  GX = []
function GE(GQ) {
  return Gl[(GQ >> 4) & 15] + Gl[15 & GQ]
}
function GL(GQ) {
  if (GQ <= 0) {
    return '0:00'
  }
  var GK = Math.floor(GQ / 3600),
    GI = Math.floor((GQ - 3600 * GK) / 60),
    GQ = GQ - 3600 * GK - 60 * GI
  return (
    (0 < GK ? GK + ':' : '') +
    (GI = GI < 10 && 0 < GK ? '0' + GI : GI) +
    ':' +
    (GQ < 10 ? '0' + GQ : GQ)
  )
}
function Gc(GQ) {
  return (
    (GQ = GQ.toString().split('.')),
    ((GQ[0] = GQ[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')), GQ.join('.'))
  )
}
function Gj(GQ) {
  if (GQ.dataTransfer.items) {
    for (var GK = 0; GK < GQ.dataTransfer.items.length; GK++) {
      if ('file' === GQ.dataTransfer.items[GK].kind) {
        return GQ.dataTransfer.items[GK].getAsFile()
      }
    }
  } else {
    if ((GK = 0) < GQ.dataTransfer.files.length) {
      return GQ.dataTransfer.files[GK]
    }
  }
}
var Gu = {
    FOOD: 6,
    EJECTED_MASS: 1,
    PLAYER: 2,
    VIRUS: 3,
    MOTHERCELL: 4,
    POWERUP: 5,
    NONE: 0,
  },
  GN = {
    DEFAULT: 0,
    SHORT: 1,
  },
  Gi = {
    CENTER: 0,
    MASS: 1,
    TOGG: 2,
  },
  GW = {
    ULTRA: 1,
    HIGH: 0.8,
    MEDIUM: 0.7,
    LOW: 0.5,
    VERYLOW: 0.25,
  },
  Gx = {
    MAP: 0,
    MODE: 1,
    SIZE: 2,
    STARTMASS: 3,
    LOCK: 4,
    PLAYER_UPDATE: 5,
    PLAYER_LIST: 6,
    VIRUS_DENSITY: 7,
    PUBLIC: 8,
    PASSWORD: 9,
    NAME: 10,
    RESPAWN_DELAY: 11,
    AUTOSPLIT: 12,
  },
  Gp = {
    0: 'Spectator',
    1: 'Blue',
    2: 'Red',
    3: 'Green',
    4: 'Yellow',
    5: 'Purple',
    6: 'Orange',
    7: 'Pink',
    8: 'Brown',
  },
  Gh = {
    FAILURE: 1,
    SUCCESS: 0,
  },
  Gv = {
    ALL: 1,
    PARTY: 2,
    WHISPER: 4,
    SYSTEM: 8,
    ADMIN: 16,
  },
  GB = {
    UNKNOWN: -1,
    ALIVE: 0,
    DEAD: 1,
    SPECTATE: 2,
  },
  GS = ['white', '#25f', '#f31', 'green', 'yellow', 'purple', 'orange'],
  GR = [
    [0, 'Verdana', 54],
    [1, 'ampad', 75],
    [2, 'burnstown', 81],
    [3, 'chlorinar', 75],
    [4, 'Facon', 75],
    [5, 'archistico', 75],
    [6, 'breakaway', 81],
    [7, 'conformity', 81],
    [8, 'electroharmonix', 70],
    [9, 'PWJoyeuxNoel', 70],
    [10, 'leckerli-one', 75],
    [101, 'IceCaps', 81, 51711],
    [102, 'BrazierFlame', 81, 14833698],
  ].reduce(function (GQ, GK) {
    var GK = _slicedToArray(GK, 4),
      GI = GK[0],
      GH = GK[1],
      Gq = GK[2],
      GK = GK[3]
    return (
      new FontFaceObserver(GH).load(null, 10000).catch(function () {}),
      0 < GI &&
        GI < 64 &&
        $('#spNameFont').append(
          '<option value="'
            .concat(GI, '" style="font-family:')
            .concat(GH, '">')
            .concat(GH.charAt(0).toUpperCase() + GH.slice(1), '</option>')
        ),
      (GQ[GI] = {
        fontSize: Math.round((Gq / 54) * 69),
        fontWeight: 0 === GI ? 'bold' : 'normal',
        stroke: GK || 0,
        fontFamily: GH,
      }),
      GQ
    )
  }, {}),
  GM =
    ($(window).focus(function () {
      fs = true
    }),
    $(window).blur(function () {
      fs = false
    }),
    new (function () {
      this.consented = false
      this.policyID = 'CP_0918_01'
      this.policyLink = 'https://gota.io/policies/privacy.html?v='.concat(
        this.policyID,
        '#cookies'
      )
      this.consentOption = $('#cc_acceptCookies')
      this.consentCookie = {
        name: 'cookieConsent',
        value: 'yes+' + this.policyID,
        exdays: 730,
        path: '/web',
      }
      this.cookieBanner = {
        banner: $('#cookie-banner'),
        decline: $('#declineCookies'),
        accept: $('#acceptCookies'),
        handlersBound: false,
      }
      this.init = function () {
        this.backwardsCompatable()
        this.consentOption.on('change', function (GQ) {
          GM.consentHandler($(this).prop('checked'))
        })
        this.getConsentCookie() === this.consentCookie.value
          ? (this.consentHandler(true), this.showCookieBanner(false))
          : (this.consentHandler(false), this.showCookieBanner(true))
      }
      this.consentHandler = function (GQ) {
        if (
          ((this.consented = GQ),
          (aiptag.consented = GQ),
          this.consentOption.prop('checked', GQ),
          GQ)
        ) {
          if (
            (this.createConsentCookie(),
            this.showCookieBanner(false),
            GM.consented)
          ) {
            ;(GQ = window.localStorage.getItem('theme')) && eK(GQ)
            var GK = window.localStorage.getItem('keybinds')
            if (GK) {
              for (var GI in ((GK = JSON.parse(GK)), A9)) {
                var GH = GK[GI]
                Number.isInteger(GH) && (A9[GI] = GH)
              }
            }
            var Gq = window.localStorage.getItem('options')
            if (Gq) {
              for (var GF in ((Gq = JSON.parse(Gq)), A8))
                GF in Gq && (A8[GF] = Gq[GF])
            }
            var Gs,
              GQ = function (kk) {
                return 24 * kk * 60 * 60 * 1000
              },
              Gy = window.localStorage.getItem('fixes_version'),
              Gz =
                (null == Gy &&
                  window.localStorage.setItem(
                    'next_notice',
                    Date.now() + GQ(2)
                  ),
                '')
            for (Gs of [
              [
                13,
                'Thanks to people using the "camlan" creator code and donating, we\'ve got some new features:\n- Option for horizontal score panel. (If you are already using a horizontal score panel script, you can probably delete it.)\n- Options to hide leaderboard and party headers.\n- Added "/join" to party codes for ease of copying.\n- Added the ability to right-click names on the leaderboard.\n- Fixed a Gota bug where right clicking cells wasn\'t working correctly (especially with tiny cells).',
              ],
              [
                14,
                'Optimised ejected mass skin rendering and a few other things.\n\nFixed a Gota bug that was causing spiked cells to appear larger or smaller than they should be.\n\nFixed a Gota bug causing incorrect online friend counts in the social panel.\n\nFixed an issue where the server list region was unselecting everytime you press Play or Spectate.',
              ],
              [15, 'Fixed an issue causing the Powerups gamemode to break.'],
            ]) {
              var GO = _slicedToArray(Gs, 2),
                GV = GO[0],
                GO = GO[1]
              Gy < GV && (Gz += GO + '\n\n')
            }
            0 !== Gz.length
              ? Ao(
                  'Gota Fixes was updated!',
                  (Gz +=
                    '\nIf you enjoy these updates, please consider donating to help me make more!')
                )
              : ((kf = Date.now()),
                window.localStorage.getItem('next_notice') <= kf &&
                  (Ao(
                    'Gota Fixes Notice',
                    "Hi guys, Camlan here (Gota Fixes developer). I just wanted to say that I enjoy giving the community a smooth experience when playing Gota, but updating the script takes a lot of my time and I can no longer afford to do it without donations. If you enjoy using the script and would like to see new features, please donate.\n\nI have many new features I can add to the script that I'm sure would benefit everyone. Once I have enough donations I will start working on some of these new features straight away!\n\nIf you have any questions or suggestions, please message me on Discord at Camlan#9322."
                  ),
                  window.localStorage.setItem('next_notice', kf + GQ(7))))
            window.localStorage.setItem('fixes_version', '15')
            var Gm,
              k0,
              k1 = window.localStorage.getItem('fixes_options'),
              k2 = window.localStorage.getItem('fixes_keybinds')
            if (k1) {
              var k3,
                k4 = (k1 = JSON.parse(k1))[er]
              for (k3 in (null != k4 &&
                4609 == (4609 & k4) &&
                (eC.forEach(function (kk) {
                  var kk = _slicedToArray(kk, 3),
                    ka = kk[0],
                    kb = kk[1],
                    kk = kk[2]
                  Af[kk] =
                    1 === kb ? !!(k4 & (1 << ka)) : (k4 >> ka) & ((1 << kb) - 1)
                }),
                delete k1[er]),
              Af))
                k3 in k1 && (Af[k3] = k1[k3])
            }
            if (k2) {
              for (var k5 in ((k2 = JSON.parse(k2)), AA))
                k5 in k2 && (AA[k5] = k2[k5])
            }
            for (Gm in (Object.assign(A8, Af), Object.assign(A9, AA), A9))
              e8($('#' + Gm))
            for (k0 of Object.entries(A8)) {
              var k6 = _slicedToArray(k0, 2),
                k7 = k6[0],
                k8 = k6[1],
                k9 = $('#' + k7)
              switch (k7.charAt(0)) {
                case 'c':
                  true === k8 && (k9.prop('checked', true), eM(k9))
                  break
                case 's':
                  k9.val(k8), eU(k9)
                  break
                case 'r':
                  k9.val(k8), eJ(k9)
                  break
                case 'i':
                  k9.val(k8), ew(k9)
              }
            }
            $('#chat-panel').css('width', A8.iChatWidth)
            $('#chat-panel').css('height', A8.iChatHeight)
            A8.cThemeEnabled || ed('cThemeEnabled')
            var kf = window.localStorage.getItem('name'),
              kA =
                (null != kf && $('#name-box').val(kf),
                window.localStorage.getItem('subpanel'))
            if (kA) {
              for (var kG in ((kA = JSON.parse(kA)), AL))
                kG in kA && (AL[kG] = kA[kG])
            }
          }
          eP()
          $('#spNameColor').spectrum({
            color: AL.nameColor,
            showAlpha: false,
            showInput: true,
            preferredFormat: 'rgb',
          })
          $('#spChatColor').spectrum({
            showPaletteOnly: true,
            showPalette: true,
            color: Ga[AL.chatColor],
            palette: Ga,
          })
          $('#spSkinName').val(AL.skinName)
          $('#spLowerName').prop('checked', AL.lowerName)
          $('#spEffect').val(AL.effect)
          $('#spNameFont').val(AL.nameFont)
          $('#btn-chg-ln').on('click', function () {
            var kk, ka
            fr &&
              (kk = prompt('Enter new locked name!')) &&
              ((ka =
                'string' != typeof kk ? 'Please enter a valid name!' : null),
              kk.length < 2 &&
                (ka = 'Locked names must be 2 or more characters long.'),
              null !==
              (ka =
                20 < kk.length
                  ? 'Locked names must be 20 or less characters long.'
                  : ka)
                ? alert(ka)
                : ((kk = kk.trim()),
                  confirm(
                    "You are about to change your locked name to: '".concat(
                      kk,
                      "'.\nLocked names can only be changed once per week.\n\nAre you sure you wish to continue?"
                    )
                  ) && fD.sendPacket(new fl.sendLockedNameChange(kk))))
          })
          $('#btn-updateSP').on('click', function () {
            eb()
          })
          $('#btn-subpanel-rules').on('click', function () {
            AL.rules = true
            eP()
          })
          $('#no_cookie_consent').hide()
          'none' !== $('#account-loader').css('display')
            ? $('#guest').hide()
            : $('#guest').show()
        } else {
          this.deleteConsentCookie()
          null !== firebase.auth().currentUser &&
            firebase
              .auth()
              .signOut()
              .then(function () {})
              .catch(function () {})
          $('#authed').hide()
          $('#account-loader').hide()
          $('#guest').hide()
          $('#no_cookie_consent').show()
          this.showCookieBanner(true)
        }
      }
      this.showCookieBanner = function (GQ) {
        GQ
          ? (this.cookieBanner.handlersBound ||
              (this.bindBannerHandlers(),
              (this.cookieBanner.handlersBound = true)),
            this.cookieBanner.banner.slideDown())
          : this.cookieBanner.banner.slideUp()
      }
      this.bindBannerHandlers = function () {
        this.cookieBanner.decline.on('click', function (GQ) {
          GM.consentHandler(false)
          GM.showCookieBanner(false)
        })
        this.cookieBanner.accept.on('click', function (GQ) {
          GM.consentHandler(true)
          GM.showCookieBanner(false)
        })
        $('#cookie-banner .description').append(
          ' <a href="'.concat(
            this.policyLink,
            '" target="_blank">Our Cookie Policy!</a>'
          )
        )
      }
      this.createConsentCookie = function () {
        var GQ = new Date(),
          GQ =
            (GQ.setTime(
              GQ.getTime() + 24 * this.consentCookie.exdays * 60 * 60 * 1000
            ),
            'expires=' + GQ.toUTCString())
        document.cookie = ''
          .concat(this.consentCookie.name, '=')
          .concat(this.consentCookie.value, ';')
          .concat(GQ, ';path=')
          .concat(this.consentCookie.path, ';')
      }
      this.deleteConsentCookie = function () {
        document.cookie = ''
          .concat(
            this.consentCookie.name,
            '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path='
          )
          .concat(this.consentCookie.path, ';')
      }
      this.getConsentCookie = function () {
        for (
          var GQ = this.consentCookie.name + '=',
            GK = decodeURIComponent(document.cookie).split(';'),
            GI = 0;
          GI < GK.length;
          GI++
        ) {
          for (var GH = GK[GI]; ' ' == GH.charAt(0); ) {
            GH = GH.substring(1)
          }
          if (0 == GH.indexOf(GQ)) {
            return GH.substring(GQ.length, GH.length)
          }
        }
        return false
      }
      this.backwardsCompatable = function () {
        for (
          var GQ = 'cookieconsent_status=',
            GK = decodeURIComponent(document.cookie).split(';'),
            GI = null,
            GH = 0;
          GH < GK.length;
          GH++
        ) {
          for (var Gq = GK[GH]; ' ' == Gq.charAt(0); ) {
            Gq = Gq.substring(1)
          }
          0 == Gq.indexOf(GQ) && (GI = Gq.substring(GQ.length, Gq.length))
        }
        'allow' === GI && this.createConsentCookie()
        document.cookie =
          'cookieconsent_status=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/web;'
      }
    })()),
  GU = new (function () {
    this.playCounter = 0
    this.deathCounter = 0
    this.incrementPlay = function () {
      return this.playCounter++, this.playCounter % 5 == 1
    }
  })()
'undefined' != typeof aipPlayer &&
  aiptag.cmd.player.push(function () {
    adplayer = new aipPlayer({
      AD_WIDTH: 960,
      AD_HEIGHT: 540,
      AD_CENTERPLAYER: false,
      LOADING_TEXT: 'Advertisement Loading...',
      PREROLL_ELEM: document.getElementById('preroll'),
      AIP_COMPLETE: function () {
        fD.spectate ? fD.spec() : fD.play()
      },
    })
  })
var GJ,
  Gw,
  Gd,
  GT,
  Gr = (function () {
    function GQ(kb, kP, kZ) {
      var ko = kZ.min,
        kD = kZ.max,
        kl = kZ.defaultVal,
        kg = kZ.step,
        kY = kZ.onChange,
        kZ = A8[kb],
        kP = $(
          '\n          <tr>\n            <td style="overflow-x: visible" data-balloon="Default: '
            .concat(kl, '" data-balloon-pos="up">')
            .concat(
              kP,
              ': <input class="options-input" style="float: none;" value="'
            )
            .concat(kZ, '"></td>\n            <td><input type="range" min="')
            .concat(ko, '" max="')
            .concat(kD, '" value="')
            .concat(kZ, '" step="')
            .concat(kg, '"/></td>\n          </tr>\n        ')
        ),
        kX = kP.find('.options-input'),
        kE = kP.find('[type=range]')
      return (
        kX.on('change', function () {
          var kL = parseInt(kX.val()),
            kc = (kL = isNaN(kL) ? kl : kL),
            kj = kD,
            kL = Math.min(Math.max(kc, ko), kj)
          kX.val(kL)
          kE.val(kL)
          kY(kb, kL)
        }),
        kE.on('input', function () {
          var kL = parseInt(kE.val())
          kX.val(kL)
          kY(kb, kL)
        }),
        kY(kb, kZ),
        kP
      )
    }
    function GK() {
      fD &&
        fh &&
        ((fh = false),
        (fv = Date.now()),
        fD.sendPacket(new fl.sendEjectMass(false)))
    }
    function GI(kb) {
      jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: fV + '/api/v1/utilities/servers',
        success: function (kP) {
          var kZ
          for (kZ of kP)
            !(function (ko) {
              var kD = ko.region,
                ko = ko.servers
              A0[kD] = {}
              ko.sort(function (kl, kg) {
                return kl.order - kg.order
              }).forEach(function (kl) {
                kl.players = +kl.players
                kl.bots || (kl.bots = 0)
                kl.playersText = kl.players + kl.bots + '/' + kl.playersMax
                0 < kl.bots && (kl.playersText += '*')
                kl.region = kD
                A0[kD][kl.name] = kl
              })
            })(kZ)
          eo()
          null != kb ? kb() : null != fc && el(fc.name)
        },
        error: eo,
      })
    }
    function GH(kb, kP) {
      if (kb) {
        return $(kP).prop('disabled', false), void $(kP).text('Set')
      }
      $(kP).prop('disabled', true)
      $(kP).text('...')
    }
    function Gq(kb) {
      kb && !Au
        ? ((Au = $('<thead><th colspan="2">Gota Fixes</th></thead>').add(
            $('<tbody>').append(
              '<tr>\n                  <td>Rainbow Name</td>\n                  <td><input type="checkbox" id="spRainbowName"></td>\n                </tr>',
              GQ('rRainbowNameSpeed', 'Rainbow Name Speed', A6),
              '<tr>\n                  <td>Rainbow Cell</td>\n                  <td><input type="checkbox" id="spRainbowCell"></td>\n                </tr>',
              GQ('rRainbowCellSpeed', 'Rainbow Cell Speed', A6)
            )
          )),
          k0.append(Au),
          k0
            .find('[type=checkbox]')
            .change(function () {
              eM($(this))
            })
            .prop('checked', function () {
              return A8[this.id]
            }),
          k0.find('[type=range]').css('width', '110px'))
        : kb ||
          ((A8.spRainbowName = A8.spRainbowCell = false),
          null != (kb = fD.playerData) && kb.onRainbow(),
          Au && (Au.remove(), (Au = null)))
      eP()
    }
    fP = document.getElementById('canvas')
    fZ = document.getElementById('minimap-canvas')
    fo = fZ.getContext('2d')
    fu = $('#main')
    fN = $('#party-panel')
    fi = $('.hud-panel')
    fJ = $('#score-panel')
    fx = $('#main-scrimmage')
    fp = $('#context-menu')
    $('#chat-input')
    fW = $('#leaderboard-header')
    fU = $('#scrimmage-custom')
    fz.mouseFrozenDiv = $('#score-mouse')
    fz.playerScore = $('#playerScore')
    fz.playerCells = $('#playerCells')
    fz.playerFps = $('#playerFps')
    fz.resetInfo = $('#extra-reset-timer')
    fz.resetTime = $('#resetTime')
    fz.respawnInfo = $('#extra-respawn-cooldown')
    fz.respawnCooldown = $('#respawnCooldown')
    fz.spectatorCount = $('#spectatorCount')
    fz.playerCellCount = 0
    fz.minimapCoords = $('#minimap-coordinates')
    fz.partyPanel = fN
    fz.friendOnlineCount = $('#social-online-friends-count')
    $('#cShowMass').parents('tr').css('display', 'none')
    $('#sShowNames').parents('tr').css('display', 'none')
    $('#sShowSkins').parents('tr').css('display', 'none')
    $('#main-options table').prepend(
      '\n        <thead>\n          <th colspan="4">Gota Fixes Options</th>\n        </thead>\n        <tbody>\n          <tr>\n            <td colspan="3" data-balloon="Hides all locked name features (besides cell colors) of other players." data-balloon-pos="down" data-balloon-length="fit">\n              Hide Locked Name Features\n            </td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideLockedNames"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Own Name</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideOwnName"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Friend Names</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideFriendNames"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Enemy Names</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideEnemyNames"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Own Mass</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideOwnMass"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Friend Masses</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideFriendMasses"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Enemy Masses (Autosplit modes)</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideEnemyMasses"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Own Skin</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideOwnSkin"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Friend Skins</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideFriendSkins"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Enemy Skins</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideEnemySkins"></td>\n          </tr>\n          <tr>\n            <td colspan="3" data-balloon="Small cells will have smoother skins and edges, but may appear to be blurry." data-balloon-pos="up" data-balloon-length="fit">\n              Smooth Cells\n            </td>\n            <td><input type="checkbox" class="checkbox-options" id="cSmoothCells"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Horizontal Score Panel</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHorizontalScorePanel"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Leaderboard/Queue Header</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHideLeaderboardHeader"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Hide Party Header</td>\n            <td><input type="checkbox" class="checkbox-options" id="cHidePartyHeader"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Enable Sounds</td>\n            <td><input type="checkbox" class="checkbox-options" id="cEnableSounds"></td>\n          </tr>\n          <tr>\n            <td colspan="3">Split Sound: </td>\n            <td><input id="iSplitSound" style="border: none; border-radius: 5px" placeholder="https://example.wav" /></td>\n          </tr>\n          <tr>\n            <td colspan="3">Eject Sound: </td>\n            <td><input id="iEjectSound" style="border: none; border-radius: 5px" placeholder="https://example.wav" /></td>\n          </tr>\n          <tr>\n            <td colspan="3">Camera Focus</td>\n            <td>\n              <select id="sCameraFocus">\n                <option value="CENTER">Center</option>\n                <option value="MASS">Biggest Cells</option>\n              <option value="TOGG">Toggle Cell</option>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <td colspan="2" style="overflow-x: visible" data-balloon="Default: 0" data-balloon-pos="up">Camera Delay: <input class="options-input" id="cameraDelay" style="float: none;"></td>\n            <td colspan="2"><input type="range" id="rCameraDelay" min="0" max="250" value="90" step="1" /></td>\n          </tr>\n          <tr>\n            <td colspan="2" style="overflow-x: visible" data-balloon="Default: 0" data-balloon-pos="up">Freeze Delay: <input class="options-input" id="freezeDelay" style="float: none;"></td>\n            <td colspan="2"><input type="range" id="rFreezeDelay" min="0" max="1000" value="50" step="1" /></td>\n          </tr>\n        </tbody>\n      '
    )
    $('#main-hotkeys table').prepend(
      '\n        <thead>\n          <th colspan="4">Gota Fixes Keybinds</th>\n        </thead>\n        <tr>\n          <td colspan="3">Toggle Cell</td>\n          <td><button id="kToggCell" class="keybinds-btn"></button></td>\n        </tr>\n                        <tr>\n          <td colspan="3">Freeze Mouse Right</td>\n          <td><button id="kFreezeMouseRight" class="keybinds-btn"></button></td>\n        </tr>\n                        <tr>\n          <td colspan="3">Freeze Mouse Left</td>\n          <td><button id="kFreezeMouseLeft" class="keybinds-btn"></button></td>\n        </tr>\n                        <tr>\n          <td colspan="3">Freeze Mouse Up</td>\n          <td><button id="kFreezeMouseUp" class="keybinds-btn"></button></td>\n        </tr>\n                        <tr>\n          <td colspan="3">Freeze Mouse Down</td>\n          <td><button id="kFreezeMouseDown" class="keybinds-btn"></button></td>\n        </tr>\n                <tr>\n          <td colspan="3">Cycle Names</td>\n          <td><button id="kCycleNames" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Cycle Masses</td>\n          <td><button id="kCycleMasses" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Cycle Skins</td>\n          <td><button id="kCycleSkins" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Own Name</td>\n          <td><button id="kHideOwnName" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Friend Names</td>\n          <td><button id="kHideFriendNames" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Enemy Names</td>\n          <td><button id="kHideEnemyNames" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Own Mass</td>\n          <td><button id="kHideOwnMass" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Friend Masses</td>\n          <td><button id="kHideFriendMasses" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Enemy Masses (Autosplit)</td>\n          <td><button id="kHideEnemyMasses" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Own Skin</td>\n          <td><button id="kHideOwnSkin" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Friend Skins</td>\n          <td><button id="kHideFriendSkins" class="keybinds-btn"></button></td>\n        </tr>\n        <tr>\n          <td colspan="3">Hide Enemy Skins</td>\n          <td><button id="kHideEnemySkins" class="keybinds-btn"></button></td>\n        </tr>\n      '
    )
    $('.main-content, .main-right').css('height', '530px')
    $('.server-table tbody').css('height', '421px')
    $('.options-container').css('height', '480px')
    $('#server-content').css('height', '456px')
    $('#main-rb').css('height', '340px')
    $('.main-rb-title').css('padding', '10px')
    $('#main-account').css('height', '180px')
    $('.policyLinks')
      .css({ 'flex-wrap': 'wrap' })
      .append(
        '<span style="text-align: center">If you enjoy using Gota Fixes, please consider donating to support the developer.</span>',
        $('<a href="https://ko-fi.com/camlan" target="_blank">Donate</a>').css({
          'border-radius': '15px',
          'background-color': '#00b9fe',
          padding: '0 18px',
          'font-size': '16px',
          'text-decoration': 'none',
          'font-weight': 600,
          height: '26px',
          'line-height': '25px',
          'margin-top': '3px',
        })
      )
    Object.assign($('#account-shop')[0].dataset, {
      balloon:
        'Use code "camlan" in the "Support A Creator" section at checkout for a 10% discount!',
      balloonPos: 'left',
      balloonLength: 'medium',
    })
    $('#rAnimationDelay').attr('min', 1)
    $('#rViewDistance').attr('max', 150)
    var GF,
      Gs,
      Gy,
      Gz,
      GO,
      GV,
      Gm = document.createElement('style'),
      k0 =
        ((Gm.innerHTML +=
          '\n          .popup-container {\n            width: initial;\n            max-width: 640px;\n            min-width: 320px;\n            display: flex;\n            flex-direction: column;\n            flex-wrap: wrap;\n            align-content: center;\n          }\n\n          #popup-party-code {\n            width: 320px;\n          }\n\n          .alert-scroller {\n            max-height: 450px;\n            margin-bottom: 5px;\n            overflow-y: auto;\n          }\n\n          .alert-scroller::-webkit-scrollbar {\n            width: 6px\n          }\n          \n          .alert-scroller::-webkit-scrollbar-thumb {\n            background-color: #a9a9a9;\n            border-radius: 4px\n          }\n        '),
        (GF = $('<div class="popup-panel" style="display: none">')),
        (Gs = $('<span class="title-text menu-title">')),
        (Gy = $(
          '<div style="font: 12pt open sans; white-space: pre-line; margin: 5px 16px">'
        )),
        (Gz = $(
          '<button class="gota-btn" style="margin: 5px auto; display: block">Dismiss</button>'
        )),
        (GO = $('<div class="alert-scroller">').append(Gy, Gz)),
        GF.append(Gs, GO),
        $('.popup-container').append(GF),
        (Ao = function (kb, kP) {
          var kZ
          GF.is(':visible') ||
            ((kZ = fu.is(':visible')) && eh(fu),
            Gs.text(kb),
            Gy.html(kP),
            Gz.one('click', function () {
              eh(GF)
              kZ && ep(fu)
            }),
            ep(GF))
        }),
        $('#subpanel-content > table'))
    for (Gw in ((AD = k0.children()),
    firebase.auth().onAuthStateChanged(function (kb) {
      kb
        ? firebase
            .database()
            .ref('/friendships/' + kb.uid)
            .on('value', function (kP) {
              Gq(
                (kP =
                  (kP = kP.val()) &&
                  Object.entries(kP).some(function (kZ) {
                    var kZ = _slicedToArray(kZ, 2),
                      ko = kZ[0],
                      kZ = kZ[1]
                    return ko === AN && kZ
                  }))
              )
            })
        : Gq(false)
    }),
    (Gm.innerHTML +=
      '\n        #party-panel { width: max-content }\n        #score-panel { max-width: initial }\n        #score-panel.horizontal { display: flex }\n      '),
    (Gm.innerHTML +=
      '\n        #leaderboard-panel { padding: 5px 0 }\n        #leaderboard-panel > * { margin: 0 }\n      '),
    (Gm.innerHTML +=
      '\n        #leaderboard-canvas { pointer-events: auto }\n      '),
    document.head.appendChild(Gm),
    $('#leaderboard-canvas').contextmenu(function (kb) {
      kb = kb.offsetY
      kb = Math.floor(kb / 20)
      null != (null == (kb = fD.leaderboard[kb]) ? void 0 : kb.playerId) &&
        ei(kb.name, kb.playerId)
    }),
    (GV = fW[0]),
    (Al = function (kb) {
      kb !== GV.textContent && (GV.textContent = kb)
    }),
    eR(),
    (fh = false),
    (fv = 0),
    (window.onmousemove = function (kb) {
      fD.mouseRawX = kb.clientX
      fD.mouseRawY = kb.clientY
    }),
    (window.onkeydown = function (kb) {
      var kP = kb.which || kb.keyCode || kb.charCode
      if (!(kP <= 5)) {
        return Ak
          ? (e7(kP), void kb.preventDefault())
          : void (
              $('input').is(':focus') ||
              (27 == kP &&
                (ev(fu),
                eB($('#popup-profile') || eB($('#popup-account-username'))) &&
                  (eh($('#popup-profile')), eh($('#popup-account-username')))),
              'none' == fu.css('display') && fD.handleKey(kP))
            )
      }
    }),
    (window.onkeyup = function (kb) {
      ;(kb.which || kb.keyCode || kb.charCode) === A9.kEjectMass && GK()
    }),
    (window.onmousedown = function (kb) {
      var kP = kb.button + 1
      if (Ak) {
        return e7(kP), void kb.preventDefault()
      }
      $('input').is(':focus') || 'none' != fu.css('display') || fD.handleKey(kP)
    }),
    (window.onmouseup = function (kb) {
      kb.button + 1 === A9.kEjectMass && GK()
    }),
    window.addEventListener('blur', function () {
      A8.cDisablePersistEjectMass && GK()
    }),
    $(document).on('wheel', function (kb) {
      'none' == fu.css('display') &&
        'canvas' == kb.target.id &&
        ((kb = kb.originalEvent.wheelDelta || -1 * kb.originalEvent.deltaY),
        (fD.mouseZoom *= 0 < kb ? 1.1 : 0.9))
    }),
    document.addEventListener('contextmenu', function (kb) {
      kb.preventDefault()
    }),
    e9(),
    ef(),
    (fB = {}),
    (gifEmoteList = {}),
    Go))
      (GJ = Go[Gw]),
        $('.emote-list').append(
          "<li><img name='"
            .concat(GJ, "' title='")
            .concat(GJ, "' src='https://gota.io/emotes/")
            .concat(GJ, ".png' /></li>")
        ),
        (fB[GJ] = true)
    for (Gw in GD)
      (GJ = GD[Gw]),
        $('.gif-list').append(
          "<li><img name='"
            .concat(GJ, "' title='")
            .concat(GJ, "' src='https://gota.io/emotes/gifs/")
            .concat(GJ, ".gif' /></li>")
        ),
        (gifEmoteList[GJ] = true)
    for (var k1, k2, k3 = 0; k3 < GY.length; k3++) {
      !(function (kb) {
        var kP = GY[kb],
          kZ =
            ($('#spEffect').append(
              '<option value="'
                .concat(kb + 1, '">')
                .concat(kP.charAt(0).toUpperCase())
                .concat(kP.slice(1), '</option>')
            ),
            new Image())
        kZ.src = 'images/ejected_mass_skins/'.concat(kP, '.png')
        kZ.onload = function () {
          return (GX[kb] = f3.Texture.from(kZ))
        }
      })(k3)
    }
    for (k1 in (fm.enabled &&
      fm.customEjectedMass &&
      (new Image().src = 'images/events/'.concat(fm.key, '/ejected_mass.png')),
    ez)) {
      var k4 = ez[k1],
        k5 = ((Gd = 'images/powerups/'.concat(k4.img, '.png')), new Image())
      k5.addEventListener(
        'load',
        function (kb, kP) {
          kb.texture = f3.Texture.from(kP)
          kb.texture.defaultAnchor = f7
        }.bind(null, k4, k5)
      )
      k5.src = Gd
      k4.image = k5
    }
    for (
      es = f3.Texture.from('images/shield.png'),
        eF = f3.Texture.from('images/debuff.png'),
        es.defaultAnchor = eF.defaultAnchor = f7,
        Gw = 0;
      Gw < G1.length;
      Gw++
    ) {
      GT = Gw
      gifFrames({
        url: 'images/effects/'.concat(G1[GT], '.gif'),
        frames: 'all',
        cumulative: false,
        outputType: 'canvas',
      }).then(function (kb) {
        var kP = new G3()
        kP.loadFromFrameData(kb)
        G2[GT] = kP
      })
    }
    function k6(kb) {
      kG.style.width = kf + kb.clientX - k8 + 'px'
      kG.style.height = kA - (kb.clientY - k9) + 'px'
    }
    function k7(kb) {
      document.documentElement.removeEventListener('mousemove', k6, false)
      document.documentElement.removeEventListener('mouseup', k7, false)
    }
    GO = _slicedToArray(
      window.location.href.split('#').slice(1).join('#').split('&'),
      2
    )
    k2 = GO[0]
    fS = GO[1]
    AZ = function () {
      null != (k2 = eD(k2) || eD(window.localStorage.getItem('server')))
        ? (el(k2.name), eg(k2.region))
        : null != fc
        ? el(fc.name)
        : (eg('eu'), el('Vendetta'))
    }
    firebase
      .database()
      .ref('/game')
      .on('value', function (kb) {
        var kP,
          kZ = kb.val(),
          kb =
            (/\d+\.\d+/.exec(version)[0] !== /\d+\.\d+/.exec(kZ.version)[0] &&
              fD.selfMsg(
                'Gota has updated to version '.concat(
                  kZ.version,
                  '. Gota Fixes script may be unstable.'
                )
              ),
            kZ.motd)
        for (kP in (null == kb ||
          kb.toLowerCase().includes('store') ||
          fT === kb ||
          ((fT = kb), fD.selfMsg(kb)),
        kZ.listRefresh != Aj &&
          ((Aj = kZ.listRefresh),
          (A0 = {}),
          GI(AZ),
          clearInterval(Ac),
          (Ac = setInterval(function () {
            GI()
          }, kZ.listRefresh))),
        kZ.titles))
          Gb[kP] = kZ.titles[kP]
      })
    fm.enabled &&
      !A8.cDisableEventSkins &&
      $('body').toggleClass('event-' + fm.key)
    $('.server-tab').on('click', function () {
      eg($(this).attr('region'))
    })
    $('#btn-play').on('click', function () {
      null == fc ||
        Date.now() < fw ||
        (0 !== fD.myCells.size && this.currentServerName === fc.name
          ? eh(fu)
          : ((fD.spectate = false),
            GU.incrementPlay() && 'undefined' != typeof adplayer
              ? (aiptag.cmd.player.push(function () {
                  adplayer.startPreRoll()
                }),
                eh(fu),
                eR(),
                (fw = Date.now() + 2000))
              : fD.play()))
    })
    $('#btn-servers').on('click', function () {
      f('main-servers')
    })
    $('#btn-options').on('click', function () {
      f('main-options')
    })
    $('#btn-hotkeys').on('click', function () {
      f('main-hotkeys')
    })
    $('#btn-themes').on('click', function () {
      f('main-themes')
    })
    $('#btn-cellpanel').on('click', function () {
      f('main-subpanel')
    })
    $('#btn-reddit').on('click', function () {
      window.open('https://www.reddit.com/r/PlayGotaIO/', '_blank')
    })
    $('#btn-discord').on('click', function () {
      window.open('https://gota.io/discord', '_blank')
    })
    $('#name-box').keypress(function (kb) {
      13 == kb.keyCode && $(this).is(':focus') && fD.play()
    })
    $('#btn-spec').on('click', function () {
      null == fc ||
        Date.now() < fw ||
        (fD.spectate && this.currentServerName == fc.name
          ? eh(fu)
          : ((fD.spectate = true),
            GU.incrementPlay() && 'undefined' != typeof adplayer
              ? (aiptag.cmd.player.push(function () {
                  adplayer.startPreRoll()
                }),
                eh(fu),
                eR(),
                (fw = Date.now() + 2000))
              : fD.spec()))
    })
    $('#chat-input').keyup(function (kb) {
      var kP,
        kZ = $(this).val(),
        ko = kZ.split(' ')
      if (
        (13 == kb.keyCode &&
          $(this).is(':focus') &&
          (function (kD) {
            if (0 != kD.length) {
              if ('/' != kD.charAt(0)) {
                return fD.sendPacket(new fl.sendChat(kD, 0)), eX('')
              }
              var kl = kD.split(' '),
                kg = kl[0].substring(1),
                kY = (eX(''), false)
              Object.keys(GZ).findIndex(function (kX) {
                ;-1 <
                  GZ[kX].triggers.findIndex(function (kE) {
                    return kE.toUpperCase() === kg.toUpperCase()
                  }) &&
                  0 == kY &&
                  (GZ[kX].action(kl.slice(1)), (kY = true))
              })
              0 == kY && fD.selfMsg('Invalid command!')
            }
          })($(this).val()),
        0 == kZ.length || kZ.endsWith(' ') || 13 == kb.keyCode)
      ) {
        $('#autocomplete-panel').html('')
        $('#autocomplete-panel').hide()
      } else {
        if (kZ.startsWith('/')) {
          1 < ko.length ||
            ($('#autocomplete-panel').html(
              '<table><thead><tr><th>Command</th><th>Aliases</th><th>Description</th></tr></thead><tbody></tbody></table>'
            ),
            Object.values(GZ).map(function (kD) {
              ;-1 <
                (kP = kD.triggers.findIndex(function (kl) {
                  return kl
                    .toLowerCase()
                    .startsWith(ko[0].substring(1).toLowerCase())
                })) &&
                $('#autocomplete-panel tbody').append(
                  '<tr><td>'
                    .concat(kD.triggers[kP], '</td><td>')
                    .concat(kD.triggers, '</td><td>')
                    .concat(kD.description, '</td></tr>')
                )
            }),
            0 == $('#autocomplete-panel tbody').children().length
              ? $('#autocomplete-panel').hide()
              : $('#autocomplete-panel').show())
        } else {
          if (ko[ko.length - 1].startsWith(':')) {
            kb = Object.keys(fB).filter(function (kD) {
              return kD
                .toLowerCase()
                .includes(ko[ko.length - 1].substring(1).toLowerCase())
            })
            kZ = Object.keys(gifEmoteList).filter(function (kD) {
              return kD
                .toLowerCase()
                .includes(ko[ko.length - 1].substring(1).toLowerCase())
            })
            ;(kb = Object.keys(fB).filter(function (kD) {
              return kD
                .toLowerCase()
                .includes(ko[ko.length - 1].substring(1).toLowerCase())
            })),
              (kZ = Object.keys(gifEmoteList).filter(function (kD) {
                return kD
                  .toLowerCase()
                  .includes(ko[ko.length - 1].substring(1).toLowerCase())
              }))
            if (0 === kb.length && 0 === kZ.length) {
              return (
                $('#autocomplete-panel').html(''),
                void $('#autocomplete-panel').hide()
              )
            }
            $('#autocomplete-panel').show()
            0 < kb.length &&
              ($('#autocomplete-panel').append('<h3>Emotes</h3>'),
              kb.forEach(function (kD) {
                $('#autocomplete-panel').append(
                  "<img name='"
                    .concat(kD, "' title='")
                    .concat(kD, "' src='https://gota.io/emotes/")
                    .concat(kD, ".png' />")
                )
              }))
            0 < kZ.length &&
              ($('#autocomplete-panel').append('<h3>Gifs</h3>'),
              kZ.forEach(function (kD) {
                $('#autocomplete-panel').append(
                  "<img name='"
                    .concat(kD, "' title='")
                    .concat(kD, "' src='https://gota.io/emotes/gifs/")
                    .concat(kD, ".gif' />")
                )
              }))
          }
        }
      }
    })
    $('#autocomplete-panel').on('click', function (kb) {
      var kP = eE().split(' ')
      'TD' === kb.target.nodeName
        ? (eX('/'.concat(kb.target.parentElement.children[0].innerHTML, ' ')),
          $('#autocomplete-panel').html(''),
          $('#autocomplete-panel').hide(),
          $('#chat-input').focus())
        : 'IMG' === kb.target.nodeName &&
          (eX(
            eE().substring(0, eE().length - kP[kP.length - 1].length) +
              kb.target.attributes.name.nodeValue +
              ' '
          ),
          $('#autocomplete-panel').html(''),
          $('#autocomplete-panel').hide(),
          $('#chat-input').focus())
    })
    $('#animationDelay').on('change', function () {
      var kb = parseInt($(this).val())
      isNaN(kb) && (kb = 90)
      A8.rAnimationDelay = Math.min(Math.max(kb, 1), 250)
      $('#animationDelay').val(A8.rAnimationDelay)
      $('#rAnimationDelay').val(A8.rAnimationDelay)
    })
    $('#cameraDelay').on('change', function () {
      var kb = parseInt($(this).val())
      isNaN(kb) && (kb = 90)
      A8.rCameraDelay = Math.min(Math.max(kb, 0), 250)
      $('#cameraDelay').val(A8.rCameraDelay)
      $('#rCameraDelay').val(A8.rCameraDelay)
    })
    $('#freezeDelay').on('change', function () {
      var kb = parseInt($(this).val())
      isNaN(kb) && (kb = 90)
      A8.rFreezeDelay = Math.min(Math.max(kb, 0), 1000)
      $('#freezeDelay').val(A8.rFreezeDelay)
      $('#rFreezeDelay').val(A8.rFreezeDelay)
    })
    $('#viewDistance').on('change', function () {
      var kb = parseInt($(this).val())
      isNaN(kb) && (kb = 100)
      A8.rViewDistance = Math.min(Math.max(kb, 50), 150)
      $('#viewDistance').val(A8.rViewDistance)
      $('#rViewDistance').val(A8.rViewDistance)
      fD.sendOptions()
    })
    $('#uiScale').on('change', function () {
      var kb = parseInt($(this).val())
      isNaN(kb) && (kb = 100)
      kb *= 0.01
      A8.rUiScale = Math.min(Math.max(kb, 0.5), 1.25)
      $('#uiScale').val(Number.parseFloat(100 * A8.rUiScale).toFixed(0))
      $('#rUiScale').val(A8.rUiScale)
      $('.ui-scale').css('transform', 'scale('.concat(A8.rUiScale, ')'))
    })
    $('#chat-emote-btn').css(
      'background-image',
      'url(https://gota.io/emotes/'.concat(
        Go[Math.floor(Math.random() * Go.length)],
        '.png)'
      )
    )
    $('#chat-emote-btn').on('click', function () {
      $('#emote-panel').toggle()
    })
    $('#emote-panel ul li img').on('click', function (kb) {
      kb = kb.target.name + ' '
      $('#chat-input').val(eE() + kb)
      $('#chat-input').focus()
    })
    var k8,
      k9,
      kf,
      kA,
      kG = document.getElementById('chat-panel'),
      kk =
        (document.getElementById('chat-resize').addEventListener(
          'mousedown',
          function (kb) {
            k8 = kb.clientX
            k9 = kb.clientY
            kf = parseInt(document.defaultView.getComputedStyle(kG).width, 10)
            kA = parseInt(document.defaultView.getComputedStyle(kG).height, 10)
            document.documentElement.addEventListener('mousemove', k6, false)
            document.documentElement.addEventListener('mouseup', k7, false)
          },
          false
        ),
        $('.checkbox-options').on('change', function (kb) {
          eM($(this))
        }),
        $('.options-container select').on('change', function (kb) {
          eU($(this))
        }),
        $('.options-container input[type=range]').on('change', function (kb) {
          eJ($(this))
        }),
        $('.options-container input:not([type])').on('change', function () {
          ew($(this))
        }),
        $('#btn-changelog').on('click', function () {
          eh($('#popup-changelog'))
          ep(fu)
          window.open(
            'https://discord.com/channels/166703751053312000/630428963889741854',
            '_blank'
          )
        }),
        $('#btn-close-changelog').on('click', function () {
          eh($('#popup-changelog'))
          ep(fu)
        }),
        $('#btn-accept').on('click', function () {
          fD.sendPacket(new fl.sendInviteResponse(true))
          eh($('#popup-party'))
        }),
        $('#btn-decline').on('click', function () {
          fD.sendPacket(new fl.sendInviteResponse(false))
          eh($('#popup-party'))
        }),
        $('#popup-party-code-content button').on('click', function () {
          $('#popup-party-code-content input').select()
          document.execCommand('Copy')
          $('#popup-party-code').hide()
        }),
        $('#menu-invite').on('click', function () {
          var kb = fp.data('selected')
          fD.sendPacket(new fl.sendPartyAction(0, kb))
        }),
        $('#menu-whisper').on('click', function () {
          var kb = fp.data('selected'),
            kP = $('#chat-input').val()
          $('#chat-input').val('/t '.concat(kb, ' ') + kP)
        }),
        $('#menu-profile').on('click', function () {
          var kb = fp.data('selected')
          fD.sendPacket(new fl.sendShowProfile(kb))
        }),
        $('#menu-pu_pr').on('click', function () {
          null == fD.partyCode
            ? (fD.sendPacket(new fl.sendPartyAction(4, 0)),
              $('#menu-pu_pr span').text('Private'))
            : (fD.sendPacket(new fl.sendPartyAction(4, 1)),
              $('#menu-pu_pr span').text('Public'))
        }),
        $('#menu-promote').on('click', function () {
          var kb = fp.data('party') + 1
          0 <= kb && fD.sendPacket(new fl.sendPartyAction(2, kb))
        }),
        $('#menu-kick').on('click', function () {
          var kb = fp.data('party') + 1
          0 <= kb && fD.sendPacket(new fl.sendPartyAction(1, kb))
        }),
        $('#menu-spectate').on('click', function () {
          var kb = fp.data('selected')
          0 <= kb && fD.sendPacket(new fl.sendSpectate(kb))
        }),
        $('#menu-block').on('click', function () {
          var kb = GP(parseInt(fp.data('selected')))
          fD.selfMsg(kb)
        }),
        $(document).on('click', function (kb) {
          fp.hide()
          'chat-emote-btn' !== kb.target.id && $('#emote-panel').hide()
          'none' !== $('#popup-party-code').css('display') &&
            'popup-party-code' !== kb.target.id &&
            $('#popup-party-code').hide()
        }),
        $('#aEditChatTabs').on('click', function (kb) {
          ej()
          eh(fu)
          ep($('#popup-chat-tab-editor'))
        }),
        $('#cte-tab-selector').on('change', function (kb) {
          var kP,
            kZ = $('#cte-tab-selector').val(),
            kD = A8['_ChatTabs'][kZ]
          if (kD) {
            for (var kl in ko) ko[kl] = kD[kl]
          }
          for (kP in ($('#cte-tab-name').val(ko.name), Gv)) {
            var kg = (Gv[kP] & ko.flags) == Gv[kP]
            $('#cte-type-' + kP.toLowerCase()).prop('checked', kg)
          }
          $('#cte-max-messages').val(ko.maxMessages)
        }),
        $('#btn-chat-tab-editor-add').on('click', function () {
          A8['_ChatTabs'].push({
            name: 'New',
            flags: 0,
            maxMessages: 100,
          })
          ej(A8['_ChatTabs'].length - 1)
          eL()
        }),
        $('#btn-chat-tab-editor-remove').on('click', function () {
          var kb = $('#cte-tab-selector').val()
          A8['_ChatTabs'][kb] && (A8['_ChatTabs'].splice(kb, 1), ej(), eL())
        }),
        $('#btn-chat-tab-editor-update').on('click', eu),
        $('.custom-asset-skinner').on('click', function () {
          $('#popup-asset-skinner .title-text').text($(this).text())
          $('#input-asset-skinner').attr('asset', $(this).attr('id')).val('')
          eh(fu)
          ep($('#popup-asset-skinner'))
        }),
        $('#btn-custom-asset-set').on('click', function () {
          A8.cThemeEnabled || eH()
          var kb,
            kP = $('#input-asset-skinner').val()
          kP &&
            'a' == (kb = $('#input-asset-skinner').attr('asset')).charAt(0) &&
            null != Ab[kb] &&
            eT(kb, kP)
          $('#popup-asset-skinner .back-button').trigger('click')
        }),
        $('#btn-custom-asset-clear').on('click', function () {
          A8.cThemeEnabled || eH()
          var kb = $('#input-asset-skinner').attr('asset')
          'a' == kb.charAt(0) && null != Ab[kb] && eT(kb, '')
        }),
        $('#popup-asset-skinner')
          .on('dragover', false)
          .on('drop', function (kb) {
            A8.cThemeEnabled || eH()
            var kP,
              kZ = $('#input-asset-skinner').attr('asset')
            return (
              'a' == kZ.charAt(0) &&
                null != Ab[kZ] &&
                ((kb = Gj(kb.originalEvent)),
                /\.(jpe?g|png|gif)$/i.test(kb.name) &&
                  ((kP = new FileReader()).addEventListener(
                    'load',
                    function () {
                      eT(kZ, this.result)
                    },
                    false
                  ),
                  kP.readAsDataURL(kb))),
              false
            )
          }),
        $('#btn-food-colors').on('click', function () {
          e5()
          eh(fu)
          ep($('#popup-food-colors'))
        }),
        $('#btn-theme-export').on('click', function () {
          var kb, kP, kZ, ko
          A8.cThemeEnabled &&
            ((kP = JSON.stringify(Ab, null, 2)),
            (kb = 'theme.json'),
            (kP = new Blob([kP], { type: 'text/plain' })),
            window.navigator.msSaveOrOpenBlob
              ? window.navigator.msSaveOrOpenBlob(kP, kb)
              : ((kZ = document.createElement('a')),
                (ko = URL.createObjectURL(kP)),
                (kZ.href = ko),
                (kZ.download = kb),
                document.body.appendChild(kZ),
                kZ.click(),
                setTimeout(function () {
                  document.body.removeChild(kZ)
                  window.URL.revokeObjectURL(ko)
                }, 0)))
        }),
        $('#btn-theme-import').on('click', function () {
          $('#theme-import').trigger('click')
        }),
        $('#theme-import').on('change', function () {
          var kb = $(this).prop('files')
          0 < kb.length && eI(kb[0])
        }),
        $('#main-themes .options-container')
          .on('dragover', false)
          .on('drop', function (kb) {
            return eI(Gj(kb.originalEvent)), false
          }),
        $('#cGlobalLeaderboard').on('change', function () {
          var kb = this
          fC &&
            !fq &&
            ((fq = true),
            firebase
              .auth()
              .currentUser.getIdToken()
              .then(function (kP) {
                fetch(fV + '/api/v1/options/setFlags', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ token: kP }),
                })
                  .then(function (kZ) {
                    return kZ.json()
                  })
                  .then(function (kZ) {
                    fq = false
                    $(kb).prop('checked', kZ.message)
                  })
                  .catch(function (kZ) {
                    console.error(kZ)
                    fq = false
                    alert(kZ)
                  })
              })
              .catch(function (kP) {
                AV(kP, true)
                fq = false
              }))
        }),
        firebase.auth().onAuthStateChanged(function (kb) {
          var kP
          kb
            ? GM.consented
              ? ($('#guest').hide(),
                $('#account-loader').show(),
                (kP = false),
                firebase
                  .database()
                  .ref('users/' + kb.uid)
                  .on('value', function (kZ) {
                    var ko = kZ.val()
                    if (ko) {
                      if (
                        (kP ||
                          ($('#account-loader').hide(),
                          $('#authed').show(),
                          $('#authed').attr('style', 'display: flex;'),
                          $('#cGlobalLeaderboard').removeAttr('disabled'),
                          $('#cGlobalLeaderboard').prop(
                            'checked',
                            ko.flags.PUBLIC
                          ),
                          (kP = true)),
                        (fC = ko),
                        $('#account-avatar').attr('src', ko.avatar),
                        $('#account-username').text(ko.username),
                        Am($('#account-username'), ko),
                        $('#account-level').html(
                          'Level '
                            .concat(
                              ko.levelData.level,
                              '&nbsp;&nbsp;&nbsp;&nbsp;'
                            )
                            .concat(Gc(ko.levelData.xp_current), '/')
                            .concat(Gc(ko.levelData.xp_needed), ' XP')
                        ),
                        $('.xp-meter > span').each(function () {
                          var kg =
                            (ko.levelData.xp_current / ko.levelData.xp_needed) *
                            100
                          $(this).animate({ width: kg + '%' }, 1200)
                        }),
                        fD.accountListeners.loadServers ||
                          (fD.accountListeners.loadServers = firebase
                            .database()
                            .ref('servers/account/' + fC.uid)
                            .on('value', function (kg) {
                              if ((kg = kg.val())) {
                                A1 = {}
                                for (var kY of Object.values(kg))
                                  kY.up &&
                                    ((kY.address = kY.ip + ':' + kY.port),
                                    (A1[kY.name] = kY))
                                eo()
                                null != fc && el(fc.name)
                              }
                            })),
                        ko.flags.DISCORD_LINKED &&
                          !fD.accountListeners.loadDiscord &&
                          (fD.accountListeners.loadDiscord = firebase
                            .firestore()
                            .collection('discord')
                            .doc(fC.uid)
                            .onSnapshot(function (kg) {
                              kg.exists
                                ? ($('#discordLinkStatus').text(
                                    'Your account is linked with '.concat(
                                      kg.data().username,
                                      '#'
                                    ) + kg.data().discrim
                                  ),
                                  $('#discordLinkStatus').show(),
                                  $('#discordLink').hide(),
                                  $('#discordUnlink').show(),
                                  $('.discord-login-container').css(
                                    'padding',
                                    '15px'
                                  ))
                                : ($('#discordLinkStatus').hide(),
                                  $('#discordUnlink').hide(),
                                  $('#discordLink').show(),
                                  $('.discord-login-container').css(
                                    'padding',
                                    '30px'
                                  ))
                            })),
                        void 0 !== ko.tokens
                          ? ((kZ = new Date()).setMonth(
                              kZ.getMonth() + ko.tokens
                            ),
                            0 == ko.tokens
                              ? ($('#redeem-tokens').hide(),
                                $('#token-amount').text('You have 0 tokens.'))
                              : ($('#redeem-tokens').show(),
                                $('#token-amount').text(
                                  'You have '.concat(
                                    ko.tokens,
                                    ' tokens, maximum expiry date: '
                                  ) + kZ.toString()
                                ),
                                $('#redeem-spend').attr('max', ko.tokens)))
                          : $('#token-amount').text('You have 0 tokens.'),
                        fC.title &&
                          0 < fC.title &&
                          fQ &&
                          fQ.titles &&
                          0 < fQ.titles.length)
                      ) {
                        for (
                          var kZ = $('#account-titles'), kD = 0, kl = 0;
                          kl < fQ.titles.length;
                          kl++
                        ) {
                          fQ.titles[kl] == fC.title && (kD = kl + 1)
                        }
                        0 < kD && kZ.val(kD)
                      }
                      fD.accountListeners.loadPrivateData ||
                        (fD.accountListeners.loadPrivateData = firebase
                          .database()
                          .ref('private/' + kb.uid)
                          .on('value', function (kg) {
                            var kY = kg.val()
                            if (kY) {
                              if ((fQ = kY).titles && 0 < fQ.titles.length) {
                                var kX = $('#account-titles'),
                                  kE = 0
                                kX.empty()
                                kX.append(
                                  "<option value='0'>Default Title</option>"
                                )
                                for (var kL = 0; kL < kY.titles.length; kL++) {
                                  kX.append(
                                    "<option value='"
                                      .concat(kL + 1, "'>")
                                      .concat(Gb[fQ.titles[kL]], '</option>')
                                  )
                                  fQ.titles[kL] == fC.title && (kE = kL + 1)
                                }
                                0 < kE && kX.val(kE)
                                kX.css('display', 'inline-block')
                              } else {
                                $('#account-titles').css('display', 'none')
                              }
                              fQ.message &&
                                fQ.message.title &&
                                fQ.message.content &&
                                !fQ.message.read &&
                                ($('#popup-message-title').text(
                                  fQ.message.title
                                ),
                                $('#popup-message-content').html(
                                  fQ.message.content
                                ),
                                ep($('#popup-message')),
                                eh(fu))
                            }
                          }))
                      fK && e3(fC)
                      eZ(kb.uid)
                    }
                  }))
              : firebase
                  .auth()
                  .signOut()
                  .then(function () {})
            : ($('#cGlobalLeaderboard').attr('disabled'),
              GM.consented
                ? ($('#authed').hide(),
                  $('#account-loader').hide(),
                  $('#no_cookie_consent').hide(),
                  $('#guest').show())
                : ($('#authed').hide(),
                  $('#account-loader').hide(),
                  $('#guest').hide(),
                  $('#no_cookie_consent').show()))
        }),
        $('#account-login').on('click', function () {
          GM.consented &&
            firebase
              .auth()
              .signInWithPopup(fO)
              .then(function (kb) {})
              .catch(function (kb) {
                return AV(kb, true)
              })
        }),
        $('#account-logout').on('click', function () {
          firebase
            .auth()
            .signOut()
            .then(function () {
              $('#authed').hide(500)
              $('#guest').show()
              $('#discordLinkStatus').hide()
              $('.discord-login-container').show()
            })
            .catch(function (kb) {
              return AV(kb, true)
            })
        }),
        $('#account-shop').on('click', function () {
          window.open(Ai, '_blank')
        }),
        $('#account-social').on('click', function () {
          fC && (e3(fC), ep($('#main-social')), eh($(fu)))
        }),
        $('#social-back-button').on('click', function () {
          eh($('#main-social'))
          ep($(fu))
        }),
        $('#account-profile').on('click', function () {
          e2(fC, fu)
        }),
        $('#food-colors-close-btn').on('click', function () {
          ev(fu)
          eh($('#popup-food-colors'))
        }),
        $('#account-titles').on('change', function () {
          var kb
          fq ||
            ((kb = parseInt($(this).val())),
            (fq = true),
            firebase
              .auth()
              .currentUser.getIdToken()
              .then(function (kP) {
                fetch(fV + '/api/v1/options/setTitle', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    token: kP,
                    title: kb,
                  }),
                })
                  .then(function (kZ) {
                    return kZ.json()
                  })
                  .then(function (kZ) {
                    fq = false
                  })
                  .catch(function (kZ) {
                    console.error(kZ)
                    fq = false
                  })
              })
              .catch(function (kP) {
                AV(kP, true)
                fq = false
              }))
        }),
        $('#popup-message-read-btn').on('click', function () {
          fq ||
            (eh($('#popup-message')),
            ev(fu),
            (fq = true),
            firebase
              .auth()
              .currentUser.getIdToken()
              .then(function (kb) {
                fetch(fV + '/api/v1/options/markAsRead', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ token: kb }),
                })
                  .then(function (kP) {
                    return kP.json()
                  })
                  .then(function (kP) {
                    fq = false
                  })
                  .catch(function (kP) {
                    console.error(kP)
                    fq = false
                  })
              })
              .catch(function (kb) {
                AV(kb, true)
                fq = false
              }))
        }),
        $('#account-set-username-btn').on('click', function () {
          var kb = this
          if (fC) {
            GH(false, this)
            var kP = $('#account-username-input').val()
            if (!kP || '' == kP || '' == kP.trim()) {
              return alert('Please provide a username!'), void GH(true, this)
            }
            firebase
              .auth()
              .currentUser.getIdToken()
              .then(function (kZ) {
                fetch(fV + '/api/v1/social/username', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    token: kZ,
                    username: kP,
                  }),
                })
                  .then(function (ko) {
                    return ko.json()
                  })
                  .then(function (ko) {
                    if ((GH(true, kb), 200 == ko.code)) {
                      return ev(fu), void $('#popup-account-username').hide()
                    }
                    alert(ko.message)
                  })
                  .catch(function (ko) {
                    console.error(ko)
                    alert(ko)
                    GH(true, kb)
                  })
              })
              .catch(function (kZ) {
                GH(true, kb)
                AV(kZ, true)
              })
          }
        }),
        $('.popup-panel .back-button').on('click', function () {
          $('.popup-panel').each(function () {
            eh($(this))
          })
          ev(fu)
        }),
        $('#discordLink').on('click', function () {
          fC &&
            firebase
              .auth()
              .currentUser.getIdToken()
              .then(function (kb) {
                window.open(
                  'https://accounts.gota.io/api/v1/options/discord/redirect?token=' +
                    kb,
                  'popup',
                  'width=600,height=700'
                )
              })
        }),
        $('#discordUnlink').on('click', function () {
          fC &&
            firebase
              .auth()
              .currentUser.getIdToken()
              .then(function (kb) {
                fetch(fV + '/api/v1/options/discord/unlink', {
                  method: 'POST',
                  body: JSON.stringify({ token: kb }),
                  headers: { 'Content-Type': 'application/json' },
                })
                  .then(function (kP) {
                    return kP.json()
                  })
                  .then(function (kP) {
                    alert(kP.message)
                  })
              })
              .catch(function (kb) {
                return AV(kb)
              })
        }),
        $('#redeem-tokens').submit(function (kb) {
          var kP, kZ
          kb.preventDefault()
          fC &&
            confirm(
              'By redeeming, you are agreeing the locked name rules linked below the form.\n\nABUSE WILL RESULT IN THE DELETION OF YOUR LOCKED NAME WITH NO REFUND AND THE POSSIBILITY OF ACCOUNT SUSPENSION.\n\nPress OK to redeem.'
            ) &&
            ((kP = $('#redeem-name').val()),
            (kZ = parseInt($('#redeem-spend').val())),
            firebase
              .auth()
              .currentUser.getIdToken()
              .then(function (ko) {
                fetch(fV + '/api/v1/options/redeem', {
                  method: 'POST',
                  body: JSON.stringify({
                    token: ko,
                    name: kP,
                    spend: kZ,
                  }),
                  headers: { 'Content-Type': 'application/json' },
                })
                  .then(function (kD) {
                    return kD.json()
                  })
                  .then(function (kD) {
                    alert(kD.message)
                    200 === kD.code && eZ(fC.uid)
                  })
              })
              .catch(AV))
        }),
        $('.error-banner').on('click', function () {
          $(this).hide()
        }),
        $('#btn-add-friend').on('click', function (kb) {
          if ((kb.preventDefault(), fC)) {
            kb = prompt("Enter friend's UID (found above add friend button)")
            if (kb) {
              var kP = kb.replace(/\s/g, '')
              if ('string' != typeof kb || 0 === kP.length) {
                return alert('Please enter a valid UID')
              }
              firebase
                .auth()
                .currentUser.getIdToken()
                .then(function (kZ) {
                  fetch(fV + '/api/v1/social/friends', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      token: kZ,
                      target: kP,
                      action: 1,
                    }),
                  })
                    .then(function (ko) {
                      return ko.json()
                    })
                    .then(function (ko) {
                      alert(ko.message)
                    })
                })
                .catch(function (kZ) {
                  return AV(kZ, true)
                })
            }
          }
        }),
        (document.getElementById('party-canvas').oncontextmenu = function (kb) {
          var kP,
            kb = kb.offsetY
          kb % 20 < 5 ||
            ((kb = Math.floor(kb / 20)),
            null != (kP = fD.party[kb]) && ei(kP.name, kP.id, kb))
        }),
        $(document).keyup(function (kb) {
          var kP
          13 == kb.keyCode &&
            ((kb = $('#chat-input')),
            'INPUT' != document.activeElement.tagName
              ? ((kP = kb[0]) &&
                  kP.setSelectionRange(kP.value.length, kP.value.length),
                kb.focus())
              : kb.is(':focus') && kb.blur())
        }),
        $(window).bind('beforeunload', function () {
          return 'Are you sure you want to leave Gota.io?'
        }),
        ek(),
        $('.keybinds-btn').on('click', function () {
          $('.keybinds-btn').removeClass('keybinds-btn-selected')
          $(this).addClass('keybinds-btn-selected')
          Ak = true
        }),
        $('#btn-reset-keybinds').on('click', function () {
          for (var kb in Aa) (A9[kb] = Aa[kb]), e8($('#' + kb))
        }),
        $('#scrimmage-mode-select').on('change', function () {
          $('#scrimmage-mode-info').children().css('display', 'none')
          $('#scrimmage-info-' + $(this).val()).css('display', 'block')
        }),
        $('#btn-queue').on('click', function () {
          var kb = parseInt($('#scrimmage-mode-select').val()),
            kb = isNaN(kb) ? 0 : Math.min(Math.max(kb, 0), 100)
          fD.sendPacket(new fl.sendQueue(kb))
          $(this).blur()
        }),
        $('#btn-leave-match').on('click', function () {
          fD.sendPacket(new fl.sendLeaveMatch())
        }),
        $('#btn-custom-create').on('click', function () {
          fD.sendPacket(new fl.sendCustomGame(0))
          $(this).blur()
        }),
        $('#btn-custom-return').on('click', function () {
          fD.sendPacket(new fl.sendCustomGame(1))
        }),
        $('#btn-custom-start').on('click', function () {
          fD.sendPacket(new fl.sendCustomGame(2))
        }),
        $('#btn-custom-lobbies').on('click', function () {
          fD.sendPacket(new fl.sendShowLobbies())
        }),
        $('#btn-lobbies-refresh').on('click', function () {
          fD.sendPacket(new fl.sendShowLobbies())
        }),
        $('#btn-lobbies-join').on('click', function () {
          var kb, kP
          0 !== fj &&
            null != (kP = fM[(kb = fj)]) &&
            ((kP =
              (kP.hasPasscode &&
                prompt('Enter the password to join this game', '')) ||
              ''),
            fD.sendPacket(new fl.sendJoinLobby(kb, kP)))
        }),
        $('#btn-lobbies-return').on('click', function () {
          $('.scrimmage-full').css('display', 'none')
          $('#scrimmage-menu').css('display', 'block')
        }),
        $('#scrimmage-map').on('change', function (kb) {
          var kP = $(this).find('option:selected').val(),
            kZ = $(this).attr('data')
          kP != kZ &&
            ($("#scrimmage-map option[value='".concat(kZ, "']")).prop(
              'selected',
              true
            ),
            fD.sendPacket(new fl.sendCustomGameUpdate(Gx.MAP, kP)))
        }),
        $('#scrimmage-mapmode').on('change', function (kb) {
          var kP = $(this).find('option:selected').val(),
            kZ = $(this).attr('data')
          kP != kZ &&
            ($("#scrimmage-mapmode option[value='".concat(kZ, "']")).prop(
              'selected',
              true
            ),
            fD.sendPacket(new fl.sendCustomGameUpdate(Gx.MODE, kP)))
        }),
        $('#scrimmage-mapsize').on('change', function (kb) {
          var kP = $(this).find('option:selected').val(),
            kZ = $(this).attr('data')
          kP != kZ &&
            ($("#scrimmage-mapsize option[value='".concat(kZ, "']")).prop(
              'selected',
              true
            ),
            fD.sendPacket(new fl.sendCustomGameUpdate(Gx.SIZE, kP)))
        }),
        $('#scrimmage-startmass').on('change', function (kb) {
          var kP = $(this).val(),
            kZ = $(this).attr('data')
          isNaN(kP)
            ? $(this).val(kZ)
            : (kP = Math.max(1, Math.min(parseInt(kP), 32000))) != kZ &&
              ($(this).val(kZ),
              fD.sendPacket(new fl.sendCustomGameUpdate(Gx.STARTMASS, kP)))
        }),
        $('#scrimmage-virusDensity').on('change', function (kb) {
          var kP = $(this).val(),
            kZ = $(this).attr('data')
          isNaN(kP)
            ? $(this).val(kZ)
            : (kP = Math.max(0, Math.min(parseInt(kP), 1000))) != kZ &&
              ($(this).val(kZ),
              fD.sendPacket(new fl.sendCustomGameUpdate(Gx.VIRUS_DENSITY, kP)))
        }),
        $('#scrimmage-respawnDelay').on('change', function () {
          var kb = $(this).val(),
            kP = $(this).attr('data')
          isNaN(kb)
            ? $(this).val(kP)
            : (kb = Math.max(-1, Math.min(parseInt(kb), 600))) !== kP &&
              ($(this).val(kP),
              fD.sendPacket(new fl.sendCustomGameUpdate(Gx.RESPAWN_DELAY, kb)))
        }),
        $('#scrimmage-lockteams').on('change', function () {
          var kb = $(this).prop('checked')
          $(this).prop('checked', !kb)
          fD.sendPacket(new fl.sendCustomGameUpdate(Gx.LOCK, kb ? 1 : 0))
        }),
        $('#scrimmage-autoSplit').on('change', function () {
          var kb = $(this).prop('checked')
          $(this).prop('checked', !kb)
          fD.sendPacket(new fl.sendCustomGameUpdate(Gx.AUTOSPLIT, kb ? 1 : 0))
        }),
        $('#scrimmage-public').on('change', function () {
          var kb = $(this).prop('checked')
          $(this).prop('checked', !kb)
          fD.sendPacket(new fl.sendCustomGameUpdate(Gx.PUBLIC, kb ? 1 : 0))
        }),
        $('#scrimmage-password').on('change', function () {
          var kb = $(this).prop('checked'),
            kb =
              ($(this).prop('checked', !kb),
              (kb &&
                prompt(
                  'Enter a password to join your game (32 max characters)',
                  ''
                )) ||
                '')
          fD.sendPacket(new fl.sendCustomGameUpdateString(Gx.PASSWORD, kb))
        }),
        $('#scrimmage-name').on('click', function () {
          var kb
          fD.isPartyLeader() &&
            null !=
              (kb = prompt(
                'Enter a new name for your game (32 max characters)',
                $(this).text()
              )) &&
            fD.sendPacket(new fl.sendCustomGameUpdateString(Gx.NAME, kb))
        }),
        $(window).unload(function () {
          if (GM.consented) {
            for (var kb in ((A8.iChatWidth = $('#chat-panel').css('width')),
            (A8.iChatHeight = $('#chat-panel').css('height')),
            Af))
              (Af[kb] = A8[kb]), delete A8[kb]
            for (var kP in AA) (AA[kP] = A9[kP]), delete A9[kP]
            var kZ = 4609,
              ko =
                (eC.forEach(function (kD) {
                  var kD = _slicedToArray(kD, 3),
                    kl = kD[0],
                    kD = kD[2],
                    kg = Af[kD]
                  kZ |= +kg << kl
                  delete Af[kD]
                }),
                Au && (Af[er] = kZ),
                window.localStorage)
            ko.setItem('options', JSON.stringify(A8))
            ko.setItem('keybinds', JSON.stringify(A9))
            ko.setItem('fixes_options', JSON.stringify(Af))
            ko.setItem('fixes_keybinds', JSON.stringify(AA))
            ko.setItem('name', $('#name-box').val())
            ko.setItem('theme', JSON.stringify(Ab))
            ko.setItem('subpanel', JSON.stringify(AL))
            fc && ko.setItem('server', fc.name)
          }
        }),
        (fD = new Ad()),
        (fl = new AF()),
        Ax(function (kb) {
          $('#' + kb).spectrum({
            color: Ab[kb],
            preferredFormat: 'hex',
            showInput: true,
            showAlpha: true,
            clickoutFiresChange: false,
            change: function (kP) {
              Ab[kb] = kP.toRgbString()
              ed(kb, Ab[kb])
            },
          })
        }),
        $('#uiGameBackgroundColor').spectrum('option', 'showAlpha', false),
        $('#uiGameBorderColor').spectrum('option', 'showAlpha', false),
        $('#pFoodColors').spectrum({
          preferredFormat: 'hex',
          showInput: true,
          chooseText: 'Add',
          flat: true,
          clickoutFiresChange: false,
          change: function (kb) {
            A8.cThemeEnabled || eH()
            kb = kb.toHexString()
            Ab['_FoodColors'].includes(kb) || (Ab['_FoodColors'].push(kb), e5())
          },
        }),
        GM.init(),
        eL(),
        (f9 = {
          view: fP,
          transparent: true,
          forceCanvas: 'CANVAS' === A8.sRenderType,
          antialias: !A8.cDisableAA,
          powerPreference: 'high-performance',
        }),
        (f0 = {
          renderer: f3.autoDetectRenderer(f9),
          stage: f8,
        }),
        ['accessibility', 'interaction'].forEach(function (kb) {
          f0.renderer.plugins[kb].destroy()
          delete f0.renderer.plugins[kb]
        }),
        $(window).resize(AW),
        AW(),
        (fg = performance.now()),
        fD.selfMsg('Welcome to Gota.io!'),
        '<a href="'
          .concat(
            Ai,
            '" tabindex="-1" target="_blank" style="color: #3366bb; pointer-events: auto">'
          )
          .concat(Ai, '</a>')),
      ka =
        'Want a locked name or chat title? You can get a 10% discount while supporting the Gota Fixes developer by using code <b>camlan</b> ' +
        'in the "Support A Creator" section during checkout at '.concat(kk, '.')
    return (
      window
        .fetch(
          'https://dl.dropboxusercontent.com/s/4iwpgcfwxv54nhr/store_coupon.json'
        )
        .then(function (kb) {
          return kb.json()
        })
        .then(function (kb) {
          var kP = kb.endTime,
            kb = kb.message,
            kP = Date.now() < new Date(kP)
          fD.selfMsg(kP ? kb.replaceAll('STORE_LINK', kk) : ka, true)
        })
        .catch(function () {
          return fD.selfMsg(ka, true)
        }),
      fm.enabled && '' !== fm.motd && fD.selfMsg(fm.motd),
      GM.consented &&
        ((Gm = localStorage.getItem('version')),
        (f9 = version.split('.')),
        null === Gm
          ? localStorage.setItem('version', version)
          : ((Gm = Gm.split('.')),
            (f9[0] == Gm[0] && f9[1] == Gm[1]) ||
              (localStorage.setItem('version', version),
              eh(fu),
              ep($('#popup-changelog'))))),
      { v: void Av() }
    )
  })()