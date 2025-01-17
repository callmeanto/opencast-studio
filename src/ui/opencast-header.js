//; -*- mode: rjsx;-*-
import React from 'react';
import styled from 'styled-components/macro';
import LanguagesChooser from './languages-chooser';

const BetaBubble = styled.span`
  position: relative;
  top: 4px;
  font-size: 8pt;
  vertical-align: top;
  display: inline;
  border: 1px solid #888;
  border-radius: 5px;
  padding: 2px;
  color: #888;

  @media (max-width: 768px) {
    display: none;
  }
`;

function Brand(props) {
  return (
    <span className={props.className}>
      <picture>
        <source
          media="(min-width: 769px)"
          srcSet={`${process.env.PUBLIC_URL}/opencast-studio.svg`}
        />
        <img
          src={`${process.env.PUBLIC_URL}/opencast-studio-small.svg`}
          alt="Opencast Studio"
          css={`
            height: 50px;
          `}
        />
      </picture>

      <BetaBubble>beta</BetaBubble>
    </span>
  );
}

function OpencastHeader(props) {
  return (
    <header className={props.className}>
      <Brand />

      <LanguagesChooser
        languages={props.languages}
        chosenLanguage={props.chosenLanguage}
        onSelectLanguage={props.onSelectLanguage}
      />
    </header>
  );
}

const StyledHeader = styled(OpencastHeader)`
  height: 3rem;
  line-height: 3rem;
  background: #333;
  display: flex;
  justify-content: space-between;

  ${LanguagesChooser} {
    color: white;
  }
`;

export default StyledHeader;
