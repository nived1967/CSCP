import './activities.styles.css'

const Activities = () =>
{
    return(
        <div>
        <h1 className='activities'>ACTIVITIES</h1>
        <h1 className='blogs'>Blogs</h1>
        <br></br>
        <p1 className='discription-blogs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br></br>ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br></br>ullamco laboris nisi ut aliquip ex.</p1>
        <br></br>
        <div className='both'>
        <div className='lightblue'>
            <h1 className='text'>The State of <br></br>Security</h1>
        </div>
        <br></br>
        <div className='darkblue'>
            <h1 className='text'>Roadmap to<br></br>Competitive<br></br>Programming</h1>
        </div>
        </div>
        </div>
    )
}

export {Activities};