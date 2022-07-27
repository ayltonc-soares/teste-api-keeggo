/// <reference types="cypress" />

import * as GETList from '../requests/GETList.request';


describe('GET List', () => {
    it('Listar todos', () => {
        GETList.exibirLista().should((response) => {
            expect(response.status).to.eq(200);
            cy.log(response.body.data.list.name);


        })
    })
})