let url;
let weathers=[]
let workouts=[]
const APIkey = "eb19bc9e29mshb1022632fb91b6cp1f62ecjsn568c007ce990"
const searchWeather = document.getElementById("search-weathers")?.addEventListener("click", (e)=>getWeathers(e))
const weatherBoard = document.getElementById("weather-board");

const searchWorkout = document.getElementById("search-workout")?.addEventListener("click", (e)=>getWorkouts(e))
const menus = document.querySelectorAll(".menus button")
menus.forEach((menu) => menu.addEventListener("click", (e)=>getWorkoutsByMenu(e)))


const getWeathers = async (e)=> {
    url = new URL(`https://apjoy-weather-forecast.p.rapidapi.com/forecast?location=Seoul&days=4`)
    let header = new Headers({"X-RapidAPI-Key": APIkey})
    let response = await fetch(url, {headers:header})
    let data = await response.json()
    weathers = data.list
    console.log(weathers)
    renderWeather()
}

const workout = async ()=>{
    let header = new Headers({"X-RapidAPI-Key": APIkey})
    let response = await fetch(url, {headers:header})
    workouts = await response.json()
    console.log(workouts)
    renderWorkout()
}


const getWorkouts = async (e)=> {
    url = new URL(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=9`)
    workout()
}


const renderWeather = () => {
    if (weatherBoard.style.display == "none"){
        weatherBoard.style.display = "flex"
    } else {
        weatherBoard.style.display = "none"
    }

    let weatherHTML = ``
    weatherHTML = weathers.map((weather)=>{
        return `
        <div class="row weathers">
            <div class="col weather">
                <p>날짜: ${weather.dt_txt}</p>
                <p>날씨: ${weather.weather[0].description}</p>
                <p>기온: ${weather.main.temp}</p>
                <p>습도: ${weather.main.humidity}</p>
            </div>
        </div>`
    }).join("")
    weatherBoard.innerHTML = weatherHTML
}


const renderWorkout = () => {
    let workoutHTML = workouts.map((workout)=>{
        return `
        <div class="row workouts">
            <div class="col workout">
                <img src="${workout.gifUrl}" />
                <p>이름: ${workout.name}</p>
                <p>운동기구: ${workout.equipment}</p>
                <p>주요부위: ${workout.bodyPart}-${workout.target}</p>
                <p>운동방법: ${workout.instructions.join("</n>")}</p>
            </div>
        </div>`
    }).join("")   
    document.getElementById("workout-board").innerHTML = workoutHTML;
}

const getWorkoutsByMenu = async (e)=>{
    let menu = e.target.textContent
    url = new URL(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${menu}?limit=9`)
    workout()
}