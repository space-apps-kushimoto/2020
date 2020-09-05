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
          <Icon name="info circle" />
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
          <Icon name="info circle" />
          <Header.Content>参加費用</Header.Content>
        </Header>
        <p>無料</p>
      </Segment>
      <Segment vertical>
        <Header as="h3">
          <Icon name="info circle" />
          <Header.Content>タイムテーブル</Header.Content>
        </Header>
        <Segment vertical>
          <Header as="h3">
          <Icon name="info circle" />
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
              <td>10:00 - 11:00</td>
              <td>オリエンテーション</td>
              </tr>
              <tr>
              <td>11:00 - 12:00</td>
              <td>チームビルディング</td>
              </tr>
              <tr>
              <td>12:00 - 17:00</td>
              <td>ハッカソン（ランチはグループごとに）</td>
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
          <Icon name="info circle" />
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
              <td>9:30 -10:00</td>
              <td>スタートミィーテング</td>
              </tr>
              <tr>
              <td>10:00 ~ 10:30</td>
              <td>缶サット発射@和歌山・パブリックビューイング</td>
              </tr>
              <tr>
              <td>10:30 ~ 15:00</td>
              <td>発表準備</td>
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
        </Segment>
        <p>スケジュールは変更になる可能性があります</p>
      </Segment>
      <Segment vertical>
        <Header as="h3">
          <Icon name="info circle" />
          <Header.Content>参加申し込み方法</Header.Content>
        </Header>
        <p>別途ご案内いたします。</p>
      </Segment>
    </Container>
  );
};

export default withLayout(SchedulePage);
