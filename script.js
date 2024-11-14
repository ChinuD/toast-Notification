let toastBox = document.getElementById('toastBox');
let successMsg = '<i class="fa-solid fa-circle-exclamation"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-exclamation"></i> Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid Input, check again';

function showToast(msg){
    let toast = document.createElement('div')
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error');
    }
    else if(msg.includes('Invalid')){
        toast.classList.add('submit');
    }
    if(msg.includes('invalid')){
        toast.classList.add('error');
    }
    if(msg.includes('error')){
        toast.classList.add('error');
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);
}