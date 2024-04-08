describe('Автотесты на авторизацию', function () {
    
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); // ввёл правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввёл правильный пароль
        cy.get('#loginButton').click(); // нажимаю войти

        cy.get('#messageHeader').should('be.visible'); // проверка что текст видит пользователь
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка текста 

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // виден крестик

         })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click(); // нажимаю забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввёл правильный логин

        cy.get('#restoreEmailButton').click(); // нажимаю кнопку отправить код

        cy.get('#messageHeader').should('be.visible'); // проверка что текст видит пользователь
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка текста 

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // виден крестик

        })

    it('Негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); // ввёл правильный логин
        cy.get('#pass').type('iLoveqastudio3'); // ввёл не правильный пароль
        cy.get('#loginButton').click(); // нажимаю войти

        cy.get('#messageHeader').should('be.visible'); // проверка что текст видит пользователь
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка текста 

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // виден крестик

        })

    it('Негативный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@doln.ru'); // ввёл не правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввёл правильный пароль
        cy.get('#loginButton').click(); // нажимаю войти

        cy.get('#messageHeader').should('be.visible'); // проверка что текст видит пользователь
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка текста 

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // виден крестик

        })

     it('Негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru'); // ввёл логин без @
        cy.get('#pass').type('iLoveqastudio1'); // ввёл правильный пароль
        cy.get('#loginButton').click(); // нажимаю войти

        cy.get('#messageHeader').should('be.visible'); // проверка что текст видит пользователь
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка текста 

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // виден крестик

        })

     it('Приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввёл логин
        cy.get('#pass').type('iLoveqastudio1'); // ввёл правильный пароль
        cy.get('#loginButton').click(); // нажимаю войти

        cy.get('#messageHeader').should('be.visible'); // проверка что текст видит пользователь
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка текста 

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // виден крестик

        })

})




//Найди поле логин и напиши в него верный логин
//Найди поле пароль и инапиши в него верный логин
//Найди кнопку Войти и нажми на нее
//Проверить что на страничке есть текст = Авторизация прошла успешно