import {useState} from "react";

function EventBinding() {
    const [username, setUsername] = useState("John Doe");

    function handleUsername(e) {
        setUsername(e.target.value);
    }

    return (
        <div className="container-fluid">
            <dl>
                <dt>User Name</dt>
                <dd>
                    <input type="text" onChange={handleUsername} defaultValue={username}/>
                </dd>
            </dl>
            <h3>Hello! {username}</h3>
        </div>
    );
}

export default EventBinding;