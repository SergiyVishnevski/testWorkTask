'use strict'

const matchDay = {
    data: '2020.11.21',
    day: 'Saturday',
    time: '21:45',
    stadium: {
        name: 'Anfield',
        address: ['Anfield Road', 'Liverpool', 'L4 0TH'],
        capacity: '54,074',
    },
    teamHome: {
        name: 'Liverpool',
        startXI: {
            gk: 'Alisson Becker', 
            rb: 'Trent Alexander-Arnold',
            rcb: 'Joel Matip',
            lcb: 'Virgil (van Dijk)',
            lb: 'Andrew Robertson',
            rcm: 'Jordan Henderson (C)',
            cm: 'Fabinho',
            lcm: 'Tiago Alcantara',
            rw : 'Mohamed Salah',
            st: 'Roberto Firmino',
            lw: 'Sadio Mane'
        }, 
        spareBench: {
            gk: ['Adrian', 'Caoimhin Kelleher'],
            def: ['Nathaniel Phillips', 'Konstantinos Tsimikas', 'Neco Williams', 'Sepp van den Berg'],
            midl: ['Georginio Wijnaldum', 'Naby Keïta', 'Alex Oxlade-Chamberlain', 'James Milner', 'Curtis Jones'],
            atc: ['Diogo Jota', 'Takumi Minamino', 'Xherdan Shaqiri', 'Divock Origi'],

        }, 
        coach:{
            name: 'Jürgen Klopp',
            nationality: 'Germany',
            age: 53,
            trains: '5 years',
            in_a_position_with: '2015.10.08',
            contract_to: '2024.06.30',
        },
        statistics: {
            posicion: 3,
            games: [ 'n:8', 'w:5', 'd:2', 'l:1'],
            points: 17,
            goals : ['goals scored: 18', 'conceded goals: 16', 'head difference: +2'],
        }
    },
    teamGuest: {
        name: 'ManchesterCity',
    },
    teamOfArbitrators: {
        first: 'Michael Oliver',
        second: 'Stuart Burt',
        third: 'Simon Bennett',
        fourth: 'Martin Atkinson',
        fifth: 'Andrea Marriner',
    }
}
console.log(matchDay);