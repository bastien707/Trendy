//Constant: tag selection
const addbutton = document.querySelector('#Add');
const tbody = document.querySelector('#playlist_body');
const reset = document.querySelector('#reset');
//const table = document.querySelector('table');

addbutton.onclick = function(){
    //alert("Done");

    //we take value of field of the form
    let Title = document.querySelector('#title').value;
    let Artist = document.querySelector('#artist').value;
    let Album = document.querySelector('#album').value;

    //We check if all field are filled (required html already done)
    if((Title && Artist && Album) !== ""){

        //we create an table line element
        let line = document.createElement('tr');

        //we place the values in their repective column created
        let col_title = document.createElement('td');
        col_title.appendChild(document.createTextNode(Title));

        let col_artist = document.createElement('td');
        col_artist.appendChild(document.createTextNode(Artist));

        let col_album = document.createElement('td');
        col_album.appendChild(document.createTextNode(Album));

        //we add columns in the line of the table
        line.appendChild(col_title);
        line.appendChild(col_artist);
        line.appendChild(col_album);

        //we add the line in the body of the table in html
        tbody.appendChild(line);
    }
}

reset.onclick = function(){
    //window.location.reload();
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild)
    }

}