!function(e,t,r){"use strict";var i=function(e){var r=e.getAttribute("type")||input.nodeName.toLowerCase(),i="number"===r||"range"===r,n=e.value.length,a=!0;if("radio"===e.type&&e.name){var s=t.getElementsByName(e.name);if(s.length>0)for(var o=0;o<s.length;o++)if(s[o].form===e.form&&e.checked){e=s[o];break}}var u={badInput:i&&n>0&&!/[-+]?[0-9]/.test(e.value),patternMismatch:e.hasAttribute("pattern")&&n>0&&new RegExp(e.getAttribute("pattern")).test(e.value)===!1,rangeOverflow:e.hasAttribute("max")&&i&&e.value>0&&Number(e.value)>Number(e.getAttribute("max")),rangeUnderflow:e.hasAttribute("min")&&i&&e.value>0&&Number(e.value)<Number(e.getAttribute("min")),stepMismatch:i&&(e.hasAttribute("step")&&"any"!==e.getAttribute("step")&&Number(e.value)%Number(e.getAttribute("step"))!==0||!e.hasAttribute("step")&&Number(e.value)%1!==0),tooLong:e.hasAttribute("maxLength")&&e.getAttribute("maxLength")>0&&n>parseInt(e.getAttribute("maxLength"),10),tooShort:e.hasAttribute("minLength")&&e.getAttribute("minLength")>0&&n>0&&n<parseInt(e.getAttribute("minLength"),10),typeMismatch:n>0&&("email"===r&&!/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(e.value)||"url"===r&&!/^(?:(?:https?|HTTPS?|ftp|FTP):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)(?:\.(?:[a-zA-Z\u00a1-\uffff0-9]-*)*[a-zA-Z\u00a1-\uffff0-9]+)*)(?::\d{2,5})?(?:[\/?#]\S*)?$/.test(e.value)),valueMissing:e.hasAttribute("required")&&(("checkbox"===r||"radio"===r)&&!e.checked||"select"===r&&e.options[e.selectedIndex].value<1||"checkbox"!==r&&"radio"!==r&&"select"!==r&&1>n)};for(var c in u)if(u.hasOwnProperty(c)&&u[c]){a=!1;break}return u.valid=a,u};Object.defineProperty(HTMLInputElement.prototype,"validity",{get:function(){return i(this)},configurable:!0})}(window,document),"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||!function(e){"use strict";if("Element"in e){var t="classList",r="prototype",i=e.Element[r],n=Object,a=String[r].trim||function(){return this.replace(/^\s+|\s+$/g,"")},s=Array[r].indexOf||function(e){for(var t=0,r=this.length;r>t;t++)if(t in this&&this[t]===e)return t;return-1},o=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},u=function(e,t){if(""===t)throw new o("СИНТАКСИЧЕСКАЯ ОШИБКА","Некорректный ввод в строке");if(/\s/.test(t))throw new o("НЕПРАВИЛЬНЫЙ СИМВОЛ","Строка содержит недопустимый символ");return s.call(e,t)},c=function(e){for(var t=a.call(e.getAttribute("class")||""),r=t?t.split(/\s+/):[],i=0,n=r.length;n>i;i++)this.push(r[i]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},l=c[r]=[],f=function(){return new c(this)};if(o[r]=Error[r],l.item=function(e){return this[e]||null},l.contains=function(e){return e+="",-1!==u(this,e)},l.add=function(){var e,t=arguments,r=0,i=t.length,n=!1;do e=t[r]+"",-1===u(this,e)&&(this.push(e),n=!0);while(++r<i);n&&this._updateClassName()},l.remove=function(){var e,t,r=arguments,i=0,n=r.length,a=!1;do for(e=r[i]+"",t=u(this,e);-1!==t;)this.splice(t,1),a=!0,t=u(this,e);while(++i<n);a&&this._updateClassName()},l.toggle=function(e,t){e+="";var r=this.contains(e),i=r?t!==!0&&"remove":t!==!1&&"add";return i&&this[i](e),t===!0||t===!1?t:!r},l.toString=function(){return this.join(" ")},n.defineProperty){var d={get:f,enumerable:!0,configurable:!0};try{n.defineProperty(i,t,d)}catch(m){(void 0===m.number||-2146823252===m.number)&&(d.enumerable=!1,n.defineProperty(i,t,d))}}else n[r].__defineGetter__&&i.__defineGetter__(t,f)}}(self),function(){"use strict";var e=document.createElement("_");if(e.classList.add("c1","c2"),!e.classList.contains("c2")){var t=function(e){var t=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){var r,i=arguments.length;for(r=0;i>r;r++)e=arguments[r],t.call(this,e)}};t("add"),t("remove")}if(e.classList.toggle("c3",!1),e.classList.contains("c3")){var r=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:r.call(this,e)}}e=null}());for(var forms=document.querySelectorAll(".validate"),i=0;i<forms.length;i++)forms[i].setAttribute("novalidate",!0);var hasError=function(e){if(!e.disabled&&"file"!==e.type&&"reset"!==e.type&&"submit"!==e.type&&"button"!==e.type){var t=e.validity;if(!t.valid){if(t.valueMissing)return"Пожалуйста, заполните это поле.";if(t.typeMismatch){if("email"===e.type)return"Пожалуйста введите адрес электронной почты.";if("url"===e.type)return"Введите URL-адрес."}return t.tooShort?"Увеличьте этот текст до "+e.getAttribute("minLength")+" символов или больше. Вы ввели "+e.value.length+" characters.":t.tooLong?"Пожалуйста, сократите этот текст не более "+e.getAttribute("maxLength")+" символов. Вы ввели "+e.value.length+" characters.":t.patternMismatch?e.hasAttribute("title")?e.getAttribute("title"):"Пожалуйста, соблюдайте правильность ввода.":t.badInput?"Пожалуйста, введите номер.":t.stepMismatch?"Выберите существующее значение.":t.rangeOverflow?"Выберите значение, которое не более "+e.getAttribute("max")+".":t.rangeUnderflow?"Выберите значение, которое не меньше "+e.getAttribute("min")+".":"Введенное значение неверно."}}},showError=function(e,t){if(e.classList.add("error"),"radio"===e.type&&e.name){var r=e.form.querySelectorAll('[name="'+e.name+'"]');if(r.length>0){for(var i=0;i<r.length;i++)r[i].classList.add("error");e=r[r.length-1]}}var n=e.id||e.name;if(n){var a=e.form.querySelector(".error-message#error-for-"+n);if(!a){a=document.createElement("div"),a.className="error-message",a.id="error-for-"+n;var s;("radio"===e.type||"checkbox"===e.type)&&(s=e.form.querySelector('label[for="'+n+'"]')||e.parentNode,s&&s.parentNode.insertBefore(a,s.nextSibling)),s||e.parentNode.insertBefore(a,e.nextSibling)}e.setAttribute("aria-describedby","error-for-"+n),a.innerHTML=t,a.style.display="block",a.style.visibility="visible"}},removeError=function(e){if(e.classList.remove("error"),e.removeAttribute("aria-describedby"),"radio"===e.type&&e.name){var t=e.form.querySelectorAll('[name="'+e.name+'"]');if(t.length>0){for(var r=0;r<t.length;r++)t[r].classList.remove("error");e=t[t.length-1]}}var i=e.id||e.name;if(i){var n=e.form.querySelector(".error-message#error-for-"+i);n&&(n.innerHTML="",n.style.display="none",n.style.visibility="hidden")}},serialize=function(e){var t="";for(i=0;i<e.elements.length;i++){var r=e.elements[i];r.name&&!r.disabled&&"file"!==r.type&&"reset"!==r.type&&"submit"!==r.type&&"button"!==r.type&&("checkbox"!==r.type&&"radio"!==r.type||r.checked)&&(t+="&"+encodeURIComponent(r.name)+"="+encodeURIComponent(r.value))}return t},displayMailChimpStatus=function(e){var t=document.querySelector(".mc-status");if(t){if(t.innerHTML=e.msg,t.addAttribute("tabindex","-1"),t.focus(),"error"===e.result)return t.classList.remove("success-message"),void t.classList.add("error-message");t.classList.remove("error-message"),t.classList.add("success-message")}},submitMailChimpForm=function(e){var t=e.getAttribute("action");t=t.replace("/post?u=","/post-json?u="),t+=serialize(e)+"&c=displayMailChimpStatus";var r=window.document.getElementsByTagName("script")[0],i=window.document.createElement("script");i.src=t,window.mcStatus=e.querySelector(".mc-status"),r.parentNode.insertBefore(i,r),i.onload=function(){this.remove()}};document.addEventListener("blur",function(e){if(e.target.form.classList.contains("validate")){var t=hasError(e.target);return t?void showError(e.target,t):void removeError(e.target)}},!0),document.addEventListener("submit",function(e){if(e.target.classList.contains("validate")){e.preventDefault();for(var t,r,i=e.target.elements,n=0;n<i.length;n++)t=hasError(i[n]),t&&(showError(i[n],t),r||(r=i[n]));r&&r.focus(),submitMailChimpForm(e.target)}},!1);