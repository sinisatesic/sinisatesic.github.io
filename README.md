Bonjour!

Herein this file is a brief description regarding this repo and the content within it. 
This repo hosts the files attributed to my live personal website, contents to
my live art website, and contents to a mars weather project. My personal website is
intended to increase my chances for getting interviews and hopefully that first software development job.

IDE used: IntelliJ |
Languages: HTML, CSS, JavaScript, jQuery, GSAP |


For the personal site, I utilized Bootstrap primarily for responsiveness on the site; it is mobile and tablet responsive.
The background color-shifting is completed with CSS keyframe animations. I created multiple divs 
containing heights of the entirety of the page, and set their opacity from 0 to 1, as well as their 
colors to change, but I set each proceeding div bar to have a delay slightly greater than the previous.
This in return creates a neat staggering, visually shifting appearance. 

The code for this is below:

```
/*columns in background - consist of keyframe animations for opacity and height-shifting*/
.column1 {
    min-height: 100vh;
    width: 172px;
    background: #bdc0f6;
    position: absolute;
    animation: column-fading 3s ease-in-out infinite;
}
@keyframes column-fading {
    0% {
        height: 0vh;
        opacity: 0;
    }
    25%{
        opacity: .25;
    }
    50%{
        opacity: 1;
    }
    75%{
        opacity: .25;
    }
    100%{
        height: 100vh;
        opacity: 0;
    }
}

.column2 {
    min-height: 100vh;
    width: 172px;
    background: #7fcef6;
    position: absolute;
    margin-left: 11%;
    animation: column-fading 3s ease-in-out infinite;
    animation-delay: 1s;
}

.column3 {
    min-height: 100vh;
    width: 172px;
    background: #b28fe5;
    position: absolute;
    margin-left: 22%;
    animation: column-fading 3s ease-in-out infinite;
    animation-delay: 1.5s;
}

.column4 {
    min-height: 100vh;
    width: 172px;
    background: #c6bef6;
    position: absolute;
    margin-left: 33%;
    animation: column-fading 3s ease-in-out infinite;
    animation-delay: 2s;
}

.column5 {
    min-height: 100vh;
    width: 172px;
    background: #9ac8f6;
    position: absolute;
    margin-left: 44%;
    animation: column-fading 3s ease-in-out infinite;
    animation-delay: 2.5s;
}

.column6 {
    min-height: 100vh;
    width: 172px;
    background: #577df6;
    position: absolute;
    margin-left: 55%;
    animation: column-fading 3s ease-in-out infinite;
    animation-delay: 3s;
}

.column7 {
    min-height: 100vh;
    width: 172px;
    background: #7176e5;
    position: absolute;
    margin-left: 66%;
    animation: column-fading 3s ease-in-out infinite;
    animation-delay: 3.5s;
}

.column8 {
    min-height: 100vh;
    width: 172px;
    background: #7139e5;
    position: absolute;
    margin-left: 77%;
    animation: column-fading 3s ease-in-out infinite;
    animation-delay: 4s;
}

.column9 {
    min-height: 100vh;
    width: 172px;
    background: #a784e5;
    position: absolute;
    margin-left: 88%;
    animation: column-fading 3s ease-in-out infinite;
    animation-delay: 4.5s;
}
```
The more unconventional code on the site is that from the GSAP library; below is the
code utilized for all sliding effects from 0 to 1 opacity (the naming convention for t1, t2,
etc is indicative for "Timeline" from GSAP):

