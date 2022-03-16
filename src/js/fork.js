function autoFetch(cb){
    fetch('http://loalhost:5500/data/fork.json',{
        method:'GET'
    }).then(result=> result.json())
    .then((result)=>{
        cb({
            status:'success',
            data:result,
            message:'success to get data'
        })
    }).catch((error)=>{
        console.log(error)
        cb({
            status:'failed',
            data:[],
            message:'failed to get data'
        })
    })
}

function main(){
    autoFetch(e=>{
        if(e.status == 'success'){
            if(e.data.length >0){
                console.log(e.data)
            }else{
                console.log('no framework or i dont know')
            }
        }else{
            console.log(e.message)
        }
    })
}

main()