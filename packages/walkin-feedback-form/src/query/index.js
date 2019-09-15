/* eslint-disable no-console */
export const updateResponse = (responseId, feedbackFormId, currentQuestion) => {
    console.log(currentQuestion);
    const text = currentQuestion.responseData ? currentQuestion.responseData : ' ';
    const { response } = currentQuestion;
    const requestBody = {
        query: `
            mutation{
                updateResponse(input:{id:${responseId},responseData:{customerFeedbackId:"${feedbackFormId}",choiceIds:[${response}],userResponse:"${text}"}}){
                    id
                    choiceSelected{
                      toQuestion{
                        id
                        questionText
                        type
                        rangeMin
                        rangeMax
                        choices{
                          id
                          choiceText
                          rangeStart
                          rangeEnd
                        }
                      }
                    }
                  }
            }
            `,
    };
    return requestBody;
};


export const getFeedbackForm = (feedbackFormId) => {
    const requestBody = {
        query: `
                query{
                    customerFeedback(id:"${feedbackFormId}"){
                      completed
                      feedbackForm{
                        id
                        questionnaireRoot{
                          id
                          questionText
                          type
                          rangeMin
                          rangeMax
                          choices{
                            id
                            choiceText
                            rangeStart
                            rangeEnd
                                toQuestion{
                              id
                              questionText
                              choices{
                                id
                                choiceText
                                rangeStart
                                rangeEnd
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                `,
    };
    return requestBody;
};


export const submitResponse = (feedbackFormId, merged, currentQuestion) => {
    console.log(currentQuestion);
    const text = currentQuestion[0].responseData ? currentQuestion[0].responseData : ' ';
    const requestBody = {
        query: `mutation{
        submitResponse(customerFeedbackId:"${feedbackFormId}",choiceIds:[${merged}],input:{responseData:{userResponse:"${text}"}}){
        savedResponses{
                id
            }
          nextQuestions{
            id
            type
            rangeMin
            rangeMax
            questionText
            choices{
              id
              choiceText
              rangeStart
              rangeEnd
              toQuestion{
                id
                questionText
                choices{
                  id
                  choiceText
                  rangeStart
                  rangeEnd
                }
              }
            }
          }
        }
      }`,
    };
    return requestBody;
};