```
//JS for top-right icons (resume, linkedIn, art-site) fading in
var t1 = new TimelineMax();

t1.from(".mr-3", 3, {
    delay: 0.4,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}).from(".third-icon", 3, {
    delay: 0.7,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, "-=5");

//JS for icon text (resume, linkedIn, art-site) fading-in
var t2 = new TimelineMax();

t2.from("a", 3, {
    delay: 0.5,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}).from("a", 3, {
    delay: 0.5,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, "-=5");


var t3 = new TimelineMax();

t3.from(".my-title", 3, {
    delay: 0.6,
    opacity: 0,
    x: 50,
    ease: Expo.easeInOut
}).from(".my-title", 3, {
    delay: 0.6,
    opacity: 0,
    x: 50,
    ease: Expo.easeInOut
}, "-=5");

var t4 = new TimelineMax();

t4.from(".my-name", 3, {
    delay: 0.4,
    opacity: 0,
    x: 50,
    ease: Expo.easeInOut
}).from(".my-name", 3, {
    delay: 0.4,
    opacity: 0,
    x: 50,
    ease: Expo.easeInOut
}, "-=5");

// below is for welcome text appearing to be typed in
var t5 = new TimelineMax();
t5.timeScale(42);

t5.from(".welcome-span-w", 4, {
    delay: 2.5,
    opacity: 0,
    y: 500,
    ease: Expo.easeInOut
}).from(".welcome-span-e", 4, {
    delay: 2.6,
    opacity: 0,
    y: 500,
    ease: Expo.easeInOut
}).from(".welcome-span-l", 4, {
    delay: 2.7,
    opacity: 0,
    y: 500,
    ease: Expo.easeInOut
}).from(".welcome-span-c", 4, {
    delay: 2.8,
    opacity: 0,
    y: 500,
    ease: Expo.easeInOut
}).from(".welcome-span-o", 4, {
    delay: 2.9,
    opacity: 0,
    y: 500,
    ease: Expo.easeInOut
}).from(".welcome-span-m", 4, {
    delay: 3,
    opacity: 0,
    y: 500,
    ease: Expo.easeInOut
}).from(".welcome-span-second-e", 4, {
    delay: 6.5,
    opacity: 0,
    z: 500,
    ease: Expo.easeInOut
}, "-=4");

//welcome paragraphs transition
var t6 = new TimelineMax();

t6.from(".welcome-par-1", 3, {
    delay: 1.75,
    opacity: 0,
    y: 70,
    ease: Expo.easeIn
}).from(".welcome-par-2", 3, {
    delay: 2,
    opacity: 0,
    y: 100,
    ease: Expo.easeIn
}, "-=4");

var t7 = new TimelineMax();

t7.from(".welcome-par-3", 3, {
    delay: 2.25,
    opacity: 0,
    y: 70,
    ease: Expo.easeIn
}).from(".welcome-par-4", 3, {
    delay: 2.15,
    opacity: 0,
    y: 100,
    ease: Expo.easeIn
}, "-=4");

// below is for Projects button
var t8 = new TimelineMax();

t8.from(".header-button", 3, {
    delay: 0.6,
    opacity: 0,
    x: 50,
    ease: Expo.easeInOut
}).from(".header-button", 3, {
    delay: 0.6,
    opacity: 0,
    x: 50,
    ease: Expo.easeInOut
}, "-=5");

```

The art profile files on this repo are the same as https://github.com/sinisatesic/art-site

The mars weather project was a fun one to make, and utilized the NSA API to retrieve info
for the weather on Elysium Plantitia - a plain on Mars. Heavily styled with custom CSS, it
displays a pleasing visually aesthetic page, but the magic is done with JavaScript, of course.

Below is said JS:

