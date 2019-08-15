import React from "react"

class ProjectList extends React.Component {
  render() {
    return (
      <div>
        <h1 className="mb-3">Projects</h1>

        <ProjectCard
          title="GroupMe Duty Bot"
          description="A GroupMe bot that reminds student staff members when
            they're on call"
          link="https://github.com/lbussell/groupme_duty_bot"
        />

        <ProjectCard
          title="Tetris"
          description="A port of the popular puzzle game to the Game Boy Advance"
          link="https://github.com/lbussell/tetris-gba"
        />

        <ProjectCard
          title="Georgia Tech Themed Risk"
          description="A web adaptation of the board game Risk using the Scala
            Play Framework"
        />

        <ProjectCard
          title="Unity Synth"
          description="A simple synthesizer with USB MIDI support written in C#
            with the Unity game engine"
          link="https://github.com/lbussell/UnitySynth"
        />

        <ProjectCard
          title="React Calculator"
          description="A simple phone-style calculator for the web, made as an
            exercise for learning React"
          link="https://lbussell.github.io/react-calculator/"
        />

        <ProjectCard
          title="MenuMod"
          description="An Android app that takes a photo of a restaurant menu
            and tells you what you can and can't eat"
          link="https://github.com/lbussell/MenuMod"
        />

        <span>...and more to come!</span>
      </div>
    )
  }
}

export default ProjectList

const ProjectCard = ({ title, description, link }) => (
  <div className="card mb-3 card-shadow">
    <div className="card-body">
      <h5 className="project">{link ? <a href={link}>{title}</a> : title}</h5>
      <span>{description}</span>
    </div>
  </div>
)
