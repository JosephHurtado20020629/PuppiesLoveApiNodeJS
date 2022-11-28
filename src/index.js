import app from "./app.js";
import {PORT} from "./config.js";
import swagger from "./swagger.js"; 

app.listen(PORT, () => {
    swagger(app,PORT);
});
console.log("server on port", PORT);

