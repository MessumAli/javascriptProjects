function search(){
    const searchBox = document.querySelector("#search-item").value.toUpperCase()
    const product = document.querySelectorAll(".product")
    const pname = document.querySelectorAll("h2")

    for (let i = 0; i < pname.length; i++){
        let match = product[i].querySelectorAll("h2")[0]

        if(match){
            let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = ""
            }
            else{
                product[i].style.display = "none"
            }
        }
    }
}