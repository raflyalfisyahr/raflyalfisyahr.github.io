const itemSkill = document.querySelectorAll('.item-skill');
const textSKill = document.querySelector('.text')
let boxForkskill = document.querySelector('.box-fork-skill');
const modalPopup = document.querySelector('.modal-popup');
const closePopupSkill = document.querySelector('.close-popup-skill');
const popupSkill = document.querySelector('.popup-skill');

closePopupSkill.addEventListener('click',function(){


    popupSkill.style.transform = 'translateY(2000px)';
    popupSkill.style.transition = '1s';
    setTimeout(() => {
        modalPopup.style.opacity = 1;
        modalPopup.style.display = 'none'
    }, 500);
})



itemSkill.forEach((element,index,parent) => {
    
    element.addEventListener('click',()=>{
        const isTheme = localStorage.getItem('_theme');
        
        if(!element.classList.contains('active')){
            // set current skill active
            localStorage.setItem('_activeSkill',index)

            element.children.item(0).classList.add('icon-skill-changes') //change color icon skill to active
            // change list skill ke warna yang di tentukan theme
            isTheme == 'dark' ? element.style.background = 'rgb(26, 25, 25) none repeat scroll 0% 0%' : element.style.background = 'rgba(91,91,255,1)'
            isTheme == 'dark' ? element.style.color = 'white' : element.style.color = 'white'
            //end change list skill ke warna yang di tentukan theme

            // popup
            modalPopup.style.display = 'block'
            modalPopup.style.opacity = 1;
            setTimeout(() => {
                popupSkill.style.transform = 'translateY(0)';
                popupSkill.style.transition = '1s';
            }, 10);

            // popupSkill.children.namedItem('small').textContent = element.textContent
            popupSkill.children.item(0).children.item(0).textContent = element.textContent
            popupSkill.children.item(1).textContent = element.getAttribute('data-item')
            // end popup

            // set animation description skill from bottom to top
            textSKill.style.transition = '1s'
            textSKill.style.bottom = '-260px'
            setTimeout(()=>{
                textSKill.style.bottom = '0px'
                textSKill.textContent = element.getAttribute('data-item')
            },2000)
            //end set animation description skill from bottom to top

            // remove style without active
            itemSkill.forEach((el,ind,part)=>{
                if(ind !== index){
                    el.classList.remove('active')
                    // change list skill ke warna yang di tentukan theme
                    isTheme == 'dark' ? el.style.background = 'rgb(51, 50, 50) none repeat scroll 0% 0%' : el.style.background = 'white'
                    isTheme == 'dark' ? el.style.color = 'rgb(23, 23, 23)' : el.style.color = 'rgb(26,25,25)'
                    //end change list skill ke warna yang di tentukan theme

                    el.children.item(0).classList.remove('icon-skill-changes') //change color icon skill remove
                }
            })
            //end remove style without active

            // animation to show fork skill
            boxForkskill.innerHTML =''
            setTimeout(()=>{
                for (let i = 1; i <= Number(element.getAttribute('data-fork')); i++) {
                    let forkElement = document.createElement('div')
                    forkElement.classList.add("fork-from");
                    boxForkskill.append(forkElement)
                }
                boxForkskill.style.transition = '1s'
                boxForkskill.style.width = '100%'
            },3000)
            setTimeout(() => {
                document.querySelectorAll('.fork-from').forEach((e,i,p)=>{
                    e.style.transitionDelay = `${0.5 * i}s`
                    e.style.transitionDuration = `${0.5 * 1}s`
                    e.style.opacity = 1
                })
                
            },3500 );
            //end animation to show fork skill
        }
        
         
        element.classList.add('active')
        switch (isTheme) {
            case 'dark':
                document.querySelector('.popup-skill').style.backgroundColor = 'black';
                document.querySelector('.header-popup').style.backgroundColor = 'rgb(66, 66, 66)';
                document.querySelector('.content-popup').style.color = 'rgb(255, 255, 255)'
                break;
            case 'light':
                document.querySelector('.popup-skill').style.backgroundColor = '#fafafa';
                document.querySelector('.header-popup').style.backgroundColor = 'rgba(91, 91, 255,1)';
                document.querySelector('.content-popup').style.color = 'rgb(130, 129, 129)'
                break;
            case null:
                document.querySelector('.popup-skill').style.backgroundColor = '#fafafa';
                document.querySelector('.header-popup').style.backgroundColor = 'rgba(91, 91, 255,1)';
                document.querySelector('.content-popup').style.color = 'rgb(130, 129, 129)'
                break;
            default:
                break;
        }

        
    })
});





// paralax
const avatar = document.querySelector('.avatar');
const downloadLink = document.querySelector('.link-download')
downloadLink.style.transform = 'translateX(0px)'
window.addEventListener('scroll',(e)=>{

    const Y = window.scrollY;
    avatar.style.transform = `translateY(-${Y}px)`
    downloadLink.style.transform = `translateX(${Y}px)`
})


// social toggle
const socialToggle = document.querySelector('.overlay-widget-social')
// socialToggle.style.transition = '1s'
socialToggle.addEventListener('click',(e)=>{
    if(socialToggle.children.item(0).getAttribute('style') !==null){

        socialToggle.children.item(0).getAttribute('style').split(';').slice(0,-1).forEach((e)=>{
            if(e.split(':')[1].trim() == 'rotate(406deg)'){
                socialToggle.children.item(0).style.transition = '1s'
                socialToggle.children.item(0).style.transform = 'rotate(0deg)'
                socialToggle.children.item(0).children.item(0).style.color =  '#191919'
                socialToggle.style.backgroundColor = 'white'
                

            }else{
                socialToggle.children.item(0).style.transition = '1s'
                socialToggle.children.item(0).style.transform = 'rotate(406deg)'
                socialToggle.children.item(0).children.item(0).style.color = 'white'
                socialToggle.style.backgroundColor = '#191919'
            }
        })
    }else{
        socialToggle.children.item(0).style.transition = '1s'
        socialToggle.children.item(0).style.transform = 'rotate(406deg)'
        socialToggle.children.item(0).children.item(0).style.color = 'white'
        socialToggle.style.backgroundColor = '#191919'
    }
    
})
