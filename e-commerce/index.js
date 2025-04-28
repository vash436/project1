const products = [{
    id:1,
    name: "Samsumg s23",
    description: "This is a samsamg s23 , realiable and good",
    prize: "40",
    img:"./img1.jpg",
    isActive: true

},
{
    id:2,
    name: "Iphone 14",
    description: "ultra pro",
    prize: "40",
    img:"./img1.jpg",
    isActive: true
},
]

const productsList = document.getElementById("card")

const renderProducts = () => {
    const product = productsList.content.cloneNode(true)

}