import './community.styles.css'
import poster1 from './poster1 1.png'
import poster2 from './poster2 1.png'
import poster3 from './poster3 1.png'

const Community = () =>{
    return( 
    <div>
        <div className='new1'>
        <h1 className='community'>COMMUNITY</h1>
        <p1 className='discription-goal2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br></br>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br></br>nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br></br>fugiat nulla pariatur.</p1>
        </div>
        <br></br>
        <br></br>
        <div className='images1'>
            <div className='images2'><img src={poster1} alt="poster1"></img></div>
            <div className='images2'><img src={poster2} alt="poster2"></img></div>
            <div className='images2'><img src={poster3} alt="poster3"></img></div>
        </div>
    </div>
    )
}

export {Community};

