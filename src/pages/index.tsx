import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon
} from "semantic-ui-react";

const IndexPage = (props: LayoutProps) => (
  <div>
    {/* Master head */}
    <Segment id={"slider"} vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link}
        pathname={props.location.pathname}
        items={menuItems}
        inverted
      />
      <Container text>
        <img src={"/logo.svg"} id="first-view-logo" className="animated fadeInUp" alt="NASA SPACE APPS CHALLENGE KUSHIMOTO"/>
        <Header inverted as="h2">
          NASA 主催の世界同時ハッカソン！
        </Header>
        <Header inverted as="h2">
          2020年10月2日(金) - 10月4日(日) @ オンライン開催
        </Header>
        <a href={"/schedule/#registration"} className={"ui huge primary button register-btn"}>無事終了致しました!</a>
      </Container>
    </Segment>
    {/* About this starter */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Header>NASA International Space Apps Challenge について</Header>
            <p>
              NASA International Space Apps Challenge とは、米国の NASA
              が毎年主催する世界同時ハッカソンで、NASAが公開しているオープンデータを使用したアプリケーションの開発を競いあいます。
            </p>
            <p>
              2018年は世界中の75カ国200会場において18,000人が参加し、福島県会津若松市、​東京都、愛知県豊橋市、大阪市、神戸市、山口県宇部市の計6会場で開催されました。
            </p>
            <p>
              そして10月に開催される今年の Space Apps Challenge
              は、本州最南端の町、串本でも開催されることになりました。
            </p>
          </Grid.Column>
          <Grid.Column width="6" floated="right">
            <img src={"/wrapper-img.jpg"} alt="" className="img-circle"></img>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment id="feature" vertical textAlign='right'className="stripe alternate feature">
      <Grid
        columns="3"
        textAlign="center"
        divided
        relaxed
        stackable
        className="container"
      >
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="ship"></Icon>串本について
            </Header>
            <p>本州最南端の町、和歌山県串本町は、黒潮の恩恵をうけた美しい海と世界遺産熊野古道に囲まれたとても美しい町です。</p>
            <p>そんな串本町に、日本ではじめての民間ロケット発射場が2021年打ち上げにむけて建設されることが発表されました。</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid
        columns="3"
        textAlign="center"
        divided
        relaxed
        stackable
        className="container"
      >
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="users"></Icon>ボランティア募集中(2020年度のボランティアの募集は終了致しました)
            </Header>
            <p>Space Apps Challenge Kushimoto は、ボランティアによって運営されています。宇宙や IT に興味があって串本が大好きな人たちのボランティアを募集しています。</p>
            <p>ご連絡はこちらから</p>
            <p><a href="mailto:spaceappskushimoto@gmail.com"><Icon name="mail"></Icon>spaceappskushimoto@gmail.com</a></p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);

export default withLayout(IndexPage);
