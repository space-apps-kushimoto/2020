import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import { withLayout } from "../components/Layout";

const CodeOfConductPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>Code Of Conduct</Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <Header as="h3">
          <Header.Content>1. 目的</Header.Content>
        </Header>
        <p>Space Apps Challenge Kushimoto は、私たちのコミュニティが誰にでも真にオープンであるべきだと考えています。このため、私たちは性別・性的指向・身体障害・民族・宗教・好みの OS やプログラミング言語、テキストエディターにかかわらず、誰に対してもフレンドリーで安全で快適な環境を提供できるよう尽力します。
          <br/>
          <br/>
          この行動規範では、参加者の行動に求めることと、受け入れがたい行為が招く結果について要点をまとめています。すべてのスポンサー、ボランティア、一般来場者、その他の参加者の皆さんが、誰にとっても安全で快い体験ができるカンファレンスを実現するために協力してくれることを歓迎します。</p>
      </Segment>
      <Segment vertical>
        <Header as="h3">
          <Header.Content>2. 求められる行動</Header.Content>
        </Header>
        <ul>
          <li>思いやりを持ち、お互いを尊重し、協力的に行動しましょう。</li>
          <li>品位のない、差別的・迷惑な行動や発言は慎みましょう。</li>
          <li>周辺や、他の参加者に気を配りましょう。危険な状況や誰かが困っている事に気づいたら、カンファレンス運営者に知らせましょう。</li>
          <li>偽りのない、能動的なやり方で参加しましょう。そうすることで、Space Apps Challenge Kushimoto の運営に協力し、自分らしいものにできます。</li>
        </ul>
      </Segment>
      <Segment vertical>
        <Header as="h3">
          <Header.Content>3. 受け入れがたい行為</Header.Content>
        </Header>
        <p>
        「受け入れがたい行為」には以下が含まれます。Space Apps Challenge Kushimoto および関連するイベントにおける参加者による威嚇的・迷惑・虐待的・差別的・軽蔑的・屈辱的な行為。 Space Apps Challenge Kushimoto のすべての会場は公衆と共有されている場合があります。そういった場所で他のお客さんの迷惑にならないようにしてください。
        <br/>
        <br/>
        「迷惑行為」には以下が含まれます。性別・性的指向・人種・宗教・障害に関する攻撃的な口頭のコメント、プレゼンスライドを含む公的空間においての裸体や性的画像の不適切な使用、嫌がらせとなる写真撮影や録音、プレゼンその他のイベントに対する継続的な妨害、不適切な身体的接触、歓迎されていない性的な注目。
        </p>
      </Segment>
      <Segment vertical>
        <Header as="h3">
          <Header.Content>4. 受け入れがたい行為が招く結果</Header.Content>
        </Header>
        <p>
        受け入れがたい行為は、他の一般来場者、運営者、会場スタッフ、スポンサー、Space Apps Challenge Kushimoto 会場に来ている他のお客さん、いずれによるものであれ、許容されません。
        <br/>
        <br/>
        受け入れがたい行為をやめるように言われた方は、直ちに応じることが求められます。
        <br/>
        <br/>
        もし参加者が受け入れがたい行為を行った場合は、その人に警告や返金なしにカンファレンスから退場してもらうことも含め、カンファレンスの運営者は自身が適切だと考えるアクションを取る可能性があります。
        </p>
      </Segment>
      <Segment vertical>
        <Header as="h3">
          <Header.Content>5. 受け入れがたい行為を目にした場合・その被害を被った場合</Header.Content>
        </Header>
        <p>
        もし自身が受け入れがたい行為にさらされたり、誰かがそのような行為を受けていたり、その他気になることがあったりした場合は、できるだけ早くカンファレンス運営者にお知らせください。
        <br/>
        <br/>
        Space Apps Challenge Kushimoto チームは、参加者が会場の警備員や地域の警察に連絡するのを手伝ったり、付き添いをしたり、その他の方法で受け入れがたい行為にさらされている方に力を貸すことにより、カンファレンス期間中安心して過ごしていただけるように応対可能です。ボランティアは 【Tシャツ・帽子などの目印】を身につけています。ボンランティアは誰でもカンファレンス運営者に連絡するお手伝いができます。また、ロビーの受付で運営者を呼び出すこともできます。
        </p>
      </Segment>
      <Segment vertical>
        <Header as="h3">
          <Header.Content> 6. 適用範囲</Header.Content>
        </Header>
        <p>イベント参加者すべて (スポンサー、ボランティア、スピーカー、一般来場者、その他のゲスト) が、全イベント会場およびイベントに関連する行事などにおいてこの行動規範に従うことを期待します。</p>
      </Segment>
      <Segment vertical>
        <Header as="h3">
          <Header.Content> 7. 連絡先情報</Header.Content>
        </Header>
        <p>Space Apps Challenge Kushimoto 実行委員会: spaceappskushimoto@gmail.com</p>
      </Segment>
      <Segment vertical>
        <Header as="h3">
          <Header.Content> 8. ライセンスと帰属</Header.Content>
        </Header>
        <p>この行動規範は Open Source Bridge のすばらしい成果をお借りして、当イベントの情報に入れ替えたものです。原文は http://opensourcebridge.org/about/code-of-conduct/ にて Creative Commons 表示 – 継承ライセンスのもとにリリースされています。</p>
      </Segment>
      
    </Container>
  );
};

export default withLayout(CodeOfConductPage);
