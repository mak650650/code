import Main from './Main'
import Preview from './Preview'

function App() {
    return (
        <>
        <div className='md:flex bg-black h-max max-md:h-fit max-md:flex-col'>
            <Main />
            <Preview />
        </div>
       
        </>
    )
}

export default App