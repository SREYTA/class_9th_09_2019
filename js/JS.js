import Programming from "./Programming.js";

export class JS extends Programming{

    // setter
    setVerson(verson){
        this.mVerson = verson;
    }

    // getter
    getVerson(){
        console.log(this.mVerson);
    }
}