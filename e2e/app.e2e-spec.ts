import { YoutubeAppPage } from './app.po';

describe('youtube-app App', () => {
  let page: YoutubeAppPage;

  beforeEach(() => {
    page = new YoutubeAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
