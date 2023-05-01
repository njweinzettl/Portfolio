//google forms API for collecting all contact inquiries
//whole URL for google forms
//https://docs.google.com/forms/d/e/1FAIpQLSfP8FWKBmhKi5CCaQ2UOjO8UthLP9hEwZ4JpcI-IZaKzG7YJg

export const contact = async(request) => {
    const formID ="1FAIpQLSfP8FWKBmhKi5CCaQ2UOjO8UthLP9hEwZ4JpcI-IZaKzG7YJg";
    const name = request.body.get("name");
    const email = request.body.get("email");
    const message = request.body.get("message");
    
    const res = fetch(`https://docs.google.com/forms/d/e/1FAIpQLSfP8FWKBmhKi5CCaQ2UOjO8UthLP9hEwZ4JpcI-IZaKzG7YJg/formResponse?usp=pp_url&entry.927853139=${name}&entry.956718180=${email}&entry.99754670=${message}&submit=Submit`)
    .then(res => server.json())

}