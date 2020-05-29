import serverData from "../component/serverData/serverData";

export function fetchDataSuccsess(serverArr) {
    return {
        type: "SERVER_FETCH_DATA_SUCCESS",
        serverArr
    }
}

export function fetchData(serverUrl) {
    return(dispath)=>{
        fetch(url)
            .then(responce => {
                if(!responce.ok) {
                    throw new Error(responce.statusText)
                }
                return responce;
            })
            .then(response=> response.json())
            .then(serverArr => dispath(fetchDataSuccsess(serverArr)))
    }

}