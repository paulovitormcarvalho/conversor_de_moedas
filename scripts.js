const botaoConverter = document.getElementById("botao-converter");
const inputValor = document.getElementById("input-valor");
const converterPara = document.getElementById("converter-para");
const converterDe = document.getElementById("converter-de");
const moeda1 = document.getElementById("moeda1");
const moeda2 = document.getElementById("moeda2");
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const imgMoeda1 = document.getElementById("img-moeda1");
const imgMoeda2 = document.getElementById("img-moeda2");

const currencyMap = {
    "real": { code: "brl", locale: "pt-BR", currency: "BRL", name: "Real brasileiro", img: "./img/real.png" },
    "dolar": { code: "usd", locale: "en-US", currency: "USD", name: "Dólar americano", img: "./img/dolar.png" },
    "libra": { code: "gbp", locale: "en-GB", currency: "GBP", name: "Libra", img: "./img/libra.png" },
    "euro": { code: "eur", locale: "pt-PT", currency: "EUR", name: "Euro", img: "./img/euro.png" },
    "btc": { code: "btc", locale: null, currency: "BTC", name: "Bitcoin", img: "./img/bitcoin.png" }
};

function parseValue() {
    let val = inputValor.value.trim();
    val = val.replace(/\./g, "").replace(",", ".");
    return parseFloat(val) || 0;
}

function formatCurrency(value, curr) {
    if (curr.code === "btc") {
        return `BTC ${parseFloat(value).toFixed(8)}`;
    } else {
        return new Intl.NumberFormat(curr.locale, {
            style: "currency",
            currency: curr.currency
        }).format(value);
    }
}

function mudarMoeda1() {
    const curr = currencyMap[converterDe.value];
    imgMoeda1.src = curr.img;
    moeda1.innerHTML = curr.name;
}

function mudarMoeda2() {
    const curr = currencyMap[converterPara.value];
    imgMoeda2.src = curr.img;
    moeda2.innerHTML = curr.name;
}

async function converterValores() {
    const fromCurr = currencyMap[converterDe.value];
    const toCurr = currencyMap[converterPara.value];
    const value = parseValue();

    valor1.innerHTML = formatCurrency(value, fromCurr);

    if (fromCurr.code === toCurr.code) {
        valor2.innerHTML = formatCurrency(value, toCurr);
    } else {
        try {
            const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr.code}.min.json`;
            const response = await fetch(url);
            if (!response.ok) throw new Error("Erro na API");
            const data = await response.json();
            const rate = data[fromCurr.code][toCurr.code];

            const converted = value * rate;

            valor2.innerHTML = formatCurrency(converted, toCurr);
        } catch (error) {
            console.error(error);
            valor2.innerHTML = "Erro ao buscar taxa";
        }
    }
}

converterDe.addEventListener("change", () => {
    mudarMoeda1();
    converterValores();
});

converterPara.addEventListener("change", () => {
    mudarMoeda2();
    converterValores();
});

botaoConverter.addEventListener("click", () => {
    mudarMoeda1();
    mudarMoeda2();
    converterValores();
});

mudarMoeda1();
mudarMoeda2();
converterValores();