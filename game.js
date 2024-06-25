let tar_num = Math.floor(Math.random()*100)+1;
let chance=6;
function checkGuess(){const UserGuess=document.getElementById("userGuess").value;
    const feed=document.getElementById("feedback");
    if(UserGuess>tar_num){feed.textContent='Dont dream at heights think low!You have '+chance+' orbs';
        chance=chance-1;
        if(chance==0){window.location.href="hacked.html"}
    }
    else if(UserGuess<tar_num){feed.textContent="Keep your aspirations high!";
        chance=chance-1;
        if(chance==0){window.location.href="hacked.html";
    }}
    else{feed.textContent="You have escaped hell!"}

}
