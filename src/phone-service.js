export default class PhoneService {
  static async getPhone(phone) {
    return fetch(`https://phonevalidation.abstractapi.com/v1/?api_key=${process.env.PHONE_API_KEY}&phone=${phone}`)
      .then(function(response){
        if(!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}