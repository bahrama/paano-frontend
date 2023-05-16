"use client"
const redirectoauth = () => {
    const inp = () =>{
        var urlParams = new URLSearchParams(window.location.search);
        var authCode = urlParams.get('code'),
            state = urlParams.get('state'),
            error = urlParams.get('error')

        if (error) {
            alert("errror:" +error);
        } else {
            alert("state:" + state);
            alert("code:" + authCode);
            localStorage.setItem("authCode", authCode);
        }
        window.close();
    }



    return(
        <>
            {inp()}
        </>
    )
}
export default redirectoauth();