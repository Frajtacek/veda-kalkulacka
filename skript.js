/*
Toto je komentář. Vše, co je zde, počítač ignoruje. Slouží to pro poznámky.

Nejdříve počkáme, až se celá HTML stránka načte,
teprve potom spustíme náš kód.
*/
document.addEventListener('DOMContentLoaded', () => {

    // 1. "Chytneme" si HTML prvky podle jejich 'id' a uložíme si je do proměnných.
    // 'const' znamená konstanta - proměnná, která se nezmění.
    const tlacitko = document.getElementById('vypocitejBtn');
    const vstupStranaA = document.getElementById('stranaA');
    const vstupStranaB = document.getElementById('stranaB');
    const poleVysledku = document.getElementById('vysledek');

    // 2. Teorie - zopakování látky (toto je jen komentář pro nás)
    // Obvod obdélníku: O = 2 * (a + b)
    // Obsah obdélníku: S = a * b

    // 3. Řekneme počítači, co má dělat, když někdo klikne na tlačítko.
    tlacitko.addEventListener('click', () => {
        
        // 4. Získáme hodnoty, které uživatel napsal do políček.
        // Tyto hodnoty jsou text ("string"), proto je musíme převést na čísla
        // pomocí 'parseFloat()'.
        const a = parseFloat(vstupStranaA.value);
        const b = parseFloat(vstupStranaB.value);

        // 5. Zkontrolujeme, jestli jsou 'a' i 'b' platná čísla (a ne třeba text nebo prázdné políčko)
        // 'isNaN' znamená "Is Not a Number" (Není číslo).
        // '||' znamená "NEBO".
        if (isNaN(a) || isNaN(b)) {
            poleVysledku.innerText = 'Chyba: Zadejte prosím platná čísla pro obě strany.';
            poleVysledku.style.color = 'red'; // Změníme barvu textu na červenou
            return; // Ukončíme funkci, dál nepokračujeme
        }

        // 6. Provedeme samotné matematické výpočty.
        const obvod = 2 * (a + b);
        const obsah = a * b;

        // 7. Sestavíme textový výsledek.
        // Používáme tzv. "template literal" (ty zpětné apostrofy ``)
        // které nám dovolí vkládat proměnné (např. ${obvod}) přímo do textu.
        const vysledekText = `
            Obvod (O): 2 * (${a} + ${b}) = ${obvod} cm
            <br>
            Obsah (S): ${a} * ${b} = ${obsah} cm²
        `;
        
        // 8. Vložíme výsledek zpátky do naší HTML stránky.
        // Používáme '.innerHTML', protože chceme, aby prohlížeč
        // rozpoznal HTML značku <br> (pro nový řádek).
        poleVysledku.innerHTML = vysledekText;
        poleVysledku.style.color = '#333'; // Vrátíme barvu textu na původní
    });

});