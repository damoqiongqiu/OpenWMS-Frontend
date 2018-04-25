//【看这里】protractor提供的语法请仔细看这里的文档
// http://www.protractortest.org

import { browser, element, by } from 'protractor';

describe('NiceFish App', function() {
  it('这是一个空的测试，什么都没干',()=>{
  	console.log("可以开始写测试用例了！");
  });

  it('should redirect index.html to index.html#/phones', function() {
	  browser.get('app/index.html');
	  browser.getLocationAbsUrl().then(function(url) {
	      expect(url.split('#')[1]).toBe('/phones');
	  });
  });
});