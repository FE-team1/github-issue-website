<<<<<<< HEAD

import styled from "styled-components";


const NavBar = () => {
  // const dispatch = useDispatch();
  // const issue = useSelector(state => state.issue);
  // console.log(issue);

  // useEffect(() => {
  //   dispatch(getIssue({ title:'example' }))
  // }, [])

    return (
        <Wrapper>
            <Header>
              <GithubIcon src='/img/38401.png'></GithubIcon>
              <h3 style={{paddingTop:"27px"}}>Git Issue.net</h3>
            </Header>
            <Container>
              <h3>Issue</h3>
              <ul>
                {/* 나중에 link나 a태그 넣어서 연결 */}
                <li>get list Issues</li>
              </ul>
            </Container>
        </Wrapper>
=======
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";




const NavBar = () => {
  const menus = [
    { name: "get list Issues", path: "/" },
  ];
    return (
      <Side>
        <Wrapper>
            <Header>
                <GithubIcon src='/img/38401.png'></GithubIcon>
                <h3 style={{paddingTop:"27px"}}>Git Issue.net</h3>
            </Header>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              exact
              style={{color: "gray", textDecoration: "none"}}
              to={menu.path}
              key={index}
              activeStyle={{color: "black"}}
            >
              <h3>Issue</h3>
              <SidebarItem
                menu={menu}
              />
              </NavLink>
              );
        })}
      </Menu>
        </Wrapper>
          </Side>
>>>>>>> 5011cfecc6602e5eb642b4aec633c53b39e357e0
    )
}


export default NavBar;

<<<<<<< HEAD
=======
const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  `

>>>>>>> 5011cfecc6602e5eb642b4aec633c53b39e357e0
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`

const Header = styled.div`
  display: flex;
  font-size: 1.4rem;
`

<<<<<<< HEAD
const Container = styled.div`
  margin-left: 60px;
`

=======
const Menu = styled.div`
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`



>>>>>>> 5011cfecc6602e5eb642b4aec633c53b39e357e0
const GithubIcon = styled.img`
  width: 80px;
  height: 80px;
  padding-right: 10px;
`