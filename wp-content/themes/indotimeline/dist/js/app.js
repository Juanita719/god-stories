/*
    Last Release: 1/5/2018 @ 17:41:12
    Author:  IndoDevApps
    Version:  1.0.7
*/
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _comHeader = require('./com/Header');

var _comHeader2 = _interopRequireDefault(_comHeader);

var _comMain = require('./com/Main');

var _comMain2 = _interopRequireDefault(_comMain);

var _comTimeline = require('./com/Timeline');

var _comTimeline2 = _interopRequireDefault(_comTimeline);

var _comNavigation = require('./com/Navigation');

var _comNavigation2 = _interopRequireDefault(_comNavigation);

var _comFixedSidebar = require('./com/FixedSidebar');

var _comFixedSidebar2 = _interopRequireDefault(_comFixedSidebar);

var _comMobileMenu = require('./com/MobileMenu');

var _comMobileMenu2 = _interopRequireDefault(_comMobileMenu);

var _comSingle = require('./com/Single');

var _comSingle2 = _interopRequireDefault(_comSingle);

window.$ = jQuery.noConflict();

var App = {
    header: new _comHeader2['default'](),
    main: new _comMain2['default'](),
    timeline: new _comTimeline2['default'](),
    navigation: new _comNavigation2['default'](),
    mobilemenu: new _comMobileMenu2['default'](),
    single: new _comSingle2['default'](),
    init: function init() {
        this.header.init();
        this.main.init();
        this.timeline.init();
        this.navigation.init();
        this.mobilemenu.init();
        this.single.init();

        var fixedsidebar = new _comFixedSidebar2['default'](this.timeline);
        fixedsidebar.init();
    }
};

(function ($) {
    $(document).ready(function () {
        App.init();
    });
})(window.$);

},{"./com/FixedSidebar":3,"./com/Header":4,"./com/Main":5,"./com/MobileMenu":6,"./com/Navigation":7,"./com/Single":8,"./com/Timeline":9}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = {
    VERSION: "1.0",
    USE: {
        jquery: true,
        lodash: true
    }
};
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _baseAppCom = require('./base/AppCom');

var FixedSidebar = (function (_AppCom) {
	_inherits(FixedSidebar, _AppCom);

	function FixedSidebar(_timeline) {
		_classCallCheck(this, FixedSidebar);

		_get(Object.getPrototypeOf(FixedSidebar.prototype), 'constructor', this).call(this);
		this.name = 'FixedSidebar';
		this.timeLine = _timeline;
		this.open = false;
		this.Sidebar = $('.sidebar');

		console.log("_timeline2");
		console.log(_timeline);
	}

	_createClass(FixedSidebar, [{
		key: 'Action',
		value: function Action() {
			var _this = this;
			this.Elem.Body.on('click', '.js_sidebar_action', function (event) {
				event.preventDefault();
				_this.Toggle();
			});
		}
	}, {
		key: 'Toggle',
		value: function Toggle() {
			var _this = this;
			if (!this.Elem.Body.hasClass('open-sidebar')) {
				this.Elem.Body.addClass('open-sidebar');
				_this.open = true;

				if (!this.Tools.isMobile.any()) {
					_this.timeLine.SetAvatarLinePosition(true);
				}
			} else {
				this.Elem.Body.removeClass('open-sidebar');
				_this.open = false;

				if (!this.Tools.isMobile.any()) {
					_this.timeLine.SetAvatarLinePosition(false);
				}
			}
			// console.log(_this.timeLine);
			// if ( _this.open ) {}
		}
	}, {
		key: 'init',
		value: function init() {
			console.log("sidebar");
			console.log(this);
			this.Action();
			console.log("run 2");
			// console.log(this.timeline.name);
		}
	}]);

	return FixedSidebar;
})(_baseAppCom.AppCom);

exports['default'] = FixedSidebar;
module.exports = exports['default'];

},{"./base/AppCom":10}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _baseAppCom = require('./base/AppCom');

