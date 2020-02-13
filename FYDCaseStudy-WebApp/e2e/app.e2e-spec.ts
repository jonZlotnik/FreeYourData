import { FYDCaseStudyWebAppPage } from './app.po';

describe('fydcase-study-web-app App', function() {
  let page: FYDCaseStudyWebAppPage;

  beforeEach(() => {
    page = new FYDCaseStudyWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
