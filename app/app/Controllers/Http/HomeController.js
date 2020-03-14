'use strict'
const Database = use('Database')

class HomeController {
    async index({request, response, session, view }) {
            console.log("sadfasfd");
            console.log(request.country)
        const user = session.get('user');
        const ip = request.ip();
        // console.log(ip)
        const countries =  await Database
                .table('app_countries')
                .orderBy('country_name', 'asc')

        return view.render('home', {
            countries: countries,
            country_name: request.country,
            incoming_ip: ip,
            user: user?user.username:null,
            auth: user?'true':'false',
        })
    }
}

module.exports = HomeController
