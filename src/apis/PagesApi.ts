import BaseApi from './BaseApi';

export default class PagesApi extends BaseApi{

   public async GetIntroInfoList()
   {
       const response = await this.get("/data.json");

           return response.data;

   }
}