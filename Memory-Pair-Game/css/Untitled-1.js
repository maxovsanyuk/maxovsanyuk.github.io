class App{
    constructor(){

        this.isTwoCardsActive = false;
        this.isFirstCard = true;
        this.gameScore = 0;
        this.firstCard = null;
        this.secondCard = null;
        this.allNumberImg = 12;
        this.imgList = [
            {
                src: 'img/HTML5.svg',
                name: 'html',
            },
            {
                src: 'img/sass.png',
                name: 'sass',
            },
            {
                src: 'img/git.png',
                name: 'git',
            },
            {
                src: 'img/vue.png',
                name: 'vue',
            },
            {
                src: 'img/js.png',
                name: 'js',
            },
            {
                src: 'img/react.png',
                name: 'react',
            },
        ];
        
    }   
    
    init(){
       
        const allImgList = this.imgList.concat(this.imgList);
        allImgList.sort(() => 0.5 - Math.random());

        const initialContainer = document.createElement('div');
        initialContainer.classList.add('initial-container');
        
        const gameTitle = document.createElement('h2');
        gameTitle.textContent = "Memory – Pair Game";

        document.body.appendChild(initialContainer);
        initialContainer.insertAdjacentElement('beforebegin', gameTitle);

        this.addAllimg(allImgList, initialContainer);
    }

    addAllimg(allImgList, initialContainer){
        
        allImgList.forEach(img => {
            const createNewCard = document.createElement('div');
            createNewCard.className = "new-card";
            createNewCard.setAttribute('data-name', img.name); 
            
            const newImg = document.createElement('img');
            newImg.className = "new-card_img";
            newImg.setAttribute('src', img.src); 
        
            initialContainer.appendChild(createNewCard);
            createNewCard.appendChild(newImg);
        });

        this.checkCard(initialContainer);
    }

    checkCard(initialContainer, newImg){
        initialContainer.addEventListener('mousedown', onMouseDown.bind(this)); 

        function onMouseDown (event){
            
            function checkFirsrCard(){
                if( event.target == newImg || this.isTwoCardsActive || event.target == initialContainer){
                    return;
                }else{
                    event.target.classList.add('new-card_active');
                };
            }

            checkFirsrCard.call(this);
            checkSecondCard.call(this);
        
            function checkSecondCard(){

                if(this.isFirstCard){       
                    this.firstCard = event.target;
                    this.isFirstCard = false
                }else{
                   this.secondCard = event.target;

                    if(this.firstCard === this.secondCard){
                        return;
                    }else{
                        this.isTwoCardsActive = true;
                        this.isFirstCard = true;
                    }
                           
                    compareCards.call(this);
   
                    function compareCards(){
                               
                        if(this.firstCard.getAttribute('data-name') !== this.secondCard.getAttribute('data-name')){
                            
                            this.gameScore-=5;
                            setTimeout(() => {
                                       this.firstCard.classList.remove('new-card_active')
                                       this.secondCard.classList.remove('new-card_active')
                                       this.isTwoCardsActive = false;
                                    }, 1000);
           
                        }else if(this.firstCard.getAttribute('data-name') === this.secondCard.getAttribute('data-name')){
                            this.gameScore+= 15;
                            this.allNumberImg -= 2;
           
                            setTimeout(() => {
                                this.firstCard.classList.add('new-card_remove')
                                this.secondCard.classList.add('new-card_remove')
                                this.isTwoCardsActive = false;
                                   
                            theEnd.call(this);
   
                                function theEnd(){
                                    if(this.allNumberImg === 0){
                                        const reload = document.createElement('button');
                                        alert(` Your score is: ${this.gameScore}, max result is : 90`)
                                        location.reload();
                                    } 
                                }
                            }, 500);   
                        }
                    }
                }
            }
        }
    }
}

const app = new App();
app.init();


