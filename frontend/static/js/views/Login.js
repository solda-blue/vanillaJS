import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Login");
    }

    async getHtml() {
        return `
            <h1>로그인 페이지 입니다</h1>

            <p>
                you are viewing the login!
            </p>
        `;
    }
}