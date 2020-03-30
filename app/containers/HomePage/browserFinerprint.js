
function fingerprint_browser() {
  'use strict';
  var strOnError, strUserAgent, numVersion, strBrowser, strOut;

  strOnError = 'Error';
  strUserAgent = null;
  numVersion = null;
  strBrowser = null;
  strOut = null;

  try {
    strUserAgent = navigator.userAgent.toLowerCase();
    if (/msie (\d+\.\d+);/.test(strUserAgent)) {
      //test for MSIE x.x;
      numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
      if (strUserAgent.indexOf('trident/6') > -1) {
        numVersion = 10;
      }
      if (strUserAgent.indexOf('trident/5') > -1) {
        numVersion = 9;
      }
      if (strUserAgent.indexOf('trident/4') > -1) {
        numVersion = 8;
      }
      strBrowser = 'Internet Explorer ' + numVersion;
    } else if (strUserAgent.indexOf('trident/7') > -1) {
      //IE 11+ gets rid of the legacy 'MSIE' in the user-agent string;
      numVersion = 11;
      strBrowser = 'Internet Explorer ' + numVersion;
    } else if (/firefox[\/\s](\d+\.\d+)/.test(strUserAgent)) {
      //test for Firefox/x.x or Firefox x.x (ignoring remaining digits);
      numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
      strBrowser = 'Firefox ' + numVersion;
    } else if (/opera[\/\s](\d+\.\d+)/.test(strUserAgent)) {
      //test for Opera/x.x or Opera x.x (ignoring remaining decimal places);
      numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
      strBrowser = 'Opera ' + numVersion;
    } else if (/chrome[\/\s](\d+\.\d+)/.test(strUserAgent)) {
      //test for Chrome/x.x or Chrome x.x (ignoring remaining digits);
      numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
      strBrowser = 'Chrome ' + numVersion;
    } else if (/version[\/\s](\d+\.\d+)/.test(strUserAgent)) {
      //test for Version/x.x or Version x.x (ignoring remaining digits);
      numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
      strBrowser = 'Safari ' + numVersion;
    } else if (/rv[\/\s](\d+\.\d+)/.test(strUserAgent)) {
      //test for rv/x.x or rv x.x (ignoring remaining digits);
      numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
      strBrowser = 'Mozilla ' + numVersion;
    } else if (/mozilla[\/\s](\d+\.\d+)/.test(strUserAgent)) {
      //test for Mozilla/x.x or Mozilla x.x (ignoring remaining digits);
      numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
      strBrowser = 'Mozilla ' + numVersion;
    } else if (/binget[\/\s](\d+\.\d+)/.test(strUserAgent)) {
      //test for BinGet/x.x or BinGet x.x (ignoring remaining digits);
      numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
      strBrowser = 'Library (BinGet) ' + numVersion;
    } else if (/curl[\/\s](\d+\.\d+)/.test(strUserAgent)) {
      //test for Curl/x.x or Curl x.x (ignoring remaining digits);
      numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
      strBrowser = 'Library (cURL) ' + numVersion;
    } else if (/java[\/\s](\d+\.\d+)/.test(strUserAgent)) {
      //test for Java/x.x or Java x.x (ignoring remaining digits);
      numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
      strBrowser = 'Library (Java) ' + numVersion;
    } else if (/libwww-perl[\/\s](\d+\.\d+)/.test(strUserAgent)) {
      //test for libwww-perl/x.x or libwww-perl x.x (ignoring remaining digits);
      numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
      strBrowser = 'Library (libwww-perl) ' + numVersion;
    } else if (/microsoft url control -[\s](\d+\.\d+)/.test(strUserAgent)) {
      //test for Microsoft URL Control - x.x (ignoring remaining digits);
      numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
      strBrowser = 'Library (Microsoft URL Control) ' + numVersion;
    } else if (/peach[\/\s](\d+\.\d+)/.test(strUserAgent)) {
      //test for Peach/x.x or Peach x.x (ignoring remaining digits);
      numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
      strBrowser = 'Library (Peach) ' + numVersion;
    } else if (/php[\/\s](\d+\.\d+)/.test(strUserAgent)) {
      //test for PHP/x.x or PHP x.x (ignoring remaining digits);
      numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
      strBrowser = 'Library (PHP) ' + numVersion;
    } else if (/pxyscand[\/\s](\d+\.\d+)/.test(strUserAgent)) {
      //test for pxyscand/x.x or pxyscand x.x (ignoring remaining digits);
      numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
      strBrowser = 'Library (pxyscand) ' + numVersion;
    } else if (/pycurl[\/\s](\d+\.\d+)/.test(strUserAgent)) {
      //test for pycurl/x.x or pycurl x.x (ignoring remaining digits);
      numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
      strBrowser = 'Library (PycURL) ' + numVersion;
    } else if (/python-urllib[\/\s](\d+\.\d+)/.test(strUserAgent)) {
      //test for python-urllib/x.x or python-urllib x.x (ignoring remaining digits);
      numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
      strBrowser = 'Library (Python URLlib) ' + numVersion;
    } else if (/appengine-google/.test(strUserAgent)) {
      //test for AppEngine-Google;
      numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
      strBrowser = 'Cloud (Google AppEngine) ' + numVersion;
    } else {
      strBrowser = 'Unknown';
    }
    strOut = strBrowser;
    return strOut;
  } catch (err) {
    return strOnError;
  }
}

