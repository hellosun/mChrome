// var url, cupURL, DImg;
// document.addEventListener('DOMContentLoaded', function () {
//   chrome.tabs.getSelected(undefined, function(tab) {
//     url = tab.url;
//     cupURL = 'http://cli.im/qr?text='+url+'&level=L&size=260';
//     document.getElementById('QRcode').setAttribute('src', cupURL);
//   });
// });


	document.addEventListener('DOMContentLoaded', function () {
		chrome.tabs.getSelected(undefined, function(tab) {
			url = tab.url;
			$('#qrCodeBlock').qrcode({width: 320,height: 320, text: url});
		});
	});
