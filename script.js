const content = {
    ru: {
        home: `<h2>Добро пожаловать в VexShield</h2><p>Инновационная защита от резких падений цены криптовалюты.</p>`,
        tech: `<h2>Технология Anti-Dump</h2>
               <p>VexShield — это революционная технология защиты рынка, предотвращающая резкое падение стоимости криптовалют во время листинга. 
               Система интегрирована с ведущими блокчейнами, поддерживает кроссчейн-взаимодействие и автоматически стабилизирует цену токена. 
               Это повышает доверие инвесторов и снижает риски.</p>`,
        contract: `<h2>Контракт</h2><p>Смарт-контракт доступен в сети, защищён от уязвимостей и прошёл аудит.</p>`,
        airdrop: `<h2>Airdrop</h2><p>Следите за новостями — скоро запуск раздачи токенов.</p>`,
        contacts: `<h2>Контакты</h2><p>Напишите нам: support@vexshield.io</p>`
    },
    en: {
        home: `<h2>Welcome to VexShield</h2><p>Innovative protection against sharp cryptocurrency price drops.</p>`,
        tech: `<h2>Anti-Dump Technology</h2>
               <p>VexShield is a revolutionary market protection technology that prevents sharp drops in cryptocurrency value during listings.
               The system is integrated with leading blockchains, supports cross-chain interaction, and automatically stabilizes token price.
               This increases investor confidence and reduces risks.</p>`,
        contract: `<h2>Contract</h2><p>The smart contract is deployed on the network, protected from vulnerabilities, and has passed an audit.</p>`,
        airdrop: `<h2>Airdrop</h2><p>Stay tuned — token distribution coming soon.</p>`,
        contacts: `<h2>Contacts</h2><p>Email us: support@vexshield.io</p>`
    }
};

let currentLang = 'ru';

function loadSection(section) {
    document.getElementById('content').innerHTML = content[currentLang][section];
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        loadSection(e.target.dataset.section);
    });
});

document.getElementById('languageSwitcher').addEventListener('change', e => {
    currentLang = e.target.value;
    loadSection('home');
});

// Загружаем главную при старте
loadSection('home');
