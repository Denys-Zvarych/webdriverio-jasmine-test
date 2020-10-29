describe (">\t\t ---PrivatBank - main page---", () => {
  
    it ("Steps #1:\t Navigate to URL", () => {
        browser.url("https://privatbank.ua/");
    });

    it ("Validate Elements selector", () => {
        const elements = $$(".wr>ul>li>a");
        console.log("Elements length = " +elements.length);
        elements.forEach (element => {
            console.log (element.getText ());
        });
    });
});