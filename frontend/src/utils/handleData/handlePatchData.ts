import { api } from "../api";
import { handleNotifications } from "../handleNotifications";
import { reloadLocation } from "../realoadLocation";

const handlePatchData = async (
    event: any,
    object: object, 
    endpoint: string, 
    callback: CallableFunction = reloadLocation
) => {
    event.preventDefault();

    try {
        const url = `${api}${endpoint}`;

        const options: object = {
            method: 'PATCH', 
            mode:'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(object)
        };
      
        const response = await fetch(url, options);
        const data = await response.json();

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
}

export { handlePatchData };