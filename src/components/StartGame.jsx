import styled from "styled-components";
import { Button } from "../styled/Button";
const StartGame = ({toggle}) => {
  return (
    <Container>

        <div>
            <img src="/images/dices.png" alt="" />
        </div>

        <div className  = "content">
            <h1>Dice Game</h1>

            <Button onClick={toggle} >Play Now</Button>

        </div>

    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

    .content  {
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
            
        
    }
    @media only screen and (max-width: 600px) {
        div img{
            /* width: 500px; */
            width: 100%;
            margin: 0 auto;
            margin-top: 100px;
        }
        .content  {
        h1{
            font-size: 70px;
            white-space: nowrap;
            margin: 0 auto;
            margin-top: 120px;
        }
            
        
    }
        display: flex;
        flex-direction: column;
        height: 100vh;
        display: flex;
        gap: 50px;
        margin: 0 auto;
        align-items: center;
  }

  @media only screen and (max-width: 400px) {
        div img{
            /* width: 350px; */
            /* height: 380px; */
            width: 100%;
            margin: 0 auto;
            margin-top: 140px;
        }
        .content  {
        h1{
            font-size: 30px;
            white-space: nowrap;
            margin:0 auto;
            margin-top: 120px;
        }
            
        
    }
        display: flex;
        flex-direction: column;
        gap: 50px;
        height: 100vh;
        display: flex;
        margin: 0 auto;
        align-items: center;
  }
   
`;
