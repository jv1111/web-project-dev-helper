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
                    <p>{'axios.post("/system/sendEmail",{'}</p>
                    <p className="tab-1">{'userId: userId,'}</p>
                    <p className="tab-1">{'key: key,'}</p>
                    <p className="tab-1">{'receiver: receiver,'}</p>
                    <p className="tab-1">{'subject: subject,'}</p>
                    <p className="tab-1">{'text: text,'}</p>
                    <p className="tab-1">{'html: html,'}</p>
                    <p className="tab-1">{'sender: sender'}</p>
                    <p className="">{'});'}</p>
                </div>
                <div className="d-grid mt-2 gap-1 text-center">
                    <button
                        onClick={getKey}
                        disabled={!auth.loggedIn}
                    >
                        Get key
                    </button>
                    {!auth.loggedIn && <label className="text-danger">Please login to get your key</label>}
                </div>
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