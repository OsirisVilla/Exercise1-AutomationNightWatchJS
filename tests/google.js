module.exports ={

    '@tags' : ['google'],
    'Google advance sarch: Elon Musk' (browser) {

        const mainQuery = 'Elon Musk';

        const mainQueryInputSelector = 'input[name="as_q"]';
        const languageDropdownOpenerSelector = '#lr_button';
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';
        const lastUpdateDropdownOpenerSelector = '#as_qdr_button';
        const lastUpdateDropdownValueSelector = '.goog-menuitem[value="m"]';
        const submitButtonSelector = '.jfk-button[type="submit"]';
        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
        const resultsPageLanguageSelector = '[aria-label = "Buscar páginas en Italiano"]';
        const resultsPageLastMonthSelector = '[aria-label = " Último mes"]';

        browser
            .url('https://www.google.com/advanced_search')
            .waitForElementVisible('body', 1000)
            .assert.title('Búsqueda avanzada de Google')
            .assert.visible(mainQueryInputSelector)
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageDropdownOpenerSelector)
            .click(languageDropdownValueSelector)
            .click(lastUpdateDropdownOpenerSelector)
            .click(lastUpdateDropdownValueSelector)
            .click(submitButtonSelector)
            .waitForElementVisible('body', 1000)
            .assert.urlContains('as_q=Elon+Musk', 'This shit works!')
            .assert.urlContains('lr=lang_it', 'This shit too')
            .assert.urlContains('as_qdr=m', 'This shit toooooo!')
            .assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input')
            .assert.containsText(resultsPageLanguageSelector, 'Buscar páginas en Italiano', 'UI: Language is set to Italian')
            .assert.containsText(resultsPageLastMonthSelector, 'Último mes', 'UI: Language is set to Italian')
            .saveScreenshot('tests_output/google.png') 
            .end()

    }
}