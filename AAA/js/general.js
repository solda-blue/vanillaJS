function handleToken() {
    let token = sessionStorage.getItem("TOKEN");
    return new Promise ((resolve, reject) => {
        fetch(`http://127.0.0.1:8088/member/selectone.json`, {
            method : "GET",
            headers : {
                "token" : token
            }
        })
        .then((response) => response.json())
        .then((data) => {
            resolve(data);
        })
    })
};

// import kakao from "https://developers.kakao.com/sdk/js/kakao.js";
// function handleKakaoToken() {
//     window.Kakao.API.request({
//         url : '/v2/user/me',
//         success : res => {
//             const kakao_account = res.kakao_account;
//             // console.log('kakao_account => ', kakao_account);
//         }
//     });
// };