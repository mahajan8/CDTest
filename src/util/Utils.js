import strings from "./strings"

const Utils = {

    getTemp: (temperature, tempType = 0) => {
        let temp = temperature

        if(tempType) {
            temp = (temperature - 273.15) * 9/5 + 32
        } else {
            temp = temperature - 273.15
        }

        return temp.toFixed(1) + (tempType? strings.farenheit : strings.celcius)
    },

    formatText: (text) => {
        let arr = text.split(' ')

        let formattedArr = arr.map(element => element.charAt(0).toUpperCase() + element.slice(1));

        return formattedArr.join(' ')
    }
}


export default Utils

