import axios from 'axios'

export default class BaseApi {

    private axiosObj = axios.create({
        baseURL: "/ReactDemo"
    });

    public get(url: string,config:{}={}) {
        return this.axiosObj.get(url,config)
            .then((response: any) => {
                return response;
            })
            .catch(error => {
                // tslint:disable-next-line: no-console
                console.log(error);
            });
    }
}