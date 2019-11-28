// https://www.trustedtarot.com/card-meanings/

const rwTarotDeck = [
  {
    id: 0,
    name: "The Fool",
    image: "./assets/images/rider-waite-deck/0.jpg",
    keywords: "Carefree · Foolish · Important decisions · New beginnings · Optimistic",
    general: "The Fool is a very powerful card in the Tarot deck, usually representing a new beginning -- and, consequently, an end to something in your old life. The Fool's position in your spread reveals which aspects of your life may be subject to change. The Fool portends important decisions ahead which may not be easy to make, and involve an element of risk for you. Approach the changes with optimism and care to gain the most positive outcome.",
    past: "The risks you have taken and your original thinking have brought you success. By doing things in a new way, you have allowed for great potential.",
    present: "At this moment, you are entering a new phase of life. The experience of this change may seem good or bad now, but its influence will be clearer in the future. Assessing the risks is crucial to making the right choice.",
    future: "In order to succeed, you must find new ways to bring about the achievement of your goals. When the opportunity comes, you must be willing to shed old habits and if it never comes, it may be time to create it for yourself with new methods.",
    yesno: "The Fool represents new beginnings and carefree adventure. Though this card could indicate foolishness, it is more optimistic in the sense that it stands for pure actions and being free from the constraints of your present life. More than likely, there are important decisions coming your way, and the answer to your question is yes."
  }, {
    id: 1,
    name: "The Magician",
    image: "./assets/images/rider-waite-deck/1.jpg",
    keywords: "Confident · Creative · Important communications · Skillful · Talented & proficient",
    general: "The Magician generally associates with intelligent and skillful communicators. His presence in your spread indicates a level of self-confidence and drive which allows you to translate ideas into action. A practical card, the revelations it brings are best applied to the pragmatic and physical aspects of your life, rather then the ephemeral or theoretical. Your success in upcoming ventures in politics or business will likely hinge upon your own strength of will and determination.",
    past: "Your confidence and creativity have allowed you to effectively make your ideas into reality. You have found success through intelligence and skillful execution.",
    present: "Presently, there is a need for your knowledge and skills to influence the changes that are occuring. In order to make the changes beneficial, you must play your cards right.",
    future: "The future before you is uncertain, presenting both risk and opportunity. The possibilities will be influenced by the friendships you have nurtured and the support you have from those who are close. A triumph or creative success may bring about a new beginning for you.",
    yesno: "The Magician is symbolic of action and power in your life. Its positive connotations illustrate someone who is a smooth talker and good at all aspects of communication. This card suggests using your strong will power to move forward and take action. The answer to your question is yes."
  }, {
    id: 2,
    name: "The High Priestess",
    image: "./assets/images/rider-waite-deck/2.jpg",
    keywords: "Feminine influences · Insightful · Mystery · Understanding · Wisdom",
    general: "Your identification with the High Priestess suggests you possess inherent good judgment, in the form of strong intuition. She may indicate that reason should take second place to instinct. Your head must trust in the wisdom of your heart for a change. Yet, she is also an aide by nature, and her presence in certain parts of your spread could be indicative of someone close to you coming to your rescue with their own intuition. Intuition is most effective at seeing what is hidden to the senses, so the High Priestess may also come as a warning of concealed facts or influences that are, or will be, important to you.",
    past: "You have been in need of new experiences and may wander somewhere outside of your comfort zone. If you are lacking support in important areas of your life, you should consider the idea of investing your time in new people and new ideas. You are entering a time of renewal, but you may need the help of another.",
    present: "The undiscovered or repressed creative abilities you have are demanding to be expressed. Finding a spiritual guide will help you realize the full potential of your psychic or artistic abilities. In order to get what you desire, you will need to overcome your fear of commitment.",
    future: "You are on course to receive real rewards, but only if you continue your discipline and motivation. If you reject the attempts to dissuade you, your future is bright. Follow your intuition and you are headed towards the lasting contentment of success.",
    yesno: "The High Priestess is a spiritually intuitive woman full of mystery, wisdom, and understanding. A journey of self-discovery goes hand-in-hand with the presence of this card in your spread. She stands for things yet to be discovered in your life, and thus the answer to your question is unclear."
  }, {
    id: 3,
    name: "The Empress",
    image: "./assets/images/rider-waite-deck/3.jpg",
    keywords: "Abundant creativity · Fertility · Fulfillment · Mother figure · Productivity",
    general: "Traditionally associated with strong maternal influence, the presence of the Empress is excellent news if you are looking for harmony in your marriage or hoping to start a family. Any artistic endeavours you are currently associated with are also likely to be more successful, as this card often finds those exposed to strong bursts of creative or artistic energy. That creative energy may not be in the form of a painting or art project, however: This card also suggests a very strong possibility of pregnancy -- not necessarily yours, but you might be seeing a new addition to your extended family or the family of a close friend in the near future! This card is a good portent for you and those around you.",
    past: "The last opportunity you had is proving its influence now. Whether business, personal, or artistic, a new partnership will require your continued effort to succeed. Remember your most resourceful behaviors, but especially your discipline.",
    present: "There may be a new beginning unfolding before you and you decided its quality. Be understanding and especially sensitive to the emotional aspects of life. A loved one will need a helping hand or light in the dark. The role is yours to fill, no matter your choice.",
    future: "The future will bring healing and respite for your emotional and physical wounds. Spending time walking on new paths will be more beneficial than mending bridges. Your investments will pay off if you carefully tend them.",
    yesno: "The Empress stands for all things motherly. A nurturing, loving problem solver, she indicates successful business ventures or other positive, productive opportunities to come. She suggests moving forward to fulfill your full potential, and the answer you seek is yes."
  }, {
    id: 4,
    name: "The Emperor",
    image: "./assets/images/rider-waite-deck/4.jpg",
    keywords: "Authority · Father figure · Masculine influence · Rational · Stable",
    general: "Counterpart to the Empress, the Emperor is signifies a powerful influence, generally male in nature. This can also include concepts in your life historically considered masculine, such as leadership and authority, self-discipline, and stability through the power of action. Its positive influences suggest you may be on a path to advancement or promotion, but it can also be neutral. Often a companion to those destined to take on greater responsibility, it may presage change or loss that necessitates you stepping forward to shoulder a greater burden than you have in the past. Whatever the impetus for the change, it indicates you may possess an uncommon inner strength that will compel you act and to lead.",
    past: "Authority has played a great role in shaping your life. Your good position may be due to a government or a powerful person. The resolution of a recent conflict is approaching.",
    present: "There may be a moment where someone in a position of authority offers to help you. In any form, the more experienced hand that has come to help you may be more capable than yours. Protecting your loved ones is important, but those in a leadership position must know how to compromise. Beware the overly-dependant.",
    future: "Taking the initiative may lead you closer to your goal, but only if you can bear the responsibility of all your actions. You will be given the opportunity to lead in one of life's many roles. Remember those who follow behind you.",
    yesno: "The Emperor, as the counterpart to the Empress, stands for all things fatherly. He is structure, order, and authority in your life. While moving forward in your endeavours, this card indicates that assertiveness and rationality will take you a long way. With that, your answer is yes."
  }, {
    id: 5,
    name: "The Hierophant (Pope)",
    image: "./assets/images/rider-waite-deck/5.jpg",
    keywords: "Approval · Conformity · Consent · Good advice · Marriage or Union",
    general: "Depending on your own nature, the Hierophant can mean very different things. At its root, it represents doctrine, but doctrine can come in the form of teaching and guidance or rigid authority. Where it appears in your spread is also important, as it is most often indicative of your own approach to the moral, religious, and social conventions of the world. Considered wisely, it helps show the path towards fulfillment.",
    past: "There is value in an ambition from your past. Look to a strength that you may have neglected.",
    present: "The opportunity for work or study under a superior is approaching. If the others around you are capable of being wrong, so are you.",
    future: "Look to the support of a solid organization or structured principles to achieve success. Your actions should be motivated beyond selfish reasons, or there will be little reward for them.",
    yesno: "The Hierophant is a symbol of education and tradition. This card suggests seeking spiritual guidance or advice in your life. Also indicative of conformity and religious approval, this card has neither a positive or negative connotation. The only answer is maybe."
  }, {
    id: 6,
    name: "The Lovers",
    image: "./assets/images/rider-waite-deck/6.jpg",
    keywords: "Attachment or combination · Conflicting choices · Partners · Relationships · Union",
    general: "Your first instinct will most likely be to associate this card as representing love, but, much like love, it does not possess a simple nature. Not only does love comes in many forms, but the Lovers may indicate important or difficult choices ahead in your life. This is bad, in that the choices it portends are generally mutually exclusive, paths to two very different futures, but also good, in that it also confirms that at least one of those paths will take you to a good place. As such, if you happen to find it in your spread, you should consider it carefully, but not fear it. It tells a story of difficult choices, likely painful, but that the correct decision and a positive outcome are within your grasp.",
    past: "By becoming more in tune with yourself, you will be more able to connect with others. The emotional burden of a recent conflict will soon be lifted and a successful resolution reached.",
    present: "There is an approaching conflict that will test your values. In order to progress, you are going to have to make a decision between love and career. Neither will disappear forever, but the choice will shape your priorities.",
    future: "It will benefit you to remember that opposites are two sides of the same coin; there is not one without the other. The right choice will be made only if you have accepted others and yourself.",
    yesno: "The Lovers suggest being at a crossroads somewhere in your life. While this card is highly symbolic of relationships, love, and togetherness, it could also be revealing a positive business partnership or teaming up to move forward in your life. The answer to your question is yes."
  }, {
    id: 7,
    name: "The Chariot",
    image: "./assets/images/rider-waite-deck/7.jpg",
    keywords: "Journey · Progression · Strong character · Success from effort · Transportation and movement",
    general: "You have some hard work ahead of you. It may be resolved quickly, but the Chariot is a powerful card, and the labor you are undertaking will probably trend towards long and difficult. You will quite possibly experience rough roads, long uphill slopes, dead ends, and painful setbacks. A good outcome is only assured if the card is upright, but do not let yourself lose hope: This hard road will instil in you a strength of purpose, the ability to overcome through organization and endurance, and the confidence possessed only by those who have done what they thought they could not. Harnessed correctly, few forces can stand against an individual like that.",
    past: "Your character has been tested by the tendency to protect your own interests and ego. The struggle has strengthened you and recent events have given you a chance to accomplish your victory.",
    present: "Good news is coming and you will better the opposition in a decisive victory.",
    future: "Continue your struggle and the end you seek will be achieved. Honor, acclaim, and recognition are all possible outcomes for you if you do not quit.",
    yesno: "The Chariot reveals some sort of journey. With a positive connotation, this journey will most likely be a progression of some sort. It could also be the final success you have been working for. The confidence, direction, and victory shown through this card indicate that the answer is yes."
  }, {
    id: 8,
    name: "Strength",
    image: "./assets/images/rider-waite-deck/8.jpg",
    keywords: "Energy · Facing problems · Strengh · Vitality · Willpower",
    general: "Strength is the rawest form of power, and you possess it in some form. It is a very happy card if you are fighting illness or recovering from injury. As might be suspected, its influence over you, and the use you put it to, can trend towards light or dark. You likely trend towards facing your problems courageously, head-on, and conquering them through perseverance and will. With this ability to overcome life's obstacles, though, comes the responsibility to control yourself, and it this card may be a warning to take command of your own actions or emotions before they damage you or the people you care about.",
    past: "Your strength is balanced and you have both physical endurance and mental strength. This inner strength may lead you to explore the other potentials for your abilities.",
    present: "Do not turn down any offers that will change your future. Have faith in your own convictions, and be strong enough to trust where you will land.",
    future: "There is a strong, energetic release in your future which will lead you into major life changes. By understanding your true value, you will make the most of a wonderful chance to improve your life.",
    yesno: "The Strength card shows a presence of self-assurance and confidently facing problems in your life. It suggests a person who enjoys power but has the capacity to exercise great self-control in all matters. Patience and strength may be required in your pursuits, and the answer you seek is most likely yes."
  }, {
    id: 9,
    name: "The Hermit",
    image: "./assets/images/rider-waite-deck/9.jpg",
    keywords: "Detachment · Guidance · Solitude · Sour-searching and introspection · Thinking and reflection",
    general: "There are times in every life, when one must step back and make a careful examination of their situations and decisions. Finding the Hermit in your spread suggests this is just such a time for you. You are in need of a period of inner reflection, away from the current demands of your position. This retreat can be physical, or a search within. Only a deep and honest introspection will lead to a solution, however.",
    past: "The pace of your past has slowed, and it is time to accept this. Continue looking for your finals goals and consider the insight you have recently gained.",
    present: "There is someone who can help you through all your problems, and their insight may surprise you. This person is yourself. By understanding yourself, you can better understand others.",
    future: "When you become aware of your true road, there will be nothing to stand in your way. Life has challenged you, but you are prepared to make the best of the future.",
    yesno: "The Hermit is a card symbolic of seeking some sort of spiritual enlightenment. Solitary introspection and contemplation are also associated with the Hermit. Perhaps some soul-searching and reflection are required on your part. The answer to your question, therefore, is maybe."
  }, {
    id: 10,
    name: "Wheel of Fortune",
    image: "./assets/images/rider-waite-deck/10.jpg",
    keywords: "Change · Destiny · Good luck · Life cycles · New direction",
    general: "Symbolic of life's cycles, the Wheel of Fortune speaks to good beginnings. Most likely, you will find the events foretold to be positive, but, being aspects of luck, they may also be beyond your control and influence. Tend those things you can control with care, and learn not to agonize over the ones you cannot.",
    past: "The actions of your past are the seeds of your future success. To make progress, you must accept the changes coming.",
    present: "There is a beneficial change approaching, but keep in mind that luck is out of your control.",
    future: "The future will yield an opportunity to change paths towards personal growth and happiness. You must be ready to change your ways of thinking, because whether or not your actions bring success, they represent beneficial change.",
    yesno: "The Wheel of Fortune stands for luck, changes, and a new direction in your life. While it also shows ups and downs, the overall feel of the card is a positive one indicating changes for the better and good fortune. The answer you are looking for is yes."
  }, {
    id: 11,
    name: "Justice",
    image: "./assets/images/rider-waite-deck/11.jpg",
    keywords: "Balance · Equality · Fairness · Justice · Law and legal matters",
    general: "Justice is a very good card to find in your spread if you have acted with kindness and fairness towards other and, especially, if you have been a victim. It is a significant indicator of a positive resolution, although how and what sort will depend on your own experiences. If you have been unfair, abusive, or otherwise shady and immoral in your dealings, though, pay heed. For the unjust, this card is, at best, a dire warning to change your ways before retribution falls upon you, and, at worst, a simple statement that it is already too late. In neutral cases, it may simply be telling you to seek out balance in your life.",
    past: "Balancing your emotions will pay off and bring you harmony in relationships. The confusion of your life can be overcome if you find inner balance.",
    present: "You wil receive some gift of advice or have a debt repaid to you.",
    future: "When all is said and done, you will receive the outcome that you truly deserve. Your moral character will be justified, so maintain integrety and strive to balance yourself.",
    yesno: "The Justice card is all about karma, fairness, and balance in different affairs in your life. It does not suggest an outcome that is either for or against you, but accountability, dignity, and integrity are all liked to its presence. There is no clear cut answer to your question."
  }, {
    id: 12,
    name: "The Hanged Man",
    image: "./assets/images/rider-waite-deck/12.jpg",
    keywords: "A period of transition · Gaining for a sacrifice · Suspending · Restricting · Discontinued",
    general: "The Hanged Man can be interpreted in two very different ways. All change is a small kind of death, as the old must die to create the new, and it may simply indicate upheaval or change in your future, perhaps beyond your control, but more likely a decision that, for good or ill, you will not be able to turn back from. The other interpretation is one of sacrifice, although whether this sacrifice is small or great may not be easily interpreted. Both interpretations imply permanence, and that you should give very careful thought to the decisions in your life.",
    past: "Letting go of some things from your past has brought new value to your spiritual life. That which you sacrificed must be seen in a new way.",
    present: "If there is something being rushed, this may suggest that it is going to pause. Keep in mind that the act of giving help is not more important than the person being helped.",
    future: "Many things are unknown to you now, so you must make new goals and plan carefully. Acting at the right moment will get you ahead.",
    yesno: "The Hanged Man suggests some sort of metamorphosis through breaking patterns, letting go, or going through a period of transition. Although it could indicate having to give something up in order to gain a fresh perspective, it has neither positive or negative connotations. Maybe is the answer."
  }, {
    id: 13,
    name: "Death",
    image: "./assets/images/rider-waite-deck/13.jpg",
    keywords: "End · New beginning · Loss · Dramatic change · Destruction",
    general: "Death is indicative of change in your future. This change can be in almost any aspect of your life, but it will almost certainly be permanent, significant, and absolute. Death suggests a complete severance between the past and the future, and it will likely be painful. Despite the sense of loss that may accompany it, Death fills an important and natural role in life, and leads eventually to acceptance. It is a necessary part of moving forward, and you will find the changes easiest if you embrace them, rather than fight them. Expect the end of a close friendship, a job, a marriage, or even a life, but do not focus too greatly on the negative.",
    past: "You have moved into a new phase of life. All things change with time, and your path through this world is no different.",
    present: "A major event is approaching and will arrive suddenly. You will lose something valuable.",
    future: "To move forward, develop a new perspective on the world. The past is behind you and the rest of your life is still ahead of you, so continue the journey with all your heart.",
    yesno: "The Death card shows some sort of dramatic change in order to have a new beginning. It is often associated with some sort of loss, failure, or destruction. The overall tone of this card is dark and not good. Thus, your answer is no."
  }, {
    id: 14,
    name: "Temperance",
    image: "./assets/images/rider-waite-deck/14.jpg",
    keywords: "Capable · Control · Harmony and balance · Moderation (drugs / alcohol) · Self-confidence",
    general: "An optimistic card, Temperance encourages you to find balance in your life and approach problems with a calm demeanour. It recognizes that opposing forces need not be at war within you. Tread carefully in any major decisions you make, with confidence that good decisions will lead to a good resolution for you.",
    past: "The experiences you've had learning to work in harmony with others will be an ongoing trend. Balancing the material and psychic elements in your life has deeply influenced you.",
    present: "Something you have long desired will come to fruition. Expect a wealthy partnership or marriage to develop in your immediate social circle.",
    future: "Take control of your life and practice moderation. By staying in balance, you will resolve any current conflicts and begin a new chapter in your life.",
    yesno: "The Temperance card suggests divine intervention, balance, and harmony. The positive overall presence of this card in your spread reveals high levels of self-confidence and control in your endeavors. The answer provided by this card is most likely yes."
  }, {
    id: 15,
    name: "The Devil",
    image: "./assets/images/rider-waite-deck/15.jpg",
    keywords: "Anger · Jealousy and resentment · Self-delusion · Selfishness · Violence",
    general: "The Devil is in the business of entrapment. It signifies a situation from which there is no escape, or a road leading to one. Forewarning may let you avoid the trap, or it may not. What sort of trap, and how you might avoid it, depends on where the Devil appears in your spread, and what other cards surround it. This card does not foretell doom, only the need for prudence.",
    past: "One of the choices you've made was wrong for you. Negative forces are slowing your development.",
    present: "There is an event beyond your influence that will change your life. It is uncertain whether it is good or bad, but avoid extravagant behavior and be true to yourself.",
    future: "The time is coming that you will have to find beauty within yourself and stop the projections you are casting on the world. Find the courage to change your life. The course of your life is beyond your knowing, but this awareness will defeat your self-delusions.",
    yesno: "The Devil is about all things negative. Anger, violence, temptation, fear, and doubt are just some of the terrors associated with this card. It suggests feeling trapped perhaps in an unhealthy relationship, an addiction, or a lie. Without a doubt, this card is telling you no."
  }, {
    id: 16,
    name: "The Tower",
    image: "./assets/images/rider-waite-deck/0.jpg",
    keywords: "Destruction · Dramatic change · Loss and ruin · New start · Unexpected events",
    general: "Dark and foreboding, the Tower is the embodiment of disruption and conflict. Not just change, but the abrupt and jarring movement caused by the unforeseen and traumatic events which are part of life. The Tower in your spread is always a threat, but life inevitably involves tragedy, and you must decide whether you will face it with grace.",
    past: "To make room for the new, the old must be destroyed. The ambitions that you have been following are built on weak foundations and offer false rewards.",
    present: "A conflict is coming to a head in your life. Relationships will need to be reevaluated and restructured in order to maintain.",
    future: "By withstanding the coming challenges, your future will be bright. Seein things as you want them to be in order to make them become that way. Knowing the worst is behind you can give strength.",
    yesno: "The Tower is all about unexpected events and changes coming up in your life. However, the changes are along the lines of something catastrophic, disasterous, and overall negative. It could be related to some sort of accident, disaster, or damage to another area of your life. The answer provided by this card is no."
  }, {
    id: 17,
    name: "The Star",
    image: "./assets/images/rider-waite-deck/17.jpg",
    keywords: "The Tower is all about unexpected events and changes coming up in your life. However, the changes are along the lines of something catastrophic, disasterous, and overall negative. It could be related to some sort of accident, disaster, or damage to another area of your life. The answer provided by this card is no.",
    general: "The Star's presence signifies a period of respite and renewal for you. This renewal may be spiritual, physical, or both. It is a particularly positive sign if you or someone close is recovering from illness or injury. It is a light in the darkness, illuminating your future and your past.",
    past: "Move on from the hardships of the past and begin your renewal. At the end of all struggles will be peace; rely on your inner strength and external support systems.",
    present: "Consider balance and restraint when finding solutions to your current problems. The right amount of help and encouragement will bring harmony and happiness to your circles.",
    future: "The time of your renewal is approaching. You have chosen the right path to restore your mental and physical health. By being brave enough to choose the riskier roads, you will inspire those around you.",
    yesno: "The Star is symbolic of hope, renewal, and beauty. It suggests a period of spiritual tranquility, happiness, and positive opportunities. The overall feeling of this card is optimistic and serene. The answer suggested by its presence is yes."
  }, {
    id: 18,
    name: "The Moon",
    image: "./assets/images/rider-waite-deck/18.jpg",
    keywords: "Be careful · Caution · Confusion · Delusion · Risk",
    general: "Something in your life is not what it seems. Perhaps a misunderstanding on your part, or a truth you cannot admit to yourself. It may also indicate something important being kept from you by another. This may be a source of worry or depression in your life, and the Moon is a strong indicator that you must rely on your intuition to see through the subterfuge.",
    past: "Your understanding of a past event may be distorted by your current perceptions. Reflect on your history and make sure the pieces fit together. By eliminating uncertainty, you will find more peace.",
    present: "There is a challenge approaching, taking the form of either a new creative project or a conflict in a relationship. Your history will reveal the best course of action.",
    future: "Your imagination will bring you success if your thoughts are coupled with practical action. The struggle to reach your potential may bring about many conflicts in your life, but the results will be beautiful.",
    yesno: "The Moon is an illusive and confusing card. It suggests the presence of risks, secrets, and some level of mental confusion. It would warn you to take caution and be careful in whatever endeavor you are pursuing in your life. The answer you are seeking is no."
  }, {
    id: 19,
    name: "The Sun",
    image: "./assets/images/rider-waite-deck/19.jpg",
    keywords: "Abundance · Achievement · Joy · Productivity · Success",
    general: "As an inherently good influence, finding the Sun is a positive development. It is suggestive of personal gain, and that personal goals and joy are within reach, if you are willing to invest the effort to actualize them. If you are embarking on a new personal venture, such as marriage or beginning a family, the Sun is of particular influence.",
    past: "The successes you have achieved in the past will set the stage for future joys. Continue developing your line of work or field of study and the rewards will come.",
    present: "There is an opportunity for new friendship or a relationship that will lead to happiness and contentment. Do not give up and you will be led to success.",
    future: "You are approaching a moment that has the potential to change your life. Take full advantage of this time and you will achieve a future of endless possibility.",
    yesno: "The Sun, being the opposition to the Moon, is a card full of life, joy, and energy. It reveals positive achievements, successful endeavors, and an overall manifestations of good fortune in your life. Thus, the answer it provides for your question is yes."
  }, {
    id: 20,
    name: "Judgement",
    image: "./assets/images/rider-waite-deck/20.jpg",
    keywords: "Change · Decisions · Success · Transformation · Upheaval",
    general: "Judgment tells a story of transition, but unlike Death or the Tower, it is not sudden change, or born of luck or intuition, but change that springs from reason. It signifies plans, often long in the making, coming to fruition. If it points towards the future, it may also speak towards the nature of the change; if there is a choice that needs to be made, ruminate and let your mind guide the decision. Logic, in this case, is a better guide than intuition. Be prepared to make a major decision in your life, likely one that will shape the next chapter of your life.",
    past: "Your past is full of good work, but the process of your liberation from those experiences is ongoing. You are beginning a new chapter in your life.",
    present: "The present has arrived and the past is relinquishing its hold on your fate. This is the best time to change an element of your lifestyle.",
    future: "The fruits of your decisions are coming and you will receive that which you deserve. The path at your feet and the direction it is leading you are clear. You will see your ultimate desire through to the end.",
    yesno: "The Judgement card is representative of some sort of change or transformation, likely one that has already occurred. It could mean the presence of a spiritual or professional calling and making decisions that will lead to your success. The answer to your question is yes."
  }, {
    id: 21,
    name: "The World",
    image: "./assets/images/rider-waite-deck/21.jpg",
    keywords: "Certainty · Completion · Positive · Reward · Satisfaction",
    general: "The World is an indicator of a major and inexorable change, of tectonic breadth. This change represents a chance for you to bring about a desirable end to the Old and a good beginning to the New. It is indicative of growing maturity, a sense of inner balance and deeper understanding. It suggests that you may be approaching a more final sense of identity, and the security in the self that comes with age. It also represents the falling away of boundaries, sometimes in the effusive sense of the spiritual, but sometimes in a purely physical sense, indicating travels or journeys in the future.",
    past: "The path you are on will eventually bring you full circle. It may take a while to realize this, but the journey will allow you to accept new responsibilities and points of view.",
    present: "The present moment will bring you the fulfillment of a wish or a long desired change in scenery. To find satisfaction, you must accept the ideas of others to be equally valid as your own.",
    future: "You must find your purpose to accomplish it. The same with dreams; you must first be aware of it to make it exist. There is no guarantee for success but the experience you gain will have the potential to fulfill your desires.",
    yesno: "The World card means satisfaction and success at a journey's end. Fulfillment, rewards, certainty, and positive outcomes are all things directly associated with the presence of this card. The answer more than likely is yes."
  }, {
    id: 22,
    name: "Ace of Wands",
    image: "./assets/images/rider-waite-deck/22.jpg",
    keywords: "Birth · Commencement · Creativity · Inventiveness · New Beginnings",
    general: "Drawing the Ace of Wands strongly suggests a new business enterprise being undertaken, traditionally, although some also interpret it to indicate childbirth. It speaks more strongly to the characteristics you will need to succeed in these new conditions. You will need to harness your potential for innovation, enthusiasm, and ambition to bring about a successful outcome.",
    past: "Reexamine your past goals, as you are perhaps limiting yourself. There is inspiration building inside of you that will vent its energy destructively if you do not use it creatively.",
    present: "There is a new beginning at hand. It may take the form of a new phase of life, a new enterprise, a new project, or a new source of inspiration.",
    future: "To succeed, you must think clearly and plan ahead. There is a void in your life waiting to be filled, and it is your duty to fill it. Prepare for a transformative experience by filling this void with something to positively influence your new beginning.",
    yesno: "The Ace of Wands is an inventive, creative card suggesting some sort of passionate union, positive new beginnings, or the birth of something powerful and inspiring yet to come in your life. It could be a new project or something creative that you will be taking on. The answer to your question is most likely yes."
  }, {
    id: 23,
    name: "Two of Wands",
    image: "./assets/images/rider-waite-deck/23.jpg",
    keywords: "Achievement · Anxiety · Gain · Goals · Partnership",
    general: "The Two of Wands suggests the formation of partnerships in your immediate future, or the success of already existing joint ventures. You will likely find yourself in a position to reap the rewards of these partnerships, in the form of financial gain or promotion. One the same count, the rewards indicated are those fairly due to you, so this is better news for those in equitable partnerships than those who seek to profit at the expense of others. The presence of this card may also point to underlying insecurity or worry on your part. These feelings may be justified or not, based on the rest of the spread.",
    past: "The research, development, and constant application of your skills has led you to progress in life. If you intend to arrive at your intended destination, continue to look ahead and plan.",
    present: "A generous offer for help is coming. With analysis and development of your ambitions, this influence will help you attain fulfillment.",
    future: "Reflection and self-awareness will lead you to success. Trust your intuition, but also be open to help from others.",
    yesno: "The Two of Wands shows being in control and experiencing gains in your life on one hand. On the other, it brings with it great anxiety and the possibility of losing the control that you once had. The dynamism projected through this card does not provide a clear answer. Maybe is what it suggests."
  }, {
    id: 24,
    name: "Three of Wands",
    image: "./assets/images/rider-waite-deck/24.jpg",
    keywords: "Achievement · Fresh starts · Long-term success · Partnerships · Trade",
    general: "If you can bring the fullness of your creativity and inventiveness to the table, then the Three of Wands brings good news. You are about to enter a time where your potential for productivity and accomplishment is very favourable. Keep your eyes open for new career opportunities and your mind open to new possibilities. The rewards these new opportunities bring, however, will only come in the fullness of time. You will need to be patient and stick around for the long haul. Also, look for new allies, as any new undertakings will be most successful if undertaken as partnerships.",
    past: "Your efforts have established a foundation for your success. Maintain your resourcefulness and keep efficiency at the heart of your drive forward.",
    present: "An offer for help may bring about a new project or idea, so do not delay in accepting it. The opportunity to interact with someone with greater resources than you will lead to long-term success.",
    future: "The work ahead of you will pose an intellectual or mental challenge. In order to succeed, you must be able to think creatively or invent a path forward.",
    yesno: "The Three of Wands stands for fresh starts, achievements, and positive partnerships. It could mean some sort of business expansion, or it could be the confirmation that you are on the right path toward success. It has an overall positive tone, and the answer it provides you with is yes."
  }, {
    id: 25,
    name: "Four of Wands",
    image: "./assets/images/rider-waite-deck/25.jpg",
    keywords: "Celebrations and happiness · Completion · Harmony · New beginnings · Pleasure",
    general: "Peace and security follow in the wake of the Four of Wands, usually in the smaller aspects of your life. Do not let the limited scope bring you to underestimate the joy that simple successes can bring, however: This is a card of good endings and fresh starts. Its presence should be welcome if you are beginning a new relationship -- or a new phase of one, such as marriage or engagement -- and is especially good for those about to move residences.",
    past: "Your consistent efforts have resulted in reward and satisfaction. The drive to create or build something has been developing in your subconscious.",
    present: "Accept the support of friends and loved ones, as you cannot be strong all the time. You are on track to completing something meaningful, so do not forget that you are not alone.",
    future: "By believing in yourself and applying positive energy to your decisions, you will achieve prosperity. The foundation of your future will be laid on the good deeds of your present.",
    yesno: "The Four of Wands represents pleasurable and harmonious new beginnings. It stands for successfully completing something in your life and brings with it feelings of happiness, balance, and forward progression toward good things to come. The answer you are seeking is yes."
  }, {
    id: 26,
    name: "Five of Wands",
    image: "./assets/images/rider-waite-deck/26.jpg",
    keywords: "Anxiety · Conflict · Disagreement · Strife · Struggle",
    general: "The Five of Wands is never a welcome card, as long tradition suggests you will be in line for struggle and aggravation. Pay close attention to the surrounding cards to discover clues about which areas of your life will be subject to these conflicts. Expect them to be rooted in competition, and console yourself that a positive solution is not outside your reach. Just be prepared for the possibility that the victory will come at a personal cost.",
    past: "The battles you have faced has led you to boldness of character. This is a valuable trait, but only in moderation. Facing adversity requires tact, and it may feel as though your progress is too far delayed by the obstacles in your path.",
    present: "A miscommunication or misunderstanding will pose obstacles to your progress.",
    future: "There will be an opportunity in the future that requires you to tame your boldness in order to succeed. No one can decide your actions but you, so rely on your strength of will to achieve balanced progress.",
    yesno: "The Five of Wands suggests being challenged in some way and having to defend yourself against others. It brings with it feelings of struggle, anxiety, and overall unease with internal battles yet to come. The negative foreboding presented with this card provides an answer of no."
  }, {
    id: 27,
    name: "Six of Wands",
    image: "./assets/images/rider-waite-deck/27.jpg",
    keywords: "Completion · Good news · Reward and Recognition · Success · Triumph",
    general: "Your past efforts are about to pay dividends if you find the Six of Wands in your spread. Whether in the form of recognition for your past work or material reward, some level of success is in your future. If you are waiting for some particular news, this card is most likely a portent of good news. However, it is also gentle reminder that magnanimity and grace should accompany your success. To avoid losing friends and inviting retributions, do not let the good fortune go to your head.",
    past: "The effort and inspirations of your past have brought you to where you stand now. Continue on your path and you will find rewards.",
    present: "There is good news coming. Though it may be conditional, this change will greatly aid your pursuit of fulfillment.",
    future: "There is triumph at the end of your road. To find it will require careful navigation and the removal of opposition, but all that you desire can be achieved.",
    yesno: "The Six of Wands shows triumph, victory, and success in your endeavors. It suggests a person feeling exalted because of winning and finding the inspiration needed to move forward. Good news is the overall feeling in the presence of this card. The answer is yes."
  }, {
    id: 28,
    name: "Seven of Wands",
    image: "./assets/images/rider-waite-deck/28.jpg",
    keywords: "Coping and Resistance · Courage · Long-term successes · Perseverance · Strength",
    general: "You almost certainly have great reserves of courage, and the perseverance to see yourself through difficult times. You may not be aware you possess these qualities, but you will find yourself needing them soon. Expect conflicts, possibly small, but more likely significant. It is not certain where they will arise, but there is no doubt you possess the ability to overcome your adversaries.",
    past: "Despite slow progress, your determination and sustained efforts will lead you steadily forward. Do not give up.",
    present: "There is a great conflict approaching, but do not fear. Through courage, you will overcome this hurdle and experience a major change in your life as a result.",
    future: "Continue to believe in yourself. The odds may be against you but you have the power to beat them. The courage to fight on and accept challenges will lead you to a bright future.",
    yesno: "The Seven of Wands represents long-term success due to the strength it takes to overcome obstacles and being able to take on calculated risks. Using courage to stand up for yourself and what is best is what this card is all about. The answer you are seeking is yes."
  }, {
    id: 29,
    name: "Eight of Wands",
    image: "./assets/images/rider-waite-deck/29.jpg",
    keywords: "Hasty actions · Journey and Travel · A Journey or Flight · Motion · End to a delay",
    general: "Prepare yourself for an abrupt increase in the pace of your life. Things are about to get very busy. They good news is that any projects you begin will progress quickly, you will experience few delays, and the conclusion is likely to be successful. This card is also good news for relationships, although it raises the possibility of needing to travel for relationships. All things considered, this is a good card to find in your spread, as long as you are willing to buckle down and get to work.",
    past: "There are past goals that will not be able to move your forward. Think of a change that will bring you the most happiness. The struggle which has been occupying you will pass and a brief peace will follow.",
    present: "Exciting news will arrive to break the calmness of your present. The discomfort is necessary to remove you from your motionless present.",
    future: "A new venture will bring you future success, but you must be ready to make the right choice in a sudden decision.",
    yesno: "The Eight of Wands stands for some sort of journey or travel. It suggests events that will move quickly and opportunities that are set to arrive unpredictably. While overcoming obstacles, it shows and end to some sort of delay or blockage in your life. The answer to your question is most likely yes."
  }, {
    id: 30,
    name: "Nine of Wands",
    image: "./assets/images/rider-waite-deck/30.jpg",
    keywords: "Afraid · Cautious · Defensive · Impermanent Security · Inner strength",
    general: "The Nine of Wands is a bittersweet discovery in your spread, as it suggests both struggles ahead and the capacity within you to overcome them. Your life is probably comfortable at the moment, but there are also likely signs of trouble in some of the less critical aspects of your personal or professional life. Your inner strength will be called upon to maintain the current situation, and then to move forward when progress becomes possible for you.",
    past: "The struggles you have already experienced have granted you some stability in the present. By evaluating the reactions of others, your progress has been made smoother but this tactic will not lead to sustainable ease.",
    present: "Some encouragement from a friend or loved one will help you overcome the challenge you face.",
    future: "There are inevitable conflicts approaching in the future, but you can overcome them. In order to succeed, rely on your inner strength and do not sacrifice your values for the sake of short term gains.",
    yesno: "The Nine of Wands shows determination and courage under fire. However, it also indicates a need for being cautious and defensive in struggles that are yet to come. There is nothing that suggests a more positive or negative outcome in these matters, and thus, the answer is maybe."
  }, {
    id: 31,
    name: "Ten of Wands",
    image: "./assets/images/rider-waite-deck/31.jpg",
    keywords: "Burdens · Challenges · Intense pressure · Oppression · Overcommitment",
    general: "If the Ten of Wands appears in your spread, you are likely working too hard, or taking on more burdens than you should. It can indicate both eTencessive workloads in pursuit of your goals, or as a result of attaining them.",
    past: "The strength that you've developed over years of struggle will lead you to the solution of your current problem. The negativity you have recently let go of will allow you to form a new philosophy.",
    present: "Bear down and see the challenge through to the end. If you have been disconnected from someone close to you, expect an opportunity to reconnect.",
    future: "By focusing your energy in one direction and consolidating your efforts, success will be easier to achieve. You will have the chance to achieve your desires, but you must first reach your lofty goals.",
    yesno: "The Ten of Wands is a card highly associated with feeling an intense pressure and being over burdened in some area of your life. Other possible things suggested by this card are feelings of being trapped, opressed, or having no control over your circumstances. With an overall negative tone, the answer is no."
  }, {
    id: 32,
    name: "Page of Wands",
    image: "./assets/images/rider-waite-deck/32.jpg",
    keywords: "Adventurous · Ambitious · Energetic and Active · New beginnings · Skilled",
    general: "A vital indicator, the Page suggests good news coming to you from or about a youthful individual. If the card is describing you, personally, it indicates you possess boundless energy, deep loyalty, and youthful love of learning. It may also point towards a new project you will soon be undertaking.",
    past: "The prospects of recent work has energized you to seek financial gains or to begin new creative projects.",
    present: "Good news is coming. It will infuse joy into your life.",
    future: "A new phase of your life will begin after you receive an intense flash of inspiration. This inspiration will be brought about by good news, progress in your field, or career advancement.",
    yesno: "The Page of Wands is an energetic, lively, and fearless youth who possesses a can-do attitude and a hands on approach. This card represents being adventurous and ambitious in overcoming fears and starting new projects using your skills and courage. The answer that you seek is yes."
  }, {
    id: 33,
    name: "Knight of Wands",
    image: "./assets/images/rider-waite-deck/33.jpg",
    keywords: "Challenging · Determination · Foreign travel · Leader · Unpredictability",
    general: "The Knight of Wands is a maverick's card, and it may be associated with you if you are given to spontaneity, shifting your positions quickly. This may lead some to see you as capricious, but most will enjoy your energy. This card can also signify change for you, likely in the form of travel, or a change in your environment. Be aware, it may well come on you suddenly!",
    past: "The root of your recent desires for change is your curiousity and intuition. The conflicts you have faced at work have influenced the outcome of events around you.",
    present: "A spontaneous decision will lead you to make a long journey or a permanent relocation. Your desire will be achieved in an unexpected way.",
    future: "There are new challenges approaching, based on a hasty decision. It may or may not have been your choice, but if overcome, the challenges will lead you to happiness and a fulfilling life.",
    yesno: "The Knight of Wands is an ambitious, energetic, and determided leader. Although there are challenges associated with this card, embracing them as something positive to come is suggested. Even though the changes are unpredictable, believing in yourself and having courage is best. Your answer is yes."
  }, {
    id: 34,
    name: "Queen of Wands",
    image: "./assets/images/rider-waite-deck/34.jpg",
    keywords: "Career-oriented · Hard worker · Honest · Independent and home-loving · Thoughtful",
    general: "The Queen of Wands is associated with an outgoing and friendly personality, indicating you are extroverted but self-contained. An independent streak may contrast with your strong attachment to your close friends and family. Depending on its position in your spread, this card may also refer to someone close to you who you can rely on.",
    past: "Patience is one of your virtues and it has helped you create comfortable living situations with those around you. You have made wise decisions and this ability to think soundly will help you in the future.",
    present: "A loving friend will give you helpful advice. This ally may be a woman, but no matter their identity, show gratitude and return the favor.",
    future: "By following the advice of a close female influence, you will achieve success. Your homelife will be fulfilling and without intense conflicts. You and your loved ones will be content with your environment.",
    yesno: "The Queen of Wands is a lively, passionate, and independent woman. She suggests a person who is career-oriented and successful. Honest, thoughtful, and confident, the presence of this card shows someone seeking positive self-development, and the answer associate with it is yes."
  }, {
    id: 35,
    name: "King of Wands",
    image: "./assets/images/rider-waite-deck/35.jpg",
    keywords: "Authority figure · Financial gain · Honest and trustworthy · Mediation · Professional",
    general: "The King of Wands may signify an upcoming financial windfall for you. It can also represent an association with a masculine authority figure, a leader and arbitrator. You may find yourself aided in solving a dispute. Be open to the advice of those with more experience than yourself.",
    past: "The new ideas that you incorporated in the past are going to open up opportunities in the present. The ideas have given you momentum that inspires and encourages others.",
    present: "You will succeed if you gain help promoting your ideas. There will be increasing inspiration to help others around you.",
    future: "The future will bring you success in your professional life. Good investments and prudent spending will outweigh the risks you take and the strong conviction you have shown will grant many opportunities.",
    yesno: "The King of Wands is a voracious, determined, and confident authority figure. He represents some sort of expansion, establishment of something in your professional life, or financial gain along with success. He is a positive presence, likely to bring along positive outcomes. The answer is yes."
  }, {
    id: 36,
    name: "Ace of Cups",
    image: "./assets/images/rider-waite-deck/36.jpg",
    keywords: "Abundance · Creativity · Intense relationship · Satisfaction · Success",
    general: "The Ace of Cups signifies the beginning of period of strong emotional health for you. Expect copious joy, happiness, and love to surround you during this time. Existing personal relationships may strengthen, meaningful new ones are likely to form. If marriage is in your future, you are likely to lay the foundations for it during this time.",
    past: "There have been numerous occasions that prove your creative talent and ability to succeed in your efforts. By being passionate and intensely focused, you have allowed for greater productivity.",
    present: "Good news is going to bring joy and extreme satisfaction to your life.",
    future: "The difficulties you face in the future will take a toll on your emotions, but in the end, will bring about abundant joy. Remembering this natural balance will bring you great rewards.",
    yesno: "The Ace of Cups represents overall satisfaction throughout all different areas of your life. It predicts success and abundance through use of good intuition and creativity. New relationships or possibly a birth or pregnancy could be associated with these positive outlooks. The answer is yes."
  }, {
    id: 37,
    name: "Two of Cups",
    image: "./assets/images/rider-waite-deck/37.jpg",
    keywords: "Commitment · Friendship · Love · Partnership · Relationship",
    general: "The single resounding theme associated with the Two of Cups is partnership. What sort of partnership is less clear, but you are in the past, present, or future, part of a powerful one. This partnership will involve absolute trust and commanding respect. It may, of course, be a particularly emotional love affair, but it could just as easily be a deep and abiding friendship. The exact nature may be revealed by the rest of the spread, or it may not. It will be a source of happiness for you, though, a presence in your life you can count on at every turn, and whose well-being will be as important to you as your own.",
    past: "You have recently made a friendship or partnership that will bring you great rewards in the future. This connection will be meaningful for years to come.",
    present: "A loving union or close partnership will begin soon. Through commitment and dedication, this relationship will bring you great rewards, even if they are distant.",
    future: "Be on the lookout for a partner that will facilitate the achievement of your goals. It should be someone like you who can understand your ambitions and priorities.",
    yesno: "The Two of Cups shouts about love, positive relationships, and togetherness. It suggests a life full of close bonds, good friendships, and mutual love and respect therein. This card encompasses all happy, positive, loving feelings. The answer it is providing to you is yes."
  }, {
    id: 38,
    name: "Three of Cups",
    image: "./assets/images/rider-waite-deck/38.jpg",
    keywords: "Abundance · Celebration · Creativity · Entertainment · Gathering",
    general: "This card is both a portent of celebration and cause for it. It tells of great happiness in the future for you, and not of the passing kind, but secure joy which will last and be shared with those around you. Commonly associated with the completion of a meaningful project, or, even more likely, a birth.",
    past: "Long dormant talents are beginning to influence your life and the work you have done is beginning to influence your future. You may find richer rewards by investigating more experiences than you have previously.",
    present: "There is abundant energy gathering around this moment that signifies you are approaching a new phase of life.",
    future: "The desire to help other people will factor greatly into your considerations and you will take a greater joy in a significant role among your community. A full life lies ahead of you, to be celebrated by the ones who love you.",
    yesno: "The Three of Cups brings with it an abundance of love and joy. It suggests happy gatherings or celebrations and success in various aspects of your life. It is associated with loving celebrations and close relationships, and it means that the answer you seek is yes."
  }, {
    id: 39,
    name: "Four of Cups",
    image: "./assets/images/rider-waite-deck/39.jpg",
    keywords: "Boredom · Disappointment · Dissatisfaction · Re-evaluation · Tedious",
    general: "Apathy is the most insidious of evil. If its influence remains unchecked you may lose yourself, and not even realize what you have lost. This card is a strong warning that you must break out of your current cycles. Seek out causes or people to care and fight for. Make new goals, and then seek out new paths to reach them. Now is the time to take risks, as the price of failure is far less than the cost of no longer seeking success.",
    past: "You are discontent and nothing is changing to influence this. Your desire for change will be the most powerful impetus for the world around you to change. Take a new approach in order to transform your circumstances.",
    present: "Do not be afraid to move forward. Instead, fear becoming overly content. Seek new paths in order to progress on new levels.",
    future: "There will be long delays before you achieve your goals. Do not lose faith and keep your eyes facing forward. Make your plans and do not lose sight of the exciting rewards you desire.",
    yesno: "The Four of Cups is an indifferent card showing a sense of apathy, boredom, and even disappointment. It could mean that you need to re-evaluate some area of your life or possibly that you are just settling for where you are and with opportunities having been missed. There is no clear answer right now."
  }, {
    id: 40,
    name: "Five of Cups",
    image: "./assets/images/rider-waite-deck/40.jpg",
    keywords: "Avoidance · Detachment · Loss · New hope · Regret",
    general: "This card is a dark omen. Like the rest of its suit, it is bound your emotions, and it brings with it a warning of loss and disappointment. Expect a setback in your life, almost certainly emotional. While this may be emotional, it may be a project or goal you are particularly invested in, emotionally. In certain positions it might also refer to events of the past which continue to cause regret or heartache. The only solution is optimism; this too shall pass.",
    past: "The urge to try something new is a result of a disappointment or dissatisfaction you have experienced. Your current sadness is an expression of these failed expectations.",
    present: "Explore any alternatives paths that you discover. But if you avoiding the truth, it will be difficult to create any sustainable satisfaction.",
    future: "An error on your part will lead you to a regretful situation. Be ready to repair the damage you have caused and more importantly, to forgive yourself.",
    yesno: "The Five of Cups is a regretful card full of sadness, loss, and despondency. It could be a sign of not appreciating what you have in life or possibly avoidance of something yet to come. The disappointment and discontent associated with this card provide an answer of no to your question."
  }, {
    id: 41,
    name: "Six of Cups",
    image: "./assets/images/rider-waite-deck/41.jpg",
    keywords: "Apology · Past associations · Reconciliation · Reminiscent · Return",
    general: "The Six of Cups is rooted deep in the past, but it is also a card closely bound to your happiness. It suggests that your family, your old friends, perhaps even past lovers, are in the process of adding greatly to the joys in your life. This card may also refer to past efforts, labours of love, and personal projects rewarding you, usually in an emotional sense, rather than financial.",
    past: "The past has brought you many rewarding experiences of love and success. Do not linger too long on what is past, and move forward with your achievements.",
    present: "A reward that is the result of your past actions will come to you presently. By making a new friend or strengthening a relationship, you will find a great amount of commonalities.",
    future: "To enhance your future, you must build upon the virtues of your past. It is not enough to have succeeded before, you must improve upon your capabilities. A deeply rooted desire will require some evolution to achieve.",
    yesno: "The Six of Cups says something by the way of reconciliation and leaving the past behind. It could mean some sort of apology or returning to the past to unlock skeletons from the closet. There is a sense of relief and moving forward with its presence, and the answer you seek is likely yes."
  }, {
    id: 42,
    name: "Seven of Cups",
    image: "./assets/images/rider-waite-deck/42.jpg",
    keywords: "Confusion · Dreams and ambitions · Speculating · Decision · Temptation",
    general: "This card speaks strongly to your inner self. It is trying to tell you something about your unconscious or the realms of your imagination. Your hopes, dreams, and unrealized aspirations are all fair game to the Seven of Cups. It speaks of a deep confusion, or a lack of understanding of your true motivations by your conscious mind. It is time to look carefully at your own motivations and reexamine your goals, but it is also a risky time to act upon your conclusions.",
    past: "You have lost a lot of time chasing the many conflicting interests in your life. Do not be misled by daydreams and fantasies; pick a practical goal and start working.",
    present: "You will receive a surprising reward for your usual mental and creative activities.",
    future: "The inability to decide will slow your progress. Being open to change will help, but also a constant effort to determine what is true will keep you moving forward. Be honest with yourself.",
    yesno: "The Seven of Cups symbolizes confusing decisions, wishful thinking, and temptation due to a lack of morality. Delusional ambitions and poor choices are associated with this card. It brings a definite feeling of pessimism and negativity. The answer is no."
  }, {
    id: 43,
    name: "Eight of Cups",
    image: "./assets/images/rider-waite-deck/43.jpg",
    keywords: "Abandonment · Avoiding · Changes in lifestyle · Leaving / Going · Personal development",
    general: "The Eight suggests that there is stability and security in your life, but at a personal cost. You are probably unfulfilled by your current life. Depending on the rest of your spread, it may be a strong push for you to move on, and find the courage to strike out in a new direction. You will have to look closely at your work, your relationship, and your own beliefs to identify the source of your ennui, and then decide if you are willing to set aside some of your life's stability in order to find happiness.",
    past: "Your ability to earn money through determination and hard work will be necessary in the future. Your direction has been uncertain, but your heart tells you to keep seeking. The change you seek can take any form.",
    present: "You are going to experience something completely new, travelling great distances either in thought or location. There are big changes coming.",
    future: "Maintain an open mind and every journey that you take will yield life changing results. Personal success and accomplishing your goals will lead you to your greatest joy.",
    yesno: "The Eight of Cups shows some degree of change happening in your lifestyle. It brings feelings of despondency, indifference, and avoidance. It could indicate a need to give up, leave, or turn away from something in your current life. The melancholy feeling associated with this card suggests no."
  }, {
    id: 44,
    name: "Nine of Cups",
    image: "./assets/images/rider-waite-deck/44.jpg",
    keywords: "Complete · Fulfilled · Generous · Pleasure · Satisfaction",
    general: "This card is a very powerful positive indicator for you! It represents a lasting or powerful contentment in your life. While nothing is permanent, somewhere along your life's path you can expect to be truly happy. It is heavily tied to creative endeavour and good wishes for the future.",
    past: "The source of true happiness is your soul attaining peaceful balance. The efforts you have spent will bring your reward. Stay strong and keep working.",
    present: "Your emotional and material well-being are at hand. Look to your friends for advice and support, but recognize that you will find fulfillment.",
    future: "The goal you have set for yourself is down the road a ways. Stay true to your desires and you will reach the destination you seek. Balance your heart and mind to find a true calling.",
    yesno: "The Nine of Cups shows feelings of joy, satisfaction, pleasure, and overall contentment. Its presence is indicative of a bright future brimming with good times, bliss, and a period of your wishes all being granted. The answer you are looking for is yes."
  }, {
    id: 45,
    name: "Ten of Cups",
    image: "./assets/images/rider-waite-deck/45.jpg",
    keywords: "Abundance · Achievement · Commitment · Family · Happiness",
    general: "You can expect to attain some long goal if you find the Ten of Cups in your spread. This card is, like the rest of the Cups, imbued with emotional undertones. It may signal the mending of bridges between friends or family members you were once close to, if there has been a rift. You may also find that it symbolizes your own inner emotional turmoil being resolved. In reference to marriage it is usually indicative of lasting emotional bonds.",
    past: "By taking confidence in your direction and following your deepest convictions, you have been propelled forward. This commitment and your comfort with authority have allowed room for recognition and success to manifest in your life.",
    present: "A new undertaking is about to begin for you. This task, event, or journey will bring about the beginning of a long lasting friendship. Do not miss this opportunity.",
    future: "The potential for financial success may present itself through some aspect of property ownership. Either find domestic happiness or gain prestige in public work. Despite the difficulty, balancing both at once is possible.",
    yesno: "The Ten of Cups represents perfect harmony, abundance, and happiness. It suggests perhaps personal or family dreams coming true and an overall sense of satisfaction and security in life. Positive achievements and emotional stability ahead of you, the answer you seek is yes."
  }, {
    id: 46,
    name: "Page of Cups",
    image: "./assets/images/rider-waite-deck/46.jpg",
    keywords: "Announcement · Birth · Creative ideas · Good news · Message",
    general: "The Page of Cups, if it refers to you in your spread, suggests an introspective nature, inclined towards art, and possessing a kind heart. You may let credit you deserve pass you by out of shyness. The card may also be indicative of someone, likely overlooked, in your own life who is in a position to aid you in pursuit of a specific goal. Although somewhat dependent on its position in your spread, the Page is generally the bearer of good news.",
    past: "There is an idea you have already had that can be developed further for greater results. Your awareness of the obstacles before you will lead you to an understanding of the best ways around them.",
    present: "Good news will reach you and remind you of the importance of a fresh outlook on life. See the humour in life and remember the healing power of laughter.",
    future: "Be prepared for an upcoming opportunity. It will pass you by too easily if you are not ready to seize it for yourself. The emotional struggles you pass through will teach you how to love more deeply and intimately.",
    yesno: "The Page of Cups is a gentle, artistic, dreamer-type messenger. He brings with him announcements of good news and messages of new, serene beginnings. All dealings with this card are of a positive nature, and the answer it represents is yes."
  }, {
    id: 47,
    name: "Knight of Cups",
    image: "./assets/images/rider-waite-deck/47.jpg",
    keywords: "Arrival · Creative · Invitation · New opportunities · Proposal",
    general: "The Knight of Cups encourages you to remember that victory is not just an exercise in strength of arms, but can be achieved through cleverness and a savvy mind. He can also be given to flights of wild fancy, though, so you may also interpret him as a warning to maintain your focus. New initiatives in your life are likely on their way, and you must remember to seek novel paths to accomplish goals, but also not lose sight of where you are going.",
    past: "Your strengths have been your intellectual capacity and self-determined will power. Being caught slightly off-guard by the new directions and ideas of others is natural to your unique perspective.",
    present: "An important offer or invitation will arrive suddenly and unexpectedly.",
    future: "Staying focused and following your most passionate beliefs will lead to progress towards your goals. You will find peace in deep, meaningful connections with others.",
    yesno: "The Knight of Cups is a romantic and compassionate dreamer bringing along new opportunities or some sort of positive invitation. He represents self acceptance and an arrival to finding the proper path for your life. The answer you are looking for is yes."
  }, {
    id: 48,
    name: "Queen of Cups",
    image: "./assets/images/rider-waite-deck/48.jpg",
    keywords: "Intuitive · Mature, Sensitive Woman · Spouse · Virtuous · Wise",
    general: "Sensitivity and an affectionate nature are traditionally associated with the Queen of Cups, who is the emotionally open balance to the King. Despite her open nature, you will still find her influence to be largely passive. Particularly for men, her presence is a reminder to stay in touch with the emotional aspects of their character. You should take her presence a gentle hand seeking to show you the power of your own inner aspects, whose power may be obscured by their quiet nature.",
    past: "You have achieved self-awareness by balancing all aspects of your personality. The success you desire is not here yet, but will arrive if you continue to deepen your inner knowledge.",
    present: "Possibilities to your life will be revealed by the influence of a powerful woman. She may challenge or inspire you, but whatever she does will lead you to valuable insight.",
    future: "Seek assistance or advice from your loved ones, looking especially to the feminine wisdom around you. Your journey will be determined by your emotional considerations, regardless of your professional success.",
    yesno: "The Queen of Cups is a sensitive, quite, and virtuous woman who represents seeking and channelling a transformation within. She suggests a person who is a good listener and a loving counselor. Like her counterpart, the King of Cups, her presence is neither positive nor negative, and she brings an unclear answer to your question."
  }, {
    id: 49,
    name: "King of Cups",
    image: "./assets/images/rider-waite-deck/49.jpg",
    keywords: "Compassionate · Good advice / Helpful · Integrity · Mature, Authoritative Man · Spouse",
    general: "The King of Cups is the worldly and calm projection of authority. Find him in your spread is most likely a reference to someone else who will aid you in achieving your goals. This person may seem unconcerned, even distant, but their motivations are pure. Whatever advice they give will be important to you and should be considered in your own deliberations. If it does refer to you, personally, it shows an inner strength and tightly disciplined control of emotions.",
    past: "A concern from your past will revisit you. If you have been in need of help, it may be a good idea to seek professional guidance.",
    present: "Someone who is greatly capable of aiding you will appear in your life. Take their advice and do not hesitate to seek support.",
    future: "In order to bring about a state of peacefulness, seek advice. You will not find balance on your own, so seek out a powerful ally to guide you.",
    yesno: "The King of Cups is a compassionate, warm, and gentle voice of reason. He is an authoritative man with strong intuition and vast spiritual knowledge. This card represents being able to make decisions by channelling experiences and being able to give good/helpful advise. Neither positive nor negative in nature, the answer is unclear."
  }, {
    id: 50,
    name: "Ace of Swords",
    image: "./assets/images/rider-waite-deck/50.jpg",
    keywords: "Achievement · Advantage · Advantage · Mental focus · Victory",
    general: "The Ace of Swords is, like all of the Aces, the purest embodiment of its suit. In relation to your personality or your actions it implies a strong element of focus, determination, and an intellectual capacity. It may suggest change through warring forces, possibly internal; conflicts of not necessarily overt reasoning regarding inner consciousness, keep energetic to triumph.",
    past: "You have fought in the name of good, adding your intense energy to an idealistic cause. The events of the recent past have set unchangeable events in motion.",
    present: "You are entering a new phase of your life and everything is going to change. The causes and results of the change are not certain, but this period will reveal many things to you.",
    future: "Putting your creative thought in to action may require some courage, but you will be able to overcome the longest odds if you desire.",
    yesno: "The Ace of Swords represents victory through having mental strength and achievement. Justice, clarity, and creative thinking are all associated with this card. A brilliant idea could be just around the corner, or perhaps it is some sort of divine inspiration toward creativity. The answer is likely yes."
  }, {
    id: 51,
    name: "Two of Swords",
    image: "./assets/images/rider-waite-deck/51.jpg",
    keywords: "Balance · Conflict resolution · Decisions · Peace of mind · Prejudice",
    general: "Like crossed blades, the Two of Swords represents a balance of forces. Not necessarily an absence of struggle, but an equal distribution of force in opposition. It may indicate you are in a position to mediate a conflict, or it may instead suggest you are caught in the middle of a dilemma with no clear outcome. The resolution of this state will likely bring peace for you.",
    past: "Being honest about your past will help you to make a difficult choice. The conflict that you have been experiencing will be resolved by a new approach.",
    present: "There is a conflict that will lock up your energies in the effort to resolve it. By overcoming indecision, you will take deliberate action to decide the resolution.",
    future: "The difficult situations that lay ahead of you must be overcome immediately, so do not delay or hesitate. Bring about the best possible ending by acting honestly and with honourable intentions.",
    yesno: "The Two of Swords symbolizes conflict resolution and decisions that must be made. However, the conclusions are likely through seeking inner peace and coming to a compromise. While this card suggests a general peace of mine, it leans neither toward yes or no. Thus maybe is the answer."
  }, {
    id: 52,
    name: "Three of Swords",
    image: "./assets/images/rider-waite-deck/52.jpg",
    keywords: "Fresh beginning · Loss · Pain · Separation · Suffering",
    general: "The presence of the Three of Swords in your spread suggests significant pain in your life. This pain is likely caused by or the result of conflict, perhaps due to disrupted partnership or friendship. This pain may be part of a new beginning, but you must face your pain honestly to overcome it.",
    past: "There is a great emotional or physical pain that you are still nursing. Letting go of accountability may allow you to embrace the opportunity to create something new provided by the recent destruction of something you loved.",
    present: "You will soon experience an intense emotional upheaval. This period of suffering will lead you to a better future.",
    future: "The path ahead of you is being cleared to make room for something new. It is your decision how to make use of the opportunities in store.",
    yesno: "The Three of Swords shows the presence of pain and suffering either through an emotional loss, the end of an important relationship, or heartbreak through separation. The emotional disturbances and mental anguish that come along with this card portray an answer of no to your question."
  }, {
    id: 53,
    name: "Four of Swords",
    image: "./assets/images/rider-waite-deck/53.jpg",
    keywords: "Delays · Healing · Rest · Sickness · Withdrawal",
    general: "Representing order and stability, combined with the tumultuous nature of the Swords, the Four of Swords offers your respite from the battles in your life. The peace may be temporary, but appreciate it while it lasts. It may point towards recovery from prolonged illness.",
    past: "The plans you have already made may not properly guide you through the changes coming. The shadow you have felt hanging over you will soon pass, and the warmth of your life will return.",
    present: "Organize and examine your thoughts in solitude. Your dormant qualities of inner strength and self respect will guide you.",
    future: "Take the generous time you have to plan the course of your future. There is no rush to decide what is best for you and the people you care about.",
    yesno: "The Four of Swords points toward some sort of sickness or withdrawal. However, it also brings with it rest, healing, and order. Other interpretations could be simply taking a needed break or calling a truce. The position of this card is fairly mild but overall positive. The answer is most likely yes."
  }, {
    id: 54,
    name: "Five of Swords",
    image: "./assets/images/rider-waite-deck/54.jpg",
    keywords: "Conflict · Defeat · Loss · Low self-esteem · Separation",
    general: "This card indicates conflict in your life. Worse yet, it is closely associated with defeat. It is likely that the defeat will be traumatic, and you will need to retreat and regroup. Your may have suffered injury to your pride or self-esteem, but the Five of Swords is also a warning of a potential to get caught in the cycle. Handle defeat with grace, move on, and success will come to you.",
    past: "The failures you have experienced are the result of your overestimations and inabilities. In order to succeed, you must be honest with yourself.",
    present: "An unrealistic attitude may cause you to experience defeat. Your mistake will cause pain. Be realistic in your expectations in order to assess and move past the conflict.",
    future: "Take your losses with grace and do not give in to despair; you can create victory from the results of any defeat.",
    yesno: "The Five of Swords suggests conflict, discord, and troubles to come. There could be a loss, defeat, or painful separation in the near future accompanied by feelings of brokenness and low self-esteem. Nothing associated with this card is of a positive nature, and thus, your answer is no."
  }, {
    id: 55,
    name: "Six of Swords",
    image: "./assets/images/rider-waite-deck/55.jpg",
    keywords: "A journey · Better future · Escape · Left over challenges · Travel",
    general: "Your mental focus can put you on track to leave your current troubles behind, leading to better times ahead. It is important to face your problems from a mental standpoint, thinking through them. There is still trouble ahead for you, but the worst is over.",
    past: "You have overcome a major hurdle while also staying true to yourself. The understanding and objectivity you have developed will lead you to a better future.",
    present: "There will be a change in your life for the better. A burden or challenge you will face may yield a new path.",
    future: "The challenges you face will eventually be overcome. The struggles are necessary to provide you with the growth you need to find your way to a better future.",
    yesno: "The Six of Swords is symbolic of a journey or escape into mental clarity. It suggests a better, positive future or possibly a period of calm straight ahead of you. Moving forward could require you to use your logic or natural intellect, but the end result is of a positive nature. The answer is yes."
  }, {
    id: 56,
    name: "Seven of Swords",
    image: "./assets/images/rider-waite-deck/56.jpg",
    keywords: "Avoiding confrontation · Failure · Incomplete · Theft · Unknown opponents",
    general: "Another card which indicates forces opposing you, the Seven of Swords points to there being a single source of your frustration. This is both positive, in that you may be able to identify that source and change your circumstances, and negative, in that this source may well be aware of you and deliberately sabotaging you. The road to your success does not lie in direct confrontation, however, but instead in guile. Instead of attacking the obstacles raised against you, find ways around them.",
    past: "It may be time to put some of your projects on the back burner in order to give more attention to more pressing issues. The plans you have made are not coming together as nicely as you hoped.",
    present: "The best way through a recent conflict will be through diplomacy and cleverness. Avoid overt confrontations.",
    future: "Your success in the future depends on your ability to overcome opposition. The strategy you choose will determine whether you suffer losses or come out ahead. Assessing the opposition will make your actions better informed.",
    yesno: "The Seven of Swords brings failure as well as obvious pessimism. It suggests the possibility of theft or not living up to your full potential in the future either due to unknown opponents or possibly because of mental procrastination on your part. The answer you are looking for is no."
  }, {
    id: 57,
    name: "Eight of Swords",
    image: "./assets/images/rider-waite-deck/57.jpg",
    keywords: "Constraint · Disillusioned · Frustration · Obstacles · Restrictions",
    general: "Some things in life are beyond your control, and the Eight of Swords suggests that you are being actively held back by some of them. This can something as personal as a bad boss or as sweeping as international politics. In any case, you are likely finding your options restricted at every turn, and may being experiencing rising frustration and anxiety. Your best course of action lies with the only thing you can control: You. Approach this situation with patience, and be ready to move when the situation changes.",
    past: "The desire to avoid confrontation stems from your aversion to causing others pain. This is an admirable trait, but may prevent you from acting on your best interests.",
    present: "The obstacles before you will only be overcome by your courage and patience. The demands of others are locking you up and restricting you from growing.",
    future: "Do not fear using your own judgment to determine the path for yourself. If you ignore your feelings and believe others over yourself, you will miss the importance chances to change your life.",
    yesno: "The Eight of Swords is a card showing the presence of obstructions and difficult obstacles. It shows a fear of failure as well as sheer bad luck. The frustration and constraint overriding the tone of this card points toward an answer of no to the question you are asking."
  }, {
    id: 58,
    name: "Nine of Swords",
    image: "./assets/images/rider-waite-deck/58.jpg",
    keywords: "Accidents · Paranoia · Depression · Grief · Mental anguish",
    general: "One of the more negative card to discover in your spread, the Nine of Swords foretells or describes a powerful mental anguish. The source of this anguish may well be within you, arising from you being too quick to cast a negative light on your actions or abilities. It may also arise from paranoia. Despite often being unfounded, your pain can take the form of sleeplessness, of fear, depression, loneliness and isolation. Beware pushing away those who are seeking to help you, and find the courage to reach out for help. Even if these feelings are based in reality, it may be difficult for you to clearly find a solution in your current state. Carefully consider the other cards in your spread, look for card associated with potential sources of aid and counsel.",
    past: "miss out on the present moment because of your stubborn disapproval of the past.",
    present: "The difficulty you have shouldered will soon be lifted from you. Your feelings of depression and mental distress must be dealt with.",
    future: "The standards you have set for yourself may be unreasonable and steer you towards self-loathing and disappointment. You must be able to forgive yourself and others in order to move past your negative feelings.",
    yesno: "The Nine of Swords is symbolic of worry, grief, and anxiety. It could mean a period of mental anguish, some sort of horrible accident, or many sleepless nights to come. A turn for the worse could be ahead of you, and you should beware of depression and thoughts of self-harm. No is the answer provided here."
  }, {
    id: 59,
    name: "Ten of Swords",
    image: "./assets/images/rider-waite-deck/59.jpg",
    keywords: "End · Failure · Mortality · New hope · Ruin",
    general: "The Ten of Swords is a cause for fear in any who believe in the power of the cards, and you should prepare yourself for whatever it portends. It is one of many cards which can represent disaster, but, alone among them, it is a disaster which cannot be avoided. It foretells not only a complete failure but an unavoidable one. What is more, the failure will not be small or easily overcome. This is not a fortune to be changed or avoided, only endured: If you stay strong, new dreams can be built from the ashes.",
    past: "By coming to terms with a sometimes bitter reality, you are learning that moving forward is the most important aspect of healing.",
    present: "The end of something important is about to occur, so be prepared to deal with the consequences. Nothing in life is permanent.",
    future: "Assess the direction you are headed. Beware following the opinions of other's, as this may lead you aware from your own truth. Seeing the world through pragmatic eyes will balance your optimism.",
    yesno: "The Ten of Swords shows a sudden ending or a negative outcome in some endeavour in your life. It could mean failure, ruin, or mortality accompanied by depression and feelings of being broken and crushed by the weight of the world. Harsh and negative, this card says no."
  }, {
    id: 60,
    name: "Page of Swords",
    image: "./assets/images/rider-waite-deck/60.jpg",
    keywords: "Aggressive · Challenging · Change · Intelligent · Vigilant",
    general: "Your personality may trend towards the stubborn and opinionated, if the Page represents you in the spread, but it is also indicative of strong analytical skills and an energetic nature. You have a predilection towards identifying the core of issues and accurately assessing your own stance on them. This will allow you to become an excellent negotiator. If the card refer to a situation, instead, prepare yourself to make many important decisions quickly. Trust in your reason and your judgment to navigate these difficulties.",
    past: "The abilities that lay dormant within you are being brought to the surface. The events of your past are leading you to activity, and the time to carve out your own path is at hand.",
    present: "There is unexpected news on its way. In order to benefit from the changes coming, you must rely on your intelligence and ability to adapt.",
    future: "There is a deep desire for change that is making you irritable and agitated. Seeking true independence of mind will lead you to a clearer perception of your motivation and others'.",
    yesno: "The Page of Swords is an intelligent, logical, and vigilant youth who brings along some sort of official news of change. While the changes could prove to be challenging, this card shows pretences of mental clarity and inner demons being settled and ridden from your life. The most likely answer here is yes."
  }, {
    id: 61,
    name: "Knight of Swords",
    image: "./assets/images/rider-waite-deck/61.jpg",
    keywords: "Conflict · Destruction · Domineering · Loss · Unexpected",
    general: "If you or someone close to you is represented by the Knight of Swords, beware. It is symbolic of a forceful personality, one which combines zealous dedication to success with razor-sharp intellect. However, whether in the form of a companion or your own inner nature, these same attributes can give rise to a formidable enemy. When it refers instead to your circumstances, the Knight suggests you are headed for turbulent times, which can be most successfully faced with decisive action on your part.",
    past: "The desire for change has been strengthening inside of you. Plan your future objectives but keep them to yourself.",
    present: "You gain the attention of a young upstart. A problem will be solved through the help you receive, but be prepared to deal with a new one.",
    future: "Your life's compass may be suddenly realigned by a drastic change in perspective. Look to your friends and loved ones for encouragement.",
    yesno: "The Knight of Swords is domineering and destructive. He represents taking control of a project or situation but in a ruthless manner. This card portends unexpected loss, conflict, and a need to establish your own ideas and beliefs. The negative tone of this card suggests an answer of no."
  }, {
    id: 62,
    name: "Queen of Swords",
    image: "./assets/images/rider-waite-deck/62.jpg",
    keywords: "A mature, perceptive woman · Independent · Loss · Pain · Separation",
    general: "The Queen of Swords represents a very perceptive individual, sharp-witted and professionally distant. You will most likely find her to be your aid and counsel, possibly a teacher. Not necessarily female, but likely to be, this person should be trusted and may take an interest in you, but that interest is unlikely to be romantic. A powerful ally, respect her intelligence and you will be rewarded with peerless guidance.",
    past: "Your strict idealization of perfection may be causing you stress or pain. By continue to uphold this ideal, you will make it impossible to achieve.",
    present: "Expect counsel from a sharp witted elder who may be a woman. It is possible to maintain your independence while accepting help from friends.",
    future: "Do not focus so intensely on your goals, as this may be constricting your ability to achieve them. Rely on your strong spirit to illuminate the bigger picture to you.",
    yesno: "The Queen of Swords is an analytical, independent problem-solver. She brings with her mental clarity or an end to something troubling in your life but not without a painful loss or separation. She is stoic and astute but gives nothing away as a positive or negative outcome. Maybe is the only answer."
  }, {
    id: 63,
    name: "King of Swords",
    image: "./assets/images/rider-waite-deck/63.jpg",
    keywords: "A Mature, authoritative man · Assertive · Authority · Government / Legal · Leadership",
    general: "The King of Swords represents the professional aspects of authority. Often associated with those in legal or business careers, he most likely represents someone who will aid you in one of these fields. This person may be assertive, or even seek to dominate you in their confidence that they know how best to aid you. While they may be friendly, their primary motivation is unlikely to be emotional.",
    past: "Your strength lies in your intellect. Looking ahead and taking authority into account will lead you to turn your collection of good ideas into reality.",
    present: "A figure of authority may help you set your plans in motion.",
    future: "There is opposition to your ultimate goals. Guile and your superior intellect will lead you past this destructive barrier. You will find fulfillment in organizing those around you as a leader.",
    yesno: "The King of Swords is an assertive, professional, decision maker with high intellect and a knack for leadership. He represents big decisions to come and a need to take control and set boundaries while making firm commitments to your goals. This card provides no clear answer, maybe at best."
  }, {
    id: 64,
    name: "Ace of Pentacles",
    image: "./assets/images/rider-waite-deck/64.jpg",
    keywords: "Emotional stability · Financial gain · Luck · Recognition · Success",
    general: "Aces always represent a new beginning in some form, and the Ace of Pentacles suggests a strongly positive one for you. Your life is about to enter a very productive period -- or at least a period which will see your work rewarded in good measure to the level of work you are willing to perform. This period will also see most of your relationship on stable ground, and, despite the hard work you may be doing, you will be very content with your situation.",
    past: "Your time has been well spent and you will eventually achieve the success you desire. The projects you have begun will pay off.",
    present: "Reassuring news will come to you. It may help you realize that you are on the appropriate path to receive the recognition and material rewards you deserve.",
    future: "You are destined for a major gain. Whether this be financial, emotional, or personal, there are spiritual blessings waiting for you.",
    yesno: "The Ace of Pentacles represents prosperity, financial gain, and successful endeavours ending in promotion. It brings with it good luck as well as emotional stability. This card is highly suggestive of a positive future and being able to attain your goals. The answer herein is yes."
  }, {
    id: 65,
    name: "Two of Pentacles",
    image: "./assets/images/rider-waite-deck/65.jpg",
    keywords: "Balance · Fluctuating Wealth · Juggling · Prudence · Transfer or Exchange",
    general: "The Two is, as always, bound up in the forces of change, and of balance. Like its brothers, the Two of Pentacles can mean good or ill, but it as a strong indicator that the status quo will be disrupted. There will be challenges in your future, but your fate is largely in your own hands in the sense that the final outcome depends own how you respond to these challenges. The suit of this card suggests your best outcome is one that can be reached through prudence and careful planning.",
    past: "You have been confronted by the difficulty of beginning something new. In order to succeed, you must learn to balance your old practices with your new.",
    present: "A change for the better will arrive via communicated information. You will receive some prudent counsel on the best course through your fluctuating states.",
    future: "Determining your most valuable strengths can help you create opportunities for yourself. There is a road out of your ambivalence if you think to find it.",
    yesno: "The Two of Pentacles shows movement, balance, and growth through change. It suggests possibilities of fluctuating wealth that will likely require some sort of juggling act and will bring with it both ups and downs. The workload will be heavy, and there is no clear answer provided by the presence of this card."
  }, {
    id: 66,
    name: "Three of Pentacles",
    image: "./assets/images/rider-waite-deck/66.jpg",
    keywords: "Excellence · Mastery · Satisfaction · Success · Teamwork",
    general: "If you can maintain a clear sense of purpose over the coming months, you are well positioned to see you hard work get the recognition it deserves. It is not guaranteed, but if you maintain your own pace, and it may tax your interpersonal skills, as you will need to rely and trust on others for the best outcome. That outcome will be worth your determination, however, not only providing material reward, but leading to a sense of lasting accomplishment.",
    past: "The time you have spent mastering your abilities has been a smart investment. Your confidence has grown and if you continue to nurture this self-assurance, you will succeed.",
    present: "The object of your present focus is due for expansion and elaboration. Your peers may be a useful tool to help you complete your goals.",
    future: "Your inner satisfaction demands a pursuit of excellence and a mastery of your craft.",
    yesno: "The Three of Pentacles is a card representing excellence and success. These things could be acquired through productive teamwork or being industrious. It relates directly to being a master of your trade and great career accomplishments. The answer to your question is yes."
  }, {
    id: 67,
    name: "Four of Pentacles",
    image: "./assets/images/rider-waite-deck/67.jpg",
    keywords: "Certainty · Possessive · Reliable · Security · Tenacity",
    general: "Perhaps through a gift or inheritance, or possibly through your own business acumen, you are on a path leading towards financial and material security. This will likely be a pleasant chapter of your life, wherein your emotional and spiritual needs are satisfied.",
    past: "Your ability for hard work and your dedication will bring you material success. A recent trade, proposition, or commercial venture is adding a deeper significance to your life.",
    present: "You will receive financial rewards for the effort you have shown. You will triumph, but this victory will be hollow if seen only as monetary gain.",
    future: "To maintain your financial security, avoid excess and stick to your strengths of reliability and resourcefulness. You can achieve leadership, power, and wealth, but only through great effort and sacrifice.",
    yesno: "The Four of Pentacles stands for security, stability, and the presence of elemental balance in your life. It suggests being smart and frugal with what you have and remaining on a strict budget but with the security of only positive outcomes. Moving forward will likely require tenacity. Your answer is yes."
  }, {
    id: 68,
    name: "Five of Pentacles",
    image: "./assets/images/rider-waite-deck/68.jpg",
    keywords: "Emotional or Financial troubles · Inadequacy · Poverty · Scarcity · Worry",
    general: "The Five of Pentacles can, depending on the rest of your spread, refer to financial matters, employment, or relationships. Unfortunately, it is a negative indicator for all of them, suggesting duplicity, loss of jobs, and the possibility of infidelity. This is a time for you to carefully evaluate what matters in your life and work out your priorities, such as whether your job or your relationship matters most. In order to mitigate the damage in some areas of your life, you may have to let some of the other fall away.",
    past: "A recent emotional or financial loss is weighing heavily upon you. Do not let your pride lead you away from the assistance of others.",
    present: "The hardship you face will be overcome, so do not give in to the feelings of inadequacy or insecurity that it has cause you.",
    future: "Your future holds a necessary change for you in order to find happiness and security. This change may be in direction or motivation, but it will show you that all struggles can be overcome.",
    yesno: "The Five of Pentacles indicates the coming of financial or emotional troubles or a period of bad luck. Worry, poverty, and setbacks are all associated with this card. These things could be due to a lack of belief or possibly losing your faith. The overall tone of this card is negative. The answer you are after is no."
  }, {
    id: 69,
    name: "Six of Pentacles",
    image: "./assets/images/rider-waite-deck/69.jpg",
    keywords: "Distribution · Donation · Favour · Prosperity · Solvency",
    general: "Success in your life is bound up to generosity. This may mean your prosperity will arise from your investment in others, perhaps a financial investment, or maybe advice and support for a friend. This card can also mean the reverse, that your success will arise from the generosity of someone else. The two are, of course, not exclusive, and drawing this card suggests you naturally lean towards benevolent acts and charity.",
    past: "Your fair consideration of others in the past will lead you to success in the present.",
    present: "Your fervour for life and faith in your own talents will be renewed. The joy of being able to help someone in need will illuminate the bigger picture.",
    future: "Keep in mind that the kindness of others is out of your control, but you are totally capable of bestowing favours on others. If you seek a favour, it may do well to give freely to others.",
    yesno: "The Six of Pentacles means success, prosperity, and generosity. It suggests financially helping others, giving donations, and selfless charity. There is positive favour and an overall sense of good fortune and happy payoffs in the future. The answer you seek is most likely yes."
  }, {
    id: 70,
    name: "Seven of Pentacles",
    image: "./assets/images/rider-waite-deck/70.jpg",
    keywords: "Business & Trade · Long-term success · Occupation · Perseverance · Wealth",
    general: "A balanced card by nature the Seven suggest you will avoid failure, but fall short of runaway success in an endeavour. Or, equally possible, that you will achieve your goals, but not in the time frame you had hoped for. You will face setbacks, and in order to succeed you will need to take care to avoid becoming too hesitant or timid. Progress may be slow or difficult, but it is possible.",
    past: "The delays in your projects have been affecting you, but do not lose hope. Your perseverance will lead you to success.",
    present: "The long period of hard work you are currently in will bring you much personal growth and achievement.",
    future: "Your path will be long, but the rewards will be great if you can continue without losing determination or vigour.",
    yesno: "The Seven of Pentacles represents perseverance in your occupation or business. It is associated with success but through slow, steady growth. It suggests that you will have to wait a long time for your reward and that perhaps your are not working at your full potential. There is no clear answer here."
  }, {
    id: 71,
    name: "Eight of Pentacles",
    image: "./assets/images/rider-waite-deck/71.jpg",
    keywords: "Apprentice · Career · Craftsmanship · New skills · Prudence",
    general: "If you are involved in any work requiring creative inspiration or craftsmanship, the Eight of Pentacles is a very positive card. This is doubly true if you are using skills you are still trying to master. This is as likely to be a hobby as your primary work. Unlike most of the suit, financial gain is not necessarily indicated, but a spiritual reward is. This is also not a guarantee, but rather a suggestion that if you are prudent and organized in your attempt, success is the likelier outcome.",
    past: "The skills you are mastering will lead you to success down the road. Continue developing and you will reach a moment of epiphany.",
    present: "By developing your talents, you will find success in your efforts. Investing in yourself now will lead to greater rewards later.",
    future: "The future holds a successful career or spiritual endeavour for you. The amount of acclaim you receive will depend on the amount of time you have spent determining and mastering your skills.",
    yesno: "The Eight of Pentacles is a card suggesting an improvement of skills and studiousness. It shows a desirable career and acquiring new skills just ahead as long as you use discretion and take a balanced approach. The outlook from this card is positive. Yes is your answer."
  }, {
    id: 72,
    name: "Nine of Pentacles",
    image: "./assets/images/rider-waite-deck/72.jpg",
    keywords: "Abundance · Financial security · Opulence · Prosperous · Wealth",
    general: "The Nine of Pentacles represents significant financial reward, but one borne of hard work and careful planning on your part; a just reward for prudent actions. It may also indicate that a time of hardship for you is ending and a counter-balancing time of pleasant living is at hand. On a less positive note, it also indicates a solitary individual, so you may still be searching for companionship, and lack people to with whom share your gains.",
    past: "The pleasure you have experienced was earned by your achievements. Though the rewards of a recent project are not yet obvious, you will receive abundantly for your work.",
    present: "The solution you have been seeking will arrive and relieve you of the stress associated with your problem.",
    future: "There are new challenges waiting for you to dispel your feelings of dissatisfaction. The void you are experiencing will not be remedied by the challenges, but the rewards will help you be content.",
    yesno: "The Nine of Pentacles stands for wealth and financial security. It could mean finally being rewarded for all of your efforts in business or important projects in your life. The presence of this card could mean financial and/or personal independence for you. The answer you seek is more than likely yes."
  }, {
    id: 73,
    name: "Ten of Pentacles",
    image: "./assets/images/rider-waite-deck/73.jpg",
    keywords: "Close relationships · Family · Fortune · Inheritance · Prosperous",
    general: "Your financial security and emotional well-being are both positively indicated by the presence of this card in your spread. This is only partially your own doing, however, as these positive aspects are inextricably bound up in your close relationships with friends and family. It may also foretell an inheritance.",
    past: "You have been prosperous and established a secure base by your ability to spend money wisely.",
    present: "You will receive a reward that is partially due to your efforts but also due to your position within your family. Carefully evaluate your own merits accordingly.",
    future: "An unexpected solution to a difficult financial problem will appear. The projects and ideas you are currently working on will be of benefit to future generations.",
    yesno: "The Ten of Pentacles shows the presence of stability, prosperity, and overall good fortune. This could all be due to having positive, close relationships or a tight-knit family as a foundation. An inheritance or discovery of treasure could await you, and your answer is yes."
  }, {
    id: 74,
    name: "Page of Pentacles",
    image: "./assets/images/rider-waite-deck/74.jpg",
    keywords: "Attentive · Motivated · Scholarship · Skillful · Studious",
    general: "The Page is always an intellectual card, and the suit of Pentacles is traditionally associated with introspection and conscientiousness, which may form the basis of your own personality. When acting as a portent, the Page brings good tidings for you or young people close to you, likely in academic or financial fields.",
    past: "The ambitions and idealism of your past will bring success from your newest ideas. You are in the process of developing a new hobby or occupation.",
    present: "There is news coming that portends the arrival of change. Although not immediate, prepare to evaluate the risks and rewards of new ventures.",
    future: "You will gain insight into your future if you remain attentive and studious of the signs around you. Everything you need to know is available now if you take the time to understand it for later.",
    yesno: "The Page of Pentacles represents a skillful, attentive, and studious youth who is both self-disciplined as well as a go-getter. He could indicate some sort of promotion or acquiring a new, enjoyable hobby in the near future. The overall mood of this card is positive and suggests that the answer is yes."
  }, {
    id: 75,
    name: "Knight of Pentacles",
    image: "./assets/images/rider-waite-deck/75.jpg",
    keywords: "Ambitious · Dependable · Faithful · Honourable · Thorough",
    general: "The Knight of Pentacles symbolizes the virtues of patience, honour, and dependability, and his presence in your spread may indicate you, too, possess these traits. An alternative traditional view is that he represents a young man, a dependable bearer of good news who will soon enter your life.",
    past: "The challenges of your past have set the stage for a promising future. Your dependability and responsible attitude make it a priority for you to do your work to the best of your ability.",
    present: "You will receive encouragement from a young person. The security you need to pursue your ambitions will arrive.",
    future: "Follow your routines to produce the best possible results. Through patience and sustained concentration, you can achieve the heights of your loftiest ambitions.",
    yesno: "The Knight of Pentacles is dependable, honourable, and trustworthy. He has undeniable common sense, incredible determination, and various skills that include exercising patience and being supportive of others. The presence of this card suggests positive things to come to those who remain faithful. The answer you are looking for is yes."
  }, {
    id: 76,
    name: "Queen of Pentacles",
    image: "./assets/images/rider-waite-deck/76.jpg",
    keywords: "Abundance · Financial help · Practicality · Prosperity · Wealth",
    general: "The Queen is a card steeped in the tradition of family, and reflects a person, usually a woman, who is financially adroit, and possess a very pragmatic, practical, nature. This person will come to your aid in some financial matter, most likely advice on how to better manage your money.",
    past: "You will be granted the opportunity to create a secure environment by the talents you have been developing. The help you give and continue to give to those in need will be a significant source of fulfillment.",
    present: "A feminine influence in your life will give you some practical advice. This advice will help you create abundant prosperity.",
    future: "Effectively utilizing your talents will lead you to financial success. Keep in mind your more practical behaviours and prosperity will find you.",
    yesno: "The Queen of Pentacles is a practical, organized, and reliable multi-tasker. She brings with her abundance and wealth but also requires an ability to love yourself and be unafraid of the change or journey that could lie ahead in order to achieve your goals. This card definitely points to yes."
  }, {
    id: 77,
    name: "King of Pentacles",
    image: "./assets/images/rider-waite-deck/77.jpg",
    keywords: "Confident · Reliable · Security · Success · Wealth",
    general: "The King of Pentacles embodies the mature and dependable aspects of maturity. Anyone represented by this card is tied to success and status. While it may refer to your own characteristics, the Kings most often stand in for other people in your life who can aid you. You can expect this person to value prudence of intelligence, and, if it represents an event, it may be a financial windfall or promotion.",
    past: "The cautious progress you have been making is leading you towards success. The advice you recently received will be helpful in achieving your goals.",
    present: "The idealism you have shown has made you confident and reliable, but it may do better to begin focusing on your financial security for a period. Consulting a professional or elder will help protect your efforts.",
    future: "You have intrinsic abilities in the fields of financial profit and material gain, even if you are not aware of them. The money you earn through your own efforts will bring rewards beyond material gain.",
    yesno: "The King of Pentacles is a reliable, confident, self-sufficient individual. He shows signs of success, wealth, and endless personal growth. Attaining your goals will likely require some self-exploration as well as a firm commitment on your part, but the outcome looks positive. Your answer is yes."
  }
];