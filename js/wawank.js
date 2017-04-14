// Event Pada Saat Linknya Di Klik
$('.wawank-scrol').on('click', function(){

	//ambil isi dari href
	var tujuan = $(this).attr('href');
	//tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	//pindahkan scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1000, 'easeInOutExpo')
});