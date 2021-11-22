# Yahtzee

This is another 'starter' code project from the React course. I am tasked with a good many things listed in the comments of the code. Basically, the goal is to get this Yahtzee game running and working how you'd expect.

I'm really enjoying that a lot of these projects have game loop logic in the examples. I have a few small games in mind for my portfolio, and plan on using this knowledge directly to help me implement those ideas.

* Chance and strategy dice rolling game played over 13 rounds.

* Each round player rolls five 6-sided dice. May click on any number of dice to "freeze" them, and may re-roll unfrozen dice up to two times.

* Each round they must assign their dice to any unclaimed scoring category. Each category scores differently.

* After 13 rounds the game is over and the player's score is the total of each scoring category.

## Initial Project State

<img src="https://i.imgur.com/cZh0H5w.png">

Mostly visual and some game rules in but is very broken functionally, see */public/notes* for my thoughts about the starter code before diving into the project.

# Tasks

### Draw Diagram of Components

  - read through the source code and make a diagram of the components, along with prop and state
  - as you read the code, think about what areas were easy to understand, and whether there were things that took longer to understand
  - **My notes before diving into this project can be found in */public/notes/***

### Fix Clicking Dice

  - Should be able to click a dice and toggle whether it is frozen or not, fix it.

### Read *Rules.js*

  - The system for evaluating a roll score is handled by a series of object oriented classes, since many of the rules are similar to each other. Familiarize yourself with how this works, because you're going to be fixing some of them.

### Add Missing Rules

  - Two evaluation rule classes in *Rules.js* are incomplete:
    * full house should be 3 of one die and 2 of another, and always scores 25
    * small straight is four dice in a row (1-2-3-4, 2-3-4-5) and should always score 30
  - Write the classes for these rules.

### Prevent Rolling More than 3 Times

  - You should only get two chances to reroll, but the game is currently bugged and you have unlimited rerolls, as long as you unlock some of the dice first. FIX!

### Disallow Re-Using The Score Line

  - the game currently lets you keep rescorign the same scoring line, so you can score 3 of a kind several times, but only once)
  - provided classes RuleRow-active and RuleRow-disabled that can be used for styling

### Add Descriptions

  - add a description to each rule to explain how its scored, and have it display before the user has clicked on a rule row. Once the user clicks it, hide description and instead display the score value.

### Add Icons

  - Instead of rendering each Die as a simple number in a box, rewrite the code to use font-awesome die icons. Need to unclide font-awesome, either using CDN or a node module. The classes you should use are "fas fa-dice-one", etc.

### Animate The Dice

  - This part is tricky, make sure dice shake or spin when they are being rolled. Dont worry about creatinging beautiful animations. Make sure the user cant click a die to toggle when the animation is going on.

### Celebrate

  - You are done! But...there are a few additional features we could add...
    - Bug that you can assign the same dice to more than one score line. Test and fix.
    - Start the game with the dice rolled randomly rather than having to click the button.
    - Show total score
    - Detect when game is over and add Play Again? to reset the game.
    - "styled-components" learn and implement.
