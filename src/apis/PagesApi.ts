import PageIntroInfo from 'src/Entities/PageIntroInfo';
import BaseApi from './BaseApi';

export default class PagesApi extends BaseApi{

   public async GetIntroInfoList()
   {
       return new Promise<PageIntroInfo[]>((resolver:any)=>{
        const reactPage = new PageIntroInfo();
        reactPage.Title="React";
        reactPage.IntroInfo="about creating a React project.";
        reactPage.IntroImg="React.png";
        reactPage.IsNew=true;

        const p2 = new PageIntroInfo();
        p2.Title="Angular";
        p2.IntroInfo="about creating a Angular project.";
        p2.IntroImg="Angular.png";

        const p3 = new PageIntroInfo();
        p3.Title="typescript";
        p3.IntroInfo="about creating a typescript project.";
        p3.IntroImg="ts.png";

        const p4 = new PageIntroInfo();
        p4.Title="web Api";
        p4.IntroInfo="about creating a web api project.";
        p4.IntroImg="";

        const jsPage = new PageIntroInfo();
        jsPage.Title="javascript";
        jsPage.IntroInfo="about creating a javascript project.";
        jsPage.IntroImg="js.png";

        const p6 = new PageIntroInfo();
        p6.Title="jquery";
        p6.IntroInfo="about creating a jquery project.\n\t this is atemplatefor new project.";
        p6.IntroImg="";

        const p7 = new PageIntroInfo();
        p7.Title="Vue";
        p7.IntroInfo="about creating a Vue project.\n\t this is sample new project.";
        p7.IntroImg="Vue.png";
        p7.IsNew=true;


        const nodePage = new PageIntroInfo();
        nodePage.Title="Node.js";
        nodePage.IntroInfo="about how to use and install Node.";
        nodePage.IntroImg="node.png";
        resolver( [jsPage,nodePage,reactPage,p6,p7,p2,p3,p4]);
       });
   }
}