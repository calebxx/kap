import React from "react";
import "./index.scss";
import Number from "../Data/Number";

const Deploy = () => {
  return (
    <div className="deploys">
      <div className="zd-content-info">
        <h3>
          <span className="is-muted emoji" role="img">
            {"⭐"}
          </span>
          MustHave Box initialize in mainland of china
        </h3>

        <div className="card zd-content-card">
          <h4 className="zd-content-title">
            <span className="is-muted emoji" role="img">
              {"📽"}
            </span>
            First video try try look on Douyin
          </h4>
          <div className="zd-content-body clearfix">
            <div className="zd-content-media">
              <img
                alt="test"
                src="http://img2.feigua.cn/img/tos-cn-p-0015/3ba44ce6e91d49878a7d458987b92408_1586788995~c5_300x400.jpeg?from=2563711402_large-thumb"
              />
            </div>
            <div className="zd-content-detail">
              <p className="zd-content-text">
                Lorem ipsum dolor <abbr title="sit">sit amet</abbr>, adipisicing
                <a href="#top">consectetur</a> elit, sed do eiusmod tempor
                <strong>incididunt</strong>
              </p>

              <p className="zd-content-description">
                <span className="is-muted">Length:</span> <b>62s</b> |{" "}
                <span className="is-muted">Deploy from</span> 2020-04-01 ~
                2020-06-30 <small className="is-muted">running</small>
              </p>
              <p className="zd-content-tags">
                tags:
                <a href="#top" className="button is-hollow tag-button">
                  Beauty
                </a>
                <a href="#top" className="button is-hollow tag-button">
                  New
                </a>
                <a href="#top" className="button is-hollow tag-button">
                  Lovely
                </a>
                <a href="#top" className="button is-hollow tag-button">
                  Surprise
                </a>
              </p>
              <div className="zd-content-data">
                <table className="table zd-content-table">
                  <tr>
                    <td>
                      <Number
                        number="23.6"
                        title="likes"
                        suffix="k"
                        percent={90}
                      />
                    </td>
                    <td>
                      <Number
                        number="317"
                        title="shares"
                        percent={40}
                        color="red"
                      />
                    </td>
                    <td>
                      <Number
                        number="2"
                        title="comments"
                        percent={80}
                        color="green"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deploy;
