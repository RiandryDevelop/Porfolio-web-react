import styled from 'styled-components';

export const HeaderArea = styled.div`
  max-width: 900px;
  margin: 0 auto 4rem auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  /* 📲 Tablet */
  @media (max-width: 900px) {
    margin-bottom: 3rem;
    gap: 1.6rem;
  }

  /* 📱 Mobile */
  @media (max-width: 640px) {
    margin-bottom: 2.5rem;
    gap: 1.4rem;
  }
`;

export const SearchInput = styled.input`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 14px;
  padding: 0.9rem 1.4rem;
  font-size: 1.6rem;
  color: white;
  width: 360px;
  transition: border 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #9cc9e3;
    box-shadow: 0 0 0 2px rgba(156, 201, 227, 0.25);
  }

  /* 📲 Tablet */
  @media (max-width: 900px) {
    width: 300px;
    font-size: 1.5rem;
  }

  /* 📱 Mobile */
  @media (max-width: 640px) {
    width: 100%;
    font-size: 1.4rem;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }
`;


export const SearchHint = styled.small`
  display: block;
  margin-top: 0.6rem;
  opacity: 0.6;
  font-size: 1.2rem;

  kbd {
    background: rgba(255,255,255,0.1);
    border-radius: 6px;
    padding: 0.2rem 0.5rem;
    font-size: 1.1rem;
    margin: 0 0.2rem;
  }
`;


export const Img = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;

  /* 📲 Tablet */
  @media (max-width: 900px) {
    height: 200px;
  }

  /* 📱 Mobile */
  @media (max-width: 640px) {
    height: 180px;
  }
`;



export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  gap: 3rem;
  place-items: stretch;

  /* 🖥 Desktop grande */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 📲 Tablet */
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 2.5rem 1.5rem;
    gap: 2.5rem;
  }

  /* 📱 Mobile */
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
    gap: 2rem;
  }
`;


export const BlogCard = styled.div`
  background: rgba(255,255,255,0.03);
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.35);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.5);
  }

  /* 📲 Tablet */
  @media (max-width: 900px) {
    border-radius: 16px;
  }

  /* 📱 Mobile */
  @media (max-width: 640px) {
    border-radius: 14px;
  }
`;



export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const SearchWrapper = styled.div`
  position: relative;
`;


export const HeaderThree = styled.h3`
  font-size: 2.1rem;
  font-weight: 600;
  line-height: 1.35;
  color: #ffffff;

  @media (max-width: 900px) {
    font-size: 1.9rem;
  }

  @media (max-width: 640px) {
    font-size: 1.7rem;
  }
`;



export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  padding: 0 2rem;
  margin-bottom: 1.6rem;
  color: #dfe3e6;
  font-size: 1.45rem;
  line-height: 1.6;

  strong {
    color: #9cc9e3;
  }

  @media (max-width: 900px) {
    padding: 0 1.6rem;
    font-size: 1.4rem;
  }

  @media (max-width: 640px) {
    padding: 0 1.2rem;
    font-size: 1.35rem;
  }
`;




export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  padding: 1.5rem 2rem 2rem;
  justify-content: center;

  @media (max-width: 640px) {
    padding: 1.2rem;
  }
`;


export const Tag = styled.li`
  background: rgba(255,255,255,0.08);
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-size: 1.2rem;
  color: #e6e6e6;
`;
