import { ApplicationFactory } from 'tit';

declare module 'tit/dist/application' {
  /**
   * 扩展配置项
   */
  // interface IConfig {
  //   anyConfig: string;
  // }
}

async function main(): Promise<void> {
  const app = await ApplicationFactory.create();
  app.use(app.rootRouter.routes());

  app.listen(app.config.port, () => {
    console.log(`server listen on ${app.config.port}`);
  });
  app.on('error', (e) => {
    console.error(e);
  });
}

main().catch((e: Error) => {
  console.error(e);
  process.exit();
});
