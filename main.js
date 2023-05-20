const form = document.querySelector(".form-section")
const form_btn = document.querySelector(".form-btn")
const confirm_submit_msj = document.querySelector(".confirm-submit-msj")

const input_name = document.querySelector(".form-input-name")
const holder_name = document.querySelector(".cardholder-name")

const input_number = document.querySelector(".form-input-number")
const card_number = document.querySelector(".card-number")

const input_exp_month = document.querySelector(".form-input-month")
const input_exp_year = document.querySelector(".form-input-year")
const input_cvc = document.querySelector(".cvc-code-number")

window.onload = () => {
    document.querySelector(".front-card").style.cssText = "animation: appear-cards 600ms linear";
    document.querySelector(".back-card").style.cssText = "animation: appear-cards 900ms linear";
    form.style.animation = "appear-form 1s linear";
    document.querySelector(".attribution").style.animation = "confirm-submit-msj 1.5s forwards";
};

/* send form */

form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.remove()
    document.querySelector(".user_name").innerHTML += input_name.value
    confirm_submit_msj.style.cssText = "animation: confirm-submit-msj 600ms linear ;display:flex";

    document.querySelector(".check_icon").style.cssText = "animation:check_icon 900ms linear; display:block";
});


/* card holder-name */

input_name.addEventListener("change", (e) => {
    let regexp = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+\s)+([A-Za-zÑñÁáÉéÍíÓóÚú]+[A-Za-zÑñÁáÉéÍíÓóÚú]+)$/;
    let validar = regexp.test(input_name.value)

    if (validar && e.target.value.length > 6) {
        holder_name.innerHTML = e.target.value
        input_name.classList.add('cheked')

    } else {
        input_name.value = ""
        input_name.insertAdjacentHTML("afterend", `<p class="alert-msj-name">you need to put your full name</p>`)
        setTimeout(() => {
            document.querySelector(".alert-msj-name").remove()
        }, 3000);
    }
});

/* card number */

input_number.addEventListener("change", (e) => {
    let regexp = /^(([0-9]{4}\s){3}[0-9]{4})$/;
    let validar = regexp.test(input_number.value)

    if (validar) {
        card_number.innerHTML = e.target.value
        input_number.classList.add('cheked')

    } else {
        input_number.value = ""
        input_number.insertAdjacentHTML("afterend", `<p class="alert-msj-number">wrong format, only numbers is allowed</p>`)
        setTimeout(() => {
            document.querySelector(".alert-msj-number").remove()
        }, 3000);
    }
});

/* expiration date section */

input_exp_month.addEventListener("change", (e) => {

    if (isNaN(input_exp_month.value) || (input_exp_month.value > 12 || input_exp_month < 1)) {
        input_exp_month.value = ""
        input_exp_month.insertAdjacentHTML("afterend",`<div class="info-msj">wrong month, repeat plis</div>`)
        setTimeout(() => {
            document.querySelector(".info-msj").remove()
        }, 2000);

    } else {
        input_exp_month.classList.add('cheked')
        document.querySelector(".exp-month").innerHTML = e.target.value
    }
});

input_exp_year.addEventListener("change", (e) => {

    if (isNaN(input_exp_year.value) || input_exp_year.value < 2023) {
        input_exp_year.value = ""
        input_exp_year.insertAdjacentHTML("afterend",`<div class="info-msj" style="transform:translateX(9em)">wrong year, repeat plis</div>`)
        setTimeout(() => {
            document.querySelector(".info-msj").remove()
        }, 2000);

    } else {
        input_exp_year.classList.add('cheked')
        document.querySelector(".exp-year").innerHTML = e.target.value
    }
});

input_cvc.addEventListener("change", (e) => {
    if (parseInt(e.target.value) && e.target.value.length == 3) {
        document.querySelector(".cvc-number").innerHTML = e.target.value
        input_cvc.classList.add('cheked')

    } else {
        input_cvc.value = ""
        input_cvc.insertAdjacentHTML("afterend", `<p class="alert-msj-cvc">wrong code! must be the real code</p>`)
        setTimeout(() => {
            document.querySelector(".alert-msj-cvc").remove()
        }, 2000);
    }
});

/* confirm boton */

form_btn.addEventListener("click", () => {
    const inputs = [input_name, input_number, input_exp_month, input_exp_year, input_cvc];

    inputs.forEach((input) => {
        if (!input.classList.contains('cheked')) {
            input.style.animation = 'wrong 300ms infinite linear';

            setTimeout(() => {
                input.style.removeProperty('animation')
            }, 1500);
        }
    });
});


document.querySelector(".confirm-submit-btn").addEventListener("click", () => {
    alert('Thank you very much for testing the functionality of the form')
    location.reload()
});
