/* badsolitaire.github.io 2021-09-26 */

(() => {

    /* Await for event DOMContentLoaded, incase defer fails */
    document.addEventListener("DOMContentLoaded", () => {

        /* Update any span.currentyear; note copyright year */
        setTimeout(()=>{
            document.querySelectorAll('span.currentyear')
                .forEach(e=>e.textContent = new Date().getFullYear());
        }, 300);

    });

})();
