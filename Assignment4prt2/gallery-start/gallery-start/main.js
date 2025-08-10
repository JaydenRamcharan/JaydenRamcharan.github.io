/*File: Main.js
Date: August 9th 2025
Description: A website used for practicing java */


const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

const alts = {
'pic1.jpg' : 'a human eyeball',
'pic2.jpg' : 'a striped distorted rock',
'pic3.jpg' : 'purple and white flowers',
'pic4.jpg' : 'egyptian hyroglyphics',
'pic5.jpg' : 'a moth on a leaf'

}


/* Declaring the alternative text for each image file */
for (const image of images) {
  const newImage = document.createElement('img')
newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
newImage.addEventListener('click', e => {
displayedImage.src = e.target.src;
displayedImage.alt = e.target.alt;
  })


}


/* Looping through images */
for (const image of images) {

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);
 newImage.addEventListener('click', e => {
displayedImage.src = e.target.src;
displayedImage.alt = e.target.alt;});
 }
/* Wiring up the Darken/Lighten button */
