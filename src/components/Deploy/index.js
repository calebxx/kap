import React from "react";
import "./index.scss";
import Number from "../Data/Number";
import Chart from "../Chart/Chart";
import Entries from "../DataTable/Entries";

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

        <div className="card zd-content-card clearfix">
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
                  <tbody>
                    <tr>
                      <td>
                        <Number
                          number="34.1"
                          title="likes"
                          suffix="k"
                          percent={90}
                        />
                      </td>
                      <td>
                        <Number
                          number="1.1"
                          title="comments"
                          percent={78}
                          suffix="k"
                          color="green"
                        />
                      </td>
                      <td>
                        <Number
                          number="665"
                          title="shares"
                          percent={45}
                          color="red"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="card zd-content-card clearfix">
          <Chart />
        </div>

        <div className="card zd-content-card clearfix">
          <Entries />
        </div>
      </div>
    </div>
  );
};

export default Deploy;
