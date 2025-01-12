import { api } from "../api";
import { handleNotifications } from "../handleNotifications";
import { reloadLocation } from "../realoadLocation";


const handlePostData = async (
    event: any,
    object: object, 
    endpoint: string, 
    callback: CallableFunction = reloadLocation, 
    headers: object = {}
) => {
    event.preventDefault();

    try {
        const url: string = `${api}${endpoint}`;

        const options: object = {
            method: 'POST', 
            mode:'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...headers
            },
            body: JSON.stringify(object),
        };
      
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);

        if(data.Status === "Success") {
            handleNotifications("success", data.message);
            callback();

            return data.Status;
        } else {
            handleNotifications("error", data.Error)
        }
      
    } catch (err: any) {
        handleNotifications('error', err);
    }
};



const handlePostFile = async (
    event: any,
    object: object, 
    endpoint: string, 
    callback: CallableFunction = reloadLocation
) => {
    event.preventDefault();

    try {
        const url: string = `${api}${endpoint}`;

        const options: object = {
            method: 'POST', 
            mode:'cors',

            body: object
        };
      
        const response = await fetch(url, options);
        const data = await response.json();

        if(data.Status === "Success") {
            handleNotifications("success", data.message);
            
            callback(data);
        } else {
            handleNotifications("error", data.Error)
        }
      
    } catch (err: any) {
        handleNotifications('error', err);
    }
};

export { handlePostData, handlePostFile };
