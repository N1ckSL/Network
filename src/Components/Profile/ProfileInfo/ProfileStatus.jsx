import React from "react";
import s from "./ProfileInfo.module.css";
import { Divider } from 'antd';


class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode =  () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
      status: this.props.status
    });
    this.props.updateStatus(this.state.status);
  };

  componentDidUpdate(prevProps,prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  };

  render() {
    return (
      <>
        <div>
          {!this.state.editMode && (
            <div>
              <span onDoubleClick={this.activateEditMode}>
                {this.props.status || "______________"}
              </span>
            </div>
          )}
          {this.state.editMode && (
            <div>
              <input
                onChange={this.onStatusChange}
                autoFocus={true}
                onBlur={this.deactivateEditMode}
                value={this.state.status}
              />
            </div>
          )}
        </div>
        <Divider></Divider>
      </>
    );
  }
}

// <div className={s.description__text}>
//   {props.profile.aboutMe ? (
//     <div className>
//       <h3>{props.profile.aboutMe}</h3>
//     </div>
//   ) : (
//     <div>
//       <h3>
//         I wish there was a way to know you're in the good old days before you've
//         actually left them...
//       </h3>
//     </div>
//   )}
// </div>;

export default ProfileStatus;
