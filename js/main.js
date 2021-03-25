


let result = document.querySelector('.moePic')
let random = Math.ceil(Math.random()*10)


async function getRap(){
    const moepic = random
    console.log(moepic)
    // const moePic = document.querySelector('input').value
    try {
        const res = await fetch(`https://moe-api.herokuapp.com/api/moe${moepic}.jpg`)
        const data = await res.blob()
        const blobURl = URL.createObjectURL(data)
        console.log(data)
        result.src = blobURl
        
    } catch (error) {
        console.log(error)
        
    }

}
getRap()