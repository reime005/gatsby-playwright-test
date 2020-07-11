//@ts-check
const pageTitle = 'Gatsby Default Starter';
const goToPage2 = 'Go to page 2';
const secondPageTitle = 'Hi from the second page';

beforeAll(async () => {
  await page.goto('http://localhost:8000/');
});

test('should show main page & screenshot', async () => {
  await page.waitForSelector(`text=${pageTitle}`);

  await page.screenshot({ path: `./screenshots/${Date.now() / 1000}_screenshot.png` });

  let sectionText = await page.$eval(`text=${pageTitle}`, e => e.textContent);

  expect(sectionText).toEqual(pageTitle);
});

test('should go to page 2', async () => {
  await page.waitForSelector(`text=${goToPage2}`);

  await page.click(`text=${goToPage2}`);

  await page.waitForSelector(`text=${secondPageTitle}`);

  const text = await page.$eval(`text=${secondPageTitle}`, e => e.textContent);

  expect(text).toEqual(secondPageTitle);
});

