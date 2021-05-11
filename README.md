# no longer alone

"no longer alone" is a Battleship-inspired game.  
Instead of the sea, the battle takes place in space.  
The player has limited time and energy/shots to defeat the enemy.

![image](https://user-images.githubusercontent.com/31250302/115094006-0b0efe80-9eea-11eb-9ea6-3ef84de2efa4.png)

VERSION: As of 2021-05-10, the game is in beta, beta 1.5 "the admiral lifts" edition.

## Purpose

- The purpose of this game is to demonstrate core competencies with plain HTML5, CSS3, and JavaScript/ES6.
- It was a deliberate choice to avoid frameworks, libraries, and most tools.
- This allowed me to show DOM manipulation and other things that React handles for you.
- Even web components were avoided, even though they are valid as core JS (because I would have used React or Angular!)

## Installation

This game is entirely web-based, just click the link and play!  
https://nolongeralone.netlify.app

## Usage

1. Click the link under installation
2. Save the earth by clicking a grid quickly and accurately
3. Lament that you failed to save the Earth

## Differences in Desktop and Mobile

- Many of the nicer graphical effects are simplified or non-existent on mobile.
- Sometimes sounds are delayed on mobile because of inability to preload or buffer.
- In brief, while mobile is okay... desktop is a very nice experience.

## Original Sketches

- The original sketches are right here on GitHub, just not included in the downloaded project.
- Link: https://github.com/pauljstales/nolongeralone/tree/main/sketches
- The FIRST ever sketch was "superSecretGame"

## Contributing

- Improvements to the non-English languages are welcome and open!
- Because this is a _personal_ tech demo, tech contributions are not open right now.
- If this game becomes unexpectedly popular, tech contributions may open.

## Contributors

**Game Concept, Programmer, and CSS Animations**: Paul J Stales  
**Graphic Design, Music, and Sound Effects**: R.J. Vince  
**Testing**: Cameron Candelori, Kamil Nuzha, Samuel Soto  
**Localization**: Aleksey Gorshenin (Russian), Samuel Soto (Spanish), "Shadow" (Portuguese)  

Paul J Stales Twitter: https://twitter.com/pauljstales  
R.J. Vince Instagram: ~  
R.J. Vince Soundcloud: ~

## FAQ (Frequently Asked Questions)

1. Why didn't you use Phaser, React, framework, or library? _I wanted to demonstrate core HTML5, CSS3, and JavaScript/ES6 skills. I will definitely use more frameworks, libraries, etc. in future games._
2. Why didn't you use Canvas? _Canvas is HTML5, but I wanted to demonstrate an understanding of DOM manipulation. I will definitely use canvas in future games._
3. Why didn't you use Web Components? _I would have used React or Angular if I was going to use components!_
4. Are you using BEM? _Somewhat, the blocks, elements belonging to blocks, the modifiers, the naming…_
5. Why not a library for the internationalization? _Similar to #1, I wanted to demonstrate the core technology free of libraries._
6. Why are you using constants, but still have hard-coded strings? _I wanted to use constants to refer to the same things via constant in the JS, but without templates, libraries, etc. it would be quite difficult to have a single, central “source” of constants._
7. Why Battleship? _I have always felt it is a very boring game that could be so much better with some adjustments… and here are some of those adjustments._
8. Why is everything inside index.html? _It was not, at first, until I discovered iOS blocks just about every form of audio audioplay possible. Without frameworks and libraries, this was the best solution._
9. How did you get the idea for the game? _I was thinking about battleship and space. What is most terrifying about space? Discovering that we are "no longer alone" with hostile aliens. That's the gameplay, setting, and title - shoot alien ships in space, after realizing we are no longer alone._
10. What is that alien language on the loss screen? _A Ceaser cipher, the letters (in the English language) are shifted by 7. You can play around with it here! http://practicalcryptography.com/ciphers/caesar-cipher/. Also note the squad names are the same Ceaser cipher._

## License

[GNU]GNU General Public License v3.0
