function scuberGreetingForFeet(distance) {
  // Write your code here!
  if (distance <= 400) return 'This one is on me!'
  else if (400 < distance && distance <= 2000)
    return 'That will be twenty bucks.'
  else if (distance > 2000 && distance <= 2500)
    return 'I will gladly take your thirty bucks.'
  else if (distance > 2500) return 'No can do.'
}

function ternaryCheckCity(city) {
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(trip) {
  // Write your code here!
  switch (trip) {
    case 'generous':
      return 'Thank you so much.'
      break
    case 'not as generous':
      return 'Thank you.'
      break
    default:
      return 'Bye.'
  }
}
