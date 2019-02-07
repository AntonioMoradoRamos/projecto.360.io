function addOnInputEventOnInput() {

    // Submeter o formulário
    jQuery("#pesqGatinhos").on('input', function (event) {

        jQuery(".images-container").html('');
        jQuery(".images-container").append('<p><img class="imgDefault" src=default.gif></p>');
        clearTimeout(myTimeOut);
        myTimeOut = setTimeout(function () {



            let pesquisar = jQuery("#pesqGatinhos").val();
            jQuery.ajax(
                "http://api.giphy.com/v1/gifs/search?q=+" + pesquisar + "+&limit=10&api_key=dc6zaTOxFJmzC").done(function (result) {
                console.log(result);
                jQuery(".images-container").html('');
                result.data.forEach(element => {
                    const url2show = element.images.original.url;
                    jQuery(".images-container").append('<p><img class="main img" src=' + url2show + '></p>');
                });

            });
        }, 3500);

    });

}

const ID_INPUT_VALUE = '#id-form-laco-submit';

function getElementId(idElement) {
    return document.querySelector(idElement);
}

function addEventListener2ButtonLaco() {
    let lstBotao = getElementId(ID_INPUT_VALUE);
    lstBotao.addEventListener("click", addOnInputEventOnInput);


}

function addAction2Form(idForm, theAction) {

    //alert(idForm);
    //alert(theAction);
    jQuery(idForm).attr("action", theAction);

}

function addEventOnSubmit(idButton, idForm, theAction) {

    // Alterar o conteúdo em função do click
    jQuery(idButton).on('click', function (event) {
        event.preventDefault();

        //alert('submit');

        /*jQuery('#form-escolha-1').submit(function () {
            alert('submit'); 
        });*/

        //jQuery('#form-escolha-1').submit();
        jQuery(idForm).attr("action", theAction);
        jQuery(idForm).submit();
        //this.submit(); 

    });
}

// Página de entrada
//addAction2Form('#form-fortaleca', '/projecto.360.io/escolha-1.html');
addEventOnSubmit('#id-btn-go-fortaleca', '#form-fortaleca', '/projecto.360.io/escolha-1.html');

// Página escolha-1
//addAction2Form('#form-escolha-1', '/projecto.360.io/escolha-2.html');
addEventOnSubmit('#id-btn-go-escolha-1', '#form-escolha-1', '/projecto.360.io/escolha-2.html');
addEventOnSubmit('#id-btn-back-escolha-1', '#form-escolha-1', '/projecto.360.io/index.html');


// Página escolha-2
//addAction2Form('#form-escolha-2', '/projecto.360.io/form-1.html');
addEventOnSubmit('#id-btn-go-escolha-2', '#form-escolha-2', '/projecto.360.io/form-1.html');

// Página form-1
//addAction2Form('#form-1-laco', '/projecto.360.io/form-2.html');
addEventOnSubmit('#id-btn-to-form-2', '#form-1-laco', '/projecto.360.io/form-2.html');

// Página form-2
//addAction2Form('#form-2-laco', '/projecto.360.io/parabens.html');
addEventOnSubmit('#id-btn-go-form-2', '#form-2-laco', '/projecto.360.io/parabens.html');

// Página parabens
//addAction2Form('#form-parabens', '/projecto.360.io/lacoFortalecido.html');
addEventOnSubmit('#id-btn-go-parabens', '#form-parabens', '/projecto.360.io/lacoFortalecido.html');

// Página laco
// Para já manter na mesma página
//addAction2Form('#form-laco', '/projecto.360.io/lacoFortalecido.html');
addEventOnSubmit('#id-btn-go-laco', '#form-laco', '/projecto.360.io/lacoFortalecido.html');

//addEventListener2ButtonVoltar(); 

/*
jQuery(document).ready(function (event) {
    // Carregar o header e o footer
    loadJqInclude(); 
    loadHome(); 
});  */