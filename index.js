(()=>{"use strict";function e(e){e.classList.add("popup_opened"),document.addEventListener("keydown",o)}function t(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",o)}function o(e){"Escape"===e.key&&t(document.querySelector(".popup_opened"))}const r=fetch("https://nomoreparties.co/v1/plus-cohort-28/users/me",{headers:{"Content-Type":"application/json; charset=UTF-8",authorization:"78bba5ba-993f-40b2-a4ae-e02179c22cc4"},body:JSON.stringify()}).then((e=>e.json())).catch((e=>{console.log(e)})),n=fetch("https://nomoreparties.co/v1/plus-cohort-28/cards",{headers:{"Content-Type":"application/json; charset=UTF-8",authorization:"78bba5ba-993f-40b2-a4ae-e02179c22cc4"},body:JSON.stringify()}).then((e=>e.json())).catch((e=>{console.log(e)})),c=document.querySelector(".popup-picture__image"),a=document.querySelector(".popup-picture__title"),i=document.querySelector(".popup_image-open");const u=document.querySelector(".grid");function s(t,o,r=[],n,s,p){u.prepend(function(t,o,r,n,u,s){const p=document.querySelector(".template").content.querySelector(".grid__element").cloneNode(!0),l=p.querySelector(".grid__heart"),d=p.querySelector(".grid__heart-counter");return p.querySelector(".grid__title").textContent=t,p.querySelector(".grid__image").src=o,p.querySelector(".grid__image").alt=`Изображение ${t}`,p.querySelector(".grid__heart-counter").textContent=r.length,p.querySelector(".grid__heart").addEventListener("click",(function(){l.classList.contains("grid__heart_active")?function(e,t,o){fetch(`https://nomoreparties.co/v1/plus-cohort-28/cards/likes/${e}`,{method:"DELETE",headers:{authorization:"78bba5ba-993f-40b2-a4ae-e02179c22cc4","Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{t.classList.remove("grid__heart_active"),o.textContent=e.likes.length})).catch((e=>{console.log(e)}))}(s,l,d):function(e,t,o){fetch(`https://nomoreparties.co/v1/plus-cohort-28/cards/likes/${e}`,{method:"PUT",body:JSON.stringify({likes:[]}),headers:{authorization:"78bba5ba-993f-40b2-a4ae-e02179c22cc4","Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{t.classList.add("grid__heart_active"),o.textContent=e.likes.length})).catch((e=>{console.log(e)}))}(s,l,d)})),p.querySelector(".grid__image").addEventListener("click",(()=>{c.src=o,a.textContent=t,c.alt=`Изображение ${t}`,e(i)})),n===u?p.querySelector(".grid__trash").addEventListener("click",(()=>{p.closest(".grid__element").remove(),fetch(`https://nomoreparties.co/v1/plus-cohort-28/cards/${s}`,{method:"DELETE",headers:{authorization:"78bba5ba-993f-40b2-a4ae-e02179c22cc4","Content-Type":"application/json"},body:JSON.stringify()}).catch((e=>{console.log(e)}))})):p.querySelector(".grid__trash").style.display="none",p}(t,o,r,n,s,p))}document.querySelectorAll(".popup__close");const p=document.querySelector(".popup_edit-profile"),l=document.querySelector(".popup__form-profile"),d=document.querySelector(".profile__info-name"),_=document.querySelector(".profile__info-work"),m=document.querySelector(".popup__input_txt_name"),y=document.querySelector(".popup__input_txt_profession"),h=document.querySelector(".popup__input_txt_name-add"),f=document.querySelector(".popup__input_link"),v=document.querySelector(".popup_add-card"),b=document.querySelector(".popup__form-add"),S=document.querySelector(".popup_avatar");let q=document.querySelector(".profile__avatar");const g=document.querySelector(".popup__input_link-avatar"),E=document.querySelector(".profile__edit-avatar"),L=document.querySelector(".popup__form-avatar"),C=document.querySelector(".popup__save-info"),k=document.querySelector(".popup__save-picture"),x=document.querySelector(".popup__save-avatar"),T=document.querySelector(".popup__loading-info"),j=document.querySelector(".popup__loading-picture"),A=document.querySelector(".popup__loading-avatar");function z(e,t,o){e?(t.classList.add("button__hidden"),o.classList.add("load__visible")):(t.classList.remove("button__hidden"),o.classList.remove("load__visible"))}const D={formInputError:"popup__input_type_error",inputError:"form__input-error",popupInput:".popup__input",popupSumbit:".popup__sumbit",formProfile:".popup__form-profile",sumbitDisable:"popup__sumbit_dsbl"},N=(e,t,o)=>{const r=e.querySelector(`.${t.id}-error`);t.classList.remove(o.formInputError),r.classList.remove(o.inputError),r.textContent=""},O=(e,t,o)=>{const r=e.querySelector(`.${t.id}-error`);t.classList.add(D.formInputError),r.textContent=o,r.classList.add(D.inputError)},$=(e,t)=>{const o=Array.from(e.querySelectorAll(t.popupInput)),r=e.querySelector(t.popupSumbit);I(o,r,t),o.forEach((n=>{n.addEventListener("input",(function(){((e,t,o)=>{t.validity.patternMismatch?t.setCustomValidity("Поле может содержать только латинские буквы, кириллические буквы, знаки дефиса и пробелы"):t.setCustomValidity(""),t.validity.valid?N(e,t,o):O(e,t,t.validationMessage)})(e,n,t),I(o,r,t)}))}))};function I(e,t,o){!function(e){return e.some((e=>!e.validity.valid))}(e)?(t.classList.remove(o.sumbitDisable),t.disabled=!1):(t.classList.add(o.sumbitDisable),t.disabled=!0)}function J(e,t){const o=e.querySelectorAll(t.popupInput),r=e.querySelector(t.popupSumbit),n=Array.from(e.querySelectorAll(t.popupInput));o.forEach((o=>{N(e,o,t)})),I(n,r,t)}(e=>{Array.from(document.querySelectorAll(e.formProfile)).forEach((t=>{t.addEventListener("submit",(function(e){e.preventDefault()})),$(t,e),Array.from(t.querySelectorAll(".form__set")).forEach((t=>{$(t,e)}))}))})(D),q.addEventListener("click",(function(){e(S)})),E.addEventListener("click",(function(){e(S)})),L.addEventListener("submit",(function(){g.textContent=q.src,q.src=g.value,z(!0,x,A),fetch("https://nomoreparties.co/v1/plus-cohort-28/users/me/avatar",{method:"PATCH",headers:{authorization:"78bba5ba-993f-40b2-a4ae-e02179c22cc4","Content-Type":"application/json"},body:JSON.stringify({avatar:q.src})}).then((e=>e.json())).then((e=>{e.avatar=q.src})).catch((e=>{console.log(e)})).finally((()=>{z(!1,x,A)})),t(S)})),document.querySelector(".profile__edit-img").addEventListener("click",(function(){e(p),m.value=d.textContent,y.value=_.textContent,J(l,D)}));const P=document.querySelector(".profile__add-button"),w=document.querySelector(".popup__form-add");P.addEventListener("click",(function(){e(v),J(w,D),w.reset()})),document.querySelectorAll(".popup").forEach((e=>{e.addEventListener("mousedown",(o=>{o.target.classList.contains("popup_opened")&&t(e),o.target.classList.contains("popup__close")&&t(e)}))})),l.addEventListener("submit",(function(e){e.preventDefault(),d.textContent=m.value,_.textContent=y.value,t(p)})),l.addEventListener("submit",(function(){z(!0,C,T),fetch("https://nomoreparties.co/v1/plus-cohort-28/users/me",{method:"PATCH",headers:{authorization:"78bba5ba-993f-40b2-a4ae-e02179c22cc4","Content-Type":"application/json"},body:JSON.stringify({name:d.textContent,about:_.textContent})}).then((e=>e.json())).then((e=>{e.name=d.textContent,e.about=_.textContent})).catch((e=>{console.log(e)})).finally((()=>{z(!1,C,T)}))})),b.addEventListener("submit",(function(e){e.preventDefault();const o=h.value,r=f.value;z(!0,k,j),fetch("https://nomoreparties.co/v1/plus-cohort-28/cards",{method:"POST",headers:{authorization:"78bba5ba-993f-40b2-a4ae-e02179c22cc4","Content-Type":"application/json"},body:JSON.stringify({name:h.value,link:f.value})}).then((e=>e.json())).then((e=>{e.name=h.value,e.src=f.value})).catch((e=>{console.log(e)})).finally((()=>{z(!1,k,j)})),s(o,r),t(v),b.reset()})),Promise.all([r,n]).then((([e,t])=>{d.textContent=e.name,_.textContent=e.about,q.src=e.avatar,t.forEach((function(t){s(t.name,t.link,t.likes,t.owner._id,e._id,t._id)}))})).catch((e=>{console.error(`Произошла ошибка: ${e}`)}))})();