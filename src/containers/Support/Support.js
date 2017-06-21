import React, { Component } from 'react';
import Helmet from 'react-helmet';

export default class Support extends Component {
  render() {
    return (
      <div>
        <Helmet title="News"/>

        <div id="support" className="container">
          <h1>Support <span className="fa fa-comments"></span></h1>

          <section className="col-md-6">
            <h2>Community support <span className="fa fa-users"></span></h2>

            <p>Ask questions about API Platform on <a href="https://stackoverflow.com/questions/tagged/api-platform.com" target="_blank">Stack Overflow</a> using the <i>api-platform.com</i> tag.</p>
            <p>Chat with the community <a href="https://symfony.com/slack-invite" target="_blank">on the <i>api-platform</i> channel on Symfony's Slack</a>.</p>
          </section>

          <section className="col-md-6">
            <h2>Commercial support <span className="fa fa-ambulance"></span></h2>

            <p><a href="https://les-tilleuls.coop/en" target="_blank">Les-Tilleuls.coop</a> provides professional services for API Platform and Symfony including
              training, development and API design. <a href="https://les-tilleuls.coop/en/contact" target="_blank">Contact us</a> for more information.</p>
          </section>
        </div>
      </div>
    );
  }
}
