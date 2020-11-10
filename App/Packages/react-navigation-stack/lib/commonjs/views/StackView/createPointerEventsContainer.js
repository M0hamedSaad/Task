var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=createPointerEventsContainer;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var React=_interopRequireWildcard(require("react"));var _jsxFileName="/Users/satya/Workspace/Callstack/react-navigation-stack/src/views/StackView/createPointerEventsContainer.tsx";var MIN_POSITION_OFFSET=0.01;function createPointerEventsContainer(Component){var Container=function(_React$Component){(0,_inherits2.default)(Container,_React$Component);function Container(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,Container);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(Container)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.pointerEvents=_this.computePointerEvents();_this.component=null;_this.handleComponentRef=function(component){_this.component=component;if(component&&typeof component.setNativeProps!=='function'){throw new Error('Component must implement method `setNativeProps`');}};_this.handlePositionChange=function(){if(_this.component){var pointerEvents=_this.computePointerEvents();if(_this.pointerEvents!==pointerEvents){_this.pointerEvents=pointerEvents;_this.component.setNativeProps({pointerEvents:pointerEvents});}}};return _this;}(0,_createClass2.default)(Container,[{key:"componentWillUnmount",value:function componentWillUnmount(){this.positionListener&&this.positionListener.remove();}},{key:"bindPosition",value:function bindPosition(){this.positionListener&&this.positionListener.remove();this.positionListener=new AnimatedValueSubscription(this.props.realPosition,this.handlePositionChange);}},{key:"computePointerEvents",value:function computePointerEvents(){var _this$props=this.props,navigation=_this$props.navigation,realPosition=_this$props.realPosition,scene=_this$props.scene;if(scene.isStale||navigation.state.index!==scene.index){return scene.index>navigation.state.index?'box-only':'none';}var offset=realPosition.__getAnimatedValue()-navigation.state.index;if(Math.abs(offset)>MIN_POSITION_OFFSET){return'box-only';}return'auto';}},{key:"render",value:function render(){this.bindPosition();this.pointerEvents=this.computePointerEvents();return React.createElement(Component,(0,_extends2.default)({},this.props,{pointerEvents:this.pointerEvents,onComponentRef:this.handleComponentRef,__source:{fileName:_jsxFileName,lineNumber:95}}));}}]);return Container;}(React.Component);return Container;}var AnimatedValueSubscription=function(){function AnimatedValueSubscription(value,callback){(0,_classCallCheck2.default)(this,AnimatedValueSubscription);this.value=value;this.token=value.addListener(callback);}(0,_createClass2.default)(AnimatedValueSubscription,[{key:"remove",value:function remove(){this.value.removeListener(this.token);}}]);return AnimatedValueSubscription;}();
//# sourceMappingURL=createPointerEventsContainer.js.map