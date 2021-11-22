# Notes about Yahtzee (before lecture)

I opened the app in Chrome and started poking around with the React DevTools.

* There is a `<Game />` component, that is split into a header with the `<Dice />` and titles in it, and a `<ScoreTable />` component. It also renders a button that can use the `<Game />`'s *roll() onClick*.

* `<Dice />` look to be buttons with a click handler. They have a value locked for the toggle, and their key is also simple an index of the Dice array.

* `<ScoreTable />` looks to be split into two sections in the HTML for the Upper score table and Lower score table. In here there is a component called `<RuleRow />` rendered for each of the upper score table rules.

* `<RuleRow />` is a component with a `<tr>` and two `<td>`'s for *name* and *score*, which are properties. Right now it doesn't show the score but it will be on the right side of each RuleRow. The separation of the upper and lower scoretable is purely cosmetic and to show a different tier of scoring like the real game does on it's game card.

How it is set up leads me to believe that `<Game />` is handling the game state and most of the logic. I imagine that the `<Dice />` get rendered and sent down their props for *val*, *locked*, *id*, and the `<Game />`'s click function for toggling. Then, when you click one of the `<ScoreTable />` `<RuleRow />`s, it calls the `<Game />`s *doScore()* to apply the score to the total. Some of the notes mentioned a lot of this is broken right now but the `<RuleRow />` should also prevent itself from being scored again, increment the total score, and disallow rerolling, move to the next "round", etc.

### *Rules.js*

* `Rule`: base class that other game rules extend. This class object defines functionality to act on the dice like *sum*, *freq*, *count*. Then, the other `Rule`s extend this class for their own unique need.

* `TotalOneNumber extends Rule`: has a function that takes a given value (ones, twos, threes) and sums those dice only in the array for scoring like "Sum of All Ones"

* `SumDistro extends Rule`: the logic of how this one works is confusing, but it 

* `FullHouse`, `SmallStraight`, `LargeStraight`, and `Yahtzee` are all abstracted from Rule and handle the logic of scoring the game for their category respectively.

#### Variables

* *ones, twos, threes, etc* calculated using new TotalOneNumber taking in value of the respective variable. Equals the score of the sum of that value in the current dice.

* *threeOfKind* and *fourOfKind* variables that are calculated using new SumDistro to be equal to the scoring for its respective 'x of a kind'.

Then finally the Rules.js exports all of the variables so it can be used to score the game.

The Rules.js file has all of these classes and variables to allow the logic to be contained for calculating the scoring and rule logic away from the rendering. It allows me to work on the rules separately, even adding and removing rules, without totally destroying the JSX or overpopulating the `<Game />` component.


