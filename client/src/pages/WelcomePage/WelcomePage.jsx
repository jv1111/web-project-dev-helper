import React from "react"

const WelcomePage = () => {
    return (
        <div className="welcome-page">
            <div className="title container">
                <h1 className="app-title">DEV HElPER</h1>
                <label className="regular-txt">
                    Welcome to dev helper!
                </label>
                <div className="line" />
                <div className="description">
                    <p className="regular-txt">
                        Are you in a rush to complete a test or presentation project? We can help! Dev Helper is a free API containing numerous useful backend functionalities written in JavaScript. It uses MongoDB to store data and also includes utilities and authentications to help developers focus on their specific app requirements.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;