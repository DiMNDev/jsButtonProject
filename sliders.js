//#region rgbSliders
//Define elements with selectors.
const redSlider = document.querySelector("#rangeRed");
const greenSlider = document.querySelector("#rangeGreen");
const blueSlider = document.getElementById("rangeBlue");
const displayRed = document.getElementById("redVal");
const displayGreen = document.getElementById("greenVal");
const displayBlue = document.getElementById("blueVal");
const colorBG = document.querySelectorAll(".RGBBG");
//Define initial values for RGB sliders.
let redValue = 50,
  greenValue = 0,
  blueValue = 50;
//Concatenate rgb values for style.background and apply to each element.
const rgbFunc = (r, g, b) => {
  //Loop over dom elements to change background color with slider values
  colorBG.forEach((element) => {
    element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
};
//Create an array to utilize Array.forEach
const RGBValues = [redSlider, greenSlider, blueSlider];
//Get value from each slider
RGBValues.forEach((slider) => {
  //listen for input from each slider
  slider.addEventListener("input", (slide) => {
    //Update values from specific slider
    switch (slider) {
      //each case represents an individual slider
      case rangeRed:
        //get value from slider
        redValue = slide.target.value;
        //concatenate RGB values and update dom
        rgbFunc(redValue, greenValue, blueValue);
        //display value from slider
        displayRed.innerHTML = redValue;
        break;
      case rangeGreen:
        greenValue = slide.target.value;
        rgbFunc(redValue, greenValue, blueValue);
        displayGreen.innerHTML = greenValue;
        break;
      case rangeBlue:
        blueValue = slide.target.value;
        rgbFunc(redValue, greenValue, blueValue);
        displayBlue.innerHTML = blueValue;
        break;
    }
  });
});
//#endregion
//#region effectSliders
//Define elements with selectors
const hueSlider = document.querySelector("#rangeHue");
const saturationSlider = document.getElementById("rangeSaturation");
const contrastSlider = document.getElementById("rangeContrast");
const displayHue = document.getElementById("hueVal");
const displaySaturation = document.getElementById("saturationVal");
const displayContrast = document.getElementById("contrastVal");
const uglyPatty = document.getElementById("patty");
// Define initial values for image sliders
let hueValue = 0,
  saturationValue = 1,
  contrastValue = 1;
//Concatenate hue, saturation, and contrast; consolidate to string and update style.filter
const filterFunc = (h, s, c) => {
  let hueVal = `hue-rotate(${h}deg)`;
  let satVal = `saturate(${s})`;
  let conVal = `contrast(${c})`;
  uglyPatty.style.filter = `${hueVal} ${satVal} ${conVal} drop-shadow(-5px 10px 30px black)`;
};
// Create an array to utilize Array.forEach
const effectValues = [hueSlider, saturationSlider, contrastSlider];
//Get value from each slider
effectValues.forEach((effect) => {
  //listen for input from each slider
  effect.addEventListener("input", (slide) => {
    //Update values from each slider(effect)
    switch (effect) {
      //each case represents an individual slider
      case rangeHue:
        //get value from slider
        hueValue = slide.target.value;
        //display value from slider
        displayHue.innerHTML = hueValue;
        filterFunc(hueValue, saturationValue, contrastValue);
        break;
      case rangeSaturation:
        saturationValue = slide.target.value;
        filterFunc(hueValue, saturationValue, contrastValue);
        displaySaturation.innerHTML = saturationValue;
        break;
      case rangeContrast:
        contrastValue = slide.target.value;
        filterFunc(hueValue, saturationValue, contrastValue);
        displayContrast.innerHTML = contrastValue;
        break;
    }
  });
});
//#endregion
//#region bigRedButton
//Define bigRedButton
const bigRedButton = document.querySelector("#btn");
//Define 'clicks' to track clicks
let clicks = 0;
//Listen for click
bigRedButton.addEventListener("click", (e) => {
  e.preventDefault();
  //increment clicks
  clicks++;
  //Update bigRedButton text to reflect clicks
  bigRedButton.innerHTML = clicks;
  //Increment fontsize with greater clicks
  bigRedButton.style.fontSize = `${clicks + 30}px`;
  //Set timer to trigger decrement
  timer(3000);
});
//triggers on click
const timer = (time) => {
  // triggers after 3 seconds
  setTimeout(() => decrement(), time);
};
//count down clicks
const decrement = () => {
  //decrement clicks
  clicks--;
  //Update bigRedButton text to reflect clicks
  bigRedButton.innerHTML = clicks;
  //Decrement font size during countdown
  bigRedButton.style.fontSize = `${clicks - 1 + 30}px`;
  //Check clicks is 0 and replace button text
  if (clicks === 0) {
    bigRedButton.innerHTML = "BIG RED BUTTON";
  }
};
//#endregion
//#region onLoad
//Update DOM values upon load
function init() {
  redSlider.value = redValue;
  greenSlider.value = greenValue;
  blueSlider.value = blueValue;
  hueSlider.value = hueValue;
  saturationSlider.value = saturationValue;
  contrastSlider.value = contrastValue;
  displayRed.innerHTML = redValue;
  displayGreen.innerHTML = greenValue;
  displayBlue.innerHTML = blueValue;
  displayHue.innerHTML = hueValue;
  displaySaturation.innerHTML = saturationValue;
  displayContrast.innerHTML = contrastValue;
  rgbFunc(redValue, greenValue, blueValue);
  filterFunc(hueValue, saturationValue, contrastValue);
}
//#endregion
