export const useDateTime = () => {

  const convertodate = (dates) => {
    let date = new Date(dates);
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear().toString().slice(-2);
    return `${day}/${month}/${year}`
  }

  const convertotime = (dates) => {
    let date = new Date(dates);
    let hours = date.getHours();
    let hours12 = (hours % 12 || 12).toString().padStart(2, '0');
    let ampm = hours < 12 ? 'am' : 'pm';
    let minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours12}:${minutes}${ampm}`
  }

  return { convertodate, convertotime }
}