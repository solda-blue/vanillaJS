import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Main");
    }

    async getHtml() {
        return `
            <h1>메인 페이지 입니다</h1>

            <p>
                안녕하세요
            </p>
        `;
    }

}
