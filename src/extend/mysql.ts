import { IExtend, Application } from "tit";
import { createConnection, Connection } from "mysql2";

declare module "tit/dist/application" {
  interface IConfig {
    mysql: {
      host: string;
      port: number;
      username: string;
      password: string;
      database: string;
    };
  }
  interface IScope {
    getMysql: () => Connection;
  }
}

export default class MysqlExtend implements IExtend {
  reduce(app: Application): void {
    let conn: Connection;
    app.rootScope.getMysql = (): Connection => {
      const { config } = app;
      if (!conn) {
        conn = createConnection({
          host: config.mysql.host,
          port: config.mysql.port,
          user: config.mysql.username,
          password: config.mysql.password,
          database: config.mysql.database,
        });
      }
      return conn;
    };
  }
}
