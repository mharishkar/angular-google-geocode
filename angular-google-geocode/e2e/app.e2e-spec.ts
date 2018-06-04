import { AngularGoogleGeocodePage } from './app.po';

describe('angular-google-geocode App', function() {
  let page: AngularGoogleGeocodePage;

  beforeEach(() => {
    page = new AngularGoogleGeocodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
