import styled from "styled-components";

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 1.2rem 2.4rem;
  background: linear-gradient(135deg, #d0bb57, #f2d675);
  color: #0f1624;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  }
`;

export default CTAButton;
