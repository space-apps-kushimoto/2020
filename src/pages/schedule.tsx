import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import { withLayout } from "../components/Layout";

const SchedulePage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>開催概要</Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <Header as="h3">
          <Header.Content>審査員</Header.Content>
        </Header>
        <p>50音順</p>
        <div>
          <p>大阪電気通信大学 情報通信工学部 情報工学科 教授</p>
          <p>古崎 晃司様</p>
          <p>宇宙ビジネスメディア「宙畑」編集長</p>
          <p>中村友弥様</hp>
        </div>
      </Segment>
      <Segment vertical>
        <Header as="h3">
          <Header.Content>場所</Header.Content>
        </Header>
        <p>オンライン</p>
        <ul>
          <li>Zoomを使い開催します。</li>
          <li>ZoomURLは当日までにお伝え致します</li>
        </ul>
      </Segment>
      <Segment vertical>
        <Header as="h3">
          <Header.Content>参加費用</Header.Content>
        </Header>
        <p>無料</p>
      </Segment>
      <Segment vertical>
        <Header as="h3">
          <Header.Content>タイムテーブル</Header.Content>
        </Header>
        <Segment vertical>
          <Header as="h3">
          <Header.Content>10月3日(土) </Header.Content>
          </Header>
          <table className="timetable">
            <thead>
              <tr>
              <th>時間</th>
              <th>内容</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>9:30 -10:00</td>
              <td>受付</td>
              </tr>
              <tr>
              <td>10:00 - 10:30</td>
              <td>オリエンテーション</td>
              </tr>
              <tr>
              <td>10:30 - 11:00</td>
              <td>ブレインストーミング（課題出し）</td>
              </tr>
              <tr>
              <td>11:00 - 11:30</td>
              <td>チーム分け</td>
              </tr>
              <tr>
              <td>11:30 - 12:00</td>
              <td>テーマ決め</td>
              </tr>
              <tr>
              <td>12:00 - 13:00</td>
              <td>ランチ + 雑談</td>
              </tr>
              <tr>
              <td>13:00 - 14:00</td>
              <td>テーマ発表用のスライド作成</td>
              </tr>
              <tr>
              <td>14:00 - 15:00</td>
              <td>テーマ発表</td>
              </tr>
              <tr>
              <td>15:00 - 17:00</td>
              <td>ハッカソン</td>
              </tr>
              <tr>
              <td>17:00 - 18:00</td>
              <td>中間報告</td>
              </tr>
              <tr>
              <td>18:00 - </td>
              <td>フリータイム</td>
              </tr>
            </tbody>
          </table>
        </Segment>
        <Segment vertical>
          <Header as="h3">
          <Header.Content>10月4日（日）</Header.Content>
          </Header>
          <table className="timetable">
            <thead>
              <tr>
              <th>時間</th>
              <th>内容</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>10:00 ~ 10:30</td>
              <td>缶サット発射@和歌山・パブリックビューイング（自由参加）</td>
              </tr>
              <tr>
              <td>13:00 ~ 13:30</td>
              <td>オリエンテーション</td>
              </tr>
              <tr>
              <td>13:30 ~ 16:00</td>
              <td>ハッカソン</td>
              </tr>
              <tr>
              <td>16:00 - 17:00</td>
              <td>成果発表</td>
              </tr>
              <tr>
              <td>17:00 - 17:30</td>
              <td>審査</td>
              </tr>
              <tr>
              <td>17:30 - 18:00</td>
              <td>審査結果発表・表彰</td>
              </tr>
            </tbody>
          </table>
          <br/>
          <p>スケジュールは変更になる可能性があります</p>
        </Segment>
      </Segment>
      <Segment vertical>
        <Header as="h3" id="registration">
          <Header.Content>参加申し込み方法</Header.Content>
        </Header>
        <a href={"https://spaceappsjapan.connpass.com/event/188313/"}>connpassよりお申し込みください。</a>
      </Segment>
    </Container>
  );
};

export default withLayout(SchedulePage);
