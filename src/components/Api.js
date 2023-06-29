export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._getDataFromResponse)
    }
    getCardsArray() {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._getDataFromResponse)
    }
    editProfileInfo(data, button) {
        const submitButton = button;
        submitButton.textContent = 'Сохранение...'
        fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.job
            })
        })
        .then(submitButton.textContent = 'Сохранить')
    }
    addNewCard(cardLink, cardName, renderer, sectionClass, button) {
        const submitButton = button;
        submitButton.textContent = 'Сохранение...'
        fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: cardName,
                link: cardLink
            })
        })
        .then(this._getDataFromResponse)
        .then((res) => {
            const newElement = renderer({ 
                 link: cardLink,
                 name: cardName,
                 owner: {
                    _id: res.owner._id
                 },
                 likes: res.likes,
            });
            sectionClass.addItem(newElement, false);
    })
    .then(submitButton.textContent = 'Сохранить')
    }
    deleteCard(card) {
        fetch(`${this._baseUrl}/cards/${card.id}`, {
            method: 'DELETE',
            headers: this._headers,
        });
    }


    setLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers,
        });
    }
    removeLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        });
    }
    editProfileAvatar(link, button) {
        const submitButton = button;
        submitButton.textContent = 'Сохранение...'
        fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: `${link}`,
            })
        })
        .then(submitButton.textContent = 'Сохранить')
    }
    _getDataFromResponse(res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
    }
}