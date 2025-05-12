import "../styles/NetflixIndex.css";
import { FooterComponent } from "./NetflixFooter";

import { HeaderComponent } from "./NetflixHeader";
import MainComponent from "./NetflixMain";
import { RegistrationComponent } from "./NetflixRegister";

export default function IndexComponent() {
    return (<>
        <div className="container-fluid bg">
            <div className="box">
                <header>
                    <HeaderComponent />
                </header>
                <section className="d-flex justify-content-center align-items-center section">
                    <main>
                        <MainComponent />
                        < RegistrationComponent />
                    </main>
                </section>
                <footer>
                    <FooterComponent />
                </footer>
            </div>
        </div>
    </>);
}