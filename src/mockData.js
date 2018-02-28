export const mockEvent = {
  "events":[{"name":"Elton John: Farewell Yellow Brick Road",
    "type":"event",
    "id":"G5vzZfMDxs8MQ",
    "test":false,
    "url":"http://www.ticketmaster.com/elton-john-farewell-yellow-brick-road-boise-idaho-01-11-2019/event/1E00537EE2C50DDA",
    "locale":"en-us",
    "images":[{
      "ratio":"4_3",
      "url":"https://s1.ticketm.net/dam/a/12f/9ddad6da-104d-4b7a-bedb-698a9087012f_621881_CUSTOM.jpg",
      "width":305,
      "height":225,
      "fallback":false
    },
    {
      "ratio":"16_9",
      "url":"https://s1.ticketm.net/dam/a/12f/9ddad6da-104d-4b7a-bedb-698a9087012f_621881_TABLET_LANDSCAPE_16_9.jpg",
      "width":1024,
      "height":576,
      "fallback":false
    },
    {
      "ratio":"16_9",
      "url":"https://s1.ticketm.net/dam/a/12f/9ddad6da-104d-4b7a-bedb-698a9087012f_621881_RETINA_PORTRAIT_16_9.jpg",
      "width":640,
      "height":360,
      "fallback":false
    }],
    "sales": {
      "public":{
        "startDateTime":"2018-02-02T17:00:00Z",
        "startTBD":false,
        "endDateTime":"2019-01-12T03:00:00Z"
      },
      "presales":[
        {
          "startDateTime":"2018-01-25T17:00:00Z",
          "endDateTime":"2018-01-30T05:00:00Z",
          "name":"American Express® Card Member Presale"
        },
        {
          "startDateTime":"2018-01-25T15:00:00Z",
          "endDateTime":"2018-01-25T17:00:00Z",
          "name":"Rocket Club VIP Member Presale"
        },
        {
          "startDateTime":"2018-01-30T17:00:00Z",
          "endDateTime":"2018-02-01T05:00:00Z",
          "name":"Verified Fan Presale"
        }
      ]
    },
    "dates": {
      "start":{
        "localDate":"2019-01-11",
        "localTime":"20:00:00",
        "dateTime":"2019-01-12T03:00:00Z",
        "dateTBD":false,
        "dateTBA":false,
        "timeTBA":false,
        "noSpecificTime":false
      },
      "timezone":"America/Denver",
      "status":{
        "code":"onsale"
      },
      "spanMultipleDays":false
    },
    "_links": {
      "self": {
        "href":"/discovery/v2/events/G5vzZfMDxs8MQ?locale=en-us"
      },
      "attractions":[
        {"href":"/discovery/v2/attractions/K8vZ9171G-7?locale=en-us"}
      ],
      "venues":[{"href":"/discovery/v2/venues/KovZpZAEetIA?locale=en-us"}]
    },
    "_embedded":{
      "venues":[{
        "name":"Taco Bell Arena",
        "type":"venue",
        "id":"KovZpZAEetIA",
        "test":false,
        "url":"http://www.ticketmaster.com/taco-bell-arena-tickets-boise/venue/246824",
        "locale":"en-us",
        "images":[{
          "ratio":"16_9",
          "url":"https://s1.ticketm.net/dbimages/17330v.jpg",
          "width":205,
          "height":115,
          "fallback":false
        },
        {
          "ratio":"3_1",
          "url":"https://s1.ticketm.net/dam/v/229/1337cd9a-700d-4c36-96e5-444118ecf229_540991_SOURCE.jpg",
          "width":1500,
          "height":500,
          "fallback":false,
          "attribution":"KovZpZAEetIA"
        }],
        "postalCode":"83725",
        "timezone":"America/Denver",
        "city":{"name":"Boise"},
        "state":{
          "name":"Idaho",
          "stateCode":"ID"
        }
      }]
    }
  }] 
}; 

