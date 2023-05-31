class LoginPage {

    get email() {
        return $("#input_0")
    }

    get password() {
        return $("#input_1")
    }

    get btnAcctCreation() {
        return $("#AP_FirstPage_CreateAccount")
    }

}

export default new LoginPage();