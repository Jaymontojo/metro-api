exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('companies').del()
  await knex('companies').insert([
    {name_en: 'East Japan Railway Company'},
    {name_en: 'Tokyo Metro Co., Ltd'},
    {name_en: 'Odakyu Electric Railway Co., Ltd'},
    {name_en: 'Keio Corporation'},
    {name_en: 'Keikyu Corporation'},
    {name_en: 'Toei Subway'},
    {name_en: 'Keisei Electric Railway Co., Ltd'},
    {name_en: 'Tokyu Railways Co., Ltd'},
    {name_en: 'Tokyo Waterfront Area Rapid Transit, Inc'},
    {name_en: 'Tokyo Monorail Co., Ltd'},
    {name_en: 'Tobu Railway'},
    {name_en: 'Yurikamome Inc'},
  ]);
};
