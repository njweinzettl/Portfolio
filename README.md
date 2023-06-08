# Portfolio Website

## Introduction
This project is part of the "Introduction to Web Development" class at Te Pūkenga - New Zealand Institute of Skills and Technology. It is a Portfolio website for myself to display projects I did in my educational career and provide a contact possibility for future projects and collaboration opportunities.

## Technology
For the development the sveltekit UI framework was used which is based on the open-source front end component framework svelte and supports HTML, CSS and JavaScript. Using this framework was a requirement from the project instructions for the lecturers.

If you are interested in svelte and seveltekit more informations can be found here: 
- https://svelte.dev/
- https://kit.svelte.dev/

## Challanges
While developing the website some challenges were encountered.

1. Setting up the API to Google forms
2. Maintaining responsiveness across the whole website

## Credits
Several source helped me to solve the just mentioned challenges:
- https://developer.mozilla.org/en-US/
- https://kit.svelte.dev/docs/introduction

These sources also might help to better comprehend written code in the project; especially the sveltekit specific code.

Furthermore my lecturer was a great help when I got stuck. You can find his github here: https://github.com/dfenders

## How to use the project
The project is open to use with no need for authentification. If you like the project you can use it as a template for your own portfolio website. Also you can enhance and change it completely to tailor it to your needs and preferences.

The website is structured in the home, about, projects, and contact page. All these pages are located in the *routes* folder. The *lib* folder contains all components that were used in one or more sites of the website. The *static* folder contains media used for the single sites such as .png, .svg and .gif.

In terms of design principles I went for a minimalistic aesthetic with a pinch of color. There is a *main.css* file included in the project setting the global design principles. Then on each page or component the global design rules are overwritten when different styling was desired. 

## Future implementations
Improvements and features for future implementation in this project could be:

- User test to improve UX

## MIT License

Copyright (c) [2023] [Nadja Weinzettl]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
