import axios from 'axios'

export async function getallemails(){
    const res = await axios('https://flipkart-email-mock.now.sh/');
    return res
}

export async function getpaginatedEmails(pageval){
    const res = await axios(`https://flipkart-email-mock.now.sh/?page=${pageval}`)
    return res
}

export async function getEmailBody(emailid){
    const res = await axios(`https://flipkart-email-mock.now.sh/?id=${emailid}`)
    return res
}