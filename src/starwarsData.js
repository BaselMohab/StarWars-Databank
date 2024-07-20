//films
import newHope from './assets/images/films/a-new-hope.jpg'
import empireStrkesBack from './assets/images/films/the-empire-strikes-back.jpg'
import returnOFJedi from './assets/images/films/return-of-the-jedi.jpg'
import phantomMenance from './assets/images/films/the-phantom-menance.jpg'
import attackOfTheClones from './assets/images/films/attack-of-the-clones.jpg'
import revengeOfSith from './assets/images/films/revenge-of-sith.jpg'

//people
import luke from './assets/images/people/luke.jpeg'
import c3po from './assets/images/people/c3po.jpeg'
import r2d2 from './assets/images/people/r2d2.jpeg'
import darth from './assets/images/people/darth.jpeg'
import leia from './assets/images/people/leia.jpeg'
import owen from './assets/images/people/owen.jpg'
import beru from './assets/images/people/beru.jpg'
import r5d4 from './assets/images/people/r5d4.jpeg'
import biggs from './assets/images/people/Biggs.jpeg'
import obi from './assets/images/people/obi.jpg'

//species
import droid from './assets/images/species/droid.jpeg'
import ewok from './assets/images/species/ewoks.jpg'
import hutt from './assets/images/species/hutt.jpg'
import monCalamari from './assets/images/species/mon-calamari.jpg'
import rodian from './assets/images/species/rodian.jpeg'
import sullustan from './assets/images/species/sullustan.jpg'
import trandoshan from './assets/images/species/trandoshan.jpg'
import wookiees from './assets/images/species/wookiee.jpeg'
import yoda from './assets/images/species/yoda.jpg'
import human from './assets/images/people/luke.jpeg'

//planets
import aldera from './assets/images/planets/Aldera_City.png'
import bespin from './assets/images/planets/Bespin.png'
import coruscant from './assets/images/planets/Coruscant.jpg'
import dagobah from './assets/images/planets/Dagobah.jpg'
import endor from './assets/images/planets/Endor.jpg'
import hoths from './assets/images/planets/hoths.jpg'
import kamino from './assets/images/planets/Kamino.png'
import naboo from './assets/images/planets/Naboo.png'
import tatooine from './assets/images/planets/tatooine.jpeg'
import yavin from './assets/images/planets/yavin_iv.jpg'

//starships
import cr90 from './assets/images/starships/CR90 corvette.jpeg'
import deathStar from './assets/images/starships/Death Starjpeg.jpeg'
import executor from './assets/images/starships/Executor.jpeg'
import millennium from './assets/images/starships/Millennium Falcon.jpg'
import rebel from './assets/images/starships/Rebel transport.jpg'
import sentinel from './assets/images/starships/sentinel.jpg'
import starDestroyer from './assets/images/starships/Star Destroyer.jpeg'
import advancedX1 from './assets/images/starships/TIE Advanced x1jpeg.jpeg'
import xWing from './assets/images/starships/X-wing.jpeg'
import yWing from './assets/images/starships/Y-wing.jpeg'



const starWarsData = {
    films: {
        'A New Hope': newHope,
        'The Empire Strikes Back': empireStrkesBack,
        'Return of the Jedi': returnOFJedi,
        'The Phantom Menace': phantomMenance,
        'Attack of the Clones': attackOfTheClones,
        'Revenge of the Sith': revengeOfSith,
    },
    people: {
        "Luke Skywalker" : luke,
        "C-3PO" : c3po,
        "R2-D2" : r2d2,
        "Darth Vader" : darth,
        "Leia Organa" : leia,
        "Owen Lars" : owen,
        "Beru Whitesun lars" : beru,
        "R5-D4" : r5d4,
        "Biggs Darklighter" : biggs,
        "Obi-Wan Kenobi" : obi,
        'Yoda' : yoda,
    },
    species: {
        'Droid' : droid,
        'Ewok' : ewok,
        'Hutt' : hutt,
        'Mon Calamari' : monCalamari,
        'Rodian' : rodian,
        'Sullustan' : sullustan,
        'Trandoshan' : trandoshan,
        'Wookie' : wookiees,
        'Yoda\'s species' : yoda,
        'Human' : human,
    },
    planets: {
        'Tatooine' : tatooine,
        'Alderaan' : aldera,
        'Yavin IV' : yavin,
        'Bespin' : bespin,
        'Endor' : endor,
        'Naboo' : naboo,
        'Coruscant' : coruscant,
        'Dagobah' : dagobah,
        'Kamino' : kamino,
        'Hoth' : hoths,
        'Yavin IV' : yavin,
    },
    starships: {
        'CR90 corvette' : cr90,
        'Death Star' : deathStar,
        'Executor' : executor,
        'Millennium Falcon' : millennium,
        'Rebel transport' : rebel,
        'Sentinel-class landing craft' : sentinel,
        'Star Destroyer' : starDestroyer,
        'TIE Advanced x1' : advancedX1,
        'X-wing' : xWing,
        'Y-wing' : yWing,
        'Human': human
    },
}



export default starWarsData;