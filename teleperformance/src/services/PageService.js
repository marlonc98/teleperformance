import HostService from './HostService';

class PageService extends HostService {
    constructor() {
        super();
    }
    getCompany(nit) {
        let relativeUrl = `/Company/${nit}`;
        return this.get(relativeUrl);
    }
    getIdentificationType() {
        let relativeUrl = '/IdentificationType';
        return this.get(relativeUrl);
    }

    putCompany(values) {
        let relativeUrl = '/Company';
        return values.put ? this.put(relativeUrl) : this.post(relativeUrl);
    }
}

const instance = new PageService();
export default instance;