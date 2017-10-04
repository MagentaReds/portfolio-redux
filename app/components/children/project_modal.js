import React, {Component} from "react";

const ProjectModal = (props) => {
  
  return  (
    <div className="portfolio-modal modal fade" id={props.entry.modal_id} tabIndex="-1" role="dialog" aria-hidden="true">
      <div className="modal-content">
        <div className="close-modal" data-dismiss="modal">
          <div className="lr">
            <div className="rl">
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <div className="modal-body">
                <h2>{props.entry.title}</h2>
                <p>{props.entry.tech}</p>
                <hr className="star-primary" />
                <img src={props.entry.pic_url} className="img-responsive img-centered" alt="" />
                <p>{props.entry.desc}</p>
                <ul className="list-inline item-details">
                  <li>Deploy:
                    <strong><a target="_blank" href={props.entry.deploy_url}>{props.entry.deploy_url}</a>
                    </strong>
                  </li>
                  <li>Github Repo:
                    <strong><a target="_blank" href={props.entry.repo_url}>{props.entry.repo_url}</a>
                    </strong>
                  </li>
                </ul>
                <button type="button" className="btn btn-default" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
