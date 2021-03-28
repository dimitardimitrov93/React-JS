const onContactFormSubmit = (e) => {
    const formData = new FormData(document.forms['formAdddestination']);

    const destinationData = {
        formData: new FormData(document.forms['contactForm']),
        email: formData.get('email'),
        telephoneNumber: formData.get('telephoneNumber'),
        message: formData.get('message'),
    }

    console.log(destinationData);
}

export default onContactFormSubmit;