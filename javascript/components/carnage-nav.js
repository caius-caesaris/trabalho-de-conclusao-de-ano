class carnageNav extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `
            <nav>
                <a href="main.html">Acessar</a>
                <a href="os.html">Ordem de Serviço</a>
                <a href="edit.html">Editar Informações</a>
                <a href="mgr.html">Gerenciar Banco de Dados</a>
            </nav>
        `;
    }
}
customElements.define('carnage-nav', carnageNav);
export default carnageNav;