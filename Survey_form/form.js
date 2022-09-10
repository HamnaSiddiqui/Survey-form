function update(){
    if(localStorage.getItem("dataJson") == null){
        let dataJsonArr = [];
        localStorage.setItem("dataJson",JSON.stringify(dataJsonArr));
    }
    else{
        // fetching
        let dataJsonArrStr = localStorage.getItem("dataJson");
        dataJsonArr = JSON.parse(dataJsonArrStr);
    }
    // populating the table
    
}