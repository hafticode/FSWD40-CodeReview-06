var data = JSON.parse(media);

for (i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.classList.add("col-lg-3");
    div.classList.add("col-md-4");
    div.classList.add("col-sm-12");
    var container = document.createElement("div");
    container.classList.add("container");
    var dummy = document.getElementById("wrapper");
    dummy.appendChild(div);
    div.appendChild(container);
    var thumbnail = document.createElement("div");
    container.appendChild(thumbnail);
    var img = document.createElement("img");
    img.setAttribute("src", data[i].image);
    thumbnail.appendChild(img);
    var title = document.createElement("h4");
    var title_text = document.createTextNode(data[i].title);
    $(title).append(title_text);
    container.appendChild(title);
    var author = document.createElement("p");
    var author_text = document.createTextNode(data[i].type + " von: " + data[i].author);
    $(author).append(author_text);
    container.appendChild(author);
    var genre = document.createElement("p");
    var genre_text = document.createTextNode("Genre: " + data[i].genre);
    $(genre).append(genre_text);
    container.appendChild(genre);
    var rating = document.createElement("p");
    var rating_text = document.createTextNode("Rating: " + data[i].rating);
    $(rating).append(rating_text);
    container.appendChild(rating);
    var button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-info");
    button.classList.add("btn-lg");
    button.setAttribute("data-toggle", "modal");
   button.setAttribute("data-target", "#myModal");
   var button_text = document.createTextNode("Get more information");
   button.appendChild(button_text);
   container.appendChild(button);
   var modal = document.createElement("div");
   modal.classList.add("modal");
    modal.classList.add("fade");
    modal.setAttribute("id","myModal");
    modal.setAttribute("role","dialog");
    container.appendChild(modal);
    var modal_dialog = document.createElement("div");
    modal_dialog.classList.add("modal-dialog");
    modal.appendChild(modal_dialog);
    var modal_content = document.createElement("div");
    modal_content.classList.add("modal-content");
    modal_dialog.appendChild(modal_content);
    var modal_header = document.createElement("div");
    modal_header.classList.add("modal-header");
    modal_content.appendChild(modal_header);
    var headline = document.createElement("h4");
    headline.classList.add("modal-title");
    var headline_text = document.createTextNode(data[i].title);
    headline.appendChild(headline_text);
    modal_header.appendChild(headline);
    modal_body = document.createElement("div");
    modal_body.classList.add("modal-body");
    modal_content.appendChild(modal_body);
    modal_par = document.createElement("p");
    modal_par_t = document.createTextNode(data[i].description);
    modal_par.appendChild(modal_par_t);
    modal_body.appendChild(modal_par);
    var modal_footer = document.createElement("div");
    modal_footer.classList.add("modal-footer");
    modal_content.appendChild(modal_footer);
    var button_footer = document.createElement("button");
    button_footer.classList.add("btn");
    button_footer.classList.add("btn-default");
    button_footer.setAttribute("data-dismiss", "modal");
    var button_footer_text =document.createTextNode("Close");
    button_footer.appendChild(button_footer_text);
    modal_footer.appendChild(button_footer);


};


function newItem(){
	console.log("hello");
	var newdiv = document.createElement("div");
	newdiv.classList.add("col-lg-3");
    newdiv.classList.add("col-md-4");
    newdiv.classList.add("col-sm-12");
    var dummy = document.getElementById("wrapper");
    dummy.appendChild(newdiv);
    var container = document.createElement("div");
    container.classList.add("container");
    newdiv.appendChild(container);
    var thumbnail = document.createElement("div");
    container.appendChild(thumbnail);
    var img = document.createElement("img");
    img.setAttribute("id", "blah");
    thumbnail.appendChild(img);
    function showimagepreview(input) 
    {
      if (input.files && input.files[0]) 
      {
        var filerdr = new FileReader();
        filerdr.onload = function(e) {
            $('#blah').attr('src', e.target.result);
        };
        filerdr.readAsDataURL(input.files[0]);
      }
    }
   


};

  




// $("#submitbutton").click(function() {
//     var div = document.createElement("div");
//     div.classList.add("col-lg-3");
//     div.classList.add("col-md-4");
//     div.classList.add("col-sm-12");
//     var container = document.createElement("div");
//     container.classList.add("container");
//     var dummy = document.getElementById("wrapper");
//     dummy.appendChild(div);
//     div.appendChild(container);
//     var thumbnail = document.createElement("div");
//     container.appendChild(thumbnail);
//     var img = document.createElement("img");
//     img.setAttribute("src", document.getElementById("imgfile").value);
//     thumbnail.appendChild(img);
//     var title = document.createElement("h4");
//     var title_text = document.createTextNode(document.getElementById("title").value);
//     $(title).append(title_text);
//     container.appendChild(title);
//     var author = document.createElement("p");
//     var radios = document.getElementsByName('type');

//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             var type = document.createTextNode(radios[i].value + " by ");
//         }
//     }
//     var author_text = document.createTextNode(document.getElementById("author").value);
//     author.append(type);
//     $(author).append(author_text);
//     container.appendChild(author);
//     var genre = document.createElement("p");
//     var genre_text = document.createTextNode(document.getElementById("genre").value);
//     $(genre).append(genre_text);
//     container.appendChild(genre);
//     var rating = document.createElement("p");
//     var rating_text = document.createTextNode("Rating: " + data[i].rating);
//     $(rating).append(rating_text);
//     container.appendChild(rating);
// });