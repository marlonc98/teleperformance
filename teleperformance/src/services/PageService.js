import HostService from './HostService';

class PageService extends HostService {
    constructor() {
        super();
        this.hostUrl = process.env.MIX_APP_URL + "/api";
    }
    getCompanyAuthorized(nit){
        let relativeUrl = `/companyAuthorized/${nit}`;
        this.get(relativeUrl);
    }
}

const instance = new PageService();
export default instance;