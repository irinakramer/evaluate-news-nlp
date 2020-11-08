function checkForUrl(inputText) {
    console.log("::: Running checkForUrl :::", inputText);
    let regexp = /^(http|https):\/\/[^ "]+$/;
    return regexp.test(inputText);
}

export { checkForUrl }
