"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    Login() {
        return "Logged In...!";
    }
}
class Insta extends TakePhoto {
    constructor(cameraMode, filter) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    Story() {
        console.log("New Story Added");
    }
}
const tp = new Insta("test", "Test");
console.log(tp.Login());
tp.Story();
