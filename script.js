let number = 15
let guess = 0

while (guess != number) {
  guess = prompt('Whats my age between 10 to 20?')
  if (guess == number) {
   console.log('Thats correct!')
  } else if (guess < number) {
   console.log('Sorry, too low!')  
  } else if (guess > number) {
   console.log('Sorry, too high!')
  }
}