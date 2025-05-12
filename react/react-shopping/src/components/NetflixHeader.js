export function HeaderComponent() {
    return (<>
    <div className="container">
        <div className="d-flex justify-content-between p-3">
            <div>
                <h2 className="text-danger">NETFLIX</h2>
            </div>
            <div className="input-group w-25">
                <select className="form-select">
                    <option>Language</option>
                    <option>Polish</option>
                    <option>Hindi</option>
                </select>
                <button className="btn btn-danger ms-2">Signin</button>
            </div>
        </div>
        </div>
    </>);
}