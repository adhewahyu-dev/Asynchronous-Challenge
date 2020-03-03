# Asynchronous-Challenge
# Array
Array merupakan suatu tipe data yang berisi dari kumpulan nilai atau tipe data lain, misalnya seperti integer, string, number, boolean, floating dan lain-lain. Array sangat berguna untuk menampung sebuah data yang lebih dari satu.

### Rest Parameter
Sebuah parameter yang berupa array.
```sh
const total = (...arr) => {
    console.log(arr.reduce((x, y) => x * y));
}

total(1)                    //1
total(1, 2, 3)              //6
total(1, 2, 3, 4, 5, 6)     //720
```

# Array Operation (Operasi yang terdapat pada Array)
#### Array.sort()  => Ordering pada Javascript
```sh
let a = [1, 2, 3, 4]
a.sort()
console.log(a)              // [1, 2, 3, 4, 5]
a.sort((x, y) => y - x)
console.log(a)              // [5, 4, 3, 2, 1]
```

#### push(), pop(), shift(), unshif(), indexOf(), splice()
```sh
let a = [1,2,3]
a.push(4)                       //[1,2,3,4]
a.pop()                         //[1,2,3]
a.unshift(0)                    //[0,1,2,3]
a.shift()                       //[1,2,3]
console.log(indexOf(1) > 0 ? "Ada" : "Tidak ada")   //Ada
a.splice(a.indexOf(0), 1)       //[1,3]
```

#### Array.find() dan Array.filter() => menyaring sebuah array
```sh
let a = [1,2,3,4,5]
console.log(a.filter(x => x % 2 ==1))       //[1,3,5]
console.log(a.find(x => x > 10)             //undefined
console.log(a.find(x => x % 2 == 0))        //2
```
#### Array.forEach(), reduce(), map()
```sh
let a = [1,2,3]
a.forEach(x => console.log(x))              //1 \n 2 \n 3
a.map(x => x % 2 == 0? "Genap" : "Ganjil")  //["Ganjil","Genap","Ganjil"]
a.reduce((x, y) => x + y)                   //6
```

#### Spread Operator => untuk menyebarkan key dan object pada javaScript
```sh
const a = {
    id: 1,
    name: "Zeus"
}                               //{id: 1, name: 'Zeus'}
const b = {
    ...a,
    live: "Yunani"
}                               //{id: 1, name: 'Zeus', live: 'Yunani'}
const c = {
    id: 2,
    age: 104
}                               //{id: 2, age: 104}
console.log({...b, ...c})       //{id: 2, name: 'Zeus', live: 'Yunani', age: 104}
```

#### Spread Operator in Parameter
Spread operator bisa dilakukan ke dalam sebuah function yang memiliki parameter
```sh
const mhs = [1,2,3]
const swa = [4,5]
const gabung = [...mhs, ...swa]   // [1,2,3,4,5]
```

Spread operator bisa dilakukan ke dalam sebuah function yang memiliki parameter.
```sh
const array = [1,2,3,4]
const fun = (a,b,c) => console.log(a * b * c)

fun(...array)                    // Element 4 ignored 
fun(...[1,2])                    // Output NaN
```

# Object Operation (Operasi yang ada pada Object javaScript)
###Object.assign() => Menyalin semua properti object ke dalam object target, jika ada key yang sama maka akan mengubah value dari key tersebut.
```sh
const a = {
    id: 1,
    nickname: "Sukirman"
}
const b = {
    id: 2,
    name: "Superman"
}
console.log(Object.assign(a, b))        // {id: 1, name: 'Superman'}
```

###Object.entries() => Mengembalikkan sebuah array yang setiap element berupa array dengan ukuran 2, dimana index pertama sebagai array dan index kedua berupa value
```sh
const a = {
    id: 1,
    nickname: "Sukirman"
}
for (const [k, v] of Object.entries(a)){
    console.log(k,v)
}
console.log(Object.entries(a))        // [[id: 1],['nickname', 'Sukirman']}
```

###Object.keys() and Object.values() => Mengembalikkan sebuah Array yang beranggotakan key / value dari sebuah object.
```sh
const a = {
    name: "Yogyakarta",
    alias: "DIY",
    number: "AB"
}
console.log(Object.keys(a))         //['name', 'alias', 'number']
console.log(Objecet.values(a))      //['Yogyakarta','DIY','AB']
```

###Object.freeze() => Membekukan nilai yang ada pada object, supaya tidak dapat diubah.
```sh
const a = {
    name: "Yogyakarta",
    alias: "DIY",
    number: "AB"
}
Object.freeze(a)
console.log(a)          //[name: 'Yogyakarta', alias: 'DIY', number: 'AB']
a.number = 'AD'
console.log(a)          //[name: 'Yogyakarta', alias: 'DIY', number: 'AB']
```
# Asynchronus

Asynchronus adalah proses eksekusi kode pada program yang berjalan tidak berurutan tanpa harus menunggu perintah kode sebelumnya selesai.

```sh
const a = Math.floor(Math.random() * 1000) + 2
console.log("Hello")                                    //2
setTimeout(() => console.log(`World ${a}`), a)          //1
console.log("Reborn")                                   //3
```

# Callback
Sebuah function yang meminta sebuah parameter berupa function kemudian akan menjalankan function tersebut.

# Promises
Sebuah object yang mempresentasikan sebuah penyelesaian perintah (atau bahkan sebuah error pada proses asynchronous) dan me-return value-nya. 
