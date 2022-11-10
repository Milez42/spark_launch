const $key = "b66ff9114613dbfc6174dc05badbe948";

// genre

const request = {
    
    // requestPopular : "http://localhost:8000/data1",
    requestPopular : "https://kaedmacabanti.github.io/my_api_data1/data1.json",
    // requestNew : "http://localhost:8000/data2",
    requestNew : "https://kaedmacabanti.github.io/my_api_data2/data2.json",

    requestNowPlaying : "https://api.themoviedb.org/3/movie/now_playing?api_key="+$key+"&language=en-US&page=1",
}


export default request

// https://api.themoviedb.org/3/movie/now_playing?api_key=b66ff9114613dbfc6174dc05badbe948&language=en-US&page=1
