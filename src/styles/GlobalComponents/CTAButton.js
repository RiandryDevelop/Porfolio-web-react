import styled from "styled-components";
import { motion } from "framer-motion";

const CTAButton = styled(motion.a)`
  display: inline-block;
  margin-top: 2rem;
  padding: 1.2rem 2.4rem;
  background: linear-gradient(135deg, #d0bb57, #f2d675);
  color: #0f1624;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
`;

export default CTAButton;
