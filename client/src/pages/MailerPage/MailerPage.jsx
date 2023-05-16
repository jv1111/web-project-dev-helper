import React, { useState } from "react";
import { getKeyApi } from "../../api/SystemApi";
import { useSelector } from "react-redux";
import { DisplayBox } from "../../components";

const MailerPage = () => {

    const [key, setKey] = useState(null);
    const [userKeyVisible, setUserKeyVisible] = useState(false);
    const auth = useSelector(state => state.auth);
    const userId = auth.user.id;

    const getKey = async () => {
        const response = await getKeyApi();
        if (response.error) return alert("Cannot get key");
        setUserKeyVisible(true);
        setKey(response.key);
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
                    onClick={getKey}
                    disabled={!auth.loggedIn}
                >
                    Get key
                </button>
            </div>
            <DisplayBox
                userId={userId}
                userKey={key}
                trigger={userKeyVisible}
                setTrigger={setUserKeyVisible}
            />
        </div>
    );
}

export default MailerPage;