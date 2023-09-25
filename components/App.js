import React, {useState} from 'react';
import { useNavigate, Route, Routes } from "react-router-dom";
import '../css/new.css'

// css
// import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';  

import Mypage from './Mypage';

import Register from './register';

const App =()=> {
  const [name, setName] = useState('');
  const [mode, setMode] = useState('login'); //login, info


  const userData = {
    email : 'dnals310@naver.com',
    password: '123',
    name : '최우민',
    소속기관 : '라인컴퓨터',
    전공 : '프론트앤드',
    핸드폰 : '010-9264-9707',
    id : '123'
  }
  const navigate = useNavigate();

  //register change
  const chagneRegister =(e)=>{
    e.preventDefault()
    setMode('Register')
    navigate('/register')
  }
  //info change
  const changeMode=(e)=>{
    e.preventDefault();
    setMode('info');
    navigate('/Throttle');
  }

  const userChang =(e)=>{
    e.preventDefault()
    setMode('login')
    alert('회원가입을 축하합니다')
    navigate('/')
  }


  const getContent = () =>{
    let contents = []
    if(mode === 'login'){
      contents.push(
        <Route path='/' 
        element={<LoginForm userData={userData} changeMode={changeMode} setName={setName} chagneRegister={chagneRegister}
        ></LoginForm>}
        
        />
      )
    }else if(mode === 'info'){
      contents.push(
      <Route path='/Throttle' element={<Mypage name={name} navigate={navigate} userData={userData}
      ></Mypage>} />
      )
    }else if(mode === 'Register'){
      contents.push(
        <Route path='/Register'element={<Register userChang ={userChang}></Register>}></Route>
      )
    }return contents
  }


  return (
    <div className="App">
        <HeaderAdmin userName={userData.name} name={name}/>
          <Routes>
            {getContent()}
            {/* <Route path='/' element={<LoginForm userData={userData} changeMode={changeMode} setName={setName}></LoginForm>} />
            <Route path='/Throttle' element={<R095_reactThrottle name={name} navigate={navigate}></R095_reactThrottle>} />*/}
            <Route path='/Register'element={<Register userChang ={userChang}></Register>}></Route> 
          </Routes>
        <Footer/>
        </div>
  );
}

export default App;



//




// import React, {useState} from 'react';
// import { Route, Routes } from "react-router-dom";
// import { Navigate } from 'react-router-dom';
// import '../css/new.css'


// // css
// // import '../css/new.css';



// // header
// import HeaderAdmin from './Header/Header admin';
// // footer
// import Footer from './Footer/Footer';
// // login
//   import LoginForm from './LoginForm';
//   import R095_reactThrottle from './R095_reactThrottle';
//     const App =()=> {
//     //user info
//     const userdata ={
//     id : 'dnals310',
//     pass : 'dnals9264'
//     }
//     //default, change
//     const [name, setName]=useState('');
//     const [mode, setMode]=useState('app');
//     const [userId, setUserId]=useState(userdata.id);
  
//     // console.log(userId) check
//     const [userpass, setUserpass]=useState(userdata.pass);
  
//     // console.log(pass) check
  
//     //mode,name,event
//     const changeMode=()=>{
//     setName('최우민');
//     setMode('mypage');
//     Navigate('/Throttle')
//     // console.log(name);
//     // console.log(mode);
//     }


//     //page logic
//     const getContents=()=>{
//     // console.log(id) check
//     let contents=[];
//     if(mode === 'app'){
//         contents.push(
//         [<Route path='/' 
//         element={<LoginForm  changeMode={changeMode}
//                     userId={userId}
//                     userpass={userpass}        
//         ></LoginForm>}
//         />]
//       );
//     }else if(mode === 'mypage' && userId === 'dnals310' && userpass === 'dnals9264'){
//       contents.push(
//         [<Route path='/Throttle' element={<R095_reactThrottle/>}/>]
//       );
//     }return contents;
//   }
//   // console.log(changeMode) 함수 작동
//   return(
//     <div className="App">
//         <HeaderAdmin name={name}/> 
//           <Routes>
//             {getContents()}
//           </Routes>
//         <Footer/>
//         </div>
//   );
// }
// export default App;









// import React, { useState } from 'react';
// import { Route, Routes } from "react-router-dom";
// import '../css/new.css'

// // css
// // import '../css/new.css';

// // header
// import HeaderAdmin from './Header/Header admin';

// // footer
// import Footer from './Footer/Footer';

// // login
// import LoginForm from './LoginForm';

// import reactThrottle from './R095_reactThrottle';

// const App = () => {
//   //user info
//   const userInfo = {
//     id : 'dnals310',
//     pass :'dnals9264',
//   }
  
//   const [name, setName] = useState('');
//   const [mode, setMode] = useState('app');
  
//   const[ID, setID] = useState(userInfo.id);
//   const[pas, setPas] = useState(userInfo.pass);

// //name change function
//   let changeMode = (n) =>{

//     setName(n)
//     setMode('mypage')
//   }


  


//   let getContent = (id,pass) =>{
//     let contents = [];
//     if(mode === 'app'){
//       if(ID === 'dnals310' && pas === 'dnals9264')
//       contents.push(
//         [<Route path='/' element={<LoginForm changeMode={changeMode}
//                                               userInfoId={ID}
//                                               userInfoPs={pas}
//         ></LoginForm>} />],
//           [<Route path='/Throttle' element={<reactThrottle></reactThrottle>}/>]
//       )
//     }else if(mode === 'mypage'){
      
//       contents.push(
//         [<Route path='/Throttle' element={<reactThrottle></reactThrottle>}/>]
//         )
//     }
//     return contents
//   }


//     return (
//       <div className="App">
//         <HeaderAdmin
//         changeMode={changeMode}
//         name={name}
//         />
//         <Routes>
//           {getContent()}
//           </Routes>
        
//         <Footer/>
//       </div>
//     );
//   }

// export default App;