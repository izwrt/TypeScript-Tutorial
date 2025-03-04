// Define an interface 'TakePhoto' with properties that any class implementing it must have
interface TakePhoto {
    cameraMode: string;
    filter: string;
    burst: number;
}

// Define another interface 'Story' with a method that classes must implement
interface Story {
    createStory(): void;
}

// Class 'Instagram' implements 'TakePhoto' interface and must define all its properties
class Instagram implements TakePhoto {
    cameraMode: string;
    constructor(cameraMode: string, public filter: string, public burst: number) {
        this.cameraMode = cameraMode;
    }
}

// Class 'Youtube' implements both 'TakePhoto' and 'Story' interfaces
// It must define all properties from 'TakePhoto' and implement the 'createStory' method from 'Story'
class Youtube implements TakePhoto, Story {
    constructor(public cameraMode: string, public filter: string, public burst: number) {}
    
    // Implementing the 'createStory' method as required by the 'Story' interface
    createStory(): void {
        console.log("Story was created");
    }
}

// Creating an instance of 'Instagram' class
const insta = new Instagram("front cam", "snow white", 20);
console.log(insta);

// Creating an instance of 'Youtube' class and calling its method
const yt = new Youtube("rear cam", "vintage", 30);
yt.createStory();


export {}