const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Frontend Developer";
            }, 0);
            setTimeout(() => {
                text.textContent = "Informatics Student";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Gamers";
            }, 8000); //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 12000);