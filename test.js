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

test('My first test', async t => {
  await t
    .typeText(page.nameInput, 'Peter Parker')
    .click(page.submitButton)
    .expect(page.articleHeader.innerText).eql('Thank you, P. Parker!');
});