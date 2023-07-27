const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city = document.getElementById('city');
const temp_real = document.getElementById('temp_real');
const temp_status = document.getElementById('tempstatus');
const data_hide = document.querySelector('.middle_layer');

const getInfo = async (e)=>{
    e.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === ""){
        data_hide.classList.add('data_hide');
        city.innerText = 'Please Write The Name of City Before Search';
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=6a61dfab8b15d76aa48865f8511174f1&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
            temp_real.innerText = arrData[0].main.temp;

            let tempMood = arrData[0].weather[0].main;
            console.log(arrData);

            if(tempMood == 'Sunny' || tempMood == 'Clear'){
                temp_status.innerHTML = 
                "<i class='fa-solid fa-sun' style='color: #ffa305;'></i>"
            }else if(tempMood == 'Clouds'){
                temp_status.innerHTML = 
                "<i class='fa-solid fa-cloud' style='color: #fafafa;'></i>"
            }else if(tempMood == 'Rain'){
                temp_status.innerHTML = 
                "<i class='fa-solid fa-cloud-rain' style='color: #ffffff;'></i>"
            }else{
                temp_status.innerHTML = 
                "<i class='fa-solid fa-sun' style='color: #fafafa;'></i>"
            }

            data_hide.classList.remove('data_hide');

        }catch(error){
            data_hide.classList.add('data_hide');
            city.innerText = 'Please Enter The City Name Properly';
        }
    }
}

submitBtn.addEventListener('click', getInfo);

// Get Day
const day = document.getElementById('day');
const getCurrentDay = ()=>{
    var weekday = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ];

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
}
day.innerText = getCurrentDay();

// Get Date
const today_date = document.getElementById('today_date');
const getCurrentTime = ()=>{
    var months = [
        'Jan',
        'Feb',
        'March',
        'April',
        'May',
        'June',
        'July',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];

    var now = new Date();
    var month = months[now.getMonth()];
    var date = now.getDate();

    return `${date} ${month}`;
}
today_date.innerText = getCurrentTime();