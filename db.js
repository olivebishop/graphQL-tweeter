const users = [
    {id: '1', username: 'olivebishop_dev', bio: 'frontend engineer from Mombasa-Kenya', verified: false},
    {id: '2', username: 'codingmontana', bio: 'Vue engineer from Nairobi', verified: false},
    {id: '3', username: 'blackie', bio: 'Devops and senior engineer in Nakuru', verified: false},
    {id: '4', username: 'eventPlour', bio: 'your event connectin 254 and africa', verified: true},
    {id: '5', username: 'mercy tarus', bio: 'Kenya ni home', verified: true},
    {id: '6', username: 'citizen_tv', bio: 'Kenyan broadcasting Media', verified: true},
    {id: '7', username: 'gabby_oguda', bio: 'Opposition blogger now government blogger -parody account', verified: true},
    {id: '8', username: 'kplc', bio: 'country wide blackout', verified: true},
].map(user => ({...user, verified: user.verified === 'true' || user.verified === true}))

const tweets = [
    {id: '1', tweetName: 'graphQL lesson', characters: '15', ratings: 10, timePosted: '10:40 am', user_id: '1'},
    {id: '2', tweetName: 'President Ruto in siaya county', characters: '100', ratings: 10, timePosted: '12:40 pm', user_id: '4'},
    {id: '3', tweetName: 'kenya power blackout', characters: '100', ratings: 100, timePosted: '9:40 pm', user_id: '8'},
    {id: '4', tweetName: 'they will not belive', characters: '100', ratings: 100, timePosted: '3:40 pm', user_id: '7'},
    {id: '5', tweetName: 'navigate through websockets in nuxt js', characters: '30', ratings: 10, timePosted: '3:40 pm', user_id: '2'},
    {id: '6', tweetName: 'navigate through lucia auth in nuxt js', characters: '30', ratings: 10, timePosted: '4:40 am', user_id: '2'},
    {id: '7', tweetName: 'Keynote speaker at devfest nairobi as postman ambassador', characters: '30', ratings: 10, timePosted: '4:40 am', user_id: '2'},
    {id: '8', tweetName: 'Keynote speaker at pycon kampla as github ambassador', characters: '30', ratings: 10, timePosted: '4:40 am', user_id: '2'},
    {id: '9', tweetName: 'country wide blackout resolved', characters: '30', ratings: 10, timePosted: '4:40 am', user_id: '2'},
]

export default { users, tweets }