
/**
 * 
 *  this method is use to make rest calls to a graphql backend takes in the graphql query and the url to which request needs to be made
 * */
const fetchResponse = async (query, url) => {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(query),
        headers: {
            'Content-Type': 'application/json'

        }
    });
    const { data, errors } = await response.json();
    const responseData = {
        data,
        errors
    }
    return responseData;
};


export default fetchResponse;
