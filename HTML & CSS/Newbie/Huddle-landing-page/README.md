# Frontend Mentor - Huddle landing page with single introductory section solution

This is a solution to the [Huddle landing page with single introductory section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
This was an intresting challenge where I implemeted CSS flexbox and made it resposive as possible.


### The challenge

Users should be able to:

- View the optimal layout for the page depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![image](https://user-images.githubusercontent.com/42742924/119970483-81198180-bfcf-11eb-9383-642fdf683e03.png)
![image](https://user-images.githubusercontent.com/42742924/119970720-cccc2b00-bfcf-11eb-911d-c68135f525c7.png)

### Links

- Solution URL: https://github.com/Skyz03/Front-end-Challenge/tree/master/HTML%20%26%20CSS/Newbie/Huddle-landing-page
- Live Site URL: https://skyz03.github.io/Front-end-Challenge/HTML%20%26%20CSS/Newbie/Huddle-landing-page/index.html

## My process

I implemented the Flexbox to arrange the layout of the image & the content and styled as per the design, then finally added the social icons with relative positon as my best solution.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Positioning

### What I learned
The main thing i learned from this challenge is that I learned about the use of Flexbox for responsive design rather than just using BOOTSTRAP for the responsive design. Also learned about CSS relative positioning where ```content-section```  is in relative position for the position of the icons nor earlier it was with respect to body. 

```html
.container-flex {
  display: flex;
  flex-direction: row;
  padding-top: 5%;
}
```
```css
.container-flex {
    flex-direction: column;
  }
  .responsive-img {
    max-width: 100%;
    height: auto;
  }
  .content-section {
    max-width: 100%;
    text-align: center;
  }
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

The Website social icons were improved with the relative position of the container with respect to it rather than with respect with the body.
Thanks to @tediko for the advice.

### Useful resources

- MDN CSS Flexbox 
- MDN Responsive Website 
- MDN Responsive Images

## Author

- Website - Skyz03

## Acknowledgement

Thanks to @tediko for the advice for the social icons section.
