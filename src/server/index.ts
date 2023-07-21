import { TitServer } from "tit";

export class IndexServer extends TitServer {
  /**
   * hello
   * @returns string
   */
  public async hello(): Promise<string> {
    return "Hello World!";
  }

  public async dbExample(): Promise<unknown> {
    const db = this.app.rootScope.getMysql();
    const rows = await db.query("SELECT * FROM user");
    return rows;
  }
}
