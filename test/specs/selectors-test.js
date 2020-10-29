describe (">\t\t ---Babafi - main page---", () => {
  
  it ("Steps #1:\t Navigate to URL", () => {
      browser.url("https://dev.babafi.com");
  });

  it ("Steps #2:\t Validate Link Text Selector", () => {
      $ ("=Rental search").isExisting();
  });
 
  it ("Steps #3:\t Validate Partial Link Text Selector", () => {
    $ ("=*Rental search").isExisting();
  });

  it ("Steps #4:\t Validate XPath with contains Selector", () => {
    $("//a[contains(text(), 'Rental search')]").isExisting();
  });
  
  it ("Steps #5:\t Click to Rental search link", () => {
    $ ("=Rental search").click();
  });

})

