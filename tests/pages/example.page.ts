import { $ } from '@wdio/globals'
import Page from './page.ts';

/**
 * sub-page containing specific selectors and methods for a specific page
 */
class ExamplePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('#username');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        //Path should always start with a forward slash. i.e "/example
        return super.openPath('/');
    }
}

export default new ExamplePage();
