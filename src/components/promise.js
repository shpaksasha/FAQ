console.log('Data');

const prom = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('preparing data...')
        const backendData = {
            server: 'asw',
            port: 2000,
            status: 'work'
        }
        resolve(backendData)
    }, 2000)
})

prom.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true;
            resolve(data)
        }, 2000)
    })

}).then((clientData) => {
    console.log('Data data', clientData);
})
    .catch(err => console.error('Error...', err))