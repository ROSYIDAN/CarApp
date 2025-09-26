import styled from "styled-components";
const Wrapper = styled.article`
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: var(--borderRadius);
  :hover {
    box-shadow: var(--shadow-4);
  }
  .img-container {
    display: grid;
    justify-content: center;
  }
  .img-card {
    margin-top: 1rem;
    width: 100%; /* fill the card width */
    max-width: 200px; /* limit max size */
    height: auto;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }

  .footer {
    padding: 1.5rem;
    h4,
    h5 {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-weight: 700;
    }
    p {
      margin-bottom: 1rem;
      color: var(--grey-500);
    }
  }
`;

export default Wrapper;
