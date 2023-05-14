import copyText from "../helper/copyText";

const DisplayBox = ({ userId, userKey }) => {

    const copyHandler = (text,) => {
        alert(text);
        copyText(text, navigator);
    }

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

    return (
        <div className="blocker hide display-box">
            <div className="box">
                <label>User id: </label>
                <div className="inner-box">
                    <label>{userId}</label>
                    <button
                        className="btnCopy"
                        onClick={() => copyHandler(userId)}
                    >Copy
                    </button>
                </div>
                <label>Key: </label>
                <div className="inner-box">
                    <label>{userKey}</label>
                    <button
                        className="btnCopy"
                        onClick={() => copyHandler(userKey)}
                    >
                        Copy
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DisplayBox;