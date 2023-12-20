const splash_Screen = require('../../pageobjects/splashScreen')

describe("myVCA Logo validation", async function () {
    it("Verify the Splash screen logo", async function () {
        await splash_Screen.VerifyMyVcaLogo();
        await splash_Screen.VerifyWomenDogChevron();
    })
});




