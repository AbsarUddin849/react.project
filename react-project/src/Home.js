
// import Feed from '../../Component/Home/Feed/Feed';
// import LoginOption from 'react-project/src/component/Home/LoginOption/LoginOption';
// import Logo from 'react-project/src/component/Home/Logo/Logo';
import'./Home.css'
import Logo from './Logo';
  import Feed from './Feed';
  import LoginOption from './LoginOption';

function Home(){
    return(
        <div className="home">
            <div className="leftContainer"> 
             <Logo/> 
            </div>
            <div className="centerContainer"> 
            <Feed/> 
             </div>
            <div className="rightContainer">
            <LoginOption/> 
             </div>
        </div>
    );
}

 export default Home;



 
// import './Home.css';
// import Logo from '../../components/Logo';
// import Feed from '../../components/Feed';
// import LoginOption from '../../components/LoginOption';

// function Home(){
//     return(
//         <div className="home">
//             <div className="leftContainer">
//                 <Logo />
//             </div>
//             <div className="centerContainer">
//                 <Feed />
//             </div>
//             <div className="rightContainer">
//                 <LoginOption />
//             </div>
//         </div>
//     );
// }

// export default Home;
