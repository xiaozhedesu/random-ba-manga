import { Context, Schema } from 'koishi'

export const name = 'random-ba-manga'

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

/**
 * 对一个数组随机选取一个下标返回
 * @param length 数组长度
 * @returns 整型
 */
const random = length => Math.floor(Math.random() * length)

export function apply(ctx: Context) {
  ctx.command('random-ba-yonkoma').alias('随个ba四格漫')
    .action(async ({ session }) => {
      session.send('请求中，请稍等...');
      const url = 'https://bluearchive.jp/cms/comic/list?pageIndex=1&pageNum=250&type=1'
      const response = await fetch(url).then(response => response.json());
      const data = response.data;

      const index = random(data.comicList.length);
      const imageUrl = data.comicList[index].comic;
      session.send(`<img src="${imageUrl}">`);
    })

  ctx.command('random-ba-aoharuRecord').alias('随个ba青春记录')
    .action(async ({ session }) => {
      session.send('请求中，请稍等...');
      const url = 'https://bluearchive.jp/cms/comic/list?pageIndex=1&pageNum=150&type=2';
      const response = await fetch(url).then(response => response.json());
      const data = response.data;

      const index = random(data.comicList.length);
      const imageUrl = data.comicList[index].comic;
      session.send(`<img src="${imageUrl}">`);
    })
}
