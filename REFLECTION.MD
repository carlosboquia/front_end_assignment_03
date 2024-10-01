1.
My code starts with a variable that reflects the start of the game. After I created a function that will handle the UI and update based off the choice of the player. 
I manipulate the dom for the answers and questions so that they can be updated based off the const Story variable that I created later. 
I made the choice to create a button within javascript due a couple things. One, I originally had two buttons on my HTML and did not know how to navigate through the story paths. Two, I felt that it would be easier to modify with in the js file.
Created an event listener to modify the story when a choice is clicked.
For the story, I created a const with all the pathways and called back to previous lines of code such as nextState which changes to the next pathway based of the original choice. 

2. 
I followed the instructions step-by-step up until creating the story. I was originally calling the CurrentState only when it came to the certain aspects of the code such as questionsContainer and within the for loop the const choice variable. But it wasn't calling. After creating the story with pathways, I couldn't figure out why the current state of the game wasn't reflecting. After looking at online sources I found out that I should be calling the story with current state (ex. story[currentState]). Afterwards the switch case made sense. I created console.log for all switches to confirm the pathway was correct. 

3. 
As per question 2. I had issues with my use of current state and combining with const story. I was wondering why the pathways werent switching at all even though I believed the code was ready in place. I also generally had issues with the structure of the whole code and was questioning if it was correct at all during certain aspects of the process. 

4. 
Theres not much on what I would do differently. But one main thing is the ability to use two buttons and create two seperate elements so when using CSS to style, I can change the color of the first two choices i.e red pill for red and blue pill for blue and have the changes afterward be a default colour. I also would want to try an if else if statement instead of switch. 


