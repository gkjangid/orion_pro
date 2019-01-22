const os  = require( 'os' );
const APP = 'Kuriocities App';

function getOrigin(){
  if ( browser.params.origin ){
    return browser.params.origin;
  }
  if ( browser.params.dev ){
    return 'http://kuriocities.localhost';
  }
  return 'https://kuriocities.com';
}

function login(){
  browser.get( `${getOrigin()}/app/#/home` );
  element( by.css( '#loginUsername input' ) ).sendKeys( 'admin' );
  element( by.css( '#loginPassword input' ) ).sendKeys( 'xxx12345' );
  element( by.css( '#loginLogin' ) ).click();

  const EC = ExpectedConditions;
  browser.wait( EC.not( EC.titleIs( 'Kuriocities App' ) ), 2000, 'Log in' );
}

function testTitle( title, sleep ){
  if ( sleep ){ browser.driver.sleep( sleep ); }
  expect(
    browser.driver.getTitle()
  ).toEqual(
    title
  );
}

describe( `${APP}: Login test`, function() {

  it('should display log in page', function() {
    browser.get( `${getOrigin()}/app/#/home` );
    testTitle( 'Kuriocities App' );
  });

  it('should log in', function() {
    login();
    testTitle( 'My Activities' );
  });

});