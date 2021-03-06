var down = document.getElementById('topic');

var arr = [
    
    "Are you a giver, a taker, or a matcher? Are there areas in your life where you act like one type, and other areas where you act like another?",
    "How do you best connect with others?",
    "How do you express gratitude towards others? Give me an example",
    "How do you like to be comforted when you’re upset?",
    "If a genie granted you three wishes right now, what would you wish for?",
    "If someone gave you enough money to start a business—no strings attached—what kind of business would you want to start and why?",
    "If there were 26 hours in a day, what would you do more of?",
    "If you could enter a time machine, what time period would you go to?",
    "If you could go back in time, what’s one piece of advice you’d give to your younger self?",
    "If you could have any job you wanted, that would it be?",
    "If you could take a year-long paid sabbatical, what would you do?",
    "If you had $100,000 to give away to any cause, which cause would you choose and why?",
    "In 10 years, how would you like to describe your life?",
    "In what situations do you feel most comfortable sharing your perspective?",
    "Is there something you’ve dreamed of doing for a long time? Why haven’t you done it yet?",
    "Let’s alternate sharing three positive characteristics of each other.",
    "Name four things we have in common.",
    "Tell me about a challenge you’ve been having at work or school, and ask me for advice on what to do about it.",
    "Tell me about a day you had that you’ll never forget.",
    "Tell me about a relationship issue you’re having, and ask me for advice on how to fix it.",
    "Tell me three things that happened in the last week that you’re thankful for.",
    "Tell me your life story in four minutes, with as many deets as possible.",
    "What are five things you’re thankful for right now?",
    "What are the five most important things on your bucket list?",
    "What are the top three ways to express your love in friendships and in relationships?",
    "What are you curious about?",
    "What are your biggest goals for this year? How will you work to achieve them?",
    "What are your favorite three topics to talk about?",
    "What are your top three strengths? Which strengths do you look for in a friend or partner?",
    "What do you miss about being a kid?",
    "What do you think about most?",
    "What do you value most in a friendship?",
    "What do you want your legacy to be?",
    "What makes you happy?",
    "What matters most to you?",
    "What moments or events during your childhood shaped who you are now?",
    "What was the first thing you bought with your own money?",
    "What would you do on your 'perfect' day?",
    "What’s some of the best advice you’ve ever gotten?",
    "What’s something I’ve done for you that you’re grateful for?",
    "What’s something you want to do in the next year that you’ve never done before?",
    "What’s the craziest thing you’ve ever done and would you do it again?",
    "What’s your earliest memory?",
    "What’s your favorite family tradition?",
    "What’s your favorite memory we’ve shared together?",
    "What’s your favorite quote?",
    "What’s your ideal weekend?",
    "Where are the top three places you want to travel to some day, and why?",
    "Where was your favorite place to go as a child and why did you love it there?",
    "Who do you trust?",
    "Who or what has changed your life?",
    "Who’s someone you really admire?",
    "Alternate sharing something you consider a positive characteristic of your partner.",
    "Before making a phone call, do you ever rehearse what you're going to say? Why?",
    "Complete this sentence: I wish I had someone with whom I could share...",
    "Do you have a secret hunch about how you will die?",
    "For what in your life do you feel most grateful?",
    "Given the choice of anyone in the world, who would you want as a dinner guest?",
    "How close and warm is your family? Do you feel your childhood was happier than most other people's?",
    "How do you feel about your relationship with your mother?",
    "If a crystal ball could tell you the truth about yourself, your life, the future or anything else, what would you want to know?",
    "If you could change anything about the way you were raised, what would it be?",
    "If you could wake up tomorrow having gained one quality or ability, what would it be?",
    "If you knew that in one year you would die suddenly, would you change anything about the way you are now living? Why?",
    "If you were able to live to the age of 90 and retain either the mind or body of a 30-year old for the last 60 years of your life, which would you choose?",
    "If you were going to become a close friend with your partner, please share what would be important for him or her to know.",
    "If you were to die this evening with no opportunity to communicate with anyone, what would you most regret not having told someone? Why haven't you told them yet?",
    "Is there something that you've dreamt of doing for a long time? Why haven't you done it?",
    "Make three true 'we' statements each.",
    "Name three things you and your partner appear to have in common.",
    "Of all the people in your family, whose death would you find most disturbing? Why?",
    "Share a personal problem and ask your partner's advice on how he or she might handle it.",
    "Share with your partner an embarrassing moment in your life.",
    "Take four minutes and tell your partner your life story in as much detail as possible.",
    "Tell your partner something that you like about them already.",
    "Tell your partner what you like about them.",
    "What do you value most in a friendship?",
    "What does friendship mean to you?",
    "What is the greatest accomplishment of your life?",
    "What is your most terrible memory?",
    "What is your most treasured memory?",
    "What roles do love and affection play in your life?",
    "What would constitute a perfect day for you?",
    "What, if anything, is too serious to be joked about?",
    "When did you last cry in front of another person? By yourself?",
    "When did you last sing to yourself? To someone else?",
    "Would you like to be famous? In what way?",
    "Your house, containing everything you own, catches fire.",
    "Did you ever dislike me when we first met?",
    "Do you believe in God?",
    "Do you believe that I love you?",
    "Do you like kissing or hugging more?",
    "How do you feel about group vacations with other couples?",
    "How would you respond if one of us was offered a job that required a lot of traveling?",
    "If you could be like one person, who would it be and why?",
    "If you could choose any name besides your own, what name would you give yourself?",
    "If you could go back in time, what age would you be again?",
    "If you could meet anyone in the world, alive or dead, who would it be?",
    "If you could see into the future, what would you want to know?",
    "What accomplishments are you most proud of in your life?",
    "What do you consider your greatest weakness to be?",
    "What do you love most about us?",
    "What do you love most about yourself?",
    "What do you think we need to work on the most in our relationship?",
    "What do you value more: the freedom to be spontaneous or the ability to carefully plan?",
    "What do you want to do during retirement?",
    "What does your perfect day look like?",
    "What is one thing I do that you appreciate the most?",
    "What is one thing you NEVER want me to change about myself?",
    "What is the best advice you’ve ever received?",
    "What is the happiest you ever felt?",
    "What is the most terrifying thing that’s ever happened to you?",
    "What is your earliest memory?",
    "What is your favorite book?",
    "What is your favorite date we went on together?",
    "What is your favorite dessert?",
    "What is your favorite family tradition growing up?",
    "What is your favorite memory of us?",
    "What is your favorite memory with your dad?",
    "What is your favorite memory with your mom?",
    "What is your favorite movie?",
    "What is your favorite tradition that we do together?",
    "What is your greatest fear?",
    "What keeps you going every day?",
    "What location is your ideal vacation?",
    "What makes you feel most loved?",
    "What things about me make you know I’m the one for you?",
    "What was your favorite animal growing up?",
    "What was your favorite subject in school?",
    "What was your favorite toy as a child?",
    "What would you do with an extra $1,000 to spend only on yourself?",
    "What would your dream home look like?",
    "When do you think it’s okay to lie?",
    "Where do you see us in 10 years?",
    "Where do you see us living in 10 years?",
    "Which household chores do you enjoy doing?",
    "Which household chores do you hate doing?",
    "Which of our friends do you think is the most fun? Why?",
    "Who is the person you respect most in life? Why?",
    "Who is your favorite fictional character?",
    "Who taught you how to ride a bike?",
    "Would you prefer to run your own business or work for someone else?",
    "Would you rather be rich or famous?",
    "Am I your soulmate? Why?",
    "Are soulmates real?",
    "Are we “born” to meet our “other half”?",
    "Are you priorities different now than what they were in the past?",
    "Did you think this relationship would be short or long when we started?",
    "Do you believe in fate?",
    "Do you believe in fate? Or are we the controllers of our destiny?",
    "Do you believe in marriage?",
    "Do you believe in true love?",
    "Do you believe that there is more to reality than what we see with our eyes?",
    "Do you feel like you’re living life to the fullest? If not, why?",
    "Do you like to be alone? What do you like to do when you’re alone?",
    "Do you prefer to hang out with introverts or extroverts?",
    "Do you think anything happens after death?",
    "Do you think destiny is real?",
    "Do you think it’s important to be a nice person to everyone, or only to your close ones?",
    "Do you think its mind over matter? Or matter over mind?",
    "Do you think porn is a good thing or a bad thing?",
    "Do you think religion has been bad or good for the world?",
    "Do you think that the universe is ultimately meaningless? Or does it have a purpose?",
    "Do you think you would be happy being single for the rest of your life?",
    "Do you think you’re a spiritual person?",
    "Do you think your dreams have meaning?",
    "Do you want to start a family one day?",
    "Does love frighten you?",
    "Have I been sensitive and open in our relationship?",
    "Have you been open with me as a partner?",
    "Have you ever broken someone’s heart?",
    "Have you ever cried tears of joy?",
    "Have you ever felt like a complete and utter failure?",
    "Have you had your heart broken? Tell me everything.",
    "How are we compatible?",
    "How do you calm yourself down? Any tools or techniques?",
    "How do you like to show your love?",
    "How do you recharge your energy?",
    "How have your priorities changed over time?",
    "How is our relationship special compared to others?",
    "How much do you value love?",
    "How much do you value me?",
    "How much do you value this relationship?",
    "How much have we changed since our first date?",
    "If I had to move to another country, would you be willing to wait, or would we break up?",
    "If we break up tomorrow, what would you miss the most?",
    "If you could ask me one question, and I had to answer truthfully, what would you ask?",
    "If you could be anywhere in the world right now, where would you be?",
    "If you could be given the date of your death, would you want to know?",
    "If you could eradicate pain from your life, would you?",
    "If you could get a free roundtrip ticket with me to anywhere right now, where would it be?",
    "If you had to get a tattoo right here right now, what would it be?",
    "If you travel back in time for one day, what year would you go to and why?",
    "Is freedom important to you?",
    "Is it worse to fail or never try at all?",
    "Is there anyone you simply don’t respect?",
    "Is there anything you’re ashamed of in the past?",
    "Is there anything you’re deeply ashamed of?",
    "What are you scared about with our relationship?",
    "What bridges are you happy you burned?",
    "What characteristic of mine is your favorite?",
    "What could our relationship be better at?",
    "What could you best improve in this relationship?",
    "What do you choose to ignore because it’s too difficult to bare?",
    "What do you contribute to the relationship the most?",
    "What do you do for the people you love the most in life?",
    "What do you dream about when it comes to our future?",
    "What do you love/hate about your culture?",
    "What do you read about on a daily basis?",
    "What do you think about most often?",
    "What do you think about most often?",
    "What do you usually dream about?",
    "What do you usually dream about?",
    "What do you want me to do more?",
    "What do you want to do with me that we have never tried together?",
    "What does beauty mean to you?",
    "What does love mean to you?",
    "What frightens you most when it comes to love?",
    "What happened in the last dream you remember?",
    "What has been the biggest change in your life that you’ve been most proud of?",
    "What has been your hardest thing to cope with in life?",
    "What has stayed the same in this relationship since the beginning?",
    "What have you always wanted to ask me?",
    "What impression do you want to give when you first meet them? What type of personality?",
    "What is our funniest memory together?",
    "What is the first thing you think of when you hear the word “home”?",
    "What is the one rule you have for yourself that you will never break?",
    "What is your best characteristic?",
    "What is your most vivid memory of the first time we met?",
    "What issue in politics or society is most important to you?",
    "What kinds of people do you enjoy most being around?",
    "What loving thing do I do that you like the most?",
    "What makes you motivated in life?",
    "What memory instantly makes you smile?",
    "What MUST you achieve before you die?",
    "What obstacles are currently trying to overcome?",
    "What part of this relationship makes you happiest?",
    "What physical aspect of me do you love most?",
    "What qualities do you wish you had that you don’t?",
    "What secret haven’t you told me yet?",
    "What shared memory do you love more than all others?",
    "What single word would you choose to best describe our love?",
    "What single word would you choose to best describe our partnership?",
    "What thing do I hate about myself that you love?",
    "What were your first thoughts when we met?",
    "What would you alter about our partnership?",
    "What’s something that you hate seeing other people do?",
    "What’s something you believe to be true that no one else around you believes is true?",
    "What’s something you could do all day?",
    "What’s something you enjoy doing that you never get tired of?",
    "What’s something you try to actively avoid in life?",
    "What’s something you’d be embrassed about if people found out you did it?",
    "What’s the best lesson you learned from your parents?",
    "What’s the biggest difference between you and your family?",
    "What’s the biggest secret you’ve ever kept from somebody?",
    "What’s the most emotional scene you’ve ever seen in a movie?",
    "What’s the most important thing that they don’t teach in school?",
    "What’s the most important value you would teach a young person?",
    "What’s the most memorable lesson you’ve ever learned?",
    "What’s the most unsettling thing about life?",
    "What’s the one thing that should be taught, but isn’t?",
    "What’s the political issue that makes you MOST angry?",
    "What’s the thing you most want to achieve when you die?",
    "What’s your biggest weakness?",
    "What’s your favorite memories EVER in life?",
    "What’s your favorite music? How does it make you feel?",
    "What’s your FAVORITE thing about yourself?",
    "What’s your greatest fear?",
    "When do you feel most alive? Tell me everything about it.",
    "When do you feel the most confident?",
    "When in your life have you felt awe?",
    "When was the last time you push yourself to your physical limits?",
    "When was the last time you really pushed yourself to your physical limits?",
    "When were you most open with me during this partnership?",
    "Where do you think happiness comes from?",
    "Where do you think we go when we die?",
    "Where is your favorite spot with me?",
    "Which difference do we both share that you can’t get enough of?",
    "Which is more important: What you say or how you say it?",
    "Which similarity do we both share that you can’t get enough of?",
    "Who are the people you could trust your life with?",
    "Who in your life do you wish you met sooner?",
    "Who is more loving between us?",
    "Who is your hero? What qualities make them your choice?",
    "Why did you fall in love with me?",
    "Would you like to be immortal?",
    "Would you prefer to have high intelligence or high empathy?",
    "Would you rather be crazy rich, or deeply in love?",
    "Would you rather be incredibly rich and single, or broke but deeply in love?",
    "Would you rather be loved or love?",
    "Would you rather live a short, exciting life, or a long, boring but comfortable life?",
    "Would you sacrifice your life for someone else’s?"
];


function Lets_Play() {
    down.innerHTML = arr[Math.floor(Math.random() * arr.length)];
}



var Inst = document.getElementById("instructions");
var Game = document.getElementById("game");

function instruct(){    
    Inst.classList.add("show");
    Inst.classList.remove("hide");
    Game.classList.add("hide");
    Game.classList.remove("show");
}

function no_instruct(){
    Inst.classList.remove("show");
    Inst.classList.add("hide");
    Game.classList.add("show");
    Game.classList.remove("hide");

}