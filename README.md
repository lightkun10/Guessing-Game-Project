# Guessing Game Project

## Project Overview

### Objective

The Guessing Game Project stands as a demonstration of coding proficiency and creativity. The goal was to develop an engaging guessing game, where users navigate through the challenge of uncovering a randomly selected secret number, enhanced by insightful hints.

### Development Phases

#### Phase I: Establishing Foundations

- **Initialization**: Commenced by initializing the `secretNumber` variable, setting the groundwork for subsequent testing and development.

- **checkGuess Function**: Core logic lies in the `checkGuess` function, assessing user input against the secret number and delivering nuanced hints based on the comparison.

- **askGuess Function**: Leveraging Node's readline module, the `askGuess` function orchestrates a seamless user experience. Ensures correct type conversion for user inputs and implements conditional flow for an engaging gameplay loop.

#### Phase II: Adding Randomness

- **randomInRange Function**: Introduced randomness, elevating the gaming experience. The `randomInRange` function injects unpredictability by generating a random whole number within a specified range.

- **Random Initialization**: Replaced the initial static `secretNumber` with a dynamic, randomly generated number between 0 and 100 using the `randomInRange` function.

- **askRange Function**: Enhances user involvement by prompting users to define their own range, adding a layer of personalization to the game.

#### Bonus: Turn Limitation

- **Limited Turns**: Added a strategic element by restricting the player to a predefined number of attempts. The `numAttempts` variable introduces challenge, enhancing the game's depth.

- **Dynamic Limit**: Elevated the gaming experience by allowing users to tailor the game to their preferences, creating a flexible and inclusive environment.

### Code Structure

The code structure prioritizes functionality and readability. Each function serves a distinct purpose, ensuring clarity and maintainability. Thoughtful comments guide through complex logic, highlighting key elements.

### Execution

Running the game is streamlined. Follow provided instructions for a firsthand experience. Code accessibility and dependencies are clearly outlined for seamless execution.
