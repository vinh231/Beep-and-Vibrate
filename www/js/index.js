// BATTERY STATUS
// https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-battery-status/index.html

// Installation:
// cordova plugin add cordova-plugin-battery-status

$(window).on('batterystatus', onBatteryStatus);
$(window).on('batterylow', onBatteryLow);
$(window).on('batterycritical', onBatteryCritical);

function onBatteryStatus(status) {
    alert(`Level: ${status.level}%. isPlugged: ${status.isPlugged}.`);
}

function onBatteryLow(status) {
    alert(`Battery Level Low ${status.level}%.`);
}

function onBatteryCritical(status) {
    alert(`Battery Level Critical ${status.level}%. Recharge Soon!`);
}

// DIALOGS
// https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-dialogs/index.html

// Installation:
// cordova plugin add cordova-plugin-dialogs

$(document).on('vclick', '#btn-js-alert', jsAlert);
$(document).on('vclick', '#btn-cordova-alert', cordovaAlert);
$(document).on('vclick', '#btn-cordova-confirm', cordovaConfirm);
$(document).on('vclick', '#btn-cordova-prompt', cordovaPrompt);
$(document).on('vclick', '#btn-cordova-beep', Beep);

function jsAlert() {
    alert('This is Javascript Alert.');
}

function cordovaAlert() {
    var message = 'This is Cordova Alert.';
    var title = 'Cordova Alert';
    var buttonLabel = `I'm Cordova Alert`;

    navigator.notification.alert(message, callback, title, buttonLabel);

    function callback() {
        alert('Cordova Alert is closed.');
    }
}

function cordovaConfirm() {
    var message = 'This is Cordova Confirm.';
    var title = 'Cordova Confirm';
    var buttonLabel = 'OPTION 2,OPTION 1';

    navigator.notification.confirm(message, callback, title, buttonLabel);

    function callback(btnIndex) {
        alert('You can run codes here.');

        if (btnIndex == 0) {
            alert('Cordova Confirm is dismissed.');
        }

        else if (btnIndex == 1) {
            alert('This is Button OPTION 2.');
        }

        else if (btnIndex == 2) {
            alert('This is Button OPTION 1.');
        }

        alert('And here...');
    }
}

function cordovaPrompt() {
    var message = `Please type 'confirm delete' to delete.`;
    var title = 'Delete Confirmation';
    var buttonLabel = 'Cancel,Delete';
    var defaultText = 'Please enter here...';

    navigator.notification.prompt(message, callback, title, buttonLabel, defaultText);

    function callback(result) {
        alert('You can run codes here.');

        if (result.buttonIndex == 0) {
            alert('Cordova Prompt is dismissed.');
        }

        else if (result.buttonIndex == 1) {
            alert('This is Button CANCEL.');
        }

        else if (result.buttonIndex == 2) {
            if (result.input1 == 'confirm delete')
                alert('Your item is deleted.');

            else {
                alert('Your item is NOT deleted.');
            }
        }

        alert('And here...');
    }
}


function Beep() {
    navigator.notification.beep(4);
}

// VIBRATION
// https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-vibration/index.html

// Installation:
// cordova plugin add cordova-plugin-vibration

$(document).on('vclick', '#btn-cordova-vibration', cordovaVibration);

function Vibration() {
    navigator.vibrate(1000, 1000, 1000, 3000, 3000, 3000, 1000, 1000, 1000);
}

// CAMERA
// https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-camera/index.html

// Installation:
// cordova plugin add cordova-plugin-camera

$(document).on('vclick', '#btn-take-picture', takePicture);

function takePicture() {
    var options = {
        destinationType: Camera.DestinationType.DATA_URL,
        saveToPhotoAlbum: true
    }

    navigator.camera.getPicture(success, error, options);

    function success(imageData) {
        alert(imageData);

        $('#img-01').attr('src', `data:image/jpeg;base64,${imageData}`);
    }

    function error(error) {
        alert(`Failed to take picture. Error: ${error}.`);
    }
}

// BARCODE SCANNER
// https://www.npmjs.com/package/cordova-plugin-barcodescanner

// Installation:
// cordova plugin add cordova-plugin-barcodescanner

$(document).on('vclick', '#btn-take-qrcode', takeQRCode);

function takeQRCode() {
    cordova.plugins.barcodeScanner.scan(success, error);

    function success(result) {
        alert(`Result: ${result.text}.\nType: ${result.format}.`);
    }

    function error(error) {
        alert(`Failed: ${error}.`);
    }
}