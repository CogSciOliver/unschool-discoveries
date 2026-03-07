(() => {
    var o = () => {
        requestAnimationFrame(() => {
            window.gammaSiteAnimationsInitialized === !0
                ? console.log(
                    "%c[animateOnLoad] - ALREADY INITIALIZED $$$$$$$$$$$$$$$$$$$$",
                    "background-color: orange; color: black; padding: 5px; font-size: 1.5em;",
                )
                : (console.log(
                    "%c[animateOnLoad] ADDING site-animations-bootstrap class $$$$$$$$$$$$$$$$$$$$",
                    "background-color: aqua; color: black; padding: 5px; font-size: 1.5em;",
                ),
                    document.body.classList.add(
                        "site-animations-bootstrap",
                    ));
        });
    };
    if ("PerformanceObserver" in window) {
        let n = new PerformanceObserver((e) => {
            for (let a of e.getEntries())
                a.name === "first-contentful-paint" &&
                    (o(), n.disconnect());
        });
        n.observe({ entryTypes: ["paint"] });
    } else
        (console.warn(
            "PerformanceObserver not supported. Animating now.",
        ),
            o());
})();