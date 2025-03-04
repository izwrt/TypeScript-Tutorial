"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Class 'Instagram' implements 'TakePhoto' interface and must define all its properties
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.filter = filter;
        this.burst = burst;
        this.cameraMode = cameraMode;
    }
}
// Class 'Youtube' implements both 'TakePhoto' and 'Story' interfaces
// It must define all properties from 'TakePhoto' and implement the 'createStory' method from 'Story'
class Youtube {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    // Implementing the 'createStory' method as required by the 'Story' interface
    createStory() {
        console.log("Story was created");
    }
}
// Creating an instance of 'Instagram' class
const insta = new Instagram("front cam", "snow white", 20);
console.log(insta);
// Creating an instance of 'Youtube' class and calling its method
const yt = new Youtube("rear cam", "vintage", 30);
yt.createStory();
