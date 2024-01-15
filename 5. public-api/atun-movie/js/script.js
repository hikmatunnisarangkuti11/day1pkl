function searchMovie() {
    $('#movie-list').html('');
    //setiap di klik kosongin request lagi kosongin 
    //agar data tidak tertimpa

    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': 'dca61bcc',
            's': $('#search-input').val()
            //s mencarikan elem search input dari index 
        },
        success: function (result) {
            if (result.Response == "True") {
                let movies = result.Search;
                //mengambil value nya saja langung object

                $.each(movies, function (i, data) {
                    $('#movie-list').append(`
                        <div class="col-md-4">
                            <div class="card mb-3">
                                <img src="${data.Poster}" class="card-img-top" alt="...">
                                <div class="card-body">
                                <h5 class="card-title">${data.Title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${data.Year}</h6>
                                <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="${data.imdbID}">See Detail</a>
                                </div>
                            </div>
                        </div>
                    `);
                    //img nya langung dari'+ poster di json nya'+ liat daripostmannya Poster
                    //imdbid dari postmant
                });

                $('#search-input').val('');
                //ketka beres seaerch bekaasnya hilang

            } else {
                $('#movie-list').html(`
                    <div class="col">
                        <h1 class="text-center">` + result.Error + `</h1>
                    </div>
                `)
                //kalo tidak ada di movie-list  not found
            }
        }
    });
}

$('#search-button').on('click', function () {
    searchMovie();
});

$('#search-input').on('keyup', function (e) {
    if (e.which === 13) {
        //kode enter itu 13 
        //googling
        searchMovie();
    }
});
 //membuat function adar ketika di enter tanpa klik button serch masih jalan


$('#movie-list').on('click', '.see-detail', function () {
    //event bainding generet ga peduli awal atau akhir

    $.ajax({
        url: 'http://omdbapi.com',
        dataType: 'json',
        type: 'get',
        data: {
            'apikey': 'dca61bcc',
            'i': $(this).data('id')
            //this itu tombol yang sedang saya klik
        },
        success: function (movie) {
            if (movie.Response === "True") {

                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="`+ movie.Poster + `" class="img-fluid">
                            </div>
                    
                            <div class="col-md-8">
                                <ul class="list-group">
                                    <li class="list-group-item"><h3>`+ movie.Title + `</h3></li>
                                    <li class="list-group-item">Released : `+ movie.Released + `</li>
                                    <li class="list-group-item">Genre : `+ movie.Genre + `</li>                 
                                    <li class="list-group-item">Director : `+ movie.Director + `</li>                 
                                    <li class="list-group-item">Director : `+ movie.Actors + `</li>                 
                                </ul>
                            </div>
                        </div>
                    </div>
                `);

            }
        }
    });

});