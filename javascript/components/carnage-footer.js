class carnageFooter extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <footer>
                <div>
                <p>Assistência Técnica &copy; Todos os direitos reservados</p>
                </div>
            </footer>
        `;
    }
}
customElements.define('carnage-footer', carnageFooter);
export default carnageFooter;