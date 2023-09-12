class Agenda {
    constructor() {
        this.contatos = [];
    }

    adicionar_contato(nome, telefone) {
        const contato = { nome, telefone };
        this.contatos.push(contato);
    }

    remover_contato(nome) {
        this.contatos = this.contatos.filter(contato => contato.nome !== nome);
    }

    buscar_contato(nome) {
        return this.contatos.find(contato => contato.nome === nome);
    }

    listar_contatos() {
        return this.contatos;
    }
}

module.exports = Agenda;