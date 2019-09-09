import Programming from "./Programming.js";

export class Java extends Programming{

    // setter
    setAuthor(author){
        this.mAuthor = author;
    }

    // getter
    getAuthor(){
        console.log(this.mAuthor);
    }
}