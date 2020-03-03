const readDir = new Promise((resolve, reject) => {
    fs.readdir('/', (error, result) => {
        if (error) reject(error);
        resolve(result);
    });
});readDir
    .then(result => console.log(result))
    .catch(error => console.log(error))