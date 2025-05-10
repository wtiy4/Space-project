    const space = {
        1957: "أول قمر صناعي يطلقه الإنسان للفضاء",
        1958: "إطلاق القمر الصناعي سبوتنيك ٢ مع الكلبة لايكا",
        1961: "👨🏻‍🚀(يوري غارغاريان) أول إنسان يصل للفضاء",
        1969: "🚀 أول هبوط للإنسان على سطح القمر.",
        1970: "إطلاق أبولو 13 ومشكلة الأكسجين الشهيرة",
        1990: "إطلاق تلسكوب هابل الفضائي",
        1985: "أول شخص عربي ،وسعودي يصل للفضاء - الأمير سلطان بن سلمان بن عبدالعزيز",
        1998: " إطلاق أول وحدة من محطة الفضاء الدولية (ISS)",
        2020: "سبيس إكس تطلق أول طاقم بشري إلى الفضاء",
        2021: "هبوط مركبة 'بيرسيفيرانس' على المريخ",
        2023: "وصول اربعة سعوديين إلى محطة الفضاء الدولية"
    };



    function spaceFacts(year) {
        return space[year] || "";
    }

    function typeEffect(text, element, i = 0) {
        if (i === 0) element.innerHTML = '';
        if (i < text.length) {
            element.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
            setTimeout(() =>
                typeEffect(text, element, i + 1), 40);
        }
    }

    function travelThroughTime() {
        const year = document.getElementById('yearInput').value;
        const countdown = document.getElementById('countdown');
        const output = document.getElementById('output');
        const sound = document.getElementById('travelSound');
        let errorSound = document.getElementById('error');

        if (!year) {
            output.innerHTML = "‼️ الرجاء إدخال السنة";
            errorSound.play()
            return;
        }

        output.innerHTML = '';
        countdown.innerHTML = '3';
        sound.play();
        countdown.classList.add('flash-effect');
        countdown.style.color = "#fff"

        let count = 3;
        const interval = setInterval(() => {
            count--;
            countdown.innerHTML = count;
            countdown.classList.remove('flash-effect');
            void countdown.offsetWidth;
            countdown.classList.add('flash-effect');

            if (count === 0) {
                clearInterval(interval);
                countdown.innerHTML = '';

                const message = `لقد سافرت إلى سنة ${year}!🚀`;
                const fact = spaceFacts(parseInt(year));
                typeEffect(`${message}\n${fact}`, output);
            }
        }, 1000);


        // Function for imgs
        // function updateTimeImage(year) {
        //     const img = document.getElementById('timeImage');
        //     let src = '';

        //     if (year <= 1500) {
        //         src = 'medieval.jpg';
        //     } else if (year < 1900) src = 'industrial.avif';
        //     else if (year < 2000) src = '60.jpg';
        //     else src = 'modern.webp';

        //     img.src = src;
        //     img.style.display = 'block';
        // }
        // updateTimeImage(parseInt(year));

    }

    function backToFuture() {
        const output = document.getElementById('output');
        const today = new Date().toLocaleDateString('EG');
        typeEffect(`لقد عدت إلى تاريخ اليوم:\n${today}`, output);
        let goBack = document.getElementById("travelBack")
        goBack.play()
        img.src = ""
    }


    // Random Travel
    function randomTravel() {
        const randomYear = Math.floor(Math.random() * 2025);
        document.getElementById('yearInput').value = randomYear;
        travelThroughTime();
    }

    function clearDate() {
        let clearDate = document.getElementById("output")
        clearDate.innerText = ""
    }

    // يغير ثيم الموقع حسب الوقت
    // function applyTheme() {
    //     const hour = new Date().getHours();
    //     document.body.style.backgroundColor = hour >= 18 || hour < 6 ? "#111" : "#f5f5f5";
    //     document.body.style.color = hour >= 18 || hour < 6 ? "#00ffcc" : "#333";
    // }
    // applyTheme();


    // let yearValue = document.getElementById(yearInput)
    // if (yearValue.value <= 1500) {
    //     console.log("فترة العصور الوسطى")
    // } else if (yearValue.value < 1900) {
    //     console.log("فترة النهضة الصناعية")
    // } else if (yearValue.value < 2000) {
    //     console.log("فترة النهضة العمرانية")
    // } else {
    //     console.log("العصر الحالي")
    // }




    // Background Animation
    const numBalls = 20;
    for (let i = 0; i < numBalls; i++) {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const hue = Math.floor(Math.random() * 360);
        const delay = (Math.random() * 2).toFixed(2);

        ball.style.left = `${x}px`;
        ball.style.top = `${y}px`;
        ball.style.setProperty('--hue', hue);
        ball.style.animationDelay = `${delay}s`;

        document.body.appendChild(ball);
    }




    // navbar => mobile
    function toggleMenu() {
        document.getElementById("nav-links").classList.toggle("active");
    }

    let success = document.querySelectorAll("span")
    let successSound = document.getElementById("successSound")

    success.forEach(span => {
        span.addEventListener("click", () => {
            successSound.play()

        })
    });