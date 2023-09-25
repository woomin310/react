import React, { useState } from 'react';
import { throttle } from "lodash";
import '../css/new.css'

const Mypage = (props) => {
    let data = props.userData
    let email = data.email.split('@')
    let call = data.핸드폰.split('-')
    let userChang = props.userChang
    let throttleFunc = throttle(() => {
    console.log("Throttle API Call");
}, 1000);
    return (
    <div>
            <section className="sub_wrap" >
                <article className="s_cnt re_1 ct1">
                    <div className="li_top">
                        <h2 className="s_tit1" style={{textAlign: "center"}} >회원정보 수정</h2>
                        <form action='/' onSubmit={(e) =>userChang(e)} name="frm">
                            <div className="re1_wrap">
                                <div className="re_cnt ct2">
                                    <table className="table_ty1">
                                        <tr className="re_email">
                                            <th>이메일</th>
                                            <td>
                                                <input id="email_val" type="text" name="email1" value={email[0]}
                                                    placeholder="이메일을 입력해주세요."/>
                                                <span className="e_goll">@</span>
                                                <input id="email_val2" type="text" name="email1" value={email[1]}></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>비밀번호</th>
                                            <td>
                                                <input id="pwd_val" type="password" name="password1" value={data.password}
                                                    placeholder="비밀번호를 입력해주세요." />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>비밀번호 확인</th>
                                            <td>
                                                <input id="pwd_cnf_val" type="password" name="password2" value={data.password}
                                                    placeholder="비밀번호를 다시 입력해주세요." />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>성명</th>
                                            <td>
                                                <input id="name_val" type="text" name="userName" value={data.name}
                                                    placeholder="성명을 입력해주세요."/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>소속 기관</th>
                                            <td>
                                                <input id="org_val" type="text" name="organization"
                                                    placeholder="소속 기관명을 입력해주세요." value={data.소속기관} /> 
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>전공</th>
                                            <td>
                                                <input id="major_val" type="text" name="specialization" value={data.전공}
                                                    placeholder="전공을 입력해주세요." />
                                            </td>
                                        </tr>
                                        <tr className="tr_tel">
                                            <th>핸드폰</th>
                                            <td>
                                                <span className="tel_dot">-</span>
                                                <input id="phone2_val" name="phone2" max="9999"  value={call[1]}
                                                    maxlength="4" />
                                                <span className="tel_dot">-</span>
                                                <input id="phone3_val" name="phone3" max="9999" value={call[2]}
                                                    maxlength="4" />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="btn_confirm">
                                <button className="bt_ty bt_ty2 submit_ty1" type="submit">수정완료</button>
                            </div>
                        </form>
                    </div>
                </article>
            </section>
        </div>
    )
  }

export default Mypage;