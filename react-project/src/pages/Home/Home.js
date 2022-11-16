
import Feed from '../../component/Home/feed/Feed';
import LoginOption from '../../component/Home/loginOption/LoginOption';
import Logo from '../../component/Home/logo/Logo';
import'./Home.css'


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
