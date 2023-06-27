//Elements
const elements = document.querySelectorAll('.btn');

//Event
elements.forEach(element =>{
    element.addEventListener('click', () => {
        let command = element.dataset.element;

        if(command === 'createLink' || command === 'insertImage'){
            let url = prompt('Enter th link here:', 'htpp://');
            document.execCommand(command, false, url);
        }else{
            document.execCommand(command,false,null);
        }
    });
});



