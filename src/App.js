import React, {useState} from 'react'
import axios from 'axios';
import InputComponent from './components/InputComponent'
import ResultComponent from './components/ResultComponent'
import ErrorComponent from './components/ErrorComponent'

function App() {
  const [input, setInput] = useState("")
  const [temp, setTemp] = useState("")
  const [description, setDescription] = useState("")
  const [icon, setIcon] = useState("")
  const [error, setError] = useState(false)

  const findWeather = async () => {
    const apiKey = "7f81bdbc2a740e76f6eb543c287e9fc9";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" +input +"&appid=" +apiKey +"&units=" +unit; 
    await axios.get(url).then(res => {
      console.log('response',res)
      const  temp = res.data.main.temp;
      const weatherDescription = res.data.weather[0].description;
      const  icon = res.data.weather[0].icon;
      const imageUrl = "https://openweathermap.org/img/wn/"+icon +"@2x.png"
      setTemp(temp)
      setDescription(weatherDescription)
      setIcon(imageUrl)
    }).catch(error => {
      console.log(error.message)
      setError(true)
    })
  }

  return (
    <div>
      {
        error ? 
        (
          <ErrorComponent input={input} setInput={setInput} setTemp={setTemp} setError={setError} />
        ) 
        :
        temp === "" ? 
          (
           <InputComponent input={input} setInput={setInput} findWeather={findWeather} />
          ) 
          :
          (
           <ResultComponent input={input} setInput={setInput} temp={temp} description={description} icon={icon} setTemp={setTemp} /> 
          )
      }
    </div>
  );
}

export default App;
