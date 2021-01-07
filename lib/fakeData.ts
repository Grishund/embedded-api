/* eslint-disable max-len */
import {
  CalendarItem,
  Child,
  Classmate,
  MenuItem,
  NewsItem,
  Notification,
  ScheduleItem,
  User,
} from './types'

const data: any = {
  '39b59e-bf4b9f-f68ac25321-977218-bf0': {
    classmates: [
      {
        sisId: 'd004a-98d965a-45174-d2894ca2-f74ebcb',
        firstname: 'Darion',
        lastname: 'Gustafsson',
        guardians: [
          {
            email: 'Mike_Svensson@example.net',
            firstname: 'Tad',
            lastname: 'Eriksson',
            mobile: '07074791613',
            address: 'Martinvägen 50',
          },
        ],
        className: '2B',
      },
      {
        sisId: '54075-284de06-5664c-750b7b13-520fb61',
        firstname: 'Brock',
        lastname: 'Andersson',
        guardians: [
          {
            email: 'Brad56@example.org',
            firstname: 'Camren',
            lastname: 'Eriksson',
            mobile: '07075129297',
            address: null,
          },
        ],
        className: '2B',
      },
      {
        sisId: 'c1fc7-285f95d-c0f37-ea48a297-281e985',
        firstname: 'Eloy',
        lastname: 'Karlsson',
        guardians: [
          {
            email: 'Samara.Larsson@example.net',
            firstname: 'Ike',
            lastname: 'Gustafsson',
            mobile: '07077667407',
            address: null,
          },
        ],
        className: '2B',
      },
      {
        sisId: '212e9-8a2609c-b29c1-97a32bd8-5f84645',
        firstname: 'Kristina',
        lastname: 'Eriksson',
        guardians: [
          {
            email: 'Doug57@example.com',
            firstname: 'Rollin',
            lastname: 'Olsson',
            mobile: '07071720107',
            address: 'Höckertsvägen 2',
          },
        ],
        className: '2B',
      },
      {
        sisId: '01d21-ebc6f8b-526f8-7cfba0ab-26b9956',
        firstname: 'Cydney',
        lastname: 'Larsson',
        guardians: [
          {
            email: 'Davon6@example.org',
            firstname: 'Oleta',
            lastname: 'Svensson',
            mobile: '07079762186',
            address: null,
          },
        ],
        className: '2B',
      },
      {
        sisId: 'a45bb-8a481af-0ad12-7bd1fa4c-1eed4b1',
        firstname: 'Berneice',
        lastname: 'Persson',
        guardians: [
          {
            email: 'Milford_Johansson72@example.com',
            firstname: 'Arely',
            lastname: 'Johansson',
            mobile: '07071926019',
            address: 'Roslinvägen 36',
          },
        ],
        className: '2B',
      },
      {
        sisId: '32f31-039fbed-9060b-2d857c46-e47177d',
        firstname: 'Emory',
        lastname: 'Svensson',
        guardians: [
          {
            email: 'Alfredo_Nilsson96@example.org',
            firstname: 'Dolores',
            lastname: 'Andersson',
            mobile: '070752561937',
            address: 'Börjesonsvägen 6',
          },
        ],
        className: '2B',
      },
      {
        sisId: 'c9d0a-28c371d-e7be2-9781386b-6841eb0',
        firstname: 'Maryjane',
        lastname: 'Eriksson',
        guardians: [
          {
            email: 'Eula_Olsson@example.net',
            firstname: 'Wendy',
            lastname: 'Andersson',
            mobile: '07078513037',
            address: null,
          },
          {
            email: 'Lesley_Persson45@example.org',
            firstname: 'Erich',
            lastname: 'Persson',
            mobile: '070788191316',
            address: null,
          },
        ],
        className: '2B',
      },
      {
        sisId: 'e0f51-3fbd0be-5a8c3-ded7bbed-1d655d5',
        firstname: 'Rosendo',
        lastname: 'Eriksson',
        guardians: [
          {
            email: 'Mitchell.Gustafsson84@example.org',
            firstname: 'Mariam',
            lastname: 'Johansson',
            mobile: '07074537423',
            address: 'Molinvägen 29',
          },
          {
            email: 'Rachelle_Olsson@example.net',
            firstname: 'Shaniya',
            lastname: 'Persson',
            mobile: '070765878480',
            address: 'Molinvägen 29',
          },
        ],
        className: '2B',
      },
      {
        sisId: '298c2-46a24d4-548b9-3d1f90ee-4fae0ab',
        firstname: 'Sammy',
        lastname: 'Persson',
        guardians: [
          {
            email: 'Gloria_Svensson@example.com',
            firstname: 'Simeon',
            lastname: 'Olsson',
            mobile: '070753525610',
            address: 'Börjesonsvägen 43',
          },
        ],
        className: '2B',
      },
      {
        sisId: 'e7628-09352ea-b5d19-1af845b7-63b3e08',
        firstname: 'Abraham',
        lastname: 'Svensson',
        guardians: [
          {
            email: 'Erica_Johansson40@example.net',
            firstname: 'Carlotta',
            lastname: 'Nilsson',
            mobile: '070737951712',
            address: 'Aroseniusvägen 27',
          },
          {
            email: 'Malcolm_Gustafsson55@example.org',
            firstname: 'Ramon',
            lastname: 'Persson',
            mobile: '07070395626',
            address: 'Aroseniusvägen 27',
          },
        ],
        className: '2B',
      },
      {
        sisId: 'ae315-4696438-b3db6-8f0a5b39-74e34bd',
        firstname: 'Devante',
        lastname: 'Olsson',
        guardians: [
          {
            email: 'Alf.Johansson39@example.com',
            firstname: 'Schuyler',
            lastname: 'Gustafsson',
            mobile: '07070724289',
            address: null,
          },
        ],
        className: '2B',
      },
      {
        sisId: '0d812-350f1d5-323aa-d5d93cdd-406e337',
        firstname: 'Tyrell',
        lastname: 'Eriksson',
        guardians: [
          {
            email: 'Brennon.Svensson@example.com',
            firstname: 'Belle',
            lastname: 'Nilsson',
            mobile: '07070137347',
            address: null,
          },
        ],
        className: '2B',
      },
    ],
    news: [
      {
        header: 'Minus eos eligendi eveniet.',
        intro: 'Reprehenderit delectus esse itaque minus nulla quidem ipsa. Esse deleniti maiores voluptates. Iure nemo et velit culpa sint doloribus necessitatibus. Natus debitis et aperiam ratione earum at. Provident eligendi sint repellat numquam rerum voluptatem. Atque nulla laboriosam voluptatem reprehenderit eos maiores quia dolorem.',
        body: '## Suscipit asperiores quo delectus ad \n\nAst quis. Maxime earum aspernatur nemo. Mollitia voluptatibus dolores quas voluptates deleniti quisquam quis quas. Ut id sed. Perspiciatis labore commodi ullam fugiat. Aliquid quas beatae totam assumenda nihil aut fugit et. Itaque ut nihil et. \n\n##Non perferendis impedit\n\n qui. Illo aut enim temporibus accusamus ab voluptatem dignissimos quisquam. Eum velit fugit culpa ad sit voluptatum blanditiis exercitationem atque. Asperiores provident quae aperiam eaque. Dolor ut optio.',
        imageUrl: 'https://etjanst.stockholm.se/vardnadshavare/inloggad2/NewsBanner?url=../../vardnadshavare/Content/Images/nyhet-lila.jpg',
      },
      {
        header: 'Veniam et minus.',
        intro: 'Eos facere deserunt aperiam excepturi. Autem voluptatum aperiam quod expedita tempore. Cum quaerat aut maxime. Dignissimos at explicabo voluptatem expedita hic veritatis nam optio.',
        body: '## Est maxime ipsum quasi. \n\nAuae enim ea. Perferendis necessitatibus quas labore omnis et et omnis. Veniam nobis veniam ullam possimus est. Saepe odit natus ut illo ex in repellat. Asperiores et nesciunt accusamus a voluptatem quaerat dolorem cupiditate. Porro exercitationem id amet recusandae adipisci eius. Et eum et molestiae. \n\n##Sed maiores quo\n\n ex similique ut porro ut vel. Dolore rerum dolore. Cum perspiciatis est inventore quos est fugiat nostrum nobis.',
        imageUrl: 'https://etjanst.stockholm.se/vardnadshavare/inloggad2/NewsBanner?url=../../vardnadshavare/Content/Images/nyhet-lila.jpg',
      },
      {
        header: 'Autem quibusdam maxime iure odit dolor consequatur.',
        intro: 'Nulla quae qui illum nesciunt in. Quod eius mollitia et dicta. Et possimus sed inventore sit vitae minus autem voluptates enim.',
        body: '## Nulla iste nemo nulla quia \n\nAuga ut eaque laboriosam adipisci. Rerum odit occaecati quo magni. Vero veritatis saepe sint eos mollitia eos similique quos ab. Quis natus placeat consequatur et animi praesentium. Consequuntur recusandae deleniti ea quidem nulla molestiae. \n\n##Natus soluta dolore\n\n. Ratione sunt quo laudantium enim cupiditate et. Expedita quisquam expedita. Minus molestiae possimus nihil amet error. Possimus sequi quia atque. Numquam quaerat reiciendis repudiandae saepe.',
        imageUrl: 'https://etjanst.stockholm.se/vardnadshavare/inloggad2/NewsBanner?url=../../vardnadshavare/Content/Images/nyhet-lila.jpg',
      },
    ],
    calendar: [
      {
        title: 'Terminslut',
        id: 73,
        description: null,
        location: null,
        startDate: '2020-12-18',
        endDate: '2020-12-18',
        allDay: true,
      },
      {
        title: 'Terminen börjar',
        id: 74,
        description: null,
        location: null,
        startDate: '2021-01-12',
        endDate: '2021-01-12',
        allDay: true,
      },
      {
        title: 'APT - fritids stänger 15:45',
        id: 75,
        description: null,
        location: null,
        startDate: '2021-01-21',
        endDate: '2021-01-21',
        allDay: true,
      },
      {
        title: 'Utvecklingsamtal',
        id: 76,
        description: null,
        location: null,
        startDate: '2021-02-04',
        endDate: '2021-02-04',
        allDay: true,
      },
      {
        title: 'Vänliga veckan',
        id: 77,
        description: null,
        location: null,
        startDate: '2021-02-08',
        endDate: '2021-02-12',
        allDay: true,
      },
      {
        title: 'Utvecklingsamtal',
        id: 79,
        description: null,
        location: null,
        startDate: '2021-02-09',
        endDate: '2021-02-09',
        allDay: true,
      },
      {
        title: 'Trygghetsdag',
        id: 78,
        description: null,
        location: null,
        startDate: '2021-02-12',
        endDate: '2021-02-12',
        allDay: true,
      },
      {
        title: 'APT fritids stänger 15:45',
        id: 80,
        description: null,
        location: null,
        startDate: '2021-02-25',
        endDate: '2021-02-25',
        allDay: true,
      },
      {
        title: 'Sportlov',
        id: 81,
        description: null,
        location: null,
        startDate: '2021-03-01',
        endDate: '2021-03-05',
        allDay: true,
      },
      {
        title: 'Studiedag',
        id: 82,
        description: null,
        location: null,
        startDate: '2021-03-22',
        endDate: '2021-03-22',
        allDay: true,
      },
      {
        title: 'APT - fritids stänger 15:45',
        id: 83,
        description: null,
        location: null,
        startDate: '2021-04-01',
        endDate: '2021-04-01',
        allDay: true,
      },
      {
        title: 'Långfredag',
        id: 84,
        description: null,
        location: null,
        startDate: '2021-04-02',
        endDate: '2021-04-02',
        allDay: true,
      },
      {
        title: 'Påsklov',
        id: 85,
        description: null,
        location: null,
        startDate: '2021-04-05',
        endDate: '2021-04-09',
        allDay: true,
      },
      {
        title: 'Föräldraråd',
        id: 86,
        description: null,
        location: null,
        startDate: '2021-04-20',
        endDate: '2021-04-20',
        allDay: true,
      },
      {
        title: 'Prao åk 8',
        id: 97,
        description: null,
        location: null,
        startDate: '2021-04-26',
        endDate: '2021-05-12',
        allDay: true,
      },
      {
        title: 'Kristi Himmelfärd',
        id: 87,
        description: null,
        location: null,
        startDate: '2021-05-13',
        endDate: '2021-05-13',
        allDay: true,
      },
      {
        title: 'Lov',
        id: 88,
        description: null,
        location: null,
        startDate: '2021-05-14',
        endDate: '2021-05-14',
        allDay: true,
      },
      {
        title: 'APT Fritids stänger 15:45',
        id: 90,
        description: null,
        location: null,
        startDate: '2021-05-20',
        endDate: '2021-05-20',
        allDay: true,
      },
      {
        title: 'Läsårsslut',
        id: 91,
        description: '<html><head><style>\r\np.MsoNormal, li.MsoNormal, div.MsoNormal {\nmargin:0cm;\nmargin-bottom:.0001pt;\nfont-size:11.0pt;\nfont-family:\'Calibri\',sans-serif;\n}\n\na:link, span.MsoHyperlink {\ncolor:#0563C1;\ntext-decoration:underline;\n}\n\nspan.MsoHyperlinkFollowed {\ncolor:#954F72;\ntext-decoration:underline;\n}\n\nspan.E-postmall17 {\nfont-family:\'Calibri\',sans-serif;\ncolor:windowtext;\n}\n\n.MsoChpDefault {\nfont-family:\'Calibri\',sans-serif;\n}\n\ndiv.WordSection1 {\n}\n\r\n</style></head><body lang=\'SV\' link=\'#0563C1\' vlink=\'#954F72\' style=\'\'><div class=\'WordSection1\'><p class=\'MsoNormal\'>&#160;</p></div></body></html>',
        location: null,
        startDate: '2021-06-11',
        endDate: '2021-06-11',
        allDay: true,
      },
      {
        title: 'Fritids stängt',
        id: 92,
        description: '<html><head><style>\r\np.MsoNormal, li.MsoNormal, div.MsoNormal {\nmargin:0cm;\nmargin-bottom:.0001pt;\nfont-size:11.0pt;\nfont-family:\'Calibri\',sans-serif;\n}\n\na:link, span.MsoHyperlink {\ncolor:#0563C1;\ntext-decoration:underline;\n}\n\nspan.MsoHyperlinkFollowed {\ncolor:#954F72;\ntext-decoration:underline;\n}\n\nspan.E-postmall17 {\nfont-family:\'Calibri\',sans-serif;\ncolor:windowtext;\n}\n\n.MsoChpDefault {\nfont-family:\'Calibri\',sans-serif;\n}\n\ndiv.WordSection1 {\n}\n\r\n</style></head><body lang=\'SV\' link=\'#0563C1\' vlink=\'#954F72\' style=\'\'><div class=\'WordSection1\'><p class=\'MsoNormal\'>&#160;</p></div></body></html>',
        location: null,
        startDate: '2021-06-14',
        endDate: '2021-06-14',
        allDay: true,
      },
    ],
    schedule: [],
    menu: [
      {
        title: 'Måndag - Vecka 51',
        description: 'Kebabgryta ris<br/>Ratatouille med kikärter',
      },
      {
        title: 'Tisdag - Vecka 51',
        description: 'Ost-broccolisås pasta Fusilli',
      },
      {
        title: 'Onsdag - Vecka 51',
        description: 'Köttbullar potatis gräddsås lingon<br/>Falafel',
      },
      {
        title: 'Torsdag - Vecka 51',
        description: 'Prinskorv potatis rödbetssallad +<br/>Inlagd och senapssill',
      },
      {
        title: 'Fredag - Vecka 51',
        description: 'Avslutning  Varmkorv bröd ketchup senap<br/>( F-3 i matsalen från 10:30 )',
      },
    ],
    notifications: [
      {
        id: '9025f9-a1e685-d7c4668f09-e14bc5-0ab',
        sender: {
          name: 'Elevdokumentation',
        },
        dateCreated: '2020-12-10T14:31:29.966Z',
        message: 'Nu kan du ta del av ditt barns dokumentation av utvecklingssamtal',
        url: 'http://layne.nu/a35b0b8/43ca4a16f95c3d8a0987ccef2838d95264352cdd',
        category: null,
        messageType: 'webnotify',
      },
      {
        id: 'bfe19b-766db3-b38d99d321-bbed3d-506',
        sender: {
          name: 'Planering och Bedömning',
        },
        dateCreated: '2020-11-16T13:24:00.000Z',
        message: 'Ett nytt inlägg i en lärlogg har skapats.',
        url: 'https://josue.com/659e2e7/b4604db78a448292af2d4af9028bcf67d80c7021',
        category: 'Lärlogg',
        messageType: 'avisering',
      },
      {
        id: 'a24061-1c9a4e-83dc479d7c-f44fe9-376',
        sender: {
          name: 'Planering och Bedömning',
        },
        dateCreated: '2020-06-10T12:18:00.000Z',
        message: 'Nu finns det en bedömning att titta på.',
        url: 'http://bria.nu/5bb906f/88c1dd9cbbe598ec69b5f902198efb59bd5d015d',
        category: 'Bedömning',
        messageType: 'avisering',
      },
      {
        id: '79d65c-1f8240-35c94296ec-9f4bdc-cea',
        sender: {
          name: 'Planering och Bedömning',
        },
        dateCreated: '2020-03-24T14:28:00.000Z',
        message: 'Nu finns det en bedömning att titta på.',
        url: 'http://cassandra.org/3c28231/65fa852717e4c931a3107064391190120e80cc56',
        category: 'Bedömning',
        messageType: 'avisering',
      },
      {
        id: '9c5b7b-52c16d-b9fc2e8248-e4de76-279',
        sender: {
          name: 'Planering och Bedömning',
        },
        dateCreated: '2020-03-24T13:48:00.000Z',
        message: 'Nu finns det en bedömning att titta på.',
        url: 'http://hertha.info/50fa408/351d255720333f71d0e6c683d3ff17078e489040',
        category: 'Bedömning',
        messageType: 'avisering',
      },
    ],
  },
  'eea96a-a3e045-caab589391-ed7d17-029': {
    classmates: [
      {
        sisId: '9ee9e-312233c-0df98-05fa5a65-a3787ec',
        firstname: 'Raphael',
        lastname: 'Olsson',
        guardians: [
          {
            email: 'Johan99@example.com',
            firstname: 'Alessandra',
            lastname: 'Svensson',
            mobile: '070767120463',
            address: 'Franklandsvägen 34',
          },
        ],
        className: '8C',
      },
      {
        sisId: 'd3a4b-16b53de-63c22-56d1ad24-4a64a2d',
        firstname: 'George',
        lastname: 'Karlsson',
        guardians: [
          {
            email: 'Bernadette.Eriksson@example.org',
            firstname: 'Bernadette',
            lastname: 'Karlsson',
            mobile: '070759877956',
            address: null,
          },
          {
            email: 'Candice29@example.net',
            firstname: 'Kelley',
            lastname: 'Gustafsson',
            mobile: '070748592035',
            address: null,
          },
        ],
        className: '8C',
      },
      {
        sisId: '42bde-8fabd1c-7a00e-28aea88a-8481bac',
        firstname: 'Jamie',
        lastname: 'Persson',
        guardians: [
          {
            email: 'Louisa82@example.net',
            firstname: 'Mose',
            lastname: 'Larsson',
            mobile: '07076548362',
            address: null,
          },
        ],
        className: '8C',
      },
      {
        sisId: 'dad49-74308c8-83612-5eb7f3a5-e1c4047',
        firstname: 'Brycen',
        lastname: 'Eriksson',
        guardians: [
          {
            email: 'Vaughn90@example.net',
            firstname: 'Ezra',
            lastname: 'Andersson',
            mobile: '07078700165',
            address: 'Björnsonsgatan 251 D Lgh 1503',
          },
          {
            email: 'Stephany_Svensson22@example.net',
            firstname: 'Mia',
            lastname: 'Larsson',
            mobile: '070761752378',
            address: 'Björnsonsgatan 251 D Lgh 1503',
          },
        ],
        className: '8C',
      },
      {
        sisId: 'b3425-ada6d70-d3acc-a49a12a6-8b3afdc',
        firstname: 'Evans',
        lastname: 'Nilsson',
        guardians: [
          {
            email: 'Terry_Svensson@example.com',
            firstname: 'Christop',
            lastname: 'Olsson',
            mobile: '070767660094',
            address: null,
          },
          {
            email: 'Johanna_Svensson30@example.org',
            firstname: 'Madisen',
            lastname: 'Johansson',
            mobile: '07072269029',
            address: null,
          },
        ],
        className: '8C',
      },
      {
        sisId: '67471-6c03979-9ef6e-bb2827c4-96d00d5',
        firstname: 'Dovie',
        lastname: 'Larsson',
        guardians: [
          {
            email: 'Serenity.Gustafsson@example.net',
            firstname: 'Toni',
            lastname: 'Larsson',
            mobile: '07075211567',
            address: 'Roslinvägen 48',
          },
        ],
        className: '8C',
      },
      {
        sisId: 'f4040-516c4ed-34555-fd525183-6a2f666',
        firstname: 'Maximillia',
        lastname: 'Karlsson',
        guardians: [
          {
            email: 'Faustino.Andersson@example.com',
            firstname: 'Eriberto',
            lastname: 'Nilsson',
            mobile: '07076024039',
            address: 'Beckombergavägen 213 Lgh 1304',
          },
        ],
        className: '8C',
      },
      {
        sisId: 'a9494-75d8ca7-a5fd4-977eca3c-40edbc1',
        firstname: 'Era',
        lastname: 'Karlsson',
        guardians: [
          {
            email: 'Arthur.Karlsson4@example.org',
            firstname: 'Eldred',
            lastname: 'Svensson',
            mobile: '07077609534',
            address: 'Börjesonsvägen 6',
          },
        ],
        className: '8C',
      },
      {
        sisId: '42a6d-3eaf407-fed01-4a9538de-b822503',
        firstname: 'Logan',
        lastname: 'Larsson',
        guardians: [
          {
            email: 'Blake4@example.org',
            firstname: 'Jan',
            lastname: 'Karlsson',
            mobile: '070728715653',
            address: 'Bällstavägen 162',
          },
        ],
        className: '8C',
      },
      {
        sisId: '9077d-c323c8d-d0d29-5690abfb-d348317',
        firstname: 'Roy',
        lastname: 'Eriksson',
        guardians: [
          {
            email: 'Blanca98@example.net',
            firstname: 'Dallin',
            lastname: 'Eriksson',
            mobile: '070766214425',
            address: 'Molinvägen 1',
          },
        ],
        className: '8C',
      },
      {
        sisId: '31c68-5b86667-0701d-6b7e2471-89e6df9',
        firstname: 'Izabella',
        lastname: 'Johansson',
        guardians: [
          {
            email: 'Elouise_Johansson25@example.org',
            firstname: 'Jerrold',
            lastname: 'Nilsson',
            mobile: '07073789274',
            address: 'Stobaeusvägen 11',
          },
        ],
        className: '8C',
      },
      {
        sisId: '1bb69-5f1c3a6-f0ea8-e1dbb608-2756a52',
        firstname: 'Ella',
        lastname: 'Persson',
        guardians: [
          {
            email: 'Shayna.Olsson54@example.net',
            firstname: 'Onie',
            lastname: 'Nilsson',
            mobile: '07076957797',
            address: null,
          },
        ],
        className: '8C',
      },
      {
        sisId: '348a7-2d0eccc-02981-a02ccb03-cb2a8f2',
        firstname: 'Jaylen',
        lastname: 'Larsson',
        guardians: [
          {
            email: 'Aileen_Andersson@example.net',
            firstname: 'Tess',
            lastname: 'Karlsson',
            mobile: '070715315590',
            address: 'Peringskiöldsvägen 64',
          },
        ],
        className: '8C',
      },
    ],
    news: [
      {
        header: 'Ad quisquam quaerat ipsa consequatur qui repellat ipsum a.',
        intro: 'Rerum expedita ab dicta. Omnis nobis maiores eveniet quia ad. Voluptatibus eos nostrum nam natus rerum. Temporibus debitis consequuntur omnis fugiat cumque. Nemo molestias voluptatibus earum.',
        body: '## Sunt quia omnis ex et \n\nAolorum. Illum magni reiciendis et est libero. Culpa est ipsum et. Facere tenetur dolores aut illo delectus ex vel. Qui necessitatibus sed pariatur sapiente reprehenderit distinctio. Et quam velit. Animi repellendus vel ea voluptatem qui. \n\n##Id omnis iusto\n\n et ut itaque sunt placeat nulla officia. Ducimus et dolores.',
        imageUrl: 'https://etjanst.stockholm.se/vardnadshavare/inloggad2/NewsBanner?url=../../vardnadshavare/Content/Images/nyhet-lila.jpg',
      },
      {
        header: 'A ex voluptates nulla non dolore aut atque ad earum.',
        intro: 'Ullam veniam nobis commodi autem earum pariatur. Ipsa minima laborum non repellat laboriosam delectus itaque nihil. Exercitationem corrupti qui atque quam animi eligendi quas fugiat hic. Voluptatum quae quasi.',
        body: '## Quam amet est deserunt quis \n\nAeatae et ut quasi vero. Sed non quas et rerum est est nihil sit ducimus. Voluptatem amet sed perspiciatis. Hic quas id quidem quaerat debitis suscipit quo asperiores consequuntur. Hic dignissimos voluptatibus et possimus veniam libero. Non ad qui sit. Nisi impedit quasi officiis sint et. \n\n##Fugiat et\n\n in eum vel ratione vel voluptatem doloribus maxime. Dolore ut quia consequatur. Voluptates est qui ut inventore inventore ipsa. Et officiis et. Quisquam quia molestiae aliquam.',
        imageUrl: 'https://etjanst.stockholm.se/vardnadshavare/inloggad2/NewsBanner?url=../../vardnadshavare/Content/Images/nyhet-lila.jpg',
      },
      {
        header: 'Ratione veniam corporis.',
        intro: 'Eligendi qui rerum aut dolor qui ratione quo voluptatibus. Laudantium ipsum qui rerum. Velit consectetur iure repudiandae soluta dolores ipsa quos sunt beatae. Vel assumenda sunt dolores consequuntur sunt.',
        body: '## Quasi est fuga doloremque vel \n\nAoluptate. Ex mollitia dolores molestias qui ratione qui deserunt. Nulla vel et ea atque perspiciatis quis doloribus. Aut qui veritatis et a sint dolor aut quo et. Sed sit libero voluptatum et ipsum similique quia necessitatibus quae. Sapiente aut eum quo ut excepturi. \n\n##Excepturi eos\n\n est beatae assumenda nostrum veritatis ullam omnis. Velit sed possimus velit laborum et qui rem vel. Dolores deserunt error sequi modi laborum inventore officia fugit quisquam. Ut sequi ipsum perferendis accusamus a quia aliquam. Fuga totam architecto officia et possimus doloremque est sapiente.',
        imageUrl: 'https://etjanst.stockholm.se/vardnadshavare/inloggad2/NewsBanner?url=../../vardnadshavare/Content/Images/nyhet-lila.jpg',
      },
    ],
    calendar: [
      {
        title: 'Terminslut',
        id: 73,
        description: null,
        location: null,
        startDate: '2020-12-18',
        endDate: '2020-12-18',
        allDay: true,
      },
      {
        title: 'Terminen börjar',
        id: 74,
        description: null,
        location: null,
        startDate: '2021-01-12',
        endDate: '2021-01-12',
        allDay: true,
      },
      {
        title: 'APT - fritids stänger 15:45',
        id: 75,
        description: null,
        location: null,
        startDate: '2021-01-21',
        endDate: '2021-01-21',
        allDay: true,
      },
      {
        title: 'Utvecklingsamtal',
        id: 76,
        description: null,
        location: null,
        startDate: '2021-02-04',
        endDate: '2021-02-04',
        allDay: true,
      },
      {
        title: 'Vänliga veckan',
        id: 77,
        description: null,
        location: null,
        startDate: '2021-02-08',
        endDate: '2021-02-12',
        allDay: true,
      },
      {
        title: 'Utvecklingsamtal',
        id: 79,
        description: null,
        location: null,
        startDate: '2021-02-09',
        endDate: '2021-02-09',
        allDay: true,
      },
      {
        title: 'Trygghetsdag',
        id: 78,
        description: null,
        location: null,
        startDate: '2021-02-12',
        endDate: '2021-02-12',
        allDay: true,
      },
      {
        title: 'APT fritids stänger 15:45',
        id: 80,
        description: null,
        location: null,
        startDate: '2021-02-25',
        endDate: '2021-02-25',
        allDay: true,
      },
      {
        title: 'Sportlov',
        id: 81,
        description: null,
        location: null,
        startDate: '2021-03-01',
        endDate: '2021-03-05',
        allDay: true,
      },
      {
        title: 'Studiedag',
        id: 82,
        description: null,
        location: null,
        startDate: '2021-03-22',
        endDate: '2021-03-22',
        allDay: true,
      },
      {
        title: 'APT - fritids stänger 15:45',
        id: 83,
        description: null,
        location: null,
        startDate: '2021-04-01',
        endDate: '2021-04-01',
        allDay: true,
      },
      {
        title: 'Långfredag',
        id: 84,
        description: null,
        location: null,
        startDate: '2021-04-02',
        endDate: '2021-04-02',
        allDay: true,
      },
      {
        title: 'Påsklov',
        id: 85,
        description: null,
        location: null,
        startDate: '2021-04-05',
        endDate: '2021-04-09',
        allDay: true,
      },
      {
        title: 'Föräldraråd',
        id: 86,
        description: null,
        location: null,
        startDate: '2021-04-20',
        endDate: '2021-04-20',
        allDay: true,
      },
      {
        title: 'Prao åk 8',
        id: 97,
        description: null,
        location: null,
        startDate: '2021-04-26',
        endDate: '2021-05-12',
        allDay: true,
      },
      {
        title: 'Kristi Himmelfärd',
        id: 87,
        description: null,
        location: null,
        startDate: '2021-05-13',
        endDate: '2021-05-13',
        allDay: true,
      },
      {
        title: 'Lov',
        id: 88,
        description: null,
        location: null,
        startDate: '2021-05-14',
        endDate: '2021-05-14',
        allDay: true,
      },
      {
        title: 'APT Fritids stänger 15:45',
        id: 90,
        description: null,
        location: null,
        startDate: '2021-05-20',
        endDate: '2021-05-20',
        allDay: true,
      },
    ],
    schedule: [],
    menu: [
      {
        title: 'Måndag - Vecka 51',
        description: 'Kebabgryta ris<br/>Ratatouille med kikärter',
      },
      {
        title: 'Tisdag - Vecka 51',
        description: 'Ost-broccolisås pasta Fusilli',
      },
      {
        title: 'Onsdag - Vecka 51',
        description: 'Köttbullar potatis gräddsås lingon<br/>Falafel',
      },
      {
        title: 'Torsdag - Vecka 51',
        description: 'Prinskorv potatis rödbetssallad +<br/>Inlagd och senapssill',
      },
      {
        title: 'Fredag - Vecka 51',
        description: 'Avslutning  Varmkorv bröd ketchup senap<br/>( F-3 i matsalen från 10:30 )',
      },
    ],
    notifications: [
      {
        id: 'e1b5bc-597fa8-5511794939-3614e1-615',
        sender: {
          name: 'Planering och Bedömning',
        },
        dateCreated: '2020-12-02T14:02:00.000Z',
        message: 'Ett nytt inlägg i en lärlogg har skapats.',
        url: 'http://cara.info/97c9019/67e172bb51f54b19cf0a50561a0fa91596f27f0d',
        category: 'Lärlogg',
        messageType: 'avisering',
      },
      {
        id: '7dbc20-bfa1ac-e20171b865-82c1f7-f3c',
        sender: {
          name: 'Planering och Bedömning',
        },
        dateCreated: '2020-12-01T12:43:00.000Z',
        message: 'Ett nytt inlägg i en lärlogg har skapats.',
        url: 'http://cary.org/00b8613/8d36d0d2ac0e3314610a46c759421252383b33aa',
        category: 'Lärlogg',
        messageType: 'avisering',
      },
      {
        id: 'a6829b-ecf912-b71582e8fb-b6dc14-f60',
        sender: {
          name: 'Planering och Bedömning',
        },
        dateCreated: '2020-11-24T13:34:00.000Z',
        message: 'Ett nytt inlägg i en lärlogg har skapats.',
        url: 'https://nikko.org/10b0505/21aac7b3c8362f602b47c796f2398b029eb41909',
        category: 'Lärlogg',
        messageType: 'avisering',
      },
      {
        id: '3cedb4-767d24-8ccd6ac3ac-c05cb7-a3a',
        sender: {
          name: 'Planering och Bedömning',
        },
        dateCreated: '2020-11-16T13:24:00.000Z',
        message: 'Ett nytt inlägg i en lärlogg har skapats.',
        url: 'http://abdiel.info/4352db7/708f3c9470208db9da2066548626a0f6288bb0f6',
        category: 'Lärlogg',
        messageType: 'avisering',
      },
      {
        id: '6ace13-5f99da-d1d50ac7a6-4a6108-d8e',
        sender: {
          name: 'Planering och Bedömning',
        },
        dateCreated: '2020-11-12T13:27:00.000Z',
        message: 'Ett nytt inlägg i en lärlogg har skapats.',
        url: 'http://osborne.org/165fae9/cbc54659b103fe071a3b9ae4bd91fe4247fa0b9b',
        category: 'Lärlogg',
        messageType: 'avisering',
      },
    ],
  },
}