var Header = (function (_AppCom) {
	_inherits(Header, _AppCom);

	function Header(el) {
		_classCallCheck(this, Header);

		_get(Object.getPrototypeOf(Header.prototype), 'constructor', this).call(this);
		this.name = 'Header';

		this.HeaderWrap = $('.js_header');
		this.HeaderBg = $('.js_header_bg');
		this.TimelineAvatar = $('.js_timeline_avatar');
		this.TimelineLine = $('.js_timelineLine');
		this.SiteBranding = $('.site-branding');
		this.ScrollTop = 0;
		this.AdminBar = $('#wpadminbar');
	}

	_createClass(Header, [{
		key: 'hasAdminBar',
		value: function hasAdminBar() {
			return this.Elem.Body.hasClass('admin-bar');
		}
	}, {
		key: 'headerHeight',
		value: function headerHeight() {
			if (this.HeaderWrap.length) {
				return this.HeaderWrap.height();
			}
			return 0;
		}
	}, {
		key: 'setClass',
		value: function setClass(ScrollTop) {
			var _this = this;
			if (ScrollTop >= _this.headerHeight()) {
				this.Elem.Body.addClass('fixed-this');
			} else {
				this.Elem.Body.removeClass('fixed-this');
			}
		}
	}, {
		key: 'topSpace',
		value: function topSpace() {
			var _this = this;
			if (_this.hasAdminBar()) {
				return 32;
			}
			return 0;
		}
	}, {
		key: 'RunScroll',
		value: function RunScroll(ScrollTop) {
			var _this = this;
			if (ScrollTop < _this.HeaderWrap.height()) {
				_this.HeaderBg.css('background-position', 'center ' + (_this.topSpace() + ScrollTop * -0.4) + 'px');

				_this.TimelineAvatar.addClass('el-ready').css('top', _this.topSpace() + _this.HeaderWrap.height() - 30 - ScrollTop + 'px');
				_this.TimelineLine.addClass('el-ready').css('top', _this.topSpace() + _this.HeaderWrap.height() + 50 - ScrollTop + 'px');

				_this.SiteBranding.css({
					'opacity': 1 - ScrollTop / _this.HeaderWrap.height(),
					'transform': 'scale(' + parseFloat(1 + ScrollTop / _this.HeaderWrap.height()) + ')',
					'top': -0.3 * ScrollTop + 'px'
				});
			} else {
				_this.TimelineAvatar.addClass('el-ready').css('top', _this.topSpace() + -28 + 'px');
				_this.TimelineLine.addClass('el-ready').css('top', _this.topSpace() + 42 + 'px');
			}
		}
	}, {
		key: 'HeaderScroll',
		value: function HeaderScroll() {
			var _this = this;
			$(window).on('scroll', function () {
				event.preventDefault();
				_this.ScrollTop = $(window).scrollTop();

				_this.RunScroll(_this.ScrollTop);
				// _this.Main.RunScroll(_this.ScrollTop);

				_this.setClass(_this.ScrollTop);
			});
		}
	}, {
		key: 'init',
		value: function init() {
			console.log(this);
			console.log("this header");

			if (!this.Tools.isMobile.any()) {

				this.setClass($(window).scrollTop());

				this.RunScroll($(window).scrollTop());
				this.HeaderScroll();
			}
		}
	}]);

	return Header;
})(_baseAppCom.AppCom);

exports['default'] = Header;
module.exports = exports['default'];

},{"./base/AppCom":10}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _baseAppCom = require('./base/AppCom');

var Main = (function (_AppCom) {
    _inherits(Main, _AppCom);

    function Main(el) {
        _classCallCheck(this, Main);

        _get(Object.getPrototypeOf(Main.prototype), 'constructor', this).call(this);
        this.name = 'Main';
    }

    _createClass(Main, [{
        key: 'init',
        value: function init() {
            console.log(this);
            var _this = this;
            // setTimeout(function(){
            _this.Elem.Body.addClass('itl-ready');
            // }, 50);
        }
    }]);

    return Main;
})(_baseAppCom.AppCom);

