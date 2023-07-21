import { IndexServer } from "server";
import { Controller, HttpMethod, PServer, Router, TitController } from "tit";

@Controller({
  prefix: "/api",
})
export class IndexController extends TitController {
  @Router({
    method: HttpMethod.GET,
    path: "/hello",
    middleware: [],
  })
  public async helloWord(@PServer(IndexServer) indexServer: IndexServer): Promise<void> {
    const content = indexServer.hello();
    this.ctx.body = {
      data: content,
    };
  }
}
