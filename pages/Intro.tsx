import styled from 'styled-components';

const Intro = () => {
  return (
    <>
      <Wrapper>
        <h1>
          <img className="__logo" src="/logo.png"></img>
        </h1>
        <Title>
          <div className="left-container">
            <h2 className="__text">오직 숙명인을 위한 커뮤니티!</h2>
            <img className="__title-logo" src="/long_logo.png"></img>
            <p>
              <img className="__download-btn" src="/ios_download.png"></img>
              <img className="__download-btn" src="/google_download.png"></img>
            </p>
          </div>
          <figure className="__bird" data-aos="fade-down">
            <img src="/bird.png"></img>
          </figure>
        </Title>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 100%;
  background-color: #4974f5;
  .__logo {
    margin-top: 2rem;
    margin-left: 2.5rem;
  }
`;

const Title = styled.section`
  display: flex;
  margin: auto;

  justify-content: space-around;
  .left-container {
    display: flex;
    flex-direction: column;
    .__text {
      color: white;
      line-height: 2.875rem;
      letter-spacing: -0.006em;
      font-weight: bold;
      padding-top: 33vh;
      margin-bottom: 2.5rem;
    }
    .__title-logo {
      margin-top: 2.5rem;
      margin-bottom: 3.5rem;
    }
    .__download-btn {
      margin-right: 1rem;
    }
  }
`;
export default Intro;
