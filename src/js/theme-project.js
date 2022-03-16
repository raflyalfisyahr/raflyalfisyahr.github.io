function autoFetch(cb){
    window.fetch('https://raflyalfisyahr.github.io/data/projects.json',{
    "method":"GET",
    }).then(result=> result.json())
    .then((result)=>{
        console.log("success")
        cb( {
            getting:"true",
            status:'success',
            data:result
        })
    }).catch((error)=>{
        console.log(error)
        cb( {
            getting:"false",
            status:"failed",
            data:[]
        })
    })
}

function LightTheme(target){
    document.querySelector('.container').style.backgroundColor = '#fafafa'
    autoFetch(e=>{
        if(e.data.length > 0){
            
        }
    })    
    document.querySelector('.navbar').children.item(1).style.color = 'rgba(91,91,255,1)'
    document.querySelector('.navbar').children.item(0).style.backgroundColor = 'rgba(91,91,255,1)';
}

function DarkTheme(target){
    document.querySelector('.container').style.backgroundColor = '#191919'
    autoFetch(e=>{
        if(e.data.length > 0){
        }
    })

    document.querySelector('.navbar').children.item(1).style.color = 'rgb(210, 210, 210)';
    document.querySelector('.navbar').children.item(0).style.backgroundColor = 'rgb(60, 60, 60)';
}
function RunTheme(){
    const isTheme = localStorage.getItem('_theme');
    if(isTheme == null && currentIndexSkill == null){
        console.log('auto light')
        LightTheme()
        return
    }
    switch (isTheme) {
        case 'dark':
            console.log('dark')
            DarkTheme()
            break;
        case 'light':
            console.log('light')
            LightTheme()
            break;
        
        default:
            break;
    }
}

RunTheme()