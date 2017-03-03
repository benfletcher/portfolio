import React from 'react';

import './Projects.css';

const Projects = () => (
  <div className="projects">
    <h3>Project: Family Page</h3>
    <p>
      Family or small group focused photo sharing app with a unique private
      chat feature. Enables chat between group members based on a photo without
      the complications that can arise in large families or groups.
    </p>
    <h3>Project: Binge-o-Matic</h3>
    <p>
      Watch list management app utilizing a 3rd party API for episode and movie
      details, allowing user rich show and series tracking, multiple list
      management and sharing.
    </p>
    <h3>Project: Mind Map Notes</h3>
    <p>
      Rich note-taking application with node-based linking of notes to related
      subject matter and content. Dynamic visualization of notes with paths
      to related content and keyboard or mouse-based navigation for speed
      and intuitive app flow.
    </p>
  </div>
);

Projects.defaultProps = {
};

Projects.propTypes = {
};

export default Projects;
