# Premier League Greatest Facts 

Premier League greatest facts is a quiz designed around the best league in the world the Premier League this quiz will test the knowledge of the users with questions of increasing difficulty as the user progresses through.

## CONTENTS

- [Premier League Greatest Facts](#premier-league-greatest-facts)
  - [CONTENTS](#contents)
  - [Project Goals](#project-goals)
    - [Client Goals](#client-goals)
    - [User Goals](#user-goals)
    - [Frequent user goals](#frequent-user-goals)
    - [Future Implementations](#future-implementations)
  - [Design](#design)
  - [Typography](#typography)
    - [Headings](#headings)
    - [Body](#body)
    - [Wireframes](#wireframes)
      - [Mobile](#mobile)
      - [Desktop](#desktop)
  - [Key Features](#key-features)
    - [Favicon](#favicon)
      - [Favicon Mobile](#favicon-mobile)
      - [Favicon Desktop](#favicon-desktop)
    - [Questions](#questions)
      - [Questions Mobile view](#questions-mobile-view)
      - [Questions Desktop view](#questions-desktop-view)
    - [Instructions](#instructions)
      - [Instructions Mobile view](#instructions-mobile-view)
      - [Instructions Desktop view](#instructions-desktop-view)
    - [Play button](#play-button)
      - [Play button Mobile view](#play-button-mobile-view)
      - [Play button Desktop view](#play-button-desktop-view)
    - [Answers](#answers)
      - [Answers Mobile view](#answers-mobile-view)
      - [Answers Desktop View](#answers-desktop-view)
    - [Next and Previous buttons](#next-and-previous-buttons)
      - [Mobile view next and previous buttons](#mobile-view-next-and-previous-buttons)
      - [Desktop next and previous buttons view](#desktop-next-and-previous-buttons-view)
    - [Contact page](#contact-page)
      - [Mobile view contact page](#mobile-view-contact-page)
      - [Desktop view contact page](#desktop-view-contact-page)
    - [Error 404 page](#error-404-page)
      - [Mobile view error page view](#mobile-view-error-page-view)
      - [Desktop view error page view](#desktop-view-error-page-view)
  - [Accessibilty](#accessibilty)
  - [Technology](#technology)
    - [Languages](#languages)
    - [Frameworks \& Tools](#frameworks--tools)
  - [Deployment](#deployment)
    - [How to deploy](#how-to-deploy)
    - [Local Deployment](#local-deployment)
      - [How to Fork](#how-to-fork)
      - [How to clone](#how-to-clone)
  - [Testing](#testing)
    - [Solved Bugs](#solved-bugs)
  - [Credits](#credits)
    - [Media](#media)
      - [Imagery](#imagery)
      - [Code](#code)
      - [Content](#content)
    - [Acknowledgements](#acknowledgements)




![Live Project](https://mattthughes.github.io/premier-quiz/)

## Project Goals

### Client Goals

* Build a responsive quiz for all screen sizes
* The objective and purpose behind the quiz is evident upon loading the webpage
* Quiz allows future users to go again and recieve a higher score increasing the attention the website gains.

### User Goals 

* Test knowledge to prove how much they know.
* Learn information and facts they didnt quite know.
* Be able to view instructions which explains how the quiz works
* Be able to skip certain questions and go back if they would like to attempt certain questions again.
  

### Frequent user goals 

* Attempt Quiz again to beat high score 
* Be able to view high scores
* Complete contact form to highlight any queries or request new questions.

### Future Implementations



## Design

## Typography

### Headings 

### Body

### Wireframes 

#### Mobile 

#### Desktop

## Key Features 

### Favicon

#### Favicon Mobile

#### Favicon Desktop


### Questions 

* This element will be generated by the javascript object question where these questions will gradually increase in difficulty for users allowing new users to start the quiz gradually to not deter newer users from taking part.

#### Questions Mobile view
![Mobile view questions]()

#### Questions Desktop view

![Desktop view questions]()

### Instructions

* This element will be generated when clicking on the instructions button this will be done by using the class list to add class and the remove class by using two functions to trigger the hide and show elements. Allowing the user to view the insturctions first will allow users to understand what they need to do before starting the quiz welcoming new users not detering them.

#### Instructions Mobile view 

![Mobile view instructions button](docs/wireframes/instructions-button-mobile.png)

![Mobile view instructions](docs/wireframes/instructions-text-mobile.png)

#### Instructions Desktop view

![Desktop view instructions]()

### Play button 

* This element will allow users to decide when they would like to start the quiz, rather than the first question loading upon opening the website, this allows users to take there time, will not force users to start the quiz straight away.

#### Play button Mobile view

![Mobile view play button](docs/wireframes/play-button-mobile.png)

#### Play button Desktop view

![Desktop view play button](docs/wireframes/play-button-desktop.png)

### Answers 

* This element is the main purpose of the quiz the answer these will be shuffled to make sure answers are not in the same place as they were orginally upon trying the quiz again. These answers will be generated by the anwers object which is a child of the questions object and will be generated by the function showAnswer().

#### Answers Mobile view

![Mobile view answers](docs/wireframes/answers-mobile.png)

#### Answers Desktop View

![Desktop view answers](docs/wireframes/answers-desktop.png)

### Next and Previous buttons 

* This element will allow users to either skip questions or to go back to previous questions if they would like to attempt a specific question again, this doesnt pressure users into answering the questions, allowing users to take there time during the quiz.

#### Mobile view next and previous buttons

![Mobile view Next, Previous buttons]()

#### Desktop next and previous buttons view

![Desktop view, Next, Previous buttons]()

### Contact page

* This element wil be shown to users if they get every question correct, this contact page will allow the user via a drop down to select there favourite team enter there email and first and surname as well once submitting this form it will load an extra page thanking the user for there participation in the quiz, while also entering them into a raffel for a chance to visit a live Premier league game of there choosing.

#### Mobile view contact page

#### Desktop view contact page 

### Error 404 page

* This will be an extra page with the same style as the rest of the quiz, this page will only be used if the page does not exist, git hub will find this page instead of the standard page created by git hub themselves

#### Mobile view error page view

#### Desktop view error page view 

## Accessibilty 

## Technology 

### Languages

### Frameworks & Tools 

## Deployment 

### How to deploy 

### Local Deployment 

#### How to Fork

#### How to clone

## Testing

### Solved Bugs

* Fixed the class add issue, to fix this I created a second function called hideElements and added the hide class from the css and then added the class list add class to the show instructions function which was labelled as show changing the element from display none to display block to show the instructions.
* Fixed the issue where the footer would not stick to the bottom of the page, in order to fix this I changed the values min-height and added display flex and flex direction elements, this adjusted the main content to take up all the extra space, I also added the flex-grow property to make sure this was consistent on all screen sizes, I then added the margin-top auto style to make sure the footer stayed at the bottom of the page.
- There was an issue where the background Image would show unnessary white space when clicking the instructions button. In order to fix this I adjusted the larger padding and margin values on the instrutions window, doing this along with the fixed footer bug fix solved this issue.
- Button Elements were not centering on Tablets and Desktop screen sizes in order to fix this I added the property display flex, flex-direction column to the parent element and then used the align self element on the start and instructions button, aligning them to the center which fixed this issue.
- Fixed a bug where the instructions were visible after pressing the start button while viewing the instructions, in order to fix this I added the hide instructions function to the run game function which fixed this issue.
- Solved bugs with the quiz background this was not displaying correctly because of the height vh value removed the height value to fix this issue.
- Solved issue where there was a type error regarding the keyword question stating the value was undefined and was also trying to be used before initialisation in order to fix this initalised value outside the function declaration.
- Fixed the bug regarding duplicate answers from the runGame function in order to fix this I added a reset state function which hid the next button and used a while loop to remove the first child when it was active in the while loop.

## Credits 

### Media 

#### Imagery 

#### Code

#### Content

### Acknowledgements 




