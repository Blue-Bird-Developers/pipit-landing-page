import styled from 'styled-components';

const Notice = () => {
  return (
    <>
      <Wrapper>
        <div className="left-container">
          <figure className="__phone-img">
            <img src="./notice-phone.png"></img>
          </figure>
        </div>
        <div className="right-container">
          <h3>
            <span className="highlight">학교 공지사항</span>을 피핏에서 <br></br>쉽고 빠르게 확인해요!
          </h3>
          <span className="__desc">
            Snowe, Snoway 등 학교 공지사항을 <strong>전부 한 눈에</strong> 볼 수 있어요.
          </span>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 70%;
  height: 100%;
  margin: auto;
  justify-content: space-between;
  .__phone-img {
    position: absolute;
    bottom: 0;
    width: 40%;
  }
  .right-container {
    padding-top: 40vh;
    h3 {
      color: #345ce0;
      font-weight: bold;
      font-size: 40px;
      line-height: 60px;
      margin-bottom: 1.5rem;
      text-align: right;
      .highlight {
        display: inline;
        box-shadow: inset 0 -55px 0 rgba(255, 216, 89, 0.75);
        border-radius: 28px;
      }
    }
    .__desc {
      font-size: 16px;
      line-height: 26px;
      color: #838c9e;
    }
    .__notice-img {
      width: 20rem;
    }
  }
`;

export default Notice;
