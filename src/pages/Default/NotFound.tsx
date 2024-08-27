import React from 'react';
import UnknownContent from '../../components/unknownPage/UnknownContent';

import './NotFound.css';

const NotFound: React.FC = () => {
  return (
    <div id='unknown-main'>
      <UnknownContent title={pickedErrorTitle as string} message={pickedErrorMessage as string}></UnknownContent>
      <img id='unknown-image' src={randomFilename} alt="Spilled Milk"/>
      <div id="full-page-404" style={{ backgroundColor: pickedColor }}>
          <h1>404</h1>
      </div>
    </div>
  );
};

export default NotFound;

const idFilenameMap: Map<number, string> = new Map([
  [1, "Astronaut.png"],
  [2, "BalloonLost.png"],
  [3, "BoatLeak.png"],
  [4, "BrokenClock.png"],
  [5, "BrokenMug.png"],
  [6, "BurntToast.png"],
  [7, "CautionTape.png"],
  [8, "DogAte.png"],
  [9, "Ghost.png"],
  [10, "IceCreamSpill.png"],
  [11, "KidsToy.png"],
  [12, "LochNess.png"],
  [13, "LostKeys.png"],
  [14, "LostTourist.png"],
  [15, "Ostrich.png"],
  [16, "PizzaBox.png"],
  [17, "ShoesTied.png"],
  [18, "SpilledMilk.png"],
  [19, "Trash.png"],
  [20, "TreeStump.png"],
]);
const idErrorTitleMap: Map<number, string> = new Map([
  [1, "Looks like you're lost in space!"],
  [2, "Oops, the balloon just floated away!"],
  [3, "Uh-oh, we've sprung a leak in the boat!"],
  [4, "The clock is broken; time's up for this page!"],
  [5, "It seems this mug is just as broken as this page!"],
  [6, "Burnt toast? This page is toast!"],
  [7, "You've crossed the caution tape; this page doesn't exist!"],
  [8, "The dog ate your page... and our homework too!"],
  [9, "Boo! This ghost of a page doesn't exist!"],
  [10, "Ice cream spilled... and so did this page!"],
  [11, "Someone misplaced this page like a kid's lost toy!"],
  [12, "The Loch Ness monster has swallowed this page!"],
  [13, "Lost your keys? Well, we lost this page too!"],
  [14, "You're as lost as a tourist without a map!"],
  [15, "This page is hiding like an ostrich with its head in the sand!"],
  [16, "No pizza in this box... and no page here either!"],
  [17, "Your shoes are tied, but this page is a knot!"],
  [18, "Don't cry over spilled milk... or this missing page!"],
  [19, "This page was trashed, literally!"],
  [20, "We hit a stump; this page is no longer here!"],
]);

