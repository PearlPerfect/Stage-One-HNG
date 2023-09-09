
const slackUserName = document.querySelector("[data-testid='slackUserName']");
const slackDisplayImage = document.querySelector("[data-testid='slackDisplayImage']");
const currentDayOfTheWeek = document.querySelector("[data-testid='currentDayOfTheWeek']");
const currentUTCTime = document.querySelector("[data-testid='currentUTCTime']");
const myTrack = document.querySelector("[data-testid='myTrack']");
const githubURL = document.querySelector("[data-testid='githubURL']");
const currentUTCTimer = document.querySelector('[data-testid="currentUTCTimer"]');
const today = document.querySelector("[data-testid='date']");


function DayOfTheWeek(){
    const date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    currentDayOfTheWeek.innerHTML = `${days[date.getDay()]},`; 
}
DayOfTheWeek();
function UTCMilliseconds(){
    const date = new Date();
    const Now = date.getTime();
    currentUTCTime.textContent = `UTC In Milliseconds: ${Now}`
}


UTCMilliseconds();
setInterval(UTCMilliseconds, 1);


