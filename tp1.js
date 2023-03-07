

function addNote()
{
    var components = document.querySelector('.components');
    var element; // le block note
    var element_head; // l'entete en green
    var head_icons; // les icones
    var textarea; // la zone saisie

    var icon_trash;
    var icon_edit;

    element=document.createElement("div");
    element_head=document.createElement("div");
    textarea=document.createElement("textarea");
    head_icons=document.createElement("div");

    icon_trash=document.createElement("i");
    icon_edit = document.createElement("i");

    icon_trash.classList.add("fa-solid");
    icon_trash.classList.add("fa-regular");
    icon_trash.classList.add("fa-trash-can");

    icon_edit.classList.add("fa-solid");
    icon_edit.classList.add("fa-thin");
    icon_edit.classList.add("fa-pen-to-square");

    element.classList.add("component");
    textarea.classList.add("component_textarea");
    element_head.classList.add("component_head");
    head_icons.classList.add("head_icons");

    head_icons.appendChild(icon_edit);
    head_icons.appendChild(icon_trash);

    element_head.appendChild(head_icons);
    element.appendChild(element_head);
    element.appendChild(textarea);

    components.appendChild(element);

    icon_trash.addEventListener('click', ()=> {
      element.parentNode.removeChild(element);
    }); 

    /* ou icon_trash.addEventListener('click', ()=> {
    element.remove()});*/

    icon_edit.addEventListener('click', () => {
        textarea.readOnly == false;
    });
    
}

document.querySelector(".add-note_button").onclick=addNote;