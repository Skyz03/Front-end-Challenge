# Frontend Mentor - Testimonials grid section solution

This is a solution to the [Testimonials grid section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/testimonials-grid-section-Nnw6J7Un7). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)


## Overview
This is a testomonial grid challenge build using CSS Grid area method & HTML5

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot
![image](https://user-images.githubusercontent.com/42742924/120345860-97e70d80-c31a-11eb-973f-2a3ddc125f15.png)
![image](https://user-images.githubusercontent.com/42742924/120345926-a33a3900-c31a-11eb-9cd1-da81dd7ccb9e.png)


### Links

- Solution URL: https://github.com/Skyz03/Front-end-Challenge/tree/master/HTML%20%26%20CSS/Junior/testimonials-grid-section
- Live Site URL: https://skyz03.github.io/Front-end-Challenge/HTML%20%26%20CSS/Junior/testimonials-grid-section/index.html

## My process

Application of CSS Grid using MDN video (https://youtu.be/KOvGeFUHAC0).  
Designed the Webstite as per the design needed.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned
The most important thing I learned from this challenge was the use of CSS grid area for multiple rows plus ```grid: span 2``` when needed for certain elements when applying for individual element.

```css
container-grid {
  display: grid;
  grid-template-areas:
    "card-one card-one card-two card-five"
    "card-three card-four card-four card-five";
  gap: 20px;
}
.card-one {
  grid-area: card-one;
  background-color: hsl(263, 55%, 52%);
  color: white;
}
```

### Continued development

Useful animation or better coding pattern can be applied for further future development.

### Useful resources

- [MDN CSS Grid](https://youtu.be/KOvGeFUHAC0) - This helped me for CSS Grid & layout ``` grid-template-areas:"card-one card-one card-two card-five" "card-three card-four card-four card-five"; ```.
- [Semantic HTML 5 - FreeCode Camp](https://www.freecodecamp.org/news/semantic-html5-elements/) - This is an amazing article which helped me finally understand semantic Html5 which was recommed to me by @tediko. I'd recommend it to anyone still learning this concept.



## Author

- Website - Skyz03

## Acknowledgments
Thanks to @tediko for recommeding me HTML5 freecodecamp site.
