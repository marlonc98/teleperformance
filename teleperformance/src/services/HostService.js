import { reject } from "lodash";

export default class HostService {
    constructor() {
        this.hostUrl = "http://localhost:25941/api";
    }

    headers() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
    };

    async responseAuthorized (response) {
        if (response.ok) {
            let text = await response.text();
            try {
                let json = JSON.parse(text);
                return Promise.resolve(json);
            } catch {
                return Promise.resolve(text);
            }
        } else {
            return Promise.reject();
        }
    }
    post(url, body) {
        return new Promise((resolve, reject) => {
            fetch(this.hostUrl + url, {
                method: 'POST',
                headers: this.headers(),
                body: JSON.stringify(body)
            }).then(this.responseAuthorized).then(response => {
                resolve(response);
            })
                .catch(err => reject(err));
        })
    }
    delete(url, body) {
        return new Promise((resolve, reject) => {
            fetch(this.hostUrl + url, {
                method: 'DELETE',
                headers: this.headers(),
                body: JSON.stringify(body)
            }).then(this.responseAuthorized).then(response => {
                resolve(response);
            })
                .catch(err => reject(err));
        })
    }
    put(url, body) {
        return new Promise((resolve, reject) => {
            fetch(this.hostUrl + url, {
                method: 'PUT',
                headers: this.headers(),
                body: JSON.stringify(body)
            }).then(this.responseAuthorized).then(response => {
                resolve(response);
            })
                .catch(err => reject(err));
        })
    }
    postFormData(url, body) {
        return new Promise((resolve, reject) => {
            var formData = new FormData();
            for (var key in body) {
                formData.append(key, body[key]);
            }
            fetch(this.hostUrl + url, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': (document.querySelector('meta[name="csrf-token"]')).content,
                },
                body: formData
            }).then(this.responseAuthorized).then(response => {
                resolve(response);
            })
                .catch(err => reject(err));
        })
    }
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(this.hostUrl + url, {
                method: 'GET',
                headers: this.headers(),
            }).then(this.responseAuthorized).then(response => {
                resolve(response);
            })
                .catch(err => {
                    reject(err);
                });
        });
    }
}