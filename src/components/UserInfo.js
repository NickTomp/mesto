export default class UserInfo {
    constructor({ name, job }) {
        this.test = name
        this._profileName = document.querySelector(name);
        this._profileJob = document.querySelector(job);
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