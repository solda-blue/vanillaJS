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
}