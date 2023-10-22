function badEnd() {
    alert("You have failed to journey the forest. Better luck next time.");
    return;
}

function goodEnd() {
    alert("You have braved the forest and escaped it's clutches. Well done.");
    return;
}

function startGame() {
    var user = prompt("Welcome, traveller. What name do you go by?")
    alert( user + "... Wonderful. Are you ready to enter the forest?")
    let light = prompt("Before you made your way to the forest, you grabbed a light source. Did you grab a FLASHLIGHT, or a LANTERN?")
    if(light.toUpperCase()=="FLASHLIGHT") {
        let path = prompt("With your trusty " + light + ", you stumble into the dark forest. As you make your way through, you find the paths converging with a busted, rotting wooden sign nearby; LEFT for the Whispering Woods, STRAIGHT for the Haunting Hedges, RIGHT for the Gnarly Grove. Which path do you dare to take?");
            if(path.toUpperCase()=="LEFT") {
                let clearing = prompt("As you make your way through the Whispering Willows, you feel uneasy. A quiet voice echoes your name before you feel a hand graze your back... Soon, you come across a clearing with a small campfire roaring. You feel more relaxed. Do you STAY, or CONTINUE?");
                if(clearing.toUpperCase()=="STAY") {
                    alert("As you settle into the clearing and cozy up to the fire, you feel all the tension in your body release. You feel comfortable. Very comfortable. You feel your eyes start to close as you drift into a deep sleep...")
                    badEnd();
                } else if (path.toUpperCase=="CONTINUE") {
                    let pond = prompt("You continue onward with that creeping feeling swelling again. You hear rustling in some bushes nearby that abruptly stops when you turn to look at it. You then stumble upon a small pond, gistening with the light illuminating from your " + light + ". Do you wish to STAY and take a dip in the pond, or CONTINUE?")
                    if (pond.toUpperCase()=="STAY") {
                        alert("You decide to stay, slowly sinking your feet into the water. The water feels nice and relaxing, almost too relaxing. Unconsciously, you sink more of your body into the pond, strangely unable to touch the bottom. Your body suddenly feels to heavy to move, sinking further and further down, unable to breathe as you watch the surface now hopelessly out of view...");
                        badEnd();
                    } else if (clearing.toUpperCase()=="CONTINUE") {
                        let hut = prompt("You shake off the need to rest and press on. Though you still feel uneasy, a sense of bravery rises in your chest for making it this far. As you continue with your newfound confidence, you are face-to-face with a small little hut. The hut is lit and food litters the table inside as you peer through the window, but you don't see anyone inside. Do you go INSIDE, or CONTINUE on?");
                        if (hut.toUpperCase()=="INSIDE") {
                            alert("Well, you've made it this far! You decide to rest for what you assume is the night, looking around each and every inch of the hut. You scarf down the food and happily sleep on the big bed, thankful for the rest. In the morning, however, you hear a knock on the bedroom door. Before you can even get up to assess the situation, a big, hulking ogre bursts through the door, very displeased at the state of his home. Cornered and unequipped, you curse as the ogre approaches...");
                            badEnd();
                        } else if (hut.toUpperCase()=="CONTINUE") {
                            alert("Though the house looks inviting, you know better than to walk inside others property. As you continue on the path, you approach a clearning eerily similar to the one you saw earlier, campfire and all. Brushing it off, you continue on and see the pond, looking just as glimmering as it had before. You burst into a run, hoping that this is just coincidental, before you see the hut again, unmistakable proof that the path is looping. Before you come across the clearing a third time, you stop to rest on the path, accepting your fate...");
                            badEnd();
                        }
                    }
                }
            } else if (path.toUpperCase()=="STRAIGHT") {
                let tool = prompt("You make your way into the Haunting Hedges, a run-down, makeshift graveyard filled with bodies of past adventures like yourself. Feeling uneasy, you realize you're unequipped. As you wander the open area, you spot a shovel next to a half-open grave. After exploring a bit more, you stumble upon an evil-looking altar with a big book on a pedestal- the title is in a language you don't understand. Do you go for the SHOVEL, or the BOOK?");
                if (tool.toUpperCase()=="SHOVEL") {
                    alert("As you move to pluck the shovel out of the dirt, a grotesque hand bursts through the grave below, grabbing your leg. Unprepared, you flail around as the hand yanks you into the half-open grave with it...");
                    badEnd();
                } else if (tool.toUpperCase()=="BOOK") {
                    let attack = prompt("Unsure how to use it but feeling its importance, you pick up the book and flip through it. As you glance through it, the ground shakes. Zombies from the graves surrounding the altar burst out, groaning as they all dash toward you. You have to act! Do you attack with your FLASHLIGHT or the BOOK? Or do you wish to RUN?");
                    if (attack.toUpperCase()=="FLASHLIGHT") {
                        alert("You quickly swing your flashlight at a nearby zombie before the tool breaks in half. The hit didn't hurt the zombie... at all. It isn't long before you are overwhelmed, the swarm consuming you...");
                        badEnd();
                    } else if (attack.toUpperCase()=="BOOK") {
                        alert("Flipping to a random page in the book, you mutter the words as lettering glows. The letters glow brighter the louder you recite the words- screaming the words, a large blast bursts from the page, ripping through a group of zombies. Using the book and the spells within, you successfully beat the zombie hoard and make your way out of the forest, feeling the energy of the spells rippling through you...");
                        goodEnd();
                    } else if (attack.toUpperCase()=="RUN") {
                        alert("You break out into a sprint, moving as fast as your legs can take you. As you hustle away from the hoard, zombies still within their graves grab at your feet to slow you down. Even without their attempts to slow you down, the hoard is speedy, and catches up to you in no time. It isn't long before you are overwhelmed, the swarm consuming you...");
                        badEnd();
                    }
                }
            } else if(path.toUpperCase()=="RIGHT") {
                alert("As you journey into the Gnarly Grove, you trip over a spiky patch of brambles and branches, hitting your head on the way down...");
                badEnd();
            } 
    } else if (light.toUpperCase()=="LANTERN") {
        let path = prompt("With your trusty " + light + ", you stumble into the dark forest. As you make your way through, you find the paths converging with a busted, rotting wooden sign nearby; LEFT for the Whispering Woods, STRAIGHT for the Haunting Hedges, RIGHT for the Gnarly Grove. Which path do you dare to take?");
        if (path.toUpperCase()=="LEFT") {
            alert("As you head into the Whispering Willows, you hear voices echoing your name. Though they sound so distant, the voices feel so... real, with the wind picking up almost as though the voices are around you. A big gust of wind suddenly whips through the path as a voice yells, taking your " + light + " out with it. As total darkness surrounds you, you feel a hand pull you deeper into the forest...");
            badEnd();
        } else if (path.toUpperCase()=="STRAIGHT") {
            let tool = prompt("You make your way into the Haunting Hedges, a run-down, makeshift graveyard filled with bodies of past adventures like yourself. Feeling uneasy, you realize you're unequipped. As you wander the open area, you spot a shovel next to a half-open grave. After exploring a bit more, you stumble upon an evil-looking altar with a big book on a pedestal- the title is in a language you don't understand. Do you go for the SHOVEL, or the BOOK?");
            if (tool.toUpperCase()=="SHOVEL") {
                alert("As you move to pluck the shovel out of the dirt, a grotesque hand bursts through the grave below, grabbing your leg. Unprepared, you flail around as the hand yanks you into the half-open grave with it...");
                badEnd();
            } else if (tool.toUpperCase()=="BOOK") {
                let attack = prompt("Unsure how to use it but feeling its importance, you pick up the book and flip through it. As you glance through it, the ground shakes. Zombies from the graves surrounding the altar burst out, groaning as they all dash toward you. You have to act! Do you attack with your LANTERN or the BOOK? Or do you wish to RUN?");
                if (attack.toUpperCase()=="LANTERN") {
                    alert("You quickly swing your lantern at a nearby zombie before the tool breaks in half, a large fire erupting in response. The zombie catches fire and is too slow to put it out- soon other zombies start catching flame as well with the forest around it beginning to catch as well. Though you attempt to flee the forest, the fire soon surrounds you as well, taking you with it...");
                    badEnd();
                } else if (attack.toUpperCase()=="BOOK") {
                    alert("Flipping to a random page in the book, you mutter the words as lettering glows. The letters glow brighter the louder you recite the words- screaming the words, a large blast bursts from the page, ripping through a group of zombies. Using the book and the spells within, you successfully beat the zombie hoard and make your way out of the forest, feeling the energy of the spells rippling through you...");
                    goodEnd();
                } else if (attack.toUpperCase()=="RUN") {
                    alert("You break out into a sprint, moving as fast as your legs can take you. As you hustle away from the hoard, zombies still within their graves grab at your feet to slow you down. Even without their attempts to slow you down, the hoard is speedy, and catches up to you in no time. It isn't long before you are overwhelmed, the swarm consuming you...");
                    badEnd();
                }
            }
            } else if (path.toUpperCase()=="RIGHT") {
                alert("As you journey into the Gnarly Grove, you trip over a spiky patch of brambles and branches. The lantern you were holding breaks in response, a large fire bursting from the tool. The grass around you catches flame, then the trees- seemingly the whole forest around you is covered in flame, soon taking you down with it...");
                badEnd();
            }
    } else {
        alert("...Unfortunately, that is not an option. You will brave the forest another day.");
    }
}

