import express,{ Application } from "express";
import { coutryRouter } from "./routes/CountryRoutes";

class Server{
    
    private app:Application;
    port = '3000';

    constructor(){
        this.app = express();
        this.listen();
        this.midlewares();
        this.routes();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Application running on the port ${this.port}`);
        })
    }
    routes(){
        this.app.use("/api",coutryRouter);
    }
    midlewares() { 
        this.app.use(express.json());   
    }
}

export default Server;