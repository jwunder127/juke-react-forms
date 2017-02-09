import React from 'react';

const NewPlaylist = (props) => {
   const isInvalid = (props.inputValue.length > 16);
   const tooShort = (props.inputValue.length === 0);
   return (
  <div className="well">
    <form className="form-horizontal" onSubmit = {props.handleSubmission}>
      <fieldset>
        <legend>New Playlist</legend>
        <div className="form-group">
          <label className="col-xs-2 control-label">Name</label>
          <div className="col-xs-10">
            {isInvalid ?
              <div className="alert alert-warning">Length is too long!</div> : null}
            {(tooShort && props.hasReceivedInput) ? <div className="alert alert-warning">Length is too short! </div> : null}

            <input
            className="form-control" type="text" onChange = {props.handleEvent}
              value = {props.inputValue}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-10 col-xs-offset-2">
            <button type="submit" className="btn btn-success" disabled= {(isInvalid || tooShort)}>Create Playlist</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
  );
};
export default NewPlaylist;
