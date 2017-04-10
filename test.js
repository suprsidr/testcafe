import Page from './page-object';

fixture`My first fixture`
  .page`https://devexpress.github.io/testcafe/example`;

const page = new Page();

test('My first test', async t => {
  await t
    .typeText(page.nameInput, 'Peter Parker')
    .click(page.submitButton)
    .expect(page.articleHeader.innerText).eql('Thank you, Peter Parker!');
});

test('Test should fail', async t => {
  await t
    .typeText(page.nameInput, 'Peter Parker')
    .click(page.submitButton)
    .expect(page.articleHeader.innerText).eql('Thank you, P. Parker!');
});

test('Click a check box and check its state', async t => {
  await t
    .click(page.triedTestCafe)
    .expect(page.triedTestCafe.checked).ok();
});

test('Check radio group', async t => {
  await t
    .click(page.linux)
    .click(page.windows)
    .expect(page.os.value).eql('Windows');
});

test('Check select', async t => {
  await t
    .click(page.preferredInterface)
    .click(page.preferredInterface.find('option').withText('JavaScript API'))
    .expect(page.preferredInterface.value).eql('JavaScript API');
});

test('Add comment', async t => {
  await t
    .click(page.triedTestCafe) // enable textarea
    .typeText(page.comments, 'Goodbye cruel world')
    .typeText(page.comments, 'Hello World', { replace: true })
    .expect(page.comments.value).eql('Hello World');
});

// slider seems broken ;(
// test.only('Drag slider', async t => {
//     await t
//         .click(page.triedTestCafe) // enable slider
//         .expect(page.slider.value).eql(1)
//         .drag('.ui-slider-handle', 360, 0, { offsetX: 10, offsetY: 10 })
//         .expect(page.slider.value).eql(7);
// });