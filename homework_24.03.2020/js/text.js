textBtn.addEventListener('click', () => {
    (bold.checked)? myText.style.fontWeight = 'bold': myText.style.fontWeight = 'unset';
    (underline.checked)? myText.style.textDecoration = 'underline': myText.style.textDecoration = 'none';
    (italic.checked)? myText.style.fontStyle = 'italic': myText.style.fontStyle = 'unset';
    if(textLeft.checked) {
        myText.style.textAlign = 'left';
    } else if(textRight.checked) {
        myText.style.textAlign = 'right';
    } else if(justify.checked) {
        myText.style.textAlign = 'justify';
    } else {
        myText.style.textAlign = 'unset';
    }
});