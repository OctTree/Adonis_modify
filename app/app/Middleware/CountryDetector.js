'use strict'
const Reader = use('@maxmind/geoip2-node').Reader
const path = use('path')
const fs = use('fs');

class CountryDetector {
  get_ip(request) {
    return request.ip();
  }

  get_database() {
    return path.basename('GeoIP2-City.mmdb');
  }

  get_country(request) {
    const dbBuffer = fs.readFileSync(this.get_database());
    const reader = Reader.openBuffer(dbBuffer);

    var country = "";
    try {
      var city = reader.city(this.get_ip(request));
      country = city.country.names.en;
    } catch (e) {
      country = "no country found";
    }

    return country;
  }

  async handle ({ request}, next) {
    request.country = this.get_country(request);
    await next()
  }
}

module.exports = CountryDetector
