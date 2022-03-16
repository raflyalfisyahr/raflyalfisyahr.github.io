

function autoFetch(cb){
    window.fetch('https://raflyalfisyahr.github.io/data/downloads.json',{
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
    

    autoFetch(e => {
        if(e.status == 'success'){
            const result = e.data;
            if(result.length > 0){

                for(let i =0 ; i <= result.length;i++){
                    // elemend link download
                    const elementLinkDownload = document.createElement('a')
                    elementLinkDownload.classList.add('link-download')
                    elementLinkDownload.textContent = 'Download'
                    elementLinkDownload.setAttribute('href',result[i].file)
    
                    // element download-list
                    const elementDownloadList = document.createElement('div')
                    elementDownloadList.classList.add('download-list')
    
                    // element download-info
                    const elementDownloadInfo = document.createElement('div')
                    elementDownloadInfo.classList.add('download-info')
    
    
                    // element download / container download list
                    const elementDownload = document.createElement('div')
                    elementDownload.classList.add('download')
                    elementDownload.append(elementDownloadList)
                    elementDownload.append(elementDownloadInfo)
                    elementDownload.append(elementLinkDownload)
    
                    
                    elementDownloadInfo.innerHTML =`
                    <small class="title-download" >${result[i].title}</small>
                    <sup class="date-download" >${result[i].date}</sup>
                    `
    
                    document.querySelector('.downloads').append(elementDownload)
                }
            }else{
                document.querySelector('.downloads').innerHTML = `<div style="position: relative;height: 400px;width: 100%;text-align: center;line-height: 400px;color: gray;">Belum ada Apps</h2>
                </div>`
            }
        }else{
            console.log("failed")
        }
     })
}
main()