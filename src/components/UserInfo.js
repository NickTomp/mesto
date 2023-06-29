export default class UserInfo {
    constructor({ nameSelector, jobSelector, avatarSelctor }) {
        this._profileName = document.querySelector(nameSelector);
        this._profileJob = document.querySelector(jobSelector);
        this._profileAvatar = document.querySelector(avatarSelctor);
    }
    getUserInfo() {
        const currentName = this._profileName.textContent;
        const currentJob = this._profileJob.textContent;
        return {name: currentName, job: currentJob};
    };
    setUserInfo({ name, job }) {
        this._profileName.textContent = name;
        this._profileJob.textContent = job;
    };
    setUserAvatar(link) {
        this._profileAvatar.src = link;
    }
}