function fingerprint_os() {
  'use strict';
  var strSep, strOnError, strUserAgent, strPlatform, strOS, strOSBits, strOut;

  strSep = '|';
  strOnError = 'Error';
  strUserAgent = null;
  strPlatform = null;
  strOS = null;
  strOSBits = null;
  strOut = null;

  try {
    /* navigator.userAgent is supported by all major browsers */
    strUserAgent = navigator.userAgent.toLowerCase();
    /* navigator.platform is supported by all major browsers */
    strPlatform = navigator.platform.toLowerCase();
    if (strUserAgent.indexOf('windows nt 6.3') !== -1) {
      strOS = 'Windows 8.1';
    } else if (strUserAgent.indexOf('windows nt 6.2') !== -1) {
      strOS = 'Windows 8';
    } else if (strUserAgent.indexOf('windows nt 6.1') !== -1) {
      strOS = 'Windows 7';
    } else if (strUserAgent.indexOf('windows nt 6.0') !== -1) {
      strOS = 'Windows Vista/Windows Server 2008';
    } else if (strUserAgent.indexOf('windows nt 5.2') !== -1) {
      strOS = 'Windows XP x64/Windows Server 2003';
    } else if (strUserAgent.indexOf('windows nt 5.1') !== -1) {
      strOS = 'Windows XP';
    } else if (strUserAgent.indexOf('windows nt 5.01') !== -1) {
      strOS = 'Windows 2000, Service Pack 1 (SP1)';
    } else if (strUserAgent.indexOf('windows xp') !== -1) {
      strOS = 'Windows XP';
    } else if (strUserAgent.indexOf('windows 2000') !== -1) {
      strOS = 'Windows 2000';
    } else if (strUserAgent.indexOf('windows nt 5.0') !== -1) {
      strOS = 'Windows 2000';
    } else if (strUserAgent.indexOf('windows nt 4.0') !== -1) {
      strOS = 'Windows NT 4.0';
    } else if (strUserAgent.indexOf('windows nt') !== -1) {
      strOS = 'Windows NT 4.0';
    } else if (strUserAgent.indexOf('winnt4.0') !== -1) {
      strOS = 'Windows NT 4.0';
    } else if (strUserAgent.indexOf('winnt') !== -1) {
      strOS = 'Windows NT 4.0';
    } else if (strUserAgent.indexOf('windows me') !== -1) {
      strOS = 'Windows ME';
    } else if (strUserAgent.indexOf('win 9x 4.90') !== -1) {
      strOS = 'Windows ME';
    } else if (strUserAgent.indexOf('windows 98') !== -1) {
      strOS = 'Windows 98';
    } else if (strUserAgent.indexOf('win98') !== -1) {
      strOS = 'Windows 98';
    } else if (strUserAgent.indexOf('windows 95') !== -1) {
      strOS = 'Windows 95';
    } else if (strUserAgent.indexOf('windows_95') !== -1) {
      strOS = 'Windows 95';
    } else if (strUserAgent.indexOf('win95') !== -1) {
      strOS = 'Windows 95';
    } else if (strUserAgent.indexOf('ce') !== -1) {
      strOS = 'Windows CE';
    } else if (strUserAgent.indexOf('win16') !== -1) {
      strOS = 'Windows 3.11';
    } else if (strUserAgent.indexOf('iemobile') !== -1) {
      strOS = 'Windows Mobile';
    } else if (strUserAgent.indexOf('wm5 pie') !== -1) {
      strOS = 'Windows Mobile';
    } else if (strUserAgent.indexOf('windows') !== -1) {
      strOS = 'Windows (Unknown Version)';
    } else if (strUserAgent.indexOf('openbsd') !== -1) {
      strOS = 'Open BSD';
    } else if (strUserAgent.indexOf('sunos') !== -1) {
      strOS = 'Sun OS';
    } else if (strUserAgent.indexOf('ubuntu') !== -1) {
      strOS = 'Ubuntu';
    } else if (strUserAgent.indexOf('ipad') !== -1) {
      strOS = 'iOS (iPad)';
    } else if (strUserAgent.indexOf('ipod') !== -1) {
      strOS = 'iOS (iTouch)';
    } else if (strUserAgent.indexOf('iphone') !== -1) {
      strOS = 'iOS (iPhone)';
    } else if (strUserAgent.indexOf('mac os x beta') !== -1) {
      strOS = 'Mac OSX Beta (Kodiak)';
    } else if (strUserAgent.indexOf('mac os x 10.0') !== -1) {
      strOS = 'Mac OSX Cheetah';
    } else if (strUserAgent.indexOf('mac os x 10.1') !== -1) {
      strOS = 'Mac OSX Puma';
    } else if (strUserAgent.indexOf('mac os x 10.2') !== -1) {
      strOS = 'Mac OSX Jaguar';
    } else if (strUserAgent.indexOf('mac os x 10.3') !== -1) {
      strOS = 'Mac OSX Panther';
    } else if (strUserAgent.indexOf('mac os x 10.4') !== -1) {
      strOS = 'Mac OSX Tiger';
    } else if (strUserAgent.indexOf('mac os x 10.5') !== -1) {
      strOS = 'Mac OSX Leopard';
    } else if (strUserAgent.indexOf('mac os x 10.6') !== -1) {
      strOS = 'Mac OSX Snow Leopard';
    } else if (strUserAgent.indexOf('mac os x 10.7') !== -1) {
      strOS = 'Mac OSX Lion';
    } else if (strUserAgent.indexOf('mac os x') !== -1) {
      strOS = 'Mac OSX (Version Unknown)';
    } else if (strUserAgent.indexOf('mac_68000') !== -1) {
      strOS = 'Mac OS Classic (68000)';
    } else if (strUserAgent.indexOf('68K') !== -1) {
      strOS = 'Mac OS Classic (68000)';
    } else if (strUserAgent.indexOf('mac_powerpc') !== -1) {
      strOS = 'Mac OS Classic (PowerPC)';
    } else if (strUserAgent.indexOf('ppc mac') !== -1) {
      strOS = 'Mac OS Classic (PowerPC)';
    } else if (strUserAgent.indexOf('macintosh') !== -1) {
      strOS = 'Mac OS Classic';
    } else if (strUserAgent.indexOf('googletv') !== -1) {
      strOS = 'Android (GoogleTV)';
    } else if (strUserAgent.indexOf('xoom') !== -1) {
      strOS = 'Android (Xoom)';
    } else if (strUserAgent.indexOf('htc_flyer') !== -1) {
      strOS = 'Android (HTC Flyer)';
    } else if (strUserAgent.indexOf('android') !== -1) {
      strOS = 'Android';
    } else if (strUserAgent.indexOf('symbian') !== -1) {
      strOS = 'Symbian';
    } else if (strUserAgent.indexOf('series60') !== -1) {
      strOS = 'Symbian (Series 60)';
    } else if (strUserAgent.indexOf('series70') !== -1) {
      strOS = 'Symbian (Series 70)';
    } else if (strUserAgent.indexOf('series80') !== -1) {
      strOS = 'Symbian (Series 80)';
    } else if (strUserAgent.indexOf('series90') !== -1) {
      strOS = 'Symbian (Series 90)';
    } else if (strUserAgent.indexOf('x11') !== -1) {
      strOS = 'UNIX';
    } else if (strUserAgent.indexOf('nix') !== -1) {
      strOS = 'UNIX';
    } else if (strUserAgent.indexOf('linux') !== -1) {
      strOS = 'Linux';
    } else if (strUserAgent.indexOf('qnx') !== -1) {
      strOS = 'QNX';
    } else if (strUserAgent.indexOf('os/2') !== -1) {
      strOS = 'IBM OS/2';
    } else if (strUserAgent.indexOf('beos') !== -1) {
      strOS = 'BeOS';
    } else if (strUserAgent.indexOf('blackberry95') !== -1) {
      strOS = 'Blackberry (Storm 1/2)';
    } else if (strUserAgent.indexOf('blackberry97') !== -1) {
      strOS = 'Blackberry (Bold)';
    } else if (strUserAgent.indexOf('blackberry96') !== -1) {
      strOS = 'Blackberry (Tour)';
    } else if (strUserAgent.indexOf('blackberry89') !== -1) {
      strOS = 'Blackberry (Curve 2)';
    } else if (strUserAgent.indexOf('blackberry98') !== -1) {
      strOS = 'Blackberry (Torch)';
    } else if (strUserAgent.indexOf('playbook') !== -1) {
      strOS = 'Blackberry (Playbook)';
    } else if (strUserAgent.indexOf('wnd.rim') !== -1) {
      strOS = 'Blackberry (IE/FF Emulator)';
    } else if (strUserAgent.indexOf('blackberry') !== -1) {
      strOS = 'Blackberry';
    } else if (strUserAgent.indexOf('palm') !== -1) {
      strOS = 'Palm OS';
    } else if (strUserAgent.indexOf('webos') !== -1) {
      strOS = 'WebOS';
    } else if (strUserAgent.indexOf('hpwos') !== -1) {
      strOS = 'WebOS (HP)';
    } else if (strUserAgent.indexOf('blazer') !== -1) {
      strOS = 'Palm OS (Blazer)';
    } else if (strUserAgent.indexOf('xiino') !== -1) {
      strOS = 'Palm OS (Xiino)';
    } else if (strUserAgent.indexOf('kindle') !== -1) {
      strOS = 'Kindle';
    } else if (strUserAgent.indexOf('wii') !== -1) {
      strOS = 'Nintendo (Wii)';
    } else if (strUserAgent.indexOf('nintendo ds') !== -1) {
      strOS = 'Nintendo (DS)';
    } else if (strUserAgent.indexOf('playstation 3') !== -1) {
      strOS = 'Sony (Playstation Console)';
    } else if (strUserAgent.indexOf('playstation portable') !== -1) {
      strOS = 'Sony (Playstation Portable)';
    } else if (strUserAgent.indexOf('webtv') !== -1) {
      strOS = 'MSN TV (WebTV)';
    } else if (strUserAgent.indexOf('inferno') !== -1) {
      strOS = 'Inferno';
    } else {
      strOS = 'Unknown';
    }
    if (strPlatform.indexOf('x64') !== -1) {
      strOSBits = '64 bits';
    } else if (strPlatform.indexOf('wow64') !== -1) {
      strOSBits = '64 bits';
    } else if (strPlatform.indexOf('win64') !== -1) {
      strOSBits = '64 bits';
    } else if (strPlatform.indexOf('win32') !== -1) {
      strOSBits = '32 bits';
    } else if (strPlatform.indexOf('x64') !== -1) {
      strOSBits = '64 bits';
    } else if (strPlatform.indexOf('x32') !== -1) {
      strOSBits = '32 bits';
    } else if (strPlatform.indexOf('x86') !== -1) {
      strOSBits = '32 bits*';
    } else if (strPlatform.indexOf('ppc') !== -1) {
      strOSBits = '64 bits';
    } else if (strPlatform.indexOf('alpha') !== -1) {
      strOSBits = '64 bits';
    } else if (strPlatform.indexOf('68k') !== -1) {
      strOSBits = '64 bits';
    } else if (strPlatform.indexOf('iphone') !== -1) {
      strOSBits = '32 bits';
    } else if (strPlatform.indexOf('android') !== -1) {
      strOSBits = '32 bits';
    } else {
      strOSBits = 'Unknown';
    }
    strOut = strOS + strSep + strOSBits;
    return strOut;
  } catch (err) {
    return strOnError;
  }
}

