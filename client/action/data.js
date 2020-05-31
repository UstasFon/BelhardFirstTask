import serverData from "../component/serverData/serverData";

export function fetchDataSuccsess(serverObj) {
    return {
        type: "SERVER_FETCH_DATA_SUCCESS",
        serverObj,
    }
}

export function fetchData(serverUrl, pageSize, page) {
    serverUrl +=  `?type=json&pagesize=${pageSize}&page=${page}`;
    return(dispath)=>{
        fetch(url)
            .then(responce => {
                if(!responce.ok) {
                    throw new Error(responce.statusText)
                }
                return responce;
            })
            .then(response=> response.json())
            .then(serverObj => dispath(fetchDataSuccsess(serverObj)))
    }
}