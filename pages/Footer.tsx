import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <Wrapper>
        <h3>Pipit Coming Soon!</h3>
        <figure className="__footer-img" data-aos="zoom-in">
          <img src="/footer-bird.png"></img>
        </figure>
        <p className="__btn-group">
          <img className="__download-btn" src="/ios_download_black.png"></img>
          <img className="__download-btn" src="/google_download_black.png"></img>
        </p>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: bold;
    font-size: 32px;
    line-height: 52px;
    color: #345ce0;
    margin-bottom: 4rem;
  }
  .__btn-group {
    display: flex;
    align-self: center;
  }
  .__footer-img {
    margin-bottom: 2rem;
    align-self: center;
  }
  .__download-btn {
    margin-right: 1rem;
  }
`;
export default Footer;
