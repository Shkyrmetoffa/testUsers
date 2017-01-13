import { TestUsersPage } from './app.po';

describe('test-users App', function() {
  let page: TestUsersPage;

  beforeEach(() => {
    page = new TestUsersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
