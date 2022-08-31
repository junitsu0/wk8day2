import ButtonCounter from './components/ButtonCounter';
import Navbar from './components/Navbar';
// import Students from './components/Students';
import StudentsClass from './components/StudentsClass';

function App(props) {

    return (
        <>
            <Navbar name='Brian' city='Chicago'/>
            <div className='container'>
                <ButtonCounter />
                {/* <Students /> */}
                <StudentsClass />
            </div>
        </>
    )
}

export default App;