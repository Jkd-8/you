document.getElementById('revealButton').addEventListener('click', function() {
    document.getElementById('specialText').classList.remove('hidden');
    document.getElementById('message').classList.remove('hidden');
    document.getElementById('clickanswer').style.display = 'inline-block';
    document.getElementById('clickno').style.display = 'inline-block';
    document.getElementById('revealButton').style.display = 'none';
    document.getElementsById("message").style.display = "none";

});

document.getElementById('clickanswer').addEventListener('click', function() {   
    document.getElementById("specialText").classList.add("hidden");
    document.getElementById("message").classList.add("hidden");
    document.getElementById('revelar').classList.remove('hidden');
    document.getElementById('clickno').style.display = 'none';
    document.getElementById("clickanswer").style.display = "none";
    document.getElementsById("message").style.display = "none";


   
});

document.getElementById('clickno').addEventListener('click', function() {
    document.getElementById("specialText").classList.add("hidden");
    document.getElementById("message").classList.add("hidden");
    document.getElementById('clickno').style.display = 'none';
    document.getElementById("clickanswer").style.display = "none";
    document.getElementsById("message").style.display = "none";
    document.getElementById("revelar").classList.toggle("hidden");
    
});