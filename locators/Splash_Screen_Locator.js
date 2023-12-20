const { browser } = require('@wdio/globals')
const { $ } = require('@wdio/globals')

class splashScreen {
    constructor() {
        this.myVcaAppLogo = browser.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[2]')
        this.womenWithDogChevronLogo = browser.$('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ImageView[3]')
    }
}
module.exports = new splashScreen()