exports['default'] = Main;
module.exports = exports['default'];

},{"./base/AppCom":10}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _baseAppCom = require('./base/AppCom');

var MobileMenu = (function (_AppCom) {
	_inherits(MobileMenu, _AppCom);

	function MobileMenu(el) {
		_classCallCheck(this, MobileMenu);

		_get(Object.getPrototypeOf(MobileMenu.prototype), 'constructor', this).call(this);
		this.name = 'MobileMenu';
		this.elem = $('.main-navigation');
	}

	_createClass(MobileMenu, [{
		key: 'Action',
		value: function Action() {
			var _this = this;
			this.Elem.Body.on('click', '.menu-item-has-children .js_toggle_menu', function (event) {
				event.preventDefault();
				var _this = $(this);
				_this = _this.parent('.menu-item-has-children');

				if (!_this.hasClass('is-open')) {
					_this.addClass('is-open').children('ul.sub-menu, ul.children').addClass('child-open').stop(true, true).slideDown('400', function () {});
				} else {
					_this.removeClass('is-open').children('ul.sub-menu, ul.children').removeClass('child-open').stop(true, true).slideUp('400', function () {});
				}

				return false;
			});
		}
	}, {
		key: 'init',
		value: function init() {

			if (this.Tools.isMobile.any()) {
				this.elem.find('.menu-item-has-children').prepend('<span class="js_toggle_menu toggle-menu"></span>');
				this.elem.removeClass('site-navigation').addClass('mobile-menu');
				this.Action();
			}
		}
	}, {
		key: 'reinit',
		value: function reinit() {
			this.elem.addClass('site-navigation').removeClass('mobile-menu');
			this.elem.find('.js_toggle_menu').remove();
		}
	}]);

	return MobileMenu;
})(_baseAppCom.AppCom);

exports['default'] = MobileMenu;
module.exports = exports['default'];

},{"./base/AppCom":10}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _baseAppCom = require('./base/AppCom');

var Navigation = (function (_AppCom) {
	_inherits(Navigation, _AppCom);

	function Navigation(el) {
		_classCallCheck(this, Navigation);

		_get(Object.getPrototypeOf(Navigation.prototype), 'constructor', this).call(this);
		this.name = 'Navigation';
		this.open = false;
	}

	_createClass(Navigation, [{
		key: 'Action',
		value: function Action() {
			var _this = this;
			this.Elem.Body.on('click', '.js_navigation_action', function (event) {
				event.preventDefault();
				_this.Toggle();
			});
		}
	}, {
		key: 'Toggle',
		value: function Toggle() {
			var _this = this;
			if (!_this.Elem.Body.hasClass('open-main-navigation')) {
				_this.Elem.Body.addClass('open-main-navigation');
				_this.open = true;
			} else {
				_this.Elem.Body.removeClass('open-main-navigation');
				_this.open = false;
			}
		}
	}, {
		key: 'ToggleSearch',
		value: function ToggleSearch(Element) {
			var _this = this;
			if (!_this.Elem.Body.hasClass('open-search-navigation')) {
				_this.Elem.Body.addClass('open-search-navigation');

				console.log(Element.parents('.main-navigation').find('.search-form .search-field'));

				Element.parents('.main-navigation').find('.search-form .search-field').focus();

				// Element.parents('.main-navigation').find('.search-form .search-field').focus();

				_this.open = true;
			} else {
				_this.Elem.Body.removeClass('open-search-navigation');
				_this.open = false;
			}
		}
	}, {
		key: 'ActionSearch',
		value: function ActionSearch() {
			var _this = this;
			_this.Elem.Body.on('click', '.js_navigation_search_action', function (event) {
				event.preventDefault();
				var $this = $(this);
				_this.ToggleSearch($this);
			});
		}
	}, {
		key: 'init',
		value: function init() {
			console.log(this);
			this.Action();
			this.ActionSearch();
		}
	}]);

	return Navigation;
})(_baseAppCom.AppCom);

exports['default'] = Navigation;
module.exports = exports['default'];

},{"./base/AppCom":10}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _baseAppCom = require('./base/AppCom');

