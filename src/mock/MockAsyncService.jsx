const productos = [
    {
        id: '01',
        name: 'Pc Intel Core i5 10400-H510-8Gb-Ssd 960GB-KIT',
        description: 'Potencia y velocidad para tu día a día. Esta PC equipada con procesador Intel Core i5 de 10ª generación, 8GB de RAM y un rápido SSD de 960GB te ofrece el equilibrio ideal entre rendimiento y almacenamiento. Con motherboard H510 incluida, es una solución lista para usar en oficina, estudio o entretenimiento',
        stock: 3,
        price: 530000,
        img: 'https://i.postimg.cc/CL6mDffm/image.png',
        category: 'pcs armadas'
    },
    {
        id: '02',
        name: 'Procesador Amd Ryzen 3 3200G 3.8 Ghz + Vega8 - AM4',
        description: 'Descubrí el equilibrio perfecto entre potencia y gráficos integrados. El procesador AMD Ryzen 3 3200G alcanza hasta 3.8 GHz e incluye gráficos Radeon Vega 8, ideales para multitarea, trabajo y entretenimiento sin necesidad de placa de video dedicada. Compatible con socket AM4, es una gran opción para armar tu PC con excelente rendimiento a un precio accesible.',
        stock: 10,
        price: 96000,
        img: 'https://i.postimg.cc/PfS4s8KT/image.png',
        category: 'microprocesadores'
    },
    {
        id: '03',
        name: 'Placa De Video GeForce RTX 3050 6Gb Msi Gaming X',
        description: 'Llevá tu experiencia gaming al siguiente nivel con la GeForce RTX 3050 6GB MSI Gaming X. Disfrutá de gráficos de última generación con tecnología Ray Tracing y DLSS, logrando mayor realismo y rendimiento en tus juegos favoritos. Su diseño Gaming X ofrece refrigeración eficiente y un funcionamiento silencioso, ideal para sesiones largas de juego.',
        stock: 15,
        price: 336000,
        img: 'https://i.postimg.cc/TPQyLnKP/image.png',
        category: 'placas de video'
    },
    {
        id: '04',
        name: 'Gabinete Mid Tower Formula V Crystal Z9M Floe Negro 5 Fan',
        description: 'Dale estilo y flujo de aire a tu setup con el gabinete Mid Tower Formula V Crystal Z9M Floe en color negro. Incluye 5 ventiladores preinstalados y paneles de vidrio templado que realzan la estética de tu PC. Espacioso y funcional, está diseñado para mantener tus componentes bien refrigerados y lucir un armado gamer moderno..',
        stock: 5,
        price: 102000,
        img: 'https://i.postimg.cc/65sdNLns/image.png',
        category: 'gabinetes'
    },
    {
        id: '05',
        name: 'Notebook Daewoo Core i3 1215U1 8Gb Ssd 256Gb 15.6" Win 11',
        description: 'La Notebook Daewoo con procesador Intel Core i3 1215U te ofrece un rendimiento eficiente para trabajo, estudio y entretenimiento. Equipada con 8GB de RAM y un veloz SSD de 256GB, garantiza rapidez en cada tarea. Su pantalla Full HD de 15.6" brinda una experiencia visual cómoda y nítida, mientras que Windows 11 preinstalado te asegura productividad desde el primer encendido.',
        stock: 2,
        price: 595000,
        img: 'https://i.postimg.cc/KvygWchx/image.png',
        category: 'notebooks'
    },
    {
        id: '06',
        name: 'Auricular Gamer Razer Kraken Kitty V2 USB Rgb',
        description: 'Dale personalidad a tu setup con los auriculares gamer Razer Kraken Kitty V2. Con iluminación RGB personalizable y el icónico diseño con orejas de gato, combinan estilo y rendimiento. Su conexión USB asegura compatibilidad con PC y una experiencia de audio inmersiva con micrófono claro para tus streams y partidas online. Cómodos y llamativos, son el accesorio ideal para destacar en cada juego.',
        stock: 30,
        price: 200000,
        img: 'https://i.postimg.cc/YScc6Pmn/image.png',
        category: 'perifericos'
    }, {
        id: '07',
        name: 'Procesador Amd Ryzen 5 5600XT 4.7 Ghz - AM4 Sin Gpu',
        description: 'Potenciá tu PC con el procesador AMD Ryzen 5 5600X, que alcanza hasta 4.7 GHz para un rendimiento sobresaliente en gaming y multitarea. Con 6 núcleos y 12 hilos, ofrece la potencia necesaria para aplicaciones exigentes y productividad. Compatible con socket AM4 y sin gráficos integrados, es la opción ideal para equipos que cuentan con placa de video dedicada.',
        stock: 5,
        price: 250000,
        img: 'https://i.postimg.cc/FKqxktdz/image.png',
        category: 'microprocesadores'
    },
    {
        id: '08',
        name: 'Pc Amd Ryzen 7 5700G - A520 - 32GB - SSD 1TB',
        description: 'Rendimiento de alto nivel para todo lo que necesites. Esta PC equipada con procesador AMD Ryzen 7 5700G, 32GB de RAM y un rápido SSD de 1TB combina potencia y capacidad para gaming, edición de video, diseño y multitarea intensiva. Incluye motherboard A520, garantizando estabilidad y compatibilidad en un equipo listo para acompañarte en cada desafío.',
        stock: 5,
        price: 680000,
        img: 'https://i.postimg.cc/GmgF60jK/image.png',
        category: 'pcs armadas'
    },
    {
        id: '09',
        name: 'Gabinete Mid Tower Sentey S20 Rgb',
        description: 'Destacá tu PC con el Gabinete Mid Tower Sentey S20 RGB, diseñado para combinar estilo y funcionalidad. Su iluminación RGB personalizable y panel frontal moderno le dan un look gamer único, mientras que su amplio interior permite instalar componentes con facilidad y mantener un flujo de aire óptimo. Ideal para armar tu equipo con estética y rendimiento.',
        stock: 20,
        price: 41000,
        img: 'https://i.postimg.cc/RVXKnr2m/image.png',
        category: 'gabinetes'
    },
    {
        id: '10',
        name: 'Placa De Video GeForce RTX 5060 8Gb Zotac Amp',
        description: '"Potencia y estilo para tu PC gamer. La GeForce RTX 5060 8GB Zotac Amp, impulsada por la arquitectura Blackwell de NVIDIA, ofrece un rendimiento excepcional en juegos Full HD con soporte para Ray Tracing y DLSS 4. Su diseño compacto y eficiente, con sistema de refrigeración IceStorm 2.0 y dos ventiladores de 90 mm, asegura temperaturas óptimas y funcionamiento silencioso. Con 8GB de memoria GDDR7 y soporte para PCIe 5.0, es la elección ideal para quienes buscan calidad gráfica y rendimiento en un solo componente.',
        stock: 5,
        price: 635000,
        img: 'https://i.postimg.cc/Dyj4wrby/image.png',
        category: 'placas de video'
    },
    {
        id: '11',
        name: 'Teclado Gamer 9Z Ghoul Inalámbrico Blanco',
        description: 'Comodidad y estilo sin cables con el Teclado Gamer 9Z Ghoul Inalámbrico en color blanco. Diseñado para jugadores, ofrece respuesta rápida y precisa en cada pulsación, con iluminación personalizable que resalta tu setup. Su diseño ergonómico y funcionalidad inalámbrica lo hacen ideal para largas sesiones de juego o trabajo, combinando estética y rendimiento en un solo dispositivo.',
        stock: 10,
        price: 192000,
        img: 'https://i.postimg.cc/Kj9j4bjs/image.png',
        category: 'perifericos'
    },
    {
        id: '12',
        name: 'Notebook Msi Modern Ryzen 5 7430U 16Gb Ssd 512Gb 14" Win11',
        description: 'Potencia y portabilidad en un solo equipo. La Notebook MSI Modern con procesador AMD Ryzen 5 7430U, 16GB de RAM y SSD de 512GB ofrece rendimiento ágil para multitarea, trabajo, estudio y entretenimiento. Su pantalla de 14" brinda imágenes nítidas y colores vivos, mientras que Windows 11 preinstalado garantiza productividad inmediata. Ideal para quienes buscan eficiencia y estilo en un formato compacto..',
        stock: 3,
        price: 1135000,
        img: 'https://i.postimg.cc/mrGLLkVg/image.png',
        category: 'notebooks'
    },
    {
        id: '13',
        name: 'NOTEBOOK Asus Vivobook Core i3 N305 8Gb Ssd 128Gb 15.6" Us Win11',
        description: 'Rendimiento confiable para tus tareas diarias con la Notebook Asus Vivobook Core i3 N305. Equipada con 8GB de RAM y un rápido SSD de 128GB, asegura arranques y carga de aplicaciones veloces. Su pantalla de 15.6" brinda visualización cómoda y clara, mientras que Windows 11 preinstalado te permite trabajar, estudiar y disfrutar de contenido multimedia desde el primer encendido.',
        stock: 10,
        price: 650000,
        img: 'https://i.postimg.cc/B6nGbKF4/image.png',
        category: 'notebooks'
    },
    {
        id: '14',
        name: 'Mouse Gamer Razer Cobra Pro Lightweight Rgb Inalámbrico',
        description: 'Máxima precisión y libertad de movimiento con el Mouse Gamer Razer Cobra Pro Lightweight RGB inalámbrico. Su diseño ultraligero y ergonómico ofrece comodidad durante largas sesiones de juego, mientras que la iluminación RGB personalizable le da estilo a tu setup. Ideal para gamers que buscan velocidad, exactitud y rendimiento sin cables.',
        stock: 15,
        price: 165000,
        img: 'https://i.postimg.cc/g2bFR5hM/image.png',
        category: 'perifericos'
    },
    {
        id: '15',
        name: 'Placa De Video Radeon RX 9060 XT 8Gb Asus Prime Oc',
        description: 'Potencia y diseño para tu PC gamer. La Radeon RX 9060 XT 8GB Asus Prime OC, basada en la arquitectura RDNA 4, ofrece un rendimiento excepcional en juegos Full HD y 1440p. Su diseño de 2.5 ranuras con tres ventiladores Axial-tech garantiza una refrigeración eficiente y silenciosa. Equipada con 8GB de memoria GDDR6 y soporte para PCIe 5.0, es la elección ideal para quienes buscan calidad gráfica y rendimiento en un solo componente.',
        stock: 5,
        price: 740000,
        img: 'https://i.postimg.cc/fL1ZPb3s/image.png',
        category: 'placas de video'
    },
    {
        id: '16',
        name: 'Gabinete Mid Tower Formula V Crystal Z1+ Blanco 3 Fan',
        description: 'Elegancia y rendimiento para tu PC con el Gabinete Mid Tower Formula V Crystal Z1+ en color blanco. Incluye 3 ventiladores preinstalados y panel frontal de vidrio templado para mostrar tus componentes con estilo. Su diseño espacioso permite un flujo de aire eficiente y facilita la instalación de tus piezas, combinando estética moderna con funcionalidad práctica.',
        stock: 20,
        price: 65000,
        img: 'https://i.postimg.cc/sgHLmNGd/image.png',
        category: 'gabinetes'
    },
    {
        id: '17',
        name: 'Procesador Intel Core i5 10400 4.3 Ghz Comet Lake 1200',
        description: 'Potenciá tu PC con el Intel Core i5 10400, parte de la generación Comet Lake. Con hasta 4.3 GHz de velocidad y 6 núcleos/12 hilos, ofrece un rendimiento equilibrado para multitarea, productividad y gaming ligero. Compatible con socket LGA1200, es la opción ideal para armar o actualizar tu equipo con eficiencia y estabilidad.',
        stock: 8,
        price: 235000,
        img: 'https://i.postimg.cc/kXXwHymn/image.png',
        category: 'microprocesadores'
    },
    {
        id: '18',
        name: 'Pc Amd Ryzen 7 5700G-A520-16Gb-960 + Monitor + Kit',
        description: 'Rendimiento y comodidad en un solo paquete. Esta PC cuenta con procesador AMD Ryzen 7 5700G, 16GB de RAM y un SSD de 960GB, garantizando velocidad y capacidad para multitarea y gaming ligero. Incluye motherboard A520, además de monitor, silla y kit completo de periféricos, ofreciendo una solución lista para usar que combina potencia, confort y practicidad desde el primer encendido.',
        stock: 30,
        price: 1500000,
        img: 'https://i.postimg.cc/mk69JCYD/image.png',
        category: 'pcs armadas'
    }
]


let error = false;
export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('Hubo un error, intente mas tarde')
            } else {
                resolve(productos)
            }
        }, 1000)
    })
}

export const getOneProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let producto = productos.find((producto) => producto.id === id);
            resolve(producto)
        }, 1000)
    })
}