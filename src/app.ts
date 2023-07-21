import { ApplicationFactory } from "tit";

declare module "tit/dist/application" {
  interface IConfig {}
}

async function main() {
  const app = await ApplicationFactory.create({ app: {} });

  app.use(app.rootRouter.routes());

  app.listen(app.config.port, () => {
    app.logger.info(`listen ${app.config.port}...`);
  });

  app.on('error', (e) => {
    console.error(e);
  });

}

main().catch((e) => {
  console.error(e);
  process.exit();
});
