
function getRandomInitial() {
  //toDo make it actually return a random
  let initials = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return initials[Math.floor(Math.random() * initials.length)]
}

function getRandomAge() {
  return Math.floor(Math.random() * 123)
}

function getRandomSex() {
  let sex = ['male', 'female', 'trans-man', 'trans-woman', 'intersex']
  return sex[Math.floor(Math.random() * sex.length)]
}

function getRandomMajorTrait() {
  let majorTraits = ['brave', 'smart', 'cowardly', 'dumb', 'funny', 'adventerous', 'shy', 'adept', 'inept', 'clumsy', 'sly', 'boisterous', 'lucky', 'dexterous', 'agile', 'quick-witted', 'verbose', 'reticent', 'indecisive', 'forgetful', 'serious', 'childish', 'innocent', 'kind', 'happy', 'critical', 'artistic', 'conflicted', 'mature', 'strong-willed', 'short-tempered', 'rebellious', 'nerdy', 'straight-laced', 'nervous', 'cruel', 'selfish', 'malicious', 'sadistic', 'tortured', 'weak', 'haunted', 'drunkard', 'loud', 'heartless', 'artless', 'calious', 'quiet', 'bigoted']
  return majorTraits[Math.floor(Math.random() * majorTraits.length)]
}

function getRandomMotivation() {
  let motivations = ['power', 'money', 'fear', 'love', 'hate' ,'self-gain', 'greed', 'lust', 'ambition', 'dreams', 'legacy', 'family honor', 'pride', 'image', 'affection', 'delusions', 'duty', 'friends', 'family', 'avarice', 'desire', 'the vine', 'loot', 'swag', 'cheese', 'to be able to rest', 'to be able to relax', 'to be able to stop', 'to get out from under someone\'s thumb', 'to be independent', 'to say that they did it', 'to prove something to someone', 'to prove something to themselves', 'they are bored', 'a friend was doing it so…', 'someone told them to', 'it pays well', 'it\'s either this or prison', 'a bird told them to', 'they aren\'t sure why they are doing it, but they started so…', 'beats their old job', 'a parent/guardian told them not to', 'a parent/guardian told them to', 'no one has stopped them yet so…', 'they were promised a sandwich at the end', 'they sold their soul and now must follow orders', 'they just followed someone and now can\'t get out', 'they were dared to', 'it all started as a joke and now they have to see it through until the end', 'a book made it seem cool', 'a movie made it seem cool', 'to be idolized', 'to be envied', 'to be loved', 'to show that one person what they can do', 'spite', 'envy', 'boredom', 'doing this is better than nothing', 'what else were they supposed to do with their life?', 'continuing on is easier than changing', 'trauma', 'survival', 'to feel good', 'to feel something', 'it\'s expected of them', 'self expectations', 'expectations of others', 'it makes them finally feel something', 'there\'s no way they can stop now', 'their loved ones', 'the next “high”', 'if they stop now, they might die', 'not wanting to die', 'wanting to die', 'completing the task', 'revenge', 'avenging someone/something', 'their beliefs', 'security', 'to be the best', 'to be the only one', 'because they can', 'conformity', 'comfort', 'to seem cool', 'to better themselves', 'to better things around them', 'to make others see']
  return motivations[Math.floor(Math.random() * motivations.length)]
}

function getRandomFear() {
  let fears = ['water', 'dogs', 'cats', 'plants', 'open spaces', 'crowds', 'spiders', 'somewhere in the world there is a duck looking at them', 'birds', 'being alone', 'never achieving their goal/dream', 'failure', 'flying', 'the dark', 'loud noises', 'ghosts', 'horses', 'bagpipe music', 'bald men', 'tall women', 'fear of intimacy', 'fear of commitment', 'being trapped', 'letting someone down', 'yodelling', 'the unknown', 'holy water', 'priests', 'clowns', 'dying', 'being lied to', 'betrayal', 'getting sick', 'boats', 'goats', 'not being in control', 'highways', 'heights', 'bridges', 'inclosed spaces']
  return fears[Math.floor(Math.random() * fears.length)]
}

function getRandomHistory() {
  let histories = ['grew up poor and is now trying to make a name for themselves', 'raised with a “perfect” childhood, until…', 'someone tried to kill them', 'watched their best friend die', 'everything was good until the accident', 'their parents divorced and they were stuck in the middle', 'was the unfavored child and now must prove themselves', 'an academic who lost their position/tenure due to a scandal', 'they were born, and things went downhill from there',  'fleeing from a bad relationship', 'there was a fire, which they may or may not have set', 'young professional vying for success', 'parent(s)/guardian(s) were abusive and now they must cope', 'a woman/minority fighting for respect in their chosen field', 'was the favored child and now must prove they were worth it', 'orphan who treasures found family as an adult', 'they\'ve had a perfectly normal life...or so it seemed', 'they are fighting to get over substance abuse while keeping their life afloat', 'the popular kid who must now face that it is no longer high school, and they are no longer cherished for merely existing', 'they used to have “so much potential,” and now must deal with all that entails', 'they went to Vegas, and that was not a great idea…', 'they\'ve always been looked down on because of gender/race, and now has to fight for everything they have', 'got lost in the woods one summer, and they haven\'t been the same since', 'a dog attacked them when younger, and now puppies are becoming a problem', 'their parents/guardians never paid them much mind, but now people are', 'almost had their “dream life,” but it crumbled all around them', 'everything just started to go to wrong after finding that thing at the thrift store', 'their beloved family member died, and now they have deal with their feelings and all that stuff', 'they\'d always been “perfect” and now they just want that charade to be over', 'as a child, they ran away and suddenly, their family has found them again', 'as a child, they were always sick, then suddenly they got better for a long time, but recently they\'ve begun to cough…', 'they\'ve always had a dream, but achieving it is harder than they thought it would be', 'who knew their long-standing fear of needles would impact their life this much', 'they had the perfect life - went to the perfect school, knew the perfect people, and got the perfect job...how did it end up like this', 'their parents died when young, and they grew up with aunts/uncles/guardians but never knew how much they meant until…', 'their allergies were always a bit hasslesome, but this is absurd', 'and they thought puberty was bad', 'apparently fencing lessons are practical']
  return histories[Math.floor(Math.random() * histories.length)]

}
function randomizeAll() {
  let character = {
    first_name: this.getRandomInitial(),
    last_name: this.getRandomInitial(),
    age: this.getRandomAge(),
    sex: this.getRandomSex(),
    major_trait: this.getRandomMajorTrait(),
    motivation: this.getRandomMotivation(),
    fear: this.getRandomFear(),
    history: this.getRandomHistory(),
  }
  console.log(character)
  return character
}

export default {
  getRandomInitial,
  getRandomAge,
  getRandomSex,
  getRandomMajorTrait,
  getRandomMotivation,
  getRandomFear,
  getRandomHistory,
  randomizeAll,
}