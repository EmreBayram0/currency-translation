let input1 = document.querySelector("#input1")
let currencyText = document.querySelector(".currencyText")
let userSelect1 = document.querySelector("#userSelect1")
let userSelect2 = document.querySelector("#userSelect2")
let button = document.querySelector(".calculateButton")

function currencyApi(currency) {
    fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_FPaCSIQKTSD3ade7UXNHs06YK7cBzQrvq5vdgAfh&base_currency=${currency}`)
        .then((response) => response.json())
        .then((data) => {
            calculate(data)
        })

}
button.addEventListener("click", () => {
    let userCurrencyValue1 = userSelect1.value
    currencyApi(userCurrencyValue1)
})
function calculate(data) {
    let userValue = input1.value
    let currencyApi = data.data[userSelect2.value]
    currencyText.textContent = currencyApi * userValue
}