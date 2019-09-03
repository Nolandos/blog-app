const cutText = (text, maxLength) => {
    let lastWord = (text.substr(0, maxLength).lastIndexOf(' '));

    if(maxLength < 1) return 'Error';
    if (text.length > maxLength) return text.substr(0, lastWord).concat('...');
    return text.substr(0, maxLength);  
}

export default cutText;