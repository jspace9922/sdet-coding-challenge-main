class BasicInfoPage {

    get txtFirstName() {
        return $("#input_3")
    }

    get txtLastName() {
        return $("#input_4")
    }

    get txtMobileNumber() {
        return $("#input_5")
    }

    get txtZipCode() {
        return $("#input_6")
    }

    get qualificationDropdown() {
        return $("#select_8")
    }

    get rnOption() {
        return $("#select_option_13")
    }

    get btnShiftCheckbox() {
        return $("md-checkbox[aria-label='Day Checkbox']")
    }

    get btnWorkExperience() {
        return $("md-radio-button[aria-label='6+ months']")
    }

    get btnTOS() {
        return $("md-checkbox[automation-id='termsAccept-answer']")
    }

    get btnContinueButton() {
        return $("#AP_Basic_Info_continue")
    }

}

export default new BasicInfoPage();