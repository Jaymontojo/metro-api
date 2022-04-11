exports.seed = async function(knex) {
  await knex('wards').del();
  await knex('wards').insert([
    {name_en: 'Chiyoda Ward'},
    {name_en: 'Chuo Ward'},
    {name_en: 'Minato Ward'},
    {name_en: 'Shinjuku Ward'},
    {name_en: 'Bunkyo Ward'},
    {name_en: 'Taito Ward'},
    {name_en: 'Sumida Ward'},
    {name_en: 'Koto Ward'},
    {name_en: 'Shinagawa Ward'},
    {name_en: 'Meguro Ward'},
    {name_en: 'Ota Ward'},
    {name_en: 'Setagaya Ward'},
    {name_en: 'Shibuya Ward'},
    {name_en: 'Nakano Ward'},
    {name_en: 'Suginami Ward'},
    {name_en: 'Toshima Ward'},
    {name_en: 'Kita Ward'},
    {name_en: 'Arakawa Ward'},
    {name_en: 'Itabashi Ward'},
    {name_en: 'Nerima Ward'},
    {name_en: 'Adachi Ward'},
    {name_en: 'Katsushika Ward'},
    {name_en: 'Edogawa Ward'},
  ]);
};
