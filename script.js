
document.getElementById("languageSwitcher").addEventListener("change", function() {
    const lang = this.value;
    const text = {
        ru: {
            title: "Добро пожаловать в VexShield",
            content: "Защита от резких падений цены криптовалюты.",
            nav: ["Главная", "Технология", "Контракт", "Airdrop", "Контакты"]
        },
        en: {
            title: "Welcome to VexShield",
            content: "Protection against sharp cryptocurrency price drops.",
            nav: ["Home", "Technology", "Smart Contract", "Airdrop", "Contact"]
        }
    };

    const t = text[lang];
    document.querySelector("#mainText h2").textContent = t.title;
    document.querySelector("#mainText p").textContent = t.content;
    document.querySelectorAll("nav ul li a").forEach((el, i) => el.textContent = t.nav[i]);
});
