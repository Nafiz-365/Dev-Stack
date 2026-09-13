import NavBar from './components/NavBar';
import Banner from './components/Banner';
import { Suspense, useState } from 'react';
import type { Itechnology } from './types/technology';
import Technologies from './components/technologies/Technologies';
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer';

const fetchTechnologies = async (): Promise<Itechnology[]> => {
    const res = await fetch('/data.json');
    const data = await res.json();
    return data;
};
function App() {
    const [technologiesPromise] = useState(() => fetchTechnologies());
    // console.log(technologiesPromise);
    return (
        <>
            <NavBar></NavBar>
            <Banner></Banner>
            <Suspense
                fallback={
                    <h2 className="text-center text-2xl font-bold py-20">
                        Loading...
                    </h2>
                }
            >
                <Technologies
                    technologiesPromise={technologiesPromise}
                ></Technologies>
            </Suspense>
            <Footer></Footer>
            <ToastContainer />
        </>
    );
}

export default App;