export const mockArtist = [
  {
    "id": "21203777",
    "artist_id": "510",
    "url": "https://www.bandsintown.com/e/21203777?app_id=dasfdfsda&came_from=267",
    "on_sale_datetime": "2018-01-29T09:59:00",
    "datetime": "2018-03-01T19:00:00",
    "description":"",
    "venue": {
      "name": "Estadio Olimpico Athahualpa ",
      "latitude": "-0.2166667",
      "longitude": "-78.5",
      "city": "Quito",
      "region": "18",
      "country": "Ecuador"
    },
    "offers": [{
      "type": "Tickets",
      "url": "https://www.bandsintown.com/t/21203777?app_id=dasfdfsda&came_from=267",
      "status": "available"
    }],
    "lineup": ["Maroon 5"]
  }
];

export const thunkMockEvent = 
    [{
      "city": "Boise", 
      "date": "2019-01-11", 
      "image": "https://s1.ticketm.net/dam/a/12f/9ddad6da-104d-4b7a-bedb-698a9087012f_621881_CUSTOM.jpg", 
      "name": "Elton John: Farewell Yellow Brick Road", 
      "state": "Idaho", 
      "ticketUrl": "http://www.ticketmaster.com/taco-bell-arena-tickets-boise/venue/246824", 
      "time": "20:00:00", 
      "venue": "Taco Bell Arena"
    }, 
    {
      "city": 
      "Boise", 
      "date": "2018-03-15", 
      "image": "https://s1.ticketm.net/dam/a/20f/9807c218-6a68-47d1-ba26-7c3978ebe20f_525501_RETINA_PORTRAIT_16_9.jpg", 
      "name": "Dancing With The Stars: Live! - Light Up The Night", 
      "state": "Idaho", 
      "ticketUrl": "http://www.ticketmaster.com/morrison-center-for-the-performing-arts-tickets-boise/venue/246822", 
      "time": "20:00:00", 
      "venue": "Morrison Center for the Performing Arts"
    }, 
    {
      "city": "Boise", 
      "date": "2018-09-28", 
      "image": "https://s1.ticketm.net/dam/a/e16/04d7f048-5911-4b66-9b07-03e19046ae16_610101_TABLET_LANDSCAPE_16_9.jpg", 
      "name": "Keith Urban: Graffiti U World Tour", 
      "state": "Idaho", 
      "ticketUrl": "http://www.ticketmaster.com/taco-bell-arena-tickets-boise/venue/246824", 
      "time": "19:30:00", 
      "venue": "Taco Bell Arena"
    }, 
    {
      "city": "Boise", 
      "date": "2018-10-02", 
      "image": "https://s1.ticketm.net/dam/a/77a/2398230d-bf0c-48ae-a604-ccbe256c177a_508011_CUSTOM.jpg", 
      "name": "Fall Out Boy: The M A  N  I  A Tour With Machine Gun Kelly", 
      "state": "Idaho", 
      "ticketUrl": "http://www.ticketmaster.com/taco-bell-arena-tickets-boise/venue/246824", 
      "time": "19:00:00", 
      "venue": "Taco Bell Arena"
    }, 
    {
      "city": "Boise", 
      "date": "2018-06-23", 
      "image": "https://s1.ticketm.net/dam/a/d44/feb03706-66ef-4cac-97eb-966516756d44_54331_ARTIST_PAGE_3_2.jpg", 
      "name": "Tedeschi Trucks Band", 
      "state": "Idaho", 
      "ticketUrl": "http://www.ticketmaster.com/morrison-center-for-the-performing-arts-tickets-boise/venue/246822", 
      "time": "20:00:00", 
      "venue": "Morrison Center for the Performing Arts"
    }, 
    {
      "city": "Boise", 
      "date": "2018-05-29", 
      "image": "https://s1.ticketm.net/dam/a/ba6/cf9d928e-c820-4a52-b2f0-2ce6d66e0ba6_527661_RETINA_PORTRAIT_16_9.jpg", 
      "name": "Celtic Woman: Homecoming Tour", 
      "state": "Idaho", 
      "ticketUrl": "http://www.ticketmaster.com/morrison-center-for-the-performing-arts-tickets-boise/venue/246822", 
      "time":"19:00:00", 
      "venue": "Morrison Center for the Performing Arts"
    }, 
    {
      "city": 
      "Boise", 
      "date": "2018-06-09", 
      "image": "https://s1.ticketm.net/dam/a/79c/d793b408-afe5-4457-96a6-895e5236279c_537271_RETINA_PORTRAIT_16_9.jpg", 
      "name": "Steely Dan With The Doobie Brothers: The Summer Of Living Dangerously", 
      "state": "Idaho", 
      "ticketUrl": "http://www.ticketmaster.com/taco-bell-arena-tickets-boise/venue/246824", 
      "time": "19:30:00", 
      "venue": "Taco Bell Arena"
    },
    {
      "city": "Boise", 
      "date": "2018-08-20", 
      "image": "https://s1.ticketm.net/dam/a/a9b/b4585e5c-41fa-4793-a50a-6c9e46b06a9b_120781_TABLET_LANDSCAPE_LARGE_16_9.jpg", 
      "name": "Steve Miller Band with Peter Frampton", 
      "state": "Idaho", 
      "ticketUrl": "http://www.ticketmaster.com/outlaw-field-at-the-idaho-botanical-garden-tickets-boise/venue/246839", 
      "time": "19:00:00", 
      "venue": "Outlaw Field at the Idaho Botanical Garden"
    }, 
    {
      "city": "Boise", 
      "date": "2018-06-21", 
      "image": "https://s1.ticketm.net/dam/a/75a/f2d8099c-fcbd-4a04-b310-19f60204075a_247601_TABLET_LANDSCAPE_16_9.jpg", 
      "name": "Buddy Guy", 
      "state": "Idaho",
      "ticketUrl": "http://www.ticketmaster.com/morrison-center-for-the-performing-arts-tickets-boise/venue/246822", 
      "time": "19:30:00", 
      "venue": "Morrison Center for the Performing Arts"
    }, 
    {
      "city": "Boise", 
      "date": "2018-06-07", 
      "image": "https://s1.ticketm.net/dam/a/467/488a2859-966e-47f9-b628-922ac7924467_500241_TABLET_LANDSCAPE_LARGE_16_9.jpg", 
      "name": "Barenaked Ladies: Last Summer On Earth Tour", 
      "state": "Idaho", 
      "ticketUrl": "http://www.ticketmaster.com/outlaw-field-at-the-idaho-botanical-garden-tickets-boise/venue/246839", 
      "time": "18:00:00", 
      "venue": "Outlaw Field at the Idaho Botanical Garden"
    }, 
    {
      "city": "Boise", 
      "date": "2018-08-23", 
      "image": "https://s1.ticketm.net/dam/a/b15/f440366c-8df2-49dd-a459-76c4d4d94b15_538441_TABLET_LANDSCAPE_3_2.jpg", 
      "name": "Free Rein Summer Tour 2018: Rebelution + SpecialGuests", 
      "state": "Idaho", 
      "ticketUrl": "http://www.ticketmaster.com/outlaw-field-at-the-idaho-botanical-garden-tickets-boise/venue/246839", 
      "time": "19:00:00", 
      "venue": "Outlaw Field at the Idaho Botanical Garden"
    }, 
    {
      "city": "Boise", 
      "date": "2018-06-10", 
      "image": "https://s1.ticketm.net/dam/a/1dd/39cefbe9-4a66-4672-b1d3-b3a1fbf921dd_19251_RECOMENDATION_16_9.jpg", 
      "name": "Jackie Evancho", 
      "state": "Idaho", 
      "ticketUrl": "http://www.ticketmaster.com/morrison-center-for-the-performing-arts-tickets-boise/venue/246822", 
      "time": "19:00:00", 
      "venue": "Morrison Center for the Performing Arts"
    }, 
    {
      "city": "Bozeman", 
      "date": "2018-07-26", 
      "image": "https://s1.ticketm.net/dam/a/443/c27ce107-a884-4ebe-be08-2d192a775443_635551_RETINA_PORTRAIT_16_9.jpg", 
      "name": "Imagine Dragons: EVOLVE TOUR", 
      "state": "Montana", 
      "ticketUrl": "http://www.ticketmaster.com/bobcat-stadium-tickets-bozeman/venue/246878", 
      "time": "19:00:00", 
      "venue": "Bobcat Stadium"
    }, 
    {
      "city": "Boise", 
      "date": "2018-04-06", 
      "image": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_TABLET_LANDSCAPE_16_9.jpg", 
      "name": "Gene Harris Jazz Festival (GHJF) - Headline Concert", 
      "state": "Idaho", 
      "ticketUrl": "http://www.ticketmaster.com/morrison-center-for-the-performing-arts-tickets-boise/venue/246822", 
      "time": "18:30:00", 
      "venue": "Morrison Center for the Performing Arts"
    }, 
    {
      "city": "Boise", 
      "date":"2018-04-05", 
      "image": "https://s1.ticketm.net/dam/c/bea/03d47f66-d37b-4aca-aa17-0135be64dbea_105801_TABLET_LANDSCAPE_16_9.jpg", 
      "name": "Gene Harris Jazz Festival(GHJF) - Club Night (Downtown Boise Venues)", 
      "state": "Idaho", 
      "ticketUrl": "http://www.ticketmaster.com/gene-harris-jazz-festival-tickets-boise/venue/246865", 
      "time": "17:00:00", 
      "venue": "Gene Harris Jazz Festival"
    }, 
    {
      "city": "Boise", 
      "date":"2018-02-28", 
      "image": "https://s1.ticketm.net/dam/c/fbc/b293c0ad-c904-4215-bc59-8d7f2414dfbc_106141_ARTIST_PAGE_3_2.jpg", 
      "name": "Palm, Spirit of the Beehive, Tag Along Friend", 
      "state": "Idaho", 
      "ticketUrl": "http://www.ticketmaster.com/neurolux-lounge-tickets-boise/venue/337568", 
      "time": "20:00:00", 
      "venue": "Neurolux Lounge"
    }, 
    {
      "city": "Boise", 
      "date": "2018-03-01", 
      "image": "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_TABLET_LANDSCAPE_3_2.jpg", 
      "name": "Keys N Krates", 
      "state": "Idaho", 
      "ticketUrl": undefined, 
      "time": "20:00:00", 
      "venue": "Knitting Factory Concert House - Boise"
    }, 
    {
      "city": "Boise", 
      "date": "2018-03-01",
      "image": "https://s1.ticketm.net/dam/c/4f2/0109888a-61b5-4525-8432-b026ef04f4f2_105631_RECOMENDATION_16_9.jpg", 
      "name": "Porches.", 
      "state": "Idaho", 
      "ticketUrl": undefined, 
      "time": "20:00:00", 
      "venue": "Neurolux Lounge"
    }, 
    {
      "city": "Boise", 
      "date": "2018-03-01", 
      "image": "https://s1.ticketm.net/dam/a/70b/4bc86dce-e81a-49fe-ac05-bd3b5643270b_565511_TABLET_LANDSCAPE_16_9.jpg", 
      "name": "Porches, Girl Ray, Up Is the Down Is the", 
      "state": "Idaho", 
      "ticketUrl": "http://www.ticketmaster.com/neurolux-lounge-tickets-boise/venue/337568", 
      "time": "20:00:00", 
      "venue": "Neurolux Lounge"
    }, 
    {
      "city": "Boise", 
      "date": "2018-03-02", 
      "image": "https://s1.ticketm.net/dam/c/060/c5c08e7a-9912-456c-a060-2758be94e060_105881_TABLET_LANDSCAPE_3_2.jpg", 
      "name": "Infamous Stringdusters", 
      "state": "Idaho", 
      "ticketUrl": undefined, 
      "time": "20:00:00", 
      "venue": "Knitting Factory Concert House - Boise"
    }]