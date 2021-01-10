export default {
    namespaced: true,
    state: {
        items: [
            {
                title: 'Сливочное с апельсиновым джемом и цитрусовой стружкой',
                price: 310,
                imageUrl: require('@/assets/img/ice-cream-1.jpg')
            },
            {
                title: 'Сливочно-кофейное с кусочками шоколада',
                price: 380,
                imageUrl: require('@/assets/img/ice-cream-2.jpg')
            },
            {
                title: 'Сливочно-клубничное с присыпкой из белого шоколада',
                price: 355,
                imageUrl: require('@/assets/img/ice-cream-3.jpg')
            },
            {
                title: 'Сливочное крем-брюле с карамельной подливкой',
                price: 415,
                imageUrl: require('@/assets/img/ice-cream-4.jpg')
            },
            {
                title: 'Сливочное с брусничным джемом',
                price: 325,
                imageUrl: require('@/assets/img/ice-cream-5.jpg')
            },
            {
                title: 'Сливочно-черничное с цельными ягодами черники',
                price: 410,
                imageUrl: require('@/assets/img/ice-cream-6.jpg')
            },
            {
                title: 'Сливочно-лимонное с карамельной присыпкой',
                price: 375,
                imageUrl: require('@/assets/img/ice-cream-7.jpg')
            },
            {
                title: 'Сливочное с шоколадной стружкой',
                price: 320,
                imageUrl: require('@/assets/img/ice-cream-8.jpg')
            },
            {
                title: 'Сливочно-ванильное с кусочками шоколада',
                price: 440,
                imageUrl: require('@/assets/img/ice-cream-9.jpg')
            },
            {
                title: 'Сливочноe с ментоловым сиропом',
                price: 435,
                imageUrl: require('@/assets/img/ice-cream-10.jpg')
            },
            {
                title: 'Сливочное с кусочками черного шоколада',
                price: 355,
                imageUrl: require('@/assets/img/ice-cream-11.jpg')
            },
            {
                title: 'Сливочное с мятным сиропом',
                price: 420,
                imageUrl: require('@/assets/img/ice-cream-12.jpg')
            }
        ]
    },
    getters: {
        items: ({ items }) => items
    }
}
