import React, { Component } from 'react'
import Loading from './Loading'
import Repos from "./Repos";

class UserDetails extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login);
        this.props.getUserRepos(this.props.match.params.login);
    }
    render() {
        const {loading, repos} = this.props;
        const {name,avatar_url,location,html_url,bio,blog,followers,following,public_repos} = this.props.user;

        if(loading) return <Loading />

        return (
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img src={avatar_url} className="card-img-top"/>
                            <div className="card-body">
                                <p className="card-text">{ name }</p>
                                <p><i className="fas fa-map-marker-alt"></i> {location}</p>
                                <p>
                                    <a className="btn btn-block btn-primary btn-sm" href={html_url}>Github Profile</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-body">
                                {
                                    bio &&
                                    <>
                                        <h3>About</h3>
                                        <p>{bio}</p>
                                    </>
                                }
                                {
                                    blog &&
                                    <>
                                        <h3>Blog</h3>
                                        <a href={blog}>{blog}</a>
                                    </>
                                }
                                <div className={"my-2"}>

                                    <button type="button" className="btn btn-primary btn-sm">
                                        <span className="badge badge-light m-1 ">Followers: {followers}</span>
                                    </button>

                                    <button type="button" className="btn btn-danger btn-sm mx-2">
                                        <span className="badge badge-light m-1">Following: {following}</span>
                                    </button>

                                    <button type="button" className="btn btn-success btn-sm ">
                                        <span className="badge badge-light m-1">Repos: {public_repos}</span>
                                    </button>

                                </div>
                            </div>
                            <ul className={"list-group list-group-flush"}>
                                <Repos repos={repos} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetails
