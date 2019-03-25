import {Core} from "./lib/Core";
import {Route} from "./lib/Route";
//import {Collections} from "./middleware/Collections";
import {IAM} from "./middleware/IAM";
import {readFileSync} from "fs";
import {URLEncoded} from "./middleware/URLEncoded";
import {Passport} from "./middleware/Passport";
import {CookieSession} from "./middleware/CookieSession";

let app = new Core();

app.register(new CookieSession());
app.register(new URLEncoded());
app.register(new Passport());
app.register(new IAM());
//app.register(new Collections());

app.listen(8080);

app.use('/', function(route:Route){

	return new Promise(function (resolve, reject) {
		route.enqueueStyle(readFileSync('./theme/Default.css').toString());
		route.enqueueStyle(readFileSync('./theme/Theme.css').toString());
		route.enqueueBody(`<h1>Welcome Home</h1><p>Multi site, multi template, multi page, multi user, multi group, multi product;<br />One place.</p>`);
		resolve();
	});

});