const idErrorMessageMap: Map<number, string> = new Map([
  [1, "You thought this mission to the moon would be a quick six-month thing. Your neighbor offered to look after your dog. Your high school math teacher was impressed. He once said you wouldn’t amount to anything. You sure showed him. But now here you are, fifty feet from your spaceship with no way to get back. Your dog will be so sad. Your math teacher will be so smug. Pretty devastating."],
  [2, "You let go of the balloon just for a second, and now it’s floating away, out of reach. You remember how your mom warned you, but you didn’t listen. Now, as you stare at it floating further into the sky, you realize that this page is just like that balloon—gone forever."],
  [3, "You were out enjoying a peaceful day on the lake when suddenly, you felt a cold splash on your feet. Looking down, you realized there’s a leak in the boat! Water’s rising fast, and you’re nowhere near the shore. This page is sinking fast, too—completely submerged and unrecoverable!"],
  [4, "The gears were turning, the hands were ticking—everything seemed fine. But suddenly, the clock broke down. Time stopped, deadlines were missed, and now, this page is just as out of time as that clock. Maybe it’s time to give up on finding it."],
  [5, "It was your favorite mug—the one with the cheesy motivational quote. You used it every morning, but now it lies shattered on the floor, spilling coffee and hope all over. Just like that mug, this page is broken beyond repair. We’re afraid no amount of glue will bring it back."],
  [6, "You tried to multitask—toast some bread while reading your emails. You got distracted, and now, the toast is burnt to a crisp. You can’t salvage it. Similarly, this page is toast—burnt, forgotten, and destined for the bin."],
  [7, "You saw the caution tape but decided to step over it anyway. What could go wrong, right? Now you’re in a restricted zone, and there’s no turning back. This page is off-limits, marked with virtual caution tape. Time to retreat!"],
  [8, "You walked in, only to find your homework in shreds. The culprit? Your dog, wagging its tail, blissfully unaware of the chaos it’s caused. This page is like that homework—chewed up and unrecognizable. Blame it on the dog!"],
  [9, "The lights flicker, a chill fills the air, and suddenly—boo! A ghostly figure floats by, but it disappears before you can make out what it’s saying. This page is like that ghost: eerie, elusive, and impossible to catch."],
  [10, "You were savoring your favorite ice cream on a hot day when disaster struck. One misstep, and it was all over the pavement. Just like that delicious treat, this page is now a sticky mess, melting away, never to be enjoyed."],
  [11, "It was a bright and sunny afternoon when you realized your favorite toy was missing. You looked everywhere—under the bed, in the closet—but it was gone. Like that toy, this page is lost in the void, never to be found again."],
  [12, "You’ve heard the legends, but you never thought you’d encounter the Loch Ness Monster. Yet here you are, standing by the misty shores, but instead of a sighting, all you’ve found is an empty page. It’s hidden in the depths, along with Nessie’s secrets."],
  [13, "You frantically check your pockets, retrace your steps, but your keys are gone. You’ll have to get someone to let you in. This page is like those keys—misplaced, lost, and leaving you locked out of what you were looking for."],
  [14, "You’re in a new city, map in hand, but no matter how hard you try, you keep ending up at the wrong place. The streets don’t match the map, and you’re hopelessly lost. This page, like your sense of direction, is nowhere to be found."],
  [15, "You spot an ostrich in the distance, but it quickly buries its head in the sand. You try to get a better look, but it’s hiding away, just out of reach. This page is doing the same thing—concealing itself from sight, impossible to uncover."],
  [16, "You open what you hoped would be a box full of delicious pizza, but all you find is disappointment—it’s empty! Much like your cravings, this page offers nothing but emptiness where something good should be."],
  [17, "You thought you had your shoes tied tight, but now they’re a tangled mess of knots. It’s going to take forever to untangle them. This page, too, is a tangled knot of confusion—no matter how hard you try, you can’t make sense of it."],
  [18, "You turned your back for just a moment, and now the milk is everywhere—spilled and wasted. There’s no use crying over it now, just like there’s no use crying over this missing page. It’s gone, and there’s no mopping it up."],
  [19, "In a fit of frustration, someone tossed this page straight into the trash. It’s buried under crumpled paper and empty coffee cups, far out of reach. You won’t find what you’re looking for in this digital junk pile."],
  [20, "You were on a steady path, but then—bam! You hit a stump, bringing everything to a halt. This page has hit that same dead end, and there’s no way forward from here. Time to turn back."]
]);

const idErrorColorMap: Map<number, string> = new Map([
  [1, "#88dccc"],
  [2, "#d8ecf4"],
  [3, "#f0ecfc"],
  [4, "#ffe4ea"],
  [5, "#fff4bc"],
  [6, "#bcbbbb"]
]);



let randomlyPickedID = 0;
let randomlyPickedColor = 0;

function getRandomFilename(map: Map<number, string>): string {
  const keys = Array.from(map.keys());
  randomlyPickedID = keys[Math.floor(Math.random() * keys.length)];
  return map.get(randomlyPickedID) || "";
}

function getRandomColor(map: Map<number, string>): string {
  const keys = Array.from(map.keys());
  randomlyPickedColor = keys[Math.floor(Math.random() * keys.length)];
  return map.get(randomlyPickedID) || "";
}

const randomFilename = `/assets/404/${getRandomFilename(idFilenameMap)}`;
const pickedColor = getRandomColor(idErrorColorMap);

const pickedErrorTitle = idErrorTitleMap.get(randomlyPickedID);
const pickedErrorMessage = idErrorMessageMap.get(randomlyPickedID);
