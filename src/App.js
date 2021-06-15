import "./styles.css";
import { useState, useEffect } from "react";

// Кастомный bind
Function.prototype.customBind = function (func, args) {
  let self = this;
  return function () {
    return self.apply(func, [args]);
  };
};

// Сортировка чисел
function sorting(arr) {
  let sorted = arr.sort(function (a, b) {
    return a - b;
  });
  return sorted;
}
console.log(sorting([1, 5, 87, -10]));

// Случайное число
function random(startNum, endNum) {
  return Math.floor(Math.random() * endNum) + startNum;
}
console.log(random(-101, 110));

// sum(a)(b) = a+b
function add1(a) {
  let firstNum = a;
  return function add2(b) {
    let secondNum = b;
    return firstNum + secondNum;
  };
}
console.log(add1(5)(6));

//Функция выводит в консоль количество своих вызовов
function counter() {
  let numOf = 1;
  return function () {
    return numOf++;
  };
}
let count = counter();
count();
count();
console.log(count());
const appid = "e2c678fbaa980baf43819992690087ea";
export default function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Omsk&appid=${appid}`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }, []);

  return (
    <div className="App">
      <h1>
        {weather && weather.main && (
          <div>{`Сейчас в Омске ${toCelsius(
            weather.main.temp
          )} градусов по цельсию`}</div>
        )}
      </h1>
    </div>
  );
}
function toCelsius(temp) {
  return Math.round(temp - 273.15);
}
