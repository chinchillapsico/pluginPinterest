$.fn.pinterestPlugin = function(pinterestjson){
	
	pinterestjson.forEach(function(imagejson){
		temple = '';
        let id = imagejson.id;
        let title = imagejson.title;
        let description = imagejson.description;
        let img = imagejson.image_url;
        //temple que irá en el contenedor con id #columns
      
        temple += '<figure>' + '<img id='+ id +' src="img/'+ img +'"/>' + 
                    '<figcaption>'+ description + '</figcaption></figure>' + '</figure>' ;
    });

    $("#columns").html(temple);
}