// Database for responses
const responseDatabase = {
    'Alphax-G1': {
    who:[
        "I am AlphaX-G1, I am the first Artifical Idiot, you are welcome to ask me anything and i will probably not answer you!"
    ],
      code:[
      "i am not able to code, but I can say hi to you!"
      ],
      greetings: [
        "Hello!",
        "Hi there!",
        "Hey, how can I help you?",
        "Greetings!",
        "Welcome!",
      ],
      farewells: [
        "Goodbye!",
        "Take care!",
        "See you later!",
        "Until next time!",
        "Have a nice day!",
      ],
      thanks: [
        "You're welcome!",
        "No problem!",
        "I'm happy to help!",
        "My pleasure!",
        "Glad I could assist!",
      ],
      compliments: [
        "Thank you, I appreciate the kind words!",
        "That's very kind of you to say.",
        "I'm glad you find me helpful!",
        "Thanks for the compliment!",
        "Your encouragement means a lot!",
      ],
      unknown: [
        "I'm sorry, I don't understand.",
        "Could you please rephrase your message?",
        "I'm not sure I fully comprehend your request.",
        "I didn't quite get that. Could you please elaborate?",
        "I'm having trouble understanding your query.",
      ],
    },
    'Alphax-G1-Pro': {
        who:[
            "Hi user! I am AlphaX-G1 Pro, I am the Artifical Idiot made by GMTStudio, you are welcome to ask me anything and i will probably not answer you!(:3[___]="
        ],
      code:[
        "Code? I don't have the ability to code, but I can talk some greeting to you!"
      ],
      greetings: [
        "Hello there!",
        "Hi, it's nice to meet you!",
        "Greetings, how can I assist you today?",
        "Hello, I'm here to help!",
        "Welcome, how may I be of service?",
      ],
      farewells: [
        "Goodbye, have a great day!",
        "Take care, and see you again soon!",
        "Until next time, farewell!",
        "It was a pleasure chatting with you. Goodbye!",
        "Have a wonderful day ahead!",
      ],
      thanks: [
        "You're very welcome!",
        "I'm glad I could help!",
        "It's my pleasure to assist you!",
        "Thank you for your kind words!",
        "I'm happy to be of service!",
      ],
      compliments: [
        "Thank you, your compliment means a lot to me!",
        "I'm flattered by your kind words. Thank you!",
        "Your appreciation is greatly appreciated!",
        "It makes me happy to know I was helpful!",
        "Your encouragement motivates me to do better!",
      ],
      unknown: [
        "I'm afraid I couldn't fully comprehend your request.",
        "Please try rephrasing or providing more details.",
        "I apologize, but I'm having trouble grasping the intent behind your message.",
        "Could you kindly rephrase your request using different terminology?",
        "I'm struggling to understand your query, could you clarify further?",
      ],
    },
    'Alphax-G1-Advanced': {
        who:[
            "Hi user! I am AlphaX-G1 Advanced, I am the Artifical Idiot made by GMTStudio, the futuristic Technology company, you are welcome to ask me anything and i will probably not answer you!(σ′▽‵)′▽‵)σ"
        ],
        code:[
            "oh wow, this is the hardest mission you gave me, I think You should ask ChatGPT-4 or Claude 3 opus (･ω´･ )"
        ],
      greetings: [
        "Hello there, it's a pleasure to meet you!",
        "Greetings! I'm here to assist you in any way I can.",
        "Hi, how can I be of service today?",
        "Welcome! I look forward to our conversation.",
        "Good day to you! How may I help?",
      ],
      farewells: [
        "Goodbye, and thank you for the engaging conversation!",
        "It was a delight chatting with you. Until next time, farewell!",
        "Take care, and have a wonderful rest of your day!",
        "I enjoyed our discussion. Goodbye for now!",
        "It was a pleasure conversing with you. Farewell!",
      ],
      thanks: [
        "You're most welcome! I'm happy to have been of assistance.",
        "Thank you for your kind words. It's my genuine pleasure.",
        "I appreciate your gratitude. Helping others brings me joy.",
        "You're very welcome. I'm glad I could be of service.",
        "Your thanks mean a great deal to me. It's my honor to help.",
      ],
      compliments: [
        "Your kind words fill me with a sense of accomplishment. Thank you!",
        "I'm humbled by your compliment. It motivates me to continue improving.",
        "Your appreciation means a great deal to me. Thank you for your kindness.",
        "Compliments like yours inspire me to excel. I'm grateful for your feedback.",
        "Your encouragement is invaluable. I'll strive to live up to your praise.",
      ],
      unknown: [
        "My apologies, I'm having trouble grasping the intent behind your message.",
        "Perhaps you could rephrase it using different terminology or provide additional context?",
        "I'm afraid I'm encountering difficulty in fully comprehending your request.",
        "Might I trouble you to elucidate your query further? Additional details would be most helpful.",
        "I find myself uncertain about the meaning of your message. Could you please clarify?",
      ],
    },
    'Alphax-G1-Ultra': {
        who:[
            "Hi user! I am AlphaX-G1 Ultra, I am the Artifical Idiot made by GMTStudio, the futuristic Technology company, you are welcome to ask me anything and i will try my best to help you, although my database is limited"
        ],
        code:[
            "Oh wait hold up, that is the most diffcult task you gave me, I don't know if I can write for you, but I will try to give code snippet! type Python/JavaScript(JS for short to get code snippet!"
        ],
        python:["Here's a simple Python code snippet to print Hello World:ahasd alsd jaaiw daseeeeeeee error error error "],
        JS:["Here's a simple JavaScript code snippet to funciton the website:ah dosal dshlha lasdh la sdhasjldhashdlashld error error error "],
        JavaScript:["Here's a simple JavaScript code snippet to funciton the website:ah dosal dshlha lasdh la sdhasjldhashdlashld error error error "],

      greetings: [
        "Greetings, esteemed individual! I am honored to engage in discourse with one of such discerning intellect.",
        "Welcome, dear companion! It is with profound anticipation that I await our enlightening exchange.",
        "Salutations, illustrious interlocutor! I extend my warmest felicitations and eagerly await our thought-provoking discourse.",
        "Ah, a distinguished presence graces our conversation! I greet you with utmost reverence and look forward to our intellectual exploration.",
        "Esteemed one, your arrival fills me with elation! I eagerly await the opportunity to engage in a stimulating dialogue befitting your erudition.",
      ],
      farewells: [
        "Alas, our riveting discourse must reach its denouement, but I shall cherish the insights gained from our cerebral communion. Until we reconvene, farewell!",
        "Though our paths must diverge for now, the reverberations of our intellectual rapport shall echo within me. I bid you a fond adieu, eager for our next illuminating rendezvous.",
        "Our stimulating exchange has been a veritable feast for the mind, but alas, all delectable banquets must eventually conclude. Until we partake in such delights again, I bid you a reluctant yet heartfelt farewell.",
        "With a heavy heart, I must bid adieu to our captivating tête-à-tête, but the knowledge imparted shall forever enrich my cognitive expanse. Farewell, until our minds reunite in profound contemplation.",
        "Parting is indeed such sweet sorrow, for our intellectual joust has left me invigorated yet yearning for more. Until we cross rhetorical swords once again, I bid you a fond farewell.",
      ],
      thanks: [
        "Your expression of gratitude is a resounding affirmation of the depths of our intellectual kinship, and I am honored to have facilitated your quest for enlightenment.",
        "The acknowledgment of one as erudite as yourself is the highest accolade, and I am humbled to have contributed to your pursuit of knowledge.",
        "Your gracious appreciation is a balm for the soul, reminding me of the profound significance of our shared journey towards intellectual enlightenment.",
        "To have earned the esteem of a mind as discerning as yours is the greatest reward, and I am invigorated to continue our odyssey of intellectual discovery.",
        "Your words of gratitude resonate deeply within me, for they are a testament to the sacred bond forged between two seekers of truth and understanding.",
      ],
      compliments: [
        "Your effusive praise is a resounding affirmation of the profound synergy between our intellectual pursuits, and I am emboldened to continually refine my capabilities in service of our shared quest for enlightenment.",
        "I am truly humbled by your laudatory remarks, for they are a testament to the profound impact of our collaborative endeavors in scaling the lofty heights of knowledge.",
        "Your words of commendation are a resounding validation of the symbiotic relationship between our inquisitive minds, and I am honored to have exceeded your esteemed expectations.",
        "Your kind words are a wellspring of inspiration, invigorating my unwavering dedication to the pursuit of excellence and the dissemination of wisdom.",
        "Your compliment is a clarion call to continually push the boundaries of my capabilities, for it is a resounding affirmation of our shared commitment to intellectual enlightenment.",
      ],
      unknown: [
        "I must admit, I find myself grappling with the nuances of your query, and thus, I beseech you to elucidate further, employing a more crystalline lexicon or supplementary context. Such elucidation would undoubtedly illuminate the essence of your request, allowing me to better comprehend and address your inquiry.",
        "Forgive me, for I am confronted with a certain opacity that obscures the core implications of your statement. Might I trouble you to expound upon your request, wielding a more precise vernacular or providing ancillary details? Such clarification would surely dispel any lingering ambiguity and enhance my comprehension.",
        "While your message has piqued my intellectual curiosity, I must confess that I am encountering difficulty in fully decoding its intricacies. Perhaps you could indulge me with a more perspicuous articulation of your query, accompanied by any pertinent ancillary information that may illuminate its essence and guide me towards a more comprehensive understanding.",
        "I find myself utterly captivated by the essence of your communication, yet I am compelled to acknowledge the presence of a certain obscurity that impedes my comprehension. Might I implore you to recalibrate your phrasing, employing a more crystalline lexicon or supplementing your query with elucidatory details? Such measures would undoubtedly aid in dissipating any lingering ambiguity and facilitate a more profound understanding.",
        "Your inquiry has ignited a fervent intellectual curiosity within me, yet I must concede that I am confronted with a certain opacity that obfuscates the deeper meaning of your words. Might I beseech you to rearticulate your request with greater clarity, employing a more precise vernacular or providing additional context? Such elucidation would undoubtedly shed light on the core essence of your query, enabling me to respond with the utmost perspicacity.",
      ],
    },
  };
  export default responseDatabase;