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
function main(){
    autoFetch(e=>{
        if(e.status == 'success'){
            if(e.data.length > 0){
                for (let i = 0; i < e.data.length; i++) {
                    const elementProjectList = document.createElement('a')
                    elementProjectList.classList.add('project-list')
                    elementProjectList.setAttribute('href',e.data[i].file)
                    document.querySelector('.projects').append(elementProjectList)
                    
                }   
            }else{
                document.querySelector('.projects').innerHTML = '<div style="position: relative;height: 400px;width: 100%;text-align: center;line-height: 400px;color: gray;">Belum ada project</h2>'
            }
        }else{
            console.log('failed')
        }
    })
}

main()