import serverData from "../component/serverData/serverData";
import serverUrl from '../comon/comon.js'

export function fetchDataSuccsess(serverUrl) {
    return {
        type: "SERVER_FETCH_DATA_SUCCESS",
        data
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
            .then(serverData => dispath(fetchDataSuccsess(data)))
    }

}