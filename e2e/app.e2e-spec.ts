import { CesCareerPortalPage } from './app.po';

describe('ces-career-portal App', () => {
  let page: CesCareerPortalPage;

  beforeEach(() => {
    page = new CesCareerPortalPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
