/* eslint-disable spaced-comment */
/* eslint-disable prefer-destructuring */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-else-return */
/* eslint-disable comma-dangle */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable prettier/prettier */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos } from '../App/actions';
import { changeUsername, changeFileType, changeFileUrl, changeFile, submitFileUrl } from './actions';
import { makeSelectUsername, makeInputFileUrl, makeInputFileType,} from './selectors';
import reducer from './reducer';
import saga from './saga';

function Previewmethod(props){
  console.log('LOOKHERE');
  console.log(props);
  
  const fileURL = props.FileURL;
  const fileType = props.FileType;

  console.log(fileURL);
  console.log(fileType);
  if(fileType.startsWith('image')) {
    return <img src={fileURL} alt="caramel"/>
  } else if (fileType.startsWith('video')){
    return <video controls="controls" src={fileURL}/>
  } else {
    return <img src={null} />
  }
}




/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </CenteredSection>
          <Section>
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
                <FormattedMessage {...messages.trymeMessage} />
                <AtPrefix>
                  <FormattedMessage {...messages.trymeAtPrefix} />
                </AtPrefix>
                <Input
                  id="username"
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                />
              </label>
            </Form>
            <ReposList {...reposListProps} />
          </Section>

          <Section>
            <form method="post" encType="multipart/form-data" onSubmit={this.props.onSubmitFile}>
              <input type="file" id="input" name='IV' accept=".png, .jpg, .jpeg, .mp4, .webm" onChange={this.props.fileInput}/>
              <button type="submit"> Button </button>
            </form>
            <Previewmethod FileType={this.props.FileType} FileURL={this.props.FileURL}></Previewmethod>
          </Section>
        </div>
      </article>
    );
  }
}


HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  FileURL: PropTypes.string,
  FileType: PropTypes.string
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },

    fileInput: event => {
      event.preventDefault();
      const fileUpload = event.target.files[0];
      const fileURL = URL.createObjectURL(fileUpload);
      console.log(fileUpload.type);
      dispatch(changeFileUrl(fileURL));
      dispatch(changeFileType(fileUpload.type));
      dispatch(changeFile(fileUpload));
    },

    onSubmitFile: event => {
      event.preventDefault();
      dispatch(submitFileUrl());
    }
  };
}
//makeInputFileUrl,
//makeInputFileType,
const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  FileURL: makeInputFileUrl(),
  FileType: makeInputFileType()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
