export default class BookStoreService{

    data = [{
        id: 1,
        title: 'How to code in c#',
        author: 'Somer Something',
        price: 1500,
        coverImage: 'https://bukva.info/blog/wp-content/uploads/2022/12/8-sam-sebe-pogramist.jpg'
    },
    {
        id: 2,
        title: 'Lets play csgo',
        author: 'After Worker',
        price: 450,
        coverImage: 'https://media.proglib.io/wp-uploads/-000//1/08716001.cover_max1500.jpg'
    },]

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something wrong!'))
                } else {
                    resolve(this.data)
                }
            }, 1000)
        })
    }
}