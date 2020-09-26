
let sectionTimes = [{
  "section": 1,
  "startTime": "08:00",
  "endTime": "08:45"
}, {
  "section": 2,
  "startTime": "08:50",
  "endTime": "09:35"
}, {
  "section": 3,
  "startTime": "10:05",
  "endTime": "10:50"
}, {
  "section": 4,
  "startTime": "10:55",
  "endTime": "11:40"
}, {
  "section": 5,
  "startTime": "12:30",
  "endTime": "13:15"
}, {
  "section": 6,
  "startTime": "13:20",
  "endTime": "14:05"
}, {
  "section": 7,
  "startTime": "14:30",
  "endTime": "15:15"
}, {
  "section": 8,
  "startTime": "15:20",
  "endTime": "16:05"
}, {
  "section": 9,
  "startTime": "16:35",
  "endTime": "17:20"
}, {
  "section": 10,
  "startTime": "17:25",
  "endTime": "18:10"
}, {
  "section": 11,
  "startTime": "19:30",
  "endTime": "20:15"
}, {
  "section": 12,
  "startTime": "20:20",
  "endTime": "21:05"
}, {
  "section": 13,
  "startTime": "21:10",
  "endTime": "21:55"
}]

function scheduleHtmlParser(html) {
  let count = 0
  // console.log(html)
  const $ = cheerio.load(html, { decodeEntities: false })
  let text = $('div').text()
  let result = JSON.parse(text)
  return result
}