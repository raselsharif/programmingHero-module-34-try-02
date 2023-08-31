
const loadPhones = async (inputText) => {
    const res = await fetch(`
    https://openapi.programming-hero.com/api/phones?search=${inputText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
}

const displayPhones = (phones) => {
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML ='';
    phones.forEach(phone =>{
        const phoneCard= document.createElement('div');
        
        phoneCard.innerHTML = `        
        <h2>Brand: ${phone.brand}</h2>
        <h3>Phone: ${phone.phone_name}</h3>
        <h2 style="word-break: break-all;">Model: ${phone.slug}</h2>
        <img src="${phone.image}" alt="phone image"> <br>

        <button>Details</button>
        `
        phoneContainer.appendChild(phoneCard)
        // console.log(phone);
    })
}

// handle search

const handleSearch = ()=>{
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value;

    // call the load phone function
    loadPhones(searchText)
}

loadPhones('iphone');