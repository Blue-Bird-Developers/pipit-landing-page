import styled from 'styled-components';

const Bookmark = () => {
  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <div className="left-container">
            <h3>
              <span className="highlight">기다리던 공지</span>가 있나요?
            </h3>
            <span className="__desc">
              <strong>키워드 등록</strong>을 통해 원하는 공지를 바로 받을 수 있어요. <br />
              교내 여러 활동과 프로그램도 알려드려요!
            </span>
          </div>
          <div className="right-container">
            <figure className="__phone-img">
              <img src="/bookmark.png"></img>
            </figure>
          </div>
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  height: 100%;
  background-color: #4974f5;
`;

const ContentWrapper = styled.section`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .right-container {
    padding-top: 25vh;
    .__phone-img {
      bottom: 0;
      width: 40%;
    }
  }
  .left-container {
    padding-top: 40vh;
    h3 {
      color: white;
      font-weight: bold;
      font-size: 40px;
      line-height: 60px;
      margin-bottom: 1.5rem;
      .highlight {
        display: inline;
        box-shadow: inset 0 -55px 0 rgba(255, 255, 255, 0.3);
        border-radius: 28px;
        z-index: 1;
      }
    }
    .__desc {
      font-size: 16px;
      line-height: 26px;
      color: #d9e4ff;
    }
  }
`;

export default Bookmark;