export const user = (): User => (
  {
    firstName: 'Namn',
    lastName: 'Namnsson',
  }
)

export const children = (): Child[] => ([
  {
    name: 'Shanel Nilsson (elev)',
    id: '39b59e-bf4b9f-f68ac25321-977218-bf0',
    sdsId: '8e81a06-53f55fb-d1b93-f0e5b357ad0b7caaf1d36',
    status: 'F;GR',
    schoolId: '9e58434-8800-da59547-614bf0e-e09c015',
  },
  {
    name: 'Alan Nilsson (elev)',
    id: 'eea96a-a3e045-caab589391-ed7d17-029',
    sdsId: 'bc2d341-8d970cc-69526-43501c082aaa870d9fe99',
    status: 'GR',
    schoolId: '8e6b13b-3116-e66c39b-a4c3fa5-a1d72d9',
  },
])

export const classmates = (child: Child): Classmate[] => (
  data[child.id].classmates
)

export const news = (child: Child): NewsItem[] => (
  data[child.id].news
)

export const calendar = (child: Child): CalendarItem[] => (
  data[child.id].calendar
)

export const schedule = (child: Child): ScheduleItem[] => (
  data[child.id].schedule
)

export const menu = (child: Child): MenuItem[] => (
  data[child.id].menu
)

export const notifications = (child: Child): Notification[] => (
  data[child.id].notifications
)
