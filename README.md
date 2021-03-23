My initial project idea was to just make a quiz, but then it turned into a webpage all about space! The three requirements I chose to meet were:

1. Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application:
    I created and array to store my quiz questions and display them on the quiz portion of the page.

2. Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event):
    I created a countdown on the webpage that displays how many days, hours, minutes, and seconds left until the next SpaceX launch with Astronauts onboard.

3. Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX):
    I used fetch() to retrieve data from the NASA Astronomy Picture of the Day (APOD) API to display the APOD picture on my webpage once a button has been clicked.

For the quiz the user will answers the questions displayed on the page. Once they are finished answering the questions and the "Submit Answers!" button is clicked, the results return the amount of questions the user got correct in the "Quiz Results" section. Once the submit button is clicked, it will also change text to "Blast Off!" The Quiz Results message will display a message based on how many questions the user gets correct (Ex: 5 out of 5 correct answers will display "Congrats! You got 5 out of 5 correct!", 4 out of 5 correct will display "Pretty good! You got 4 out of 5 correct!" etc.) The program also highlights which answers the user got correct in green and the ones that were incorrect in red.

For the countdown portion of the webpage, I used Math.floor to calculate and display the amount of time left until the next the next SpaceX rocket launch with Astronauts on board which will happen on April 20, 2021.

Last but not least, I used fetch() to get the NASA Astronomy Picture of the Day (APOD) API along with an API key to retrieve and display the APOD once the "Click here for the Astronomy Pic of the Day" button is clicked. It will also display the description of the picture as well. 

CSS Media Queries are also incorporated to make webpage responsive.