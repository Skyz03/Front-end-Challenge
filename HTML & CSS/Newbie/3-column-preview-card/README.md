# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
This was a quite easier challenge which was acheived using CSS FlexBox, Media Queries & Custom CSS.


### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![image](https://user-images.githubusercontent.com/42742924/120070200-39ffbf00-c0a9-11eb-8a6d-dae06161f952.png)
![image](https://user-images.githubusercontent.com/42742924/120070231-4421bd80-c0a9-11eb-9bfd-1deefff46836.png)


### Links

- Solution URL: https://github.com/Skyz03/Front-end-Challenge/tree/master/HTML%20%26%20CSS/Newbie/3-column-preview-card
- Live Site URL: https://skyz03.github.io/Front-end-Challenge/HTML%20%26%20CSS/Newbie/3-column-preview-card/index.html
## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Media Queries
- 
### What I learned

The Main thing I learned & implemented in this challenge was the use of the CSS Flexbox & Use of Media Queries to make it responsive plus make the text transparent to its colour and the way to make the ``` cursor: pointer; ``` rather than using the ```anchor``` tags.  

```css
.container-flex {
  display: flex;
  flex-direction: row;
}
```
```css
@media (max-width: 1024px) {
  .container-flex {
    flex-direction: column;
  }
}
```
```css
 .learn-btn:hover {
    border: 2px solid white;
    background-color: transparent;
    color: white;
    cursor: pointer;
  }
  ```


### Continued development

There can be many ways to make it responsive and may be add animation to this challenges. 


### Useful resources

- CSS FlexBox Layout System

## Author

- Website - ```Skyz03``` 
