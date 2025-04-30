if (navigation.addEventListener) {
    navigation.addEventListener("navigate", (event) => {
        if (!event.destination.url.includes(document.location.origin)) {
            return;
        }

        event.intercept({
            handler: async () => {
                const response = await fetch(event.destination.url);
                const text = await response.text();

                const parser = new DOMParser();
                const doc = parser.parseFromString(text, "text/html");

                const transition = document.startViewTransition(() => {
                    document.body.replaceChildren(...doc.body.children);
                    document.title = doc.title || "Untitled";
                });

                transition.ready.then(() => {
                    window.scrollTo(0, 0);
                });
            },
            scroll: "manual",
        });
    });
}