const buttons = document.querySelectorAll('.btn')
const storeImages = document.querySelectorAll('.store-item')

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        e.preventDefault()
        const filter = e.target.dataset.filter

        storeImages.forEach(function(item){
            if(filter === 'all'){
                item.style.display = 'block'
            }
            else{
                if(item.classList.contains(filter)){
                    item.style.display = 'block'
                }
                else{
                    item.style.display = 'none'
                }
            }
        })
    })
})