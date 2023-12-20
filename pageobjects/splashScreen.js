const { expect } = require('@wdio/globals')
const splashScreen = require('../locators/Splash_Screen_Locator')

class splash_Screen {
    constructor() {
        this.VerifyMyVcaLogo = async () => {
            expect(splashScreen.myVcaAppLogo).toBeDisplayed();
            expect(splashScreen.myVcaAppLogo).toBeClickable();
        }
        this.VerifyWomenDogChevron = async () => {
            expect(splashScreen.womenWithDogChevronLogo).toBeDisplayed();
            expect(splashScreen.womenWithDogChevronLogo).toBeClickable();
        }
    }
}
module.exports = new splash_Screen();
