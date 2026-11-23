class carnageHeader extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <header>
                <div>
                    <h1>
                        <a href="main.html">Assistência Técnica</a>
                    </h1>
                </div>
            </header>
        `;
    }
}
customElements.define('carnage-header', carnageHeader);
export default carnageHeader;