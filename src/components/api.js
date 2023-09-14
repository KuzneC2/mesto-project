import { name, job, nameA, linkA, avatar, renderLoading, saveInformation, loadBlockInformation, savePicture, saveAvatar, loadBlockAvatar, loadBlockPicture } from "./modal.js";

function checkResult(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export function getProfileApi(data){
   return fetch('https://nomoreparties.co/v1/plus-cohort-28/users/me', {
       headers: {
           'Content-Type': 'application/json; charset=UTF-8',
           'authorization': '78bba5ba-993f-40b2-a4ae-e02179c22cc4'
       },
       body: JSON.stringify(
       )
    })
    .then(checkResult);
}
export function getCardsApi(data){
    return fetch('https://nomoreparties.co/v1/plus-cohort-28/cards', {
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'authorization': '78bba5ba-993f-40b2-a4ae-e02179c22cc4'
    },
    body: JSON.stringify()
})
    .then(checkResult);
}
// // изменение профиля
export function getEditProfile(data) {

    return fetch('https://nomoreparties.co/v1/plus-cohort-28/users/me', {
        method: 'PATCH',
        headers: {
            'authorization': '78bba5ba-993f-40b2-a4ae-e02179c22cc4',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data.name,
            about: data.about,
        })
    })
        .then(checkResult);
}
export function addNewCard(data) {
    return fetch('https://nomoreparties.co/v1/plus-cohort-28/cards', {
        method: "POST",
        headers: {
            'authorization': '78bba5ba-993f-40b2-a4ae-e02179c22cc4',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: data.name,
            link: data.link,
        })
    })
        .then(checkResult)

}
export function deleteCardApi(id) {
    fetch(`https://nomoreparties.co/v1/plus-cohort-28/cards/${id}`, {
        method: "DELETE",
        headers: {
            'authorization': '78bba5ba-993f-40b2-a4ae-e02179c22cc4',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
        .then(checkResult)

}
export function putLike(cardId, likeButton, likeCounter) {
    return fetch(`https://nomoreparties.co/v1/plus-cohort-28/cards/likes/${cardId}`, {
        method: 'PUT',
        body: JSON.stringify(
            { likes: [] }
        ),
        headers: {
            'authorization': '78bba5ba-993f-40b2-a4ae-e02179c22cc4',
            'Content-Type': 'application/json'
        },
    })
        .then(checkResult)
};
export function deleteLike(cardId, likeButton, likeCounter) {
    return fetch(`https://nomoreparties.co/v1/plus-cohort-28/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
            'authorization': '78bba5ba-993f-40b2-a4ae-e02179c22cc4',
            'Content-Type': 'application/json'
        },
    })
    .then(checkResult)
};
export function changeAvatar(data) {
    return fetch('https://nomoreparties.co/v1/plus-cohort-28/users/me/avatar', {
        method: 'PATCH',
        headers: {
            'authorization': '78bba5ba-993f-40b2-a4ae-e02179c22cc4',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            avatar: data.avatar
        }),
    })
    .then(checkResult)
}