import puppeteer from "puppeteer";

// On Chrome, go to: http://127.0.0.1:9222/json/version
// Copy: webSocketDebuggerUrl
// Paste to: wsChromeEndPointUrl below

(async () => {
  const wsChromeEndpointurl =
    "ws://127.0.0.1:9222/devtools/browser/eabde20b-efbf-4a3e-897c-a857e5ed06a9";
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

  for (let group of groups) {
    // Opens new page
    const page = await browser.newPage();

    // Goes to group url
    await page.goto(group);

    // Selects comment box
    await page.waitForSelector("div.xzsf02u.x1a2a7pz.x1n2onr6.x14wi4xw");

    // Types a comment
    await page.type("div.xzsf02u.x1a2a7pz.x1n2onr6.x14wi4xw", "🖤");

    // Selects post button
    const postButton = "div[aria-label='Comment'";
    await page.waitForSelector(postButton);

    // Clicks post button
    await page.click(postButton);

    // Close page is disabled
    // await page.close();
  }
})();
