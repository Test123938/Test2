
# Resources
These are some resources used while making this game engine. You will likely find them useful while trying to understand the design decisions made in various systems.

## [Game Programming Patterns](https://gameprogrammingpatterns.com/contents.html)
There aren't enough good things to say about this book. So many of its chapters are excellent resources for designing games or game engines, and all of it is written well and easy to understand. Of particular importance for the development of this game engine were the chapters on:

* Game Loops (and update methods), which are understandably used for the overall loop of the game. A fixed update with dynamic rendering is used by default in this game engine.
* Event Queues, which can be seen in the EventQueue class
* Component pattern, which is used everywhere, such as for event Receivers and Emitters, or for Tweens and  Animations, or simply for all of the different aspects of GameNodes.
* The State pattern, for state machines.
* The Singleton pattern, for a select few classes of which there can only be one instance.

We highly recommend reading the entirety of this book, you'll thank yourself for it later.

## [Intersection Tests in 2D](https://noonat.github.io/intersect/)
Desigining a working physics system was the hardest thing about making this game engine. This resource provides excellent examples of different intersection tests for 2D objects (AABBs, points and lines), and gave me an excellent reference for handling collisions. This, in combination with a bit of trial and error is what resulted in the current physics system of this game engine. If you want to extend PhysicsManager and make your own physics system, or you're simply trying to understand what is going on in this physics system, it is worth reading through this relatively short web page. It may also help to follow the code snippets and make a little demo on your own.

## [Easing Functions](https://easings.net/)
We used the easing functions on this website as a reference for the ones included in this game engine. If you want a great visual representation of easing functions, check out this resource. Additionally, if you want to make your own easing functions, you can look at the code on this page and get an idea of how to do so.

## [The Algorithm Design Manual](https://www3.cs.stonybrook.edu/~skiena/)
The Algorithm Design Manual is the state of the art for understanding algorithms. This book was used as a reference for many of the data structures used in this game engine, such as Stacks, Queues, and Graphs; and for many of the associated algorithms, such as insertion sort and Djikstra's algorithm.

## [Typescript Docs](https://www.typescriptlang.org/docs/)
This entire game engine is written in TypeScript (and any code you write will be in TypeScript). If you know Java or Javascript, learning TypeScript shouldn't be too challenging, but having a resource for help is always good. The Typescript docs are fairly good at explaining confusing aspects of Typescript, and what they don't answer well or don't answer at all, Stack Overflow has an answer.
