# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview
This challenge is kind of the challenge for the layout using CSS where the grid system is not as flexible as it seems.

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

### Screenshot

![image](https://user-images.githubusercontent.com/42742924/119525051-e84fef80-bd9d-11eb-8fc2-332f6ffee0b6.png)
![image](https://user-images.githubusercontent.com/42742924/119525119-f69e0b80-bd9d-11eb-92a2-2f032aa1acc2.png)

### Links

- Solution URL: https://github.com/Skyz03/Front-end-Challenge/tree/master/HTML%20%26%20CSS/Newbie/Single-Price-Grid-Component
- Live Site URL: https://skyz03.github.io/Front-end-Challenge/HTML%20%26%20CSS/Newbie/Single-Price-Grid-Component/index.html

## My process
My main process to complete this challenge was to understand the CSS grid system by not implementing BootStrap and then add the content to complete the challenge as per its display in the JPEG file.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid

### What I learned

The most important thing that I learned in this challenge is the CSS grid system for the layout of the website.



```css
.card {
  width: 50%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
}
.heading-section {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: white;
  padding: 3% 5%;
}
.bottom-section {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: white;
}
```

### Continued development

The responsiveness can be made more smooth via use of better framework.

### Useful resources

- CSS Grid MDN Docs


## Author

- Website - Aakib Shah Sayed
