var title;

describe ("Babafi - main page", () => {
    it ("Steps #1:\t Navigate to URL", () => {
        browser.url("https://dev.babafi.com");
      
    });
    
    it ("Steps #2:\t Get Title", () => {
        title = browser.getTitle();        
    });
   
    it ("Steps #3:\t Title validation", () => {
        expect(title).toBe("BabaFi");
    });
})