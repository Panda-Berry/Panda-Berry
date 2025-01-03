// JavaScript code to check the answers and reveal the answer if incorrect
const checkButtons = document.querySelectorAll('.check-answer');
const userAnswerInputs = document.querySelectorAll('.user-answer');
const flashcards = document.querySelectorAll('.flashcard');
const correctAnswerElements = document.querySelectorAll('.correct-answer');

checkButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const userAnswerInput = userAnswerInputs[index];
        const resultMessage = document.querySelectorAll('.result')[index];
        const flashcard = flashcards[index];
        const correctAnswerElement = correctAnswerElements[index];
        const correctAnswers = [
            'こんにちは', // Answer to Question 1
            'ありがとう', // Answer to Question 2
            // Add more correct answers here
        ];
        const userAnswer = userAnswerInput.value.trim();

        if (correctAnswers[index] === userAnswer) {
            resultMessage.textContent = 'Correct!';
            resultMessage.style.color = 'green';
        } else {
            resultMessage.textContent = 'Incorrect. See the correct answer below:';
            resultMessage.style.color = 'red';
            correctAnswerElement.style.display = 'block'; // Show the correct answer
            flashcard.classList.add('incorrect'); // Add the "incorrect" class to expand the flashcard
            userAnswerInput.setAttribute('disabled', 'true'); // Disable the input
            button.style.display = 'none'; // Hide the "Check Answer" button
        }
    });
});

// Add event listeners to handle "Enter" key press for each input
userAnswerInputs.forEach((input, index) => {
    input.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            // Trigger a click event on the corresponding "Check Answer" button
            checkButtons[index].click();
        }
    });
});

// Add event listeners to show the correct answer when the flashcard is clicked
flashcards.forEach((flashcard, index) => {
    flashcard.addEventListener('click', () => {
        const correctAnswerElement = correctAnswerElements[index];
        correctAnswerElement.style.display = 'block'; // Show the correct answer
    });
});
