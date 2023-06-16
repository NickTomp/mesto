export default class UserInfo {
    constructor({ nameSelector, jobSelector }) {
        this._profileName = document.querySelector(nameSelector);
        this._profileJob = document.querySelector(jobSelector);
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
}