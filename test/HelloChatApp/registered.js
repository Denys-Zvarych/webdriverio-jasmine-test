describe (">\t\t ---Hello Chat App---", () => {
  
    it ("Steps #1:\t Navigate to URL", () => {
        browser.url("https://dev.app.hellochatapp.com/sign-in");
    });

    it ("Click Create an account", () => {
     //   browser.pause(2000);
        $("a=Create an account!").click();
    });

    it ("Click Business link", () => {
        browser.pause(5000);
        $("a=Бізнесу").click();
    });
}); 