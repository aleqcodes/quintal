class AppHeader extends HTMLElement {
    connectedCallback() {
        const activePage = this.getAttribute('active') || '';

        this.innerHTML = `
        <nav class="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm py-3">
            <div class="container mx-auto px-4 flex justify-between items-center">
                <a href="index.html" class="flex items-center gap-3 group">
                    <img src="assets/logo.png" alt="Logo Quintal Agrias"
                        class="h-10 w-10 object-contain transition-transform group-hover:rotate-12 opacity-80">
                    <div class="flex flex-col">
                        <span class="font-display font-bold text-xl text-primary leading-none">Quintal Agrias</span>
                        <span class="text-xs text-gray-500 font-medium tracking-wide">Escola Viva</span>
                    </div>
                </a>

                <div class="hidden md:flex items-center gap-8">
                    <a href="index.html" class="${this.getLinkClass(activePage, 'home')}">Início</a>
                    <a href="sobre.html" class="${this.getLinkClass(activePage, 'sobre')}">Sobre</a>
                    <a href="pedagogia.html" class="${this.getLinkClass(activePage, 'pedagogia')}">Pedagogia</a>
                    <a href="dia-a-dia.html" class="${this.getLinkClass(activePage, 'dia-a-dia')}">Dia a Dia</a>
                    <a href="galeria.html" class="${this.getLinkClass(activePage, 'galeria')}">Galeria</a>
                    <a href="contato.html"
                        class="px-5 py-2 rounded-full bg-accent text-white font-bold shadow-md hover:bg-accent-dark transition-all hover:-translate-y-0.5">Fale Conosco</a>
                </div>

                <button id="mobile-menu-btn" class="md:hidden text-primary focus:outline-none p-2" aria-label="Menu">
                    <i class="fas fa-bars text-2xl" aria-hidden="true"></i>
                </button>
            </div>

            <div id="mobile-menu"
                class="hidden md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
                <div class="flex flex-col p-4 gap-4 text-center">
                    <a href="index.html" class="${this.getMobileLinkClass(activePage, 'home')}">Início</a>
                    <a href="sobre.html" class="${this.getMobileLinkClass(activePage, 'sobre')}">Sobre</a>
                    <a href="pedagogia.html" class="${this.getMobileLinkClass(activePage, 'pedagogia')}">Pedagogia</a>
                    <a href="dia-a-dia.html" class="${this.getMobileLinkClass(activePage, 'dia-a-dia')}">Dia a Dia</a>
                    <a href="galeria.html" class="${this.getMobileLinkClass(activePage, 'galeria')}">Galeria</a>
                    <a href="contato.html"
                        class="w-full text-center px-5 py-3 rounded-xl bg-accent text-white font-bold shadow-sm">Fale Conosco</a>
                </div>
            </div>
        </nav>
        `;

        // Re-initialize mobile menu logic since it's now injected
        const btn = this.querySelector('#mobile-menu-btn');
        const menu = this.querySelector('#mobile-menu');
        if (btn && menu) {
            btn.addEventListener('click', () => { menu.classList.toggle('hidden'); });
        }
    }

    getLinkClass(activePage, pageName) {
        const baseClass = "font-medium transition-colors";
        const inactiveClass = "text-gray-600 hover:text-primary";
        const activeClass = "text-primary font-bold";
        return activePage === pageName ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;
    }

    getMobileLinkClass(activePage, pageName) {
        const baseClass = "font-medium py-2 border-b border-gray-50 block w-full";
        const inactiveClass = "text-gray-700 hover:text-primary";
        const activeClass = "text-primary font-bold";
        return activePage === pageName ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;
    }
}

class AppFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-dark text-white pt-16 pb-8">
            <div class="container mx-auto px-4">
                <div class="grid md:grid-cols-3 gap-12 mb-12">
                    <div class="text-center md:text-left">
                        <div class="flex items-center justify-center md:justify-start gap-3 mb-4">
                            <img src="assets/logo.png" alt="Logo" class="h-12 w-12 object-contain opacity-80">
                            <span class="font-display font-bold text-2xl">Quintal Agrias</span>
                        </div>
                        <p class="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            Escola Viva. Um espaço dedicado ao desenvolvimento integral e feliz de cada criança.
                        </p>
                    </div>
                    <div class="text-center">
                        <h4 class="font-display font-bold text-lg mb-6 text-secondary">Navegação</h4>
                        <ul class="space-y-3 text-gray-300 text-sm">
                            <li><a href="sobre.html" class="hover:text-white transition-colors">Sobre Nós</a></li>
                            <li><a href="pedagogia.html" class="hover:text-white transition-colors">Nossa Pedagogia</a></li>
                            <li><a href="dia-a-dia.html" class="hover:text-white transition-colors">Dia a Dia</a></li>
                            <li><a href="contato.html" class="hover:text-white transition-colors">Contato</a></li>
                        </ul>
                    </div>
                    <div class="text-center md:text-right">
                        <h4 class="font-display font-bold text-lg mb-6 text-secondary">Siga-nos</h4>
                        <div class="flex justify-center md:justify-end gap-4">
                            <a href="https://www.instagram.com/quintalagriasescolaviva" target="_blank" aria-label="Instagram"
                                class="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all">
                                <i class="fab fa-instagram text-xl" aria-hidden="true"></i>
                            </a>
                            <a href="https://www.facebook.com/quintalagrias" target="_blank" aria-label="Facebook"
                                class="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all">
                                <i class="fab fa-facebook-f text-xl" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
                    <p>&copy; 2024 Quintal Agrias - Escola Viva. Todos os direitos reservados.</p>
                    <p class="mt-2 flex items-center justify-center gap-1">
                        Feito com <span class="text-blue-500 text-sm">💙</span> pelo 
                        <a href="https://www.instagram.com/aleqcodes/" target="_blank" class="hover:text-blue-400 transition-colors font-medium">@aleqcodes</a>
                    </p>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);
