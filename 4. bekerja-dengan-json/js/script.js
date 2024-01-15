function tampilkanSemuaMenu() {
    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        //menghiangkan key menu
        $.each(menu, function (i, data) {
            //method melakukan looping (perulangan )object
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
       //jquary carikan saya elemn daftar menu
       //append tambahkan di akhir elemen html
       //'+nyisipin data  cara javascript+'
        });
    });
}

tampilkanSemuaMenu();


$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    //hilangkan semua class aktiv saat di klik
    $(this).addClass('active');
    //this li yang kita klik tambahkan class baru aktive (putih)

    let kategori = $(this).html();
    //this li yang lagi kita klik di ambil html nya 
    $('h1').html(kategori);
    //ganti html nya dengan kategori

    if (kategori == 'All Menu') {
        tampilkanSemuaMenu();
        return;
        //untuk keluar dari function maknya di return
    }


    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                //tplowercase memaksa tulisan menjadi kecil semua 
                content += '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' + data.gambar + '" class="card-img-top"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text">' + data.deskripsi + '</p><h5 class="card-title">Rp. ' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            }
        });

        $('#daftar-menu').html(content);
        //.html mengganti semua 
    });


});