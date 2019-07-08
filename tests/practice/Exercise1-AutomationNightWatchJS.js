module.exports = {

    '@tags' : ['practice'],
    'Assignment Test Case' (browser){

        const joinNowbtn = 'a[class="nav__button-tertiary"]';
        const firstNameSelector = 'input[id="first-name"]';
        const firstNameValue = 'Osiris';
        const lastNameSelector = 'input[id="last-name"]';
        const lastNameValue = 'Villa';
        const agreeAndJoinBtn = 'button[type="submit"]';
        const ValidationAlert = 'div[class="alerts-cont"]';
        

        browser
        .url('https://www.linkedin.com/?originalSubdomain=mx')
        .click(joinNowbtn)
        .click(agreeAndJoinBtn)
        .assert.visible(ValidationAlert, 'Name required validation is displayed')
        .setValue(firstNameSelector, firstNameValue)
        .click(agreeAndJoinBtn)
        .assert.visible(ValidationAlert, 'Last name required validation is displayed')
        .setValue(lastNameSelector, lastNameValue)
        .click(agreeAndJoinBtn)
        .assert.visible(ValidationAlert, 'Email required validation is displayed')
        .saveScreenshot('tests_output/practice.png')  
        .end()

    }

}