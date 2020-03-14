'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AppCountriesSchema extends Schema {
  up () {
    this.create('app_countries', (table) => {
      table.bigInteger('geoname_id', 80);
      table.string('locale_code', 80);
      table.string('continent_code', 80);
      table.string('continent_name', 80);
      table.string('country_iso_code', 80);
      table.string('country_name', 80);
      table.string('is_in_european_union', 80);
    });
  }

  down () {
    this.drop('app_countries');
  }
}

module.exports = AppCountriesSchema
