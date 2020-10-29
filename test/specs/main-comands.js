describe (">\t\t ---PrivatBank - main page---", () => {
  
    it ("Steps #1:\t Navigate to URL", () => {
        browser.url("https://privatbank.ua/");
    });

    it ("Click Business link", () => {
        browser.pause(5000);
        $("a=Бізнесу").click();
    });

    it ("Get placeholder value", () => {
       // browser.pause(5000);
       let blagoSummPlaceholder = $("#blago_summ").getAttribute("placeholder");    
       console.log(blagoSummPlaceholder); // Result: ГРН
    });

    it ("Get CSS property", () => {
       browser.pause(1000);
       let blagoSummFont = $("#blago_summ").getCSSProperty("font-size");    // font
       console.log(blagoSummFont); 
       expect(blagoSummFont.value).toMatch('15px');
    });
});