var Single = (function (_AppCom) {
	_inherits(Single, _AppCom);

	function Single(el) {
		_classCallCheck(this, Single);

		_get(Object.getPrototypeOf(Single.prototype), 'constructor', this).call(this);
		this.name = 'Single';
	}

	_createClass(Single, [{
		key: 'WrapInputForm',
		value: function WrapInputForm() {
			$('.comment-form-email, .comment-form-author, .comment-form-url').wrapAll('<div class="input-form-wrap clearfix"></div>');
		}
	}, {
		key: 'init',
		value: function init() {
			this.WrapInputForm();
		}
	}]);

	return Single;
})(_baseAppCom.AppCom);

exports['default'] = Single;
module.exports = exports['default'];

},{"./base/AppCom":10}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _baseAppCom = require('./base/AppCom');

var Timeline = (function (_AppCom) {
	_inherits(Timeline, _AppCom);

	function Timeline(el) {
		_classCallCheck(this, Timeline);

		_get(Object.getPrototypeOf(Timeline.prototype), 'constructor', this).call(this);
		this.name = 'Timeline';
		this.config = indotimeline_config;
		this.cons = {
			TimeLineIndex: 1,
			CanLoadData: true
		};

		this.NextAjaxUrl = $('.posts-navigation .nav-previous a').attr('href');
		this.WrapTimeline = $('.js_timeline');
		this.AvatarTimeline = $('.js_timeline_avatar');
		this.AvatarLine = $('.js_timelineLine');
		this.LoadMoreText = this.WrapTimeline.data('loadtext');
	}

	_createClass(Timeline, [{
		key: 'SetTimeLineIndex',
		value: function SetTimeLineIndex() {
			var _this = this;
			var _Regex = /\D\/\d/;
			function getPageNumber(str) {
				var str = str.match(/\D\/\d/g)[0].split('/').join('');
				return _this.Tools.StrToNumber(str);
			}
			if (_Regex.test(window.location.href)) {
				_this.cons.TimeLineIndex = getPageNumber(window.location.href);
			} else {
				_this.cons.TimeLineIndex = 1;
			}
		}
	}, {
		key: 'ReinitAvatarLinePosition',
		value: function ReinitAvatarLinePosition(columns) {
			var _this = this;

			if (columns == 2) {
				if ($('.js_post').length) {
					var firstBox = $('.js_post').eq(0);
					var firstBoxInner = firstBox.find('.post-inner');
					var avatarPosition = firstBox.offset().left + firstBoxInner.width();
					_this.AvatarTimeline.css('left', avatarPosition + 20 + 'px');
					_this.AvatarLine.css('left', avatarPosition + 20 + 'px');
				} else {
					_this.AvatarTimeline.hide();
					_this.AvatarLine.hide();
				}
			} else if (columns == 3) {

				if ($('.js_post').length > 1) {
					var centerBox = $('.js_post').eq(1);
					var centerBoxInner = centerBox.find('.post-inner');
					var avatarPosition = centerBox.offset().left + centerBoxInner.width() / 2;
					_this.AvatarTimeline.css('left', avatarPosition + 20 + 'px');
					_this.AvatarLine.css('left', avatarPosition + 20 + 'px');
				} else {
					_this.AvatarTimeline.hide();
					_this.AvatarLine.hide();
				}
			} else if (columns == 4) {

				if ($('.js_post').length > 1) {
					var centerBox = $('.js_post').eq(1);
					var centerBoxInner = centerBox.find('.post-inner');
					var avatarPosition = centerBox.offset().left + centerBoxInner.width();
					_this.AvatarTimeline.css('left', avatarPosition + 20 + 'px');
					_this.AvatarLine.css('left', avatarPosition + 20 + 'px');
				} else {
					_this.AvatarTimeline.hide();
					_this.AvatarLine.hide();
				}
			}
		}
	}, {
		key: 'SetAvatarLinePosition',
		value: function SetAvatarLinePosition(FromSidebar) {
			var _this = this;

			setTimeout(function () {
				if (_this.config.timeline.columns == "2") {
					_this.ReinitAvatarLinePosition(2);
				} else if (_this.config.timeline.columns == "3") {
					_this.ReinitAvatarLinePosition(3);
				} else if (_this.config.timeline.columns == "4") {
					_this.ReinitAvatarLinePosition(4);
				}
			}, 500);
		}
	}, {
		key: 'SetMoment',
		value: function SetMoment(el) {
			el = $(el).find('.js_time_wrap .js_time_timeline');
			el.time = el.attr('datetime');
			el.text(moment(el.time).endOf('day').fromNow());
		}
	}, {
		key: 'CreateTime',
		value: function CreateTime(elem) {
			var _this = this;
			var el = null;
			elem.each(function (index, el) {
				_this.SetMoment(el);
			});
		}
	}, {
		key: 'HideNavigation',
		value: function HideNavigation() {
			$('.posts-navigation').hide();
		}
	}, {
		key: 'TimeLineStart',
		value: function TimeLineStart() {
			var _this = this;

			this.Elem.Body.addClass('timeline-init');

			// _this.HideNavigation();
			_this.WrapTimelineChild = _this.WrapTimeline.children();

			_this.CreateTime(_this.WrapTimelineChild);

			console.log("!_this.Tools.isMobile.any()");
			console.log(!this.Tools.isMobile.any());

			if (!this.Tools.isMobile.any()) {

				_this.GridTimeLine = _this.WrapTimeline.masonry({
					itemSelector: '.js_post',
					layoutMode: 'masonry',
					percentPosition: true,
					transitionDuration: '0.2s',
					hiddenStyle: {
						opacity: 1,
						transform: 'scale(1) translateY(-40px)'
					},
					visibleStyle: {
						opacity: 1,
						transform: 'scale(1) translateY(0px)'
					}
					// hiddenStyle
					// visibleStyle: false,
					// hiddenStyle: false,
					// isAnimated: true,
					// animationOptions: {
					// 	duration: 750,
					// 	easing: 'linear',
					// 	queue: false
					// }
					// visibleStyle: {
					// 	opacity: 1,
					// 	transform: 'translateY(0)',
					// },
					// hiddenStyle: {
					// 	opacity: 0,
					// 	transform: 'translateY(1000px)',
					// },
					// masonry: {
					// 	// columnWidth: '.grid-sizer'
					// }
				});

				_this.WrapTimeline.children('.js_post').each(function (index, el) {
					// console.log(el.clientLeft);

					_this.SetClassLeftRight(el);

					// $(el).addClass('is-ready');

					// if ( el.offsetLeft == 0 ) {
					// 	$(el).addClass('is-left')
					// }else{
					// 	$(el).addClass('is-right')
					// }
				});

				_this.WrapTimeline.waitForImages(function () {
					_this.WrapTimeline.masonry('layout');
				}, function (loaded, count, success) {
					console.log(loaded + ' of ' + count + ' images has ' + (success ? 'loaded' : 'failed to load') + '.');
				});

				_this.SetAvatarLinePosition(false);
			}
		}
	}, {
		key: 'LoadingStatus',
		value: function LoadingStatus(type) {
			if (type == 'show') {
				this.Elem.Body.addClass('show-loading');
			} else {
				// setTimeout(function(){
				this.Elem.Body.removeClass('show-loading');
				// }, 2000)
			}
		}
	}, {
		key: 'CreateLoading',
		value: function CreateLoading() {
			this.WrapTimeline.after('<div class="timeline-loader"><div class="timeline-loader-icon-wrap"><div class="timeline-loader-icon ionicons ion-load-b"></div></div></div>');
		}
	}, {
		key: 'CallTimeLineData',
		value: function CallTimeLineData(url) {
			var _this = this;

			$.ajax({
				url: _this.NextAjaxUrl,
				type: 'GET',
				dataType: 'html',
				success: function success(data) {
					var _data = $(".js_timeline .js_post", data);
					var _url = $('.posts-navigation .nav-previous a', data);

					_this.NextAjaxUrl = _url.attr('href');
					_this.cons.CanLoadData = true;

					if (_this.NextAjaxUrl == "undefined" || typeof _this.NextAjaxUrl == "undefined") {
						_this.cons.CanLoadData = false;
					}

					console.log("_this.cons.CanLoadData");
					console.log(_this.cons.CanLoadData);

					console.log("_this.NextAjaxUrl");
					console.log(_this.NextAjaxUrl);

					_this.LoadingStatus('hide');
					_this.AppendTimeLine(_data);

					// console.log(_data);
				},
				error: function error() {
					_this.cons.CanLoadData = false;
					_this.LoadingStatus('hide');
					console.log("error");
				},
				beforeSend: function beforeSend() {
					_this.cons.CanLoadData = false;
					_this.LoadingStatus('show');
					console.log("add loading");
				}
			});
		}
	}, {
		key: 'SetClassLeftRight',
		value: function SetClassLeftRight(el) {
			var _this = this;
			$(el).addClass('is-ready');

			if (_this.config.timeline.columns == "2") {
				if (el.offsetLeft == 0) {
					$(el).addClass('is-left').removeClass('is-right');
				} else {
					$(el).addClass('is-right').removeClass('is-left');
				}
			}
		}
	}, {
		key: 'AppendTimeLine',
		value: function AppendTimeLine(data) {
			var _this = this;

			if (!_this.Tools.isMobile.any()) {

				// setTimeout(function(){
				// 	_this.GridTimeLine.masonry('layout');
				// }, 50);

				_this.GridTimeLine.append(data).masonry('appended', data);

				_this.GridTimeLine.on('layoutComplete', function (event, dt) {

					_this.WrapTimeline.children('.js_post').each(function (index, el) {

						_this.SetMoment(el);
						_this.SetClassLeftRight(el);
					});
				});

				_this.GridTimeLine.waitForImages(function () {
					_this.GridTimeLine.masonry('layout');
				}, function (loaded, count, success) {
					console.log(loaded + ' of ' + count + ' images has ' + (success ? 'loaded' : 'failed to load') + '.');
				});
			} else {

				data.each(function (index, el) {
					_this.SetMoment(el);
					_this.WrapTimeline.append(el);
				});
			}
		}
	}, {
		key: 'ScrollTimeLine',
		value: function ScrollTimeLine() {
			var _this = this;
			_this.CreateLoading();
			_this.HideNavigation();

			$(window).scroll(function () {

				if ($(window).scrollTop() > $(document).height() - ($(window).height() + _this.Elem.Footer.height())) {

					if (_this.cons.CanLoadData) {
						console.log("CanLoadData");
						_this.cons.TimeLineIndex++;
						_this.CallTimeLineData();
					} else {
						console.log("End Data");
					}
				}
			});
		}
	}, {
		key: 'CreateBtnLoadMore',
		value: function CreateBtnLoadMore() {
			this.WrapTimeline.after('<div class="timline-loadmore js_timeline_loadmore">' + this.LoadMoreText + '</div>');
		}
	}, {
		key: 'ClickLoadMore',
		value: function ClickLoadMore() {
			var _this = this;
			_this.CreateLoading();
			_this.HideNavigation();
			_this.CreateBtnLoadMore();
			this.Elem.Body.on('click', '.js_timeline_loadmore', function (event) {
				event.preventDefault();
				if (_this.cons.CanLoadData) {
					console.log("CanLoadData");
					_this.cons.TimeLineIndex++;
					_this.CallTimeLineData();
				} else {
					console.log("End Data");
				}
			});
		}
	}, {
		key: 'CreatePopupBlock',
		value: function CreatePopupBlock() {
			// this.Elem.Body.append('<div class="detail-popup js_detail_popup"><div class="timeline-loader"><div class="timeline-loader-icon-wrap"><div class="timeline-loader-icon ionicons ion-load-b"></div></div></div><div class="container"></div></div>');
			// this.Popup = this.Elem.Body.find('.js_detail_popup');
		}
	}, {
		key: 'init',
		value: function init() {
			console.log("this");
			console.log(this);
			var _this = this;
			this.SetTimeLineIndex();
			this.TimeLineStart();

			console.log("this.cons");
			console.log(this.cons);

			setTimeout(function () {
				_this.Elem.Body.addClass('avatar-run');
			}, 600);

			if (this.config.timeline.load_more_type == "infinite") {
				console.log(this.WrapTimeline);
				if (this.WrapTimeline.length) {
					this.ScrollTimeLine();
				}
			} else if (this.config.timeline.load_more_type == "click") {
				if (this.WrapTimeline.length) {
					this.ClickLoadMore();
				}
			}

			console.log("init");
		}
	}]);

	return Timeline;
})(_baseAppCom.AppCom);

