function mudaFoto(foto,nome,descr,precoPS) {
	document.getElementById("tipo_pizza").src = foto;
	document.getElementById('saborPizzaSuco').innerHTML = nome
	document.getElementById('DescricaoPizzaSuco').innerHTML = descr
	document.getElementById('PrecoPizzaSuco').innerHTML = precoPS
}
