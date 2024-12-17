// GMAIL BLOCK

const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^[a-zA-Z0-9._]+@gmail\.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    } else {
        gmailResult.innerHTML = "Invalid gmail format"
        gmailResult.style.color = "red"
    }
}

//MOVE BLOCK

const childBlock = document.querySelector('.child_block');
const parentBlock = document.querySelector('.parent_block');

let position = 0;

const moveBlock = () => {
    const parentWidth = parentBlock.offsetWidth;
    const childWidth = childBlock.offsetWidth;

    if (position < parentWidth - childWidth) {
        position++
        childBlock.style.left = `${position}px`
        requestAnimationFrame(moveBlock);
    }
}; 

moveBlock();