function fingerprint_useragent() {
  'use strict';
  var strSep, strTmp, strUserAgent, strOut;

  strSep = '|';
  strTmp = null;
  strUserAgent = null;
  strOut = null;

  /* navigator.userAgent is supported by all major browsers */
  strUserAgent = navigator.userAgent.toLowerCase();
  /* navigator.platform is supported by all major browsers */
  strTmp = strUserAgent + strSep + navigator.platform;
  /* navigator.cpuClass only supported in IE */
  if (navigator.cpuClass) {
    strTmp += strSep + navigator.cpuClass;
  }
  /* navigator.browserLanguage only supported in IE, Safari and Chrome */
  if (navigator.browserLanguage) {
    strTmp += strSep + navigator.browserLanguage;
  } else {
    strTmp += strSep + navigator.language;
  }
  strOut = strTmp;
  return strOut;
}

function fingerprint_timezone() {
  'use strict';
  var strOnError, dtDate, numOffset, numGMTHours, numOut;

  strOnError = 'Error';
  dtDate = null;
  numOffset = null;
  numGMTHours = null;
  numOut = null;

  try {
    dtDate = new Date();
    numOffset = dtDate.getTimezoneOffset();
    numGMTHours = (numOffset / 60) * -1;
    numOut = numGMTHours;
    return numOut;
  } catch (err) {
    return strOnError;
  }
}

