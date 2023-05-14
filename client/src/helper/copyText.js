const copyText = (text, navigator) => {
    console.log(text);
    navigator.clipboard.writeText(text)
        .then(() => {
            alert("Text copied to clipboard!");
        })
        .catch((error) => {
            console.error("Error copying text: ", error);
        });
}

export default copyText;