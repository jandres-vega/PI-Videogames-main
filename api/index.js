//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { getGenreApi } = require('./src/services/informatioApiDb')
const { Genre } = require('./src/db')
// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {

  const genreApi = await getGenreApi()
  genreApi.forEach(data => {
    Genre.findOrCreate({
      where: {name: data}
    })
  })
  server.listen(3006, () => {
    console.log('listening at 3006'); // eslint-disable-line no-console
  });
});
