gsap.from ("#myImage", {opacity: 0, duration: 3, delay: 1})

const image = document.querySelector ('#myImage');
const text = document.querySelector ('h2');
const aboutWine = document.querySelector ('#aboutWine');
const buyBtn = document.querySelector ('#buyBtn')

const buttonOne = document.querySelector ('#one');
const buttonTwo = document.querySelector ('#two');
const buttonThree = document.querySelector ('#three');
const buttonFour = document.querySelector ('#four');

buttonOne.addEventListener ('click', dinner);
buttonTwo.addEventListener ('click', alone);
buttonThree.addEventListener ('click', party);
buttonFour.addEventListener ('click', celebration);

function dinner () {
    image.setAttribute ("src", "dinner.jpg");
    text.textContent = "Що в меню?";
    buttonOne.textContent = "М'ясо";
    buttonTwo.textContent = "Риба, морепродукти";
    buttonThree.textContent = "Птиця";
    buttonFour.textContent = "Овочі, зернові";

    buttonOne.addEventListener ('click', meat);
    buttonTwo.addEventListener ('click', fish);
    buttonThree.addEventListener ('click', chicken);
    buttonFour.addEventListener ('click', carbohydrates);

    function meat () {
        image.setAttribute ("src", "meatWine.jpg");
        text.textContent = "Carmenere Reserva, Tarapacа";
        aboutWine.style.display = 'block';
        aboutWine.textContent = "Має інтенсивний ароматом червоних ягід, ванілі, карамелі, чорного чаю, інжиру та шоколаду з м'ятними нотками.";
        buttonOne.style = "display: none";
        buttonTwo.style = "display: none";
        buttonThree.style = "display: none";
        buttonFour.style = "display: none";

        buyBtn.style.display = 'block';
        buyBtn.addEventListener ('click', function () {
            window.open ("https://goodwine.com.ua/ua/carmenere-reserva-01948.html", "_blank")
        })
    }

    function fish () {
        image.setAttribute ("src", "fishWine.jpg");
        text.textContent = "Riesling, Trocken";
        aboutWine.style.display = 'block';
        aboutWine.textContent = "Інтенсивний аромат наповнений відтінками персика, жовтих фруктів та квітів.";
        buttonOne.style = "display: none";
        buttonTwo.style = "display: none";
        buttonThree.style = "display: none";
        buttonFour.style = "display: none";

        buyBtn.style.display = 'block';
        buyBtn.addEventListener ('click', function () {
            window.open ("https://goodwine.com.ua/ua/riesling-trocken-04855.html", "_blank")
        })
    }

    function chicken () {
        image.setAttribute ("src", "chickenWine.jpg");
        text.textContent = "Gewurztraminer, Villa Wolf";
        aboutWine.style.display = 'block';
        aboutWine.textContent = "Яскраве, напівсолодке вино з інтенсивним ароматом троянд та прянощів.";
        buttonOne.style = "display: none";
        buttonTwo.style = "display: none";
        buttonThree.style = "display: none";
        buttonFour.style = "display: none";

        buyBtn.style.display = 'block';
        buyBtn.addEventListener ('click', function () {
            window.open ("https://goodwine.com.ua/ua/gewurztraminer-villa-wolf-05703.html", "_blank")
        })
    }

    function carbohydrates () {
        image.setAttribute ("src", "carbohydratesWine.jpg");
        text.textContent = "Sauvignon Rose, Marlborough Sun";
        aboutWine.style.display = 'block';
        aboutWine.textContent = "Яскраве, виразне рожеве вино з насиченим ароматом червоного стиглого аґрусу, рожевого грейпфруту, маракуї та червоної смородини.";
        buttonOne.style = "display: none";
        buttonTwo.style = "display: none";
        buttonThree.style = "display: none";
        buttonFour.style = "display: none";

        buyBtn.style.display = 'block';
        buyBtn.addEventListener ('click', function () {
            window.open ("https://goodwine.com.ua/ua/sauvignon-rose-marlborough-sun-21693.html", "_blank")
        })
    }
}

function alone () {
    image.setAttribute ("src", "alone.jpg");
    text.textContent = "Чого душа бажає?";
    buttonOne.textContent = "Червоне: інтенсивне та терпке";
    buttonTwo.textContent = "Червоне: легке та ароматне";
    buttonThree.textContent = "Біле: свіже з легкою кислинкою";
    buttonFour.textContent = "Біле: насичене та солодкувате";

    buttonOne.addEventListener ('click', redIntense);
    buttonTwo.addEventListener ('click', redAroma);
    buttonThree.addEventListener ('click', whiteLight);
    buttonFour.addEventListener ('click', whiteSweet);

    function redIntense () {
        image.setAttribute ("src", "redIntense.jpg");
        text.textContent = "Rioja, Cerro Anon";
        aboutWine.style.display = 'block';
        aboutWine.textContent = "У першому носі відкривається фруктовий аромат, що переходить у приємну пряність, яку дає вину витримка у бочці.";
        buttonOne.style = "display: none";
        buttonTwo.style = "display: none";
        buttonThree.style = "display: none";
        buttonFour.style = "display: none";

        buyBtn.style.display = 'block';
        buyBtn.addEventListener ('click', function () {
            window.open ("https://goodwine.com.ua/ua/cerro-anon-crianza-07844.html", "_blank")
        })
    }

    function redAroma () {
        image.setAttribute ("src", "redLight.jpg");
        text.textContent = "Valpolicella Superiore, Ripasso Marogne";
        aboutWine.style.display = 'block';
        aboutWine.textContent = "Аромат з тонами черешні та соковитих стиглих фруктів.";
        buttonOne.style = "display: none";
        buttonTwo.style = "display: none";
        buttonThree.style = "display: none";
        buttonFour.style = "display: none";

        buyBtn.style.display = 'block';
        buyBtn.addEventListener ('click', function () {
            window.open ("https://goodwine.com.ua/ua/valpolicella-superiore-ripasso-marogne-06824.html", "_blank")
        })
    }

    function whiteLight () {
        image.setAttribute ("src", "whiteLight.jpg");
        text.textContent = "Bianco, Villa Antinori";
        aboutWine.style.display = 'block';
        aboutWine.textContent = "В ароматі присутні свіжі фрукти, лимон, апельсин та грейпфрут.";
        buttonOne.style = "display: none";
        buttonTwo.style = "display: none";
        buttonThree.style = "display: none";
        buttonFour.style = "display: none";

        buyBtn.style.display = 'block';
        buyBtn.addEventListener ('click', function () {
            window.open ("https://goodwine.com.ua/ua/villa-antinori-bianco-toscana-36596.html", "_blank")
        })
    }

    function whiteSweet () {
        image.setAttribute ("src", "whiteSweet.jpg");
        text.textContent = "Chenin Blanc, The Grinder";
        aboutWine.style.display = 'block';
        aboutWine.textContent = "Елегантний Шенен Блан із витонченим, добре збалансованим смаком, тонами персика, абрикоса, цитрусів, мигдалю та меду на задньому фоні.";
        buttonOne.style = "display: none";
        buttonTwo.style = "display: none";
        buttonThree.style = "display: none";
        buttonFour.style = "display: none";

        buyBtn.style.display = 'block';
        buyBtn.addEventListener ('click', function () {
            window.open ("https://goodwine.com.ua/ua/chenin-blanc-29836.html", "_blank")
        })
    }
}

