function generateExcuse() {
    let who = ['el perro', 'mi abuela', 'su tortuga', 'mi pájaro'];
    let what = ['comió', 'orinó', 'aplastó', 'rompió'];
    let when = ['antes de la clase', 'justo a tiempo', 'cuando terminé', 'durante mi almuerzo', 'mientras rezaba'];

    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    let excuse = `${randomWho} ${randomWhat} ${randomWhen}`;

    document.getElementById('excuse').innerText = excuse;
}
