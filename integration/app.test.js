describe('addItemForm', () => {
   it('addItemForm input field for the to-do list', async () => {
       // APIs from jest-puppeteer
       await page.goto('http://localhost:9009/iframe.html?id=example-additemform--add-item-form-example&viewMode=story');
       const image = await page.screenshot();

       // API from jest-image-snapshot
       expect(image).toMatchImageSnapshot();
   });
});

describe('AppWithRedux', () => {
    it('AppWithRedux shows all my app', async () => {
        // APIs from jest-puppeteer
        await page.goto('http://localhost:9009/iframe.html?id=todolist-appwithredux--app-with-redux-example&viewMode=story');
        const image = await page.screenshot();
 
        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
 });

describe('Task', () => {
    it('Example of a completed task', async () => {
        // APIs from jest-puppeteer
        await page.goto('http://localhost:9009/iframe.html?id=todolist-task--task-is-done-example&viewMode=story');
        const image = await page.screenshot();
 
        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
 });

 describe('Task', () => {
    it('Example of an unfulfilled task', async () => {
        // APIs from jest-puppeteer
        await page.goto('http://localhost:9009/iframe.html?id=todolist-task--task-is-not-done-example&viewMode=story');
        const image = await page.screenshot();
 
        // API from jest-image-snapshot
        expect(image).toMatchImageSnapshot();
    });
 });
 
 

