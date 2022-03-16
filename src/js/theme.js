
function showCurrentDescriptionSkill(){
    const currentIndex = localStorage.getItem('_activeSkill')
    document.querySelectorAll('.item-skill').forEach((element,index,parent) => {
        if(index == currentIndex){

            // set animation description skill from bottom to top
            document.querySelector('.text').style.transition = '1s'
            document.querySelector('.text').style.bottom = '-260px'
            setTimeout(()=>{
                document.querySelector('.text').style.bottom = '0px'
                document.querySelector('.text').textContent = element.getAttribute('data-item')
            },2000)
            //end set animation description skill from bottom to top
        
            // animation to show fork skill
            document.querySelector('.box-fork-skill').innerHTML =''
            setTimeout(()=>{
                for (let i = 1; i <= Number(element.getAttribute('data-fork')); i++) {
                    let forkElement = document.createElement('div')
                    forkElement.classList.add("fork-from");
                    document.querySelector('.box-fork-skill').append(forkElement)
                }
                document.querySelector('.box-fork-skill').style.transition = '1s'
                document.querySelector('.box-fork-skill').style.width = '100%'
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
    })
}

const forText =[
    'description',
    'name'
    ]
const otherDiv = [
    // 'container',
    'page-skill',
    'page-project',
    'skill-show'
    ]
const toggle = document.querySelector('#change-theme');
function DarkTheme(target){
    // change toggle switch theme
    document.querySelector('.overlay-widget').style.transition ='1s'
    document.querySelector('.overlay-widget').style.backgroundColor = "#fafafa"
    document.querySelector('.overlay-widget').style.color = "#191919"

    // set avatar background
    document.querySelector('#change-theme').children.item(0).children.item(0).classList.replace('fa-moon','fa-sun')
    document.querySelector('.avatar').style.backgroundColor = '#0f0f0f'
    document.querySelector('.avatar').style.borderColor = '#191919'
    // set background header img
    document.querySelector('.absolute-header').classList.remove('image-header-light-mode')
    document.querySelector('.absolute-header').classList.add('image-header-dark-mode')
    // set background content img
    document.querySelector('.absolute-content').classList.remove('image-content-light-mode')
    document.querySelector('.absolute-content').classList.add('image-content-dark-mode')
         // set background footer img
         document.querySelector('.absolute-footer').classList.remove('image-footer-light-mode')
         document.querySelector('.absolute-footer').classList.add('image-footer-dark-mode')
    document.querySelector(`.container`).style.background = '#191919'
    // set for background same
    target.forEach(classes=>{
        // #191919
        document.querySelector(`.${classes}`).style.background = 'transparent'
        classes == 'skill-show' ? document.querySelector(`.${classes}`).children.item(0).style.color = 'white' : null
    })
    //end set for background same

    // for item skill
    document.querySelectorAll('.item-skill').forEach(e=>{
         e.style.boxShadow = '0 0 5px rgb(40, 40, 40)'
         e.style.color = '#171717'
         e.style.background = '#333232'
    })
    // end item skill

    forText.forEach(classes=>{
        document.querySelector(`.${classes}`).style.color = 'white'
    })
}

function LightTheme(target){
    // change toggle switch theme
    document.querySelector('.overlay-widget').style.transition ='1s'
    document.querySelector('.overlay-widget').style.backgroundColor = "#191919"
    document.querySelector('.overlay-widget').style.color = "white"
    // set avatar background
    document.querySelector('#change-theme').children.item(0).children.item(0).classList.replace('fa-sun','fa-moon')
    document.querySelector('.avatar').style.backgroundColor = 'rgb(179, 179, 255)'
    document.querySelector('.avatar').style.borderColor = 'white'
    // set background header img
    document.querySelector('.absolute-header').classList.remove('image-header-dark-mode')
    document.querySelector('.absolute-header').classList.add('image-header-light-mode')
    // set background content img
    document.querySelector('.absolute-content').classList.remove('image-content-dark-mode')
    document.querySelector('.absolute-content').classList.add('image-content-light-mode')
    // set background footer img
    document.querySelector('.absolute-footer').classList.remove('image-footer-dark-mode')
    document.querySelector('.absolute-footer').classList.add('image-footer-light-mode')
    
    document.querySelector(`.container`).style.background = 'white'
    target.forEach(classes=>{
        document.querySelector(`.${classes}`).style.background = 'transparent'
        document.querySelector(`.${classes}`).style.color = '#333232'
        classes == 'skill-show' ? document.querySelector(`.${classes}`).children.item(0).style.color = '#333232' : null
    })
    document.querySelectorAll('.item-skill').forEach(e=>{
        e.style.boxShadow = '0 0 5px rgb(221, 221, 221)'
        e.style.color = '#171717'
        e.style.background = 'white'
   })
   // end item skill
    forText.forEach(classes=>{
        document.querySelector(`.${classes}`).style.color = '#333232'
    })
}


function RunTheme(){
    const isTheme = localStorage.getItem('_theme');
    const currentIndexSkill = localStorage.getItem('_activeSkill')
    if(isTheme == null && currentIndexSkill == null){
        console.log('auto light')
        LightTheme(otherDiv)
        return
    }
    showCurrentDescriptionSkill()
    switch (isTheme) {
        case 'dark':
            DarkTheme(otherDiv)
            // ubah warna dari semua skill yang active ke mode dark
            document.querySelectorAll('.item-skill').item(currentIndexSkill).classList.add('active')
            document.querySelectorAll('.item-skill').item(currentIndexSkill).style.backgroundColor = 'rgb(26, 25, 25)'
            document.querySelectorAll('.item-skill').item(currentIndexSkill).style.color = 'white'
            document.querySelectorAll('.item-skill').item(currentIndexSkill).children.item(0).classList.add('icon-skill-changes')
            //end ubah warna dari semua skill yang active ke mode dark
            break;
        case 'light':
            LightTheme(otherDiv)
            // ubah warna dari semua skill yang active ke mode light

            document.querySelectorAll('.item-skill').item(currentIndexSkill).classList.add('active')
            document.querySelectorAll('.item-skill').item(currentIndexSkill).style.backgroundColor = 'rgba(91,91,255,1)'
            document.querySelectorAll('.item-skill').item(currentIndexSkill).style.color = 'white'
            document.querySelectorAll('.item-skill').item(currentIndexSkill).children.item(0).classList.add('icon-skill-changes')
            //end ubah warna dari semua skill yang active ke mode light
            break;
        
        default:
            break;
    }
}

toggle.addEventListener('click',()=>{
    const isTheme = localStorage.getItem('_theme');
    switch (isTheme) {
        case 'dark':
            console.log("set to Light")
            localStorage.setItem('_theme','light')
            RunTheme()
            break;
        case 'light':
            console.log('set to Dark')
            localStorage.setItem('_theme','dark')
            RunTheme()
            break;
        case null:
            console.log('set to Dark')
            localStorage.setItem('_theme','dark')
            RunTheme()
            break;
        default:
            break;
    }
})

RunTheme()