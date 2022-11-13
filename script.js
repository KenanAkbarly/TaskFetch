 const url = "https://northwind.vercel.app/api/customers/";
 let tableElements = document.querySelector("tbody");
// fetch(url).then((response) => response.json()).then((data) =>{
//    for(let i = 0; i < data.length; i++) {
    
//     let trElement = document.createElement('tr');
//     let tdElementNo = document.createElement('td');
//     let tdElementId = document.createElement('td');
//     let tdElementName = document.createElement('td');
//     let tdElementContact = document.createElement('td');
//     let tdElementTitle = document.createElement('td');
//     let tdElementAddress = document.createElement('td');

//     let street = data[i].address.street;
//     let country = data[i].address.country;
//        tdElementNo.textContent = i;
//     tdElementId.innerHTML = data[i].id;
//     tdElementName.innerHTML = data[i].companyName;
//     tdElementContact.innerHTML = data[i].contactName;
//     tdElementTitle.innerHTML = data[i].contactTitle;
//     tdElementAddress.innerHTML = `${street},${country}`;

    
//     trElement.append(tdElementNo,tdElementId,tdElementName,tdElementContact,tdElementTitle,tdElementAddress);
//     tableElements.appendChild(trElement);

//    }
// })


axios(url).then((response)=>{

    console.log(response);
    let j = 0;
    for(var i = 0; i<response.data.length; i++) {
       
        
        let trElement = document.createElement('tr');
        let tdElementNo = document.createElement('td');
        let tdElementId = document.createElement('td');
        let tdElementName = document.createElement('td');
        let tdElementContact = document.createElement('td');
        let tdElementTitle = document.createElement('td');
        let tdElementAddress = document.createElement('td');
        
        let street = response.data[i].address.street;
        let country = response.data[i].address.country;
        tdElementNo.textContent = i;
        tdElementId.innerHTML = response.data[i].id;
        tdElementName.innerHTML = response.data[i].companyName;
        tdElementContact.innerHTML = response.data[i].contactName;
        tdElementTitle.innerHTML = response.data[i].contactTitle;
        tdElementAddress.innerHTML = `${street},${country}`;
        
        trElement.append(tdElementNo,tdElementId,tdElementName,tdElementContact,tdElementTitle,tdElementAddress);
        tableElements.appendChild(trElement);
        console.log(i);
    }
    

})