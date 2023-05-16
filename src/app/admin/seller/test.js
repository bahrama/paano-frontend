import base64url from "base64url";

function generateState(length) {
    var stateValue = "";
    var alphaNumericCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var alphaNumericCharactersLength = alphaNumericCharacters.length;
    for (var i = 0; i < length; i++) {
        stateValue += alphaNumericCharacters.charAt(Math.floor(Math.random() * alphaNumericCharactersLength));
    }

    return stateValue;
}

function generateCodeVerifier() {
    var returnValue = "";
    var randomByteArray = new Uint8Array(32);
    window.crypto.getRandomValues(randomByteArray);

    returnValue = base64url(randomByteArray);

    return returnValue;
}

async function generateCodeChallenge() {
    var codeChallengeValue = "";

    var codeVerifier = generateCodeVerifier();

    var textEncoder = new TextEncoder('US-ASCII');
    var encodedValue = textEncoder.encode(codeVerifier);
    var digest = await window.crypto.subtle.digest("SHA-256", encodedValue);

    codeChallengeValue = base64url(Array.from(new Uint8Array(digest)));

    return  codeChallengeValue;
}
