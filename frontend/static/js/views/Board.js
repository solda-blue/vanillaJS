import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Board");
    }

    async getHtml() {
        return `
            <h1>게시판 입니다</h1>

            <p>
                you are viewing the board!
            </p>
        `;
    }
}