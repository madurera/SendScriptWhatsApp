async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
[electrical buzzing]
[yelling in pain]
[breathing heavily]
[continues yelling]
[breathing heavily]
[yelling oscillating]
[distant yelling, yelling stops]
[gasps softly]
[muffled electrical whirring]
[whirring continues]
[rattling]
[powering down]
[distant yelling oscillating]
[electrical thrumming]
[distant yelling continues]
[muffled oscillating yelling]
[yelling stops]
[thud]
[electrical whirring]
[rattling]
[rattling stops]
[distant yelling]
[distant oscillating yelling continues]
[yelling stops]
[all grunt in unison]
[all breathing heavily]
[rattling and pulsing]
[breathing shakily]
[rattling intensifies]
[gasping]
[electrical throbbing]
Alert the queen.
[orchestral music playing]
[sizzles]
[horse snorts]
Hyah!
[orchestral music continues]
[breathing heavily]
PART 1
“DON’T COUNT ON IT, BATMAN”
[man] Bruce Vayne. Bruce Wayne.
[speaking Icelandic] Storm’s grounded choppers for six days. Where did he come from?
[Arthur speaks Icelandic] He said he climbed over the mountain.
[speaks Icelandic] Impossible.
[in English] Talk.
[Bruce] I believe there is a stranger. Comes to this village from the sea. He comes in the winter when the people are hungry. He brings fish. He comes on the king tide. That was last night.
[Arthur speaking Icelandic]
[in English] You have eyes, so see. Icebergs in the harbor. It’s four months since the last ship got through.
[Bruce] Well, this stranger doesn’t come by ship.
[speaking Icelandic]
[Bruce] There are enemies coming from far away. I need warriors. This stranger, others like him. I’m building an alliance to defend ourselves. It’s very important that I see this man.
If this stranger exists, he’ll give him your message. $5,000 American.
[Bruce] Look, I’ll give you $25,000 to talk to this man right now, outside.
[speaking Icelandic]
[laughing]
[villagers laughing]
[in English] How dare this dog speak to us like children. Ooh, magical man from the sea. We are poor, not stupid. Get out.
[Bruce] I’m sorry. Can’t do that. I’ll leave after we’ve spoken.
He said, “Get out.”
[Bruce speaks Icelandic] I don’t think so.
[both grunt]
[villagers exclaim]
[Arthur breathes heavily]
[Bruce] Arthur Curry. Also known as Protector of the Oceans. The Aquaman.
[birds calling]
[Arthur] So, let me get this straight. You do it dressed like a bat? Like an actual bat?
[Bruce] Worked for 20 years in Gotham.
Oh, that shithole.
[Bruce] When the fight comes, we’ll need you.
Don’t count on it, Batman.
[Bruce] Why not?
‘Cause I don’t like you coming here, digging into my business and getting into my life. I want to be left alone.
[Bruce] Is that why you do this? Why you help these people out here in the middle of nowhere? I’ve read the stories. Your good deeds you think no one sees. You’ll join us.
“Strong man is strongest alone.” You ever heard that?
[Bruce] You ever hear of Superman? He died fighting next to me.
My point exactly.
[Bruce] He believed we were stronger together. We owe it to him.
I don’t owe anyone anything. Dressed like a bat. You’re out of your mind, Bruce Wayne.
[woman singing folk song in Icelandic]
[women singing along]
[women continue singing]
Move over, Dusty.
[exhales sharply]
[Dusty whines]
[engine starts]
[Alfred] My God, Master Wayne, but this is cold. Maybe we can catch the next king tide in Jamaica? Might be a metahuman or two in Fiji. Costa Rica’s nice.
[Bruce] I found him. He said no.
[Alfred] So the draft stands at naught for two? Maybe a man who broods in a cave for a living isn’t cut out to be a recruiter. Hmm?
That’s $10, please.
[“Distant Sky” playing]
♪ Let us go now ♪
♪ My darling companion ♪
♪ Set out for the ♪
♪ Distant skies… ♪
Good morning, Miss Lane.
Jerry, hi.
Wow. You don’t miss a day, do you?
Like it here.
♪ They told us our gods would outlive us ♪
♪ They told us our dreams would outlive us ♪
♪ They told us our gods would outlive us ♪
♪ But they lied ♪
[light dramatic music playing]
[indistinct chatter]
[scanner beeps]
[guard] Excuse me.
[gunshots]
[guard groans]
[women scream]
[man 1] Move!
[indistinct shouting]
[people screaming, clamoring]
[man 2] Move it! Move it!
[man 3] No, mate, don’t shoot!
Move, move!
[man 1] Get the fuck over there!
Move! All of ya!
[clamoring continues]
[leader] Line them up along the wall. Keep them quiet.
[man 4] Keep quiet!
[man 1] Shut up! Shut up!
Shut them up too!
[leader] We’ll be making a statement shortly. Until then, if I see any movement, you’ll have a lot of dead kids on your hands.
[whimpering quietly]
[police radio chatter]
Should I take him?
[task force lead] Hold your fire. They’ve got kids in there.
[deputy] Yeah, he’s not bluffing, chief. St. Brigid’s had a school trip today.
[ancient lamentation music playing]
[people scream]
Quiet! Shut up!
[breathing heavily]
Down with the modern world. Back to the Dark Ages.
[all gasp]
[man 1] Quiet!
[beeping]
I said shut your fucking mouth.
[grunting]
[grunts]
[Wonder Woman] Who are you? The Lasso of Hestia compels you to reveal the truth. Now, who are you?
We’re a small group of reactionary terrorists who wanna turn back the clock in Europe a thousand years.
[Wonder Woman] Boring. Why the hostages?
We have no demands. We’re just stalling the police while we do it.
[Wonder Woman] While you do what?
[laughs] You’re too late. The countdown’s already begun. In a few minutes, four city blocks…
[imitates explosion]
…while the world watches. [laughs]
[continues beeping]
[breathes heavily]
[breath trembling]
[people scream]
[ancient lamentation music playing]
[all grunting]
[beeping continues]
[beeping stops]
[crackling]
[chuckles]
[people whimpering]
[people screaming]
[people whimpering and screaming]
No!
[leader] Like lambs to the slaughter.
[metal clangs]
[ancient lamentation music playing]
[metal clangs]
[grunting]
[bullet clatters]
[people whimpering]
[panting] I don’t believe it.
[Wonder Woman] Believe it.
[people exclaiming]
[metallic humming]
[officers groaning]
[officers clamoring]
[car alarms blaring]
[indistinct police radio chatter]
[Wonder Woman] Is everyone all right? Are you okay? Good. It’s okay. It’s okay. It’s over. You can stand up. It’s all good. It’s over now. Are you okay? You okay? Good. Are you okay, princess?
Can I be like you someday?
[Wonder Woman] You can be anything you want to be. Come on. Let’s go.
[ancient lamentation music playing]
[horse whinnies]
[electrical pulsing]
[sighs]
Any changes today?
No, my Queen.
[Menalippe] The Mother Box has awoken, yet nothing has happened.
It has slept for thousands of years since the First Age. Why did it wake at all?
[Mother Box powers down]
[Menalippe gasps softly]
This is the first time it’s gone quiet since the crack appeared.
Maybe it’s going back to sleep.
Evil does not sleep. It waits.
[Mother Box whirring]
Something is coming.
Prepare for battle!
[all grunt in unison]
[Mother Box whirring]
[whirring intensifies]
[all grunting]
[Amazons yelling]
[pants]
[Menalippe] Amazons, on your marks! Ready!
[electrical humming]
[parademons chirping]
[parademons snarl]
Defenders. They have failed 100,000 worlds. They always fail. I’ve come to enlighten you to the great darkness. I will bathe in your fear.
Daughters of Themyscira, show him your fear!
[Amazons] We have no fear!
[groans]
Gather the legions! Go with her!
You must seal the cage!
Go!
Phillipus!
[Amazons shouting and grunting]
[yelling]
[groans]
[Amazons yelling]
[Steppenwolf] No!
[growling]
[screams]
[Menalippe] Behind you!
Ahhh!
[breath trembling]
Epione.
Honor us. It’s right. Seal it.
Ready the hammers!
[Amazons grunt in unison]
[yelps]
Seal it now!
[grunting]
[Amazons grunting]
[both grunt]
[panting]
[yelling]
[soft ancient music playing]
Guard it with your life.
Yes, my Queen.
[Hippolyta] Keep it moving.
[Venelia] Hyah! Hyah!
[panting]
[ancient lamentation music playing]
[wind whistling]
[gasping]
[Amazon grunts]
[all grunting]
[horse whinnies]
[grunts]
[horse whinnies]
[Hippolyta] Hyah!
[panting]
[Steppenwolf growls]
[grunts]
[growling]
[Amazons grunting]
[continues growling]
[Amazons yelping]
[grunts]
[growling]
[parademons screeching]
[grunting]
[grunts]
[grunts]
[Steppenwolf growls]
[grunting]
Got it! Go!
Hyah!
[Steppenwolf growls]
[both yelp]
[Euboea groaning]
[panting]
[Steppenwolf] Oh, noble Queen. Why do you fight? You can’t save her. You can’t save any of them. The great darkness begins.
[Menalippe in distance] Amazons!
[Amazons yelling]
Yes, we will find the others.
Draw!
[all grunt in unison]
Loose!
[all grunt in unison]
[boom]
[all yelp]
[horses whinnying]
[labored breathing]
[ancient lamentation music playing]
[wheezes weakly]
[Amazons urging horses]
He’s gone back to his universe.
[Hippolyta] No. He’s gone to the lands of men to find the other two boxes. We have to light the ancient warning fire.
The fire has not burned for 5,000 years. Men won’t know what it means.
[Hippolyta] Men won’t. She will.
PART 2
THE AGE OF HEROES
[whooshing]
[parademons chittering]
[booms]
[metal creaking]
It’s toxic. That’s good.
[booms]
Go! Follow the scent of the Mother Boxes. Find the missing two. Once they are found, The Unity will be formed. This world will join the others. He will be pleased. He will see my worth again.
[Bruce] Hey. Anything on that kid from the liquor store?
[Alfred] Possibly.
[Bruce] “Possibly.” If I had a dollar for every “possibly.”
Yeah, it would make you even more insufferable. Facial scan might have got a hit on him, our disappearing man. One Mr. Barry Allen from Central City. Might be another false positive, you’ll have to give me a little time to confirm.
[Bruce] We don’t have any more time.
Master Wayne, you’ve been working as if there’s no tomorrow to build this team of people you can’t even find.
[Bruce] I found one. I found two, including Diana.
Just because Lex Luthor says the planet’s in danger of attack?
[Bruce] This has nothing to do with Lex Luthor. It has to do with him. I made a promise to him on his grave. I spent a lot of time trying to divide us. I need to bring us together and make this right.
Well, it’s been some time since Luthor’s warning. No attacks. No barbarians at the gate.
[Bruce] Maybe these barbarians don’t use a gate. Maybe they’re already here. Keep looking. What else do you have?
Lab’s all yours, Howard.
[Howard] 11:30. Early night for you, Silas.
Yes, early night. Tell your family I said hello.
[Howard whistling tune]
[soft rustling]
[Howard] What the… Jesus.
[electricity crackles]
[muffled clang]
[chittering]
[Howard’s scream echoes]
[upbeat drum music playing]
[ancient lamentation music playing]
The Arrow of Artemis. It will reach the lands of men.
Sky torch, hero beacon, scatter the darkness. Burn as you burned in days before. Show her the darkness before the daylight of history. Warn my daughter that war has come and protect her.
[ancient lamentation music playing]
Return to me, Diana.
[man] What did you do this weekend, Diana?
[Diana] Nothing very interesting.
[man chuckles] That’s all you ever tell us.
[Diana] [chuckles] What can I do? I’m not that exciting.
You might as well disappear when you walk out of here.
[man 2 speaking French]
[Diana] [in English] Again?
What is it?
[Diana] Now what?
Budget cuts, tomb raiders. Now add to the list “arson.”
[reporter on TV] Yes, good morning from the isle of Crete.
[man 2 complaining in French]
[reporter in English] As you can see behind me, an enormous bonfire is burning. This fire has been burning through the night. We’re now into the morning and we are at least five miles away. And we can still see it burning as we speak. This has baffled locals and government authorities alike here at this historical site of the so-called shrine of the Amazons. Now, locals and government officials are baffled as to what may have caused this.
[Diana] Invasion.
[indistinct chatter]
Ryan.
Hiya, Doc.
[Silas] Is the…
No damage to the electron-laser.
Uh, Dr. Silas Stone?
Yeah.
Ryan Choi?
[Ryan] That’s us.
Um, who did this? Did they steal anything?
They took whatever was in here.
That? Oh, that wasn’t stolen. Was it, Dr. Stone?
No. That was misplaced a while ago.
Object 6-1-9-8-2. Department of Defense Archives.
[Silas] Mmm-hmm.
What was it?
I don’t know.
[investigator] You don’t know?
I don’t know, which was why I was studying it.
What’s your rank, Doctor?
Ryan, would you, uh, do the honors?
Sure. Okay.
Thanks.
Civilian. STARLABS is a private contractor. We work for the DoD. We advise them on xeno-science.
“Xeno-science”?
Alien technology.
[doors whirring]
For example, the Superman ship.
[investigator] Eight people never signed out of the lab last night, Doctor. Cleaning staff, guards, a few of your research scientists. They were abducted.
Are you sure?
Witness saw it all. He escaped. He’s here in quarantine now, working on an ID sketch. Any idea who or what that might be?
[EKG beeping]
[puts keys down]
[Silas] The box isn’t safe here. Victor, they came looking for it at the lab. People were taken by some kind of monster or something.
[Victor] You know a lot about monsters, don’t you? Especially how to make ’em.
[indistinct chatter]
[birds calling]
[indistinct radio chatter]
[ancient lamentation music playing]
[soft dramatic music playing]
[waves crashing]
[grunting]
Mayday! Mayday, mayday! My hull is breached. I’m going down.
[grunting]
[yelps]
Mayday! Is there anybody out there?
[grunting]
Ahh!
[grunting and straining]
[light dramatic music plays]
[indistinct conversation]
[patrons exclaim]
[Arthur] Whiskey.
[slow indie rock song playing faintly on speaker]
[Arthur] Tell him to respect the storm next time. … It’s on him.
[“There Is a Kingdom” playing]
♪ The starry heavens above me ♪
♪ The mortal law within ♪
♪ So the world appears ♪
♪ Through this mist of tears ♪
♪ There is a kingdom ♪
♪ There is a king ♪
♪ And he lives without ♪
♪ And he lives within ♪
♪ There is a kingdom ♪
♪ There is a king ♪
♪ There is a king ♪
♪ And he is everything ♪
[water bubbling]
[muffled boom]
[Vulko] King who would be man. Son of a human father and Queen of the Seas. All the time I’ve wasted trying to keep the promise I made to your mother.
[Arthur] Are you finished, old man?
[Vulko] You never sleep in the same place twice, yet you keep coming back here.
I like it. It’s quiet.
It’s your inheritance. You’re the rightful king of Atlantis. Our people suffer.
Your people. A brutal, petty, superstitious race.
Is the surface any different?
Nobody calls me King of the Surface. What do you want, Vulko?
[Vulko] Guards near the stronghold have been disappearing. Snatchers from above.
[Arthur] Talk to King Orm.
[Vulko] Your brother?
Half-brother.
He’s trying to fan the flames of war with the surface. He lies. The snatchers have come from the dark place. They’re looking for it. The Mother Box our people guard is not safe. Go to the stronghold of Atlantis. Protect the box. The time has come. Take up your mother’s trident.
[clatters]
You can’t turn your back on the world forever, Arthur. Above or below.
[water gurgling]
[parademons screech]
[Steppenwolf] DeSaad. DeSaad! I call to thee.
Steppenwolf, have you begun the conquest?
[Steppenwolf] This world is divided. They are a primitive species. Unevolved and at war with one another. Too separate to be one. Their free will must be ripped from them, like the other worlds. Given absolution in one glorious belief, to serve him.
The Mother Boxes?
I have found one of the three. The one that woke and called to me. The other two still sleep, but the parademons feel their presence. They fly, they search, they take prisoners who carry the scent, while I build a stronghold in the name of his glory.
Yes. Mighty Steppenwolf, who might have sat here by the side of the great one. But undone by his self-pride.
DeSaad… I fall before you. Let me make a plea to him that I may come home after I take this world in his name.
You betrayed him. Your own family.
I saw my mistake. I slaughtered those who sought his throne.
You still owe the great one 50,000 more worlds. He will hear your plea when you pay your debt.
The Mother Boxes will be found and united. No protectors here. No Lanterns, no Kryptonian. This world will fall, like all the others.
For Darkseid.
For Darkseid.
[Bruce] You know, I paid millions of dollars for this building’s security.
[Diana] You got your money’s worth. Took me almost a minute to disable it.
[Bruce] Hi there.
A new toy?
[Bruce] Prototype troop carrier.
[sighs] I once knew a man who would have loved to fly it.
[Bruce] The best minds at Wayne Aerospace couldn’t make it fly.
But you can?
[Bruce] I have no choice. I need more range and I need more cargo. I think there’s an attack coming.
Not coming, Bruce. It’s already here. From what I’ve learned, they are things from another universe. They serve a dark power. An old power.
[Bruce] What do they want?
[Diana sighs] To invade. To conquer. They came here once before, long ago. A great armada appeared in the sky, laying waste to all who opposed it. The leader of the invaders was a being called Darkseid. A name cursed and feared in every universe. Darkseid was met in battle by Earth’s defenders. The old gods, men… Atlanteans before their descent into the sea… Amazons before their betrayal and enslavement and guardians from the stars. Their histories had taught them not to trust each other, not to hope for an alliance. To fight apart.
[door hisses]
[Darkseid breathing heavily]
[yells]
[Diana] As Darkseid waged war on Earth, he found a secret there. A power hidden in the infinity of space. He called forth mystics who worshipped and controlled three objects… the Mother Boxes.
[Bruce] Wait, wait, wait. “Mother Boxes”?
[Diana] Indestructible living machines, made from a science so advanced, it looks like sorcery. To conquer, three boxes have to synchronize and join together into The Unity. The Unity cleanses a planet with fire, transforming it into a copy of the enemy’s world. All who live become servants of Darkseid. Alive but drained of life. Parademons.
[horse whinnying]
Amazons!
[Amazons shouting]
[Atlanteans yelling]
With me!
[all yelling]
[Zeus growling]
[parademons screeching]
[Amazons yelling]
[Diana] But before The Unity could synchronize, the defenders of Earth attacked and fought as one. Amazons alongside Atlanteans. Zeus and his son Ares alongside the guardians from the sky. A golden Age of Heroes fighting together to defend life on Earth.
[men yelling]
[man groaning]
[Darkseid grunting]
[Darkseid grunting]
[groans]
[Atlantean king yells]
[growls]
[yells]
[Darkseid grunts]
[straining]
[both growling]
[yells]
[Darkseid groaning]
[grunting]
[Atlantean king yells]
[Amazons grunting]
[yells]
[yelling]
[parademon screeching]
[Diana] They did what no world had ever done. Sent the enemies back into the stars.
[yells]
[Diana] The three Mother Boxes never synchronized. The Unity never came to pass.
[all yelling]
[Diana] But, in their retreat, the boxes were left behind on Earth. They grew weak. Dogs without masters falling asleep, awaiting their return. Fading from the view of the enemy, anonymous among a trillion worlds.
[Mother Boxes pulsing]
[Diana] The defenders of Earth made a vow. Men, Atlanteans, and Amazons. Each would enshrine and guard one of the three sleeping Mother Boxes according to the rites and rituals of their culture in case a box should ever wake again to call out to the planet Apokolips to return and conquer the only world Darkseid had ever lost.
[Diana] Something woke the box my people guard. It called out to the dark place… to one of Darkseid’s conquerors. The enemy is here.
[Bruce] If he’s here, where is he?
[Diana] He’ll be searching for the other two boxes. Hiding until he has all three. Until he’s ready.
[Bruce] Then we have to be ready. You, me, the others.
[Diana] They said the Age of Heroes would never come again.
[Bruce] No, it will. It has to.
[Diana] The others. Where are they?
PART 3
BELOVED MOTHER, BELOVED SON
[Barry] Am I late? No, I’m so late. I’m very late. Oh, hey, buddy. Hey. Oh. No.
[barking]
[yelps]
[woman] Okay, bye. Okay.
[Barry] I’m so sorry.
[chuckles]
[Barry] I’m late.
Are you, uh…
[Barry] I’m… I’m so sorry I’m so late. I didn’t mean to be so late. I’m me and I’m here and I’m so sorry I’m late. Essentially, the bus didn’t come, then the bus did come, but then there was this old woman counting change for the fare, like, nickel, penny, nickel, penny. Like, jeez Louise, let this woman on the bus. She’s 107 years old, these are some of her last few moments of life.
Resume.
[Barry] Resume.
[sighs]
[engine stalling]
[sighs] Come on.
[engine stalling]
[sighs]
Come on.
[Barry] From the French, of course. “Resume,” I believe, is a past participle of…
[Barry] Uh, wow. That’s no good. It’s like, what lives in my pocket, right? “Paper monster hungry.” Uh…
[burger thuds]
[grunts]
[straining]
[engine continues stalling]
Come on. Supposed to be friends now.
[straining]
[engine starts]
Yes.
[Barry] Central City College, I’m a criminal justice major.
[dog daycare owner] You said you had experience walking dogs.
[truck engine revving]
[yelps]
[tires screeching]
[gasps]
[brakes squealing]
[imperceptible]
[metal crunching]
[electricity crackling]
[“Song To The Siren” playing]
♪ Long afloat ♪
♪ On shipless oceans ♪
♪ I did all my best to smile ♪
♪ ‘Til your singing eyes and fingers ♪
♪ Drew me loving to your isle ♪
♪ Did I dream you dreamed about me? ♪
♪ Were you here when I was forced out? ♪
♪ Now my foolish boat is leaning ♪
♪ Broken lovelorn on your rocks ♪
♪ Here I am Here I am ♪
♪ Waiting to hold you ♪
[car alarms blaring]
[breathing heavily]
[electricity crackles]
[tires screeching]
[car alarms continue blaring]
[gasps]
[people murmuring]
[dog barking]
[Barry] Oh, gosh, I hope everyone’s okay. See, in times of crisis, for dog work, I always bring a meat snack. ‘Cause it makes them feel calm. ‘Cause you never know what’s going to happen in this city. I mean, oh, my gosh. Right? I start on Monday?
[Atlanteans grunting]
[parademons snarling]
[Atlantean grunts]
You have been near a Mother Box. The scent is on you. Where is it?
No son or daughter of Atlantis will ever tell you.
[Steppenwolf growls]
[groans]
Our people have guarded the Mother Box for thousands of years.
[gasps]
[chitters]
I will never betray my own people.
[gasps]
You already have.
[somber music paying]
[Diana] This was taken in the deepest trench on Earth. He must be an Atlantean. A water-breather.
[Bruce] He was breathing air when I talked to him.
Mixed-blood, then. He said he’ll fight with us?
[Bruce] More or less.
More more or more less?
[Bruce] Probably more less.
He said no?
[Bruce] He said no.
[sighs] Atlanteans can be tricky. My people went to war with them once. I’m not sure we can trust him.
[Bruce] Diana, if we’re gonna do this, you’re gonna need to be open to more things that we didn’t… you know… I’m sorry.
[Diana] That’s okay.
[Bruce] Sorry.
[Diana] My fault.
[Bruce] Don’t worry about it. [clears throat]
[Diana] Let’s…
[Bruce] It happens.
[Diana] so…
[Bruce clears throat]
[Bruce] This is the third person. [clears throat] Disappears for 1/30 of a second here. One frame of video, see?
[Diana] Barry Allen. Central City. Go to him. I’ll work on number four. Organic and biomechatronic body parts.
[electricity crackling on video]
[Diana] He’s a cyborg.
[boys chattering]
[coach] Ready!
[players] Break!
[crowd cheering]
[whistle blows]
[Victor] Three… eighty… set… go!
[dean] Your son may be captain of the football team and a certified genius, Mrs. Stone…
[Elinore] Dr. Stone.
…but that doesn’t mean he can hack into our system to change his friend’s grades.
[Elinore] Sarah’s family lost their house this year. How could that child pass her classes? Victor helped her ’cause he’s got a good heart. What did you do to help her?
[crowd cheering]
[operatic choir music playing]
[crowd cheering]
[crowd cheering loudly]
[imperceptible]
[Elinore] Your father…
[Victor] Mom, Mom, don’t.
[Elinore] He got held up at the lab.
[scoffs]
[Victor] Okay. He always does.
[Elinore] He wanted to be here.
[Victor] You always say that. Ma, you gotta stop making excuses for him. You’re just as busy as he is, but you still make the time.
[Elinore] [sighs] He just has difficulty showing it, but… I know he’s proud of you. We both are, Victor. Hey, hey, hey. With everything I know you can do today, I can’t wait to see what you’re gonna be tomorrow.
[vehicle horn blaring]
[tires screeching]
[car crashes]
[doctor] Dr. Stone, I’m sorry, your wife didn’t survive. I’m afraid your son won’t either.
[crying]
[voice breaking] I won’t let you die.
[sobbing]
I won’t allow it. I won’t allow it.
[Silas] Victor. Victor, you’re not stuck in here. You still have a life ahead of you. Your mother would have wanted you to live that life.
[Victor scoffs]
[Victor] If you were there, Mom would still be alive.
[Silas] All right, look, you don’t have to give me a second chance, but give yourself one. If you can’t stand looking at me, try listening.
[door opens and closes]
[Silas over tape] What you can do now, Victor. Your physical strength is just the tip of the iceberg. The tip of the tip.
[metal clanking]
[blasters powering up]
[exhales nervously]
[gasps]
[grunts]
[breathes nervously]
[whimpers]
[Silas] In the world of ones and zeroes, you are the absolute master. No firewall can stop you. No encryption can defy you. We’re all at your mercy, Vic. From our power grids to our telecommunications, everyone’s lives are controlled and dominated by complex digital networks that will bend without effort to your will. The fate of the world will literally rest in your hands.
[rumbling]
[Silas] Its entire nuclear arsenal, you could launch with a thought.
[grunting]
[bear growling]
[metal clanking]
[Silas] The world’s monetary systems and its complex interactions will seem as easy to manipulate for you as a child’s plaything.
[grunts]
[Silas] The question… No, the challenge won’t be doing it. It will be not doing. Not seeing. It is the burden of this responsibility that will define you and who you choose to be.
[woman] Now, make a wish.
[child blows air]
One more time.
Good job. Wave to Grandma!
Hi, Grandma!
[squeals] What?
[gasps]
[laughs] Oh, my God! Oh, my God! Oh, my God. Oh, my God. Oh, my God!
[Silas] Victor… Victor, these are the words and deductions of a scientist. That’s how I’ve been speaking to you. Now, [continues over tape] let me speak to you from my heart, not as a scientist, as a father.
[parademon screeches]
[man] Hey. Hey, you!
[hand blaster charging up]
[siren wailing]
[parademon snarls]
[hand blaster powers down]
[Henry] Because you are holding yourself back. You’re going in circles, man. Holding down three dead-end jobs, going on four. Where do you even find the time?
[Barry] I make the time. I just need one more gig…
[Henry] Barry.
[Barry] …then I’m gonna pay for my own tuition.
[Henry] You can’t.
[Barry] Like I always said I would.
[Henry] You cannot keep doing this to yourself.
[Barry] Okay. I really don’t wanna talk about this again. Please, we have 10 minutes.
[Henry] And this is all to pay for a criminal justice degree, huh?
[Barry] Yeah.
[Henry] For what?
[Barry] Huh, let’s see. As I talk to my father, who’s still in prison for the murder of my mother, which he didn’t commit. Yeah, how did I get interested in criminal justice? I can’t remember.
[Henry] Oh, boy.
[Barry] This path has clearly chosen me, Dad.
[Henry] Give me your hand, man. [sighs] I want you to listen to me, Barry. I want you to listen to me, because I mean this. I want you to give all that up. And I want you to stop coming to see me. I am a drag on your life.
[Barry] [sighs] Okay. Um… Please don’t ever say that to me again. Please.
[Henry] Hey, you know what criminal justice would be for me? My son not wasting his life. You can be whatever you wanna be. You’re brilliant, man. Absolute best of the best. I can’t sit here and watch you run in place in Central City for some old dude who’s not going anywhere.
[Barry] Dad, that’s not true.
[prison guard] It’s time.
[Barry] That’s not true.
[prison guard] Let’s go, Allen. Allen!
[Henry] I want you to make your own future. You’re living in the past. Make your own future.
[prison guard] Open gate.
[Barry] Great.
[gate buzzing]
[Barry] “You’re living in the past. Make your own future, Barry.”
[prison guard] Clear. Close the gate.
[gate closes]
[train horn blaring]
[locks door]
[opens electric panel]
[system powers up]
[Bruce] Barry Allen. Bruce Wayne.
[Barry] You said that like it explains why there’s a total stranger in my place sitting in the dark, in my second favorite chair.
[paper rustles]
[Bruce] Tell me about this.
[Barry] This is a person who looks exactly like me, but who is definitely not me. Somebody… I don’t know. Hippie, long hair. Very attractive Jewish boy. Who drinks milk, I don’t drink milk.
[Bruce] I know you have abilities. I just don’t know what they are.
[Barry] My special skills include viola, web design, fluent in sign language, gorilla sign language.
[Bruce] Silica-based sand quartz fabric. Abrasion resistant, heat resistant.
[Barry] Uh, yeah, I do competitive ice dancing.
[Bruce] It’s what they use on the space shuttle to prevent it from burning up on re-entry.
[Barry] I do very competitive ice dancing. Look, man. I don’t know who you are, but whoever you’re looking for, it’s not me.
[electricity crackles]
[exhales sharply]
[Barry] You’re the Batman?
[Bruce] So, you’re fast.
[Barry] That feels like an oversimplification.
[Bruce] I’m putting together a team. People with special abilities. You see, I believe enemies are coming.
[Barry] Stop right there. I’m in.
[Bruce] You are? Just like that?
[Barry] Yeah. [hesitates] I need friends.
[Bruce] Great. Great.
[Barry] Can I keep this?
[Barry] It’s like this layer of dimensional reality, and it seems to manipulate space-time. I call it the Speed Force. Causes me to burn a tremendous amount of calories so I am just a black hole of snacks. I am a snack hole. How many people are on this special fight team?
[Bruce] Three, including you.
[Barry] Three? Against what?
[Bruce] I’ll tell you on the plane.
[Barry] Plane? What are your superpowers again?
[Bruce] I’m rich.
[engine starts]
[tires screeching]
[car horn blares]
[kettle whistles]
[whistling stops]
[Alfred] Oh, Miss Prince, let me do that.
[Diana] No, that’s okay. I can do it myself. [sniffs] Would you like to have some?
[Alfred] Uh, no, thank you. If you put the water in first.
[Diana] Of course.
[Alfred] So we don’t scald the tea. Yes.
[Diana] Great.
[Alfred] No, that’s probably enough tea.
[Diana] All right. Are you sure you don’t wanna have some?
[Alfred] I won’t, thank you. And then leave it to mash.
[Diana] I will. I will, definitely will. Uh… What are you working on?
[Alfred] It’s a gauntlet lined with specialized polymer solar cells.
[Diana] Wow.
[Alfred] Here, let me show you. We borrowed this from the Kryptonian scout ship.
[Alfred chuckles]
[Alfred] Oh, maybe you should, uh… a fraction. Thank you, thank you.
[Diana] Of course.
[buzzing and crackling]
[Alfred] Ah. Ah, now, let’s see how that did.
[device beeps]
[Alfred] Ha! Yes. Not to be sneezed at.
[Diana] A gauntlet that captures and dissipates energy.
[Alfred] It’s Master Wayne’s idea.
[Diana] Maybe you should work on a lasso, too? In black, of course.
[Alfred] Oh.
[Diana] [sighs] All right. Victor Stone.
[typing]
[static]
[Diana] Something is not working.
[Alfred] Mmm.
[system warbling]
[Alfred] Looks like you have a date, Miss Prince.
[car door closes]
[electricity crackles]
[Victor] Why are you looking for me, Diana?
[Diana] You know who I am.
[Victor] I know more than you can possibly imagine.
[Diana] Then maybe you already know I need your help. The world does.
[Victor] Fuck the world.
[Diana] You’ve obviously been through a great deal. I can’t begin to imagine what. But whatever happened to you, you have gifts now.
[Victor] Gifts? What part of this looks like a gift to you?
[Diana] We need you, Victor. And maybe you need us.
[Victor] I don’t need anyone. Not anymore.
[Diana] I told myself the same for a long time. I lost someone I loved once. I shut myself off from everyone. But I had to learn to open back up again. The truth is, I’m still working on it. And if you asked to meet me… you’re working on it, too.
[grunting]
You were right about the metal sample from the Superman ship. When we bombard it with X-rays from the electron-laser, look what happens.
[computer beeps]
[laser whooshing]
[Silas] 3.5 million kelvin.
The inner core of the metal becomes superheated. Hot, dense matter. You’re looking at the hottest thing on Earth. Exact words I said to my prom date. She dumped me anyway.
[Silas] Yeah.
[laser shuts down]
Hey, Doc, do you think Batman is connected to the object the CID is looking for? You know, 6-1-9-8-2?
[Silas] No… I don’t.
[Silas] Oh, Victor.
[parademon snarling]
[gasps]
[parademon screeches]
[both grunting]
[officer] All right! Let’s go!
[female officer] Commissioner Gordon?
[officer] Come on!
Your messages.
[officer 2] Hey, hey!
[thug grunting]
Don’t have to see the sky to know it’s a full moon.
Half of Gotham’s reality-challenged community showed up. Say they saw flying monsters by the harbor.
You were right, Ma. Police Academy. What’s wrong with dental school?
“Attacked by a flying vampire.”
“Looked like a giant bat with huge fangs.”
On a possibly related note, sketch of the suspect in the abductions at the lab across the harbor. Looks like…
I know what it looks like, Crispus. Come on, you think he fights criminals for 20 years here and then he goes to Metropolis and kidnaps eight people? I’ll talk to him tonight.
How, Jim?
How do you think?
[parademons chittering]
[Silas whimpering]
[Silas yelps]
[scientist] Silas?
[Silas] Hey, hey. Hey, hey!
[Barry] Oh, my goodness.
[Bruce] Where’s the cyborg?
[Diana] His name is Victor. We met, spoke. Give him time. You must be Barry. I’m Diana.
[Barry] Hi, Barry. I’m Diana. That’s not right. Great.
[Diana] [sighs] So, this is us.
[Bruce] Yeah, this is us.
[Barry] Oh! Awesome! It’s the Bat-Signal. That’s your… Oh, sorry. [softly] That’s your signal. That means we have to go now.
[Bruce] Yeah, that’s what that means.
[Barry] It’s so cool. [chuckles]
[Mother Box pulsing]
[Mera trilling]
[Atlantean soldier trilling]
Commander Mera, I told the king the perimeter guards were taken. He won’t send reinforcements. He says all the reserves are needed in the rebel regions.
He’s as shortsighted as he is cruel. [sighs] All right, take what men we have left and form a phalanx around the Mother Box.
[loud thud]
[trilling]
[pulsing intensifies]
[trilling]
[growls]
[Atlantean soldier screams]
[roars]
[Atlantean soldier screams]
[laser firing]
[growls]
[Mera groaning]
You can’t escape.
[Mera] I’m not trying to.
[Mera grunts]
[Mera groans]
[grunts]
[both grunting]
[portal booms]
[Mera] Vulko told me you would come. The firstborn of beloved Queen Atlanna. Wait. Please. I knew her.
Well, that makes one of us.
[Mera] My parents died in the wars. She took me in.
What a saint.
[Mera] You dare speak of Queen Atlanna that way?
Your queen left me on my father’s doorstep and never gave me another thought.
[Mera] Your mother left you to save your life. You cannot imagine how it hurt her. What it cost her. But you’re not a defenseless child now. It would have been her responsibility to follow that monster to the surface and stop him. Now, it’s yours.
[scoffs]
[Victor gasps softly]
[sirens wailing at distance]
[Mother Box sizzles]
Yes.
[Mother Boxes warbling]
[DeSaad] Steppenwolf, tell me what you’ve learned.
[Steppenwolf] Two boxes found and awake.
With the combined power of the two Mother Boxes, I’ve been able to finish the stronghold’s defenses.
Where is the third Mother Box?
The parademons sense its presence and search for the third.
They have taken prisoners who carry its scent.
Go.
Interrogate the prisoners.
Find the third.
They will tell me what they know, or I will rip it from them.
[thunder crashes]
[thunder crashes]
[electricity crackles]
How many of you are there?
Not enough.
[Gordon] Dozens of witnesses all over Gotham.
Description matches the suspect in the Metropolis abductions.
Parademons.
Okay.
The demons must have caught the scent of a Mother Box.
[The Flash] At the lab.
They carried people away to find out what they know.
So the eight may still be alive.
[Victor] Nine.
[The Flash gasps] Oh.
The head of STARLABS was taken tonight.
Wow, okay. So, another scientist.
So, how do we find him?
There must be a nest nearby.
I plotted all the sightings in Metropolis, Gotham.
No discernable pattern I can see.
The lines on the map don’t converge.
On land.
These lead back to Stryker’s Island, between the two cities.
These are air vents.
They all lead down to the tunnel
to a Metropolis project that was abandoned in ’29.
[Wonder Woman] The nest could be there.
[The Flash] Uh, is he coming with us now, because we’re not all gonna fit in your car.
I have something bigger.
Do you really think that…
Oh, wow, they just… They really just vanish, huh?
Oh. That’s rude.
[rats squeaking]
[door whirs]
[dramatic rock music playing]
We’re close.
The scent of the enemy.
Of absence.
Darkness.
Death.
Where are we, Alfred?
[Alfred over radio] Stryker’s Island.
You should be directly under the venting tower for the tunnel.
Now look to your left, you’ll see a staircase to the machine room.
Thermal scan shows a cluster of people there.
[Batman] That’s it.
Let’s go.
[dramatic rock music resumes]
[The Flash] Right. Is there… Is there a plan?
Either of you?
[Wonder Woman] Don’t engage alone.
We do this together.
I heard about you.
Didn’t think you were real.
I’m real when it’s useful.
[Steppenwolf] I grow tired of your silence.
Now tell me, where is the Mother Box?
[parademons chittering]
[hostages whimpering]
Please. We have families.
Then you have weakness.
Steppenwolf.
Okay, I’m guessing that’s the bad guy.
Good guess.
I’m really, really missing Superman right now.
Circle to the other side.
We’ll surround them and surprise him.
[shuddering]
You have been near a Mother Box.
The scent is on you.
I don’t know what you’re talking about.
Where is it?
[Silas] Leave him alone!
He… He doesn’t know.
[hostages exclaim]
[man] Wait, please, please!
[hostages whimpering]
[Silas grunting]
[Steppenwolf] You carry the scent, too. But stronger.
I will die before I tell you.
You’ll die if you don’t.
No!
[all exclaim]
Victor.
[Steppenwolf] Kill them both.
[weapon whirs]
[Wonder Woman grunts]
Ah, Amazon.
But not like your sisters.
Stronger.
[grunts]
[ancient lamentation music playing]
[Steppenwolf sighing]
[Wonder Woman grunts]
[growls]
[grunts]
[grunting]
Amazon. [grunts]
Hold!
This one will be mine.
I belong to no one.
[both grunting]
[Batman grunting]
Guys, this is not together.
Help get those people out of here.
I’ll make sure these things follow me. [grunts]
[groans]
[grunts]
[Cyborg] Everybody, move!
A little quicker.
Are you good?
Yeah.
I’ve got this. Keep moving.
[The Flash] This way.
[growls]
[both grunting]
[snarls]
[screeching]
[Steppenwolf grunting]
[Alfred] The energy is dissipating.
My gauntlet worked!
Celebrate later, Alfred. I need the Nightcrawler.
Thought you’d never ask.
Crawler’s on the way. Initiating remote mode.
[both grunting]
[engine revving]
Thank you, Alfred.
Don’t mention it.
[Steppenwolf chuckles]
[groaning]
[Steppenwolf grunts]
No!
Whew.
They’re safe. Get back to the tunnel.
Tunnel. Right. Aliens, bad guy, sword lady.
[both grunting]
[parademons screeching]
My turn.
[pants, grunts]
[grunting]
[ancient lamentation music playing]
[dramatic orchestral music playing]
[yells]
[grunting]
[Alfred] Catastrophic failure of all systems.
Are you all right, Master Wayne?
Are you all right?
[grunting]
[growls]
[ancient lamentation music playing]
You have the blood of the old gods in you.
[both grunt]
[groaning]
You okay?
Mm.
Wasn’t sure you’d come.
You’re my father.
Go.
[grunts]
[yells in pain]
[parademon screeches]
No!
[The Flash screams]
[parademon screeches]
[chittering]
[Cyborg] Relax, Alfred. I’ll take it from here.
Uh, do I know you?
[crashing]
[whooshes]
[whooshes]
What are we under, right now?
Gotham Harbor.
[orchestral music playing]
[grunts]
[grunting]
Who is that?
[straining]
[Cyborg] Come on.
Diana, get on!
[grunts]
[yelps]
[The Flash panting]
[grunts]
[panting]
[warbling]
What is it?
Show me.
[grunts]
[grunts softly]
It is here. On this world.
[grunting]
[breathing heavily]
[roaring]
[helicopter whirring]
Sir, you’re gonna be in quarantine for possible alien microbes. U.S. government protocols require that…
I know the requirements. I wrote them.
[Wonder Woman] It called to him. The Mother Box. The one he already has.
He has two. He took the Mother Box from Atlantis.
All he needs now is the lost Box of Men.
If he doesn’t already have it.
He doesn’t have it. I do.
Have you finished the conquest?
Not yet, DeSaad.
Then why do you summon me?
I bring news. Before mighty Darkseid came to the throne, he searched the universe for the ultimate weapon. The Anti-Life Equation. The key to controlling all life and all will throughout the multiverse. He found it hidden on a primitive planet, but before…
The story of the defiance is well-known.
I have found the primitive planet. The world that fought back. It is Earth. The Anti-Life Equation is carved into the surface of this very world.
[snarls]
Are you certain?
I have seen it. I have looked with my own eyes.
[speaks alien language]
[Steppenwolf speaks alien language] Anti-Life.
[speaking alien language]
[growls]
[parademons chittering]
[dramatic orchestral music playing]
[gasping]
My lord.
Oh, Steppenwolf.
[Steppenwolf] My lord, I am but your humble servant.
Can it be true that you have found it?
[Steppenwolf] I have, great one. The lost world is Earth. Anti-Life is here.
If it is redemption you seek, find the third box, synchronize The Unity, and when this world is scorched, I will come for my great prize.
You will come to Earth?
I have turned 100,000 worlds to dust looking for Anti-Life. Looking for those who robbed me of my glory. I will stride across their bones and bask in the glow of Anti-Life. And all of existence shall be mine.
[grunts softly]
It shall be so, my master.
[Barry] So cool. From the outside, it looks like this building was abandoned.
It wants to fly.
You talk to machines?
[Victor] I speak to intelligence. This one’s saying she can’t fly because of a software issue, but I could fix it with a little time.
There’s a dark spot in my data stream. I could feel the other two boxes. I know they’re awake, but I can’t see where they are.
Well, we can’t attack unless we know where the base is.
Even if we knew, I’ve never seen a being as strong as Steppenwolf. Maybe one.
Hmm, Superman.
[Victor] As long as the third box is asleep, they can’t see it, only sense it. We need to keep moving so they can’t catch up.
No. That’s just a strategy to lose more slowly, not to win.
Remind me, are flamethrowers not a thing? Why don’t we just destroy it?
Fire doesn’t destroy the boxes. They’re an unknown form of matter. Oh, they love heat. They absorb it, hold it in their cores.
Well, you know a lot about these boxes.
Makes you think.
Where’d you find the box, Victor?
Are you trying to say something?
Oh, I’m saying it. How do we know you’re not working for them?
It’s a long story.
You got somewhere else to be?
The Nazis found the box at the end of the Second World War, buried under an Italian monastery. The Allies intercepted it on its way to Hitler. They brought it back to the States in ’44. Unknown object 6-1-9-8-2. It collected dust in the Pentagon archives for 70 years till DoD began to study the Superman ship. A researcher at STARLABS made a connection between the ship… and 6-1-9-8-2. He understood they were both alien technologies. Different civilizations, similar properties. And though the box had slept for thousands of years, the researcher formulated a theory on how to awaken it. And so did. Then… I had an accident that should’ve killed me. But in an act of desperation or madness, the researcher harnessed the power of the Mother Box.
[powering up]
[screaming]
He unleashed an alien technology he didn’t fully understand. He used that power to keep me alive.
[groans]
[power turns off]
Alive… but turned into this. The box went back to sleep and he never returned it. That researcher was Silas Stone. My father.
Wait, your father saved your life with one of these things? Aren’t they psycho murder machines?
They’re change machines. The boxes don’t think in terms of healing or killing, alive or dead. They rearrange matter at the will of their masters, regenerate, reinstate.
Reinstate?
[Victor] A box has the power to reinstate anterior particle relationships.
So, you mean in the way that particles of matter can’t be created or destroyed, their relations just transform.
Burn down a house, the particles still exist. Particles of house become particles of smoke.
Anybody with a match can turn a house to smoke.
But a Mother Box…
…turns smoke back into a house.
[sighs]
I know we’re all thinking the same thing right now. Who’s gonna say it? I’m not gonna say it.
[orchestral music playing]
[Lois] Who is it?
Martha.
Hi.
[softly] Hi.
I went to the Daily Planet to finally pick up Clark’s things. [chuckles] I don’t know why, nowhere to put them now. I lost the farm. I’d been behind on the payments for a while. Truth is, the house is too big for me to live in by myself anyway.
Well, you know you’re welcome to stay here any time for as long as you need.
Thank you, Lois. That’s very kind. But I’ve found a little place that suits me just fine, right by the diner. I’m not here for help. I’m here because when I saw Mr. Perry, he told me that you haven’t been to work since Clark died.
[sighs softly]
I can’t.
The whole world is mourning.
[sighs]
Grieving over a symbol. Everywhere I go, everywhere I look, I see that “S.” I hear what people say. They talk like they knew him. But they didn’t know Clark. And I can’t stop them and look at them and tell them how proud I am of my son. You’re the only one who knows. Who feels what I do. Burdened by a secret on top of grief. I came all this way because I wanted… because I wanted to see you. Tell you… I understand.
I… will never love anybody the way that I love your son. And I just miss him. I miss him so much.
[Lois sniffles]
So do I, sweetheart.
[sighs]
Martha, you know if there’s anything you need, I’m here.
There is something you can do for me, honey. Come back to the living.
[door opens]
[suspenseful music plays]
The world needs you, too, Lois.
[Arthur] The dead are dead.
The box brought Victor back.
Victor wasn’t dead. Life is either one or zero. It’s to be or not to be. Not both.
Can you operate this box, Victor?
[Victor] Of course. But we don’t know enough about Kryptonian biology. There’s no telling what’s gonna happen.
[Diana sighs]
[Barry] Okay, but…I mean, we have to try. Don’t we? We have to try. What do we have to lose?
We cannot try unless we activate the box. As soon as it wakes up…
…the enemy sees it, comes, activates The Unity. The end.
So, what we have to lose is the entire planet to a bunch of genocidal aliens. That’s good to know.
Even if Superman could return, who’s to say that he could defeat them?
The Mother Box did. Victor’s father activated a Mother Box more than a year ago when Superman was still alive. Didn’t call out to Steppenwolf. None of the boxes did. Not until…
Not until Superman died.
Not until Superman died.
It’s like they were afraid of him?
[Bruce] Yes, they were afraid of him. This is the only way. There are six, not five. There is no us without him.
PART 5
ALL THE KING’S HORSES
[Barry] Cross this one off the bucket list. Exhume Superman from the grave. Check. You know we could do this in a nanosecond, right?
We could.
He was my hero. All right.
An Amazon working with an Atlantean.
Half-Atlantean.
How many thousands of years since our people spoke?
I don’t know. I’m not exactly close to mine. I hate Atlanteans as much as you Amazons do.
Hate is useless.
Yep.
No, thank you.
You know, my father told me there’s a saying in Atlantis… “None are taken back from the darkness.
“Not without…”
“Not without giving one up in return.” We say the same thing.
How about that?
Wonder Woman. What do you think, man? You think she’d ever go for a younger guy?
She’s 5,000 years old, Barry. Every guy’s a younger guy.
[Alfred] Jesus.
[steam hissing]
Oh, Christ.
[blasting]
Oh, bloody…
Any luck?
If by “luck” you mean “chance in hell we’ll get it flying today,” then, no. No luck.
[Bruce] It’s okay. It doesn’t matter. We’re just gonna take the body to the Kryptonian ship. It’s basically an organic computer. It can talk directly to the Mother Box.
What? The way it talked to Lex Luthor?
[Bruce] Something like that.
[Alfred] Huh. What could possibly go wrong?
[Alfred sighing]
Master Wayne… you did it! You put the team together to fight this war. You’ve fulfilled your promise. But to try to do that… I mean… your guilt’s overcome your reason. Not all the king’s horses nor all the king’s men…
Alfred, for once, I’m operating strictly on faith, not on reason.
But if you start playing with this little box of tricks, I mean, it could be the end of everything. How do you know your team’s strong enough? If you can’t bring down the charging bull, then don’t wave the red cape at it.
You do when it’s this red cape. This red cape charges back.
Okay.
You were right, Dr. Stone. The tests came back negative. Everyone’s clear, including you. Just to be on the safe side, we swept the entire facility.
Well, thank you, Thomas. That means I’m free to go?
Absolutely.
Thanks.
Listen up, everyone. You’re all clear. So, gather your things. If you need more medical attention…
Arthur, yes, your opinion. Less preposterous. Option “A”?
Definitely not “A.”
Okay. Or… “B”?
Let me see “A” again?
Right. We should get dressed.
I’m always dressed.
[dramatic music playing]
[soldier] ID?
ID. Aye, aye.
[softly] “Aye, aye”?
[system buzzes]
[electrical whirring]
[soldier] Okay.
“Okay”? Oh, gee, okay!
Doc! They let you out of quarantine.
Yeah, I finally got them to listen to reason. Now, let’s take a look and see what progress we’ve made with the electron-laser.
We’ve made some real progress. Let me show you.
[Batman grunts softly]
Victor, clear this place out.
Done.
[electrical whirring]
[alarm blaring]
[PA announcer] Code Red. Contamination breach. All personnel evacuate immediately.
[people murmuring]
[Ryan] Bio red five. The sensor’s picking up a microbe of alien origin.
A microbe of alien origin? That doesn’t make any sense. It’s gotta be a false alarm.
All right, people, shut it down. Let’s go.
Ryan, we just had it swept.
We have to go, Doc.
Think about it. It’s gotta be a false alarm.
Let’s go, Doc.
Think about it.
[woman] Full base evacuation! Everyone out!
Look, wait! Wait! Shit!
[PA announcer] Remain calm and proceed to the nearest exit.
[scientists clamoring]
Attention, all personnel.
Go! Go! Everybody out! Come on! Move!
Move! Come on! Go, go!
Everybody out! Go!
[system beeps]
Yes! Gotcha!
Post Commander, this is Dr. Silas Stone, do you read?
[man] Go ahead, Dr. Stone.
This is a false alarm. Someone has hacked into the system. We must alert…
[door opens]
Victor.
[man] Dr. Stone, you there? I don’t copy.
I was mistaken. The alarm’s legit. Everybody out. And nobody, I repeat, nobody comes back inside without my say-so.
[man] Roger that, sir.
[officer 1] Get the civilians out!
[officer 2] Let’s go! Let’s go!
Everybody got out okay?
I think so.
Everybody?
Yes.
[electrical hum]
[clears throat]
This way.
It knows he’s here. [exhales heavily] Ooh, that’s intense.
This is amazing.
This is crazy.
Oh, what? Now it’s crazy?
You two lunatics better know what you’re doing.
[soft orchestral music playing]
[grunts softly]
[sighs]
[breathes deeply]
[switch clicks]
[soft orchestral music continues]
[ship AI] Systems coming online. [glitches] Welcome, Victor. Would you like to assume command?
I’m in.
The ship says the Mother Box is hostile. I can override the security protocols, but there’s no time to repair all the electrical damage that Luthor’s power surges caused to the primary capacitors.
English.
There’s not enough charge to wake the box.
[inhales sharply] I might be able to do it. I mean, I might be able to jump-start it. I don’t like to break this rule, but when I approach the speed of light, I… Look, crazy things happen to time, but if I do it, I create massive electrical power. I could backtrack, if I can get enough distance, I can conduct a significant electrical current. I might be able to wake the box, if that’s… still what we want?
It is. Do it.
[inhales sharply]
[officer] Hey, Miss Lane.
Morning.
I didn’t think you were coming.
[sighs] One last time.
[somber orchestral music playing]
I see engines, so this must be the end of the line. So I’m…
[over radio] I’m in position.
[electrical hum]
[ship AI] Ready to initiate drop sequence.
The Mother Box is ready.
[somber orchestral music continues]
The ship’s begging me not to wake the box.
[ship AI] This action is irreversible.
[Cyborg] It’s afraid. It knows Steppenwolf will come for it.
We know that already. Continue.
[ship AI] I strongly advise against activation.
Barry, I’m initiating the countdown.
[ship AI] This action is irreversible.
Five…
[ship AI] Five…
Five…
Apokoliptian technology is hostile.
This is a bad idea.
No, it isn’t. Keep going.
Four…
[ship AI] Four…
Four…
[ship AI] I strongly advise against activation.
We need to abort, now.
Just do it.
[Cyborg] Three…
[ship AI] Three…
Three…
Two…
[ship AI] Two…
Two…
This course is irreversible.
One.
[ship AI] One.
One.
[ship AI] This action is irreversible.
[electrical whirring]
[explosions]
[dramatic orchestral music playing]
[electrical trilling]
[breathes shakily]
[panting]
[dramatic orchestral music continues]
[gasps]
[The Flash on radio] Victor?
No.
Go?
[grunting]
[orchestral music playing]
[yelling]
[water bubbling]
[booms]
[grunts]
[Mother Box powering down]
[ship AI] The future has taken root in the present.
[Mother Box powering up]
Get down!
[all grunt]
[all gasp]
[people murmuring]
[Mother Box pulsing]
[electricity crackling]
[somber orchestral music playing]
[warbling]
[somber orchestral music continues]
[breathing heavily]
He’s back.
[static crackles, indistinct radio chatter]
[siren wailing]
[rapid heartbeat]
[Cyborg] Something’s wrong. He’s scanning us.
What?
[grunting]
Victor?
Victor?
[continues grunting]
Shit.
What are you doing?
It’s my auto-defense system.
It senses danger.
Victor, no! Victor!
I can’t control it.
[The Flash] Don’t!
[panting]
[breathes heavily]
Kal-El, no!
[Cyborg grunting]
[grunts]
He’s confused. He doesn’t know who he is.
[grunts]
[grunts]
Arthur, we need to restrain him.
[all grunting]
[grunts]
[straining]
Kal-El, the last Son of Krypton… remember who you are. Tell me who you…
[grunts]
[Wonder Woman yelps]
[all grunting]
[slowed electrical warbling]
[The Flash grunting]
[The Flash yelps]
[gasping]
[gunfire]
[grunts]
Let’s go! [screams]
[breathes shakily]
[Cyborg grunts]
You should probably move.
[officers shouting indistinctly]
You all right?
Yeah.
Get up. Take cover back there. Go.
[tense music playing]
[grunts]
[both straining]
[metallic thud]
[dramatic music playing]
[both grunt]
Please don’t make me do this.
[grunts]
[groans]
[Wonder Woman grunts]
[breathes heavily]
[grunts]
[groans]
Clark. Clark, no.
[grunts]
[groaning]
Clark. No. This world needs you.
[Lois] Clark. Clark.
Whoa! Hold your fire! Hold your fire!
[Lois panting]
[Lois] Clark.
[soft music playing]
Please.
[exhales deeply]
[panting]
Please.
[Lois breathing shakily]
Please. Just go.
Yeah.
Let’s go.
[Clark inhales deeply]
[distant thud]
[The Flash groaning]
[breathes heavily]
I’m so sorry.
[whooshing]
[indistinct shouting]
[man] Take cover!
He’s coming.
The Mother Box. Where is it?
Come on. Come on.
[Steppenwolf grunts]
[people screaming]
[Steppenwolf breathing heavily]
[roars angrily]
[grunts]
[keyboard clacking]
[electricity crackling]
[grunts]
[automated voice] Attention, security breach detected. Sector Four, Level Three. Implement lockdown procedures immediately.
[Steppenwolf roars]
[panting]
[Steppenwolf growling]
Give me the Mother Box.
[Cyborg grunts]
No, no, no. Dad, wait! Don’t!
[Steppenwolf grunts]
[Cyborg groans]
[grunts, breathes heavily]
[electricity crackling]
So begins the end.
[portal booming]
[The Flash] Victor? Vic… Whoa, Victor. Are you okay, man? Come on. Victor?
He’s dead.
What?
My father. I didn’t save him. I couldn’t.
[The Flash] Oh, my God.
[breathes heavily]
His father’s dead ’cause of us. I told you waking that box was a bad idea.
It wasn’t a bad idea. We needed Superman. We still do.
[Aquaman] Well, whatever returned, it isn’t Superman. His body and powers, maybe. But it ain’t him.
[Batman] It is him. He recognized Lois Lane.
Who?
The woman he loves. He remembers her.
[Aquaman] Nah.
He went to her ’cause she wasn’t afraid of him. It’s called instinct, Diana.
[Aquaman sighs]
[The Flash] Wait, where did Steppenwolf go?
[Wonder Woman] He’s gone back to his base to assemble the three boxes.
[Aquaman] And we don’t know where his base is.
Or how long until…
[Batman] Hours. The boxes synchronize, Unity forms, we don’t get there in time to stop it, the planet dies.
[whispers] This is not your…
[gasps]
He knew. He knew, he knew, he knew. He wasn’t trying to destroy the box… he was trying to superheat it. He made the core the hottest thing on Earth outside of a nuclear reactor. Now, anything that hot would have to…
[Batman] Blink off the charts on a thermal imaging system. Your father sacrificed himself to mark that box. We have to get back to my lab and use the satellite to scan the Earth for thermal anomalies.
I’m already on it.
I’m sorry. [hesitates] You have a satellite?
I have six.
Right.
Let’s go find the son of a bitch.
PART 6
“SOMETHING DARKER”
[birds chirping]
[soft music playing]
You brought us here. You remembered.
This is home.
You spoke.
Did I not before?
Your mother got behind on the payments. She never told anyone.
I don’t understand.
She’s a proud woman, Clark. Here.
She loved it here.
[birds chirping]
So did I. So did I.
[Clark sighs]
[The Flash] Wow! This is awesome.
[Bruce] Brought some friends.
Oh, gosh, yes! Yes!
Everyone, this is Alfred. I work for him.
Alfred.
Good day, ma’am.
[Alfred] Oh…
[Alfred clears throat]
It’s badass, Alfred.
Well, I’ll put on the tea.
Great.
I don’t know where we’re gonna find the cups.
[Bruce] There’s the Mother Box, right there.
[Wonder Woman] Go to visible spectrum. [sighs] Pozharnov. Ghost city not far from Moscow. It’s been abandoned since the nuclear accident there 30 years ago.
Not even the army goes in.
[Barry] Right, it’s probably so radioactive that you grow an extra foot outta your neck.
Not anymore. He’s harvested the radiation to build his base.
Zoom.
[keyboard clacking]
What the hell is he building?
[Cyborg] The Unity’s in there.
We’ll attack from above.
Explosives won’t separate the boxes, only strengthen their bond.
[Barry] What? So we can’t blow it up?
[Cyborg] Not from the outside. I want to plug into The Unity, one-on-one. Fuse with it. Weaken its bond from the inside so we can break it back into three.
No, you don’t know what you’d be up against. You’d have to stream into The Unity by yourself. These boxes together are world destroyers. A billion years old. They’ll get inside you and find your weaknesses and your fears, and use them to destroy you.
Just get me in and get me time.
You could die, Victor.
If I don’t, we all die. Period. I got nothing left. You wanted me to use these gifts, right? That’s what I’m gonna do.
[Barry] Okay. So… if Victor wants to try to save the world by fusing with the doom boxes, I say we put him in the doom boxes. But getting him in means attacking that base.
Fighting the devil and his army in hell.
[Barry] I mean, this guy’s probably fought hundreds of thousands of other superbeings on the other planets he’s destroyed, right? And we have to assume he’s won.
I don’t care how many demons he’s fought in how many hells… he’s never fought us. Not us united.
[hopeful music plays]
[soft music playing]
Take that as a “yes.”
[Lois] What?
The ring.
You’re really back.
I have a second chance, Lo. And I am not gonna waste it.
[gasps softly]
[Martha laughing]
[chuckles]
Are you really you?
I’m really me, Ma.
[Martha laughs]
Listen, Ma. They wanted me back for a reason. I need to find out why.
[Martha sighs]
How’s Victor doing?
You know, wanted to be by himself.
We’re asking a kid who just lost his father to go up against the most powerful machines in the universe. It’s not fair.
I thought you didn’t care?
I never said that.
What is it?
Uh… I had a dream, like, I don’t know, almost like a premonition. It was the end of the world and Barry Allen was right here and he said to me, “Lois Lane is the key.”
She is… to Superman. Every heart has one.
I think it’s something more. Something darker.
Master Wayne. Master Wayne! You need to see this.
[triumphant music playing]
You fixed it.
It wanted to fly. Flight is its nature.
Yours, too.
He’ll be here, Alfred, I know it.
What makes you so sure?
Faith, Alfred. Faith.
At last. Prepare for his arrival. My redemption is nigh. Unite. Synchronize.
[distant explosion]
[ancient lamentation music playing]
[distant explosion]
[Alfred humming]
[distant explosion]
[Mother Boxes pinging]
[Bruce] The satellites revealed he’s created a defensive dome.
It’s a design flaw. Take out the tower, the dome will fall. The enemy never anticipated a frontal assault.
[The Flash] Right, probably ’cause he didn’t think anyone would be that nuts.
Bruce is right. We’ve got to destroy the defensive dome so we can reach The Unity before it synchronizes.
What if the dome’s not destroyed?
It’ll be destroyed.
[Wonder Woman] Once Victor is linked with The Unity with Barry’s help, he’ll break through The Unity’s defenses.
[Aquaman] Remind me, how’s that again?
Uh, with the power of love.
Barry.
With a catastrophic energy surge.
Good.
You’ll have to run faster than you’ve ever attempted to generate a charge of that size. And then you make physical contact with Victor. That force should propel him inside The Unity. And, Victor, it’s all up to you. Take it apart from the inside before it synchronizes.
[The Flash] Whew. We actually finally have a plan.
[Bruce] We have a plan.
[soft music plays]
[Jor-El] The symbol of the house of El means hope. Embodied within that hope is the fundamental belief in the potential of every person to be a force for good.
[Jonathan] Clark…
[Jor-El] That’s what you can bring them.
[Jonathan] …you were sent here for a reason.
[Jor-El] You will give the people of Earth an ideal to strive towards.
[Jonathan] And even if it takes you the rest of your life, you owe it to yourself to find out what that reason is.
[Jor-El] They will stumble, they will fall.
[Jonathan] You’re gonna have to make a choice.
[Jor-El] They will join you in the sun, Kal.
[Jonathan] A choice of whether to stand proud in front of the human race or not.
[Jor-El] You will help them accomplish wonders.
All the hopes and dreams of Krypton live in you now.
[Jonathan] I’m so proud of you, son.
[Jor-El] Your mother and I loved you.
[Jonathan] Your mother and I knew you would change the world.
[Jor-El] Your heart was tested.
[Jonathan] I know it’s been hard, Clark.
[Jor-El] But you gave hope to their world.
[Jonathan] You need to show them who you are.
[Jor-El] Love them, Kal. The way we loved you.
[Jonathan] Fly, son. It’s time.
[upbeat music playing]
[exhales]
[exhales deeply]
I’m gonna take out that tower and knock down that shield dome. Whatever you see, stick to the plan. It’s why I brought you together.
[clicks button]
[rapid electronic beeping]
Bruce, pull back. You’re not gonna make it.
[grunts] Just have to knock a little louder.
[grunting]
[explosion]
Kill him! Get to the carriage. Defend The Unity.
Oh, shit.
[grunts]
[grunting]
[parademons screeching]
The tower’s down. Do you read me?
Uh, yeah, loud and clear.
[over radio] Are you okay? Bruce? Bruce?
Get to the reactor. I’ll lure as many of these monsters away from you as I can.
What does that mean?
Don’t worry about me. Get to The Unity.
[door clanging]
[parademons snarling]
They’re here.
[The Flash over radio] Bruce?
Comm went dead.
Let’s go.
[metal creaking]
[parademons snarling]
[engine revving]
[machine gun firing]
[tires screeching]
[parademons screeching]
[Batman] Come on, follow me, you damn insects.
[engine revving]
[missile whooshes]
[tires screeching]
[parademons snarling]
[engine revving]
[tires screeching]
[automated voice] Critical damage.
[parademon snarls]
[Batman grunts]
[ancient lamentation music playing]
[grunts]
You really are outta your mind.
[Aquaman grunting]
[Aquaman grunting]
You’re welcome.
My man.
[Aquaman whooping]
[grunts]
[Aquaman chuckles]
[grunts]
[Batman grunting]
[parademon screeches]
[Aquaman grunts]
[grunts]
[Aquaman growls]
Yeah, we got this.
You go do your thing.
[The Flash grunting]
[Wonder Woman grunting]
[beeping rapidly]
[Batman grunts]
[loud thudding]
[drink splashes]
I’m assuming you’re Alfred.
[Alfred] Master Kent. He said you’d come. Now, let’s hope you’re not too late.
[Aquaman grunts]
Hey!
[Trident clanging]
[growling]
Remember me? Round two?
Hell yeah.
[yells]
[grunts]
[grunts]
[growls]
[ancient lamentation music playing]
Shall we?
Tell me, Amazon, why did you abandon your own sisters only to cast your lot with these creatures clinging to their puny lives? You weren’t there to protect them from me. And, sadly, you could have.
[yells]
[Wonder Woman grunting]
[growls]
[Aquaman grunting]
[ancient lamentation music playing]
[Wonder Woman grunts]
Barry, I’m in position.
[grunts]
[grunts]
[echoes] Okay. I built the charge.
[over radio] You call it.
[grunts]
Barry, on one.
Three, two…
[Cyborg yelps, grunts]
Get the hell off me!
Victor!
[grunts and yells]
[Steppenwolf roars]
[grunts]
[axe clangs]
[Wonder Woman yells]
[Aquaman grunting]
[growls]
Victor!
[growls]
I watched your island burn, your sisters begging for their lives. As did your mother.
Liar.
[Steppenwolf grunts]
[grunts]
[groans]
[both grunting]
I can’t maintain this! Victor!
[grunting, yells]
[grunting]
Victor, I can’t hold this!
[Cyborg shuddering]
For Darkseid.
[axe clangs]
Not impressed.
[blows]
[triumphant music playing]
[growling]
All right.
Kal-El.
[yells]
[Aquaman grunts]
[Steppenwolf groaning]
[groaning]
[groans]
[roars]
[Superman grunts]
Barry, I’m connected to The Unity. I need the charge to get inside.
[The Flash screams]
[wheezing]
Barry? Barry, are you okay?
[gasping]
[Batman over radio] Barry!
I got the wind knocked out of me. Need a few seconds, that’s all!
[gasps and groans]
[Superman grunting]
[thuds]
[rumbling]
[gasps]
[straining]
Barry, where are you? It’s almost synchronized!
Okay, okay.
[inhales sharply] Oh, my God. Gotta heal, Barry. Heal. Heal.
[grunts]
[portal warbling]
[shouts] Barry!
[Cyborg grunting]
It’s too late.
Oh, no.
He’s here!
[charging up]
[Wonder Woman grunts]
[explosion]
[groans in pain]
[gasps and winces]
Okay. Just gotta go faster than the speed of light. Far beyond the speed of light. You gotta break the rule, Barry, and you gotta do it now. [inhales sharply]
[echoes] Dad… whatever happens, I want you to know your kid was one of them, Dad. One of the best of the best.
[triumphant music playing]
Make your own future.
Make your own past.
It’s all right now.
[breathing heavily]
We’ve been waiting for you, Victor. My broken boy.
You don’t have to be alone anymore. We’ll be together again.
[Mother Box as Victor] We can put it back, Vic. Make you whole again.
I’m not broken.
[grunts]
[distorted voices]
And I’m not alone.
[distorted warbling]
[Cyborg straining]
Superman!
[Superman straining]
[groaning]
[roars]
[Aquaman straining]
[Steppenwolf roars]
[ancient lamentation music playing]
[Wonder Woman yelling]
[Wonder Woman growls]
[electricity crackling]
[growls]
I told you Steppenwolf would fail.
Yes. Yes, you did.
My master, now that the Mother Boxes have been destroyed, how will you retrieve your great prize?
Anti-Life is found, DeSaad. And we will stop at nothing to possess it. Ready the armada. We will use the old ways.
[triumphant music playing]
EPILOGUE
A FATHER TWICE OVER
[rattling]
[tape recorder clicks]
[Silas on tape] Your father twice over.
[tape rewinding]
Now, let me speak to you from my heart, not as a scientist, as a father. [chuckles] Your father twice over. I brought you into the world and back to it. You can’t imagine how proud I am of who you are. Have always been.
[chuckles softly]
So many years with you I wasted. So many wrongs I’ve left un-righted. Everything breaks, Victor. Everything changes.
I gotta go see my father.
[engine starts]
[Silas] The world is hurt. Broken. Unexchangeable.
[man] Ship’s all yours now, kid. You’re the boss. “Ryan Choi, Director of Nanotechnology.” That’s your thing.
Uh, yep. [sighs] That’s my thing.
[Silas] But the world’s not fixed in the past, only the future. The not yet. The now.
[Bruce] Wow. Must be 100, 150 feet.
[Alfred] Must be.
Big round table. Six chairs, right there.
But room for more.
But room for more.
God help us.
[pigeons cooing]
[Silas] The now is you.
[slams]
What?
It’s actually the worst job you can get in a crime lab. But, uh, my foot’s in the door.
This is like a “job” job?
“Job” job.
[laughs] Your foot’s in the door.
Isn’t that a thing people say?
Your foot’s in the door. Yeah, that’s something people say, man. His foot’s in the door!
[prisoners cheering]
That’s my boy, right there!
Oh, gosh. Oh, gosh.
Taught him nothing he knows.
[Henry] Yes! [laughs]
Dad, you’re gonna get maced again.
No stopping you now.
[Barry chuckles softly]
Thanks, Dad.
[Silas] Now. Now’s your time, Victor, to rise.
“Thank you” is not enough for what you did.
I just undid a mistake, that’s all.
[Clark chuckles]
How did you get the house back from the bank?
I bought the bank. Congratulations, by the way.
[Silas] Do this. Be this. The man I never was. The hero you are. Take your place among the brave ones. The ones that were, that are, that are yet to be.
[engine revving]
[clangs]
It’s time you stand, fight, discover, heal, love, win.
The time is now.
[doors buzzing]
[prison guard] Ready? Come on, Stevens.
[prisoner chattering indistinctly]
[prisoner 2 hyperventilating]
[prison guard] All right, let’s keep it moving.
Keep going.
[prison guard 2] Come on, Luthor. Let’s go. Luthor. Open up two, Carl, please. Luthor. All right, stop jerking around, Luthor, or I’m gonna have to come in there.
[laughs maniacally, growls]
[continues laughing]
[prison guard gasps]
[alarm wailing]
[prison guards shouting indistinctly]
Ah, there he is. Welcome aboard. Care for a glass of Gout de Diamants? I was just celebrating God’s return. Out of the ground and back up into the sky.
[Deathstroke] I heard you were a few clowns short of a circus.
[chuckles] I was, thank you, until the good doctors at Arkham helped me find some much needed clarity. Now, you volunteered to destroy the bat free of charge. Why the pro bono work?
[sighs] It’s personal.
Ah, let me guess, an eye for an eye?
You said you had something I’d want? You’d better not be wasting my time.
Ooh. And endure your wrath, Mr. Wilson? No, I wouldn’t think of it. Uh, I have too much to live for. And more important things to do. But if you want the Batman, here is something that can help you. His name is Bruce Wayne.
Hmm. On second thought, we do have something to celebrate.
Good boy.
[parademon chitters]
Clear.
How much further?
We’re almost there.
Well, we need to hurry. We can’t be out in the open much longer. He’ll come for us.
[Mera] Let him come. Let the bastard come. I’ll stab this through his heart for what he did to Arthur. I want to make him pay.
I understand how you feel, Mera.
You have no idea how I feel.
But we have to stick to the plan to have any chance to make this right.
[Mera scoffs]
Who have you ever loved?
[man cackling]
[man] Au contraire, my little fish stick. He knows exactly what it’s like to lose someone he loves. You know, like, uh, a father, like a mother.
Be very careful with the next thing you say.
Like an adopted son. Isn’t that right, Batman? Maybe, in a way, that smelly old flounder is right. Because how many can die in your arms before you grow numb to death?
That’s not very careful.
And how many dead eyes can you look into before you die inside yourself?
I’ve been dead inside a long time, but even I have a limit. And if you cross that line, I swear to God, I will…
Before what, Bruce? Kill me? You won’t kill me. I’m your best friend. Besides, who’s gonna give you a reach-around? [chuckles] Anyway, you need me. You need me to help you undo this world you created by letting her die. Poor Lois. How she suffered so! [sighs] I often wonder how many alternate timelines do you destroy the world because… frankly, you don’t have the cojones to die yourself. Hmm? So, as usual, I’ll be the bigger man.
[blows air]
A truce, Bruce. [cackling] As long as you have this card, a truce. But all you have to do is tear it in half and I’m happy to discuss with you in any way you like, why you sent the Boy Wonder to do a man’s job?
You know, it’s funny that you would talk about people who died in my arms because when I held Harley Quinn and she was bleeding and dying, she begged me with her last breath that when I killed you, and make no mistake, I will fucking kill you… that I’d do it slow. I’m gonna honor that promise.
Oh. You’re good. You almost had me. [cackling]
[Joker continues cackling]
Where are we holing up?
Somewhere he’ll never suspect.
Still think it was a good idea bringing him along?
[Joker blows raspberry]
What do you think?
[armor beeps]
[distant explosion]
He’s found us.
[cackling]
[gasps]
[breathing heavily]
[distant explosions]
Can I help you?
I’m sure you know Darkseid is not finished with Earth. The Anti-Life Equation is here somewhere. We have to find it before he does. There’s a war coming. And I’m here to help.
I’m sorry, who are you again?
I’ve gone by many names and taken many forms. And like you, I’ve realized I have a stake in this world and it’s time I started fighting for it.
Oh. Well, we could definitely use the help. So, glad you’re here.
You know, I never thought I’d see the defenders of Earth united and fighting as one. It wouldn’t have happened without you, Bruce. Your mother and father would be proud.
I hope so.
Well, I’ll be in touch. Oh, and some have called me the Martian Manhunter.
I guess I’ll see you around.
♪ I’ve heard there was a secret chord ♪
♪ That David played and it pleased the lord ♪
♪ But you don’t really care for music, do you? ♪
♪ It goes like this The fourth, the fifth ♪
♪ The minor fall The major lift ♪
♪ The baffled king composing hallelujah ♪
♪ Hallelujah ♪
♪ Hallelujah ♪
♪ Hallelujah ♪
♪ Hallelujah ♪
♪ Well your faith was strong but you needed proof ♪
♪ You saw her bathing on the roof ♪
♪ Her beauty and the moonlight overthrew you ♪
♪ She tied you to her kitchen chair ♪
♪ She broke your throne and she cut your hair ♪
♪ And from your lips she drew the hallelujah ♪
♪ Hallelujah ♪
♪ Hallelujah ♪
♪ Hallelujah ♪
♪ Hallelujah ♪
♪ Hey baby I’ve been here before ♪
♪ I’ve seen this room and I’ve walked this floor ♪
♪ I used to live alone before I knew you ♪
♪ But I’ve seen your flag on the marble arch ♪
♪ And love is not a victory march ♪
♪ It’s a cold and it is a broken hallelujah ♪
♪ Hallelujah ♪
♪ Hallelujah ♪
♪ Hallelujah ♪
♪ Hallelujah ♪
♪ Well there was a time when you let me know ♪
♪ What’s really going on below ♪
♪ Now you never show that to me, do you? ♪
♪ Remember when I moved in you ♪
♪ And the holy ghost was moving too ♪
♪ And every breath we drew was hallelujah ♪
♪ Hallelujah ♪
♪ Hallelujah ♪
♪ Hallelujah ♪
♪ Hallelujah ♪
♪ Well, maybe there is a god above ♪
♪ But all I have ever learned from love ♪
♪ Was how to shoot somebody ♪
♪ Who outdrew you ♪
♪ It’s not a cry that you hear at night ♪
♪ And it is not somebody who’s seen the light ♪
♪ It’s a cold ♪
♪ And it is a broken hallelujah ♪
♪ Hallelujah ♪
♪ Hallelujah ♪
♪ Hallelujah ♪
♪ Hallelujah ♪
♪ Hallelujah ♪
♪ Hallelujah ♪
♪ Hallelujah ♪
♪ Hallelujah ♪
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
