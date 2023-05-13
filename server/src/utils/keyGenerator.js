const keyGenerator = (numOfKey) => {
    const keyElements = "qwertyuiopasdfghjklzxcvbnm1234567890"
    var key = [];
    for (let i = 0; i < numOfKey; i++) {
        const randomKeyIndex = Math.floor(Math.random() * keyElements.length);
        const randomKey = keyElements[randomKeyIndex];
        console.log(randomKey);
        key.push(randomKey);
    }
    const keyStr = key.join('');
    console.log(keyStr);
    return keyStr;
}

module.exports = {
    keyGenerator
}