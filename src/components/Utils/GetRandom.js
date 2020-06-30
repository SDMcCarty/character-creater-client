
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

}

function getRandomFear() {
  let fears = ['water', 'dogs', 'cats', 'plants', 'open spaces', 'crowds', 'spiders', 'somewhere in the world there is a duck looking at them', 'birds', 'being alone', 'never achieving their goal/dream', 'failure', 'flying', 'the dark', 'loud noises', 'ghosts', 'horses', 'bagpipe music', 'bald men', 'tall women', 'fear of intimacy', 'fear of commitment', 'being trapped', 'letting someone down', 'yodelling', 'the unknown', 'holy water', 'priests', 'clowns', 'dying', 'being lied to', 'betrayal', 'getting sick', 'boats', 'goats', 'not being in control', 'highways', 'heights', 'bridges', 'inclosed spaces']
  return fears[Math.floor(Math.random() * fears.length)]
}

function getRandomHistory() {

}

export default {
  getRandomInitial,
  getRandomAge,
  getRandomSex,
  getRandomMajorTrait,
  getRandomMotivation,
  getRandomFear,
  getRandomHistory,
}