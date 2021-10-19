import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail">
          <img className="detail_bgImg" src={location.state.poster} />
          <div className="detail_data">
            <img className="detail_img" src={location.state.poster} />
            <div className="detail_box">
              <div className="detail_name">
                <h3 className="detail_title">{location.state.title}</h3>
                <h5 className="detail_year">({location.state.year})</h5>
              </div>
              <ul>
                {location.state.genres.map((genre, i) => (
                  <li className="detail_genres" key={i}>
                    {genre}
                  </li>
                ))}
              </ul>
              <span className="detail_rating">
                rating : {location.state.rating}
              </span>
              <p className="detail_summary">{location.state.summary}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
