const botaoConverter = document.getElementById("botao-converter")
const inputValor = document.getElementById("input-valor")
const converterPara = document.getElementById("converter-para")
const converterDe = document.getElementById("converter-de")
const moeda1 = document.getElementById("moeda1")
const moeda2 = document.getElementById("moeda2")
const valor1 = document.getElementById("valor1")
const valor2 = document.getElementById("valor2")
const imgMoeda1 = document.getElementById("img-moeda1")
const imgMoeda2 = document.getElementById("img-moeda2")




function converterValores(){
    let dolarDoDiaReal = 5.72
    let libraDoDiaReal = 7.60
    let euroDoDiaReal = 6.50
    let bitcoinDoDiaReal = 528153.32
    let libraDoDiaDolar = 0.75
    let euroDoDiaDolar = 0.88
    let bitcoinDoDiaDolar = 0.0000107063034004
    let euroDoDiaLibra = 1.17
    let btcDoDiaLibra = 0.000014337743910114963
    let btcDoDiaEuro = 0.0000122678245203

    if(converterDe.value == "real" && converterPara.value == "real"){
        valor2.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor.value)
        valor1.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor.value)
    }

    if(converterDe.value == "real" && converterPara.value == "dolar"){
        valor2.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor.value/dolarDoDiaReal)
        valor1.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor.value)
    }

    if(converterDe.value == "real" && converterPara.value == "libra"){
        valor2.innerHTML = Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor.value/libraDoDiaReal)

        valor1.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor.value)
    }

    if(converterDe.value == "real" && converterPara.value == "euro"){
        valor2.innerHTML = Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor.value/euroDoDiaReal)

        valor1.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor.value)
    }

    if(converterDe.value == "real" && converterPara.value == "btc"){
        valor2.innerHTML = Intl.NumberFormat("BTC", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8,
            style: "currency",
            currency: "BTC"
        }).format(inputValor.value/bitcoinDoDiaReal)

        valor1.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor.value)
    }

    if(converterDe.value == "dolar" && converterPara.value == "real"){
        valor2.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor.value*dolarDoDiaReal)

        valor1.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor.value)
    }

    if(converterDe.value == "dolar" && converterPara.value == "libra"){
        valor2.innerHTML = Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor.value*libraDoDiaDolar)

        valor1.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor.value)
    }

    if(converterDe.value == "dolar" && converterPara.value == "euro"){
        valor2.innerHTML = Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor.value*euroDoDiaDolar)

        valor1.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor.value)
    }

    if(converterDe.value == "dolar" && converterPara.value == "btc"){
        valor2.innerHTML = Intl.NumberFormat("BTC", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8,
            style: "currency",
            currency: "BTC"
        }).format(inputValor.value*bitcoinDoDiaDolar)

        valor1.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor.value)
    }

    if(converterDe.value == "dolar" && converterPara.value == "dolar"){
        valor2.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor.value)

        valor1.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor.value)
    }

    if(converterDe.value == "libra" && converterPara.value == "dolar"){
        valor2.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor.value/libraDoDiaDolar)

        valor1.innerHTML = Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor.value)
    }

    if(converterDe.value == "libra" && converterPara.value == "real"){
        valor2.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor.value*libraDoDiaReal)

        valor1.innerHTML = Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor.value)
    }

    if(converterDe.value == "libra" && converterPara.value == "libra"){
        valor2.innerHTML = Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor.value)

        valor1.innerHTML = Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor.value)
    }

    if(converterDe.value == "libra" && converterPara.value == "euro"){
        valor2.innerHTML = Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor.value*euroDoDiaLibra)

        valor1.innerHTML = Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor.value)
    }

    if(converterDe.value == "libra" && converterPara.value == "btc"){
        valor2.innerHTML = Intl.NumberFormat("BTC", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8,
            style: "currency",
            currency: "BTC"
        }).format(inputValor.value*btcDoDiaLibra)

        valor1.innerHTML = Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor.value)
    }

    if(converterDe.value == "euro" && converterPara.value == "dolar"){
        valor2.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor.value/euroDoDiaDolar)

        valor1.innerHTML = Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor.value)
    }

    if(converterDe.value == "euro" && converterPara.value == "real"){
        valor2.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor.value*euroDoDiaReal)

        valor1.innerHTML = Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor.value)
    }

    if(converterDe.value == "euro" && converterPara.value == "libra"){
        valor2.innerHTML = Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor.value/euroDoDiaLibra)

        valor1.innerHTML = Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor.value)
    }

    if(converterDe.value == "euro" && converterPara.value == "btc"){
        valor2.innerHTML = Intl.NumberFormat("BTC", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8,
            style: "currency",
            currency: "BTC"
        }).format(inputValor.value*btcDoDiaEuro)

        valor1.innerHTML = Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor.value)
    }

    if(converterDe.value == "btc" && converterPara.value == "dolar"){
        valor2.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor.value/bitcoinDoDiaDolar)

        valor1.innerHTML = Intl.NumberFormat("BTC", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8,
            style: "currency",
            currency: "BTC"
        }).format(inputValor.value)
    }

    if(converterDe.value == "btc" && converterPara.value == "real"){
        valor2.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor.value*bitcoinDoDiaReal)

        valor1.innerHTML = Intl.NumberFormat("BTC", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8,
            style: "currency",
            currency: "BTC"
        }).format(inputValor.value)
    }

    if(converterDe.value == "btc" && converterPara.value == "libra"){
        valor2.innerHTML = Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor.value/btcDoDiaLibra)

        valor1.innerHTML = Intl.NumberFormat("BTC", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8,
            style: "currency",
            currency: "BTC"
        }).format(inputValor.value)
    }

    if(converterDe.value == "btc" && converterPara.value == "euro"){
        valor2.innerHTML = Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor.value/btcDoDiaEuro)

        valor1.innerHTML = Intl.NumberFormat("BTC", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8,
            style: "currency",
            currency: "BTC"
        }).format(inputValor.value)
    }








}

function mudarMoeda1(){
    if(converterDe.value == "real"){
        imgMoeda1.src = "./img/real.png"
        moeda1.innerHTML = "Real brasileiro"
        valor1.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor.value)
    }

    if(converterDe.value == "dolar"){
        imgMoeda1.src = "./img/dolar.png"
        moeda1.innerHTML = "Dólar americano"
        valor1.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor.value)
    }
    if(converterDe.value == "libra"){
        imgMoeda1.src = "./img/libra.png"
        moeda1.innerHTML = "Libra"
        valor1.innerHTML = Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor.value)
    }
    if(converterDe.value == "euro"){
        imgMoeda1.src = "./img/euro.png"
        moeda1.innerHTML = "Euro"
        valor1.innerHTML = Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor.value)
    }
    if(converterDe.value == "btc"){
        imgMoeda1.src = "./img/bitcoin.png"
        moeda1.innerHTML = "Bitcoin"
        valor1.innerHTML = Intl.NumberFormat("BTC", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8,
            style: "currency",
            currency: "BTC"
        }).format(inputValor.value)
    }
}

function mudarMoeda2(){
    if(converterPara.value == "real"){
        imgMoeda2.src = "./img/real.png"
        moeda2.innerHTML = "Real brasileiro"
        valor2.innerHTML = Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValor.value)
    }

    if(converterPara.value == "dolar"){
        imgMoeda2.src = "./img/dolar.png"
        moeda2.innerHTML = "Dólar americano"
        valor2.innerHTML = Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor.value)
    }
    if(converterPara.value == "libra"){
        imgMoeda2.src = "./img/libra.png"
        moeda2.innerHTML = "Libra"
        valor2.innerHTML = Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor.value)
    }
    if(converterPara.value == "euro"){
        imgMoeda2.src = "./img/euro.png"
        moeda2.innerHTML = "Euro"
        valor2.innerHTML = Intl.NumberFormat("pt-PT", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor.value)
    }
    if(converterPara.value == "btc"){
        imgMoeda2.src = "./img/bitcoin.png"
        moeda2.innerHTML = "Bitcoin"
        valor2.innerHTML = Intl.NumberFormat("BTC", {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8,
            style: "currency",
            currency: "BTC"
        }).format(inputValor.value)
    }
}

converterDe.addEventListener("change", () => {
    mudarMoeda1()
    converterValores()
})

converterPara.addEventListener("change", () => {
    mudarMoeda2()
    converterValores()
})

botaoConverter.addEventListener("click", () => {
    mudarMoeda1()
    mudarMoeda2()
    converterValores()
})
