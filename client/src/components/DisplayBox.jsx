import copyText from "../helper/copyText";

const DisplayBox = ({ userId, userKey, trigger, setTrigger }) => {

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

    if (!trigger) return "";

    return (
        <div className="blocker hide display-box">
            <div className="box">
                <div className="box-label">
                    <label>User id: </label>
                    <button
                        className="btnCopy"
                        onClick={() => copyHandler(userId)}
                    >Copy
                    </button>
                </div>

                <div className="inner-box">
                    <label>{userId}</label>
                </div>

                <div className="box-label">
                    <label>Key: </label>
                    <button
                        className="btnCopy"
                        onClick={() => copyHandler(userKey)}
                    >
                        Copy
                    </button>
                </div>

                <div className="inner-box">
                    <label>{userKey}</label>
                </div>

                <button onClick={() => setTrigger(false)}>Close</button>
            </div>
        </div>
    )
}

export default DisplayBox;