const agenda = require('../agenda');

const database = [];

minhaAgenda = new agenda();

// Cenário de teste de adicionar um novo contato na agenda
test('Adicionar contato', () => {
    minhaAgenda.adicionar_contato('João', '1234-5678');
    expect(minhaAgenda.buscar_contato('João')).toEqual({ nome: 'João', telefone: '1234-5678' });
});

// Cenário de teste de remover um contato existente na agenda
test('Remover contato existente', () => {
    minhaAgenda.remover_contato('João');
    expect(minhaAgenda.buscar_contato('João')).toBeUndefined();
});

// Cenário de teste de remover um contato inexistente na agenda
test('Remover contato inexistente', () => {
    minhaAgenda.remover_contato('Maria');
    expect(minhaAgenda.buscar_contato('Maria')).toBeUndefined();
});

// Cenário de teste de buscar um contato existente na agenda
test('Buscar contato existente', () => {
    minhaAgenda.adicionar_contato('Maria', '1234-5678');
    expect(minhaAgenda.buscar_contato('Maria')).toEqual({ nome: 'Maria', telefone: '1234-5678' });
});

// Cenário de teste de buscar um contato inexistente na agenda
test('Buscar contato inexistente', () => {
    expect(minhaAgenda.buscar_contato('João')).toBeUndefined();
});

// Cenário de teste de listar contatos com a agenda vazia
test('Listar contatos com agenda vazia', () => {
    minhaAgenda.remover_contato('Maria');
    expect(minhaAgenda.listar_contatos()).toEqual([]);
});

// Cenário de teste de listar contatos com a agenda preenchida
test('Listar contatos com agenda preenchida', () => {
    minhaAgenda.adicionar_contato('João', '1234-5678');
    minhaAgenda.adicionar_contato('Maria', '1234-5678');
    expect(minhaAgenda.listar_contatos()).toEqual([{ nome: 'João', telefone: '1234-5678' }, { nome: 'Maria', telefone: '1234-5678' }]);
});

// Cenário de teste de listar contatos com a agenda preenchida e um contato removido
test('Listar contatos com agenda preenchida e um contato removido', () => {
    minhaAgenda.remover_contato('Maria');
    expect(minhaAgenda.listar_contatos()).toEqual([{ nome: 'João', telefone: '1234-5678' }]);
});

// Cenário de teste de listar contatos com a agenda vazia após adicionar e remover um contato
test('Listar contatos com agenda vazia após adicionar e remover um contato', () => {
    minhaAgenda.remover_contato('João');
    expect(minhaAgenda.listar_contatos()).toEqual([]);
});