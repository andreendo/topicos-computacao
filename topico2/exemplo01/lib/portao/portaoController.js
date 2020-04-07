const Display = require('./display');
const Cancela = require('./cancela');
const AutomovelDAO = require('./automovelDAO');
const RegistroDAO = require('./registroDAO');

class PortaoController {
    constructor() {
        this.display = new Display();
        this.cancela = new Cancela();
        this.automovelDAO = new AutomovelDAO();
        this.registroDAO = new RegistroDAO();
    }

    abrir(tag) {
        if (tag === 'ERRO') return this.tratarSemTag();

        const auto = this.automovelDAO.getByTagName(tag);
        if (auto === null) return this.tratarTagDesconhecida();

        return this.tratarTagConhecida(auto);
    }

    tratarSemTag() {
        this.display.limpar();
        this.display.mostrarMsg('Automovel nao possui TAG. Por favor voltar!');
        return false;
    }

    tratarTagDesconhecida() {
        this.display.limpar();
        this.display.mostrarMsg('TAG desconhecida. Por favor, voltar!');
        return false;
    }

    tratarTagConhecida(auto) {
        this.display.limpar();
        this.display.mostrarMsg(`Bem-Vindo, ${auto.proprietario}!`);
        this.cancela.levantar();
        this.registroDAO.registrarEntrada(auto.placa, auto.proprietario);
        return true;
    }
}

module.exports = PortaoController;