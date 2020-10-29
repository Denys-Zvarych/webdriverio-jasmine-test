describe (">\t\t ---PrivatBank - main page---", () => {
  
    it ("Steps #1:\t Navigate to URL", () => {
        browser.url("https://privatbank.ua/");
    });

    it ("Click Business link", () => {
        browser.pause(1000);
        $("a=Бізнесу").click();
    });

    // it ("Set value into input field", () => {
    //    browser.pause(1000);
    //    $("#blago_summ").setValue("123");    
    //    browser.pause(5000);

    // });
    it('should set value for a certain element', () => {
        const input = $('.input__3RyIm input--primary__2KW8A');
        input.setValue('test123');
    
        console.log(input.getValue()); // outputs: 'test123'
    });
}); 