(function(){

    'use strict';

    const detailsForm = document.querySelector('#destination_details_form');

    detailsForm.addEventListener('submit',handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();

        const destName = event.target.elements["name"].value;
        const destLocation = event.target.elements["location"].value;
        const destPhoto = event.target.elements["photo"].value;
        const destDescription = event.target.elements["description"].value;

        for (let i = 0; i < detailsForm.length; i++) {
            detailsForm.elements[i].value = "";
        }

        //create the card
        const destCard = createDestinationCard(destName, destLocation, destPhoto, destDescription);

        const wishListContainer = document.querySelector('#destinations_container');

        // if you are making the card first time
        if (wishListContainer.children.length==0) {
            document.querySelector('#tittle').innerHTML = "<h3>My Wish List</h3>";
        }
        
        //add the card
        document.querySelector('#destinations_container').appendChild(destCard);
    }

    function createDestinationCard(name, location, photoURL, description) {
        const card = document.createElement('div');
        card.className = 'card';

        const imgElem = document.createElement('img');
        imgElem.setAttribute('alt', name);

        const constantPhotoURL = "images/1.jpg";

        if (photoURL.length===0) {
            imgElem.setAttribute('src', constantPhotoURL);
        }else{
            imgElem.setAttribute('src', photoURL);
        }

        card.appendChild(imgElem);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardTittle = document.createElement('h3');
        cardTittle.innerHTML = name;
        cardBody.appendChild(cardTittle);

        const cardSubtittle = document.createElement('h4');
        cardSubtittle.innerHTML = location;
        cardBody.appendChild(cardSubtittle);

        if (description.length!==0) {
            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerHTML = description;
            cardBody.appendChild(cardText);
        }

        const cardDelBtn = document.createElement('button');
        cardDelBtn.innerHTML = 'Remove';
        
        cardDelBtn.addEventListener('click', removeDestination);
        cardBody.appendChild(cardDelBtn);


        card.appendChild(cardBody);

        return card;
    }

    function removeDestination(event) {
        const card = event.target.parentElement.parentElement;
        card.remove();
    }

})();


