let billTotal = document.querySelector("#input-bill");
let totalPeople = document.querySelector("#input-users");
var feedback = document.querySelector(".feedback");

//User Tip options

const services = [{
        title: "Great – 20%",
        value: 0.2,
    },
    {
        title: "Good – 10%",
        value: 0.1,
    },
    {
        title: "Bad – 2%",
        value: 0.02,
    },
];

//Allow user to select tip Ammount
const serviceValue = document.querySelector("#input-service");

services.forEach((service) => {
    let option = document.createElement("option");
    option.textContent = service.title;
    option.value = service.value;
    serviceValue.appendChild(option);
});

//Submit Button functionality

const calculateButton = document.querySelector(".submitBtn");

calculateButton.addEventListener('click', (e) => {
        e.preventDefault();
        //Start the feedback from a clean slate in case an error was previously made
        feedback.innerHTML = "";
        // If something is wrong add it to the Alert box
        if (billTotal.value <= 0) {
            addToAlert("Bill Cannot Be Blank");
        }
        if (totalPeople.value <= 0) {
            addToAlert("Number Of Users Must Be Greater Than Zero");
        }
        if (serviceValue.value) {
            feedback.classList.remove('showItem', 'alert-danger');
        }, 5000);
}
else {
    //If Everything is right split the bill + tip among everyone
    calculateBill(
        Number(billTotal.value),
        Number(totalPeople.value),
        Number(serviceValue.value)
    );
}
});

//Functions for calculate button
function addToAlert(text) {
    let div = document.createElement("div");
    div.textContent = text;
    feedback.appendChild(div);
}

const calculateBill = (bill, numPeople, serviceQuality) => {
    let resultsContainer = document.querySelector(".results");
    const loaderGif = document.querySelector(".loder");

    let tip = bill * serviceQuality;
    let billTotal = tip + bill;
    let individualAmount = billTotal / numPeople;

    //Add the tip, bill, and individual person cost to their spots in the html
    document.querySelector('#tip-amount').textContent = tip.toFixed(2);
    document.querySelector('#total-amount').textContent = billTotal.toFixed(2);
    document.querySelector('#person-amount').textContent = individualAmount.toFixed(2);

    //Once calculate “Load” the results after 3000ms
    loaderGif.classList.add("showItem");

    setTimeout(() => {
        loader.classList.remove("showItem");
        resultsContainer.classList.add("showItem");
    }, 3000);

    setTimeout(() => {
        resultsContainer.classList.remove("showItem");
    }, 10000);
};