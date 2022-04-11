exports.seed = async function(knex) {
  await knex('operators').del()
  await knex('operators').insert([
    {name_en: 'East Japan Railway Company'},
    {name_en: 'Tōkyō  Metro Co., Ltd'},
    {name_en: 'Odakyu Electric Railway Co., Ltd'},
    {name_en: 'Keiō Corporation'},
    {name_en: 'Keikyu Corporation'},
    {name_en: 'Toei Subway'},
    {name_en: 'Keisei Electric Railway Co., Ltd'},
    {name_en: 'Tōkyū Railways Co., Ltd'},
    {name_en: 'Tōkyō Waterfront Area Rapid Transit, Inc'},
    {name_en: 'Tōkyō  Monorail Co., Ltd'},
    {name_en: 'Tobu Railway'},
    {name_en: 'Yurikamome Inc'},
  ]);
};