```



//selectors to customize
const previousWeatherToggle = document.querySelector('.show-previous-weather');

const previousWeather = document.querySelector('.previous-weather');

const currentSolElement = document.querySelector('[data-current-sol]');

const currentDateElement = document.querySelector('[data-current-date]');

const currentTempHighElement = document.querySelector('[data-current-temp-high]');

const currentTempLowElement = document.querySelector('[data-current-temp-low]');

const windSpeedElement = document.querySelector('[data-wind-speed]');

const windDirectionText = document.querySelector('[data-wind-direction-text]');

const windDirectionArrow = document.querySelector('[data-wind-direction-arrow]');




//second section of attributes:
const previousSolTemplate = document.querySelector('[data-previous-sol-template]');

const previousSolContainer = document.querySelector('[data-previous-sols]');

const unitToggle = document.querySelector('[data-unit-toggle]');

const metricRadio = document.getElementById('cel');

const imperialRadio = document.getElementById('fah');



previousWeatherToggle.addEventListener('click', () => {
    previousWeather.classList.toggle('show-weather');
});

//api functionality below

let selectedSolIndex;   //declaring this as global variable; defining in getWeather function

getWeather().then(sols =>  {
    selectedSolIndex = sols.length - 1          //latest day is last sol
    displaySelectedSol(sols);   //display current sol selected
    displayPreviousSols(sols);  //display dynamically generated sols for week
    updateUnits();              //toggles displaying cel to fah and vice versa

    unitToggle.addEventListener('click', () => {
        let metricUnits = !isMetric()
        metricRadio.checked = metricUnits;
        imperialRadio.checked = !metricUnits;
        displaySelectedSol(sols);
        displayPreviousSols(sols);
        updateUnits();
    });

    metricRadio.addEventListener('change', () => {
        displaySelectedSol(sols);
        displayPreviousSols(sols);
        updateUnits();
    });

    imperialRadio.addEventListener('change', () => {
        displaySelectedSol(sols);
        displayPreviousSols(sols);
        updateUnits();
    });
}); //when calling getWeather, it's returning a promise; value being returned is below list of sols





function displaySelectedSol(sols){  //takes in array of all the different sols
    const selectedSol = sols[selectedSolIndex]      //selectedSol var will equal whichever sol currently selected, or by default, it will be last sol
    currentSolElement.innerText = selectedSol.sol
    currentDateElement.innerText = displayDate(selectedSol.date)
    currentTempHighElement.innerText = displayTemperature(selectedSol.maxTemp)
    currentTempLowElement.innerText = displayTemperature(selectedSol.minTemp)
    windSpeedElement.innerText = displaySpeed(selectedSol.windSpeed)
    windDirectionArrow.style.setProperty('--direction',
        `${selectedSol.windDirectionDegrees}deg`)
    windDirectionText.innerText = selectedSol.windDirectionCardinal
}


function displayPreviousSols(sols){
    previousSolContainer.innerHTML = '';     //clearing container
    sols.forEach((solData, index) => {      //loop through all sols; will have sol data, as well as index of each element inside of array (value and index of array)
        const solContainer = previousSolTemplate.content.cloneNode(true)    //will clone all html in template area and put into this solContainer var
        solContainer.querySelector('[data-sol]').innerText = solData.sol
        solContainer.querySelector('[data-date]').innerText = displayDate(solData.date)
        solContainer.querySelector('[data-temp-high]').innerText = displayTemperature(solData.maxTemp)
        solContainer.querySelector('[data-temp-low]').innerText = displayTemperature(solData.minTemp)
        solContainer.querySelector('[data-select-button]').addEventListener('click', () => {
            selectedSolIndex = index
            displaySelectedSol(sols)
        });
        previousSolContainer.appendChild(solContainer)
    })
}



function displayDate(date) {
    return date.toLocaleDateString( //functions takes 2 properties: locale to convert to (what language you want) , and
        undefined,                  //will return language based on user browser and what defaults they have set
        { day: 'numeric', month: 'long' } //long displays full month name
    )
}


function displayTemperature(temperature){
    let returnTemp = temperature
    if (!isMetric()) {
        returnTemp = (temperature - 32) * (5 / 9)
    }
    return Math.round(returnTemp);     //rounds to whole numbers
}

function displaySpeed(speed) {
    let returnSpeed = speed
    if (!isMetric()) {
        returnSpeed = speed / 1.609
    }
    return Math.round(returnSpeed)        //rounds speed
}



function getWeather() {
    return fetch(API_URL)  //function queries API by using fetch
        .then(res => res.json()) //gives response; converting to json
        .then(data => {
            const {
                sol_keys,   //sol_keys property from api data
                validity_checks,
                ...solData  //everything that's not sol_keys or validity_checks; days of mars

            } = data    //destructuring data into multiple variables
            return Object.entries(solData).map(([sol, data]) => {   //allows for looping through an object; map converts one set of info into another;//map will take different properies from solData //solData will be array when called. in map, destructuring is taking place; sol is key, data is value (everything else)
                return {
                    sol: sol,       //key-value pairs
                    maxTemp: data.AT.mx,
                    minTemp: data.AT.mn,
                    windSpeed: data.HWS.av,
                    windDirectionDegrees: data.WD.most_common.compass_degrees,
                    windDirectionCardinal: data.WD.most_common.compass_point,
                    date: new Date(data.First_UTC)
                }
            });
        });
}


function updateUnits() {
    const speedUnits = document.querySelectorAll('[data-speed-unit]')
    const tempUnits = document.querySelectorAll('[data-temp-unit]')
    speedUnits.forEach(unit => {
        unit.innerText = isMetric() ? 'kph' : 'mph'
    });
    tempUnits.forEach(unit => {
        unit.innerText = isMetric() ? 'C' : 'F'
    });
}

function isMetric(){
    return metricRadio.checked
}
```

If you have any questions, or wish to collaborate on any type of project together, please let
me know: sinisa.tesic210@gmail.com