exports['default'] = Timeline;
module.exports = exports['default'];

},{"./base/AppCom":10}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Config = require('../../Config');

var _Config2 = _interopRequireDefault(_Config);

var _libsAppHelper = require('../../libs/AppHelper');

var _libsAppHelper2 = _interopRequireDefault(_libsAppHelper);

var _Elem = require('./Elem');

var _Elem2 = _interopRequireDefault(_Elem);

var _Tools = require('./Tools');

var _Tools2 = _interopRequireDefault(_Tools);

var BaseCom = (function () {
    function BaseCom($) {
        _classCallCheck(this, BaseCom);

        this.name = 'BaseCom';
        this.window = window;
        this.CONFIG = _Config2['default'], this.helper = _libsAppHelper2['default'], this.version = this.CONFIG.VERSION;
        this.Elem = _Elem2['default'];
        this.Tools = _Tools2['default'];
    }

    _createClass(BaseCom, [{
        key: 'init',
        value: function init() {
            console.log(this);
        }
    }]);

    return BaseCom;
})();

var AppCom = (function (_BaseCom) {
    _inherits(AppCom, _BaseCom);

    function AppCom() {
        _classCallCheck(this, AppCom);

        _get(Object.getPrototypeOf(AppCom.prototype), 'constructor', this).call(this);
        this.name = 'AppCom';
    }

    _createClass(AppCom, [{
        key: 'init',
        value: function init($) {
            console.log(this);
        }
    }]);

    return AppCom;
})(BaseCom);

