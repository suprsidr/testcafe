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