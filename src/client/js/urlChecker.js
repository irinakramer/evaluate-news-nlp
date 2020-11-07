function checkForUrl(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let regexp = /^(http|https):\/\/[^ "]+$/;
    return regexp.test(inputText);
}

export { checkForUrl }
