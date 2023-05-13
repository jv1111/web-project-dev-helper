import React from "react";
import { getKeyApi } from "../../api/SystemApi";
import { useSelector } from "react-redux";

const MailerPage = () => {

    const auth = useSelector(state => state.auth);
    const copyKey = async () => {
        const response = await getKeyApi();
        if (response.error) return alert("Cannot get key");
        if (response.success) {
            navigator.clipboard.writeText(response.message)
                .then(() => {
                    alert("Text copied to clipboard!");
                })
                .catch((error) => {
                    console.error("Error copying text: ", error);
                });
            alert("Key has been copied, paste it to your project or .env file");
        }
    }

    return (
        <div className="mailer-page">
            <div className="tutorial-div">
                <h5>React + Axios</h5>
                <div className="tutorial-box">
                    <p>code here</p>
                </div>
                {!auth.loggedIn && <label>Please login to get your key</label>}
                <button
                    onClick={copyKey}
                    disabled={!auth.loggedIn}
                >
                    Get key
                </button>
            </div>
        </div>
    );
}

export default MailerPage;