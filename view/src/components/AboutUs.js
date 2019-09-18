import React, { Component } from "react";

export default class Contact extends Component {
  submitHandler = e => {
    e.preventDefault();

    if (this.name.value.length > 0 && this.email.value.length > 0)
      this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div className="min_header">
          <div className="container">
            <h1 className="hidden-sm">About Us</h1>
            <p>
              Code TalkerZ Started Because Of The Many Issues Appeare When The
              Coder Coding.
              <br />
              That's Why We Built This Website To Help The Coders Each Other.{" "}
              <br />
              Along The Way, The Coding Will Be Easier. We Want To Be <br />
              The Best And First Questions Answers Website.
            </p>
            {/* <button className="btn btn-info">Create ANew Account</button> */}
          </div>
        </div>
        <div className="container">
          <div className="text-center">
            {/* <h1>About Us</h1>
        <p>
          Code TalkerZ started because of the many issues appeare when the coder
          coding. That's why we built this website to help the coders each
          other. Along the way, the coding will be easier. We want to be the
          best and first questions Answers website.
        </p> */}
            ​
            {/* <form onSubmit={this.submitHandler}>
          <input
            ref={elem => (this.name = elem)}
            type="text"
            placeholder="Name"
          />
          <input
            ref={elem => (this.email = elem)}
            type="email"
            placeholder="Email"
          />
          <input type="submit" value="Send" />
        </form> */}
            ​
            <div className="side_about_me animated zoomInRight">
              <h2 className="mt-5 mb-5">team Members</h2>
              <div className="container" style={{ color: "#000" }}>
                <div className="row">
                  <div className="col-3">
                    <div className="card card_costume">
                      <img
                        src="https://avatars2.githubusercontent.com/u/36342474?s=460&v=4(25 kB)
https://avatars2.githubusercontent.com/u/36342474?s=460&v=4
"
                        alt="sqoor"
                        style={{
                          width: "100%"
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title ">Abdullah Alsqoor</h5>
                        <h6 className="card-title min_color">
                          Full stack web Developer
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="card card_costume">
                      <img
                        src="https://avatars1.githubusercontent.com/u/24958968?s=460&v=4(20 kB)
                        https://avatars1.githubusercontent.com/u/24958968?s=460&v=4
"
                        alt="sqoor"
                        style={{
                          width: "100%"
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title ">Ahmad Alaarg</h5>
                        <h6 className="card-title min_color">
                          Full stack web Developer
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="card card_costume">
                      <img
                        src="https://avatars3.githubusercontent.com/u/51743787?s=460&v=4(8 kB)
                        https://avatars3.githubusercontent.com/u/51743787?s=460&v=4
"
                        alt="sqoor"
                        style={{
                          width: "100%"
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title ">Asma Alfauri</h5>
                        <h6 className="card-title min_color">
                          Full stack web Developer
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className="col-3">
                    <div className="card card_costume">
                      <img
                        src="https://scontent.famm6-1.fna.fbcdn.net/v/t1.0-9/31958006_769376826605044_1517162442436640768_n.jpg?_nc_cat=101&_nc_oc=AQmTEWBpJNjdh1T3ZH0ilyQCNkWVTqZinUwMprEvZ_s2IrPkpy5XdW1-io-y4RzCzR8&_nc_ht=scontent.famm6-1.fna&oh=394aebfc5a71c56d942b86b103539dc0&oe=5DEFE6ED"
                        alt="sqoor"
                        style={{
                          width: "100%"
                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title ">Moath Gharib</h5>
                        <h6 className="card-title min_color">
                          Full stack web Developer
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
