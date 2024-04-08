describe('Покупка аватара', function () {
 it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get(':nth-child(1) > .auth__input').type('aflyatunovanastya@yandex.ru');
        cy.get('#password').type('7wia-Rps-YdL-ySF');
        cy.get('.auth__button').click();

        cy.get('.header__btns > [href="/shop"]').click();
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click();

        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NASTYA');
        cy.get('.pay__main-v2').click();
        cy.get('.pay-btn').click();
        
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        

        cy.get('.payment__font-for-success').should('be.visible'); // проверка что текст видит пользователь
        cy.get('.success__image').should('be.visible');
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // проверка текста 

        cy.get('.payment__adv').click();
    })

})