exports.BaseCom = BaseCom;
exports.AppCom = AppCom;

},{"../../Config":2,"../../libs/AppHelper":13,"./Elem":11,"./Tools":12}],11:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, '__esModule', {
	value: true
});
window.$ = jQuery.noConflict();

var Elem = {
	Window: $(window),
	Document: $(document),
	Html: $('html'),
	Body: $('body'),
	HtmlBody: $('html, body'),
	Page: $('#page'),
	Header: $('#masthead'),
	Content: $('#content'),
	Sidebar: $('.sidebar'),
	Navbar: $('.navbar-header'),
	Navigation: $('.navigation'),
	Footer: $('.site-footer')
};

exports['default'] = Elem;
module.exports = exports['default'];

},{}],12:[function(require,module,exports){
'use strict';
Object.defineProperty(exports, "__esModule", {
	value: true
});
window.$ = jQuery.noConflict();

var Tools = {
	StrToNumber: function StrToNumber(str) {
		var numb = str.match(/\d/g);
		return parseInt(numb.join(""));
	},
	isMobile: {
		Android: function Android() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function BlackBerry() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function iOS() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function Opera() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function Windows() {
			return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
		},
		Size: function Size() {
			return window.innerWidth < 641 ? true : false;
		},
		any: function any() {
			return this.Size() || this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows();
		}
	}
};

exports["default"] = Tools;
module.exports = exports["default"];

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var AppHelper = {
    RandomNumber: function RandomNumber(length) {
        var min = 0;
        return min + Math.floor(Math.random() * (length - min + 1));
    }
};

exports["default"] = AppHelper;
module.exports = exports["default"];

},{}]},{},[1]);
