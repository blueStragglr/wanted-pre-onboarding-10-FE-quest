import {
  FutureTasksContainer,
  ScheduleContainer,
} from "../styles/future-tasks";

export const FutureTasks = () => {
  const tasksData = [
    {
      title: "Planed Schedule",
      subTitle: [
        "Wednesday, October 4th 7pm",
        "Wednesday, October 6th 7pm",
        "Wednesday, October 11th 7pm",
        "Wednesday, October 13th 7pm",
      ],
    },
    {
      title: "Curriculum",
      subTitle: [
        "Learn about the concept of login used in web services and the front-end application structure for applying login",
        "Implement the actual login function using the JWT login function of the deployed server and learn from the perspective of the structure and function of the front-end application.",
        "We will implement the login function by running a session-based login server on a local server and learn about the related details from an infrastructure perspective.",
        "We will take a closer look at login-related concepts that frequently appear in practice and take the time to answer questions that were not answered.",
      ],
    },
  ];
  return (
    <FutureTasksContainer>
      <h3>Front-End Challenge in October</h3>
      <h2>
        Implementing the login function, <br />
        from one to ten!
      </h2>
      {tasksData.map((t, index) => {
        return (
          <ScheduleContainer key={t.title}>
            <p className={"sub-title"}>{t.title}</p>
            {t.subTitle.map((t_, idx) => {
              return (
                <p key={idx}>
                  {t.title.startsWith("P")
                    ? `Section ${idx + 1}`
                    : `Week ${idx < 2 ? 1 : 2}-${idx % 2 != 0 ? 2 : 1}`}
                  : {t_}
                </p>
              );
            })}
          </ScheduleContainer>
        );
      })}
    </FutureTasksContainer>
  );
};
