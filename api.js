/*                    API CONTENT                  */
const ApiKey = 'c971480b4edf2658535b9f7e359cb43e';
const BaseUrl = 'https://api.themoviedb.org/3/movie/';
const ImgUrl = 'https://image.tmdb.org/t/p/w500';
const Language = 'language=pt-BR';
/* ----------------------------------------------- */

/*                  Doom  items                     */
const buttom = document.getElementById('shuffle')
const content = document.getElementById('main')
const name = document.getElementById('nome').innerHTML
const desc = document.getElementById('desc').innerHTML
const synopsis = document.getElementById('sinopse').innerHTML
const thumb = document.getElementById('thumb').innerHTML
/* ------------------------------------------------- */


function shuffle() {
    document.getElementById('main').removeAttribute('style')
    let random = Math.floor(Math.random() * 9999)
    let urlDesc = `${BaseUrl}${random}?api_key=${ApiKey}&${Language}`
    function getData() {
        axios.get(urlDesc)
            .then(response => {
                let Data = response.data
                let path = JSON.stringify(Data.poster_path)
                path = path.replace('"', "")
                path = path.replace('"', "")
                document.getElementById('nome').innerHTML = JSON.stringify(Data.title)
                document.getElementById('desc').innerHTML = JSON.stringify(Data.overview)
                let urlImg = `${ImgUrl}${path}` 
                document.getElementById('thumb').setAttribute('src', urlImg)
                console.log(Data)
                console.log(path)
                console.log(ImgUrl)
            })
            .catch(error => {
                document.getElementById('nome').innerHTML = 'Ops, filme não encontrado. Tente novamente!'
                document.getElementById('desc').innerHTML = ''
                document.getElementById('thumb').setAttribute('src', './assets/notfound.jpg')
            })
    }
    getData()
}

buttom.addEventListener('click', shuffle)   