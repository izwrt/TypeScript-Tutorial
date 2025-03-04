abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract Story(): void

    Login() {
        return "Logged In...!"
    }
}

class Insta extends TakePhoto {
    constructor(
        public cameraMode:string,
        public filter: string,
    ){
        super(cameraMode,filter);
    }

    Story(): void {
        console.log("New Story Added");
    }
}

const tp = new Insta("test", "Test")

console.log(tp.Login());
tp.Story();
