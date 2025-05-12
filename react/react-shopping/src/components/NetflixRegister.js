export function RegistrationComponent() {
    return (
        <div className="container-fluid text-center text-white">
            <p className="text-center">Ready to Watch? Enter you email to create account or restart your membership</p>
            <div className="input-group input-group-lg">
                <input type="email" className="form-control" />
                <button className="btn btn-danger">
                    Get Started
                    <span className="bi bi-chevron-right"></span>
                </button>
            </div>
        </div>
    );
}