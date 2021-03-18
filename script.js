// DOM Elements
const time = document.querySelector('.time'),
  week = document.querySelector('.week'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus'),
  blockquote = document.querySelector('blockquote'),
  figcaption = document.querySelector('figcaption'),
  btn = document.querySelector('.btn'),
  weatherIcon = document.querySelector('.weather-icon'),
  temperature = document.querySelector('.temperature'),
  weatherDescription = document.querySelector('.weather-description'),
  city = document.querySelector('.city'),
  wind = document.querySelector('.wind_speed'),
  humidity = document.querySelector('.humidity'),
  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
            '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', 
            '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', 
            '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'],
  wallpaper = document.querySelector('.wallpaper'),
  wall = [],
  viewer = document.querySelector('.btn__wallpaper'),
  random = document.querySelector('.btn__wallpaper--random'),
  next = document.querySelector(".btn__wallpaper--next");
let clickPoint = 1;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

function showWeek() {
    let today = new Date(),
      day = today.getDate(),
      month = today.getMonth(),
      weekDAy = today.getDay(),
      monSun = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
      },
      janDec = ['January', 'February', 'March', 'April', 'May', 'June', 
                'July', 'August', 'September', 'October', 'November', 'December'];

    // Output Time
    week.innerHTML = `${janDec[month]}<span> </span>${day}<span>, </span>${monSun[weekDAy]}`;
  
    setTimeout(showWeek, 1000);
  }

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();
  let img = document.createElement('img');
  let src;
  let folder;

  for (let i = 0; i < 4; i++) {
    let sixElem;
    images.sort(function() {
      return 0.5 - Math.random();
    });
    sixElem = images.slice(0, 6);
    wall.push(sixElem[0]);
    wall.push(sixElem[1]);
    wall.push(sixElem[2]);
    wall.push(sixElem[3]);
    wall.push(sixElem[4]);
    wall.push(sixElem[5]);
  }

  if (hour < 6) {
    // Night 
    folder = "night";
    greeting.textContent = 'Good Night, ';
  } else if (hour < 12) {
    // Morning
    folder = "morning";
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    // Afternoon
    folder = "day";
    greeting.textContent = 'Good Afternoon, ';
  } else {
    // Evening
    folder = "evening";
    greeting.textContent = 'Good Evening, ';
  }

  src = `assets/${folder}/${wall[hour]}`;
  img.src = src;
  img.onload = () => {
    document.body.style.backgroundImage =
    `url("${src}")`;
  }
}

setInterval(() => {
  let today = new Date(),
  hour = today.getHours(),
  min = today.getMinutes(),
  sec = today.getSeconds();
  let img = document.createElement('img');
  let src;
  let folder;

  if (min == 0 && sec == 0){
    
      if (hour < 6) {
        // Night 
        folder = "night";
        greeting.textContent = 'Good Night, ';
      } else if (hour < 12) {
        // Morning
        folder = "morning";
        greeting.textContent = 'Good Morning, ';
      } else if (hour < 18) {
        // Afternoon
        folder = "day";
        greeting.textContent = 'Good Afternoon, ';
      } else {
        // Evening
        folder = "evening";
        greeting.textContent = 'Good Evening, ';
      }
    
      src = `assets/${folder}/${wall[hour]}`;
      img.src = src;
      img.onload = () => {
        document.body.style.backgroundImage =
        `url("${src}")`;
      }

      for (let i = 0; i < wall.length; i++) {
        if (i === hour) {
          wallpaper.childNodes[i].style.order = "-1";
        } else if (i < hour) {
          wallpaper.childNodes[i].style.order = "100";
        }
      }
    }
  }, 1000);

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

name.onfocus = () => {
  name.textContent = '';
  name.classList.add("named");
}

