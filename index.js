// Fortune cookie messages
const fortuneMessages = [
  "Blessed are the children for they shall inherit the national debt.", 
  "If you eat something and nobody sees you eat it, it has no calories.",
  "The fortune you seek is in another cookie.",
  "It could be better, but it's good enough.", 
  "It would be best to maintain a low profile for now.",
  "You will be hungry again in one hour.",
  "I see money in your future... it is not yours though.",
  "If you think nobody cares if you are alive, try missing a couple bill payments.",
  "Don't be ashamed of yourself. That's your parents' job.",
  "If someone hates your for no reason, give them a reason.",
  "If you're losing an argument, just start correcting their grammar.",
  "When life shuts a door, open it. It's a door. That's how they work.",
  "If you want longer battery life, put the damn phone down.",
  "The best way to remember your wife's birthday is to forget it once",
  "You think it's a secret, but they know.",
  "Enjoy yourself while you can.",
  "Your reality check is about to bounce.",
  "Two days from now, tomorrow will be yesterday.",
  "You are cleverly disguised as responsible adult.",
  "Drive like hell, you will get there.",
  "You will soon have an out of money experience.",
  "Hard work will pay off in future. Laziness will pay off now.",
  "The end is near, might as well have dessert.",
  "Wise husband is one who thinks twice before saying nothing.",
  "You are going nowhere, but at least the path is interesting.",
  "Indecision is key to flexibility.",
  "A day without sunshine is like night.",
  "Be nice to friends. You might need them to empty your bedpan.",
  "You are only young once, but can be immature forever.",
  "If you do something bad, make sure there’s someone else around to blame.",
  "Only boring people say they're bored.",
  "Only chickens accomplish something by sitting on their asses.",
  "If it looks stupid but works, it isn’t stupid.",
  "Never do a whole job when a half job will do.",
  "If you sleep until lunchtime, you can save your breakfast money.",
  "If you're gonna break the rules, only break one rule at a time.",
  "Don't be a dumbass.",
  "Just because you're different doesn't mean you're useful."
]

const cookie = document.getElementById("cookie");
const crackedCookie = document.getElementById("cracked-cookie");
const message = document.querySelector(".message");

cookie.addEventListener("click", () => {
  cookie.classList.remove("active")
  crackedCookie.classList.add("active")
  message.innerHTML = generateMessage()
  message.classList.add("active")
  playSound()
  
  // zoom in after 0.2s
  setTimeout(() => {
    crackedCookie.classList.add("close-up")
    message.classList.add("close-up")
  },200)

})

// function to play crack sound
function playSound () {
  const crackSound = new Audio("assets/sounds/crack.mp3");
  crackSound.play();
}

// generate random fortune
function generateMessage() {
  const randomIndex = Math.floor(Math.random() * (fortuneMessages.length - 1));
  return fortuneMessages[randomIndex];
}

