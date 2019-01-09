//slider & timer
window.onload = function() { //tot codul trebuie inclus intr-un windows.onload pentru a fi executat dupa incarcarea si analizarea paginii. La momentul executarii divurile nu exista inca
    var go=1;
function Slider(numberOfSlides){
    this.index=0;
    this.maxIndex=numberOfSlides-1;
    this.prevButton=document.getElementById("button-prev");
    this.nextButton=document.getElementById("button-next");
    this.pauseButton=document.getElementById("button-pause");
    this.playButton=document.getElementById("button-play");
    this.slider=document.getElementById("slider");
    this.sliderWrapper=document.getElementById("slider-wrapper");

    var _this=this;
    this.next = function(){
        if (go===1)
            resetTimer();
        if (_this.index < _this.maxIndex){
            _this.index ++;
            _this.sliderWrapper.style.left=(_this.index * -100) + "%";
           
        }
        else{
            _this.index=0;
            _this.sliderWrapper.style.left=0;
        }
    }

    this.prev = function(){
        if (go===1)
            resetTimer();
        if (_this.index > 0){
            _this.index --;
            _this.sliderWrapper.style.left=(_this.index * -100) + "%";
        }
        else
        {
            _this.index=_this.maxIndex;
            _this.sliderWrapper.style.left=(_this.maxIndex * -100) + "%";
        }

    }

    this.pause = function(){
        clearInterval(timer);
        _this.pauseButton.style.display="none";
        _this.playButton.style.display="block";
    }
    this.play=function(){
        resetTimer();
        _this.playButton.style.display="none";
        _this.pauseButton.style.display="block";
    }
}
    var slider=new Slider(3);

    document.getElementById("button-next").addEventListener ( "click", function () {
        slider.next();
    });
    document.getElementById("button-prev").addEventListener ( "click", function () {
        slider.prev();
    });

    document.getElementById("button-pause").addEventListener ("click", function(){
        slider.pause();
        go=0;
    });

    document.getElementById("button-play").addEventListener ("click", function(){
        slider.play();
        go=1;
    });


    var timer=null;

    var initialSeconds = 3;
    var seconds = initialSeconds;

    function resetTimer(){
        seconds=initialSeconds;
        clearInterval(timer);
        startTimer();
    }
    function startTimer(){
        timer=setInterval(function(){
        if (seconds===0)
        {
            slider.next();
        }
        else
            seconds--;
        },1000);
    }
    startTimer();
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// view more
var iv = 0;
var maxBoxes=3;
function addMore() {
    iv=0;
    document.getElementById("whiteh1-blue-buttonM").style.display="none";
    document.getElementById("whiteh1-blue-buttonL").style.display="block";
    while (iv<maxBoxes){ /// modificare cu if daca vreau sa adaug element cu element
    iv ++;
    var element = document.createElement('div');
    element.setAttribute ("class", "flex-item");
    element.setAttribute ("id", "dinamicDiv"+iv);
    var div_post = document.createElement('div');
    div_post.setAttribute ("class","whiteh1-post whiteh1-post-image-bg");
    element.appendChild(div_post);
    var div_post_box=document.createElement('div');
    div_post_box.setAttribute("class","whiteh1-post-box");
    div_post.appendChild(div_post_box);
    var div_icon= document.createElement('div');
    div_icon.setAttribute("class","whiteh1-icon");
    var icon=document.createElement('i');
    icon.setAttribute("class","fa fa-ioxhost");
    div_post_box.appendChild(div_icon);
    div_icon.appendChild(icon);
    var div_title=document.createElement('div');
    div_title.setAttribute("class","blackh1-article-title");
    div_post_box.appendChild(div_title);
    var title = document.createTextNode('LOBORTIS '+iv);
    div_title.appendChild(title);
    var div_text=document.createElement('div');
    div_text.setAttribute("class","whiteh1-white-text");
    div_post_box.appendChild(div_text);
    var text=document.createTextNode("news [...]");
    div_text.appendChild(text);
    var rmore=document.createElement('div');
    rmore.setAttribute("class","blackh1-article-read-more");
    div_post_box.appendChild(rmore);
    var more=document.createElement('a');
    more.setAttribute("href","#");
    rmore.appendChild(more);
    var mtxt=document.createTextNode("More");
    more.appendChild(mtxt);
    var micon=document.createElement('i');
    micon.setAttribute("class","fa fa-angle-double-right");
    more.appendChild(micon);

    document.getElementById("container").appendChild(element);
    }
}
Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
function showLess(){
    iv=0;
    document.getElementById("whiteh1-blue-buttonM").style.display="block";
    document.getElementById("whiteh1-blue-buttonL").style.display="none";
    while (iv<maxBoxes)
    {
        iv++;
        document.getElementById("dinamicDiv"+iv).remove();  
    }

}

//validation
function submit() {
    document.getElementById("subscription").style.display = "inline";
    document.getElementById("subscription").innerText = "We check the entered data...";

    var nume = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    if (nume.length>0 && email.length>0) {  
        var nume_ok=1;                 
        for (var i=0; i<nume.length;i++)
        {
            if( ! ((nume[i]>='a'&&nume[i]<='z')||(nume[i]>='A'&&nume[i]<='Z')||nume[i]===' ') )
                nume_ok=0;
        }
        var eroare_gasita=0;
        var arond_gasit=0;
        var punct_gasit=0;
        var email_valid=0;
        var i; 
        var indice; 
        for (var i=0;i<email.length && eroare_gasita===0;i++)
        {
            if ((email[i]===' ')||(!((email[i]>='a'&&email[i]<='z')||(email[i]>='A'&&email[i]<='Z')||(email[i]==='@')||(email[i]==='.')||(email[i]>='0'&&email[i]<='9'))))
                eroare_gasita=1;
        }
        if (eroare_gasita===0){
            for (i=1;i<email.length;i++)
            {
                if (email[i]==='@')
                   { 
                    arond_gasit=arond_gasit+1;
                    indice=i;
                   }
            }
            if (arond_gasit===1)
            {   
                if (email[indice-1]==='.'||email[indice+1]==='.')
                    eroare_gasita=1;
                var j;
                for (j=indice+1;j<email.length;j++)
                {
                    if (email[j]==='.')
                        {
                            punct_gasit=1;
                            if (email[j-1]==='.'||email[j+1]==='.')
                                eroare_gasita=1;
                        }
                }
                if (email[email.length-1]==='.')
                    eroare_gasita=1;
            }
            else
                eroare_gasita=1;
        }

        if (arond_gasit===1 && punct_gasit===1 && eroare_gasita===0) 
                email_valid=1;
        if (nume_ok===1 && email_valid===1)
        {
            var mail = document.getElementById('email').value;
            var api="https://app.verify-email.org/api/v1/fHwaRu3xx8Ux1SY7A9jOi00lOJR6vrWJotcZ1hLQkzlNAQIm65/verify/";
            fetch(api + mail)
                .then(function(response) {
                return response.json();
            })
                .then(function(response) {
                // console.log(response);
                var status=response.status;
                var log=response.smtp_log;
                var description=response.status_description;
                var credits=response.credits;
                if (!(credits===0))
                {
                if (status===-1){
                    if(log==="ServerIsCatchAll")
                    {
                        document.getElementById("subscription").style.display = "inline";
                        document.getElementById("subscription").innerText = "Unknown email. Ghost domain.";
                    }
                    else
                        if(log==="unknown")
                        {
                            document.getElementById("subscription").style.display = "inline";
                            document.getElementById("subscription").innerText = "Your subscribtion request have been registred.";
                        }
                        else
                        {
                            document.getElementById("subscription").style.display = "inline";
                            document.getElementById("subscription").innerText = "This email adress is not supported.";
                        }
                }
                else
                    if(status===1){
                        document.getElementById("subscription").style.display = "inline";
                        document.getElementById("subscription").innerText = "Thanks for your subscription!";
                    } 
                    else
                        if(status===0)
                        {
                            if (description==="invalid domain")
                            {
                                document.getElementById("subscription").style.display = "inline";
                                document.getElementById("subscription").innerText = "Invalid domain! This email adress is not supported.";   
                            }
                        }
                        else
                        {
                            document.getElementById("subscription").style.display = "inline";
                            document.getElementById("subscription").innerText = "This email adress is not supported.";
                        } 
                }
                else
                {
                    document.getElementById("subscription").style.display = "inline";
                    document.getElementById("subscription").innerText = "Your subscribtion request have been registred.";
                }
                })
                .catch(function(error) {
                    console.log(error);
                })   
        }
        else
            {
                if (nume_ok===0 && email_valid===0)
                {
                    document.getElementById("subscription").style.display = "inline";
                    document.getElementById("subscription").innerText = "Input of data denied. Check your name and email input.";
                }
                else
                    if (nume_ok===0)
                    {
                        document.getElementById("subscription").style.display = "inline";
                        document.getElementById("subscription").innerText = "Name denied. Check the input.";
                    }
                    else
                        if (email_valid===0)
                        {
                            document.getElementById("subscription").style.display = "inline";
                            document.getElementById("subscription").innerText = "Email denied. Check the input.";
                        }

            }
    }
    else
        {
            document.getElementById("subscription").style.display = "inline";
            document.getElementById("subscription").innerText = "Please fill in both fields.";
        }
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
}

