export const compare = (response, submittedResponse) => {
    if (!response || !submittedResponse) return
    let result;
    response.forEach((a, i) => submittedResponse.forEach(b => {
        if (a !== b) {
            result = false
        } else {
            result = true
        }
    })
    )

    return result

}