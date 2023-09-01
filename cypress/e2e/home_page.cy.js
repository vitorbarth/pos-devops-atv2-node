describe('The Home Page', () => {
    it('Adicionar tarefas', () => {
        cy.visit('/')
        cy.get('input').clear('');
        cy.get('input').type('fazer compras');
        cy.get('#btnAdd').click();
        cy.get('#itmTarefa').should('have.id', 'itmTarefa');
        cy.get('#itmTarefa').should('have.text', 'fazer compras');
    })
})