# DWA11

Dynamic Web Apps 11 Challenge

## Description
For this challenge, I will be required to use the two supplied video lessons as a reference to create my own implementation of a Redux-inspired store to manage the state of a basic counting Tally App. Note that I am not required to render any HTML to the screen, but instead should add subscriptions that merely log the new state to the console if it changes.

## User Stories (Gherkin syntax)

### SCENARIO 1: Initial state
- [X] GIVEN no interactions have been performed yet
- [X] WHEN the “getState” method is run
- [X] AND the result is logged to the console
- [X] AND the browser console is open
- [X] THEN the state should show a count of 0

### SCENARIO 2: Increment the counter by one
- [X] GIVEN no interactions have been performed yet
- [X] WHEN an “ADD” action is dispatched
- [X] AND another “ADD” action is dispatched
- [X] AND the browser console is open
- [X] THEN the state should show a count of 2

### SCENARIO 3: Decrement the counter by one
- [X] GIVEN the current count in the state is 2
- [X] WHEN a “SUBTRACT” action is dispatched
- [X] AND the browser console is open
- [X] THEN the state should display a count of 1

### SCENARIO 4: Resetting the Tally Counter
- [X] GIVEN the current count in the state is 1
- [X] WHEN a “RESET” action is dispatched
- [X] AND the browser console is open
- [X] THEN the state should display a count of 0