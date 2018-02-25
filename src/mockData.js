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