import puppeteer from "puppeteer";

// On Chrome, go to: http://127.0.0.1:9222/json/version
// Copy: webSocketDebuggerUrl
// Paste to: wsChromeEndPointUrl below

(async () => {
  const wsChromeEndpointurl =
    "ws://127.0.0.1:9222/devtools/browser/6eab6ba2-330f-47bc-ab98-a77f93d96cc6";
  const browser = await puppeteer.connect({
    browserWSEndpoint: wsChromeEndpointurl,
  });

  // Paste Group Post URLS here:
  const groups = [
    "https://www.facebook.com/groups/176047790128165/posts/1024434531956149/",
    "https://www.facebook.com/groups/189912683914472/posts/262292886676451/",
    "https://www.facebook.com/groups/238929337533500/posts/1079048226854936/",
    "https://www.facebook.com/groups/331571778617442/posts/925290369245577/",
    "https://www.facebook.com/groups/348752017626860/posts/387558633746198/",
    "https://www.facebook.com/groups/419657133371113/posts/680983727238451/",
    "https://www.facebook.com/groups/484363760557278/posts/575573494769637/",
    "https://www.facebook.com/groups/506905190831431/posts/913354910186455/",
    "https://www.facebook.com/groups/bshpilipinas/posts/804027844863874/",
    "https://www.facebook.com/groups/619943002902492/posts/747487150148076/",
    "https://www.facebook.com/groups/781321102978935/posts/1036530884124621/",
    "https://www.facebook.com/groups/1294752737230410/posts/7237019439670347/",
    "https://www.facebook.com/groups/1482616265538451/posts/1788182644981810/",
    "https://www.facebook.com/groups/2537721096328426/posts/6413302088770288/",
    "https://www.facebook.com/groups/406400637021547/posts/1121840522144218/",
    "https://www.facebook.com/groups/531910504913562/posts/1131972688240671/",
    "https://www.facebook.com/groups/276565036768037/posts/1019145999176600/",
    "https://www.facebook.com/groups/433718458876354/posts/688789286702602/",
    "https://www.facebook.com/groups/catloversphilippines.fb/posts/1870687580037664",
    "https://www.facebook.com/groups/669508617739329/posts/1054203422603178/",
  ];

  // Iterate through each group in the list
  for (let group of groups) {
    // Open a new page in the browser
    const page = await browser.newPage();

    // Navigate to the URL of the current group
    await page.goto(group);

    // Wait for the comment box to be available
    await page.waitForSelector("div.xzsf02u.x1a2a7pz.x1n2onr6.x14wi4xw");

    await delay(randomizer());

    // Type a comment in the identified comment box
    await page.type("div.xzsf02u.x1a2a7pz.x1n2onr6.x14wi4xw", "🖤");

    // Identify and wait for the post button to be available
    const postButton = "div[aria-label='Comment'";
    await page.waitForSelector(postButton);

    await delay(randomizer());

    // Click the post button to submit the comment
    await page.click(postButton);

    // Remove the // below if you want to automatically close pages after processing
    // await page.close();

    await delay(randomizer());
  }

  function delay(time) {
    return new Promise(function (resolve) {
      setTimeout(resolve, time);
    });
  }

  function randomizer() {
    return Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
  }
})();
