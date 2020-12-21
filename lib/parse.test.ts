import * as moment from 'moment'
import {
  etjanst, newsItem, EtjanstResponse, child, calendarItem, classmate, scheduleItem,
} from "./parse"
import { NewsItem } from "./types"

describe('parse', () => {
  let response: EtjanstResponse
  describe('etjanst', () => {
    beforeEach(() => {
      response = {
        Success: true,
        Error: null,
        Data: [
          {
            Name: 'Some name',
          }
        ]
      }
    })
    it('returns data on success', () => {
      expect(etjanst(response)).toBeInstanceOf(Array)
    })
    it('throws error on Error', () => {
      response.Success = false
      response.Error = 'b0rk'
      expect(() => etjanst(response)).toThrowError('b0rk')
    })
    it('camelCases data keys', () => {
      const parsed = etjanst(response)
      expect(parsed[0].name).toEqual(response.Data[0].Name)
    })
    describe('children', () => {
      beforeEach(() => {
        response = {
          Success: true,
          Error: null,
          Data: [
            {
              Name: 'Some name',
              Id: '42C3997E-D772-423F-9290-6FEEB3CB2DA7',
              SDSId: '786E3393-F044-4660-9105-B444DEB289AA',
              Status: 'GR',
              UserType: 'Student',
              SchoolId: 'DE2E1293-0F40-4B91-9D91-1E99355DC257',
              SchoolName: null,
              GroupId: null,
              GroupName: null,
              Classes: 'VHsidan_0495CABC-77DB-41D7-824B-8B4D63E50D15;Section_AD1BB3B2-C1EE-4DFE-8209-CB6D42CE23D7;Section_0E67D0BF-594C-4C1B-9291-E753926DCD40;VHsidan_1C94EC54-9798-401C-B973-2454246D95DA',
              isSameSDSId: false,
              ResultUnitId: null,
              ResultUnitName: null,
              UnitId: null,
              UnitName: null
            }
          ]
        }
      })
      it('parses children correctly', () => {
        expect(etjanst(response).map(child)).toEqual([{
          name: 'Some name',
          id: '42C3997E-D772-423F-9290-6FEEB3CB2DA7',
          sdsId: '786E3393-F044-4660-9105-B444DEB289AA',
          schoolId: 'DE2E1293-0F40-4B91-9D91-1E99355DC257',
          status: 'GR',
        }])
      })
    })
    describe('calendar', () => {
      beforeEach(() => {
        response = {
          Success: true,
          Error: null,
          Data: [
            {
              Title: 'Jullov',
              Id: 29,
              Description: 'hello',
              Location: null,
              EventDate: '2020-12-21',
              EventDateTime: '09:00',
              LongEventDateTime: '2020-12-21 09:00',
              EndDate: '2021-01-08',
              EndDateTime: '10:00',
              LongEndDateTime: '2021-01-08 10:00',
              EventDateDayNumber: '21',
              EventDateMonthName: 'dec',
              EventDateMonthFullName: 'december',
              FullDateDescription: '2020-12-21 09:00 - 2021-01-08 10:00',
              IsSameDay: false,
              AllDayEvent: false,
              ListId: null,
              Mentor: null,
            },
          ]
        }
      })
      it('parses calendar correctly', () => {
        expect(etjanst(response).map(calendarItem)).toEqual([{
          id: 29,
          location: null,
          title: 'Jullov',
          description: 'hello',
          startDate: moment(new Date('2020-12-21 09:00')),
          endDate: moment(new Date('2021-01-08 10:00')),
          allDay: false,
        }])
      })
    })
    describe('classmates', () => {
      beforeEach(() => {
        response = {
          Success: true,
          Error: null,
          Data: [
            {
              ID: 0,
              BATCH: null,
              SIS_ID: '22F0CFC7-09C7-45DC-9388-AE9A9EA1356B',
              USERNAME: null,
              SCHOOL_SIS_ID: null,
              EMAILADDRESS: null,
              STATUS: null,
              ERRORCODE: 0,
              PRIMARY_SCHOOL_SIS_ID: null,
              MENTOR_SIS_ID: null,
              FIRSTNAME: 'Bo',
              LASTNAME: 'Burström',
              ACTIVE: false,
              Guardians: [
                {
                  SOCIALNUMBER: null,
                  DISPLAYNAME: null,
                  FIRSTNAME: 'Allan',
                  LASTNAME: 'Fridell',
                  ADDRESS: 'Hult södregård',
                  CITY: null,
                  POCODE: null,
                  TELHOME: null,
                  TELMOBILE: '0690-6346216',
                  EMAILHOME: 'allan.fridell@mailinater.com',
                  SECTION_NAME: null,
                  SECTION_ID: null,
                  TERM_STARTDATE: null,
                  TERM_ENDDATE: null,
                  GROUPTYPE: null,
                  STUDENT_FIRSTNAME: null,
                  STUDENT_LASTNAME: null,
                  STUDENT_ID: null
                }
              ],
              ClassName: '7C',
              ClassId: 'B2BF465B-581B-43AC-9CA7-F11BB0ED4646'
            },
          ]
        }
      })
      it('parses class mates correctly', () => {
        expect(etjanst(response).map(classmate)).toEqual([{
          sisId: '22F0CFC7-09C7-45DC-9388-AE9A9EA1356B',
          firstname: 'Bo',
          lastname: 'Burström',
          className: '7C',
          guardians: [
            {
              firstname: 'Allan',
              lastname: 'Fridell',
              address: 'Hult södregård',
              mobile: '0690-6346216',
              email: 'allan.fridell@mailinater.com',
            }
          ]
        }])
      })
    })
    describe('schedule', () => {
      beforeEach(() => {
        response = {
          "Success": true,
          "Error": null,
          "Data": [
            {
              "Title": "Canceled: Julavslutning 8C",
              "Id": 0,
              "Description": "Nåt kul",
              "Location": "Lakritskolan",
              "EventDate": "2020-12-14",
              "EventDateTime": "14:10",
              "LongEventDateTime": "2020-12-14 14:10",
              "EndDate": "2020-12-14",
              "EndDateTime": "14:40",
              "LongEndDateTime": "2020-12-14 14:40",
              "EventDateDayNumber": "14",
              "EventDateMonthName": "dec",
              "EventDateMonthFullName": "december",
              "FullDateDescription": "2020-12-14 14:10 - 2020-12-14 14:40",
              "IsSameDay": true,
              "AllDayEvent": false,
              "ListId": null,
              "Mentor": null
            }
          ]
        }
      })
      it('parses schedule correctly', () => {
        expect(etjanst(response).map(scheduleItem)).toEqual([{
          title: 'Canceled: Julavslutning 8C',
          description: 'Nåt kul',
          location: 'Lakritskolan',
          startDate: moment(new Date('2020-12-14 14:10')),
          endDate: moment(new Date('2020-12-14 14:40')),
          oneDayEvent: true,
          allDayEvent: false,
        }])
      })
    })
    describe('news', () => {
      beforeEach(() => {
        response = {
          Success: true,
          Error: null,
          Data: {
            CurrentChild: null,
            NewsItems: [
              {
                NewsId: 'news id',
                SiteId: 'elevstockholm.sharepoint.com,27892ACC-BA2E-4DEC-97B8-25F7098C3BF6,A239466A-9A52-42FF-8A3F-D94C342F2700',
                NewsListId: '3EC323A1-EA16-4D24-84C8-DAA49E76F9F4',
                NewsItemId: 'elevstockholm.sharepoint.com,27892ACC-BA2E-4DEC-97B8-25F7098C3BF6,A239466A-9A52-42FF-8A3F-D94C342F2700_99',
                Header: 'Problemet med att se betyg i bild, slöjd och teknik löst!',
                PublicationDate: '/Date(1608304542000)/',
                PubDateSE: '18 december 2020 16:15',
                ModifiedDate: '/Date(1608304680000)/',
                ModDateSE: '18 december 2020 16:18',
                Source: 'Livets hårda skolklasser',
                Preamble: 'Hej,Nu är problemet löst! Alla betyg syns som de ska.God jul!...',
                BannerImageUrl: 'A703552D-DBF3-45B0-8E67-6E062105A0C5.jpeg',
                BannerImageGuid: 'A703552D-DBF3-45B0-8E67-6E062105A0C5',
                BannerImageListId: 'FFBE49E9-BDE1-4C75-BA0E-D98D4E2FCF21',
                Body: '<div><div data-sp-canvascontrol="" data-sp-canvasdataversion="1.0" data-sp-controldata="&#123;&quot;controlType&quot;&#58;4,&quot;id&quot;&#58;&quot;1212fc8d-dd6b-408a-8d5d-9f1cc787efbb&quot;,&quot;position&quot;&#58;&#123;&quot;controlIndex&quot;&#58;2,&quot;sectionIndex&quot;&#58;1,&quot;sectionFactor&quot;&#58;12,&quot;zoneIndex&quot;&#58;1,&quot;layoutIndex&quot;&#58;1&#125;,&quot;addedFromPersistedData&quot;&#58;true,&quot;emphasis&quot;&#58;&#123;&#125;&#125;"><div data-sp-rte=""><p>Hej,</p><p>Nu är problemet löst! Alla betyg syns som de ska.&#160;</p><p>God jul!</p></div></div><div data-sp-canvascontrol="" data-sp-canvasdataversion="1.0" data-sp-controldata="&#123;&quot;controlType&quot;&#58;0,&quot;pageSettingsSlice&quot;&#58;&#123;&quot;isDefaultDescription&quot;&#58;true,&quot;isDefaultThumbnail&quot;&#58;true&#125;&#125;"></div></div>',
                BodyNoHtml: null,
                AuthorDisplayName: 'Eva-Lotta Rönnberg',
                altText: 'Nyhetsbild. Bildtext ej tillgänglig.'
              },
            ],
            ViewGlobalTranslations: {},
            ViewLocalTranslations: {},
            Children: null,
            Status: null,
            GlobalTranslationIds: [
              'InformationalHeader',
              'ContactUsMessageLabel',
              'Send',
              'RequiredFieldMessageInfo',
              'Sex',
              'Male',
              'Female',
              'SSN',
              'FirstName',
              'LastName',
              'Email',
              'Zip',
              'Address',
              'ValidationRequiredFieldMessage',
              'ValidationErrorMessage'
            ],
            LocalTranslationIds: ['IndexPageHeading1']
          }
        }
      })
      it('parses news items (except body) correctly', () => {
        const [item]: [NewsItem] = etjanst(response).newsItems.map(newsItem)

        expect(item.id).toEqual('news id')
        expect(item.header).toEqual('Problemet med att se betyg i bild, slöjd och teknik löst!')
        expect(item.imageUrl).toEqual('A703552D-DBF3-45B0-8E67-6E062105A0C5.jpeg')
        expect(item.intro).toEqual('Hej,Nu är problemet löst! Alla betyg syns som de ska.God jul!...')
        expect(item.modified).toEqual(moment(new Date('18 december 2020 16:18')))
        expect(item.published).toEqual(moment(new Date('18 december 2020 16:15')))
      })
      it('parses body correctly', () => {
        const [item]: [NewsItem] = etjanst(response).newsItems.map(newsItem)

        const expected = 'Hej,  Nu är problemet löst! Alla betyg syns som de ska.  God jul!'
        const trimmed = (item.body || '').split('\n').map(t => t.trim()).join(' ')
        expect(trimmed).toEqual(expected)
      })
    })
  })
})