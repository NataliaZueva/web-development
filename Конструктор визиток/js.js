handle = function(e)  {
    form = e.form;  
    
    let result = {
        organization: form.organization.value,
        FIO: form.FIO.value,
        post: form.post.value,
        phone: form.phone.value,
        mail: form.mail.value,
        place: form.place.value
    }

    card_result = document.getElementsByClassName("card-preview")[0];

    card_result.querySelector('.card__organization').textContent = result.organization;
    card_result.querySelector('.card__FIO').textContent = result.FIO;
    card_result.querySelector('.card__post').textContent = result.post;
    card_result.querySelector('.card__phone').textContent = result.phone;
    card_result.querySelector('.card__mail').textContent = result.mail;
    card_result.querySelector('.card__place').textContent = result.place;
};