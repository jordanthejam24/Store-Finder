
var map;
var markers = [];
var infoWindow;

function initMap() {
    var losAngeles = {
        lat: 34.063380,
        lng: -118.358080
    }
    map = new google.maps.Map(document.getElementById('map'), {
        center: losAngeles,
        zoom: 8
    });
    infoWindow = new google.maps.InfoWindow();
    displayStores()
    showStoresMarkers()
}

function displayStores() {
    var storesHtml = "";
    stores.forEach(function(store, index){
        var address = store.addressLines;
        var phone = store.phoneNumber;
        storesHtml += `
            <div class="store-container">
                <div class="store-info-container">
                    <div class="store-address">
                        <span>${address[0]}</span>
                        <span>${address[1]}</span>
                    </div>
                    <div class="store-phone-number">${phone}</div>
                </div>
                <div class="store-number-container">
                    <div class="store-number">
                        ${index+1}
                    </div>
                </div>
            </div>
        `
    });
    document.querySelector('.stores-list').innerHTML = storesHtml;
}
// var map;

// var losAngeles = {lat: 34.063380, lng: -118.358080};
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: losAngeles,
//         zoom: 8
//     });
//     displayStores();
// }

// function displayStores() {
//     var storesHTML = '';
//     stores.forEach(function(store) {
//         console.log(store);
//         storesHTML += `
//             <div class="store-list-container">
//                 <div class="store-list">
//                     <div class="store-container">
//                         <div class="store-address">
//                             <span>${store.addressLines[0]}</span>
//                             <span>${store.addressLines[1]}</span>
//                         </div>
//                         <div class="store-number">
//                             ${store.phoneNumber}
//                         </div>
//                     </div>
//                     <div class="store-list-num">
//                         ${store.storeNumber}
//                     </div>
//                 </div>
//             </div>
//         `;
//     })
//     document.querySelector('.store-list').innerHTML = storesHTML;
// }