name.onblur = () => {
  name.classList.remove("named");
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      let a = name.textContent.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      if (a.length < 1) {
        name.textContent = localStorage.getItem('name');
      } else {
        localStorage.setItem('name', e.target.innerText);
      }
      name.blur();
    }
  } else {
    let a = name.textContent.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    if (a.length < 1) {
      name.textContent = localStorage.getItem('name');
    } else {
      localStorage.setItem('name', e.target.innerText);
    }
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

focus.onfocus = () => {
  focus.textContent = '';
  focus.classList.add("focused");
}

focus.onblur = () => {
  focus.classList.remove("focused");
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      let a = focus.textContent.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      if (a.length < 1) {
        focus.textContent = localStorage.getItem('focus');
      } else {
        localStorage.setItem('focus', e.target.innerText);
      }
      focus.blur();
    }
  } else {
    let a = focus.textContent.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    if (a.length < 1) {
      focus.textContent = localStorage.getItem('focus');
    } else {
      localStorage.setItem('focus', e.target.innerText);
    }
  }
}

// Get quote
async function getQuote() {  
  const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`;
  const res = await fetch(url);
  const data = await res.json(); 
  blockquote.textContent = data.quoteText;
  figcaption.textContent = data.quoteAuthor;
}

// Get weather 
async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=8b92c2936a1187a50aa1f1445a3ab30c&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = 'weather-icon owf';
  try {
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    wind.textContent = `wind ${data.wind.speed}mps`;
    humidity.textContent = `humidity ${data.main.humidity}%`;
    weatherDescription.textContent = data.weather[0].description;
  } catch {
    alert ("Sorry, can't find this city. Please try again:)");
  }
}

//Get city
function getCity() {
  if (localStorage.getItem('city') === null) {
    city.textContent = 'Minsk';
  } else {
    city.textContent = localStorage.getItem('city');
  }
}

city.onfocus = () => {
  city.textContent = '';
  city.classList.add("focused");
}

city.onblur = () => {
  city.classList.remove("focused");
}

// Set city
function setCity(event) {
  if (event.type === 'keypress') {
    // Make sure enter is pressed
    if (event.which == 13 || event.keyCode == 13) {
      let a = city.textContent.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      if (a.length < 1) {
        city.textContent = localStorage.getItem('city');
      } else {
        localStorage.setItem('city', event.target.innerText);
      }
      city.blur();
      getWeather();
    }
  } else {
    let a = city.textContent.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    if (a.length < 1) {
      city.textContent = localStorage.getItem('city');
    } else {
      localStorage.setItem('city', event.target.innerText);
    }
  }
}

// Get wallpaper viewer 

function getWallpaperView() {
  wall.forEach(img => {
    let wallElem = document.createElement("img");
    wallElem.classList.add("wallpaper_elem");
    wallElem.setAttribute("alt", "Background image");
    let wallfig = document.createElement('figure');
    wallpaper.appendChild(wallfig);
    let description = document.createElement("figcaption");
    description.classList.add("description");
    wallfig.appendChild(wallElem);
    wallfig.appendChild(description);
  });
  for (let i = 0; i < wall.length; i++) {
    let today = new Date(),
      hour = today.getHours();
    if (i < 6) {
      wallpaper.childNodes[i].childNodes[0].setAttribute("src", `assets/night/${wall[i]}`);
      wallpaper.childNodes[i].childNodes[1].textContent = `${i}:00`;
    } else if (i < 12) {
      wallpaper.childNodes[i].childNodes[0].setAttribute("src", `assets/morning/${wall[i]}`);
      wallpaper.childNodes[i].childNodes[1].textContent = `${i}:00`;
    } else if (i < 18) {
      wallpaper.childNodes[i].childNodes[0].setAttribute("src", `assets/day/${wall[i]}`);
      wallpaper.childNodes[i].childNodes[1].textContent = `${i}:00`;
    } else if (i < 24) {
      wallpaper.childNodes[i].childNodes[0].setAttribute("src", `assets/evening/${wall[i]}`);
      wallpaper.childNodes[i].childNodes[1].textContent = `${i}:00`;
    }
    if (i === hour) {
      wallpaper.childNodes[i].style.order = "-1";
    } else if (i < hour) {
      wallpaper.childNodes[i].style.order = "100";
    }
  }
  return wallpaper;
}

// Open/Close button 
function OpCl() {
    if (wallpaper.style.display !== "none") {
      wallpaper.style.display = "none";
    } else {
      wallpaper.style.display = 'flex';
    }
}

//Change wallpaper 
function ChangeWall(a) {
  let b = a.getAttribute("src");
  if (b) {
    document.body.style.backgroundImage =
      `url("${b}")`;
  }
}

wallpaper.onclick = function ChangeElem(event) {
  let target = event.target;
  ChangeWall(target);
  next.disabled = true;
  random.disabled = true;
  wallpaper.classList.add("disabled_block");
  setTimeout(function() { wallpaper.classList.remove("disabled_block"); }, 1200);
  setTimeout(function() { next.disabled = false }, 1200);
  setTimeout(function() { random.disabled = false }, 1200);
}

function randomWall() {
  let today = new Date(),
    hour = today.getHours(),
    num = Math.floor(Math.random() * Math.floor(20)),
    pic = images[num],
    img = document.createElement('img'),
    time = "";
    if (hour < 6) {
      // Night 
      time = "night";
    } else if (hour < 12) {
      // Morning
      time = "morning";
    } else if (hour < 18) {
      // Afternoon
      time = "day";
    } else {
      // Evening
      time = "evening";
    }

    let src = `assets/${time}/${pic}`;

    img.src = src;

    img.onload = () => {
      document.body.style.backgroundImage =
      `url("${src}")`;
    }

  random.disabled = true;
  next.disabled = true;
  wallpaper.classList.add("disabled_block");
  setTimeout(function() { wallpaper.classList.remove("disabled_block"); }, 1200);
  setTimeout(function() { random.disabled = false }, 1200);
  setTimeout(function() { next.disabled = false }, 1200);
} 

function nextWall() {
  let date = new Date();
  let hour = date.getHours();
  let img = document.createElement('img');
  let folder;
  let tooMuch;

  if (clickPoint == 24) clickPoint = 0;
  if (hour + clickPoint >= 24) {
    tooMuch = hour + clickPoint - 24;
  } 

  if (hour + clickPoint < 6 || tooMuch < 6) {
    // Night 
    folder = "night";
  } else if (hour + clickPoint < 12 || tooMuch < 12) {
    // Morning
    folder = "morning";
  } else if (hour + clickPoint < 18 || tooMuch < 18) {
    // Afternoon
    folder = "day";
  } else {
    // Evening
    folder = "evening";
  }

  let src = "";

  if (hour + clickPoint < 24) {
    document.body.style.backgroundImage =
      src = `assets/${folder}/${wall[hour + clickPoint]}`;
  } else {
    document.body.style.backgroundImage =
      src = `assets/${folder}/${wall[tooMuch]}`;
  } 

  img.src = src;

  img.onload = () => {
    document.body.style.backgroundImage =
    `url("${src}")`;
  }

  clickPoint++;

  next.disabled = true;
  random.disabled = true;
  wallpaper.classList.add("disabled_block");
  setTimeout(function() { wallpaper.classList.remove("disabled_block"); }, 1200);
  setTimeout(function() { next.disabled = false }, 1200);
  setTimeout(function() { random.disabled = false }, 1200);
}


document.addEventListener('DOMContentLoaded', getQuote);
btn.addEventListener('click', getQuote);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
city.addEventListener('blur', setCity);
document.addEventListener('DOMContentLoaded', getWallpaperView);
viewer.addEventListener("click", OpCl);
random.addEventListener("click", randomWall);
next.addEventListener("click", nextWall);

// Run
showTime();
showWeek();
setBgGreet();
getName();
getFocus();
getCity();
OpCl();
setInterval();
randomWall();