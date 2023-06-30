(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var n=function(){function e(t,n,r,o,i,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._likesArray=t.likes,this._api=n,this._ownerId=t.owner._id,this._cardId=t._id,this._myId=u,this._link=t.link,this._name=t.name,this._templateSelector=r,this._numberOfLikes=t.likes.length,this._handleCardClick=o,this._handleCardDelete=i}var n,r;return n=e,(r=[{key:"_cloneTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__element").cloneNode(!0)}},{key:"_likeToggle",value:function(){var e=this;this._likeButton.classList.contains("elements__like-button_active")?this._api.removeLike(this._cardId).then((function(e){return e.json()})).then((function(t){return e._likesCounter.textContent=t.likes.length})):this._api.setLike(this._cardId).then((function(e){return e.json()})).then((function(t){return e._likesCounter.textContent=t.likes.length})),this._likeButton.classList.toggle("elements__like-button_active")}},{key:"_setEventListeners",value:function(){var e=this;null!==this._deleteButton&&this._deleteButton.addEventListener("click",(function(){return e._handleCardDelete(e._element)})),this._likeButton=this._element.querySelector(".elements__like-button"),this._likeButton.addEventListener("click",(function(){return e._likeToggle()})),this._image.addEventListener("click",(function(){return e._handleCardClick({imgName:e._name,imgLink:e._link})}))}},{key:"_setDeleteButton",value:function(){this._ownerId!==this._myId&&this._deleteButton.remove()}},{key:"createNewElement",value:function(){return this._element=this._cloneTemplate(),this._element.id=this._cardId,this._deleteButton=this._element.querySelector(".elements__delete-button"),this._setDeleteButton(),this._image=this._element.querySelector(".elements__image"),this._image.src=this._link,this._image.alt=this._name,this._likesCounter=this._element.querySelector(".elements__counter"),this._likesCounter.textContent=this._numberOfLikes,this._element.querySelector(".elements__text").textContent=this._name,this._setEventListeners(),this._element}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._config=t,this._formElement=n}var t,n;return t=e,(n=[{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._config.inputSelector)),this._buttonElement=this._formElement.querySelector(this._config.submitButtonSelector),this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e.toggleButtonState()}))}))}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._config.inactiveButtonClass),this._buttonElement.setAttribute("disabled",!0)):(this._buttonElement.classList.remove(this._config.inactiveButtonClass),this._buttonElement.removeAttribute("disabled",!0))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._config.inputErrorClass),n.textContent=t,n.classList.add(this._config.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._config.inputErrorClass),t.classList.remove(this._config.errorClass),t.textContent=""}},{key:"resetValidaton",value:function(){var e=this;this._inputList.forEach((function(t){return e._hideInputError(t)})),this.toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var l=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._section=document.querySelector(n)}var t,n;return t=e,n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){var n=t._renderer(e);t.addItem(n)}))}},{key:"addItem",value:function(e){arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?this._section.prepend(e):this._section.append(e)}}],n&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleBgClick",value:function(e){e.currentTarget.className===e.target.className&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){return e._handleBgClick(t)})),this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){return e.close()}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===p(o)?o:String(o)),r)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__text-input"),n.close=n.close.bind(v(n)),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._valuesList={},this._inputList.forEach((function(t){e._valuesList[t.name]=t.value})),this._valuesList}},{key:"setEventListeners",value:function(){var e=this;h(b(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._getInputValues(),e._handleFormSubmit(e._valuesList)}))}},{key:"close",value:function(){h(b(u.prototype),"close",this).call(this),this._popup.querySelector(".popup__submit-button").textContent="Сохранить",this._form.reset()}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._viewPopupImage=t._popup.querySelector(".popup__image"),t._viewPopupText=t._popup.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;S(k(u.prototype),"open",this).call(this);var r=n,o=t;this._viewPopupImage.src=r,this._viewPopupImage.alt=o,this._viewPopupText.textContent=o}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==j(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===j(o)?o:String(o)),r)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._deleteButton=t._popup.querySelector(".popup__submit-button_type_agree"),t}return t=u,n=[{key:"setEventListener",value:function(){var e=this;this._deleteButton.addEventListener("click",(function(){e._handleDelete()}))}},{key:"open",value:function(e,t){this._item=e,this._api=t,O(L(u.prototype),"open",this).call(this),O(L(u.prototype),"setEventListeners",this).call(this)}},{key:"_handleDelete",value:function(){this._item.remove(),this._api.deleteCard(this._item),O(L(u.prototype),"close",this).call(this)}}],n&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(f);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==q(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}var R=function(){function e(t){var n=t.nameSelector,r=t.jobSelector,o=t.avatarSelctor;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileJob=document.querySelector(r),this._profileAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,job:this._profileJob.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.job;this._profileName.textContent=t,this._profileJob.textContent=n}},{key:"setUserAvatar",value:function(e){this._profileAvatar.src=e}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==B(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}var U,D,A,N=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._getDataFromResponse)}},{key:"getCardsArray",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._getDataFromResponse)}},{key:"editProfileInfo",value:function(e,t,n){t.textContent="Сохранение...",fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.job})}).then(setTimeout(n,1e3))}},{key:"addNewCard",value:function(e,t,n,r,o,i){o.textContent="Сохранение...",fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:e})}).then(this._getDataFromResponse).then((function(o){var i=n({_id:o._id,link:e,name:t,owner:{_id:o.owner._id},likes:o.likes});r.addItem(i,!1)})).then(setTimeout(i,1e3))}},{key:"deleteCard",value:function(e){fetch("".concat(this._baseUrl,"/cards/").concat(e.id),{method:"DELETE",headers:this._headers})}},{key:"setLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers})}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers})}},{key:"editProfileAvatar",value:function(e,t,n){t.textContent="Сохранение...",fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:"".concat(e)})}).then(setTimeout(n,1e3))}},{key:"_getDataFromResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),V={formSelector:".popup__form",inputSelector:".popup__text-input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_type_disabled",inputErrorClass:"popup__text-input_type_error",errorClass:"popup__input-error_active"},F=document.querySelector("#profile-popup"),J=F.querySelector(".popup__submit-button"),G=document.querySelector("#avatar-popup"),H=G.querySelector(".popup__submit-button"),z=G.querySelector(".popup__form"),M=new _("#profile-popup",(function(e){ue.editProfileInfo(e,J,M.close),W.setUserInfo(e)})),K=new _("#avatar-popup",(function(e){ue.editProfileAvatar(e.link,H,K.close),W.setUserAvatar(e.link)})),Q=new T("#delete-popup"),W=new R({nameSelector:".profile__name",jobSelector:".profile__job",avatarSelctor:".profile__avatar"}),X=F.querySelector(".popup__form"),Y=X.querySelector("#name-input"),Z=X.querySelector("#job-input"),$=document.querySelector(".profile__button"),ee=document.querySelector(".profile__avatar-button"),te=document.querySelector("#image-popup"),ne=te.querySelector(".popup__submit-button"),re=new _("#image-popup",(function(e){var t,n,r=e.title;t=e.link,n=r,ue.addNewCard(t,n,ce,ae,ne,re.close)})),oe=te.querySelector(".popup__form"),ie=document.querySelector(".profile__add-button"),ue=new N({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-70",headers:{authorization:"ea3879cb-af90-42ef-bbf7-41be172d27a4","Content-Type":"application/json"}}),ae=new l({renderer:ce},".elements"),le=new E("#view-popup");function ce(e){return new n(e,ue,"#image-element",se,fe,"96f76a193f2e26b1ae5d7c3e").createNewElement()}function se(e){var t=e.imgName,n=e.imgLink;le.open({name:t,link:n})}function fe(e){Q.open(e,ue)}function pe(e,t){e.addEventListener("click",(function(){return t.resetValidaton()}))}ue.getCardsArray().then((function(e){ae.renderItems(e)})),ue.getUserInfo().then((function(e){W.setUserInfo({name:e.name,job:e.about}),W.setUserAvatar(e.avatar)})),Q.setEventListener(),M.setEventListeners(),$.addEventListener("click",(function(){var e;M.open(),e=W.getUserInfo(),Y.value=e.name,Z.value=e.job})),K.setEventListeners(),ee.addEventListener("click",(function(){K.open()})),re.setEventListeners(),le.setEventListeners(),ie.addEventListener("click",(function(){re.open()})),U=new i(V,X),D=new i(V,oe),A=new i(V,z),U.enableValidation(),D.enableValidation(),A.enableValidation(),pe($,U),pe(ie,D),pe(ee,A)})();