function fingerprint_truebrowser() {
  'use strict';
  var strBrowser, strUserAgent, strOut;

  strBrowser = 'Unknown';
  strUserAgent = null;
  strOut = null;

  strUserAgent = navigator.userAgent.toLowerCase();

  /* Checks for different browsers, cannot use Try/Catch block */
  if (
    document.all &&
    document.getElementById &&
    navigator.savePreferences &&
    strUserAgent.indexOf('Netfront') < 0 &&
    navigator.appName !== 'Blazer'
  ) {
    strBrowser = 'Escape 5';
  } else if (navigator.vendor === 'KDE') {
    strBrowser = 'Konqueror';
  } else if (
    document.childNodes &&
    !document.all &&
    !navigator.taintEnabled &&
    !navigator.accentColorName
  ) {
    strBrowser = 'Safari';
  } else if (
    document.childNodes &&
    !document.all &&
    !navigator.taintEnabled &&
    navigator.accentColorName
  ) {
    strBrowser = 'OmniWeb 4.5+';
  } else if (navigator.__ice_version) {
    strBrowser = 'ICEBrowser';
  } else if (
    window.ScriptEngine &&
    ScriptEngine().indexOf('InScript') + 1 &&
    document.createElement
  ) {
    strBrowser = 'iCab 3+';
  } else if (window.ScriptEngine && ScriptEngine().indexOf('InScript') + 1) {
    strBrowser = 'iCab 2-';
  } else if (
    strUserAgent.indexOf('hotjava') + 1 &&
    navigator.accentColorName === 'undefined'
  ) {
    strBrowser = 'HotJava';
  } else if (document.layers && !document.classes) {
    strBrowser = 'Omniweb 4.2-';
  } else if (document.layers && !navigator.mimeTypes['*']) {
    strBrowser = 'Escape 4';
  } else if (document.layers) {
    strBrowser = 'Netscape 4';
  } else if (window.opera && document.getElementsByClassName) {
    strBrowser = 'Opera 9.5+';
  } else if (window.opera && window.getComputedStyle) {
    strBrowser = 'Opera 8';
  } else if (window.opera && document.childNodes) {
    strBrowser = 'Opera 7';
  } else if (window.opera) {
    strBrowser = 'Opera ' + window.opera.version();
  } else if (navigator.appName.indexOf('WebTV') + 1) {
    strBrowser = 'WebTV';
  } else if (strUserAgent.indexOf('netgem') + 1) {
    strBrowser = 'Netgem NetBox';
  } else if (strUserAgent.indexOf('opentv') + 1) {
    strBrowser = 'OpenTV';
  } else if (strUserAgent.indexOf('ipanel') + 1) {
    strBrowser = 'iPanel MicroBrowser';
  } else if (document.getElementById && !document.childNodes) {
    strBrowser = 'Clue browser';
  } else if (navigator.product && navigator.product.indexOf('Hv') === 0) {
    strBrowser = 'Tkhtml Hv3+';
  } else if (typeof InstallTrigger !== 'undefined') {
    strBrowser = 'Firefox';
  } else if (window.atob) {
    strBrowser = 'Internet Explorer 10+';
  } else if (XDomainRequest && window.performance) {
    strBrowser = 'Internet Explorer 9';
  } else if (XDomainRequest) {
    strBrowser = 'Internet Explorer 8';
  } else if (
    document.documentElement &&
    document.documentElement.style.maxHeight !== 'undefined'
  ) {
    strBrowser = 'Internet Explorer 7'; //xxxxx
  } else if (document.compatMode && document.all) {
    strBrowser = 'Internet Explorer 6'; //xxxxx
  } else if (window.createPopup) {
    strBrowser = 'Internet Explorer 5.5';
  } else if (window.attachEvent) {
    strBrowser = 'Internet Explorer 5';
  } else if (
    document.all &&
    navigator.appName !== 'Microsoft Pocket Internet Explorer'
  ) {
    strBrowser = 'Internet Explorer 4';
  } else if (strUserAgent.indexOf('msie') + 1 && window.ActiveXObject) {
    strBrowser = 'Pocket Internet Explorer';
  } else if (
    document.getElementById &&
    (strUserAgent.indexOf('netfront') + 1 ||
      navigator.appName === 'Blazer' ||
      navigator.product === 'Gecko' ||
      navigator.appName.indexOf('PSP') + 1 ||
      navigator.appName.indexOf('PLAYSTATION 3') + 1)
  ) {
    strBrowser = 'NetFront 3+';
  } else if (navigator.product === 'Gecko' && !navigator.savePreferences) {
    strBrowser = 'Gecko engine (Mozilla, Netscape 6+ etc.)';
  } else if (window.chrome) {
    strBrowser = 'Chrome';
  }
  strOut = strBrowser;
  return strOut;
}

  //let uid = fp.get();
  let browser = fingerprint_browser();
  let os = fingerprint_os();
  let timezone = fingerprint_timezone();
  let useragent = fingerprint_useragent();
  let truebrowser = fingerprint_truebrowser();

export const browserFingerprint = {
  browser: browser,
  os: os,
  timezone: timezone,
  useragent: useragent,
  truebrowser: truebrowser,
};

export default browserFingerprint;
