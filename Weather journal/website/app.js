/*  create dynamic url query to access data-base */

const baseurl = "https://api.openweathermap.org/data/2.5/weather?appid=";
// temperature in Fahrenheit use units=imperial also zep key will be added later
const appkey = "2f1d742c53af8ee7efe61ddfbb4ce2de&units=imperial";
const apiUrl = baseurl + appkey;

/* Steps to update UI dynamically ---> at run time update UI according to data recieved from web API and
data that user enter */

/* first: build async function to make get request using fetch to web API to get data from web API */
const retrieveData = async (apiUrl) => {
  const res = await fetch(apiUrl);
  try {
    const newData = await res.json();
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};

/* second: build async function to make post request to post data that's recieved from web API
and added to appData endpoint */
const postData = async (data, date, feelings) => {
  /* data ----> it's data received from web API */
  let { temp } = { ...data.main };
  /* if user write wrong zip code raise message from web API */
  if (temp == undefined) ({ message: temp } = { ...data });
  const allData = { temp, date, feelings }; // shorthand proprety in object
  const res = await fetch("/add", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(allData),
  });
  try {
    const addData = await res.json();
    return addData;
  } catch (error) {
    console.log("error", error);
  }
};

/* third: build async function to make get request to get data from app endpoint and
update dynamically UI */
const updateUI = async () => {
  const res = await fetch("/all");
  try {
    const allData = await res.json();
    //console.log(allData); ---> current record

    /* some styling when user wanna know weather (click on find) */
    const entryHolder = document.getElementById("entryHolder");
    entryHolder.style.padding = "10px";
    entryHolder.style.border = "1px solid";
    entryHolder.style.borderColor = `rgb(213, 220, 226)
    rgb(213, 220, 226)
    rgb(184, 194, 204)`;
    const hr = `<hr style = 'border:1.5px solid;margin-top:20px;'/>`;
    /* set values of elements to data that's received from web API and date with user response */
    document.getElementById("date").innerHTML =
      "Date<br/><br/>" + allData.date + hr;
    // check if temp numeric value or not before set value of attribute
    document.getElementById("temp").innerHTML = !isNaN(allData.temp)
      ? "Temperature °F<br/><br/>" + Math.round(allData.temp) + " °F" + hr
      : "Message<br/><br/>" + allData.temp + hr;
    document.getElementById("content").innerHTML =
      "<span>Feelings<span/><br/><br/>" + allData.feelings;

    entryHolder.scrollIntoView({
      block: "center",
      inline: "nearest",
      behavior: "smooth",
    });
    //window.scrollTo({left:entryHolder.offsetLeft,top:entryHolder.offsetTop,behavior:'smooth'});
    return allData;
  } catch (error) {
    console.log("error", error);
  }
};

/* add event listener to button that allow to update new Data received from web API and user */
document.getElementById("generate").addEventListener("click", preformAction);
function preformAction(e) {
  e.preventDefault(); // to ensure that there's no default actions happen

  /* adding zip param to apiUrl with country code (default USA) */
  const zipcode = `zip=${document.getElementById("zip").value}&`;
  const newApiUrl = apiUrl.replace("/weather?", `/weather?${zipcode}`);

  /* adding feelings about weather to project object endpoint */
  const feelings = document.getElementById("feelings").value;

  /* adding Date to project object endpoint */
  let date = new Date();
  date = `${date.toLocaleDateString("en-US", { weekday: "long" })}\
 ${date.toLocaleDateString("en-US")} at ${date.toLocaleTimeString("en-US")}`;

  /* make chain promises */
  retrieveData(newApiUrl)
    .then((data) => {
      postData(data, date, feelings);
    })
    .then(() => updateUI()); // could be used without (then) because of async
}
