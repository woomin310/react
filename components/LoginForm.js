import React from 'react';
import { Link } from 'react-router-dom'
import '../css/new.css'

const LoginForm =(props)=> {
    const _chagneRegister = props.chagneRegister
    const _changeMode = props.changeMode;
    const _userData = props.userData;
    const _setName = props.setName

    const checking =(e)=>{
        e.preventDefault();
        const id_element = document.getElementById('id_val');
        const pass_element = document.getElementById('password_val')
        if(_userData.id === id_element.value && _userData.password === pass_element.value) {
            alert('로그인에 성공했습니다.');
            _changeMode(e);
            _setName(_userData.name);
        }else{
            alert('로그인에 실패했습니다.');
        }
        console.log(_userData);
    }







        return (
            <section className="main">
                <div className="m_login">
                <h3><span><img src={require("../img/main/log_img.png")} alt="" />
                </span>LOGIN</h3>
                <div className="log_box">
                    <form  onSubmit={(e)=>{checking(e)}}>
                    <div className="in_ty1">
                        <span><img src={require("../img/main/m_log_i3.png")} alt="" /></span>
                        <input type="text" id="id_val" name="id" placeholder="ID" />
                    </div>
                    <div  className="in_ty1">
                        <span className="ic_2">
                            <img src={require("../img/main/m_log_i2.png")} alt="" />
                        </span>
                        <input type="password" id="password_val" placeholder="비밀번호" />
                    </div>
                    <ul className="af">
                        <li><Link to={'/register'} onClick={(e)=>_chagneRegister(e)}>회원가입</Link></li>
                        <li className="pwr_b"><a href="#n">비밀번호 재설정</a></li>
                    </ul>
                    <button className="s_bt" type="submit">로그인</button>
                    </form>
                </div>
                </div>
            </section>
        );
}
export default LoginForm;



















// import React from 'react';
// import { Link } from 'react-router-dom'
// import '../css/new.css'

// const LoginForm =(props)=> {
//     //app change
//     const _changeMode = props.changeMode;
//     const Userid = props.userid
//     const Userpass = props.userpass

//     const handleSubmit = (event) =>{
//         event.preventDefault()
//         alert(`로그인 시도 중`);
//         _changeMode(Userid,Userpass)
//     }


//         return (
//             <section className="main">
//                 <div className="m_login">
//                 <h3><span><img src={require("../img/main/log_img.png")} alt="" />
//                 </span>LOGIN</h3>
//                 <div className="log_box">
//                     <form onSubmit={handleSubmit}>
//                     <div className="in_ty1">
//                         <span><img src={require("../img/main/m_log_i3.png")} alt="" /></span>
//                         <input type="text" id="email_val" name="email" placeholder="이메일" va />
//                     </div>
//                     <div  className="in_ty1">
//                         <span className="ic_2">
//                             <img src={require("../img/main/m_log_i2.png")} alt="" />
//                         </span>
//                         <input type="password" placeholder="비밀번호" />
//                     </div>
//                     <ul className="af">
//                         <li><Link to={'/register_check'}>회원가입</Link></li>
//                         <li className="pwr_b"><a href="#n">비밀번호 재설정</a></li>
//                     </ul>
//                     <button className="s_bt" type="submit" >로그인</button>
//                     </form>
//                 </div>
//                 </div>
//             </section>
//         );
// }

// export default LoginForm;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'
// import '../css/new.css'

// const LoginForm = (props) =>{
//     //app data Deliver
//     let _changeMode =props.changeMode; // app [setMode, setName, e]
//     let usID = props.userInfoId     // app user ID
//     let usPs = props.userInfoPs      // app user Pass



//     const hendlechangeId =(event) =>usID(event.target.value)
//     const headlechangePs =(event) =>usPs(event.target.value)

//     //Sumbit function
//     let hendleSumbit = (event)=>{
//         event.preventDefault();
//         alert(`로그인 시도 중`)
//         _changeMode()
//     }


//         return (
//             <section className="main">
//                 <div className="m_login">
//                 <h3><span><img src={require("../img/main/log_img.png")} alt="" />
//                 </span>LOGIN</h3>
//                 <div className="log_box">
//                     <form onSubmit={hendleSumbit}>
//                     <div className="in_ty1">
//                         <span><img src={require("../img/main/m_log_i3.png")} alt="" /></span>
//                         <input type="text" id="email_val" name="email" placeholder="이메일"   />
//                     </div>
//                     <div  className="in_ty1">
//                         <span className="ic_2">
//                             <img src={require("../img/main/m_log_i2.png")} alt="" />
//                         </span>
//                         <input type="password" placeholder="비밀번호" />
//                     </div>
//                     <ul className="af">
//                         <li><Link to={'/register_check'}>회원가입</Link></li>
//                         <li className="pwr_b"><a href="#n">비밀번호 재설정</a></li>
//                     </ul>
//                     <button className="s_bt" type="submit" >로그인</button>
//                     {/* <input type='sumbit' id='btn' value='로그인'></input> */}
//                     </form>
//                 </div>
//                 </div>
//             </section>
//         );
//     }


// export default LoginForm;