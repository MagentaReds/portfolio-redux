import React, {Component} from "react";

const ProjectEntry = (props) => {
  return (
    <div className={props.col +" portfolio-item pos-relative"}>
      <a href={"#"+props.entry.modal_id} className="portfolio-link" data-toggle="modal">
        <div className="caption zindex10">
          <div className="caption-content">
            <i className="fa fa-search-plus fa-3x"></i>
          </div>
        </div>
        <img src={props.entry.pic_url} className="img-responsive" alt={props.entry.title} />
        <div className="overlay-text">
          <p>{props.entry.title}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectEntry;