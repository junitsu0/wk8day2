import Navbar from './components/Navbar';
import StudentsClass from './components/StudentsClass';

function App(props) {

    return (
        <>
            <Navbar />
            <div className='container'>
                <StudentsClass />
            </div>
        </>
    )
}

export default App;