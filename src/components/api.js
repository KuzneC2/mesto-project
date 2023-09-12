import { name, job, nameA, linkA, avatar, renderLoading, saveInformation, loadBlockInformation, savePicture, saveAvatar, loadBlockAvatar, loadBlockPicture } from "./modal.js";

export const getProfileApi = fetch('https://nomoreparties.co/v1/plus-cohort-28/users/me', {
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'authorization': '78bba5ba-993f-40b2-a4ae-e02179c22cc4'
    },
    body: JSON.stringify(
    )
})
    .then(res => {
        return res.json();
    })
    .catch((err) => {
        console.log(err);
    });
export const getCardsApi = fetch('https://nomoreparties.co/v1/plus-cohort-28/cards', {
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'authorization': '78bba5ba-993f-40b2-a4ae-e02179c22cc4'
    },
    body: JSON.stringify()
})
    .then(res => {
        return res.json();
    })
    .catch((err) => {
        console.log(err);
    });
// // изменение профиля
export function getEditProfile() {
    renderLoading(true, saveInformation, loadBlockInformation);

    fetch('https://nomoreparties.co/v1/plus-cohort-28/users/me', {
        method: 'PATCH',
        headers: {
            'authorization': '78bba5ba-993f-40b2-a4ae-e02179c22cc4',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name.textContent,
            about: job.textContent,
        })
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            data.name = name.textContent
            data.about = job.textContent
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            renderLoading(false, saveInformation, loadBlockInformation)
        })
}
export function addNewCard() {
    renderLoading(true, savePicture, loadBlockPicture);
    fetch('https://nomoreparties.co/v1/plus-cohort-28/cards', {
        method: "POST",
        headers: {
            'authorization': '78bba5ba-993f-40b2-a4ae-e02179c22cc4',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: nameA.value,
            link: linkA.value,
        })
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            data.name = nameA.value
            data.src = linkA.value
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            renderLoading(false, savePicture, loadBlockPicture)
        })
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
        .catch((err) => {
            console.log(err);
        });

}
export function putLike(cardId, likeButton, likeCounter) {
    fetch(`https://nomoreparties.co/v1/plus-cohort-28/cards/likes/${cardId}`, {
        method: 'PUT',
        body: JSON.stringify(
            { likes: [] }
        ),
        headers: {
            'authorization': '78bba5ba-993f-40b2-a4ae-e02179c22cc4',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            likeButton.classList.add('grid__heart_active');
            likeCounter.textContent = data.likes.length;
        })
        .catch((err) => {
            console.log(err);
        });
};
export function deleteLike(cardId, likeButton, likeCounter) {
    fetch(`https://nomoreparties.co/v1/plus-cohort-28/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
            'authorization': '78bba5ba-993f-40b2-a4ae-e02179c22cc4',
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .then(data => {
            likeButton.classList.remove('grid__heart_active');
            likeCounter.textContent = data.likes.length;
        })
        .catch((err) => {
            console.log(err);
        });
};
export function changeAvatar() {
    renderLoading(true, saveAvatar, loadBlockAvatar)
    return fetch('https://nomoreparties.co/v1/plus-cohort-28/users/me/avatar', {
        method: 'PATCH',
        headers: {
            'authorization': '78bba5ba-993f-40b2-a4ae-e02179c22cc4',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            avatar: avatar.src
        }),
    })
        .then(res => {
            return res.json()
        })
        .then(data => {
            data.avatar = avatar.src
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            renderLoading(false, saveAvatar, loadBlockAvatar);
        });
}