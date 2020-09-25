const remoteURL = "http://localhost:8000"


// General API manager, first parameter always the list name in lower case

export default {

    // GET
    get(list, id) {
        return fetch(`${remoteURL}/${list}/${id}`).then(result => result.json())
    },

    // GET ALL
    getAll(list) {
        return fetch(`${remoteURL}/${list}`).then(result => result.json())
    },

    // DELETE
    async delete(list, id) {
        let i = await fetch(`${remoteURL}/${list}/${id}`, {
            method: "DELETE",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("accountaboddies_token")}`
            }
        })
    },

    // POST
    async post(list, newData) {
        let i = await fetch(`${remoteURL}/${list}`, {
            method: "POST",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("accountaboddies_token")}`
            },
            body: JSON.stringify(newData)
        })
        i = i.json()
        return i
    },

    // PUT curent data
    async put(list, id, newObj) {
        let i = await fetch(`${remoteURL}/${list}/${id}`, {
            method: "PUT",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("accountaboddies_token")}`
            },
            body: JSON.stringify(newObj)
        })
        // i = i.json();
        // return i
    },

    // RANDOM ID provider
    getRandomId(list) {
        return fetch(`${remoteURL}/${list}`)
            .then(result => result.json())
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.length);
                return data[randomIndex].id;
            });
    },

    // Get a obj in the list with specific value
    async getWhere(list, key, value) {
        let data = await fetch(`${remoteURL}/${list}?${key}=${value}`)
        data = data.json()
        return data
    },

    // Get a obj in list with two specificities
    async getCustom(list, custom_string) {
        let data = await fetch(`${remoteURL}/${list}?${custom_string}`, {
            method: "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("accountaboddies_token")}`
            },
        })
        data = data.json()
        return data
    },

    async getUserId(request) {
        console.log("request")
    }
}