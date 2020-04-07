import React, { Component } from 'react';
import { ProjectContainer } from '@containers';
import BookImage1 from '@components/Images/ProjectDetailsImages/BookImage1';
import BookImage2 from '@components/Images/ProjectDetailsImages/BookImage2';
import FooterImage from '@components/Images/ProjectDetailsImages/FooterImage';

class Project extends Component {

  render() {
    return (
        <ProjectContainer
          TopImage={<BookImage1 />}
          BottomImage={<BookImage2 />}
          ProjectDescription="A mini project which allows one to search the google books api using search parameters such as author, publisher, book name &amp; ISBN code.
          The app is built as a dynamic web project making use of AJAX, Servlets, CSS, HTML, Jquery and Tomcat 9.0 Server."
          isMoreSpaced={'xLarge'}
          FooterImage={
            <FooterImage githubURL="https://github.com/eVocaTiv/BookWorm" />
          }
        />
    );
  }
}

export default Project;
