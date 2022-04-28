import { useEffect, useState } from "react";
import "./Activity.css";

const url = "https://www.boredapi.com/api/activity";

const Activity = () => {
    const [activity, setActivity] = useState("");

    const FetchActivity = async () => {
        try {
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(jsonData);
        setActivity(jsonData);
        } catch (err) {
        console.error(err);
        }
    };

    const handleGetActivity = (e) => {
        FetchActivity();
    };

    useEffect(() => {
        FetchActivity();
    }, []);
    return (
        <>
        <div
            className={
            activity.type !== "undefined"
                ? activity.type === "education"
                ? "app education"
                : activity.type === "relaxation"
                ? "app relaxation"
                : activity.type === "busywork"
                ? "app busywork"
                : activity.type === "recreational"
                ? "app recreational"
                : activity.type === "music"
                ? "app music"
                : activity.type === "charity"
                ? "app charity"
                : activity.type === "diy"
                ? "app diy"
                : activity.type === "social"
                ? "app social"
                : activity.type === "cooking"
                ? "app cooking"
                : "app"
                : "app"
            }
        >
            <main>
            {/* <h1 className="title">Do something!</h1> */}

            <div class="box-1">
                <div className="btn btn-one" onClick={handleGetActivity}>
                    <span>Get Activity</span>
                </div>
            </div>

            <div className="activityContainer">
                <p className="activityContent">{activity.activity}</p>
            </div>
            </main>
        </div>
        </>
    );
};

export default Activity;