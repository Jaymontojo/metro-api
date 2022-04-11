/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('stations').del();
  await knex('stations').insert([
    {name_en: 'Tokyo Station', ward_id: 1},
    {name_en: 'Kanda Station', ward_id: 1},
    {name_en: 'Akihabara Station', ward_id: 1},
    {name_en: 'Okachimachi Station', ward_id: 6},
    {name_en: 'Ueno Station', ward_id: 6},
    {name_en: 'Uguisudani Station', ward_id: 6},
    {name_en: 'Nippori Station', ward_id: 18},
    {name_en: 'Nishi-Nippori Station', ward_id: 18},
    {name_en: 'Tabata Station', ward_id: 17},
    {name_en: 'Komagome Station', ward_id: 16},
    {name_en: 'Sugamo Station', ward_id: 16},
    {name_en: 'Otsuka Station', ward_id: 16},
    {name_en: 'Ikebukuro Station', ward_id: 16},
    {name_en: 'Meijiro Station', ward_id: 16},
    {name_en: 'Takadanobaba Station', ward_id: 4},
    {name_en: 'Shin-Okubo Station', ward_id: 4},
    {name_en: 'Shinjuku Station', ward_id: 4},
    {name_en: 'Yoyogi Station', ward_id: 13},
    {name_en: 'Harajuku Station', ward_id: 13},
    {name_en: 'Shibuya Station', ward_id: 13},
    {name_en: 'Ebisu Station', ward_id: 13},
    {name_en: 'Meguro Station', ward_id: 9},
    {name_en: 'Gotanda Station', ward_id: 9},
    {name_en: 'Osaki Station', ward_id: 9},
    {name_en: 'Shinagawa Station', ward_id: 3},
    {name_en: 'Takanawa Gateway Station', ward_id: 3},
    {name_en: 'Tamachi Station', ward_id: 3},
    {name_en: 'Hamamatsuchou Station', ward_id: 3},
    {name_en: 'Shimbashi Station', ward_id: 3},
    {name_en: 'Yurakuchou Station', ward_id: 1},
  ]);
};