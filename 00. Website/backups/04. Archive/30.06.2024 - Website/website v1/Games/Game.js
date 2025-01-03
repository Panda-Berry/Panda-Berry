const checkButtons = document.querySelectorAll('.check-answer');
const userAnswerInputs = document.querySelectorAll('.user-answer');
const flashcards = document.querySelectorAll('.flashcard');
const correctAnswerElements = document.querySelectorAll('.correct-answer');

const correctAnswers = [
    'こんにちは', // Answer to Question 1
    'ありがとう', // Answer to Question 2
    '1' // Answer to Question 3 (matching value of the correct radio button)
];

checkButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const resultMessage = document.querySelectorAll('.result')[index];
        const correctAnswerElement = correctAnswerElements[index];
        const radioButtons = document.querySelectorAll(`input[name="q${index + 1}"]:checked`);

        if (radioButtons.length === 0) {
            resultMessage.textContent = 'Please select an answer.';
            resultMessage.style.color = 'red';
            return;
        }

        const userAnswer = radioButtons[0].value;

        // Disable all radio buttons after checking the answer
        radioButtons.forEach(radio => {
            radio.disabled = true;
        });

        if (userAnswer === correctAnswers[index]) {
            resultMessage.textContent = 'Correct!';
            resultMessage.style.color = 'green';
        } else {
            resultMessage.textContent = 'Incorrect.';
            resultMessage.style.color = 'red';
            correctAnswerElement.style.display = 'block'; // Show the correct answer
            flashcards[index].classList.add('incorrect'); // Add the "incorrect" class to expand the flashcard
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
