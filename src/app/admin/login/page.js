"use client"
import base64url from "base64url";
import {sha256} from "js-sha256";
import axios from "axios";
import React from "react";
import {Button} from "primereact/button";
import { setCookie ,getCookie} from 'cookies-next';
import {useRouter} from "next/navigation";
const Login = () =>{
    const router = useRouter();
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
        crypto.getRandomValues(randomByteArray);

        returnValue = base64url(randomByteArray);

        return  returnValue;
    }

    function base64urlencode(sourceValue) {
        var stringValue = String.fromCharCode.apply(null, sourceValue);
        var base64Encoded = btoa(stringValue);
        var base64urlEncoded = base64Encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
        return base64urlEncoded;
    }
    function generateCodeChallenge() {
        var codeChallengeValue = "";

        var codeVerifier = generateCodeVerifier();
        localStorage.setItem("codeVerifier" , codeVerifier);
        var textEncoder = new TextEncoder('US-ASCII');
        var encodedValue = textEncoder.encode(codeVerifier);
        var digest = sha256.digest(encodedValue);

        codeChallengeValue = base64urlencode(Array.from(new Uint8Array(digest)));

        return  codeChallengeValue;
    }

    function getAuthCode() {
        var state = generateState(30);
        var codeChallenge = generateCodeChallenge();
        /*var authorizationURL = "http://192.168.43.22:8080/auth/realms/paano-realm3/protocol/openid-connect/auth";*/
        var authorizationURL = "https://tehranch.com/auth/realms/paano-realm-test/protocol/openid-connect/auth";
        authorizationURL += "?client_id=paano-test";
        /*authorizationURL += "?client_id=paano-front3";*/
        authorizationURL += "&response_type=code";
        authorizationURL += "&scope=openid";
        /*authorizationURL += "&redirect_uri=http://localhost:3000/redirectoauth.html";*/
        authorizationURL += "&redirect_uri=http://localhost:3000/redirectoauth.html";
        authorizationURL += "&state=" + state;
        authorizationURL += "&code_challenge=" + codeChallenge;
        authorizationURL += "&code_challenge_method=S256";
        console.log(authorizationURL);
        open(authorizationURL, 'authorizationRequestWindow', 'width=800,height=600,left=200,top=200');
    }



    function requestTokens() {
        var data = {
            "grant_type": "authorization_code",
            "client_id": "paano-test",
            /*"client_id": "paano-front3",*/
            "code": localStorage.getItem("authCode"),
            "code_verifier": localStorage.getItem("codeVerifier"),
            /*"redirect_uri":"http://localhost:3000/redirectoauth.html"*/
            "redirect_uri":"http://localhost:3000/redirectoauth.html"
        };
        console.log(data);
        axios
            /*.post("http://192.168.43.22:8080/auth/realms/paano-realm3/protocol/openid-connect/token", data ,*/
            .post("https://tehranch.com/auth/realms/paano-realm-test/protocol/openid-connect/token", data ,
                {
                    headers : {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                    }
                })
            .then((response) =>
                {
                    console.log(response.data["access_token"]);
                    setCookie('auth-keycloak',response.data["access_token"] , {maxAge: 60 * 60 * 24 * 30 });
                    router.push('/admin/seller');
                }
            )
            .catch((error) =>{
                    console.log(error.response.data.message);
                }
            );
    }
    const backImg = '/assets/img/curved-images/curved14.jpg';
    return(
/*        <>
            <button onClick={getAuthCode}>dasdsadasda</button>
            <button onClick={requestTokens}>ffffffffffffff</button>
        </>*/
    <main className="mt-0 transition-all duration-200 ease-soft-in-out">
        <section className="min-h-screen mb-32">
            <div
                className="relative flex items-start pt-12 pb-56 m-4 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl"
                style={{backgroundImage: `url(${backImg})`}}>
            </div>
            <div className="container">
                <div className="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
                    <div
                        className="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
                        <div
                            className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                 <Button onClick={getAuthCode} type="submit" label="ورود" className="p-button-outlined p-button-success"  style={{width:'100%'}}/>
                 <Button onClick={requestTokens
                 } type="submit" label="ورود ادمین" className="p-button-outlined p-button-success"  style={{width:'100%'}}/>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}
export default Login;