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
        <p>未定</p>
        {/* <Segment vertical>
          <Header as="h3">
          <Icon name="info circle" />
          <Header.Content>10月2日(金) </Header.Content>
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
              <td>21:00 - 23:00</td>
              <td>前夜祭</td>
              </tr>
            </tbody>
          </table>
        </Segment> */}
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
