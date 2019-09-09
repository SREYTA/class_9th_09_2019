import { JS } from "./JS.js";
import { Java } from "./Java.js";
import { PHP } from "./PHP.js";
import { Ruby } from "./Ruby.js";

// JS Object
const js1 = new JS();
js1.setName("JS language");
js1.getName();
js1.setVerson("Verson 4");
js1.getVerson();

// Java Object
const java1 = new Java();
java1.setName("Java Language");
java1.getName();
java1.setAuthor("Brendan Eich");
java1.getAuthor();

// PHP Object
const php1 = new PHP();
php1.setName("PHP Language");
php1.getName();
php1.execute();

// Ruby Object
const ruby1 = new Ruby();
ruby1.setName("Ruby Language");
ruby1.getName();
ruby1.error();