function party () {
    image.setAttribute ("src", "party.jpg");
    text.textContent = "Який настрій?";
    buttonOne.textContent = "Червоне";
    buttonTwo.textContent = "Біле";
    buttonThree.textContent = "Розе";
    buttonFour.textContent = "Просекко";

    buttonOne.addEventListener ('click', red);
    buttonTwo.addEventListener ('click', white);
    buttonThree.addEventListener ('click', rose);
    buttonFour.addEventListener ('click', prosecco);

    function red () {
        image.setAttribute ("src", "partyRed.jpg");
        text.textContent = "Rouge, Baron d'Arignac";
        aboutWine.style.display = 'block';
        aboutWine.textContent = "Легке та ненав`язливе вино на кожен день. В ароматі червоні фрукти та лісові ягоди.";
        buttonOne.style = "display: none";
        buttonTwo.style = "display: none";
        buttonThree.style = "display: none";
        buttonFour.style = "display: none";

        buyBtn.style.display = 'block';
        buyBtn.addEventListener ('click', function () {
            window.open ("https://goodwine.com.ua/ua/rose-27281.html", "_blank")
        })
    }

    function white () {
        image.setAttribute ("src", "partyWhite.jpg");
        text.textContent = "Verdejo, Paso A Paso";
        aboutWine.style.display = 'block';
        aboutWine.textContent = " В ароматі кілька трав`яний тон поряд зі свіжими нотами лимона, персиків та дині з соковитим-фруктовим смаком, розвивається в келиху в ноти цитрусових.";
        buttonOne.style = "display: none";
        buttonTwo.style = "display: none";
        buttonThree.style = "display: none";
        buttonFour.style = "display: none";

        buyBtn.style.display = 'block';
        buyBtn.addEventListener ('click', function () {
            window.open ("https://goodwine.com.ua/ua/verdejo-paso-a-paso-08426.html", "_blank")
        })
    }

    function rose () {
        image.setAttribute ("src", "partyRose.jpg");
        text.textContent = "Rose, Castillo San Simon";
        aboutWine.style.display = 'block';
        aboutWine.textContent = "Приємне, свіже рожеве вино з легким фруктовим ароматом, солодкуватим, свіжим смаком.";
        buttonOne.style = "display: none";
        buttonTwo.style = "display: none";
        buttonThree.style = "display: none";
        buttonFour.style = "display: none";

        buyBtn.style.display = 'block';
        buyBtn.addEventListener ('click', function () {
            window.open ("https://goodwine.com.ua/ua/castillo-san-simon-rose-27255.html", "_blank")
        })
    }

    function prosecco () {
        image.setAttribute ("src", "partyProsecco.jpg");
        text.textContent = "Prosecco Millesimato, Canti";
        aboutWine.style.display = 'block';
        aboutWine.textContent = "Легке, свіже смак з переважанням фруктових тонів. Чудовий аперитив.";
        buttonOne.style = "display: none";
        buttonTwo.style = "display: none";
        buttonThree.style = "display: none";
        buttonFour.style = "display: none";

        buyBtn.style.display = 'block';
        buyBtn.addEventListener ('click', function () {
            window.open ("https://goodwine.com.ua/ua/prosecco-millesimato-32777.html", "_blank")
        })
    }

}

function celebration () {
    image.setAttribute ("src", "specialDate.jpg");
    text.textContent = "Brut Imperial, Moët & Chandon";
    aboutWine.style.display = 'block';
    aboutWine.textContent = "Тут без варіантів! Освіжаюче, повне енергії шампанське з насиченим, соковитим ароматом зеленого яблука, цитрусів, мінеральних та квіткових нюансів, що змінюються нотами бриош, злаків та горіхів.";
    buttonOne.style = "display: none";
    buttonTwo.style = "display: none";
    buttonThree.style = "display: none";
    buttonFour.style = "display: none";

    buyBtn.style.display = 'block';
    buyBtn.addEventListener ('click', specialDate);
    
    function specialDate () {
        window.open ("https://goodwine.com.ua/ua/mot-chandon-brut-imperial-66827.html", "_blank");
    }
}
