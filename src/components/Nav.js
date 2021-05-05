import React, { useState } from "react";
import styled from "styled-components";
import { FaSistrix } from "react-icons/fa";
import fetchJsonp from "fetch-jsonp";

const NavContainer = styled.nav`
  background-color: var(--primary-color);
  height: var(--navbar-height);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 6rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
`

const TextInput = styled.input`
  background-color: var(--secondary-color);
  border: none;
  border-radius: 100px;
  width: var(--navbar-searchbar-width);
  transition: all .2s;
  margin-right: -3.25rem;
  padding: .7rem 2rem;

  :focus {
    width: 100%;
  }
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 40%;
`

const Nav = ({setList, setSearch}) => {
  const [inputText, setInputText] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    let url = `https://itunes.apple.com/search?term=${inputText}&media=music&entity=album&attribute=artistTerm&limit=500`

    fetchJsonp(url)
    .then(response => response.json())
    .then(json => setList(json.results))
    setSearch(inputText);

  }

  const handleChange = e => {
    setInputText(e.target.value);
  }

  return (
    <NavContainer>
      <Form onSubmit={handleSubmit}>
        <TextInput type="text" placeholder="Search..." onChange={handleChange}/>
        <Button>
          <FaSistrix />
        </Button>
      </Form>
    </NavContainer>
  );
};

export default Nav;
