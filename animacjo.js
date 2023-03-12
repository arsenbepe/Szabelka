function wstrzasnij(querySelector) {
    const htmlNode = document.querySelector(querySelector);

    if (htmlNode == null) {
        console.warn(`couldn't find any element with query '${querySelector}'`);
        return;
    }

    htmlNode.classList.add('wstrzasniety-nie-mieszany');

    setTimeout(() => {
        htmlNode.classList.remove('wstrzasniety-nie-mieszany');
    }, 800)
}