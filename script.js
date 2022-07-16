
let slider = document.getElementById('darkmodeinput');
slider.addEventListener('change', function() {
	changeDarkMode();
});

function changeDarkMode(){
    if (slider.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark')
    }
 }







