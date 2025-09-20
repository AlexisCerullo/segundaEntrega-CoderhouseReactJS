const productos = [
    {
        id: '01',
        name: 'producto1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatibus alias maiores inventore natus debitis.',
        stock: 10,
        price: 250000,
        img: 'https://picsum.photos/200',
        category: 'PCs Armadas'
    },
    {
        id: '02',
        name: 'producto2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatibus alias maiores inventore natus debitis.',
        stock: 15,
        price: 150000,
        img: 'https://picsum.photos/200',
        category: 'Microprocesadores'
    },
        {
        id: '03',
        name: 'producto3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatibus alias maiores inventore natus debitis.',
        stock: 20,
        price: 900000,
        img: 'https://picsum.photos/200',
        category: 'Placas de Video'
    },
        {
        id: '04',
        name: 'producto4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatibus alias maiores inventore natus debitis.',
        stock: 5,
        price: 90000,
        img: 'https://picsum.photos/200',
        category: 'Gabinetes'
    },
        {
        id: '05',
        name: 'producto5',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatibus alias maiores inventore natus debitis.',
        stock: 2,
        price: 450000,
        img: 'https://picsum.photos/200',
        category: 'Notebooks'
    },
        {
        id: '06',
        name: 'producto6',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatibus alias maiores inventore natus debitis.',
        stock: 30,
        price: 10000,
        img: 'https://picsum.photos/200',
        category: 'Perifericos'
    }
]


let error = false;
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(error) {
                reject('Hubo un error, intente mas tarde')
            } else {
                resolve(productos)
            }
        }, 2000)
    })
}

export const getOneProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let producto = productos.find((producto) => producto.id === id);
            resolve(producto)
        }, 2000)
    })
}