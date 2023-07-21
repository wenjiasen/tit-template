import { TitServer } from "tit";

export class IndexServer extends TitServer{
    /**
     * hello
     * @returns string 
     */
    public async hello():Promise<string>{
        return "Hello World!"
    }
}